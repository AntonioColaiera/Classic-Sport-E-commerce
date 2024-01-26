import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateQuantity,
} from "../redux/actions/cartAction";
import "./CartItems.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function CartItems() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const checkoutCode = uuidv4();

  useEffect(() => {
    // Load cart items from localStorage
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      dispatch({ type: "LOAD_CART_ITEMS", payload: savedCartItems });
      localStorage.setItem("cartUpdated", "false");
    }

    // Set checkout code in localStorage
    localStorage.setItem("checkoutCode", checkoutCode);
  }, []);

  useEffect(() => {
    // Update checkout code in localStorage when it changes
    localStorage.setItem("checkoutCode", checkoutCode);

    // Set 'cartUpdated' flag to 'true' when cartItems change
    localStorage.setItem("cartUpdated", "true");
  }, [cartItems]);

  // Function to handle removing an item from the cart
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Dispatch action to remove an item from the cart
  };

  // Function to handle increasing the quantity of an item in the cart
  const handleIncrementQuantity = (item) => {
    dispatch(updateQuantity(item, item.quantity + 1)); // Update quantity of the item in the cart
  };

  // Function to handle decreasing the quantity of an item in the cart
  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item, item.quantity - 1)); // Update quantity of the item in the cart
    }
  };

  const calculateTotalPrice = () => {
    if (!Array.isArray(cartItems)) {
      return 0;
    }

    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  return (
    <div>
      {cartItems.length === 0 ? ( // Condition: if the cart is empty
        <div>
          <img src='/assets/cartEmpty.jpg' alt='The cart is empty' />
          <p>The cart is empty</p> {/* Message if the cart is empty */}
        </div>
      ) : (
        // If there are items in the cart
        <div>
          <p>Total Cart Price: ${calculateTotalPrice()}</p>{" "}
          {/* Display total cart price */}
          {cartItems.length > 0 && (
            <Link to={`/checkout/${checkoutCode}`}>
              <button className='proceed-button'>
                PROCEED WITH YOUR ORDER
              </button>
            </Link>
          )}
          {cartItems.map((item) => (
            <div key={item.id} className='item'>
              {" "}
              {/* Individual item in the cart */}
              <img
                src={`/assets/items/${item.image}`}
                loading='lazy'
                alt={item.title}
                className='image'
              />
              <h2>{item.title}</h2>
              <p>Unit Price: ${item.price}</p> {/* Unit price of the item */}
              <p>Quantity: {item.quantity}</p>{" "}
              {/* Quantity of the item in the cart */}
              <button onClick={() => handleDecrementQuantity(item)}>
                -
              </button>{" "}
              {/* Button to decrease quantity */}
              <button onClick={() => handleIncrementQuantity(item)}>
                +
              </button>{" "}
              {/* Button to increase quantity */}
              <p>Total Price: ${item.total}</p>{" "}
              {/* Total price for the item (quantity * unit price) */}
              <button onClick={() => handleRemoveItem(item)}>
                Remove
              </button>{" "}
              {/* Button to remove the item from the cart */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
