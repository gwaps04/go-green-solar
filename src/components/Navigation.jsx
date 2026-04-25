import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark navbar-custom ${!isVisible ? 'navbar-hidden' : ''} ${isScrolled ? 'shadow' : ''}`}
      aria-label="Main navigation"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="fw-bold tracking-tighter">GO GREEN SOLAR</span>
        </a>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarMain" 
          aria-controls="navbarMain" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link px-3" href="/">HOME</a>
            </li>
            <li className="nav-item">
              {/* Robust pathing: works from any subpage */}
              <a className="nav-link px-3" href="/#about">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/#packages">PACKAGES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/#faqs">FAQS</a>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a 
                href="/?page=booking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm d-inline-flex align-items-center"
                style={{ color: '#0f3443' }}
              >
                <i className="bi bi-calendar2-check-fill me-2"></i>
                Get your Free Site Visit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;