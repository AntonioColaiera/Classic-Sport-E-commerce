import React, { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { calculateTotalPrice } from "./CheckoutItems";

const Paypal = () => {
  // State and reducer for PayPal script loading
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency); // State for currency selection
  const cartItems = useSelector((state) => state.cart.cartItems); // Get cart items from Redux store

  // Function to handle currency change
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    // Update options with the selected currency
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  // Function to create the PayPal order
  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: calculateTotalPrice(cartItems).toString(), // Calculate total price of items in the cart
          },
        },
      ],
    });
  };

  // Function to handle order approval
  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  return (
    <div className='checkout'>
      {/* Display loading message while PayPal script is pending */}
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          {/* Select currency */}
          <select value={currency} onChange={onCurrencyChange}>
            <option value='EUR'>💶 Euro</option>
            <option value='USD'>💵 USD</option>
          </select>
          {/* Render PayPal buttons */}
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
  );
};

export default Paypal;
