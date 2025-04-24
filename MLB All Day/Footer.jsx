import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MLB All Day. All rights reserved.</p>
      <nav className="footer-nav">
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
