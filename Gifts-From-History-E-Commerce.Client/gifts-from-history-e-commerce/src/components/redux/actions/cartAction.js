// Action types
export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'; 

// Action creators

// Toggle the cart visibility
export const toggleCart = () => {
  console.log('Attempting to toggle the cart state.');
  return {
    type: TOGGLE_CART,
  };
};

// Add an item to the cart
export const addItem = item => {
  console.log('Item added:', item);
  return {
    type: ADD_ITEM,
    payload: item
  };
};

// Remove an item from the cart
export const removeItem = item => {
  console.log('Item removed:', item);
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

// Update the quantity of an item in the cart
export const updateQuantity = (item, quantity) => {
  console.log('Quantity updated:', item, quantity);
  return {
    type: UPDATE_QUANTITY,
    payload: {
      ...item,
      quantity: quantity,
      total: item.price * quantity,
    }
  };
};

// Load cart items from storage
export const loadCartItems = (items) => {
  console.log('Loading cart items:', items);
  return {
    type: 'LOAD_CART_ITEMS',
    payload: items,
  };
};
