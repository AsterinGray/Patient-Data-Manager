import styled from 'styled-components'

import {
  black,
  blue,
  darkGrey2,
  lightGrey,
  orange,
  pink,
  white,
} from '@/styles/colors'
import { spacingM, spacingXL, spacingS, spacingXXL5 } from '@/styles/spaces'

export const Form = styled.form`
  padding: ${spacingXXL5};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: ${spacingXL};
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: ${spacingS};
`

export const Input = styled.input`
  padding: ${spacingS} ${spacingM};
  border: 1px solid ${darkGrey2};
  border-radius: 8px;
  outline: none;
  color: ${black};

  :focus {
    border: 1px solid ${blue};
  }
`

export const Error = styled.p`
  margin: 0;
  color: ${orange};
  font-size: 12px;
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
