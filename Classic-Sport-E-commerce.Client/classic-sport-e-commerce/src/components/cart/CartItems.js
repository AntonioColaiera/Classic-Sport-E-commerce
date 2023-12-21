import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/actions/cartAction';
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
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Typology: {item.typology}</p>
              <p>Price: ${item.price}</p>
              {/* Aggiungi altre informazioni sull'elemento che desideri mostrare */}
              <button onClick={() => handleRemoveItem(item)}>Rimuovi dal carrello</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
