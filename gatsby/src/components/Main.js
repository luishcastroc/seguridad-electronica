import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { ButtonStyles } from '../styles/Button';

const MainStyle = styled(BackgroundImage)`
  padding: 12rem 5vw 5rem;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .introduction {
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (orientation: portrait) {
      padding-bottom: 20vh;
    }
  }

  .title {
    font-family: 'latobold';
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 1rem;
  }

  .subtitle {
    font-family: 'latoblack';
    font-size: clamp(2.5rem, 4vw, 6rem);
    width: 70%;
    margin-bottom: 2rem;
  }
`;

export default function Main() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <MainStyle Tag="main" fluid={image.sharp.fluid}>
      <section className="introduction">
        <h1 className="title">SISTEMAS ELECTRÓNICOS DE SEGURIDAD</h1>
        <h2 className="subtitle">
          SEGURIDAD INTELIGENTE, INSTALADA POR PROFESIONALES.
        </h2>
        <ButtonStyles>CONTACTANOS</ButtonStyles>
      </section>
    </MainStyle>
  );
}
