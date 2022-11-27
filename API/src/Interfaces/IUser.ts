import { Types, Document } from "mongoose"

interface IUser {
  _id?: Types.ObjectId
  favoritos: Array<string>
  nome: string
  email: string
  senha: Buffer
  imagem: Buffer
  cozinhaProfissionalmente: boolean
  salt: Buffer
}

export default IUser