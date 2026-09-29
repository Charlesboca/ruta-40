import React from 'react';
import { Link } from 'react-router-dom';
import logoRuta40 from '../imagenes/logo.jpg';
import frente from '../imagenes/frente.jpg';

import '../estilos/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">La variedad más exquisita</span>
          <h1>Bienvenidos a Ruta 40</h1>
          <p>
            Tu tienda especializada en bebidas. Encontrá las mejores etiquetas, 
            cervezas artesanales, vinos y destilados para cada momento.
          </p>

          <div className="hero-buttons">
            <Link to="/catalogo" className="btn-primary">
              Ver Catálogo

              </Link>
            
             <Link to="/promocion" className="btn-primary">
              Ver Promociones
            </Link>

            
          </div>
        </div>
      </section>

      {/* Sección de Promociones Destacadas en el Home */}
      <section className="home-promos-section">
        <div className="home-promos-header">
          <h2>Promociones Destacadas</h2>
          <Link to="/promocion" className="ver-todas-link">Ver todas →</Link>
        </div>
       
        <div className="home-promos-grid">
          <div className="home-promo-card">
            <span className="badge-promo">Más Vendido</span>
            <h3>Combo Viajero Ruta 40</h3>
            <p>2 Botellas de Malbec Reserva + Copas de regalo.</p>
            <img 
              src="data:image/jpeg;base64,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"

              alt="Combo Viajero Ruta 40" 
              className="img-promo-card" 
            />

            <span className="precio-final">$18.500</span>
            <Link to="/promocion" className="btn-primary" style={{ textAlign: 'center', marginTop: '10px' }}>Ver Oferta</Link>
          </div>
          <div className="home-promo-card">
            <span className="badge-promo">Fin de Semana</span>
            <h3>Pack Aperitivos</h3>
            <p>Fernet 750ml + 2 Bebidas colas retornables.</p>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgw48an-AipBUqeB0erNQXo5jIGZjfK5Tg2UCrK73WxA&s" 
              alt="Pack Aperitivos" 
              className="img-promo-card" 
            />
            <span className="precio-final">$12.000</span>
            <Link to="/promocion" className="btn-primary" style={{ textAlign: 'center', marginTop: '10px' }}>Ver Oferta</Link>
          </div>
        </div>

      </section>

{/* <hr className="separador-linea" />
 */}

 <div className="espaciador"></div>


      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🍷</div>
          <h3>Gran Variedad</h3>
          <p>Desde vinos seleccionados hasta bebidas blancas y aperitivos de primera.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Calidad Garantizada</h3>
          <p>Productos originales y listos para disfrutar en tus reuniones y eventos.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Asesoramiento</h3>
          <p>Consultanos de forma directa ante cualquier duda sobre tu elección.</p>
        </div>
      </section>

    {/* Nueva Sección de Ubicación / Cómo llegar */}
      <section className="ubicacion-section">
        <h2>¿Cómo Llegar?</h2>
        <div className="ubicacion-content">
          <div className="ubicacion-info">
            <h3>Nuestra Tienda</h3>
            <p>Acércate a conocer nuestra cava y variedad exclusiva de bebidas.</p>
            <ul className="detalles-ubicacion">
              <li>📍 **Dirección:**Juan Luis Díaz 675, Formosa</li>
              <li>🕒 **Horarios:** Martes a Sabado de 10:00 a 13:00 hs y 17:00 a 23:00 hs</li>
              <li>🕒 **Horarios:** Domingo de 10:00 a 14:00 hs</li>

              <li>📞 **Contacto:** +54 9 3704 519729</li>
            </ul>
          </div>

            <div className="ubicacion-mapa-placeholder">
            {/* Reemplaza este iframe con el código real de Google Maps de tu local */}
            <iframe
              title="Ubicacion Ruta 40"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9927939059735!2d-58.21734592141687!3d-26.196912690060234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945caf3433ea2111%3A0xea7d8992098b0de5!2sJuan%20Luis%20D%C3%ADaz%20677%2C%20P3600KYL%20Formosa!5e0!3m2!1ses!2sar!4v1790649874165!5m2!1ses!2sar"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>




    </div>
  );
}