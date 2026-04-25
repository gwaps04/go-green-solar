import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check window scroll and document element scroll
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      
      // If the scroll is more than 300px, show the button
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Run once on load to catch current scroll position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="btn btn-warning rounded-circle shadow-lg d-flex align-items-center justify-content-center animate-fade-in"
          aria-label="Scroll to top"
          style={{ 
            width: '60px', 
            height: '60px', 
            position: 'fixed', 
            bottom: '40px', 
            right: '30px', 
            zIndex: '9999', /* Highest possible to stay above all sections */
            transition: 'all 0.3s ease',
            border: '2px solid white',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          {/* Main Icon */}
          <i className="bi bi-arrow-up-short fs-1 fw-bold text-dark" style={{ lineHeight: 0 }}></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;