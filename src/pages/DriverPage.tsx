import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import DriverHeroCarousel from "../components/DriverHeroCarousel"; // Mengganti DriverHero
import DriverProductsCarousel from "../components/DriverProductsCarousel";
import About from "../components/About"; // Reusing About section
import Contact from "../components/Contact"; // Reusing Contact section
import ScrollToTop from "../components/ScrollToTop"; // Ensure scroll to top on page load

const DriverPage = () => {
  return (
    <div className={`min-h-screen bg-white transition-colors duration-500`}>
      <ScrollToTop />
      <Header />
      <main>
        <DriverHeroCarousel /> {/* Menggunakan DriverHeroCarousel */}
        <DriverProductsCarousel />
        <About /> {/* Reusing the About section */}
        <Contact /> {/* Reusing the Contact section */}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default DriverPage;