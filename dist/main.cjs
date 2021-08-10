/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/graphql-tag/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/graphql-tag/lib/index.js + 21 modules ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lib),
  "disableExperimentalFragmentVariables": () => (/* binding */ disableExperimentalFragmentVariables),
  "disableFragmentWarnings": () => (/* binding */ disableFragmentWarnings),
  "enableExperimentalFragmentVariables": () => (/* binding */ enableExperimentalFragmentVariables),
  "gql": () => (/* binding */ gql),
  "resetCaches": () => (/* binding */ resetCaches)
});

;// CONCATENATED MODULE: ./node_modules/graphql-tag/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || from);
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/isObjectLike.mjs
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}

;// CONCATENATED MODULE: ./node_modules/graphql/polyfills/symbols.mjs
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';

;// CONCATENATED MODULE: ./node_modules/graphql/language/location.mjs
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/printLocation.mjs

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}

;// CONCATENATED MODULE: ./node_modules/graphql/error/GraphQLError.mjs
function GraphQLError_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GraphQLError_typeof = function _typeof(obj) { return typeof obj; }; } else { GraphQLError_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GraphQLError_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (GraphQLError_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// FIXME:
// flowlint uninitialized-instance-property:off




/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return getLocation(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(getLocation(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if (isObjectLike(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + printLocation(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + printSourceLocation(error.source, location);
    }
  }

  return output;
}

;// CONCATENATED MODULE: ./node_modules/graphql/error/syntaxError.mjs

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/kinds.mjs
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/invariant.mjs
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ const jsutils_nodejsCustomInspectSymbol = (nodejsCustomInspectSymbol);

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/defineInspect.mjs


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || invariant(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (jsutils_nodejsCustomInspectSymbol) {
    classObject.prototype[jsutils_nodejsCustomInspectSymbol] = fn;
  }
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/ast.mjs


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */

;// CONCATENATED MODULE: ./node_modules/graphql/language/tokenKind.mjs
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/inspect.mjs
function inspect_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { inspect_typeof = function _typeof(obj) { return typeof obj; }; } else { inspect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return inspect_typeof(obj); }

/* eslint-disable flowtype/no-weak-types */

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (inspect_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(jsutils_nodejsCustomInspectSymbol)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}

;// CONCATENATED MODULE: ./node_modules/graphql/jsutils/instanceOf.mjs
function instanceOf_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { instanceOf_typeof = function _typeof(obj) { return typeof obj; }; } else { instanceOf_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return instanceOf_typeof(obj); }


/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */

// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ const instanceOf = ( true ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
} : // eslint-disable-next-line no-shadow
0);

;// CONCATENATED MODULE: ./node_modules/graphql/language/source.mjs
function source_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function source_createClass(Constructor, protoProps, staticProps) { if (protoProps) source_defineProperties(Constructor.prototype, protoProps); if (staticProps) source_defineProperties(Constructor, staticProps); return Constructor; }






/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  source_createClass(Source, [{
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return instanceOf(source, Source);
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/directiveLocation.mjs
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

;// CONCATENATED MODULE: ./node_modules/graphql/language/blockString.mjs
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/lexer.mjs




/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== TokenKind.EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new Token(TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new Token(TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new Token(TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new Token(TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new Token(TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new Token(TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new Token(TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new Token(TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new Token(TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new Token(TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new Token(TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new Token(TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new Token(TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new Token(TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw syntaxError(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}

;// CONCATENATED MODULE: ./node_modules/graphql/language/parser.mjs







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(TokenKind.NAME);
    return {
      kind: Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(TokenKind.BRACE_L)) {
      return {
        kind: Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return {
      kind: Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case TokenKind.INT:
        this._lexer.advance();

        return {
          kind: Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = {
        kind: Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(TokenKind.BANG)) {
      return {
        kind: Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return {
      kind: Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.AMP) || this.peek(TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? "\"".concat(kind, "\"") : kind;
}

;// CONCATENATED MODULE: ./node_modules/graphql-tag/lib/index.js


var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;

function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

function processFragments(ast) {
  var seenKeys = new Set();
  var definitions = [];
  ast.definitions.forEach(function (fragmentDefinition) {
    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);

      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n" + "graphql-tag enforces all fragment names across your application to be unique; read more about\n" + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = new Set());
      }

      sourceKeySet.add(sourceKey);

      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), {
    definitions: definitions
  });
}

function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function (node) {
    if (node.loc) delete node.loc;
    Object.keys(node).forEach(function (key) {
      var value = node[key];

      if (value && typeof value === 'object') {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;

  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }

  return doc;
}

function parseDocument(source) {
  var cacheKey = normalize(source);

  if (!docCache.has(cacheKey)) {
    var parsed = parse(source, {
      experimentalFragmentVariables: experimentalFragmentVariables
    });

    if (!parsed || parsed.kind !== 'Document') {
      throw new Error('Not a valid GraphQL document.');
    }

    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }

  return docCache.get(cacheKey);
}

function gql(literals) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (typeof literals === 'string') {
    literals = [literals];
  }

  var result = literals[0];
  args.forEach(function (arg, i) {
    if (arg && arg.kind === 'Document') {
      result += arg.loc.source.body;
    } else {
      result += arg;
    }

    result += literals[i + 1];
  });
  return parseDocument(result);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql: gql,
  resetCaches: resetCaches,
  disableFragmentWarnings: disableFragmentWarnings,
  enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};

(function (gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));

gql["default"] = gql;
/* harmony default export */ const lib = (gql);

/***/ }),

/***/ "./src/generated/graphql.ts":
/*!**********************************!*\
  !*** ./src/generated/graphql.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.RepoArchivedAuditEntryVisibility=exports.RepoAddMemberAuditEntryVisibility=exports.RepoAccessAuditEntryVisibility=exports.ReleaseOrderField=exports.RefOrderField=exports.ReactionOrderField=exports.ReactionContent=exports.PullRequestUpdateState=exports.PullRequestTimelineItemsItemType=exports.PullRequestState=exports.PullRequestReviewState=exports.PullRequestReviewEvent=exports.PullRequestReviewDecision=exports.PullRequestReviewCommentState=exports.PullRequestOrderField=exports.PullRequestMergeMethod=exports.ProjectTemplate=exports.ProjectState=exports.ProjectOrderField=exports.ProjectColumnPurpose=exports.ProjectCardState=exports.ProjectCardArchivedState=exports.PinnedDiscussionPattern=exports.PinnedDiscussionGradient=exports.PinnableItemType=exports.PackageVersionOrderField=exports.PackageType=exports.PackageOrderField=exports.PackageFileOrderField=exports.OrganizationOrderField=exports.OrganizationMembersCanCreateRepositoriesSettingValue=exports.OrganizationMemberRole=exports.OrganizationInvitationType=exports.OrganizationInvitationRole=exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility=exports.OrgUpdateMemberAuditEntryPermission=exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission=exports.OrgRemoveOutsideCollaboratorAuditEntryReason=exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType=exports.OrgRemoveMemberAuditEntryReason=exports.OrgRemoveMemberAuditEntryMembershipType=exports.OrgRemoveBillingManagerAuditEntryReason=exports.OrgCreateAuditEntryBillingPlan=exports.OrgAddMemberAuditEntryPermission=exports.OrderDirection=exports.OperationType=exports.OauthApplicationCreateAuditEntryState=exports.NotificationRestrictionSettingValue=exports.MilestoneState=exports.MilestoneOrderField=exports.MergeableState=exports.LockReason=exports.LanguageOrderField=exports.LabelOrderField=exports.IssueTimelineItemsItemType=exports.IssueState=exports.IssueOrderField=exports.IssueCommentOrderField=exports.IpAllowListForInstalledAppsEnabledSettingValue=exports.IpAllowListEntryOrderField=exports.IpAllowListEnabledSettingValue=exports.IdentityProviderConfigurationState=exports.GitSignatureState=exports.GistPrivacy=exports.GistOrderField=exports.FundingPlatform=exports.FileViewedState=exports.EnterpriseUserDeployment=exports.EnterpriseUserAccountMembershipRole=exports.EnterpriseServerUserAccountsUploadSyncState=exports.EnterpriseServerUserAccountsUploadOrderField=exports.EnterpriseServerUserAccountOrderField=exports.EnterpriseServerUserAccountEmailOrderField=exports.EnterpriseServerInstallationOrderField=exports.EnterpriseMembersCanMakePurchasesSettingValue=exports.EnterpriseMembersCanCreateRepositoriesSettingValue=exports.EnterpriseMemberOrderField=exports.EnterpriseEnabledSettingValue=exports.EnterpriseEnabledDisabledSettingValue=exports.EnterpriseDefaultRepositoryPermissionSettingValue=exports.EnterpriseAdministratorRole=exports.EnterpriseAdministratorInvitationOrderField=exports.DiscussionOrderField=exports.DiffSide=exports.DeploymentStatusState=exports.DeploymentState=exports.DeploymentReviewState=exports.DeploymentProtectionRuleType=exports.DeploymentOrderField=exports.DefaultRepositoryPermissionField=exports.ContributionLevel=exports.CommitContributionOrderField=exports.CommentCannotUpdateReason=exports.CommentAuthorAssociation=exports.CollaboratorAffiliation=exports.CheckStatusState=exports.CheckRunType=exports.CheckConclusionState=exports.CheckAnnotationLevel=exports.AuditLogOrderField=void 0;exports.GetPullRequests=exports.AddCommentToPr=exports.VerifiableDomainOrderField=exports.UserStatusOrderField=exports.UserBlockDuration=exports.TopicSuggestionDeclineReason=exports.TeamRole=exports.TeamRepositoryOrderField=exports.TeamPrivacy=exports.TeamOrderField=exports.TeamMembershipType=exports.TeamMemberRole=exports.TeamMemberOrderField=exports.TeamDiscussionOrderField=exports.TeamDiscussionCommentOrderField=exports.SubscriptionState=exports.StatusState=exports.StarOrderField=exports.SponsorshipPrivacy=exports.SponsorshipOrderField=exports.SponsorsTierOrderField=exports.SponsorsGoalKind=exports.SponsorsActivityPeriod=exports.SponsorsActivityOrderField=exports.SponsorsActivityAction=exports.SponsorableOrderField=exports.SponsorOrderField=exports.SecurityVulnerabilityOrderField=exports.SecurityAdvisorySeverity=exports.SecurityAdvisoryOrderField=exports.SecurityAdvisoryIdentifierType=exports.SecurityAdvisoryEcosystem=exports.SearchType=exports.SavedReplyOrderField=exports.SamlSignatureAlgorithm=exports.SamlDigestAlgorithm=exports.RequestableCheckStatusState=exports.RepositoryVisibility=exports.RepositoryPrivacy=exports.RepositoryPermission=exports.RepositoryOrderField=exports.RepositoryLockReason=exports.RepositoryInvitationOrderField=exports.RepositoryInteractionLimitOrigin=exports.RepositoryInteractionLimitExpiry=exports.RepositoryInteractionLimit=exports.RepositoryContributionType=exports.RepositoryAffiliation=exports.ReportedContentClassifiers=exports.RepoRemoveMemberAuditEntryVisibility=exports.RepoDestroyAuditEntryVisibility=exports.RepoCreateAuditEntryVisibility=exports.RepoChangeMergeSettingAuditEntryMergeType=void 0;var _graphqlTag=_interopRequireDefault(__webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/** Properties by which Audit Log connections can be ordered. */let AuditLogOrderField;/** Represents a 'auto_merge_disabled' event on a given pull request. */exports.AuditLogOrderField=AuditLogOrderField;(function(AuditLogOrderField){AuditLogOrderField["CreatedAt"]="CREATED_AT";})(AuditLogOrderField||(exports.AuditLogOrderField=AuditLogOrderField={}));/** Represents an annotation's information level. */let CheckAnnotationLevel;/** A character position in a check annotation. */exports.CheckAnnotationLevel=CheckAnnotationLevel;(function(CheckAnnotationLevel){CheckAnnotationLevel["Failure"]="FAILURE";CheckAnnotationLevel["Notice"]="NOTICE";CheckAnnotationLevel["Warning"]="WARNING";})(CheckAnnotationLevel||(exports.CheckAnnotationLevel=CheckAnnotationLevel={}));/** The possible states for a check suite or run conclusion. */let CheckConclusionState;/** A check run. */exports.CheckConclusionState=CheckConclusionState;(function(CheckConclusionState){CheckConclusionState["ActionRequired"]="ACTION_REQUIRED";CheckConclusionState["Cancelled"]="CANCELLED";CheckConclusionState["Failure"]="FAILURE";CheckConclusionState["Neutral"]="NEUTRAL";CheckConclusionState["Skipped"]="SKIPPED";CheckConclusionState["Stale"]="STALE";CheckConclusionState["StartupFailure"]="STARTUP_FAILURE";CheckConclusionState["Success"]="SUCCESS";CheckConclusionState["TimedOut"]="TIMED_OUT";})(CheckConclusionState||(exports.CheckConclusionState=CheckConclusionState={}));/** The possible types of check runs. */let CheckRunType;/** The possible states for a check suite or run status. */exports.CheckRunType=CheckRunType;(function(CheckRunType){CheckRunType["All"]="ALL";CheckRunType["Latest"]="LATEST";})(CheckRunType||(exports.CheckRunType=CheckRunType={}));let CheckStatusState;/** A single check step. */exports.CheckStatusState=CheckStatusState;(function(CheckStatusState){CheckStatusState["Completed"]="COMPLETED";CheckStatusState["InProgress"]="IN_PROGRESS";CheckStatusState["Pending"]="PENDING";CheckStatusState["Queued"]="QUEUED";CheckStatusState["Requested"]="REQUESTED";CheckStatusState["Waiting"]="WAITING";})(CheckStatusState||(exports.CheckStatusState=CheckStatusState={}));/** Collaborators affiliation level with a subject. */let CollaboratorAffiliation;/** Represents a comment. */exports.CollaboratorAffiliation=CollaboratorAffiliation;(function(CollaboratorAffiliation){CollaboratorAffiliation["All"]="ALL";CollaboratorAffiliation["Direct"]="DIRECT";CollaboratorAffiliation["Outside"]="OUTSIDE";})(CollaboratorAffiliation||(exports.CollaboratorAffiliation=CollaboratorAffiliation={}));/** A comment author association with repository. */let CommentAuthorAssociation;/** The possible errors that will prevent a user from updating a comment. */exports.CommentAuthorAssociation=CommentAuthorAssociation;(function(CommentAuthorAssociation){CommentAuthorAssociation["Collaborator"]="COLLABORATOR";CommentAuthorAssociation["Contributor"]="CONTRIBUTOR";CommentAuthorAssociation["FirstTimer"]="FIRST_TIMER";CommentAuthorAssociation["FirstTimeContributor"]="FIRST_TIME_CONTRIBUTOR";CommentAuthorAssociation["Mannequin"]="MANNEQUIN";CommentAuthorAssociation["Member"]="MEMBER";CommentAuthorAssociation["None"]="NONE";CommentAuthorAssociation["Owner"]="OWNER";})(CommentAuthorAssociation||(exports.CommentAuthorAssociation=CommentAuthorAssociation={}));let CommentCannotUpdateReason;/** Represents a 'comment_deleted' event on a given issue or pull request. */exports.CommentCannotUpdateReason=CommentCannotUpdateReason;(function(CommentCannotUpdateReason){CommentCannotUpdateReason["Archived"]="ARCHIVED";CommentCannotUpdateReason["Denied"]="DENIED";CommentCannotUpdateReason["InsufficientAccess"]="INSUFFICIENT_ACCESS";CommentCannotUpdateReason["Locked"]="LOCKED";CommentCannotUpdateReason["LoginRequired"]="LOGIN_REQUIRED";CommentCannotUpdateReason["Maintenance"]="MAINTENANCE";CommentCannotUpdateReason["VerifiedEmailRequired"]="VERIFIED_EMAIL_REQUIRED";})(CommentCannotUpdateReason||(exports.CommentCannotUpdateReason=CommentCannotUpdateReason={}));/** Properties by which commit contribution connections can be ordered. */let CommitContributionOrderField;/** This aggregates commits made by a user within one repository. */exports.CommitContributionOrderField=CommitContributionOrderField;(function(CommitContributionOrderField){CommitContributionOrderField["CommitCount"]="COMMIT_COUNT";CommitContributionOrderField["OccurredAt"]="OCCURRED_AT";})(CommitContributionOrderField||(exports.CommitContributionOrderField=CommitContributionOrderField={}));/** Varying levels of contributions from none to many. */let ContributionLevel;/** Ordering options for contribution connections. */exports.ContributionLevel=ContributionLevel;(function(ContributionLevel){ContributionLevel["FirstQuartile"]="FIRST_QUARTILE";ContributionLevel["FourthQuartile"]="FOURTH_QUARTILE";ContributionLevel["None"]="NONE";ContributionLevel["SecondQuartile"]="SECOND_QUARTILE";ContributionLevel["ThirdQuartile"]="THIRD_QUARTILE";})(ContributionLevel||(exports.ContributionLevel=ContributionLevel={}));/** The possible default permissions for repositories. */let DefaultRepositoryPermissionField;/** Entities that can be deleted. */exports.DefaultRepositoryPermissionField=DefaultRepositoryPermissionField;(function(DefaultRepositoryPermissionField){DefaultRepositoryPermissionField["Admin"]="ADMIN";DefaultRepositoryPermissionField["None"]="NONE";DefaultRepositoryPermissionField["Read"]="READ";DefaultRepositoryPermissionField["Write"]="WRITE";})(DefaultRepositoryPermissionField||(exports.DefaultRepositoryPermissionField=DefaultRepositoryPermissionField={}));/** Properties by which deployment connections can be ordered. */let DeploymentOrderField;/** A protection rule. */exports.DeploymentOrderField=DeploymentOrderField;(function(DeploymentOrderField){DeploymentOrderField["CreatedAt"]="CREATED_AT";})(DeploymentOrderField||(exports.DeploymentOrderField=DeploymentOrderField={}));/** The possible protection rule types. */let DeploymentProtectionRuleType;/** A request to deploy a workflow run to an environment. */exports.DeploymentProtectionRuleType=DeploymentProtectionRuleType;(function(DeploymentProtectionRuleType){DeploymentProtectionRuleType["RequiredReviewers"]="REQUIRED_REVIEWERS";DeploymentProtectionRuleType["WaitTimer"]="WAIT_TIMER";})(DeploymentProtectionRuleType||(exports.DeploymentProtectionRuleType=DeploymentProtectionRuleType={}));/** The possible states for a deployment review. */let DeploymentReviewState;/** Users and teams. */exports.DeploymentReviewState=DeploymentReviewState;(function(DeploymentReviewState){DeploymentReviewState["Approved"]="APPROVED";DeploymentReviewState["Rejected"]="REJECTED";})(DeploymentReviewState||(exports.DeploymentReviewState=DeploymentReviewState={}));/** The possible states in which a deployment can be. */let DeploymentState;/** Describes the status of a given deployment attempt. */exports.DeploymentState=DeploymentState;(function(DeploymentState){DeploymentState["Abandoned"]="ABANDONED";DeploymentState["Active"]="ACTIVE";DeploymentState["Destroyed"]="DESTROYED";DeploymentState["Error"]="ERROR";DeploymentState["Failure"]="FAILURE";DeploymentState["Inactive"]="INACTIVE";DeploymentState["InProgress"]="IN_PROGRESS";DeploymentState["Pending"]="PENDING";DeploymentState["Queued"]="QUEUED";DeploymentState["Waiting"]="WAITING";})(DeploymentState||(exports.DeploymentState=DeploymentState={}));/** The possible states for a deployment status. */let DeploymentStatusState;/** The possible sides of a diff. */exports.DeploymentStatusState=DeploymentStatusState;(function(DeploymentStatusState){DeploymentStatusState["Error"]="ERROR";DeploymentStatusState["Failure"]="FAILURE";DeploymentStatusState["Inactive"]="INACTIVE";DeploymentStatusState["InProgress"]="IN_PROGRESS";DeploymentStatusState["Pending"]="PENDING";DeploymentStatusState["Queued"]="QUEUED";DeploymentStatusState["Success"]="SUCCESS";DeploymentStatusState["Waiting"]="WAITING";})(DeploymentStatusState||(exports.DeploymentStatusState=DeploymentStatusState={}));let DiffSide;/** Autogenerated input type of DisablePullRequestAutoMerge */exports.DiffSide=DiffSide;(function(DiffSide){DiffSide["Left"]="LEFT";DiffSide["Right"]="RIGHT";})(DiffSide||(exports.DiffSide=DiffSide={}));/** Properties by which discussion connections can be ordered. */let DiscussionOrderField;/** Autogenerated input type of DismissPullRequestReview */exports.DiscussionOrderField=DiscussionOrderField;(function(DiscussionOrderField){DiscussionOrderField["CreatedAt"]="CREATED_AT";DiscussionOrderField["UpdatedAt"]="UPDATED_AT";})(DiscussionOrderField||(exports.DiscussionOrderField=DiscussionOrderField={}));/** Properties by which enterprise administrator invitation connections can be ordered. */let EnterpriseAdministratorInvitationOrderField;/** The possible administrator roles in an enterprise account. */exports.EnterpriseAdministratorInvitationOrderField=EnterpriseAdministratorInvitationOrderField;(function(EnterpriseAdministratorInvitationOrderField){EnterpriseAdministratorInvitationOrderField["CreatedAt"]="CREATED_AT";})(EnterpriseAdministratorInvitationOrderField||(exports.EnterpriseAdministratorInvitationOrderField=EnterpriseAdministratorInvitationOrderField={}));let EnterpriseAdministratorRole;/** Metadata for an audit entry containing enterprise account information. */exports.EnterpriseAdministratorRole=EnterpriseAdministratorRole;(function(EnterpriseAdministratorRole){EnterpriseAdministratorRole["BillingManager"]="BILLING_MANAGER";EnterpriseAdministratorRole["Owner"]="OWNER";})(EnterpriseAdministratorRole||(exports.EnterpriseAdministratorRole=EnterpriseAdministratorRole={}));/** The possible values for the enterprise default repository permission setting. */let EnterpriseDefaultRepositoryPermissionSettingValue;/** The possible values for an enabled/disabled enterprise setting. */exports.EnterpriseDefaultRepositoryPermissionSettingValue=EnterpriseDefaultRepositoryPermissionSettingValue;(function(EnterpriseDefaultRepositoryPermissionSettingValue){EnterpriseDefaultRepositoryPermissionSettingValue["Admin"]="ADMIN";EnterpriseDefaultRepositoryPermissionSettingValue["None"]="NONE";EnterpriseDefaultRepositoryPermissionSettingValue["NoPolicy"]="NO_POLICY";EnterpriseDefaultRepositoryPermissionSettingValue["Read"]="READ";EnterpriseDefaultRepositoryPermissionSettingValue["Write"]="WRITE";})(EnterpriseDefaultRepositoryPermissionSettingValue||(exports.EnterpriseDefaultRepositoryPermissionSettingValue=EnterpriseDefaultRepositoryPermissionSettingValue={}));let EnterpriseEnabledDisabledSettingValue;/** The possible values for an enabled/no policy enterprise setting. */exports.EnterpriseEnabledDisabledSettingValue=EnterpriseEnabledDisabledSettingValue;(function(EnterpriseEnabledDisabledSettingValue){EnterpriseEnabledDisabledSettingValue["Disabled"]="DISABLED";EnterpriseEnabledDisabledSettingValue["Enabled"]="ENABLED";EnterpriseEnabledDisabledSettingValue["NoPolicy"]="NO_POLICY";})(EnterpriseEnabledDisabledSettingValue||(exports.EnterpriseEnabledDisabledSettingValue=EnterpriseEnabledDisabledSettingValue={}));let EnterpriseEnabledSettingValue;/** An identity provider configured to provision identities for an enterprise. */exports.EnterpriseEnabledSettingValue=EnterpriseEnabledSettingValue;(function(EnterpriseEnabledSettingValue){EnterpriseEnabledSettingValue["Enabled"]="ENABLED";EnterpriseEnabledSettingValue["NoPolicy"]="NO_POLICY";})(EnterpriseEnabledSettingValue||(exports.EnterpriseEnabledSettingValue=EnterpriseEnabledSettingValue={}));/** Properties by which enterprise member connections can be ordered. */let EnterpriseMemberOrderField;/** The possible values for the enterprise members can create repositories setting. */exports.EnterpriseMemberOrderField=EnterpriseMemberOrderField;(function(EnterpriseMemberOrderField){EnterpriseMemberOrderField["CreatedAt"]="CREATED_AT";EnterpriseMemberOrderField["Login"]="LOGIN";})(EnterpriseMemberOrderField||(exports.EnterpriseMemberOrderField=EnterpriseMemberOrderField={}));let EnterpriseMembersCanCreateRepositoriesSettingValue;/** The possible values for the members can make purchases setting. */exports.EnterpriseMembersCanCreateRepositoriesSettingValue=EnterpriseMembersCanCreateRepositoriesSettingValue;(function(EnterpriseMembersCanCreateRepositoriesSettingValue){EnterpriseMembersCanCreateRepositoriesSettingValue["All"]="ALL";EnterpriseMembersCanCreateRepositoriesSettingValue["Disabled"]="DISABLED";EnterpriseMembersCanCreateRepositoriesSettingValue["NoPolicy"]="NO_POLICY";EnterpriseMembersCanCreateRepositoriesSettingValue["Private"]="PRIVATE";EnterpriseMembersCanCreateRepositoriesSettingValue["Public"]="PUBLIC";})(EnterpriseMembersCanCreateRepositoriesSettingValue||(exports.EnterpriseMembersCanCreateRepositoriesSettingValue=EnterpriseMembersCanCreateRepositoriesSettingValue={}));let EnterpriseMembersCanMakePurchasesSettingValue;/** The connection type for Organization. */exports.EnterpriseMembersCanMakePurchasesSettingValue=EnterpriseMembersCanMakePurchasesSettingValue;(function(EnterpriseMembersCanMakePurchasesSettingValue){EnterpriseMembersCanMakePurchasesSettingValue["Disabled"]="DISABLED";EnterpriseMembersCanMakePurchasesSettingValue["Enabled"]="ENABLED";})(EnterpriseMembersCanMakePurchasesSettingValue||(exports.EnterpriseMembersCanMakePurchasesSettingValue=EnterpriseMembersCanMakePurchasesSettingValue={}));/** Properties by which Enterprise Server installation connections can be ordered. */let EnterpriseServerInstallationOrderField;/** A user account on an Enterprise Server installation. */exports.EnterpriseServerInstallationOrderField=EnterpriseServerInstallationOrderField;(function(EnterpriseServerInstallationOrderField){EnterpriseServerInstallationOrderField["CreatedAt"]="CREATED_AT";EnterpriseServerInstallationOrderField["CustomerName"]="CUSTOMER_NAME";EnterpriseServerInstallationOrderField["HostName"]="HOST_NAME";})(EnterpriseServerInstallationOrderField||(exports.EnterpriseServerInstallationOrderField=EnterpriseServerInstallationOrderField={}));/** Properties by which Enterprise Server user account email connections can be ordered. */let EnterpriseServerUserAccountEmailOrderField;/** Ordering options for Enterprise Server user account connections. */exports.EnterpriseServerUserAccountEmailOrderField=EnterpriseServerUserAccountEmailOrderField;(function(EnterpriseServerUserAccountEmailOrderField){EnterpriseServerUserAccountEmailOrderField["Email"]="EMAIL";})(EnterpriseServerUserAccountEmailOrderField||(exports.EnterpriseServerUserAccountEmailOrderField=EnterpriseServerUserAccountEmailOrderField={}));/** Properties by which Enterprise Server user account connections can be ordered. */let EnterpriseServerUserAccountOrderField;/** A user accounts upload from an Enterprise Server installation. */exports.EnterpriseServerUserAccountOrderField=EnterpriseServerUserAccountOrderField;(function(EnterpriseServerUserAccountOrderField){EnterpriseServerUserAccountOrderField["Login"]="LOGIN";EnterpriseServerUserAccountOrderField["RemoteCreatedAt"]="REMOTE_CREATED_AT";})(EnterpriseServerUserAccountOrderField||(exports.EnterpriseServerUserAccountOrderField=EnterpriseServerUserAccountOrderField={}));/** Properties by which Enterprise Server user accounts upload connections can be ordered. */let EnterpriseServerUserAccountsUploadOrderField;/** Synchronization state of the Enterprise Server user accounts upload */exports.EnterpriseServerUserAccountsUploadOrderField=EnterpriseServerUserAccountsUploadOrderField;(function(EnterpriseServerUserAccountsUploadOrderField){EnterpriseServerUserAccountsUploadOrderField["CreatedAt"]="CREATED_AT";})(EnterpriseServerUserAccountsUploadOrderField||(exports.EnterpriseServerUserAccountsUploadOrderField=EnterpriseServerUserAccountsUploadOrderField={}));let EnterpriseServerUserAccountsUploadSyncState;/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */exports.EnterpriseServerUserAccountsUploadSyncState=EnterpriseServerUserAccountsUploadSyncState;(function(EnterpriseServerUserAccountsUploadSyncState){EnterpriseServerUserAccountsUploadSyncState["Failure"]="FAILURE";EnterpriseServerUserAccountsUploadSyncState["Pending"]="PENDING";EnterpriseServerUserAccountsUploadSyncState["Success"]="SUCCESS";})(EnterpriseServerUserAccountsUploadSyncState||(exports.EnterpriseServerUserAccountsUploadSyncState=EnterpriseServerUserAccountsUploadSyncState={}));/** The possible roles for enterprise membership. */let EnterpriseUserAccountMembershipRole;/** The possible GitHub Enterprise deployments where this user can exist. */exports.EnterpriseUserAccountMembershipRole=EnterpriseUserAccountMembershipRole;(function(EnterpriseUserAccountMembershipRole){EnterpriseUserAccountMembershipRole["Member"]="MEMBER";EnterpriseUserAccountMembershipRole["Owner"]="OWNER";})(EnterpriseUserAccountMembershipRole||(exports.EnterpriseUserAccountMembershipRole=EnterpriseUserAccountMembershipRole={}));let EnterpriseUserDeployment;/** An environment. */exports.EnterpriseUserDeployment=EnterpriseUserDeployment;(function(EnterpriseUserDeployment){EnterpriseUserDeployment["Cloud"]="CLOUD";EnterpriseUserDeployment["Server"]="SERVER";})(EnterpriseUserDeployment||(exports.EnterpriseUserDeployment=EnterpriseUserDeployment={}));/** The possible viewed states of a file . */let FileViewedState;/** Autogenerated input type of FollowUser */exports.FileViewedState=FileViewedState;(function(FileViewedState){FileViewedState["Dismissed"]="DISMISSED";FileViewedState["Unviewed"]="UNVIEWED";FileViewedState["Viewed"]="VIEWED";})(FileViewedState||(exports.FileViewedState=FileViewedState={}));/** The possible funding platforms for repository funding links. */let FundingPlatform;/** A generic hovercard context with a message and icon */exports.FundingPlatform=FundingPlatform;(function(FundingPlatform){FundingPlatform["CommunityBridge"]="COMMUNITY_BRIDGE";FundingPlatform["Custom"]="CUSTOM";FundingPlatform["Github"]="GITHUB";FundingPlatform["Issuehunt"]="ISSUEHUNT";FundingPlatform["KoFi"]="KO_FI";FundingPlatform["Liberapay"]="LIBERAPAY";FundingPlatform["OpenCollective"]="OPEN_COLLECTIVE";FundingPlatform["Otechie"]="OTECHIE";FundingPlatform["Patreon"]="PATREON";FundingPlatform["Tidelift"]="TIDELIFT";})(FundingPlatform||(exports.FundingPlatform=FundingPlatform={}));/** Properties by which gist connections can be ordered. */let GistOrderField;/** The privacy of a Gist */exports.GistOrderField=GistOrderField;(function(GistOrderField){GistOrderField["CreatedAt"]="CREATED_AT";GistOrderField["PushedAt"]="PUSHED_AT";GistOrderField["UpdatedAt"]="UPDATED_AT";})(GistOrderField||(exports.GistOrderField=GistOrderField={}));let GistPrivacy;/** Represents an actor in a Git commit (ie. an author or committer). */exports.GistPrivacy=GistPrivacy;(function(GistPrivacy){GistPrivacy["All"]="ALL";GistPrivacy["Public"]="PUBLIC";GistPrivacy["Secret"]="SECRET";})(GistPrivacy||(exports.GistPrivacy=GistPrivacy={}));/** The state of a Git signature. */let GitSignatureState;/** Represents a GPG signature on a Commit or Tag. */exports.GitSignatureState=GitSignatureState;(function(GitSignatureState){GitSignatureState["BadCert"]="BAD_CERT";GitSignatureState["BadEmail"]="BAD_EMAIL";GitSignatureState["ExpiredKey"]="EXPIRED_KEY";GitSignatureState["GpgverifyError"]="GPGVERIFY_ERROR";GitSignatureState["GpgverifyUnavailable"]="GPGVERIFY_UNAVAILABLE";GitSignatureState["Invalid"]="INVALID";GitSignatureState["MalformedSig"]="MALFORMED_SIG";GitSignatureState["NotSigningKey"]="NOT_SIGNING_KEY";GitSignatureState["NoUser"]="NO_USER";GitSignatureState["OcspError"]="OCSP_ERROR";GitSignatureState["OcspPending"]="OCSP_PENDING";GitSignatureState["OcspRevoked"]="OCSP_REVOKED";GitSignatureState["UnknownKey"]="UNKNOWN_KEY";GitSignatureState["UnknownSigType"]="UNKNOWN_SIG_TYPE";GitSignatureState["Unsigned"]="UNSIGNED";GitSignatureState["UnverifiedEmail"]="UNVERIFIED_EMAIL";GitSignatureState["Valid"]="VALID";})(GitSignatureState||(exports.GitSignatureState=GitSignatureState={}));/** The possible states in which authentication can be configured with an identity provider. */let IdentityProviderConfigurationState;/** Autogenerated input type of InviteEnterpriseAdmin */exports.IdentityProviderConfigurationState=IdentityProviderConfigurationState;(function(IdentityProviderConfigurationState){IdentityProviderConfigurationState["Configured"]="CONFIGURED";IdentityProviderConfigurationState["Enforced"]="ENFORCED";IdentityProviderConfigurationState["Unconfigured"]="UNCONFIGURED";})(IdentityProviderConfigurationState||(exports.IdentityProviderConfigurationState=IdentityProviderConfigurationState={}));/** The possible values for the IP allow list enabled setting. */let IpAllowListEnabledSettingValue;/** An IP address or range of addresses that is allowed to access an owner's resources. */exports.IpAllowListEnabledSettingValue=IpAllowListEnabledSettingValue;(function(IpAllowListEnabledSettingValue){IpAllowListEnabledSettingValue["Disabled"]="DISABLED";IpAllowListEnabledSettingValue["Enabled"]="ENABLED";})(IpAllowListEnabledSettingValue||(exports.IpAllowListEnabledSettingValue=IpAllowListEnabledSettingValue={}));/** Properties by which IP allow list entry connections can be ordered. */let IpAllowListEntryOrderField;/** The possible values for the IP allow list configuration for installed GitHub Apps setting. */exports.IpAllowListEntryOrderField=IpAllowListEntryOrderField;(function(IpAllowListEntryOrderField){IpAllowListEntryOrderField["AllowListValue"]="ALLOW_LIST_VALUE";IpAllowListEntryOrderField["CreatedAt"]="CREATED_AT";})(IpAllowListEntryOrderField||(exports.IpAllowListEntryOrderField=IpAllowListEntryOrderField={}));let IpAllowListForInstalledAppsEnabledSettingValue;/** Types that can own an IP allow list. */exports.IpAllowListForInstalledAppsEnabledSettingValue=IpAllowListForInstalledAppsEnabledSettingValue;(function(IpAllowListForInstalledAppsEnabledSettingValue){IpAllowListForInstalledAppsEnabledSettingValue["Disabled"]="DISABLED";IpAllowListForInstalledAppsEnabledSettingValue["Enabled"]="ENABLED";})(IpAllowListForInstalledAppsEnabledSettingValue||(exports.IpAllowListForInstalledAppsEnabledSettingValue=IpAllowListForInstalledAppsEnabledSettingValue={}));/** Properties by which issue comment connections can be ordered. */let IssueCommentOrderField;/** The connection type for Issue. */exports.IssueCommentOrderField=IssueCommentOrderField;(function(IssueCommentOrderField){IssueCommentOrderField["UpdatedAt"]="UPDATED_AT";})(IssueCommentOrderField||(exports.IssueCommentOrderField=IssueCommentOrderField={}));/** Properties by which issue connections can be ordered. */let IssueOrderField;/** The possible states of an issue. */exports.IssueOrderField=IssueOrderField;(function(IssueOrderField){IssueOrderField["Comments"]="COMMENTS";IssueOrderField["CreatedAt"]="CREATED_AT";IssueOrderField["UpdatedAt"]="UPDATED_AT";})(IssueOrderField||(exports.IssueOrderField=IssueOrderField={}));let IssueState;/** A repository issue template. */exports.IssueState=IssueState;(function(IssueState){IssueState["Closed"]="CLOSED";IssueState["Open"]="OPEN";})(IssueState||(exports.IssueState=IssueState={}));/** The possible item types found in a timeline. */let IssueTimelineItemsItemType;/** Represents a user signing up for a GitHub account. */exports.IssueTimelineItemsItemType=IssueTimelineItemsItemType;(function(IssueTimelineItemsItemType){IssueTimelineItemsItemType["AddedToProjectEvent"]="ADDED_TO_PROJECT_EVENT";IssueTimelineItemsItemType["AssignedEvent"]="ASSIGNED_EVENT";IssueTimelineItemsItemType["ClosedEvent"]="CLOSED_EVENT";IssueTimelineItemsItemType["CommentDeletedEvent"]="COMMENT_DELETED_EVENT";IssueTimelineItemsItemType["ConnectedEvent"]="CONNECTED_EVENT";IssueTimelineItemsItemType["ConvertedNoteToIssueEvent"]="CONVERTED_NOTE_TO_ISSUE_EVENT";IssueTimelineItemsItemType["CrossReferencedEvent"]="CROSS_REFERENCED_EVENT";IssueTimelineItemsItemType["DemilestonedEvent"]="DEMILESTONED_EVENT";IssueTimelineItemsItemType["DisconnectedEvent"]="DISCONNECTED_EVENT";IssueTimelineItemsItemType["IssueComment"]="ISSUE_COMMENT";IssueTimelineItemsItemType["LabeledEvent"]="LABELED_EVENT";IssueTimelineItemsItemType["LockedEvent"]="LOCKED_EVENT";IssueTimelineItemsItemType["MarkedAsDuplicateEvent"]="MARKED_AS_DUPLICATE_EVENT";IssueTimelineItemsItemType["MentionedEvent"]="MENTIONED_EVENT";IssueTimelineItemsItemType["MilestonedEvent"]="MILESTONED_EVENT";IssueTimelineItemsItemType["MovedColumnsInProjectEvent"]="MOVED_COLUMNS_IN_PROJECT_EVENT";IssueTimelineItemsItemType["PinnedEvent"]="PINNED_EVENT";IssueTimelineItemsItemType["ReferencedEvent"]="REFERENCED_EVENT";IssueTimelineItemsItemType["RemovedFromProjectEvent"]="REMOVED_FROM_PROJECT_EVENT";IssueTimelineItemsItemType["RenamedTitleEvent"]="RENAMED_TITLE_EVENT";IssueTimelineItemsItemType["ReopenedEvent"]="REOPENED_EVENT";IssueTimelineItemsItemType["SubscribedEvent"]="SUBSCRIBED_EVENT";IssueTimelineItemsItemType["TransferredEvent"]="TRANSFERRED_EVENT";IssueTimelineItemsItemType["UnassignedEvent"]="UNASSIGNED_EVENT";IssueTimelineItemsItemType["UnlabeledEvent"]="UNLABELED_EVENT";IssueTimelineItemsItemType["UnlockedEvent"]="UNLOCKED_EVENT";IssueTimelineItemsItemType["UnmarkedAsDuplicateEvent"]="UNMARKED_AS_DUPLICATE_EVENT";IssueTimelineItemsItemType["UnpinnedEvent"]="UNPINNED_EVENT";IssueTimelineItemsItemType["UnsubscribedEvent"]="UNSUBSCRIBED_EVENT";IssueTimelineItemsItemType["UserBlockedEvent"]="USER_BLOCKED_EVENT";})(IssueTimelineItemsItemType||(exports.IssueTimelineItemsItemType=IssueTimelineItemsItemType={}));/** Properties by which label connections can be ordered. */let LabelOrderField;/** An object that can have labels assigned to it. */exports.LabelOrderField=LabelOrderField;(function(LabelOrderField){LabelOrderField["CreatedAt"]="CREATED_AT";LabelOrderField["Name"]="NAME";})(LabelOrderField||(exports.LabelOrderField=LabelOrderField={}));/** Properties by which language connections can be ordered. */let LanguageOrderField;/** A repository's open source license */exports.LanguageOrderField=LanguageOrderField;(function(LanguageOrderField){LanguageOrderField["Size"]="SIZE";})(LanguageOrderField||(exports.LanguageOrderField=LanguageOrderField={}));/** The possible reasons that an issue or pull request was locked. */let LockReason;/** An object that can be locked. */exports.LockReason=LockReason;(function(LockReason){LockReason["OffTopic"]="OFF_TOPIC";LockReason["Resolved"]="RESOLVED";LockReason["Spam"]="SPAM";LockReason["TooHeated"]="TOO_HEATED";})(LockReason||(exports.LockReason=LockReason={}));/** Whether or not a PullRequest can be merged. */let MergeableState;/** Represents a 'merged' event on a given pull request. */exports.MergeableState=MergeableState;(function(MergeableState){MergeableState["Conflicting"]="CONFLICTING";MergeableState["Mergeable"]="MERGEABLE";MergeableState["Unknown"]="UNKNOWN";})(MergeableState||(exports.MergeableState=MergeableState={}));/** Properties by which milestone connections can be ordered. */let MilestoneOrderField;/** The possible states of a milestone. */exports.MilestoneOrderField=MilestoneOrderField;(function(MilestoneOrderField){MilestoneOrderField["CreatedAt"]="CREATED_AT";MilestoneOrderField["DueDate"]="DUE_DATE";MilestoneOrderField["Number"]="NUMBER";MilestoneOrderField["UpdatedAt"]="UPDATED_AT";})(MilestoneOrderField||(exports.MilestoneOrderField=MilestoneOrderField={}));let MilestoneState;/** Represents a 'milestoned' event on a given issue or pull request. */exports.MilestoneState=MilestoneState;(function(MilestoneState){MilestoneState["Closed"]="CLOSED";MilestoneState["Open"]="OPEN";})(MilestoneState||(exports.MilestoneState=MilestoneState={}));/** The possible values for the notification restriction setting. */let NotificationRestrictionSettingValue;/** Metadata for an audit entry with action oauth_application.* */exports.NotificationRestrictionSettingValue=NotificationRestrictionSettingValue;(function(NotificationRestrictionSettingValue){NotificationRestrictionSettingValue["Disabled"]="DISABLED";NotificationRestrictionSettingValue["Enabled"]="ENABLED";})(NotificationRestrictionSettingValue||(exports.NotificationRestrictionSettingValue=NotificationRestrictionSettingValue={}));/** The state of an OAuth Application when it was created. */let OauthApplicationCreateAuditEntryState;/** The corresponding operation type for the action */exports.OauthApplicationCreateAuditEntryState=OauthApplicationCreateAuditEntryState;(function(OauthApplicationCreateAuditEntryState){OauthApplicationCreateAuditEntryState["Active"]="ACTIVE";OauthApplicationCreateAuditEntryState["PendingDeletion"]="PENDING_DELETION";OauthApplicationCreateAuditEntryState["Suspended"]="SUSPENDED";})(OauthApplicationCreateAuditEntryState||(exports.OauthApplicationCreateAuditEntryState=OauthApplicationCreateAuditEntryState={}));let OperationType;/** Possible directions in which to order a list of items when provided an `orderBy` argument. */exports.OperationType=OperationType;(function(OperationType){OperationType["Access"]="ACCESS";OperationType["Authentication"]="AUTHENTICATION";OperationType["Create"]="CREATE";OperationType["Modify"]="MODIFY";OperationType["Remove"]="REMOVE";OperationType["Restore"]="RESTORE";OperationType["Transfer"]="TRANSFER";})(OperationType||(exports.OperationType=OperationType={}));let OrderDirection;/** Audit log entry for a org.add_billing_manager */exports.OrderDirection=OrderDirection;(function(OrderDirection){OrderDirection["Asc"]="ASC";OrderDirection["Desc"]="DESC";})(OrderDirection||(exports.OrderDirection=OrderDirection={}));/** The permissions available to members on an Organization. */let OrgAddMemberAuditEntryPermission;/** Audit log entry for a org.block_user */exports.OrgAddMemberAuditEntryPermission=OrgAddMemberAuditEntryPermission;(function(OrgAddMemberAuditEntryPermission){OrgAddMemberAuditEntryPermission["Admin"]="ADMIN";OrgAddMemberAuditEntryPermission["Read"]="READ";})(OrgAddMemberAuditEntryPermission||(exports.OrgAddMemberAuditEntryPermission=OrgAddMemberAuditEntryPermission={}));/** The billing plans available for organizations. */let OrgCreateAuditEntryBillingPlan;/** Audit log entry for a org.disable_oauth_app_restrictions event. */exports.OrgCreateAuditEntryBillingPlan=OrgCreateAuditEntryBillingPlan;(function(OrgCreateAuditEntryBillingPlan){OrgCreateAuditEntryBillingPlan["Business"]="BUSINESS";OrgCreateAuditEntryBillingPlan["BusinessPlus"]="BUSINESS_PLUS";OrgCreateAuditEntryBillingPlan["Free"]="FREE";OrgCreateAuditEntryBillingPlan["TieredPerSeat"]="TIERED_PER_SEAT";OrgCreateAuditEntryBillingPlan["Unlimited"]="UNLIMITED";})(OrgCreateAuditEntryBillingPlan||(exports.OrgCreateAuditEntryBillingPlan=OrgCreateAuditEntryBillingPlan={}));/** The reason a billing manager was removed from an Organization. */let OrgRemoveBillingManagerAuditEntryReason;/** Audit log entry for a org.remove_member event. */exports.OrgRemoveBillingManagerAuditEntryReason=OrgRemoveBillingManagerAuditEntryReason;(function(OrgRemoveBillingManagerAuditEntryReason){OrgRemoveBillingManagerAuditEntryReason["SamlExternalIdentityMissing"]="SAML_EXTERNAL_IDENTITY_MISSING";OrgRemoveBillingManagerAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"]="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";OrgRemoveBillingManagerAuditEntryReason["TwoFactorRequirementNonCompliance"]="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";})(OrgRemoveBillingManagerAuditEntryReason||(exports.OrgRemoveBillingManagerAuditEntryReason=OrgRemoveBillingManagerAuditEntryReason={}));/** The type of membership a user has with an Organization. */let OrgRemoveMemberAuditEntryMembershipType;/** The reason a member was removed from an Organization. */exports.OrgRemoveMemberAuditEntryMembershipType=OrgRemoveMemberAuditEntryMembershipType;(function(OrgRemoveMemberAuditEntryMembershipType){OrgRemoveMemberAuditEntryMembershipType["Admin"]="ADMIN";OrgRemoveMemberAuditEntryMembershipType["BillingManager"]="BILLING_MANAGER";OrgRemoveMemberAuditEntryMembershipType["DirectMember"]="DIRECT_MEMBER";OrgRemoveMemberAuditEntryMembershipType["OutsideCollaborator"]="OUTSIDE_COLLABORATOR";OrgRemoveMemberAuditEntryMembershipType["Unaffiliated"]="UNAFFILIATED";})(OrgRemoveMemberAuditEntryMembershipType||(exports.OrgRemoveMemberAuditEntryMembershipType=OrgRemoveMemberAuditEntryMembershipType={}));let OrgRemoveMemberAuditEntryReason;/** Audit log entry for a org.remove_outside_collaborator event. */exports.OrgRemoveMemberAuditEntryReason=OrgRemoveMemberAuditEntryReason;(function(OrgRemoveMemberAuditEntryReason){OrgRemoveMemberAuditEntryReason["SamlExternalIdentityMissing"]="SAML_EXTERNAL_IDENTITY_MISSING";OrgRemoveMemberAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"]="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";OrgRemoveMemberAuditEntryReason["TwoFactorAccountRecovery"]="TWO_FACTOR_ACCOUNT_RECOVERY";OrgRemoveMemberAuditEntryReason["TwoFactorRequirementNonCompliance"]="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";OrgRemoveMemberAuditEntryReason["UserAccountDeleted"]="USER_ACCOUNT_DELETED";})(OrgRemoveMemberAuditEntryReason||(exports.OrgRemoveMemberAuditEntryReason=OrgRemoveMemberAuditEntryReason={}));/** The type of membership a user has with an Organization. */let OrgRemoveOutsideCollaboratorAuditEntryMembershipType;/** The reason an outside collaborator was removed from an Organization. */exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType=OrgRemoveOutsideCollaboratorAuditEntryMembershipType;(function(OrgRemoveOutsideCollaboratorAuditEntryMembershipType){OrgRemoveOutsideCollaboratorAuditEntryMembershipType["BillingManager"]="BILLING_MANAGER";OrgRemoveOutsideCollaboratorAuditEntryMembershipType["OutsideCollaborator"]="OUTSIDE_COLLABORATOR";OrgRemoveOutsideCollaboratorAuditEntryMembershipType["Unaffiliated"]="UNAFFILIATED";})(OrgRemoveOutsideCollaboratorAuditEntryMembershipType||(exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType=OrgRemoveOutsideCollaboratorAuditEntryMembershipType={}));let OrgRemoveOutsideCollaboratorAuditEntryReason;/** Audit log entry for a org.restore_member event. */exports.OrgRemoveOutsideCollaboratorAuditEntryReason=OrgRemoveOutsideCollaboratorAuditEntryReason;(function(OrgRemoveOutsideCollaboratorAuditEntryReason){OrgRemoveOutsideCollaboratorAuditEntryReason["SamlExternalIdentityMissing"]="SAML_EXTERNAL_IDENTITY_MISSING";OrgRemoveOutsideCollaboratorAuditEntryReason["TwoFactorRequirementNonCompliance"]="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";})(OrgRemoveOutsideCollaboratorAuditEntryReason||(exports.OrgRemoveOutsideCollaboratorAuditEntryReason=OrgRemoveOutsideCollaboratorAuditEntryReason={}));/** The default permission a repository can have in an Organization. */let OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;/** Audit log entry for a org.update_member event. */exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission=OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;(function(OrgUpdateDefaultRepositoryPermissionAuditEntryPermission){OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Admin"]="ADMIN";OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["None"]="NONE";OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Read"]="READ";OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Write"]="WRITE";})(OrgUpdateDefaultRepositoryPermissionAuditEntryPermission||(exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission=OrgUpdateDefaultRepositoryPermissionAuditEntryPermission={}));/** The permissions available to members on an Organization. */let OrgUpdateMemberAuditEntryPermission;/** Audit log entry for a org.update_member_repository_creation_permission event. */exports.OrgUpdateMemberAuditEntryPermission=OrgUpdateMemberAuditEntryPermission;(function(OrgUpdateMemberAuditEntryPermission){OrgUpdateMemberAuditEntryPermission["Admin"]="ADMIN";OrgUpdateMemberAuditEntryPermission["Read"]="READ";})(OrgUpdateMemberAuditEntryPermission||(exports.OrgUpdateMemberAuditEntryPermission=OrgUpdateMemberAuditEntryPermission={}));/** The permissions available for repository creation on an Organization. */let OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility;/** Audit log entry for a org.update_member_repository_invitation_permission event. */exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility=OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility;(function(OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility){OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["All"]="ALL";OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Internal"]="INTERNAL";OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["None"]="NONE";OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Private"]="PRIVATE";OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PrivateInternal"]="PRIVATE_INTERNAL";OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Public"]="PUBLIC";OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicInternal"]="PUBLIC_INTERNAL";OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicPrivate"]="PUBLIC_PRIVATE";})(OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility||(exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility=OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility={}));/** The possible organization invitation roles. */let OrganizationInvitationRole;/** The possible organization invitation types. */exports.OrganizationInvitationRole=OrganizationInvitationRole;(function(OrganizationInvitationRole){OrganizationInvitationRole["Admin"]="ADMIN";OrganizationInvitationRole["BillingManager"]="BILLING_MANAGER";OrganizationInvitationRole["DirectMember"]="DIRECT_MEMBER";OrganizationInvitationRole["Reinstate"]="REINSTATE";})(OrganizationInvitationRole||(exports.OrganizationInvitationRole=OrganizationInvitationRole={}));let OrganizationInvitationType;/** The connection type for User. */exports.OrganizationInvitationType=OrganizationInvitationType;(function(OrganizationInvitationType){OrganizationInvitationType["Email"]="EMAIL";OrganizationInvitationType["User"]="USER";})(OrganizationInvitationType||(exports.OrganizationInvitationType=OrganizationInvitationType={}));/** The possible roles within an organization for its members. */let OrganizationMemberRole;/** The possible values for the members can create repositories setting on an organization. */exports.OrganizationMemberRole=OrganizationMemberRole;(function(OrganizationMemberRole){OrganizationMemberRole["Admin"]="ADMIN";OrganizationMemberRole["Member"]="MEMBER";})(OrganizationMemberRole||(exports.OrganizationMemberRole=OrganizationMemberRole={}));let OrganizationMembersCanCreateRepositoriesSettingValue;/** Ordering options for organization connections. */exports.OrganizationMembersCanCreateRepositoriesSettingValue=OrganizationMembersCanCreateRepositoriesSettingValue;(function(OrganizationMembersCanCreateRepositoriesSettingValue){OrganizationMembersCanCreateRepositoriesSettingValue["All"]="ALL";OrganizationMembersCanCreateRepositoriesSettingValue["Disabled"]="DISABLED";OrganizationMembersCanCreateRepositoriesSettingValue["Private"]="PRIVATE";})(OrganizationMembersCanCreateRepositoriesSettingValue||(exports.OrganizationMembersCanCreateRepositoriesSettingValue=OrganizationMembersCanCreateRepositoriesSettingValue={}));/** Properties by which organization connections can be ordered. */let OrganizationOrderField;/** An organization teams hovercard context */exports.OrganizationOrderField=OrganizationOrderField;(function(OrganizationOrderField){OrganizationOrderField["CreatedAt"]="CREATED_AT";OrganizationOrderField["Login"]="LOGIN";})(OrganizationOrderField||(exports.OrganizationOrderField=OrganizationOrderField={}));/** Properties by which package file connections can be ordered. */let PackageFileOrderField;/** Ways in which lists of packages can be ordered upon return. */exports.PackageFileOrderField=PackageFileOrderField;(function(PackageFileOrderField){PackageFileOrderField["CreatedAt"]="CREATED_AT";})(PackageFileOrderField||(exports.PackageFileOrderField=PackageFileOrderField={}));/** Properties by which package connections can be ordered. */let PackageOrderField;/** Represents an owner of a package. */exports.PackageOrderField=PackageOrderField;(function(PackageOrderField){PackageOrderField["CreatedAt"]="CREATED_AT";})(PackageOrderField||(exports.PackageOrderField=PackageOrderField={}));/** The possible types of a package. */let PackageType;/** Information about a specific package version. */exports.PackageType=PackageType;(function(PackageType){PackageType["Debian"]="DEBIAN";PackageType["Docker"]="DOCKER";PackageType["Maven"]="MAVEN";PackageType["Npm"]="NPM";PackageType["Nuget"]="NUGET";PackageType["Pypi"]="PYPI";PackageType["Rubygems"]="RUBYGEMS";})(PackageType||(exports.PackageType=PackageType={}));/** Properties by which package version connections can be ordered. */let PackageVersionOrderField;/** Represents a object that contains package version activity statistics such as downloads. */exports.PackageVersionOrderField=PackageVersionOrderField;(function(PackageVersionOrderField){PackageVersionOrderField["CreatedAt"]="CREATED_AT";})(PackageVersionOrderField||(exports.PackageVersionOrderField=PackageVersionOrderField={}));/** Represents items that can be pinned to a profile page or dashboard. */let PinnableItemType;/** A Pinned Discussion is a discussion pinned to a repository's index page. */exports.PinnableItemType=PinnableItemType;(function(PinnableItemType){PinnableItemType["Gist"]="GIST";PinnableItemType["Issue"]="ISSUE";PinnableItemType["Organization"]="ORGANIZATION";PinnableItemType["Project"]="PROJECT";PinnableItemType["PullRequest"]="PULL_REQUEST";PinnableItemType["Repository"]="REPOSITORY";PinnableItemType["Team"]="TEAM";PinnableItemType["User"]="USER";})(PinnableItemType||(exports.PinnableItemType=PinnableItemType={}));/** Preconfigured gradients that may be used to style discussions pinned within a repository. */let PinnedDiscussionGradient;/** Preconfigured background patterns that may be used to style discussions pinned within a repository. */exports.PinnedDiscussionGradient=PinnedDiscussionGradient;(function(PinnedDiscussionGradient){PinnedDiscussionGradient["BlueMint"]="BLUE_MINT";PinnedDiscussionGradient["BluePurple"]="BLUE_PURPLE";PinnedDiscussionGradient["PinkBlue"]="PINK_BLUE";PinnedDiscussionGradient["PurpleCoral"]="PURPLE_CORAL";PinnedDiscussionGradient["RedOrange"]="RED_ORANGE";})(PinnedDiscussionGradient||(exports.PinnedDiscussionGradient=PinnedDiscussionGradient={}));let PinnedDiscussionPattern;/** Represents a 'pinned' event on a given issue or pull request. */exports.PinnedDiscussionPattern=PinnedDiscussionPattern;(function(PinnedDiscussionPattern){PinnedDiscussionPattern["ChevronUp"]="CHEVRON_UP";PinnedDiscussionPattern["Dot"]="DOT";PinnedDiscussionPattern["DotFill"]="DOT_FILL";PinnedDiscussionPattern["HeartFill"]="HEART_FILL";PinnedDiscussionPattern["Plus"]="PLUS";PinnedDiscussionPattern["Zap"]="ZAP";})(PinnedDiscussionPattern||(exports.PinnedDiscussionPattern=PinnedDiscussionPattern={}));/** The possible archived states of a project card. */let ProjectCardArchivedState;/** The connection type for ProjectCard. */exports.ProjectCardArchivedState=ProjectCardArchivedState;(function(ProjectCardArchivedState){ProjectCardArchivedState["Archived"]="ARCHIVED";ProjectCardArchivedState["NotArchived"]="NOT_ARCHIVED";})(ProjectCardArchivedState||(exports.ProjectCardArchivedState=ProjectCardArchivedState={}));/** Various content states of a ProjectCard */let ProjectCardState;/** A column inside a project. */exports.ProjectCardState=ProjectCardState;(function(ProjectCardState){ProjectCardState["ContentOnly"]="CONTENT_ONLY";ProjectCardState["NoteOnly"]="NOTE_ONLY";ProjectCardState["Redacted"]="REDACTED";})(ProjectCardState||(exports.ProjectCardState=ProjectCardState={}));/** The semantic purpose of the column - todo, in progress, or done. */let ProjectColumnPurpose;/** A list of projects associated with the owner. */exports.ProjectColumnPurpose=ProjectColumnPurpose;(function(ProjectColumnPurpose){ProjectColumnPurpose["Done"]="DONE";ProjectColumnPurpose["InProgress"]="IN_PROGRESS";ProjectColumnPurpose["Todo"]="TODO";})(ProjectColumnPurpose||(exports.ProjectColumnPurpose=ProjectColumnPurpose={}));/** Properties by which project connections can be ordered. */let ProjectOrderField;/** Represents an owner of a Project. */exports.ProjectOrderField=ProjectOrderField;(function(ProjectOrderField){ProjectOrderField["CreatedAt"]="CREATED_AT";ProjectOrderField["Name"]="NAME";ProjectOrderField["UpdatedAt"]="UPDATED_AT";})(ProjectOrderField||(exports.ProjectOrderField=ProjectOrderField={}));/** State of the project; either 'open' or 'closed' */let ProjectState;/** GitHub-provided templates for Projects */exports.ProjectState=ProjectState;(function(ProjectState){ProjectState["Closed"]="CLOSED";ProjectState["Open"]="OPEN";})(ProjectState||(exports.ProjectState=ProjectState={}));let ProjectTemplate;/** A user's public key. */exports.ProjectTemplate=ProjectTemplate;(function(ProjectTemplate){ProjectTemplate["AutomatedKanbanV2"]="AUTOMATED_KANBAN_V2";ProjectTemplate["AutomatedReviewsKanban"]="AUTOMATED_REVIEWS_KANBAN";ProjectTemplate["BasicKanban"]="BASIC_KANBAN";ProjectTemplate["BugTriage"]="BUG_TRIAGE";})(ProjectTemplate||(exports.ProjectTemplate=ProjectTemplate={}));/** Represents available types of methods to use when merging a pull request. */let PullRequestMergeMethod;/** Ways in which lists of issues can be ordered upon return. */exports.PullRequestMergeMethod=PullRequestMergeMethod;(function(PullRequestMergeMethod){PullRequestMergeMethod["Merge"]="MERGE";PullRequestMergeMethod["Rebase"]="REBASE";PullRequestMergeMethod["Squash"]="SQUASH";})(PullRequestMergeMethod||(exports.PullRequestMergeMethod=PullRequestMergeMethod={}));/** Properties by which pull_requests connections can be ordered. */let PullRequestOrderField;/** A review object for a given pull request. */exports.PullRequestOrderField=PullRequestOrderField;(function(PullRequestOrderField){PullRequestOrderField["CreatedAt"]="CREATED_AT";PullRequestOrderField["UpdatedAt"]="UPDATED_AT";})(PullRequestOrderField||(exports.PullRequestOrderField=PullRequestOrderField={}));/** The possible states of a pull request review comment. */let PullRequestReviewCommentState;/** The connection type for PullRequestReview. */exports.PullRequestReviewCommentState=PullRequestReviewCommentState;(function(PullRequestReviewCommentState){PullRequestReviewCommentState["Pending"]="PENDING";PullRequestReviewCommentState["Submitted"]="SUBMITTED";})(PullRequestReviewCommentState||(exports.PullRequestReviewCommentState=PullRequestReviewCommentState={}));/** The review status of a pull request. */let PullRequestReviewDecision;/** An edge in a connection. */exports.PullRequestReviewDecision=PullRequestReviewDecision;(function(PullRequestReviewDecision){PullRequestReviewDecision["Approved"]="APPROVED";PullRequestReviewDecision["ChangesRequested"]="CHANGES_REQUESTED";PullRequestReviewDecision["ReviewRequired"]="REVIEW_REQUIRED";})(PullRequestReviewDecision||(exports.PullRequestReviewDecision=PullRequestReviewDecision={}));/** The possible events to perform on a pull request review. */let PullRequestReviewEvent;/** The possible states of a pull request review. */exports.PullRequestReviewEvent=PullRequestReviewEvent;(function(PullRequestReviewEvent){PullRequestReviewEvent["Approve"]="APPROVE";PullRequestReviewEvent["Comment"]="COMMENT";PullRequestReviewEvent["Dismiss"]="DISMISS";PullRequestReviewEvent["RequestChanges"]="REQUEST_CHANGES";})(PullRequestReviewEvent||(exports.PullRequestReviewEvent=PullRequestReviewEvent={}));let PullRequestReviewState;/** A threaded list of comments for a given pull request. */exports.PullRequestReviewState=PullRequestReviewState;(function(PullRequestReviewState){PullRequestReviewState["Approved"]="APPROVED";PullRequestReviewState["ChangesRequested"]="CHANGES_REQUESTED";PullRequestReviewState["Commented"]="COMMENTED";PullRequestReviewState["Dismissed"]="DISMISSED";PullRequestReviewState["Pending"]="PENDING";})(PullRequestReviewState||(exports.PullRequestReviewState=PullRequestReviewState={}));/** The possible states of a pull request. */let PullRequestState;/** A repository pull request template. */exports.PullRequestState=PullRequestState;(function(PullRequestState){PullRequestState["Closed"]="CLOSED";PullRequestState["Merged"]="MERGED";PullRequestState["Open"]="OPEN";})(PullRequestState||(exports.PullRequestState=PullRequestState={}));/** The possible item types found in a timeline. */let PullRequestTimelineItemsItemType;/** The possible target states when updating a pull request. */exports.PullRequestTimelineItemsItemType=PullRequestTimelineItemsItemType;(function(PullRequestTimelineItemsItemType){PullRequestTimelineItemsItemType["AddedToProjectEvent"]="ADDED_TO_PROJECT_EVENT";PullRequestTimelineItemsItemType["AssignedEvent"]="ASSIGNED_EVENT";PullRequestTimelineItemsItemType["AutomaticBaseChangeFailedEvent"]="AUTOMATIC_BASE_CHANGE_FAILED_EVENT";PullRequestTimelineItemsItemType["AutomaticBaseChangeSucceededEvent"]="AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT";PullRequestTimelineItemsItemType["AutoMergeDisabledEvent"]="AUTO_MERGE_DISABLED_EVENT";PullRequestTimelineItemsItemType["AutoMergeEnabledEvent"]="AUTO_MERGE_ENABLED_EVENT";PullRequestTimelineItemsItemType["AutoRebaseEnabledEvent"]="AUTO_REBASE_ENABLED_EVENT";PullRequestTimelineItemsItemType["AutoSquashEnabledEvent"]="AUTO_SQUASH_ENABLED_EVENT";PullRequestTimelineItemsItemType["BaseRefChangedEvent"]="BASE_REF_CHANGED_EVENT";PullRequestTimelineItemsItemType["BaseRefDeletedEvent"]="BASE_REF_DELETED_EVENT";PullRequestTimelineItemsItemType["BaseRefForcePushedEvent"]="BASE_REF_FORCE_PUSHED_EVENT";PullRequestTimelineItemsItemType["ClosedEvent"]="CLOSED_EVENT";PullRequestTimelineItemsItemType["CommentDeletedEvent"]="COMMENT_DELETED_EVENT";PullRequestTimelineItemsItemType["ConnectedEvent"]="CONNECTED_EVENT";PullRequestTimelineItemsItemType["ConvertedNoteToIssueEvent"]="CONVERTED_NOTE_TO_ISSUE_EVENT";PullRequestTimelineItemsItemType["ConvertToDraftEvent"]="CONVERT_TO_DRAFT_EVENT";PullRequestTimelineItemsItemType["CrossReferencedEvent"]="CROSS_REFERENCED_EVENT";PullRequestTimelineItemsItemType["DemilestonedEvent"]="DEMILESTONED_EVENT";PullRequestTimelineItemsItemType["DeployedEvent"]="DEPLOYED_EVENT";PullRequestTimelineItemsItemType["DeploymentEnvironmentChangedEvent"]="DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT";PullRequestTimelineItemsItemType["DisconnectedEvent"]="DISCONNECTED_EVENT";PullRequestTimelineItemsItemType["HeadRefDeletedEvent"]="HEAD_REF_DELETED_EVENT";PullRequestTimelineItemsItemType["HeadRefForcePushedEvent"]="HEAD_REF_FORCE_PUSHED_EVENT";PullRequestTimelineItemsItemType["HeadRefRestoredEvent"]="HEAD_REF_RESTORED_EVENT";PullRequestTimelineItemsItemType["IssueComment"]="ISSUE_COMMENT";PullRequestTimelineItemsItemType["LabeledEvent"]="LABELED_EVENT";PullRequestTimelineItemsItemType["LockedEvent"]="LOCKED_EVENT";PullRequestTimelineItemsItemType["MarkedAsDuplicateEvent"]="MARKED_AS_DUPLICATE_EVENT";PullRequestTimelineItemsItemType["MentionedEvent"]="MENTIONED_EVENT";PullRequestTimelineItemsItemType["MergedEvent"]="MERGED_EVENT";PullRequestTimelineItemsItemType["MilestonedEvent"]="MILESTONED_EVENT";PullRequestTimelineItemsItemType["MovedColumnsInProjectEvent"]="MOVED_COLUMNS_IN_PROJECT_EVENT";PullRequestTimelineItemsItemType["PinnedEvent"]="PINNED_EVENT";PullRequestTimelineItemsItemType["PullRequestCommit"]="PULL_REQUEST_COMMIT";PullRequestTimelineItemsItemType["PullRequestCommitCommentThread"]="PULL_REQUEST_COMMIT_COMMENT_THREAD";PullRequestTimelineItemsItemType["PullRequestReview"]="PULL_REQUEST_REVIEW";PullRequestTimelineItemsItemType["PullRequestReviewThread"]="PULL_REQUEST_REVIEW_THREAD";PullRequestTimelineItemsItemType["PullRequestRevisionMarker"]="PULL_REQUEST_REVISION_MARKER";PullRequestTimelineItemsItemType["ReadyForReviewEvent"]="READY_FOR_REVIEW_EVENT";PullRequestTimelineItemsItemType["ReferencedEvent"]="REFERENCED_EVENT";PullRequestTimelineItemsItemType["RemovedFromProjectEvent"]="REMOVED_FROM_PROJECT_EVENT";PullRequestTimelineItemsItemType["RenamedTitleEvent"]="RENAMED_TITLE_EVENT";PullRequestTimelineItemsItemType["ReopenedEvent"]="REOPENED_EVENT";PullRequestTimelineItemsItemType["ReviewDismissedEvent"]="REVIEW_DISMISSED_EVENT";PullRequestTimelineItemsItemType["ReviewRequestedEvent"]="REVIEW_REQUESTED_EVENT";PullRequestTimelineItemsItemType["ReviewRequestRemovedEvent"]="REVIEW_REQUEST_REMOVED_EVENT";PullRequestTimelineItemsItemType["SubscribedEvent"]="SUBSCRIBED_EVENT";PullRequestTimelineItemsItemType["TransferredEvent"]="TRANSFERRED_EVENT";PullRequestTimelineItemsItemType["UnassignedEvent"]="UNASSIGNED_EVENT";PullRequestTimelineItemsItemType["UnlabeledEvent"]="UNLABELED_EVENT";PullRequestTimelineItemsItemType["UnlockedEvent"]="UNLOCKED_EVENT";PullRequestTimelineItemsItemType["UnmarkedAsDuplicateEvent"]="UNMARKED_AS_DUPLICATE_EVENT";PullRequestTimelineItemsItemType["UnpinnedEvent"]="UNPINNED_EVENT";PullRequestTimelineItemsItemType["UnsubscribedEvent"]="UNSUBSCRIBED_EVENT";PullRequestTimelineItemsItemType["UserBlockedEvent"]="USER_BLOCKED_EVENT";})(PullRequestTimelineItemsItemType||(exports.PullRequestTimelineItemsItemType=PullRequestTimelineItemsItemType={}));let PullRequestUpdateState;/** A Git push. */exports.PullRequestUpdateState=PullRequestUpdateState;(function(PullRequestUpdateState){PullRequestUpdateState["Closed"]="CLOSED";PullRequestUpdateState["Open"]="OPEN";})(PullRequestUpdateState||(exports.PullRequestUpdateState=PullRequestUpdateState={}));/** Emojis that can be attached to Issues, Pull Requests and Comments. */let ReactionContent;/** An edge in a connection. */exports.ReactionContent=ReactionContent;(function(ReactionContent){ReactionContent["Confused"]="CONFUSED";ReactionContent["Eyes"]="EYES";ReactionContent["Heart"]="HEART";ReactionContent["Hooray"]="HOORAY";ReactionContent["Laugh"]="LAUGH";ReactionContent["Rocket"]="ROCKET";ReactionContent["ThumbsDown"]="THUMBS_DOWN";ReactionContent["ThumbsUp"]="THUMBS_UP";})(ReactionContent||(exports.ReactionContent=ReactionContent={}));/** A list of fields that reactions can be ordered by. */let ReactionOrderField;/** Types that can be assigned to reactions. */exports.ReactionOrderField=ReactionOrderField;(function(ReactionOrderField){ReactionOrderField["CreatedAt"]="CREATED_AT";})(ReactionOrderField||(exports.ReactionOrderField=ReactionOrderField={}));/** Properties by which ref connections can be ordered. */let RefOrderField;/** A ref update rules for a viewer. */exports.RefOrderField=RefOrderField;(function(RefOrderField){RefOrderField["Alphabetical"]="ALPHABETICAL";RefOrderField["TagCommitDate"]="TAG_COMMIT_DATE";})(RefOrderField||(exports.RefOrderField=RefOrderField={}));/** Properties by which release connections can be ordered. */let ReleaseOrderField;/** Autogenerated input type of RemoveAssigneesFromAssignable */exports.ReleaseOrderField=ReleaseOrderField;(function(ReleaseOrderField){ReleaseOrderField["CreatedAt"]="CREATED_AT";ReleaseOrderField["Name"]="NAME";})(ReleaseOrderField||(exports.ReleaseOrderField=ReleaseOrderField={}));/** The privacy of a repository */let RepoAccessAuditEntryVisibility;/** Audit log entry for a repo.add_member event. */exports.RepoAccessAuditEntryVisibility=RepoAccessAuditEntryVisibility;(function(RepoAccessAuditEntryVisibility){RepoAccessAuditEntryVisibility["Internal"]="INTERNAL";RepoAccessAuditEntryVisibility["Private"]="PRIVATE";RepoAccessAuditEntryVisibility["Public"]="PUBLIC";})(RepoAccessAuditEntryVisibility||(exports.RepoAccessAuditEntryVisibility=RepoAccessAuditEntryVisibility={}));/** The privacy of a repository */let RepoAddMemberAuditEntryVisibility;/** Audit log entry for a repo.add_topic event. */exports.RepoAddMemberAuditEntryVisibility=RepoAddMemberAuditEntryVisibility;(function(RepoAddMemberAuditEntryVisibility){RepoAddMemberAuditEntryVisibility["Internal"]="INTERNAL";RepoAddMemberAuditEntryVisibility["Private"]="PRIVATE";RepoAddMemberAuditEntryVisibility["Public"]="PUBLIC";})(RepoAddMemberAuditEntryVisibility||(exports.RepoAddMemberAuditEntryVisibility=RepoAddMemberAuditEntryVisibility={}));/** The privacy of a repository */let RepoArchivedAuditEntryVisibility;/** Audit log entry for a repo.change_merge_setting event. */exports.RepoArchivedAuditEntryVisibility=RepoArchivedAuditEntryVisibility;(function(RepoArchivedAuditEntryVisibility){RepoArchivedAuditEntryVisibility["Internal"]="INTERNAL";RepoArchivedAuditEntryVisibility["Private"]="PRIVATE";RepoArchivedAuditEntryVisibility["Public"]="PUBLIC";})(RepoArchivedAuditEntryVisibility||(exports.RepoArchivedAuditEntryVisibility=RepoArchivedAuditEntryVisibility={}));/** The merge options available for pull requests to this repository. */let RepoChangeMergeSettingAuditEntryMergeType;/** Audit log entry for a repo.config.disable_anonymous_git_access event. */exports.RepoChangeMergeSettingAuditEntryMergeType=RepoChangeMergeSettingAuditEntryMergeType;(function(RepoChangeMergeSettingAuditEntryMergeType){RepoChangeMergeSettingAuditEntryMergeType["Merge"]="MERGE";RepoChangeMergeSettingAuditEntryMergeType["Rebase"]="REBASE";RepoChangeMergeSettingAuditEntryMergeType["Squash"]="SQUASH";})(RepoChangeMergeSettingAuditEntryMergeType||(exports.RepoChangeMergeSettingAuditEntryMergeType=RepoChangeMergeSettingAuditEntryMergeType={}));/** The privacy of a repository */let RepoCreateAuditEntryVisibility;/** Audit log entry for a repo.destroy event. */exports.RepoCreateAuditEntryVisibility=RepoCreateAuditEntryVisibility;(function(RepoCreateAuditEntryVisibility){RepoCreateAuditEntryVisibility["Internal"]="INTERNAL";RepoCreateAuditEntryVisibility["Private"]="PRIVATE";RepoCreateAuditEntryVisibility["Public"]="PUBLIC";})(RepoCreateAuditEntryVisibility||(exports.RepoCreateAuditEntryVisibility=RepoCreateAuditEntryVisibility={}));/** The privacy of a repository */let RepoDestroyAuditEntryVisibility;/** Audit log entry for a repo.remove_member event. */exports.RepoDestroyAuditEntryVisibility=RepoDestroyAuditEntryVisibility;(function(RepoDestroyAuditEntryVisibility){RepoDestroyAuditEntryVisibility["Internal"]="INTERNAL";RepoDestroyAuditEntryVisibility["Private"]="PRIVATE";RepoDestroyAuditEntryVisibility["Public"]="PUBLIC";})(RepoDestroyAuditEntryVisibility||(exports.RepoDestroyAuditEntryVisibility=RepoDestroyAuditEntryVisibility={}));/** The privacy of a repository */let RepoRemoveMemberAuditEntryVisibility;/** Audit log entry for a repo.remove_topic event. */exports.RepoRemoveMemberAuditEntryVisibility=RepoRemoveMemberAuditEntryVisibility;(function(RepoRemoveMemberAuditEntryVisibility){RepoRemoveMemberAuditEntryVisibility["Internal"]="INTERNAL";RepoRemoveMemberAuditEntryVisibility["Private"]="PRIVATE";RepoRemoveMemberAuditEntryVisibility["Public"]="PUBLIC";})(RepoRemoveMemberAuditEntryVisibility||(exports.RepoRemoveMemberAuditEntryVisibility=RepoRemoveMemberAuditEntryVisibility={}));/** The reasons a piece of content can be reported or minimized. */let ReportedContentClassifiers;/** A repository contains the content for a project. */exports.ReportedContentClassifiers=ReportedContentClassifiers;(function(ReportedContentClassifiers){ReportedContentClassifiers["Abuse"]="ABUSE";ReportedContentClassifiers["Duplicate"]="DUPLICATE";ReportedContentClassifiers["OffTopic"]="OFF_TOPIC";ReportedContentClassifiers["Outdated"]="OUTDATED";ReportedContentClassifiers["Resolved"]="RESOLVED";ReportedContentClassifiers["Spam"]="SPAM";})(ReportedContentClassifiers||(exports.ReportedContentClassifiers=ReportedContentClassifiers={}));/** The affiliation of a user to a repository */let RepositoryAffiliation;/** Metadata for an audit entry with action repo.* */exports.RepositoryAffiliation=RepositoryAffiliation;(function(RepositoryAffiliation){RepositoryAffiliation["Collaborator"]="COLLABORATOR";RepositoryAffiliation["OrganizationMember"]="ORGANIZATION_MEMBER";RepositoryAffiliation["Owner"]="OWNER";})(RepositoryAffiliation||(exports.RepositoryAffiliation=RepositoryAffiliation={}));/** The reason a repository is listed as 'contributed'. */let RepositoryContributionType;/** Represents an author of discussions in repositories. */exports.RepositoryContributionType=RepositoryContributionType;(function(RepositoryContributionType){RepositoryContributionType["Commit"]="COMMIT";RepositoryContributionType["Issue"]="ISSUE";RepositoryContributionType["PullRequest"]="PULL_REQUEST";RepositoryContributionType["PullRequestReview"]="PULL_REQUEST_REVIEW";RepositoryContributionType["Repository"]="REPOSITORY";})(RepositoryContributionType||(exports.RepositoryContributionType=RepositoryContributionType={}));/** A repository interaction limit. */let RepositoryInteractionLimit;/** The length for a repository interaction limit to be enabled for. */exports.RepositoryInteractionLimit=RepositoryInteractionLimit;(function(RepositoryInteractionLimit){RepositoryInteractionLimit["CollaboratorsOnly"]="COLLABORATORS_ONLY";RepositoryInteractionLimit["ContributorsOnly"]="CONTRIBUTORS_ONLY";RepositoryInteractionLimit["ExistingUsers"]="EXISTING_USERS";RepositoryInteractionLimit["NoLimit"]="NO_LIMIT";})(RepositoryInteractionLimit||(exports.RepositoryInteractionLimit=RepositoryInteractionLimit={}));let RepositoryInteractionLimitExpiry;/** Indicates where an interaction limit is configured. */exports.RepositoryInteractionLimitExpiry=RepositoryInteractionLimitExpiry;(function(RepositoryInteractionLimitExpiry){RepositoryInteractionLimitExpiry["OneDay"]="ONE_DAY";RepositoryInteractionLimitExpiry["OneMonth"]="ONE_MONTH";RepositoryInteractionLimitExpiry["OneWeek"]="ONE_WEEK";RepositoryInteractionLimitExpiry["SixMonths"]="SIX_MONTHS";RepositoryInteractionLimitExpiry["ThreeDays"]="THREE_DAYS";})(RepositoryInteractionLimitExpiry||(exports.RepositoryInteractionLimitExpiry=RepositoryInteractionLimitExpiry={}));let RepositoryInteractionLimitOrigin;/** An invitation for a user to be added to a repository. */exports.RepositoryInteractionLimitOrigin=RepositoryInteractionLimitOrigin;(function(RepositoryInteractionLimitOrigin){RepositoryInteractionLimitOrigin["Organization"]="ORGANIZATION";RepositoryInteractionLimitOrigin["Repository"]="REPOSITORY";RepositoryInteractionLimitOrigin["User"]="USER";})(RepositoryInteractionLimitOrigin||(exports.RepositoryInteractionLimitOrigin=RepositoryInteractionLimitOrigin={}));/** Properties by which repository invitation connections can be ordered. */let RepositoryInvitationOrderField;/** The possible reasons a given repository could be in a locked state. */exports.RepositoryInvitationOrderField=RepositoryInvitationOrderField;(function(RepositoryInvitationOrderField){RepositoryInvitationOrderField["CreatedAt"]="CREATED_AT";RepositoryInvitationOrderField["InviteeLogin"]="INVITEE_LOGIN";})(RepositoryInvitationOrderField||(exports.RepositoryInvitationOrderField=RepositoryInvitationOrderField={}));let RepositoryLockReason;/** Represents a object that belongs to a repository. */exports.RepositoryLockReason=RepositoryLockReason;(function(RepositoryLockReason){RepositoryLockReason["Billing"]="BILLING";RepositoryLockReason["Migrating"]="MIGRATING";RepositoryLockReason["Moving"]="MOVING";RepositoryLockReason["Rename"]="RENAME";})(RepositoryLockReason||(exports.RepositoryLockReason=RepositoryLockReason={}));/** Properties by which repository connections can be ordered. */let RepositoryOrderField;/** Represents an owner of a Repository. */exports.RepositoryOrderField=RepositoryOrderField;(function(RepositoryOrderField){RepositoryOrderField["CreatedAt"]="CREATED_AT";RepositoryOrderField["Name"]="NAME";RepositoryOrderField["PushedAt"]="PUSHED_AT";RepositoryOrderField["Stargazers"]="STARGAZERS";RepositoryOrderField["UpdatedAt"]="UPDATED_AT";})(RepositoryOrderField||(exports.RepositoryOrderField=RepositoryOrderField={}));/** The access level to a repository */let RepositoryPermission;/** The privacy of a repository */exports.RepositoryPermission=RepositoryPermission;(function(RepositoryPermission){RepositoryPermission["Admin"]="ADMIN";RepositoryPermission["Maintain"]="MAINTAIN";RepositoryPermission["Read"]="READ";RepositoryPermission["Triage"]="TRIAGE";RepositoryPermission["Write"]="WRITE";})(RepositoryPermission||(exports.RepositoryPermission=RepositoryPermission={}));let RepositoryPrivacy;/** A repository-topic connects a repository to a topic. */exports.RepositoryPrivacy=RepositoryPrivacy;(function(RepositoryPrivacy){RepositoryPrivacy["Private"]="PRIVATE";RepositoryPrivacy["Public"]="PUBLIC";})(RepositoryPrivacy||(exports.RepositoryPrivacy=RepositoryPrivacy={}));/** The repository's visibility level. */let RepositoryVisibility;/** Audit log entry for a repository_visibility_change.disable event. */exports.RepositoryVisibility=RepositoryVisibility;(function(RepositoryVisibility){RepositoryVisibility["Internal"]="INTERNAL";RepositoryVisibility["Private"]="PRIVATE";RepositoryVisibility["Public"]="PUBLIC";})(RepositoryVisibility||(exports.RepositoryVisibility=RepositoryVisibility={}));/** The possible states that can be requested when creating a check run. */let RequestableCheckStatusState;/** Types that can be requested reviewers. */exports.RequestableCheckStatusState=RequestableCheckStatusState;(function(RequestableCheckStatusState){RequestableCheckStatusState["Completed"]="COMPLETED";RequestableCheckStatusState["InProgress"]="IN_PROGRESS";RequestableCheckStatusState["Pending"]="PENDING";RequestableCheckStatusState["Queued"]="QUEUED";RequestableCheckStatusState["Waiting"]="WAITING";})(RequestableCheckStatusState||(exports.RequestableCheckStatusState=RequestableCheckStatusState={}));/** The possible digest algorithms used to sign SAML requests for an identity provider. */let SamlDigestAlgorithm;/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */exports.SamlDigestAlgorithm=SamlDigestAlgorithm;(function(SamlDigestAlgorithm){SamlDigestAlgorithm["Sha1"]="SHA1";SamlDigestAlgorithm["Sha256"]="SHA256";SamlDigestAlgorithm["Sha384"]="SHA384";SamlDigestAlgorithm["Sha512"]="SHA512";})(SamlDigestAlgorithm||(exports.SamlDigestAlgorithm=SamlDigestAlgorithm={}));let SamlSignatureAlgorithm;/** A Saved Reply is text a user can use to reply quickly. */exports.SamlSignatureAlgorithm=SamlSignatureAlgorithm;(function(SamlSignatureAlgorithm){SamlSignatureAlgorithm["RsaSha1"]="RSA_SHA1";SamlSignatureAlgorithm["RsaSha256"]="RSA_SHA256";SamlSignatureAlgorithm["RsaSha384"]="RSA_SHA384";SamlSignatureAlgorithm["RsaSha512"]="RSA_SHA512";})(SamlSignatureAlgorithm||(exports.SamlSignatureAlgorithm=SamlSignatureAlgorithm={}));/** Properties by which saved reply connections can be ordered. */let SavedReplyOrderField;/** The results of a search. */exports.SavedReplyOrderField=SavedReplyOrderField;(function(SavedReplyOrderField){SavedReplyOrderField["UpdatedAt"]="UPDATED_AT";})(SavedReplyOrderField||(exports.SavedReplyOrderField=SavedReplyOrderField={}));/** Represents the individual results of a search. */let SearchType;/** A GitHub Security Advisory */exports.SearchType=SearchType;(function(SearchType){SearchType["Discussion"]="DISCUSSION";SearchType["Issue"]="ISSUE";SearchType["Repository"]="REPOSITORY";SearchType["User"]="USER";})(SearchType||(exports.SearchType=SearchType={}));/** The possible ecosystems of a security vulnerability's package. */let SecurityAdvisoryEcosystem;/** An edge in a connection. */exports.SecurityAdvisoryEcosystem=SecurityAdvisoryEcosystem;(function(SecurityAdvisoryEcosystem){SecurityAdvisoryEcosystem["Composer"]="COMPOSER";SecurityAdvisoryEcosystem["Go"]="GO";SecurityAdvisoryEcosystem["Maven"]="MAVEN";SecurityAdvisoryEcosystem["Npm"]="NPM";SecurityAdvisoryEcosystem["Nuget"]="NUGET";SecurityAdvisoryEcosystem["Other"]="OTHER";SecurityAdvisoryEcosystem["Pip"]="PIP";SecurityAdvisoryEcosystem["Rubygems"]="RUBYGEMS";})(SecurityAdvisoryEcosystem||(exports.SecurityAdvisoryEcosystem=SecurityAdvisoryEcosystem={}));/** Identifier formats available for advisories. */let SecurityAdvisoryIdentifierType;/** Ordering options for security advisory connections */exports.SecurityAdvisoryIdentifierType=SecurityAdvisoryIdentifierType;(function(SecurityAdvisoryIdentifierType){SecurityAdvisoryIdentifierType["Cve"]="CVE";SecurityAdvisoryIdentifierType["Ghsa"]="GHSA";})(SecurityAdvisoryIdentifierType||(exports.SecurityAdvisoryIdentifierType=SecurityAdvisoryIdentifierType={}));/** Properties by which security advisory connections can be ordered. */let SecurityAdvisoryOrderField;/** An individual package */exports.SecurityAdvisoryOrderField=SecurityAdvisoryOrderField;(function(SecurityAdvisoryOrderField){SecurityAdvisoryOrderField["PublishedAt"]="PUBLISHED_AT";SecurityAdvisoryOrderField["UpdatedAt"]="UPDATED_AT";})(SecurityAdvisoryOrderField||(exports.SecurityAdvisoryOrderField=SecurityAdvisoryOrderField={}));/** Severity of the vulnerability. */let SecurityAdvisorySeverity;/** An individual vulnerability within an Advisory */exports.SecurityAdvisorySeverity=SecurityAdvisorySeverity;(function(SecurityAdvisorySeverity){SecurityAdvisorySeverity["Critical"]="CRITICAL";SecurityAdvisorySeverity["High"]="HIGH";SecurityAdvisorySeverity["Low"]="LOW";SecurityAdvisorySeverity["Moderate"]="MODERATE";})(SecurityAdvisorySeverity||(exports.SecurityAdvisorySeverity=SecurityAdvisorySeverity={}));/** Properties by which security vulnerability connections can be ordered. */let SecurityVulnerabilityOrderField;/** Autogenerated input type of SetEnterpriseIdentityProvider */exports.SecurityVulnerabilityOrderField=SecurityVulnerabilityOrderField;(function(SecurityVulnerabilityOrderField){SecurityVulnerabilityOrderField["UpdatedAt"]="UPDATED_AT";})(SecurityVulnerabilityOrderField||(exports.SecurityVulnerabilityOrderField=SecurityVulnerabilityOrderField={}));/** Properties by which sponsor connections can be ordered. */let SponsorOrderField;/** Entities that can be sponsored through GitHub Sponsors */exports.SponsorOrderField=SponsorOrderField;(function(SponsorOrderField){SponsorOrderField["Login"]="LOGIN";SponsorOrderField["Relevance"]="RELEVANCE";})(SponsorOrderField||(exports.SponsorOrderField=SponsorOrderField={}));/** Properties by which sponsorable connections can be ordered. */let SponsorableOrderField;/** An event related to sponsorship activity. */exports.SponsorableOrderField=SponsorableOrderField;(function(SponsorableOrderField){SponsorableOrderField["Login"]="LOGIN";})(SponsorableOrderField||(exports.SponsorableOrderField=SponsorableOrderField={}));/** The possible actions that GitHub Sponsors activities can represent. */let SponsorsActivityAction;/** The connection type for SponsorsActivity. */exports.SponsorsActivityAction=SponsorsActivityAction;(function(SponsorsActivityAction){SponsorsActivityAction["CancelledSponsorship"]="CANCELLED_SPONSORSHIP";SponsorsActivityAction["NewSponsorship"]="NEW_SPONSORSHIP";SponsorsActivityAction["PendingChange"]="PENDING_CHANGE";SponsorsActivityAction["Refund"]="REFUND";SponsorsActivityAction["SponsorMatchDisabled"]="SPONSOR_MATCH_DISABLED";SponsorsActivityAction["TierChange"]="TIER_CHANGE";})(SponsorsActivityAction||(exports.SponsorsActivityAction=SponsorsActivityAction={}));/** Properties by which GitHub Sponsors activity connections can be ordered. */let SponsorsActivityOrderField;/** The possible time periods for which Sponsors activities can be requested. */exports.SponsorsActivityOrderField=SponsorsActivityOrderField;(function(SponsorsActivityOrderField){SponsorsActivityOrderField["Timestamp"]="TIMESTAMP";})(SponsorsActivityOrderField||(exports.SponsorsActivityOrderField=SponsorsActivityOrderField={}));let SponsorsActivityPeriod;/** A goal associated with a GitHub Sponsors listing, representing a target the sponsored maintainer would like to attain. */exports.SponsorsActivityPeriod=SponsorsActivityPeriod;(function(SponsorsActivityPeriod){SponsorsActivityPeriod["All"]="ALL";SponsorsActivityPeriod["Day"]="DAY";SponsorsActivityPeriod["Month"]="MONTH";SponsorsActivityPeriod["Week"]="WEEK";})(SponsorsActivityPeriod||(exports.SponsorsActivityPeriod=SponsorsActivityPeriod={}));/** The different kinds of goals a GitHub Sponsors member can have. */let SponsorsGoalKind;/** A GitHub Sponsors listing. */exports.SponsorsGoalKind=SponsorsGoalKind;(function(SponsorsGoalKind){SponsorsGoalKind["MonthlySponsorshipAmount"]="MONTHLY_SPONSORSHIP_AMOUNT";SponsorsGoalKind["TotalSponsorsCount"]="TOTAL_SPONSORS_COUNT";})(SponsorsGoalKind||(exports.SponsorsGoalKind=SponsorsGoalKind={}));/** Properties by which Sponsors tiers connections can be ordered. */let SponsorsTierOrderField;/** A sponsorship relationship between a sponsor and a maintainer */exports.SponsorsTierOrderField=SponsorsTierOrderField;(function(SponsorsTierOrderField){SponsorsTierOrderField["CreatedAt"]="CREATED_AT";SponsorsTierOrderField["MonthlyPriceInCents"]="MONTHLY_PRICE_IN_CENTS";})(SponsorsTierOrderField||(exports.SponsorsTierOrderField=SponsorsTierOrderField={}));/** Properties by which sponsorship connections can be ordered. */let SponsorshipOrderField;/** The privacy of a sponsorship */exports.SponsorshipOrderField=SponsorshipOrderField;(function(SponsorshipOrderField){SponsorshipOrderField["CreatedAt"]="CREATED_AT";})(SponsorshipOrderField||(exports.SponsorshipOrderField=SponsorshipOrderField={}));let SponsorshipPrivacy;/** Ways in which star connections can be ordered. */exports.SponsorshipPrivacy=SponsorshipPrivacy;(function(SponsorshipPrivacy){SponsorshipPrivacy["Private"]="PRIVATE";SponsorshipPrivacy["Public"]="PUBLIC";})(SponsorshipPrivacy||(exports.SponsorshipPrivacy=SponsorshipPrivacy={}));/** Properties by which star connections can be ordered. */let StarOrderField;/** The connection type for User. */exports.StarOrderField=StarOrderField;(function(StarOrderField){StarOrderField["StarredAt"]="STARRED_AT";})(StarOrderField||(exports.StarOrderField=StarOrderField={}));/** The possible commit status states. */let StatusState;/** Autogenerated input type of SubmitPullRequestReview */exports.StatusState=StatusState;(function(StatusState){StatusState["Error"]="ERROR";StatusState["Expected"]="EXPECTED";StatusState["Failure"]="FAILURE";StatusState["Pending"]="PENDING";StatusState["Success"]="SUCCESS";})(StatusState||(exports.StatusState=StatusState={}));/** The possible states of a subscription. */let SubscriptionState;/** A suggestion to review a pull request based on a user's commit history and review comments. */exports.SubscriptionState=SubscriptionState;(function(SubscriptionState){SubscriptionState["Ignored"]="IGNORED";SubscriptionState["Subscribed"]="SUBSCRIBED";SubscriptionState["Unsubscribed"]="UNSUBSCRIBED";})(SubscriptionState||(exports.SubscriptionState=SubscriptionState={}));/** Properties by which team discussion comment connections can be ordered. */let TeamDiscussionCommentOrderField;/** The connection type for TeamDiscussion. */exports.TeamDiscussionCommentOrderField=TeamDiscussionCommentOrderField;(function(TeamDiscussionCommentOrderField){TeamDiscussionCommentOrderField["Number"]="NUMBER";})(TeamDiscussionCommentOrderField||(exports.TeamDiscussionCommentOrderField=TeamDiscussionCommentOrderField={}));/** Properties by which team discussion connections can be ordered. */let TeamDiscussionOrderField;/** An edge in a connection. */exports.TeamDiscussionOrderField=TeamDiscussionOrderField;(function(TeamDiscussionOrderField){TeamDiscussionOrderField["CreatedAt"]="CREATED_AT";})(TeamDiscussionOrderField||(exports.TeamDiscussionOrderField=TeamDiscussionOrderField={}));/** Properties by which team member connections can be ordered. */let TeamMemberOrderField;/** The possible team member roles; either 'maintainer' or 'member'. */exports.TeamMemberOrderField=TeamMemberOrderField;(function(TeamMemberOrderField){TeamMemberOrderField["CreatedAt"]="CREATED_AT";TeamMemberOrderField["Login"]="LOGIN";})(TeamMemberOrderField||(exports.TeamMemberOrderField=TeamMemberOrderField={}));let TeamMemberRole;/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */exports.TeamMemberRole=TeamMemberRole;(function(TeamMemberRole){TeamMemberRole["Maintainer"]="MAINTAINER";TeamMemberRole["Member"]="MEMBER";})(TeamMemberRole||(exports.TeamMemberRole=TeamMemberRole={}));let TeamMembershipType;/** Ways in which team connections can be ordered. */exports.TeamMembershipType=TeamMembershipType;(function(TeamMembershipType){TeamMembershipType["All"]="ALL";TeamMembershipType["ChildTeam"]="CHILD_TEAM";TeamMembershipType["Immediate"]="IMMEDIATE";})(TeamMembershipType||(exports.TeamMembershipType=TeamMembershipType={}));/** Properties by which team connections can be ordered. */let TeamOrderField;/** The possible team privacy values. */exports.TeamOrderField=TeamOrderField;(function(TeamOrderField){TeamOrderField["Name"]="NAME";})(TeamOrderField||(exports.TeamOrderField=TeamOrderField={}));let TeamPrivacy;/** Audit log entry for a team.remove_member event. */exports.TeamPrivacy=TeamPrivacy;(function(TeamPrivacy){TeamPrivacy["Secret"]="SECRET";TeamPrivacy["Visible"]="VISIBLE";})(TeamPrivacy||(exports.TeamPrivacy=TeamPrivacy={}));/** Properties by which team repository connections can be ordered. */let TeamRepositoryOrderField;/** The role of a user on a team. */exports.TeamRepositoryOrderField=TeamRepositoryOrderField;(function(TeamRepositoryOrderField){TeamRepositoryOrderField["CreatedAt"]="CREATED_AT";TeamRepositoryOrderField["Name"]="NAME";TeamRepositoryOrderField["Permission"]="PERMISSION";TeamRepositoryOrderField["PushedAt"]="PUSHED_AT";TeamRepositoryOrderField["Stargazers"]="STARGAZERS";TeamRepositoryOrderField["UpdatedAt"]="UPDATED_AT";})(TeamRepositoryOrderField||(exports.TeamRepositoryOrderField=TeamRepositoryOrderField={}));let TeamRole;/** A text match within a search result. */exports.TeamRole=TeamRole;(function(TeamRole){TeamRole["Admin"]="ADMIN";TeamRole["Member"]="MEMBER";})(TeamRole||(exports.TeamRole=TeamRole={}));/** Reason that the suggested topic is declined. */let TopicSuggestionDeclineReason;/** Autogenerated input type of TransferIssue */exports.TopicSuggestionDeclineReason=TopicSuggestionDeclineReason;(function(TopicSuggestionDeclineReason){TopicSuggestionDeclineReason["NotRelevant"]="NOT_RELEVANT";TopicSuggestionDeclineReason["PersonalPreference"]="PERSONAL_PREFERENCE";TopicSuggestionDeclineReason["TooGeneral"]="TOO_GENERAL";TopicSuggestionDeclineReason["TooSpecific"]="TOO_SPECIFIC";})(TopicSuggestionDeclineReason||(exports.TopicSuggestionDeclineReason=TopicSuggestionDeclineReason={}));/** The possible durations that a user can be blocked for. */let UserBlockDuration;/** Represents a 'user_blocked' event on a given user. */exports.UserBlockDuration=UserBlockDuration;(function(UserBlockDuration){UserBlockDuration["OneDay"]="ONE_DAY";UserBlockDuration["OneMonth"]="ONE_MONTH";UserBlockDuration["OneWeek"]="ONE_WEEK";UserBlockDuration["Permanent"]="PERMANENT";UserBlockDuration["ThreeDays"]="THREE_DAYS";})(UserBlockDuration||(exports.UserBlockDuration=UserBlockDuration={}));/** Properties by which user status connections can be ordered. */let UserStatusOrderField;/** A domain that can be verified or approved for an organization or an enterprise. */exports.UserStatusOrderField=UserStatusOrderField;(function(UserStatusOrderField){UserStatusOrderField["UpdatedAt"]="UPDATED_AT";})(UserStatusOrderField||(exports.UserStatusOrderField=UserStatusOrderField={}));/** Properties by which verifiable domain connections can be ordered. */let VerifiableDomainOrderField;/** Types that can own a verifiable domain. */exports.VerifiableDomainOrderField=VerifiableDomainOrderField;(function(VerifiableDomainOrderField){VerifiableDomainOrderField["CreatedAt"]="CREATED_AT";VerifiableDomainOrderField["Domain"]="DOMAIN";})(VerifiableDomainOrderField||(exports.VerifiableDomainOrderField=VerifiableDomainOrderField={}));const AddCommentToPr=(0,_graphqlTag.default)`
    mutation AddCommentToPr($pullRequestId: ID!) {
  addComment(input: {subjectId: $pullRequestId, body: "@dependabot rebase"}) {
    commentEdge {
      node {
        id
      }
    }
  }
}
    `;exports.AddCommentToPr=AddCommentToPr;const GetPullRequests=(0,_graphqlTag.default)`
    query GetPullRequests($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    id
    pullRequests(last: 10, states: [OPEN]) {
      edges {
        node {
          id
          title
          number
          author {
            login
          }
        }
      }
    }
  }
}
    `;exports.GetPullRequests=GetPullRequests;

/***/ }),

/***/ "@actions/core":
/*!********************************!*\
  !*** external "@actions/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@actions/core");

/***/ }),

/***/ "@actions/github":
/*!**********************************!*\
  !*** external "@actions/github" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@actions/github");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/


var _core = __webpack_require__(/*! @actions/core */ "@actions/core");

var github = _interopRequireWildcard(__webpack_require__(/*! @actions/github */ "@actions/github"));

var _graphql = __webpack_require__(/*! ./generated/graphql */ "./src/generated/graphql.ts");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function getPullRequests(ok) {
  var _res$repository$pullR;

  const {
    owner,
    repo
  } = github.context.repo;
  const query = _graphql.GetPullRequests.loc.source.body;
  const res = await ok.graphql({
    query,
    owner,
    repo
  });
  console.log(res);
  return (_res$repository$pullR = res.repository.pullRequests.edges) !== null && _res$repository$pullR !== void 0 ? _res$repository$pullR : [];
}

function isDependabotPullRequest(pr) {
  var _pr$node, _pr$node$author;

  return (pr === null || pr === void 0 ? void 0 : (_pr$node = pr.node) === null || _pr$node === void 0 ? void 0 : (_pr$node$author = _pr$node.author) === null || _pr$node$author === void 0 ? void 0 : _pr$node$author.login) === 'dependabot';
}

async function addCommentToPullRequest(ok, pr) {
  var _pr$node2;

  const query = _graphql.AddCommentToPr.loc.source.body;

  if (pr !== null && pr !== void 0 && (_pr$node2 = pr.node) !== null && _pr$node2 !== void 0 && _pr$node2.id && isDependabotPullRequest(pr)) {
    const res = await ok.graphql({
      query,
      pullRequestId: pr.node.id
    });
    console.log(res);
  }
}

async function main() {
  try {
    var _process$env$GITHUB_T;

    const ok = github.getOctokit((_process$env$GITHUB_T = process.env.GITHUB_TOKEN) !== null && _process$env$GITHUB_T !== void 0 ? _process$env$GITHUB_T : process.env.GH_TOKEN);
    const prs = await getPullRequests(ok);

    if (prs) {
      await Promise.all(prs.map(pr => addCommentToPullRequest(ok, pr)));
    }
  } catch (error) {
    console.error(error);
    (0, _core.setFailed)(error.message);
  }
}

main();
})();

module.exports = __webpack_exports__;
/******/ })()
;