import React from "react";
import "./contactList.css";

function ContactList({ data }) {
  return (
    <div className="contactList-container">
      {data.map((contact) => (
        <div key={contact.id} className="contact-card-box">
          <h2>
            {contact.firstName} {contact.lastName}
          </h2>
          <p>
            <strong>Date of Birth:</strong> {contact.dob}
          </p>
          <p>
            <strong>Gender:</strong> {contact.gender}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phoneNo}
          </p>
          <p>
            <strong>Address:</strong> {contact.streetAddress1},{" "}
            {contact.streetAddress2 ? `${contact.streetAddress2},` : ""}{" "}
            {contact.city}, {contact.state}, {contact.zipCode},{" "}
            {contact.country}
          </p>
          <p>
            <strong>Social Media:</strong>{" "}
            <a
              href={contact.socialMediaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.socialMediaLink}
            </a>
          </p>
          <p>
            <strong>Work:</strong> {contact.work}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
