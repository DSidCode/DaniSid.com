import React from 'react';
import ExperienceCard from './ExperienceCard.jsx';

const experienceData = [
  {
    company: "danisid.com - Portafolio Personal",
    profession: "Arquitecto y Desarrollador Web",
    date: "2024 - Actualidad",
    description: "Lideré el diseño, desarrollo y despliegue completo del portafolio. Implementé un flujo de trabajo profesional con Git/GitHub y CI/CD en Netlify, migrando desde un hosting tradicional. Apliqué principios de ingeniería de software para la refactorización, optimización y documentación, convirtiéndolo en un laboratorio digital para mostrar habilidades técnicas y creativas."
  },
  {
    company: "Proyecto 'Antología' (Migración a React)",
    profession: "Desarrollador Frontend (React)",
    date: "2024 - Actualidad",
    description: "Lideré la migración del proyecto de JavaScript puro a una aplicación moderna con React y Vite. Re-arquitecturé la aplicación a un modelo de componentes, gestionando el estado con hooks para eliminar bugs. Configuré el entorno de build, optimicé la UI y desplegué la nueva versión en un subdominio, logrando una solución más robusta y escalable."
  },
  {
    company: "La Leyenda Del Dorado",
    profession: "Diseñador y Editor",
    date: "2020/12",
    description: "Trabajé como diseñador gráfico y soporte técnico, creando material gráfico y publicitario para redes e impresos que incrementó la participación digital en un 40%, produciendo contenido audiovisual para redes y medios deportivos, y apoyando en la venta de más de 500 plazas a través de campañas visuales efectivas."
  },
  {
    company: "Paralelo Taller de Diseño",
    profession: "Maquetador",
    date: "2019/11",
    description: "Fui diseñador gráfico y operador de máquinas, enfocándome en el diseño y producción de estampados textiles, corte y grabado láser, manejando maquinaria especializada para sublimación, impresión DTG y termofijado, lo que me permitió combinar creatividad con habilidades técnicas en procesos de producción."
  },
  {
    company: "Mammut Media",
    profession: "Animador",
    date: "2017/08",
    description: "Trabajé como animador 2D en 2016, donde me encargué de crear animaciones motion graphics para proyectos de modelado arquitectónico y campañas publicitarias, logrando mejorar la calidad visual de las presentaciones de los clientes en un 30% y entregando proyectos con un 100% de satisfacción."
  }
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2
        className="section_title"
      >
        Experiencia Profesional
      </h2>
      <div className="experience_container container grid">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;