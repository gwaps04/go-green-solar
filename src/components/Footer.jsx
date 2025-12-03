import React from 'react';

const Footer = () => {
  return (
    // Used a specific Deep Green hex code (#143d22) to match your brand but darker
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#143d22' }}>
      <div className="container">
        
        <div className="row g-4 justify-content-between">
          
          {/* COLUMN 1: BRANDING */}
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase text-warning mb-3">Go Green Solar</h5>
            <p className="small text-white-50">
              Empowering Bicolanos with clean, renewable energy. 
              Grounded in faith, stewardship, and service.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/GoGreenSorsogon" target="_blank" rel="noreferrer" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="mailto:gogreensolar@gmail.com" className="text-white fs-5">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Home</a></li>
              <li className="mb-2"><a href="#gallery" className="text-white-50 text-decoration-none hover-white">Recent Projects</a></li>
              <li className="mb-2"><a href="#faqs" className="text-white-50 text-decoration-none hover-white">FAQs</a></li>
              <li className="mb-2"><a href="#book-now" className="text-warning text-decoration-none fw-bold">Get a Quote</a></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Contact Us</h6>
            <ul className="list-unstyled small text-white-50">
              <li className="mb-2 d-flex">
                <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                <span>Sorsogon City & Albay, Bicol Region</span>
              </li>
              <li className="mb-2 d-flex">
                <i className="bi bi-telephone-fill text-warning me-2"></i>
                <span>0939 752 6765</span>
              </li>
              <li className="d-flex">
                <i className="bi bi-clock-fill text-warning me-2"></i>
                <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-4 border-secondary" />

        {/* BOTTOM BAR: COPYRIGHT & DEVELOPER */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-white-50 mb-0">
              &copy; 2025 Go Green Solar. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="small text-white-50 mb-0">
              Developed by <a href="https://macrotekdigitalsolutions.com" target="_blank" rel="noreferrer" className="text-warning text-decoration-none">Macrotek Digital Solutions</a>
            </p>
          </div>
        </div>

      </div>

      {/* Simple Hover Effect Style */}
      <style>{`
        .hover-white:hover { color: #fff !important; }
      `}</style>
    </footer>
  );
};

export default Footer;