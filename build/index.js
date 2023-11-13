(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Lucid = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var shared = {};

	(function (exports) {

	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	      return typeof obj;
	    } : function (obj) {
	      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    }, _typeof(obj);
	  }
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    Object.defineProperty(subClass, "prototype", {
	      writable: false
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }
	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };
	    return _setPrototypeOf(o, p);
	  }
	  function _createSuper(Derived) {
	    var hasNativeReflectConstruct = _isNativeReflectConstruct();
	    return function _createSuperInternal() {
	      var Super = _getPrototypeOf(Derived),
	        result;
	      if (hasNativeReflectConstruct) {
	        var NewTarget = _getPrototypeOf(this).constructor;
	        result = Reflect.construct(Super, arguments, NewTarget);
	      } else {
	        result = Super.apply(this, arguments);
	      }
	      return _possibleConstructorReturn(this, result);
	    };
	  }
	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    } else if (call !== void 0) {
	      throw new TypeError("Derived constructors may only return object or undefined");
	    }
	    return _assertThisInitialized(self);
	  }
	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	    return self;
	  }
	  function _isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }
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
	  function _objectSpread(target) {
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
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	    }
	  }
	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    Object.defineProperty(Constructor, "prototype", {
	      writable: false
	    });
	    return Constructor;
	  }
	  function _defineProperty(obj, key, value) {
	    key = _toPropertyKey(key);
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
	  function _toPropertyKey(arg) {
	    var key = _toPrimitive(arg, "string");
	    return _typeof(key) === "symbol" ? key : String(key);
	  }
	  function _toPrimitive(input, hint) {
	    if (_typeof(input) !== "object" || input === null) return input;
	    var prim = input[Symbol.toPrimitive];
	    if (prim !== undefined) {
	      var res = prim.call(input, hint || "default");
	      if (_typeof(res) !== "object") return res;
	      throw new TypeError("@@toPrimitive must return a primitive value.");
	    }
	    return (hint === "string" ? String : Number)(input);
	  }
	  var Clock = /*#__PURE__*/function () {
	    function Clock() {
	      _classCallCheck(this, Clock);
	      _defineProperty(this, "_creationTime", void 0);
	      _defineProperty(this, "_lastTimeCheck", void 0);
	      _defineProperty(this, "_timers", void 0);
	      this._creationTime = this.now;
	      this._lastTimeCheck = this._creationTime;
	      this._timers = {};
	    }
	    _createClass(Clock, [{
	      key: "now",
	      get: function get() {
	        return performance.now() / 1000;
	      }
	    }, {
	      key: "deltaTime",
	      get: function get() {
	        var deltaTime = this.now - this._lastTimeCheck;
	        this._lastTimeCheck = this.now;
	        return deltaTime;
	      }
	    }, {
	      key: "age",
	      get: function get() {
	        return this.now - this._creationTime;
	      }
	      /**
	       * Creates a timer that can be queried for completion with {@link hasTimerElapsed}.
	       * @param label The identifier for this timer.
	       * @param duration The duration of the timer in seconds.
	       * @param callback An optional callback to execute when the timer completes.
	       */
	    }, {
	      key: "createTimer",
	      value: function createTimer(label, duration, callback) {
	        this._timers[label] = {
	          duration: duration,
	          lastTriggerTime: this.now
	        };
	        if (callback !== undefined) {
	          setTimeout(function () {
	            return callback(label, duration);
	          }, duration);
	        }
	      }
	    }, {
	      key: "removeTimer",
	      value: function removeTimer(label) {
	        delete this._timers[label];
	      }
	    }, {
	      key: "hasTimerElapsed",
	      value: function hasTimerElapsed(label) {
	        if (label in this._timers) {
	          var timer = this._timers[label];
	          if (this.now - timer.lastTriggerTime > timer.duration) {
	            timer.lastTriggerTime = this.now;
	            return true;
	          }
	          return false;
	        } else {
	          throw new Error("No timer exists with label ".concat(label, ". Make sure to create one first with Clock.createTimer()."));
	        }
	      }
	    }]);
	    return Clock;
	  }();
	  var Color = /*#__PURE__*/function () {
	    function Color(hex) {
	      _classCallCheck(this, Color);
	      _defineProperty(this, "_hex", void 0);
	      _defineProperty(this, "_rgba", void 0);
	      this._hex = hex;
	      this._rgba = Color._getRgba(hex);
	    }
	    _createClass(Color, [{
	      key: "rgba",
	      get: function get() {
	        return this._rgba;
	      }
	    }, {
	      key: "hex",
	      get: function get() {
	        return Number(this._hex);
	      },
	      set: function set(value) {
	        this._hex = BigInt(value);
	        this._rgba = Color._getRgba(this._hex);
	      }
	    }, {
	      key: "red",
	      get: function get() {
	        return this.rgba[0];
	      }
	    }, {
	      key: "green",
	      get: function get() {
	        return this.rgba[1];
	      }
	    }, {
	      key: "blue",
	      get: function get() {
	        return this.rgba[2];
	      }
	    }, {
	      key: "alpha",
	      get: function get() {
	        return this.rgba[3];
	      }
	    }, {
	      key: "clone",
	      value: function clone() {
	        return new Color(this._hex);
	      }
	      /**
	       * Mixes two colors together.
	       * @param source The source of the color to mix.
	       * @param weight The normalized weight from 0 to 1 of the mixture. 0 will result in all this color, 1 will result in all of the color defined by "source". Defaults to 0.5.
	       */
	    }, {
	      key: "mix",
	      value: function mix(source) {
	        var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
	        var color = Color.from(source);
	        this._rgba = [this.red + (color.red - this.red) * weight, this.green + (color.green - this.green) * weight, this.blue + (color.blue - this.blue) * weight, this.alpha + (color.alpha - this.alpha) * weight];
	      }
	    }], [{
	      key: "getRgba",
	      value: function getRgba(hex) {
	        return Color._getRgba(BigInt(hex));
	      }
	    }, {
	      key: "getHex",
	      value: function getHex(rgba) {
	        return Number(Color._getHex(rgba));
	      }
	    }, {
	      key: "_getRgba",
	      value: function _getRgba(hex) {
	        return [Number(hex >> 8n * 3n & 0xffn), Number(hex >> 8n * 2n & 0xffn), Number(hex >> 8n * 1n & 0xffn), Number(hex >> 8n * 0n & 0xffn)];
	      }
	    }, {
	      key: "_getHex",
	      value: function _getHex(rgba) {
	        return BigInt(rgba[0]) << 8n * 3n | BigInt(rgba[1]) << 8n * 2n | BigInt(rgba[2]) << 8n * 1n | BigInt(rgba[3]) << 8n * 0n;
	      }
	    }, {
	      key: "from",
	      value: function from(source) {
	        if (source instanceof Color) {
	          return source.clone();
	        } else if (typeof source === "number") {
	          return new Color(BigInt(source));
	        } else {
	          return new Color(Color._getHex(source));
	        }
	      }
	    }]);
	    return Color;
	  }();
	  /**
	   * Used for printing to the console in Color! :D
	   */
	  _defineProperty(Color, "BLACK", Color.from(0x000000FF));
	  _defineProperty(Color, "WHITE", Color.from(0xFFFFFFFF));
	  _defineProperty(Color, "GRAY", Color.from(0x808080FF));
	  _defineProperty(Color, "RED", Color.from(0xFF0000FF));
	  _defineProperty(Color, "GREEN", Color.from(0x00FF00FF));
	  _defineProperty(Color, "BLUE", Color.from(0x0000FFFF));
	  _defineProperty(Color, "CYAN", Color.from(0x00FFFFFF));
	  _defineProperty(Color, "MAGENTA", Color.from(0xFF00FFFF));
	  _defineProperty(Color, "YELLOW", Color.from(0xFFFF00FF));
	  exports.ConsoleColor = void 0;
	  (function (ConsoleColor) {
	    /**
	     * Special formatting codes.
	     */
	    var Special;
	    (function (Special) {
	      Special.reset = "\x1b[0m";
	      Special.bright = "\x1b[1m";
	      Special.dim = "\x1b[2m";
	      Special.underscore = "\x1b[4m";
	      Special.blink = "\x1b[5m";
	      Special.reverse = "\x1b[7m";
	      Special.hidden = "\x1b[8m";
	    })(Special = ConsoleColor.Special || (ConsoleColor.Special = {}));
	    /**
	     * Foreground color codes.
	     */
	    var Fore;
	    (function (Fore) {
	      Fore.black = "\x1b[30m";
	      Fore.red = "\x1b[31m";
	      Fore.green = "\x1b[32m";
	      Fore.yellow = "\x1b[33m";
	      Fore.blue = "\x1b[34m";
	      Fore.magenta = "\x1b[35m";
	      Fore.cyan = "\x1b[36m";
	      Fore.white = "\x1b[37m";
	      Fore.gray = "\x1b[90m";
	    })(Fore = ConsoleColor.Fore || (ConsoleColor.Fore = {}));
	    (function (Back) {
	      Back.black = "\x1b[40m";
	      Back.red = "\x1b[41m";
	      Back.green = "\x1b[42m";
	      Back.yellow = "\x1b[43m";
	      Back.blue = "\x1b[44m";
	      Back.magenta = "\x1b[45m";
	      Back.cyan = "\x1b[46m";
	      Back.white = "\x1b[47m";
	      Back.gray = "\x1b[100m";
	    })(ConsoleColor.Back || (ConsoleColor.Back = {}));
	    /**
	     * A combination of Foreground and Special formatting codes so you don't have to destructure both.
	     *
	     * `E.G.`
	     *
	     * ```typescript
	     * const { red, reset } = ConsoleColor.Common;
	     * console.log(`I like the color ${red}red${reset}.`);
	     * ```
	     */
	    ConsoleColor.Common = _objectSpread(_objectSpread({}, Fore), Special);
	  })(exports.ConsoleColor || (exports.ConsoleColor = {}));

	  /**
	   * A set of semantic errors.
	   */
	  exports.Error = void 0;
	  (function (Error) {
	    Error.Original = commonjsGlobal.Error;
	    var Named = /*#__PURE__*/function (_Error$Original) {
	      _inherits(Named, _Error$Original);
	      var _super = _createSuper(Named);
	      function Named(message, options) {
	        var _this;
	        _classCallCheck(this, Named);
	        _this = _super.call(this, message, options);
	        _this.name = "".concat(_this.constructor.name, " Error");
	        return _this;
	      }
	      return _createClass(Named);
	    }(Error.Original);
	    Error.Named = Named;
	    /**
	     * For when something goes very wrong.
	     */
	    var Fatal = /*#__PURE__*/function (_Named) {
	      _inherits(Fatal, _Named);
	      var _super2 = _createSuper(Fatal);
	      function Fatal(message) {
	        _classCallCheck(this, Fatal);
	        return _super2.call(this, message);
	      }
	      return _createClass(Fatal);
	    }(Named);
	    Error.Fatal = Fatal;
	    /**
	     * For use for features that haven't been implemented yet.
	     */
	    var Unimplemented = /*#__PURE__*/function (_Fatal) {
	      _inherits(Unimplemented, _Fatal);
	      var _super3 = _createSuper(Unimplemented);
	      function Unimplemented() {
	        _classCallCheck(this, Unimplemented);
	        return _super3.call(this, "This feature has not been implemented.");
	      }
	      return _createClass(Unimplemented);
	    }(Fatal);
	    Error.Unimplemented = Unimplemented;
	    /**
	     * Thrown when a Data.assertion is failed.
	     */
	    var Assertion = /*#__PURE__*/function (_Named2) {
	      _inherits(Assertion, _Named2);
	      var _super4 = _createSuper(Assertion);
	      function Assertion(message) {
	        _classCallCheck(this, Assertion);
	        return _super4.call(this, message);
	      }
	      return _createClass(Assertion);
	    }(Named);
	    Error.Assertion = Assertion;
	    /**
	     * For use to indicate networks errors whilst using the HTTP protocol.
	     */
	    var Http = /*#__PURE__*/function (_Named3) {
	      _inherits(Http, _Named3);
	      var _super5 = _createSuper(Http);
	      function Http(code, message) {
	        var _this2;
	        _classCallCheck(this, Http);
	        _this2 = _super5.call(this, message);
	        _defineProperty(_assertThisInitialized(_this2), "code", void 0);
	        _this2.name = "".concat(_this2.name, " (HTTP Status Code ").concat(code, ")");
	        _this2.code = code;
	        return _this2;
	      }
	      _createClass(Http, null, [{
	        key: "getFromResponse",
	        value: function getFromResponse(response) {
	          switch (response.status) {
	            // Server
	            case 500:
	              return new InternalServerError(response.statusText);
	            case 501:
	              return new NotImplemented(response.statusText);
	            case 502:
	              return new BadGateway(response.statusText);
	            case 503:
	              return new ServiceUnavailable(response.statusText);
	            case 504:
	              return new GatewayTimeout(response.statusText);
	            case 505:
	              return new VersionNotSupported(response.statusText);
	            case 506:
	              return new VariantAlsoNegotiates(response.statusText);
	            case 507:
	              return new InsufficientStorage(response.statusText);
	            case 508:
	              return new LoopDetected(response.statusText);
	            case 510:
	              return new NotExtended(response.statusText);
	            case 511:
	              return new NetworkAuthenticationRequired(response.statusText);
	            // Client
	            case 400:
	              return new BadRequest(response.statusText);
	            case 401:
	              return new Unauthorized(response.statusText);
	            case 402:
	              return new PaymentRequired(response.statusText);
	            case 403:
	              return new Forbidden(response.statusText);
	            case 404:
	              return new NotFound(response.statusText);
	            case 405:
	              return new MethodNotAllowed(response.statusText);
	            case 406:
	              return new NotAcceptable(response.statusText);
	            case 407:
	              return new ProxyAuthenticationRequired(response.statusText);
	            case 408:
	              return new RequestTimeout(response.statusText);
	            case 409:
	              return new Conflict(response.statusText);
	            case 410:
	              return new Gone(response.statusText);
	            case 411:
	              return new LengthRequired(response.statusText);
	            case 412:
	              return new PreconditionFailed(response.statusText);
	            case 413:
	              return new PayloadTooLarge(response.statusText);
	            case 414:
	              return new UriTooLong(response.statusText);
	            case 415:
	              return new UnsupportedMediaType(response.statusText);
	            case 416:
	              return new RangeNotSatisfiable(response.statusText);
	            case 417:
	              return new ExpectationFailed(response.statusText);
	            case 418:
	              return new Teapot(response.statusText);
	            case 421:
	              return new MisdirectedRequest(response.statusText);
	            case 422:
	              return new UnprocessableContent(response.statusText);
	            case 423:
	              return new Locked(response.statusText);
	            case 424:
	              return new FailedDependency(response.statusText);
	            case 425:
	              return new TooEarly(response.statusText);
	            case 426:
	              return new UpgradeRequired(response.statusText);
	            case 428:
	              return new PreconditionRequired(response.statusText);
	            case 429:
	              return new TooManyRequests(response.statusText);
	            case 431:
	              return new RequestHeaderFieldsTooLarge(response.statusText);
	            case 451:
	              return new UnavailableForLegalReasons(response.statusText);
	            default:
	              new Fatal("Error ".concat(response.status, ". ").concat(response.statusText));
	          }
	        }
	      }]);
	      return Http;
	    }(Named);
	    Error.Http = Http;
	    /**
	     * For use to indicate the server made a mistake over the HTTP protocol.
	     */
	    var Server = /*#__PURE__*/function (_Http) {
	      _inherits(Server, _Http);
	      var _super6 = _createSuper(Server);
	      function Server(message) {
	        var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
	        _classCallCheck(this, Server);
	        return _super6.call(this, code, message);
	      }
	      return _createClass(Server);
	    }(Http);
	    Error.Server = Server;
	    var InternalServerError = /*#__PURE__*/function (_Server) {
	      _inherits(InternalServerError, _Server);
	      var _super7 = _createSuper(InternalServerError);
	      function InternalServerError(message) {
	        _classCallCheck(this, InternalServerError);
	        return _super7.call(this, message, 500);
	      }
	      return _createClass(InternalServerError);
	    }(Server);
	    Error.InternalServerError = InternalServerError;
	    var NotImplemented = /*#__PURE__*/function (_Server2) {
	      _inherits(NotImplemented, _Server2);
	      var _super8 = _createSuper(NotImplemented);
	      function NotImplemented(message) {
	        _classCallCheck(this, NotImplemented);
	        return _super8.call(this, message, 501);
	      }
	      return _createClass(NotImplemented);
	    }(Server);
	    Error.NotImplemented = NotImplemented;
	    var BadGateway = /*#__PURE__*/function (_Server3) {
	      _inherits(BadGateway, _Server3);
	      var _super9 = _createSuper(BadGateway);
	      function BadGateway(message) {
	        _classCallCheck(this, BadGateway);
	        return _super9.call(this, message, 502);
	      }
	      return _createClass(BadGateway);
	    }(Server);
	    Error.BadGateway = BadGateway;
	    var ServiceUnavailable = /*#__PURE__*/function (_Server4) {
	      _inherits(ServiceUnavailable, _Server4);
	      var _super10 = _createSuper(ServiceUnavailable);
	      function ServiceUnavailable(message) {
	        _classCallCheck(this, ServiceUnavailable);
	        return _super10.call(this, message, 503);
	      }
	      return _createClass(ServiceUnavailable);
	    }(Server);
	    Error.ServiceUnavailable = ServiceUnavailable;
	    var GatewayTimeout = /*#__PURE__*/function (_Server5) {
	      _inherits(GatewayTimeout, _Server5);
	      var _super11 = _createSuper(GatewayTimeout);
	      function GatewayTimeout(message) {
	        _classCallCheck(this, GatewayTimeout);
	        return _super11.call(this, message, 504);
	      }
	      return _createClass(GatewayTimeout);
	    }(Server);
	    Error.GatewayTimeout = GatewayTimeout;
	    var VersionNotSupported = /*#__PURE__*/function (_Server6) {
	      _inherits(VersionNotSupported, _Server6);
	      var _super12 = _createSuper(VersionNotSupported);
	      function VersionNotSupported(message) {
	        _classCallCheck(this, VersionNotSupported);
	        return _super12.call(this, message, 505);
	      }
	      return _createClass(VersionNotSupported);
	    }(Server);
	    Error.VersionNotSupported = VersionNotSupported;
	    var VariantAlsoNegotiates = /*#__PURE__*/function (_Server7) {
	      _inherits(VariantAlsoNegotiates, _Server7);
	      var _super13 = _createSuper(VariantAlsoNegotiates);
	      function VariantAlsoNegotiates(message) {
	        _classCallCheck(this, VariantAlsoNegotiates);
	        return _super13.call(this, message, 506);
	      }
	      return _createClass(VariantAlsoNegotiates);
	    }(Server);
	    Error.VariantAlsoNegotiates = VariantAlsoNegotiates;
	    var InsufficientStorage = /*#__PURE__*/function (_Server8) {
	      _inherits(InsufficientStorage, _Server8);
	      var _super14 = _createSuper(InsufficientStorage);
	      function InsufficientStorage(message) {
	        _classCallCheck(this, InsufficientStorage);
	        return _super14.call(this, message, 507);
	      }
	      return _createClass(InsufficientStorage);
	    }(Server);
	    Error.InsufficientStorage = InsufficientStorage;
	    var LoopDetected = /*#__PURE__*/function (_Server9) {
	      _inherits(LoopDetected, _Server9);
	      var _super15 = _createSuper(LoopDetected);
	      function LoopDetected(message) {
	        _classCallCheck(this, LoopDetected);
	        return _super15.call(this, message, 508);
	      }
	      return _createClass(LoopDetected);
	    }(Server);
	    Error.LoopDetected = LoopDetected;
	    var NotExtended = /*#__PURE__*/function (_Server10) {
	      _inherits(NotExtended, _Server10);
	      var _super16 = _createSuper(NotExtended);
	      function NotExtended(message) {
	        _classCallCheck(this, NotExtended);
	        return _super16.call(this, message, 510);
	      }
	      return _createClass(NotExtended);
	    }(Server);
	    Error.NotExtended = NotExtended;
	    var NetworkAuthenticationRequired = /*#__PURE__*/function (_Server11) {
	      _inherits(NetworkAuthenticationRequired, _Server11);
	      var _super17 = _createSuper(NetworkAuthenticationRequired);
	      function NetworkAuthenticationRequired(message) {
	        _classCallCheck(this, NetworkAuthenticationRequired);
	        return _super17.call(this, message, 511);
	      }
	      return _createClass(NetworkAuthenticationRequired);
	    }(Server);
	    Error.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
	    /**
	     * For use to indicate the user made a mistake over the HTTP protocol.
	     */
	    var User = /*#__PURE__*/function (_Http2) {
	      _inherits(User, _Http2);
	      var _super18 = _createSuper(User);
	      function User(message) {
	        var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
	        _classCallCheck(this, User);
	        return _super18.call(this, code, message);
	      }
	      return _createClass(User);
	    }(Http);
	    Error.User = User;
	    var BadRequest = /*#__PURE__*/function (_User) {
	      _inherits(BadRequest, _User);
	      var _super19 = _createSuper(BadRequest);
	      function BadRequest(message) {
	        _classCallCheck(this, BadRequest);
	        return _super19.call(this, message, 400);
	      }
	      return _createClass(BadRequest);
	    }(User);
	    Error.BadRequest = BadRequest;
	    var Unauthorized = /*#__PURE__*/function (_User2) {
	      _inherits(Unauthorized, _User2);
	      var _super20 = _createSuper(Unauthorized);
	      function Unauthorized(message) {
	        _classCallCheck(this, Unauthorized);
	        return _super20.call(this, message, 401);
	      }
	      return _createClass(Unauthorized);
	    }(User);
	    Error.Unauthorized = Unauthorized;
	    var PaymentRequired = /*#__PURE__*/function (_User3) {
	      _inherits(PaymentRequired, _User3);
	      var _super21 = _createSuper(PaymentRequired);
	      function PaymentRequired(message) {
	        _classCallCheck(this, PaymentRequired);
	        return _super21.call(this, message, 402);
	      }
	      return _createClass(PaymentRequired);
	    }(User);
	    Error.PaymentRequired = PaymentRequired;
	    var Forbidden = /*#__PURE__*/function (_User4) {
	      _inherits(Forbidden, _User4);
	      var _super22 = _createSuper(Forbidden);
	      function Forbidden(message) {
	        _classCallCheck(this, Forbidden);
	        return _super22.call(this, message, 403);
	      }
	      return _createClass(Forbidden);
	    }(User);
	    Error.Forbidden = Forbidden;
	    var NotFound = /*#__PURE__*/function (_User5) {
	      _inherits(NotFound, _User5);
	      var _super23 = _createSuper(NotFound);
	      function NotFound(message) {
	        _classCallCheck(this, NotFound);
	        return _super23.call(this, message, 404);
	      }
	      return _createClass(NotFound);
	    }(User);
	    Error.NotFound = NotFound;
	    var MethodNotAllowed = /*#__PURE__*/function (_User6) {
	      _inherits(MethodNotAllowed, _User6);
	      var _super24 = _createSuper(MethodNotAllowed);
	      function MethodNotAllowed(message) {
	        _classCallCheck(this, MethodNotAllowed);
	        return _super24.call(this, message, 405);
	      }
	      return _createClass(MethodNotAllowed);
	    }(User);
	    Error.MethodNotAllowed = MethodNotAllowed;
	    var NotAcceptable = /*#__PURE__*/function (_User7) {
	      _inherits(NotAcceptable, _User7);
	      var _super25 = _createSuper(NotAcceptable);
	      function NotAcceptable(message) {
	        _classCallCheck(this, NotAcceptable);
	        return _super25.call(this, message, 406);
	      }
	      return _createClass(NotAcceptable);
	    }(User);
	    Error.NotAcceptable = NotAcceptable;
	    var ProxyAuthenticationRequired = /*#__PURE__*/function (_User8) {
	      _inherits(ProxyAuthenticationRequired, _User8);
	      var _super26 = _createSuper(ProxyAuthenticationRequired);
	      function ProxyAuthenticationRequired(message) {
	        _classCallCheck(this, ProxyAuthenticationRequired);
	        return _super26.call(this, message, 407);
	      }
	      return _createClass(ProxyAuthenticationRequired);
	    }(User);
	    Error.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
	    var RequestTimeout = /*#__PURE__*/function (_User9) {
	      _inherits(RequestTimeout, _User9);
	      var _super27 = _createSuper(RequestTimeout);
	      function RequestTimeout(message) {
	        _classCallCheck(this, RequestTimeout);
	        return _super27.call(this, message, 408);
	      }
	      return _createClass(RequestTimeout);
	    }(User);
	    Error.RequestTimeout = RequestTimeout;
	    var Conflict = /*#__PURE__*/function (_User10) {
	      _inherits(Conflict, _User10);
	      var _super28 = _createSuper(Conflict);
	      function Conflict(message) {
	        _classCallCheck(this, Conflict);
	        return _super28.call(this, message, 409);
	      }
	      return _createClass(Conflict);
	    }(User);
	    Error.Conflict = Conflict;
	    var Gone = /*#__PURE__*/function (_User11) {
	      _inherits(Gone, _User11);
	      var _super29 = _createSuper(Gone);
	      function Gone(message) {
	        _classCallCheck(this, Gone);
	        return _super29.call(this, message, 410);
	      }
	      return _createClass(Gone);
	    }(User);
	    Error.Gone = Gone;
	    var LengthRequired = /*#__PURE__*/function (_User12) {
	      _inherits(LengthRequired, _User12);
	      var _super30 = _createSuper(LengthRequired);
	      function LengthRequired(message) {
	        _classCallCheck(this, LengthRequired);
	        return _super30.call(this, message, 411);
	      }
	      return _createClass(LengthRequired);
	    }(User);
	    Error.LengthRequired = LengthRequired;
	    var PreconditionFailed = /*#__PURE__*/function (_User13) {
	      _inherits(PreconditionFailed, _User13);
	      var _super31 = _createSuper(PreconditionFailed);
	      function PreconditionFailed(message) {
	        _classCallCheck(this, PreconditionFailed);
	        return _super31.call(this, message, 412);
	      }
	      return _createClass(PreconditionFailed);
	    }(User);
	    Error.PreconditionFailed = PreconditionFailed;
	    var PayloadTooLarge = /*#__PURE__*/function (_User14) {
	      _inherits(PayloadTooLarge, _User14);
	      var _super32 = _createSuper(PayloadTooLarge);
	      function PayloadTooLarge(message) {
	        _classCallCheck(this, PayloadTooLarge);
	        return _super32.call(this, message, 413);
	      }
	      return _createClass(PayloadTooLarge);
	    }(User);
	    Error.PayloadTooLarge = PayloadTooLarge;
	    var UriTooLong = /*#__PURE__*/function (_User15) {
	      _inherits(UriTooLong, _User15);
	      var _super33 = _createSuper(UriTooLong);
	      function UriTooLong(message) {
	        _classCallCheck(this, UriTooLong);
	        return _super33.call(this, message, 414);
	      }
	      return _createClass(UriTooLong);
	    }(User);
	    Error.UriTooLong = UriTooLong;
	    var UnsupportedMediaType = /*#__PURE__*/function (_User16) {
	      _inherits(UnsupportedMediaType, _User16);
	      var _super34 = _createSuper(UnsupportedMediaType);
	      function UnsupportedMediaType(message) {
	        _classCallCheck(this, UnsupportedMediaType);
	        return _super34.call(this, message, 415);
	      }
	      return _createClass(UnsupportedMediaType);
	    }(User);
	    Error.UnsupportedMediaType = UnsupportedMediaType;
	    var RangeNotSatisfiable = /*#__PURE__*/function (_User17) {
	      _inherits(RangeNotSatisfiable, _User17);
	      var _super35 = _createSuper(RangeNotSatisfiable);
	      function RangeNotSatisfiable(message) {
	        _classCallCheck(this, RangeNotSatisfiable);
	        return _super35.call(this, message, 416);
	      }
	      return _createClass(RangeNotSatisfiable);
	    }(User);
	    Error.RangeNotSatisfiable = RangeNotSatisfiable;
	    var ExpectationFailed = /*#__PURE__*/function (_User18) {
	      _inherits(ExpectationFailed, _User18);
	      var _super36 = _createSuper(ExpectationFailed);
	      function ExpectationFailed(message) {
	        _classCallCheck(this, ExpectationFailed);
	        return _super36.call(this, message, 417);
	      }
	      return _createClass(ExpectationFailed);
	    }(User);
	    Error.ExpectationFailed = ExpectationFailed;
	    var Teapot = /*#__PURE__*/function (_User19) {
	      _inherits(Teapot, _User19);
	      var _super37 = _createSuper(Teapot);
	      function Teapot(message) {
	        _classCallCheck(this, Teapot);
	        return _super37.call(this, message, 418);
	      }
	      return _createClass(Teapot);
	    }(User);
	    Error.Teapot = Teapot;
	    var MisdirectedRequest = /*#__PURE__*/function (_User20) {
	      _inherits(MisdirectedRequest, _User20);
	      var _super38 = _createSuper(MisdirectedRequest);
	      function MisdirectedRequest(message) {
	        _classCallCheck(this, MisdirectedRequest);
	        return _super38.call(this, message, 421);
	      }
	      return _createClass(MisdirectedRequest);
	    }(User);
	    Error.MisdirectedRequest = MisdirectedRequest;
	    var UnprocessableContent = /*#__PURE__*/function (_User21) {
	      _inherits(UnprocessableContent, _User21);
	      var _super39 = _createSuper(UnprocessableContent);
	      function UnprocessableContent(message) {
	        _classCallCheck(this, UnprocessableContent);
	        return _super39.call(this, message, 422);
	      }
	      return _createClass(UnprocessableContent);
	    }(User);
	    Error.UnprocessableContent = UnprocessableContent;
	    var Locked = /*#__PURE__*/function (_User22) {
	      _inherits(Locked, _User22);
	      var _super40 = _createSuper(Locked);
	      function Locked(message) {
	        _classCallCheck(this, Locked);
	        return _super40.call(this, message, 423);
	      }
	      return _createClass(Locked);
	    }(User);
	    Error.Locked = Locked;
	    var FailedDependency = /*#__PURE__*/function (_User23) {
	      _inherits(FailedDependency, _User23);
	      var _super41 = _createSuper(FailedDependency);
	      function FailedDependency(message) {
	        _classCallCheck(this, FailedDependency);
	        return _super41.call(this, message, 424);
	      }
	      return _createClass(FailedDependency);
	    }(User);
	    Error.FailedDependency = FailedDependency;
	    var TooEarly = /*#__PURE__*/function (_User24) {
	      _inherits(TooEarly, _User24);
	      var _super42 = _createSuper(TooEarly);
	      function TooEarly(message) {
	        _classCallCheck(this, TooEarly);
	        return _super42.call(this, message, 425);
	      }
	      return _createClass(TooEarly);
	    }(User);
	    Error.TooEarly = TooEarly;
	    var UpgradeRequired = /*#__PURE__*/function (_User25) {
	      _inherits(UpgradeRequired, _User25);
	      var _super43 = _createSuper(UpgradeRequired);
	      function UpgradeRequired(message) {
	        _classCallCheck(this, UpgradeRequired);
	        return _super43.call(this, message, 426);
	      }
	      return _createClass(UpgradeRequired);
	    }(User);
	    Error.UpgradeRequired = UpgradeRequired;
	    var PreconditionRequired = /*#__PURE__*/function (_User26) {
	      _inherits(PreconditionRequired, _User26);
	      var _super44 = _createSuper(PreconditionRequired);
	      function PreconditionRequired(message) {
	        _classCallCheck(this, PreconditionRequired);
	        return _super44.call(this, message, 428);
	      }
	      return _createClass(PreconditionRequired);
	    }(User);
	    Error.PreconditionRequired = PreconditionRequired;
	    var TooManyRequests = /*#__PURE__*/function (_User27) {
	      _inherits(TooManyRequests, _User27);
	      var _super45 = _createSuper(TooManyRequests);
	      function TooManyRequests(message) {
	        _classCallCheck(this, TooManyRequests);
	        return _super45.call(this, message, 429);
	      }
	      return _createClass(TooManyRequests);
	    }(User);
	    Error.TooManyRequests = TooManyRequests;
	    var RequestHeaderFieldsTooLarge = /*#__PURE__*/function (_User28) {
	      _inherits(RequestHeaderFieldsTooLarge, _User28);
	      var _super46 = _createSuper(RequestHeaderFieldsTooLarge);
	      function RequestHeaderFieldsTooLarge(message) {
	        _classCallCheck(this, RequestHeaderFieldsTooLarge);
	        return _super46.call(this, message, 431);
	      }
	      return _createClass(RequestHeaderFieldsTooLarge);
	    }(User);
	    Error.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
	    var UnavailableForLegalReasons = /*#__PURE__*/function (_User29) {
	      _inherits(UnavailableForLegalReasons, _User29);
	      var _super47 = _createSuper(UnavailableForLegalReasons);
	      function UnavailableForLegalReasons(message) {
	        _classCallCheck(this, UnavailableForLegalReasons);
	        return _super47.call(this, message, 451);
	      }
	      return _createClass(UnavailableForLegalReasons);
	    }(User);
	    Error.UnavailableForLegalReasons = UnavailableForLegalReasons;
	  })(exports.Error || (exports.Error = {}));

	  /**
	   * A data manipulation module primarily used for reading and altering objects.
	   */
	  exports.Data = void 0;
	  (function (Data) {
	    /**
	     * Checks to see if a given {@link target} object has a given {@link path}.
	     * @param target The target object.
	     * @param path The path to check the existence of.
	     * @returns True if {@link target} has {@link path}.
	     */
	    function has(target, path) {
	      var pieces = path === "" ? [] : path.split(".");
	      var key = pieces.shift();
	      if (key === undefined) {
	        return target !== undefined && target !== null;
	      } else {
	        if (_typeof(target) === "object" && target !== null && key in target) {
	          return has(target[key], pieces.join("."));
	        } else {
	          return false;
	        }
	      }
	    }
	    Data.has = has;
	    function get(target, path, fallback) {
	      var pieces = path === "" ? [] : path.split(".");
	      var key = pieces.shift();
	      if (key === undefined) {
	        if (target === undefined || target === null) {
	          return fallback;
	        } else {
	          return target;
	        }
	      } else {
	        if (_typeof(target) === "object" && target !== null && key in target) {
	          return Data.get(target[key], pieces.join("."), fallback);
	        } else {
	          return fallback;
	        }
	      }
	    }
	    Data.get = get;
	    /**
	     * Finds a retrieves a value at {@link path} in {@link target} or throws and error if the value fails validation by {@link validator}.
	     * @param target The target object.
	     * @param path The path to retrieve a value from.
	     * @param validator A predicate to validate the value found at {@link path}.
	     * @returns The value found at {@link path} in {@link target}.
	     */
	    function getOrThrow(target, path) {
	      var value = Data.get(target, path, undefined);
	      if (value === undefined) {
	        throw new exports.Error.Original("Failed to get value at \"".concat(path, "\" in target."), {
	          cause: {
	            target: target,
	            path: path
	          }
	        });
	      }
	      return value;
	    }
	    Data.getOrThrow = getOrThrow;
	    /**
	     * Sets a {@link value} in a {@link target} object at {@link pieces}.
	     * @param target The target object.
	     * @param pieces The path to set {@link value} at.
	     * @param value The value to be set.
	     * @returns True if the target is updated, false otherwise.
	     */
	    function set(target, path, value) {
	      var pieces = path === "" ? [] : path.split(".");
	      var key = pieces.shift();
	      if (key !== undefined) {
	        if (pieces.length === 0) {
	          target[key] = value;
	        } else {
	          if (_typeof(target[key]) !== "object" && target[key] !== null) {
	            target[key] = pieces.length > 0 && !isNaN(parseInt(pieces[0].toString())) ? [] : {};
	          }
	          Data.set(target[key], pieces.join("."), value);
	        }
	      }
	      return true;
	    }
	    Data.set = set;
	    /**
	     * Removes a value at {@link pieces} in {@link target}.
	     * @param target The target object.
	     * @param pieces The path of the value to remove from {@link target}.
	     * @returns The removed value.
	     */
	    function remove(target, path) {
	      var pieces = path === "" ? [] : path.split(".");
	      var key = pieces.shift();
	      if (key !== undefined) {
	        if (pieces.length === 0) {
	          var deleted = target[key];
	          delete target[key];
	          return deleted;
	        } else if (key in target) {
	          return Data.remove(target[key], pieces.join("."));
	        }
	      }
	      return undefined;
	    }
	    Data.remove = remove;
	    /**
	     * Creates a copy of {@link target}.
	     * @param target The target object to clone.
	     * @param deep True to perform a deep copy, false to perform a shallow copy.
	     * @returns A copy of {@link target}.
	     */
	    function clone(target) {
	      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      if (deep) {
	        var objectClone = Array.isArray(target) ? [] : {};
	        Data.walk(target, function (_, property, path) {
	          if (_typeof(property) !== "object") {
	            Data.set(objectClone, path, property);
	          } else if (property === null) {
	            Data.set(objectClone, path, null);
	          } else if (Object.keys(property).length === 0) {
	            Data.set(objectClone, path, Array.isArray(property) ? [] : {});
	          }
	          return false;
	        });
	        return objectClone;
	      } else {
	        return _objectSpread({}, target);
	      }
	    }
	    Data.clone = clone;
	    /**
	     * Walks across the nested properties of {@link target} and calls {@link callback} for every property.
	     * @param target The target object.
	     * @param callback The callback to be executed for every nested property in {@link target}.
	     * @param path The path to start walking in {@link target}.
	     * @param level The level of nesting from the starting path in {@link target}.
	     */
	    function walk(target, callback) {
	      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	      var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      for (var key in target) {
	        var value = target[key];
	        var valuePath = path === "" ? key : path + "." + key;
	        var finished = callback(target, value, valuePath, level);
	        if (!finished && _typeof(value) === "object" && value !== null) {
	          Data.walk(value, callback, valuePath, level + 1);
	        }
	      }
	    }
	    Data.walk = walk;
	    /**
	     * Flattens an object's nested hierarchy.
	     * I.E. { name: { first: "Jeremy", last: "Bankes" } } -> { "name.first": "Jeremy", "name.last": "Bankes" }
	     *
	     * @param target The target object
	     * @returns A flattened version of {@link target} without any nesting.
	     */
	    function flatten(target) {
	      var flattenedTarget = {};
	      Data.walk(target, function (_, property, path) {
	        if (!isPlain(property)) {
	          flattenedTarget[path] = property;
	          return true;
	        }
	        return false;
	      });
	      return flattenedTarget;
	    }
	    Data.flatten = flatten;
	    /**
	     * Converts a flattened object back into an object with a nested hierarchy.
	     * @param target
	     * @returns a hierarchized version of {@link target} with a nested hierarchy.
	     */
	    function hierarchize(target) {
	      var object = {};
	      for (var key in target) {
	        Data.set(object, key, target[key]);
	      }
	      return object;
	    }
	    Data.hierarchize = hierarchize;
	    /**
	     * Tests to see if a given object is POD (Plain old data).
	     * @param object The object to test.
	     */
	    function isPlain(object) {
	      return _typeof(object) === "object" && object !== null && object.constructor.name === "Object";
	    }
	    Data.isPlain = isPlain;
	    /**
	     * Used to optionally include {@link value}'s properties when defining an inline object.
	     * @param condition The condition to be checked.
	     * @param value The object with properties to include in an inline object definition if {@link condition} is met.
	     * @returns The given {@link value} if {@link condition} is met, an empty array otherwise.
	     */
	    function conditional(condition, value) {
	      if (condition) {
	        return value;
	      } else {
	        if (Array.isArray(value)) {
	          return [];
	        } else {
	          return {};
	        }
	      }
	    }
	    Data.conditional = conditional;
	    /**
	     * Compares two objects for deep equality.
	     * @param object1 The first object to compare.
	     * @param object2 The second object to compare.
	     * @returns true if all of the nested properties of object1 are equal to that of object2.
	     */
	    function deepEquals(object1, object2) {
	      if (_typeof(object1) === "object" && _typeof(object2) === "object") {
	        if (object1 === null || object2 === null) {
	          return object1 === object2;
	        }
	        var object1Keys = Object.keys(object1);
	        var object2Keys = Object.keys(object2);
	        if (object1Keys.length !== object2Keys.length) {
	          return false;
	        }
	        for (var _i = 0, _object1Keys = object1Keys; _i < _object1Keys.length; _i++) {
	          var key = _object1Keys[_i];
	          var value1 = object1[key];
	          var value2 = object2[key];
	          var areObjects = _typeof(value1) === "object" && value1 !== null && _typeof(value2) === "object" && value2 !== null;
	          if (areObjects && !Data.deepEquals(value1, value2) || !areObjects && value1 !== value2) {
	            return false;
	          }
	        }
	        return true;
	      } else {
	        return object1 === object2;
	      }
	    }
	    Data.deepEquals = deepEquals;
	    function assert(condition) {
	      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed.";
	      if (!condition) {
	        throw new exports.Error.Assertion(message);
	      }
	    }
	    Data.assert = assert;
	  })(exports.Data || (exports.Data = {}));
	  exports.RegularExpression = void 0;
	  (function (RegularExpression) {
	    RegularExpression.email = /(^[\w\.]+)@((?:[\w-]+\.)+[\w-]{2,4}$)/i;
	    RegularExpression.mimeType = /(?:application|audio|font|example|image|message|model|multipart|text|video)\/[a-z0-9+-.]+/i;
	  })(exports.RegularExpression || (exports.RegularExpression = {}));

	  /**
	   * A String manipulation module used for formatting and interpreting text.
	   */
	  exports.Text = void 0;
	  (function (Text) {
	    /**
	     * The default options for text manipulations and formatting
	     */
	    Text.defaults = {
	      locale: "en-CA",
	      dateFormat: {
	        dateStyle: "long"
	      },
	      timeFormat: {
	        timeStyle: "short"
	      },
	      currency: "CAD"
	    };
	    /**
	     * Converts {@link string} to a url-slug. Note that this function treats camel casing as separate words. Convert {@link string} to lower case first to avoid this functionality.
	     * @param string The text to turn into a slug
	     * @returns a-slug-string
	     */
	    function slug(string) {
	      string = string.replace(/[^a-z0-9]+/gi, "-");
	      string = string.replace(/([a-z])([A-Z])/g, "$1-$2");
	      string = string.replace(/^-|-$/g, "");
	      return string.toLowerCase();
	    }
	    Text.slug = slug;
	    /**
	     * Converts {@link string} to camelCase.
	     * @param string The text to turn into camel case.
	     * @returns aCamelCaseString
	     */
	    function camel(string) {
	      string = string.replace(/[^A-Za-z0-9]+/g, " ").trim().toLowerCase();
	      string = string.split(/ /g).map(function (piece, index) {
	        if (index > 0) {
	          return piece.charAt(0).toUpperCase() + piece.substring(1);
	        }
	        return piece;
	      }).join("");
	      return string;
	    }
	    Text.camel = camel;
	    /**
	     * Converts string to Title Case
	     * @param string The text to turn into title case.
	     * @returns A Title Case String
	     */
	    function title(string) {
	      return string.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (match) {
	        return match.toUpperCase();
	      });
	    }
	    Text.title = title;
	    /**
	     * Wraps 'string' in quotes.
	     * @param string A string to wrap in quotes.
	     * @param quote The quote string.
	     * @returns A string wrapped in quotes.
	     */
	    function quote(string) {
	      var quote = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "\"";
	      return quote + string + quote;
	    }
	    Text.quote = quote;
	    /**
	     * Removes the quotes from a given string.
	     * @param string A string to remove the quotes from.
	     * @param quote The quote string.
	     * @returns `string` without quotes.
	     */
	    function unquote(string) {
	      var quote = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "\"";
	      if (string.startsWith(quote) && string.endsWith(quote)) {
	        return string.substring(quote.length, string.length - quote.length);
	      }
	      return string;
	    }
	    Text.unquote = unquote;
	    /**
	     * Creates an English readable list from {@link values}.
	     * @param values A list of values to make a pretty list out of.
	     * @returns A list deliminated by commas with the word "and" separating the last element.
	     */
	    function list(values) {
	      var lastDelimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " and ";
	      var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ", ";
	      if (values.length > 1) {
	        var lastValue = values.pop();
	        return values.join(delimiter) + lastDelimiter + lastValue;
	      } else {
	        return values.join(delimiter);
	      }
	    }
	    Text.list = list;
	    /**
	     * Makes {@link singular} plural.
	     * @param singular The singular word to make plural.
	     * @param count The number of {@link singular}. Not 1 to pluralize.
	     * @returns The plural of {@link singular}.
	     */
	    function plural(singular) {
	      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      if (count == 1) {
	        return singular;
	      }
	      var plural = {
	        "(quiz)$": "$1zes",
	        "^(ox)$": "$1en",
	        "([m|l])ouse$": "$1ice",
	        "(matr|vert|ind)ix|ex$": "$1ices",
	        "(x|ch|ss|sh)$": "$1es",
	        "([^aeiouy]|qu)y$": "$1ies",
	        "(hive)$": "$1s",
	        "(?:([^f])fe|([lr])f)$": "$1$2ves",
	        "(shea|lea|loa|thie)f$": "$1ves",
	        "sis$": "ses",
	        "([ti])um$": "$1a",
	        "(tomat|potat|ech|her|vet)o$": "$1oes",
	        "(bu)s$": "$1ses",
	        "(alias)$": "$1es",
	        "(octop)us$": "$1i",
	        "(ax|test)is$": "$1es",
	        "(us)$": "$1es",
	        "([^s]+)$": "$1s"
	      };
	      var irregular = {
	        "move": "moves",
	        "foot": "feet",
	        "goose": "geese",
	        "sex": "sexes",
	        "child": "children",
	        "man": "men",
	        "tooth": "teeth",
	        "person": "people"
	      };
	      var uncountable = ["sheep", "fish", "deer", "moose", "series", "species", "money", "rice", "information", "equipment"];
	      if (uncountable.indexOf(singular.toLowerCase()) >= 0) {
	        return singular;
	      }
	      for (var word in irregular) {
	        var pattern = new RegExp(word + "$", "i");
	        var replace = irregular[word];
	        if (pattern.test(singular)) {
	          return singular.replace(pattern, replace);
	        }
	      }
	      for (var expression in plural) {
	        var _pattern = new RegExp(expression, "i");
	        if (_pattern.test(singular)) {
	          return singular.replace(_pattern, plural[expression]);
	        }
	      }
	      return singular;
	    }
	    Text.plural = plural;
	    /**
	     * Adds a number suffix to "value". (-st, -nd, -rd or -th)
	     * @param value The number to add a suffix to.
	     * @returns A string of "value" with a number suffix.
	     */
	    function integerSuffix(value) {
	      if (value % 1 !== 0) {
	        throw new Error("Can only determine a number suffix for integers. Got \"".concat(value, "\"."));
	      }
	      var string = value.toFixed(0);
	      switch (value) {
	        case 1:
	          return string + "st";
	        case 2:
	          return string + "nd";
	        case 3:
	          return string + "rd";
	        default:
	          return string + "th";
	      }
	    }
	    Text.integerSuffix = integerSuffix;
	    /**
	     * Converts a date object into strings of various formats.
	     * @param date The date to convert.
	     * @param format The format to use. ("iso", "form", "pretty")
	     * @returns A formatted date string.
	     *
	     * @note The "pretty" will use {@link Text.defaults.locale} and {@link Text.defaults.dateFormat}
	     */
	    function date(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "pretty";
	      switch (format) {
	        case "iso":
	          return date.toISOString();
	        case "form":
	          return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().substring(0, 10);
	        case "pretty":
	          return date.toLocaleDateString(Text.defaults.locale, Text.defaults.dateFormat);
	        default:
	          throw new Error("Unrecognized date format ".concat(format, "."));
	      }
	    }
	    Text.date = date;
	    /**
	     * Converts a date or hours number into time strings of various formats.
	     * @param hoursOfDayOrDate A number of hours in a day (0-24) or a date object to convert to a time string.
	     * @param format The format of the time string.
	     * @returns The formatted time string.
	     */
	    function time(hoursOfDayOrDate) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "pretty";
	      switch (format) {
	        case "form":
	          var hours;
	          var minutes;
	          if (typeof hoursOfDayOrDate === "number") {
	            hours = Math.floor(hoursOfDayOrDate);
	            minutes = Math.round((hoursOfDayOrDate - hours) * 60);
	          } else {
	            hours = hoursOfDayOrDate.getHours();
	            minutes = hoursOfDayOrDate.getMinutes();
	          }
	          return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
	        case "pretty":
	          if (typeof hoursOfDayOrDate === "number") {
	            var _hours = Math.floor(hoursOfDayOrDate);
	            var _minutes = Math.round((hoursOfDayOrDate - _hours) * 60);
	            hoursOfDayOrDate = new Date(0, 0, 0, _hours, _minutes);
	          }
	          return hoursOfDayOrDate.toLocaleTimeString(Text.defaults.locale, Text.defaults.timeFormat);
	      }
	    }
	    Text.time = time;
	    /**
	     * Converts a given duration in milliseconds to a string.
	     * @param milliseconds Milliseconds to convert into a duration string.
	     * @param maximumPrecision The maximum precision of the duration string.
	     * @param minimumPrecision The minimum precision of the duration string.
	     * @param pluralize True to pluralize the units, false otherwise.
	     * @returns A duration string.
	     */
	    function duration(milliseconds) {
	      var maximumPrecision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "day";
	      var minimumPrecision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "second";
	      var pluralize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	      var precisions = [{
	        name: "week",
	        milliseconds: 1000 * 60 * 60 * 24 * 7
	      }, {
	        name: "day",
	        milliseconds: 1000 * 60 * 60 * 24
	      }, {
	        name: "hour",
	        milliseconds: 1000 * 60 * 60
	      }, {
	        name: "minute",
	        milliseconds: 1000 * 60
	      }, {
	        name: "second",
	        milliseconds: 1000
	      }, {
	        name: "millisecond",
	        milliseconds: 1
	      }];
	      var pieces = [];
	      var maximumPrecisionIndex = precisions.findIndex(function (item) {
	        return item.name === maximumPrecision;
	      });
	      var minimumPrecisionIndex = precisions.findIndex(function (item) {
	        return item.name === minimumPrecision;
	      });
	      for (var i = maximumPrecisionIndex, last = minimumPrecisionIndex; i <= last; i++) {
	        var item = precisions[i];
	        var count = i === last ? Math.round(milliseconds / item.milliseconds) : Math.floor(milliseconds / item.milliseconds);
	        milliseconds -= count * item.milliseconds;
	        if (count !== 0) {
	          pieces.push(count + " " + (pluralize ? Text.plural(item.name, count) : item.name));
	        }
	      }
	      return pieces.join(", ");
	    }
	    Text.duration = duration;
	    /**
	     * Gets the name of the day of the week from {@link date}.
	     * @param date The date to get the weekday from.
	     * @returns The name of the day of the week.
	     */
	    function weekday(date) {
	      return date.toLocaleDateString(Text.defaults.locale, {
	        weekday: "long"
	      });
	    }
	    Text.weekday = weekday;
	    /**
	     * Gets the name of the month of the year from {@link date}.
	     * @param date The date to get the month from.
	     * @returns The name of the month of the year.
	     */
	    function month(date) {
	      return date.toLocaleDateString(Text.defaults.locale, {
	        month: "long"
	      });
	    }
	    Text.month = month;
	    /**
	     * Creates a string from {@link currency}.
	     * @param currency The currency to convert to a string.
	     * @returns A string representing {@link currency}.
	     */
	    function currency(currency) {
	      return currency.toLocaleString(Text.defaults.locale, {
	        style: "currency",
	        currency: Text.defaults.currency
	      });
	    }
	    Text.currency = currency;
	    /**
	     * Creates a string from {@link percentage}.
	     * @param percentage The percentage to convert to a string.
	     * @returns A string representing {@link percentage}.
	     */
	    function percentage(percentage) {
	      return percentage.toLocaleString(Text.defaults.locale, {
	        style: "percent"
	      });
	    }
	    Text.percentage = percentage;
	    /**
	     * Creates a string from {@link number}.
	     * @param number The number to convert to a string.
	     * @param fractionalDigits The number of digits to represent the fractional portion of the number.
	     * @returns A string representing {@link number}.
	     */
	    function number(number) {
	      var fractionalDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	      return number.toLocaleString(Text.defaults.locale, {
	        style: "decimal",
	        minimumFractionDigits: fractionalDigits,
	        maximumFractionDigits: fractionalDigits
	      });
	    }
	    Text.number = number;
	    (function (Utility) {
	      /**
	       * Calculates the [Levenshtein distance]{@link https://en.wikipedia.org/wiki/Levenshtein_distance} between two strings.
	       * @param stringA The first string
	       * @param stringB The second string
	       * @returns The distance between {@link stringA} and {@link stringB}
	       */
	      function getLevenshteinDistance(stringA, stringB) {
	        var line = Array(stringB.length + 1).fill(null).map(function () {
	          return Array(stringA.length + 1).fill(null);
	        });
	        for (var i = 0; i <= stringA.length; i += 1) {
	          line[0][i] = i;
	        }
	        for (var j = 0; j <= stringB.length; j += 1) {
	          line[j][0] = j;
	        }
	        for (var _j = 1; _j <= stringB.length; _j += 1) {
	          for (var _i2 = 1; _i2 <= stringA.length; _i2 += 1) {
	            var indicator = stringA[_i2 - 1] === stringB[_j - 1] ? 0 : 1;
	            line[_j][_i2] = Math.min(line[_j][_i2 - 1] + 1, line[_j - 1][_i2] + 1, line[_j - 1][_i2 - 1] + indicator);
	          }
	        }
	        return line[stringB.length][stringA.length];
	      }
	      Utility.getLevenshteinDistance = getLevenshteinDistance;
	      /**
	       * Calculates a normalized similarity factor between two strings. Determines how similar two strings are. Used for fuzzy string checking.
	       * @param stringA The first string
	       * @param stringB The second string
	       * @returns A similarity factor, 1 being identical, 0 being very different.
	       */
	      function getSimilarity(stringA, stringB) {
	        var distance = Text.Utility.getLevenshteinDistance(stringA, stringB);
	        var averageLength = (stringA.length + stringB.length) / 2;
	        return Math.max(0, 1 - distance / Math.max(1, averageLength));
	      }
	      Utility.getSimilarity = getSimilarity;
	    })(Text.Utility || (Text.Utility = {}));
	    (function (Parse) {
	      /**
	      * Converts a string into a date object.
	      * @param dateString The string to parse into a date.
	      * @param formFormat If true, parses "dateString" in the current timezone instead of UTC.
	      * @returns The parsed date.
	      */
	      function date(dateString, formFormat) {
	        var date = new Date(dateString);
	        if (formFormat) {
	          return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
	        } else {
	          return date;
	        }
	      }
	      Parse.date = date;
	      /**
	       * Converts a form time string (HH:mm) to a number of hours of a day.
	       * @param formTimeString The string to parse.
	       * @returns An hour of the day (0-24) representing {@link formTimeString}.
	       */
	      function time(formTimeString) {
	        var hours = parseInt(formTimeString.substring(0, 2));
	        var minutes = parseInt(formTimeString.substring(3, 5));
	        return hours + minutes / 60;
	      }
	      Parse.time = time;
	    })(Text.Parse || (Text.Parse = {}));
	  })(exports.Text || (exports.Text = {}));
	  exports.Clock = Clock;
	  exports.Color = Color;
	})(shared);

	var client = {};

	(function (exports) {

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	    }
	  }
	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    Object.defineProperty(Constructor, "prototype", {
	      writable: false
	    });
	    return Constructor;
	  }
	  function _slicedToArray(arr, i) {
	    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	  }
	  function _nonIterableRest() {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  function _iterableToArrayLimit(arr, i) {
	    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	    if (null != _i) {
	      var _s,
	        _e,
	        _x,
	        _r,
	        _arr = [],
	        _n = !0,
	        _d = !1;
	      try {
	        if (_x = (_i = _i.call(arr)).next, 0 === i) {
	          if (Object(_i) !== _i) return;
	          _n = !1;
	        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	      } catch (err) {
	        _d = !0, _e = err;
	      } finally {
	        try {
	          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
	        } finally {
	          if (_d) throw _e;
	        }
	      }
	      return _arr;
	    }
	  }
	  function _arrayWithHoles(arr) {
	    if (Array.isArray(arr)) return arr;
	  }
	  function _createForOfIteratorHelper(o, allowArrayLike) {
	    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	    if (!it) {
	      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	        if (it) o = it;
	        var i = 0;
	        var F = function F() {};
	        return {
	          s: F,
	          n: function n() {
	            if (i >= o.length) return {
	              done: true
	            };
	            return {
	              done: false,
	              value: o[i++]
	            };
	          },
	          e: function e(_e2) {
	            throw _e2;
	          },
	          f: F
	        };
	      }
	      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	    }
	    var normalCompletion = true,
	      didErr = false,
	      err;
	    return {
	      s: function s() {
	        it = it.call(o);
	      },
	      n: function n() {
	        var step = it.next();
	        normalCompletion = step.done;
	        return step;
	      },
	      e: function e(_e3) {
	        didErr = true;
	        err = _e3;
	      },
	      f: function f() {
	        try {
	          if (!normalCompletion && it["return"] != null) it["return"]();
	        } finally {
	          if (didErr) throw err;
	        }
	      }
	    };
	  }
	  function _toConsumableArray(arr) {
	    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	  }
	  function _nonIterableSpread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  function _unsupportedIterableToArray(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(o);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	  }
	  function _iterableToArray(iter) {
	    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	  }
	  function _arrayWithoutHoles(arr) {
	    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	  }
	  function _arrayLikeToArray(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;
	    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	    return arr2;
	  }
	  function _regeneratorRuntime() {

	    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
	    _regeneratorRuntime = function _regeneratorRuntime() {
	      return exports;
	    };
	    var exports = {},
	      Op = Object.prototype,
	      hasOwn = Op.hasOwnProperty,
	      defineProperty = Object.defineProperty || function (obj, key, desc) {
	        obj[key] = desc.value;
	      },
	      $Symbol = "function" == typeof Symbol ? Symbol : {},
	      iteratorSymbol = $Symbol.iterator || "@@iterator",
	      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	    function define(obj, key, value) {
	      return Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: !0,
	        configurable: !0,
	        writable: !0
	      }), obj[key];
	    }
	    try {
	      define({}, "");
	    } catch (err) {
	      define = function define(obj, key, value) {
	        return obj[key] = value;
	      };
	    }
	    function wrap(innerFn, outerFn, self, tryLocsList) {
	      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	        generator = Object.create(protoGenerator.prototype),
	        context = new Context(tryLocsList || []);
	      return defineProperty(generator, "_invoke", {
	        value: makeInvokeMethod(innerFn, self, context)
	      }), generator;
	    }
	    function tryCatch(fn, obj, arg) {
	      try {
	        return {
	          type: "normal",
	          arg: fn.call(obj, arg)
	        };
	      } catch (err) {
	        return {
	          type: "throw",
	          arg: err
	        };
	      }
	    }
	    exports.wrap = wrap;
	    var ContinueSentinel = {};
	    function Generator() {}
	    function GeneratorFunction() {}
	    function GeneratorFunctionPrototype() {}
	    var IteratorPrototype = {};
	    define(IteratorPrototype, iteratorSymbol, function () {
	      return this;
	    });
	    var getProto = Object.getPrototypeOf,
	      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
	    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	    function defineIteratorMethods(prototype) {
	      ["next", "throw", "return"].forEach(function (method) {
	        define(prototype, method, function (arg) {
	          return this._invoke(method, arg);
	        });
	      });
	    }
	    function AsyncIterator(generator, PromiseImpl) {
	      function invoke(method, arg, resolve, reject) {
	        var record = tryCatch(generator[method], generator, arg);
	        if ("throw" !== record.type) {
	          var result = record.arg,
	            value = result.value;
	          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	            result.value = unwrapped, resolve(result);
	          }, function (error) {
	            return invoke("throw", error, resolve, reject);
	          });
	        }
	        reject(record.arg);
	      }
	      var previousPromise;
	      defineProperty(this, "_invoke", {
	        value: function value(method, arg) {
	          function callInvokeWithMethodAndArg() {
	            return new PromiseImpl(function (resolve, reject) {
	              invoke(method, arg, resolve, reject);
	            });
	          }
	          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	        }
	      });
	    }
	    function makeInvokeMethod(innerFn, self, context) {
	      var state = "suspendedStart";
	      return function (method, arg) {
	        if ("executing" === state) throw new Error("Generator is already running");
	        if ("completed" === state) {
	          if ("throw" === method) throw arg;
	          return doneResult();
	        }
	        for (context.method = method, context.arg = arg;;) {
	          var delegate = context.delegate;
	          if (delegate) {
	            var delegateResult = maybeInvokeDelegate(delegate, context);
	            if (delegateResult) {
	              if (delegateResult === ContinueSentinel) continue;
	              return delegateResult;
	            }
	          }
	          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	            if ("suspendedStart" === state) throw state = "completed", context.arg;
	            context.dispatchException(context.arg);
	          } else "return" === context.method && context.abrupt("return", context.arg);
	          state = "executing";
	          var record = tryCatch(innerFn, self, context);
	          if ("normal" === record.type) {
	            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	            return {
	              value: record.arg,
	              done: context.done
	            };
	          }
	          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	        }
	      };
	    }
	    function maybeInvokeDelegate(delegate, context) {
	      var methodName = context.method,
	        method = delegate.iterator[methodName];
	      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
	      var record = tryCatch(method, delegate.iterator, context.arg);
	      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	      var info = record.arg;
	      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	    }
	    function pushTryEntry(locs) {
	      var entry = {
	        tryLoc: locs[0]
	      };
	      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	    }
	    function resetTryEntry(entry) {
	      var record = entry.completion || {};
	      record.type = "normal", delete record.arg, entry.completion = record;
	    }
	    function Context(tryLocsList) {
	      this.tryEntries = [{
	        tryLoc: "root"
	      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
	    }
	    function values(iterable) {
	      if (iterable) {
	        var iteratorMethod = iterable[iteratorSymbol];
	        if (iteratorMethod) return iteratorMethod.call(iterable);
	        if ("function" == typeof iterable.next) return iterable;
	        if (!isNaN(iterable.length)) {
	          var i = -1,
	            next = function next() {
	              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	              return next.value = undefined, next.done = !0, next;
	            };
	          return next.next = next;
	        }
	      }
	      return {
	        next: doneResult
	      };
	    }
	    function doneResult() {
	      return {
	        value: undefined,
	        done: !0
	      };
	    }
	    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
	      value: GeneratorFunctionPrototype,
	      configurable: !0
	    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
	      value: GeneratorFunction,
	      configurable: !0
	    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	      var ctor = "function" == typeof genFun && genFun.constructor;
	      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	    }, exports.mark = function (genFun) {
	      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
	    }, exports.awrap = function (arg) {
	      return {
	        __await: arg
	      };
	    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	      return this;
	    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	      void 0 === PromiseImpl && (PromiseImpl = Promise);
	      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	        return result.done ? result.value : iter.next();
	      });
	    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	      return this;
	    }), define(Gp, "toString", function () {
	      return "[object Generator]";
	    }), exports.keys = function (val) {
	      var object = Object(val),
	        keys = [];
	      for (var key in object) keys.push(key);
	      return keys.reverse(), function next() {
	        for (; keys.length;) {
	          var key = keys.pop();
	          if (key in object) return next.value = key, next.done = !1, next;
	        }
	        return next.done = !0, next;
	      };
	    }, exports.values = values, Context.prototype = {
	      constructor: Context,
	      reset: function reset(skipTempReset) {
	        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
	      },
	      stop: function stop() {
	        this.done = !0;
	        var rootRecord = this.tryEntries[0].completion;
	        if ("throw" === rootRecord.type) throw rootRecord.arg;
	        return this.rval;
	      },
	      dispatchException: function dispatchException(exception) {
	        if (this.done) throw exception;
	        var context = this;
	        function handle(loc, caught) {
	          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	        }
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i],
	            record = entry.completion;
	          if ("root" === entry.tryLoc) return handle("end");
	          if (entry.tryLoc <= this.prev) {
	            var hasCatch = hasOwn.call(entry, "catchLoc"),
	              hasFinally = hasOwn.call(entry, "finallyLoc");
	            if (hasCatch && hasFinally) {
	              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	            } else if (hasCatch) {
	              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            } else {
	              if (!hasFinally) throw new Error("try statement without catch or finally");
	              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	            }
	          }
	        }
	      },
	      abrupt: function abrupt(type, arg) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	            var finallyEntry = entry;
	            break;
	          }
	        }
	        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	        var record = finallyEntry ? finallyEntry.completion : {};
	        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	      },
	      complete: function complete(record, afterLoc) {
	        if ("throw" === record.type) throw record.arg;
	        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	      },
	      finish: function finish(finallyLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	        }
	      },
	      "catch": function _catch(tryLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          if (entry.tryLoc === tryLoc) {
	            var record = entry.completion;
	            if ("throw" === record.type) {
	              var thrown = record.arg;
	              resetTryEntry(entry);
	            }
	            return thrown;
	          }
	        }
	        throw new Error("illegal catch attempt");
	      },
	      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	        return this.delegate = {
	          iterator: values(iterable),
	          resultName: resultName,
	          nextLoc: nextLoc
	        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	      }
	    }, exports;
	  }
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
	  function _objectSpread(target) {
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
	    key = _toPropertyKey(key);
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
	  function _toPropertyKey(arg) {
	    var key = _toPrimitive(arg, "string");
	    return _typeof(key) === "symbol" ? key : String(key);
	  }
	  function _toPrimitive(input, hint) {
	    if (_typeof(input) !== "object" || input === null) return input;
	    var prim = input[Symbol.toPrimitive];
	    if (prim !== undefined) {
	      var res = prim.call(input, hint || "default");
	      if (_typeof(res) !== "object") return res;
	      throw new TypeError("@@toPrimitive must return a primitive value.");
	    }
	    return (hint === "string" ? String : Number)(input);
	  }
	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	      return typeof obj;
	    } : function (obj) {
	      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    }, _typeof(obj);
	  }
	  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	    try {
	      var info = gen[key](arg);
	      var value = info.value;
	    } catch (error) {
	      reject(error);
	      return;
	    }
	    if (info.done) {
	      resolve(value);
	    } else {
	      Promise.resolve(value).then(_next, _throw);
	    }
	  }
	  function _asyncToGenerator(fn) {
	    return function () {
	      var self = this,
	        args = arguments;
	      return new Promise(function (resolve, reject) {
	        var gen = fn.apply(self, args);
	        function _next(value) {
	          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	        }
	        function _throw(err) {
	          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	        }
	        _next(undefined);
	      });
	    };
	  }
	  var shared$1 = shared;
	  var RequestMethod;
	  (function (RequestMethod) {
	    RequestMethod["GET"] = "GET";
	    RequestMethod["HEAD"] = "HEAD";
	    RequestMethod["OPTIONS"] = "OPTIONS";
	    RequestMethod["PATCH"] = "PATCH";
	    RequestMethod["POST"] = "POST";
	    RequestMethod["PUT"] = "PUT";
	    RequestMethod["DELETE"] = "DELETE";
	    RequestMethod["TRACE"] = "TRACE";
	  })(RequestMethod || (RequestMethod = {}));
	  exports.Network = void 0;
	  (function (Network) {
	    /**
	     * Used specify default to use for all outgoing requests.
	     */
	    Network.defaults = {
	      headers: {},
	      getHeaders: {},
	      postHeaders: {}
	    };
	    /**
	     * Sends a {@link method} request with optional body data and headers.
	     * Uses the fetch API and {@link Network.defaults}
	     * @param url The address of the server to make the request to.
	     * @param body The body data to send to {@link url}
	     * @param headers The headers to send to {@link url}
	     * @returns The response from {@link url}
	     */
	    function request(_x) {
	      return _request.apply(this, arguments);
	    }
	    function _request() {
	      _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
	        var method,
	          body,
	          headers,
	          additionalHeaders,
	          _args = arguments;
	        return _regeneratorRuntime().wrap(function _callee$(_context) {
	          while (1) switch (_context.prev = _context.next) {
	            case 0:
	              method = _args.length > 1 && _args[1] !== undefined ? _args[1] : RequestMethod.GET;
	              body = _args.length > 2 ? _args[2] : undefined;
	              headers = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
	              if (Network.defaults.host !== undefined && url.match(/^[a-zA-Z]+:\/\//) === null) {
	                url = Network.defaults.host + url;
	              }
	              additionalHeaders = {};
	              if (_typeof(body) === "object") {
	                body = JSON.stringify(body);
	                additionalHeaders["Content-Type"] = "application/json";
	              }
	              _context.next = 8;
	              return fetch(url, _objectSpread({
	                method: method,
	                credentials: "include",
	                headers: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Network.defaults.headers), shared$1.Data.conditional(method === RequestMethod.GET, Network.defaults.getHeaders)), shared$1.Data.conditional(method === RequestMethod.POST, Network.defaults.postHeaders)), additionalHeaders), headers)
	              }, shared$1.Data.conditional(body !== undefined, {
	                body: body
	              })));
	            case 8:
	              return _context.abrupt("return", _context.sent);
	            case 9:
	            case "end":
	              return _context.stop();
	          }
	        }, _callee);
	      }));
	      return _request.apply(this, arguments);
	    }
	    Network.request = request;
	    /**
	     * Sends a post request with optional body data and headers.
	     * Uses the fetch API and {@link Network.defaults}
	     * @param url The address of the server to make the request to.
	     * @param parameters The body data to send to {@link url}
	     * @param headers The headers to send to {@link url}
	     * @returns The response from {@link url}
	     */
	    function get(_x2, _x3) {
	      return _get.apply(this, arguments);
	    }
	    function _get() {
	      _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, parameters) {
	        var headers,
	          _args2 = arguments;
	        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	          while (1) switch (_context2.prev = _context2.next) {
	            case 0:
	              headers = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
	              if (parameters !== undefined) {
	                url = url + "?" + parameters.toString();
	              }
	              _context2.next = 4;
	              return Network.request(url, RequestMethod.GET, undefined, headers);
	            case 4:
	              return _context2.abrupt("return", _context2.sent);
	            case 5:
	            case "end":
	              return _context2.stop();
	          }
	        }, _callee2);
	      }));
	      return _get.apply(this, arguments);
	    }
	    Network.get = get;
	    /**
	     * Sends a post request with optional body data and headers.
	     * Uses the fetch API and {@link Network.defaults}
	     * @param url The address of the server to make the request to.
	     * @param body The body data to send to {@link url}
	     * @param headers The headers to send to {@link url}
	     * @returns The response from {@link url}
	     */
	    function post(_x4) {
	      return _post.apply(this, arguments);
	    }
	    function _post() {
	      _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
	        var body,
	          headers,
	          _args3 = arguments;
	        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	          while (1) switch (_context3.prev = _context3.next) {
	            case 0:
	              body = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
	              headers = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
	              _context3.next = 4;
	              return Network.request(url, RequestMethod.POST, body, headers);
	            case 4:
	              return _context3.abrupt("return", _context3.sent);
	            case 5:
	            case "end":
	              return _context3.stop();
	          }
	        }, _callee3);
	      }));
	      return _post.apply(this, arguments);
	    }
	    Network.post = post;
	    /**
	     * Sends a put request with optional body data and headers.
	     * Uses the fetch API and {@link Network.defaults}
	     * @param url The address of the server to make the request to.
	     * @param body The body data to send to {@link url}
	     * @param headers The headers to send to {@link url}
	     * @returns The response from {@link url}
	     */
	    function put(_x5, _x6) {
	      return _put.apply(this, arguments);
	    }
	    function _put() {
	      _put = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url, body) {
	        var headers,
	          _args4 = arguments;
	        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
	          while (1) switch (_context4.prev = _context4.next) {
	            case 0:
	              headers = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
	              _context4.next = 3;
	              return Network.request(url, RequestMethod.PUT, body, headers);
	            case 3:
	              return _context4.abrupt("return", _context4.sent);
	            case 4:
	            case "end":
	              return _context4.stop();
	          }
	        }, _callee4);
	      }));
	      return _put.apply(this, arguments);
	    }
	    Network.put = put;
	    /**
	     * Sends a patch request with optional body data and headers.
	     * Uses the fetch API and {@link Network.defaults}
	     * @param url The address of the server to make the request to.
	     * @param body The body data to send to {@link url}
	     * @param headers The headers to send to {@link url}
	     * @returns The response from {@link url}
	     */
	    function patch(_x7, _x8) {
	      return _patch.apply(this, arguments);
	    }
	    function _patch() {
	      _patch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url, body) {
	        var headers,
	          _args5 = arguments;
	        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
	          while (1) switch (_context5.prev = _context5.next) {
	            case 0:
	              headers = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
	              _context5.next = 3;
	              return Network.request(url, RequestMethod.PATCH, body, headers);
	            case 3:
	              return _context5.abrupt("return", _context5.sent);
	            case 4:
	            case "end":
	              return _context5.stop();
	          }
	        }, _callee5);
	      }));
	      return _patch.apply(this, arguments);
	    }
	    Network.patch = patch;
	    /**
	     * Sends a delete request with optional body data and headers.
	     * Uses the fetch API and {@link Network.defaults}
	     * @note It's unsatisfying that delete is a reserved keyword.
	     *
	     * @param url The address of the server to make the request to.
	     * @param body The body data to send to {@link url}
	     * @param headers The headers to send to {@link url}
	     * @returns The response from {@link url}
	     */
	    function deleteRequest(_x9, _x10) {
	      return _deleteRequest.apply(this, arguments);
	    }
	    function _deleteRequest() {
	      _deleteRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url, body) {
	        var headers,
	          _args6 = arguments;
	        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
	          while (1) switch (_context6.prev = _context6.next) {
	            case 0:
	              headers = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
	              _context6.next = 3;
	              return Network.request(url, RequestMethod.DELETE, body, headers);
	            case 3:
	              return _context6.abrupt("return", _context6.sent);
	            case 4:
	            case "end":
	              return _context6.stop();
	          }
	        }, _callee6);
	      }));
	      return _deleteRequest.apply(this, arguments);
	    }
	    Network.deleteRequest = deleteRequest;
	  })(exports.Network || (exports.Network = {}));
	  exports.Dom = void 0;
	  (function (Dom) {
	    /**
	     * Called if an error occurs while executing the {@link Network.onReady} callback.
	     */
	    var _onErrorListeners = [];
	    /**
	     * Registers a callback to be run when the DOM content loads.
	     * @param callback The callback to be run when the DOM content loads.
	     */
	    function onReady(callback) {
	      var mapping = Dom.getMapping();
	      var execute = function execute() {
	        return Promise.resolve(callback(mapping))["catch"](function (error) {
	          return _onErrorListeners.forEach(function (listener) {
	            return listener(error, mapping);
	          });
	        });
	      };
	      if (document.readyState === "complete") {
	        execute();
	      } else {
	        window.addEventListener("DOMContentLoaded", execute);
	      }
	    }
	    Dom.onReady = onReady;
	    /**
	     * Registers a callback to be run if an error occurs while executing onReady callbacks.
	     * @param callback The callback to be run if an error occurs while executing onReady callbacks.
	     */
	    function onError(callback) {
	      _onErrorListeners.push(callback);
	    }
	    Dom.onError = onError;
	    /**
	     * Returns an ElementMapping of all elements in {@link root}.
	     * @param root The document to create the mapping for.
	     * @returns A mapping of element in {@link root}
	     */
	    function getMapping() {
	      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
	      return new ElementMapping(root);
	    }
	    Dom.getMapping = getMapping;
	    /**
	     * Creates an HTML element
	     * @param options The options used to create the element
	     * @returns The created HTML element
	     */
	    function create(options) {
	      var element = document.createElement(options.tagName);
	      if (shared$1.Data.has(options, "textContent")) {
	        element.textContent = options.textContent;
	      }
	      if (shared$1.Data.has(options, "classList")) {
	        var _element$classList;
	        (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(options.classList));
	      }
	      if (shared$1.Data.has(options, "innerHTML")) {
	        element.innerHTML = options.innerHTML;
	      }
	      if (shared$1.Data.has(options, "outerHTML")) {
	        element.outerHTML = options.outerHTML;
	      }
	      if (shared$1.Data.has(options, "attributes")) {
	        for (var name in options.attributes) {
	          element.setAttribute(name, options.attributes[name]);
	        }
	      }
	      if (shared$1.Data.has(options, "eventListeners")) {
	        for (var type in options.eventListeners) {
	          element.addEventListener(type, options.eventListeners[type]);
	        }
	      }
	      if (shared$1.Data.has(options, "childNodes")) {
	        element.append.apply(element, _toConsumableArray(options.childNodes));
	      }
	      return element;
	    }
	    Dom.create = create;
	    /**
	     * Checks to see if an element with the ID "elementId" exists in the DOM.
	     * @param elementId The ID of an element to check the existance of.
	     * @returns True of an element with the ID "elementId" exists in the DOM, false otherwise.
	     */
	    function exists(elementId) {
	      return document.getElementById(elementId) !== null;
	    }
	    Dom.exists = exists;
	    /**
	     * Removes all children from a node.
	     * @param container The node to remove the children from.
	     */
	    function clear(container) {
	      while (container.lastChild !== null) {
	        container.lastChild.remove();
	      }
	      return container;
	    }
	    Dom.clear = clear;
	    /**
	     * Retrieves form data for inputs within a certain section in a form
	     * @param section The section to retrieve the form data from. This can be the form itself.
	     */
	    function getFormData(section) {
	      var form = section instanceof HTMLFormElement ? section : section.closest("form");
	      shared$1.Data.assert(form !== null, "The provided section is not in a form element.");
	      var formData = new FormData(form);
	      var _iterator = _createForOfIteratorHelper(form.elements),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var element = _step.value;
	          if (!section.contains(element)) {
	            if (element instanceof HTMLInputElement) {
	              formData["delete"](element.name);
	            }
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	      return formData;
	    }
	    Dom.getFormData = getFormData;
	    /**
	     * Populates a form's inputs with data.
	     * @param form The form element to populate.
	     * @param data The data to populate {@link form} with.
	     */
	    function setFormData(form, data) {
	      var formData;
	      if (data instanceof FormData) {
	        formData = data;
	      } else {
	        formData = new FormData();
	        shared$1.Data.walk(data, function (_, property, path) {
	          if (_typeof(property) !== "object") {
	            formData.append(path, property);
	          }
	          return false;
	        });
	      }
	      var _iterator2 = _createForOfIteratorHelper(formData),
	        _step2;
	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var _step2$value = _slicedToArray(_step2.value, 2),
	            key = _step2$value[0],
	            value = _step2$value[1];
	          if (key in form.elements) {
	            var input = form.elements[key];
	            if (input instanceof HTMLInputElement) {
	              switch (input.type) {
	                case "checkbox":
	                  input.checked = !!value;
	                  break;
	                default:
	                  if (value instanceof File) {
	                    var dataTransfer = new DataTransfer();
	                    dataTransfer.items.add(value);
	                    input.files = dataTransfer.files;
	                  } else {
	                    input.value = value;
	                  }
	                  break;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }
	    }
	    Dom.setFormData = setFormData;
	    /**
	     * Clears the value of the inputs within a certain section within a form.
	     * @param section The section to retrieve the form data from.
	     */
	    function clearFormSection(section) {
	      var form = section instanceof HTMLFormElement ? section : section.closest("form");
	      shared$1.Data.assert(form !== null, "The provided section is not in a form element.");
	      var _iterator3 = _createForOfIteratorHelper(form.elements),
	        _step3;
	      try {
	        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	          var element = _step3.value;
	          if (section.contains(element)) {
	            if (element instanceof HTMLInputElement) {
	              if (element.type === "checkbox" || element.type === "radio") {
	                element.checked = false;
	              } else if (element.type === "file") {
	                element.files = new FileList();
	              } else {
	                element.value = "";
	              }
	            } else if (element instanceof HTMLTextAreaElement) {
	              element.value = "";
	            } else if (element instanceof HTMLSelectElement) {
	              element.selectedIndex = 0;
	            }
	          }
	        }
	      } catch (err) {
	        _iterator3.e(err);
	      } finally {
	        _iterator3.f();
	      }
	    }
	    Dom.clearFormSection = clearFormSection;
	    /**
	     * Submits a form whilst triggering HTML's default form validation.
	     * @param form A form to submit.
	     */
	    function submitFormWithValidation(form) {
	      var input = document.createElement("input");
	      input.style.display = "none";
	      input.setAttribute("type", "submit");
	      form.appendChild(input);
	      input.click();
	      input.remove();
	    }
	    Dom.submitFormWithValidation = submitFormWithValidation;
	    /**
	     * Pulses a halo affect around an element to bring attention to it.
	     * @param element The element to pluse
	     * @param color The color of the pluse
	     */
	    function pulse(element) {
	      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#FF0000";
	      var i = 0;
	      var duration = 500;
	      var steps = 20;
	      var boxShadowBefore = element.style.boxShadow;
	      var intervalId = setInterval(function () {
	        if (i > 1) {
	          element.style.boxShadow = boxShadowBefore;
	          clearInterval(intervalId);
	        } else {
	          i += duration / 1000 / steps;
	          var expand = Math.sin(Math.PI * (4 * i + 1.5)) + 1;
	          element.style.boxShadow = "0 0 ".concat(expand * 15, "px ").concat(color);
	        }
	      }, duration / steps);
	    }
	    Dom.pulse = pulse;
	    /**
	     * Get a computed value of a css variable.
	     * @param name The name of the css variable. (Starts with "--")
	     * @returns The computed style of the css variable named {@link name}.
	     */
	    function getCssVariable(name) {
	      return getComputedStyle(document.documentElement).getPropertyValue(name);
	    }
	    Dom.getCssVariable = getCssVariable;
	    /**
	     * Sets a CSS variable for a given element.
	     * @param name The name of the css variable. (Starts with "--")
	     * @param value The CSS value of the variable.
	     * @param element The host element of the styles. (Defaults to document.documentElement)
	     */
	    function setCssVariable(name, value) {
	      var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.documentElement;
	      element.style.setProperty(name, value);
	    }
	    Dom.setCssVariable = setCssVariable;
	    /**
	     * Attaches a input listener that only fires a given amount of time after the user has stopped inputting.
	     * This is useful to reducing the amount of API requests for suggestions-as-you-type search boxes.
	     * @param input The element to attach the listener to
	     * @param callback The callback to be run after inputting
	     * @param delay The time in milliseconds to wait after the user has inputted until firing the callback
	     */
	    function setSlowedInputListener(input, callback) {
	      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
	      if (callback) {
	        var timeout;
	        input.oninput = function (event) {
	          if (timeout === undefined) {
	            clearTimeout(timeout);
	          }
	          timeout = setTimeout(function () {
	            return callback(event, true);
	          }, delay);
	          callback(event, false);
	        };
	      } else {
	        input.oninput = null;
	      }
	    }
	    Dom.setSlowedInputListener = setSlowedInputListener;
	    /**
	     * Attaches a modifier to an input to allow text tranformations. I.E. Auto capitalizing a postal code input, title casing a name input, etc.
	     * @param input An input to apply an input modifer to.
	     * @param modifier The modifier for "input"s value.
	     */
	    function addTextModifier(input, modifier) {
	      input.addEventListener("input", function () {
	        var selectionStart = input.selectionStart;
	        var selectionEnd = input.selectionEnd;
	        input.value = modifier(input.value);
	        input.setSelectionRange(selectionStart, selectionEnd);
	      });
	    }
	    Dom.addTextModifier = addTextModifier;
	    /**
	     * Controls the existance of "templateElement"s content in the DOM based on the value of "controlInput"
	     * @param templateElement The element whoes existance is dictated by "controlInput"
	     * @param controlInput The element whoes value controls the existance of "templateElement"
	     * @param valueEvaluationCallback The callback to assess "controlInput"s value. Returns true for "templateElement" to exists, false otherwise.
	     */
	    function existanceControlledBy(templateElement, controlInput) {
	      var valueEvaluationCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (controlInput) {
	        return controlInput.checked;
	      };
	      var puppetElements = _toConsumableArray(templateElement.content.childNodes);
	      var update = function update() {
	        if (valueEvaluationCallback(controlInput)) {
	          templateElement.after.apply(templateElement, _toConsumableArray(puppetElements));
	        } else {
	          var _templateElement$cont;
	          (_templateElement$cont = templateElement.content).append.apply(_templateElement$cont, _toConsumableArray(puppetElements));
	        }
	      };
	      controlInput.addEventListener("change", update);
	      update();
	    }
	    Dom.existanceControlledBy = existanceControlledBy;
	    /**
	     * Holds a mapping of IDs to their corresponding elements
	     * An easy-to-use typed, wrapping of document.getElementById()
	     */
	    var ElementMapping = /*#__PURE__*/function () {
	      function ElementMapping() {
	        var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
	        _classCallCheck(this, ElementMapping);
	        _defineProperty(this, "_proxy", void 0);
	        this._proxy = new Proxy(root, {
	          get: function get(root, elementId) {
	            return root.getElementById(elementId);
	          }
	        });
	      }
	      _createClass(ElementMapping, [{
	        key: "element",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "anchor",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "base",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "body",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "break",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "button",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "canvas",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "division",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "descriptionList",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "embed",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "form",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "head",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "heading",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "horizontalRule",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "html",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "inlineFrame",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "image",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "input",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "listItem",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "link",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "menu",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "meta",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "mod",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "orderedList",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "optgroups",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "option",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "paragraph",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "preformattedText",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "quote",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "script",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "select",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "slot",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "span",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "style",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "tableCell",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "table",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "tableRow",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "tableSection",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "template",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "time",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "title",
	        get: function get() {
	          return this._proxy;
	        }
	      }, {
	        key: "unorderedList",
	        get: function get() {
	          return this._proxy;
	        }
	      }]);
	      return ElementMapping;
	    }();
	    Dom.ElementMapping = ElementMapping;
	  })(exports.Dom || (exports.Dom = {}));
	  exports.Cookies = void 0;
	  (function (Cookies) {
	    /**
	     * Retrieves a cookie by name.
	     * @param name The name of the cookie to get the value of.
	     * @returns The cookie named {@link name}, or null if it does not exist.
	     */
	    function get(name) {
	      var valueStrings = document.cookie.split(";");
	      var _iterator4 = _createForOfIteratorHelper(valueStrings),
	        _step4;
	      try {
	        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	          var valueString = _step4.value;
	          var _valueString$trim$spl = valueString.trim().split("=").map(decodeURIComponent),
	            _valueString$trim$spl2 = _slicedToArray(_valueString$trim$spl, 2),
	            possibleKey = _valueString$trim$spl2[0],
	            value = _valueString$trim$spl2[1];
	          if (name === possibleKey) {
	            return value;
	          }
	        }
	      } catch (err) {
	        _iterator4.e(err);
	      } finally {
	        _iterator4.f();
	      }
	      return null;
	    }
	    Cookies.get = get;
	    /**
	     * Retrieves a JSON cookie by name.
	     * @param name The name of the cookie to get the value of.
	     * @returns The cookie named {@link name}, or null if it does not exist, or cannot be parsed as JSON.
	     */
	    function getJson(name) {
	      try {
	        var cookie = Cookies.get(name);
	        shared$1.Data.assert(cookie !== null);
	        return JSON.parse(cookie);
	      } catch (error) {
	        return null;
	      }
	    }
	    Cookies.getJson = getJson;
	    /**
	     * Retrieves all cookies and returns each key, value pair as an object.
	     * @returns An object where each key in a cookie name that maps a cookie value.
	     */
	    function getAll() {
	      var cookies = {};
	      var valueStrings = document.cookie.split(";");
	      var _iterator5 = _createForOfIteratorHelper(valueStrings),
	        _step5;
	      try {
	        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	          var valueString = _step5.value;
	          var _valueString$trim$spl3 = valueString.trim().split("=").map(decodeURIComponent),
	            _valueString$trim$spl4 = _slicedToArray(_valueString$trim$spl3, 2),
	            key = _valueString$trim$spl4[0],
	            value = _valueString$trim$spl4[1];
	          cookies[key] = value;
	        }
	      } catch (err) {
	        _iterator5.e(err);
	      } finally {
	        _iterator5.f();
	      }
	      return cookies;
	    }
	    Cookies.getAll = getAll;
	    /**
	     * Sets a cookie named {@link name} to {@link value}.
	     * @param name The name of the cookie to set the value of.
	     * @param value The value of the cookie to be set.
	     */
	    function set(name, value) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var pieces = ["".concat(name, "=").concat(encodeURIComponent(value))];
	      if (shared$1.Data.has(options, "path")) {
	        pieces.push("path=".concat(options.path));
	      }
	      if (shared$1.Data.has(options, "domain")) {
	        pieces.push("domain=".concat(options.domain));
	      }
	      if (shared$1.Data.has(options, "maxAge")) {
	        pieces.push("max-age=".concat(options.maxAge));
	      }
	      if (shared$1.Data.has(options, "expires")) {
	        pieces.push("expires=".concat(options.expires.toUTCString()));
	      }
	      if (shared$1.Data.has(options, "pasecureth") && options.secure) {
	        pieces.push("secure");
	      }
	      if (shared$1.Data.has(options, "sameSite")) {
	        pieces.push("samesite=".concat(options.sameSite));
	      }
	      document.cookie = pieces.join("; ");
	    }
	    Cookies.set = set;
	    /**
	     * Sets a cookie named {@link name} to {@link value} as JSON.
	     * @param name The name of the cookie to set the value of.
	     * @param value The value of the cookie to be set.
	     */
	    function setJson(name, value, options) {
	      Cookies.set(name, JSON.stringify(value), options);
	    }
	    Cookies.setJson = setJson;
	    /**
	     * Deletes a cookie named {@link name}.
	     * @param name The name of the cookie to delete.
	     */
	    function remove(name) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var pieces = ["".concat(name, "=")];
	      if ("path" in options) {
	        pieces.push("path=".concat(options.path));
	      }
	      if ("domain" in options) {
	        pieces.push("domain=".concat(options.domain));
	      }
	      if ("secure" in options && options.secure) {
	        pieces.push("secure");
	      }
	      if ("sameSite" in options) {
	        pieces.push("samesite=".concat(options.sameSite));
	      }
	      pieces.push("max-age=0");
	      document.cookie = pieces.join("; ");
	    }
	    Cookies.remove = remove;
	  })(exports.Cookies || (exports.Cookies = {}));
	  var Loader;
	  (function (Loader) {
	    Loader.dom = {
	      contentTypes: ["text/html", "text/xml", "application/xml", "application/xhtml+xml", "image/svg+xml"],
	      load: function () {
	        var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(response) {
	          var text, contentType, mimeType, match, _match, parser;
	          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
	            while (1) switch (_context7.prev = _context7.next) {
	              case 0:
	                _context7.next = 2;
	                return response.text();
	              case 2:
	                text = _context7.sent;
	                contentType = response.headers.get("Content-Type");
	                if (contentType === null) {
	                  mimeType = "text/html";
	                } else {
	                  match = contentType.match(shared$1.RegularExpression.mimeType);
	                  shared$1.Data.assert(match !== null, "Failed to parse Content-Type header \"".concat(contentType, "\"."));
	                  _match = _slicedToArray(match, 1);
	                  mimeType = _match[0];
	                }
	                parser = new DOMParser();
	                return _context7.abrupt("return", parser.parseFromString(text, mimeType));
	              case 7:
	              case "end":
	                return _context7.stop();
	            }
	          }, _callee7);
	        }));
	        function load(_x11) {
	          return _load.apply(this, arguments);
	        }
	        return load;
	      }()
	    };
	    Loader.bitmap = {
	      contentTypes: ["image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/tiff", "image/webp"],
	      load: function load(response) {
	        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
	          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
	            while (1) switch (_context8.prev = _context8.next) {
	              case 0:
	                _context8.t0 = window;
	                _context8.next = 3;
	                return response.blob();
	              case 3:
	                _context8.t1 = _context8.sent;
	                _context8.next = 6;
	                return _context8.t0.createImageBitmap.call(_context8.t0, _context8.t1);
	              case 6:
	                return _context8.abrupt("return", _context8.sent);
	              case 7:
	              case "end":
	                return _context8.stop();
	            }
	          }, _callee8);
	        }))();
	      }
	    };
	    Loader.json = {
	      contentTypes: ["application/json"],
	      load: function load(response) {
	        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
	          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
	            while (1) switch (_context9.prev = _context9.next) {
	              case 0:
	                _context9.next = 2;
	                return response.json();
	              case 2:
	                return _context9.abrupt("return", _context9.sent);
	              case 3:
	              case "end":
	                return _context9.stop();
	            }
	          }, _callee9);
	        }))();
	      }
	    };
	    Loader.text = {
	      contentTypes: ["text/css", "text/csv", "text/plain"],
	      load: function load(response) {
	        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
	          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
	            while (1) switch (_context10.prev = _context10.next) {
	              case 0:
	                _context10.next = 2;
	                return response.text();
	              case 2:
	                return _context10.abrupt("return", _context10.sent);
	              case 3:
	              case "end":
	                return _context10.stop();
	            }
	          }, _callee10);
	        }))();
	      }
	    };
	  })(Loader || (Loader = {}));
	  var AssetManager = /*#__PURE__*/function () {
	    function AssetManager() {
	      _classCallCheck(this, AssetManager);
	      _defineProperty(this, "queue", void 0);
	      _defineProperty(this, "resourceLoaders", void 0);
	      _defineProperty(this, "_resources", void 0);
	      this.queue = [];
	      this.resourceLoaders = [Loader.bitmap, Loader.dom, Loader.json, Loader.text];
	      this._resources = {};
	    }
	    _createClass(AssetManager, [{
	      key: "register",
	      value: function register(resourceLoader) {
	        this.resourceLoaders.push(resourceLoader);
	      }
	    }, {
	      key: "add",
	      value: function add(name, source, contentType) {
	        this.queue.push({
	          name: name,
	          source: source,
	          contentType: contentType
	        });
	      }
	    }, {
	      key: "load",
	      value: function () {
	        var _load2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resourceLoadedCallback) {
	          var _this = this;
	          var tasks, _loop;
	          return _regeneratorRuntime().wrap(function _callee12$(_context13) {
	            while (1) switch (_context13.prev = _context13.next) {
	              case 0:
	                tasks = [];
	                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
	                  var resourceDescriptor;
	                  return _regeneratorRuntime().wrap(function _loop$(_context12) {
	                    while (1) switch (_context12.prev = _context12.next) {
	                      case 0:
	                        resourceDescriptor = _this.queue.pop();
	                        tasks.push(new Promise( /*#__PURE__*/function () {
	                          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
	                            var response, contentType, headerContentType, match, _match2, loader, definedContentType, resource;
	                            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
	                              while (1) switch (_context11.prev = _context11.next) {
	                                case 0:
	                                  _context11.prev = 0;
	                                  _context11.next = 3;
	                                  return fetch(resourceDescriptor.source);
	                                case 3:
	                                  response = _context11.sent;
	                                  if (!(response.status !== 200)) {
	                                    _context11.next = 6;
	                                    break;
	                                  }
	                                  throw shared$1.Error.Http.getFromResponse(response);
	                                case 6:
	                                  contentType = resourceDescriptor.contentType;
	                                  if (contentType === undefined && response.headers.has("Content-Type")) {
	                                    headerContentType = response.headers.get("Content-Type");
	                                    match = headerContentType.match(shared$1.RegularExpression.mimeType);
	                                    if (match !== null) {
	                                      _match2 = _slicedToArray(match, 1);
	                                      contentType = _match2[0];
	                                    }
	                                  }
	                                  loader = undefined;
	                                  if (contentType !== undefined) {
	                                    definedContentType = contentType;
	                                    loader = _this.resourceLoaders.find(function (loader) {
	                                      return loader.contentTypes.includes(definedContentType);
	                                    });
	                                  }
	                                  shared$1.Data.assert(loader !== undefined, "No loaders found for content type \"".concat(contentType, "\"."));
	                                  resource = undefined;
	                                  _context11.prev = 12;
	                                  _context11.next = 15;
	                                  return loader.load(response);
	                                case 15:
	                                  resource = _context11.sent;
	                                  _context11.next = 21;
	                                  break;
	                                case 18:
	                                  _context11.prev = 18;
	                                  _context11.t0 = _context11["catch"](12);
	                                  console.warn(_context11.t0);
	                                case 21:
	                                  if (resourceLoadedCallback !== undefined) {
	                                    resourceLoadedCallback(resource, resourceDescriptor);
	                                  }
	                                  _this._resources[resourceDescriptor.name] = resource;
	                                  resolve(resource);
	                                  _context11.next = 29;
	                                  break;
	                                case 26:
	                                  _context11.prev = 26;
	                                  _context11.t1 = _context11["catch"](0);
	                                  reject(_context11.t1);
	                                case 29:
	                                case "end":
	                                  return _context11.stop();
	                              }
	                            }, _callee11, null, [[0, 26], [12, 18]]);
	                          }));
	                          return function (_x13, _x14) {
	                            return _ref.apply(this, arguments);
	                          };
	                        }()));
	                      case 2:
	                      case "end":
	                        return _context12.stop();
	                    }
	                  }, _loop);
	                });
	              case 2:
	                if (!(this.queue.length > 0)) {
	                  _context13.next = 6;
	                  break;
	                }
	                return _context13.delegateYield(_loop(), "t0", 4);
	              case 4:
	                _context13.next = 2;
	                break;
	              case 6:
	                _context13.next = 8;
	                return Promise.all(tasks);
	              case 8:
	                return _context13.abrupt("return", _context13.sent);
	              case 9:
	              case "end":
	                return _context13.stop();
	            }
	          }, _callee12, this);
	        }));
	        function load(_x12) {
	          return _load2.apply(this, arguments);
	        }
	        return load;
	      }()
	    }, {
	      key: "get",
	      value: function get(name) {
	        if (name in this._resources) {
	          return this._resources[name];
	        } else {
	          return undefined;
	        }
	      }
	    }, {
	      key: "getAsserted",
	      value: function getAsserted(name) {
	        var value = this.get(name);
	        shared$1.Data.assert(value !== undefined, "Failed to get asset named \"".concat(name, "\" as it is not loaded."));
	        return value;
	      }
	    }]);
	    return AssetManager;
	  }();
	  exports.AssetManager = AssetManager;
	})(client);

	class Renderer {
	    static DEFAULT_OPTIONS = { clearColor: shared.Color.BLACK };
	    _context;
	    _device;
	    _preferredCanvasFormat;
	    clearColor;
	    constructor(options = Renderer.DEFAULT_OPTIONS) {
	        this._preferredCanvasFormat = navigator.gpu.getPreferredCanvasFormat();
	        this.clearColor = options.clearColor;
	    }
	    async initialize(context) {
	        shared.Data.assert(navigator.gpu !== undefined, "WebGPU is not supported.");
	        const adapter = await navigator.gpu.requestAdapter();
	        shared.Data.assert(adapter !== null, "Failed to request WebGPU adapter.");
	        this._device = await adapter.requestDevice();
	        this._context = context;
	        context.configure({
	            device: this._device,
	            format: navigator.gpu.getPreferredCanvasFormat(),
	            alphaMode: "premultiplied"
	        });
	    }
	    get underlying() {
	        return new Proxy(this, {
	            get(target, key) {
	                key = key.toString();
	                const value = target[`_${key}`];
	                shared.Data.assert(value !== undefined, `Missing underlying WebGPU resource "${key}".`);
	                return value;
	            }
	        });
	    }
	    get aspectRatio() {
	        shared.Data.assert(this._context !== undefined, "Missing context.");
	        return this._context.canvas.width / this._context.canvas.height;
	    }
	}

	class StateManager {
	    _stateMap;
	    _currentState;
	    _loaded;
	    constructor() {
	        this._stateMap = {};
	        this._currentState = undefined;
	        this._loaded = false;
	    }
	    register(state) {
	        this._stateMap[state.name] = state;
	    }
	    unregister(stateName) {
	        const state = this._stateMap[stateName];
	        delete this._stateMap[stateName];
	        return state;
	    }
	    getState(stateName) {
	        if (stateName in this._stateMap) {
	            return this._stateMap[stateName];
	        }
	        else {
	            return undefined;
	        }
	    }
	    update(deltaTime) {
	        if (this._currentState !== undefined) {
	            this._currentState.update(deltaTime);
	        }
	    }
	    async change(stateName) {
	        const newState = this.getState(stateName);
	        shared.Data.assert(newState !== undefined, `Failed to find state named "${stateName}".`);
	        const oldState = this._currentState;
	        if (oldState !== undefined) {
	            oldState.exit(newState);
	        }
	        this._currentState = newState;
	        if (!newState.loaded && this._loaded) {
	            await newState.load();
	        }
	        newState.enter(oldState);
	        if (oldState !== undefined && oldState.automaticallyUnload) {
	            oldState.unload();
	        }
	    }
	    async load() {
	        const tasks = [];
	        for (const stateName in this._stateMap) {
	            const state = this._stateMap[stateName];
	            if (!state.loaded && state.loadImmediately) {
	                tasks.push(state.load());
	            }
	        }
	        await Promise.all(tasks);
	        this._loaded = true;
	    }
	}

	class Application {
	    canvas;
	    clock;
	    assets;
	    states;
	    renderer;
	    _running;
	    _gameTask;
	    constructor(canvas) {
	        this.canvas = canvas;
	        this.clock = new shared.Clock();
	        this.assets = new client.AssetManager();
	        this.states = new StateManager();
	        this.renderer = new Renderer({ clearColor: shared.Color.from(0x000000FF) });
	        this._running = false;
	    }
	    async initialize() {
	        const context = this.canvas.getContext("webgpu");
	        shared.Data.assert(context !== null, "Failed to get WebGPU canvas context. It seems your browser does not support this feature!");
	        await this.renderer.initialize(context);
	    }
	    async terminate() { }
	    async start() {
	        await this.states.load();
	        await this.initialize();
	        this._running = true;
	        this._gameTask = new Promise((resolve) => {
	            let lastAnimationFrameTime = performance.now();
	            const receiveFrame = (currentTime) => {
	                if (this._running) {
	                    const deltaTime = currentTime - lastAnimationFrameTime;
	                    this.update(deltaTime);
	                    lastAnimationFrameTime = currentTime;
	                    window.requestAnimationFrame(receiveFrame);
	                }
	                else {
	                    resolve();
	                }
	            };
	            window.requestAnimationFrame(receiveFrame);
	        });
	        await this.terminate();
	    }
	    async stop() {
	        this._running = false;
	        if (this._gameTask !== undefined) {
	            await this._gameTask;
	        }
	    }
	    update(deltaTime) {
	        this.states.update(deltaTime);
	    }
	    get running() {
	        return this._running;
	    }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
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
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}
	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}
	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}
	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;
	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}
	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct()) {
	    _construct = Reflect.construct.bind();
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }
	  return _construct.apply(null, arguments);
	}
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}
	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}
	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();
	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	      result;
	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;
	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }
	    return _possibleConstructorReturn(this, result);
	  };
	}
	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
	function _toPrimitive(input, hint) {
	  if (typeof input !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (typeof res !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return typeof key === "symbol" ? key : String(key);
	}

	var build = {exports: {}};

	(function (module, exports) {
	  (function (global, factory) {
	    factory(exports) ;
	  })(commonjsGlobal, function (exports) {

	    var Matrix = /*#__PURE__*/function () {
	      function Matrix() {
	        _classCallCheck(this, Matrix);
	        _defineProperty(this, "data", void 0);
	        _defineProperty(this, "size", void 0);
	        for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
	          data[_key] = arguments[_key];
	        }
	        this.data = data;
	        this.size = Math.sqrt(data.length);
	      }
	      _createClass(Matrix, [{
	        key: "add",
	        value: function add(value) {
	          var _this = this;
	          var data = this._tuple(value);
	          this.data.map(function (_, index) {
	            return _this.data[index] += data[index];
	          });
	          return this;
	        }
	      }, {
	        key: "subtract",
	        value: function subtract(value) {
	          var _this2 = this;
	          var data = this._tuple(value);
	          this.data.forEach(function (_, index) {
	            return _this2.data[index] -= data[index];
	          });
	          return this;
	        }
	      }, {
	        key: "multiply",
	        value: function multiply(value) {
	          var _this3 = this;
	          var data = this._tuple(value);
	          this.data.forEach(function (_, index) {
	            return _this3.data[index] *= data[index];
	          });
	          return this;
	        }
	      }, {
	        key: "divide",
	        value: function divide(value) {
	          var _this4 = this;
	          var data = this._tuple(value);
	          this.data.forEach(function (_, index) {
	            return _this4.data[index] /= data[index];
	          });
	          return this;
	        }
	      }, {
	        key: "transpose",
	        value: function transpose() {
	          var matrix = this.clone();
	          for (var i = 0; i < this.size; i++) {
	            for (var j = 0; j < this.size; j++) {
	              matrix.data[i * this.size + j] = this.data[j];
	            }
	          }
	          this.data = matrix.data;
	        }
	      }, {
	        key: "clone",
	        value: function clone() {
	          return _construct(Matrix, _toConsumableArray(this.data));
	        }
	      }, {
	        key: "_tuple",
	        value: function _tuple(value) {
	          if (typeof value === "number") {
	            return new Array(this.size).fill(value);
	          } else if (value instanceof Matrix) {
	            return value.data;
	          } else {
	            return value;
	          }
	        }
	      }]);
	      return Matrix;
	    }();
	    var Matrix2 = /*#__PURE__*/function (_Matrix) {
	      _inherits(Matrix2, _Matrix);
	      var _super = _createSuper(Matrix2);
	      function Matrix2() {
	        _classCallCheck(this, Matrix2);
	        return _super.apply(this, arguments);
	      }
	      return _createClass(Matrix2);
	    }(Matrix);
	    var Matrix3 = /*#__PURE__*/function (_Matrix2) {
	      _inherits(Matrix3, _Matrix2);
	      var _super2 = _createSuper(Matrix3);
	      function Matrix3() {
	        _classCallCheck(this, Matrix3);
	        return _super2.apply(this, arguments);
	      }
	      return _createClass(Matrix3);
	    }(Matrix);
	    var Matrix4 = /*#__PURE__*/function (_Matrix3) {
	      _inherits(Matrix4, _Matrix3);
	      var _super3 = _createSuper(Matrix4);
	      function Matrix4() {
	        _classCallCheck(this, Matrix4);
	        return _super3.apply(this, arguments);
	      }
	      return _createClass(Matrix4);
	    }(Matrix);
	    exports.MatrixToolbox = void 0;
	    (function (MatrixToolbox) {
	      function tuple(size, source) {
	        if (typeof source === "number") {
	          return new Array(size).fill(source);
	        } else if (source instanceof Matrix) {
	          return source.data;
	        } else {
	          return source;
	        }
	      }
	      MatrixToolbox.tuple = tuple;
	      function fromSource(size, source) {
	        var tuple = MatrixToolbox.tuple(size, source);
	        switch (size) {
	          case 2:
	            return _construct(Matrix2, _toConsumableArray(tuple));
	          case 3:
	            return _construct(Matrix3, _toConsumableArray(tuple));
	          case 4:
	            return _construct(Matrix4, _toConsumableArray(tuple));
	          default:
	            return _construct(Matrix, _toConsumableArray(tuple));
	        }
	      }
	      MatrixToolbox.fromSource = fromSource;
	      (function (Projection) {
	        function orthographic(left, right, bottom, top, near, far) {
	          var width = right - left;
	          var height = top - bottom;
	          var depth = far - near;
	          var translationX = -(right + left) / width;
	          var translationY = -(top + bottom) / height;
	          var translationZ = -(far + near) / depth;
	          return new Matrix4(2 / width, 0, 0, translationX, 0, 2 / height, 0, translationY, 0, 0, -2 / depth, translationZ, 0, 0, 0, 1);
	        }
	        Projection.orthographic = orthographic;
	      })(MatrixToolbox.Projection || (MatrixToolbox.Projection = {}));
	      (function (Transformation) {
	        function translate(translationX, translationY, translationZ) {
	          return new Matrix4(1, 0, 0, translationX, 0, 1, 0, translationY, 0, 0, 1, translationZ, 0, 0, 0, 1);
	        }
	        Transformation.translate = translate;
	        function rotate(angleInDegrees, axisX, axisY, axisZ) {
	          var angleInRadians = angleInDegrees * globalThis.Math.PI / 180;
	          var cosAngle = globalThis.Math.cos(angleInRadians);
	          var sinAngle = globalThis.Math.sin(angleInRadians);
	          var oneMinusCos = 1 - cosAngle;
	          var tx = oneMinusCos * axisX;
	          var ty = oneMinusCos * axisY;
	          var tz = oneMinusCos * axisZ;
	          var txy = tx * axisY;
	          var txz = tx * axisZ;
	          var tyz = ty * axisZ;
	          var sinX = sinAngle * axisX;
	          var sinY = sinAngle * axisY;
	          var sinZ = sinAngle * axisZ;
	          return new Matrix4(tx * axisX + cosAngle, txy - sinZ, txz + sinY, 0, txy + sinZ, ty * axisY + cosAngle, tyz - sinX, 0, txz - sinY, tyz + sinX, tz * axisZ + cosAngle, 0, 0, 0, 0, 1);
	        }
	        Transformation.rotate = rotate;
	        function scale(scaleX, scaleY, scaleZ) {
	          return new Matrix4(scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, scaleZ, 0, 0, 0, 0, 1);
	        }
	        Transformation.scale = scale;
	      })(MatrixToolbox.Transformation || (MatrixToolbox.Transformation = {}));
	    })(exports.MatrixToolbox || (exports.MatrixToolbox = {}));
	    var Vector = /*#__PURE__*/function () {
	      function Vector() {
	        _classCallCheck(this, Vector);
	        _defineProperty(this, "components", void 0);
	        for (var _len2 = arguments.length, components = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          components[_key2] = arguments[_key2];
	        }
	        this.components = components;
	      }
	      _createClass(Vector, [{
	        key: "add",
	        value: function add(value) {
	          return this.operation(value, function (a, b) {
	            return a + b;
	          });
	        }
	      }, {
	        key: "subtract",
	        value: function subtract(value) {
	          return this.operation(value, function (a, b) {
	            return a - b;
	          });
	        }
	      }, {
	        key: "multiply",
	        value: function multiply(value) {
	          return this.operation(value, function (a, b) {
	            return a * b;
	          });
	        }
	      }, {
	        key: "divide",
	        value: function divide(value) {
	          return this.operation(value, function (a, b) {
	            return a / b;
	          });
	        }
	      }, {
	        key: "set",
	        value: function set(value) {
	          return this.operation(value, function (_, b) {
	            return b;
	          });
	        }
	      }, {
	        key: "normalize",
	        value: function normalize() {
	          return this.operation(this.getMagnitude(), function (a, b) {
	            return a / b;
	          });
	        }
	      }, {
	        key: "dot",
	        value: function dot(value) {
	          return this.clone().multiply(value).getSum();
	        }
	      }, {
	        key: "distance",
	        value: function distance(vector) {
	          var difference = this.clone().subtract(vector);
	          return Math.sqrt(difference.multiply(difference).getSum());
	        }
	      }, {
	        key: "clone",
	        value: function clone() {
	          return _construct(Vector, _toConsumableArray(this._components));
	        }
	      }, {
	        key: "getSum",
	        value: function getSum() {
	          return this._components.reduce(function (sum, value) {
	            return sum + value;
	          });
	        }
	      }, {
	        key: "getMagnitude",
	        value: function getMagnitude() {
	          return this.distance(this.clone().set(0));
	        }
	      }, {
	        key: "operation",
	        value: function operation(value, _operation) {
	          if (typeof value === "number") {
	            for (var i = 0; i < this._components.length; i++) {
	              this._components[i] = _operation(this._components[i], value);
	            }
	          } else if (value instanceof Vector) {
	            for (var _i = 0; _i < this._components.length; _i++) {
	              this._components[_i] = _operation(this._components[_i], value._components[_i]);
	            }
	          } else {
	            for (var _i2 = 0; _i2 < this._components.length; _i2++) {
	              this._components[_i2] = _operation(this._components[_i2], value[_i2]);
	            }
	          }
	          return this;
	        }
	      }, {
	        key: "toString",
	        value: function toString() {
	          return "[ ".concat(this._components.join(", "), " ]");
	        }
	      }, {
	        key: "_components",
	        get: function get() {
	          return this.components;
	        }
	      }, {
	        key: "size",
	        get: function get() {
	          return this.components.length;
	        }
	      }]);
	      return Vector;
	    }();
	    var Vector2 = /*#__PURE__*/function (_Vector) {
	      _inherits(Vector2, _Vector);
	      var _super4 = _createSuper(Vector2);
	      function Vector2() {
	        _classCallCheck(this, Vector2);
	        return _super4.apply(this, arguments);
	      }
	      _createClass(Vector2, [{
	        key: "x",
	        get: function get() {
	          return this.components[0];
	        },
	        set: function set(value) {
	          this.components[0] = value;
	        }
	      }, {
	        key: "y",
	        get: function get() {
	          return this.components[1];
	        },
	        set: function set(value) {
	          this.components[1] = value;
	        }
	      }, {
	        key: "width",
	        get: function get() {
	          return this.x;
	        },
	        set: function set(value) {
	          this.x = value;
	        }
	      }, {
	        key: "height",
	        get: function get() {
	          return this.y;
	        },
	        set: function set(value) {
	          this.y = value;
	        }
	      }]);
	      return Vector2;
	    }(Vector);
	    var Vector3 = /*#__PURE__*/function (_Vector2) {
	      _inherits(Vector3, _Vector2);
	      var _super5 = _createSuper(Vector3);
	      function Vector3() {
	        _classCallCheck(this, Vector3);
	        return _super5.apply(this, arguments);
	      }
	      _createClass(Vector3, [{
	        key: "x",
	        get: function get() {
	          return this.components[0];
	        },
	        set: function set(value) {
	          this.components[0] = value;
	        }
	      }, {
	        key: "y",
	        get: function get() {
	          return this.components[1];
	        },
	        set: function set(value) {
	          this.components[1] = value;
	        }
	      }, {
	        key: "z",
	        get: function get() {
	          return this.components[2];
	        },
	        set: function set(value) {
	          this.components[2] = value;
	        }
	      }, {
	        key: "width",
	        get: function get() {
	          return this.x;
	        },
	        set: function set(value) {
	          this.x = value;
	        }
	      }, {
	        key: "height",
	        get: function get() {
	          return this.y;
	        },
	        set: function set(value) {
	          this.y = value;
	        }
	      }, {
	        key: "depth",
	        get: function get() {
	          return this.z;
	        },
	        set: function set(value) {
	          this.z = value;
	        }
	      }, {
	        key: "cross",
	        value: function cross(vector) {
	          return this.set([this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x]);
	        }
	      }]);
	      return Vector3;
	    }(Vector);
	    var Vector4 = /*#__PURE__*/function (_Vector3) {
	      _inherits(Vector4, _Vector3);
	      var _super6 = _createSuper(Vector4);
	      function Vector4() {
	        _classCallCheck(this, Vector4);
	        return _super6.apply(this, arguments);
	      }
	      _createClass(Vector4, [{
	        key: "x",
	        get: function get() {
	          return this.components[0];
	        },
	        set: function set(value) {
	          this.components[0] = value;
	        }
	      }, {
	        key: "y",
	        get: function get() {
	          return this.components[1];
	        },
	        set: function set(value) {
	          this.components[1] = value;
	        }
	      }, {
	        key: "z",
	        get: function get() {
	          return this.components[2];
	        },
	        set: function set(value) {
	          this.components[2] = value;
	        }
	      }, {
	        key: "w",
	        get: function get() {
	          return this.components[3];
	        },
	        set: function set(value) {
	          this.components[3] = value;
	        }
	      }, {
	        key: "width",
	        get: function get() {
	          return this.z;
	        },
	        set: function set(value) {
	          this.z = value;
	        }
	      }, {
	        key: "height",
	        get: function get() {
	          return this.w;
	        },
	        set: function set(value) {
	          this.w = value;
	        }
	      }]);
	      return Vector4;
	    }(Vector);
	    exports.VectorToolbox = void 0;
	    (function (VectorToolbox) {
	      function tuple(size, source) {
	        if (typeof source === "number") {
	          return new Array(size).fill(source);
	        } else if (source instanceof Vector) {
	          return source.components;
	        } else {
	          return source;
	        }
	      }
	      VectorToolbox.tuple = tuple;
	      function fromSource(size, source) {
	        var tuple = VectorToolbox.tuple(size, source);
	        switch (size) {
	          case 2:
	            return _construct(Vector2, _toConsumableArray(tuple));
	          case 3:
	            return _construct(Vector3, _toConsumableArray(tuple));
	          case 4:
	            return _construct(Vector4, _toConsumableArray(tuple));
	          default:
	            return _construct(Vector, _toConsumableArray(tuple));
	        }
	      }
	      VectorToolbox.fromSource = fromSource;
	    })(exports.VectorToolbox || (exports.VectorToolbox = {}));
	    exports.Toolbox = void 0;
	    (function (Toolbox) {
	      Toolbox.Vector = exports.VectorToolbox;
	      Toolbox.Matrix = exports.MatrixToolbox;
	    })(exports.Toolbox || (exports.Toolbox = {}));
	    exports.Matrix = Matrix;
	    exports.Matrix2 = Matrix2;
	    exports.Matrix3 = Matrix3;
	    exports.Matrix4 = Matrix4;
	    exports.Vector = Vector;
	    exports.Vector2 = Vector2;
	    exports.Vector3 = Vector3;
	    exports.Vector4 = Vector4;
	  });
	})(build, build.exports);
	var buildExports = build.exports;

	class Texture {
	    renderer;
	    dimensions;
	    _handle;
	    /**
	     * @param renderer
	     * @param usage @see {@link Texture.USAGE}
	     * @param dimensions
	     */
	    constructor(renderer, usage, dimensions) {
	        this.dimensions = buildExports.VectorToolbox.fromSource(2, dimensions);
	        this.renderer = renderer;
	        this._handle = renderer.underlying.device.createTexture({
	            size: this.dimensions,
	            format: "rgba8unorm",
	            usage
	        });
	    }
	    static USAGE = {
	        COPY_SOURCE: GPUTextureUsage.COPY_SRC,
	        COPY_DESTINATION: GPUTextureUsage.COPY_DST,
	        TEXTURE_BINDING: GPUTextureUsage.TEXTURE_BINDING,
	        STORAGE_BINDING: GPUTextureUsage.STORAGE_BINDING,
	        RENDER_ATTACHMENT: GPUTextureUsage.RENDER_ATTACHMENT
	    };
	    static create(renderer, usage, source) {
	        const texture = new Texture(renderer, usage, [source.width, source.height]);
	        renderer.underlying.device.queue.copyExternalImageToTexture({ source }, { texture: texture._handle }, texture.dimensions);
	        return texture;
	    }
	}

	class Buffer {
	    renderer;
	    size;
	    label;
	    _handle;
	    /**
	     * @param renderer
	     * @param usage @see {@link Buffer.USAGE}
	     * @param size
	     */
	    constructor(renderer, usage, size, label) {
	        this.renderer = renderer;
	        this.size = size;
	        this.label = label;
	        this._handle = renderer.underlying.device.createBuffer({ label, size, usage: usage | GPUBufferUsage.COPY_DST });
	    }
	    write(sourceData, destinationOffset = 0, sourceOffset = 0, size) {
	        if (Array.isArray(sourceData)) {
	            sourceData = new Float32Array(sourceData);
	        }
	        if (size === undefined) {
	            size = "length" in sourceData && typeof sourceData.length === "number" ? sourceData.length : sourceData.byteLength;
	        }
	        this.renderer.underlying.device.queue.writeBuffer(this._handle, destinationOffset, sourceData, sourceOffset, size);
	    }
	    static create(renderer, usage, source, label) {
	        const buffer = new Buffer(renderer, usage, source.byteLength, label);
	        buffer.write(source, 0, 0, source.length);
	        return buffer;
	    }
	    static USAGE = {
	        MAP_READ: GPUBufferUsage.MAP_READ,
	        MAP_WRITE: GPUBufferUsage.MAP_WRITE,
	        COPY_SOURCE: GPUBufferUsage.COPY_SRC,
	        COPY_DESTINATION: GPUBufferUsage.COPY_DST,
	        INDEX: GPUBufferUsage.INDEX,
	        VERTEX: GPUBufferUsage.VERTEX,
	        UNIFORM: GPUBufferUsage.UNIFORM,
	        STORAGE: GPUBufferUsage.STORAGE,
	        INDIRECT: GPUBufferUsage.INDIRECT,
	        QUERY_RESOLVE: GPUBufferUsage.QUERY_RESOLVE
	    };
	}

	class TextureSampler {
	    _handle;
	    constructor(renderer, minificationFilter, magnificationFilter) {
	        this._handle = renderer.underlying.device.createSampler({
	            minFilter: minificationFilter,
	            magFilter: magnificationFilter
	        });
	    }
	}

	class BindGroup {
	    label;
	    index;
	    pipeline;
	    _handle;
	    constructor(pipeline, label, index, resources) {
	        this.pipeline = pipeline;
	        this.label = label;
	        this.index = index;
	        this._handle = pipeline.renderer.underlying.device.createBindGroup({
	            label: label,
	            layout: pipeline["_handle"].getBindGroupLayout(index),
	            entries: resources.map((resource, index) => ({
	                binding: index,
	                resource: this.getUnderlyingResource(resource)
	            }))
	        });
	    }
	    getUnderlyingResource(resource) {
	        if (resource instanceof TextureSampler) {
	            return resource["_handle"];
	        }
	        else if (resource instanceof Texture) {
	            return resource["_handle"].createView();
	        }
	        else if (resource instanceof Buffer) {
	            return { label: resource.label, buffer: resource["_handle"] };
	        }
	        else {
	            throw new shared.Error.Fatal("Unable to get underlying resource while attempting to bind.");
	        }
	    }
	}

	class RenderPassEncoder {
	    _handle;
	    constructor(renderPassEncoder) {
	        this._handle = renderPassEncoder;
	    }
	    render(pipeline, bindGroup, model) {
	        this._handle.setPipeline(pipeline["_handle"]);
	        this._handle.setBindGroup(0, bindGroup["_handle"]);
	        this._handle.setVertexBuffer(0, model.vertexBuffer["_handle"]);
	        if (model.indexBuffer === undefined) {
	            this._handle.draw(model.vertexBuffer.size);
	        }
	        else {
	            this._handle.setIndexBuffer(model.indexBuffer["_handle"], "uint16");
	            this._handle.drawIndexed(model.indexBuffer.size);
	        }
	    }
	    static create(renderPassEncoder) {
	        return new RenderPassEncoder(renderPassEncoder);
	    }
	}

	class CommandEncoder {
	    renderer;
	    _handle;
	    constructor(renderer) {
	        this.renderer = renderer;
	        this._handle = renderer.underlying.device.createCommandEncoder();
	    }
	    beginRenderPass(clearColor, texture) {
	        const gpuTexture = texture === undefined ? this.renderer.underlying.context.getCurrentTexture() : texture["_handle"];
	        const view = gpuTexture.createView();
	        return RenderPassEncoder["create"](this._handle.beginRenderPass({
	            colorAttachments: [{
	                    clearValue: {
	                        r: clearColor.red,
	                        g: clearColor.green,
	                        b: clearColor.blue,
	                        a: clearColor.alpha
	                    },
	                    loadOp: "clear",
	                    storeOp: "store",
	                    view
	                }]
	        }));
	    }
	    endRenderPass(renderPassEncoder) {
	        renderPassEncoder["_handle"].end();
	    }
	    submit() {
	        this.renderer.underlying.device.queue.submit([this._handle.finish()]);
	    }
	}

	class Shader {
	    renderer;
	    entryPoint;
	    _handle;
	    constructor(renderer, sourceCode, entryPoint) {
	        this.renderer = renderer;
	        this.entryPoint = entryPoint;
	        this._handle = renderer.underlying.device.createShaderModule({ code: sourceCode });
	    }
	}

	class FragmentShader extends Shader {
	    createFragmentState() {
	        return {
	            module: this["_handle"],
	            entryPoint: this.entryPoint,
	            targets: [{ format: this.renderer.underlying.preferredCanvasFormat }]
	        };
	    }
	}

	class Model {
	    vertexBuffer;
	    indexBuffer;
	    constructor(vertexBuffer, indexBuffer) {
	        this.vertexBuffer = vertexBuffer;
	        this.indexBuffer = indexBuffer;
	    }
	}

	class Pipeline {
	    renderer;
	    vertexShader;
	    fragmentShader;
	    _handle;
	    constructor(renderer, vertexShader, fragmentShader) {
	        this.renderer = renderer;
	        this.vertexShader = vertexShader;
	        this.fragmentShader = fragmentShader;
	        this._handle = renderer.underlying.device.createRenderPipeline({
	            vertex: vertexShader.createVertexState(),
	            fragment: fragmentShader.createFragmentState(),
	            primitive: {
	                topology: "triangle-list"
	            },
	            layout: "auto"
	        });
	    }
	    render(buffer, bindGroups) {
	        const commandEncoder = this.renderer.underlying.device.createCommandEncoder();
	        const texture = this.renderer.underlying.context.getCurrentTexture();
	        const renderPassEncoder = commandEncoder.beginRenderPass({
	            colorAttachments: [
	                {
	                    clearValue: {
	                        r: this.renderer.clearColor.red,
	                        g: this.renderer.clearColor.green,
	                        b: this.renderer.clearColor.blue,
	                        a: this.renderer.clearColor.alpha
	                    },
	                    loadOp: "clear",
	                    storeOp: "store",
	                    view: texture.createView()
	                }
	            ]
	        });
	        renderPassEncoder.setPipeline(this._handle);
	        renderPassEncoder.setVertexBuffer(0, buffer["_handle"]);
	        for (const bindGroup of bindGroups) {
	            renderPassEncoder.setBindGroup(bindGroup.index, bindGroup["_handle"]);
	        }
	        renderPassEncoder.draw(3);
	        renderPassEncoder.end();
	        const commandBuffer = commandEncoder.finish();
	        this.renderer.underlying.device.queue.submit([commandBuffer]);
	    }
	}

	class Uniform {
	    constructor(bindGroup) {
	    }
	}

	class VertexShader extends Shader {
	    static FORMAT_REGEX = /(u|s)?(int|norm|float)([0-9]+)(?:x([0-9]+))?/;
	    _attributes;
	    _stride;
	    constructor(renderer, sourceCode, entryPoint) {
	        super(renderer, sourceCode, entryPoint);
	        this._attributes = {};
	        this._stride = 0;
	    }
	    addAttribute(name, format) {
	        const location = Object.keys(this._attributes).length;
	        const match = format.match(VertexShader.FORMAT_REGEX);
	        shared.Data.assert(match !== null, `Failed to parse vertex format "${format}".`);
	        const size = parseInt(match[3]) / 8;
	        const count = parseInt(match[4]);
	        this._attributes[name] = {
	            shaderLocation: location,
	            format: format,
	            offset: this._stride
	        };
	        this._stride += size * count;
	        return location;
	    }
	    get stride() { return this._stride; }
	    get attributes() { return Object.values(this._attributes); }
	    createVertexState() {
	        return {
	            module: this["_handle"],
	            entryPoint: this.entryPoint,
	            buffers: [
	                {
	                    attributes: this.attributes,
	                    arrayStride: this.stride,
	                    stepMode: "vertex",
	                },
	            ]
	        };
	    }
	}

	/**
	 * Controls the animation of a spritesheet by providing dynamic texture coordinates.
	 */
	class Animator {
	    sheetSize;
	    spriteSize;
	    spriteGrid;
	    _frameTime;
	    _remainingFrameTime;
	    _currentSpriteIndex = 0;
	    _animations;
	    _currentAnimationName;
	    /**
	     * @param sheetSize The size of the spritesheet to animate in pixel coordinates.
	     * @param spriteSize The size of a single sprite in pixel coordinates.
	     * @param animations A mapping of names to {@link AnimationMeta}s.
	     * @see {@link AnimationMap}.
	     */
	    constructor(sheetSize, spriteSize, animations) {
	        this.sheetSize = buildExports.VectorToolbox.fromSource(2, sheetSize);
	        this.spriteSize = buildExports.VectorToolbox.fromSource(2, spriteSize);
	        shared.Data.assert(this.sheetSize.width % this.spriteSize.width === 0, `Sprites of width ${this.spriteSize.width} do not pack nicely into a sprite sheet of width ${this.sheetSize.width}!`);
	        shared.Data.assert(this.sheetSize.height % this.spriteSize.height === 0, `Sprites of height ${this.spriteSize.height} do not pack nicely into a sprite sheet of height ${this.sheetSize.height}!`);
	        shared.Data.assert(Object.keys(animations).length > 0, `Attempted to create an animator without any animations supplied!`);
	        this.spriteGrid = new buildExports.Vector2(this.sheetSize.width / this.spriteSize.width, this.sheetSize.height / this.spriteSize.height);
	        this._frameTime = 1 / 12;
	        this._remainingFrameTime = 0;
	        this._animations = animations;
	        this._currentAnimationName = Object.keys(this._animations)[0];
	        const spriteCount = this.spriteGrid.width * this.spriteGrid.height;
	        for (const name in animations) {
	            shared.Data.assert(animations[name].first < spriteCount, `First sprite index ${animations[name].first} in "${name}" animation is outside the bounds of the supplied ` +
	                `${this.spriteGrid.width}x${this.spriteGrid.height} sprite sheet! The index of the last sprite in this sheet is ${spriteCount - 1}.`);
	            shared.Data.assert(animations[name].last < spriteCount, `Last sprite index ${animations[name].last} in "${name}" animation is outside the bounds of the supplied ` +
	                `${this.spriteGrid.width}x${this.spriteGrid.height} sprite sheet! The index of the last sprite in this sheet is ${spriteCount - 1}.`);
	        }
	    }
	    get spriteIndex() {
	        return this._currentSpriteIndex;
	    }
	    set currentAnimation(name) {
	        this._currentAnimationName = name;
	    }
	    /**
	     * Gets the default frame rate for this animator.
	     *
	     * @note This value will only be used by animations that do not have their own frameRate value set.
	     */
	    get frameRate() {
	        return 1 / this._frameTime;
	    }
	    /**
	     * Sets the default frame rate for this animator.
	     *
	     * @note This value will only be used by animations that do not have their own frameRate value set.
	     */
	    set frameRate(value) {
	        this._frameTime = 1 / value;
	    }
	    /**
	     * Checks for required frame updates to pursue the current animations desired frame rate.
	     * @param deltaTime The time since last frame. Supplied by the {@link Application}.
	     */
	    update(deltaTime) {
	        if (this._remainingFrameTime <= 0) {
	            const currentAnimationMeta = this.getCurrentAnimationMeta();
	            const frameTime = currentAnimationMeta.frameRate === undefined ? this._frameTime : 1 / currentAnimationMeta.frameRate;
	            this._remainingFrameTime += frameTime;
	            this._currentSpriteIndex += 1;
	            if (this.spriteIndex > currentAnimationMeta.last) {
	                this._currentSpriteIndex = currentAnimationMeta.first;
	            }
	        }
	        this._remainingFrameTime -= deltaTime;
	    }
	    /**
	     * @returns The meta information about the current animation.
	     * @see {@link Animator.getAnimationMeta} for more information.
	     */
	    getCurrentAnimationMeta() {
	        return this.getAnimationMeta(this._currentAnimationName);
	    }
	    /**
	     * Gets the meta information about an animation by name.
	     * @param name The name of the animation.
	     * @returns The meta information of the registered animation specified by "name".
	     * @see {@link AnimationMeta}
	     */
	    getAnimationMeta(name) {
	        return this._animations[name];
	    }
	    /**
	     * Gets the pixel coordinate bounds of a sprite within the sheet.
	     * @param spriteIndex The index of the sprite to get the bounds of within the sheet. Do not specify to get the bounds of the current sprite of the animation.
	     * @returns The coordinate bounds (x, y, width, height) of the sprite in pixel coordinates.
	     */
	    getPixelBounds(spriteIndex = this._currentSpriteIndex) {
	        return new buildExports.Vector4(this.spriteSize.width * Math.floor(spriteIndex % this.spriteGrid.width), this.spriteSize.height * Math.floor(spriteIndex / this.spriteGrid.width), this.spriteSize.width, this.spriteSize.height);
	    }
	    /**
	     * Gets the UV coordinate of a sprite within the sheet.
	     * @param spriteIndex The index of the sprite to get the bounds of within the sheet. Do not specify to get the bounds of the current sprite of the animation.
	     * @returns The texture coordinates bounds (x, y, width, height) of the sprite in UV coordinates.
	     */
	    getTextureBounds(spriteIndex = this._currentSpriteIndex) {
	        const bounds = this.getPixelBounds(spriteIndex);
	        return new buildExports.Vector4(bounds.x / this.sheetSize.width, bounds.y / this.sheetSize.height, bounds.width / this.sheetSize.width, bounds.height / this.sheetSize.height);
	    }
	    getTextureCoordinates(spriteIndex = this._currentSpriteIndex) {
	        const bounds = this.getPixelBounds(spriteIndex);
	        return [
	            bounds.x / this.sheetSize.width,
	            bounds.y / this.sheetSize.height,
	            (bounds.x + bounds.width) / this.sheetSize.width,
	            bounds.y / this.sheetSize.height,
	            (bounds.x + bounds.width) / this.sheetSize.width,
	            (bounds.y + bounds.height) / this.sheetSize.height,
	            bounds.x / this.sheetSize.width,
	            (bounds.y + bounds.height) / this.sheetSize.height
	        ];
	    }
	}

	exports.Animator = Animator;
	exports.Application = Application;
	exports.BindGroup = BindGroup;
	exports.Buffer = Buffer;
	exports.CommandEncoder = CommandEncoder;
	exports.FragmentShader = FragmentShader;
	exports.Model = Model;
	exports.Pipeline = Pipeline;
	exports.Renderer = Renderer;
	exports.Shader = Shader;
	exports.Texture = Texture;
	exports.TextureSampler = TextureSampler;
	exports.Uniform = Uniform;
	exports.VertexShader = VertexShader;

}));
