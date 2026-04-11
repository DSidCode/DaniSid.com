import React from 'react';

const ProjectCard = ({ project, onCardClick }) => {
  const { imageUrl, name, description, skills, isVideo = false } = project;

  const handleCardClick = (e) => {
    e.preventDefault();
    onCardClick(project);
  };

  return (
    <article className="projects_card" onClick={handleCardClick}>
      {imageUrl && (
        <div className="projects_image" >
          {isVideo ? (
            <video src={imageUrl} autoPlay loop muted playsInline className="projects_img projects_video" loading="lazy" aria-label={`Animation for ${name}`}></video>
          ) : (
            <img src={imageUrl} alt={`Preview of the ${name} project`} className="projects_img" loading="lazy" />
          )}
          <div className="projects_overlay">
            <i className="ri-add-circle-line"></i>
          </div>
        </div>
      )}

      <div className="projects_content">
        <h3 className="projects_name">{name}</h3>
        <div className="projects_skills">
          {skills.map((skill, index) => (
            <img key={index} src={skill.icon} alt={skill.name} className="projects_skill" title={skill.name} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;