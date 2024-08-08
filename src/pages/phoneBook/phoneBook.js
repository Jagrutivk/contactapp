// import { useState, useEffect } from "react";
// import "./phoneBook.css";
// import Sidebar from "../../components/sidebar/sidebar";
// import CreateContactForm from "../../components/form/createContactForm";
// import ContactList from "../../components/contactList/contactList";

// function PhoneBook() {
//   // const [action, setAction] = useState([]);
//   const [message, setMessage] = useState([]);
//   const [action] = message;
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const onDisplayForm = () => {
//     setMessage(["DisplayForm"]);
//     console.log("action display: ", message);
//   };

//   const onDisplayContactList = () => {
//     setMessage(["DisplayContactList"]);
//     console.log("action display: ", message);
//   };

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/users");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const result = await response.json();
//       setData(result);
//       console.log("data---->", data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="phonebook-container">
//       <Sidebar
//         handleDisplayForm={onDisplayForm}
//         handleDisplayContactList={onDisplayContactList}
//       />
//       {/* Conditional rendering based on action state */}
//       {action === "DisplayForm" && <CreateContactForm />}
//       {action === "DisplayContactList" && <ContactList data={data} />}
//     </div>
//   );
// }

// export default PhoneBook;

import { useState, useEffect } from "react";
import "./phoneBook.css";
import Sidebar from "../../components/sidebar/sidebar";
import CreateContactForm from "../../components/form/createContactForm";
import ContactList from "../../components/contactList/contactList";

function PhoneBook() {
  const [message, setMessage] = useState([]);
  const [action] = message;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDisplayForm = () => {
    setMessage(["DisplayForm"]);
  };

  const onDisplayContactList = () => {
    setMessage(["DisplayContactList"]);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming the response contains the created user
      const newUser = await response.json();
      console.log("User created:", newUser);

      // Optionally, update the contact list after submission
      setData((prevData) => [...prevData, newUser]);

      // Switch back to contact list view
      onDisplayContactList();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="phonebook-container">
      <Sidebar
        handleDisplayForm={onDisplayForm}
        handleDisplayContactList={onDisplayContactList}
      />
      {/* Conditional rendering based on action state */}
      {action === "DisplayForm" && (
        <CreateContactForm onSubmit={handleFormSubmit} />
      )}
      {action === "DisplayContactList" && <ContactList data={data} />}
    </div>
  );
}

export default PhoneBook;
