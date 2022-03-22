'use strict';

var React = require('react');
var reactRouterDom = require('react-router-dom');
var reactIs = require('react-is');
var PropTypesReactRouter = require('react-router-prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var reactIs__default = /*#__PURE__*/_interopDefaultLegacy(reactIs);
var PropTypesReactRouter__default = /*#__PURE__*/_interopDefaultLegacy(PropTypesReactRouter);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

var has$1 = has$2;

var printWarning$1 = function() {};

{
  var ReactPropTypesSecret = ReactPropTypesSecret$1;
  var loggedTypeFailures = {};
  var has = has$1;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

{
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs__default["default"].isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var require$$1 = factoryWithTypeCheckers;

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = reactIs__default["default"];

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require$$1(ReactIs.isElement, throwOnDirectAccess);
}
});

var PropTypes = propTypes;

var dev = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// with credit to Martin Ankerl for the idea to use the golden ratio
// to select distinct hues from around the hue wheel.
// https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
// # use golden ratio
var golden_ratio_conjugate = 0.618033988749895; //let h = Math.random(); // # use random start value

var h = 0.333;

var generateBestHue = function generateBestHue() {
  h += golden_ratio_conjugate;
  h %= 1;
  var hue = Math.floor(360 * h);
  return hue;
};

var colorMapCache = {};

var getColor = function getColor(value, pos) {
  var hue = colorMapCache[value];

  if (hue === undefined) {
    hue = generateBestHue();
    colorMapCache[value] = hue;
  }
  /*
  0 = 0     20
  1 = 10    10
  2 = 15    5
  3 = 17    
  n = 20
  */
  //console.log("getColor", { value, pos, hue });
  //return `hsl(${hue}, 70%, ${45 + pos * 20}%)`;


  return "hsl(".concat(hue, ", 70%, ").concat(45 + pos * 5, "%)");
};

var getTimeStamp = function getTimeStamp() {
  /*
  getHours() - Returns the hour of the day (0-23).
  getMinutes() - Returns the minute (0-59).
  getSeconds() - Returns the second (0-59).
  getMilliseconds() - Returns the milliseconds (0-999).
  */
  var now = new Date();
  return "".concat(now.getHours().toString().padStart(2, "0"), ":").concat(now.getMinutes().toString().padStart(2, "0"), ":").concat(now.getSeconds().toString().padStart(2, "0"), ".").concat(now.getMilliseconds());
};

var globalConfig = {
  disabled: false,
  disableInProduction: true
};
var transports = [];

var clearTransports = function clearTransports() {
  transports.length = 0;
};

var registerTransport = function registerTransport(transport) {
  if (!globalConfig.disabled && !(globalConfig.disableInProduction && process && process.env && "development" === "production") && transport.isAvailableInEnvironment(globalConfig)) {
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
      return [getTimeStamp()].concat(args);
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

    if (transports.length === 0) {
      throw new Error("lgr: No logging transports defined");
    } // this is essentially compose()


    transports.map(function (transport) {
      return transport.dispatch(level, config).apply(void 0, _toConsumableArray(transformArgs(config).apply(void 0, args)));
    });
  };
};

var levels = ["log", "debug", "error", "warn", "fatal"];
/*
const outputs = function(config) {
  return {
    log: (...args) => dispatchToTransports("log", config)(...args),
    debug: (...args) => dispatchToTransports("debug", config)(...args),
    error: (...args) => dispatchToTransports("error", config)(...args),
    warn: (...args) => dispatchToTransports("warn", config)(...args)
  };
};

// declare 'base' logger as a higher order function accepting config
// as a pass-through argument
const lgr = config => outputs(config);

// but attach each log method as direct methods onto the base function itself
// so each method can be called directly on the function itself it there is
// no config to pass through
levels.map(level => (lgr[level] = (...args) => outputs()[level](...args)));
*/

exports.lgr = null;

exports.lgr = function lgr() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    meta: []
  };

  var newLgr = function newLgr() {
    var newConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      meta: []
    };
    return exports.lgr(_objectSpread({}, config, newConfig, {
      meta: [].concat(_toConsumableArray(config.meta || []), [newConfig.meta || []])
    }));
  };

  levels.map(function (level) {
    return newLgr[level] = function () {
      return dispatchToTransports(level, config).apply(void 0, arguments);
    };
  });
  return newLgr;
};

var makeLogStyle = function makeLogStyle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? null : _ref$backgroundColor,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color;

  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  //const fontsize = `$1.${5 * i}rem`;
  var fontsize = "$1.5rem";
  var bgColor = backgroundColor === null ? getColor(meta, i) : backgroundColor;
  return "background-color:".concat(bgColor, ";color:").concat(color, ";border-radius:3px;padding:2px 4px;margin-left:2px;font-size:").concat(fontsize, ";font-weight:").concat(i === 0 ? "bold" : "normal");
};

var transformConsoleArgs = function transformConsoleArgs(config) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (config === undefined) return args;

    if (config.meta) {
      var metaArgs = typeof config.meta === "string" ? ["%c".concat(config.meta), makeLogStyle(config, config.meta)] : [config.meta.map(function (meta) {
        return "%c".concat(meta);
      }).join("")].concat(_toConsumableArray(config.meta.map(function (meta, i) {
        return makeLogStyle(config, config.meta[0], i);
      }))); //console.log("ARGDEBUG", [...metaArgs, ...args]);

      return [].concat(_toConsumableArray(metaArgs), args);
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

    (_console = console)[level].apply(_console, _toConsumableArray(transformConsoleArgs(config).apply(void 0, arguments)));
  };
};

var initialise = function initialise() {};

var consoleTransport = {
  isAvailableInEnvironment: isAvailableInEnvironment,
  dispatch: dispatch,
  initialise: initialise
};

var terminalColors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m"
}; // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color


var colorLookup = function colorLookup(col) {
  return col in terminalColors ? terminalColors[col] : terminalColors.FgGreen;
};

var transformConsoleArgs$1 = function transformConsoleArgs(config) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (config === undefined) return args; // TODO: This needs work!

    if (config.meta) {
      var metaArgs = typeof config.meta === "string" ? ["".concat(colorLookup(config.color), "%s").concat(terminalColors.Reset), config.meta] : config.meta.reduce(function (acc, curr) {
        return [].concat(_toConsumableArray(acc), ["".concat(colorLookup(config.color), "%s").concat(terminalColors.Reset), curr]);
      }, []); //console.log("ARGDEBUG", [...metaArgs, ...args]);

      return [].concat(_toConsumableArray(metaArgs), args);
    }

    return args;
  };
};

var isAvailableInEnvironment$1 = function isAvailableInEnvironment() {
  return console !== undefined;
};

var dispatch$1 = function dispatch(level, config) {
  return function () {
    var _console;

    (_console = console)[level].apply(_console, _toConsumableArray(transformConsoleArgs$1(config).apply(void 0, arguments)));
  };
};

var initialise$1 = function initialise() {};

var nodeTransport = {
  isAvailableInEnvironment: isAvailableInEnvironment$1,
  dispatch: dispatch$1,
  initialise: initialise$1
};

var writerOutputEl = null;

var makeLogStyle$1 = function makeLogStyle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? null : _ref$backgroundColor,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color;

  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var bgColor = backgroundColor === null ? getColor(meta, i) : backgroundColor;
  return "display:inline-block;background-color:".concat(bgColor, ";color:").concat(color, ";border-radius:3px;padding:2px 4px;margin-left:2px;");
};

var transformConsoleArgs$2 = function transformConsoleArgs(config) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (config === undefined) return args;

    if (config.meta) {
      var metaArgs = typeof config.meta === "string" ? "<div style=\"".concat(makeLogStyle$1(config, config.meta), "\">").concat(config.meta, "</div>") : config.meta.map(function (meta, i) {
        return "<div style=\"".concat(makeLogStyle$1(config, config.meta[0], i), "\">").concat(meta, "</div>");
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

var isAvailableInEnvironment$2 = function isAvailableInEnvironment() {
  return window !== undefined && window.document !== undefined;
};

var makeStyle = function makeStyle(styles) {
  return Object.keys(styles).map(function (cssProp) {
    return "".concat(cssProp, ":").concat(styles[cssProp]);
  }).join(";");
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
    var styleVal = makeStyle(style);
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

  if (events) {
    for (var ev in events) {
      el.addEventListener(ev, events[ev]);
    }
  }

  children && children.map(function (childEl) {
    el.appendChild(makeEl(childEl));
  });
  return el;
};

var initialise$2 = function initialise() {
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
      "font-size": "12px",
      "font-family": "Helvetica, arial"
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
        html: "&#0149;",
        style: {
          "align-self": "flex-end",
          "font-size": "20px",
          "line-height": "0.5pt",
          height: "14px",
          "letter-spacing": "0.5pt"
        },
        events: {
          click: function click() {
            writerOutputEl.innerHTML = "ACCESS";
          }
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

var dispatch$2 = function dispatch(level, config) {
  return function () {
    var line = document.createElement("DIV");
    line.setAttribute("style", "margin-bottom:2px;".concat(lineStyles[level]));
    line.innerHTML = transformConsoleArgs$2(config).apply(void 0, arguments);
    writerOutputEl.append(line);
  };
};

var htmlDomTransport = {
  isAvailableInEnvironment: isAvailableInEnvironment$2,
  dispatch: dispatch$2,
  initialise: initialise$2
};

var lgrBrowser = function lgrBrowser() {
  registerTransport(consoleTransport);
  return exports.lgr({});
};

var lgrNode = function lgrNode() {
  registerTransport(nodeTransport);
  return exports.lgr({});
};

exports.clearTransports = clearTransports;
exports.consoleTransport = consoleTransport;
exports.htmlDomTransport = htmlDomTransport;
exports.lgrBrowser = lgrBrowser;
exports.lgrNode = lgrNode;
exports.nodeTransport = nodeTransport;
exports.registerTransport = registerTransport;
});

unwrapExports(dev);
dev.lgr;
dev.clearTransports;
dev.consoleTransport;
dev.htmlDomTransport;
dev.lgrBrowser;
dev.lgrNode;
dev.nodeTransport;
dev.registerTransport;

createCommonjsModule(function (module) {
{
  module.exports = dev;
}
});

var AppRoutesContext = /*#__PURE__*/React.createContext(null); // default config options. These can be overridden when setting up <AppRoutesProvider/>

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
      navItemGroups = _ref.navItemGroups,
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
    return _objectSpread2(_objectSpread2({}, appRoutesData[key]), {}, {
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
    navItemGroups: navItemGroups,
    currentPath: location.pathname,
    currentRoute: resolveAppRoute(location.pathname),
    filterRoutes: filterRoutes,
    resolveAppRoute: resolveAppRoute,
    update: function update(state) {
      setRoutesCtx(function (prevState) {
        return _objectSpread2(_objectSpread2({}, prevState), state);
      });
    },
    navigate: function navigate(path) {
      history.push(path);
    }
  }; // logger.log('AppRoutesProvider::mounted', providerCtx);

  return /*#__PURE__*/React__default["default"].createElement(AppRoutesContext.Provider, {
    value: providerCtx
  }, children);
};

AppRoutesProvider.defaultProps = {
  config: null
};
AppRoutesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypesReactRouter__default["default"].location.isRequired,
  history: PropTypesReactRouter__default["default"].history.isRequired,
  appRoutesData: PropTypes.object.isRequired,
  config: PropTypes.object
};
var AppRoutesProvider$1 = reactRouterDom.withRouter(AppRoutesProvider);

var componentsJoin = function componentsJoin(components, separator) {
  return components.reduce(function (acc, curr) {
    return acc.length ? [].concat(_toConsumableArray(acc), [separator, curr]) : [curr];
  }, []).map(function (el, index) {
    return _objectSpread2(_objectSpread2({}, el), {}, {
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
      appRoutes = _useContext.appRoutes; // need title override if it's been set


  var currentPageTitle = state.currentRouteTitle; // recursive lookup through route defs to derive breadcrumb trail ...

  var traverseRouteDefs = function traverseRouteDefs(routeDef) {
    var parentEl = routeDef.parent ? traverseRouteDefs(_objectSpread2(_objectSpread2({}, appRoutes[routeDef.parent]), {}, {
      path: routeDef.parent
    })) : [];
    return [].concat(_toConsumableArray(parentEl), [routeDef]);
  }; // crumb routine, renders current (deepest) route as text preceeded by
  // parent routes as links


  var crumb = function crumb(routeDef) {
    return routeDef.path === currentRoute.path ? renderCurrentRouteCrumb(currentPageTitle !== "" ? currentPageTitle : currentRoute.title) : /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
      to: routeDef.path
    }, routeDef.title);
  };

  var breadCrumbs = function breadCrumbs() {
    var val = componentsJoin(traverseRouteDefs(currentRoute).map(function (rd) {
      return crumb(rd);
    }), renderSeparator()); // console.log(val);

    return val;
  }; //console.log("BreadCrumbs", currentRoute, currentRoute.parent);
  // only render breadcrumbs if current route has a parent.
  // drop this if() check if you always want breadcrumbs to render.


  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, currentRoute && currentRoute.parent && renderWrapper(breadCrumbs));
};

BreadCrumbs.propTypes = {
  renderWrapper: PropTypes.func.isRequired,
  renderSeparator: PropTypes.func.isRequired,
  renderCurrentRouteCrumb: PropTypes.func.isRequired
};
var BreadCrumbs$1 = /*#__PURE__*/React__default["default"].memo(BreadCrumbs);

// ========================
// Rather than manually declaring all your routes, this component enumerates your
// route definitions and renders them out automatically.

var RouteCatalog = function RouteCatalog(_ref) {
  var onRouteNotFound = _ref.onRouteNotFound;

  var _useContext = React.useContext(AppRoutesContext),
      appRoutesList = _useContext.appRoutesList; //console.log("RouteCatalog", appRoutesList);
  // TODO: test whether route.component is a React component and
  // not a React Element, throw error accordingly


  return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Switch, null, appRoutesList.map(function (route) {
    return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
      key: route.path,
      path: route.path,
      exact: route.exact,
      render: function render(routeProps) {
        return /*#__PURE__*/React__default["default"].createElement(route.component, routeProps);
      }
    });
  }), onRouteNotFound && /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
    render: function render() {
      return onRouteNotFound();
    }
  }));
};

RouteCatalog.propTypes = {
  onRouteNotFound: PropTypes.func.isRequired
};
var RouteCatalog$1 = /*#__PURE__*/React__default["default"].memo(RouteCatalog);

//import './RouteDefinitionNavLink.css';

var RouteDefinitionNavLink = function RouteDefinitionNavLink(_ref) {
  var route = _ref.route,
      uiChevron = _ref.uiChevron,
      _onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.NavLink, {
    className: className,
    activeClassName: "active",
    to: route.path,
    exact: route.exact,
    onClick: function onClick() {
      return _onClick && _onClick();
    }
  }, route.icon && route.icon(), /*#__PURE__*/React__default["default"].createElement("label", null, route.navlabel || route.title), route.showSubNav ? uiChevron ? uiChevron() : ">" : null);
};

RouteDefinitionNavLink.defaultProps = {
  onClick: null
};
RouteDefinitionNavLink.propTypes = {
  route: PropTypes.object.isRequired,
  onClick: PropTypes.func
};
var RouteDefinitionNavLink$1 = /*#__PURE__*/React__default["default"].memo(RouteDefinitionNavLink);

var LeftNavLink = function LeftNavLink(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    role: "button",
    onClick: onClick,
    onKeyPress: function onKeyPress() {},
    tabIndex: "0"
  }, icon ? icon() : null, /*#__PURE__*/React__default["default"].createElement("span", null, label));
};

LeftNavLink.defaultProps = {
  icon: null
};
LeftNavLink.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.func
};

// - renders out all valid route definitions as grouped links
// or as 'flat' list of matching results to supplied filter

var DrawerNavigation = function DrawerNavigation(_ref) {
  var filter = _ref.filter,
      renderDrawerControl = _ref.renderDrawerControl,
      renderDrawerMenu = _ref.renderDrawerMenu,
      renderRouteNavLinks = _ref.renderRouteNavLinks,
      renderRouteNavLink = _ref.renderRouteNavLink,
      renderBackLink = _ref.renderBackLink,
      renderNoRoutes = _ref.renderNoRoutes,
      renderNavGroup = _ref.renderNavGroup,
      className = _ref.className;

  // react-router-utilitybel context globals
  var _useContext = React.useContext(AppRoutesContext),
      appRoutes = _useContext.appRoutes,
      appRoutesList = _useContext.appRoutesList,
      navItemGroups = _useContext.navItemGroups,
      currentRoute = _useContext.currentRoute,
      filterRoutes = _useContext.filterRoutes,
      navigate = _useContext.navigate;
  /*
  console.log(
    "appRoutes",
    appRoutes,
    navItemGroups,
    currentRoute,
    filterRoutes
  );
  */


  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      subDrawerOpen = _useState2[0],
      setSubDrawerOpen = _useState2[1];

  var useSubNavOnMount = currentRoute && currentRoute.showSubNav;
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
  }, [parentRoute, useSubNavOnMount]); // intercept every Nav Link and slide drawer out if appropriate

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

    return route.showInNav && (route.path === currentRoute.path || route.parent === currentRoute.parent);
  };

  var navLinksGroup = function navLinksGroup(routeDefs) {
    return renderRouteNavLinks(function () {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, routeDefs.map(function (route) {
        return renderRouteNavLink(route, handleNavLinkClick);
      }), routeDefs.length === 0 && renderNoRoutes());
    });
  };

  var isOpen = function isOpen() {
    return subDrawerOpen && filter === "";
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, renderDrawerControl(isOpen(), function () {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, renderDrawerMenu("main", function () {
      return filter !== "" ? // either render flat search results ...
      navLinksGroup(appRoutesList.filter(filterRoutes(filter))) :
      /*#__PURE__*/
      // or the route defintions in their respective groups ...
      React__default["default"].createElement(React__default["default"].Fragment, null, navItemGroups && navItemGroups.map(function (group) {
        return /*#__PURE__*/React__default["default"].createElement(React.Fragment, {
          key: group
        }, group !== "" ? renderNavGroup(group) : "", navLinksGroup(appRoutesList.filter(function (route) {
          return route.showInNav && !route.parent && route.group === group;
        })));
      }));
    }), renderDrawerMenu("sub", function () {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, renderBackLink(handleBackClick), subDrawerOpen ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, navLinksGroup(appRoutesList.filter(subNavFilter))) : null);
    }));
  }));
};

DrawerNavigation.propTypes = {
  filter: PropTypes.string.isRequired
};
var DrawerNavigation$1 = /*#__PURE__*/React__default["default"].memo(DrawerNavigation);

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

var PageTitle = function PageTitle() {
  var pageTitle = useCurrentPageTitle();
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, pageTitle);
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

var exports$1 = {
  AppRoutesProvider: AppRoutesProvider$1,
  AppRoutesContext: AppRoutesContext,
  RouteCatalog: RouteCatalog$1,
  BreadCrumbs: BreadCrumbs$1,
  DrawerNavigation: DrawerNavigation$1,
  PageTitle: PageTitle,
  RouteDefinitionNavLink: RouteDefinitionNavLink$1,
  LeftNavLink: LeftNavLink,
  useCurrentPageTitle: useCurrentPageTitle,
  useSetPageTitleOverride: useSetPageTitleOverride
};

module.exports = exports$1;
