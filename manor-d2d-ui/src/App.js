import React from 'react';

import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';

import theme from './theme/theme';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import PageWrapper from "./components/PageWrapper/PageWrapper";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Banner currentPage={{title: "Database of Streets Visited", link: "/", breadcrumb: "Sankirtana Forever"}}/>
      <PageWrapper>
        <h1>Content</h1>
      </PageWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
