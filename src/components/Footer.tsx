import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300">
      <div className="container mx-auto px-6 py-16 max-w-page-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/tanayas-logo.svg"
                  alt="Tanayas Logo"
                  className="h-12 w-auto"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full blur-lg"></div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-gradient">TANAYAS</h3>
                <p className="text-gold-400 font-semibold">Island Adventure Partner</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-lg max-w-md">
              Your trusted source for real-time fastboat schedules, local travel
              tips, and honest advice for Bali, Nusa Penida, the Gilis, and
              Lombok since 2007.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-gold-400 fill-current" />
                <span className="text-sm font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-sm font-semibold">17+ Years</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Destinations", sectionId: "destinations" },
                { label: "Services", sectionId: "services" },
                { label: "About Us", sectionId: "about" },
                { label: "Contact", sectionId: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/driver"
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-300 font-medium"
                >
                  Driver Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Connect
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-gold-400" />
                <span>24/7 WhatsApp</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-gold-400" />
                <span>info@tanayas.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span>Bali, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-center md:text-left">
              <p>&copy; 2024 Tanayas. All rights reserved.</p>
              <p className="text-sm mt-1">Making island adventures unforgettable since 2007</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;