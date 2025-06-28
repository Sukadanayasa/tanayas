import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <footer
      id="footer"
      className="bg-gray-900 text-gray-300"
    >
      <div className="container mx-auto px-4 py-16 max-w-page-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/tanayas-logo.svg"
                alt="Tanayas Logo"
                className="h-9 w-auto"
              />
              <h3 className="text-2xl font-bold text-gold-500">TANAYAS</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted source for real-time fastboat schedules, local travel
              tips, and honest advice for Bali, Nusa Penida, the Gilis, and
              Lombok. Making island hopping simple, safe, and unforgettable
              since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("destinations")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Explore Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Contact Local Experts
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100">Stay Connected</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
            <div className="pt-2">
              <a href="#" className="nav-link-underline text-gold-400 transition-colors text-sm">
                WhatsApp us for immediate assistance
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Tanayas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;