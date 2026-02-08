// src/pages/SeleccionDetalle.jsx
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const SeleccionDetalle = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/seleccion/${id}/estadistica`)
      .then(res => setData(res.data))
      .catch(err => {
        console.error(err);
        alert('Error al cargar los datos');
      });
  }, [id]);

  if (!data) return <p style={{ color: 'white', textAlign: 'center' }}>Cargando...</p>;

  return (
    <div style={styles.container}>
      <img
        src={`http://127.0.0.1:8000/${data.bandera}`} // ✅ mantengo tu ruta funcional
        alt={data.seleccion}
        style={styles.bandera}
      />
      <h1 style={styles.nombre}>{data.seleccion}</h1>
      <h2 style={styles.subtitulo}>Summary</h2>
      <ul style={styles.lista}>
        <li><b>Played</b>: {data.pj}</li>
        <li><b>Wins</b>: {data.pg}</li>
        <li><b>Drawn</b>: {data.pe}</li>
        <li><b>Lost</b>: {data.pp}</li>
        <li><b>Points</b>: {data.puntos}</li>
      </ul>
      <button onClick={() => navigate('/')} style={styles.boton}>Volver al inicio</button>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
    minHeight: '100vh',
    color: 'white',
    padding: '2rem',
    textAlign: 'center'
  },
  bandera: {
    width: '120px',
    borderRadius: '10px',
    marginBottom: '1rem'
  },
  nombre: {
    fontSize: '2rem',
    color: '#ffd700'
  },
  subtitulo: {
    fontSize: '1.5rem',
    margin: '1rem 0',
    color: '#ffffff'
  },
  lista: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.2rem',
    lineHeight: '2rem'
  },
  boton: {
    marginTop: '2rem',
    padding: '0.6rem 1.2rem',
    background: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default SeleccionDetalle;
