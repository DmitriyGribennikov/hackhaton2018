import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Containers/HomePage';
import ParkingsPage from './Containers/ParkingsPage';
import PropTypes from 'prop-types'
import NavBar from './Components/NavBar';
import Grid from '@material-ui/core/Grid';

import SideMenu from './Components/SideMenu';


import './index.css'

const tabs = [
    {
        title: 'Home',
        url: '/',
        subTabs: [
            {
                title: 'Info',
                path: '/'
            },
            {
                title: 'Settings',
                path: '/'
            }
        ]

    },
    {
        title: 'Parkings',
        url: '/parkings',
        subTabs: [
            {
                title: 'My Parkings',
                path: '/parkings'
            },
            {
                title: 'Manage',
                path: '/parkings'
            }
        ]
    }
]

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <NavBar />
                    <SideMenu tabs={tabs}/>
                </Grid>
                <Grid item xs={10}>
                    <NavBar />
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/parkings/" component={ParkingsPage} />
                </Grid>
            </Grid>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root
