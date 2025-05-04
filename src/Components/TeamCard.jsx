import React from "react";
import "./TeamCard.css";
import { FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
const TeamCard = ({ image, name, role,linkedin,email,skills }) => {
  return (
  
    <div class="flip-card">
    
    <div class="flip-card-inner">
  
        <div class="flip-card-front">
        <img  src={image} alt={name}   class="team-photo"/>
            <p class="title">{name}</p>
            <p className="team-role">{role}</p>
        </div>
        <div class="flip-card-back">
            
            <p>My Self</p>
            <div className="socil-media ">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="fs-3 text-white"/></a>
            <span><a
         
         href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
         
          className="text-white fs-3"
        >
            <FaEnvelope  className="fs-3"/></a></span>
           </div>
        </div>
    </div>
</div>
  );
};

export default TeamCard;
