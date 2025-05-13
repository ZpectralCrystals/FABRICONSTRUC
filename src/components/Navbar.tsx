import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navClasses = "block py-2 px-4 text-sm hover:text-yellow-400";

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-yellow-400">
          FABRICONSTRUC
        </Link>

        {/* Botón para móviles */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú para escritorio */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><NavLink to="/" className={navClasses}>Inicio</NavLink></li>
          <li><NavLink to="/servicios" className={navClasses}>Servicios</NavLink></li>
          <li><NavLink to="/nosotros" className={navClasses}>Nosotros</NavLink></li>
          <li><NavLink to="/contacto" className={navClasses}>Contacto</NavLink></li>
          <li><Link to="/servicioscard" className="hover:text-yellow-400">ServiciosCard</Link></li>
        </ul>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-2">
            <li><NavLink to="/" onClick={toggleMenu} className={navClasses}>Inicio</NavLink></li>
            <li><NavLink to="/servicios" onClick={toggleMenu} className={navClasses}>Servicios</NavLink></li>
            <li><NavLink to="/nosotros" onClick={toggleMenu} className={navClasses}>Nosotros</NavLink></li>
            <li><NavLink to="/contacto" onClick={toggleMenu} className={navClasses}>Contacto</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
