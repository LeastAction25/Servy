
import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FounderSection.css";
import founder from "../assets/founder.jpg";
import cofounder from "../assets/cofounder.jpg";
import logos from "../assets/logos.jpg";

const FounderSection = () => {
  return (
    <div className="container py-5 founder-container mt-5">
      <div className="row align-items-cente">
        <div className="col-md-6">
          <div className="position-relative founder-section p-4 text-white rounded">
            {/* Founder Image */}
            <div className="founder-img-wrapper position-absolute top-0  translate-middle">
              <img
                src={logos} // Replace with your image
                alt="logo"
                className="rounded-circle img-fluid"
                style={{ width: "100px", height: "100px" }}
              />
            </div>

            <div className="line position-absolute top-0 end-0 h-100 d-flex flex-column">
              <div className="thin-line"></div>
            </div>
            {/* Content */}
            <div className="mt-5 pt-4 text-center px-3 founder-text">
              <h3 className="fw-bold mb-2">
                MEET OUR
                <br />
                FOUNDER & CO-FOUNDER
              </h3>
              <br />
              <h5 className="mb-4">
                We are dedicated to providing exceptional products and services
                to our customers.
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 d-flex gap-5">
          {/* Founder Card */}
          <div className="founder-wrapper">
            <div className="founder">
              <div className="founderimg">
                <img
                  src={founder}
                  alt="founder"
                  className="img-fluid rounded mb-3 founder-img"
                  style={{ height: "250px", width: "100%" }}
                />
              </div>
              <div className="text-center founder-name">
                <h3 className="names">G Gopinath</h3>
              </div>
              <div className="text-center founder-post">
                <h4 className="text-white cofounder-post">Founder & CEO</h4>
              </div>
            </div>
          </div>

          {/* Co-Founder Placeholder */}
          <div className="founder-wrapper">
            <div className="founder">
              <div className="founderimg">
                <img
                  src={cofounder}
                  alt="cofounder"
                  className="img-fluid rounded mb-3 founder-img"
                  style={{ height: "250px", width: "100%" }}
                />
              </div>
              <div className="text-center">
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
  );
};

export default FounderSection;
