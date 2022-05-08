import axios from 'axios'

const api = axios.create({
	baseURL: `https://${process.env.NEXT_PUBLIC_URL}/api/`,
})

export default api
