import React from 'react';

const ServiceCard = ({ iconClassName, title, description }) => {
  return (
    <article className="services_card">
      <div className="services_icon">
        <div className="services_circle"></div>
        <i className={iconClassName}></i>
      </div>
      <h3 className="services_name">{title}</h3>
      <p className="services_description">{description}</p>
    </article>
  );
};

export default ServiceCard;