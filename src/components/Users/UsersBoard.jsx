import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui';
import UsersList from './UsersList/UsersList';
import FilterContainer from '../Filter/FilterContainer';
import styles from './UsersBoard.styles';

const PupilsBoard = ({ classes }) => (
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

PupilsBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(PupilsBoard);
