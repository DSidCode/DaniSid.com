import React from 'react';
/* Importamos el CSS para que la sección sea visible */
import '../assets/css/valueProposition.css';

const ValueProposition = () => {
    return (
        <section className="manifesto section" id="value-proposition">
            <h2
                className="section_title font-syncopate"
            >
                PROPUESTA DE VALOR <span className="text-accent">///</span>
            </h2>

            <div className="manifesto_container container">
                <p className="manifesto_intro">
                    Soy un socio estratégico que convierte tus objetivos de negocio en experiencias digitales de alto valor. Mi enfoque fusiona diseño de alto impacto, desarrollo robusto y la eficiencia de la IA para entregar resultados medibles.
                </p>

                <div className="pillars_container grid">
                    <article className="pillar_card">
                        <h3 className="pillar_title">Fusión de Diseño y Código</h3>
                        <p className="pillar_description">
                            Como <strong>único punto de contacto que domina diseño y código</strong>, traduzco tu visión de negocio en una experiencia digital coherente. El resultado es <strong>certeza</strong>: lo que ves es lo que obtienes, sin fricción ni sobrecostos.
                        </p>
                    </article>

                    <article className="pillar_card">
                        <h3 className="pillar_title">Eficiencia Potenciada por IA</h3>
                        <p className="pillar_description">
                            Utilizo la IA como un catalizador para la eficiencia. Esto me permite idear, prototipar y optimizar a una velocidad superior, entregando <strong>calidad premium en tiempo récord</strong> para que lances tu proyecto antes que la competencia.
                        </p>
                    </article>

                    <article className="pillar_card">
                        <h3 className="pillar_title">Enfoque en el Retorno de Inversión</h3>
                        <p className="pillar_description">
                            Mi enfoque no es entregar código, es generar un <strong>retorno de inversión tangible</strong>. Cada elemento está alineado con un objetivo comercial medible. No compras una web, inviertes en un <strong>activo que hace crecer tu negocio</strong>.
                        </p>
                    </article>
                </div>

                <blockquote className="manifesto_pitch">
                    <p>
                        "Entiendo tu negocio. Voy a diseñar y construir una plataforma digital que no solo se verá increíble, sino que está diseñada desde cero para atraer a tus clientes ideales y convertirlos. Y lo haré más rápido y con más coherencia que si contrataras a un equipo. <strong>¿Hablamos de cómo podemos hacer crecer tu negocio?</strong>"
                    </p>
                </blockquote>
            </div>
        </section>
    );
};

export default ValueProposition;