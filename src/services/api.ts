import { IProject, IRequestData } from '@/utils/types'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
})
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2NjU2NjcyfQ.7frmydswctjaKyYamt7iZiN9vK4u4q1KE9RhLk1tVhQ'

export async function getAllProjects() {
  return (
    await axiosInstance.get<IProject[]>('/portfolio', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data
}

export async function addProjects({
  imagem,
  link,
  tags,
  title,
  description,
}: IRequestData) {
  return (
    await axiosInstance.post(
      '/projeto/novo',
      {
        titulo: title,
        link,
        descricao: description,
        imagem,
        tags,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
  ).data
}
