export interface IRecipe {
  nome: string
  descricao: string
  tempoPreparo: number
  qtdeFavoritos: number
  ingredientes: Array<string>
  instrucoes: Array<string>
  urlImagem: string
}

export interface IRecipeForm {
  nome: string
  descricao: string
  tempoPreparo: number
  qtdeFavoritos: number
  ingredientes: Array<string>
  instrucoes: Array<string>
  imagem: File
}
