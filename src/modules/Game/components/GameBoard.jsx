import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationPrompt from 'react-router-navigation-prompt';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { cancelGame } from '../store/actions';

class GameBoard extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  onLeave = dialogLeave => () => {
    dialogLeave();
    this.props.dispatch(cancelGame());
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

export default connect()(GameBoard);
