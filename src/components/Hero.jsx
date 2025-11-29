import React from 'react';

const Hero = () => {
  return (
    // container: Keeps it boxed/centered
    // p-0: No internal padding
    // mt-4: Adds a ~24px gap on Mobile
    // mt-lg-5: Increases gap to ~48px on Desktop
    <section className="container p-0 mt-4 mt-lg-5">
      <img 
        src="/imgs/hero-1.png" 
        alt="Go Green Solar Hero" 
        className="img-fluid w-100 d-block"
        // Optional: rounded corners look nice with the boxed layout
        style={{ borderRadius: '8px' }} 
      />
    </section>
  );
};

export default Hero;