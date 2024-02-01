export interface IUser {
  nome: string
  sobrenome: string
  avatar: string
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
  id?: string
  title: string
  tags: string[]
  link: string
  imagem: string
  description: string
}

export interface IRegister {
  name: string
  surname: string
  email: string
  password: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IResponseGoogle {
  sub: string
  email: string
  family_name: string
  given_name: string
  picture: string
}

export interface IRequestLoginSocial {
  sub: string
  email: string
  family_name: string
  given_name: string
  avatar: string
}

export interface IResponseLogin {
  given_name: string
  family_name: string
  avatar: string
  token: string
}
