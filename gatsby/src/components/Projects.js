import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

const ProjectsStyles = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

export default function Projects() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "projects-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ProjectsStyles Tag="div" fluid={image.sharp.fluid}>
      Projects
    </ProjectsStyles>
  );
}
