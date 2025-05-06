import ScrollToTopButton from "./Components/ScrollToTopButton";

import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import ServiceSection from './Components/ServiceSection';
import Home from "./Pages/Home";
import TeamProfile from "./Components/TeamProfiles"
import About from "./Pages/About";
import Founder from "./Components/FounderSection"
import "bootstrap/dist/css/bootstrap.min.css";



import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Components/Nav";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const investorsRef = useRef(null);
  const contactRef = useRef(null);
  const serviceSectionRef = useRef(null);


  const location = useLocation();

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
        case "/Investors":
          scrollToSection(investorsRef);
        break;
      default:
        scrollToSection(homeRef);
        break;
    }
  }, [location]);

  return (
    <>
      {/* <Nav /> */}

      {/* <BrowserRouter>
    <Topbar/>
    <ScrollToTop />
    <ScrollToTopButton/>
        <Routes>
    */}
      {/* <Route path="/" element={<Topbar/>} > */}
      {/* <Route index element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/team" element={<TeamProfiles/>} />
    <Route path="/projects" element={<SampleProjects/>} />
    <Route path="/contact" element={<Contact/>} />
    {/* </Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* <div id="home"><Home /></div>
    <div id="about"><About /></div>
    <div id="services"><Services /></div>
    <div id="team"><TeamProfiles /></div>
    <div id="projects"><SampleProjects/></div>
    <div id="contact"><Contact /></div> */}

      {/* <Footer /> */}
      {/* <Nav /> */}
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
        <div ref={servicesRef}>
          <ServiceSection />
        </div>
        <div ref={investorsRef}>
          <Founder/>
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
