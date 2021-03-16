import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from '../styles/Button';
import Project from './Project';

const ProjectsStyles = styled.div`
  background-color: (--titan-white);
  padding: 12rem 5vw 5rem;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  font-family: 'latoblack';

  h1 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(2.5rem, 5vw, 5rem);
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  --columns: 3;
  grid-template-columns: repeat(var(--columns), 1fr);
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 2rem;

  @media (max-width: 720px) {
    --columns: 1;
  }
`;

export default function Projects() {
  return (
    <ProjectsStyles>
      <h1>PROYECTOS</h1>
      <h2>Un proyecto de seguridad adaptado a tus necesidades</h2>
      <ProjectsGrid>
        {[1, 2, 3].map((_, i) => (
          <Project key={i} />
        ))}
      </ProjectsGrid>
      <div className="button-container">
        <ButtonStyles>CONTACTANOS</ButtonStyles>
      </div>
    </ProjectsStyles>
  );
}
