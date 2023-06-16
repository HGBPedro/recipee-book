import mongoose, { FilterQuery, PipelineStage, ProjectionType } from 'mongoose'
import { IRecipe } from '../Interfaces/IRecipe'
import RecipeModel from '../Models/recipeModel'

const checkIfObejctIsEmpty = (obj: Object) => Object.keys(obj)?.length > 0 

async function fetchRecipes(filter: FilterQuery<IRecipe>) {
  try {
    const { nome, _id, tempoPreparo, onlyName, limit = 10 } = filter
    const queryFilter: FilterQuery<IRecipe> = {}
    const projection: ProjectionType<IRecipe> = {}
    if (_id) queryFilter._id = new mongoose.Types.ObjectId(_id)
    if (nome) queryFilter.nome = new RegExp(nome, 'i')
    if (tempoPreparo) queryFilter.tempoPreparo = tempoPreparo
    if (onlyName) projection.nome = 1

    const aggregatePipeline: PipelineStage[] = []
    if (checkIfObejctIsEmpty(queryFilter)) aggregatePipeline.push({ $match: queryFilter })
    if (checkIfObejctIsEmpty(projection)) aggregatePipeline.push({ $project: projection })
    aggregatePipeline.push({ $limit: Number(limit) })

    return RecipeModel.aggregate(aggregatePipeline).exec()
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
