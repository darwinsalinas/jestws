import { Hono } from "hono";
import { getRecipes } from "../database";
import { Recipes } from "../components/Recipes";
export const app = new Hono();

app.get("/", (c) => {
  const recipes = getRecipes();

  return c.html(<Recipes recipes={recipes} />);
});

export default app;
