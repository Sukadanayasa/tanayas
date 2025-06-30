import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/content';
import { ArrowLeft, MapPin, Camera, Lightbulb, ChevronRight } from 'lucide-react';

const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
        <p className="text-lg mb-8">The destination you are looking for does not exist.</p>
        <Link to="/" className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
          Go to Homepage
        </Link>
      </div>
    );
  }

  // Fallback for destinations without detailed content yet
  const hasDetailedContent = destination.attractions && destination.gallery && destination.travelTips;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] text-white">
        <img src={destination.image} alt={destination.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gold-400 leading-tight">{destination.title}</h1>
          <p className="text-xl md:text-2xl text-white mt-4 max-w-3xl">{destination.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-page-max py-16">
        <Link to="/" className="inline-flex items-center space-x-2 text-gold-700 hover:text-gold-900 dark:text-gold-400 dark:hover:text-gold-500 font-semibold mb-12">
          <ArrowLeft size={20} />
          <span>Back to All Destinations</span>
        </Link>

        {hasDetailedContent ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <main className="lg:col-span-2 space-y-16">
              {/* Top Attractions */}
              <section>
                <h2 className="flex items-center space-x-3 text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                  <MapPin className="text-gold-500" size={28} />
                  <span>Top Attractions</span>
                </h2>
                <div className="space-y-12">
                  {destination.attractions?.map(attraction => (
                    <div key={attraction.id} className="group grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 md:col-span-1" />
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{attraction.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Photo Gallery */}
              <section>
                <h2 className="flex items-center space-x-3 text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                  <Camera className="text-gold-500" size={28} />
                  <span>Photo Gallery</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.gallery?.map((imgSrc, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <img src={imgSrc} alt={`${destination.title} gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
                    </div>
                  ))}
                </div>
              </section>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-12">
              {/* Travel Tips */}
              <section className="bg-gold-50 dark:bg-gray-900 p-8 rounded-lg shadow-md">
                <h2 className="flex items-center space-x-3 text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  <Lightbulb className="text-gold-500" size={24} />
                  <span>Traveler's Tips</span>
                </h2>
                <ul className="space-y-4">
                  {destination.travelTips?.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-gold-600 dark:text-gold-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Booking CTA */}
              <section className="bg-gradient-to-br from-gold-600 to-gold-800 text-white p-8 rounded-lg shadow-xl text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Explore {destination.title}?</h2>
                <p className="mb-6">Get the best fastboat schedules and book your activities with our local experts.</p>
                <Link to="/contact" className="bg-white text-gold-800 px-8 py-3 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg inline-block">
                  Contact Us Now
                </Link>
              </section>
            </aside>
          </div>
        ) : (
          // Fallback for pages without new content
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">More Information Coming Soon!</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">We're currently curating the best attractions and tips for {destination.title}. Please check back later or contact us for immediate assistance.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationDetailPage;