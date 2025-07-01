import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/content";
import { Activity, Ship, Map, PartyPopper, ArrowRight } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Activity: Activity,
  Ship: Ship,
  Map: Map,
  PartyPopper: PartyPopper,
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-white to-gold-50 dark:from-black dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-page-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 dark:text-white">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-700 to-gold-600 mx-auto rounded-full mb-6 dark:from-gold-500 dark:to-gold-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Beyond fast boat transfers, we offer a range of services to make your island adventure seamless and exciting.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50 flex flex-col h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-gold-500 p-3 rounded-full shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-gold-800 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow dark:text-gray-300">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-500 mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;