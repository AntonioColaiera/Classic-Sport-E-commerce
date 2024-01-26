import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import { loadCartItems } from '../actions/cartAction';

// Load state from localStorage
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

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart.cartItems);
    localStorage.setItem('cartItems', serializedState);
  } catch {
    // Ignore write errors
  }
};

const persistedState = loadState() || { cart: { cartItems: [] } };

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

// Added code to load cart items on store initialization
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
