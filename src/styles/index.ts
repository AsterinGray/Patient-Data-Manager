import { createGlobalStyle } from 'styled-components'

export const GlobalStyleComponent = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: Poppins;
    box-sizing: border-box;
  }
`
