import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TravelTips from './components/TravelTips';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <TravelTips />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;