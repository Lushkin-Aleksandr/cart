import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  // Normalize styles
  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  // Other global styles  
  html {
    -webkit-tap-highlight-color: transparent;
  }
  
  html, 
  body {
    height: 100%;
  }

  #root{
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }
`
