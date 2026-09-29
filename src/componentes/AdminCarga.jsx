import React, { useState } from 'react';
import { useBebidasContext } from '../context/BebidasContext';
import '../estilos/AdminCarga.css';

export default function AdminCarga() {
  const { agregarBebida } = useBebidasContext();
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('Cervezas');
  const [precio, setPrecio] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio) {
      alert('Por favor completa al menos el nombre y el precio.');
      return;
    }

    agregarBebida({
      nombre,
      categoria,
      precio: Number(precio),
      imagenUrl,
      descripcion
    });

    // Limpiar formulario
    setNombre('');
    setPrecio('');
    setImagenUrl('');
    setDescripcion('');
  };

  return (
    <div className="admin-container">
      <h2>Panel de Carga - Ruta 40</h2>
      <p>Agregá nuevas bebidas al catálogo para poblar la tienda.</p>
      
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Nombre de la bebida:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Ej: Fernet Branca 750ml"
            required 
          />
        </div>

        <div className="form-group">
          <label>Categoría:</label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="Cervezas">Cervezas</option>
            <option value="Vinos">Vinos y Espumantes</option>
            <option value="Bebidas Blancas">Bebidas Blancas y Fernet</option>
            <option value="Aperitivos">Aperitivos</option>
            <option value="Sin Alcohol">Sin Alcohol</option>
          </select>
        </div>

        <div className="form-group">
          <label>Precio ($):</label>
          <input 
            type="number" 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
            placeholder="Ej: 8500"
            required 
          />
        </div>

        <div className="form-group">
          <label>URL de la Imagen:</label>
          <input 
            type="text" 
            value={imagenUrl} 
            onChange={(e) => setImagenUrl(e.target.value)} 
            placeholder="https://ejemplo.com/imagen.jpg" 
          />
        </div>

        <div className="form-group">
          <label>Descripción / Graduación:</label>
          <textarea 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            placeholder="Ej: Botella de vidrio 750cc..."
          />
        </div>

        <button type="submit" className="btn-guardar">Guardar</button>
      </form>
    </div>
  );
}