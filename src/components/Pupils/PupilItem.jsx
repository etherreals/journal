import React from 'react';
import PropTypes from 'prop-types';

const PupilItem = props => (
  <div>
    <p>{props.id}</p>
    <p>{props.fullName}</p>
    <p>{props.dateOfBirth}</p>
  </div>
);

PupilItem.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
};

export default PupilItem;
