Service-Based Portfolio (For Clients)

1. Introduction/About Us
   Who you are (your team, your vision)

What services you offer (e.g., Web Development, Mobile App Development, UI/UX, DevOps,Cloud resources)

Why choose your team (experienced developers, innovative mindset, agile process)

2. Service Offerings (Detailed Sections)
   For each service (e.g., Web, Mobile, DevOps):

What problems you solve

Tools & technologies you use

Sample process flow (how a typical project would go)

3. Sample Projects / Conceptual Work (Optional but Powerful)
   Since you don’t have real clients:

Create dummy case studies or sample apps

Show mock-ups, UI designs, or working prototypes (e.g., a restaurant app, parking app, admin dashboard)

Explain how you would approach a client’s need

Example:

Restaurant Management App (Demo Project)

Goal: Help restaurants digitize bookings, menus, and delivery

Tech: React Native, Firebase

Features: Online ordering, table reservation, customer feedback

Demo Link / GitHub / Screenshots

4. Tech Stack & Tools
   Display the tools you’re confident in:
   E.g., Spring Boot, React, Flutter, AWS, MySQL, Figma, Docker

5. Team Profile
   Introduce your core team with names, roles, skills.

Mention combined skillsets for the Team members.

6. Call to Action
   Invite startups and businesses to collaborate with you

Offer free consultations or MVP proposals
import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";
import "./styal.css"
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
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(" Service");
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

  // const toggleDropdown = (e) => {
  //   e.preventDefault();
  //   setIsDropdownOpen((prev) => !prev);
  // };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const services = [
    { name: "Laundry services", icon: <ShowerHead  /> },
    { name: "E-seva service", icon: <Landmark /> },
    { name: "Rental services", icon: <CalendarDays  /> },
    { name: "Event management services", icon: <Stethoscope  /> },
    { name: "Home repairing services", icon: <Warehouse  /> },
    { name: "Personal care services", icon: <Trash2  /> },
    { name: "Waste management", icon: <Hammer  /> },
    { name: "Food products", icon: <Heart  /> },
    { name: "Medical services", icon: <Utensils /> }
  ];
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (service) => {
    // setSelected(service.name);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="strike-container">
        <h1 className="strike-text">
          <Link to="/" className="text-decoration-none text-white">

           <img src={logo} alt=""  style={{ height: '60px', width: '60px' }} />
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
          <Link to="/about">About</Link>
        </li>
        
        <div className="position-relative hover-dropdown  ">
      <div
        onClick={toggleDropdown}
        className="dropdown  d-flex justify-content-between align-items-center   "
      >
        <span>{selected}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
        <ul className="dropdown-menu show custom-dropdown p-2">
          {services.map((service) => (
            <li
              key={service.name}
              onClick={() => handleSelect(service)}
              className="custom-list-item"
            >
              <span className="fs-4">{service.icon}</span>
              <span >{service.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
        

        <li>
          <Link to="/team">Investor</Link>
        </li>
        <li> 
          <Link to="/team">Our Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
