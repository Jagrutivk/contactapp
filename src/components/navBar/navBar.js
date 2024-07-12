import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="main-navbar">
      <div className="navbar-items">
        <ul>
          <li>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/phonebook">
              <b>Phonebook</b>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <b>Contact Us</b>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
