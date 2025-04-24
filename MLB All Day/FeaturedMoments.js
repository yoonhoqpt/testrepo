import React from 'react';
import './FeaturedMoments.css';

const momentsData = [
  {
    id: 1,
    title: 'Spectacular Catch',
    player: 'Mike Trout',
    team: 'Los Angeles Angels',
    price: '$15',
  },
  {
    id: 2,
    title: 'Grand Slam Homerun',
    player: 'Aaron Judge',
    team: 'New York Yankees',
    price: '$25',
  },
  {
    id: 3,
    title: 'No-Hitter Performance',
    player: 'Max Scherzer',
    team: 'New York Mets',
    price: '$30',
  },
];

function FeaturedMoments() {
  return (
    <section className="featured-moments">
      <h2>Featured Moments</h2>
      <div className="moments-grid">
        {momentsData.map((moment) => (
          <div key={moment.id} className="moment-card">
            <h3>{moment.title}</h3>
            <p>Player: {moment.player}</p>
            <p>Team: {moment.team}</p>
            <p>Price: {moment.price}</p>
            <button>View Moment</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedMoments;
