import React from 'react';

const Services = () => {
  const serviceList = [
    {
      title: "Residential Solar Installation",
      icon: "bi-house-heart",
      description: "Power your home with clean, renewable energy. Whether you're running essential appliances or a fully air-conditioned household, we design and install systems that maximize savings and long-term performance."
    },
    {
      title: "Commercial Solar Installation",
      icon: "bi-building-gear",
      description: "Reduce operating costs and improve energy efficiency for your business. From small enterprises to large facilities, we build scalable solar systems that support your daily operations and long-term growth."
    },
    {
      title: "System Design & Consultation",
      icon: "bi-lightbulb-fill",
      description: "Every property is different. We carefully assess your energy usage, space, and goals to recommend the most efficient solar setup for your situation."
    },
    {
      title: "Professional Installation Services",
      icon: "bi-tools",
      description: "Our team ensures safe, precise, and compliant installation—from mounting to system integration—so your solar setup performs at its best from day one."
    },
    {
      title: "Maintenance & Support",
      icon: "bi-shield-check-fill",
      description: "We don’t stop after installation. We offer ongoing support, system checks, and maintenance to keep your solar investment running efficiently for years."
    }
  ];

  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-4">
        
        {/* Header */}
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="fw-bold text-uppercase" style={{ color: '#1e5631', letterSpacing: '2px' }}>
            Our Expert Solar Solutions
          </h2>
          <div className="mx-auto mt-2 mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#ffc107' }}></div>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            We provide expert solar solutions for both residential and commercial properties, delivering reliable, efficient, and future-ready energy systems tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 justify-content-center">
          {serviceList.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4 hover-scale" style={{ backgroundColor: '#f8fdfa', borderRadius: '20px' }}>
                <div className="mb-3">
                  <i className={`bi ${service.icon} text-success`} style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#0f3443' }}>{service.title}</h4>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* Why Choose Us Card */}
          <div className="col-12 mt-5">
            <div className="p-4 p-md-5 text-white rounded-4 shadow-lg" style={{ background: 'linear-gradient(90deg, #1e5631 0%, #4c9f70 100%)' }}>
              <div className="row align-items-center">
                <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                  <h2 className="fw-bold text-uppercase mb-0">Why Choose Us</h2>
                </div>
                <div className="col-lg-8 border-start border-white border-opacity-25 ps-lg-5">
                  <p className="lead mb-0" style={{ fontSize: '1.1rem' }}>
                    We take pride in the quality of our work and the people behind it. Our installers are properly trained, continuously upskilled, and experienced in handling both residential and commercial solar systems. Every installation is carried out with attention to detail, safety standards, and industry best practices—giving you confidence, reliability, and peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;