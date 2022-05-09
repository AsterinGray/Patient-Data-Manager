import { AppState } from '@/store/index'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const withAuth = (Component: NextPage) => {
  const HOC = (props: any) => {
    const {
      isAuthenticate,
      isLoading
    } = useSelector((state: AppState) => state.auth)
    const router = useRouter()

    useEffect(() => {
      if(!isLoading && !isAuthenticate) {
        router.push('/login')
      }
    }, [isAuthenticate, isLoading, router])

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
