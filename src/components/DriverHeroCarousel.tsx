import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { destinations, services } from "../data/content";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  subtitle?: string; // Optional subtitle for the new CTA slide
}

const DriverHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const driverCtaItem: CarouselItem = {
    id: "driver-cta",
    title: "Jadilah Mitra Driver Tanayas!",
    subtitle: "Tingkatkan Penghasilan Anda dengan Kami",
    description: "Bergabunglah dengan jaringan driver kami dan tawarkan layanan fast boat serta aktivitas pulau terbaik kepada pelanggan Anda. Dapatkan komisi menarik dan dukungan penuh dari tim Tanayas.",
    image: "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Reusing hero image
    alt: "Driver shaking hands with a client, with a fast boat in the background",
    link: "/contact" // Link to contact page for inquiries
  };

  const carouselItems: CarouselItem[] = [
    driverCtaItem, // This will be the first slide
    ...destinations.map(d => ({
      id: d.id,
      title: d.title,
      description: d.description,
      image: d.image,
      alt: d.alt,
      link: `/destinations/${d.id}`
    })),
    // Find the 'party-boat' service and add it
    (() => {
      const partyBoat = services.find(s => s.id === 'party-boat');
      if (partyBoat) {
        return {
          id: partyBoat.id,
          title: partyBoat.title,
          description: partyBoat.description,
          image: partyBoat.image,
          alt: partyBoat.alt,
          link: `/services/${partyBoat.id}`
        };
      }
      return null;
    })(),
  ].filter(Boolean) as CarouselItem[]; // Filter out null if party-boat isn't found

  const currentItem = carouselItems[currentIndex];

  useEffect(() => {
    setImageLoaded(false); // Reset image loaded state for new image
    if (currentItem?.image) {
      const img = new Image();
      img.src = currentItem.image;
      img.onload = () => setImageLoaded(true);
      if (img.complete) { // For cached images
        setImageLoaded(true);
      }
    }
  }, [currentItem]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselItems.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, [carouselItems.length]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(goToNext, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, [goToNext]);

  if (!currentItem) {
    return null; // Or a loading spinner/placeholder
  }

  return (
    <section id="driver-hero-carousel" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <img
        src={currentItem.image}
        alt={currentItem.alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        {/* Logo and Main Title */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <img
            src="/tanayas-logo.svg"
            alt="Tanayas Logo"
            className="h-28 w-auto sm:h-36 lg:h-44"
          />
          {currentItem.id === "driver-cta" ? (
            // For the CTA slide, keep TANAYAS as the main brand
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gold-500 leading-tight">
              TANAYAS
            </h1>
          ) : (
            // For other slides, use the item's title
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gold-500 leading-tight">
              {currentItem.title}
            </h1>
          )}
        </div>

        {/* Dynamic Subtitle (always render to maintain spacing) */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gold-300 font-semibold mb-2">
          {currentItem.id === "driver-cta" ? currentItem.subtitle : ''}
        </p>
        {/* Dynamic Title (only for CTA, otherwise empty to maintain spacing) */}
        <p className="text-2xl sm:text-3xl lg:text-4xl text-gold-400 font-semibold mb-4">
          {currentItem.id === "driver-cta" ? currentItem.title : ''}
        </p>

        {/* Action Button */}
        <Link
          to={currentItem.link}
          className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white px-8 py-3 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-lg mt-6"
        >
          {currentItem.id === "driver-cta" ? "Daftar Sekarang" : "Lihat Detail"}
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 flex space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-gold-500 scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DriverHeroCarousel;