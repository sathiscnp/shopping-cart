
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionTypes";

export const addItemToWishlist = (product, isWishlist) => (dispatch, getState) => {
    const wishlistItems = getState().wishlist.wishlistItems.slice();
    let alreadyExists = false;
    wishlistItems.forEach((x) => {
      if (x._id === product._id) {
        alreadyExists = true;
        x.isWishlist = isWishlist
      }
    });
    if (!alreadyExists) {
      wishlistItems.push({ ...product, isWishlist });
    }
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: { wishlistItems },
    });
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  };
  
  export const removeItemFromWishlist = (product) => (dispatch, getState) => {
    const wishlistItems = getState()
      .wishlist.wishlistItems.slice()
      .filter((x) => x._id !== product._id);
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: { wishlistItems } });
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  };