import React from 'react';
import Description from '../components/Description';
import Main from '../components/Main';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Technology from '../components/Technology';

export default function Index() {
  return (
    <>
      <SEO title="Inicio" />
      <Main />
      <Description />
      <Technology />
      <Projects />
    </>
  );
}
