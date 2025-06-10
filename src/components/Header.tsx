import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import useScrollToSection from "../hooks/useScrollToSection"; // Import the new hook

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection(); // Use the custom hook

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation and close mobile menu
  const handleNavigationClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
            : "bg-white dark:bg-gray-950"
        }`}
      >
        <div className="w-full px-4 py-3 max-w-page-max mx-auto"> {/* Added max-w-page-max and mx-auto here */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={`flex items-center space-x-3 transition-transform duration-300 ${
                isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"
              }`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-tanayas-700 to-tanayas-900 rounded-full flex items-center justify-center shadow">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-tanayas-950 via-tanayas-500 to-tanayas-950 bg-clip-text text-transparent dark:from-tanayas-500 dark:via-tanayas-100 dark:to-tanayas-500">
                Tanayas
              </span>
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
                    className="px-4 py-2 rounded-full text-gray-700 hover:bg-tanayas-50 hover:text-tanayas-800 font-medium transition-all duration-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-tanayas-400"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 hover:text-tanayas-800 transition-colors duration-200 rounded-full dark:text-gray-300 dark:hover:text-tanayas-400"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={24} className="w-6 h-6" />
                ) : (
                  <Sun size={24} className="w-6 h-6" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-tanayas-800 transition-colors duration-200 relative z-50 border border-tanayas-500 rounded-full dark:border-tanayas-700 dark:text-gray-300 dark:hover:text-tanayas-400"
                aria-label="Toggle menu"
              >
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
        </div>
      </header>

      {/* Mobile Menu Overlay (always rendered for transitions) */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        style={{ backdropFilter: "blur(2px)" }}
      />
      <div
        className={`fixed top-[64px] left-0 right-0 bg-white z-40 lg:hidden shadow-lg transition-opacity duration-500 ease-in-out dark:bg-gray-900 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6">
          <nav className="space-y-4">
            {[
              { label: "Get Info Now", section: "contact" },
              { label: "Destinations", section: "destinations" },
              { label: "How It Works", section: "about" },
              { label: "FAQ", section: "faq" },
            ].map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavigationClick(item.section)}
                className="block w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-tanayas-50 hover:text-tanayas-800 transition-all duration-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-tanayas-400"
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