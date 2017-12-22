import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui';
import UsersList from './UsersList/UsersList';
import UserDetail from './UserDetail/UserDetail';
import FilterContainer from '../../Filter/FilterContainer';
import styles from './UsersBoard.styles';

const UsersBoard = ({ classes }) => (
  <Grid
    container
    spacing={0}
    className={classes.root}
    direction="row"
    justify="center"
  >
    <Grid item md={2} className={classes.filter}>
      <FilterContainer />
    </Grid>
    <Grid item md={10} className={classes.board}>
      <UsersList />
    </Grid>
  </Grid>
);

UsersBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(UsersBoard);
