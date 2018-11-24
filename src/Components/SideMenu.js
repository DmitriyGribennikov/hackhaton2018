import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
        width: '100%',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: window.innerHeight - 64 + 'px'
    },
    subTabContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '15px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class SideMenu extends React.Component {

    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        return (
            <div className={classes.menuContainer}>
                { this.props.tabs.map(tab => {
                        return <ExpansionPanel  key={tab.title} expanded={expanded === tab.title} onChange={this.handleChange(tab.title)}  >
                            <ExpansionPanelSummary>
                                <Typography className={classes.heading}>{tab.title}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.subTabContainer}>
                                {
                                    tab.subTabs.map( subTab => <div key={subTab.title}>
                                        <Link to={subTab.path}>
                                            <Typography >
                                                { subTab.title }
                                            </Typography>
                                        </Link>
                                    </div>)
                                }
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    })
                }
            </div>
        );
    }
}
SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);


