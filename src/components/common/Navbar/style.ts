import { black, white } from '@/styles/colors'
import { spacingS, spacingXXL4 } from '@/styles/spaces'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  left: -100px;
  gap: 20px;
  background-color: ${white};
  height: 100vh;
  width: 180px;
  overflow: hidden;
  padding: ${spacingXXL4} 0;

  a {
    color: ${black};
    text-decoration: none;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: ${spacingS};
    align-items: center;
  }
  
  @media only screen and (max-width: 768px) {
    width: 80px;
    
    a {
      grid-template-columns: 1fr;
    }
    
    span {
      display: none;
    }
  }

  @media only screen and (max-width: 576px) {
    left: -100px;
  }
`

export const Button = styled.div`
  display: grid;
  align-items: center;
  gap: ${spacingS};
  grid-template-columns: 1fr 1.2fr;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    span {
      display: none;
    }
`
