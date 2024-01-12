// RegistrationForm.js
import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "", // Aggiungi il campo Country
    city: "", // Aggiungi il campo City
    address: "", // Aggiungi il campo Address
    phone: "", // Aggiungi il campo Phone
  });

  // Function to handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update state with new data, preserving existing values and adding/modifying new ones
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Sending data to the backend when the form is submitted
    fetch("http://localhost:8080/customers/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: JSON.stringify(formData), // Convert form data to JSON and send it to the backend
    })
      .then((response) => {
        if (response.ok) {
          // If the response is OK, notify the user of successful registration
          alert("Registration successful!");
          window.location.href = "/"; // Redirect to the root route
        } else {
          // If there are errors or invalid responses from the backend, notify the user of the error
          alert("Error during registration.");
        }
      })
      .catch((error) => console.error("Error during registration:", error)); // Handle network or backend errors
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      {/* Form fields to input data */}
      <div className='form'>
        <input
          className='input'
          type='text'
          name='firstName'
          placeholder='First name'
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='text'
          name='lastName'
          placeholder='Last name'
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='text'
          name='country'
          placeholder='Country'
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='text'
          name='city'
          placeholder='City'
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='text'
          name='address'
          placeholder='Address'
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='numeric'
          name='phone'
          placeholder='Phone'
          onChange={handleChange}
          required
        />
        <button type='submit' className='createButton'>
          Create
        </button>{" "}
        {/* Button to submit the form */}
      </div>
    </form>
   
  );
};

export default RegistrationForm;
