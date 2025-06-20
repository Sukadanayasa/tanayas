import { useTheme } from "./hooks/useTheme";
import { usePageAnimations } from "./hooks/usePageAnimations";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Services from "./components/Services"; // Import the new Services component
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import About from "./components/About"; // Ensure About is imported if it's a section on the main page
import DestinationDetailPage from "./pages/DestinationDetailPage"; // Import detail page
import ServiceDetailPage from "./pages/ServiceDetailPage"; // Import detail page

function App() {
  useTheme();
  usePageAnimations();

  return (
    <div
      className={`min-h-screen bg-white transition-colors duration-500`}
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Destinations />
              <Services /> {/* Add the Services component to the homepage */}
              <About /> {/* Assuming About is also on the homepage */}
              <Contact />
            </>
          } />
          <Route path="/destinations/:id" element={<DestinationDetailPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          {/* Add routes for other sections if they become full pages, otherwise they remain scroll-to sections on the homepage */}
          <Route path="/contact" element={<Contact />} /> {/* Example: if contact becomes a standalone page */}
          <Route path="/about" element={<About />} /> {/* Example: if about becomes a standalone page */}
          {/* You can add more specific routes here if needed */}
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;