import { Hono } from "hono";
import recipesWebRouter from "../web/recipes";

export const app = new Hono();

app.route("recipes", recipesWebRouter)


export default app;