import { createTheme } from '@mui/material/styles'

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  }
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "rgb(25, 118, 210)"
    }
  },
  appBar:{
    primary: {
        main: "#012169"
      } 
    },
})
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      main: "#fafafa"
    },
    secondary: {
      main: "#26a27b"
    }
  },
  appBar:{
    primary: {
        main: "#26a27b"
    } 
    },
})

export { darkTheme, lightTheme }