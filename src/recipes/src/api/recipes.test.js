import app from "../router/apiRouter";
import * as db from "../database";

const recipeMock = { name: "Recipe 1" };

const getRecipesResponseMock = {
  data: [recipeMock, recipeMock],
};

const getRecipesSpy = jest
  .spyOn(db, "getRecipes")
  .mockReturnValue([recipeMock, recipeMock]);

it("GET /api/recipes", async () => {
  const res = await app.request("/api/recipes");

  expect(getRecipesSpy).toHaveBeenCalledTimes(1);

  expect(res.status).toBe(200);
  const response = await res.json();

  expect(response).toEqual(getRecipesResponseMock);
  expect(response.data).toHaveLength(2);
});

it("POST /api/recipes", async () => {
  const res = await app.request("/api/recipes", {
    method: "POST",
    body: JSON.stringify(recipeMock),
  });

  expect(res.status).toBe(201);
  expect(await res.json()).toEqual({
    data: recipeMock,
  });
});
