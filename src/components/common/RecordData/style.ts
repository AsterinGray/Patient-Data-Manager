import styled from 'styled-components'

import { blue, mediumPink, white } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 3fr 1fr;
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
`

export const Button = styled.div<{ altBg?: boolean }>`
  background-color: ${({ altBg }) => (altBg ? mediumPink : blue)};
  padding: ${spacingS} ${spacingM};
  border-radius: ${spacingS};
  text-align: center;
  color: ${white};
  cursor: pointer;
  z-index: 2;
`
