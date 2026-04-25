import React, { useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="hero-wrapper">
      {/* MUTE TOGGLE */}
      <button 
        className="mute-btn" 
        onClick={toggleMute} 
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
      >
        {isMuted ? '🔇 Unmute' : '🔊 Mute'}
      </button>

      {/* FULL SCREEN VIDEO */}
      <div className="video-background">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
        >
          <source src="/videos/Hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ACTION BUTTON */}
      <div className="hero-overlay container-fluid">
        <a 
          href="/#about" 
          className="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow-lg mb-4"
          style={{ color: '#0f3443' }}
        >
          Learn More about Go Green Solar
        </a>
      </div>
    </section>
  );
};

export default Hero;