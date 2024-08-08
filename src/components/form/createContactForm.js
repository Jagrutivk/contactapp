import React from "react";
import "./createContactForm.css";

function CreateContactForm() {
  return (
    <div>
      <form>
        <label>First Name : </label>
        <input type="text"></input>

        <label>Last Name : </label>
        <input type="text"></input>

        <label>DOB : </label>
        <input type="number"></input>

        <label>Gender : </label>
        <input type="text"></input>

        <label>Email : </label>
        <input type="email"></input>

        <label>Phone No. : </label>
        <input type="number"></input>

        <label>Street Address : </label>
        <input type="text"></input>

        <label>Street Address : </label>
        <input type="text"></input>

        <label>City : </label>
        <input type="text"></input>

        <label>State : </label>
        <input type="text"></input>

        <label>Country : </label>
        <input type="text"></input>

        <label>Zip Code : </label>
        <input type="number"></input>

        <label>Social Media Link : </label>
        <input type="url"></input>

        <label>Work: </label>
        <input type="text"></input>
      </form>
    </div>
  );
}

export default CreateContactForm;
