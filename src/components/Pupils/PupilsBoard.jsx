import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PupilsList from './PupilsList/PupilsList';
import styles from './PupilsBoard.styles';

const PupilsBoard = props => (
  <div>
    <Typography type="display1" gutterBottom align="center" className={props.classes.root}>
      Pupils list
    </Typography>
    <PupilsList />
  </div>
);

PupilsBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(PupilsBoard);
