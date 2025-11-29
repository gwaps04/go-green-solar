import React from 'react';
import './index.css'; 
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection'; // <--- Import VideoSection

function App() {
  return (
    <div>
      <Navigation />
      
      <Hero />
      
      <About />
      
      {/* The New Video Section */}
      <VideoSection />
      
    </div>
  );
}

export default App;