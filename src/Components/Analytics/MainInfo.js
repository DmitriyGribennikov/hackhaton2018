import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid/Grid";

const styles = (theme) => ({
    card: {
        minWidth: 275,
        marginBottom: '2px',
        marginTop: '3px'
    },
    income: {
        color: theme.palette.primary.main
    },
    dashboardDigits: {
        fontSize: 30,
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

class SimpleCard extends Component {
    render() {
        const {classes, availabilityInfo: {totalPlaces, availablePlaces, filledPercentage}} = this.props;
        const className = filledPercentage  >= 0 && filledPercentage < 70
            ? classes.green
            :  filledPercentage  >= 70 && filledPercentage < 90
                ? classes.orange
                : classes.red;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid
                        container
                        spacing={0}
                        className={classes.root}
                        direction='row'
                        justify='center'
                    >
                        <Grid item xs={4}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Month Income
                            </Typography>
                            <Typography className={[classes.dashboardDigits, classes.income].join(' ')}
                                        color="textSecondary" gutterBottom>
                                {this.props.income.toLocaleString()} UAH
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Taken / Total Parking Places
                            </Typography>
                            <Typography className={classes.dashboardDigits} color="textSecondary" gutterBottom>
                                <span className={className}>{ totalPlaces - availablePlaces} </span> / {totalPlaces}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Parkings Loaded
                            </Typography>
                            <Typography className={classes.dashboardDigits} color="textSecondary" gutterBottom>
                                <span className={className}>{filledPercentage}</span> %
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
