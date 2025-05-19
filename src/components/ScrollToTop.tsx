import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;