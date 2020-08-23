import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F4FAFF;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Catamaran', sans-serif;
    font-weight: 500;
  }

  h2 {
    margin: 16px 0;
  }

  ul {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }

  *:before {
     box-sizing: border-box;
  }
`;
