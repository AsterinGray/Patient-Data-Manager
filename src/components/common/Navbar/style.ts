import { white } from '@/styles/colors'
import { spacingS, spacingXXL4 } from '@/styles/spaces'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 100%;
  background-color: ${white};
  padding: ${spacingS} ${spacingXXL4};
  display: flex;
  align-items: center;
`

export const Button = styled.span`
  cursor: pointer;
`