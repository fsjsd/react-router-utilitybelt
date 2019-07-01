import React, { useState } from "react";
import styled from "styled-components";

// My simple demo site HTML scaffolding - adds zero logic just presentation
import DemoSiteLayoutContainer from "fsjsd-demosite";

// React Router
import { BrowserRouter } from "react-router-dom";

// Import from react-router-utilitybelt
import {
  AppRoutesProvider,
  RouteCatalog,
  PageTitle
} from "react-router-utilitybelt";

// implement these in your own project to customise
import { appRoutes, navItemGroups } from "./AppRoutes";
import NavFilterContainer from "./components/NavFilterContainer";
import BreadCrumbsContainer from "./components/BreadCrumbsContainer";
import DrawerNavigationContainer from "./components/DrawerNavigationContainer";

import PageNotFound from "./pages/PageNotFound";

function App() {
  const [navFilter, setNavFilter] = useState("");

  return (
    <BrowserRouter>
      <AppRoutesProvider
        appRoutesData={appRoutes}
        navItemGroups={navItemGroups}
      >
        <DemoSiteLayoutContainer
          renderHeader={() => (
            <>
              <b>
                <PageTitle />
              </b>{" "}
              - React Router Utility Belt Demo
            </>
          )}
          renderNavigation={() => (
            <div>
              {/* Filter control for nav */}
              <NavFilterContainer
                onChange={filterText => setNavFilter(filterText)}
                value={navFilter}
              />
              {/* Navigation Links */}
              <DrawerNavigationContainer filter={navFilter} />
            </div>
          )}
          renderContents={() => (
            <div className="Route">
              <BreadCrumbsContainer />
              {/* Route component renders ... no repeated route paths! */}
              <RouteCatalog onRouteNotFound={() => <PageNotFound />} />
            </div>
          )}
        />
      </AppRoutesProvider>
    </BrowserRouter>
  );
}

export default App;
