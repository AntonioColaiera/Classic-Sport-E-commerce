import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import { loadCartItems } from '../actions/cartAction';

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
    // Ignora gli errori di scrittura
  }
};

const persistedState = loadState() || { cart: { cartItems: [] } };

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

// Aggiunto codice per caricare gli elementi del carrello all'avvio dello store
const initialCartItems = store.getState().cart.cartItems;
if (initialCartItems.length === 0) {
  const loadedItems = loadState();
  if (loadedItems) {
    store.dispatch(loadCartItems(loadedItems.cart.cartItems));
  }
}

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
