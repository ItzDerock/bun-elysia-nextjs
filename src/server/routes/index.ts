import Elysia from "elysia";
import { countController } from "./hello-world";

const apiApp = new Elysia({ prefix: "/api" }).use(countController);

export default apiApp;
export type API = typeof apiApp;
