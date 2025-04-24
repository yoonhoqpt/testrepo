import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedMoments from './FeaturedMoments';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedMoments />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
