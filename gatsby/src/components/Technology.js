import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from '../styles/Button';

const TechnologyStyles = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: grid;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), 1fr);
  font-family: 'latoblack';
  background-color: var(--titan-white);
`;

const TextSideStyles = styled.div`
  padding: 12rem 5vw 5rem;
  color: var(--blue-vogue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: clamp(1.2rem, 3vw, 1.8rem);

  h1 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 5rem);
    margin-bottom: 1rem;

    span {
      text-decoration: underline;
    }
  }
`;

const SideImageStyles = styled(BackgroundImage)`
  margin-top: 10rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default function Technology() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "cameras.png" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <TechnologyStyles>
      <TextSideStyles>
        <h1>TECNOLOGÍA</h1>
        <h2>
          DISTRIBUIDORES AUTORIZADOS DE <span>HIKVISION</span> Y{' '}
          <span>EPCON</span>, MARCAS LÍDERES EN EL MERCADO DE SEGURIDAD.
        </h2>
        <ButtonStyles>CONTACTANOS</ButtonStyles>
      </TextSideStyles>
      <SideImageStyles Tag="div" fluid={image.sharp.fluid} />
    </TechnologyStyles>
  );
}
