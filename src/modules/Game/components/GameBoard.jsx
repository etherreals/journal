import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationPrompt from 'react-router-navigation-prompt';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { cancelGame } from '../store/actions';

class GameBoard extends Component {
  static propTypes = {
    cancelGame: PropTypes.func.isRequired,
  }

  onLeave = dialogLeave => () => {
    dialogLeave();
    this.props.cancelGame();
  }

  render() {
    return (
      <div>
        <h1>GameBoard</h1>
        <Button component={Link} to="/cards">To cards</Button>
        <NavigationPrompt when={
          (crntLocation, nextLocation) => !nextLocation.pathname.startsWith(crntLocation.pathname)
          }
        >
          {({ isActive, onCancel, onConfirm }) => (
            isActive &&
            <Dialog
              open
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">ALERT</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Are you sure you want to leave the game?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={onCancel} color="default" autoFocus>
                  Cancel
                </Button>
                <Button onClick={this.onLeave(onConfirm)} color="secondary">
                  Leave
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </NavigationPrompt>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  cancelGame: bindActionCreators(cancelGame, dispatch),
});

export default connect(null, mapDispatchToProps)(GameBoard);
