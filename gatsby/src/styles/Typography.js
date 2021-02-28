import { createGlobalStyle } from 'styled-components';

import latoBlackwoff2 from '../assets/fonts/lato-black-webfont.woff2';
import latoBlackwoff from '../assets/fonts/lato-black-webfont.woff';
import latoBoldwoff2 from '../assets/fonts/lato-bold-webfont.woff2';
import latoBoldwoff from '../assets/fonts/lato-bold-webfont.woff';
import latoLightwoff2 from '../assets/fonts/lato-light-webfont.woff2';
import latoLightwoff from '../assets/fonts/lato-light-webfont.woff';
import latoRegularwoff2 from '../assets/fonts/lato-regular-webfont.woff2';
import latoRegularwoff from '../assets/fonts/lato-regular-webfont.woff';

const Typography = createGlobalStyle`
@font-face {
    font-family: 'latoblack';
    src: url(${latoBlackwoff2}) format('woff2'),
         url(${latoBlackwoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'latobold';
    src: url(${latoBoldwoff2}) format('woff2'),
         url(${latoBoldwoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'latolight';
    src: url(${latoLightwoff2}) format('woff2'),
         url(${latoLightwoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'latoregular';
    src: url(${latoRegularwoff2}) format('woff2'),
         url(${latoRegularwoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}


  html {
    font-family: 'latolight';
    color: var(--blue-vogue);
    font-size: 62.5%
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default Typography;
