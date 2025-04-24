import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MLB All Day. All rights reserved.</p>
      <nav className="footer-nav">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </nav>
    </footer>
  );
}

export default Footer;
