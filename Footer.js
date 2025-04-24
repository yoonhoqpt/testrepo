import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MLB All Day. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
