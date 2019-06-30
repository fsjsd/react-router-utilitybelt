import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
//import { MdChevronRight } from "react-icons/md";
//import './RouteDefinitionNavLink.css';

const RouteDefinitionNavLink = ({ route, uiChevron, onClick }) => (
  <NavLink
    className="NavLink"
    activeClassName="active"
    to={route.path}
    exact={route.exact}
    onClick={() => onClick && onClick()}
  >
    {route.icon && route.icon()}
    <span className="NavLinkLabel">{route.navlabel || route.title}</span>
    {route.showSubNav ? (uiChevron ? uiChevron() : ">") : null}
  </NavLink>
);

RouteDefinitionNavLink.defaultProps = {
  onClick: null
};

RouteDefinitionNavLink.propTypes = {
  route: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default React.memo(RouteDefinitionNavLink);
