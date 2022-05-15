import { blue, mediumPink } from '@/styles/colors'
import { spacingS } from '@/styles/spaces'
import styled from 'styled-components'

export const Data = styled.div<{ pointer?: boolean }>`
  text-align: left;
  padding: ${spacingS} 0;
  display: grid;
  gap: ${spacingS};
  white-space: pre-line;
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
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
