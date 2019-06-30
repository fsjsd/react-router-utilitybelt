import AppRoutesProvider, {
  AppRoutesContext
} from "./services/AppRoutesContext";
import BreadCrumbs from "./components/BreadCrumbs";
import RouteCatalog from "./components/RouteCatalog";
import DrawerNavigation from "./components/DrawerNavigation";
import RouteDefinitionNavLink from "./components/RouteDefinitionNavLink";
import PageTitle from "./components/PageTitle";
import useCurrentPageTitle from "./hooks/useCurrentPageTitle";
import useSetPageTitleOverride from "./hooks/useSetPageTitleOverride";

export default {
  AppRoutesProvider,
  AppRoutesContext,
  RouteCatalog,
  BreadCrumbs,
  DrawerNavigation,
  PageTitle,
  RouteDefinitionNavLink,
  useCurrentPageTitle,
  useSetPageTitleOverride
};
