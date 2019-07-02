/* eslint-disable no-multi-spaces */
import {
  MdHome,
  MdAttachMoney,
  MdLocalLibrary,
  MdHelp,
  MdSettings,
  MdReceipt,
  MdAssessment,
  MdPieChart,
  MdDescription,
  MdPermContactCalendar
} from "react-icons/md"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa
import Stubs from "./pages/Stubs";

// Route Definitions Groups
// ========================
// simple grouping strategy to assist with navigation groups.
const defaultGroup = "";
const toolsGroup = "Tools";
const demosGroup = "Demos";
const helpGroup = "Help";

const navItemGroups = [defaultGroup, toolsGroup, demosGroup, helpGroup];

// Simple factory func to set defaults for all route definitions.
// Note in AppRoutes below where some routes override these defaults.
const makeRouteDefinition = r => ({
  showInNav: true, // whether route appears in main site navigation
  showInSearch: true, // whether route appears in search results
  showSubNav: false /* when true, will render any child routes (defined by their
                          parent prop link) in navigation */,
  group: defaultGroup, // grouping for item
  // title              - route's title as it will appear in all UI comps
  // navLabel           - overrides title when shown in left nav
  // icon               - icon component to show in UI comps
  // component          - page/screen component that will be rendered in main <Route>
  // exact              - optional react-router exact match prop, echoed onto <Route>
  // parent             - path of parent route, facilitates breadcrumbs component
  ...r
});

// Route Definitions
// ========================
// Definitions for your app routes!
//
// These need to match ordering rules for React Router. It's simple
// to extend this structure with groupings (for Switch) and nested
// routes.

const appRoutes = {
  "/": makeRouteDefinition({
    title: "Summary",
    navlabel: "Home",
    icon: MdHome,
    component: Stubs.Home,
    exact: true
  }),
  "/catalog": makeRouteDefinition({
    title: "Catalog",
    icon: MdLocalLibrary,
    component: Stubs.Catalog
  }),
  "/orders": makeRouteDefinition({
    title: "Orders",
    icon: MdReceipt,
    component: Stubs.Orders
  }),
  "/billing": makeRouteDefinition({
    title: "Billing",
    icon: MdAttachMoney,
    component: Stubs.Billing
  }),
  "/portfolio": makeRouteDefinition({
    title: "Portfolio",
    icon: MdAssessment,
    component: Stubs.Portfolio
  }),
  "/charts": makeRouteDefinition({
    title: "Charts",
    icon: MdPieChart,
    component: Stubs.Charts,
    group: toolsGroup
  }),
  "/reports": makeRouteDefinition({
    title: "Reports",
    icon: MdDescription,
    component: Stubs.Reports,
    group: toolsGroup
  }),
  "/report/:reportId": makeRouteDefinition({
    title: "",
    icon: MdDescription,
    component: Stubs.Report,
    group: toolsGroup,
    showInNav: false,
    parent: "/reports"
  }),
  "/form": makeRouteDefinition({
    title: "Form Demo",
    icon: MdPermContactCalendar,
    component: Stubs.FormExample,
    group: toolsGroup
  }),
  "/support": makeRouteDefinition({
    title: "Support",
    icon: MdHelp,
    component: Stubs.Support,
    group: helpGroup
  }),
  "/breadcrumbs": makeRouteDefinition({
    title: "Breadcrumbs demo",
    icon: MdSettings,
    component: Stubs.Breadcrumbs,
    exact: true,
    group: demosGroup,
    showSubNav: true
  }),
  "/breadcrumbs/1": makeRouteDefinition({
    title: "Level 1",
    icon: MdSettings,
    component: Stubs.Breadcrumbs1,
    parent: "/breadcrumbs",
    exact: true,
    group: demosGroup
  }),
  "/breadcrumbs/1b": makeRouteDefinition({
    title: "Level 1b",
    icon: MdSettings,
    component: Stubs.Breadcrumbs1,
    parent: "/breadcrumbs",
    exact: true,
    group: demosGroup
  }),
  "/breadcrumbs/1/2": makeRouteDefinition({
    title: "Level 2",
    icon: MdSettings,
    component: Stubs.Breadcrumbs2,
    parent: "/breadcrumbs/1",
    exact: true,
    group: demosGroup
  }),
  "/breadcrumbs/1/2b": makeRouteDefinition({
    title: "Level 2 b",
    icon: MdSettings,
    component: Stubs.Breadcrumbs2,
    parent: "/breadcrumbs/1",
    exact: true,
    group: demosGroup
  }),
  "/settings": makeRouteDefinition({
    title: "Settings",
    icon: MdSettings,
    component: Stubs.Settings,
    showInNav: false
  })
};

export { makeRouteDefinition, navItemGroups, appRoutes };
