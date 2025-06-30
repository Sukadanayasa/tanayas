import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import useScrollToSection from "../hooks/useScrollToSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    // If not on the homepage, navigate to the homepage first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Use a timeout to ensure navigation completes before scrolling
      // This is a common pattern when navigating and then scrolling to a section
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Small delay to allow route change to render
    } else {
      // If already on the homepage, just scroll
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90 dark:shadow-lg"
            : "bg-white dark:bg-black"
        }`}
      >
        <div className="w-full px-4 py-3 max-w-page-max mx-auto border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name - now a button to scroll to hero */}
            <button
              onClick={() => handleNavigationClick("hero")} // Call handleNavigationClick for hero section
              className={`flex items-center space-x-3 transition-transform duration-300 focus:outline-none focus:ring-0 rounded-md p-1 -ml-1`}
              aria-label="Go to homepage and scroll to top"
            >
              <img
                src="/tanayas-logo.svg"
                alt="Tanayas Logo"
                className="h-9 w-auto"
              />
              <span className="text-xl font-bold text-gold-500">
                TANAYAS
              </span>
            </button>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                <button
                  onClick={() => handleNavigationClick("destinations")}
                  className="nav-link-underline text-gray-700 hover:text-gold-700 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-gold-400"
                >
                  Destinations
                </button>
                <button
                  onClick={() => handleNavigationClick("services")}
                  className="nav-link-underline text-gray-700 hover:text-gold-700 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-gold-400"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavigationClick("about")}
                  className="nav-link-underline text-gray-700 hover:text-gold-700 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-gold-400"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavigationClick("contact")}
                  className="nav-link-underline text-gray-700 hover:text-gold-700 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-gold-400"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        style={{ backdropFilter: "blur(2px)" }}
      />
      <div
        className={`fixed top-[64px] left-0 right-0 bg-white z-40 lg:hidden shadow-lg transition-transform duration-300 ease-out dark:bg-gray-900 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-6">
          <nav className="space-y-0">
            {[
              { label: "Destinations", sectionId: "destinations" },
              { label: "Services", sectionId: "services" },
              { label: "About Us", sectionId: "about" },
              { label: "Contact", sectionId: "contact" },
            ].map((item, index, array) => (
              <button
                key={item.label}
                onClick={() => handleNavigationClick(item.sectionId)}
                className={`nav-link-underline block w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gold-400 ${
                  index < array.length - 1 ? "border-b border-gray-100 dark:border-gray-700" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );