import React, { useState } from 'react';

const CallToAction = () => {
  // State for Form Data (Matched to your Spreadsheet)
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Address: '',
    Email: '',
    Mobile_1: '',
    Mobile_2: '',
    Industry: ''
  });

  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle'); 
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // 1. Start the Progress Bar (Visual Trick)
    setProgress(30);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwNPJDOSo8pbbTA2knQi-NlxYfpL0i7MBqQ5fN7M1mZJCDPMqV0X2fNgt1491HE-Lb1/exec';

    try {
      const formBody = new FormData();
      for (const key in formData) {
        formBody.append(key, formData[key]);
      }

      // 2. Bump progress while fetching
      setTimeout(() => setProgress(70), 500);

      await fetch(scriptURL, { method: 'POST', body: formBody });
      
      // 3. Complete the bar
      setProgress(100);

      // 4. Show Success Message after a short delay so they see the bar hit 100%
      setTimeout(() => {
        setStatus('success');
        // Clear form data for next time
        setFormData({
          First_Name: '', Last_Name: '', Address: '', Email: '', Mobile_1: '', Mobile_2: '', Industry: ''
        });
      }, 600);

    } catch (error) {
      console.error('Error!', error.message);
      setStatus('error');
    }
  };

  return (
    <section id="book-now" /* <--- ADD THIS ID HERE */
      className="py-5"
      style={{ 
        background: 'linear-gradient(135deg, #0f3443 0%, #34e89e 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* LEFT SIDE TEXT */}
          <div className="col-lg-6 text-white mb-5 mb-lg-0 text-center text-lg-start">
            <div className="mb-3">
              <i className="bi bi-house-heart-fill display-3 text-warning"></i>
            </div>
            <h2 className="display-5 fw-bold mb-3">
              Siguraduhin ang Ginhawa at Kinabukasan ng Iyong Pamilya!
            </h2>
            <p className="lead mb-4 opacity-90 fw-light">
              Huwag magpatalo sa taas-kuryente! Dito sa <strong>Go Green Solar</strong>, we design solutions na de-kalidad at sulit ang investment mo.
            </p>
            <div className="d-none d-lg-block">
              <p className="h5 mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i> Free Site Assessment</p>
              <p className="h5 mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i> Custom Engineering Design</p>
              <p className="h5"><i className="bi bi-check-circle-fill text-warning me-2"></i> Local After-Sales Support</p>
            </div>
          </div>

          {/* RIGHT SIDE: The Card */}
          <div className="col-lg-5">
            <div 
              className="card border-0 shadow-lg p-4" 
              style={{ borderRadius: '15px', background: 'rgba(255, 255, 255, 0.95)', minHeight: '500px' }}
            >
              
              {/* === VIEW 1: THE FORM (Shows only when idle or error) === */}
              {(status === 'idle' || status === 'error') && (
                <>
                  <h3 className="fw-bold text-success mb-3 text-center">Get Your Free Quote</h3>
                  
                  <form onSubmit={handleSubmit}>
                    
                    {/* Names */}
                    <div className="row g-2 mb-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-muted">First Name <span className="text-danger">*</span></label>
                        <input type="text" name="First_Name" value={formData.First_Name} onChange={handleChange} className="form-control" placeholder="Juan" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-muted">Last Name <span className="text-danger">*</span></label>
                        <input type="text" name="Last_Name" value={formData.Last_Name} onChange={handleChange} className="form-control" placeholder="Dela Cruz" required />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                      <label className="form-label small fw-bold text-muted">Full Address <span className="text-danger">*</span></label>
                      <input type="text" name="Address" value={formData.Address} onChange={handleChange} className="form-control" placeholder="Barangay, City, Province" required />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label small fw-bold text-muted">Email Address (Optional)</label>
                      <input type="email" name="Email" value={formData.Email} onChange={handleChange} className="form-control" placeholder="name@email.com" />
                      <div className="form-text text-muted" style={{ fontSize: '0.8rem' }}><i className="bi bi-info-circle me-1"></i>Automated confirmation sent if provided.</div>
                    </div>

                    {/* Mobile 1 */}
                    <div className="mb-3">
                      <label className="form-label small fw-bold text-muted">Mobile Number <span className="text-danger">*</span></label>
                      <input type="tel" name="Mobile_1" value={formData.Mobile_1} onChange={handleChange} className="form-control" placeholder="09XX-XXX-XXXX" required />
                    </div>
                    
                    {/* Mobile 2 */}
                    <div className="mb-3">
                      <label className="form-label small fw-bold text-muted">Alternate Mobile (Optional)</label>
                      <input type="tel" name="Mobile_2" value={formData.Mobile_2} onChange={handleChange} className="form-control" placeholder="09XX-XXX-XXXX" />
                    </div>

                    {/* Industry */}
                    <div className="mb-4">
                      <label className="form-label small fw-bold text-muted">Industry <span className="text-danger">*</span></label>
                      <select name="Industry" value={formData.Industry} onChange={handleChange} className="form-select" required>
                        <option value="" disabled>Select an option...</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Agricultural">Agricultural</option>
                      </select>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-warning btn-lg fw-bold text-uppercase shadow-sm hover-scale">Book Now</button>
                    </div>
                    
                    {status === 'error' && (
                      <div className="mt-3 text-center small fw-bold text-danger">
                        Connection Error. Please call us directly.
                      </div>
                    )}
                  </form>
                </>
              )}

              {/* === VIEW 2: SENDING (Progress Bar) === */}
              {status === 'sending' && (
                <div className="d-flex flex-column justify-content-center align-items-center h-100 py-5">
                  <h4 className="text-muted mb-4">Securing your slot...</h4>
                  <div className="progress w-75 shadow-sm" style={{ height: '25px' }}>
                    <div 
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                      role="progressbar" 
                      style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
                    ></div>
                  </div>
                  <p className="mt-3 text-muted small">{progress}% Completed</p>
                </div>
              )}

              {/* === VIEW 3: SUCCESS (Animation) === */}
              {status === 'success' && (
                <div className="d-flex flex-column justify-content-center align-items-center h-100 py-5 text-center">
                  
                  {/* Big Animated Icon */}
                  <div className="mb-4">
                    <i className="bi bi-check-circle-fill text-success display-1 success-bounce"></i>
                  </div>
                  
                  <h3 className="fw-bold text-success">Thank You!</h3>
                  <p className="lead text-dark mb-4">We have received your details.</p>
                  
                  <div className="bg-light p-3 rounded mb-4 w-100">
                    <p className="mb-1 text-muted small">Our team will call you shortly at:</p>
                    <p className="fw-bold text-dark mb-0">{formData.Mobile_1}</p>
                  </div>

                  <button 
                    onClick={() => setStatus('idle')} 
                    className="btn btn-outline-success btn-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
      
      {/* CSS for Bounce Animation */}
      <style>{`
        .hover-scale { transition: transform 0.2s ease; }
        .hover-scale:hover { transform: scale(1.02); }
        
        .success-bounce {
          animation: bounce 1s infinite alternate;
        }
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;