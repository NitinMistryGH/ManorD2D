import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme/theme';
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ ThemeProvider>
  );
}

export default App;
