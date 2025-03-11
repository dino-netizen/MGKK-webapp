import React from 'react';
import logo from '../../assets/logo.png';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">

        <div className="footer-section">
          <div className="footer-logo-box">
            <img src={logo} alt="Company Logo" className="footer-logo" />
          </div>
          <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>


        <div className="footer-section1">
          <h4 className="footer-title">Navigation Link Title</h4>
          <ul className="footer-links">
            <li>main section</li>
            <li>sub section</li>
            <li>sub section</li>
            <li>sub section</li>
            <li>sub section</li>
          </ul>
        </div>

        <div className="footer-section2">
          <h4 className="footer-title">Navigation Link Title</h4>
          <ul className="footer-links">
            <li>main section</li>
            <li>sub section</li>
            <li>sub section</li>
            <li>sub section</li>
            <li>sub section</li>
          </ul>
        </div>


        <div className="footer-section3">
          <h4 className="footer-title">Contact Us Here</h4>
          <div className="footer-contact">
            <FaPhoneAlt className="footer-icon" />
            <span>+63 975 8423 152</span>
          </div>
          <div className="footer-contact">
            <FaEnvelope className="footer-icon" />
            <span>jnatechsolution@gmail.com</span>
          </div>
          <div className="footer-contact">
            <FaLinkedin className="footer-icon" />
            <span>linkedin.com/in/jnatechsolution/</span>
          </div>
        </div>
      </div>

     

      <div className="footer-bottom">
        <p>&copy;2024 Company Name. All rights reserved.</p>
        <div className="footer-links-inline">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Cookie Policy</span>
          <span>•</span>
          <span>Legal</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
