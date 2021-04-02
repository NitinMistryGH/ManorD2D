import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme/theme';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Home from './components/Home/Home';
import Photo from './components/Photo/Photo';
import Video from './components/Video/Video';
import BeAGiver from './components/BeAGiver/BeAGiver';
import { getStreets } from './actions';

const mapDispatchToProps = {
    getStreets: getStreets
};

const routes = [
    {
        key: 'home',
        title: 'Database of Streets Visited',
        link: '/',
        breadcrumb: 'Sankirtana Forever',
        component: Home
    },
    {
        key: 'campaign',
        title: 'Be A Giver Campaign',
        link: '/be-a-giver-campaign',
        breadcrumb: 'Be A Giver Campaign',
        component: BeAGiver
    },
    {
        key: 'photos',
        title: 'Photos',
        link: '/photos',
        breadcrumb: 'Photos',
        component: Photo
    },
    {
        key: 'videos',
        title: 'Videos',
        link: '/videos',
        breadcrumb: 'Videos',
        component: Video
    }
];

const App = ({getStreets}) => {

    useEffect(() => {
        getStreets();
    }, [getStreets]);

    return (
        <Switch>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar routes={routes} />
                <Banner routes={routes} />
                <PageWrapper routes={routes} />
                <Footer />
            </ThemeProvider>
        </Switch >
    );

};

export default connect(null, mapDispatchToProps)(App);
