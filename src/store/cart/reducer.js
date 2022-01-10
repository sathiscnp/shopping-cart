import { ADD_TO_CART, REMOVE_FROM_CART, OPEN_CART_SECTION, CLOSE_CART_SECTION } from "./actionTypes";

const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"), isCartOpen: false },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems, isCartOpen: true};
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems, isCartOpen: true };
    case OPEN_CART_SECTION:
      return { ...state, isCartOpen: true };
    case CLOSE_CART_SECTION:
        return { ...state, isCartOpen: false };
    default:
      return state;
  }
};

export default cartReducer