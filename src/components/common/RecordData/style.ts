import { blue, mediumPink, white } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'
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
  padding: ${spacingS} ${spacingM};
  border-radius: ${spacingS};
  text-align: center;
  color: ${white};
  cursor: pointer;
  z-index: 2;
`
