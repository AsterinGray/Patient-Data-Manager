import styled from 'styled-components'

import { blue, mediumPink, white } from '@/styles/colors'
import { spacingXXL6 } from '@/styles/spaces'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1rem ${spacingXXL6};
  background-color: ${blue};

  a {
    color: ${white};
    text-decoration: none;
  }
`

export const Button = styled.div`
  cursor: pointer;
  padding: 0.3rem 2rem;
  border-radius: 16px;
  color: ${white};
  background-color: ${mediumPink};
  margin-left: auto;
`
