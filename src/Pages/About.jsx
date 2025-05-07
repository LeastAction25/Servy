
// import React from "react";
// import "./About.css";
// import slide1 from "../assets/aboutus1.png";
// const AboutUs = () => {
//   return (
//     <div className="container about-section my-5">
//       <div className="row align-items-center">
//         <div className="col-md-6 text-center mb-4 mb-md-0">
//           <div className=" ">
//             <img
//               src={slide1}
//               alt="Team discussion"
//               className="  main-image h-75 w-75"
//             />
//             <div className="circle black-circle"></div>
//             <div className="circle orange-circle"></div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <p className="text-orange fw-bold fs-1 b-1">About Us</p>
//           <h2>
//             Man Power <span className="text-orange">Services</span>
//           </h2>
//           <p>
//           Manpower refers to the human workforce involved in any activity or organization. It includes both skilled and unskilled labor. Efficient use of manpower boosts productivity, supports growth, and helps achieve goals. Proper planning and management of manpower ensure smooth operations and optimal resource utilization.
//           </p>
//           <p>
//           Manpower is the total number of people available or employed to perform work. It plays a crucial role in the success of any organization. Effective manpower planning ensures the right people are in the right roles at the right time.
//           </p>
//           <p>
//           Manpower represents the human effort required in various sectors, including industry, services, and administration. It involves both mental and physical work. Proper utilization of manpower increases efficiency, productivity, and overall organizational performance.
//           </p>
//           <p>
//           Manpower is the human resource essential for completing tasks efficiently in any organization or industry.
//           </p>
    
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from "react";
import "./About.css";
import slide1 from "../assets/aboutus1.png";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container about-section my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0 image-section">
          <div className="image-wrapper">
            <img
              src={slide1}
              alt="Team discussion"
              className="main-image h-75 w-75"
            />
            {/* <div className="circle black-circle"></div> */}
            <div className="circle orange-circle"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <p className="text-orange fw-bold fs-1 b-1">About Us</p>
          <h2>
            Man Power <span className="text-orange">Services</span>
          </h2>
          <p>
            Manpower refers to the human workforce involved in any activity or
            organization. It includes both skilled and unskilled labor.
            Efficient use of manpower boosts productivity, supports growth, and
            helps achieve goals. Proper planning and management of manpower
            ensure smooth operations and optimal resource utilization.
          </p>
          <p>
            Manpower is the total number of people available or employed to
            perform work. It plays a crucial role in the success of any
            organization. Effective manpower planning ensures the right people
            are in the right roles at the right time.
          </p>
          <p>
            Manpower represents the human effort required in various sectors,
            including industry, services, and administration. It involves both
            mental and physical work. Proper utilization of manpower increases
            efficiency, productivity, and overall organizational performance.
          </p>
          <p>
            Manpower is the human resource essential for completing tasks
            efficiently in any organization or industry.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
