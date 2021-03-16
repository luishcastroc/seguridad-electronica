import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  ${(props) => (props.footer === 'true' ? '' : 'margin: auto 0')};
  ${(props) => (props.footer === 'true' ? '' : 'flex: 0 0 207px')};

  @media (max-width: 860px) and (min-width: 769px) {
    flex: 0 0 150px;
  }

  @media (max-width: 768px) {
    flex: 0 0 150px;
  }
`;
export default function Logo({ footer }) {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 207) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/" footer={footer}>
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  );
}
