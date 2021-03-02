import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
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

  @media (max-width: 720px) {
    --columns: 1;
  }
`;

const TextSideStyles = styled.div`
  padding: 12rem 5vw 5rem;
  color: var(--blue-vogue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: clamp(1.2rem, 3vw, 1.8rem);

  @media (max-width: 720px) {
    order: 0;
    padding: 0px 5vw 5rem;
  }

  h1 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 5rem);
    margin-bottom: 2rem;

    span {
      text-decoration: underline;
    }
  }
`;

const SideImageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10rem;
  padding-bottom: 10rem;

  @media (max-width: 720px) {
    padding: 10rem 5vw 0;
  }
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
          <span>EPCOM</span>, MARCAS LÍDERES EN EL MERCADO DE SEGURIDAD.
        </h2>
        <ButtonStyles>CONTACTANOS</ButtonStyles>
      </TextSideStyles>
      <SideImageStyles>
        <Img fluid={image.sharp.fluid} />
      </SideImageStyles>
    </TechnologyStyles>
  );
}
