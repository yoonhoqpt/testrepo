import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How MLB All Day Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Create an Account</h3>
          <p>Sign up for MLB All Day and create your profile.</p>
        </div>
        <div className="step">
          <h3>2. Collect Moments</h3>
          <p>Purchase packs or individual MLB Moments on the marketplace.</p>
        </div>
        <div className="step">
          <h3>3. Showcase Your Collection</h3>
          <p>Display your favorite Moments and connect with other collectors.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
