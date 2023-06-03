import { FilterQuery, ProjectionType } from 'mongoose'
import { IRecipe } from '../Interfaces/IRecipe'
import RecipeModel from '../Models/recipeModel'

async function fetchRecipes(filter: FilterQuery<IRecipe>) {
  try {
    const { nome, _id, tempoPreparo, onlyName } = filter
    const queryFilter: FilterQuery<IRecipe> = {}
    const projection: ProjectionType<IRecipe> = {}
    if (_id) queryFilter._id = _id
    if (nome) queryFilter.nome = new RegExp(nome, 'i')
    if (tempoPreparo) queryFilter.tempoPreparo = tempoPreparo
    if (onlyName) projection.nome = 1
    
    return RecipeModel.find(queryFilter)
  } catch (err) {
    return err
  }
}

async function createRecipe(recipe: IRecipe) {
  try {
    await RecipeModel.create(recipe, (error: any, recipe: IRecipe) => {
      if (error) throw error

      return recipe
    })
  } catch (err) {
    throw err
  }
}

async function wipeDatabase () {
  try {
    await RecipeModel.deleteMany({})
  } catch (err) {
    throw err
  }
}

export default { fetchRecipes, createRecipe, wipeDatabase }
