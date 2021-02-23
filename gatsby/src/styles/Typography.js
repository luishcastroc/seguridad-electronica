import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Lato-Regular.ttf';
import fontBold from '../assets/fonts/Lato-Bold.ttf';
import fontBlack from '../assets/fonts/Lato-Black.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url(${font});
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-Bold', sans-serif;
    src: url(${fontBold});
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-Black', sans-serif;
    src: url(${fontBlack});
    font-display: swap;
  }

  html {
    font-family: 'Lato', sans-serif;
    color: var(--blue-vogue);
    font-size: 62.5%
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default Typography;
