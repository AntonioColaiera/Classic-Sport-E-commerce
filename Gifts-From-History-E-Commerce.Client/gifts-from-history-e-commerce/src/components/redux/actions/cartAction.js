export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'; 
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'; 

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});

// Nuovo creatore di azioni per aumentare la quantità
export const increaseQuantity = item => ({
  type: INCREASE_QUANTITY,
  payload: item
});

// Nuovo creatore di azioni per diminuire la quantità
export const decreaseQuantity = item => ({
  type: DECREASE_QUANTITY,
  payload: item
});
