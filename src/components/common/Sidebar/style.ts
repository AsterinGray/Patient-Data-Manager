import { black, white } from '@/styles/colors'
import { spacingS, spacingXXL4 } from '@/styles/spaces'
import styled from 'styled-components'

export const Wrapper = styled.nav<{isVisible: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: sticky;
  left: 0;
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
    
    :hover {
      filter: invert(50%);
    }
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
    position: fixed;
    top: 0;
    left: ${({isVisible}) => isVisible ? 0 : '-180px'};
    transition: all 1s;
    width: 130px;

    a {
      grid-template-columns: 1fr 1.2fr;
    }

    span {
      display: block;
    }
  }
`

export const Menu = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: center;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  font-size: 24px;
  
  @media only screen and (max-width: 576px) {
    z-index: 5;
  }
`

export const Button = styled.div`
  display: grid;
  align-items: center;
  gap: ${spacingS};
  grid-template-columns: 1fr 1.2fr;
  
  :hover {
    cursor: pointer;
    filter: invert(50%);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    span {
      display: none;
    }
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: 1fr 1.2fr;

    span {
      display: block;
    }
  }
`
