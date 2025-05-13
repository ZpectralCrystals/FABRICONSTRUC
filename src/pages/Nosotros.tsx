const Nosotros = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">¿Quiénes Somos?</h2>
        <p className="mb-6 text-lg text-justify">
          En <strong>FABRICONSTRUC</strong>, somos una empresa peruana dedicada a brindar soluciones
          integrales en infraestructura para industrias pequeñas, medianas y grandes. Nos
          especializamos en la fabricación y montaje de estructuras metálicas, instalación de
          tuberías industriales, ejecución de obras civiles, así como servicios de ingeniería y
          soporte técnico calificado.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Misión</h3>
            <p className="text-gray-600">
              Consolidarnos como una empresa reconocida a nivel nacional por la calidad, seguridad y
              eficiencia de nuestros servicios en infraestructura industrial y civil, respondiendo a
              los retos de nuestros clientes con profesionalismo.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Visión</h3>
            <p className="text-gray-600">
              Ser una empresa líder en el sector, destacando por la excelencia operativa,
              innovación constante y compromiso con el desarrollo sostenible y el bienestar de
              nuestros colaboradores.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-3 text-gray-700">Política de Calidad</h3>
          <p className="text-gray-600">
            En FABRICONSTRUC, asumimos el compromiso de ofrecer servicios con altos estándares de
            calidad y seguridad, contando con personal calificado y fomentando una cultura de mejora
            continua para la satisfacción de nuestros clientes.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-3 text-gray-700">Política de Seguridad</h3>
          <p className="text-gray-600">
            Mantenemos un ambiente de trabajo seguro, implementando medidas preventivas para
            proteger la integridad física y la salud de nuestros trabajadores, así como revisiones
            y auditorías continuas en nuestros sistemas de gestión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
