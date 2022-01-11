import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Zoom from "react-reveal/Zoom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import TextField from '@mui/material/TextField';
import {formatCurrency} from '../../utils';
import PriceComponent from '../common/price';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ProductDetails(props) {
  const { productInfo = {}, open = '', handleCloseFn =()=>{}, addToCartFn=()=>{} } = props 
  const { image='', title='',  price='',description=''} = productInfo || {}
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Zoom>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseFn}
        aria-labelledby="Product Details page"
      >
        <DialogTitle id="ProductDetails">
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>   
            <button className="close-modal" onClick={handleCloseFn}>
                x
            </button> 
        </DialogTitle>
        <DialogContent>
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase sx={{ width: 200, height: 250 }}>
                        <Img alt="complex" src={image} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="h5" component="div">
                            <PriceComponent productInfo={productInfo} />
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {description}
                        </Typography>
                        <Grid container>
                           <Grid item xs={12} md={6} lg={6}>
                                <TextField
                                    required
                                    id="product_qty"
                                    label="Qty"
                                    defaultValue="1"
                                />
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        <Button onClick={()=>addToCartFn(productInfo, document.getElementById("product_qty").value)} variant='contained' autoFocus>
                            AddToCart
                        </Button>
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        {formatCurrency(price)}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
        </Paper>
        </DialogContent>
      </Dialog>
    </Zoom>
  );
}