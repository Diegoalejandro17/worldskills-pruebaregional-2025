import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaFutbol, FaChartBar } from 'react-icons/fa';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '70px' }}>
      <Outlet />

      <nav style={styles.nav}>
        <FaHome
          style={{ ...styles.icon, color: isActive('/') ? '#FFD700' : '#fff' }}
          onClick={() => navigate('/')}
        />
        <FaFutbol
          style={{ ...styles.icon, color: isActive('/selecciones') ? '#FFD700' : '#fff' }}
          onClick={() => navigate('/selecciones')}
        />
        <FaChartBar
          style={{ ...styles.icon, color: isActive('/posiciones') ? '#FFD700' : '#fff' }}
          onClick={() => navigate('/posiciones')}
        />
      </nav>
    </div>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '60px',
    background: '#111',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0 -1px 5px rgba(0,0,0,0.2)',
    zIndex: 1000,
  },
  icon: {
    fontSize: '6vw',
    cursor: 'pointer',
  },
};

export default Layout;
