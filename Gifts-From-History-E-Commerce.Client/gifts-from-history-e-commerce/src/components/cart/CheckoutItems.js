import React from 'react';
import { useSelector } from 'react-redux';
import './CheckoutItems.css';

export default function CheckoutItems() {
  // Leggi lo stato cartItems dallo store Redux
  const cartItems = useSelector((state) => state.cart.cartItems);


  const calculateTotalPrice = () => {
    if (!Array.isArray(cartItems)) {
      return 0;
    }

    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  return (
    <div className="Checkoutitems">
      {/* Mostra gli elementi del carrello in CheckoutItems */}


      <p>Total Cart Price: ${calculateTotalPrice()}</p>{" "}

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
          <p>Total Price: ${item.total}</p>{" "}
        </div>
      ))}
    </div>
  );
}
