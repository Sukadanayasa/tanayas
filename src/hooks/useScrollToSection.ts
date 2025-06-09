import { useCallback } from 'react';

/**
 * Custom hook to provide a function for smooth scrolling to an HTML element by its ID.
 * @returns A function `scrollToSection` that takes a sectionId string and scrolls to it.
 */
const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;