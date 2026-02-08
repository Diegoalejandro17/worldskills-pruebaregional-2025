import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const RegistrarSeleccion = () => {
  const [form, setForm] = useState({
    nombre: '',
    bandera: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'bandera') {
      setForm({ ...form, bandera: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('nombre', form.nombre);
    data.append('bandera', form.bandera);

    api.post('/selecciones', data)
      .then(() => {
        alert('Selección registrada con éxito');
        navigate('/selecciones');
      })
      .catch(err => console.error('Error al registrar selección', err));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registrar selección</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>🏷️ Nombre del país</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Ej. Colombia"
          required
          style={styles.input}
        />

        <label style={styles.label}>📷 Bandera</label>
        <input
          type="file"
          name="bandera"
          onChange={handleChange}
          accept="image/*"
          required
          style={styles.fileInput}
        />

        <button type="submit" style={styles.button}>Guardar</button>
      </form>

      <button
        onClick={() => navigate('/')}
        style={styles.floatingButton}
        title="Volver al inicio"
      >
        🏠
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
    color: 'white',
    fontFamily: 'sans-serif',
    padding: '1rem',
    paddingBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'yellow',
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '1.5rem',
    borderRadius: '1rem'
  },
  label: {
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
    color: '#000'
  },
  fileInput: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '10px',
    backgroundColor: '#fff',
    color: '#000'
  },
  button: {
    padding: '1rem',
    background: 'linear-gradient(to right, #00b09b, #96c93d)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out'
  },
  floatingButton: {
    position: 'fixed',
    bottom: '1.5rem',
    right: '1.5rem',
    width: '60px',
    height: '60px',
    backgroundColor: '#00c853',
    color: 'white',
    fontSize: '1.5rem',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    zIndex: 1000
  }
};

export default RegistrarSeleccion;
