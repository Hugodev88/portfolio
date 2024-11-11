// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css'; // Importando o CSS do Projects

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      <ul className="projects">
        <li>Project 1: Portfolio Website</li>
        <li>Project 2: E-commerce App</li>
        <li>Project 3: Task Manager</li>
      </ul>
    </section>
  );
}

export default Projects;
