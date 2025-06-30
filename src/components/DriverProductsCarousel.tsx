import React, { useRef } from "react";
import { destinations, services } from "../data/content";
import { ArrowLeft, ArrowRight, Activity, Ship, Map, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

// Map string icon names to Lucide React components
const iconMap: { [key: string]: React.ElementType } = {
  Activity: Activity,
  Ship: Ship,
  Map: Map,
  PartyPopper: PartyPopper,
};

interface DriverProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  type: 'destination' | 'service';
  icon?: string; // Only for services
}

const DriverProductsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Combine destinations and services into a single array
  const allItems: DriverProductItem[] = [
    ...destinations.map(d => ({ ...d, type: 'destination' as const })),
    ...services.map(s => ({ ...s, type: 'service' as const })),
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2; // Scroll half the width of the container
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="driver-products" className="py-20 bg-gradient-to-br from-white to-gold-50 dark:from-black dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-page-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 dark:text-white">
            Penawaran Kami untuk Mitra Driver
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-700 to-gold-600 mx-auto rounded-full mb-6 dark:from-gold-500 dark:to-gold-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Tawarkan berbagai pilihan destinasi dan layanan fast boat terbaik kepada pelanggan Anda.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth pb-6 -mx-4 px-4 no-scrollbar" // Added no-scrollbar
          >
            {allItems.map((item, index) => {
              const IconComponent = item.icon ? iconMap[item.icon] : null;
              const linkPath = item.type === 'destination' ? `/destinations/${item.id}` : `/services/${item.id}`;

              return (
                <div
                  key={item.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 snap-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {IconComponent && (
                        <div className="absolute top-4 left-4 bg-gold-500 p-3 rounded-full shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gold-800 transition-colors duration-300 dark:text-white dark:group-hover:text-gold-400">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow dark:text-gray-300">
                        {item.description}
                      </p>

                      <Link
                        to={linkPath}
                        className="group/btn inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 font-semibold transition-all duration-300 dark:text-gold-400 dark:hover:text-gold-500 mt-auto"
                      >
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-gold-600 transition-colors duration-300 z-20 hidden md:block"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-gold-600 transition-colors duration-300 z-20 hidden md:block"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DriverProductsCarousel;