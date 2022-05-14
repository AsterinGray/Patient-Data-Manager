import { spacingL, spacingXXL2 } from '@/styles/spaces'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Container = styled.main`
  padding: ${spacingXXL2};

  @media only screen and (max-width: 768px) {
    padding: ${spacingXXL2} ${spacingL};
  }
`
