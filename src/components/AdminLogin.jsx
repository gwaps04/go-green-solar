import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fetch account details including the Super Admin flag
    const { data, error } = await supabase
      .from('admin_accounts')
      .select('username, password, is_super_admin')
      .eq('username', formData.username)
      .eq('password', formData.password)
      .maybeSingle();

    if (error || !data) {
      alert("Login failed: Invalid username or password.");
    } else {
      // Store both authentication status and Super Admin status
      sessionStorage.setItem('isAdminLoggedIn', 'true');
      sessionStorage.setItem('isSuperAdmin', data.is_super_admin.toString());
      sessionStorage.setItem('adminUser', data.username);
      
      // Redirect to the Admin Panel
      window.location.href = '/?page=admin';
    }
    setLoading(false);
  };

  return (
    <section className="bg-about-grid min-vh-100 text-white d-flex align-items-center justify-content-center">
      <div className="col-md-4 p-5 bg-dark bg-opacity-25 rounded-4 border border-white border-opacity-10 shadow-lg">
        <h2 className="text-center fw-bold text-uppercase mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label small fw-bold">Username</label>
            <input type="text" required className="form-control bg-transparent text-white border-white border-opacity-25" 
              onChange={(e) => setFormData({...formData, username: e.target.value})} />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold">Password</label>
            <input type="password" required className="form-control bg-transparent text-white border-white border-opacity-25" 
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>
          <button disabled={loading} className="btn btn-warning w-100 rounded-pill fw-bold py-2">
            {loading ? 'Authenticating...' : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;