export interface IUser {
  nome: string
  sobrenome: string
}

export interface ITag {
  nome: string
}

export interface IProject {
  id?: string
  titulo: string
  link: string
  descricao: string
  imagem: string
  data?: string
  user: IUser
  tags: ITag[]
}

export interface IRequestData {
  title: string
  tags: string[]
  link: string
  imagem: string
  description: string
}
