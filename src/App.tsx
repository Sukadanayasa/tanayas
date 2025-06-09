import { useTheme } from "./hooks/useTheme";
import { usePageAnimations } from "./hooks/usePageAnimations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import TravelTips from "./components/TravelTips";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const { theme, toggleTheme } = useTheme();
  usePageAnimations();

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500`}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Destinations />
        <HowItWorks />
        <Testimonials />
        <FaqSection />
        <TravelTips />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
