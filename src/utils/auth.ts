import api from '@/config/api'
import { TOKEN_NAME } from '@/config/main'

export const initAuthentication = () => {
  const token = _getCookie(TOKEN_NAME)
  if (token) _setHeader(`Bearer ${token}`)

  return { isAuthenticate: Boolean(token) }
}

export const setAuthentication = (token?: string) => {
  if (token) {
    _setHeader(`Bearer ${token}`)
    document.cookie = `${TOKEN_NAME}=${token}`
  }
}

export const removeAuthentication = () => {
  _setHeader('')
}

const _setHeader = (token: string) => {
  api.defaults.headers.common.Authorization = token
}

const _getCookie = (cookieName?: string) => {
  const cookies = document.cookie.split(';')
  const cookies_length = cookies.length

  for (let i = 0; i < cookies_length; i++) {
    const current_cookie = cookies[i].split('=')
    if (current_cookie[0].replace(' ', '') === cookieName)
      return current_cookie[1]
  }
}