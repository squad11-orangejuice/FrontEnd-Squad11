import { convertBase64ToBlob } from '@/functions/covertStringInBlob'
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
  const formData = new FormData()

  const a = convertBase64ToBlob(imagem)
  formData.append('titulo', title)
  formData.append('link', link)
  formData.append('descricao', description)

  formData.append('imagem', a)

  tags.forEach((tag, index) => {
    formData.append(`tags[${index}]`, tag)
  })

  return (
    await axiosInstance.post('/projeto/novo', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  ).data
}

export async function updateProjects({
  imagem,
  link,
  tags,
  title,
  description,
  id,
}: IRequestData) {
  const formData = new FormData()

  const a = convertBase64ToBlob(imagem)
  formData.append('titulo', title)
  formData.append('link', link)
  formData.append('descricao', description)

  formData.append('imagem', a)

  tags.forEach((tag, index) => {
    formData.append(`tags[${index}]`, tag)
  })

  return (
    await axiosInstance.put(`/projeto/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  ).data
}
