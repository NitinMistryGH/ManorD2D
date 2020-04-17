import React from 'react';
import logo from './logo.svg';
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import theme from './theme/theme';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Footer />
    </ ThemeProvider>
  );
}

export default App;
