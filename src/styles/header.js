const styles = () => ({
    root:{
        flexGrow:1,
        display:'flex',
        fontSize:'12px',
        '& .MuiToolbar-root':{
            minHeight:'50px'
        },
        '& a':{
            textDecoration:"none",
            color:'#fff'
        }
    },
    
    appBar:{
        backgroundColor:'#012169 !important'
    }
})

export default styles