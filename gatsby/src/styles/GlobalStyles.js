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
    --cascade-70: #6790d0ed;
    --burnt-sienna: #EE7665;
    --white: #ffffff;
    --grey: #efefef;
    --titan-white: #ECEEFF;
    --texas-rose: #FFB45A;
    --texas-rose-70: #FFB45A80;
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
    color: var(--burnt-sienna);
  }

  .link-active {
    color: var(--burnt-sienna);
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
    background-color:var(--titan-white);
    animation: .7s ${fadeIn} ease-in;
  }

`;

export default GlobalStyles;
