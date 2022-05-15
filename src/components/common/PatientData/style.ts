import { blue, mediumPink } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'
import styled from 'styled-components'

export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr 1fr 0.5fr;
  border-bottom: 1px solid ${blue};
  align-items: center;
  padding: ${spacingM};

  :hover {
    background-color: lightBlue;
  }
`

export const Data = styled.div<{ pointer?: boolean }>`
  text-align: left;
  padding: ${spacingS} 0;
  display: grid;
  gap: ${spacingS};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
  align-items: center;
`

export const Button = styled.div<{ altBg?: boolean }>`
  background-color: ${({ altBg }) => (altBg ? mediumPink : blue)};
  padding: ${spacingS} 0;
  border-radius: ${spacingS};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    filter: invert(100);
  }
`
