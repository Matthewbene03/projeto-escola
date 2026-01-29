/*
Arquivo de entrada da aplicação React.
Aqui o React é inicializado e o App é renderizado no DOM.
Também é onde o Redux Provider é configurado para disponibilizar a store global.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
