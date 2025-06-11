import React from "react";
import { ArrowRight } from "lucide-react";
import useScrollToSection from "../hooks/useScrollToSection"; // Import the new hook

const Hero: React.FC = () => {
  const scrollToSection = useScrollToSection(); // Use the custom hook

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background (waves/gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 animate-gradient-move dark:from-black/80 dark:via-black/70 dark:to-black/80" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/70" />
      {/* Tagline */}
      <div className="relative z-10 text-center px-4 max-w-page-max mx-auto">
        <p className="text-base sm:text-lg text-gold-300 font-semibold tracking-wide mb-2 dark:text-gold-400">
          Island Hopping Made Effortless
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Get Real-Time Fastboat Schedules,
          <br />
          <span className="text-gold-400 dark:text-gold-500">
            Insider Tips &amp; Local Support
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gold-200 mb-10 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
          Plan your Bali island adventure with expert guidance, up-to-date
          routes, and honest local advice—no stress, no guesswork.
        </p>
        <button
          onClick={() => scrollToSection("contact")} // Use the hook function
          className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-gold-500/25 transform hover:scale-105 transition-all duration-300 ease-out dark:from-gold-700 dark:to-gold-800 dark:hover:from-gold-800 dark:hover:to-gold-900 dark:shadow-lg dark:hover:shadow-gold-700/25"
        >
          <span>Plan My Trip Now</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <p className="text-sm text-gold-200 mt-4 opacity-90 dark:text-gold-300">
          Free • Instant • No Booking Required
        </p>
      </div>
      {/* Scroll Indicator - only on desktop */}
      <div className="hidden sm:absolute sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center dark:border-gray-500/50">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse dark:bg-gray-300/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;