// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Importando o CSS do Header

function Header() {
  return (
    <header>
      <h1>Hugo Almeida | Desenvolvedor Full-Stack</h1>
      <nav>
        <ul className='header'>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
