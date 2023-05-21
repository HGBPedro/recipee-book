import express from 'express'
import recipeController from '../Controllers/Recipes/recipeController'

const router = express.Router()

router.get('/', recipeController.getRecipe),
router.post('/create', recipeController.createRecipe)

export default router
