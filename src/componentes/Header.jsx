import React from 'react';
import { Link } from 'react-router-dom';
import logoRuta40 from '../imagenes/logo.jpg';

import '../estilos/Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="header-brand">
        <img src={logoRuta40} alt="Logo Ruta 40" className="logo-img" />
        <div className="brand-text">
          <h1>Ruta 40</h1>
        
        </div>
      </Link>
    </header>
  );
}