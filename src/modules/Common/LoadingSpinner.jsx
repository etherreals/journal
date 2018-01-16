import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';
import { purple } from 'material-ui/colors';
import styles from './LoadingSpinner.styles';

const LoadingSpinner = ({ classes, text }) => (
  <div className={classes.progressWrapper}>
    <CircularProgress
      className={classes.progress}
      style={{ color: purple[500] }}
    />
    <Typography type="body2" gutterBottom align="center" className={classes.progressText}>
      {text}
    </Typography>
  </div>
);

LoadingSpinner.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  text: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  text: 'Loading...',
};

export default withStyles(styles)(LoadingSpinner);

