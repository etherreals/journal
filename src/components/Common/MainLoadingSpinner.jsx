import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import { purple } from 'material-ui/colors';
import styles from './MainLoadingSpinner.styles';

const MainLoadingSpinner = props => (
  <CircularProgress
    className={props.classes.progress}
    style={{ color: purple[500] }}
  />
);

MainLoadingSpinner.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};


export default withStyles(styles)(MainLoadingSpinner);

