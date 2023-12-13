import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    paymentInfo: '',
  });

  // Function to handle changes in form fields
  const handleChange = event => {
    const { name, value } = event.target;
    // Update state with new data, preserving existing values and adding/modifying new ones
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Sending data to the backend when the form is submitted
    fetch('http://localhost:8080/customers/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify content type as JSON
      },
      body: JSON.stringify(formData), // Convert form data to JSON and send it to the backend
    })
      .then(response => {
        if (response.ok) {
          // If the response is OK, notify the user of successful registration
          alert('Registration successful!');
        } else {
          // If there are errors or invalid responses from the backend, notify the user of the error
          alert('Error during registration.');
        }
      })
      .catch(error => console.error('Error during registration:', error)); // Handle network or backend errors
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields to input data */}
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
      <input type="text" name="paymentInfo" placeholder="Payment Info" onChange={handleChange} />
      <button type="submit">Register</button> {/* Button to submit the form */}
    </form>
  );
};

export default RegistrationForm;
