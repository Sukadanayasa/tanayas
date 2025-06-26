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

function App() {
  useTheme();
  usePageAnimations();

  return (
    <div className="min-h-screen relative overflow-hidden"> {/* Added relative and overflow-hidden */}
      {/* Global Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Continuous tropical island background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      </div>

      <ScrollToTop />
      <Header />
      <main className="relative z-10"> {/* Ensure main content is above the background */}
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