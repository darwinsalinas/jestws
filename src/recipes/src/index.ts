import { serve } from '@hono/node-server'
import { Hono } from "hono";
import apiRouter from "./router/apiRouter";
import webRouter from "./router/webRouter";

export const app = new Hono();

app.route("/", apiRouter);
app.route("/", webRouter);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
})
