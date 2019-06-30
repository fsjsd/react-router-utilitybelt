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
  DrawerNavigation,
  PageTitle
} from "react-router-utilitybelt";

// implement these in your own project to customise
import { appRoutes, navItemGroups } from "./AppRoutes";
import NavFilterContainer from "./components/NavFilterContainer";
import BreadCrumbsContainer from "./components/BreadCrumbsContainer";

import PageNotFound from "./pages/PageNotFound";

const DrawerNavigationStyled = styled(DrawerNavigation)`
  width: 240px;
  overflow: hidden;

  .DrawerWrapper {
    position: relative;
    width: 480px;
    left: 0;
    display: flex;
    transition: ease 0.3s left;
  }

  .DrawerWrapper.Opened {
    left: -240px;
  }

  .MainDrawer {
    width: 240px;
  }

  .SubDrawer {
    width: 240px;
  }

  .NavGroup {
    font-weight: 400;
    letter-spacing: normal;
    line-height: 16px;
    padding: 0 20px;
    font-size: 13px;

    margin: 24px 0 10px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.66);
  }

  .NavLinks {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }

  .NavLabel,
  .NavLink {
    font-size: 15px;
    display: block;
    padding: 12px 16px;
    color: rgba(0, 0, 0, 0.55);
    display: flex;
  }

  .NavLinkLabel {
    color: rgba(0, 0, 0, 0.75);
    flex-grow: 2;
  }

  .NavLink {
    outline: none;
    text-decoration: none;
    transition: ease 0.5s color, ease 0.2s background-color;
    cursor: pointer;
    display: flex;

    &.active {
      background-color: rgb(239, 246, 255);
      color: rgb(33, 111, 212);
      span {
        color: rgb(33, 111, 212);
      }
    }

    svg {
      font-size: 18px;
      margin-right: 10px;
    }
  }

  .NavLink .NavLink:hover {
    background-color: rgb(240, 240, 240);
    color: rgba(0, 0, 0, 0.95);
  }
`;

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
              <DrawerNavigationStyled filter={navFilter} />
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
