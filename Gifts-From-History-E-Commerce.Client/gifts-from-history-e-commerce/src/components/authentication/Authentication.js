import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Authentication.css"; 
import { Login } from "./Login";

const Authentication = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // Here you can handle the data returned from the Login component
      alert("Authentication successful!"); // Show a confirmation message
      closeModal(); // Close the modal
    } catch (error) {
      console.error(error);
      alert("Authentication failed"); // Show an error message
    }
  };
  
  return (
    <div>
      <FaUser onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <button onClick={closeModal} className="closeButton">Close</button>
        <h2>Login</h2>
        <form onSubmit={handleSignIn}>
          <input type="text" name="email" placeholder="Email" required  className="formLogin" onChange={e => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="Password" required className="formLogin" onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="signIn">Sign In</button>
        </form>
        <div className="links">
          <Link to="/account/register">
            <p>Create your account</p>
          </Link>
          <Link>Recover your password</Link>
        </div>
      </Modal>
    </div>
  );
};

export default Authentication;
