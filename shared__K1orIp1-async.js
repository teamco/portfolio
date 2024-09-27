((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] || []).push([
        ['shared__K1orIp1'],
{ "src/components/Loader/Loader.jsx": function (module, exports, __mako_require__){
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
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _state = __mako_require__("src/utils/state.js");
var _loaderlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Loader/loader.less?asmodule"));
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
 * @param props
 * @return {JSX.Element}
 * @constructor
 */ const Loader = (props)=>{
    const { loading, testId, className, wrapperClassName, type = 'layout', spinning = false, spinOn = [], style = {} } = props;
    const _spinning = spinning || (0, _state.isSpinning)(loading, spinOn);
    const _className = (0, _classnames.default)(_loaderlessasmodule.default.loader, className, {
        [_loaderlessasmodule.default.layout]: type === 'layout' && _spinning,
        [_loaderlessasmodule.default.page]: type === 'page' && _spinning,
        [_loaderlessasmodule.default.contained]: type === 'container' && _spinning,
        [_loaderlessasmodule.default.sider]: type === 'sider' && _spinning,
        [_loaderlessasmodule.default.none]: !_spinning
    });
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _className,
        style: style,
        "data-testid": testId,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
            wrapperClassName: wrapperClassName,
            spinning: _spinning
        }, void 0, false, {
            fileName: "src/components/Loader/Loader.jsx",
            lineNumber: 41,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "src/components/Loader/Loader.jsx",
        lineNumber: 38,
        columnNumber: 7
    }, this);
};
_c = Loader;
var _default = Loader;
var _c;
$RefreshReg$(_c, "Loader");
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
"src/components/Loader/index.js": function (module, exports, __mako_require__){
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
var _Loader = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Loader/Loader.jsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _default = _Loader.default;
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
"src/components/Loader/loader.less?asmodule": function (module, exports, __mako_require__){
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
    "main-bg-color": `main-bg-color-OGQcYPm7`,
    "extended": `extended-FTjhx8Pn`,
    "editLight": `editLight-mj3K3Dkk`,
    "skip": `skip-X-qUUNH5`,
    "none": `none-VTpAUrc_`,
    "truncate": `truncate-3SDkTbHO`,
    "empty": `empty-VlLR1KSQ`,
    "ant-btn-disabled": `ant-btn-disabled-6WV1qFpq`,
    "contained": `contained-uYzUIQsT`,
    "labelIcon": `labelIcon-BH-QAXjv`,
    "skewed": `skewed-TvFtwpms`,
    "vertical": `vertical-NoFUQIeF`,
    "required": `required-vvmmEcle`,
    "break-word": `break-word-T5VpwOIT`,
    "wrapper": `wrapper-HzxFFxnX`,
    "largeFormItems": `largeFormItems-XkCb3n-c`,
    "borderedContent": `borderedContent-kbw-9aW7`,
    "row": `row-osTQVa2C`,
    "modalApi": `modalApi-cu5wMTQ5`,
    "lightSwitch": `lightSwitch--XN-PASe`,
    "layout": `layout-_ZOZLv4T`,
    "darkSwitch": `darkSwitch-Pdi6bofp`,
    "loader": `loader-RsAVkLDR`,
    "form": `form-ro8GmCCz`,
    "hidden": `hidden-YJ_oivXT`,
    "inline": `inline-dtOg_M5Y`,
    "light": `light-Kwt33-RC`,
    "modalForm": `modalForm--pfe_Iel`,
    "collapse": `collapse-9d9Yo8_l`,
    "groupWrapper": `groupWrapper-opVfneFK`,
    "dark": `dark-fH6RoXRV`,
    "group": `group--m-IDe0G`,
    "modalFooter": `modalFooter-qnKK4akG`,
    "infoBtn": `infoBtn-KUKbv-fH`,
    "r2": `r2-ocl9GmSR`,
    "r3": `r3-YNv4PvgT`,
    "max-width": `max-width-Ic7Z6vmg`,
    "r4": `r4-UWmiOTC_`,
    "r5": `r5-DBlLYcES`,
    "editDark": `editDark-rghyTEwA`,
    "radioGroup": `radioGroup-pfEwlggw`,
    "ant-radio-button-wrapper-disabled": `ant-radio-button-wrapper-disabled-nnbWJFoR`,
    "formHidden": `formHidden-A2o4RdYW`
};

},
"src/utils/auth/can.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    AbilityContext: function() {
        return AbilityContext;
    },
    Can: function() {
        return Can;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _react1 = __mako_require__("node_modules/@casl/react/dist/es6m/index.mjs");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const AbilityContext = /*#__PURE__*/ (0, _react.createContext)();
const Can = (0, _react1.createContextualCan)(AbilityContext.Consumer);
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
 }]);
//# sourceMappingURL=shared__K1orIp1-async.js.map