import Head from 'next/head'

import Navbar from '@/common/Navbar'

import { Container } from './style'

const Layout: React.FC<any> = ({ children, title }) => (
  <>
    <Head>
      <title>Patient Data Manager</title>
    </Head>
    <Navbar />
    <Container>{children}</Container>
  </>
)

export default Layout
