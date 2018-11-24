import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";


const styles = theme => ({
    container: {
        height: window.innerHeight - 64 + 'px',
        overflowX: 'auto'

    },
    root: {
        width: '55%',
        height: window.innerHeight - 174 + 'px'
    }
});

class AddParkingView extends Component {
    render() {
        const { classes } = this.props;
        return <Grid
            container
            spacing={0}
            className={classes.container}
        >
            <Grid item xs={11}>
                <img className={classes.root} alt='add_parking.jpg' src="/add_parking.jpg" />
            </Grid>
        </Grid>;

    }
}

export default withStyles(styles)(AddParkingView);







