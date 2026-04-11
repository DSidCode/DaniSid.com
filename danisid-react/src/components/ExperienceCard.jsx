import React from 'react';

const ExperienceCard = ({ company, profession, date, description }) => {
  return (
    <article className="experience_card">
      <h2 className="experience_company">{company}</h2>
      <div className="experience_data">
        <h3 className="experience_profession">
          {profession}
        </h3>
        <span className="experience_date">
          {date}
        </span>
        <p className="experience_description">{description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;