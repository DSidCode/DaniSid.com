import React from 'react';
import TerminalHero from './TerminalHero.jsx';
import ValueProposition from './ValueProposition.jsx';
import Projects from './Projects.jsx';
import FutureProjects from './FutureProjects.jsx';
import Lab from './Lab.jsx';
import Services from './Services.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';

const HomePage = () => {
  return (
    <main className="main">
      <TerminalHero />
      <ValueProposition />
      <Projects />
      <FutureProjects />
      <Lab />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
};

export default HomePage;