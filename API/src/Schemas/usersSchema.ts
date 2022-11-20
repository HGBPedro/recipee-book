import { Schema } from 'mongoose'

const usersSchema= new Schema({
  favoritos: [String],
  nome: String,
  email: String,
  senha: String,
  imagem: String,
  cozinhaProfissionalmente: Boolean
})

export default usersSchema