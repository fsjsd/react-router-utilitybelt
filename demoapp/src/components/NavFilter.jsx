import React from "react";
import PropTypes from "prop-types";
import style from "styled-components";

const InputStyled = style.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 7px 9px;
  border-radius: 4px;
  border: none;
  background-color: #f3f3f3;
  border: solid 1px #f3f3f3;
  outline: none;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) background-color;
  -webkit-tap-highlight-color: transparent;
  
  &:focus{
    background-color:#FFF;
    border:solid 1px #ccc;
  }
`;

const NavFilter = ({ value, onChange, placeholder, ...restProps }) => (
  <InputStyled
    type="text"
    onChange={event => onChange(event.target.value)}
    value={value}
    placeholder={placeholder}
    {...restProps}
  />
);

NavFilter.defaultProps = {
  placeholder: ""
};

NavFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default NavFilter;
