import { blue, lightBlue, white } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'
import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  
  > h1 {
    margin: 0;
  }
`

export const Row = styled.div<{ head?: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacingS};
  border-bottom: 1px solid ${blue};
  align-items: center;
  font-weight: ${({ head }) => (head ? 'bold' : 'normal')};
  padding: ${spacingM};
  white-space: pre-line;

  :hover {
    background-color: ${({ head }) => !head && lightBlue};
    cursor: ${({ head }) => !head && 'pointer'};
  }
  
  @media only screen and (max-width: 576px) {
    font-size: 12px;
    padding: ${spacingS};
  }
`

export const Title = styled.div`
  text-align: left;
  font-size: 20px;
  
  @media only screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const Button = styled.div`
  background-color: ${blue};
  padding: ${spacingS} ${spacingM};
  border-radius: ${spacingS};
  text-align: center;
  color: ${white};
  cursor: pointer;
`
