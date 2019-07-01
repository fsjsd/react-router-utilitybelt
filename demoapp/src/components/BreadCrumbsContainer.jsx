import React from "react";
import { BreadCrumbs } from "react-router-utilitybelt";
import styled from "styled-components";

const BreadCrumbsStyled = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: solid 1px #ccc;
`;

const Separator = styled.span`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

const CurrentCrumb = styled.span`
  font-weight: bold;
`;

// BreadCrumbsContainer used to apply UI specifics to the underlying
// logic of the BreadCrumbsComponent

const BreadCrumbsContainer = () => (
  <BreadCrumbs
    renderWrapper={renderChildren => (
      <BreadCrumbsStyled>{renderChildren()}</BreadCrumbsStyled>
    )}
    renderSeparator={() => <Separator>&raquo;</Separator>}
    renderCurrentRouteCrumb={title => <CurrentCrumb>{title}</CurrentCrumb>}
  />
);

export default BreadCrumbsContainer;
