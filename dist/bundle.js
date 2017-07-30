/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == (typeof o === "undefined" ? "undefined" : _typeof(o))) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App__ = __webpack_require__(2);



Object(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__components_App__["a" /* default */], null), document.body);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appState__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LoadScreen__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Introduction__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextInput__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TypeChooser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextOutput__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Dictionary__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.handleInputChange = function (evt) {
            _this.setState(function (state) {
                return __WEBPACK_IMPORTED_MODULE_1__appState__["e" /* updateInput */](state, evt.value);
            });
        };

        _this.handleTypeChooserChange = function (evt) {
            _this.setState(function (state) {
                return __WEBPACK_IMPORTED_MODULE_1__appState__["f" /* updateType */](state, evt.value);
            });
        };

        _this.handleTokenClick = function (evt) {
            _this.setState(function (state) {
                return __WEBPACK_IMPORTED_MODULE_1__appState__["d" /* updateHighlight */](state, evt);
            });
        };

        _this.handleClearHighlight = function (evt) {
            _this.setState(function (state) {
                return __WEBPACK_IMPORTED_MODULE_1__appState__["a" /* clearHighlight */](state);
            });
        };

        _this.state = __WEBPACK_IMPORTED_MODULE_1__appState__["c" /* initState */];
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // Load dictionary

            fetch('./data/cedict_ts.u8').then(function (res) {
                return res.ok ? res.text() : Promise.reject(new Error());
            }).then(function (data) {
                return _this2.setState(function (state) {
                    return __WEBPACK_IMPORTED_MODULE_1__appState__["b" /* commitDictionary */](state, data);
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'section',
                { id: 'root' },
                this.state.loading && Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__LoadScreen__["a" /* default */], null),
                !this.state.loading && Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'main',
                    null,
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        'div',
                        { id: 'input' },
                        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__Introduction__["a" /* default */], null),
                        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__TextInput__["a" /* default */], {
                            value: this.state.input,
                            onChange: this.handleInputChange
                        })
                    ),
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        'div',
                        { id: 'output' },
                        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__TypeChooser__["a" /* default */], {
                            value: this.state.type,
                            onChange: this.handleTypeChooserChange
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__TextOutput__["a" /* default */], {
                            value: this.state.input,
                            type: this.state.type,
                            highlight: this.state.highlight,

                            onClick: this.handleClearHighlight,
                            onTokenClick: this.handleTokenClick
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7__Dictionary__["a" /* default */], {
                            data: this.state.highlight,
                            type: this.state.type
                        })
                    )
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = commitDictionary;
/* harmony export (immutable) */ __webpack_exports__["e"] = updateInput;
/* harmony export (immutable) */ __webpack_exports__["f"] = updateType;
/* harmony export (immutable) */ __webpack_exports__["d"] = updateHighlight;
/* harmony export (immutable) */ __webpack_exports__["a"] = clearHighlight;
var initState = {
    loading: true,
    input: '',
    type: 'simplified',
    highlight: null
};

function commitDictionary(state, data) {
    if (!state.loading || window.cedictData != null) return {};

    window.cedictData = data;
    return { loading: false };
}

function updateInput(state, value) {
    if (value === state.input) return {};
    return { input: value };
}

function updateType(state, value) {
    if (value === state.type) return {};
    return { type: value };
}

function updateHighlight(state, token) {
    return { highlight: token };
}

function clearHighlight(state) {
    return updateHighlight(state, null);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LoadScreen = function (_Component) {
    _inherits(LoadScreen, _Component);

    function LoadScreen() {
        _classCallCheck(this, LoadScreen);

        return _possibleConstructorReturn(this, (LoadScreen.__proto__ || Object.getPrototypeOf(LoadScreen)).apply(this, arguments));
    }

    _createClass(LoadScreen, [{
        key: "render",
        value: function render() {
            return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                "section",
                { id: "load-screen" },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "throbber" }),
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    "p",
                    null,
                    "Loading dictionary\u2026"
                )
            );
        }
    }]);

    return LoadScreen;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LoadScreen);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TextInput = function (_Component) {
    _inherits(TextInput, _Component);

    function TextInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TextInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleInput = function (evt) {
            var _this$props$onChange = _this.props.onChange,
                onChange = _this$props$onChange === undefined ? function () {} : _this$props$onChange;

            onChange({ value: evt.currentTarget.value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TextInput, [{
        key: "render",
        value: function render() {
            return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                "section",
                { id: "text-input" },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("textarea", {
                    autofocus: true,
                    value: this.props.value,
                    onInput: this.handleInput
                })
            );
        }
    }]);

    return TextInput;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TextInput);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chinese_tokenizer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chinese_tokenizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chinese_tokenizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WordToken__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var tokenEqual = function tokenEqual(t1, t2) {
    return t1 == null || t2 == null ? t1 == t2 : t1.simplified === t2.simplified;
};

var TextOutput = function (_Component) {
    _inherits(TextOutput, _Component);

    function TextOutput() {
        _classCallCheck(this, TextOutput);

        // Load tokenizers

        var _this = _possibleConstructorReturn(this, (TextOutput.__proto__ || Object.getPrototypeOf(TextOutput)).call(this));

        _this.types = ['simplified', 'traditional'];
        _this.tokenizers = _this.types.map(function (t) {
            return __WEBPACK_IMPORTED_MODULE_1_chinese_tokenizer___default()('../../data/cedict_ts.u8', t);
        });
        return _this;
    }

    _createClass(TextOutput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var allTokens = this.tokenizers.map(function (t) {
                return t.tokenize(_this2.props.value);
            });
            var errorCount = allTokens.map(function (tokens) {
                return tokens.filter(function (x) {
                    return x.pinyin == null;
                }).length;
            });
            var index = errorCount[1] < errorCount[0] ? 1 : 0;
            var tokens = allTokens[index];

            return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'section',
                {
                    id: 'text-output',
                    'class': this.props.highlight != null ? 'stop-hover' : '',
                    onClick: this.props.onClick
                },
                tokens.map(function (token) {
                    return token.pinyin != null ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__WordToken__["a" /* default */], _extends({}, token, {

                        highlight: tokenEqual(token, _this2.props.highlight),
                        type: _this2.props.type,

                        onClick: _this2.props.onTokenClick
                    })) : token[_this2.props.type] === '\n' ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null) : token[_this2.props.type];
                })
            );
        }
    }]);

    return TextOutput;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TextOutput);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cedict = __webpack_require__(8);
var pinyin = __webpack_require__(12);
var dedupe = __webpack_require__(13);

var Tokenizer = function () {
    function Tokenizer(dictionary, options) {
        _classCallCheck(this, Tokenizer);

        this.dictionary = dictionary;
        this.options = options;
    }

    _createClass(Tokenizer, [{
        key: 'tokenize',
        value: function tokenize(text) {
            var _this = this;

            var type = this.options.type;

            var result = [];
            var i = 0;

            var pushEntry = function pushEntry(text) {
                var matches = _this.dictionary.getMatch(text);

                if (!matches.length) {
                    result.push({
                        traditional: text,
                        simplified: text,
                        pinyin: null,
                        pinyinPretty: null,
                        english: null
                    });
                } else {
                    var rawPinyin = dedupe(matches.map(function (x) {
                        return x.pinyin.trim().toLowerCase();
                    }));

                    result.push({
                        traditional: matches[0].traditional,
                        simplified: matches[0].simplified,
                        pinyin: rawPinyin.join('/'),
                        pinyinPretty: rawPinyin.map(function (x) {
                            return pinyin.prettify(x.replace(/u:/g, 'ü'));
                        }).join('/'),
                        english: dedupe(matches.map(function (x) {
                            return x.english;
                        })).join('\n')
                    });
                }
            };

            while (i < text.length) {
                // First match two or more characters

                if (i != text.length - 1) {
                    var getTwo = text.slice(i, i + 2);
                    var entries = this.dictionary.getEntriesStartingWith(getTwo);
                    var entry = void 0;

                    entries.sort(function (x, y) {
                        return y[type].length - x[type].length;
                    });

                    for (var j = 0; j < entries.length; j++) {
                        if (text.slice(i, i + entries[j][type].length) != entries[j][type]) continue;

                        entry = entries[j];
                        pushEntry(entry[type]);
                        break;
                    }

                    if (entry) {
                        i += entry[type].length;
                        continue;
                    }
                }

                // If all fails, match one character

                var character = text[i];
                pushEntry(character);

                i++;
            }

            return result;
        }
    }]);

    return Tokenizer;
}();

module.exports = function (path) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'simplified';

    var dictionary = void 0,
        options = { path: path, type: type };

    if (type == 'simplified') {
        dictionary = cedict.loadSimplified(path);
    } else {
        dictionary = cedict.loadTraditional(path);
    }

    return new Tokenizer(dictionary, options);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parser_1 = __webpack_require__(9);
/**
 * An implementation of Cedict using the prefix tree data structure.
 * Each node (except for the root) contains a character, and contains a list of
 * entries formed by the characters in the path from the root to the node.
 * It uses the traditional attribute as the lookup key into the tree.
 */
var Cedict = function () {
    function Cedict(filename, trad) {
        var entries = parser_1.CedictParser.parse(filename);
        this.traditional = trad;
        this.root = new CedictNode("");
        this.populateTree(entries);
    }
    Cedict.prototype.getMatch = function (query) {
        var node = this.getNodeForWord(query);
        return node != null ? node.entries : [];
    };
    Cedict.prototype.getEntriesStartingWith = function (query) {
        var node = this.getNodeForWord(query);
        return node != null ? this.gatherEntriesUnderNode(node) : [];
    };
    /**
     * E.g. for a query of "我們是" this will return entries for 我 and 我們
     */
    Cedict.prototype.getPrefixEntries = function (query) {
        var node = this.root;
        var entries = [];
        for (var i = 0; i < query.length; i++) {
            var nextChar = query[i];
            if (node.suffixes[nextChar] === undefined) {
                break;
            }
            node = node.suffixes[nextChar];
            Array.prototype.push.apply(entries, node.entries);
        }
        return entries;
    };
    Cedict.prototype.populateTree = function (entries) {
        for (var i = 0; i < entries.length; i++) {
            this.insertEntry(entries[i]);
        }
    };
    Cedict.prototype.insertEntry = function (entry) {
        var node = this.root;
        var characters = this.traditional ? entry.traditional : entry.simplified;
        while (node.word != characters) {
            var nextChar = characters[node.word.length];
            if (node.suffixes[nextChar] === undefined) {
                // never seen this character sequence before, so make a node for it
                node.suffixes[nextChar] = new CedictNode(node.word + nextChar);
            }
            node = node.suffixes[nextChar];
        }
        node.entries.push(entry);
    };
    Cedict.prototype.gatherEntriesUnderNode = function (node) {
        if (node == null) {
            return [];
        }
        var entries = [];
        Array.prototype.push.apply(entries, node.entries);
        // get the entries from all the child nodes
        for (var suffix in node.suffixes) {
            Array.prototype.push.apply(entries, this.gatherEntriesUnderNode(node.suffixes[suffix]));
        }
        return entries;
    };
    /**
     * Returns null if the node is not found
     */
    Cedict.prototype.getNodeForWord = function (word) {
        var node = this.root;
        for (var i = 0; i < word.length; i++) {
            var nextChar = word[i];
            if (node.suffixes[nextChar] === undefined) {
                return null;
            }
            node = node.suffixes[nextChar];
        }
        return node;
    };
    return Cedict;
}();
var CedictNode = function () {
    function CedictNode(w) {
        this.word = w;
        this.entries = [];
        this.suffixes = {};
    }
    return CedictNode;
}();
function loadTraditional(filename) {
    return new Cedict(filename, true);
}
exports.loadTraditional = loadTraditional;
function loadSimplified(filename) {
    return new Cedict(filename, false);
}
exports.loadSimplified = loadSimplified;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs_1 = __webpack_require__(10);
var entry_1 = __webpack_require__(11);
var CedictParser = function () {
    function CedictParser() {}
    /**
     * Parses a CEDICT text file into a list of entries
     */
    CedictParser.parse = function (file) {
        var text = fs_1.readFileSync(file, "utf-8");
        return CedictParser.parseCedictText(text);
    };
    CedictParser.parseCedictText = function (text) {
        var lines = text.split("\n");
        var entries = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            // ignore non-entry lines
            if (line.length === 0 || line[0] === "#") {
                continue;
            }
            entries.push(CedictParser.parseCedictLine(line));
        }
        return entries;
    };
    CedictParser.parseCedictLine = function (line) {
        // Entries have this format:
        // TRADITIONAL SIMPLIFIED [PINYIN] /ENGLISH 1/ENGLISH 2/
        var firstSpace = line.indexOf(" ");
        var secondSpace = line.indexOf(" ", firstSpace + 1);
        var leftBracket = line.indexOf("[");
        var rightBracket = line.indexOf("]");
        var firstSlash = line.indexOf("/");
        var lastNonSlashChar = line.length - 2;
        var traditional = line.substr(0, firstSpace);
        var simplified = line.substr(firstSpace + 1, secondSpace - firstSpace - 1);
        var pinyin = line.substr(leftBracket + 1, rightBracket - leftBracket - 1);
        var english = line.substr(firstSlash + 1, lastNonSlashChar - firstSlash - 1);
        return new entry_1.Entry(traditional, simplified, pinyin, english);
    };
    return CedictParser;
}();
exports.CedictParser = CedictParser;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["readFileSync"] = readFileSync;
function readFileSync() {
    return window.cedictData;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Entry = function () {
    function Entry(trad, simpl, pinyin, english) {
        this.traditional = trad;
        this.simplified = simpl;
        this.pinyin = pinyin;
        this.english = english;
    }
    return Entry;
}();
exports.Entry = Entry;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Quick guide for typing Chinese pinyin on Mac OS X

// Tone 1 (flat) mā – Option + a, then hit a vowel key
// Tone 2 (rising) má – Option + e, then hit a vowel key
// Tone 3 (falling-rising) mǎ – Option + v, then hit a vowel key
// Tone 4 (falling) mà – Option + `, then hit a vowel key

// ǚ – Option + V, then hit V (submitted by QA)
// ǜ – Option + `, then hit V (submitted by QA)


var replacements = {
  'a': ['ā', 'á', 'ǎ', 'à'],
  'e': ['ē', 'é', 'ě', 'è'],
  'u': ['ū', 'ú', 'ǔ', 'ù'],
  'i': ['ī', 'í', 'ǐ', 'ì'],
  'o': ['ō', 'ó', 'ǒ', 'ò'],
  'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
};

var medials = ['i', 'u', 'ü'];

var prettify = function prettify(str) {
  str = str.replace('v', 'ü');
  var syllables = str.split(' ');

  for (var i = 0; i < syllables.length; i++) {
    var syllable = syllables[i];
    var tone = parseInt(syllable[syllable.length - 1]);

    if (tone <= 0 || tone > 5) {
      console.error('invalid tone number:', tone, 'in', syllable);
    } else if (tone === 5) {
      syllables[i] = syllable.slice(0, syllable.length - 1);
    } else {
      for (var j = 0; j < syllable.length; j++) {
        var currentLetter = syllable[j];
        var nextLetter = syllable[j + 1];

        // found a vowel
        if (replacements[currentLetter]) {
          var replaced;
          var letterToReplace;

          // two consecutive vowels
          if (replacements[nextLetter] && medials.indexOf(currentLetter) >= 0) {
            letterToReplace = nextLetter;
          } else {
            letterToReplace = currentLetter;
          }

          replaced = syllable.replace(letterToReplace, replacements[letterToReplace][tone - 1]);
          syllables[i] = replaced.slice(0, replaced.length - 1);
          break;
        }
      }
    }
  }
  return syllables.join(' ');
};

module.exports.prettify = prettify;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var sigmund = __webpack_require__(14);

function dedupe(client, hasher) {
    hasher = hasher || sigmund;

    var clone = [];
    var lookup = {};

    for (var i = 0; i < client.length; i++) {
        var elem = client[i];
        var hashed = hasher(elem);

        if (!lookup[hashed]) {
            clone.push(elem);
            lookup[hashed] = true;
        }
    }

    return clone;
}

module.exports = dedupe;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = sigmund;
function sigmund(subject, maxSessions) {
    maxSessions = maxSessions || 10;
    var notes = [];
    var analysis = '';
    var RE = RegExp;

    function psychoAnalyze(subject, session) {
        if (session > maxSessions) return;

        if (typeof subject === 'function' || typeof subject === 'undefined') {
            return;
        }

        if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) !== 'object' || !subject || subject instanceof RE) {
            analysis += subject;
            return;
        }

        if (notes.indexOf(subject) !== -1 || session === maxSessions) return;

        notes.push(subject);
        analysis += '{';
        Object.keys(subject).forEach(function (issue, _, __) {
            // pseudo-private values.  skip those.
            if (issue.charAt(0) === '_') return;
            var to = _typeof(subject[issue]);
            if (to === 'function' || to === 'undefined') return;
            analysis += issue;
            psychoAnalyze(subject[issue], session + 1);
        });
    }
    psychoAnalyze(subject, 0);
    return analysis;
}

// vim: set softtabstop=4 shiftwidth=4:

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var WordToken = function (_Component) {
    _inherits(WordToken, _Component);

    function WordToken() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WordToken);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WordToken.__proto__ || Object.getPrototypeOf(WordToken)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (evt) {
            evt.stopPropagation();

            var _this$props = _this.props,
                type = _this$props.type,
                _this$props$onClick = _this$props.onClick,
                onClick = _this$props$onClick === undefined ? function () {} : _this$props$onClick;
            var _evt$currentTarget$da = evt.currentTarget.dataset,
                traditional = _evt$currentTarget$da.traditional,
                simplified = _evt$currentTarget$da.simplified,
                pinyin = _evt$currentTarget$da.pinyin,
                english = _evt$currentTarget$da.english;


            onClick({ traditional: traditional, simplified: simplified, pinyin: pinyin, english: english, type: type });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WordToken, [{
        key: 'render',
        value: function render() {
            return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'span',
                {
                    'class': ['word', this.props.highlight ? 'highlight' : ''].join(' ').trim(),

                    'data-traditional': this.props.traditional,
                    'data-simplified': this.props.simplified,
                    'data-pinyin': this.props.pinyinPretty,
                    'data-english': this.props.english,

                    onClick: this.handleClick
                },
                this.props[this.props.type]
            );
        }
    }]);

    return WordToken;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (WordToken);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TypeChooser = function (_Component) {
    _inherits(TypeChooser, _Component);

    function TypeChooser() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TypeChooser);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TypeChooser.__proto__ || Object.getPrototypeOf(TypeChooser)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (evt) {
            evt.preventDefault();

            var value = evt.currentTarget.parentNode.dataset.value;
            var _this$props$onChange = _this.props.onChange,
                onChange = _this$props$onChange === undefined ? function () {} : _this$props$onChange;


            if (_this.props.value !== value) onChange({ value: value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TypeChooser, [{
        key: "render",
        value: function render() {
            return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                "section",
                { id: "type-chooser" },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    "ul",
                    null,
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        "li",
                        {
                            "data-value": "simplified",
                            "class": this.props.value === 'simplified' ? 'current' : ''
                        },
                        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            "a",
                            { href: "#", onClick: this.handleClick },
                            "Simplified"
                        )
                    ),
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        "li",
                        {
                            "data-value": "traditional",
                            "class": this.props.value === 'traditional' ? 'current' : ''
                        },
                        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            "a",
                            { href: "#", onClick: this.handleClick },
                            "Traditional"
                        )
                    )
                )
            );
        }
    }]);

    return TypeChooser;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TypeChooser);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Introduction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


function Introduction() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'section',
        { id: 'introduction' },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'h1',
            null,
            'Chinese Tokenizer'
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'p',
            null,
            ['This is a tool that can tokenize Chinese texts into words using ', Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'a',
                { href: 'https://github.com/yishn/chinese-tokenizer' },
                'chinese-tokenizer'
            ), '. Just paste your text down below:']
        )
    );
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Dictionary = function (_Component) {
    _inherits(Dictionary, _Component);

    function Dictionary() {
        _classCallCheck(this, Dictionary);

        return _possibleConstructorReturn(this, (Dictionary.__proto__ || Object.getPrototypeOf(Dictionary)).apply(this, arguments));
    }

    _createClass(Dictionary, [{
        key: "render",
        value: function render() {
            if (this.props.data == null) return;

            var _props$data = this.props.data,
                pinyin = _props$data.pinyin,
                english = _props$data.english;


            return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                "section",
                { id: "dictionary", "class": "show" },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    "h1",
                    null,
                    this.props.data[this.props.type]
                ),
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    "p",
                    { "class": "pinyin" },
                    pinyin
                ),
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    "ul",
                    null,
                    english.split('\n').map(function (line) {
                        return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            "li",
                            null,
                            line
                        );
                    })
                )
            );
        }
    }]);

    return Dictionary;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Dictionary);

/***/ })
/******/ ]);