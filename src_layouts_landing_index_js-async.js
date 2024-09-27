((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] || []).push([
        ['src/layouts/landing/index.js'],
{ "node_modules/react-interval/lib/Component.js": function (module, exports, __mako_require__){
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReactInterval = void 0;
var _react = _interopRequireDefault(__mako_require__("node_modules/react/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var ReactInterval = /*#__PURE__*/ function(_React$Component) {
    _inherits(ReactInterval, _React$Component);
    var _super = _createSuper(ReactInterval);
    function ReactInterval() {
        var _this;
        _classCallCheck(this, ReactInterval);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "callback", function() {
            if (_this.timer) {
                var callback = _this.props.callback;
                callback();
                _this.start();
            }
        });
        _defineProperty(_assertThisInitialized(_this), "start", function() {
            _this.stop();
            var timeout = _this.props.timeout;
            _this.timer = setTimeout(_this.callback, timeout);
        });
        _defineProperty(_assertThisInitialized(_this), "stop", function() {
            clearTimeout(_this.timer);
            _this.timer = null;
        });
        _defineProperty(_assertThisInitialized(_this), "render", function() {
            return false;
        });
        return _this;
    }
    _createClass(ReactInterval, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var enabled = this.props.enabled;
                if (enabled) this.start();
            }
        },
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(_ref) {
                var timeout = _ref.timeout, callback = _ref.callback, enabled = _ref.enabled;
                var _this$props = this.props, timeout1 = _this$props.timeout, callback1 = _this$props.callback, enabled1 = _this$props.enabled;
                return timeout1 !== timeout || callback1 !== callback || enabled1 !== enabled;
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(_ref2) {
                var enabled = _ref2.enabled, timeout = _ref2.timeout;
                var _this$props2 = this.props, timeout1 = _this$props2.timeout, enabled1 = _this$props2.enabled;
                if (enabled1 !== enabled || timeout1 !== timeout) {
                    if (enabled1) this.start();
                    else this.stop();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.stop();
            }
        }
    ]);
    return ReactInterval;
}(_react["default"].Component);
exports.ReactInterval = ReactInterval;
_defineProperty(ReactInterval, "defaultProps", {
    enabled: false,
    timeout: 1000
});

},
"node_modules/react-interval/lib/index.js": function (module, exports, __mako_require__){
"use strict";
var _require = __mako_require__("node_modules/react-interval/lib/Component.js");
var ReactInterval = _require.ReactInterval;
ReactInterval.ReactInterval = ReactInterval;
module.exports = ReactInterval;

},
"node_modules/react-use-scroll-indicator/dist/constants.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
exports.PRECISION_BASE = exports.VALUE_MIN = exports.VALUE_MAX = exports.INITIAL_VALUE = exports.INITIAL_PRECISION = exports.INITIAL_ON_ELEMENT = void 0;
exports.INITIAL_ON_ELEMENT = false;
exports.INITIAL_PRECISION = 2;
exports.INITIAL_VALUE = 0;
exports.VALUE_MAX = 100;
exports.VALUE_MIN = 0;
exports.PRECISION_BASE = 10;

},
"node_modules/react-use-scroll-indicator/dist/index.js": function (module, exports, __mako_require__){
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__mako_require__("node_modules/react-use-scroll-indicator/dist/useScrollIndicator.js"), exports);
__exportStar(__mako_require__("node_modules/react-use-scroll-indicator/dist/constants.js"), exports);

},
"node_modules/react-use-scroll-indicator/dist/useScrollIndicator.js": function (module, exports, __mako_require__){
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useScrollIndicator = void 0;
var react_1 = __mako_require__("node_modules/react/index.js");
var constants_1 = __mako_require__("node_modules/react-use-scroll-indicator/dist/constants.js");
exports.useScrollIndicator = function(options) {
    if (options === void 0) options = {};
    var _a = options.onElement, onElement = _a === void 0 ? constants_1.INITIAL_ON_ELEMENT : _a, _b = options.precision, precision = _b === void 0 ? constants_1.INITIAL_PRECISION : _b, _c = options.initialValue, initialValue = _c === void 0 ? constants_1.INITIAL_VALUE : _c;
    var roundFactor = react_1.useMemo(function() {
        return Math.pow(constants_1.PRECISION_BASE, precision);
    }, [
        precision
    ]);
    var targetElement = react_1.useRef(null);
    var _d = react_1.useState(initialValue), value = _d[0], setValue = _d[1];
    var handleValue = react_1.useCallback(function(scrolled) {
        var value = Math.round(scrolled * roundFactor) / roundFactor;
        setValue(Math.max(Math.min(value, constants_1.VALUE_MAX), constants_1.VALUE_MIN));
    }, [
        roundFactor
    ]);
    var handleElementScroll = react_1.useCallback(function() {
        var _a = targetElement.current.getBoundingClientRect(), height = _a.height, top = _a.top;
        handleValue(top * -1 / height * constants_1.VALUE_MAX);
    }, []);
    var handlePageScroll = react_1.useCallback(function() {
        var _a = document.documentElement, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight, scrollTop = _a.scrollTop;
        var winScroll = document.body.scrollTop || scrollTop;
        handleValue(winScroll / (scrollHeight - clientHeight) * constants_1.VALUE_MAX);
    }, []);
    var listener = react_1.useMemo(function() {
        return onElement ? handleElementScroll : handlePageScroll;
    }, [
        onElement
    ]);
    react_1.useEffect(function() {
        window.addEventListener("scroll", listener);
        return function() {
            window.removeEventListener("scroll", listener);
        };
    }, []);
    var state = __assign({
        value: value
    }, onElement ? {
        targetElement: targetElement
    } : null);
    var api = react_1.useMemo(function() {
        return {
            activeListener: listener,
            setScrollState: handleValue
        };
    }, [
        listener,
        handleValue
    ]);
    return [
        state,
        api
    ];
};

},
"src/components/Buttons/auth.button.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _function = __mako_require__("src/utils/function.js");
var _i18n = __mako_require__("src/utils/i18n.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
/**
 * @constant
 * @param props
 * @return {JSX.Element}
 */ const AuthButton = (props)=>{
    _s();
    const intl = (0, _max.useIntl)();
    const { testId, className, provider, loading, onClick = _function.stub, disabled = false, icon = null, tooltip = false, size = 'default' } = props;
    const _btn = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
        loading: loading,
        "data-testid": testId,
        className: className,
        onClick: onClick,
        icon: icon,
        disabled: disabled,
        size: size,
        children: provider
    }, void 0, false, {
        fileName: "src/components/Buttons/auth.button.js",
        lineNumber: 34,
        columnNumber: 7
    }, this);
    return tooltip ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
        title: (0, _i18n.t)(intl, 'auth.signInWith', {
            provider
        }),
        children: _btn
    }, void 0, false, {
        fileName: "src/components/Buttons/auth.button.js",
        lineNumber: 46,
        columnNumber: 7
    }, this) : _btn;
};
_s(AuthButton, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = AuthButton;
/**
 * @param props
 * @return {JSX.Element}
 * @constructor
 */ const GoogleBtn = (props)=>{
    const { className, testId, loading, disabled = false, tooltip = false, onClick = _function.stub } = props;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(AuthButton, {
        provider: 'Google',
        className: className,
        loading: loading,
        testId: testId,
        disabled: disabled,
        tooltip: tooltip,
        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.GoogleOutlined, {}, void 0, false, void 0, void 0),
        onClick: onClick
    }, void 0, false, {
        fileName: "src/components/Buttons/auth.button.js",
        lineNumber: 68,
        columnNumber: 7
    }, this);
};
_c1 = GoogleBtn;
/**
 * @param props
 * @return {JSX.Element}
 * @constructor
 */ const FacebookBtn = (props)=>{
    const { className, testId, loading, disabled = false, tooltip = false, onClick = _function.stub } = props;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(AuthButton, {
        provider: 'Facebook',
        loading: loading,
        testId: testId,
        className: className,
        tooltip: tooltip,
        disabled: disabled,
        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FacebookOutlined, {}, void 0, false, void 0, void 0),
        onClick: onClick
    }, void 0, false, {
        fileName: "src/components/Buttons/auth.button.js",
        lineNumber: 95,
        columnNumber: 7
    }, this);
};
_c2 = FacebookBtn;
/**
 * @param props
 * @return {JSX.Element}
 * @constructor
 */ const TwitterBtn = (props)=>{
    const { className, testId, loading, disabled = false, tooltip = false, onClick = _function.stub } = props;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(AuthButton, {
        provider: 'Twitter',
        loading: loading,
        testId: testId,
        className: className,
        tooltip: tooltip,
        disabled: disabled,
        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.TwitterOutlined, {}, void 0, false, void 0, void 0),
        onClick: onClick
    }, void 0, false, {
        fileName: "src/components/Buttons/auth.button.js",
        lineNumber: 122,
        columnNumber: 7
    }, this);
};
_c3 = TwitterBtn;
var _default = {
    GoogleBtn,
    FacebookBtn,
    TwitterBtn
};
var _c;
var _c1;
var _c2;
var _c3;
$RefreshReg$(_c, "AuthButton");
$RefreshReg$(_c1, "GoogleBtn");
$RefreshReg$(_c2, "FacebookBtn");
$RefreshReg$(_c3, "TwitterBtn");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/Buttons/button.module.less?asmodule": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
"";
var _default = {
    "hide": `hide-YUuKnTUL`,
    "main-bg-color": `main-bg-color-9c-g_hQi`,
    "extended": `extended-t6Q2MQTx`,
    "editLight": `editLight-Lj1OnGKs`,
    "skip": `skip-U6q-lyFe`,
    "export": `export-lEnJXnFQ`,
    "truncate": `truncate-4mhMbvy4`,
    "csv": `csv-USFrxFxk`,
    "empty": `empty-Rh9Nb_WA`,
    "ant-btn-disabled": `ant-btn-disabled-4tsOtLCK`,
    "checkboxWrapper": `checkboxWrapper-31Qj7SVA`,
    "labelIcon": `labelIcon-axbEsJ5S`,
    "skewed": `skewed-Tv3JSpkC`,
    "primary": `primary-MJGSeadK`,
    "vertical": `vertical-iSYdfDWV`,
    "required": `required-u4_kQFIn`,
    "break-word": `break-word-xZu4pQQO`,
    "largeFormItems": `largeFormItems-NTO5fOMX`,
    "next": `next-6o_zXm3h`,
    "json": `json-sbH3-emn`,
    "borderedContent": `borderedContent-amCgepgR`,
    "screenshot": `screenshot-dBpeQKNI`,
    "groupButtons": `groupButtons-CL9X-Qoc`,
    "row": `row-6sv84ehj`,
    "modalApi": `modalApi-vy69421n`,
    "lightSwitch": `lightSwitch-Dto2ztdH`,
    "darkSwitch": `darkSwitch-0I5Wcr4M`,
    "form": `form-Ty3xKYaU`,
    "inline": `inline-v1cxuIpd`,
    "light": `light-vkX28t-L`,
    "modalForm": `modalForm-Gu_-nrnJ`,
    "collapse": `collapse-QjSk7EOv`,
    "groupWrapper": `groupWrapper-K0jwjWsi`,
    "dark": `dark-TznqP7Bo`,
    "group": `group-9EpASaFD`,
    "modalFooter": `modalFooter-pHEWexju`,
    "infoBtn": `infoBtn-6RWNxU5T`,
    "r2": `r2-SFAtLt_5`,
    "r3": `r3-_st77CSU`,
    "max-width": `max-width-9c1NdajT`,
    "r4": `r4-eSkLyHfw`,
    "r5": `r5-am6q5p1e`,
    "editDark": `editDark-LCx5tF0V`,
    "radioGroup": `radioGroup-KuoFm2Iq`,
    "ant-radio-button-wrapper-disabled": `ant-radio-button-wrapper-disabled-2NzBMUzf`,
    "formHidden": `formHidden-uGuVPtKm`
};

},
"src/components/Buttons/dropdown.button.jsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _state = __mako_require__("src/utils/state.js");
var _function = __mako_require__("src/utils/function.js");
var _buttonmodulelessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Buttons/button.module.less?asmodule"));
var _menulessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/menu.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/**
 * @export
 * @default
 * @constant
 * @param {{spinOn}} props
 * @return {JSX.Element}
 */ const DropdownButton = (props)=>{
    const { loading, className = _menulessasmodule.default.customAction, overlayClassName = _menulessasmodule.default.customActionMenu, disabled, icon = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.SettingOutlined, {}, void 0, false, {
        fileName: "src/components/Buttons/dropdown.button.jsx",
        lineNumber: 28,
        columnNumber: 12
    }, this), onClick = _function.stub, size = 'small', type = 'default', overlay, dataTestId, label, trigger = [
        'click'
    ], placement = 'bottom', spinOn = [], children = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.EllipsisOutlined, {}, 'more', false, {
        fileName: "src/components/Buttons/dropdown.button.jsx",
        lineNumber: 38,
        columnNumber: 16
    }, this) } = props;
    const _spinOn = [
        'errorModel/save',
        ...spinOn
    ];
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Dropdown, {
        menu: {
            items: overlay
        },
        // overlay={menu}
        overlayClassName: overlayClassName,
        trigger: trigger,
        onClick: onClick,
        "data-testid": dataTestId,
        loading: (0, _state.isSpinning)(loading, _spinOn),
        disabled: disabled,
        placement: placement,
        children: label ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
            size: size,
            className: className,
            icon: icon,
            type: type,
            children: [
                label,
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.DownOutlined, {
                    className: _buttonmodulelessasmodule.default.export
                }, void 0, false, {
                    fileName: "src/components/Buttons/dropdown.button.jsx",
                    lineNumber: 62,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/components/Buttons/dropdown.button.jsx",
            lineNumber: 57,
            columnNumber: 13
        }, this) : children
    }, void 0, false, {
        fileName: "src/components/Buttons/dropdown.button.jsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
};
_c = DropdownButton;
var _default = DropdownButton;
var _c;
$RefreshReg$(_c, "DropdownButton");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/menu.less?asmodule": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
"";
var _default = {
    "customAction": `customAction-qbBIYBwd`
};

},
"src/layouts/landing/header.actions.jsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "HeaderActions", {
    enumerable: true,
    get: function() {
        return HeaderActions;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _dropdownbutton = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Buttons/dropdown.button.jsx"));
var _i18n = __mako_require__("src/utils/i18n.js");
var _function = __mako_require__("src/utils/function.js");
var _landinglayoutmodulelessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/layouts/landing/landing.layout.module.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const HeaderActions = (props)=>{
    var _user_metadata;
    _s();
    const intl = (0, _max.useIntl)();
    const { testId, user, ability, loading, mode, badge, setOpenLogin = _function.stub, onSignOut = _function.stub, onCloseMenu = _function.stub } = props;
    const isOnline = props.isOnline || window.navigator.onLine;
    const userItems = [
        {
            label: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                    to: `/profile`,
                    disabled: ability.cannot('access', user === null || user === void 0 ? void 0 : user.id),
                    children: (0, _i18n.t)(intl, 'profile')
                }, void 0, false, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 47,
                columnNumber: 11
            }, this),
            key: 'profile',
            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ProfileOutlined, {}, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        },
        {
            label: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                    to: '/businesses',
                    disabled: ability.cannot('access', 'businesses'),
                    children: (0, _i18n.t)(intl, 'businesses')
                }, void 0, false, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 59,
                columnNumber: 11
            }, this),
            key: 'businesses',
            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.AuditOutlined, {}, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        },
        {
            type: 'divider'
        },
        {
            label: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                    to: '/',
                    onClick: onSignOut,
                    disabled: ability.cannot('access', 'logout'),
                    children: (0, _i18n.t)(intl, 'auth.signOut')
                }, void 0, false, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 73,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 72,
                columnNumber: 11
            }, this),
            key: 'signOut',
            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LogoutOutlined, {}, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        }
    ];
    const wifiMsg = isOnline ? (0, _i18n.t)(intl, 'message.success.connected') : (0, _i18n.t)(intl, 'error.noConnection');
    const userOptions = mode === 'horizontal' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Badge, {
                count: badge === null || badge === void 0 ? void 0 : badge.count,
                showZero: true,
                className: _landinglayoutmodulelessasmodule.default.notifications,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.BellTwoTone, {
                    onClick: ()=>_max.history.push('/notifications')
                }, void 0, false, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
                placement: 'bottom',
                title: wifiMsg,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WifiOutlined, {
                    className: (0, _classnames.default)(_landinglayoutmodulelessasmodule.default.wifi, {
                        [_landinglayoutmodulelessasmodule.default.connected]: isOnline
                    })
                }, void 0, false, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dropdownbutton.default, {
                overlay: userItems,
                overlayClassName: _landinglayoutmodulelessasmodule.default.actionsMenu,
                spinOn: [
                    'authModel/signIn',
                    'authModel/signOut'
                ],
                disabled: false,
                loading: loading,
                placement: 'bottom',
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                            src: user === null || user === void 0 ? void 0 : (_user_metadata = user.metadata) === null || _user_metadata === void 0 ? void 0 : _user_metadata.photoURL,
                            alt: user === null || user === void 0 ? void 0 : user.displayName,
                            referrerPolicy: 'no-referrer'
                        }, void 0, false, {
                            fileName: "src/layouts/landing/header.actions.jsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            children: user === null || user === void 0 ? void 0 : user.displayName
                        }, void 0, false, {
                            fileName: "src/layouts/landing/header.actions.jsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, 'manage', false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _landinglayoutmodulelessasmodule.default.drawerActions,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ProfileOutlined, {}, void 0, false, void 0, void 0),
                size: 'large',
                disabled: ability.cannot('access', user === null || user === void 0 ? void 0 : user.id),
                onClick: ()=>{
                    _max.history.push(`/profile`);
                    onCloseMenu();
                },
                children: (0, _i18n.t)(intl, 'profile')
            }, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 119,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LogoutOutlined, {}, void 0, false, void 0, void 0),
                type: 'primary',
                danger: true,
                size: 'large',
                disabled: ability.cannot('access', 'logout'),
                onClick: ()=>{
                    onSignOut();
                    onCloseMenu();
                },
                children: (0, _i18n.t)(intl, 'auth.signOut')
            }, void 0, false, {
                fileName: "src/layouts/landing/header.actions.jsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/layouts/landing/header.actions.jsx",
        lineNumber: 118,
        columnNumber: 7
    }, this);
    const authBtns = (size, signinType = 'text', signupType = 'primary')=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    size: size,
                    type: signinType,
                    onClick: ()=>{
                        setOpenLogin(true);
                        onCloseMenu();
                    },
                    children: (0, _i18n.t)(intl, 'auth.signin')
                }, void 0, false, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    size: size,
                    type: signupType,
                    children: (0, _i18n.t)(intl, 'auth.signup')
                }, void 0, false, {
                    fileName: "src/layouts/landing/header.actions.jsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    const authOptions = mode === 'horizontal' ? authBtns('medium') : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _landinglayoutmodulelessasmodule.default.drawerActions,
        children: authBtns('large', 'default')
    }, void 0, false, {
        fileName: "src/layouts/landing/header.actions.jsx",
        lineNumber: 155,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _landinglayoutmodulelessasmodule.default.userActions,
        "data-testid": testId,
        children: user ? userOptions : authOptions
    }, void 0, false, {
        fileName: "src/layouts/landing/header.actions.jsx",
        lineNumber: 161,
        columnNumber: 7
    }, this);
};
_s(HeaderActions, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = HeaderActions;
var _c;
$RefreshReg$(_c, "HeaderActions");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/layouts/landing/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _landinglayoutconnect = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/layouts/landing/landing.layout.connect.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _default = _landinglayoutconnect.default;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/layouts/landing/landing.header.jsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "LandingHeader", {
    enumerable: true,
    get: function() {
        return LandingHeader;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _i18n = __mako_require__("src/utils/i18n.js");
var _function = __mako_require__("src/utils/function.js");
var _state = __mako_require__("src/utils/state.js");
var _login = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/authentication/login/index.js"));
var _Loader = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Loader/index.js"));
var _headeractions = __mako_require__("src/layouts/landing/header.actions.jsx");
var _landinglayoutmodulelessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/layouts/landing/landing.layout.module.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { Header } = _antd.Layout;
const LandingHeader = (props)=>{
    _s();
    const intl = (0, _max.useIntl)();
    const { testId, user, slogan, ability, theme, loading, isOnline, notificationBadge, mode = 'horizontal', spinOn = [
        'authModel/signIn',
        'authModel/signOut'
    ], menus = [], drawer = false, onToggleTheme = _function.stub, onSignOut = _function.stub, onCloseMenu = _function.stub, onOpenMenu = _function.stub } = props;
    const [openLogin, setOpenLogin] = (0, _react.useState)(false);
    const _menus = [
        ...menus
    ];
    const spinning = (0, _state.isSpinning)(loading, spinOn);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Header, {
        className: (0, _classnames.default)({
            [_landinglayoutmodulelessasmodule.default.drawerWrapper]: mode === 'vertical',
            [_landinglayoutmodulelessasmodule.default.headerWrapper]: mode === 'horizontal'
        }),
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: _landinglayoutmodulelessasmodule.default.layoutHeader,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _landinglayoutmodulelessasmodule.default.headerMenu,
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: _landinglayoutmodulelessasmodule.default.logo,
                                onClick: ()=>_max.history.push('/'),
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.BranchesOutlined, {}, void 0, false, {
                                    fileName: "src/layouts/landing/landing.header.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "src/layouts/landing/landing.header.jsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            _menus.map(({ key, locale, url, subject, icon }, idx)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                    type: 'text',
                                    icon: icon,
                                    disabled: ability === null || ability === void 0 ? void 0 : ability.cannot('read', subject),
                                    onClick: ()=>_max.history.push(url),
                                    children: (0, _i18n.t)(intl, locale)
                                }, key, false, {
                                    fileName: "src/layouts/landing/landing.header.jsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: _landinglayoutmodulelessasmodule.default.slogan,
                                children: slogan
                            }, void 0, false, {
                                fileName: "src/layouts/landing/landing.header.jsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/layouts/landing/landing.header.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _landinglayoutmodulelessasmodule.default.headerActions,
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: _landinglayoutmodulelessasmodule.default.toHide,
                                children: [
                                    mode === 'horizontal' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        type: 'text',
                                        onClick: onToggleTheme,
                                        icon: theme === 'dark' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.SunFilled, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.MoonFilled, {}, void 0, false, void 0, void 0)
                                    }, void 0, false, {
                                        fileName: "src/layouts/landing/landing.header.jsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Loader.default, {
                                        spinning: !!spinning,
                                        loading: loading,
                                        type: 'container',
                                        className: _landinglayoutmodulelessasmodule.default.loader,
                                        spinOn: spinOn
                                    }, void 0, false, {
                                        fileName: "src/layouts/landing/landing.header.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/layouts/landing/landing.header.jsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            mode === 'horizontal' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                type: 'text',
                                onClick: onOpenMenu,
                                className: _landinglayoutmodulelessasmodule.default.menuButton,
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.MenuOutlined, {}, void 0, false, {
                                    fileName: "src/layouts/landing/landing.header.jsx",
                                    lineNumber: 93,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "src/layouts/landing/landing.header.jsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/layouts/landing/landing.header.jsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/layouts/landing/landing.header.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_login.default, {
                openLogin: openLogin,
                setOpenLogin: setOpenLogin
            }, void 0, false, {
                fileName: "src/layouts/landing/landing.header.jsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/layouts/landing/landing.header.jsx",
        lineNumber: 59,
        columnNumber: 7
    }, this);
};
_s(LandingHeader, "NTaoeoL9wZttk3+AueFLkt7rBqc=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = LandingHeader;
var _c;
$RefreshReg$(_c, "LandingHeader");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/layouts/landing/landing.layout.connect.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _landinglayout = __mako_require__("src/layouts/landing/landing.layout.jsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const MODEL_NAME = 'appModel';
/**
 * @constant
 * @param appModel
 * @param authModel
 * @param notificationModel
 * @param loading
 * @return {{authModel, appModel, loading}}
 */ const mapStateToProps = ({ appModel, authModel, notificationModel, loading })=>({
        appModel,
        authModel,
        notificationModel,
        loading
    });
/**
 * @constant
 * @param dispatch
 * @return {{onUpdateDocumentMeta(*): void, dispatch, onDefineAbilities(): void, onNotification(): void}}
 */ const mapDispatchToProps = (dispatch)=>({
        dispatch,
        onInitLayout () {
            dispatch({
                type: `${MODEL_NAME}/updateState`,
                payload: {
                    layout: {
                        header: true,
                        footer: true
                    }
                }
            });
        },
        onToggleTheme () {
            dispatch({
                type: `${MODEL_NAME}/toggleTheme`
            });
        },
        onNotification () {
            dispatch({
                type: 'notificationModel/refreshNotification'
            });
        },
        onUpdateDocumentMeta (meta) {
            dispatch({
                type: `${MODEL_NAME}/updateDocumentMeta`,
                payload: {
                    meta
                }
            });
        },
        onHandleMessageApi (messageApi, intl) {
            dispatch({
                type: `${MODEL_NAME}/handleMessageApi`,
                payload: {
                    messageApi,
                    intl
                }
            });
        },
        onHandleNotificationApi (notificationApi) {
            dispatch({
                type: `${MODEL_NAME}/handleNotificationApi`,
                payload: {
                    notificationApi,
                    dispatch
                }
            });
        },
        onHandleModalApi (modalApi) {
            dispatch({
                type: `${MODEL_NAME}/handleModalApi`,
                payload: {
                    modalApi
                }
            });
        },
        onUpdateMessages (translateMessages) {
            dispatch({
                type: `${MODEL_NAME}/updateMessages`,
                payload: {
                    translateMessages,
                    MODEL_NAME
                }
            });
        },
        onOnline (isOnline) {
            dispatch({
                type: `${MODEL_NAME}/handleOnline`,
                payload: {
                    isOnline
                }
            });
        },
        onSignIn (user) {
            dispatch({
                type: 'authModel/signIn',
                payload: {
                    user
                }
            });
        },
        onSignOut () {
            dispatch({
                type: 'authModel/signOut'
            });
        },
        onRefreshSignIn () {
            dispatch({
                type: `firebaseModel/refreshSignIn`
            });
        }
    });
var _default = (0, _max.connect)(mapStateToProps, mapDispatchToProps)(_landinglayout.LandingLayout);
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/layouts/landing/landing.layout.jsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "LandingLayout", {
    enumerable: true,
    get: function() {
        return LandingLayout;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _reactinterval = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react-interval/lib/index.js"));
var _reactusescrollindicator = __mako_require__("node_modules/react-use-scroll-indicator/dist/index.js");
var _Loader = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Loader/index.js"));
var _can = __mako_require__("src/utils/auth/can.js");
var _hooks = __mako_require__("src/utils/hooks.js");
var _window = __mako_require__("src/utils/window.js");
var _function = __mako_require__("src/utils/function.js");
var _landingheader = __mako_require__("src/layouts/landing/landing.header.jsx");
var _landinglayoutmodulelessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/layouts/landing/landing.layout.module.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { Content, Footer } = _antd.Layout;
const LandingLayout = (props)=>{
    _s();
    const intl = (0, _max.useIntl)();
    const { appModel, authModel, notificationModel, loading, onNotification = _function.stub, onToggleTheme = _function.stub, onInitLayout = _function.stub, onRefreshSignIn = _function.stub, onSignOut = _function.stub, onHandleNotificationApi = _function.stub, onHandleModalApi = _function.stub, onHandleMessageApi = _function.stub } = props;
    const [openMenu, setOpenMenu] = (0, _react.useState)(false);
    const { meta, menus, theme, layout, language = 'en-US', interval: { timeout, enabled } } = appModel;
    const { employeeId } = (0, _max.useParams)();
    const { user, ability } = authModel;
    const { isOnline, notificationBadge } = notificationModel;
    const [modalApi, modalHolder] = _antd.Modal.useModal();
    const [messageApi, messageHolder] = _antd.message.useMessage();
    const [notificationApi, notificationHolder] = _antd.notification.useNotification({
        stack: {
            threshold: 3
        }
    });
    let title = meta === null || meta === void 0 ? void 0 : meta.name;
    if (meta === null || meta === void 0 ? void 0 : meta.title) title = `${title} ${meta === null || meta === void 0 ? void 0 : meta.title}`;
    (0, _hooks.effectHook)(()=>{
        onRefreshSignIn();
        onHandleMessageApi(messageApi, intl);
        onHandleNotificationApi(notificationApi);
        onHandleModalApi(modalApi);
        (0, _window.handleMobile)();
    });
    (0, _hooks.effectHook)(()=>{
        if (employeeId) ;
        else onInitLayout();
    }, [
        employeeId
    ]);
    const onOpenMenu = ()=>setOpenMenu(true);
    const onCloseMenu = ()=>setOpenMenu(false);
    const [state] = (0, _reactusescrollindicator.useScrollIndicator)();
    const progress = state === null || state === void 0 ? void 0 : state.value;
    const headerProps = {
        ability,
        theme,
        menus,
        user,
        loading,
        isOnline,
        notificationBadge,
        onSignOut,
        onOpenMenu,
        onToggleTheme,
        drawer: openMenu,
        slogan: meta === null || meta === void 0 ? void 0 : meta.name
    };
    const content = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Layout, {
        className: _landinglayoutmodulelessasmodule.default.sL,
        children: [
            (layout === null || layout === void 0 ? void 0 : layout.header) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_landingheader.LandingHeader, {
                ...headerProps
            }, void 0, false, {
                fileName: "src/layouts/landing/landing.layout.jsx",
                lineNumber: 121,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Content, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Provider, {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _landinglayoutmodulelessasmodule.default.sLC,
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react.Suspense, {
                                fallback: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Loader.default, {
                                    spinning: loading.effects['appModel/query']
                                }, void 0, false, void 0, void 0),
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: (0, _classnames.default)(_landinglayoutmodulelessasmodule.default.sLCW, {
                                        [_landinglayoutmodulelessasmodule.default.sLCWH]: layout === null || layout === void 0 ? void 0 : layout.header,
                                        [_landinglayoutmodulelessasmodule.default.sLCWF]: layout === null || layout === void 0 ? void 0 : layout.footer,
                                        [_landinglayoutmodulelessasmodule.default.sLCWHF]: (layout === null || layout === void 0 ? void 0 : layout.header) && (layout === null || layout === void 0 ? void 0 : layout.footer)
                                    }),
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Outlet, {
                                        context: {
                                            messageApi,
                                            notificationApi,
                                            modalApi
                                        }
                                    }, void 0, false, {
                                        fileName: "src/layouts/landing/landing.layout.jsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/layouts/landing/landing.layout.jsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "src/layouts/landing/landing.layout.jsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.FloatButton.BackTop, {}, void 0, false, {
                                fileName: "src/layouts/landing/landing.layout.jsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/layouts/landing/landing.layout.jsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "src/layouts/landing/landing.layout.jsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/layouts/landing/landing.layout.jsx",
                lineNumber: 122,
                columnNumber: 9
            }, this),
            (layout === null || layout === void 0 ? void 0 : layout.footer) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Footer, {
                className: _landinglayoutmodulelessasmodule.default.sLF,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: _landinglayoutmodulelessasmodule.default.footer,
                    children: "footer"
                }, void 0, false, {
                    fileName: "src/layouts/landing/landing.layout.jsx",
                    lineNumber: 142,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "src/layouts/landing/landing.layout.jsx",
                lineNumber: 141,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/layouts/landing/landing.layout.jsx",
        lineNumber: 120,
        columnNumber: 7
    }, this);
    return ability ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_can.AbilityContext.Provider, {
        value: ability,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.ConfigProvider, {
            locale: language,
            theme: theme,
            direction: meta === null || meta === void 0 ? void 0 : meta.direction,
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: (0, _classnames.default)(_landinglayoutmodulelessasmodule.default.landing, {
                    [_landinglayoutmodulelessasmodule.default.dark]: theme === 'dark',
                    [_landinglayoutmodulelessasmodule.default.light]: theme === 'light'
                }),
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Helmet, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("meta", {
                                charSet: meta === null || meta === void 0 ? void 0 : meta.charSet
                            }, void 0, false, {
                                fileName: "src/layouts/landing/landing.layout.jsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("title", {
                                children: title
                            }, void 0, false, {
                                fileName: "src/layouts/landing/landing.layout.jsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/layouts/landing/landing.layout.jsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reactinterval.default, {
                        timeout: timeout,
                        enabled: enabled,
                        callback: onNotification
                    }, void 0, false, {
                        fileName: "src/layouts/landing/landing.layout.jsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _landinglayoutmodulelessasmodule.default.progress,
                        style: {
                            width: `${progress}%`
                        }
                    }, void 0, false, {
                        fileName: "src/layouts/landing/landing.layout.jsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this),
                    messageHolder,
                    notificationHolder,
                    modalHolder,
                    content,
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Drawer, {
                        title: meta === null || meta === void 0 ? void 0 : meta.name,
                        onClose: onCloseMenu,
                        className: _landinglayoutmodulelessasmodule.default.drawerMenu,
                        open: openMenu,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_landingheader.LandingHeader, {
                            ...headerProps,
                            mode: 'vertical',
                            onCloseMenu: onCloseMenu
                        }, void 0, false, {
                            fileName: "src/layouts/landing/landing.layout.jsx",
                            lineNumber: 176,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "src/layouts/landing/landing.layout.jsx",
                        lineNumber: 172,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/layouts/landing/landing.layout.jsx",
                lineNumber: 155,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "src/layouts/landing/landing.layout.jsx",
            lineNumber: 152,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "src/layouts/landing/landing.layout.jsx",
        lineNumber: 151,
        columnNumber: 7
    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Loader.default, {
        spinning: true
    }, void 0, false, {
        fileName: "src/layouts/landing/landing.layout.jsx",
        lineNumber: 184,
        columnNumber: 7
    }, this);
};
_s(LandingLayout, "bULXewcp/QwsUHWe3zAPXP/llbs=", false, function() {
    return [
        _max.useIntl,
        _max.useParams,
        _antd.Modal.useModal,
        _antd.message.useMessage,
        _antd.notification.useNotification,
        _reactusescrollindicator.useScrollIndicator
    ];
});
_c = LandingLayout;
var _c;
$RefreshReg$(_c, "LandingLayout");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/layouts/landing/landing.layout.module.less?asmodule": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
"";
var _default = {
    "sLCWF": `sLCWF-ThG2ufih`,
    "main-bg-color": `main-bg-color-Mqqj-c-B`,
    "extended": `extended-FxxbgXIh`,
    "skip": `skip-J5beJEOj`,
    "sLC": `sLC-O9u-3e86`,
    "truncate": `truncate-0_1xLK3Y`,
    "sLF": `sLF-o1cQEwMJ`,
    "empty": `empty-Lwd7yGFz`,
    "ant-btn-disabled": `ant-btn-disabled-xoVxE2bk`,
    "labelIcon": `labelIcon-JkcShOFk`,
    "headerMenu": `headerMenu-uEoY9W-o`,
    "break-word": `break-word-k38_8SxL`,
    "menuButton": `menuButton-zGUj9Iqk`,
    "headerWrapper": `headerWrapper-sucA1eKb`,
    "largeFormItems": `largeFormItems-fe6RIOs-`,
    "actionsMenu": `actionsMenu-D_Vp2eGp`,
    "drawerMenu": `drawerMenu-HK0kdoAh`,
    "page404": `page404-XmbQNSFg`,
    "page403": `page403-m9A5Dmxr`,
    "lightSwitch": `lightSwitch-T7pse3Km`,
    "page500": `page500-ZwNGu3ZE`,
    "darkSwitch": `darkSwitch-pFiDER4Y`,
    "toHide": `toHide-4N9-hKp7`,
    "form": `form-9JEDJMXk`,
    "drawerActions": `drawerActions-cuTPH10r`,
    "light": `light-C-AtydpP`,
    "groupWrapper": `groupWrapper-iqRD7A1Y`,
    "footer": `footer-HlfPodvg`,
    "layoutHeader": `layoutHeader-san849Yt`,
    "radioGroup": `radioGroup-kPbRDdg2`,
    "modalFooter": `modalFooter-6BVZT7oq`,
    "sL": `sL-lWIYusto`,
    "r2": `r2-Ana0cqdf`,
    "r3": `r3-DrExw_qV`,
    "r4": `r4-1oV1PMy4`,
    "landing": `landing-I-77E_9Q`,
    "max-width": `max-width-GabAX43F`,
    "r5": `r5-Fd22ybrE`,
    "drawerWrapper": `drawerWrapper-R8zMrIVi`,
    "notifications": `notifications-mRUciVJa`,
    "editLight": `editLight-aq4TNGmx`,
    "logo": `logo-XCdbMTlP`,
    "wifi": `wifi-FfPtQvv_`,
    "skewed": `skewed-xzppsJHI`,
    "sLCW": `sLCW-XiOLdhSc`,
    "vertical": `vertical-wOxaiiTL`,
    "required": `required-6WTOmGir`,
    "borderedContent": `borderedContent-XCLn7_TN`,
    "userActions": `userActions-jqUNtpdo`,
    "row": `row-4BS5E4xX`,
    "modalApi": `modalApi-nlcW_jIg`,
    "outline": `outline-uYqhJml6`,
    "headerActions": `headerActions-WN-tkCiE`,
    "loader": `loader-DoG3jd_X`,
    "inline": `inline-n8YyAhWm`,
    "sLCWHF": `sLCWHF-O2w4tSo9`,
    "progress": `progress-eNW4RLhp`,
    "modalForm": `modalForm-VZPC-KWi`,
    "collapse": `collapse-PvaMzIEN`,
    "dark": `dark-8-eYHieg`,
    "group": `group-rzbqQQcm`,
    "editDark": `editDark-oxdA5qVQ`,
    "infoBtn": `infoBtn--subKOMd`,
    "ant-radio-button-wrapper-disabled": `ant-radio-button-wrapper-disabled-N6Z6LuK8`,
    "formHidden": `formHidden-1F9I6KGz`,
    "connected": `connected-KpW-0mie`,
    "slogan": `slogan-nRiieCE5`,
    "sLCWH": `sLCWH-K6mFNw9h`
};

},
"src/pages/authentication/login/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _loginconnect = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/authentication/login/login.connect.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _default = _loginconnect.default;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/pages/authentication/login/login.connect.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _login = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/authentication/login/login.jsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const MODEL_NAME = 'firebaseModel';
var _default = (0, _max.connect)(({ authModel, firebaseModel, loading })=>({
        authModel,
        firebaseModel,
        loading
    }), (dispatch)=>({
        dispatch,
        onSignIn (user) {
            dispatch({
                type: 'authModel/signIn',
                payload: {
                    user
                }
            });
        },
        onSignInWithGoogle (popup = true) {
            dispatch({
                type: `${MODEL_NAME}/signInWithGoogle`,
                payload: {
                    popup
                }
            });
        }
    }))(_login.default);
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/pages/authentication/login/login.form.jsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _i18n = __mako_require__("src/utils/i18n.js");
var _state = __mako_require__("src/utils/state.js");
var _function = __mako_require__("src/utils/function.js");
var _authbutton = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Buttons/auth.button.js"));
var _loginmodulelessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/authentication/login/login.module.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { GoogleBtn } = _authbutton.default;
/**
 * @constant
 * @param props
 * @return {JSX.Element}
 * @constructor
 */ const LoginForm = (props)=>{
    _s();
    const intl = (0, _max.useIntl)();
    const { error, disabled, openLogin = false, mask = true, wrapClassName, loading, user, onCancel = _function.stub, onSignIn = _function.stub } = props;
    const modalHeader = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _loginmodulelessasmodule.default.modalHeader,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                children: (0, _i18n.t)(intl, 'auth.signInTitle')
            }, void 0, false, {
                fileName: "src/pages/authentication/login/login.form.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h6", {
                children: (0, _i18n.t)(intl, 'auth.signInDesc')
            }, void 0, false, {
                fileName: "src/pages/authentication/login/login.form.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/authentication/login/login.form.jsx",
        lineNumber: 37,
        columnNumber: 7
    }, this);
    const isLoading = (0, _state.isSpinning)(loading, [
        'authModel/signIn',
        'authModel/defineAbilities',
        'firebaseModel/signInWithGoogle',
        'firebaseModel/refreshSignIn'
    ], !!user);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
        title: modalHeader,
        width: 450,
        centered: true,
        open: openLogin,
        mask: mask,
        onCancel: onCancel,
        wrapClassName: wrapClassName,
        footer: null,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
            spinning: isLoading,
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(GoogleBtn, {
                    loading: isLoading,
                    disabled: disabled,
                    onClick: onSignIn
                }, 0, false, {
                    fileName: "src/pages/authentication/login/login.form.jsx",
                    lineNumber: 61,
                    columnNumber: 13
                }, this)
            }, void 0, false)
        }, void 0, false, {
            fileName: "src/pages/authentication/login/login.form.jsx",
            lineNumber: 59,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "src/pages/authentication/login/login.form.jsx",
        lineNumber: 51,
        columnNumber: 7
    }, this);
};
_s(LoginForm, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = LoginForm;
var _default = LoginForm;
var _c;
$RefreshReg$(_c, "LoginForm");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/pages/authentication/login/login.jsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _hooks = __mako_require__("src/utils/hooks.js");
var _console = __mako_require__("src/utils/console.js");
var _i18n = __mako_require__("src/utils/i18n.js");
var _request = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/utils/request.js"));
var _loginform = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/authentication/login/login.form.jsx"));
var _loginmodulelessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/authentication/login/login.module.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
/**
 * @constant
 * @param props
 * @returns {JSX.Element}
 */ const LandingLogin = (props)=>{
    var _request_xhr;
    _s();
    const intl = (0, _max.useIntl)();
    const { onSignInWithGoogle, authModel, firebaseModel, loading, openLogin = false, setOpenLogin } = props;
    const { user, ability } = authModel;
    const { error, credential } = firebaseModel;
    const { notificationApi } = (_request.default === null || _request.default === void 0 ? void 0 : (_request_xhr = _request.default.xhr) === null || _request_xhr === void 0 ? void 0 : _request_xhr.notification) || {};
    (0, _hooks.effectHook)(()=>{
        if (user) setOpenLogin(false);
    }, [
        user
    ]);
    (0, _hooks.effectHook)(()=>{
        if (error) {
            const errorProps = {
                title: (0, _i18n.t)(intl, 'error.number', {
                    number: error === null || error === void 0 ? void 0 : error.code
                }),
                message: error === null || error === void 0 ? void 0 : error.message
            };
            (0, _console.logger)({
                type: 'warn',
                log: {
                    error,
                    credential
                }
            });
            notificationApi.error({
                message: error === null || error === void 0 ? void 0 : error.name,
                description: errorProps === null || errorProps === void 0 ? void 0 : errorProps.message,
                placement: 'topRight',
                duration: null
            });
        }
    }, [
        error
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_loginform.default, {
        user: user,
        error: error,
        loading: loading,
        openLogin: openLogin,
        onCancel: ()=>setOpenLogin(false),
        disabled: ability === null || ability === void 0 ? void 0 : ability.cannot('access', 'login'),
        onSignIn: onSignInWithGoogle,
        wrapClassName: _loginmodulelessasmodule.default.loginWrapper
    }, void 0, false, {
        fileName: "src/pages/authentication/login/login.jsx",
        lineNumber: 60,
        columnNumber: 7
    }, this);
};
_s(LandingLogin, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = LandingLogin;
var _default = LandingLogin;
var _c;
$RefreshReg$(_c, "LandingLogin");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/pages/authentication/login/login.module.less?asmodule": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
"";
var _default = {
    "loginWrapper": `loginWrapper-bsLSohWw`,
    "main-bg-color": `main-bg-color-QBuCB-ZJ`,
    "extended": `extended-0VZDxMcJ`,
    "editLight": `editLight-xbvjoiKD`,
    "skip": `skip-RHH6neJS`,
    "truncate": `truncate-QE3G2GbS`,
    "empty": `empty-6t_hydxJ`,
    "ant-btn-disabled": `ant-btn-disabled-Tnwhnubg`,
    "labelIcon": `labelIcon-jtKFba7j`,
    "skewed": `skewed-lpdoEh7p`,
    "vertical": `vertical-xE6qjryV`,
    "required": `required-u-KWCxtp`,
    "break-word": `break-word-LtpkckTX`,
    "largeFormItems": `largeFormItems-51hVlJM6`,
    "borderedContent": `borderedContent-5QXO-CO_`,
    "row": `row-nygyTq4h`,
    "modalApi": `modalApi-y4Icvd2k`,
    "lightSwitch": `lightSwitch-yRqxIWvb`,
    "darkSwitch": `darkSwitch-nLok6H44`,
    "form": `form-C4fXEMKQ`,
    "inline": `inline-cMSaLWl4`,
    "light": `light-CD68ksud`,
    "modalForm": `modalForm-ZoxqJqmC`,
    "collapse": `collapse-f8uKnW8C`,
    "groupWrapper": `groupWrapper-j_bJNUb7`,
    "dark": `dark-fuNklsln`,
    "group": `group-C_OhWJd3`,
    "modalFooter": `modalFooter-5-k01pV_`,
    "infoBtn": `infoBtn--U-V_maq`,
    "r2": `r2-NmJQr8t_`,
    "r3": `r3-JS5T2xLq`,
    "max-width": `max-width-ZIe5DSkp`,
    "r4": `r4-jGcdJ5GW`,
    "r5": `r5-svN5xfVQ`,
    "editDark": `editDark-m-F4GyhA`,
    "radioGroup": `radioGroup-qaS9a_js`,
    "ant-radio-button-wrapper-disabled": `ant-radio-button-wrapper-disabled-1ZL5TMOz`,
    "formHidden": `formHidden-yr8HWIGT`
};

},
 }]);
//# sourceMappingURL=src_layouts_landing_index_js-async.js.map