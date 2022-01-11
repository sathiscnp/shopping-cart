import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { withStyles } from '@mui/styles';
import styles from '../../styles/cart'
import Grid from '@mui/material/Grid'
import Fade from "react-reveal/Fade";
import {formatCurrency} from "../../utils";
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import { removeItemFromCart } from "../../store/cart/actionCreator";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';

const CartComponent = (props) => {
    const { classes={} } = props
    const dispatch = useDispatch()
    const cartItems = useSelector((state)=>state.cart.cartItems)
    return(
        <React.Fragment >
          <Grid className={classes.root}>
              <Grid item xs={12}>
                {cartItems.length === 0 ? (
                    <div className={classes.cartHeaderText}>Cart is empty</div>
                ) : (
                    <div className={classes.cartHeaderText}>
                        You have {cartItems.length} items in the cart{" "}
                    </div>
                )}
                <Divider />
              </Grid>
                {cartItems.length > 0 && (
                <Grid item xs={12}>
                    <Fade left cascade>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                            }}
                            >
                        {cartItems.map((item) => (
                        <React.Fragment>
                            <ListItem>
                                <ListItemAvatar>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <img width="100" height="100" alt={item.title} src={item.image} />
                                </ButtonBase>
                                </ListItemAvatar>
                                <ListItemText primary={item.title} secondary={`${formatCurrency(item.price)} x ${item.count}`} />
                                <ListItemText >
                                    <Button
                                    className="button"
                                    onClick={() =>dispatch(removeItemFromCart(item))   }
                                    >
                                    Remove
                                    </Button>
                                </ListItemText>
                            </ListItem>
                            <Divider  />
                        </React.Fragment>
                    ))}
                  </List>
                  {cartItems.length !== 0 && (
                      <Grid container spacing={3}>
                      <Grid item xs={12} md={6} lg={6}>
                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.cartTotalText}>
                        Total:{" "}
                            {formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}
                        </Typography>
                      </Grid>
                      <Grid item md={6} lg={6}>
                      <Button style={{width:'95%'}} variant="contained"
                                onClick={() => {
                                dispatch({type:'CLOSE_CART_SECTION', payload:''})
                                }}
                            className="button primary"
                            >
                                Checkout
                            </Button>
                      </Grid>
                      
                    </Grid>
                      
                  )}
                  </Fade>
                  </Grid>
                )}
                
          </Grid>
        </React.Fragment>
    )
}

export default withStyles(styles)(CartComponent) 