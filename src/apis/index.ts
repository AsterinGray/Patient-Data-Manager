import axios from 'axios'

const api = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_URL}/api/`,
})

export default api
