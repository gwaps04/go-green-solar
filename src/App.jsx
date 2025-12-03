import React from 'react';
import './index.css'; 
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Brands from './components/Brands';
import SolarEstimator from './components/SolarEstimator'; 
import Gallery from './components/Gallery'; 
import FAQs from './components/FAQs'; 
import CallToAction from './components/CallToAction'; 
import Footer from './components/Footer'; // 1. Import Footer

function App() {
  return (
    <div>
      <Navigation />
      
      <Hero />
      
      <About />
      
      <VideoSection />
      
      <Brands />
      
      <SolarEstimator />

      <Gallery /> 

      <FAQs />

      <CallToAction />
      
      {/* 2. Render Footer at the very bottom */}
      <Footer />
      
    </div>
  );
}

export default App;