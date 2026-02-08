import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Selecciones from './pages/Selecciones';
import SeleccionDetalle from './pages/SeleccionDetalle';
import Resultados from './pages/Resultados';
import Posiciones from './pages/Posiciones';
import RegistrarPartido from './pages/RegistrarPartido';
import RegistrarSeleccion from './pages/RegistrarSeleccion';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selecciones" element={<Selecciones />} />
          <Route path="/seleccion/:id" element={<SeleccionDetalle />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/posiciones" element={<Posiciones />} />
          <Route path="/registrar-partido" element={<RegistrarPartido />} />
          <Route path="/registrar-seleccion" element={<RegistrarSeleccion />} />
        </Routes>
      </div>
      <Navbar />
    </>
  );
}

export default App;
