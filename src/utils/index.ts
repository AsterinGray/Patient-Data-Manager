export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('pdmAuthToken')
  }
}

export const getCurrentDate = () => {
  const now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}
