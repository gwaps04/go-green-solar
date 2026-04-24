import React, { useState } from 'react';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    { name: "Barry L Knotts", rating: 5, status: "Excellent", text: "Competitively priced. After sales follow up is fantastic. Highly recommend this company." },
    { name: "June Rey Gajo", rating: 5, status: "Excellent", text: "Highly recommended go green." },
    { name: "Kiezylyn Leosala", rating: 5, status: "Excellent", text: "Solar saved us from hot brown out days or nights, it lowered our electric bills. Good performance. Incredible professionalism of owner." },
    { name: "Realyn Frades", rating: 5, status: "Excellent", text: "Quality service and great energy savings!" },
    { name: "John Paul", rating: 4, status: "Very Satisfied", text: "I had a fantastic experience with my recent solar installation! The Team was incredibly kind and professional. The whole installation process was completely seamless. Afterward, they gave me very clear instructions on how to operate the inverter, complete with a hands-on demonstration. Highly recommend their services." },
    { name: "Anabelle Jubilo Sy", rating: 4, status: "Very Satisfied", text: "Overall satisfied with Go Green Solar. Head and staff are all very accommodating and easy to talk with. Every time I’ve encountered a problem with the said solar I called them and they immediately called me and visited the House for inspection." },
    { name: "Albert Realce Honrubia", rating: 4, status: "Very Satisfied", text: "Go green is amazing 🙏💙" },
    { name: "jonnel nalez gache", rating: 4, status: "Very Satisfied", text: "The team is form of God 🙏" },
    { name: "Rolfo Dogillo", rating: 3, status: "Satisfied", text: "Going green is the biggest contributor of nation building. More power!" }
  ];

  // Show only first 3 initially
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  const renderStars = (rating) => {
    return [...Array(5)].map((star, i) => (
      <i key={i} className={`bi bi-star-fill ${i < rating ? 'text-warning' : 'text-muted'} me-1`}></i>
    ));
  };

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container py-4">
        
        {/* SECTION HEADER */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold text-uppercase letter-spacing-1" style={{ color: '#1e5631' }}>
              What our Clients Say
            </h2>
            <div className="mx-auto mt-2" style={{ width: '60px', height: '4px', backgroundColor: '#4c9f70' }}></div>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="row g-4 justify-content-center">
          {displayedReviews.map((review, index) => (
            <div key={index} className="col-md-6 col-lg-4 animate-fade-in">
              <div className="card h-100 border-0 shadow-sm brand-card p-4">
                <div className="card-body">
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <h5 className="fw-bold mb-1">{review.name}</h5>
                  <span className="badge bg-success bg-opacity-10 text-success mb-3">{review.status}</span>
                  <p className="card-text fst-italic text-secondary" style={{ fontSize: '0.95rem' }}>
                    "{review.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* "AND MANY MORE" Logic */}
          {showAll && (
            <div className="col-12 text-center mt-4 animate-fade-in">
              <h4 className="text-muted opacity-75 fw-light" style={{ letterSpacing: '1px' }}>
                ...and many more!
              </h4>
            </div>
          )}
        </div>

        {/* SEE MORE TOGGLE */}
        <div className="text-center mt-5">
          <button 
            className="btn btn-outline-success rounded-pill px-5 fw-bold"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'See More Reviews'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;