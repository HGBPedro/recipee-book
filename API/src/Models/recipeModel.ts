import mongoose from 'mongoose'
import recipesSchema from '../Schemas/recipesSchema'

const recipeModel = mongoose.model('Recipe', recipesSchema)

export default recipeModel