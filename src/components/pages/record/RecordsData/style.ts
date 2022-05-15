import { blue, lightBlue, white } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'
import styled from 'styled-components'

export const Section = styled.section``

export const Row = styled.div<{header?: boolean}>`
  display: grid;
  grid-template-columns: 1.5fr 2fr 2fr 2fr 3fr 2fr 0.5fr;
  padding: ${spacingM};
  font-weight: ${({ header }) => header ? 'bold' : 'normal'};
  border-bottom: 1px solid ${blue};
  gap: ${spacingS};
  
  :hover {
    background-color: ${({ header }) => !header && lightBlue};
  }
`

export const Header = styled.div``

export const Button = styled.div`
  background-color: ${blue};
  padding: ${spacingS} ${spacingM};
  border-radius: ${spacingS};
  text-align: center;
  color: ${white};
  cursor: pointer;
`
