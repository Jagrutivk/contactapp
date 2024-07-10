import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="main-container">
        <h3 className="addrs-header">Address</h3>
        <p className="addrs-para-container">Pune, Maharashtra, India</p>
        <h3 className="addrs-header">Email </h3>
        <p className="addrs-para-container">phonebook@gmail.com</p>
        <h3 className="addrs-header">Contact</h3>
        <p className="addrs-para-container">022 233233 5555</p>
      </div>
    </div>
  );
}

export default Contact;
