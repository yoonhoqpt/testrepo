import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        MLB All Day
      </div>
      <nav className="navigation">
        <a href="#">Marketplace</a>
        <a href="#">Challenges</a>
        <a href="#">How It Works</a>
        <button className="sign-up-button">Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
