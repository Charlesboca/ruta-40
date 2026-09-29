import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Navbar.css';

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/catalogo" className="nav-link">Catálogo</Link>
        <Link to="/promocion" className="nav-link">Promociones</Link>
        <Link to="/admin" className="nav-link admin-link">Cargar Bebidas</Link>
      </div>
    </nav>
  );
}