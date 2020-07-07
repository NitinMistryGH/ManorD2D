import React from 'react';

import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';

import theme from './theme/theme';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import PageWrapper from "./components/PageWrapper/PageWrapper";
import BeAGiver from './components/BeAGiver/BeAGiver';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Banner currentPage={{title: "Database of Streets Visited", link: "/", breadcrumb: "Sankirtana Forever"}}/>
      <PageWrapper>
        <BeAGiver />
      </PageWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
