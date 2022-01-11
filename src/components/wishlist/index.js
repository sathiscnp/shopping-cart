import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { withStyles } from '@mui/styles';
import styles from '../../styles/wishlist'
import Grid from '@mui/material/Grid'
import Fade from "react-reveal/Fade";
import {formatCurrency} from "../../utils";
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import { removeItemFromWishlist, reorderWishlistItems } from "../../store/wishlist/actionCreator";
import { addItemToCart } from "../../store/cart/actionCreator";
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import PriceComponent from "../common/price";

const WishlistComponent = (props) => {
    const { classes={} } = props
    const dispatch = useDispatch()
    const wishlistItems = useSelector((state)=>state.wishlist.wishlistItems)
    const handleRLDDChange = (newItems) => {
        dispatch(reorderWishlistItems(newItems));
    }

    return(
        <React.Fragment >
          <Grid className={classes.root}>
              <Grid item xs={12}>
                {wishlistItems.length === 0 ? (
                    <div className={classes.cartHeaderText}>Your wishlist is empty</div>
                ) : (
                    <div className={classes.cartHeaderText}>
                        You have {wishlistItems.length} items in your wishlist{" "}
                    </div>
                )}
                <Divider />
              </Grid>
                {wishlistItems.length > 0 && (
                <Grid item xs={12}>
                    <Fade left cascade>
                    <List
                            sx={{
                                width: '100%',
                                bgcolor: 'background.paper',
                            }}
                            >
                    <RLDD
                        items={wishlistItems}
                        itemRenderer={(item) => {
                            return (
                            <React.Fragment>
                                <ListItem className="item">
                                    <ListItemAvatar>
                                    <ButtonBase sx={{ width: 128, height: 128 }}>
                                        <img width="100" height="100" alt={item.title} src={item.image} />
                                    </ButtonBase>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.title} secondary={<PriceComponent productInfo={item}/>} />
                                    <ListItemText >
                                        <Button
                                        className="button"
                                        color="secondary"
                                        onClick={() =>dispatch(removeItemFromWishlist(item, false))   }
                                        >
                                        Remove
                                        </Button>
                                        <Button
                                        className="button"
                                        color="secondary"
                                        onClick={() =>dispatch(addItemToCart(item))   }
                                        >
                                        AddToCart
                                        </Button>
                                    </ListItemText>
                                </ListItem>
                                <Divider  />
                            </React.Fragment>
                            );
                        }}
                        onChange={handleRLDDChange}
                    />
                  </List>
                  </Fade>
                  </Grid>
                )}
          </Grid>
        </React.Fragment>
    )
}

export default withStyles(styles)(WishlistComponent) 