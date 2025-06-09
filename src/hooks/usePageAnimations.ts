import { useEffect } from "react";

export function usePageAnimations() {
  useEffect(() => {
    // Add loaded class to images once they're loaded for smooth fade-in
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        img.onload = () => img.classList.add("loaded");
        if (img.complete) img.classList.add("loaded");
      }
    });

    // Add intersection observer for animation triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections for animation
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
