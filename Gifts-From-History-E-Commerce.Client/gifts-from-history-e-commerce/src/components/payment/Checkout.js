import React from 'react';
import './Checkout.css'; // Importa il file CSS
import CheckoutItems from './CheckoutItems';
import PaymentDetails from './PaymentDetails';
import Paypal from './Paypal';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; 

const initialOptions = {
  "clientId": "AcTIOxaOFuPeD5K0Nk7eIel4vAwGt0IqcYbfhF7b1H1RitcxuOgdZ94dDSSvZI52W0eQMV9cYUudNUjf", 
  "currency": "EUR" 
};

export default function Checkout({ userDetails }) { // Aggiungi userDetails come prop
  return (
    <div className="checkout-container">
      <div className="checkout-section left-section">
        {/* Prima sezione - 65% */}
        <PayPalScriptProvider options={initialOptions}>
          <Paypal/>
        </PayPalScriptProvider>
        <PaymentDetails userDetails={userDetails} /> {/* Passa userDetails a PaymentDetails */}
      </div>
      <div className="checkout-section right-section">
        {/* Seconda sezione - 35% */}
        <CheckoutItems />
      </div>
    </div>
  );
}
