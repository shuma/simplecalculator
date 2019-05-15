import React, { Fragment } from "react";
import PropTypes from "prop-types";

const RadioField = ({ valueName, selectedOption, radioChange }) => (
  <Fragment>
    <li>
      <label>
        <input
          type="radio"
          value={valueName}
          checked={selectedOption === valueName}
          onChange={radioChange}
        />
        {valueName}
      </label>
    </li>
  </Fragment>
);

RadioField.propTypes = {
  valueName: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
  radioChange: PropTypes.func.isRequired
};

export default RadioField;
