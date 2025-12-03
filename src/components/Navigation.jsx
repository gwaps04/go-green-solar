import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom bg-gradient-green fixed-top shadow-sm">
      <div className="container-fluid"> 
        
        <a className="navbar-brand ps-3" href="#">GO GREEN SOLAR</a>
        
        <button 
          className="navbar-toggler border-0 pe-3" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-3 align-items-center">
            
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Solar Installation</a></li>
                <li><a className="dropdown-item" href="#">Design and Quotation</a></li>
                <li className="position-relative"> 
                  <a className="dropdown-item dropdown-toggle" href="#">Repair or Rehabilitation</a>
                  <ul className="dropdown-menu dropdown-submenu submenu-left">
                    <li><a className="dropdown-item" href="#">Defective Solar</a></li>
                    <li><a className="dropdown-item" href="#">Damaged Materials</a></li>
                    <li><a className="dropdown-item" href="#">Non Functional System</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#faqs">FAQs</a>
            </li>

            {/* THE "BOOK NOW" CTA BUTTON */}
            {/* ms-lg-3 adds a little gap on desktop so it doesn't touch FAQs */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a 
                className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm" 
                href="#book-now"
                style={{ color: '#0f3443' }} // Dark teal text for contrast
              >
                Book Now
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;