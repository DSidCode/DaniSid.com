import React from 'react';
import BlueprintCard from './BlueprintCard.jsx';

const futureProjectsData = [
    {
        title: "QUIMERA ALCHEMIST",
        subtitle: "Bitácora Profesional y Laboratorio Digital",
        status: "ACTIVE",
        description: "Mi laboratorio para transmutar ideas en productos digitales, fusionando diseño UI/UX con código limpio y funcional.",
        mission: "Consolidarme como Desarrollador Frontend con especialización en Diseño de Interfaces, enfocado en el valor de negocio.",
        techStack: ["React", "Python", "Cloud", "Cybersecurity"]
    },
    {
        title: "GUITARRA.APP",
        subtitle: "Lady Madrizzz Hack",
        status: "FUNCTIONAL",
        description: "Terminal visual para dominar progresiones de guitarra. Un exploit educativo que convierte la teoría musical en una interfaz interactiva.",
        mission: "Demostrar que cualquier necesidad creativa puede resolverse con código y enfoque hacker.",
        imageUrl: "/path/to/guitarra-app-screenshot.webp", // Placeholder: Reemplazar con el screenshot real
        techStack: ["React", "Tailwind", "Lucide", "Music Theory"]
    },
    {
        title: "CYBERPUNK NEON",
        subtitle: "Manifiesto Digital",
        status: "RELEASED",
        description: "Experiencia web inmersiva que explora el género Cyberpunk a través de un manifiesto poético y estética de neón de alta fidelidad.",
        mission: "Sumergir al usuario en la atmósfera 'High Tech, Low Life' mediante diseño puro y semántico.",
        techStack: ["HTML5", "CSS3", "Neon FX", "Glitch Art"]
    }
];

const FutureProjects = () => {
    return (
        <section className="future_projects section" id="future">
            <h2
                className="section_title font-syncopate"
            >
                VISION_FUTURA <span className="text-accent">///</span>
            </h2>

            <div className="future_container container grid">
                {futureProjectsData.map((project, index) => (
                    <BlueprintCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default FutureProjects;
