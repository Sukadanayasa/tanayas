import React from "react";
import { ArrowRight } from "lucide-react";
import { destinations } from "../data/content";
import useScrollToSection from "../hooks/useScrollToSection"; // Import the new hook

const Destinations: React.FC = () => {
  const scrollToSection = useScrollToSection(); // Use the custom hook

  return (
    <section
      id="destinations"
      className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 dark:text-white">
            Explore Bali’s Top Islands
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6 dark:from-blue-400 dark:to-cyan-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            From dramatic cliffs to hidden beaches, discover the best of Bali,
            Nusa Penida, the Gilis, and Lombok with local insights and real
            traveler tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300 dark:text-white dark:group-hover:text-blue-400">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                  {destination.description}
                </p>

                <button
                  onClick={() => scrollToSection("contact")} // Use the hook function
                  className="group/btn inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 dark:text-blue-400 dark:hover:text-blue-500"
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

export default Destinations;