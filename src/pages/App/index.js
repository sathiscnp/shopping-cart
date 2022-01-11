import Layout from '../Layout'
import '../../styles/App.css';
import { darkTheme, lightTheme } from '../../styles/theme';
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux"
function App() {
  const isDarkMode = useSelector((state)=> state.cart.isDarkMode)
  return (
    <div className="App">
        <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
    </div>
  );
}

export default App;
