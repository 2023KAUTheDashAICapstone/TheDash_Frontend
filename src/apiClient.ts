import axios, { Method } from 'axios'

const ServerURL = '211.245.51.165:15000'

export const apiClient = axios.create({
  baseURL: ServerURL,
})

export const customApiClient = async (method: Method, url: string, data?: any) => {
  try {
    const result = await apiClient(url, {
      method: method,
      data: data,
    })

    return result.data
  } catch (err: any) {
    console.log(err.response)
    console.log(err.message)

    if (!err.response) {
      return 'Network Error'
    }

    return null
  }
}
