export interface IRecipe {
  _id: string
  nome: string
  descricao: string
  tempoPreparo: string
  qtdeFavoritos: number
  ingredientes: Array<string>
  instrucoes: Array<string>
}

export interface IOptions {
  label: string
  value: string
}
