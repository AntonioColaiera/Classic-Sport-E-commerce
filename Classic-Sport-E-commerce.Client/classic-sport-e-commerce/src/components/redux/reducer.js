const initialState = {
    products: [],
    totalPrice: 0,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          products: [...state.products, action.product],
          totalPrice: state.totalPrice + action.product.price,
        };
      case "REMOVE_PRODUCT":
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.productId),
          totalPrice: state.totalPrice - action.product.price,
        };
      default:
        return state;
    }
  };
  
  export default reducer;