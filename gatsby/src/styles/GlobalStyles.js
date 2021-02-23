import { createGlobalStyle, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const GlobalStyles = createGlobalStyle`
  :root {
    --blue-vogue: #032459;
    --blaze-orange: #FA6400;
    --cascade-70: #6790d0ed;
    --white: #ffffff;
    --grey: #efefef;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html,body {
    margin: 0; 
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  input, textarea, select { 
    font-family:inherit; 
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  .link-active {
    color: var(--white);
    ::after {
      width: 100%;
      }
  }

  .pos-absolute {
    position: absolute;
    top: 0;
  }

  .pos-sticky {
    position: sticky;
    top:0;
    animation: .7s ${fadeIn} ease-in;
  }

`;

export default GlobalStyles;
