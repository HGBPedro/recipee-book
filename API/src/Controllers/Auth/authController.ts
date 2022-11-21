import crypto from 'crypto'
import { NextFunction, Request, Response } from 'express'
import UserBusiness from '../../Businesses/UserBusiness'

async function signUp(req: any, res: Response, next: NextFunction) {
  try {
    const { nome, email, senha, cozinhaProfissionalmente } = req.body
    const salt = crypto.randomBytes(16)

    crypto.pbkdf2(senha, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
      if (err) throw (err)
      if (!req.file) throw new Error('Imagem não encontrada')

      const user = UserBusiness.createUser({
        nome,
        email,
        senha: hashedPassword,
        imagem: req.file.buffer,
        cozinhaProfissionalmente,
        favoritos: [],
        salt
      })

      res.status(201).send({ user })
    })

  } catch (err) {
    res.status(400).send({ error: err })
  }
}

export default { signUp }