import React from 'react';
import './Checkout.css'; // Importa il file CSS
import CheckoutItems from './CheckoutItems';


export default function Checkout() {
  return (
    <div className="checkout-container">
      <div className="checkout-section left-section">
        {/* Prima sezione - 65% */}
        Left Section
      </div>
      <div className="checkout-section right-section">
        {/* Seconda sezione - 35% */}
        <CheckoutItems />
      </div>
    </div>
  );
}
