import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>MLB All Day</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Drops</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">Log In</button>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
