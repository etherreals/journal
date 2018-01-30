import React from 'react';
import { withState } from 'recompose';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { Link, withRouter } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import Grain from 'material-ui-icons/Grain';
import Group from 'material-ui-icons/Group';
import ViewComfy from 'material-ui-icons/ViewComfy';
import School from 'material-ui-icons/School';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import styles from './MainNav.styles';
import { logoutRequest as logoutRequestAC } from '../Auth/store/actions';
import { startGameSaga as startGameSagaAC } from '../Game/store/actions';


const MainNav = ({
  isGradesSubmenuOpen,
  toggleGradesSubmenu,
  classes,
  logoutRequest,
  startGameSaga,
}) => (
  <Grid>
    <button onClick={logoutRequest}>logout</button>
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
          primary="All cards"
        />
      </ListItem>
      <ListItem component={Link} to="/my-cards" button>
        <ListItemIcon className={classes.icon}>
          <Group />
        </ListItemIcon>
        <ListItemText
          inset
          classes={{ primary: classes.text }}
          primary="My cards"
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
        timeout="auto"
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
      <ListItem>
        <Button
          raised
          color="default"
          className={classes.playButton}
          onClick={startGameSaga}
        >
          Play in mixed mode
        </Button>
      </ListItem>
    </List>
  </Grid >
);

MainNav.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isGradesSubmenuOpen: PropTypes.bool.isRequired,
  toggleGradesSubmenu: PropTypes.func.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  startGameSaga: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logoutRequest: bindActionCreators(logoutRequestAC, dispatch),
  startGameSaga: bindActionCreators(startGameSagaAC, dispatch),
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
  withRouter,
  withState('isGradesSubmenuOpen', 'toggleGradesSubmenu', false),
)(MainNav);
