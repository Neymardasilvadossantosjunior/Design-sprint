import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
