import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeAddCardModal } from '../../store/actions';
import styles from './AddCardModal.styles';
import { isAddCardModalShownSelector } from '../../store/selectors';
import AddCardForm from './AddCardForm';

const AddCardModal = ({ isOpen, classes, closeAddCardModal }) => (
  <div>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={closeAddCardModal}
    >
      <div className={classes.modal}>
        <AddCardForm />
      </div>
    </Modal>
  </div>
);

AddCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeAddCardModal: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStoreToProps = store => ({
  isOpen: isAddCardModalShownSelector(store),
});

const mapDispatchToProps = dispatch => ({
  closeAddCardModal: bindActionCreators(closeAddCardModal, dispatch),
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps, mapDispatchToProps),
)(AddCardModal);
