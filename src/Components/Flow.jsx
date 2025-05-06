import React from "react";
import "./Flow.css";

const steps = [
  {
    title: "Sorting",
    desc: "We sort your laundry based on color and fabric type for optimal cleaning results.",
    icon: "🔽",
  },
  {
    title: "Stain Treatment",
    desc: "Stubborn stains are pre-treated to increase the chances of successful removal.",
    icon: "✳️",
  },
  {
    title: "Washing",
    desc: "We use high-quality detergents and modern machines to clean your laundry effectively.",
    icon: "🧺",
  },
  {
    title: "Drying",
    desc: "Your laundry is carefully dried using efficient and gentle methods.",
    icon: "💧",
  },
  {
    title: "Folding & Packing",
    desc: "We fold your laundry neatly and package it for easy pickup.",
    icon: "👕",
  },
  {
    title: "Ready for Pickup",
    desc: "Your fresh and clean laundry is ready for you to collect.",
    icon: "📍",
  },
];

const LaundryTimeline = () => {
  return (
    <div className="timeline-wrapper">
      <svg className="svg-line" viewBox="0 0 600 800" preserveAspectRatio="none">
   
   <path
  d="
    M 100 30 
    H 300 
    A 20 20 0 0 1 320 50 
    V 130 
    A 20 20 0 0 1 300 150 
    H 80                  
    A 20 20 0 0 0 60 170 
    V 260 
    Q 60 290, 100 290       
    H 470                    
    Q 500 290, 500 340 
    V 400                   
    A 20 20 0 0 1 480 420   
    H 290 
  Q 270 420, 270 440 
  V 450
  "
  stroke="#388e3c"
  strokeWidth="2"
  fill="none"
/>


      </svg>

      <div className="steps">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className={`icon-wrapper icon-${i + 1}`}>{step.icon}</div>
            <div className={`step step-${i + 1}`}>
              <div className="text">
                <h3>{`0${i + 1}. ${step.title}`}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LaundryTimeline;
