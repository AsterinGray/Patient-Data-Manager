import { spacingM, spacingXL, spacingXXL3 } from '@/styles/spaces'
import styled from 'styled-components'

export const Header = styled.h1`
  margin: 0 0 ${spacingXL} 0;
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 4fr;
  gap: ${spacingM};
  margin-bottom: ${spacingXXL3};
`

export const Info = styled.div`
  font-weight: bold;
`

export const Text = styled.div``
