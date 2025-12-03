import React, { useState } from 'react';

const SolarEstimator = () => {
  // State to hold the user's input
  const [monthlyKwh, setMonthlyKwh] = useState('');
  
  // State to hold the results
  const [results, setResults] = useState({
    dailyUsage: 0,
    requiredKw: 0,
    numPanels: 0
  });

  // Constants defined in the prompt
  const SUN_HOURS = 4; // Conservative Sorsogon average
  const EFFICIENCY = 0.80; // System efficiency
  const PANEL_WATTAGE = 550; // Watts

  // The Calculation Logic
  const handleCalculate = (e) => {
    const val = e.target.value;
    setMonthlyKwh(val);

    // Only calculate if input is a valid positive number
    if (val && val > 0) {
      const daily = parseFloat(val) / 30;
      // Formula: Daily / (SunHours * Efficiency)
      const requiredKw = daily / (SUN_HOURS * EFFICIENCY);
      // Formula: (RequiredKW * 1000) / PanelWattage
      // We specificially use Math.ceil to round UP to the next whole panel
      const panels = Math.ceil((requiredKw * 1000) / PANEL_WATTAGE);

      setResults({
        dailyUsage: daily.toFixed(2),
        requiredKw: requiredKw.toFixed(2),
        numPanels: panels
      });
    } else {
      // Reset if input is empty
      setResults({ dailyUsage: 0, requiredKw: 0, numPanels: 0 });
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase">Solar System Estimator</h2>
          <p className="lead text-muted">
            Estimate the size of the solar system you need based on your SORECO bill.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 overflow-hidden">
              <div className="row g-0">
                
                {/* LEFT SIDE: INPUT */}
                <div className="col-md-6 bg-white p-5">
                  <h4 className="fw-bold mb-4 text-success">1. Enter Consumption</h4>
                  
                  <div className="mb-4">
                    <label htmlFor="kwhInput" className="form-label fw-bold">
                      Monthly Usage (kWh)
                    </label>
                    <div className="input-group input-group-lg">
                      <input 
                        type="number" 
                        className="form-control border-success" 
                        id="kwhInput" 
                        placeholder="e.g. 300" 
                        value={monthlyKwh}
                        onChange={handleCalculate}
                      />
                      <span className="input-group-text bg-success text-white">kWh</span>
                    </div>
                    <div className="form-text mt-2">
                      <i className="bi bi-info-circle-fill me-1"></i>
                      Check your <strong>SORECO Bill</strong> for "Monthly Consumption".
                    </div>
                  </div>

                  <hr className="my-4 text-muted" />

                  {/* Constants Display (Trust Signals) */}
                  <div className="small text-muted">
                    <p className="mb-1 fw-bold text-uppercase">Calculation Parameters:</p>
                    <ul className="list-unstyled mb-0">
                      <li>• Location: Sorsogon/Bicol (4 Sun Hours)</li>
                      <li>• System Efficiency: 80% (Conservative)</li>
                      <li>• Panel Type: {PANEL_WATTAGE}W High-Efficiency</li>
                    </ul>
                  </div>
                </div>

                {/* RIGHT SIDE: RESULTS */}
                <div className="col-md-6 bg-gradient-green text-white p-5 d-flex flex-column justify-content-center">
                  <h4 className="fw-bold mb-4 border-bottom border-light pb-2 d-inline-block">
                    Your Estimated System
                  </h4>

                  <div className="mb-4">
                    <h6 className="text-uppercase mb-1" style={{ opacity: 0.9 }}>System Size Required</h6>
                    <div className="display-4 fw-bold">
                      {results.requiredKw} <span className="fs-4">kW</span>
                    </div>
                  </div>

                  <div className="mb-0">
                    <h6 className="text-uppercase mb-1" style={{ opacity: 0.9 }}>Recommended Panels</h6>
                    <div className="d-flex align-items-baseline">
                      <span className="display-1 fw-bold me-2">{results.numPanels}</span>
                      <span className="fs-4">pcs ({PANEL_WATTAGE}W)</span>
                    </div>
                    <p className="mt-2 small text-white-50">
                      *Rounded up to ensure sufficient power generation.
                    </p>
                  </div>

                  {/* Call to Action Button */}
                  {results.numPanels > 0 && (
                    <div className="mt-4 fade-in">
                      <button className="btn btn-light btn-lg fw-bold w-100 text-success">
                        Get a Quote for {results.numPanels} Panels
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarEstimator;