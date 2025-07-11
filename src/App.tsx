import { useTheme } from "./hooks/useTheme";
import { usePageAnimations } from "./hooks/usePageAnimations";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import About from "./components/About";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import DriverPage from "./pages/DriverPage"; // Import the new DriverPage

function App() {
  useTheme();
  usePageAnimations();

  return (
    <div
      className={`min-h-screen bg-white transition-colors duration-500`}
    >
      <ScrollToTop />
      <Header />
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
          <Route path="/driver" element={<DriverPage />} /> {/* New route for DriverPage */}
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;