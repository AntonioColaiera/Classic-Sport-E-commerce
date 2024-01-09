import React from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css';

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
              />
          <p>{item.price}</p> 
          <p>{item.title}</p> 
          <p>{item.quantity}</p> 
      
        </div>
      ))}
    </div>
  );
}
