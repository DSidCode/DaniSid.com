import React from 'react';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Lab from './Lab.jsx';
import Services from './Services.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Projects />
      <Lab />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
};

export default Main;