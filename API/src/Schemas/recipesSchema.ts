import { Schema } from 'mongoose'

const recipesSchema = new Schema({
  nome: String,
  tempoPreparo: String,
  qtdeFavoritos: Number,
  ingredientes: [String],
  instrucoes: [String],
  comentarios: [{
    autor: String,
    data: { type: Date, default: Date.now },
    comentario: String
  }]
})

export default recipesSchema