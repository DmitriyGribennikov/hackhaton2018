import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        width: '100%',
        height: window.innerHeight - 84 + 'px'
    }
});

class ParkingView extends Component {
    render() {
        const { classes } = this.props;
        return <div>
            <img className={classes.root} alt='add_parking.jpg' src="/parking.jpg" />
        </div>;

    }
}

export default withStyles(styles)(ParkingView);
