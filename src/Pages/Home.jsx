import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const totalSlides = 3; // Update if you add more slides

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        const nextIndex = (prev + 1) % totalSlides;
        sliderRef.current.style.transform = `translateX(-${nextIndex * 100}vw)`;
        return nextIndex;
      });
    }, 4000); // Change slide every 5s

    return () => clearInterval(interval);
  }, []);
  return (
    <>
   <section id="/">
   <div className="slider_container">
      <div className="slider" ref={sliderRef}>
        <div className="slide one">
          <img src={slide1} alt="Slide 1" />
          
        </div>
        <div className="slide two">
          <img src={slide2} alt="Slide 2" />
         
        </div>
       
        <div className="slide four">
          <img src={slide3} alt="Slide 3" />
        
        </div>
      </div>
    </div></section>
    </>
  );
};
export default Home;
