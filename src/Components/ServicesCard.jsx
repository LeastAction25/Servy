import React, { useEffect, useRef, useState } from 'react';
import './Servicescard.css';

import image1 from "../assets/image.png";
import image2 from "../assets/image1.png";
import image3 from "../assets/image2.png";

const originalData = [
  { title: "Housekeeping Services", description: "We understand that Housekeeping Service...", image: image1 },
  { title: "Kitchen Steward Services", description: "Our Stewarding team is responsible for...", image: image2 },
  { title: "Laundry Services", description: "Laundry is an essential service...", image: image3 },
];

// Clone a few items for looping
const servicesData = [...originalData, ...originalData.slice(0, 3)];

const ServicesCard = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const transitionTime = 1000;
  const cardWidth = 300;
  const cardMargin = 10;
  const totalCardSize = cardWidth + cardMargin * 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Animate to clone
    if (index === originalData.length) {
      track.style.transition = `transform ${transitionTime}ms ease-in-out`;
      track.style.transform = `translateX(-${index * totalCardSize}px)`;

      // After animation, jump to real start
      const timeout = setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;
        setIndex(0);
      }, transitionTime);

      return () => clearTimeout(timeout);
    } else {
      // Normal transition
      track.style.transition = `transform ${transitionTime}ms ease-in-out`;
      track.style.transform = `translateX(-${index * totalCardSize}px)`;
    }
  }, [index]);

  return (
    <div className="services-container">
     
      <div className="slider-wrapper">
        <div className="slider-track" ref={trackRef}>
          {servicesData.map((service, idx) => (
            <div className="card" key={idx}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
