import React, { useEffect, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy load components for faster initial page load
const Destinations = lazy(() => import('./components/Destinations').then(module => ({ default: module.default })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(module => ({ default: module.default })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.default })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.default })));
const TravelTips = lazy(() => import('./components/TravelTips').then(module => ({ default: module.default })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.default })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.default })));

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme as 'light' | 'dark';
    }
    // Then check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply the theme class to the html element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    // Save theme preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Add loaded class to images once they're loaded for smooth fade-in
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        img.onload = () => img.classList.add('loaded');
        if (img.complete) img.classList.add('loaded');
      }
    });

    // Add intersection observer for animation triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Destinations />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <TravelTips />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;