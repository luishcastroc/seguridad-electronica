import React from 'react';
import styled from 'styled-components';
import { LayoutStyles } from '../styles/LayoutStyles';

const AboutStyles = styled(LayoutStyles)`
  padding: 15rem 12vw 5rem;
  --scaleX: 1;
  .title {
    position: relative;
    font-family: 'latoblack';
    font-size: clamp(2.5rem, 5vw, 5rem);

    &::before {
      height: 5px;
      content: '';
      position: absolute;
      width: 100%;
      background: var(--burnt-sienna);
      bottom: -2px;
      z-index: -1;
      transition: transform 0.1s ease 0s;
      transform: skew(-20deg) rotate(1.64deg) scaleX(var(--scaleX));
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <h2 className="title">QUIENES SOMOS</h2>
      </div>
    </AboutStyles>
  );
}
