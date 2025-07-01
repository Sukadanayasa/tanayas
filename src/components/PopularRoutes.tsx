import React from 'react';
import { Link } from 'react-router-dom';
import { popularRoutes } from '../data/content';
import { ArrowRight, Ship, Clock, Tag } from 'lucide-react';

const PopularRoutes = () => {
  return (
    <section id="popular-routes" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-page-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 dark:text-white">
            Popular Fast Boat Routes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-700 to-gold-600 mx-auto rounded-full mb-6 dark:from-gold-500 dark:to-gold-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Quickly find and get information for the most sought-after island transfers. We provide the best schedules and prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularRoutes.map((route) => (
            <div
              key={route.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={route.image}
                  alt={route.alt}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-bold leading-tight">{route.to}</h3>
                  <p className="text-sm text-gold-300">from {route.from}</p>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock size={16} className="mr-2 text-gold-600 dark:text-gold-400" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Tag size={16} className="mr-2 text-gold-600 dark:text-gold-400" />
                    <span>{route.price} / person</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="group/btn mt-auto w-full text-center bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Schedules
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;