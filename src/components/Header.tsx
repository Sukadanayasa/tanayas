import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Get Info Now", section: "contact" },
    { label: "Destinations", section: "destinations" },
    { label: "How It Works", section: "how-it-works" }, // Updated ID
    { label: "About Us", section: "about-us" }, // New item
    { label: "FAQ", section: "faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-blue-100"
            : "bg-white border-gray-100"
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 2px 16px 0 rgba(30, 64, 175, 0.06)"
            : "0 1px 8px 0 rgba(0,0,0,0.03)",
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={`flex items-center space-x-3 transition-transform duration-300 ${
                isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"
              }`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Tanayas
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4"> {/* Changed to md:flex and added responsive spacing */}
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="px-3 py-2 rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-all duration-200 text-sm lg:text-base" {/* Adjusted padding and text size */}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-700 transition-colors duration-200 relative z-50" // Changed to md:hidden
              aria-label="Toggle menu"
            >
              {/* Animated Hamburger to X */}
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay (always rendered for transitions) */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-500 ${ // Changed to md:hidden
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        style={{ backdropFilter: "blur(2px)" }}
      />
      <div
        className={`fixed top-[64px] left-0 right-0 bg-white z-40 md:hidden shadow-lg transition-opacity duration-500 ease-in-out ${ // Changed to md:hidden
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
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