import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/content"; // Corrected import to 'services'
import useScrollToSection from "../hooks/useScrollToSection";

const Services: React.FC = () => { // Renamed component from Destinations to Services
  const scrollToSection = useScrollToSection();

  return (
    <section
      id="services" // Updated section ID from 'destinations' to 'services'
      className="py-20 bg-gradient-to-br from-white to-gold-50 dark:from-black dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-page-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 dark:text-white">
            Explore Bali’s Top Islands
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-700 to-gold-600 mx-auto rounded-full mb-6 dark:from-gold-500 dark:to-gold-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            From dramatic cliffs to hidden beaches, discover the best of Bali,
            Nusa Penida, the Gilis, and Lombok with local insights and real
            traveler tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => ( // Changed 'destinations.map' to 'services.map' and 'destination' to 'service'
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
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gold-800 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                  {service.description}
                </p>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-500"
                >
                  <span>Learn More &amp; Get Schedules</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;