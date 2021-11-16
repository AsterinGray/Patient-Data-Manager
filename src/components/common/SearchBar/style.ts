import styled from 'styled-components'

import { blue, pink } from '@/styles/colors'
import { spacingL, spacingS, spacingXXL2, spacingXXL5 } from '@/styles/spaces'

export const Input = styled.input`
  width: 100%;
  padding: ${spacingS} ${spacingL};
  border-radius: ${spacingL};
  margin: ${spacingXXL2} 0 ${spacingXXL5} 0;
  outline: none;
  border: 2px solid ${blue};

  :focus {
    border-color: ${pink};
  }
`
