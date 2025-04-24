import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        MLB All Day
      </div>
      <nav className="nav">
        <a href="#">Marketplace</a>
        <a href="#">Challenges</a>
        <a href="#">Drops</a>
        <a href="#">Learn More</a>
      </nav>
      <div className="user-actions">
        <button className="connect-wallet">Connect Wallet</button>
      </div>
    </header>
  );
}

export default Header;
