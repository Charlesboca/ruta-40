import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './estilos/App.css'; // Si tienes estilos generales ahí

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);