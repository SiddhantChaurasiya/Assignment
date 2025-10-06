import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import phoneIcon from '../../assets/phone.png';
import mapIcon from '../../assets/map.png';
import emailIcon from '../../assets/email.png';
import globeIcon from '../../assets/globe.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column footer-logo-section">
          <img src={logo} alt="IdealRealtyWA Logo" className="footer-logo" />
          <p className="tagline">Together, We Can,</p>
        </div>

        <div className="footer-column footer-links">
          <h3>Quick View</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <a href="tel:0450613210" className="contact-link">0450613210</a>
            </li>
            <li>
              <img src={mapIcon} alt="Location" className="contact-icon" />
              <span className="contact-link">Willetton</span>
            </li>
            <li>
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <a href="mailto:ali@idealrealtywa.com.au" className="contact-link">ali@idealrealtywa.com.au</a>
            </li>
            <li>
              <img src={globeIcon} alt="Website" className="contact-icon" />
              <a
                href="https://www.idealrealtywa.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                www.idealrealtywa.com.au
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
