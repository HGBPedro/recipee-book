import express from 'express'
import recipeController from '../Controllers/Recipes/recipeController'
import multer from 'multer'

const router = express.Router()
const upload = multer()

router.get('/', recipeController.getRecipe),
router.post('/create', upload.single('imagem'), recipeController.createRecipe)

export default router
