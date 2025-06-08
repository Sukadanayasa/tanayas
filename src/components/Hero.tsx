import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background (waves/gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-700/80 animate-gradient-move" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-teal-700/70" />
      {/* Tagline */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-base sm:text-lg text-cyan-200 font-semibold tracking-wide mb-2">
          Island Hopping Made Effortless
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Get Real-Time Fastboat Schedules,
          <br />
          <span className="text-cyan-300">
            Insider Tips &amp; Local Support
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Plan your Bali island adventure with expert guidance, up-to-date
          routes, and honest local advice—no stress, no guesswork.
        </p>
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 ease-out"
        >
          <span>Plan My Trip Now</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <p className="text-sm text-blue-200 mt-4 opacity-90">
          Free • Instant • No Booking Required
        </p>
      </div>
      {/* Scroll Indicator - only on desktop */}
      <div className="hidden sm:absolute sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
