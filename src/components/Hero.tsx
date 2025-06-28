import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";
import useScrollToSection from "../hooks/useScrollToSection";

const Hero: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    img.onload = () => setImageLoaded(true);
    if (img.complete) setImageLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Fast boat on turquoise water approaching a tropical island"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold-400 rounded-full opacity-60 floating-element"></div>
      <div className="absolute top-32 right-16 w-3 h-3 bg-gold-300 rounded-full opacity-40 floating-element"></div>
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-gold-500 rounded-full opacity-50 floating-element"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="mb-8 animate-slide-up">
          <div className="relative inline-block">
            <img
              src="/tanayas-logo.svg"
              alt="Tanayas Logo"
              className="h-24 w-auto sm:h-32 lg:h-40 mx-auto drop-shadow-2xl"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full blur-2xl animate-pulse-custom"></div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="heading-hero text-gradient font-black tracking-tight mb-2">
            TANAYAS
          </h1>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400"></div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gold-300 font-semibold">
              Fast Boat & Activities Organizer
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold-400"></div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-gold-400" />
            <span className="text-white font-semibold">Trusted since 2007</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className="mb-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-large text-white/90 max-w-4xl mx-auto mb-4">
            We offer <span className="text-gold-300 font-semibold">fast boat tickets</span> and 
            <span className="text-gold-300 font-semibold"> exciting activities</span> to Lembongan, 
            Nusa Penida, Gili Islands, and Lombok.
          </p>
          <p className="text-large text-white/80 max-w-4xl mx-auto">
            Enjoy personalized service and direct booking via WhatsApp for instant confirmation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('destinations')}
              className="group btn-primary px-8 py-4 text-lg"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Destinations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group glass-effect text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
              </span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-gold-400 mr-2" />
                <div className="text-2xl font-bold text-white">10K+</div>
              </div>
              <div className="text-sm text-white/70">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-gold-400 mr-2" />
                <div className="text-2xl font-bold text-white">17+</div>
              </div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-gold-400 mr-2" />
                <div className="text-2xl font-bold text-white">4.9</div>
              </div>
              <div className="text-sm text-white/70">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse-custom"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;