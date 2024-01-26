import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY } from '../actions/cartAction';

// Initial state of the cart
const initialState = {
  cartOpen: false, // Cart visibility
  cartItems: [], // Array to hold cart items
};

// Reducer function to manage cart state
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Toggle the cart visibility
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    // Add an item to the cart
    case ADD_ITEM: {
      // Check if the item already exists in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // If the item exists, update its quantity and total price
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
        // If the item doesn't exist, add it to the cart
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity,
          total: action.payload.quantity * action.payload.price,
        };

        return { ...state, cartItems: [...state.cartItems, newItem] };
      }
    }
    // Remove an item from the cart
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    // Update the quantity of an item in the cart
    case UPDATE_QUANTITY: {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
            total: item.price * action.payload.quantity,
          };
        }
        return item;
      });
    
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    // Load cart items from storage
    case 'LOAD_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload, // Overwrite cart items with those loaded from localStorage
      };
    // Default case: return current state if action type is not recognized
    default:
      return state;
  }
};

export default cartReducer;
