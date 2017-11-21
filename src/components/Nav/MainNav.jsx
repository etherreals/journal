import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class MainNav extends Component {
  constructor() {
    super();
    this.state = {
      isClassesSubmenuOpen: true,
    };
    this.handleClassesSubmenuClick = this.handleClassesSubmenuClick.bind(this);
  }

  handleClassesSubmenuClick() {
    this.setState({ isClassesSubmenuOpen: !this.state.isClassesSubmenuOpen });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.nav}>
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
          <ListItem button onClick={this.handleClassesSubmenuClick}>
            <ListItemIcon>
              <ViewComfy className={classes.icon} />
            </ListItemIcon>
            <ListItemText inset primary="Classes" classes={{ text: classes.link }} />
            {this.state.isClassesSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            component="li"
            in={this.state.isClassesSubmenuOpen}
            transitionDuration="auto"
            unmountOnExit
          >
            <List disablePadding>
              <ListItem component={Link} to="/classes" button className={classes.nested}>
                <ListItemIcon>
                  <School className={classes.icon} />
                </ListItemIcon>
                <ListItemText inset primary="5A" classes={{ text: classes.link }} />
              </ListItem>
              <ListItem component={Link} to="/classes" button className={classes.nested}>
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
  }
}

MainNav.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(MainNav);
