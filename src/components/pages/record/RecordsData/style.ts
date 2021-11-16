import styled from 'styled-components'

import { blue, white } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'

export const Section = styled.section``

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 3fr 1fr;
  padding: ${spacingM};
  font-weight: bold;
  border-bottom: 1px solid ${blue};
`

export const Data = styled.div``

export const Button = styled.div`
  background-color: ${blue};
  padding: ${spacingS} ${spacingM};
  border-radius: ${spacingS};
  text-align: center;
  color: ${white};
  cursor: pointer;
`
