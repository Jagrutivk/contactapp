import React from "react";
import "./contactList.css";

function ContactList({ data }) {
  return (
    <div className="contactList-container">
      {data?.map((contact) => (
        <div key={contact.id} className="contact-card-box">
          <h2>
            {contact.firstName} {contact.lastName}
          </h2>
          <p>
            <strong>Date of Birth:</strong> {contact.dob}
          </p>

          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phoneNo}
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
