import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How MLB All Day Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Discover</h3>
          <p>Explore the marketplace and discover officially licensed MLB Moments.</p>
        </div>
        <div className="step">
          <h3>2. Collect</h3>
          <p>Purchase and collect your favorite Moments to build your ultimate collection.</p>
        </div>
        <div className="step">
          <h3>3. Showcase</h3>
          <p>Showcase your collection and connect with fellow MLB fans.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
