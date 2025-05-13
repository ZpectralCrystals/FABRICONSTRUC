const Contacto = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>

        <p className="text-center text-gray-600 mb-10">
          Estamos listos para ayudarte con tu próximo proyecto. Puedes comunicarte con nosotros
          por los siguientes medios:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

export default Contacto;
