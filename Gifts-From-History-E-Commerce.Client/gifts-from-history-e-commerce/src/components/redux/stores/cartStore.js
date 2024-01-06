import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';

// Carica lo stato dal localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Salva lo stato nel localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartItems', serializedState);
  } catch {
    // ignora gli errori di scrittura
  }
};

const persistedState = loadState() || { cartItems: [] };

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState().cart.cartItems);
});

export default store;
