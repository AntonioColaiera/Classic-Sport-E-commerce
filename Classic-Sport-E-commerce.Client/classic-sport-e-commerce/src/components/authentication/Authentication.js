import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "react-modal";
import "../../styles/Authentication.css"; // Importa il file CSS appena creato

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
          {/* Il tuo form di login/registrazione va qui */}
        </div>
      </Modal>
    </div>
  );
};

export default Authentication;
