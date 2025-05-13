
import { useParams, useNavigate } from "react-router-dom";

const serviciosData = {
  "obras-civiles": {
    nombre: "Obras Civiles",
    descripcion:
      "Nos especializamos en construcción de locales industriales y comerciales, viviendas, muros, veredas y más. Garantizamos calidad, cumplimiento de plazos y seguridad en cada proyecto.",
    imagenes: [
      "/servicios/obras-civiles.jpg",
      "/servicios/obras-civiles-2.jpg",
      "/servicios/obras-civiles-3.jpg"
    ],
    whatsapp: "51983234567"
  },
  "estructuras-metalicas": {
    nombre: "Estructuras Metálicas",
    descripcion:
      "Diseñamos, fabricamos y montamos estructuras metálicas como naves industriales, plataformas, escaleras, coberturas y más, adaptándonos a tus necesidades técnicas y estructurales.",
    imagenes: [
      "/servicios/estructuras-metalicas.jpg",
      "/servicios/estructuras-metalicas-2.jpg",
      "/servicios/estructuras-metalicas-3.jpg"
    ],
    whatsapp: "51983234567"
  },
  "tuberias-industriales": {
  nombre: "Tuberías Industriales",
  descripcion:
    "Realizamos termofusión de tuberías HDPE, así como fabricación y montaje de tuberías industriales (SPOOL) en acero SCH20, SCH40, SCH80 y otras especificaciones. Aseguramos durabilidad, presión y rendimiento óptimo en entornos industriales exigentes.",
  imagenes: [
    "/servicios/tuberias-industriales.jpg",
    "/servicios/tuberias-industriales-2.jpg",
    "/servicios/tuberias-industriales-3.jpg"
  ],
  whatsapp: "51983234567"
},

"ingenieria": {
  nombre: "Ingeniería y Diseño",
  descripcion:
    "Ofrecemos servicios integrales de ingeniería para proyectos industriales y civiles. Realizamos elaboración de planos, levantamientos topográficos, estudios técnicos, simulaciones estructurales y documentación para expedientes técnicos y licencias.",
  imagenes: [
    "/servicios/ingenieria.jpg",
    "/servicios/ingenieria-2.jpg",
    "/servicios/ingenieria-3.jpg"
  ],
  whatsapp: "51983234567"
},

"personal-tecnico": {
  nombre: "Soporte Técnico Especializado",
  descripcion:
    "Contamos con un equipo de operarios, técnicos y especialistas capacitados en albañilería, encofrado, habilitado de acero, instalación sanitaria, pintado, soldadura y montaje. El personal es evaluado y capacitado bajo estándares de seguridad industrial.",
  imagenes: [
    "/servicios/personal-tecnico.jpg",
    "/servicios/personal-tecnico-2.jpg",
    "/servicios/personal-tecnico-3.jpg"
  ],
  whatsapp: "51983234567"
}
};

export default function DetalleServicio() {
  const { servicioId } = useParams();
  const navigate = useNavigate();
  const servicio = serviciosData[servicioId as keyof typeof serviciosData];

  if (!servicio) return <p className="text-center mt-10 text-red-500">Servicio no encontrado.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Botón de regreso */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-blue-600 hover:underline"
      >
        ← Volver atrás
      </button>

      {/* Título y descripción */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{servicio.nombre}</h1>
      <p className="text-gray-700 mb-8">{servicio.descripcion}</p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {servicio.imagenes.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={servicio.nombre}
            className="rounded-lg object-cover w-full h-48 shadow-sm"
          />
        ))}
      </div>

      {/* Botón WhatsApp */}
      <a
        href={`https://wa.me/${servicio.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
      >
        Consultar vía WhatsApp
      </a>
    </div>
  );
}
