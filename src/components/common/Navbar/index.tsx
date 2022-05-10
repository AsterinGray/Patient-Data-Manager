import { AppDispatch } from '@/store/index'
import { logout } from '@/store/slices/auth'
import { useRouter } from 'next/dist/client/router'

import Image from 'next/image'
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
      <Link href="/">
        <a>
          <Image
            src={'/images/home.svg'}
            width={25}
            height={25}
            alt={'Home icon'}
          />
          <span>Home</span>
        </a>
      </Link>
      <Link href="/patient">
        <a>
          <Image
            src={'/images/people.svg'}
            width={25}
            height={25}
            alt={'Patient icon'}
          />
          <span>Patient</span>
        </a>
      </Link>
      <Button onClick={() => onLogoutClick()}>
        <Image
          src={'/images/logout.svg'}
          width={25}
          height={25}
          alt={'Patient icon'}
        />
        <span>Logout</span>
      </Button>
    </Wrapper>
  )
}

export default Navbar
