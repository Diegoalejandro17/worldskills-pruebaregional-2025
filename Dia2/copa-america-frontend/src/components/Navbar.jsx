import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaListOl, FaFutbol, FaClipboardList, FaPlusCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        <FaHome />
        <span>Inicio</span>
      </NavLink>
      <NavLink to="/selecciones" className="nav-link">
        <FaUsers />
        <span>Selecciones</span>
      </NavLink>
      <NavLink to="/posiciones" className="nav-link">
        <FaListOl />
        <span>Posiciones</span>
      </NavLink>
      <NavLink to="/resultados" className="nav-link">
        <FaFutbol />
        <span>Resultados</span>
      </NavLink>
      <NavLink to="/registrar-partido" className="nav-link">
        <FaClipboardList />
        <span>Registrar</span>
      </NavLink>
      <NavLink to="/registrar-seleccion" className="nav-link">
        <FaPlusCircle />
        <span>Selección</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
