import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import locationData from '../all.json'; 

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [searchPhone, setSearchPhone] = useState('');
  const [statusFilter, setStatusFilter] = useState('All'); // 1. New state for filtering
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  
  const [editForm, setEditForm] = useState({
    first_name: '',
    last_name: '',
    mobile_no: '',
    email: '',
    province: '',
    city_municipality: '',
    barangay: '',
    house_details: '',
    date: '',
    time: '',
    status: '' 
  });

  const isSuperAdmin = sessionStorage.getItem('isSuperAdmin') === 'true';

  const BICOL_CODE = "0500000000";
  const bicolProvinces = locationData?.provinces?.filter(p => p.region_code === BICOL_CODE) || [];
  
  const availableCities = locationData?.cities?.filter(c => {
    const selectedProv = bicolProvinces.find(p => p.name === editForm.province);
    return selectedProv && c.province_code === selectedProv.code;
  }) || [];

  const availableBarangays = locationData?.barangays?.filter(b => {
    const selectedCity = availableCities.find(c => c.name === editForm.city_municipality);
    return selectedCity && b.city_code === selectedCity.code;
  }) || [];

  const fetchAllBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('booking_schedule')
      .select(`
        booking_id,
        booked_schedule,
        status,
        prospect_info (
          prospect_id,
          first_name,
          last_name,
          mobile_no,
          email,
          prospect_addresses (
            address_id,
            province,
            city_municipality,
            barangay,
            house_details
          )
        )
      `)
      .order('booked_schedule', { ascending: true });

    if (error) console.error("Fetch Error:", error.message);
    else setBookings(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  const handleEditClick = (b) => {
    setEditingId(b.booking_id);
    const info = b.prospect_info;
    const addr = info.prospect_addresses?.[0] || {};
    const dateObj = new Date(b.booked_schedule);
    
    setEditForm({
      first_name: info.first_name,
      last_name: info.last_name,
      mobile_no: info.mobile_no,
      email: info.email,
      province: addr.province || '',
      city_municipality: addr.city_municipality || '',
      barangay: addr.barangay || '',
      house_details: addr.house_details || '',
      date: dateObj.toLocaleDateString('en-CA', { timeZone: 'Asia/Manila' }),
      time: dateObj.toLocaleTimeString('en-GB', { timeZone: 'Asia/Manila', hour12: false }),
      status: b.status || 'Pending' 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
    if (name === 'province') setEditForm(prev => ({ ...prev, city_municipality: '', barangay: '' }));
    if (name === 'city_municipality') setEditForm(prev => ({ ...prev, barangay: '' }));
  };

  const isSlotTaken = (date, time) => {
    if (!date || !time) return false;
    return bookings.some(b => {
      if (b.booking_id === editingId || b.status === 'Cancelled') return false;
      const bDateObj = new Date(b.booked_schedule);
      const bDate = bDateObj.toLocaleDateString('en-CA', { timeZone: 'Asia/Manila' });
      const bTime = bDateObj.toLocaleTimeString('en-GB', { timeZone: 'Asia/Manila', hour12: false });
      return bDate === date && bTime === time;
    });
  };

  const handleSaveAll = async (booking) => {
    const newTimestamp = `${editForm.date}T${editForm.time}+08:00`;
    setLoading(true);

    try {
      if (booking.booked_schedule !== newTimestamp) {
        await supabase.from('reschedule_logs').insert([{
          booking_id: booking.booking_id,
          old_schedule: booking.booked_schedule,
          new_schedule: newTimestamp
        }]);
      }

      const { error: infoErr } = await supabase
        .from('prospect_info')
        .update({
          first_name: editForm.first_name,
          last_name: editForm.last_name,
          mobile_no: editForm.mobile_no,
          email: editForm.email
        })
        .eq('prospect_id', booking.prospect_info.prospect_id);
      if (infoErr) throw infoErr;

      const { error: addrErr } = await supabase
        .from('prospect_addresses')
        .update({
          province: editForm.province,
          city_municipality: editForm.city_municipality,
          barangay: editForm.barangay,
          house_details: editForm.house_details
        })
        .eq('prospect_id', booking.prospect_info.prospect_id);
      if (addrErr) throw addrErr;

      const { error: bookErr } = await supabase
        .from('booking_schedule')
        .update({ 
          booked_schedule: newTimestamp,
          status: editForm.status 
        })
        .eq('booking_id', booking.booking_id);
      if (bookErr) throw bookErr;

      alert("Client records and inspection status updated!");
      setEditingId(null);
      fetchAllBookings();
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };

  // 2. Updated filtering logic to include both Phone and Status
  const filteredBookings = bookings.filter(b => {
    const matchesPhone = b.prospect_info.mobile_no.includes(searchPhone);
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
    return matchesPhone && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch(status) {
      case 'Pending': return 'bg-info text-dark';
      case 'In Ocular': return 'bg-warning text-dark';
      case 'Completed': return 'bg-success text-white';
      case 'Cancelled': return 'bg-danger text-white';
      default: return 'bg-secondary';
    }
  };

  return (
    <section className="bg-about-grid min-vh-100 text-white py-5">
      <div className="container-fluid px-4 py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3">
          <div>
            <h1 className="h2 fw-bold text-uppercase letter-spacing-1 mb-0">Admin Panel</h1>
            <p className="text-warning small mb-0">Operational Lifecycle Tracking</p>
          </div>
          <div className="d-flex gap-2 align-items-center">
            {isSuperAdmin && (
              <button className="btn btn-outline-warning rounded-pill px-4 btn-sm fw-bold" onClick={() => window.location.href = '/?page=admin-register'}>
                <i className="bi bi-person-plus-fill me-2"></i> Register Admin
              </button>
            )}
            <button className="btn btn-danger rounded-pill px-4 btn-sm fw-bold" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2"></i> Logout
            </button>
          </div>
        </div>

        {/* 3. Search and Filter Row */}
        <div className="row mb-4 g-3">
          <div className="col-md-3">
            <div className="input-group border border-white border-opacity-25 rounded-pill overflow-hidden shadow-sm">
              <span className="input-group-text bg-dark border-0 text-warning"><i className="bi bi-search"></i></span>
              <input type="text" placeholder="Search Phone..." className="form-control bg-dark border-0 text-white" onChange={(e) => setSearchPhone(e.target.value)} />
            </div>
          </div>
          <div className="col-md-2">
            <select 
              className="form-select bg-dark text-white border-white border-opacity-25 rounded-pill px-3 shadow-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="In Ocular">In Ocular</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="table-responsive bg-dark bg-opacity-25 rounded-4 border border-white border-opacity-10 p-3 shadow-lg">
          <table className="table table-dark table-hover mb-0 align-middle">
            <thead className="text-warning small text-uppercase">
              <tr>
                <th style={{ width: '15%' }}>Client</th>
                <th style={{ width: '20%' }}>Address</th>
                <th style={{ width: '20%' }}>Schedule</th>
                <th style={{ width: '15%' }}>Inspection Status</th>
                <th style={{ width: '15%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((b) => {
                const addr = b.prospect_info.prospect_addresses?.[0] || {};
                const isEditing = editingId === b.booking_id;

                return (
                  <tr key={b.booking_id} className={isEditing ? "table-active" : ""}>
                    <td>
                      {isEditing ? (
                        <div className="d-flex flex-column gap-2">
                          <input type="text" name="first_name" value={editForm.first_name} className="form-control form-control-sm bg-transparent text-white" onChange={handleInputChange} />
                          <input type="text" name="last_name" value={editForm.last_name} className="form-control form-control-sm bg-transparent text-white" onChange={handleInputChange} />
                          <input type="tel" name="mobile_no" value={editForm.mobile_no} className="form-control form-control-sm bg-transparent text-white" onChange={handleInputChange} />
                        </div>
                      ) : (
                        <div>
                          <div className="fw-bold">{b.prospect_info.first_name} {b.prospect_info.last_name}</div>
                          <div className="small text-white-50">{b.prospect_info.mobile_no}</div>
                        </div>
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <div className="d-flex flex-column gap-2">
                          <select name="province" value={editForm.province} className="form-select form-select-sm bg-transparent text-white" onChange={handleInputChange}>
                            <option value="" className="text-dark">Province</option>
                            {bicolProvinces.map(p => <option key={p.id} value={p.name} className="text-dark">{p.name}</option>)}
                          </select>
                          <select name="city_municipality" value={editForm.city_municipality} className="form-select form-select-sm bg-transparent text-white" onChange={handleInputChange} disabled={!editForm.province}>
                            {availableCities.map(c => <option key={c.id} value={c.name} className="text-dark">{c.name}</option>)}
                          </select>
                          <input type="text" name="house_details" value={editForm.house_details} className="form-control form-control-sm bg-transparent text-white" onChange={handleInputChange} />
                        </div>
                      ) : (
                        <div className="small">
                          <div>{addr.house_details}</div>
                          <div>{addr.barangay}, {addr.city_municipality}</div>
                        </div>
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <div className="d-flex flex-column gap-2">
                          <input type="date" name="date" value={editForm.date} className="form-control form-control-sm bg-transparent text-white" onChange={handleInputChange} />
                          <select name="time" value={editForm.time} className="form-select form-select-sm bg-transparent text-white" onChange={handleInputChange}>
                            <option value="08:00:00" className="text-dark">08:00 AM</option>
                            <option value="09:00:00" className="text-dark">09:00 AM</option>
                            <option value="11:00:00" className="text-dark">11:00 AM</option>
                            <option value="14:00:00" className="text-dark">02:00 PM</option>
                            <option value="16:00:00" className="text-dark">04:00 PM</option>
                          </select>
                        </div>
                      ) : (
                        <div className="font-monospace small">
                          {new Date(b.booked_schedule).toLocaleString('en-PH', { timeZone: 'Asia/Manila', dateStyle: 'medium', timeStyle: 'short' })}
                        </div>
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <select name="status" value={editForm.status} className="form-select form-select-sm bg-warning text-dark fw-bold" onChange={handleInputChange}>
                          <option value="Pending">Pending</option>
                          <option value="In Ocular">In Ocular</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      ) : (
                        <span className={`badge border border-white border-opacity-10 px-3 py-2 ${getStatusClass(b.status)}`}>
                          {b.status}
                        </span>
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <div className="btn-group w-100 shadow-sm">
                          <button className="btn btn-sm btn-success fw-bold" onClick={() => handleSaveAll(b)} disabled={loading}>SAVE</button>
                          <button className="btn btn-sm btn-outline-light" onClick={() => setEditingId(null)}>CANCEL</button>
                        </div>
                      ) : (
                        <button className="btn btn-sm btn-warning rounded-pill px-3 shadow-sm text-dark fw-bold w-100" onClick={() => handleEditClick(b)}>
                          <i className="bi bi-pencil-square me-1"></i> MANAGE
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredBookings.length === 0 && !loading && (
            <div className="text-center py-5 text-white-50">
              <i className="bi bi-emoji-neutral display-4"></i>
              <p className="mt-3">No matching records found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Admin;