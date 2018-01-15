import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';

function rand() {
  return Math.floor(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    position: 'absolute',
    width: 8 * 50,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 8 * 4,
  };
}

class AddCard extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()}>
            <Typography type="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography type="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <AddCard />
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddCard;
