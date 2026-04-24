import React from 'react';

const About = () => {
  return (
    <section className="bg-about-grid text-white py-5">
      <div className="container py-4">
        
        {/* SECTION HEADER */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
              About Go Green Solar
            </h2>
            <p className="lead mb-0" style={{ opacity: 0.9 }}>
              From Curiosity to Commitment: Our Story
            </p>
            <div className="mx-auto mt-3" style={{ width: '80px', height: '4px', backgroundColor: 'white', borderRadius: '2px' }}></div>
          </div>
        </div>

        {/* CONTENT COLUMNS */}
        <div className="row g-5 align-items-center">
          
          {/* COLUMN 1: The History */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-4 text-warning">Our Beginnings</h3>
            <p className="mb-4">
              Our story began in 2020, a year that challenged everyone to look at the world differently. 
              While many things came to a halt, our journey was just beginning. What started as a 
              personal <strong>"DIY"</strong> project sparked a deep, undeniable passion for energy independence.
            </p>
            <p>
              We realized early on that solar energy wasn't just a product—it was a solution that 
              required mastery. We didn't take shortcuts. We invested countless hours of time and 
              effort to study the science of renewable energy, testing theories and learning the 
              technology inside and out. That period of intense learning laid the groundwork for 
              everything we do today.
            </p>
          </div>

          {/* COLUMN 2: Values & Mission */}
          <div className="col-md-6">
            <div className="p-4 rounded-3" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="fw-bold mb-4 text-warning">Faith & Mission</h3>
              <p>
                <strong>Built on Faith and Wisdom:</strong> We believe that true expertise is a gift to be shared. 
                We attribute our growth, our understanding, and our resilience to the wisdom given by God, our Creator. 
                This foundation of faith is the heartbeat of Go Green Solar. It reminds us daily that our work is 
                about stewardship, honesty, and serving our community.
              </p>
              
              <p className="mt-4">
                <strong>Our Mission:</strong> Today, Go Green Solar serves with a clear goal: to provide renewable 
                energy solutions that offer genuine quality and real value. Whether for a home or business, 
                we ensure every system is reliable, efficient, and built to last.
              </p>
              
              <p className="fst-italic mt-4 pt-3 border-top border-secondary" style={{ opacity: 0.8 }}>
                "Thank you for trusting us to power your homes. We are honored to share this journey with you."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;