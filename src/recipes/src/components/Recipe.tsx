import { Recipe as IRecipe } from "../database";

export const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <ol>
        {recipe.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};
