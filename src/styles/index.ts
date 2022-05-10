import { background } from '@/styles/colors'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyleComponent: any = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${background};
  }

  * {
    font-family: Poppins;
    box-sizing: border-box;
  }
`
