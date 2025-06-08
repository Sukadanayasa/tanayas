import React, { memo } from "react";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

const Footer: React.FC = memo(() => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 dark:from-black dark:to-gray-950 dark:text-gray-400"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tanayas</h3>
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
                <button
                  onClick={() => scrollToSection("destinations")}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 dark:hover:text-blue-500"
                >
                  Explore Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 dark:hover:text-blue-500"
                >
                  FAQs &amp; Travel Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 dark:hover:text-blue-500"
                >
                  Contact Local Experts
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 dark:hover:text-blue-500"
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
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:hover:bg-blue-700"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:hover:bg-blue-700"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:hover:bg-blue-700"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-2">
              <a href="#" className="text-blue-400 hover:underline text-sm dark:text-blue-500">
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
});

export default Footer;