import { blue, pink } from '@/styles/colors'
import { spacingL, spacingS, spacingXXL5 } from '@/styles/spaces'
import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: ${spacingS} ${spacingL};
  border-radius: ${spacingL};
  margin: 0 0 ${spacingXXL5} 0;
  outline: none;
  border: 2px solid ${blue};

  :focus {
    border-color: ${pink};
  }
`
