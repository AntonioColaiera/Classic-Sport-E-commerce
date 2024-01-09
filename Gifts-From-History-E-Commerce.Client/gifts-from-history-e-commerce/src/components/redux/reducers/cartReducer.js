import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY } from '../actions/cartAction';

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
      
      
      case 'LOAD_CART_ITEMS':
  return {
    ...state,
    cartItems: action.payload, // Sovrascrivi gli elementi del carrello con quelli caricati da localStorage
  };

  
    default:
      return state;
  }
};

export default cartReducer;
