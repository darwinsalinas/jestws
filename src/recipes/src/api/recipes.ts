import { Hono } from "hono";
import {
  addRecipe,
  deleteRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
} from "../database";

// import { validator } from "../../../validator/validator"

const app = new Hono();

app.get(":id", (c) => {
  const id = parseInt(c.req.param("id"));
  const recipe = getRecipe(id);
  if (!recipe) {
    return c.json(
      {
        error: "Recipe not found",
      },
      404
    );
  }

  return c.json({
    data: recipe,
  });
});

app.get("/", (c) => {
  return c.json({
    data: getRecipes(),
  });
});

app.post("/", async (c) => {
  const recipe = await c.req.json();

  // const { validData, errors } = validator([
  //   { name: "min:100" },
  // ], [{ name: recipe.name }]);

  // console.log({ validData, errors });

  addRecipe(recipe);

  c.status(201);

  return c.json({
    data: recipe,
  });
});

app.put(":id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const recipe = await c.req.json();

  updateRecipe(id, recipe);

  return c.json({
    data: recipe,
  });
});

app.delete(":id", (c) => {
  const id = parseInt(c.req.param("id"));
  deleteRecipe(id);

  c.status(204);

  return c.json({
    data: null,
  });
});


export default app;