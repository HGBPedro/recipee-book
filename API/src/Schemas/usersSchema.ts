import { Schema } from 'mongoose'
import IUser from '../Interfaces/IUser'

const usersSchema= new Schema<IUser>({
  favoritos: [String],
  nome: String,
  email: String,
  senha: Buffer,
  imagem: Buffer,
  cozinhaProfissionalmente: Boolean,
  salt: Buffer
})

export default usersSchema