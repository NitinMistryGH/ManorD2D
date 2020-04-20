import React from 'react';
import {CssBaseline} from '@material-ui/core'
import Footer from './components/Footer/Footer';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme/theme';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Footer />
    </ ThemeProvider>
  );
}

export default App;
