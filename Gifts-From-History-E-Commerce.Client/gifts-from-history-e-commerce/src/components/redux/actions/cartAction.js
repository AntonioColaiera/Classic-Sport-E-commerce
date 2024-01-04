export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'; 

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

// Nuovo creatore di azioni per aggiornare la quantità
export const updateQuantity = (item, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: {
    ...item,
    quantity: quantity,
    total: item.price * quantity, // Aggiorna il prezzo totale qui
  }
});
