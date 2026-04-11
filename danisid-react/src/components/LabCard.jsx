import React from 'react';

const LabCard = ({ iconClassName, title, description, linkUrl, linkText, onCardClick, item }) => {
  // Maneja los enlaces que están deshabilitados (apuntan a #)
  const isLinkDisabled = linkUrl === '#';

  const handleClick = (e) => {
    if (isLinkDisabled) {
      e.preventDefault();
      return;
    }

    // Si hay una función onCardClick, la usamos en lugar de navegar
    if (onCardClick) {
      e.preventDefault();
      onCardClick(item);
    }
  };

  return (
    <div className="lab_card">
      <i className={iconClassName}></i>
      <h3 className="lab_title">{title}</h3>
      <p className="lab_description">{description}</p>
      <a
        href={isLinkDisabled ? undefined : linkUrl}
        className={`lab_button ${isLinkDisabled ? 'disabled-link' : ''}`}
        target={isLinkDisabled ? undefined : "_blank"}
        rel={isLinkDisabled ? undefined : "noopener noreferrer"}
        onClick={handleClick}
      >
        {linkText} <i className="ri-arrow-right-line"></i>
      </a>
    </div>
  );
};

export default LabCard;