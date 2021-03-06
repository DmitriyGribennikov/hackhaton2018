import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainInfo from './Analytics/MainInfo';


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 8,
        overflowX: 'auto',
        height: window.innerHeight - 64 + 'px'
    },
    image: {
        width: '110%',
        marginLeft: '-60px'

    }
});


class AnalyticsView extends Component {

    componentDidMount() {
        this.timer = setInterval(()=> this.props.fetchSessions(), 3000);
    }

    componentWillUnmount() {
        this.timer = null;
    }


    render() {
        const { classes } = this.props;
        return <Grid
            container
            spacing={0}
            className={classes.root}
            direction='row'
            justify='center'
        >
            <Grid item xs={11}>
                <MainInfo
                    income={this.props.income}
                    availabilityInfo={this.props.availabilityInfo}
                />
            </Grid>
            <Grid item xs={11} >
                <img className={classes.image} alt='analytics.jpg' src="analytics.jpg"/>
            </Grid>
        </Grid>
    }
}

AnalyticsView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnalyticsView);
