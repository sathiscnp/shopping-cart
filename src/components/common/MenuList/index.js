import * as React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MenuListComponent = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart.cartItems)
    
    return (
        <>
        <Link href="/wishlist"><Button id="wishlist">Wishlist</Button> </Link>
         
        <IconButton id="cart" onClick={()=>dispatch({type:'OPEN_CART_SECTION', payload:''})}>
            <Badge color="primary" badgeContent={cartItems.length}>
                <ShoppingCartIcon style={{color:"#FFF"}}/>
            </Badge>
        </IconButton>  
        </>
    )
}

export default MenuListComponent