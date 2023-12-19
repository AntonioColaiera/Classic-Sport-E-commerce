import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, addItem, removeItem } from '../redux/actions/cartAction';
import './CartItems.css';

export default function CartItems() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddItem = item => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = item => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <img src="/path/to/your/image.png" alt="Carrello vuoto" />
          <p>Il tuo carrello è vuoto</p>
        </div>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => handleAddItem(item)}>Aggiungi al carrello</button>
            <button onClick={() => handleRemoveItem(item)}>Rimuovi dal carrello</button>
          </div>
        ))
      )}
    </div>
  );
}
