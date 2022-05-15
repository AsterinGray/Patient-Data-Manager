import { blue, white } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'
import styled from 'styled-components'

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div<{header?: boolean}>`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1.2fr 0.5fr;
  gap: ${spacingS};
  border-bottom: 1px solid ${blue};
  align-items: center;
  font-weight: ${({ header }) => header && 'bold'};
  padding: ${spacingM};
`

export const Title = styled.div`
  text-align: left;
  font-size: 20px;
  margin-bottom: ${spacingM};
`

export const Data = styled.div`
  text-align: left;
  padding: ${spacingS} 0;
  display: grid;
  gap: ${spacingS};
`

export const Text = styled.h1`
  margin: 0;
  font-size: 24px;
  text-align: center;
`

export const Button = styled.div`
  background-color: ${blue};
  padding: ${spacingS} ${spacingM};
  border-radius: ${spacingS};
  text-align: center;
  color: ${white};
  cursor: pointer;
`
