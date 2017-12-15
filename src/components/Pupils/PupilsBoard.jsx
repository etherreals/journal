import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui';
import PupilsList from './PupilsList/PupilsList';
import FilterContainer from '../Filter/FilterContainer';
import styles from './PupilsBoard.styles';

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
      <PupilsList />
    </Grid>
  </Grid>
);

PupilsBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(PupilsBoard);
