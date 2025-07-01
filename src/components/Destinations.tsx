import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { destinations } from "../data/content";

const Destinations = () => {
  return (
    <section
      id="destinations"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50 flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-gold-800 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow dark:text-gray-300">
                  {destination.description}
                </p>
                <Link
                  to={`/destinations/${destination.id}`}
                  className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-500 mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;