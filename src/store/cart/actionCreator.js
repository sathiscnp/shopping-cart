
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addItemToCart = (product, qty) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((x) => {
      if (x._id === product._id) {
        alreadyExists = true;
        if(qty){
            x.count = x.count + parseInt(qty) 
        } else{ x.count++}
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...product, count: 1 });
    }
    dispatch({
      type: ADD_TO_CART,
      payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  export const removeItemFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState()
      .cart.cartItems.slice()
      .filter((x) => x._id !== product._id);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };