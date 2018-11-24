import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
       width: '98%',
       height: window.innerHeight - 84 + 'px'
    }
});

class AnalyticsPage extends Component {
    render() {
        const { classes } = this.props;
        return <div>
            <img className={classes.root}  src="/analytics.jpg" />
        </div>;

    }
}

export default withStyles(styles)(AnalyticsPage);
