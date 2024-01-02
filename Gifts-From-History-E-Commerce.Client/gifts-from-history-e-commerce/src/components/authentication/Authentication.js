import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Authentication.css";
import { Login } from "./Login";

const Authentication = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [userDetails, setUserDetails] = useState(null);// Nuovo stato per tracciare l'autenticazione

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const data = await Login(email, password);
      console.log(data);
      setIsAuthenticated(true); // Set authentication to true
      setUserDetails(data); // Memorizza i dettagli dell'utente
      localStorage.setItem("isAuthenticated", "true"); // Store authentication in localStorage
      closeModal(); // Close the modal
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set authentication to false
    localStorage.removeItem("isAuthenticated"); // Remove authentication from localStorage
  };

  // When the component is mounted, check the authentication state in localStorage
  useEffect(() => {
    const storedAuthentication = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuthentication === "true");
  }, []);

  return (
    <div >
      <FaUser onClick={openModal} />
      {isAuthenticated && userDetails && (
        <span>{`${userDetails.firstName} ${userDetails.lastName}`}</span>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='react-modal-content'
        overlayClassName='react-modal-overlay'
      >
        {isAuthenticated ? (
          <div className="centered-logOut"  >
            <h2 >You are logged in!</h2>
            <button onClick={handleLogout} className="logOut">Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={closeModal} className='closeButton'>
              Close
            </button>
            <h2>Login</h2>
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
              <button type='submit' className='signIn'>
                Sign In
              </button>
            </form>
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
