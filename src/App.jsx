import React from 'react';
import './index.css'; 
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages'; 
import Services from './components/Services';
import RoofGallery from './components/RoofGallery';
import CustomerGallery from './components/CustomerGallery'; // NEW IMPORT
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs'; 
import CallToAction from './components/CallToAction'; 
import Footer from './components/Footer';
import Booking from './components/Booking';
import Admin from './components/Admin';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const currentPage = urlParams.get('page');

  const isAuthenticated = sessionStorage.getItem('isAdminLoggedIn') === 'true';
  const isSuperAdmin = sessionStorage.getItem('isSuperAdmin') === 'true';

  // ROUTING LOGIC
  if (currentPage === 'booking') {
    return <div className="App"><Booking /><Footer /></div>;
  }
  if (currentPage === 'admin-login') {
    return <div className="App"><AdminLogin /><Footer /></div>;
  }
  if (currentPage === 'admin-register') {
    if (!isAuthenticated || !isSuperAdmin) {
      window.location.href = '/?page=admin-login';
      return null;
    }
    return <div className="App"><AdminRegister /><Footer /></div>;
  }
  if (currentPage === 'admin') {
    if (!isAuthenticated) {
      window.location.href = '/?page=admin-login';
      return null;
    }
    return <div className="App"><Admin /><Footer /></div>;
  }

  // Standard Landing Page
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Packages />
      <Services />
      <RoofGallery /> 
      {/* PLACED BELOW ROOF GALLERY */}
      <CustomerGallery /> 
      <Brands />
      <Testimonials />
      <FAQs />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;