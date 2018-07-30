import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import styles from './LoadingSpinner.styles';
import CircularProgress from '@material-ui/core/CircularProgress';;

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

