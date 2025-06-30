import React from "react";
import { Link } from "react-router-dom";

const driverCtaItem = {
  title: "Jadilah Mitra Driver Tanayas!",
  subtitle: "Tingkatkan Penghasilan Anda dengan Kami",
  description: "Bergabunglah dengan jaringan driver kami dan tawarkan layanan fast boat serta aktivitas pulau terbaik kepada pelanggan Anda. Dapatkan komisi menarik dan dukungan penuh dari tim Tanayas.",
  image: "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  alt: "Driver shaking hands with a client, with a fast boat in the background",
  link: "/contact"
};

const DriverHero = () => {
  return (
    <section id="driver-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <img
        src={driverCtaItem.image}
        alt={driverCtaItem.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <img
            src="/tanayas-logo.svg"
            alt="Tanayas Logo"
            className="h-28 w-auto sm:h-36 lg:h-44"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gold-400 leading-tight mb-4">
          {driverCtaItem.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gold-200 mb-6 max-w-2xl mx-auto leading-relaxed">
          {driverCtaItem.subtitle}
        </p>

        {/* Main Description */}
        <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          {driverCtaItem.description}
        </p>

        {/* Action Button */}
        <Link
          to={driverCtaItem.link}
          className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white px-8 py-3 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-lg mt-6"
        >
          Daftar Sekarang
        </Link>
      </div>
    </section>
  );
};

export default DriverHero;