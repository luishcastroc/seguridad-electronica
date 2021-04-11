import React from 'react';
import styled from 'styled-components';

const ProjectStyles = styled.article`
  height: 460px;
  background-color: var(--titan-white);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
`;

export default function Project() {
  return <ProjectStyles>Project</ProjectStyles>;
}
