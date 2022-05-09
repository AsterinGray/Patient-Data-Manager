import { AppState } from '@/store/index'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const withAuth = (Component: NextPage) => {
  const HOC = (props: any) => {
    const { isAuthenticate } = useSelector((state: AppState) => state.auth)
    const router = useRouter()

    useEffect(() => {
      alert('push to login page')
      if(!isAuthenticate) router.push('/login')
    }, [])

    const renderComponent = () => {
      if (isAuthenticate) {
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
