import React from 'react';
import { useSelector } from 'react-redux';
import './CheckoutItems.css';

export default function CheckoutItems() {
  // Leggi lo stato cartItems dallo store Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="checkout-section right-section">
      {/* Mostra gli elementi del carrello in CheckoutItems */}
      {cartItems.map((item) => (
        <div key={item.id} className='item'>
          <img
            src={`/assets/items/${item.image}`}
            loading='lazy'
            alt={item.title}
            className='image'
          />
          <h2>{item.title}</h2> {/* Titolo dell'articolo */}
          <p>Unit Price: ${item.price}</p> {/* Prezzo unitario dell'articolo */}
          <p>Quantity: {item.quantity}</p> {/* Quantità dell'articolo */}
        </div>
      ))}
    </div>
  );
}
