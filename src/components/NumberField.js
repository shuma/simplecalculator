import React, { Fragment } from "react";
import PropTypes from "prop-types";

const NumberFiled = ({ labelName, valueName, value, handleChange }) => (
  <Fragment>
    <label htmlFor="valueName">{labelName}</label>
    <input
      type="number"
      name={valueName}
      value={value}
      onChange={handleChange}
    />
  </Fragment>
);

NumberFiled.propTypes = {
  labelName: PropTypes.string.isRequired,
  valueName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default NumberFiled;
