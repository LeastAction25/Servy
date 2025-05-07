import React from "react";
import "./contact.css";
import businessImg from "../assets/businessImg1.jpeg"; // Update path as needed
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../utils/config";
import { useFormik } from "formik";

const ContactForm = () => {
  const onSubmit = async (values, actions) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
      alert("Message sent successfully!");
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit,
  });

  return (
    <section id="contact">
      <div className="contact-container">
      <div className="contact-image">
        <img src={businessImg} alt="Business Consultation" />
      </div>
      <div className="contact-form">
        <h2>
          <span>SEND A</span> MESSAGE FOR FREE CONSULTATION
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              required
              type="text"
              id="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={values.name}
            />
            <input
              required
              type="email"
              id="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <input
            required
            type="tel"
            id="phone"
            placeholder="Phone Number*"
            onChange={handleChange}
            value={values.phone}
          />
          <textarea
            required
            id="message"
            rows="3"
            placeholder="Your Message"
            onChange={handleChange}
            value={values.message}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
