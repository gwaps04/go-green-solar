import React from 'react';

const Gallery = () => {
  return (
    /* ADDED id="gallery" HERE */
    <section id="gallery" className="py-5 bg-white">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase">Our Recent Projects</h2>
          <p className="lead text-muted">
            Delivering clean energy to homes and businesses across Bicol.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* CAROUSEL */}
            <div id="galleryCarousel" className="carousel slide shadow-lg rounded overflow-hidden" data-bs-ride="carousel">
              
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              <div className="carousel-inner">
                {/* ITEM 1 */}
                <div className="carousel-item active" data-bs-interval="4000">
                  <img 
                    src="/imgs/gallery/img1.png" 
                    className="d-block w-100" 
                    alt="Solar Project 1" 
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                    <h5>Residential Installation</h5>
                    <p>Sorsogon City</p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <img 
                    src="/imgs/gallery/img2.png" 
                    className="d-block w-100" 
                    alt="Solar Project 2"
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                </div>

                {/* ITEM 3 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <img 
                    src="/imgs/gallery/img3.png" 
                    className="d-block w-100" 
                    alt="Solar Project 3"
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                </div>

                {/* ITEM 4 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <img 
                    src="/imgs/gallery/img4.png" 
                    className="d-block w-100" 
                    alt="Solar Project 4"
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;