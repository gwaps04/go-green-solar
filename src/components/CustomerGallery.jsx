import React from 'react';

const CustomerGallery = () => {
  // Array for your satisfied customer images
  const customers = [
    { src: '/imgs/cu1.webp', alt: 'Satisfied Customer 1' },
    { src: '/imgs/cu2.webp', alt: 'Satisfied Customer 2' },
    { src: '/imgs/cu3.webp', alt: 'Satisfied Customer 3' },
    { src: '/imgs/cu4.webp', alt: 'Satisfied Customer 4' },
    { src: '/imgs/cu5.webp', alt: 'Satisfied Customer 5' },
  ];

  return (
    <section id="customers" className="py-5 bg-white">
      <div className="container py-4">
        
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="fw-bold text-uppercase" style={{ color: '#1e5631', letterSpacing: '2px' }}>
            Our Satisfied Customers
          </h2>
          <div className="mx-auto mt-2 mb-3" style={{ width: '80px', height: '4px', backgroundColor: '#ffc107' }}></div>
          <p className="lead text-muted">
            The faces of energy independence. Join our growing family of solar-powered homes.
          </p>
        </div>

        {/* TRUST SIGNALS ROW */}
        <div className="row g-3 justify-content-center mb-5 text-center">
          {/* 5-Star Guarantee */}
          <div className="col-auto">
            <div className="p-3 px-4 rounded-4 bg-light border shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
              <div className="mb-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning mx-1"></i>
                ))}
              </div>
              <span className="fw-bold text-dark small text-uppercase">5-Star Guaranteed</span>
            </div>
          </div>

          {/* Legitimate Seal */}
          <div className="col-auto">
            <div className="p-3 px-4 rounded-4 bg-light border shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
              <i className="bi bi-patch-check-fill text-success fs-3 mb-1"></i>
              <span className="fw-bold text-dark small text-uppercase">Legitimacy Seal</span>
            </div>
          </div>

          {/* Safety First */}
          <div className="col-auto">
            <div className="p-3 px-4 rounded-4 bg-light border shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
              <i className="bi bi-shield-lock-fill text-primary fs-3 mb-1"></i>
              <span className="fw-bold text-dark small text-uppercase">Safety Certified</span>
            </div>
          </div>
        </div>

        {/* Optimized Image Grid */}
        <div className="row g-4 justify-content-center">
          {customers.map((cu, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div className="card border-0 shadow-sm overflow-hidden h-100 brand-card" style={{ borderRadius: '15px' }}>
                <img 
                  src={cu.src} 
                  alt={cu.alt} 
                  loading="lazy" /* Bandwidth Optimization */
                  className="img-fluid"
                  style={{ 
                    height: '200px', 
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="text-center mt-5">
          <div className="d-inline-flex align-items-center p-3 rounded-pill bg-light border shadow-sm px-4">
            <i className="bi bi-award-fill text-success fs-4 me-2"></i>
            <span className="fw-bold text-muted text-uppercase small" style={{ letterSpacing: '1px' }}>
              Bicol's Trusted Solar Engineering Team
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomerGallery;