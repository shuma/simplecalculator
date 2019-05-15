import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TotalField = ({ total }) => (
  <Fragment>
    <li>
      <span>Resultat: {total}</span>
    </li>
  </Fragment>
);

TotalField.propTypes = {
  total: PropTypes.string.isRequired
};

export default TotalField;
