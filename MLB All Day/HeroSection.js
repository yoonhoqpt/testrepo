import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Collect Iconic MLB Moments</h1>
        <p>Own officially licensed MLB NFTs. Discover and collect your favorite plays, players, and teams.</p>
        <button className="join-now">Join Now</button>
      </div>
      <div className="hero-image">
        {/* Placeholder for hero image */}
      </div>
    </section>
  );
}

export default HeroSection;
