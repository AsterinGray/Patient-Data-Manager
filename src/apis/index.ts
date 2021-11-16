import axios from 'axios'

const api = axios.create({
  baseURL: `http://${process.env.DOMAIN_URL}/api/`,
})

export default api
