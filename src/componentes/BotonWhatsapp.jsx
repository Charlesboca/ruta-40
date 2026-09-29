import React from 'react';
import '../estilos/BotonWhatsapp.css';

export default function BotonWhatsapp() {
  // Reemplaza el número de teléfono por el tuyo (código de país + área + número, sin el '+' ni espacios)
  const numeroTelefono = "5493704519729"; 
  const mensaje = "Hola! Quiero hacer una consulta sobre las bebidas de Ruta 40";
  
  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a 
      href={urlWhatsapp} 
      className="whatsapp-flotante" 
      target="_blank" 
      rel="noopener noreferrer"
      title="¡Chateá con nosotros!"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="whatsapp-icono">
        <path fill="currentColor" d="M16 2a14 14 0 0 0-12 21.24L2.09 29.35a1 1 0 0 0 1.25 1.25l6.11-1.91A14 14 0 1 0 16 2zm0 25.45a11.49 11.49 0 0 1-5.86-1.6l-.42-.25-4.14 1.3 1.34-4.03-.27-.44A11.45 11.45 0 1 1 16 27.45zm6.3-8.56c-.34-.17-2-.99-2.31-1.1s-.54-.17-.77.17-.89 1.1-1.09 1.33-.39.26-.73.09a9.14 9.14 0 0 1-2.69-1.66 10.08 10.08 0 0 1-1.87-2.31c-.2-.34 0-.52.15-.69s.34-.39.51-.59a2.3 2.3 0 0 0 .34-.57.63.63 0 0 0-.03-.61c-.09-.17-.77-1.85-1.06-2.53s-.57-.59-.77-.6h-.66a1.29 1.29 0 0 0-.94.43 3.93 3.93 0 0 0-1.22 2.92 6.82 6.82 0 0 0 1.43 3.6 15.65 15.65 0 0 0 6 5.28c2.11.91 2.55.73 3 .68s1.66-.68 1.9-1.33.24-1.22.17-1.33-.31-.17-.65-.34z"/>
      </svg>
    </a>
  );
}