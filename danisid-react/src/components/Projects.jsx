import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

// Import skill icons
import htmlIcon from '../assets/img/skills-html.svg';
import cssIcon from '../assets/img/skills-css.svg';
import jsIcon from '../assets/img/skills-javascript.svg';
import reactIcon from '../assets/img/skills-react.svg';
import vscodeIcon from '../assets/img/vscode.svg';
import linuxIcon from '../assets/img/Logo_Tux_Linux.svg';
import terminalIcon from '../assets/img/Terminal-240.svg';
import photoshopIcon from '../assets/img/skills-photoshop.svg';
import illustratorIcon from '../assets/img/skills-Illustrator.svg';
import premiereIcon from '../assets/img/skills-Premiere.svg';
import afterEffectsIcon from '../assets/img/skills-After_Effects.svg';
import gimpIcon from '../assets/img/skills-gimp.svg';
import kritaIcon from '../assets/img/skills-krita.svg';
import inkscapeIcon from '../assets/img/skills-inkscape.svg';
import instagramIcon from '../assets/img/Instagram_logo_2016.svg';
import geminiIcon from '../assets/img/Google-gemini-icon.svg';
import figmaIcon from '../assets/img/skills-figma.svg';

// Import project images
import antologiaImg from '../assets/img/antologia-v3.webp';
import aventurasImg from '../assets/img/aventuras_adrian.webp';
import cyberpunkImg from '../assets/img/projects-1.webp';
import portfolioImg from '../assets/img/projects-2.webp';
import yedraImg from '../assets/img/YedraDiscoPub.webp';
import motionVideo from '../assets/img/motion.mp4';
import zafiroCoreImg from '../assets/img/zafirocore.webp';

const projectsData = {
  development: [
    {
      name: "Quimera Alchemist",
      description: "Bitácora profesional y laboratorio donde fusiono diseño UI/UX con código limpio. Mi meta es consolidarme como Desarrollador Frontend creando webs de alto impacto visual.",
      imageUrl: null,
      projectUrl: "https://github.com/DaniSid/quimera-tic",
      skills: [
        { name: 'React', icon: reactIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'Figma', icon: figmaIcon },
        { name: 'IA', icon: geminiIcon },
      ],
    },
    {
      name: "ZafiroCore",
      description: "Dashboard y asistente estratégico personal. El corazón digital de un alquimista moderno que fusiona productividad con legado personal.",
      imageUrl: zafiroCoreImg,
      projectUrl: "#",
      skills: [
        { name: 'React', icon: reactIcon },
        { name: 'Vite', icon: vscodeIcon },
        { name: 'Gemini API', icon: geminiIcon },
      ],
    },
    {
      name: "Antología: Del Amor y Otras Nostalgias",
      description: "Proyecto migrado a React para una experiencia de lectura moderna y robusta. Un libro digital interactivo que presenta una colección de poemas de forma inmersiva.",
      imageUrl: antologiaImg,
      projectUrl: "https://antologia.danisid.com",
      skills: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React', icon: reactIcon },
      ],
    },
    {
      name: "Aventuras de Adrián",
      description: "Un proyecto web pedagógico y lúdico diseñado para mi hijo, fomentando la creatividad, el liderazgo y la inteligencia emocional a través de misiones y juegos interactivos.",
      imageUrl: aventurasImg,
      projectUrl: "Aventuras/index.html",
      skills: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
      ],
    },
    {
      name: "Web personal - CyberPunk",
      description: "Una página web inmersiva con estética cyberpunk que presenta un portafolio de proyectos en un ciberespacio visualmente impactante.",
      imageUrl: cyberpunkImg,
      projectUrl: "projects/cyberpunk/index.html",
      skills: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
      ],
    },
    {
      name: "DSid - Portfolio Web",
      description: "Proyecto práctico de creación web que combina diseño visual y desarrollo frontend. Construido con HTML, CSS y JavaScript, incluye un efecto 'Matrix' animado y un diseño responsive.",
      imageUrl: portfolioImg,
      projectUrl: "https://github.com/DSidCode",
      skills: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'VS Code', icon: vscodeIcon },
        { name: 'Linux', icon: linuxIcon },
        { name: 'Terminal', icon: terminalIcon },
      ],
    },
  ],
  design: [
    {
      name: "Publicidad Web - Yedra Disco Pub",
      description: "Campaña de marketing digital y diseño de material publicitario para redes sociales, enfocada en aumentar la visibilidad y el engagement del público.",
      imageUrl: yedraImg,
      projectUrl: "#",
      skills: [
        { name: 'Photoshop', icon: photoshopIcon },
        { name: 'Illustrator', icon: illustratorIcon },
        { name: 'Instagram', icon: instagramIcon },
      ],
    },
    {
      name: "Motion Graphics",
      description: "Animaciones creadas con Adobe After Effects, partiendo de vectores de Illustrator. Integración de plugins para lograr transiciones fluidas y composiciones impactantes.",
      imageUrl: motionVideo,
      projectUrl: "https://www.behance.net/gallery/136112381/Animaciones-2D",
      isVideo: true,
      skills: [
        { name: 'After Effects', icon: afterEffectsIcon },
        { name: 'Illustrator', icon: illustratorIcon },
      ],
    },
  ],
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects section" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section_title"
      >
        LATEST EXPERIMENTS
      </motion.h2>
      <div className="projects_container container grid projects_masonry">

        <h3 className="projects_category_title">Software & AI Engineering</h3>
        {projectsData.development.map((project, index) => (
          <ProjectCard key={index} project={project} onCardClick={handleOpenModal} />
        ))}

        <h3 className="projects_category_title">Digital Design</h3>
        {projectsData.design.map((project, index) => (
          <ProjectCard key={index} project={project} onCardClick={handleOpenModal} />
        ))}

      </div>

      {isModalOpen && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </section>
  );
};

export default Projects;
