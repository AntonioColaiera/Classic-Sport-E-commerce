import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Authentication.css";
import { Login } from "./Login";

const Authentication = () => {
  // State variables to manage modal visibility, user input, and authentication status
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  // Open and close modal functions
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Attempt to sign in with provided email and password
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const data = await Login(email, password);
      setIsAuthenticated(true);
      setUserDetails(data);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userDetails", JSON.stringify(data));
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  // Handle logout by resetting authentication status and removing user details from localStorage
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  // Check authentication status and retrieve user details from localStorage on component mount
  useEffect(() => {
    const storedAuthentication = localStorage.getItem("isAuthenticated");
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    setIsAuthenticated(storedAuthentication === "true");
    setUserDetails(storedUserDetails);
  }, []);

  return (
    <div>
      {/* Clickable user icon to open the authentication modal */}
      <FaUser onClick={openModal} />
      {/* Display user details if authenticated */}
      {isAuthenticated && userDetails && (
        <span className="userdetails">{`${userDetails.firstName} ${userDetails.lastName}`}</span>
      )}

      {/* Modal component for authentication */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='react-modal-content'
        overlayClassName='react-modal-overlay'
      >
        {/* Display different content based on authentication status */}
        {isAuthenticated ? (
          <div className='centered-logOut'>
            <h2>You are logged in!</h2>
            {/* Button to handle logout */}
            <button onClick={handleLogout} className='logOut'>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* Button to close the modal */}
            <button onClick={closeModal} className='closeButton'>
              Close
            </button>
            <h2>Login</h2>
            {/* Form for user login */}
            <form onSubmit={handleSignIn}>
              <input
                type='text'
                name='email'
                placeholder='Email'
                required
                className='formLogin'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
                className='formLogin'
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Button to submit login credentials */}
              <button type='submit' className='signIn'>
                Sign In
              </button>
            </form>
            {/* Links for account registration and password recovery */}
            <div className='links'>
              <Link to='/account/register'>
                <p>Create your account</p>
              </Link>
              <Link>Recover your password</Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Authentication;
