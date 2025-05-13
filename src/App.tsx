
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ServiciosCard from './pages/ServiciosCard';
import DetalleServicio from './pages/DetalleServicio';
import Clientes from './pages/Clientes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicioscard" element={<ServiciosCard />} />
          <Route path="/servicio/:servicioId" element={<DetalleServicio />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
