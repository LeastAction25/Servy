import React from 'react';
import './contact.css';
import businessImg from '../contact/businessImg1.jpeg'; // update path as needed
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../../utils/config";
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


  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit,
    
  });

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={businessImg} alt="Business" />
      </div>
      <div className="contact-form">
        <h2><span>SEND A</span> &nbsp;MESSAGE FOR FREE CONSULTATION</h2>
        <form onSubmit={handleSubmit} >
          <div className="form-row">
            <input required
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={values.name} />
            <input  required
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={values.email} />
          </div>
          <input  required
                  type="number"
                  id="phone"
                  onChange={handleChange}
                  value={values.phone} placeholder="Phone Number*" />
          <textarea  required
                  id="message"
                  rows="3"
                  placeholder="message"
                  onChange={handleChange}
                  value={values.message}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
