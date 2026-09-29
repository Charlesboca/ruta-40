import React from 'react';
import { Link } from 'react-router-dom'; // <--- 1. Importamos Link
import '../estilos/Footer.css';
import logoRuta40 from '../imagenes/logo.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
         
          {/* 2. Envolvemos el logo y título en el Link hacia el Home */}
       <div 
          className="footer-logo-container" 
          onClick={() => window.location.href = '/'}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <img src={logoRuta40} alt="Logo Ruta 40" className="footer-logo" />
          <h3 style={{ margin: 0, color: '#f8fafc' }}>Ruta 40</h3>
        </div>
        </div>

      <div className="footer-redes">
          <div className="redes-links">
            {/* Botón Instagram con Ícono SVG */}
            <a href="https://www.instagram.com/ruta40vinoteca/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="red-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              Instagram
            </a>

            {/* Botón Facebook con Ícono SVG */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="red-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>



      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ruta 40. Todos los derechos reservados.</p>
        <p className="footer-dev">
          Sitio web oficial | Desarrollado 💻 por{' '}
          <a 
            href="https://mi-portfolio-carlos-avalos.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dev-link"
          >
            Carlos Avalos
          </a>
        </p>
      </div>
    </footer>
  );
}