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

  // Funzione per calcolare il prezzo totale
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
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
          <p>Total Cart Price: ${calculateTotalPrice()}</p> 
          {cartItems.map(item => (
            <div key={item.id} className='item'>
              <img
                src={require(`../../assets/items/${item.image}`)} 
                loading='lazy'
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>Typology: {item.typology}</p>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.total}</p>
              <button onClick={() => handleRemoveItem(item)}>Rimuovi dal carrello</button>
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
};

