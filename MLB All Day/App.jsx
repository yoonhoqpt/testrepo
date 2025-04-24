import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import GetStartedSection from './GetStartedSection';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}

export default App;
