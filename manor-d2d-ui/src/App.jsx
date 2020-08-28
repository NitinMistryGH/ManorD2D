import React, { useEffect, Component } from 'react';
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
import StreetsTable from './components/StreetsTable/StreetsTable';
import { populateDb, getStreets } from './actions';


const mapDispatchToProps = {
    populateDb: populateDb,
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
        component: Home
    },
    {
        key: 'photos',
        title: 'Photos',
        link: '/photos',
        breadcrumb: 'Photos',
        component: Home
    },
    {
        key: 'videos',
        title: 'Videos',
        link: '/videos',
        breadcrumb: 'Videos',
        component: Home
    }
];

class App extends Component {

    componentDidMount() {
        //this.props.populateDb();
        this.props.getStreets();
    }

    render() {
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
    }
};

export default connect(null, mapDispatchToProps)(App);
