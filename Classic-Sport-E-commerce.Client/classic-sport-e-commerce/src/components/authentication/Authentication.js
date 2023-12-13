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
  <button onClick={closeModal} style={{position: 'absolute', left: '10px', top: '10px'}}>Close</button>
  <h2>Login</h2>
  <form>
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  <div>
    <Link to="/account/register">
      <button>Register</button>
    </Link>
  </div>
</Modal>

    </div>
  );
};

export default Authentication;
