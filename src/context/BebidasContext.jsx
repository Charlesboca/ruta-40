import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// 1. Creamos el contexto
const BebidasContext = createContext();

// 2. Creamos el Provider que envolverá la app
export function BebidasProvider({ children }) {
  const [bebidas, setBebidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const coleccionRef = collection(db, 'bebidas');

  // Función para obtener las bebidas de Firebase (solo se llama al arrancar)
  const obtenerBebidas = async () => {
    try {
      setLoading(true);
      const data = await getDocs(coleccionRef);
      const lista = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBebidas(lista);
    } catch (err) {
      setError('Error al cargar las bebidas de Firebase');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar una bebida nueva y actualizar el estado local al instante
  const agregarBebida = async (nuevaBebida) => {
    try {
      const docRef = await addDoc(coleccionRef, nuevaBebida);
      // Agregamos al estado local sin necesidad de volver a consultar a Firebase
      setBebidas((prev) => [...prev, { id: docRef.id, ...nuevaBebida }]);
      alert('¡Bebida cargada con éxito a la base de datos!');
    } catch (err) {
      console.error('Error al agregar bebida:', err);
      alert('Hubo un error al guardar la bebida.');
    }
  };

  useEffect(() => {
    obtenerBebidas();
  }, []);

  return (
    <BebidasContext.Provider value={{ bebidas, loading, error, agregarBebida, recargarBebidas: obtenerBebidas }}>
      {children}
    </BebidasContext.Provider>
  );
}

// 3. Hook personalizado para usar el contexto fácilmente en cualquier componente
export function useBebidasContext() {
  const context = useContext(BebidasContext);
  if (!context) {
    throw new Error('useBebidasContext debe usarse dentro de un BebidasProvider');
  }
  return context;
}