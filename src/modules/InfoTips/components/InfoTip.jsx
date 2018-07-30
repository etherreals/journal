import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './InfoTip.styles';
import { closeInfoTipModal } from '../store/actions';
import { isOpenSelector, messageSelector } from '../store/selectors';


class InfoTip extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.objectOf).isRequired,
    closeInfoTipModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.closeInfoTipModal();
  };

  render() {
    const { classes, isOpen, message } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        color="inherit"
        open={isOpen}
        autoHideDuration={2000}
        onClose={this.handleClose}
        SnackbarContentProps={{
          classes: {
            root: classes.root,
          },
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    );
  }
}

const mapStoreToProps = store => ({
  isOpen: isOpenSelector(store),
  message: messageSelector(store),
});

const mapDispatchToProps = dispatch => ({
  closeInfoTipModal: bindActionCreators(closeInfoTipModal, dispatch),
});

export default compose(
  connect(mapStoreToProps, mapDispatchToProps),
  withStyles(styles),
)(InfoTip);
