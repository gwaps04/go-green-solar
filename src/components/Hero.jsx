import React from 'react';

const Hero = () => {
  return (
    // UPDATED:
    // 1. Removed 'mt-4 mt-lg-5' (Bootstraps margins were too small)
    // 2. Added inline style for marginTop to clear the fixed navbar
    <section className="container p-0" style={{ marginTop: '100px' }}>
      <img 
        src="/imgs/hero-1.png" 
        alt="Go Green Solar Hero" 
        className="img-fluid w-100 d-block shadow-sm"
        // Added shadow-sm for a subtle 3D lift
        style={{ borderRadius: '8px' }} 
      />
    </section>
  );
};

export default Hero;