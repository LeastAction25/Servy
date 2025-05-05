import React, { useEffect, useRef, useState } from "react";
import "./ServicesCard.css";

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
  const [totalCardSize, setTotalCardSize] = useState(320); // Default card width + margin

  // Update total card size dynamically
  useEffect(() => {
    const updateCardSize = () => {
      const screenWidth = window.innerWidth;
      let cardWidth;

      if (screenWidth <= 480) cardWidth = 200;
      else if (screenWidth <= 768) cardWidth = 240;
      else if (screenWidth <= 1024) cardWidth = 270;
      else cardWidth = 300;

      setTotalCardSize(cardWidth + 20); // Add margin
    };

    updateCardSize();
    window.addEventListener("resize", updateCardSize);

    return () => window.removeEventListener("resize", updateCardSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (index === originalData.length) {
      track.style.transition = `transform ${transitionTime}ms ease-in-out`;
      track.style.transform = `translateX(-${index * totalCardSize}px)`;

      const timeout = setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;
        setIndex(0);
      }, transitionTime);

      return () => clearTimeout(timeout);
    } else {
      track.style.transition = `transform ${transitionTime}ms ease-in-out`;
      track.style.transform = `translateX(-${index * totalCardSize}px)`;
    }
  }, [index, totalCardSize]);

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
