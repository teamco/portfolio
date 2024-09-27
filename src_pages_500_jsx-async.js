((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] || []).push([
        ['src/pages/500.jsx'],
{ "src/pages/500.jsx": function (module, exports, __mako_require__){
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
var _i18n = __mako_require__("src/utils/i18n.js");
var _Error = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Page/Error/index.js"));
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
 * @function
 * @param props
 * @return {JSX.Element}
 */ function page500(props) {
    _s();
    const intl = (0, _max.useIntl)();
    const { subject = 'page500' } = props;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Error.default, {
        subTitle: (0, _i18n.t)(intl, 'error.page500'),
        subject: subject,
        status: 500
    }, void 0, false, {
        fileName: "src/pages/500.jsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
}
_s(page500, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
var _default = page500;
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
//# sourceMappingURL=src_pages_500_jsx-async.js.map