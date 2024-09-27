
export interface Recipe {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
}

const recipes: Recipe[] = []


export const getRecipe = (id: number) => {
    return recipes.find((recipe) => recipe.id === id)
}

export const getRecipes = () => {
    return recipes
}

export const addRecipe = (recipe: Recipe) => {
    recipes.push(recipe)
}

export const updateRecipe = (id: number, recipe: Recipe) => {
    const index = recipes.findIndex((recipe) => recipe.id === id)
    recipes[index] = recipe
}

export const deleteRecipe = (id: number) => {
    const index = recipes.findIndex((recipe) => recipe.id === id)
    recipes.splice(index, 1)
}

