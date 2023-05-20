export interface IRecipe {
  nome: string
  descricao: string
  tempoPreparo: string
  qtdeFavoritos: number
  ingredientes: Array<string>
  instrucoes: Array<string>
}
