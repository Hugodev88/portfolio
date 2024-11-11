// src/components/Technologies.js

import React from 'react';
import '../styles/Technologies.css';
import techIcons from '../assets/techIcons'; // Importa o array de ícones das tecnologias

const Technologies = () => {
  return (
    <section className="technologies-section">
      <h3>Minhas Tecnologias</h3>
      <div className="tech-grid">
        {techIcons.map((tech) => (
          <div className="tech-item" key={tech.name}>
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
