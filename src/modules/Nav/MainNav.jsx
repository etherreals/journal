import React from 'react';
import { withState, withHandlers } from 'recompose';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Grain from 'material-ui-icons/Grain';
import Group from 'material-ui-icons/Group';
import ViewComfy from 'material-ui-icons/ViewComfy';
import School from 'material-ui-icons/School';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import styles from './MainNav.styles';
import { logoutRequest } from '../Auth/store/actions';


const MainNav = ({
  isGradesSubmenuOpen,
  toggleGradesSubmenu,
  classes,
  onLogoutClickHandler,
}) => (
  <Grid>
    <button onClick={onLogoutClickHandler}>logout</button>
    <List>
      <ListItem
        component={Link}
        to="/cards"
        button
      >
        <ListItemIcon className={classes.icon}>
          <Grain />
        </ListItemIcon>
        <ListItemText
          inset
          classes={{ primary: classes.text }}
          primary="Cards"
        />
      </ListItem>
      <ListItem component={Link} to="/teachers" button>
        <ListItemIcon className={classes.icon}>
          <Group />
        </ListItemIcon>
        <ListItemText
          inset
          classes={{ primary: classes.text }}
          primary="Something"
        />
      </ListItem>
      <ListItem button onClick={() => toggleGradesSubmenu(!isGradesSubmenuOpen)}>
        <ListItemIcon className={classes.icon}>
          <ViewComfy />
        </ListItemIcon>
        <ListItemText
          inset
          classes={{ primary: classes.text }}
          primary="Something"
        />
        {
          isGradesSubmenuOpen ?
            <ExpandLess className={classes.icon} /> :
            <ExpandMore className={classes.icon} />
        }
      </ListItem>
      <Collapse
        component="li"
        in={isGradesSubmenuOpen}
        transitionDuration="auto"
        unmountOnExit
      >
        <List disablePadding>
          <ListItem component={Link} to="/schedule" button className={classes.nested}>
            <ListItemIcon className={classes.icon}>
              <School />
            </ListItemIcon>
            <ListItemText
              inset
              classes={{ primary: classes.text }}
              primary="Something"
            />
          </ListItem>
          <ListItem component={Link} to="/schedule" button className={classes.nested}>
            <ListItemIcon className={classes.icon}>
              <School />
            </ListItemIcon>
            <ListItemText
              inset
              classes={{ primary: classes.text }}
              primary="Something"
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  </Grid >
);


MainNav.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isGradesSubmenuOpen: PropTypes.bool.isRequired,
  toggleGradesSubmenu: PropTypes.func.isRequired,
  onLogoutClickHandler: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(null),
  withState('isGradesSubmenuOpen', 'toggleGradesSubmenu', false),
  withHandlers({
    onLogoutClickHandler: props => (event) => {
      event.preventDefault();
      props.dispatch(logoutRequest());
    },
  }),
)(MainNav);
