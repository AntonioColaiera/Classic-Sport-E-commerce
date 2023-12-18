import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/actions/cartAction';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Questa riga è necessaria per l'accessibilità

export default function Cart() {
  const dispatch = useDispatch();
  const cartOpen = useSelector(state => state.cart.cartOpen);

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <div>
      <IoCartOutline onClick={handleCartClick} />
      <Modal
        isOpen={cartOpen}
        onRequestClose={handleCartClick}
        contentLabel="Carrello"
      >
        <h2>Il carrello</h2>
        <button onClick={handleCartClick}>Chiudi</button>
        <div>Il carrello è aperto!</div>
      </Modal>
    </div>
  );
}
