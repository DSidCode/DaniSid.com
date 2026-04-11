import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container grid">
            <div className="footer_content grid">
                <Link to="/" className="footer_logo">DaniSid</Link>
                <ul className="footer_links">
                    <li>
                        <Link to="/#home" className="footer_link">Inicio</Link></li>
                    <li>
                        <Link to="/#projects" className="footer_link">Proyectos</Link></li>
                    <li><Link to="/#services" className="footer_link">Servicios</Link></li>
                </ul>
            </div>
            <div className="footer_social">
                <a href="https://www.linkedin.com/in/daniel-ga88/" className="footer_social_link" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="Visita mi perfil de LinkedIn">
                    <i className="ri-linkedin-box-line"></i>
                </a>
                <a href="https://github.com/DSidCode" className="footer_social_link" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="Visita mi perfil de GitHub">
                    <i className="ri-github-line"></i>
                </a>
                <a href="https://www.behance.net/danielsidgarcia" className="footer_social_link" target="_blank" rel="noopener noreferrer" title="Behance" aria-label="Visita mi portafolio en Behance">
                    <i className="ri-behance-line"></i>
                </a>
                <a href="https://www.instagram.com/danielsid/" className="footer_social_link" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Visita mi perfil de Instagram">
                    <i className="ri-instagram-line"></i>
                </a>
                <a href="https://wa.me/34641868620" className="footer_social_link" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="Escríbeme por WhatsApp">
                    <i className="ri-whatsapp-line"></i>
                </a>
            </div>
        </div>
        <span className="footer_copy">
            &#169; 2025 Daniel H. Garcia Alzate | danisidcode@gmail.com | Hecho con pasión
        </span>
    </footer>
  );
};

export default Footer;