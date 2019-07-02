import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { AppRoutesContext } from "../services/AppRoutesContext";

// RouteCatalog Component
// ========================
// Rather than manually declaring all your routes, this component enumerates your
// route definitions and renders them out automatically.

const RouteCatalog = ({ onRouteNotFound }) => {
  const { appRoutesList } = useContext(AppRoutesContext);

  //console.log("RouteCatalog", appRoutesList);

  // TODO: test whether route.component is a React component and
  // not a React Element, throw error accordingly
  return (
    <Switch>
      {appRoutesList.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={routeProps => <route.component {...routeProps} />}
        />
      ))}
      {onRouteNotFound && <Route render={() => onRouteNotFound()} />}
    </Switch>
  );
};

RouteCatalog.propTypes = {
  onRouteNotFound: PropTypes.func.isRequired
};

export default React.memo(RouteCatalog);
