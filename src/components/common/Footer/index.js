import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import styles from '../../../styles/footer'

const Footer = (props) => {
    const { classes={} } = props
    return(
    <Grid container className={classes.footerSection}>
        <Grid item xs>
            <div className={classes.footerLabelTxt}>&copy; {new Date().getFullYear()} Company Brand Inc.</div>
        </Grid>
    </Grid>)
}

export default withStyles(styles)(Footer)
