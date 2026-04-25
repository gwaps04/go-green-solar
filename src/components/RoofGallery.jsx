import React from 'react';

const RoofGallery = () => {
  // Array of your roof images from the public/imgs/ folder
  const images = [
    { src: '/imgs/roof1.webp', alt: 'Roof Project 1' },
    { src: '/imgs/roof2.webp', alt: 'Roof Project 2' },
    { src: '/imgs/roof3.webp', alt: 'Roof Project 3' },
    { src: '/imgs/roof4.webp', alt: 'Roof Project 4' },
    { src: '/imgs/roof5.webp', alt: 'Roof Project 5' },
    { src: '/imgs/roof6.webp', alt: 'Roof Project 6' },
  ];

  return (
    <section id="roof-projects" className="py-5 bg-light">
      <div className="container py-4">
        
        {/* Header */}
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="fw-bold text-uppercase" style={{ color: '#1e5631', letterSpacing: '2px' }}>
            Roof Shots: Our Projects
          </h2>
          <div className="mx-auto mt-2 mb-3" style={{ width: '80px', height: '4px', backgroundColor: '#ffc107' }}></div>
          <p className="lead text-muted">
            A top-down look at our precision installations across the region.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="row g-3">
          {images.map((img, index) => (
            <div className="col-6 col-md-4" key={index}>
              <div className="card border-0 shadow-sm overflow-hidden h-100 brand-card">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="img-fluid"
                  style={{ 
                    height: '250px', 
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease' 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoofGallery;