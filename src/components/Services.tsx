import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/content";
import { Activity, Ship, Map } from 'lucide-react'; // Import Lucide icons

const iconMap: { [key: string]: React.ElementType } = {
  Activity: Activity,
  Ship: Ship,
  Map: Map,
};

const Services: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Activity; // Default icon if not found
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-gold-500 p-3 rounded-full shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gold-800 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                    {service.description}
                  </p>

                  <Link
                    to={`/services/${service.id}`}
                    className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-500"
                  >
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
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