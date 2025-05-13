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
          <img src="/logo/fabriconstruc_dark.png" alt="Fabriconstruc Logo" className="w-60 h-auto" />
        </Link>

        {/* Botón para móviles */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Ícono ✕
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
              />
            ) : (
              // Ícono ☰
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>

        {/* Menú para escritorio */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><NavLink to="/" className={navClasses}>Inicio</NavLink></li>
          <li><NavLink to="/servicios" className={navClasses}>Servicios</NavLink></li>
          <li><NavLink to="/nosotros" className={navClasses}>Nosotros</NavLink></li>
          <li><NavLink to="/contacto" className={navClasses}>Contacto</NavLink></li>
          <li><NavLink to="/servicioscard" className={navClasses}>ServiciosCard</NavLink></li>
          <li><NavLink to="/clientes" className={navClasses}>Clientes</NavLink></li>
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
            <li><NavLink to="/servicioscard" onClick={toggleMenu} className={navClasses}>ServiciosCard</NavLink></li>
            <li><NavLink to="/clientes" onClick={toggleMenu} className={navClasses}>Clientes</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

