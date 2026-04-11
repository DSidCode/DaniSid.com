import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import HomePage from './components/HomePage.jsx';
import ValueProposition from './components/ValueProposition.jsx';
import Footer from './components/Footer.jsx';
import ScrollUp from './components/ScrollUp.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id) setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));

    const homeElement = document.getElementById('home');
    let scrollObserver;
    if (homeElement) {
      scrollObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setShowScroll(!entry.isIntersecting);
      }, { threshold: 0.1 });
      scrollObserver.observe(homeElement);
    }

    return () => {
      sections.forEach(section => observer.unobserve(section));
      if (scrollObserver && homeElement) scrollObserver.unobserve(homeElement);
    };
  }, []);

  return (
    <Router>
      {/* Background Luminescent Blobs (Digital Alchemy / Sorany Premium System) */}
      <div className="fixed top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none mix-blend-screen z-[-1]"></div>
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[100px] pointer-events-none mix-blend-screen z-[-1]"></div>
      
      <Nav activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/propuesta-de-valor" element={<ValueProposition />} />
      </Routes>
      <Footer />
      <ScrollUp show={showScroll} />
    </Router>
  );
}

export default App;
