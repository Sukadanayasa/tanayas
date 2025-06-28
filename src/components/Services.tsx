import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/content";
import { Activity, Ship, Map, PartyPopper, ArrowRight, Sparkles } from 'lucide-react';

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
      className="section-padding bg-gradient-to-br from-white via-gold-50/20 to-gray-50 dark:from-black dark:via-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Premium Services</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6 dark:text-white">
            Our 
            <span className="text-gradient"> Exclusive Services</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 mx-auto rounded-full mb-8 shadow-gold" />
          
          <p className="text-body text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Beyond fast boat transfers, we offer a range of premium services to make your island adventure seamless and unforgettable.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-soft hover:shadow-gold card-hover overflow-hidden dark:bg-gray-800 dark:shadow-xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Enhanced Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Service Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-800">Premium</span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <IconComponent className="w-10 h-10 mx-auto mb-3" />
                      <p className="font-semibold text-lg">Learn More</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 relative">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <div className="pt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gold-700 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
                      {service.description}
                    </p>

                    <Link
                      to={`/services/${service.id}`}
                      className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-300"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-gold-200 to-gold-400 rounded-full transform rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-12 text-center text-white shadow-gold">
            <div className="max-w-3xl mx-auto">
              <Sparkles className="w-12 h-12 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold mb-4">Need a Custom Service?</h3>
              <p className="text-xl mb-8 text-gold-100">
                We specialize in creating tailored experiences for your unique travel needs. 
                Let us design the perfect island adventure just for you.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gold-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Request Custom Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;