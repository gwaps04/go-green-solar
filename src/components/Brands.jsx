import React from 'react';

const Brands = () => {
  // Brand Data: Updated with strict Electricity/Solar icons
  const brandList = [
    // Lightning Bolt (Power)
    { name: 'Lux Power', icon: 'bi-lightning-charge-fill', color: 'text-warning' },
    
    // The Sun (Solar Source)
    { name: 'Trina Solar', icon: 'bi-sun-fill', color: 'text-warning' },
    
    // The Grid (Solar Panels/Matrix)
    { name: 'Seraphim Energy', icon: 'bi-grid-3x3-gap-fill', color: 'text-success' }, 
    
    // The Plug (Connection)
    { name: 'Zamdon', icon: 'bi-plug-fill', color: 'text-danger' },
    
    // High Voltage / Danger Sign (Industrial Power)
    { name: 'One Point System', icon: 'bi-exclamation-triangle-fill', color: 'text-warning' },
    
    // High Brightness (Efficiency)
    { name: 'LVTopsun', icon: 'bi-brightness-high-fill', color: 'text-warning' },
    
    // Recycling (Renewable Energy)
    { name: 'TBB Renewable', icon: 'bi-recycle', color: 'text-success' },
    
    // Battery (Storage/Inverters)
    { name: 'Dyness', icon: 'bi-battery-charging', color: 'text-primary' },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase">Trusted Brands</h2>
          <p className="lead text-muted">
            Powering your home with world-class components.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {brandList.map((brand, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              
              {/* THE CARD */}
              <div 
                className="card h-100 border-0 shadow-sm text-center py-4 brand-card"
                // Adding the top border color dynamically based on brand color
                style={{ borderTop: '4px solid #4c9f70' }} 
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  
                  {/* ICON BUBBLE */}
                  <div 
                    className="icon-box mb-3 rounded-circle d-flex align-items-center justify-content-center bg-light"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className={`${brand.icon} display-5 ${brand.color}`}></i>
                  </div>
                  
                  <h6 className="fw-bold text-dark text-uppercase letter-spacing-1">
                    {brand.name}
                  </h6>
                  
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;