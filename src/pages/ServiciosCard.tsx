import { Link } from "react-router-dom";

// Lista estática de servicios
const servicios = [
  {
    nombre: "Obras Civiles",
    imagen: "/servicios/obras-civiles.jpg",
    descripcion: "Construcción, remodelación y mantenimiento de infraestructuras civiles.",
    ruta: "/servicios",
  },
  {
    nombre: "Estructuras Metálicas",
    imagen: "/servicios/estructuras-metalicas.jpg",
    descripcion: "Fabricación y montaje de estructuras metálicas industriales.",
    ruta: "/servicios",
  },
  {
    nombre: "Tuberías Industriales",
    imagen: "/servicios/tuberias-industriales.jpg",
    descripcion: "Instalación y termofusión de tuberías HDPE y acero.",
    ruta: "/servicios",
  },
  {
    nombre: "Ingeniería y Diseño",
    imagen: "/servicios/ingenieria.jpg",
    descripcion: "Planos, levantamientos topográficos y soluciones estructurales.",
    ruta: "/servicios",
  },
  {
    nombre: "Soporte Técnico",
    imagen: "/servicios/personal-tecnico.jpg",
    descripcion: "Personal calificado en construcción, instalaciones y mantenimiento.",
    ruta: "/servicios",
  },
];

const ServiciosCards = () => {
  return (
    <main className="bg-white py-10 px-4">
      {/* Título */}
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Nuestros Servicios</h1>
      </section>

      {/* Tarjetas */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {servicios.map((servicio, index) => (
          <Link
            to={servicio.ruta}
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-md shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="w-40 h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{servicio.nombre}</h3>
            <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default ServiciosCards;
