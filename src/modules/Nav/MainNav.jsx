import React from 'react';
import { withState } from 'recompose';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Face from 'material-ui-icons/Face';
import Group from 'material-ui-icons/Group';
import ViewComfy from 'material-ui-icons/ViewComfy';
import School from 'material-ui-icons/School';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import styles from './MainNav.styles';
import * as actionCreators from '../Auth/store/authActions';


const MainNav = ({
  isGradesSubmenuOpen, toggleGradesSubmenu, classes, actions: { logout },
}) => (
  <Grid className={classes.nav}>
    <button onClick={logout}>logout</button>
    <List className={classes.list}>
      <ListItem component={Link} to="/pupils" button className={classes.li} >
        <ListItemIcon>
          <Face className={classes.icon} />
        </ListItemIcon>
        <ListItemText inset primary="Pupils" classes={{ text: classes.link }} />
      </ListItem>
      <ListItem component={Link} to="/teachers" button className={classes.link}>
        <ListItemIcon>
          <Group className={classes.icon} />
        </ListItemIcon>
        <ListItemText inset primary="Teachers" classes={{ text: classes.link }} />
      </ListItem>
      <ListItem button onClick={() => toggleGradesSubmenu(!isGradesSubmenuOpen)}>
        <ListItemIcon>
          <ViewComfy className={classes.icon} />
        </ListItemIcon>
        <ListItemText inset primary="Schedule" classes={{ text: classes.link }} />
        {isGradesSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        component="li"
        in={isGradesSubmenuOpen}
        transitionDuration="auto"
        unmountOnExit
      >
        <List disablePadding>
          <ListItem component={Link} to="/schedule" button className={classes.nested}>
            <ListItemIcon>
              <School className={classes.icon} />
            </ListItemIcon>
            <ListItemText inset primary="5A" classes={{ text: classes.link }} />
          </ListItem>
          <ListItem component={Link} to="/schedule" button className={classes.nested}>
            <ListItemIcon>
              <School className={classes.icon} />
            </ListItemIcon>
            <ListItemText inset primary="5B" classes={{ text: classes.link }} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  </Grid >
);


MainNav.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  isGradesSubmenuOpen: PropTypes.bool.isRequired,
  toggleGradesSubmenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default compose(
  withState('isGradesSubmenuOpen', 'toggleGradesSubmenu', false),
  withStyles(styles),
  connect(null, mapDispatchToProps),
)(MainNav);
