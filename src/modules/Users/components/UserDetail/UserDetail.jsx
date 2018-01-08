import React from 'react';
import PropTypes from 'prop-types';

const UserDetail = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

UserDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};


export default UserDetail;
