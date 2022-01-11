import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { withStyles } from '@mui/styles';
import styles from '../../styles/productCard'
import {formatCurrency} from '../../utils';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux"
import { addItemToWishlist } from '../../store/wishlist/actionCreator';

const ProductCard = (props) => {
  const dispatch = useDispatch()
  const { productInfo = {}, classes= {}, openProductFn= () => {}, addToCartFn=()=>{} }= props
  const {_id='', image='', title='',  price=''} = productInfo || {}
  
  const isWishlistItem = (product) => {
    const wishlistItems =  JSON.parse(localStorage.getItem("wishlistItems") || "[]")
    let alreadyExists = false
    wishlistItems.forEach((x) => {
        if (x._id === product._id) {
          alreadyExists = true;
        }
      });
    return alreadyExists  
  } 

  const handleWishlist = (ev, product) => {
    dispatch(addItemToWishlist(productInfo,ev.target.checked))
  }
  return (
    <Grid item xs={12} md={3} lg={3}>
        <Card sx={{ maxWidth: 265 }} key={`card_${_id}`} className={classes.root}>
            <a
                href={"#" + _id}
                onClick={() => openProductFn(productInfo)}
            >
                <CardMedia
                    component="img"
                    src={`${image}?w=150&h=100&fit=crop&auto=format`}
                    srcSet={`${image}?w=150&h=100&fit=crop&auto=format&dpr=2 2x`}
                    image={image}
                    alt={title}
                />
            </a>
            <CardContent>
            <CardHeader
                action={
                <IconButton aria-label="add to favorites">
                    {isWishlistItem(productInfo) ? (
                        <Checkbox onClick={(ev)=>handleWishlist(ev, productInfo)} id={`chkbox_${_id}`} defaultChecked icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    ) :
                    (
                        <Checkbox onClick={(ev)=>handleWishlist(ev, productInfo)} id={`chkbox_${_id}`}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    )}
                    
                </IconButton>
                }
                title={<a href={"#" + _id} onClick={() => openProductFn(productInfo)}>{title}</a>}
            />   
            </CardContent>
            <CardActions disableSpacing>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography variant="h5" color="text.secondary">
                    {formatCurrency(price)}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button size='small' onClick={()=> addToCartFn(productInfo)} variant="contained">AddToCart</Button>
                </Grid>
            </Grid>
            </CardActions>
        </Card>
    </Grid>  
    
  );
}

export default withStyles(styles)(ProductCard)