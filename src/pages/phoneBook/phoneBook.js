import React, { useState } from "react";
import "./phoneBook.css";
import Sidebar from "../../components/sidebar/sidebar";
import CreateContactForm from "../../components/form/createContactForm";
import ContactList from "../../components/contactList/contactList";

function PhoneBook() {
  // const [action, setAction] = useState([]);
  const [message, setMessage] = useState([]);
  const [action] = message;

  const onDisplayForm = () => {
    setMessage(["DisplayForm"]);
    console.log("action display: ", message);
  };

  const onDisplayContactList = () => {
    setMessage(["DisplayContactList"]);
    console.log("action display: ", message);
  };

  return (
    <div className="phonebook-container">
      <Sidebar
        handleDisplayForm={onDisplayForm}
        handleDisplayContactList={onDisplayContactList}
      />
      {/* Conditional rendering based on action state */}
      {action === "DisplayForm" && <CreateContactForm />}
      {action === "DisplayContactList" && <ContactList />}
    </div>
  );
}

export default PhoneBook;
