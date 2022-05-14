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

  :hover {
    background-color: ${({ head }) => !head && lightBlue};
    cursor: ${({ head }) => !head && 'pointer'};
  }
`

export const Title = styled.div`
  text-align: left;
  font-size: 20px;
`

export const Data = styled.div`
  text-align: left;
  padding: ${spacingS} 0;
  display: grid;
  gap: ${spacingS};
`

export const Button = styled.div`
  background-color: ${blue};
  padding: ${spacingS} ${spacingM};
  border-radius: ${spacingS};
  text-align: center;
  color: ${white};
  cursor: pointer;
`
