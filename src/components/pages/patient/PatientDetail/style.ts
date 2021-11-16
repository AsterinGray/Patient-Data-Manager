import styled from 'styled-components'

import { spacingM, spacingXXL3 } from '@/styles/spaces'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 4fr;
  gap: ${spacingM};
  margin: ${spacingXXL3} 0;
`

export const Info = styled.div`
  font-weight: bold;
`

export const Text = styled.div``
