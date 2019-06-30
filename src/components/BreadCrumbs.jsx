import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppRoutesContext } from "../services/AppRoutesContext";
import componentsJoin from "../utils/componentsJoin";

// Breadcrumbs use the current Route to enumerate any parent route definitions
// and then sprinkle out a trail of crumbs ...

const BreadCrumbs = ({
  renderWrapper,
  renderSeparator,
  renderCurrentRouteCrumb
}) => {
  const { state, currentRoute, appRoutes } = useContext(AppRoutesContext);

  // need title override if it's been set
  const currentPageTitle = state.currentRouteTitle;

  // recursive lookup through route defs to derive breadcrumb trail ...
  const traverseRouteDefs = routeDef => {
    const parentEl = routeDef.parent
      ? traverseRouteDefs({
          ...appRoutes[routeDef.parent],
          path: routeDef.parent
        })
      : [];

    return [...parentEl, routeDef];
  };

  // crumb routine, renders current (deepest) route as text preceeded by
  // parent routes as links
  const crumb = routeDef =>
    routeDef.path === currentRoute.path ? (
      renderCurrentRouteCrumb(
        currentPageTitle !== "" ? currentPageTitle : currentRoute.title
      )
    ) : (
      <Link to={routeDef.path}>{routeDef.title}</Link>
    );

  const breadCrumbs = () => {
    const val = componentsJoin(
      traverseRouteDefs(currentRoute).map(rd => crumb(rd)),
      renderSeparator()
    );
    // console.log(val);
    return val;
  };

  //console.log("BreadCrumbs", currentRoute, currentRoute.parent);

  // only render breadcrumbs if current route has a parent.
  // drop this if() check if you always want breadcrumbs to render.
  return (
    <>{currentRoute && currentRoute.parent && renderWrapper(breadCrumbs)}</>
  );
};

BreadCrumbs.propTypes = {
  renderWrapper: PropTypes.func.isRequired,
  renderSeparator: PropTypes.func.isRequired,
  renderCurrentRouteCrumb: PropTypes.func.isRequired
};

export default React.memo(BreadCrumbs);
