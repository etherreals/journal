import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/usersActions';
import PupilItem from './PupilItem';


class PupilsList extends Component {
  componentDidMount() {
    this.props.actions.getAllUsersActionCreator();
  }
  render() {
    return (
      <div>
        {
          this.props.pupils.map(pupil => (
            <PupilItem
              key={pupil.id}
              id={pupil.id}
              fullName={pupil.fullName}
              dateOfBirth={pupil.dateOfBirth.toLocaleString()}
            />))
        }
      </div>
    );
  }
}

PupilsList.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  pupils: PropTypes.arrayOf(PropTypes.object),
};

PupilsList.defaultProps = {
  pupils: [],
};

const mapStoreToProps = store => ({
  pupils: store.users.users,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStoreToProps, mapDispatchToProps)(PupilsList);
