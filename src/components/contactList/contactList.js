import React from "react";
import "./contactList.css";
import CreateContactForm from "../form/createContactForm";

function ContactList() {
  return (
    <div className="contactList-container">
      <CreateContactForm />
    </div>
  );
}

export default ContactList;
