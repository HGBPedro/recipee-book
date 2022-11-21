import { Schema } from 'mongoose'

const usersSchema= new Schema({
  favoritos: [String],
  nome: String,
  email: String,
  senha: Buffer,
  imagem: Buffer,
  cozinhaProfissionalmente: Boolean,
  salt: Buffer
})

export default usersSchema