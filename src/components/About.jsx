import React from 'react';

const About = () => {
  return (
    // 1. Full width background using our custom gradient
    // 2. text-white: Makes font white for contrast
    // 3. py-5: Adds significant vertical padding (top and bottom) for a professional look
    <section className="bg-gradient-green text-white py-5 mt-5">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
              About Go Green Solar
            </h2>
            <p className="lead" style={{ opacity: 0.9 }}>
              From Curiosity to Commitment: Our Story
            </p>
            {/* A small white divider line for style */}
            <div className="mx-auto mt-3" style={{ width: '60px', height: '3px', backgroundColor: 'white' }}></div>
          </div>
        </div>

        {/* CONTENT COLUMNS */}
        <div className="row g-5"> {/* g-5 adds a nice gap between columns */}
          
          {/* COLUMN 1: The History */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">Our Beginnings</h4>
            <p>
              Our story began in 2020, a year that challenged everyone to look at the world differently. 
              While many things came to a halt, our journey was just beginning. What started as a 
              personal "DIY" project sparked a deep, undeniable passion for energy independence.
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
            <h4 className="fw-bold mb-3">Faith & Mission</h4>
            <p>
              <strong>Built on Faith and Wisdom:</strong> We believe that true expertise is a gift to be shared. 
              We attribute our growth, our understanding, and our resilience to the wisdom given by God, our Creator. 
              This foundation of faith is the heartbeat of Go Green Solar. It reminds us daily that our work is 
              about stewardship, honesty, and serving our community.
            </p>
            
            <p>
              <strong>Our Mission:</strong> Today, Go Green Solar serves with a clear goal: to provide renewable 
              energy solutions that offer genuine quality and real value. Whether for a home or business, 
              we ensure every system is reliable, efficient, and built to last.
            </p>
            
            <p className="fst-italic mt-4" style={{ opacity: 0.9 }}>
              "Thank you for trusting us to power your homes. We are honored to share this journey with you."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;