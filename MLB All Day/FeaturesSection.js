import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    title: 'Collect Rare Moments',
    description: 'Find and collect limited-edition MLB All Day Moments featuring the biggest stars and unforgettable plays.',
  },
  {
    title: 'Build Your Dream Collection',
    description: 'Showcase your favorite players and build a collection that reflects your passion for baseball.',
  },
  {
    title: 'Join a Vibrant Community',
    description: 'Connect with fellow MLB fans, trade Moments, and share your love for the game.',
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
