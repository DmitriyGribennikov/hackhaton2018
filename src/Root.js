import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Containers/HomePage';
import ParkingsPage from './Containers/ParkingsPage';
import ParkingPage from './Containers/ParkingPage';
import AddParkingPage from './Containers/AddParkingPage';
import AnalyticsPage from './Containers/AnalyticsPage';
import PropTypes from 'prop-types'
import NavBar from './Components/NavBar';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import SideMenu from './Components/SideMenu';


import './index.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4A90E2'
        },
        secondary: {
            main: '#ec407a',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

const tabs = [
    {
        title: 'Add New Parking',
        url: '/parking/add',

    },
    {
        title: 'My Parkings',
        url: '/parkings',
    },
    {
        title: 'Analytics',
        url: '/analytics',
    }
];


const Root = ({ store }) => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <SideMenu tabs={tabs} />
                    </Grid>
                    <Grid item xs={10}>
                        <NavBar tabs={tabs} />
                        <Route exact path="/" component={HomePage}/>
                        <Route  path="/parkings/" component={ParkingsPage} />
                        <Route exact path="/parking/:id" component={ParkingPage} />
                        <Route exact path="/parking/add" component={AddParkingPage} />
                        <Route path="/analytics/" component={AnalyticsPage} />
                    </Grid>
                </Grid>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root
