import axios from 'axios'

export const apiOrange = axios.create({
  baseURL: 'http://localhost:3000',
})
