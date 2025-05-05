import React from "react";
import "./TeamCard.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ image, name, role, linkedin, email }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={name} className="team-photo" />
          <p className="title">{name}</p>
          <p className="team-role">{role}</p>
        </div>
        <div className="flip-card-back">
          <p>My Self</p>
          <div className="socil-media">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="fs-3 text-white" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              className="text-white fs-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="fs-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
