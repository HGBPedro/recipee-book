interface IUser {
  favoritos: Array<string>
  nome: string
  email: string
  senha: string
  imagem: string
  cozinhaProfissionalmente: boolean
  salt: string
}

export default IUser