import Navbar from '@/common/Navbar'
import Sidebar from '@/common/Sidebar'
import { LayoutProps } from '@/types/components'
import React from 'react'

import { Container, Content, Wrapper } from './style'

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Wrapper>
    <Sidebar/>
    <Content>
      <Navbar />
      <Container>{children}</Container>
    </Content>
  </Wrapper>
)

export default Layout
