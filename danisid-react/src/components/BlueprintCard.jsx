import React from 'react';

const BlueprintCard = ({ project }) => {
    const { title, subtitle, description, status, techStack, mission } = project;

    return (
        <article className="blueprint_card glass-panel holographic-border">
            <div className="blueprint_tabs">
                <span className="blueprint_tab active">SPEC_01</span>
                <span className="blueprint_tab">DATA</span>
                <span className="blueprint_tab">LOGS</span>
            </div>

            <div className="blueprint_header">
                <span className="blueprint_status font-syncopate" style={{ borderColor: 'var(--acid-color)', color: 'var(--acid-color)' }}>
                    {status}
                </span>
                <div className="blueprint_tech">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech_tag">{tech}</span>
                    ))}
                </div>
            </div>

            <div className="blueprint_body">
                <h3 className="blueprint_title font-syncopate text-gradient">{title}</h3>
                <h4 className="blueprint_subtitle">{subtitle}</h4>
                <p className="blueprint_description">{description}</p>

                {mission && (
                    <div className="blueprint_mission">
                        <span className="mission_label text-accent">/// MISSION_OBJECTIVE:</span>
                        <p className="mission_text">{mission}</p>
                    </div>
                )}
            </div>

            <div className="blueprint_footer">
                <div className="blueprint_lines"></div>
                <span className="blueprint_id">ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
            </div>
        </article>
    );
};

export default BlueprintCard;
