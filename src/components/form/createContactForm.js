import React from "react";
import "./createContactForm.css";

function CreateContactForm() {
  return (
    <div>
      <form>
        <ul>
          <li>
            <label>First Name : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>Last Name : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>DOB : </label>
            <input type="number"></input>
          </li>
          <li>
            <label>Gender : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>Email : </label>
            <input type="email"></input>
          </li>
          <li>
            <label>Phone No. : </label>
            <input type="number"></input>
          </li>
          <li>
            <label>Street Address : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>Street Address : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>City : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>State : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>Country : </label>
            <input type="text"></input>
          </li>
          <li>
            <label>Zip Code : </label>
            <input type="number"></input>
          </li>
          <li>
            <label>Social Media Link : </label>
            <input type="url"></input>
          </li>
          <li>
            <label>Work: </label>
            <input type="text"></input>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CreateContactForm;
