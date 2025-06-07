import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                BaliFastboat
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Get Info Now
              </button>
              <button
                onClick={() => scrollToSection('destinations')}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                FAQ
              </button>
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
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[80vw] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="p-6 pt-20">
              <nav className="space-y-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-xl font-medium text-gray-800 hover:text-blue-700 py-2 transition-colors duration-200"
                >
                  Get Info Now
                </button>
                <button
                  onClick={() => scrollToSection('destinations')}
                  className="block w-full text-left text-xl font-medium text-gray-800 hover:text-blue-700 py-2 transition-colors duration-200"
                >
                  Destinations
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-xl font-medium text-gray-800 hover:text-blue-700 py-2 transition-colors duration-200"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left text-xl font-medium text-gray-800 hover:text-blue-700 py-2 transition-colors duration-200"
                >
                  FAQ
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;