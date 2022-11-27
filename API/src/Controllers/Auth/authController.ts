import crypto from 'crypto'
import { NextFunction, Request, Response } from 'express'
import UserBusiness from '../../Businesses/UserBusiness'

async function signUp(req: any, res: Response, next: NextFunction) {
  try {
    const { nome, email, senha, cozinhaProfissionalmente } = req.body
    const salt = crypto.randomBytes(16)

    const user = await UserBusiness.findUser({ email })
    if (user) throw new Error('Usuário já existe!')

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

      return res.status(201).send({ user })
    })

  } catch (error) {
    return res.status(400).send({ error })
  }
}

// async function signIn (req: Request, res: Response, next: NextFunction) {
//   try {
//     const { email, senha } = req.body
//   }
// }

export default { signUp }