import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Own the Top Moments in MLB History</h1>
        <p className="hero-subtitle">Collect officially licensed MLB All Day Moments. Own your piece of the game.</p>
        <div className="hero-buttons">
          <button className="primary-button">Discover Moments</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
