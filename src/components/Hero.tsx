import React from "react";
import { ArrowRight } from "lucide-react";
import useScrollToSection from "../hooks/useScrollToSection"; // Import the new hook

const Hero: React.FC = () => {
  const scrollToSection = useScrollToSection(); // Use the custom hook

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background (waves/gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-tanayas-950/80 via-tanayas-900/70 to-tanayas-800/80 animate-gradient-move dark:from-gray-950/80 dark:via-gray-900/70 dark:to-gray-800/80" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tanayas-950/70 via-tanayas-900/60 to-tanayas-800/70 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-800/70" />
      {/* Tagline */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-base sm:text-lg text-tanayas-300 font-semibold tracking-wide mb-2 dark:text-tanayas-400">
          Island Hopping Made Effortless
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Get Real-Time Fastboat Schedules,
          <br />
          <span className="text-tanayas-400 dark:text-tanayas-500">
            Insider Tips &amp; Local Support
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-tanayas-200 mb-10 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
          Plan your Bali island adventure with expert guidance, up-to-date
          routes, and honest local advice—no stress, no guesswork.
        </p>
        <button
          onClick={() => scrollToSection("contact")} // Use the hook function
          className="group inline-flex items-center space-x-3 bg-gradient-to-r from-tanayas-600 to-tanayas-700 hover:from-tanayas-700 hover:to-tanayas-800 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-tanayas-500/25 transform hover:scale-105 transition-all duration-300 ease-out dark:from-tanayas-700 dark:to-tanayas-800 dark:hover:from-tanayas-800 dark:hover:to-tanayas-900 dark:shadow-lg dark:hover:shadow-tanayas-700/25"
        >
          <span>Plan My Trip Now</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <p className="text-sm text-tanayas-200 mt-4 opacity-90 dark:text-tanayas-300">
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