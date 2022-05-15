import { white } from '@/styles/colors'
import { spacingS, spacingXXL2, spacingXXL4 } from '@/styles/spaces'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 100%;
  background-color: ${white};
  padding: ${spacingS} ${spacingXXL4};
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    padding: ${spacingS} ${spacingXXL2};
  }
  
  @media only screen and (max-width: 576px) {
    padding: ${spacingS};
  }
`

export const Button = styled.span`
  cursor: pointer;
`