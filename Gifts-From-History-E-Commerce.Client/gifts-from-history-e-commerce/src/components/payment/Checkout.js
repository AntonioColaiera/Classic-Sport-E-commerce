import React from 'react';
import './Checkout.css';
import CheckoutItems from './CheckoutItems';
import PaymentDetails from './PaymentDetails';
import Paypal from './Paypal';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; 

// Initial options for PayPal integration
const initialOptions = {
  "clientId": "AcTIOxaOFuPeD5K0Nk7eIel4vAwGt0IqcYbfhF7b1H1RitcxuOgdZ94dDSSvZI52W0eQMV9cYUudNUjf", 
  "currency": "EUR" 
};

export default function Checkout({ userDetails }) { // Add userDetails as prop
  return (
    <div className="checkout-container">
      <div className="checkout-section left-section">
        {/* First section - 65% */}
        <PayPalScriptProvider options={initialOptions}>
          <Paypal/>
        </PayPalScriptProvider>
        <PaymentDetails userDetails={userDetails} /> {/* Pass userDetails to PaymentDetails */}
      </div>
      <div className="checkout-section right-section">
        {/* Second section - 35% */}
        <CheckoutItems />
      </div>
    </div>
  );
}
