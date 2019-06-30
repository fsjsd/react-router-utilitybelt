import React from "react";
import PropTypes from "prop-types";
import NavFilter from "./NavFilter";
import style from "styled-components";

const NavFilterContainerDiv = style.div`
    padding:10px
`;

const NavFilterContainer = props => (
  <NavFilterContainerDiv>
    <NavFilter {...props} />
  </NavFilterContainerDiv>
);

NavFilterContainer.defaultProps = {
  placeholder: "Filter"
};

NavFilterContainer.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default NavFilterContainer;
