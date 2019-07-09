# Defining Routes

You'll need to setup definitions for your routes in a simple js module in the root of your app (src/).

See /demoapp/AppRoutes.jsx as an example in this repo.

Each route must have a unique key which acts as the path property that is passed to React Router, and 
under this you define Route properties, including the component that React Router will load when matched.

Properties you can set are as follows:

```
showInNav          - whether route appears in main site navigation
showInSearch       - whether route appears in search results
showSubNav         - when true, will render any child routes (defined by their parent prop link) in navigation
group              - grouping for item
title              - route's title as it will appear in all UI comps
navLabel           - overrides title when shown in left nav
icon               - icon component to show in UI comps
component          - page/screen component that will be rendered in main <Route>
exact              - optional react-router exact match prop, echoed onto <Route>
parent             - path of parent route, facilitates breadcrumbs component
```
