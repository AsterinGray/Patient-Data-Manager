import Navbar from '@/common/Navbar'
import { LayoutProps } from '@/types/components'
import Head from 'next/head'
import React from 'react'

import { Container } from './style'

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>Patient Data Manager</title>
    </Head>
    <Navbar />
    <Container>{children}</Container>
  </>
)

export default Layout
