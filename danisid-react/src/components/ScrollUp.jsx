import React from 'react';

const ScrollUp = ({ show }) => {
  return (
    <a href="#" className={`scrollup ${show ? 'show-scroll' : ''}`} id="scroll-up" aria-label="Volver arriba">
        <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUp;