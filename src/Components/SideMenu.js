import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
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
    tabItemText: {
        fontWeight: 500,
        color: 'red'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        marginBottom: '5px',
        marginTop: '5px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: ((theme) => console.log(theme))(theme)
    }
});

class SideMenu extends React.Component {

    render() {
        const { classes: { menuContainer, projectLogo, link, tabItemText }, location: { pathname }, tabs} = this.props;

        return (
            <Paper className={menuContainer}>
                <Paper className={projectLogo} >
                    <Typography variant="h4" gutterBottom>
                        PARKOMAT
                    </Typography>
                </Paper>
                <List component="nav">
                {
                    tabs.map(tab => {
                        return <Link className={link} key={tab.title} to={tab.url}>
                            <ListItem button selected={pathname === tab.url} >
                               <ListItemText className={tabItemText} primary={tab.title} />
                            </ListItem>
                            <Divider />
                        </Link>
                    })
                }
                </List>
            </Paper>
        );
    }
}
SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SideMenu));


