import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FounderSection.css";
import founder from "../assets/founder.jpg";
import cofounder from "../assets/cofounder.jpg";
import logos from "../assets/logos.jpg";

const FounderSection = () => {
  return (
   <section id="investors">
     <div className="container py-5 founder-container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="position-relative founder-section p-4 text-white rounded">
            <div className="founder-img-wrapper position-absolute top-0 translate-middle">
              <img
                src={logos}
                alt="logo"
                className="rounded-circle img-fluid p-1"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="line position-absolute top-0 end-0 h-100 d-flex flex-column">
              <div className="thin-line"></div>
            </div>
            <div className="mt-5 pt-4 text-center px-3 founder-text">
              <h3 className="fw-bold mb-2">
                MEET OUR
                <br />
                FOUNDER & CO-FOUNDER
              </h3>
              <h5 className="mb-4">
                We are dedicated to providing exceptional products and services
                to our customers.
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-wrap justify-content-center gap-4 p-4">
          <div className="founder-wrapper ">
            <div className="founder">
              <img
                src={founder}
                alt="founder"
                className="img-fluid rounded mb-3 founder-img"
                style={{ height: "250px", width: "100%" }}
              />
              <div className="text-center founder-name">
                <h3 className="names">G Gopinath</h3>
              </div>
              <div className="text-center founder-post">
                <h4 className="text-white cofounder-post">Founder & CEO</h4>
              </div>
            </div>
          </div>
          <div className="founder-wrapper">
            <div className="founder">
              <img
                src={cofounder}
                alt="cofounder"
                className="img-fluid rounded mb-3 founder-img"
                style={{ height: "250px", width: "100%" }}
              />
              <div className="text-center founder-name">
                <h3 className="names">K Adhivishnu</h3>
              </div>
              <div className="text-center founder-post">
                <h4 className="text-white cofounder-post">Co-Founder</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
};

export default FounderSection;
