import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {

    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  input[type='text'] { font-size: 24px; }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    background-color: #000;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
