import React from 'react';
import { withState, withHandlers } from 'recompose';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
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
  <Grid classes={classes.nav}>
    <button onClick={onLogoutClickHandler}>logout</button>
    <List classes={classes.list}>
      <ListItem
        component={Link}
        to="/cards"
        button
        classes={{
          root: classes.root,
        }}
      >
        <ListItemIcon classes={{ root: classes.root }} >
          <Grain />
        </ListItemIcon>
        <ListItemText inset primary="Cards" classes={{ subheading: classes.root }} />
      </ListItem>
      <ListItem component={Link} to="/teachers" button>
        <ListItemIcon classes={{ root: classes.root }}>
          <Group />
        </ListItemIcon>
        <ListItemText inset primary="Teachers" />
      </ListItem>
      <ListItem button onClick={() => toggleGradesSubmenu(!isGradesSubmenuOpen)}>
        <ListItemIcon classes={{ root: classes.root }}>
          <ViewComfy />
        </ListItemIcon>
        <ListItemText inset primary="Schedule" />
        {isGradesSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        component="li"
        in={isGradesSubmenuOpen}
        transitionDuration="auto"
        unmountOnExit
      >
        <List disablePadding>
          <ListItem component={Link} to="/schedule" button classes={classes.nested}>
            <ListItemIcon classes={{ root: classes.root }}>
              <School />
            </ListItemIcon>
            <ListItemText inset primary="5A" />
          </ListItem>
          <ListItem component={Link} to="/schedule" button classes={classes.nested}>
            <ListItemIcon classes={{ root: classes.root }}>
              <School />
            </ListItemIcon>
            <ListItemText inset primary="5B" />
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
