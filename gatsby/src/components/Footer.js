import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const FooterStyles = styled.div`
  height: 30rem;
  background-color: var(--blue-vogue);
  padding: 2rem 5vw;
`;

function LogoSlogan() {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-mini" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 74) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <LogoSloganStyles>
      <div className="logo-wrapper">
        <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
      </div>
      <div className="slogan-container">
        <h1>TIENES UN PROYECTO?</h1>
        <h2>HAGÁMOSLO REALIDAD</h2>
      </div>
    </LogoSloganStyles>
  );
}

const LogoSloganStyles = styled.div`
  display: flex;
  align-items: center;
  --logo-width: 5.9rem;
  --logo-height: 5.9rem;

  .logo-wrapper {
    width: var(--logo-width);
    height: var(--logo-height);
    margin-right: 2rem;
  }

  .slogan-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--titan-white);
    font-family: 'latoblack';

    h1 {
      font-size: clamp(1.2rem, 3vw, 1.8rem);
    }

    h2 {
      font-size: clamp(2rem, 2.6vw, 3.6rem);
    }
  }

  @media (max-width: 720px) {
    --logo-width: 4.4rem;
    --logo-height: 4.4rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <LogoSlogan />
    </FooterStyles>
  );
}
