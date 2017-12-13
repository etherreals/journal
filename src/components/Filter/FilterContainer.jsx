import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import styles from './FilterContainer.styles';

const FilterContainer = ({ classes }) => (
  <div className={classes.container}>FilterContainer</div>
);

FilterContainer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(FilterContainer);
