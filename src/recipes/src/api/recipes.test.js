import app from "../router/apiRouter";
import * as db from "../database";
import * as helpers from "./helpers";

/**
 * AAA
 * A: Arrange(mocks, spies, insert data in data base)
 * A: Act(make code execute)
 * A: Assert
 */
const recipeMock = { name: "Recipe 1", ingredients: [], instructions: [] };

const getRecipesResponseMock = {
  data: [recipeMock, recipeMock],
};

const getRecipesSpy = jest
  .spyOn(db, "getRecipes")
  .mockReturnValue([recipeMock, recipeMock]);

const updateStatisticsSpy = jest.spyOn(helpers, "updateStatistics");

it("GET /api/recipes", async () => {
  const res = await app.request("/api/recipes");
  // If `getRecipesSpy` is a method from the ORM or Query builder, we maybe don't want to test it
  // expect(getRecipesSpy).toHaveBeenCalledTimes(1);

  expect(res.status).toBe(200);
  const response = await res.json();

  expect(response).toEqual(getRecipesResponseMock);
  expect(response.data).toHaveLength(2);
  response.data.map((recipe) => {
    expect(recipe).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        ingredients: [],
        instructions: [],
      })
    );
  });
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

it.only("POST /api/recipes with invalid data", async () => {
  const invalidData = { ...recipeMock, name: "as" };
  const res = await app.request("/api/recipes", {
    method: "POST",
    body: JSON.stringify(invalidData),
  });

  expect(updateStatisticsSpy).toHaveBeenCalledWith(invalidData);

  expect(res.status).toBe(400);
  expect(await res.json()).toEqual({
    data: [],
    errors: [
      "name can not be an empty string",
      "ingredients can not be empty",
      "instructions can not be empty",
    ],
  });
});

/**
 * 2xx OK
 * 4xx User Error
 * 5XX Server Error(our error)
 */
