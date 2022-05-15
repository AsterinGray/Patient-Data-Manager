import { spacingM, spacingXL, spacingXXL3 } from '@/styles/spaces'
import styled from 'styled-components'

export const Header = styled.h1`
  font-size: 24px;
  margin: 0 0 ${spacingXL} 0;

  @media only screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 4fr;
  gap: ${spacingM};
  margin-bottom: ${spacingXXL3};

  @media only screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const Info = styled.div`
  font-weight: bold;
`

export const Text = styled.div``
