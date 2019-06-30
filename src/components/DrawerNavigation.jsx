import React, { Fragment, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import RouteDefinitionNavLink from "./RouteDefinitionNavLink";
import LeftNavLink from "./LeftNavLink";
import { AppRoutesContext } from "../services/AppRoutesContext";
//import { MdArrowBack } from "react-icons/md";
//import { navItemGroups } from "../AppRoutes";

// eslint-disable-next-line no-unused-vars
//import logger from "../utils/logger";
//import './DrawerNavigation.css';

// Left Navigation component.
// - renders out all valid route definitions as grouped links
// or as 'flat' list of matching results to supplied filter

const DrawerNavigation = ({ filter, className }) => {
  const {
    appRoutes,
    appRoutesList,
    navItemGroups,
    currentRoute,
    filterRoutes,
    navigate,
    uiBackIcon
  } = useContext(AppRoutesContext);

  /*
  console.log(
    "appRoutes",
    appRoutes,
    navItemGroups,
    currentRoute,
    filterRoutes
  );
*/
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);

  const useSubNavOnMount = currentRoute.showSubNav;

  const parentRoute = appRoutes[currentRoute.parent];

  // if current has child routes, shown them in sub nav, otherwise show sibling
  // routes
  const currentRouteHasChildRoutes =
    appRoutesList.find(
      route => route.parent && route.parent === currentRoute.path
    ) !== undefined;

  // for direct page loads, sync the drawer state based on whether the current route
  // has a parent declaring it as a sub nav.
  useEffect(() => {
    if (useSubNavOnMount || (parentRoute && parentRoute.showSubNav)) {
      setSubDrawerOpen(true);
    }
  }, [parentRoute, useSubNavOnMount]);

  // adjust drawer 'slided' state based on if showSubNav set
  const drawerWrapperClassNames = `DrawerWrapper${
    subDrawerOpen && filter === "" ? " Opened" : ""
  }`;

  // intercept every Nav Link and slide drawer out if appropriate
  const handleNavLinkClick = routeDef => {
    if (routeDef.showSubNav) {
      setSubDrawerOpen(true);
    }
  };

  const handleBackClick = () => {
    // logger.debug('handleBackClick', parentRoute);
    if (parentRoute && parentRoute.parent) {
      // bug here if parent route has dynamic path e.g. /user/:userid
      navigate(parentRoute.parent);
    } else {
      setSubDrawerOpen(false);
    }
  };

  // when in sub nav drawer, either show child routes
  // or sibling routes if no children exist
  const subNavFilter = route => {
    if (currentRouteHasChildRoutes) {
      return route.showInNav && route.parent === currentRoute.path;
    }
    return route.showInNav && route.path === currentRoute.path;
  };

  const navLinksGroup = routeDefs => (
    <ul className="NavLinks">
      {routeDefs.map(route => (
        <li key={route.path}>
          <RouteDefinitionNavLink
            className="NavLink"
            route={route}
            onClick={() => handleNavLinkClick(route)}
          />
        </li>
      ))}
      {routeDefs.length === 0 && (
        <li>
          <div className="NavLabel">No matches</div>
        </li>
      )}
    </ul>
  );

  return (
    <div className={className}>
      <div className={drawerWrapperClassNames}>
        <div className="MainDrawer">
          {filter !== "" ? (
            // either render flat search results ...
            navLinksGroup(appRoutesList.filter(filterRoutes(filter)))
          ) : (
            // or the route defintions in their respective groups ...
            <>
              {navItemGroups &&
                navItemGroups.map(group => (
                  <Fragment key={group}>
                    {group !== "" ? (
                      <div className="NavGroup">{group}</div>
                    ) : (
                      ""
                    )}
                    {navLinksGroup(
                      appRoutesList.filter(
                        route =>
                          route.showInNav &&
                          !route.parent &&
                          route.group === group
                      )
                    )}
                  </Fragment>
                ))}
            </>
          )}
        </div>
        <div className="SubDrawer">
          <LeftNavLink
            label="Back"
            icon={uiBackIcon}
            onClick={handleBackClick}
          />
          {subDrawerOpen ? (
            <>{navLinksGroup(appRoutesList.filter(subNavFilter))}</>
          ) : null}
        </div>
      </div>
    </div>
  );
};

DrawerNavigation.propTypes = {
  filter: PropTypes.string.isRequired
};

export default React.memo(DrawerNavigation);
