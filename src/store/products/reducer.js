import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_SEARCHTERM,
  } from "./actionTypes";

const initialState = {
    items: [],
    filteredItems: [],
    size: '',
    sort:'',
    searchTerm:''
}  
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_PRODUCTS_BY_SIZE:
        return {
          ...state,
          size: action.payload.size,
          filteredItems: action.payload.items,
        };
      case ORDER_PRODUCTS_BY_PRICE:
        return {
          ...state,
          sort: action.payload.sort,
          filteredItems: action.payload.items,
        };
      case FILTER_PRODUCTS_BY_SEARCHTERM:
        return {
          ...state,
          searchTerm: action.payload.searchTerm,
          filteredItems: action.payload.items,
        };  
      case FETCH_PRODUCTS:
        return { items: action.payload.products, filteredItems: action.payload.products };
      default:
        return state;
    }
  };

  export default productsReducer