
const clientes = [
  {
    //nombre: "Neuma Peru",
    logo: "https://neumaperu.com.pe/assets/svg/LOGO-NEUMA-blanco.svg"
  },
  {
    // nombre: "Primax",
    logo: "https://primax.com.pe/wp-content/uploads/2025/01/Primax-logo1-page.png"
  },
  {
    // nombre: "Racionalizacion Empresarial",
    logo: "https://www.raciemsa.com.pe/wp-content/uploads/2021/11/raciemsa-lg-color.png"
  },
  {
    // nombre: "Corporacion Ramis",
    logo: "https://corporacionramis.com.pe/wp-content/uploads/2021/09/logo-ramis.png"
  },
  {
    // nombre: "FH INGENIEROS",
    logo: "https://fhingenieros.com.pe/wp-content/uploads/2025/02/logofhingenieros.png"
  }
];

const Clientes = () => {
  return (
    <section className="py-12 px-4 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Clientes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {clientes.map((cliente, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded shadow p-4">
            <img src={cliente.logo} alt={" "} className="h-24 object-contain mb-2" />
            <p className="text-sm text-gray-700 font-medium"></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientes;
