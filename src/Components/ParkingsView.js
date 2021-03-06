import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography/Typography";
import { getAvailablePlacesForParking } from '../Utils';


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 5,
        overflowX: 'auto',
        height: window.innerHeight - 64 + 'px'
    },
    table: {
        minWidth: 700,
    },
    tableHeader: {
        backgroundColor: theme.palette.primary.main
    },
    headerText: {
        color: 'white',
    },
    parkingRow: {
        textAlign: 'left'
    },
    green: {
        color: 'green'
    },
    orange: {
        color: 'orange'
    },
    red: {
        color: 'red'
    }
});


class ParkingsPage extends Component {

    componentDidMount() {
        this.props.fetchParkings()
    }

    rowClickHandler = (parkingId) => (e) => {
        this.props.history.push(`parking/${parkingId}`)
    };

    renderParking = (parking) => {
        const { classes, } = this.props;
        const { filledPercentage, totalPlaces, availablePlaces } = getAvailablePlacesForParking(parking);
        const className = filledPercentage  >= 0 && filledPercentage < 70
            ? classes.green
            :  filledPercentage  >= 70 && filledPercentage < 90
                ? classes.orange
                : classes.red;
        return <TableRow key={parking.id}  className={classes.parkingRow} onClick={this.rowClickHandler(parking.id)}>
            <TableCell component="th" scope="row">
                {parking.title}
            </TableCell>
            <TableCell >{parking.location}</TableCell>
            <TableCell className={className}>{ totalPlaces - availablePlaces} / {totalPlaces}</TableCell>
            <TableCell className={className}> { Math.floor(filledPercentage) } %</TableCell>
            <TableCell >{parking.price}</TableCell>
        </TableRow>
    };
    render() {
        const { parkings, parkingIds, classes} = this.props;
        return <Grid
            container
            spacing={0}
            className={classes.root}
            direction='row'
            justify='center'


        >
            <Grid item xs={11}>
                <Paper>
                    <Table className={classes.table}>
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                <TableCell className={classes.headerText}>Title</TableCell>
                                <TableCell className={classes.headerText}>Location</TableCell>
                                <TableCell className={classes.headerText}>Parking places (available / total)</TableCell>
                                <TableCell className={classes.headerText}>Loading, %</TableCell>
                                <TableCell className={classes.headerText}>Price, UAH</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { parkingIds.map(id => this.renderParking(parkings[id]))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    }
}

ParkingsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingsPage);
