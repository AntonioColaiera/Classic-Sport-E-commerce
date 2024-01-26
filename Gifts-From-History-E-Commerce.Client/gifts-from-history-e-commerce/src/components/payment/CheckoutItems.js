import React from 'react';
import { useSelector } from 'react-redux';
import './CheckoutItems.css';

// Function to calculate the total price of items in the cart
export const calculateTotalPrice = (cartItems) => {
  if (!Array.isArray(cartItems)) {
    return 0;
  }

  return cartItems.reduce((total, item) => total + item.total, 0);
};

export default function CheckoutItems() {
  // Read the cartItems state from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="Checkoutitems">
      {/* Display cart items in CheckoutItems */}
      <p>Total Cart Price: ${calculateTotalPrice(cartItems)}</p>{" "}
      {cartItems.map((item) => (
        <div key={item.id} className='item'>
          <img
            src={`/assets/items/${item.image}`}
            loading='lazy'
            alt={item.title}
            className='image'
          />
          <h2>{item.title}</h2> {/* Item title */}
          <p>Unit Price: ${item.price}</p> {/* Unit price of the item */}
          <p>Quantity: {item.quantity}</p> {/* Quantity of the item */}
          <p>Total Price: ${item.total}</p>{" "} {/* Total price for the item */}
        </div>
      ))}
    </div>
  );
}
