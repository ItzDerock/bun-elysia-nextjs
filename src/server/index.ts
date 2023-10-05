import Elysia from "elysia";
import { initialize } from "next/dist/server/lib/router-server";
import { IncomingMessage, ServerResponse } from "http";
import api from "./routes";

// Initialize the server
const app = new Elysia().use(api);
export type API = typeof app;

// Initialize the next server
const [handle, handleUpgrade] = await initialize({
  dev: process.env.NODE_ENV !== "production",
  port: parseInt(process.env.PORT ?? "3000"),
  dir: process.cwd(),
  isNodeDebugging: process.env.NODE_DEBUG === "true",
  customServer: true,
});

// required globals for translating Bun API to Node
const EMPTY_BUFFER = Buffer.alloc(0);
const INTERNAL_SOCKET_DATA = Symbol.for("::bunternal::");

/**
 * Handles Next.JS routes
 */
const handleBun = (req: Request) => {
  return new Promise<Response | void>((resolve) => {
    // Convert to a Node request
    // @ts-ignore
    const http_req = new IncomingMessage(req);
    const http_res = new ServerResponse({
      // @ts-ignore
      reply: resolve,
      req: http_req,
    });

    // fix websocket support
    // @ts-ignore
    http_req.socket[INTERNAL_SOCKET_DATA] = [app.server, http_res, req];

    // check if it's an upgrade request
    if (req.headers.get("upgrade")) {
      handleUpgrade(http_req, http_req.socket, EMPTY_BUFFER);
      return;
    }

    // render the page
    handle(http_req, http_res);
  });
};

app.onRequest(async (ctx) => {
  const path = new URL(ctx.request.url);
  if (path.pathname.startsWith("/api")) return;
  return await handleBun(ctx.request);
});

// start the server
app.listen(
  {
    port: parseInt(process.env.PORT ?? "3000"),
    hostname: process.env.HOSTNAME ?? "0.0.0.0",
  },
  (data) => {
    console.log(`Server started on http://${data.hostname}:${data.port}`);
  }
);
