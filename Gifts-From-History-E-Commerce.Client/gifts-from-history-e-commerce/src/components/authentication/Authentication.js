import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Authentication.css"; 

const Authentication = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
  <form>
    <input type="text" name="username" placeholder="Username" required  className="formLogin"/>
    <input type="password" name="password" placeholder="Password" required className="formLogin" />
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
