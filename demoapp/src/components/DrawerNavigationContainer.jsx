import React from "react";
import styled from "styled-components";
import { MdChevronRight, MdArrowBack } from "react-icons/md";

import {
  DrawerNavigation,
  RouteDefinitionNavLink,
  LeftNavLink
} from "react-router-utilitybelt";

const navWidth = "240";

const DrawerNavigationStyled = styled(DrawerNavigation)`
  width: ${navWidth}px;
  overflow: hidden;
`;

const DrawerWrapper = styled.div`
  position: relative;
  width: ${navWidth * 2}px;
  left: 0;
  display: flex;
  transition: ease 0.3s left;
  ${props =>
    props.isOpen
      ? `
    left: -${navWidth}px;`
      : ``}
`;

const NavGroup = styled.div`
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  padding: 0 20px;
  font-size: 13px;

  margin: 24px 0 10px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.66);
`;

const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
`;

const navLinkStyle = `
  font-size: 15px;
  color: rgba(0, 0, 0, 0.55);
  padding: 12px 16px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: ease 0.5s color, ease 0.2s background-color;
  display: flex;

  &:hover {
    background-color: rgb(240, 240, 240);
    color: rgba(0, 0, 0, 0.95);
  }
  
  &.active {
    background-color: rgb(239, 246, 255);
    color: rgb(33, 111, 212);
    span,
    label {
      color: rgb(33, 111, 212);
    }
  }

  label {
    color: rgba(0, 0, 0, 0.75);
    flex-grow: 2;
    cursor: pointer;
  }

  svg{
    font-size: 18px;
    }

  svg:first-child {
    margin-right: 10px;
  }
`;

const StyledLeftNavLink = styled(LeftNavLink)`
  ${navLinkStyle}
`;

const StyledRouteDefinitionNavLink = styled(RouteDefinitionNavLink)`
  ${navLinkStyle}
`;

const DrawerMenu = styled.div`
  width: ${navWidth}px;
`;

const NavLabel = styled.div`
  font-size: 15px;
  display: block;
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.55);
  display: flex;
`;

const DrawerNavigationContainer = ({ filter }) => (
  <DrawerNavigationStyled
    filter={filter}
    renderDrawerMenu={(drawerType, renderChildren) => (
      <DrawerMenu>{renderChildren()}</DrawerMenu>
    )}
    renderDrawerControl={(isOpen, renderChildren) => (
      <DrawerWrapper isOpen={isOpen}>{renderChildren()}</DrawerWrapper>
    )}
    renderRouteNavLinks={renderChildren => (
      <NavLinks>{renderChildren()}</NavLinks>
    )}
    renderRouteNavLink={(route, onClick) => (
      <li key={route.path}>
        <StyledRouteDefinitionNavLink
          route={route}
          onClick={() => onClick(route)}
          uiChevron={() => <MdChevronRight />}
        />
      </li>
    )}
    renderNoRoutes={() => (
      <li>
        <NavLabel>No matches</NavLabel>
      </li>
    )}
    renderBackLink={onClick => (
      <StyledLeftNavLink
        label="Back"
        onClick={onClick}
        icon={() => <MdArrowBack />}
      />
    )}
    renderNavGroup={group => <NavGroup>{group}</NavGroup>}
  />
);

export default DrawerNavigationContainer;
