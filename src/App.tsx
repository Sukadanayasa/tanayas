import { useTheme } from "./hooks/useTheme";
import { usePageAnimations } from "./hooks/usePageAnimations";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import About from "./components/About";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ScrollToTop from "./components/ScrollToTop"; // Import the new component

function App() {
  useTheme();
  usePageAnimations();

  return (
    <div
      className={`min-h-screen bg-white transition-colors duration-500`}
    >
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Destinations />
              <Services />
              <About />
              <Contact />
            </>
          } />
          <Route path="/destinations/:id" element={<DestinationDetailPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;