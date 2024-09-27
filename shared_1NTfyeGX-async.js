((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_portfolio"] || []).push([
        ['shared_1NTfyeGX'],
{ "src/components/Page/Error/error.module.less?asmodule": function (module, exports, __mako_require__){
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
    "main-bg-color": `main-bg-color-dCbxzzYq`,
    "extended": `extended-NRGcmrxz`,
    "editLight": `editLight-dvWpJhmf`,
    "skip": `skip-pKiJ10tY`,
    "truncate": `truncate-eyyKLCMU`,
    "empty": `empty-xDD3EN4G`,
    "ant-btn-disabled": `ant-btn-disabled-vnMujKDY`,
    "labelIcon": `labelIcon-Dg-6RA9z`,
    "skewed": `skewed-HdGAPV_L`,
    "vertical": `vertical-nTCVC0pz`,
    "required": `required-hc5kecck`,
    "break-word": `break-word-NyTqBRqa`,
    "largeFormItems": `largeFormItems-Z1CZ24n1`,
    "borderedContent": `borderedContent-jLfoFcRc`,
    "row": `row-msZG10IL`,
    "modalApi": `modalApi-l3N5egcR`,
    "page404": `page404-hOoPDpoe`,
    "page403": `page403-lTYL2B-o`,
    "lightSwitch": `lightSwitch-CFbH44QI`,
    "page500": `page500-UIII77uQ`,
    "darkSwitch": `darkSwitch-9hz0Jikx`,
    "pageWarning": `pageWarning-WL3Lysex`,
    "form": `form-2lT7lAUf`,
    "errorFlexCenter": `errorFlexCenter-nvDkHuRS`,
    "inline": `inline-kZ_1w0Uk`,
    "light": `light-pOcZZNGx`,
    "modalForm": `modalForm--3um0whB`,
    "collapse": `collapse-Vr-B2oJb`,
    "groupWrapper": `groupWrapper-2w1iTeCk`,
    "dark": `dark-d2pE98TO`,
    "group": `group-Qra8F_A_`,
    "modalFooter": `modalFooter-fIAel8rE`,
    "infoBtn": `infoBtn-n52-ki8U`,
    "r2": `r2-WKE5P2zg`,
    "r3": `r3-tLKR57Mb`,
    "max-width": `max-width-PmGFZrFC`,
    "r4": `r4-NCWYrJeR`,
    "r5": `r5-1G9p97s2`,
    "editDark": `editDark-_4teKnPA`,
    "radioGroup": `radioGroup-6vfkThAW`,
    "ant-radio-button-wrapper-disabled": `ant-radio-button-wrapper-disabled-4o7roCLT`,
    "formHidden": `formHidden-KE1th-rR`
};

},
"src/components/Page/Error/error.page.connect.js": function (module, exports, __mako_require__){
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
var _errorpage = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Page/Error/error.page.jsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const MODEL_NAME = 'errorModel';
var _default = (0, _max.connect)(({ authModel, errorModel, loading })=>({
        authModel,
        errorModel,
        loading
    }), (dispatch)=>({
        onQuery (payload) {
            dispatch({
                type: `${MODEL_NAME}/query`,
                payload
            });
        }
    }))(_errorpage.default);
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
"src/components/Page/Error/error.page.jsx": function (module, exports, __mako_require__){
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
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _max = __mako_require__("src/.umi/exports.ts");
var _hooks = __mako_require__("src/utils/hooks.js");
var _console = __mako_require__("src/utils/console.js");
var _i18n = __mako_require__("src/utils/i18n.js");
var _can = __mako_require__("src/utils/auth/can.js");
var _function = __mako_require__("src/utils/function.js");
var _Loader = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Loader/index.js"));
var _errormodulelessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Page/Error/error.module.less?asmodule"));
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
 * @constructor
 */ const ErrorPage = (props)=>{
    _s();
    const intl = (0, _max.useIntl)();
    const { loading, errorModel, status, subject, className, spinOn = [], title = (0, _i18n.t)(intl, 'error.warning'), subTitle = (0, _i18n.t)(intl, 'error.warningMsg'), onQuery = _function.stub } = props;
    const { errors = [] } = errorModel;
    const MODEL_NAME = 'errorModel';
    const { href } = window.location;
    const url = new URL(href);
    const referrer = url.searchParams.get('referrer');
    const extra = referrer ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
        type: 'default',
        onClick: ()=>_max.history.push(referrer),
        children: (0, _i18n.t)(intl, 'actions.back')
    }, void 0, false, {
        fileName: "src/components/Page/Error/error.page.jsx",
        lineNumber: 46,
        columnNumber: 7
    }, this) : null;
    const _error = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_can.Can, {
        I: 'read',
        a: subject,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Loader.default, {
                loading: loading,
                spinOn: [
                    `${MODEL_NAME}/query`,
                    `${MODEL_NAME}/saveError`,
                    ...spinOn
                ]
            }, void 0, false, {
                fileName: "src/components/Page/Error/error.page.jsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: _errormodulelessasmodule.default.errorFlexCenter,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Result, {
                    extra: extra,
                    status: status,
                    title: title,
                    subTitle: subTitle,
                    className: (0, _classnames.default)(_errormodulelessasmodule.default[subject], className)
                }, void 0, false, {
                    fileName: "src/components/Page/Error/error.page.jsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/components/Page/Error/error.page.jsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/Page/Error/error.page.jsx",
        lineNumber: 52,
        columnNumber: 7
    }, this);
    (0, _hooks.effectHook)(()=>{}, [
        JSON.stringify(errors),
        false
    ]);
    (0, _hooks.effectHook)(()=>{
        onQuery({
            status,
            title
        });
    });
    return _error;
};
_s(ErrorPage, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = ErrorPage;
var _default = /*#__PURE__*/ _c1 = (0, _react.memo)(ErrorPage);
var _c;
var _c1;
$RefreshReg$(_c, "ErrorPage");
$RefreshReg$(_c1, "%default%");
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
"src/components/Page/Error/index.js": function (module, exports, __mako_require__){
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
var _errorpageconnect = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Page/Error/error.page.connect.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _default = _errorpageconnect.default;
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
//# sourceMappingURL=shared_1NTfyeGX-async.js.map