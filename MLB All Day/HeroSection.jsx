import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Own the Moment</h1>
        <p>Collect officially licensed MLB NFTs. Build your dream collection and showcase your fandom.</p>
        <button className="explore-button">Explore Marketplace</button>
      </div>
      <div className="hero-image">
        {/* Placeholder for hero image */}
      </div>
    </section>
  );
}

export default HeroSection;
