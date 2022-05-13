import Sidebar from '@/common/Sidebar'
import { LayoutProps } from '@/types/components'
import Head from 'next/head'
import React from 'react'

import { Container, Wrapper } from './style'

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Patient Data Manager</title>
    </Head>
    <Wrapper>
      <Sidebar/>
      <Container>{children}</Container>
    </Wrapper>
  </>
)

export default Layout
