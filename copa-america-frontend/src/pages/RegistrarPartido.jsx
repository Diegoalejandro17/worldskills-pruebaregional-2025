import React, { useEffect, useState } from 'react';
import api from '../services/api';

const RegistrarPartido = () => {
  const [selecciones, setSelecciones] = useState([]);
  const [form, setForm] = useState({
    equipo1_id: '',
    equipo2_id: '',
    goles_equipo1: '',
    goles_equipo2: '',
    fecha: '',
    hora: ''
  });

  useEffect(() => {
    api.get('/selecciones')
      .then(res => setSelecciones(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/resultados', form)
      .then(() => alert('Resultado guardado correctamente'))
      .catch(err => console.error('Error al registrar el resultado', err));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Registrar resultados</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>📅</span>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <span style={styles.icon}>⏰</span>
          <input
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.labelRow}>
          <label>Equipo Nacional</label>
          <label>Goles</label>
        </div>

        <div style={styles.equipoRow}>
          <select
            name="equipo1_id"
            value={form.equipo1_id}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">Selecciona</option>
            {selecciones.map(sel => (
              <option key={sel.id} value={sel.id}>{sel.nombre}</option>
            ))}
          </select>
          <input
            type="number"
            name="goles_equipo1"
            value={form.goles_equipo1}
            onChange={handleChange}
            required
            style={styles.goalInput}
          />
        </div>

        <div style={styles.equipoRow}>
          <select
            name="equipo2_id"
            value={form.equipo2_id}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">Selecciona</option>
            {selecciones.map(sel => (
              <option key={sel.id} value={sel.id}>{sel.nombre}</option>
            ))}
          </select>
          <input
            type="number"
            name="goles_equipo2"
            value={form.goles_equipo2}
            onChange={handleChange}
            required
            style={styles.goalInput}
          />
        </div>

        <button type="submit" style={styles.boton}>Guardar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
    fontFamily: 'sans-serif',
    color: 'white'
  },
  titulo: {
    fontSize: '2rem',
    textAlign: 'center',
    color: 'yellow',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '0.5rem 1rem',
    gap: '1rem'
  },
  icon: {
    fontSize: '1.5rem'
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    outline: 'none'
  },
  labelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold'
  },
  equipoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  select: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '8px'
  },
  goalInput: {
    width: '60px',
    padding: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
    borderRadius: '8px'
  },
  boton: {
    background: 'linear-gradient(to right, #00b09b, #96c93d)',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.8rem',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '1rem'
  }
};

export default RegistrarPartido;
