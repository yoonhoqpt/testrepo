import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  const features = [
    {
      title: 'Official MLB NFTs',
      description: 'Collect officially licensed MLB NFTs featuring your favorite players and iconic moments.',
    },
    {
      title: 'Dynamic Marketplace',
      description: 'Buy, sell, and trade MLB All Day Moments with fans from around the world.',
    },
    {
      title: 'Exclusive Drops',
      description: 'Get access to exclusive NFT drops featuring limited-edition Moments.',
    },
  ];

  return (
    <section className="features-section">
      <h2>Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
