import React, { useState } from 'react';
import { useBebidasContext } from '../context/BebidasContext';
import { bebidasMock } from '../data/bebidasMock';
import '../estilos/Catalogo.css';

export default function Catalogo() {
  const { bebidas } = useBebidasContext();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Si Firestore no trae nada aún, usamos el mock
  const listaParaMostrar = (bebidas && bebidas.length > 0) ? bebidas : bebidasMock;

  // Extraemos todas las categorías únicas disponibles para armar los botones
  const categorias = ['Todas', ...new Set(listaParaMostrar.map(b => b.tipo || 'Otros'))];

  // Filtramos la lista según lo que el usuario elija
  const listaFiltrada = categoriaSeleccionada === 'Todas' 
    ? listaParaMostrar 
    : listaParaMostrar.filter(b => (b.tipo || 'Otros') === categoriaSeleccionada);

  // Agrupamos la lista (filtrada o completa) para mantener el diseño por secciones si se desea,
  // o podemos listar directamente. Aquí agrupamos las filtradas:
  const bebidasAgrupadas = listaFiltrada.reduce((acc, bebida) => {
    const tipo = bebida.tipo || 'Otros';
    if (!acc[tipo]) {
      acc[tipo] = [];
    }
    acc[tipo].push(bebida);
    return acc;
  }, {});

  return (
    <div className="catalogo-container">
      <h2>Catálogo de Bebidas</h2>
      
      {/* Botones de Filtro */}
      <div className="filtros-container">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn-filtro ${categoriaSeleccionada === cat ? 'activo' : ''}`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Recorremos las categorías resultantes */}
      {Object.keys(bebidasAgrupadas).length > 0 ? (
        Object.keys(bebidasAgrupadas).map((tipo) => (
          <div key={tipo} className="categoria-seccion">
            <h3 className="titulo-categoria">{tipo}</h3>
            
            <div className="grid-bebidas">
              {bebidasAgrupadas[tipo].map((bebida) => (
                <div key={bebida.id} className="card-bebida">
                  {bebida.imagen && <img src={bebida.imagen} alt={bebida.nombre} className="img-bebida" />}
                  <h4>{bebida.nombre}</h4>
                  <p className="precio">${bebida.precio.toLocaleString('es-AR')}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="no-productos">No hay productos en esta categoría.</p>
      )}
    </div>
  );
}