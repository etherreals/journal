import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import styles from './AddCardButton.styles';

const AddCardButton = ({ classes, toggleAddCardModal }) => (
  <Tooltip title="Add new card">
    <Button
      fab
      className={classes.absolute}
      color="primary"
      onClick={toggleAddCardModal}
    >
      <AddIcon />
    </Button>
  </Tooltip>
);

AddCardButton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleAddCardModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddCardButton);
