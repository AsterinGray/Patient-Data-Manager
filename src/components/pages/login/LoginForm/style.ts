import {
  background,
  black,
  blue,
  darkGrey2,
  lightGrey,
  orange,
  pink,
  white,
} from '@/styles/colors'
import { spacingM, spacingS, spacingXL, spacingXXL1 } from '@/styles/spaces'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  
  
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacingXL};
  background-color: ${white};
  padding: ${spacingXXL1} ${spacingXL};
  border-radius: 8px;
  
  @media only screen and (max-width: 468px) {
    background-color: ${background};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  position: absolute;
  bottom: -1.2rem;
`

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${pink};
  color: ${white};
  padding: 0.5rem 3rem;
  margin-top: 1rem;
  border-radius: 8px;

  :disabled {
    background-color: ${lightGrey};
    cursor: default;
  }
`
