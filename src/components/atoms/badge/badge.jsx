import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';

const Badge = ({ tag }) => {
  return <span className="badge">{tag}</span>;
};

Badge.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Badge;
