import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UnicornProvider } from './unicorns/context/UnicornContext';
import UnicornsContainer from './unicorns/UnicornsContainer';
import ProductsRoutes from './products'; // 👉 Importamos el módulo de productos
import './style/style.css'; // Estilos personalizados

function App() {
  return (
    <Router>
      <Routes>
        {/* Unicorns envuelto en su contexto */}
        <Route
          path="/unicornios/*"
          element={
            <UnicornProvider>
              <UnicornsContainer />
            </UnicornProvider>
          }
        />

        {/* Products sin contexto */}
        <Route path="/productos/*" element={<ProductsRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
