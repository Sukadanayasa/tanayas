import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

const Header: React.FC = () => {
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-soft backdrop-blur-xl dark:glass-dark dark:shadow-xl"
            : "bg-white/95 backdrop-blur-sm dark:bg-black/95"
        }`}
      >
        <div className="w-full px-6 py-4 max-w-page-max mx-auto">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <button
              onClick={() => handleNavigationClick("hero")}
              className="group flex items-center space-x-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 rounded-xl p-2 -ml-2"
              aria-label="Go to homepage"
            >
              <div className="relative">
                <img
                  src="/tanayas-logo.svg"
                  alt="Tanayas Logo"
                  className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black text-gradient">
                  TANAYAS
                </span>
                <Sparkles className="w-5 h-5 text-gold-500 group-hover:animate-pulse" />
              </div>
            </button>

            <div className="flex items-center space-x-6">
              {/* Enhanced Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {[
                  { label: "Destinations", sectionId: "destinations" },
                  { label: "Services", sectionId: "services" },
                  { label: "About Us", sectionId: "about" },
                  { label: "Contact", sectionId: "contact" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigationClick(item.sectionId)}
                    className="nav-link-underline text-gray-700 hover:text-gold-700 font-semibold transition-all duration-300 dark:text-gray-300 dark:hover:text-gold-400 px-2 py-1"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  to="/driver"
                  className="nav-link-underline text-gray-700 hover:text-gold-700 font-semibold transition-all duration-300 dark:text-gray-300 dark:hover:text-gold-400 px-2 py-1"
                >
                  Driver
                </Link>
              </nav>

              {/* Enhanced CTA Button */}
              <button
                onClick={() => handleNavigationClick("contact")}
                className="hidden lg:block btn-primary text-sm py-3 px-6"
              >
                Get Quote
              </button>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 text-gray-600 hover:text-gold-700 transition-all duration-300 relative z-50 border-2 border-gold-500/30 hover:border-gold-500 rounded-xl bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 dark:border-gold-400/30 dark:hover:border-gold-400"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ease-out ${
                      isMenuOpen
                        ? "opacity-0 rotate-90 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ease-out ${
                      isMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-40 lg:hidden shadow-2xl transition-transform duration-500 ease-out dark:bg-gray-900 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 pt-24">
          {/* Mobile Menu Header */}
          <div className="text-center mb-8">
            <div className="text-2xl font-black text-gradient mb-2">TANAYAS</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Your Island Adventure Partner</div>
          </div>

          <nav className="space-y-2">
            {[
              { label: "Destinations", sectionId: "destinations", path: "/" },
              { label: "Services", sectionId: "services", path: "/" },
              { label: "About Us", sectionId: "about", path: "/" },
              { label: "Contact", sectionId: "contact", path: "/" },
              { label: "Driver", sectionId: "", path: "/driver" },
            ].map((item, index) => (
              item.path === "/" ? (
                <button
                  key={item.label}
                  onClick={() => handleNavigationClick(item.sectionId)}
                  className="nav-link-underline block w-full text-left px-6 py-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gold-50 hover:text-gold-700 transition-all duration-300 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gold-400"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link-underline block w-full text-left px-6 py-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gold-50 hover:text-gold-700 transition-all duration-300 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gold-400"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => handleNavigationClick("contact")}
              className="btn-primary w-full text-center"
            >
              Get Your Quote Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;