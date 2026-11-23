import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-dark-900/90 text-neon border border-neon/40 backdrop-blur-md shadow-neon hover:bg-neon hover:text-black transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group"
    >
      <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default BackToTop;

