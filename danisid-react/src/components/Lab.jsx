import React, { useState } from 'react';
import LabCard from './LabCard.jsx';
import ProjectModal from './ProjectModal.jsx';

const labItems = [
  {
    iconClassName: "ri-quill-pen-line lab_icon",
    title: "Antología Poética",
    description: "\"Del Amor y Otras Nostalgias\". Un libro digital interactivo construido con React para una experiencia de lectura moderna y robusta.",
    linkUrl: "https://antologia.danisid.com",
    projectUrl: "https://antologia.danisid.com", // Para el modal
    name: "Antología Poética", // Para el modal
    linkText: "Leer más",
    isInternalFrame: true // Abrir en iframe
  },
  {
    iconClassName: "ri-user-heart-line lab_icon",
    title: "Human Design Reports",
    description: "Un proyecto de exploración sobre el Diseño Humano, creando informes visuales y personalizados para el autoconocimiento.",
    linkUrl: "human-desing-reports/index.html",
    projectUrl: "/human-desing-reports/index.html", // Ruta relativa desde public
    name: "Human Design Reports",
    linkText: "Ver Informes",
    isInternalFrame: true
  },
  {
    iconClassName: "ri-gamepad-line lab_icon",
    title: "Aventuras de Adrián",
    description: "Un proyecto pedagógico y lúdico diseñado para mi hijo, fomentando la creatividad y el liderazgo a través de misiones y juegos interactivos.",
    linkUrl: "Aventuras/index.html",
    projectUrl: "/Aventuras/index.html", // Ruta relativa desde public
    name: "Aventuras de Adrián",
    linkText: "Descubrir",
    isInternalFrame: true
  },
  {
    iconClassName: "ri-shield-line lab_icon",
    title: "Ciberseguridad",
    description: "Explorando el mundo del hacking ético y la seguridad digital. Un campo de estudio fascinante utilizando herramientas como Kali Linux para fortalecer la seguridad.",
    linkUrl: "#",
    projectUrl: "#",
    name: "Ciberseguridad",
    linkText: "Explorar más"
  }
];

const Lab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    // Solo abrimos modal si no es el enlace deshabilitado
    if (item.linkUrl !== '#') {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="lab section" id="lab">
      <h2 className="section_title">LABORATORIO CREATIVO</h2>
      <div className="lab_container container grid">
        {labItems.map((item, index) => (
          <LabCard
            key={index}
            {...item}
            item={item}
            onCardClick={handleOpenModal}
          />
        ))}
      </div>

      {isModalOpen && <ProjectModal project={selectedItem} onClose={handleCloseModal} />}
    </section>
  );
};

export default Lab;