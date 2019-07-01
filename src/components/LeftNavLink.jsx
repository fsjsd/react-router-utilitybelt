import React from "react";
import PropTypes from "prop-types";

const LeftNavLink = ({ label, icon, onClick, className }) => (
  <div
    className={className}
    role="button"
    onClick={onClick}
    onKeyPress={() => {}}
    tabIndex="0"
  >
    {icon ? icon() : null}
    <span>{label}</span>
  </div>
);

LeftNavLink.defaultProps = {
  icon: null
};

LeftNavLink.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.func
};

export default LeftNavLink;
