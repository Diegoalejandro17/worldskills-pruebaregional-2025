// src/pages/Selecciones.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Selecciones = () => {
  const [selecciones, setSelecciones] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/selecciones')
      .then(res => setSelecciones(res.data))
      .catch(err => console.error('Error cargando selecciones', err));
  }, []);

  const filtrar = selecciones.filter(s =>
    s.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const irADetalle = (id) => {
    navigate(`/seleccion/${id}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Selecciones de fútbol</h1>

      <input
        type="text"
        placeholder="🔍 Buscar"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={styles.input}
      />

      <div style={styles.lista}>
        {filtrar.map(sel => (
          <div key={sel.id} style={styles.card} onClick={() => irADetalle(sel.id)}>
            <img
              src={`http://127.0.0.1:8000/${sel.bandera}`}
              alt={sel.nombre}
              style={styles.bandera}
              onError={(e) => e.target.style.display = 'none'}
            />
            <span style={styles.nombre}>{sel.nombre}</span>
          </div>
        ))}
      </div>

      {/* Botón fijo abajo */}
      <button style={styles.botonInicio} onClick={() => navigate('/')}>
        🏠 Inicio
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #0f0236, #00aaff)',
    padding: '1.5rem',
    boxSizing: 'border-box',
    position: 'relative',
    paddingBottom: '80px' // espacio para el botón
  },
  titulo: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '16px',
    marginBottom: '20px',
    backgroundColor: '#12223a',
    color: 'white',
    outline: 'none',
  },
  lista: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 20px',
    borderRadius: '20px',
    background: 'linear-gradient(to right, #06b2fa, #4a0079)',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s',
  },
  bandera: {
    width: '50px',
    height: '32px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginRight: '16px',
  },
  nombre: {
    flex: 1,
    textAlign: 'left',
  },
  botonInicio: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffd700',
    color: '#000',
    fontSize: '16px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    cursor: 'pointer',
    zIndex: 999
  }
};

export default Selecciones;
