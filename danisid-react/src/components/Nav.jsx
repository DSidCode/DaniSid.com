import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ activeSection }) => {
  return (
    <nav className="nav">
        <ul className="nav_list">
            <li>
                <a href="/index-en.html" title="Switch to English" className="nav_link nav_lang" aria-label="Switch to English">
                    EN
                </a>
            </li>
            <li>
                <Link to="/#home" title="Inicio" className={`nav_link ${activeSection === 'home' ? 'active-link' : ''}`} aria-label="Ir a Inicio">
                    <i className="ri-home-line"></i>
                </Link>
            </li>
            <li>
                <Link to="/#projects" title="Proyectos" className={`nav_link ${activeSection === 'projects' ? 'active-link' : ''}`} aria-label="Ir a Proyectos Profesionales">
                    <i className="ri-folder-line"></i>
                </Link>
            </li>
            <li>
                <Link to="/#lab" title="Laboratorio" className={`nav_link ${activeSection === 'lab' ? 'active-link' : ''}`} aria-label="Ir al Laboratorio Creativo">
                    <i className="ri-flask-line"></i>
                </Link>
            </li>
            <li>
                <Link to="/#services" title="Servicios" className={`nav_link ${activeSection === 'services' ? 'active-link' : ''}`} aria-label="Ir a Servicios">
                    <i className="ri-file-edit-line"></i>
                </Link>
            </li>
            <li>
                <Link to="/#experience" title="Experiencia" className={`nav_link ${activeSection === 'experience' ? 'active-link' : ''}`} aria-label="Ir a Experiencia">
                    <i className="ri-honour-line"></i>
                </Link>
            </li>
            <li>
                <Link to="/#contact" title="Contactos" className={`nav_link ${activeSection === 'contact' ? 'active-link' : ''}`} aria-label="Ir a Contacto">
                    <i className="ri-send-plane-line"></i>
                </Link>
            </li>
        </ul>
    </nav>
  );
};

export default Nav;