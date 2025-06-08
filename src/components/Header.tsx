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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-blue-100"
            : "bg-white/70 backdrop-blur border-transparent"
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 2px 16px 0 rgba(30, 64, 175, 0.06)"
            : "none",
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
                BaliFastboat
              </span>
            </div>

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
                  onClick={() => scrollToSection(item.section)}
                  className="px-4 py-2 rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
            style={{ backdropFilter: "blur(2px)" }}
          />
          <div className="fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-white z-50 lg:hidden shadow-lg transition-transform duration-300 ease-in-out animate-slide-in">
            <div className="p-6 pt-20">
              <nav className="space-y-4">
                {[
                  { label: "Get Info Now", section: "contact" },
                  { label: "Destinations", section: "destinations" },
                  { label: "How It Works", section: "about" },
                  { label: "FAQ", section: "faq" },
                ].map((item) => (
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
      )}
      <style>
        {`
          @keyframes slide-in {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
          }
        `}
      </style>
    </>
  );
};

export default Header;
