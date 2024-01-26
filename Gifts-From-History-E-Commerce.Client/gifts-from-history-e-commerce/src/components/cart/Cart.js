import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/actions/cartAction';
import Modal from 'react-modal';
import './Cart.css'
import CartItems from './CartItems'

// Set the app element for accessibility purposes
Modal.setAppElement('#root'); 

export default function Cart() {
  const dispatch = useDispatch();
  const cartOpen = useSelector(state => state.cart.cartOpen);

  // Log the current state of the cart (open or closed)
  console.log('cartOpen:', cartOpen);

  // Handle click event for opening/closing the cart
  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <div >
      {/* Icon to toggle the cart visibility */}
      <IoCartOutline onClick={handleCartClick} />
      {/* Modal component for displaying the cart */}
      <Modal
        isOpen={cartOpen}
        onRequestClose={handleCartClick}
        contentLabel="Cart"
        className="CartModal"
      >
        <div>
          {/* Button to close the cart */}
          <button onClick={handleCartClick} className='title'>x</button>
          <h2>Shopping Cart</h2>
        </div>
        {/* Component to render cart items */}
        <CartItems/>
      </Modal>
    </div>
  );
}
