'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var PropTypesReactRouter = _interopDefault(require('react-router-prop-types'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var globalConfig = {
  disabled: false,
  disableInProduction: true
};
var transports = [];

var registerTransport = function registerTransport(transport) {
  if (!globalConfig.disabled && !(globalConfig.disableInProduction && process && process.env && "production" === "production") && transport.isAvailableInEnvironment(globalConfig)) {
    transport.initialise();
    transports.push(transport);
  }
}; // args transform routine. This can be extended
// with common/shared behaviours, but be mindful
// whether individual writers can support shared
// implementations


var transformArgs = function transformArgs(config) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (config === undefined) return args;

    if (config.smile) {
      return [":)"].concat(args);
    }

    if (config.timestamp) {
      return [new Date().toTimeString()].concat(args);
    } // untouched


    return args;
  };
}; // enumerate transports and call the log method on each, applying
// default transforms to args before each writer manipulates further


var dispatchToTransports = function dispatchToTransports(level, config) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // this is essentially compose()
    transports.map(function (transport) {
      return transport.dispatch(level, config).apply(void 0, _toConsumableArray$1(transformArgs(config).apply(void 0, args)));
    });
  };
};

var levels = ["log", "debug", "error", "warn", "fatal"];

var outputs = function outputs(config) {
  return {
    log: function log() {
      return dispatchToTransports("log", config).apply(void 0, arguments);
    },
    debug: function debug() {
      return dispatchToTransports("debug", config).apply(void 0, arguments);
    },
    error: function error() {
      return dispatchToTransports("error", config).apply(void 0, arguments);
    },
    warn: function warn() {
      return dispatchToTransports("warn", config).apply(void 0, arguments);
    }
  };
}; // declare 'base' logger as a higher order function accepting config
// as a pass-through argument


var lgr = function lgr(config) {
  return outputs(config);
}; // but attach each log method as direct methods onto the base function itself
// so each method can be called directly on the function itself it there is
// no config to pass through


levels.map(function (level) {
  return lgr[level] = function () {
    var _outputs;

    return (_outputs = outputs())[level].apply(_outputs, arguments);
  };
});

var makeStyle = function makeStyle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "black" : _ref$backgroundColor,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color;

  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var fontsize = "$1.".concat(5 * i, "rem");

  return "background-color:".concat(backgroundColor, ";color:").concat(color, ";border-radius:3px;padding:2px 4px;margin-left:2px;font-size:").concat(fontsize, ";font-weight:").concat(i === 0 ? "bold" : "normal");
};

var transformConsoleArgs = function transformConsoleArgs(config) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (config === undefined) return args;

    if (config.meta) {
      var metaArgs = typeof config.meta === "string" ? ["%c".concat(config.meta), makeStyle(config)] : [config.meta.map(function (meta) {
        return "%c".concat(meta);
      }).join("")].concat(_toConsumableArray$1(config.meta.map(function (meta, i) {
        return makeStyle(config, i);
      }))); //console.log("ARGDEBUG", [...metaArgs, ...args]);

      return [].concat(_toConsumableArray$1(metaArgs), args);
    }

    return args;
  };
};

var isAvailableInEnvironment = function isAvailableInEnvironment() {
  return console !== undefined;
};

var dispatch = function dispatch(level, config) {
  return function () {
    var _console;

    (_console = console)[level].apply(_console, _toConsumableArray$1(transformConsoleArgs(config).apply(void 0, arguments)));
  };
};

var initialise = function initialise() {};

var consoleTransport = {
  isAvailableInEnvironment: isAvailableInEnvironment,
  dispatch: dispatch,
  initialise: initialise
};

var writerOutputEl = null;

var makeStyle$1 = function makeStyle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "black" : _ref$backgroundColor,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color;
  return "display:inline-block;background-color:".concat(backgroundColor, ";color:").concat(color, ";border-radius:3px;padding:2px 4px;margin-left:2px;");
};

var transformConsoleArgs$1 = function transformConsoleArgs(config) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (config === undefined) return args;

    if (config.meta) {
      var metaArgs = typeof config.meta === "string" ? "<div style=\"".concat(makeStyle$1(), "\">").concat(config.meta, "</div>") : config.meta.map(function (meta) {
        return "<div style=\"".concat(makeStyle$1(config), "\">").concat(meta, "</div>");
      }).join(""); //console.log("ARGDEBUG", [...metaArgs, ...args]);

      return [metaArgs].concat(args).join(" ");
    }

    return args;
  };
};

var lineStyles = {
  log: "",
  debug: "color:blue",
  error: "color:red",
  warn: "color:orange"
};

var isAvailableInEnvironment$1 = function isAvailableInEnvironment() {
  return window !== undefined && window.document !== undefined;
};

var makeEl = function makeEl() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      tag = _ref2.tag,
      style = _ref2.style,
      attrs = _ref2.attrs,
      html = _ref2.html,
      children = _ref2.children,
      refOut = _ref2.refOut,
      events = _ref2.events;

  var el = document.createElement(tag);

  if (html) {
    el.innerHTML = html;
  }

  if (style) {
    var styleVal = Object.keys(style).map(function (cssProp) {
      return "".concat(cssProp, ":").concat(style[cssProp]);
    }).join(";");
    el.setAttribute("style", styleVal);
  }

  if (refOut) {
    //console.log("refOut", el);
    refOut(el);
  }

  if (attrs) {
    for (var attr in attrs) {
      var attrVal = attrs[attr];
      el.setAttribute(attr, attrVal);
    }
  }

  children && children.map(function (childEl) {
    el.appendChild(makeEl(childEl));
  });
  return el;
};

var initialise$1 = function initialise() {
  var existingOutput = document.getElementById("lgr_html_dom_writer__"); // don't remount

  if (existingOutput) {
    return;
  } //writerOutputEl;


  var wrapper = makeEl({
    tag: "DIV",
    // WRAPPER
    attrs: {
      id: "lgr_html_dom_writer__",
      draggable: "draggable"
    },
    style: {
      display: "flex",
      "flex-direction": "column",
      position: "fixed",
      width: "400px",
      top: "300px",
      "background-color": "rgba(255,255,255,0.9)",
      bottom: "0px",
      right: "0px",
      overflow: "hidden",
      border: "solid 1px #007fe0",
      "font-size": "12px"
    },
    children: [{
      tag: "DIV",
      // HEADER
      style: {
        color: "white",
        display: "flex",
        "flex-direction": "row",
        "background-color": "#007fe0",
        padding: "10px",
        "font-size": "12px"
      },
      children: [{
        tag: "DIV",
        html: "lgr",
        style: {
          "flex-grow": "2"
        }
      }, {
        tag: "DIV",
        html: "•",
        style: {
          "align-self": "flex-end",
          "font-size": "20px",
          "line-height": "0.5pt"
        }
      }]
    }, {
      tag: "DIV",
      // CONTENT
      refOut: function refOut(el) {
        writerOutputEl = el;
      },
      style: {
        "flex-grow": 2,
        padding: "10px",
        overflow: "scroll"
      }
    }]
  }); //console.log("wrapper", wrapper);

  document.body.appendChild(wrapper);
};

var dispatch$1 = function dispatch(level, config) {
  return function () {
    var line = document.createElement("DIV");
    line.setAttribute("style", "margin-bottom:2px;".concat(lineStyles[level]));
    line.innerHTML = transformConsoleArgs$1(config).apply(void 0, arguments);
    writerOutputEl.append(line);
  };
};

var htmlDomTransport = {
  isAvailableInEnvironment: isAvailableInEnvironment$1,
  dispatch: dispatch$1,
  initialise: initialise$1
};

var lgrBrowser = function lgrBrowser() {
  registerTransport(consoleTransport);
  return lgr;
};

var exports$1 = {
  lgr: lgr,
  lgrBrowser: lgrBrowser,
  consoleTransport: consoleTransport,
  htmlDomTransport: htmlDomTransport,
  registerTransport: registerTransport
};

var prod = exports$1;

var fsjsdLgr = createCommonjsModule(function (module) {
{
  module.exports = prod;
}
});

var AppRoutesContext = React.createContext(null); // default config options. These can be overridden when setting up <AppRoutesProvider/>

var defaultConfig = {
  // delegate for filter search. This could be upgraded with Lunr.js or better search routines.
  filter: function filter(_filter) {
    return function (route) {
      return route.showInNav && (_filter === "" || (route.navlabel || route.title).toLowerCase().indexOf(_filter.toLowerCase()) !== -1);
    };
  }
};

var AppRoutesProvider = function AppRoutesProvider(_ref) {
  var children = _ref.children,
      location = _ref.location,
      history = _ref.history,
      appRoutesData = _ref.appRoutesData,
      config = _ref.config;
  // state for stuff that can be change within an app.
  // AppRoutes is constant and cannot be changed at run time.
  var initialState = {
    currentRouteTitle: ""
  }; // setState pair for making changes ...

  var _useState = React.useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      routesCtx = _useState2[0],
      setRoutesCtx = _useState2[1]; // pick off config settings or select defaults if none supplied


  var _ref2 = config || {},
      _ref2$filterRoutes = _ref2.filterRoutes,
      filterRoutes = _ref2$filterRoutes === void 0 ? defaultConfig.filter : _ref2$filterRoutes; // transforms the appRoutes 'lookup' to a straight array


  var appRoutesList = Object.keys(appRoutesData).map(function (key) {
    return _objectSpread({}, appRoutesData[key], {
      path: key
    });
  }); // takes the current location path and resolves the matching route definition.
  // Effectively a 'reverse lookup' using react router's matchPath routine

  var resolveAppRoute = function resolveAppRoute(path) {
    return appRoutesList.find(function (route) {
      return reactRouterDom.matchPath(path, {
        path: route.path,
        exact: route.exact,
        strict: false
      });
    });
  };

  var validateRoutes = function validateRoutes() {
    appRoutesList.forEach(function (route) {
      if (route.parent && !appRoutesData[route.parent]) {
        throw new Error("Route: '".concat(route.path, "' declares parent '").concat(route.parent, "' which does not exist"));
      }

      if (route.showSubNav && !appRoutesList.find(function (r) {
        return r.parent === route.path;
      })) {
        throw new Error("Route: '".concat(route.path, "' defines showSubNav=true but no child nodes exist"));
      }
    });
  }; // check routes are setup correctly


  validateRoutes();
  var providerCtx = {
    state: routesCtx,
    appRoutes: appRoutesData,
    appRoutesList: appRoutesList,
    currentPath: location.pathname,
    currentRoute: resolveAppRoute(location.pathname),
    filterRoutes: filterRoutes,
    resolveAppRoute: resolveAppRoute,
    update: function update(state) {
      setRoutesCtx(function (prevState) {
        return _objectSpread({}, prevState, state);
      });
    },
    navigate: function navigate(path) {
      history.push(path);
    }
  }; // logger.log('AppRoutesProvider::mounted', providerCtx);

  return React__default.createElement(AppRoutesContext.Provider, {
    value: providerCtx
  }, children);
};

AppRoutesProvider.defaultProps = {
  config: null
};
AppRoutesProvider.propTypes = {
  children: propTypes.node.isRequired,
  location: PropTypesReactRouter.location.isRequired,
  history: PropTypesReactRouter.history.isRequired,
  appRoutesData: propTypes.object.isRequired,
  config: propTypes.object
};
var AppRoutesContext$1 = reactRouterDom.withRouter(AppRoutesProvider);

var componentsJoin = function componentsJoin(components, separator) {
  return components.reduce(function (acc, curr) {
    return acc.length ? [].concat(_toConsumableArray(acc), [separator, curr]) : [curr];
  }, []).map(function (el, index) {
    return _objectSpread({}, el, {
      key: index
    });
  });
};

// and then sprinkle out a trail of crumbs ...

var BreadCrumbs = function BreadCrumbs(_ref) {
  var renderWrapper = _ref.renderWrapper,
      renderSeparator = _ref.renderSeparator,
      renderCurrentRouteCrumb = _ref.renderCurrentRouteCrumb;

  var _useContext = React.useContext(AppRoutesContext),
      state = _useContext.state,
      currentRoute = _useContext.currentRoute,
      appRoutes = _useContext.appRoutes; // console.log(state, currentRoute);
  // need title override if it's been set


  var currentPageTitle = state.currentRouteTitle; // recursive lookup through route defs to derive breadcrumb trail ...

  var traverseRouteDefs = function traverseRouteDefs(routeDef) {
    var parentEl = routeDef.parent ? traverseRouteDefs(_objectSpread({}, appRoutes[routeDef.parent], {
      path: routeDef.parent
    })) : [];
    return [].concat(_toConsumableArray(parentEl), [routeDef]);
  }; // crumb routine, renders current (deepest) route as text preceeded by
  // parent routes as links


  var crumb = function crumb(routeDef) {
    return routeDef.path === currentRoute.path ? renderCurrentRouteCrumb(currentPageTitle !== '' ? currentPageTitle : currentRoute.title) : React__default.createElement(reactRouterDom.Link, {
      to: routeDef.path
    }, routeDef.title);
  };

  var breadCrumbs = function breadCrumbs() {
    var val = componentsJoin(traverseRouteDefs(currentRoute).map(function (rd) {
      return crumb(rd);
    }), renderSeparator()); // console.log(val);

    return val;
  }; // only render breadcrumbs if current route has a parent.
  // drop this if() check if you always want breadcrumbs to render.


  return currentRoute && currentRoute.parent ? React__default.createElement(React__default.Fragment, null, renderWrapper(breadCrumbs)) : null;
};

BreadCrumbs.propTypes = {
  renderWrapper: propTypes.func.isRequired,
  renderSeparator: propTypes.func.isRequired,
  renderCurrentRouteCrumb: propTypes.func.isRequired
};
var BreadCrumbs$1 = React__default.memo(BreadCrumbs);

//import './RouteDefinitionNavLink.css';

var RouteDefinitionNavLink = function RouteDefinitionNavLink(_ref) {
  var route = _ref.route,
      uiChevron = _ref.uiChevron,
      _onClick = _ref.onClick;
  return React__default.createElement(reactRouterDom.NavLink, {
    className: "NavLink",
    activeClassName: "active",
    to: route.path,
    exact: route.exact,
    onClick: function onClick() {
      return _onClick && _onClick();
    }
  }, route.icon && route.icon(), React__default.createElement("span", {
    className: "NavLinkLabel"
  }, route.navlabel || route.title), route.showSubNav ? uiChevron() : null);
};

RouteDefinitionNavLink.defaultProps = {
  onClick: null
};
RouteDefinitionNavLink.propTypes = {
  route: propTypes.object.isRequired,
  onClick: propTypes.func
};
var RouteDefinitionNavLink$1 = React__default.memo(RouteDefinitionNavLink);

var LeftNavLink = function LeftNavLink(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      onClick = _ref.onClick;
  return React__default.createElement("div", {
    className: "NavLink",
    role: "button",
    onClick: onClick,
    onKeyPress: function onKeyPress() {},
    tabIndex: "0"
  }, icon ? icon() : null, React__default.createElement("span", null, label));
};

LeftNavLink.defaultProps = {
  icon: null
};
LeftNavLink.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  icon: propTypes.func
};

//import logger from "../utils/logger";
//import './DrawerNavigation.css';
// Left Navigation component.
// - renders out all valid route definitions as grouped links
// or as 'flat' list of matching results to supplied filter

var DrawerNavigation = function DrawerNavigation(_ref) {
  var filter = _ref.filter;

  var _useContext = React.useContext(AppRoutesContext),
      appRoutes = _useContext.appRoutes,
      appRoutesList = _useContext.appRoutesList,
      navItemGroups = _useContext.navItemGroups,
      currentRoute = _useContext.currentRoute,
      filterRoutes = _useContext.filterRoutes,
      navigate = _useContext.navigate,
      uiBackIcon = _useContext.uiBackIcon;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      subDrawerOpen = _useState2[0],
      setSubDrawerOpen = _useState2[1];

  var useSubNavOnMount = currentRoute.showSubNav;
  var parentRoute = appRoutes[currentRoute.parent]; // if current has child routes, shown them in sub nav, otherwise show sibling
  // routes

  var currentRouteHasChildRoutes = appRoutesList.find(function (route) {
    return route.parent && route.parent === currentRoute.path;
  }) !== undefined; // for direct page loads, sync the drawer state based on whether the current route
  // has a parent declaring it as a sub nav.

  React.useEffect(function () {
    if (useSubNavOnMount || parentRoute && parentRoute.showSubNav) {
      setSubDrawerOpen(true);
    }
  }, [parentRoute, useSubNavOnMount]); // adjust drawer 'slided' state based on if showSubNav set

  var drawerWrapperClassNames = "DrawerWrapper".concat(subDrawerOpen && filter === "" ? " Opened" : ""); // intercept every Nav Link and slide drawer out if appropriate

  var handleNavLinkClick = function handleNavLinkClick(routeDef) {
    if (routeDef.showSubNav) {
      setSubDrawerOpen(true);
    }
  };

  var handleBackClick = function handleBackClick() {
    // logger.debug('handleBackClick', parentRoute);
    if (parentRoute && parentRoute.parent) {
      // bug here if parent route has dynamic path e.g. /user/:userid
      navigate(parentRoute.parent);
    } else {
      setSubDrawerOpen(false);
    }
  }; // when in sub nav drawer, either show child routes
  // or sibling routes if no children exist


  var subNavFilter = function subNavFilter(route) {
    if (currentRouteHasChildRoutes) {
      return route.showInNav && route.parent === currentRoute.path;
    }

    return route.showInNav && route.path === currentRoute.path;
  };

  var navLinksGroup = function navLinksGroup(routeDefs) {
    return React__default.createElement("ul", {
      className: "NavLinks"
    }, routeDefs.map(function (route) {
      return React__default.createElement("li", {
        key: route.path
      }, React__default.createElement(RouteDefinitionNavLink$1, {
        route: route,
        onClick: function onClick() {
          return handleNavLinkClick(route);
        }
      }));
    }), routeDefs.length === 0 && React__default.createElement("li", null, React__default.createElement("div", {
      className: "NavLabel"
    }, "No matches")));
  };

  return React__default.createElement("div", {
    className: "DrawerNavigation"
  }, React__default.createElement("div", {
    className: drawerWrapperClassNames
  }, React__default.createElement("div", {
    className: "MainDrawer"
  }, filter !== "" ? // either render flat search results ...
  navLinksGroup(appRoutesList.filter(filterRoutes(filter))) : // or the route defintions in their respective groups ...
  React__default.createElement(React__default.Fragment, null, navItemGroups.map(function (group) {
    return React__default.createElement(React.Fragment, {
      key: group
    }, group !== "" ? React__default.createElement("div", {
      className: "NavGroup"
    }, group) : "", navLinksGroup(appRoutesList.filter(function (route) {
      return route.showInNav && !route.parent && route.group === group;
    })));
  }))), React__default.createElement("div", {
    className: "SubDrawer"
  }, React__default.createElement(LeftNavLink, {
    label: "Back",
    icon: uiBackIcon,
    onClick: handleBackClick
  }), subDrawerOpen ? React__default.createElement(React__default.Fragment, null, navLinksGroup(appRoutesList.filter(subNavFilter))) : null)));
};

DrawerNavigation.propTypes = {
  filter: propTypes.string.isRequired
};
var DrawerNavigation$1 = React__default.memo(DrawerNavigation);

// if set elsewhere in the app, returns that as the title for the page.
// This is useful if your page title is determined after side effects.

var useCurrentPageTitle = function useCurrentPageTitle() {
  var _useContext = React.useContext(AppRoutesContext),
      state = _useContext.state,
      currentRoute = _useContext.currentRoute;

  var pageTitleOverride = state.currentRouteTitle; // if the route title has been dynamically overridden, always use that.

  if (pageTitleOverride !== '') {
    return pageTitleOverride;
  } // otherwise, current location path *should* match one of the
  // paths in the AppRoutes definitions.


  if (currentRoute) {
    return currentRoute.title;
  } // if no match, we have to 404


  return 'Page Not Found';
};

/* eslint-disable implicit-arrow-linebreak */
// store setup via AppRoutesContext. This gives other controls
// (e.g. CurrentPageTitle) access to the title derived in a specific
// route component.

var useSetPageTitleOverride = function useSetPageTitleOverride(title) {
  var appRoutesCtx = React.useContext(AppRoutesContext); // set immediately when invoked to prevent 'flash' from useEffect

  if (appRoutesCtx.state.currentRouteTitle !== title) {
    appRoutesCtx.update({
      currentRouteTitle: title
    });
  } // when the page component unmounts, reset the title to empty
  // so the route definition title is used as a default.


  React.useEffect(function () {
    return (// don't repeat setState here, no need ..
      //       setState( .. as above .. );
      // ... but always reset when component unmounts so state is clean
      function () {
        return appRoutesCtx.update({
          currentRouteTitle: ''
        });
      }
    );
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [title]);
};

var exports$2 = {
  AppRoutesContext: AppRoutesContext$1,
  BreadCrumbs: BreadCrumbs$1,
  DrawerNavigation: DrawerNavigation$1,
  RouteDefinitionNavLink: RouteDefinitionNavLink$1,
  useCurrentPageTitle: useCurrentPageTitle,
  useSetPageTitleOverride: useSetPageTitleOverride
};

module.exports = exports$2;
