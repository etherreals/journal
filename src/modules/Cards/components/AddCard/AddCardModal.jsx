import React from 'react';
import PropTypes from 'prop-types';
import { Modal, withStyles } from 'material-ui';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { closeAddCardModal } from '../../store/actions';
import styles from './AddCardModal.styles';
import { isAddCardModalShownSelector } from '../../store/selectors';
import AddCardForm from './AddCardForm';

const AddCardModal = ({ isOpen, handleClose, classes }) => (
  <div>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={handleClose}
    >
      <div className={classes.modal}>
        <AddCardForm />
      </div>
    </Modal>
  </div>
);

AddCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStoreToProps = store => ({
  isOpen: isAddCardModalShownSelector(store),
});

const mapDispatchToProps = dispatch => ({
  handleClose() {
    dispatch(closeAddCardModal());
  },
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps, mapDispatchToProps),
)(AddCardModal);
