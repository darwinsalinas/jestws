import { Recipe as IRecipe } from "../database";
import { Recipe } from "./Recipe";

export const Recipes = ({ recipes }: { recipes: IRecipe[] }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return <Recipe recipe={recipe} />;
      })}
    </>
  );
};
