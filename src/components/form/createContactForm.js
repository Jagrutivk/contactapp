import React from "react";
import "./createContactForm.css";

function CreateContactForm() {
  return (
    <div className="form-main-container">
      <div className="card">
        <div className="card-header">
          <h3>Contact Form</h3>
        </div>

        <form className="card-body">
          <div className="form-section">
            <div className="form-group">
              <label>First Name : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>Last Name : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>DOB : </label>
              <input type="number"></input>
            </div>

            <div className="form-group">
              <label>Gender : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>Email : </label>
              <input type="email"></input>
            </div>

            <div className="form-group">
              <label>Contact No. : </label>
              <input type="number"></input>
            </div>

            <div className="form-group">
              <label>Profession: </label>
              <input type="text"></input>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Street Address : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>Street Address : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>City : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>State : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>Country : </label>
              <input type="text"></input>
            </div>

            <div className="form-group">
              <label>Zip Code : </label>
              <input type="number"></input>
            </div>

            <div className="form-group">
              <label>Social Media Link : </label>
              <input type="url"></input>
            </div>
          </div>
        </form>

        <div className="card-footer">
          <button className="danger"> Reset </button>
          <button className="primary"> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default CreateContactForm;
