import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminRegister = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const validatePassword = (pw) => {
    // Regex for exactly 8 alphanumeric characters
    return /^[a-zA-Z0-9]{8}$/.test(pw);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      alert("Error: Password must be exactly 8 alphanumeric characters.");
      return;
    }

    setLoading(true);
    // New accounts are standard admins (is_super_admin defaults to FALSE)
    const { error } = await supabase
      .from('admin_accounts')
      .insert([formData]);

    if (error) {
      alert("Registration failed: " + error.message);
    } else {
      alert("Admin account created successfully! You can now view it in the database.");
      window.location.href = '/?page=admin';
    }
    setLoading(false);
  };

  return (
    <section className="bg-about-grid min-vh-100 text-white d-flex align-items-center justify-content-center">
      <div className="col-md-4 p-5 bg-dark bg-opacity-25 rounded-4 border border-white border-opacity-10 shadow-lg">
        <div className="text-center mb-4">
          <span className="badge bg-warning text-dark mb-2">Super Admin Only</span>
          <h2 className="fw-bold text-uppercase">Register Admin</h2>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label small fw-bold">New Username</label>
            <input type="text" required className="form-control bg-transparent text-white border-white border-opacity-25" 
              onChange={(e) => setFormData({...formData, username: e.target.value})} />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold">Temporary Password (8 Alphanumeric)</label>
            <input type="password" required className="form-control bg-transparent text-white border-white border-opacity-25" 
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>
          <button disabled={loading} className="btn btn-warning w-100 rounded-pill fw-bold py-2">
            {loading ? 'Creating Account...' : 'Register New Admin'}
          </button>
          <button type="button" onClick={() => window.location.href = '/?page=admin'} className="btn btn-link text-white-50 w-100 mt-3 text-decoration-none">
             Cancel and Return
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminRegister;