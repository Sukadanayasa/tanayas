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
  // We still call useTheme to ensure the 'light' class is applied to html
  // but we no longer need the theme state or toggleTheme function directly here
  useTheme();
  usePageAnimations();

  return (
    <div
      className={`min-h-screen bg-white transition-colors duration-500`} // Fixed to light mode background
    >
      <Header /> {/* No theme or toggleTheme props needed */}
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