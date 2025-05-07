// import React, { useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom"; 
// import "bootstrap/dist/css/bootstrap.min.css";

// import ScrollToTopButton from "./Components/ScrollToTopButton";
// import Footer from "./Components/Footer";
// import Contact from "./Components/Contact";
// import ServiceSection from './Components/ServiceSection';
// import Home from "./Pages/Home";
// import TeamProfile from "./Components/TeamProfiles";
// import About from "./Pages/About";
// import Founder from "./Components/FounderSection";
// import Nav from "./Components/Nav";

// function App() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const teamRef = useRef(null);
//   const investorsRef = useRef(null);
//   const contactRef = useRef(null);
//   const serviceSectionRef = useRef(null);

//   const location = useLocation();  

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     switch (location.pathname) {
//       case "/":
//         scrollToSection(homeRef);
//         break;
//       case "/about":
//         scrollToSection(aboutRef);
//         break;
//       case "/team":
//         scrollToSection(teamRef);
//         break;
//       case "/services":
//         scrollToSection(serviceSectionRef);
//         break;
//       case "/contact":
//         scrollToSection(contactRef);
//         break;
//       case "/investors":
//         scrollToSection(investorsRef);
//         break;
//       default:
//         scrollToSection(homeRef);
//         break;
//     }
//   }, [location]);

//   return (
//     <div>
//       <Nav />
//       <ScrollToTopButton />

//       <div ref={homeRef}>
//         <Home />
//       </div>
//       <div ref={aboutRef}>
//         <About />
//       </div>

//       <div ref={teamRef}>
//         <TeamProfile />
//       </div>
//       <div ref={serviceSectionRef}>
//         <ServiceSection />
//       </div>
//       <div ref={investorsRef}>
//         <Founder />
//       </div>
//       <div ref={contactRef}>
//         <Contact />
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTopButton from "./Components/ScrollToTopButton";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import ServiceSection from './Components/ServiceSection';
import Home from "./Pages/Home";
import TeamProfile from "./Components/TeamProfiles";
import About from "./Pages/About";
import Founder from "./Components/FounderSection";
import Nav from "./Components/Nav";
import Flow from "./Components/Flow"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const investorsRef = useRef(null);
  const contactRef = useRef(null);
  const serviceSectionRef = useRef(null);

  const location = useLocation();

  const scrollToSection = (ref) => {
    if (ref.current) {
      const navbar = document.querySelector(".navbar"); // Make sure your Nav component has className="navbar"
      const navbarHeight = navbar ? navbar.offsetHeight : 70; // fallback height
      const elementPosition = ref.current.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
      <Nav /> {/* Make sure this has className="navbar" inside the component */}
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
      <Flow />
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

