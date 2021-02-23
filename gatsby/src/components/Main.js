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
    height: 46rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 5rem;
  }

  .title {
    font-family: 'Lato-Bold', sans-serif;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-family: 'Lato-Black', sans-serif;
    font-size: 6rem;
    width: 74rem;
    margin-bottom: 1.5rem;
  }

  /* @media (width: 36.8rem) {
    .introduction {
      height: 25rem;
    }

    .title {
      font-size: 1.2rem;
    }

    .subtitle {
      font-size: 2.5rem;
      width: 30rem;
    }
  }

  @media (max-height: 41.4rem) and (orientation: landscape) {
    .introduction {
      height: 55vh;
    }

    .title {
      font-size: 1.2rem;
    }

    .subtitle {
      font-size: 4vw;
      width: 60vw;
    }
  }

  @media (max-width: 76.8rem) {
    padding: 12rem 1rem 3rem;

    .introduction {
      height: 30rem;
      padding: 0 5vw;
    }

    .title {
      font-size: 1.2rem;
    }

    .subtitle {
      font-size: 3rem;
      width: 37.6rem;
    }
  }

  @media (min-width: 76.9rem) and (max-width: 86rem) {
    padding: 12rem 5vw 5rem;

    .introduction {
      height: 30rem;
    }

    .subtitle {
      font-size: 4rem;
      width: 51rem;
    }
  }

  @media (min-width: 102.4rem) {
    .introduction {
      height: 50vh;
    }

    .title {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 7rem;
      width: 60rem;
    }
  }

  @media (min-width: 160rem) {
    .introduction {
      height: 56rem;
    }

    .subtitle {
      font-size: 7rem;
    }
  } */
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
