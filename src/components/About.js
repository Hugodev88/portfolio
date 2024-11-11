// src/components/About.js

import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/profile.jpeg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="profile-container">
          <img src={profilePic} alt="Minha foto" className="profile-pic" />
        </div>
        <div className="description">
          <h2>Sobre Mim</h2>
          <p>Sou um desenvolvedor apaixonado por tecnologia e inovação.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
