import { ADD_TO_CART, REMOVE_FROM_CART, OPEN_CART_SECTION, CLOSE_CART_SECTION, SET_DARKMODE_THEME,END_FLASH_SALE } from "./actionTypes";

const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
   isCartOpen: false , 
   isDarkMode:  false,
   isFlashSaleEnd: false,
  },
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
    case SET_DARKMODE_THEME:
      return { ...state, isDarkMode: Boolean(action.payload) };
    case END_FLASH_SALE:
      return { ...state, isFlashSaleEnd: Boolean(action.payload) };   
    default:
      return state;
  }
};

export default cartReducer