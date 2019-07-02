'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var reactIs = _interopDefault(require('react-is'));
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

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

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
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
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
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
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

          printWarning(
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
checkPropTypes.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

{
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
  function PropTypeError(message) {
    this.message = message;
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

      if (secret !== ReactPropTypesSecret_1) {
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
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
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

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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
      if (!reactIs.isValidElementType(propValue)) {
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
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
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
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
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

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
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
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
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

var dev = exports$1;

var fsjsdLgr = createCommonjsModule(function (module) {
{
  module.exports = dev;
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
    navItemGroups: navItemGroups,
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
var AppRoutesProvider$1 = reactRouterDom.withRouter(AppRoutesProvider);

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
      appRoutes = _useContext.appRoutes; // need title override if it's been set


  var currentPageTitle = state.currentRouteTitle; // recursive lookup through route defs to derive breadcrumb trail ...

  var traverseRouteDefs = function traverseRouteDefs(routeDef) {
    var parentEl = routeDef.parent ? traverseRouteDefs(_objectSpread({}, appRoutes[routeDef.parent], {
      path: routeDef.parent
    })) : [];
    return [].concat(_toConsumableArray(parentEl), [routeDef]);
  }; // crumb routine, renders current (deepest) route as text preceeded by
  // parent routes as links


  var crumb = function crumb(routeDef) {
    return routeDef.path === currentRoute.path ? renderCurrentRouteCrumb(currentPageTitle !== "" ? currentPageTitle : currentRoute.title) : React__default.createElement(reactRouterDom.Link, {
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


  return React__default.createElement(React__default.Fragment, null, currentRoute && currentRoute.parent && renderWrapper(breadCrumbs));
};

BreadCrumbs.propTypes = {
  renderWrapper: propTypes.func.isRequired,
  renderSeparator: propTypes.func.isRequired,
  renderCurrentRouteCrumb: propTypes.func.isRequired
};
var BreadCrumbs$1 = React__default.memo(BreadCrumbs);

// ========================
// Rather than manually declaring all your routes, this component enumerates your
// route definitions and renders them out automatically.

var RouteCatalog = function RouteCatalog(_ref) {
  var onRouteNotFound = _ref.onRouteNotFound;

  var _useContext = React.useContext(AppRoutesContext),
      appRoutesList = _useContext.appRoutesList;

  console.log("RouteCatalog", appRoutesList); // TODO: test whether route.component is a React component and
  // not a React Element, throw error accordingly

  return React__default.createElement(reactRouterDom.Switch, null, appRoutesList.map(function (route) {
    return React__default.createElement(reactRouterDom.Route, {
      key: route.path,
      path: route.path,
      exact: route.exact,
      render: function render(routeProps) {
        return React__default.createElement(route.component, routeProps);
      }
    });
  }), onRouteNotFound && React__default.createElement(reactRouterDom.Route, {
    render: function render() {
      return onRouteNotFound();
    }
  }));
};

RouteCatalog.propTypes = {
  onRouteNotFound: propTypes.func.isRequired
};
var RouteCatalog$1 = React__default.memo(RouteCatalog);

//import './RouteDefinitionNavLink.css';

var RouteDefinitionNavLink = function RouteDefinitionNavLink(_ref) {
  var route = _ref.route,
      uiChevron = _ref.uiChevron,
      _onClick = _ref.onClick,
      className = _ref.className;
  return React__default.createElement(reactRouterDom.NavLink, {
    className: className,
    activeClassName: "active",
    to: route.path,
    exact: route.exact,
    onClick: function onClick() {
      return _onClick && _onClick();
    }
  }, route.icon && route.icon(), React__default.createElement("label", null, route.navlabel || route.title), route.showSubNav ? uiChevron ? uiChevron() : ">" : null);
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
      onClick = _ref.onClick,
      className = _ref.className;
  return React__default.createElement("div", {
    className: className,
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
    console.log("subNavFilter", route, currentRouteHasChildRoutes, currentRoute.path);

    if (currentRouteHasChildRoutes) {
      return route.showInNav && route.parent === currentRoute.path;
    }

    return route.showInNav && route.path === currentRoute.path;
  };

  var navLinksGroup = function navLinksGroup(routeDefs) {
    return renderRouteNavLinks(function () {
      return React__default.createElement(React__default.Fragment, null, routeDefs.map(function (route) {
        return renderRouteNavLink(route, handleNavLinkClick);
      }), routeDefs.length === 0 && renderNoRoutes());
    });
  };

  var isOpen = function isOpen() {
    return subDrawerOpen && filter === "";
  };

  return React__default.createElement("div", {
    className: className
  }, renderDrawerControl(isOpen(), function () {
    return React__default.createElement(React__default.Fragment, null, renderDrawerMenu("main", function () {
      return filter !== "" ? // either render flat search results ...
      navLinksGroup(appRoutesList.filter(filterRoutes(filter))) : // or the route defintions in their respective groups ...
      React__default.createElement(React__default.Fragment, null, navItemGroups && navItemGroups.map(function (group) {
        return React__default.createElement(React.Fragment, {
          key: group
        }, group !== "" ? renderNavGroup(group) : "", navLinksGroup(appRoutesList.filter(function (route) {
          return route.showInNav && !route.parent && route.group === group;
        })));
      }));
    }), renderDrawerMenu("sub", function () {
      return React__default.createElement(React__default.Fragment, null, renderBackLink(handleBackClick), subDrawerOpen ? React__default.createElement(React__default.Fragment, null, navLinksGroup(appRoutesList.filter(subNavFilter))) : null);
    }));
  }));
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

var PageTitle = function PageTitle() {
  var pageTitle = useCurrentPageTitle();
  return React__default.createElement(React__default.Fragment, null, pageTitle);
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

module.exports = exports$2;
