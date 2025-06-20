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
            className="h-24 w-auto sm:h-32"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            TANAYAS
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gold-400 font-semibold mb-4">
          Fast Boat & Activities Organizer
        </p>

        {/* Trusted Partner */}
        <p className="text-lg sm:text-xl text-gold-200 mb-6 max-w-2xl mx-auto leading-relaxed">
          Your trusted partner since 2007.
        </p>

        {/* Main Description */}
        <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          We offer unforgettable fast boat adventures and exciting activities to Bali, Nusa Penida, Gili Islands, and Lombok.
          Enjoy personalized service and direct booking via WhatsApp for instant confirmation.
        </p>

        {/* WhatsApp Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="group inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 ease-out dark:bg-green-600 dark:hover:bg-green-700 dark:shadow-lg dark:hover:shadow-green-700/25"
        >
          <span>Book via WhatsApp</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;