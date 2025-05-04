import React from "react";
import "./ServiceSection.css";
import Waste from "../assets/Waste.jpg"
import ServicesCard from "./ServicesCard";
const services = [
  {
    title: "Laundry Services",
    img: "https://img.freepik.com/premium-photo/young-man-working-drycleaning-salon_392895-222629.jpg",
  },
  {
    title: "Event Management Services",
    img: "https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg",
  },
  {
    title: "Waste Management Services",
    img:Waste,
  },
  {
    title: "E-Seva Services",
    img: "https://img.freepik.com/free-photo/colleagues-work_23-2148499495.jpg",
  },
  {
    title: "Home Repair Services",
    img: "https://img.freepik.com/premium-photo/construction-crew-png-sticker-diverse-happy-people-transparent-background_53876-1041663.jpg",
  },
  {
    title: "Food Product Services",
    img: "https://img.freepik.com/premium-photo/midsection-woman-holding-food-home_1048944-3021153.jpg",
  },
  {
    title: "Rental Services",
    img: "https://img.freepik.com/free-photo/vehicle-dealer-giving-keys-car-buyer-showroom_342744-728.jpg",
  },
  {
    title: "Personal Care Services",
    img: "https://img.freepik.com/free-photo/elder-women-disinfecting-their-hands-while-home_23-2148492252.jpg",
  },
  {
    title: "Medical Services",
    img: "https://img.freepik.com/free-photo/medium-shot-doctor-checking-blood-pressure-female-patient_1098-19334.jpg",
  },
];

const ServiceSection = () => {
  return (
    <>
      {/* Top Banner */}
    

      {/* </div> */}

      {/* Services Grid */}
      <section className="py-5 bg-light text-center">
      <div className="services-container">
      <h1><span>Our </span>Services</h1></div>
      <ServicesCard></ServicesCard>
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="cards h-100 shadow-sm border-0 service-card">
                  <div className="card-image-wrapper">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="card-img-top"
                    />
                    <div className="card-overlay d-flex align-items-center justify-content-center">
                      <h5 className="card-title text-white">{service.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
