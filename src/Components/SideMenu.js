import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


const styles = theme => ({
    root: {
        width: '100%',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: window.innerHeight + 'px'
    },
    projectLogo: {
        fontSize: '20px',
        height: '65px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabPanel: {
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    selected: {
        color: 'green'

    }
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

    },
];

class SideMenu extends React.Component {

    render() {
        const { classes: { menuContainer, projectLogo, tabPanel, selected, link }, location: { pathname }} = this.props;
        return (
            <Paper className={menuContainer}>
                <Paper className={projectLogo} >PARKOMAT</Paper>
                {
                    tabs.map(tab => {
                        const className = classnames({
                            [tabPanel]: true,
                            [selected]: pathname === tab.url
                        });
                        return <Link className={link}  key={tab.title} to={tab.url}>
                            <Paper className={ className } >{tab.title}</Paper>
                        </Link>
                    })
                }
            </Paper>
        );
    }
}
SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SideMenu));


