import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        MLB All Day
      </div>
      <nav className="header-nav">
        <a href="#">Marketplace</a>
        <a href="#">Set Game</a>
        <a href="#">Challenges</a>
        <a href="#">About</a>
        <button className="header-button">Sign In</button>
      </nav>
    </header>
  );
}

export default Header;
