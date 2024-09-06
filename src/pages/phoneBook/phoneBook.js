import React, { useState } from "react";
import "./phoneBook.css";
import Sidebar from "../../components/sidebar/sidebar";
import CreateContactForm from "../../components/form/createContactForm";
import ContactList from "../../components/contactList/contactList";
import useApi from "../../hooks/useApi";

function PhoneBook() {
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");

  const onDisplayForm = () => {
    setMessage("DisplayForm");
    console.log("action display: ", message);
  };

  const onDisplayContactList = () => {
    // Avoid setting the same URL repeatedly
    if (message !== "DisplayContactList") {
      setMessage("DisplayContactList");
      setUrl("http://localhost:6000/api/contacts");
    }
    console.log("action display: ", message);
  };

  const { data, loading, error } = useApi(url, "GET");

  return (
    <div className="phonebook-container">
      <Sidebar
        handleDisplayForm={onDisplayForm}
        handleDisplayContactList={onDisplayContactList}
      />
      {/* Conditional rendering based on message state */}
      {message === "DisplayForm" && <CreateContactForm />}
      {message === "DisplayContactList" && (
        <>
          {loading && <p>Loading...</p>}
          {error && <p>Error message: {error}</p>}
          {!loading && !error && <ContactList contactData={data} />}
        </>
      )}
    </div>
  );
}

export default PhoneBook;
