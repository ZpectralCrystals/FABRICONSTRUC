import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
        {/* Empresa */}
        <div>
          <h4 className="text-yellow-400 font-bold text-lg mb-2">FABRICONSTRUC</h4>
          <p>
            Soluciones en estructuras metálicas, obras civiles e ingeniería en el sur del Perú.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold mb-2">Enlaces</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-yellow-400">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-yellow-400">Servicios</Link></li>
            <li><Link to="/nosotros" className="hover:text-yellow-400">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-yellow-400">Contacto</Link></li>
            <li><Link to="/servicioscard" className="hover:text-yellow-400">ServiciosCard</Link></li>
          </ul>
        </div>

        {/* Contacto + redes */}
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <p>Email: <a href="mailto:Fabriconstruc2010@gmail.com" className="text-yellow-400 hover:underline">Fabriconstruc2010@gmail.com</a></p>
          <p>Tel: 944 210 427 / 983 811 193</p>
          <p>Arequipa - Jacobo Hunter</p>

          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.1 3-3.1.9 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.4.7-1.4 1.3v1.6h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/51983234567" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                <path d="M16.004 3c-7.18 0-13 5.82-13 13 0 2.41.66 4.73 1.91 6.77L3 29l6.41-1.91A12.91 12.91 0 0 0 16.004 29c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.59c-2.14 0-4.23-.57-6.06-1.64l-.43-.26-3.8 1.13 1.13-3.7-.28-.44A10.94 10.94 0 0 1 5.98 16c0-5.52 4.49-10 10-10s10 4.48 10 10-4.49 10-10 10zm5.57-7.48c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15s-.76.96-.94 1.16-.35.22-.65.07a8.26 8.26 0 0 1-2.43-1.5 9.1 9.1 0 0 1-1.66-2.07c-.17-.3-.02-.47.13-.62.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.91-2.17-.24-.58-.5-.5-.66-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.58-.08 1.75-.71 2-1.39.25-.68.25-1.27.17-1.39-.08-.12-.27-.2-.57-.35z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} FABRICONSTRUC. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
