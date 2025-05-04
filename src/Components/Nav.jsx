import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";
// import "./styal.css"
import logo from "../assets/logo1.png";

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
  ChevronDown,
  ChevronUp
} from "lucide-react";






const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // new

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
    <div className="strike-container">
        <h1 className="strike-text">
          <Link to="/" className="text-decoration-none ">

           <img src={logo} alt="" className="logo" style={{ height: '60px', width: '62px' }} />
            <span className="red">
            Servy&nbsp;  
            </span>
         
          </Link>
        </h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      {isMobile && (
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Menu Links */}
      <ul
        className={`menu-links ${
          isMobile ? (isMenuOpen ? "show" : "hide") : ""
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li
          className={`dropdown ${isMobile && isDropdownOpen ? "open" : ""}`}
          onClick={(e) => {
            if (isMobile) toggleDropdown(e);
          }}
        >
          <div className="Servicetext">
            Services <FaChevronDown className="dropdown-icon" />
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link to="/services"><ShowerHead  />&nbsp; Laundry services</Link>
            </li>
            <li>
              <Link to="/services"><Landmark />&nbsp; E-seva service</Link>
            </li>
            <li>
              <Link to="/services"><Trash2  />&nbsp; Rental services</Link>
            </li>
            <li>
              <Link to="/services"><CalendarDays  />&nbsp; Event management services</Link>
            </li>
            <li>
              <Link to="/services"> <Hammer  />&nbsp; Home repairing services</Link>
            </li>
            <li>
              <Link to="/services"><Heart  />&nbsp; Personal care services</Link>
            </li>
            <li>
              <Link to="/services"><Utensils />&nbsp; Food products </Link>
            </li>
            
            <li>
              <Link to="/services"><Stethoscope  />&nbsp; Medical services</Link>
            </li>
            <li>
              <Link to="/services"><Trash2  />&nbsp; Waste management </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/team">Team Profile</Link>
        </li>
       
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/Investors">Investors Relation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
