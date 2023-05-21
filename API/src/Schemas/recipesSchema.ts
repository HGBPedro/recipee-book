import { Schema } from 'mongoose'
import { IRecipe } from '../Interfaces/IRecipe'

const recipesSchema = new Schema<IRecipe>({
  nome: String,
  descricao: String,
  tempoPreparo: String,
  qtdeFavoritos: Number,
  ingredientes: [String],
  instrucoes: [String],
})

export default recipesSchema
