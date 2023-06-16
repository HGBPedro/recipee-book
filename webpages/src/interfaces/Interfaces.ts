import { AxiosResponse } from "axios"

export interface IRecipe {
  _id: string
  nome: string
  descricao: string
  tempoPreparo: number
  qtdeFavoritos: number
  ingredientes: Array<string>
  instrucoes: Array<string>
  urlImagem: string
}

export interface IError {
  name: string
  response: AxiosResponse 
}

export interface IOptions {
  label: string
  value: string
}
