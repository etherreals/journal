import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { closeAddCardModal } from '../../store/actions';
import styles from './AddCardModal.styles';

const AddCardModal = ({ isOpen, handleClose, classes }) => (
  <div>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={handleClose}
    >
      <div className={classes.modal}>
        <Typography type="title" id="modal-title">
          Text in a modal
        </Typography>
        <Typography type="subheading" id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
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
  isOpen: store.cards.isAddCardModalShown,
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
