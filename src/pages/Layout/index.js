import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../config/routes'
import MenuListComponent from '../../components/common/MenuList';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CartComponent from "../../components/cart";
import { useDispatch, useSelector } from "react-redux"

const Layout = () => {
    const isOpenCart = useSelector((state)=>state.cart.isCartOpen)
    const dispatch = useDispatch()
  return (
      <div className="grid-container">
        <Header MenuComponent={<MenuListComponent/>}/>
        <main>
        <Routes>
            {routes.map(route => (
                <Route exact key={route.path} path={route.path} element={<route.component />} />
            ))}
        </Routes>
        <SwipeableDrawer
                anchor='right'
                open={isOpenCart}
                onClose={()=>{dispatch({type:"CLOSE_CART_SECTION", payload:''})}}
                onOpen={()=>{dispatch({type:"OPEN_CART_SECTION", payload:''})}}
            >
            <CartComponent />
        </SwipeableDrawer>    
        </main>
        <Footer/>
      </div>
  );
}

export default Layout;
