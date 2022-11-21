import express from 'express'
import authController from '../Controllers/Auth/authController'
import multer from 'multer'

const router = express.Router()
const upload = multer({})

router.post('/signup', upload.single('imagem'), authController.signUp)

export default router