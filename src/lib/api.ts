import { edenTreaty } from "@elysiajs/eden";
import type { API } from "../server/index";

export const api = edenTreaty<API>(
  typeof window === "undefined"
    ? `http://localhost:${process.env.PORT ?? 3000}`
    : window.location.origin
);
