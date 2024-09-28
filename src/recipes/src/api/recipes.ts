import { Hono } from "hono";
import { z } from "zod"
import {
  addRecipe,
  deleteRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
} from "../database";

import { validator } from "../../../validator/validator"
import { updateStatistics } from "./helpers";

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
  const schema = z.object({
    name: z.string().max(10).min(3),
    ingredients: z.array(z.string()).min(1),
    instructions: z.array(z.string()).min(1)
  })


  try {
    const body = await c.req.json()
    const data = schema.parse(body);
    console.log({ data });
  } catch (error) {
    console.log("Error Here::", error);

  }

  const recipe = await c.req.json();

  const { validData, errors } = validator([
    { name: "min:3", ingredients: "min:1" },
  ], [{ name: recipe.name }]);


  if (errors.length) {
    c.status(400)

    updateStatistics(recipe)

    return c.json({
      data: [],
      errors: [
        "name can not be an empty string",
        "ingredients can not be empty",
        "instructions can not be empty",
      ]
    })
  }

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