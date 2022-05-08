import { getToken } from '@/utils/index'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const withAuth = (Component: NextPage) => {
  const HOC = (props: any) => {
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
      const accessToken = getToken()
      if (!accessToken) {
        localStorage.removeItem('pdmAuthToken')
        if (typeof window !== undefined) window.location.href = '/login'
      } else {
        setIsValid(true)
      }
    }, [])

    const renderComponent = () => {
      if (isValid) {
        return <Component {...props} />
      } else {
        return null
      }
    }

    return renderComponent()
  }

  return HOC
}

export default withAuth
