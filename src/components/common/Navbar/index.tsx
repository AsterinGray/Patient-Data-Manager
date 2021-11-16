import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/store/index'
import { setToken } from '@/store/slices/loginSlice'

import { Button, Wrapper } from './style'

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch()
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('pdmAuthToken')
    dispatch(setToken(''))
    router.replace('/login')
  }

  return (
    <Wrapper>
      <Link href="/">Home</Link>
      <Link href="/patient">Patient</Link>

      <Button onClick={() => logout()}>Logout</Button>
    </Wrapper>
  )
}

export default Navbar
