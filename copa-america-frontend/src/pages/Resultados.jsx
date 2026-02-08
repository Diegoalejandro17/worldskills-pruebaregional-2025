// src/pages/Resultados.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Resultados = () => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    api.get('/resultados')
      .then(res => setResultados(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Resultados de partidos</h2>
      <div style={styles.lista}>
        {resultados.map((p) => (
          <div key={p.id} style={styles.card}>
            <div style={styles.banderaYnombre}>
              <img src={`http://localhost:8000/${p.bandera1}`} alt={p.equipo1} style={styles.bandera} />
              <span style={styles.nombre}>{p.equipo1}</span>
            </div>

            <div style={styles.marcador}>
              <span style={styles.gol}>{p.goles_equipo1}</span>
              <span style={styles.dash}>-</span>
              <span style={styles.gol}>{p.goles_equipo2}</span>
            </div>

            <div style={styles.banderaYnombre}>
              <img src={`http://localhost:8000/${p.bandera2}`} alt={p.equipo2} style={styles.bandera} />
              <span style={styles.nombre}>{p.equipo2}</span>
            </div>

            <div style={styles.footer}>
              <span>{p.fecha}</span>
              <span style={styles.hora}>{p.hora}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #000428, #004e92)',
    color: 'white',
    fontFamily: 'sans-serif',
  },
  titulo: {
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
    color: 'yellow',
  },
  lista: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '340px',
    background: 'linear-gradient(to right, #283e51, #485563)',
    padding: '1rem',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  banderaYnombre: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  bandera: {
    width: '35px',
    height: '25px',
    objectFit: 'cover',
    borderRadius: '4px',
    border: '1px solid white',
  },
  nombre: {
    fontSize: '1.1rem',
    fontWeight: '600',
  },
  marcador: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  gol: {
    width: '40px',
    textAlign: 'center',
  },
  dash: {
    margin: '0 8px',
  },
  footer: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: '0.9rem',
    opacity: 0.9,
  },
  hora: {
    marginLeft: 'auto',
  }
};

export default Resultados;
