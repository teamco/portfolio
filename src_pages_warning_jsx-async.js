((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] || []).push([
        ['src/pages/warning.jsx'],
{ "src/pages/warning.jsx": function (module, exports, __mako_require__){
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
var _Error = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Page/Error/index.js"));
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
 * @export
 * @param props
 * @returns {JSX.Element}
 */ const pageWarning = (props = {})=>{
    _s();
    const intl = (0, _max.useIntl)();
    const { subject = 'pageWarning', title = (0, _i18n.t)(intl, 'error.warning'), subTitle = (0, _i18n.t)(intl, 'error.warningMsg') } = props;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Error.default, {
        title: title,
        subTitle: subTitle,
        subject: subject,
        status: 'warning'
    }, void 0, false, {
        fileName: "src/pages/warning.jsx",
        lineNumber: 23,
        columnNumber: 7
    }, this);
};
_s(pageWarning, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
var _default = pageWarning;
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
//# sourceMappingURL=src_pages_warning_jsx-async.js.map