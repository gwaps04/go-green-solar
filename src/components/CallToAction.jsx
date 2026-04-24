import React, { useState, useEffect } from 'react';

const CallToAction = () => {
  // --- COUNTDOWN LOGIC (Sync'd to Manila Midnight UTC+8) ---
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      // 1. Convert local browser time to UTC
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      
      // 2. Offset UTC to Manila Time (+8 Hours)
      const manilaNow = new Date(utc + (3600000 * 8));

      // 3. Set the target to the next Midnight in Manila
      const manilaMidnight = new Date(manilaNow);
      manilaMidnight.setHours(24, 0, 0, 0); 
      
      const diff = manilaMidnight - manilaNow;

      if (diff > 0) {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        // Instant reset if we hit the exact millisecond of midnight
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="book-now" className="py-5" style={{ background: 'linear-gradient(135deg, #0f3443 0%, #34e89e 100%)' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* LEFT SIDE: HEADING & TIMER */}
          <div className="col-lg-6 text-white mb-5 mb-lg-0 text-center text-lg-start">
            <h2 className="display-4 fw-bold mb-3">Get your Free Site Visit</h2>
            <p className="lead mb-4 opacity-90">
              Stop guessing your solar needs. Let our team assess your roof and energy profile for free.
            </p>

            {/* COUNTDOWN TIMER UI */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-4">
               <div className="text-center p-3 bg-white bg-opacity-10 rounded shadow-sm border border-white border-opacity-25" style={{ width: '80px' }}>
                 <div className="h3 mb-0 fw-bold">{timeLeft.hours}</div>
                 <small className="text-uppercase" style={{ fontSize: '0.7rem' }}>Hours</small>
               </div>
               <div className="text-center p-3 bg-white bg-opacity-10 rounded shadow-sm border border-white border-opacity-25" style={{ width: '80px' }}>
                 <div className="h3 mb-0 fw-bold">{timeLeft.minutes}</div>
                 <small className="text-uppercase" style={{ fontSize: '0.7rem' }}>Mins</small>
               </div>
               <div className="text-center p-3 bg-white bg-opacity-10 rounded shadow-sm border border-white border-opacity-25" style={{ width: '80px' }}>
                 <div className="h3 mb-0 fw-bold text-warning">{timeLeft.seconds}</div>
                 <small className="text-uppercase" style={{ fontSize: '0.7rem' }}>Secs</small>
               </div>
            </div>

            {/* BENEFITS ICONS */}
            <div className="d-none d-lg-block mt-4">
              <p className="h5 mb-3"><i className="bi bi-geo-alt-fill text-warning me-2"></i> Bicol-Wide Service</p>
              <p className="h5 mb-3"><i className="bi bi-calendar-check-fill text-warning me-2"></i> Flexible Scheduling</p>
              <p className="h5"><i className="bi bi-shield-lock-fill text-warning me-2"></i> Zero Commitment</p>
            </div>
          </div>

          {/* RIGHT SIDE: ACTION BUTTON CARD */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg p-5 text-center" style={{ borderRadius: '20px', background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="py-4">
                <i className="bi bi-house-check text-success display-1 mb-4"></i>
                <p className="text-muted mb-4">Click below to start your assessment and book your inspection slot.</p>
                <div className="d-grid">
                  <a 
                    href="/?page=booking" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-warning btn-lg fw-bold text-uppercase shadow-sm py-3 rounded-pill"
                    style={{ color: '#0f3443', fontSize: '1.2rem' }}
                  >
                    Get my Free Site Visit
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;