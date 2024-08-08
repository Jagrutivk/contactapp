import React, { useState } from "react";
import "./createContactForm.css";

function CreateContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phoneNo: "",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    socialMediaLink: "",
    work: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="contact-form-area">
      <form onSubmit={handleSubmit} className="create-contact-form">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          DOB:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone No.:
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Street Address 1:
          <input
            type="text"
            name="streetAddress1"
            value={formData.streetAddress1}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Street Address 2:
          <input
            type="text"
            name="streetAddress2"
            value={formData.streetAddress2}
            onChange={handleChange}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Zip Code:
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Social Media Link:
          <input
            type="url"
            name="socialMediaLink"
            value={formData.socialMediaLink}
            onChange={handleChange}
          />
        </label>

        <label>
          Work:
          <input
            type="text"
            name="work"
            value={formData.work}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateContactForm;
