import { useTheme } from "./hooks/useTheme";
import { usePageAnimations } from "./hooks/usePageAnimations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services"; // Updated import
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  useTheme();
  usePageAnimations();

  return (
    <div
      className={`min-h-screen bg-white transition-colors duration-500`}
    >
      <Header />
      <main>
        <Hero />
        <Services /> {/* Updated component name */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;