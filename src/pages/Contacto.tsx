import { useState } from 'react';

const Contacto = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Mensaje enviado correctamente ✅ (simulado)");
    // Aquí podrías conectar con una API real si lo deseas
  };

  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>

        <p className="text-center text-gray-600 mb-10">
          Estamos listos para ayudarte con tu próximo proyecto. Puedes comunicarte con nosotros
          por los siguientes medios:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Información de Contacto</h3>
            <ul className="text-gray-600 space-y-3">
              <li>
                <strong>Correo:</strong>{' '}
                <a
                  href="mailto:Fabriconstruc2010@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  Fabriconstruc2010@gmail.com
                </a>
              </li>
              <li>
                <strong>Teléfonos:</strong> 944 210 427 / 983 811 193
              </li>
              <li>
                <strong>Dirección:</strong> Pueblo tradicional de Tingo Grande,
                Jacobo Hunter – Arequipa
              </li>
            </ul>
          </div>

          {/* Mapa de Google */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Mapa (Google)</h3>
            <iframe
              title="Ubicación de Fabriconstruc"
              className="w-full h-64 border rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5905681520234!2d-71.573!3d-16.444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424accc3dcad91%3A0xfbbd31deec7d70fc!2sJacobo%20Hunter%2C%20Arequipa!5e0!3m2!1ses!2spe!4v1715537453330"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">Escríbenos</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block font-medium text-sm mb-1">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="correo" className="block font-medium text-sm mb-1">Correo</label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block font-medium text-sm mb-1">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition"
            >
              Enviar mensaje
            </button>

            {formStatus && (
              <p className="text-green-600 text-sm mt-2">{formStatus}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
