import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="search-div">
        <form className="search-form">
          <input type="text" placeholder="Search Here.." />
        </form>
      </div>
      <div className="button-div">
        {/* <form className="search-form">
          <input type="text" placeholder="Search Here.." />
        </form> */}
        <button className="primary-button">
          <b>Add Contact</b>
        </button>
        <button className="primary-button">
          <b>All Contact</b>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
