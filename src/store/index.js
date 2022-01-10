import { combineReducers } from 'redux'
import {default as products} from '../store/products/reducer'
import { default as cart } from "../store/cart/reducer"; 
import { default as wishlist } from "../store/wishlist/reducer"; 
const rootReducer = combineReducers({
    products, 
    cart,
    wishlist,
})

export default rootReducer