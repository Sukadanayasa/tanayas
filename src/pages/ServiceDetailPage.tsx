import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/content';
import { Activity, Ship, Map } from 'lucide-react'; // Import Lucide icons

const iconMap: { [key: string]: React.ElementType } = {
  Activity: Activity,
  Ship: Ship,
  Map: Map,
};

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-lg mb-8">The service you are looking for does not exist.</p>
        <Link to="/" className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
          Go to Homepage
        </Link>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Activity; // Default to Activity if icon not found

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-white to-gold-50 dark:from-black dark:to-gray-950 text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-page-max">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <IconComponent className="w-12 h-12 text-gold-700 dark:text-gold-400" />
          <h1 className="text-5xl font-bold text-center text-gold-700 dark:text-gold-400">
            {service.title}
          </h1>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-gold-700 to-gold-600 mx-auto rounded-full mb-12 dark:from-gold-500 dark:to-gold-400" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              This is a placeholder for more detailed information about {service.title}, including specific options, pricing, and how to book.
            </p>
            <Link to="/contact" className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-md">
              Inquire About This Service
            </Link>
            <Link to="/services" className="ml-4 text-gold-700 hover:text-gold-900 dark:text-gold-400 dark:hover:text-gold-500 font-semibold">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;