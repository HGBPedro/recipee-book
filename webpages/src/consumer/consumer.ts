import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
})

const recipeApi = {
  getRecipe: async (config?: AxiosRequestConfig) => {
    try {
      const response = await api.get('/recipes', config)
      return response
    } catch (err) {
      if (err.name === 'ERR_INTERNET_DISCONNECTED') return 'No internet'
      if (!err.response) return 'No response from API'
      return err.response.data
    }
  }
}

export default recipeApi
