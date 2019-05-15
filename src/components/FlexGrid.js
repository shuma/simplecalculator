import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`;

const FlexGrid = ({ children }) => {
  return <FlexContainer>{children}</FlexContainer>;
};

FlexGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FlexGrid;
