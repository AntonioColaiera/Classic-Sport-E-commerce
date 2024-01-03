import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/cartAction';

const initialState = {
  cartOpen: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case ADD_ITEM: {
      // Find the index of the existing item in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // Update the quantity and total price of the existing item
        const updatedItem = {
          ...state.cartItems[existingItemIndex],
          quantity: state.cartItems[existingItemIndex].quantity + action.payload.quantity,
          total: (state.cartItems[existingItemIndex].quantity + action.payload.quantity) * state.cartItems[existingItemIndex].price,
        };

        // Replace the existing item with the updated item
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex] = updatedItem;

        return { ...state, cartItems: updatedItems };
      } else {
        // Add a new item to the cart
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity,
          total: action.payload.quantity * action.payload.price,
        };

        return { ...state, cartItems: [...state.cartItems, newItem] };
      }
    }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case INCREASE_QUANTITY: {
      // Find the index of the existing item in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Update the quantity of the existing item
      const updatedItem = {
        ...state.cartItems[existingItemIndex],
        quantity: state.cartItems[existingItemIndex].quantity + 1,
      };

      // Replace the existing item with the updated item
      const updatedItems = [...state.cartItems];
      updatedItems[existingItemIndex] = updatedItem;

      return { ...state, cartItems: updatedItems };
    }
    case DECREASE_QUANTITY: {
      // Find the index of the existing item in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Update the quantity of the existing item
      const updatedItem = {
        ...state.cartItems[existingItemIndex],
        quantity: state.cartItems[existingItemIndex].quantity - 1,
      };

      // Replace the existing item with the updated item
      const updatedItems = [...state.cartItems];
      updatedItems[existingItemIndex] = updatedItem;

      return { ...state, cartItems: updatedItems };
    }
    default:
      return state;
  }
};

export default cartReducer;
