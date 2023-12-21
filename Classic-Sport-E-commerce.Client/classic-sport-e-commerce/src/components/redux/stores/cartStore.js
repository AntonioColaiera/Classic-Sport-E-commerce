import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';

// Carica lo stato dal localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    if (serializedState === null) {
      return undefined;
    }
    return { cart: { cartItems: JSON.parse(serializedState) } };
  } catch (err) {
    return undefined;
  }
};

// Salva lo stato nel localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart.cartItems);
    localStorage.setItem('cartItems', serializedState);
  } catch {
    // ignora gli errori di scrittura
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
