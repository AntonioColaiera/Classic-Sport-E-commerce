import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/actions/cartAction';

export default function Cart() {
  const dispatch = useDispatch();
  const cartOpen = useSelector(state => state.cart.cartOpen); // Accedi al valore corretto

  const handleCartClick = () => {
    console.log('handleCartClick is called');
    dispatch(toggleCart());
  };

  return (
    <div>
      <IoCartOutline onClick={handleCartClick} />
      {cartOpen && <div>Il carrello è aperto!</div>}
    </div>
  );
}
