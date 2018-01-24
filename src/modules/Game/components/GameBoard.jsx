import React, { Component } from 'react';
import { push } from 'react-router-redux';
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
import { isGameStartedSelector } from '../store/selectors';
import { cancelGame } from '../store/actions';

class GameBoard extends Component {
  static propTypes = {
    isGameStarted: PropTypes.bool.isRequired,
    dispatch: PropTypes.bool.isRequired,
  }

  onLeave = () => {
    this.props.dispatch(cancelGame());
    this.props.dispatch(push('/cards'));
  }

  render() {
    const { isGameStarted } = this.props;
    return (
      <div>
        <h1>GameBoard</h1>
        <NavigationPrompt when={isGameStarted}>
          {({ isActive, onCancel }) => (
            isActive &&
            <Dialog
              open={isGameStarted}
              onClose={this.onLeave}
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
                <Button onClick={this.onLeave} color="secondary">
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

const mapStoreToProps = store => ({
  isGameStarted: isGameStartedSelector(store),
});

export default connect(mapStoreToProps)(GameBoard);
