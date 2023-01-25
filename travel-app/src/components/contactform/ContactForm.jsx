import React from "react";
import "./contact.css";

const ContactForm = () => {
  return (
    <div className="form">
      <h1>Send a message and Enquiries</h1>
      <form>
        <input placeholder="name" />
        <input placeholder="email" />
        <input placeholder="Subject" />
        <textarea placeholder="message" rows="4" />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
