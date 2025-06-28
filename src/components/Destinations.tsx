import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Clock } from "lucide-react";
import { destinations } from "../data/content";

const Destinations: React.FC = () => {
  return (
    <section
      id="destinations"
      className="section-spacing bg-gradient-modern dark:bg-gradient-modern-dark"
    >
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slide-up">
            <MapPin className="w-4 h-4" />
            <span>Top Destinations</span>
          </div>
          
          <h2 className="heading-section text-gray-900 mb-6 dark:text-white animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover Paradise
            <span className="text-gradient block mt-2">Islands</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }} />
          
          <p className="text-large text-gray-600 max-w-3xl mx-auto dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            From dramatic cliffs to pristine beaches, explore Indonesia's most breathtaking islands with expert local guidance.
          </p>
        </div>

        {/* Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative card-modern overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 glass-effect rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-gold-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">4.9</span>
                </div>

                {/* Quick Info */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="glass-effect rounded-lg p-3">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>2-3 hours</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>From Sanur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-card text-gray-900 mb-3 group-hover:text-gold-700 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                  {destination.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                  {destination.description}
                </p>

                <Link
                  to={`/destinations/${destination.id}`}
                  className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-300"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-gold-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white shadow-gold-modern max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-gold-100 mb-6">
              Get personalized recommendations from our local experts based on your preferences and travel style.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gold-600 hover:bg-gray-50 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Expert Advice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;