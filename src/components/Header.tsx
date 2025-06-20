import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Removed MessageCircle
import useScrollToSection from "../hooks/useScrollToSection";

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
            {/* Logo */}
            <div
              className={`flex items-center space-x-3 transition-transform duration-300`}
            >
              <img
                src="/tanayas-logo.svg"
                alt="Tanayas Logo"
                className="h-10 w-auto" // Adjust size as needed
              />
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-4">
                {[
                  { label: "Get Info Now", section: "contact" },
                  { label: "Destinations", section: "destinations" },
                  { label: "How It Works", section: "about" },
                  { label: "FAQ", section: "faq" },
                ].map((item) => (
                  <button
                    key={item.section}
                    onClick={() => handleNavigationClick(item.section)}
                    className="px-4 py-2 rounded-full text-gray-700 hover:bg-gold-50 hover:text-gold-800 font-medium transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gold-800 transition-colors duration-200 relative z-50 border border-gold-500 rounded-full"
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
            {" "}
            {/* Changed space-y-4 to space-y-0 to control spacing with borders */}
            {[
              { label: "Get Info Now", section: "contact" },
              { label: "Destinations", section: "destinations" },
              { label: "How It Works", section: "about" },
              { label: "FAQ", section: "faq" },
            ].map((item, index, array) => (
              <button
                key={item.section}
                onClick={() => handleNavigationClick(item.section)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 ${
                  index < array.length - 1
                    ? "border-b border-gray-100"
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