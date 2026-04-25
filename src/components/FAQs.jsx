import React from 'react';

const FAQs = () => {
  return (
    /* Soft light-green background for a professional, earthy feel */
    <section id="faqs" className="py-5" style={{ backgroundColor: '#f4f9f6' }}>
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" style={{ color: '#1e5631', letterSpacing: '1.5px' }}>
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-2 mb-3" style={{ width: '80px', height: '4px', backgroundColor: '#ffc107' }}></div>
          <p className="lead text-muted">
            Everything you need to know about going solar with Go Green.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            
            {/* BOOTSTRAP ACCORDION */}
            <div className="accordion shadow-sm" id="faqAccordion">

              {/* Q1: Business Principle (Priority Color) */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingOne">
                  <button 
                    className="accordion-button fw-bold text-success" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne"
                    style={{ backgroundColor: '#ffffff', borderLeft: '5px solid #198754' }}
                  >
                    <i className="bi bi-star-fill me-2 text-warning"></i>
                    What is our business principle?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    Our Business principle is simple: <strong className="text-success">we do all for the Glory of our Creator.</strong> We value your investment and trust, which is why we ensure absolute quality and performance in every installation and repair we handle.
                  </div>
                </div>
              </div>

              {/* Q2: Location */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingTwo">
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    aria-expanded="false" 
                    aria-controls="collapseTwo"
                    style={{ backgroundColor: '#ffffff', color: '#333' }}
                  >
                    Where does Go Green Solar operate?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    We are based in <strong>Sorsogon</strong> and also serve places in <strong>Albay</strong> and other areas within the <strong>Bicol Region</strong>. We are proud to bring energy to our local community!
                  </div>
                </div>
              </div>

              {/* Q3: Cost */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingThree">
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree" 
                    aria-expanded="false" 
                    aria-controls="collapseThree"
                    style={{ backgroundColor: '#ffffff', color: '#333' }}
                  >
                    How much does a solar installation cost?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    <p className="fw-bold text-success mb-3">System Tier Breakdown:</p>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#f8fdfa', border: '1px solid #e1eee6' }}>
                          <h6 className="fw-bold mb-1">🏠 Small-Medium</h6>
                          <small className="text-muted">6kW System (Starting at 250k)</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#fcfbf2', border: '1px solid #eee9d1' }}>
                          <h6 className="fw-bold mb-1">🏡 Modern Large</h6>
                          <small className="text-muted">10kW System (400k – 600k+)</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#fdf8f8', border: '1px solid #f1e4e4' }}>
                          <h6 className="fw-bold mb-1">🏰 Luxury Estates</h6>
                          <small className="text-muted">12kW+ Package (600k+)</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Q4: Duration */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingFour">
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFour" 
                    aria-expanded="false" 
                    aria-controls="collapseFour"
                    style={{ backgroundColor: '#ffffff', color: '#333' }}
                  >
                    How long before the installation is completed?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    Since we are committed to bringing quality while continuing to value your trust and confidence, we normally finish an installation within a <strong className="text-success">7-day duration</strong>.
                  </div>
                </div>
              </div>

              {/* Q5: Warranty */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingFive">
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFive" 
                    aria-expanded="false" 
                    aria-controls="collapseFive"
                    style={{ backgroundColor: '#ffffff', color: '#333' }}
                  >
                    Is there a warranty?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    <strong>Yes!</strong> We provide warranty services for you, specifically to address any unexpected concerns regarding the installation or system performance.
                  </div>
                </div>
              </div>

              {/* Q6: Outside Albay */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingSix">
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseSix" 
                    aria-expanded="false" 
                    aria-controls="collapseSix"
                    style={{ backgroundColor: '#ffffff', color: '#333' }}
                  >
                    Do you do installations outside Albay?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    <strong>Yes.</strong> We do installations and repairs in <strong>every part of the Bicol region</strong>. Simply use our booking calendar, and we will reach out to you once we confirm your schedule.
                  </div>
                </div>
              </div>

              {/* Q7: Site Visit Fee */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingSeven">
                  <button 
                    className="accordion-button collapsed fw-bold text-success" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseSeven" 
                    aria-expanded="false" 
                    aria-controls="collapseSeven"
                    style={{ backgroundColor: '#ffffff', borderLeft: '5px solid #ffc107' }}
                  >
                    Is there a fee for a Site Visit / Ocular Inspection?
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    <p className="h5 fw-bold mb-3">No Fee will be collected.</p>
                    This is part of our commitment to you. You can book your inspection directly through this link: 
                    <a href="/?page=booking" target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-sm fw-bold ms-2 rounded-pill shadow-sm">
                      Free Site Visit Booking
                    </a>
                  </div>
                </div>
              </div>

              {/* Q8: Business Hours */}
              <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                <h2 className="accordion-header" id="headingEight">
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseEight" 
                    aria-expanded="false" 
                    aria-controls="collapseEight"
                    style={{ backgroundColor: '#ffffff', color: '#333' }}
                  >
                    What are your Business operation days?
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-white border-top border-light py-4">
                    We are open for business <strong>Monday to Saturday: 8:00 am - 5:00 pm.</strong>
                  </div>
                </div>
              </div>

            </div>
            {/* End Accordion */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;