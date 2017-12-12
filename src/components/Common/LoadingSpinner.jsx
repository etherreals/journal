import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import { purple } from 'material-ui/colors';
import styles from './LoadingSpinner.styles';

const LoadingSpinner = props => (
  <div className={props.classes.progressWrapper}>
    <CircularProgress
      className={props.classes.progress}
      style={{ color: purple[500] }}
    />
  </div>
);

LoadingSpinner.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const withLoadingIndicator = Component => (props) => {
  return [
    <Component {...props} />,
    props.isLoading && <LoadingSpinner {...props} />,
  ];
};

export { withLoadingIndicator };

export default withStyles(styles)(LoadingSpinner);

