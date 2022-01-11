import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,REORDER_WISHLIST_ITEMS } from "./actionTypes";

const wishlistReducer = (
  state = { wishlistItems: JSON.parse(localStorage.getItem("wishlistItems") || "[]")},
  action
) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return { wishlistItems: action.payload.wishlistItems};
    case REMOVE_FROM_WISHLIST:
      return { wishlistItems: action.payload.wishlistItems };
    case REORDER_WISHLIST_ITEMS:
      return { wishlistItems: action.payload.wishlistItems };  
    default:
      return state;
  }
};

export default wishlistReducer