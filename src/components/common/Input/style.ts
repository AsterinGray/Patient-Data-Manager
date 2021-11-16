import styled from 'styled-components'

import { black, blue, darkGrey2, orange } from '@/styles/colors'
import { spacingM, spacingS } from '@/styles/spaces'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: ${spacingS};
`

export const Field = styled.input`
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
