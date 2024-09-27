import { Hono } from "hono";
import recipesApiRouter from "../api/recipes";

export const app = new Hono();

app.route("/api/recipes", recipesApiRouter)

export default app;