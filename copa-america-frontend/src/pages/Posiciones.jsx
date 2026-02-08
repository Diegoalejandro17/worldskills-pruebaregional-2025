import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Posiciones = () => {
  const [tabla, setTabla] = useState([]);

  useEffect(() => {
    api.get('/posiciones')
      .then(res => setTabla(res.data))
      .catch(err => console.error('Error al cargar la tabla de posiciones', err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Tabla de posiciones</h2>
      <div style={styles.tablaContainer}>
        <table style={styles.tabla}>
          <thead>
            <tr>
              <th>#</th>
              <th>Club</th>
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>Pts</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td style={styles.clubCell}>
                  <img src={`http://localhost:8000/${item.bandera}`} alt={item.nombre} style={styles.bandera} />
                  {item.nombre}
                </td>
                <td>{item.pj}</td>
                <td>{item.pg}</td>
                <td>{item.pe}</td>
                <td>{item.pp}</td>
                <td style={{ fontWeight: 'bold' }}>{item.puntos}</td>
                <td>{item.gf}</td>
                <td>{item.gc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #000428, #004e92)',
    fontFamily: 'sans-serif',
    color: 'white'
  },
  titulo: {
    fontSize: '1.8rem',
    textAlign: 'center',
    color: 'yellow',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  },
  tablaContainer: {
    overflowX: 'auto',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
  },
  tabla: {
    width: '100%',
    borderCollapse: 'collapse',
    color: '#000',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  clubCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  bandera: {
    width: '24px',
    height: '16px',
    objectFit: 'cover',
    borderRadius: '2px',
    border: '1px solid #ccc',
  }
};

export default Posiciones;
