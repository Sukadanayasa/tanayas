import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const navLinkClasses = `nav-link-underline font-medium transition-colors duration-200 ${
    isScrolled
      ? "text-gray-700 hover:text-gold-700 dark:text-gray-300 dark:hover:text-gold-400"
      : "text-white hover:text-gold-300"
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[60px] ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90 dark:shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div
          className={`w-full px-4 h-full max-w-page-max mx-auto transition-colors duration-300 ${
            isScrolled
              ? "border-b border-gray-100 dark:border-gray-800"
              : "border-b border-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-full">
            <button
              onClick={() => handleNavigationClick("hero")}
              className="flex items-center space-x-3 transition-transform duration-300 focus:outline-none focus:ring-0 rounded-md p-1 -ml-1"
              aria-label="Go to homepage and scroll to top"
            >
              <img
                src="/tanayas-logo.svg"
                alt="Tanayas Logo"
                className="h-9 w-auto"
              />
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gold-500" : "text-gold-400"
                }`}
              >
                TANAYAS
              </span>
            </button>

            <div className="flex items-center space-x-4">
              <nav className="hidden lg:flex items-center space-x-6">
                <button
                  onClick={() => handleNavigationClick("destinations")}
                  className={navLinkClasses}
                >
                  Destinations
                </button>
                <button
                  onClick={() => handleNavigationClick("services")}
                  className={navLinkClasses}
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavigationClick("about")}
                  className={navLinkClasses}
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavigationClick("contact")}
                  className={navLinkClasses}
                >
                  Contact
                </button>
              </nav>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors duration-200 relative z-50 border ${
                  isScrolled
                    ? "text-gray-600 border-gold-700 dark:border-gold-500"
                    : "text-white border-white"
                }`}
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

      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        style={{ backdropFilter: "blur(2px)" }}
      />
      <div
        className={`fixed top-[60px] left-0 right-0 z-40 lg:hidden transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        } ${
          isScrolled
            ? "bg-white shadow-lg dark:bg-gray-900"
            : "bg-black/80"
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
                className={`nav-link-underline block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-800 hover:bg-gold-50 hover:text-gold-800 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gold-400"
                    : "text-white hover:bg-white/10"
                } ${
                  index < array.length - 1
                    ? isScrolled
                      ? "border-b border-gray-100 dark:border-gray-700"
                      : "border-b border-white/20"
                    : ""
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
};

export default Header;