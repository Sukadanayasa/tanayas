import React from "react";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gold-950 to-gold-900 text-gray-300 dark:from-gold-950 dark:to-gold-900 dark:text-gray-400"
    >
      <div className="container mx-auto px-4 py-16 max-w-page-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-700 to-gold-900 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gold-100">Tanayas</h3>
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
            <h3 className="text-lg font-semibold text-white dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200 dark:hover:text-gold-500"
                >
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200 dark:hover:text-gold-500"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200 dark:hover:text-gold-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200 dark:hover:text-gold-500"
                >
                  FAQs &amp; Travel Tips
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200 dark:hover:text-gold-500"
                >
                  Contact Local Experts
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200 dark:hover:text-gold-500"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white dark:text-gray-200">Stay Connected</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-gold-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:hover:bg-gold-800"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-gold-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:hover:bg-gold-800"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-gold-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:hover:bg-gold-800"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-2">
              <a href="#" className="text-gold-400 hover:underline text-sm dark:text-gold-500">
                Join our WhatsApp for instant updates
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 dark:border-gray-800 dark:text-gray-600">
          <p>&copy; 2024 Tanayas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;