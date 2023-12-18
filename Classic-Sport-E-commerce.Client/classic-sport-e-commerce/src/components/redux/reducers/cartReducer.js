import { TOGGLE_CART } from '../actions/cartAction';

const initialState = {
  cartOpen: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      return state;
  }
};

export default cartReducer;
