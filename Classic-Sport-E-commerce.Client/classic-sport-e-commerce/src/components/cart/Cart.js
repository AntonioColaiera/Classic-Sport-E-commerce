import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/actions/cartAction';
import Modal from 'react-modal';
import './Cart.css'
import CartItems from './CartItems'

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
        contentLabel="Cart"
        className="CartModal"
       
      > <div >
        <button onClick={handleCartClick} className='title'>x</button>
        <h2>Shopping Cart</h2>
        
        </div>
        <CartItems/>

      </Modal>
    </div>
  );
}


