const styles = (theme) => ({
    root:{
        flexGrow:1,
    },
    footerSection: {
        padding:'5px',
        textAlign:'left',
        borderRadius:'0px',
        height:'40px',
        backgroundColor:theme.appBar.primary.main,
        opacity:'1',
        bottom: 0,
        left:'auto',
        right: 0,
        position:'fixed',
        zIndex:'1'
    },
    footerLabelTxt:{
        textAlign:'left',
        fontSize:'12px',
        letterSpacing: '0',
        padding:'5px',
        color:'#ffffff',
        opacity:'1'
    },
})

export default styles