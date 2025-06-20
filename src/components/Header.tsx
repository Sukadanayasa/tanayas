import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu"; // Import DropdownMenu components
import { destinations, services } from "../data/content"; // Import data

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="w-full px-4 py-3 max-w-page-max mx-auto border-b border-gray-200">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link
              to="/"
              className={`flex items-center space-x-3 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-md p-1 -ml-1`}
              aria-label="Go to homepage"
            >
              <img
                src="/tanayas-logo.svg"
                alt="Tanayas Logo"
                className="h-9 w-auto"
              />
              <span className="text-xl font-bold text-gold-500">
                TANAYAS
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-full text-gray-700 hover:bg-gold-50 hover:text-gold-800 font-medium transition-all duration-200"
                >
                  Home
                </Link>

                {/* Destinations Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="px-4 py-2 rounded-full text-gray-700 hover:bg-gold-50 hover:text-gold-800 font-medium transition-all duration-200 cursor-pointer">
                      Destinations
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {destinations.map((dest) => (
                      <DropdownMenuItem key={dest.id} asChild>
                        <Link to={`/destinations/${dest.id}`} onClick={() => setIsMenuOpen(false)}>
                          {dest.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>
                        View All Destinations
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Services Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="px-4 py-2 rounded-full text-gray-700 hover:bg-gold-50 hover:text-gold-800 font-medium transition-all duration-200 cursor-pointer">
                      Services
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.id} asChild>
                        <Link to={`/services/${service.id}`} onClick={() => setIsMenuOpen(false)}>
                          {service.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                        View All Services
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <button
                  onClick={() => handleNavigationClick("contact")}
                  className="px-4 py-2 rounded-full text-gray-700 hover:bg-gold-50 hover:text-gold-800 font-medium transition-all duration-200"
                >
                  Contact
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gold-800 transition-colors duration-200 relative z-50 border border-gold-700 rounded-full dark:border-gold-500"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ease-out ${
                      isMenuOpen
                        ? "opacity-0 rotate-90"
                        : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ease-out ${
                      isMenuOpen
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-90"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay (always rendered for transitions) */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        style={{ backdropFilter: "blur(2px)" }}
      />
      <div
        className={`fixed top-[64px] left-0 right-0 bg-white z-40 lg:hidden shadow-lg transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-6">
          <nav className="space-y-0">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 border-b border-gray-100"
            >
              Home
            </Link>
            {/* Mobile Destinations List */}
            <div className="py-3 border-b border-gray-100">
              <span className="block px-4 text-sm font-semibold text-gray-500 mb-2">Destinations</span>
              {destinations.map((dest) => (
                <Link
                  key={dest.id}
                  to={`/destinations/${dest.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-base text-gray-700 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200"
                >
                  - {dest.title}
                </Link>
              ))}
              <Link
                to="/destinations"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 rounded-lg text-base text-gold-700 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 font-semibold mt-2"
              >
                View All Destinations
              </Link>
            </div>

            {/* Mobile Services List */}
            <div className="py-3 border-b border-gray-100">
              <span className="block px-4 text-sm font-semibold text-gray-500 mb-2">Services</span>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-base text-gray-700 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200"
                >
                  - {service.title}
                </Link>
              ))}
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 rounded-lg text-base text-gold-700 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 font-semibold mt-2"
              >
                View All Services
              </Link>
            </div>

            <button
              onClick={() => handleNavigationClick("contact")}
              className="block w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;