import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Removed MessageCircle
import { Link } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <footer
      id="footer"
      className="bg-black text-gray-300" // Changed background and default text color
    >
      <div className="container mx-auto px-4 py-16 max-w-page-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/tanayas-logo.svg"
                alt="Tanayas Logo"
                className="h-9 w-auto" // Adjusted size for footer
              />
              <h3 className="text-2xl font-bold text-white">Tanayas</h3> {/* Changed text color */}
            </div>
            <p className="text-gray-400 leading-relaxed"> {/* Changed text color */}
              Your trusted source for real-time fastboat schedules, local travel
              tips, and honest advice for Bali, Nusa Penida, the Gilis, and
              Lombok. Making island hopping simple, safe, and unforgettable
              since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3> {/* Changed text color */}
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("destinations")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200" {/* Adjusted colors */}
                >
                  Explore Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200" {/* Adjusted colors */}
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200" {/* Adjusted colors */}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200" {/* Adjusted colors */}
                >
                  Contact Local Experts
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link-underline text-gray-400 hover:text-gold-400 transition-colors duration-200" {/* Adjusted colors */}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Stay Connected</h3> {/* Changed text color */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" {/* Adjusted background */}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" /> {/* Adjusted icon color */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" {/* Adjusted background */}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" /> {/* Adjusted icon color */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" {/* Adjusted background */}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" /> {/* Adjusted icon color */}
              </a>
            </div>
            <div className="pt-2">
              <a href="#" className="nav-link-underline text-gold-400 hover:underline text-sm"> {/* Adjusted color */}
                Join our WhatsApp for instant updates
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"> {/* Adjusted border and text color */}
          <p>&copy; 2024 Tanayas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;