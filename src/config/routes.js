import Home from '../pages/Home'
import Wishlist from '../pages/Wishlist'
export const routes = [
    { 
        pageName: 'Home',
        path:'/',
        component: Home
    },
    { 
        pageName: 'Wishlist',
        path:'/wishlist',
        component: Wishlist
    }
]