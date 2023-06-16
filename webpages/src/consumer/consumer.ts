import { IError } from '@/interfaces/Interfaces'
import axios, { Axios, AxiosError, AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
})

const recipeApi = {
  getRecipe: async (config?: AxiosRequestConfig) => {
    try {
      const response = await api.get('/recipes', config)
      return response
    } catch (err: any) {
      const error: IError = err
      if (error.name === 'ERR_INTERNET_DISCONNECTED') return 'No internet'
      if (!error.response) return 'No response from API'
      return error.response.data
    }
  }
}

export default recipeApi
