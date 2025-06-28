import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { destinations } from "../data/content";

const Destinations: React.FC = () => {
  return (
    <section
      id="destinations"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-gold-50/30 dark:from-gray-900 dark:via-black dark:to-gray-950"
    >
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Popular Destinations</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6 dark:text-white">
            Explore Bali's 
            <span className="text-gradient"> Top Islands</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 mx-auto rounded-full mb-8 shadow-gold" />
          
          <p className="text-body text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            From dramatic cliffs to hidden beaches, discover the best of Bali,
            Nusa Penida, the Gilis, and Lombok with local insights and real
            traveler tips.
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-3xl shadow-soft hover:shadow-gold card-hover overflow-hidden dark:bg-gray-800 dark:shadow-xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-gold-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">4.9</span>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Explore Now</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8 relative">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>

                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gold-700 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                    {destination.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
                    {destination.description}
                  </p>

                  <Link
                    to={`/destinations/${destination.id}`}
                    className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-300"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-8 shadow-soft">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can't decide which island to visit?</h3>
              <p className="text-gray-600 mb-4">Get personalized recommendations from our local experts</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base py-3 px-6"
              >
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;