import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  ShowerHead,
  Landmark,
  CalendarDays,
  Stethoscope,
  Warehouse,
  Trash2,
  Hammer,
  Heart,
  Utensils,
} from "lucide-react";
import logo from "../assets/logo1.png";
import "./Nav.css";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      {/* Logo and Brand */}
      <div className="strike-container">
        <Link to="/" className="text-decoration-none strike-text">
          <img src={logo} alt="Logo" className="logo" />
          <span className="red">Servy</span>
        </Link>
      </div>

      {/* Hamburger Icon */}
      {isMobile && (
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Menu Links */}
      <ul className={`menu-links ${isMobile ? (isMenuOpen ? "show" : "") : ""}`}>
        <li><Link to="home" smooth={true} offset={-50} duration={300}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-50} duration={300}>About Us</Link></li>
        <li><Link to="team" smooth={true} offset={-50} duration={300}>Team Profile</Link></li>

        {/* Dropdown */}
        <li
          className={`dropdown ${isMobile && isDropdownOpen ? "open" : ""}`}
          onClick={(e) => isMobile && toggleDropdown(e)}
        >
          <div className="Servicetext">
            Services <FaChevronDown className="dropdown-icon" />
          </div>
          <ul className="dropdown-menu">
            <li><Link to="services" smooth={true}><ShowerHead /> Laundry services</Link></li>
            <li><Link to="services" smooth={true}><Landmark /> E-seva service</Link></li>
            <li><Link to="services" smooth={true}><Trash2 /> Rental services</Link></li>
            <li><Link to="services" smooth={true}><CalendarDays /> Event management</Link></li>
            <li><Link to="services" smooth={true}><Hammer /> Home repairing</Link></li>
            <li><Link to="services" smooth={true}><Heart /> Personal care</Link></li>
            <li><Link to="services" smooth={true}><Utensils /> Food products</Link></li>
            <li><Link to="services" smooth={true}><Stethoscope /> Medical services</Link></li>
            <li><Link to="services" smooth={true}><Trash2 /> Waste management</Link></li>
          </ul>
        </li>

        <li><Link to="investors" smooth={true} offset={-50} duration={300}>Investors Relation</Link></li>
        <li><Link to="contact" smooth={true} offset={-50} duration={300}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
