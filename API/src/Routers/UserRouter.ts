import express, { NextFunction, Request, Response } from 'express'
import authController from '../Controllers/Auth/authController'
import multer from 'multer'
import passport from '../Controllers/Auth/Middlewares/localStrategy'

const router = express.Router()
const upload = multer({})

router.post('/signup', upload.single('imagem'), authController.signUp)
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  return res.send({req})
})

export default router