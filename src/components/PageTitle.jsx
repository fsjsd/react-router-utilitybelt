import React from "react";
import useCurrentPageTitle from "../hooks/useCurrentPageTitle";

const PageTitle = () => {
  const pageTitle = useCurrentPageTitle();
  return <>{pageTitle}</>;
};

export default PageTitle;
