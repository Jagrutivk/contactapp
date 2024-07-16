import React from "react";
import "./phoneBook.css";
import Sidebar from "../../components/sidebar/sidebar";
import ContactList from "../../components/contactList/contactList";

function PhoneBook() {
  return (
    <div className="phonebook-container">
      <Sidebar />
      <ContactList />
    </div>
  );
}

export default PhoneBook;
