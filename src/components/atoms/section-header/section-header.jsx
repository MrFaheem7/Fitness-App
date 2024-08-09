import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./section-header.scss";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Fragment>
      <h2 className="title">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </Fragment>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SectionHeader;
