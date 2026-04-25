import React, { useState } from 'react';

const Packages = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [appliances, setAppliances] = useState({
    ac: 0,
    pump: 0,
    heater: 0,
    heavy: 0
  });

  const tiers = [
    {
      title: "Small-Medium Homes",
      kw: "6kW System",
      icon: "bi-house-door",
      details: "Handles your 1–3 ACs and daily essentials with ease.",
      price: "Starting at 250k",
      color: "#198754", // Success Green
      bgColor: "#f4fdfa" // Very Light Mint
    },
    {
      title: "Modern Large Homes",
      kw: "10kW System",
      icon: "bi-house-heart",
      details: "Step up to power 3–5 ACs plus your water pumps and electric kitchen.",
      price: "400k – 600k+",
      color: "#1e5631", // Dark Green
      bgColor: "#f1f6f3" // Light Forest Tint
    },
    {
      title: "Luxury Estates",
      kw: "12kW Package",
      icon: "bi-castle",
      details: "Go limitless: designed for 5+ ACs, water heaters, and heavy appliance loads.",
      price: "600k+",
      color: "#6f42c1", // ROYAL PURPLE for Luxury
      bgColor: "#f8f4ff", // Faint Lavender Tint
      iconColor: "#ffc107" // GOLD for the icon
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const count = parseInt(value) || 0;
    setAppliances(prev => ({ ...prev, [name]: count < 0 ? 0 : count }));
  };

  // CALCULATION LOGIC: Aligned with PH Household Load Standards
  const calculateEstimate = () => {
    const baseKW = 1.5; // Base load: Lights, Fridge, TV, Laptop
    const acLoad = appliances.ac * 1.2; // Typical 1.0 - 1.5 HP Inverter/Standard load
    const pumpLoad = appliances.pump * 1.0; // Standard domestic water pump
    const heaterLoad = appliances.heater * 3.5; // High-wattage instant shower heater
    const heavyLoad = appliances.heavy * 2.5; // Induction cooker, Oven, or Washer/Dryer
    
    const total = baseKW + acLoad + pumpLoad + heaterLoad + heavyLoad;
    
    // Suggest the closest tier
    if (total <= 6) return 6;
    if (total <= 10) return 10;
    return Math.ceil(total); // For Luxury/Estates, round up to nearest kW
  };

  const suggestedKW = calculateEstimate();

  return (
    <section id="packages" className="py-5 bg-white">
      <div className="container py-4">
        
        {/* Header */}
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="fw-bold text-uppercase px-2" style={{ color: '#1e5631', letterSpacing: '2px' }}>
            Our Solar Packages
          </h2>
          <div className="mx-auto mt-2 mb-3" style={{ width: '80px', height: '4px', backgroundColor: '#ffc107' }}></div>
          <p className="lead text-muted fw-bold px-3">
            Clean energy that works as hard as you do.
          </p>
        </div>

        {/* Package Cards - Responsive Stack/Grid */}
        <div className="row g-4 justify-content-center px-2">
          {tiers.map((pkg, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div 
                className="card h-100 border-0 shadow-sm brand-card text-center p-4 p-lg-5"
                style={{ 
                  backgroundColor: pkg.bgColor,
                  borderTop: `6px solid ${pkg.color}`,
                  borderRadius: '15px'
                }}
              >
                <div className="card-body d-flex flex-column">
                  {/* THE CIRCLE (Icon Wrapper) */}
                  <div 
                    className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      backgroundColor: pkg.title === "Luxury Estates" ? pkg.color : "#ffffff", 
                      color: pkg.iconColor || pkg.color,
                      margin: '0 auto'
                    }}
                  >
                    <i className={`bi ${pkg.icon} display-4`}></i>
                  </div>
                  
                  <h4 className="fw-bold mb-1" style={{ color: '#0f3443' }}>{pkg.title}</h4>
                  <h5 className="fw-bold mb-3" style={{ color: pkg.color }}>{pkg.kw}</h5>
                  
                  <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {pkg.details}
                  </p>
                  
                  <div className="mt-4 pt-3 border-top border-white border-opacity-50">
                    <h3 className="fw-bold mb-0" style={{ color: '#0f3443' }}>{pkg.price}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CALCULATOR SECTION */}
        <div className="text-center mt-5 pt-3">
          <button 
            onClick={() => setShowCalculator(!showCalculator)} 
            className="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow-sm mb-4"
          >
            {showCalculator ? 'Close Calculator' : 'Try our Solar Calculator'}
          </button>

          {/* ROLL DOWN CALCULATOR - MOBILE OPTIMIZED */}
          <div className={`collapse ${showCalculator ? 'show' : ''}`}>
            <div className="card border-0 shadow-lg p-3 p-md-5 mx-auto" style={{ maxWidth: '850px', borderRadius: '25px', backgroundColor: '#f8f9fa' }}>
              <h3 className="fw-bold mb-2 text-success">Solar Consumption Estimator</h3>
              <p className="text-muted mb-4 px-2">Tell us how many of these appliances you use daily:</p>
              
              <div className="row g-3 g-md-4 text-start">
                <div className="col-6 col-lg-3 text-center">
                  <label className="form-label fw-bold small text-uppercase">Aircon Units</label>
                  <input type="number" name="ac" value={appliances.ac} onChange={handleInputChange} className="form-control text-center rounded-pill border-success shadow-sm py-2" placeholder="0" />
                  <small className="text-muted d-block mt-2"><i className="bi bi-wind me-1"></i>1.0-1.5 HP</small>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <label className="form-label fw-bold small text-uppercase">Water Pump</label>
                  <input type="number" name="pump" value={appliances.pump} onChange={handleInputChange} className="form-control text-center rounded-pill border-success shadow-sm py-2" placeholder="0" />
                  <small className="text-muted d-block mt-2"><i className="bi bi-droplet-fill me-1"></i>Domestic</small>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <label className="form-label fw-bold small text-uppercase">Shower Heaters</label>
                  <input type="number" name="heater" value={appliances.heater} onChange={handleInputChange} className="form-control text-center rounded-pill border-success shadow-sm py-2" placeholder="0" />
                  <small className="text-muted d-block mt-2"><i className="bi bi-thermometer-sun me-1"></i>Instant Type</small>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <label className="form-label fw-bold small text-uppercase">Heavy Loads</label>
                  <input type="number" name="heavy" value={appliances.heavy} onChange={handleInputChange} className="form-control text-center rounded-pill border-success shadow-sm py-2" placeholder="0" />
                  <small className="text-muted d-block mt-2"><i className="bi bi-lightning-charge-fill me-1"></i>Range/Oven</small>
                </div>
              </div>

              {/* DYNAMIC RESULT DISPLAY */}
              {suggestedKW > 1.5 && (
                <div className="mt-5 p-4 rounded-4 animate-fade-in mx-1" style={{ backgroundColor: '#ffffff', border: '2px dashed #198754' }}>
                  <h5 className="text-muted text-uppercase mb-2 small">Suggested Solar System Size</h5>
                  <div className="display-3 fw-bold text-success mb-3">{suggestedKW} <span className="fs-3">kW</span></div>
                  
                  <div className="alert alert-warning border-0 rounded-4 d-inline-block px-3 py-3 mb-4 shadow-sm" style={{ fontSize: '0.9rem' }}>
                    <i className="bi bi-info-circle-fill me-2"></i>
                    <strong>Disclaimer:</strong> For an accurate estimate, you may get your free Site Visit.
                  </div>

                  <div className="d-grid gap-2 col-md-8 mx-auto">
                    <a 
                      href="/?page=booking" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg rounded-pill fw-bold shadow-sm py-3"
                    >
                      Book Free Site Visit Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Packages;