import React from 'react';

const UserDetail = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

export default UserDetail;
