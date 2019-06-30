import React, { useState, createContext } from "react";
import { withRouter, matchPath } from "react-router-dom";
import PropTypes from "prop-types";
import PropTypesReactRouter from "react-router-prop-types";
// eslint-disable-next-line no-unused-vars
import logger from "fsjsd-lgr";

const AppRoutesContext = createContext(null);

// default config options. These can be overridden when setting up <AppRoutesProvider/>
const defaultConfig = {
  // delegate for filter search. This could be upgraded with Lunr.js or better search routines.
  filter: filter => route =>
    route.showInNav &&
    (filter === "" ||
      (route.navlabel || route.title)
        .toLowerCase()
        .indexOf(filter.toLowerCase()) !== -1)
};

const AppRoutesProvider = ({
  children,
  location,
  history,
  appRoutesData,
  navItemGroups,
  config
}) => {
  // state for stuff that can be change within an app.
  // AppRoutes is constant and cannot be changed at run time.
  const initialState = {
    currentRouteTitle: ""
  };

  // setState pair for making changes ...
  const [routesCtx, setRoutesCtx] = useState(initialState);

  // pick off config settings or select defaults if none supplied
  const { filterRoutes = defaultConfig.filter } = config || {};

  // transforms the appRoutes 'lookup' to a straight array
  const appRoutesList = Object.keys(appRoutesData).map(key => ({
    ...appRoutesData[key],
    path: key
  }));

  // takes the current location path and resolves the matching route definition.
  // Effectively a 'reverse lookup' using react router's matchPath routine
  const resolveAppRoute = path =>
    appRoutesList.find(route =>
      matchPath(path, {
        path: route.path,
        exact: route.exact,
        strict: false
      })
    );

  const validateRoutes = () => {
    appRoutesList.forEach(route => {
      if (route.parent && !appRoutesData[route.parent]) {
        throw new Error(
          `Route: '${route.path}' declares parent '${
            route.parent
          }' which does not exist`
        );
      }
      if (
        route.showSubNav &&
        !appRoutesList.find(r => r.parent === route.path)
      ) {
        throw new Error(
          `Route: '${
            route.path
          }' defines showSubNav=true but no child nodes exist`
        );
      }
    });
  };

  // check routes are setup correctly
  validateRoutes();

  const providerCtx = {
    state: routesCtx,
    appRoutes: appRoutesData,
    appRoutesList,
    navItemGroups,
    currentPath: location.pathname,
    currentRoute: resolveAppRoute(location.pathname),
    filterRoutes,
    resolveAppRoute,
    update(state) {
      setRoutesCtx(prevState => ({ ...prevState, ...state }));
    },
    navigate(path) {
      history.push(path);
    }
  };

  // logger.log('AppRoutesProvider::mounted', providerCtx);

  return (
    <AppRoutesContext.Provider value={providerCtx}>
      {children}
    </AppRoutesContext.Provider>
  );
};

AppRoutesProvider.defaultProps = {
  config: null
};

AppRoutesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypesReactRouter.location.isRequired,
  history: PropTypesReactRouter.history.isRequired,
  appRoutesData: PropTypes.object.isRequired,
  config: PropTypes.object
};

export { AppRoutesContext };

export default withRouter(AppRoutesProvider);
