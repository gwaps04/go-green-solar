import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // LOGIC: Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Check if we have scrolled past 50px for styling
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
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
        {/* BRAND */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="fw-bold tracking-tighter">GO GREEN SOLAR</span>
        </a>

        {/* MOBILE TOGGLE */}
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

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link px-3" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#about">ABOUT US</a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle px-3" 
                href="#" 
                id="servicesDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                SERVICES
              </a>
              <ul className="dropdown-menu border-0 shadow" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item" href="#residential">Residential Solar</a></li>
                <li><a className="dropdown-item" href="#commercial">Commercial Solar</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#maintenance">Maintenance</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#faqs">FAQS</a>
            </li>

            {/* UPDATED CALL TO ACTION */}
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