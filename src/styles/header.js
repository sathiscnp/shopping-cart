const styles = (theme) => ({
    root:{
        flexGrow:1,
        display:'flex',
        fontSize:'12px',
        '& .MuiToolbar-root':{
            minHeight:'50px'
        },
        '& a':{
            textDecoration:"none",
            color: theme.appBar.primary
        }
    },
    timerText:{
        color: theme.appBar.primary
    },
    appBar:{
        backgroundColor:`${theme.appBar.primary.main} !important`
    }
})

export default styles