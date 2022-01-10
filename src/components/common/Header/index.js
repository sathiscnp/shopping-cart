import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import styles from '../../../styles/header'
import Link from '@mui/material/Link';

const Header = (props) => {
    const { classes={}, MenuComponent='' } = props
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'left' }}>
          <Link href="/"> Lowe's Shopping Cart</Link>
          </Typography>
          <Typography  component="div" sx={{ flexGrow: 1, textAlign:'right' }}>
            {MenuComponent}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withStyles(styles)(Header)