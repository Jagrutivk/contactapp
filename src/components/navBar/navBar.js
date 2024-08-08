import React from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="main-navbar">
      <div className="navbar-items">
        <ul>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/phonebook")}>Phonebook</li>
          <li onClick={() => handleNavigation("/contact")}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
