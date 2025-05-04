
import "bootstrap/dist/css/bootstrap.min.css";
// import Kaviya from '../assets/kaviyagrey1.jpg';
// import dheenaImage from '../assets/dheena.jpg';
// import Bharanimanikandan from '../assets/bharani1.jpg';
// import vijay from '../assets/vijay.jpg';
// import fasil from '../assets/fasil.jpg';
// import React from "react";
// import TeamCard from "./TeamCard";
// import RasithKhan from '../assets/Rasith.jpg';
// import anbu from '../assets/anbu1.jpg';
// import giri from '../assets/giri1.jpg';

import React from 'react';
import TeamCard from './TeamCard'; 
import './TeamProfiles.css';
import bharaniImage from '../assets/bharani1.jpg';
import vijayImage from '../assets/vijay.jpg';
import kaviyaImage from '../assets/kaviyagrey1.jpg';
import fasilImage from '../assets/fasil.jpg';
import dheenaImage from '../assets/dheena.jpg';
import giriImage from '../assets/Giri1.jpg';
import anbu from '../assets/anbu1.jpg';
import rasith from '../assets/Rasith.jpg';
// import ProfileCard from './SingleCard';
// import './SingleCard.css';

const teamMembers = [
  // {
  //   image: vishnuImage,
  //   name: 'Adhivishnu',
  //   role: 'Chief Technology Officer',
  //   linkedin: 'https://www.linkedin.com/in/adhivishnu-k/',
  //   email: 'vishvishnu703@gmail.com',
  //   skills: ['Java','Node.js','JavaScript','Express.js','SQL'],
  // },
  {
    image: bharaniImage,
    name: 'Bharanimanikandan',
    role: 'Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/bharani-manikandan-567444355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    email: 'kskaranbharani2001@gmail.com',
    skills: ['JavaScript','Node.js','React.js','Express.js','MongoDB'],
    
  },
  {
    image: vijayImage,
    name: 'Vijayakumar',
    role: 'Front End Developer',
    bio: 'apps.',
    linkedin: 'https://www.linkedin.com/in/vijayakumar-s-298554253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    email: 'vijaykumaryoyo8@gmail.com',
    portfolio: 'https://vijayakumars.netlify.app',
    skills: ['JavaScript','Node.js','React.js','Express.js','MongoDB'],
  },
  {
    image: kaviyaImage,
    name: 'Kaviya',
    role: 'Front End Developer',
    bio: 'project',
    linkedin: 'https://www.linkedin.com/in/kaviya-balasubramaniyan-bb4a431a2/',
    email: 'banakasu4scot@gmail.com',
    portfolio: 'https://kaviya-portfolio-resume.netlify.app/',
    skills: ['JavaScript','React.js','Express.js','Node.js','MySQL'],
  },
  {
    image: fasilImage,
    name: 'Fasil',
    role: 'Front End Developer',
    bio: 'systems.',
    linkedin: 'https://www.linkedin.com/in/mohammadfasil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'faisal.sfzubaida@gmail.com',
    portfolio: 'https://afaisal-rio-portfolio.netlify.app/',
    skills: ['JavaScript','Node.js','React.js','Git','MongoDB'],
  },
  {
    image: dheenaImage,
    name: 'Dheenadhayalan',
    role: 'Back End Developer',
    bio: 'Project',
    linkedin: 'https://www.linkedin.com/in/dheenadhayalan-s-283b03299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'dheenadhayalan.dk@gmail.com',
    portfolio: 'https://cute-stroopwafel-1deafa.netlify.app/',
    skills: ['Node.js','Express.js','MySQL','MongoDB','Postman API'],
  },
  {
    image: giriImage,
    name: 'Giridharan',
    role: 'Back End Develper',
    bio: 'Project',
    linkedin: 'https://www.linkedin.com/in/giridharan-sivaramakrishnan-6325ab293/',
    email: 'giridharan831@gmail.com',
    skills: ['Node.js','Express.js','MySQL','MongoDB','Postman API'],
  },
  {
    image: anbu,
    name: 'Anbu Liyon',
    role: 'Back End Developer',
    bio: 'Project',
    linkedin: 'https://www.linkedin.com/in/anbu-liyon-068352284',
    email: 'anbuliyon@gmail.com ',
    skills: ['Node.js','Express.js','MySQL','MongoDB','Postman API'],
  },
  {
    image: rasith,
    name: 'Rasith Khan',
    role: 'UI/UX Designer',
    bio: 'Project',
    linkedin: 'https://www.linkedin.com/in/rasithkhan',
    email: 'khanrasith281@gmail.com ',
    skills: ['Figma','Adobe XD','Photoshop','Illustrator','Primer Pro'],
  },
  {
    image: anbu,
    name: 'Anbu Liyon',
    role: 'Back End Developer',
    bio: 'Project',
    linkedin: 'https://www.linkedin.com/in/anbu-liyon-068352284',
    email: 'anbuliyon@gmail.com ',
    skills: ['Node.js','Express.js','MySQL','MongoDB','Postman API'],
  },
  {
    image: rasith,
    name: 'Rasith Khan',
    role: 'UI/UX Designer',
    bio: 'Project',
    linkedin: 'https://www.linkedin.com/in/rasithkhan',
    email: 'khanrasith281@gmail.com ',
    skills: ['Figma','Adobe XD','Photoshop','Illustrator','Primer Pro'],
  },
  
];

const TeamProfiles = () => {
  return (
    <div className="team-section">
      <h1 className="team-title">Our Team</h1>

      {/* <div className="featured-profile">
          <ProfileCard/>
      </div>  */}

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member}
           />
        ))}
      </div>

      
    </div>
  );
};

export default TeamProfiles;
