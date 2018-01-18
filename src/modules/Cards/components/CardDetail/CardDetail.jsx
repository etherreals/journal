import React from 'react';
import PropTypes from 'prop-types';

const CardDetail = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

CardDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};


export default CardDetail;
