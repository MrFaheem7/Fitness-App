import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { companyLinks, resourceLinks } from "../../constants";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="company-info">
           <img src="/src/assets/footer-logo.svg" alt="FitConnect" />
          <p>
            FitConnect provides personalized workout plans, real-time progress
            tracking, and community support to help users achieve their health
            and wellness goals.
          </p>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
        <div className="footer-links">
          <div className="links-column">
            <h3>Company</h3>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          <div className="links-column">
            <h3>Resources</h3>
            <ul>
              {resourceLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
