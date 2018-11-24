import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Containers/HomePage';
import ParkingsPage from './Containers/ParkingsPage';
import ParkingPage from './Containers/ParkingPage';
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
});



const Root = ({ store }) => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <SideMenu />
                    </Grid>
                    <Grid item xs={10}>
                        <NavBar />
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/parkings/" component={ParkingsPage} />
                        <Route path="/parkings/:id" component={ParkingPage} />
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
