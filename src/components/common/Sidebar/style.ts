import { black, white } from '@/styles/colors'
import { spacingS, spacingXXL1, spacingXXL5 } from '@/styles/spaces'
import styled from 'styled-components'

export const Wrapper = styled.aside<{isVisible: boolean}>`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  overflow: hidden;
  transition: all 1s;
  height: 100vh;
  
  @media only screen and (max-width: 768px) {
    position: fixed;
    left: ${({ isVisible }) => isVisible ? 0 : '-80px'};
  }
  
  @media only screen and (max-width: 576px) {
    top: 0;
    left: ${({ isVisible }) => isVisible ? 0 : '-130px'};
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${white};
  height: 100vh;
  width: 180px;
  padding: ${spacingXXL5} ${spacingS};
  gap: ${spacingXXL1};
  
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
    width: 130px;
    
    a {
      grid-template-columns: 1fr 1.2fr;
    }

    span {
      display: block;
    }
  }
`

export const Menu = styled.div<{ isVisible:boolean }>`
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  height: 60px;
  display: none;
  
  @media only screen and (max-width: 768px) {
    display: flex;
  }
  
  &::after {
    content: ' ';
    display: flex;
    align-items: center;
    position: fixed;
    height: 60px;
    border-left: 20px solid ${white};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  
  &::before {
    z-index: 3;
    position: fixed;
    padding: 3px;
  }
  
  ${({ isVisible }) => isVisible ? `
    &::before {
      content: '<';
    }
  ` : `
    &::before {
      content: '>';
    }
  `}
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
