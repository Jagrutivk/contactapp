import React from "react";
import "./sidebar.css";

function Sidebar({ handleDisplayForm, handleDisplayContactList }) {
  return (
    <div className="sidebar-container">
      <div className="search-div">
        <form className="search-form">
          <input type="text" placeholder="Search Here.." />
        </form>
      </div>
      <div className="button-div">
        <button className="primary-button" onClick={() => handleDisplayForm()}>
          <b>Add Contact</b>
        </button>
        <button
          className="primary-button"
          onClick={() => handleDisplayContactList()}
        >
          <b>All Contact</b>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
