import { spacingL, spacingXXL2, spacingXXL4 } from '@/styles/spaces'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const Container = styled.main`
  padding: ${spacingXXL4} ${spacingXXL2};
  width: 100%;
  
  @media only screen and (max-width: 768px) {
    padding: ${spacingXXL4} ${spacingL};
  }
`
