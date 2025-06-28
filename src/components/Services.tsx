import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/content";
import { Activity, Ship, Map, PartyPopper, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Activity: Activity,
  Ship: Ship,
  Map: Map,
  PartyPopper: PartyPopper,
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="section-spacing bg-white dark:bg-black"
    >
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slide-up">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="heading-section text-gray-900 mb-6 dark:text-white animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Premium Travel
            <span className="text-gradient block mt-2">Services</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }} />
          
          <p className="text-large text-gray-600 max-w-3xl mx-auto dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Beyond fast boat transfers, we offer comprehensive services to make your island adventure seamless and unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <div
                key={service.id}
                className="group relative card-modern overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <IconComponent className="w-5 h-5 text-gold-600" />
                    <h3 className="heading-card text-gray-900 group-hover:text-gold-700 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Expert guidance included</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>24/7 support available</span>
                    </div>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-gold-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Custom Service CTA */}
        <div className="text-center animate-slide-up">
          <div className="bg-gradient-to-r from-gray-50 to-gold-50 rounded-2xl p-8 border border-gold-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <Sparkles className="w-8 h-8 text-gold-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Something Custom?</h3>
                <p className="text-gray-600 mb-6">
                  We specialize in creating tailored experiences for your unique travel needs. 
                  Let us design the perfect island adventure just for you.
                </p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Request Custom Service
                </button>
              </div>
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-white animate-spin-slow" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full blur-xl animate-pulse-custom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;