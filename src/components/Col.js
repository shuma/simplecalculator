import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ColItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 200px;
  width: 22%;
  background: ${props => (props.primary ? "#0be881" : "salmon")};
  padding: 20px;
  margin: 10px;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
  ul,
  li {
    list-style: none;
    text-align: left;
  }
`;

const Col = ({ children, primary }) => (
  <ColItem primary={primary}>{children}</ColItem>
);

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  primary: PropTypes.bool
};

export default Col;
