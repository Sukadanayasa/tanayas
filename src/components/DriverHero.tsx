import React, { useState, useEffect } from "react";
import useScrollToSection from "../hooks/useScrollToSection";

const DriverHero: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    img.onload = () => {
      setImageLoaded(true);
    };
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section id="driver-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <img
        src="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Fast boat on turquoise water approaching a tropical island"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for text readability */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <img
            src="/tanayas-logo.svg"
            alt="Tanayas Logo"
            className="h-28 w-auto sm:h-36 lg:h-44"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gold-500 leading-tight">
            TANAYAS
          </h1>
        </div>

        <p className="text-2xl sm:text-3xl lg:text-4xl text-gold-400 font-semibold mb-4">
          Mitra Terpercaya Anda untuk Petualangan Pulau
        </p>

        <p className="text-xl sm:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed">
          Sebagai driver, maksimalkan penghasilan Anda dengan menawarkan tiket fast boat dan aktivitas pulau kepada pelanggan Anda.
        </p>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Bergabunglah dengan Tanayas dan berikan pengalaman terbaik kepada wisatawan dengan layanan yang mudah dan terpercaya.
        </p>

        <button
          onClick={() => scrollToSection('driver-products')}
          className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white px-8 py-3 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-lg mt-6"
        >
          Lihat Penawaran Kami
        </button>
      </div>
    </section>
  );
};

export default DriverHero;