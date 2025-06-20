import React from "react";
import { ArrowRight } from "lucide-react";
import useScrollToSection from "../hooks/useScrollToSection";

const Hero: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Fast boat on turquoise water approaching a tropical island"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
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
          We offer unforgettable fast boat adventures and exciting activities to Bali, Nusa Penida, Gili Islands, and Lombok.
        </p>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Enjoy personalized service and direct booking via WhatsApp for instant confirmation.
        </p>

        {/* Explore Our Services Button */}
        <button
          onClick={() => scrollToSection('services')} // Changed to 'services'
          className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white px-8 py-3 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-lg mt-6"
        >
          Explore Our Services {/* Changed button text */}
        </button>
      </div>
    </section>
  );
};

export default Hero;