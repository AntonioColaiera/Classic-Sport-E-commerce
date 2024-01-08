export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'; 

export const toggleCart = () => {
  console.log('Tentativo di cambiare lo stato del carrello.');
  return {
    type: TOGGLE_CART,
  };
};

export const addItem = item => {
  console.log('Elemento aggiunto:', item);
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  console.log('Elemento rimosso:', item);
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

export const updateQuantity = (item, quantity) => {
  console.log('Quantità aggiornata:', item, quantity);
  return {
    type: UPDATE_QUANTITY,
    payload: {
      ...item,
      quantity: quantity,
      total: item.price * quantity,
    }
  };
};

export const loadCartItems = (items) => {
  console.log('Caricamento elementi del carrello:', items);
  return {
    type: 'LOAD_CART_ITEMS',
    payload: items,
  };
};
