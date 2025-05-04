import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import logo from "../assets/logo4.png";
const Footer = () => {
  return (
    <footer className="site-footer border-bottom">
      <div className="footer-container">
        <img
          src={logo}
          alt="Company Logo"
          className="footer-logo"
        /><span className="rede">
            Servy&nbsp;  
            </span>
        <p className="footer-address fs-4">
        <ImLocation2 /> No. 10, First cross street
          <br />
          Kagithapattarai, Vellore - 632009
        </p>

        <div className="footer-contact fs-6">
          <a href="tel:+918825965775" className="contact-link">
            <FaPhoneAlt /> +91 88259 65775
          </a>
          <div className="divider">|</div>
          <a href="tel:+919597366741" className="contact-link">
            <FaPhoneAlt /> +91 95973 66741
          </a>
          <div className="divider">|</div>
          <a
            href="mailto:leastactioncompany@gmail.com"
            className="contact-link"
          >
            <FaEnvelope /> Servy@gmail.com
          </a>
        </div>

        <p className="follow-us">Follow Us</p>
        <div className="social-icons">
          <a href="#" className="icon-border" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="icon-border" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="icon-border" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" className="icon-border" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        <p className="copyright">COPYRIGHT ©{new Date().getFullYear()} Servy </p>
      </div>
    </footer>
  );
};

export default Footer;
