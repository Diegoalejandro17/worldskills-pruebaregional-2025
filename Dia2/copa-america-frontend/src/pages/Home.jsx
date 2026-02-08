import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFutbol, FaChartBar, FaHome, FaListOl, FaPlusCircle, FaClipboardList } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* barra navegacion */}
      <div style={styles.topNav}>
        <FaHome style={styles.navIcon} onClick={() => navigate('/')} title="Inicio" />
        <FaFutbol style={styles.navIcon} onClick={() => navigate('/selecciones')} title="Selecciones" />
        <FaListOl style={styles.navIcon} onClick={() => navigate('/resultados')} title="Resultados" />
        <FaChartBar style={styles.navIcon} onClick={() => navigate('/posiciones')} title="Posiciones" />
        <FaPlusCircle style={styles.navIcon} onClick={() => navigate('/registrar-seleccion')} title="Registrar Selección" />
        <FaClipboardList style={styles.navIcon} onClick={() => navigate('/registrar-partido')} title="Registrar Partido" />
      </div>

      <h1 style={styles.title}>Bienvenido</h1>

      <div style={{ ...styles.card, ...styles.gradientBlue }} onClick={() => navigate('/selecciones')}>
        <FaFutbol style={styles.icon} />
        <span style={styles.cardText}>Selecciones de fútbol</span>
      </div>

      <div style={{ ...styles.card, ...styles.gradientYellow }} onClick={() => navigate('/resultados')}>
        <FaListOl style={styles.icon} />
        <span style={styles.cardText}>Resultados de partidos</span>
      </div>

      <div style={{ ...styles.card, ...styles.gradientGreen }} onClick={() => navigate('/posiciones')}>
        <FaChartBar style={styles.icon} />
        <span style={styles.cardText}>Tabla de posiciones</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    paddingTop: '80px',
    paddingBottom: '40px',
    background: 'linear-gradient(to bottom, #000428, #004e92)',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '6vw',
    fontWeight: 'bold',
    marginBottom: '5vh',
    color: '#FFD700',
  },
  card: {
    width: '90%',
    maxWidth: '400px',
    padding: '5vw',
    marginBottom: '5vw',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '5vw',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  cardText: {
    fontSize: '4.5vw',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: '6vw',
  },
  gradientBlue: {
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
  },
  gradientYellow: {
    background: 'linear-gradient(90deg, #FFD700, #FF4500)',
  },
  gradientGreen: {
    background: 'linear-gradient(90deg, #00FF7F, #1E90FF)',
  },
  topNav: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '60px',
    width: '100%',
    background: '#000000dd',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 100,
    backdropFilter: 'blur(4px)',
  },
  navIcon: {
    fontSize: '6vw',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Home;
