import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile'; 
import { supabase } from '../supabaseClient'; 
// This path assumes all.json is inside your 'src' folder
import locationData from '../all.json'; 

const Booking = () => {
  const [step, setStep] = useState(1); 
  const [submitted, setSubmitted] = useState(false); 
  const [justThanked, setJustThanked] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    projectType: '',
    goal: '',
    usage: '',
    readiness: '',
    priority: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    date: '',
    time: '',
    province: '',
    city: '',
    barangay: '',
    houseDetails: ''
  });

  // --- SAFETY CHECK & FILTERING ---
  const provinces = locationData?.provinces || [];
  const cities = locationData?.cities || [];
  const barangays = locationData?.barangays || [];

  const BICOL_CODE = "0500000000";
  const bicolProvinces = provinces.filter(p => p.region_code === BICOL_CODE);
  
  const availableCities = cities.filter(c => {
    const selectedProv = bicolProvinces.find(p => p.name === formData.province);
    return selectedProv && c.province_code === selectedProv.code;
  });

  const availableBarangays = barangays.filter(b => {
    const selectedCity = availableCities.find(c => c.name === formData.city);
    return selectedCity && b.city_code === selectedCity.code;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'province') setFormData(prev => ({ ...prev, city: '', barangay: '' }));
    if (name === 'city') setFormData(prev => ({ ...prev, barangay: '' }));
  };

  const handleProceedToBooking = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSimpleThankYou = () => {
    setJustThanked(true);
  };

  const isSunday = (dateString) => {
    const day = new Date(dateString).getDay();
    return day === 0; 
  };

  const isSlotInPast = (date, timeSlot) => {
    if (!date || !timeSlot) return false;
    const now = new Date();
    const selectedSlot = new Date(`${date}T${timeSlot}+08:00`);
    return selectedSlot < now;
  };

  const handleFinalBookingSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the human verification check.");
      return;
    }
    
    if (isSunday(formData.date)) {
      alert("Ocular inspections are only available Monday to Saturday.");
      return;
    }

    if (isSlotInPast(formData.date, formData.time)) {
      alert("This time slot has already passed.");
      return;
    }

    setLoading(true);

    try {
      const scheduledDateTime = `${formData.date}T${formData.time}+08:00`;

      // 1. Verify Slot Availability
      const { data: existingBooking, error: checkError } = await supabase
        .from('booking_schedule')
        .select('booking_id')
        .eq('booked_schedule', scheduledDateTime)
        .neq('status', 'cancelled') 
        .maybeSingle();

      if (checkError) throw checkError;

      if (existingBooking) {
        alert("SORRY: This time slot was just taken. Please select another.");
        setLoading(false);
        return;
      }

      // 2. Insert Prospect Primary Info
      const { data: prospect, error: pError } = await supabase
        .from('prospect_info')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          mobile_no: formData.mobile,
          email: formData.email
        }])
        .select()
        .single();

      if (pError) throw pError;

      // 3. Insert Pre-Qualification Survey
      const { error: qError } = await supabase
        .from('pre_qualification')
        .insert([{
          prospect_id: prospect.prospect_id,
          q1_project_type: formData.projectType,
          q2_primary_goal: formData.goal,
          q3_monthly_bill: formData.usage,
          q4_property_ready: formData.readiness,
          q5_investment_priority: formData.priority
        }]);

      if (qError) throw qError;

      // 4. Insert Installation Address details
      const { error: addrError } = await supabase
        .from('prospect_addresses')
        .insert([{
          prospect_id: prospect.prospect_id,
          province: formData.province,
          city_municipality: formData.city,
          barangay: formData.barangay,
          house_details: formData.houseDetails
        }]);

      if (addrError) throw addrError;

      // 5. Finalize the Booking Schedule
      const { error: bError } = await supabase
        .from('booking_schedule')
        .insert([{
          prospect_id: prospect.prospect_id,
          booked_schedule: scheduledDateTime,
          status: 'pending'
        }]);

      if (bError) throw bError;

      setSubmitted(true);
    } catch (error) {
      console.error("Database Error:", error.message);
      alert("Database error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (justThanked) {
    return (
      <div className="bg-about-grid min-vh-100 text-white d-flex align-items-center justify-content-center">
        <div className="text-center p-5 bg-dark bg-opacity-25 rounded-4 border border-white border-opacity-10 shadow-lg mx-3">
          <h2 className="display-4 fw-bold text-success mb-3">Thank You!</h2>
          <p className="lead">We appreciate you sharing your energy goals with Go Green Solar.</p>
          <button onClick={() => window.close()} className="btn btn-outline-light rounded-pill px-4 mt-3">Close Tab</button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-about-grid min-vh-100 text-white d-flex align-items-center justify-content-center">
        <div className="text-center p-5 bg-dark bg-opacity-25 rounded-4 border border-white border-opacity-10 shadow-lg mx-3">
          <h2 className="display-4 fw-bold text-warning mb-3">Booking Confirmed!</h2>
          <p className="lead">Your details, address, and assessment have been securely saved.</p>
          <button onClick={() => window.close()} className="btn btn-outline-light rounded-pill px-4 mt-3">Close Tab</button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-about-grid min-vh-100 text-white py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            
            {step === 1 ? (
              <div className="animate-fade-in">
                <div className="text-center mb-5">
                  <h1 className="display-6 fw-bold text-uppercase letter-spacing-1">We need more details to proceed with booking your Free Site Visit.</h1>
                  <div className="mx-auto mt-2 mb-3" style={{ width: '60px', height: '4px', backgroundColor: '#ffc107' }}></div>
                  <p className="text-white-50">Step 1: Tell us about your energy needs</p>
                </div>

                <form onSubmit={handleProceedToBooking} className="bg-dark bg-opacity-25 p-4 p-md-5 rounded-4 border border-white border-opacity-10 shadow-lg">
                  {/* Q1: Project Type */}
                  <div className="mb-5">
                    <label className="h5 fw-bold mb-3 text-warning">1. Project Type</label>
                    <div className="d-flex flex-column gap-2">
                      {['New Installation', 'Upgrade', 'Repair'].map((opt) => (
                        <label key={opt} className="btn btn-outline-light text-start p-3 border-opacity-25 d-flex align-items-center">
                          <input type="radio" name="projectType" value={opt} onChange={handleInputChange} className="me-3" required /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Q2: Primary Goal */}
                  <div className="mb-5">
                    <label className="h5 fw-bold mb-3 text-warning">2. Your Primary Goal</label>
                    <div className="d-flex flex-column gap-2">
                      {['Eliminating monthly bills', 'Protecting my home from brownouts', 'Reducing my carbon footprint'].map((opt) => (
                        <label key={opt} className="btn btn-outline-light text-start p-3 border-opacity-25 d-flex align-items-center">
                          <input type="radio" name="goal" value={opt} onChange={handleInputChange} className="me-3" required /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Q3: Monthly Bill */}
                  <div className="mb-5">
                    <label className="h5 fw-bold mb-3 text-warning">3. Average Monthly Bill</label>
                    <div className="d-flex flex-column gap-2">
                      {['₱3,000–₱5,000', '₱5,001–₱10,000', '₱10,000 and Up'].map((opt) => (
                        <label key={opt} className="btn btn-outline-light text-start p-3 border-opacity-25 d-flex align-items-center">
                          <input type="radio" name="usage" value={opt} onChange={handleInputChange} className="me-3" required /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Q4: Ownership/Readiness */}
                  <div className="mb-5">
                    <label className="h5 fw-bold mb-3 text-warning">4. Property Ownership & Roof Readiness</label>
                    <div className="d-flex gap-3">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="btn btn-outline-light flex-fill text-center p-3 border-opacity-25">
                          <input type="radio" name="readiness" value={opt} onChange={handleInputChange} className="me-2" required /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Q5: Priority */}
                  <div className="mb-5">
                    <label className="h5 fw-bold mb-3 text-warning">5. Investment Priority</label>
                    <div className="d-flex flex-column gap-2">
                      {['Fast Return of Investment', 'Long-term Independence', 'Balance of Both'].map((opt) => (
                        <label key={opt} className="btn btn-outline-light text-start p-3 border-opacity-25 d-flex align-items-center">
                          <input type="radio" name="priority" value={opt} onChange={handleInputChange} className="me-3" required /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mt-5 d-flex flex-column gap-3">
                    <button type="submit" className="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow-sm" style={{ color: '#0f3443' }}>
                      Continue to Booking
                    </button>
                    <button type="button" onClick={handleSimpleThankYou} className="btn btn-link text-white-50 text-decoration-none">
                      Just submit my answers without booking
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="text-center mb-5">
                  <h1 className="display-5 fw-bold text-uppercase text-warning">Almost there!</h1>
                  <p className="lead">Provide your installation details to confirm your ocular inspection.</p>
                </div>

                <form onSubmit={handleFinalBookingSubmit} className="bg-dark bg-opacity-25 p-4 p-md-5 rounded-4 border border-white border-opacity-10 shadow-lg">
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-uppercase">First Name</label>
                      <input type="text" name="firstName" onChange={handleInputChange} className="form-control bg-transparent text-white border-white border-opacity-25" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-uppercase">Last Name</label>
                      <input type="text" name="lastName" onChange={handleInputChange} className="form-control bg-transparent text-white border-white border-opacity-25" required />
                    </div>
                  </div>

                  <div className="mb-4 row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-uppercase">Mobile Number</label>
                      <input type="tel" name="mobile" onChange={handleInputChange} className="form-control bg-transparent text-white border-white border-opacity-25" placeholder="09XX XXX XXXX" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-uppercase">Email Address</label>
                      <input type="email" name="email" onChange={handleInputChange} className="form-control bg-transparent text-white border-white border-opacity-25" required />
                    </div>
                  </div>

                  {/* BICOL ADDRESS SECTION */}
                  <div className="mb-4">
                    <label className="form-label small fw-bold text-uppercase text-warning">Installation Address (Bicol Only)</label>
                    <div className="row g-2 mb-2">
                      <div className="col-md-4">
                        <select name="province" value={formData.province} onChange={handleInputChange} className="form-select bg-transparent text-white border-white border-opacity-25" required>
                          <option value="" className="text-dark">Province</option>
                          {bicolProvinces.map(p => <option key={p.id} value={p.name} className="text-dark">{p.name}</option>)}
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select name="city" value={formData.city} onChange={handleInputChange} className="form-select bg-transparent text-white border-white border-opacity-25" required disabled={!formData.province}>
                          <option value="" className="text-dark">City/Mun</option>
                          {availableCities.map(c => <option key={c.id} value={c.name} className="text-dark">{c.name}</option>)}
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select name="barangay" value={formData.barangay} onChange={handleInputChange} className="form-select bg-transparent text-white border-white border-opacity-25" required disabled={!formData.city}>
                          <option value="" className="text-dark">Barangay</option>
                          {availableBarangays.map(b => <option key={b.id} value={b.name} className="text-dark">{b.name}</option>)}
                        </select>
                      </div>
                    </div>
                    <input 
                      type="text" 
                      name="houseDetails" 
                      placeholder="Complete House Address (House No., Street, Subdivision)" 
                      onChange={handleInputChange} 
                      className="form-control bg-transparent text-white border-white border-opacity-25" 
                      required 
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-bold text-uppercase text-warning">Select Consultation Date & Time</label>
                    <div className="row g-2">
                      <div className="col-md-7">
                        <input type="date" name="date" min={new Date().toISOString().split('T')[0]} onChange={handleInputChange} className="form-control bg-transparent text-white border-white border-opacity-25" required />
                      </div>
                      <div className="col-md-5">
                        <select name="time" onChange={handleInputChange} className="form-select bg-transparent text-white border-white border-opacity-25" required>
                          <option value="" className="text-dark">Select Slot</option>
                          <option value="08:00:00" className="text-dark" disabled={isSlotInPast(formData.date, "08:00:00")}>08:00 AM - 09:00 AM</option>
                          <option value="09:00:00" className="text-dark" disabled={isSlotInPast(formData.date, "09:00:00")}>09:00 AM - 10:00 AM</option>
                          <option value="11:00:00" className="text-dark" disabled={isSlotInPast(formData.date, "11:00:00")}>11:00 AM - 12:00 PM</option>
                          <option value="14:00:00" className="text-dark" disabled={isSlotInPast(formData.date, "14:00:00")}>02:00 PM - 03:00 PM</option>
                          <option value="16:00:00" className="text-dark" disabled={isSlotInPast(formData.date, "16:00:00")}>04:00 PM - 05:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5 d-flex justify-content-center">
                    <Turnstile 
                      siteKey="1x00000000000000000000AA"
                      onSuccess={(token) => setCaptchaToken(token)} 
                      theme="dark"
                    />
                  </div>

                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow-sm" 
                      style={{ color: '#0f3443' }}
                      disabled={loading || !captchaToken}
                    >
                      {loading ? 'Verifying...' : 'Confirm My Booking'}
                    </button>
                    <button type="button" onClick={() => setStep(1)} className="btn btn-link text-white-50 d-block mx-auto mt-3 text-decoration-none">
                      ← Back to assessment
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;