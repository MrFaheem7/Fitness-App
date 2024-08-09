import React from 'react';
import PropTypes from 'prop-types';
import './avatar.scss';

const Avatar = ({ image, name }) => {
  return (
    <img src={image} alt={`${name}'s avatar`} className="avatar" />
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Avatar;
