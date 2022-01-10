import React, { useEffect } from "react"
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../../components/products"
import { fetchProducts } from "../../store/products/actionCreator"
import Grid from '@mui/material/Grid'
import FilterCompononent from "../../components/products/filter";
import Typography from '@mui/material/Typography';
import ProductDetails from "../../components/productDetails";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CartComponent from "../../components/cart";
import { addItemToCart } from "../../store/cart/actionCreator";

const Home = (props) => {
    const dispatch = useDispatch()
    const productsList = useSelector((state)=>state.products.filteredItems)
    const size = useSelector((state)=>state.products.size) || ''
    const sort = useSelector((state)=>state.products.sort) || ''
    const isOpenCart = useSelector((state)=>state.cart.isCartOpen)
    const [product, setProduct] = React.useState(null)
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        if(size === '' && sort === ''){
            dispatch(fetchProducts())
        }
    },[dispatch])

    const handleAddToCartBtn = (product) => {
        dispatch(addItemToCart(product))
        handleClose()
    }
    const openModal = (product) => {
        setProduct(product);
        setOpen(true)
    };

    const handleClose = () => {
        setProduct(null);
        setOpen(false);
      };

    return(
        <React.Fragment>
            <Fade bottom cascade>
                <Grid container>
                    <Grid item xs={12}>
                       <FilterCompononent />
                    </Grid> 
                </Grid>
                <Grid container spacing={3}>
                    {productsList && productsList.length > 0 ? (
                        <React.Fragment>
                            {productsList.map((product)=> 
                            <ProductCard productInfo={product} key={`product_${product.id}`} addToCartFn={handleAddToCartBtn} openProductFn={openModal} />)}
                        </React.Fragment>
                    ):(
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom component="div" >
                                No Results Found...
                            </Typography>
                        </Grid> 
                    </Grid>
                    )}
                </Grid>  
            </Fade>
            {product && (<ProductDetails productInfo={product} open={open} handleCloseFn={handleClose} addToCartFn={handleAddToCartBtn}/>)}
            <SwipeableDrawer
                anchor='right'
                open={isOpenCart}
                onClose={()=>{dispatch({type:"CLOSE_CART_SECTION", payload:''})}}
                onOpen={()=>{dispatch({type:"OPEN_CART_SECTION", payload:''})}}
            >
                <CartComponent />
            </SwipeableDrawer>            
        </React.Fragment>
    )
}

export default Home