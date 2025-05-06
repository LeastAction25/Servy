import React, { useEffect, useRef, useState } from "react";
import "./ServicesCard.css";

import image1 from "../assets/image.png";
import image3 from "../assets/rental.png";
import image2 from "../assets/esava.png";
import image4 from "../assets/event.png";
import image5 from "../assets/home repare.png";
import image6 from "../assets/personal.png";
import image7 from "../assets/waste.png";
import image8 from "../assets/food.png";
import image9 from "../assets/medical.png";



const originalData = [
  { title: "Laundry services", description: "Laundry is an essential service...", image: image1 },
  { title: " E-seva service ", description: "Effortless e-Seva services for all your needs...", image: image2 },
  { title: " Rental services", description: "Reliable rental services tailored to your needs...", image: image3 },
  { title: " Event management services", description: "Reliable rental services tailored to your needs...", image: image4 },
  { title: " Home repairing services", description: "Reliable rental services tailored to your needs...", image: image5 },
  { title: " Personal care services", description: "Reliable rental services tailored to your needs...", image: image6 },
  { title: " Waste management", description: "Reliable rental services tailored to your needs...", image: image7 },
  { title: " Food products", description: "Reliable rental services tailored to your needs...", image: image8 },
  { title: " Medical services", description: "Reliable rental services tailored to your needs...", image: image9 },
  

];

// Clone a few items for looping
const servicesData = [...originalData, ...originalData.slice(0, 0)];

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
