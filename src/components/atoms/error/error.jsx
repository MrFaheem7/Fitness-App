import React from 'react';
import PropTypes from 'prop-types';
import './error.scss';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return <p className="error">{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
