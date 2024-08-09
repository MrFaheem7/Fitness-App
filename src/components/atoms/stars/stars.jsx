import React from 'react';
import PropTypes from 'prop-types';
import './stars.scss';

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        &#9733;
      </span>
    ));

  return <div className="stars">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
