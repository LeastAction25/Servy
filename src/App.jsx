import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";  // No need to import BrowserRouter here
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTopButton from "./Components/ScrollToTopButton";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import ServiceSection from './Components/ServiceSection';
import Home from "./Pages/Home";
import TeamProfile from "./Components/TeamProfiles";
import About from "./Pages/About";
import Founder from "./Components/FounderSection";
import Nav from "./Components/Nav";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const investorsRef = useRef(null);
  const contactRef = useRef(null);
  const serviceSectionRef = useRef(null);

  const location = useLocation();  // This hook will now work correctly inside Router context

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        scrollToSection(homeRef);
        break;
      case "/about":
        scrollToSection(aboutRef);
        break;
      case "/team":
        scrollToSection(teamRef);
        break;
      case "/services":
        scrollToSection(serviceSectionRef);
        break;
      case "/contact":
        scrollToSection(contactRef);
        break;
      case "/investors":
        scrollToSection(investorsRef);
        break;
      default:
        scrollToSection(homeRef);
        break;
    }
  }, [location]);

  return (
    <div>
      <Nav />
      <ScrollToTopButton />

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={teamRef}>
        <TeamProfile />
      </div>
      <div ref={serviceSectionRef}>
        <ServiceSection />
      </div>
      <div ref={investorsRef}>
        <Founder />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
