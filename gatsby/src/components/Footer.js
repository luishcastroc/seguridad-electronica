import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const FooterStyles = styled.div`
  height: 30rem;
  background-color: var(--blue-vogue);
  padding: 2rem 5vw;
  color: var(--titan-white);
  font-family: 'latoblack';
  --columns-info: 3;
  --top-bottom: 0;
  --left-right: 0;
  --address-width: 65%;

  display: flex;
  flex-direction: column;

  .info-container {
    margin: var(--top-bottom) var(--left-right);
    display: grid;
    grid-template-columns: repeat(var(--columns-info), 1fr);
    gap: 3rem;
    justify-items: center;
    align-content: center;
    flex: 1;
  }

  a {
    color: var(--titan-white);
  }

  .phone {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
  }

  .social {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    justify-content: center;
    align-items: center;

    .icons-container {
      width: 50%;
      margin-top: 0.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      justify-items: center;
      font-size: 5rem;
    }
  }

  .address-container {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;

    .address {
      width: var(--address-width);
    }
  }

  .legal {
    justify-self: flex-end;
  }

  @media (max-width: 720px) {
    height: 100%;
    --columns-info: 1;
    --top-bottom: 2rem;
    --address-width: 100%;
  }
`;

function LogoSlogan({ file }) {
  return (
    <LogoSloganStyles>
      <div className="logo-wrapper">
        <Img fluid={file.childImageSharp.fluid} alt="logo" />
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

    h1 {
      font-size: 1.8rem;
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
  const { footer, file } = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-mini" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 74) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footer: sanitySiteSettings(_id: { eq: "central" }) {
        facebook
        phone
        whatsapp
        address
      }
    }
  `);

  return (
    <FooterStyles>
      <LogoSlogan file={file} />
      <div className="info-container">
        <div className="phone">
          <span>LLÁMANOS</span>
          <a href={`tel:${footer.phone}`}>{footer.phone}</a>
        </div>
        <div className="social">
          <span>CONECTATE CON NOSOTROS</span>
          <div className="icons-container">
            {footer.facebook && (
              <a
                href={footer.facebook}
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            )}
            {footer.whatsapp && (
              <a
                href={`https://wa.me/${footer.whatsapp}?text=Estoy%20interesado%20en%20un%20sistema%20de%20seguridad`}
                title="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            )}
          </div>
        </div>
        <div className="address-container">
          <span>VISITANOS</span>
          <span className="address">{footer.address}</span>
        </div>
      </div>
      <div className="legal">Copyright © 2021 Lhcc. All rights reserved</div>
    </FooterStyles>
  );
}
