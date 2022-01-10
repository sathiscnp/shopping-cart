import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortProducts, filterProducts, searchProducts } from "../../store/products/actionCreator";
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from "../../utils";

const FilterCompononent = () => {
    const dispatch = useDispatch()
    const filtertedProducts = useSelector((state)=>state.products.filteredItems) || []
    const productsList = useSelector((state)=>state.products.items) || []
    const size = useSelector((state)=>state.products.size)
    const sort = useSelector((state)=>state.products.sort)
    const handleSearch = debounce((ev) => {
        const products = (filtertedProducts.length > 0) ? filtertedProducts : productsList;
        dispatch(searchProducts(products, ev.target.value, productsList))
    }, 100)
    //const optimizedFn = useCallback(debounce(handleSearch, 1000), []);
    return(
        <React.Fragment>
           {filtertedProducts && (
               <Grid
               container
               direction="row"
               justifyContent="space-between"
               alignItems="center"
               className="filterSection"
             >
                   <Grid item xs={12} md={4} lg={4}>
                        <Typography variant="h5" gutterBottom component="div" className='filterTitle'>
                            {filtertedProducts.length} Products
                        </Typography>
                       
                   </Grid>
                   <Grid item xs={12} md={4} lg={4}>
                   <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Products"
                            onKeyPress={(e) => handleSearch(e)}
                            inputProps={{ 'aria-label': 'search products' }}
                        />
                        <IconButton type="button" onClick={(e) =>
                                dispatch(searchProducts(
                                    filtertedProducts,
                                    e.target.value
                                ))} sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                   </Grid>
                   <Grid item xs={12} md={1} lg={1}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="productSort">Order</InputLabel>
                            <Select
                            labelId="productSort"
                            id="productSort"
                            value={sort}
                            label="Order"
                            onChange={(e) =>
                                dispatch(sortProducts(
                                    filtertedProducts,
                                    e.target.value
                                ))}
                            >
                            <MenuItem value='latest'>Latest</MenuItem>
                            <MenuItem value='lowest'>Lowest</MenuItem>
                            <MenuItem value='highest'>Highest</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                   <Grid item xs={12} md={2} lg={2}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="productSize">Filter</InputLabel>
                            <Select
                            labelId="productSize"
                            id="productSize"
                            value={size}
                            label="Filter"
                            onChange={(e) =>
                                dispatch(filterProducts(productsList, e.target.value))}
                            >
                            <MenuItem value=''>ALL</MenuItem>
                            <MenuItem value='XS'>XS</MenuItem>
                            <MenuItem value='S'>S</MenuItem>
                            <MenuItem value='M'>M</MenuItem>
                            <MenuItem value='L'>L</MenuItem>
                            <MenuItem value='XL'>XL</MenuItem>
                            <MenuItem value='XXL'>XXL</MenuItem>
                            </Select>
                        </FormControl>
                   </Grid>
               </Grid>
           )}
        </React.Fragment>
    )
}

export default FilterCompononent