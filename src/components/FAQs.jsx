import React from 'react';

const FAQs = () => {
  return (
    <section id="faqs" className="py-5 bg-white">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase text-success">Frequently Asked Questions</h2>
          <p className="lead text-muted">
            Common questions about going solar with Go Green.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            {/* BOOTSTRAP ACCORDION */}
            <div className="accordion shadow-sm" id="faqAccordion">

              {/* Q1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Where does Go Green Solar operate?</strong>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    We are based in <strong>Sorsogon</strong> and also serve places in <strong>Albay</strong> and other areas within the Bicol Region. We are proud to bring energy to our local community!
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>How much does a solar installation cost?</strong>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    We believe in honesty and real value for money. Because every home and business is different, <strong>we do not have a fixed "standard" price.</strong> Instead, we base our pricing entirely on your specific needs to ensure you aren't paying for equipment you don't use.
                  </div>
                </div>
              </div>

              {/* Q3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>What services do you offer?</strong>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    We are a one-stop-shop for your solar needs:
                    <ul className="mt-2">
                      <li><strong>Solar Installation:</strong> For both residential and commercial use.</li>
                      <li><strong>Design and Quotation:</strong> We calculate the best system for your consumption.</li>
                      <li><strong>Repair or Rehabilitation:</strong> We fix defective solar units, damaged materials, and non-functional systems.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <strong>Why choose Go Green Solar?</strong>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Our story started in 2020 as a passion project for energy independence. We didn't take shortcuts; we studied the science deeply to ensure mastery. Grounded in faith and wisdom, our work is about stewardship and serving you with a grateful heart.
                  </div>
                </div>
              </div>

              {/* Q5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <strong>I have a broken solar system from another installer. Can you fix it?</strong>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <strong>Yes!</strong> We specialize in rehabilitation. If you have a non-functional system or damaged materials, we can assess and repair it to get your power running efficiently again.
                  </div>
                </div>
              </div>

              {/* Q6 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <strong>How do I get started?</strong>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                  <div className="accordion-body bg-light">
                    <p className="mb-2">Simply contact us for a Design and Quotation!</p>
                    <div className="d-flex flex-column gap-2">
                      <a href="tel:09397526765" className="text-decoration-none text-dark">
                        <i className="bi bi-telephone-fill text-success me-2"></i> 0939 752 6765
                      </a>
                      <a href="https://www.facebook.com/GoGreenSorsogon" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                        <i className="bi bi-facebook text-primary me-2"></i> Go Green Sorsogon
                      </a>
                    </div>
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