import React from "react"; // Removed useState, useEffect as image loading is now global
import { ArrowRight } from "lucide-react";
import useScrollToSection from "../hooks/useScrollToSection";

const Hero: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden py-20"> {/* Removed relative and image-related classes */}
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo and Tanayas Text */}
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

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl lg:text-4xl text-gold-400 font-semibold mb-4">
          Fast Boat & Activities Organizer
        </p>

        {/* Trusted Partner */}
        <p className="text-xl sm:text-2xl text-gold-200 mb-6 max-w-2xl mx-auto leading-relaxed">
          Your trusted partner since 2007.
        </p>

        {/* Main Description */}
        <p className="text-xl sm:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed">
          We offer fast boat tickets and exciting activities to Lembongan, Nusa Penida, Gili Islands, and Lombok.
        </p>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Enjoy personalized service and direct booking via WhatsApp for instant confirmation.
        </p>

        {/* Explore Destinations Button */}
        <button
          onClick={() => scrollToSection('destinations')}
          className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white px-8 py-3 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-lg mt-6"
        >
          Explore Destinations
        </button>
      </div>
    </section>
  );
};

export default Hero;