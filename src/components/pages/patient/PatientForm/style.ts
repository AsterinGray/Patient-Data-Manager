import styled from 'styled-components'

import { black, blue, darkGrey2, lightGrey, pink, white } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'

export const Form = styled.form`
  display: grid;
  gap: ${spacingM};
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: ${spacingS};
`

export const Select = styled.select`
  padding: ${spacingS} ${spacingM};
  border: 1px solid ${darkGrey2};
  border-radius: 8px;
  outline: none;
  color: ${black};
  width: 100%;

  :focus {
    border: 1px solid ${blue};
  }
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
