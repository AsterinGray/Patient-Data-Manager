import styled from 'styled-components'

import { lightGrey, pink, white } from '@/styles/colors'
import { spacingM } from '@/styles/spaces'

export const Form = styled.form`
  display: grid;
  gap: ${spacingM};
`

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${pink};
  color: ${white};
  padding: 0.5rem 3rem;
  border-radius: 8px;

  :disabled {
    background-color: ${lightGrey};
    cursor: default;
  }
`
