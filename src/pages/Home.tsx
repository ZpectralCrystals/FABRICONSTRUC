import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gray-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Soluciones Integrales en Infraestructura
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          En FABRICONSTRUC brindamos soporte a industrias en fabricación metálica, obras civiles,
          tuberías industriales e ingeniería.
        </p>
        <Link
          to="/contacto"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
        >
          Contáctanos
        </Link>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-2">Misión</h2>
            <p>
              Consolidarnos como una empresa reconocida a nivel nacional por la calidad en
              fabricación de estructuras metálicas, tuberías industriales y obras civiles.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Visión</h2>
            <p>
              Ser una empresa de referencia en el mercado peruano, destacando por nuestra
              eficiencia, competitividad y compromiso con el bienestar de nuestros trabajadores.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nuestros Servicios</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Obras Civiles</h3>
            <p>
              Construcción de locales, viviendas, muros, veredas, pisos y remodelaciones interiores.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Estructuras Metálicas</h3>
            <p>
              Fabricación y montaje de naves industriales, barandas, coberturas y plataformas.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Tuberías e Ingeniería</h3>
            <p>
              Termofusión, montaje de tuberías, diseño de proyectos y levantamientos topográficos.
            </p>
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN */}
      <section className="bg-yellow-400 py-12 text-center text-gray-900 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para tu próximo proyecto?</h2>
        <p className="mb-6">
          Contáctanos hoy mismo y obtén una propuesta personalizada para tu infraestructura.
        </p>
        <Link
          to="/contacto"
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Escríbenos
        </Link>
      </section>
    </div>
  );
};

export default Home;
