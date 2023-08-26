import { React, useState } from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import { ThemeProvider, createTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { Brightness7 } from '@mui/icons-material';
import { Brightness4 } from '@mui/icons-material';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : 'light'
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <IconButton id='dark-mode' onClick={() => {setDarkMode(!darkMode)}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Router>
            <Header />
            <Routes>
              <Route path="/" exact element={<ProductListing />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route>404 Not Found!</Route>
            </Routes>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
