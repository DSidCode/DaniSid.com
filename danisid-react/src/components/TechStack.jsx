import React from 'react';
import TerminalHero from './TerminalHero';

const TechStack = () => {
    return (
        <section className="tech_stack section" id="tech">
            <h2 className="section_title">Nucleo de Ingeniería</h2>
            <div className="container grid">
                <div className="tech_description" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-color)' }}>
                    <p>Acceso directo a mis capacidades técnicas y estado del sistema.</p>
                </div>
                <TerminalHero />
            </div>
        </section>
    );
};

export default TechStack;
