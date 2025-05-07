import React from "react";
import "./Flow.css";

const steps = [
  {
    title: "Book Services ",
    desc: "Streamlined booking for exceptional services anytime, anywhere ",
    icon: "👤",
  },
  {
    title: "Services confirmation ",
    desc: "Your Services is confirmed! Thank you for choosing us.",
    icon: "✅",
  },
  {
    title: "Pick Your Services ",
    desc: "Choose the services you need, tailored to your specific requirements.",
    icon: "🚚",
  },
  {
    title: "Inprogress ",
    desc: "Your request is currently in progress. We are working diligently to complete it promptly.",
    icon: "⏳",
  },
  {
    title: "Out for delivery ",
    desc: "Your order is out for delivery. Arriving at your location soon.",
    icon: "📦",
  },
  {
    title: "Delivered",
    desc: "Your order has been successfu delivered. Thank you!",
    icon: "📬",
  },
];

const LaundryTimeline = () => {
  return (
    <>
    <h2 className="flowHead">Our Service Flow</h2>
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
    </>
   
  );
};

export default LaundryTimeline;
