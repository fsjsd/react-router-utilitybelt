import React, { Fragment, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import RouteDefinitionNavLink from "./RouteDefinitionNavLink";
import LeftNavLink from "./LeftNavLink";
import { AppRoutesContext } from "../services/AppRoutesContext";

// Left Navigation component.
// - renders out all valid route definitions as grouped links
// or as 'flat' list of matching results to supplied filter

const DrawerNavigation = ({
  filter,
  renderDrawerControl,
  renderDrawerMenu,
  renderRouteNavLinks,
  renderRouteNavLink,
  renderBackLink,
  renderNoRoutes,
  renderNavGroup,
  className
}) => {
  // react-router-utilitybel context globals
  const {
    appRoutes,
    appRoutesList,
    navItemGroups,
    currentRoute,
    filterRoutes,
    navigate
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

  const navLinksGroup = routeDefs =>
    renderRouteNavLinks(() => (
      <>
        {routeDefs.map(route => renderRouteNavLink(route, handleNavLinkClick))}
        {routeDefs.length === 0 && renderNoRoutes()}
      </>
    ));

  const isOpen = () => subDrawerOpen && filter === "";

  return (
    <div className={className}>
      {renderDrawerControl(isOpen(), () => (
        <>
          {renderDrawerMenu("main", () =>
            filter !== "" ? (
              // either render flat search results ...
              navLinksGroup(appRoutesList.filter(filterRoutes(filter)))
            ) : (
              // or the route defintions in their respective groups ...
              <>
                {navItemGroups &&
                  navItemGroups.map(group => (
                    <Fragment key={group}>
                      {group !== "" ? renderNavGroup(group) : ""}
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
            )
          )}
          {renderDrawerMenu("sub", () => {
            return (
              <>
                {renderBackLink(handleBackClick)}
                {subDrawerOpen ? (
                  <>{navLinksGroup(appRoutesList.filter(subNavFilter))}</>
                ) : null}
              </>
            );
          })}
        </>
      ))}
    </div>
  );
};

DrawerNavigation.propTypes = {
  filter: PropTypes.string.isRequired
};

export default React.memo(DrawerNavigation);
