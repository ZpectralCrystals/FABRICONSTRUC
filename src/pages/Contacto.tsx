import { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!nombre || !correo || !mensaje) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setError("");

    // Confirmación antes de redirigir
    const confirmar = window.confirm("¿Deseas enviar este mensaje por WhatsApp?");
    if (!confirmar) return;

    const texto = `Hola, soy *${nombre}*.\nMi correo es: ${correo}\nMensaje:\n${mensaje}`;
    const url = `https://wa.me/51983234567?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>

        <p className="text-center text-gray-600 mb-10">
          Estamos listos para ayudarte con tu próximo proyecto. Puedes comunicarte con nosotros
          por los siguientes medios:
        </p>

        {/* ... info y mapa igual que antes ... */}

        {/* Formulario */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">Escríbenos</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block font-medium text-sm mb-1">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="correo" className="block font-medium text-sm mb-1">Correo</label>
              <input
                id="correo"
                name="correo"
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block font-medium text-sm mb-1">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
            >
              Enviar mensaje por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
