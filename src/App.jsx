import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BebidasProvider } from './context/BebidasContext';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Catalogo from './componentes/Catalogo';
import AdminCarga from './componentes/AdminCarga';
import Promocion from './componentes/Promocion.jsx';
import BotonWhatsapp from './componentes/BotonWhatsapp'; // <--- 1. Importas el componente

import './estilos/App.css';

export default function App() {
  return (
    <BebidasProvider>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Navbar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/promocion" element={<Promocion />} />
              <Route path="/admin" element={<AdminCarga />} />
            </Routes>
          </main>

          <Footer />
        </div>
        <BotonWhatsapp /> {/* <--- 2. Agregas el componente aquí */}
      </BrowserRouter>
    </BebidasProvider>
  );
}