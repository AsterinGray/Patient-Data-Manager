import { AppDispatch } from '@/store/index'
import { logout } from '@/store/slices/auth'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import { Button, Wrapper } from './style'

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch()
  const router = useRouter()

  const onLogoutClick = () => {
    dispatch(logout())
    router.replace('/login')
  }

  return (
    <Wrapper>
      <Link href="/">Home</Link>
      <Link href="/patient">Patient</Link>

      <Button onClick={() => onLogoutClick()}>Logout</Button>
    </Wrapper>
  )
}

export default Navbar
