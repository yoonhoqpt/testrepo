import React from 'react';
import './FeaturedMoments.css';

function FeaturedMoments() {
  return (
    <section className="featured-moments">
      <h2>Featured MLB All Day Moments</h2>
      <div className="moments-grid">
        <div className="moment-card">
          <h3>Moment Title 1</h3>
          <p>Description of the MLB Moment.</p>
          <button>View Moment</button>
        </div>
        <div className="moment-card">
          <h3>Moment Title 2</h3>
          <p>Description of the MLB Moment.</p>
          <button>View Moment</button>
        </div>
        <div className="moment-card">
          <h3>Moment Title 3</h3>
          <p>Description of the MLB Moment.</p>
          <button>View Moment</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMoments;
