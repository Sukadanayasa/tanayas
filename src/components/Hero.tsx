import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import useScrollToSection from "../hooks/useScrollToSection";

const Hero: React.FC = () => {
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Fast boat on turquoise water approaching a tropical island"
          className={`w-full h-full object-cover transition-all duration-2000 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-gold-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-gold-300 rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-gold-500 rounded-full opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo and Brand Section */}
        <div className="flex flex-col items-center justify-center space-y-6 mb-8 animate-scale-in">
          <div className="relative">
            <img
              src="/tanayas-logo.svg"
              alt="Tanayas Logo"
              className="h-32 w-auto sm:h-40 lg:h-48 drop-shadow-2xl"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          <div className="relative">
            <h1 className="heading-xl text-gradient font-black tracking-tight">
              TANAYAS
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-400/10 to-gold-600/10 rounded-lg blur-lg"></div>
          </div>
        </div>

        {/* Enhanced Subtitle with Icon */}
        <div className="flex items-center justify-center space-x-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Sparkles className="w-6 h-6 text-gold-400" />
          <p className="text-2xl sm:text-3xl lg:text-4xl text-gold-300 font-bold tracking-wide">
            Fast Boat & Activities Organizer
          </p>
          <Sparkles className="w-6 h-6 text-gold-400" />
        </div>

        {/* Trust Badge */}
        <div className="inline-flex items-center space-x-2 bg-gold-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
          <p className="text-xl sm:text-2xl text-gold-200 font-semibold">
            Your trusted partner since 2007
          </p>
        </div>

        {/* Main Description with Enhanced Typography */}
        <div className="space-y-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <p className="text-body text-white/90 max-w-4xl mx-auto font-medium">
            We offer fast boat tickets and exciting activities to 
            <span className="text-gold-300 font-semibold"> Lembongan, Nusa Penida, Gili Islands, and Lombok</span>.
          </p>
          <p className="text-body text-white/90 max-w-4xl mx-auto font-medium">
            Enjoy personalized service and direct booking via WhatsApp for 
            <span className="text-gold-300 font-semibold"> instant confirmation</span>.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={() => scrollToSection('destinations')}
            className="group btn-primary relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Explore Destinations</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            <span className="flex items-center space-x-2">
              <span>Get Instant Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-8 mt-12 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-300">17+</div>
            <div className="text-sm text-white/70">Years Experience</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-300">10K+</div>
            <div className="text-sm text-white/70">Happy Travelers</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-300">24/7</div>
            <div className="text-sm text-white/70">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;