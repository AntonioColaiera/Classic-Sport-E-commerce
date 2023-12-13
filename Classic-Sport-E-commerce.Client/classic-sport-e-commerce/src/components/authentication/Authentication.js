import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "react-modal";
import "./Authentication.css"; 
import RegistrationForm from "./Signin";

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
        <h2>Login</h2>
        <button onClick={closeModal}>Close</button>
        <div>
          <RegistrationForm />
        </div>
      </Modal>
    </div>
  );
};

export default Authentication;
