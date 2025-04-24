import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedMoments from './FeaturedMoments';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <FeaturedMoments />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
