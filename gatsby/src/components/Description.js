import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from '../styles/Button';

const DescriptionStyles = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: 'latoblack';
  position: relative;

  @media (max-width: 720px) {
    display: block;
  }
`;

const SideImageStyles = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 720px) {
    height: 100vh;
  }
`;

const TextSideStyles = styled.div`
  padding: 12rem 5vw 5rem;
  background-color: var(--texas-rose);
  color: var(--blue-vogue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: clamp(1.2rem, 3vw, 1.8rem);

  @media (max-width: 720px) {
    position: absolute;
    top: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--texas-rose) 0%, transparent 100%);
  }

  h1 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 5rem);
  }

  p {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 3rem;
  }
`;

export default function Description() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "side-camera.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <DescriptionStyles>
      <SideImageStyles Tag="div" fluid={image.sharp.fluid} />
      <TextSideStyles>
        <h1>PROYECTOS PERSONALIZADOS</h1>
        <h2>COTIZAMOS, DISEÑAMOS E IMPLEMENTAMOS TU PROYECTO</h2>
        <p>
          Todos nuestros productos trabajan juntos para proveer máxima eficacia
          y así asegurar la entera satisfacción de nuestros clientes.
        </p>
        <ButtonStyles>CONTACTANOS</ButtonStyles>
      </TextSideStyles>
    </DescriptionStyles>
  );
}
