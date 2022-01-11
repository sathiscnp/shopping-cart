import { formatCurrency } from "../../../utils"
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";

const PriceComponent = (props) => {
    const { productInfo = {}} = props
    const { price='', discountPrice=''} = productInfo
    const isFlashSaleEnd = useSelector((state)=>state.cart.isFlashSaleEnd)
    return(
        <>
            {isFlashSaleEnd ? (
                <>
                    <Typography variant="h6" component="span" >
                        {formatCurrency(price)}  {''} 
                    </Typography>
                </>
            ):(
                <>
                    <Typography variant="h6" component="span" >
                        {formatCurrency(discountPrice)}  {''} 
                    </Typography>
                    <Typography variant="subtitle2" component="span" style={{textDecoration:'line-through', marginRight:'10px', fontWeight:500}}>
                        {formatCurrency(price)}
                    </Typography>
                </>
            )}
        </>
    )
}

export default PriceComponent