import Sidebar from '@/common/Sidebar'
import { LayoutProps } from '@/types/components'
import React from 'react'

import { Container, Wrapper } from './style'

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Wrapper>
    <Sidebar/>
    <Container>{children}</Container>
  </Wrapper>
)

export default Layout
