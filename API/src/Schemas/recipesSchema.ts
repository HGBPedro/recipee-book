import { Schema } from 'mongoose'
import { IRecipe } from '../Interfaces/IRecipe'

const recipesSchema = new Schema<IRecipe>({
  nome: String,
  descricao: String,
  tempoPreparo: Number,
  qtdeFavoritos: Number,
  ingredientes: [String],
  instrucoes: [String],
  urlImagem: String
})

export default recipesSchema
