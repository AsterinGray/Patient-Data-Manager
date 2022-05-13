import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { Button, Wrapper } from './style'

const Navbar = () => {
  const router = useRouter()

  return (
    <Wrapper>
      <Button onClick={() => router.back()}>
        <Image
          src={'/images/back.svg'}
          width={25}
          height={25}
          alt={'Back icon'}
        />
      </Button>
    </Wrapper>
  )
}

export default Navbar