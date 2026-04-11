import React from 'react';
import ServiceCard from './ServiceCard.jsx';

const servicesData = [
  {
    iconClassName: "ri-braces-line",
    title: "Soluciones Web a Medida",
    description: "Desde portafolios estáticos hasta aplicaciones interactivas con React. Construyo soluciones robustas, escalables y centradas en la experiencia de usuario."
  },
  {
    iconClassName: "ri-rocket-line",
    title: "Optimización y Despliegue (WebOps)",
    description: "Mejora del rendimiento (WPO), migración de hostings y configuración de flujos de despliegue continuo (CI/CD) con Netlify para una infraestructura moderna y eficiente."
  },
  {
    iconClassName: "ri-robot-2-line",
    title: "Automatización y Prototipado IA",
    description: "Consultoría para integrar herramientas de IA en flujos de trabajo. Desarrollo de scripts de automatización y prototipos para validar ideas innovadoras."
  },
  {
    iconClassName: "ri-palette-line",
    title: "Identidad Visual y Creatividad Digital",
    description: "Diseño de marca, logos, motion graphics e ilustraciones. Aporto una visión creativa y artística para que tu proyecto digital tenga un alma única."
  }
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2
        className="section_title"
      >
        SERVICIOS OFRECIDOS
      </h2>
      <div className="services_container container grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;