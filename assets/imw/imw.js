var On = Object.defineProperty;
var Bn = (e, t, n) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wi = (e, t, n) => Bn(e, typeof t != "symbol" ? t + "" : t, n);
var vt, R, Ki, _e, yi, Qi, Yi, It, at, Ke, Ji, Jt, Ht, Ot, Xi, ut = {}, pt = [], zn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, bt = Array.isArray;
function ge(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Xt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Un(e, t, n) {
  var r, s, a, o = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? s = t[a] : o[a] = t[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? vt.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
  return ot(e, o, r, s, null);
}
function ot(e, t, n, r, s) {
  var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Ki, __i: -1, __u: 0 };
  return s == null && R.vnode != null && R.vnode(a), a;
}
function oe(e) {
  return e.children;
}
function lt(e, t) {
  this.props = e, this.context = t;
}
function Ae(e, t) {
  if (t == null) return e.__ ? Ae(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ae(e) : null;
}
function Vn(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, r = [], s = [], a = ge({}, t);
    a.__v = t.__v + 1, R.vnode && R.vnode(a), Zt(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? Ae(t), !!(32 & t.__u), s), a.__v = t.__v, a.__.__k[a.__i] = a, sn(r, a, s), t.__e = t.__ = null, a.__e != n && Zi(a);
  }
}
function Zi(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Zi(e);
}
function Bt(e) {
  (!e.__d && (e.__d = !0) && _e.push(e) && !mt.__r++ || yi != R.debounceRendering) && ((yi = R.debounceRendering) || Qi)(mt);
}
function mt() {
  try {
    for (var e, t = 1; _e.length; ) _e.length > t && _e.sort(Yi), e = _e.shift(), t = _e.length, Vn(e);
  } finally {
    _e.length = mt.__r = 0;
  }
}
function en(e, t, n, r, s, a, o, l, u, c, f) {
  var w, d, y, g, h, m, v = r && r.__k || pt, k = t.length;
  for (u = Gn(n, t, v, u, k), w = 0; w < k; w++) (y = n.__k[w]) != null && (d = y.__i != -1 && v[y.__i] || ut, y.__i = w, m = Zt(e, y, d, s, a, o, l, u, c, f), g = y.__e, y.ref && d.ref != y.ref && (d.ref && ei(d.ref, null, y), f.push(y.ref, y.__c || g, y)), h == null && g != null && (h = g), 4 & y.__u ? (u = tn(y, u, e), d.__e && (d.__e = null)) : typeof y.type == "function" && m !== void 0 ? u = m : g && (u = g.nextSibling), y.__u &= -7);
  return n.__e = h, u;
}
function Gn(e, t, n, r, s) {
  var a, o, l, u, c, f = n.length, w = f, d = 0;
  for (e.__k = new Array(s), a = 0; a < s; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = ot(null, o, null, null, null) : bt(o) ? o = e.__k[a] = ot(oe, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = ot(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, u = a + d, o.__ = e, o.__b = e.__b + 1, l = null, (c = o.__i = Kn(o, n, u, w)) != -1 && (w--, (l = n[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (s > f ? d-- : s < f && d++), typeof o.type != "function" && (o.__u |= 4)) : c != u && (c == u - 1 ? d-- : c == u + 1 ? d++ : (c > u ? d-- : d++, o.__u |= 4))) : e.__k[a] = null;
  if (w) for (a = 0; a < f; a++) (l = n[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = Ae(l)), an(l, l));
  return r;
}
function tn(e, t, n) {
  var r, s;
  if (typeof e.type == "function") {
    for (r = e.__k, s = 0; r && s < r.length; s++) r[s] && (r[s].__ = e, t = tn(r[s], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = Ae(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Kn(e, t, n, r) {
  var s, a, o, l = e.key, u = e.type, c = t[n], f = c != null && (2 & c.__u) == 0;
  if (c === null && l == null || f && l == c.key && u == c.type) return n;
  if (r > (f ? 1 : 0)) {
    for (s = n - 1, a = n + 1; s >= 0 || a < t.length; ) if ((c = t[o = s >= 0 ? s-- : a++]) != null && (2 & c.__u) == 0 && l == c.key && u == c.type) return o;
  }
  return -1;
}
function vi(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || zn.test(t) ? n : n + "px";
}
function et(e, t, n, r, s) {
  var a, o;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || vi(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || vi(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Ji, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r ? n[Ke] = r[Ke] : (n[Ke] = Jt, e.addEventListener(t, a ? Ot : Ht, a)) : e.removeEventListener(t, a ? Ot : Ht, a);
  else {
    if (s == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function bi(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[at] == null) t[at] = Jt++;
      else if (t[at] < n[Ke]) return;
      return n(R.event ? R.event(t) : t);
    }
  };
}
function Zt(e, t, n, r, s, a, o, l, u, c) {
  var f, w, d, y, g, h, m, v, k, b, _, p, x, C, E, M, D = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (u = !!(32 & n.__u), a = [l = t.__e = n.__e]), (f = R.__b) && f(t);
  e: if (typeof D == "function") {
    w = o.length;
    try {
      if (k = t.props, b = D.prototype && D.prototype.render, _ = (f = D.contextType) && r[f.__c], p = f ? _ ? _.props.value : f.__ : r, n.__c ? v = (d = t.__c = n.__c).__ = d.__E : (b ? t.__c = d = new D(k, p) : (t.__c = d = new lt(k, p), d.constructor = D, d.render = Yn), _ && _.sub(d), d.state || (d.state = {}), d.__n = r, y = d.__d = !0, d.__h = [], d._sb = []), b && d.__s == null && (d.__s = d.state), b && D.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = ge({}, d.__s)), ge(d.__s, D.getDerivedStateFromProps(k, d.__s))), g = d.props, h = d.state, d.__v = t, y) b && D.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), b && d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (b && D.getDerivedStateFromProps == null && k !== g && d.componentWillReceiveProps != null && d.componentWillReceiveProps(k, p), t.__v == n.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(k, d.__s, p) === !1) {
          t.__v != n.__v && (d.props = k, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(Y) {
            Y && (Y.__ = t);
          }), pt.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && o.push(d), l = Ae(n);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(k, d.__s, p), b && d.componentDidUpdate != null && d.__h.push(function() {
          d.componentDidUpdate(g, h, m);
        });
      }
      if (d.context = p, d.props = k, d.__P = e, d.__e = !1, x = R.__r, C = 0, b) d.state = d.__s, d.__d = !1, x && x(t), f = d.render(d.props, d.state, d.context), pt.push.apply(d.__h, d._sb), d._sb = [];
      else do
        d.__d = !1, x && x(t), f = d.render(d.props, d.state, d.context), d.state = d.__s;
      while (d.__d && ++C < 25);
      d.state = d.__s, d.getChildContext != null && (r = ge(ge({}, r), d.getChildContext())), b && !y && d.getSnapshotBeforeUpdate != null && (m = d.getSnapshotBeforeUpdate(g, h)), E = f != null && f.type === oe && f.key == null ? rn(f.props.children) : f, l = en(e, bt(E) ? E : [E], t, n, r, s, a, o, l, u, c), d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), v && (d.__E = d.__ = null);
    } catch (Y) {
      if (o.length = w, t.__v = null, u || a != null) {
        if (Y.then) {
          for (t.__u |= u ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
          a != null && (a[a.indexOf(l)] = null), t.__e = l;
        } else if (a != null) for (M = a.length; M--; ) Xt(a[M]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), Y.then || nn(t), R.__e(Y, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = Qn(n.__e, t, n, r, s, a, o, u, c);
  return (f = R.diffed) && f(t), 128 & t.__u ? void 0 : l;
}
function nn(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(nn));
}
function sn(e, t, n) {
  for (var r = 0; r < n.length; r++) ei(n[r], n[++r], n[++r]);
  R.__c && R.__c(t, e), e.some(function(s) {
    try {
      e = s.__h, s.__h = [], e.some(function(a) {
        a.call(s);
      });
    } catch (a) {
      R.__e(a, s.__v);
    }
  });
}
function rn(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : bt(e) ? e.map(rn) : e.constructor !== void 0 ? null : ge({}, e);
}
function Qn(e, t, n, r, s, a, o, l, u) {
  var c, f, w, d, y, g, h, m = n.props || ut, v = t.props, k = t.type;
  if (k == "svg" ? s = "http://www.w3.org/2000/svg" : k == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), a != null) {
    for (c = 0; c < a.length; c++) if ((y = a[c]) && "setAttribute" in y == !!k && (k ? y.localName == k : y.nodeType == 3)) {
      e = y, a[c] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode(v);
    e = document.createElementNS(s, k, v.is && v), l && (R.__m && R.__m(t, a), l = !1), a = null;
  }
  if (k == null) m === v || l && e.data == v || (e.data = v);
  else {
    if (a = k == "textarea" && v.defaultValue != null ? null : a && vt.call(e.childNodes), !l && a != null) for (m = {}, c = 0; c < e.attributes.length; c++) m[(y = e.attributes[c]).name] = y.value;
    for (c in m) y = m[c], c == "dangerouslySetInnerHTML" ? w = y : c == "children" || c in v || c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v || et(e, c, null, y, s);
    for (c in v) y = v[c], c == "children" ? d = y : c == "dangerouslySetInnerHTML" ? f = y : c == "value" ? g = y : c == "checked" ? h = y : l && typeof y != "function" || m[c] === y || et(e, c, y, m[c], s);
    if (f) l || w && (f.__html == w.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (w && (e.innerHTML = ""), en(t.type == "template" ? e.content : e, bt(d) ? d : [d], t, n, r, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, a, o, a ? a[0] : n.__k && Ae(n, 0), l, u), a != null) for (c = a.length; c--; ) Xt(a[c]);
    l && k != "textarea" || (c = "value", k == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[c] || k == "progress" && !g || k == "option" && g != m[c]) && et(e, c, g, m[c], s), c = "checked", h != null && h != e[c] && et(e, c, h, m[c], s));
  }
  return e;
}
function ei(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    R.__e(s, n);
  }
}
function an(e, t, n) {
  var r, s;
  if (R.unmount && R.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || ei(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      R.__e(a, t);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = e.__k) for (s = 0; s < r.length; s++) r[s] && an(r[s], t, n || typeof e.type != "function");
  n || Xt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Yn(e, t, n) {
  return this.constructor(e, n);
}
function Jn(e, t, n) {
  var r, s, a, o;
  t == document && (t = document.documentElement), R.__ && R.__(e, t), s = (r = !1) ? null : t.__k, a = [], o = [], Zt(t, e = t.__k = Un(oe, null, [e]), s || ut, ut, t.namespaceURI, s ? null : t.firstChild ? vt.call(t.childNodes) : null, a, s ? s.__e : t.firstChild, r, o), sn(a, e, o), e.props.children = null;
}
function Xn(e) {
  function t(n) {
    var r, s;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (s = {})[t.__c] = this, this.getChildContext = function() {
      return s;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && r.forEach(function(o) {
        o.__e = !0, Bt(o);
      });
    }, this.sub = function(a) {
      r.add(a);
      var o = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        r && r.delete(a), o && o.call(a);
      };
    }), n.children;
  }
  return t.__c = "__cC" + Xi++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
vt = pt.slice, R = { __e: function(e, t, n, r) {
  for (var s, a, o; t = t.__; ) if ((s = t.__c) && !s.__) try {
    if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(e)), o = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), o = s.__d), o) return s.__E = s;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Ki = 0, lt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ge({}, this.state), typeof e == "function" && (e = e(ge({}, n), this.props)), e && ge(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, lt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, lt.prototype.render = oe, _e = [], Qi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Yi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, mt.__r = 0, It = Math.random().toString(8), at = "__d" + It, Ke = "__a" + It, Ji = /(PointerCapture)$|Capture$/i, Jt = 0, Ht = bi(!1), Ot = bi(!0), Xi = 0;
var Zn = 0;
function i(e, t, n, r, s, a) {
  t || (t = {});
  var o, l, u = t;
  if ("ref" in u) for (l in u = {}, t) l == "ref" ? o = t[l] : u[l] = t[l];
  var c = { type: e, props: u, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Zn, __i: -1, __u: 0, __source: s, __self: a };
  if (typeof e == "function" && (o = e.defaultProps)) for (l in o) u[l] === void 0 && (u[l] = o[l]);
  return R.vnode && R.vnode(c), c;
}
var Ie, P, Mt, _i, Qe = 0, on = [], N = R, ki = N.__b, xi = N.__r, $i = N.diffed, Ci = N.__c, Ei = N.unmount, qi = N.__;
function Ze(e, t) {
  N.__h && N.__h(P, e, Qe || t), Qe = 0;
  var n = P.__H || (P.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function q(e) {
  return Qe = 1, es(ln, e);
}
function es(e, t, n) {
  var r = Ze(Ie++, 2);
  if (r.t = e, !r.__c && (r.__ = [ln(void 0, t), function(l) {
    var u = r.__N ? r.__N[0] : r.__[0], c = r.t(u, l);
    u !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = P, !P.__f)) {
    var s = function(l, u, c) {
      if (!r.__c.__H) return !0;
      var f = !1, w = r.__c.props !== l;
      if (r.__c.__H.__.some(function(y) {
        if (y.__N) {
          f = !0;
          var g = y.__[0];
          y.__ = y.__N, y.__N = void 0, g !== y.__[0] && (w = !0);
        }
      }), a) {
        var d = a.call(this, l, u, c);
        return f ? d || w : d;
      }
      return !f || w;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate, o = P.componentWillUpdate;
    P.componentWillUpdate = function(l, u, c) {
      if (this.__e) {
        var f = a;
        a = void 0, s(l, u, c), a = f;
      }
      o && o.call(this, l, u, c);
    }, P.shouldComponentUpdate = s;
  }
  return r.__N || r.__;
}
function V(e, t) {
  var n = Ze(Ie++, 3);
  !N.__s && ti(n.__H, t) && (n.__ = e, n.u = t, P.__H.__h.push(n));
}
function ts(e, t) {
  var n = Ze(Ie++, 4);
  !N.__s && ti(n.__H, t) && (n.__ = e, n.u = t, P.__h.push(n));
}
function we(e) {
  return Qe = 5, he(function() {
    return { current: e };
  }, []);
}
function he(e, t) {
  var n = Ze(Ie++, 7);
  return ti(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function me(e, t) {
  return Qe = 8, he(function() {
    return e;
  }, t);
}
function is(e) {
  var t = P.context[e.__c], n = Ze(Ie++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(P)), t.props.value) : e.__;
}
function ns() {
  for (var e; e = on.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(ct), t.__h.some(zt), t.__h = [];
    } catch (n) {
      t.__h = [], N.__e(n, e.__v);
    }
  }
}
N.__b = function(e) {
  P = null, ki && ki(e);
}, N.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), qi && qi(e, t);
}, N.__r = function(e) {
  xi && xi(e), Ie = 0;
  var t = (P = e.__c).__H;
  t && (Mt === P ? (t.__h = [], P.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(ct), t.__h.some(zt), t.__h = [], Ie = 0)), Mt = P;
}, N.diffed = function(e) {
  $i && $i(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (on.push(t) !== 1 && _i === N.requestAnimationFrame || ((_i = N.requestAnimationFrame) || ss)(ns)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Mt = P = null;
}, N.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(ct), n.__h = n.__h.filter(function(r) {
        return !r.__ || zt(r);
      });
    } catch (r) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], N.__e(r, n.__v);
    }
  }), Ci && Ci(e, t);
}, N.unmount = function(e) {
  Ei && Ei(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      ct(r);
    } catch (s) {
      t = s;
    }
  }), n.__H = void 0, t && N.__e(t, n.__v));
};
var Si = typeof requestAnimationFrame == "function";
function ss(e) {
  var t, n = function() {
    clearTimeout(r), Si && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Si && (t = requestAnimationFrame(n));
}
function ct(e) {
  var t = P, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), P = t;
}
function zt(e) {
  var t = P;
  e.__c = e.__(), P = t;
}
function ti(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function ln(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function le(e) {
  return e.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}
const rs = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work".split(" ")
);
function cn(e) {
  return le(e).replace(/[^a-z0-9+#/. -]/g, " ").split(/[\s/]+/).map((t) => t.replace(/^[.-]+|[.-]+$/g, "")).filter((t) => t.length > 1 && !rs.has(t)).map(as);
}
function as(e) {
  if (e.length <= 4) return e;
  for (const t of ["ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"])
    if (e.endsWith(t) && e.length - t.length >= 4) return e.slice(0, -t.length);
  return e;
}
const F = (e) => !!e && e.status === "verified" && e.public_safe, os = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function ls(e) {
  const t = e.length >= 4 && /[a-rt-z]$/.test(e) ? "s?" : "";
  return new RegExp(`(?<![a-z0-9])${os(e)}${t}(?![a-z0-9+#])`, "g");
}
function cs(e) {
  const t = e;
  t.claim = new Map(e.claims.map((s) => [s.id, s])), t.entity = new Map(e.entities.map((s) => [s.id, s])), t.skill = new Map(e.skills.map((s) => [s.id, s])), t.gap = new Map(e.gaps.map((s) => [s.id, s])), t.role = new Map(e.roles.map((s) => [s.id, s])), t.archByEntity = new Map(e.architectures.map((s) => [s.entity, s]));
  const n = [], r = (s, a) => {
    const o = le(s);
    o && n.push({ term: o, ref: { ...a, term: s }, re: ls(o) });
  };
  for (const s of e.skills)
    r(s.name, { id: s.id, kind: "skill", near: !1 }), s.aliases.forEach((a) => r(a, { id: s.id, kind: "skill", near: !1 })), (s.near || []).forEach((a) => r(a, { id: s.id, kind: "skill", near: !0 }));
  for (const s of e.gaps) s.aliases.forEach((a) => r(a, { id: s.id, kind: "gap", near: !1 }));
  n.sort((s, a) => a.term.length - s.term.length), t.aliases = n, t.statableBySkill = /* @__PURE__ */ new Map(), t.statableByEntity = /* @__PURE__ */ new Map(), t.pendingBySkill = /* @__PURE__ */ new Map();
  for (const s of e.claims)
    if (F(s)) {
      for (const a of s.tags) (t.statableBySkill.get(a) ?? t.statableBySkill.set(a, []).get(a)).push(s);
      (t.statableByEntity.get(s.entity) ?? t.statableByEntity.set(s.entity, []).get(s.entity)).push(s);
    } else if (s.status === "verification_required")
      for (const a of s.tags) (t.pendingBySkill.get(a) ?? t.pendingBySkill.set(a, []).get(a)).push(s);
  return t;
}
async function ds(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`evidence ${t.status}`);
  return cs(await t.json());
}
const ee = (e, t) => e.entity.get(t)?.short ?? t, _t = (e, t) => e.skill.get(t)?.name ?? e.gap.get(t)?.name ?? t;
function kt(e, t) {
  const n = le(t), r = [], s = /* @__PURE__ */ new Map();
  for (const a of e.aliases) {
    a.re.lastIndex = 0;
    let o;
    for (; o = a.re.exec(n); ) {
      const l = o.index, u = l + o[0].length;
      if (r.some(([w, d]) => l < d && u > w)) continue;
      r.push([l, u]);
      const c = a.ref.near ? `near:${a.ref.term}` : a.ref.id, f = s.get(c);
      f ? f.count++ : s.set(c, { ...a.ref, count: 1, index: l });
    }
  }
  return [...s.values()].sort((a, o) => a.index - o.index);
}
const hs = {
  dia: ["drug interaction", "drug-interaction", "drug agent", "interaction agent", "medication review", "medication app", "medication-label", "label review", "rxnorm", "dailymed", "drug app"],
  voice: ["voice harness", "voice-agent", "voice agent qa", "qa harness", "voice qa", "pretty good ai", "synthetic patient", "voice project", "phone agent", "harness", "barge-in", "barge in"],
  cliniq: ["cliniq", "clin iq", "substance", "research-a-thon", "nsf"],
  sssd: ["surgical", "ss-sd", "sssd", "kinematic", "jigsaws", "video synthesis", "suturing"],
  qml: ["quantum", "qcnn", "qsvm", "chest x-ray", "classical vs"],
  tifin: ["tifin", "portfolio copilot", "advisor copilot", "copilot", "copilots"],
  citizen: ["citizen health", "citizen"],
  athena: ["athena"],
  nyc: ["citi bike", "bike share", "bike-share", "smartinternz", "nyc"],
  dac: ["data analytics club", "student club", "vice president"],
  education: ["degree", "masters", "master's", "education", "university", "umkc", "certification", "certifications", "certificate"],
  imw: ["interview my work", "this assistant", "this tool", "this chatbot", "this workspace", "you built", "how do you work", "how were you built", "this system"]
}, jt = Object.entries(hs).map(
  ([e, t]) => [e, new RegExp(`(?<![a-z0-9])(${t.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`)]
);
function dn(e) {
  const t = le(e);
  return jt.filter(([, n]) => n.test(t)).map(([n]) => n).sort((n, r) => t.search(jt.find(([s]) => s === n)[1]) - t.search(jt.find(([s]) => s === r)[1]));
}
const Ai = /* @__PURE__ */ new WeakMap();
function us(e) {
  let t = Ai.get(e);
  if (t) return t;
  const n = e.claims.filter(F).map((s) => {
    const a = [e.entity.get(s.entity)?.name ?? "", ...s.tags.map((o) => e.skill.get(o)?.name ?? "")].join(" ");
    return { claim: s, toks: cn(`${s.text} ${a}`) };
  }), r = /* @__PURE__ */ new Map();
  for (const s of n) new Set(s.toks).forEach((a) => r.set(a, (r.get(a) ?? 0) + 1));
  return t = { docs: n, df: r, avg: n.reduce((s, a) => s + a.toks.length, 0) / Math.max(1, n.length) }, Ai.set(e, t), t;
}
function hn(e, t, n = {}) {
  const r = us(e), s = [...new Set(cn(t))], a = new Set(n.concepts ?? kt(e, t).filter((w) => w.kind === "skill").map((w) => w.id)), o = new Set(n.entities ?? dn(t)), l = r.docs.length, u = 1.2, c = 0.75, f = [];
  for (const w of r.docs) {
    let d = 0;
    for (const y of s) {
      const g = w.toks.filter((v) => v === y).length;
      if (!g) continue;
      const h = r.df.get(y) ?? 0, m = Math.log(1 + (l - h + 0.5) / (h + 0.5));
      d += m * (g * (u + 1) / (g + u * (1 - c + c * w.toks.length / r.avg)));
    }
    for (const y of w.claim.tags) a.has(y) && (d += 2.5);
    o.has(w.claim.entity) && (d += 3), w.claim.kind === "limitation" && (d *= 0.8), d > 0 && f.push({ claim: w.claim, score: d });
  }
  return f.sort((w, d) => d.score - w.score).slice(0, n.limit ?? 12);
}
const Ii = { public_artifact: 1, self_reported: 0.8 };
function ue(e, t, n = {}) {
  const r = e.gap.get(t), s = (r?.partial ?? []).map((u) => e.claim.get(u)).filter((u) => !!u && u.status === "verified" && u.public_safe);
  if (r && s.length)
    return {
      id: t,
      label: r.name,
      category: "related",
      priority: n.priority,
      claims: s.map((u) => u.id),
      entities: Ue(s.map((u) => u.entity)),
      statement: r.statement
    };
  if (r) {
    const u = r.related.flatMap((c) => e.statableBySkill.get(c) ?? []);
    return {
      id: t,
      label: r.name,
      category: r.verify ? "verification" : "missing",
      priority: n.priority,
      claims: [],
      entities: Ue(u.map((c) => c.entity)).slice(0, 4),
      statement: r.statement,
      via: r.related[0]
    };
  }
  const a = e.skill.get(t);
  if (!a)
    return {
      id: `term:${t}`,
      label: t,
      term: t,
      category: "missing",
      priority: n.priority,
      claims: [],
      entities: [],
      statement: "Not shown in his projects or roles so far."
    };
  const o = e.statableBySkill.get(t) ?? [], l = (e.pendingBySkill.get(t) ?? []).map((u) => u.id);
  if (n.near)
    return {
      id: `near:${n.near}`,
      label: Rt(n.near),
      term: n.near,
      category: o.length ? "related" : "missing",
      priority: n.priority,
      claims: o.slice(0, 6).map((u) => u.id),
      entities: Ue(o.map((u) => u.entity)),
      via: t,
      statement: o.length ? `${Rt(n.near)} itself is not demonstrated. The closest evidence is ${a.name.toLowerCase()}.` : `${Rt(n.near)} is not demonstrated.`
    };
  if (o.length) {
    const u = o.some((c) => c.strength === "public_artifact");
    return {
      id: t,
      label: a.name,
      category: "direct",
      priority: n.priority,
      claims: Tt(o).map((c) => c.id),
      entities: Ue(Tt(o).map((c) => c.entity)),
      strength: u ? "artifact" : "self_reported",
      pending: l
    };
  }
  for (const u of a.related) {
    const c = e.statableBySkill.get(u) ?? [];
    if (c.length)
      return {
        id: t,
        label: a.name,
        category: "related",
        priority: n.priority,
        via: u,
        claims: Tt(c).slice(0, 6).map((f) => f.id),
        entities: Ue(c.map((f) => f.entity)),
        pending: l,
        statement: `No direct evidence for ${a.name.toLowerCase()}. The closest is ${_t(e, u).toLowerCase()}.`
      };
  }
  return l.length ? {
    id: t,
    label: a.name,
    category: "verification",
    priority: n.priority,
    claims: [],
    entities: [],
    pending: l,
    statement: "Only claims that still need verification mention this."
  } : {
    id: t,
    label: a.name,
    category: "missing",
    priority: n.priority,
    claims: [],
    entities: [],
    statement: `${a.name} is not currently demonstrated in the portfolio.`
  };
}
function Tt(e) {
  return [...e].sort((t, n) => (Ii[n.strength] ?? 0) - (Ii[t.strength] ?? 0) || (t.kind === "limitation" ? 1 : 0) - (n.kind === "limitation" ? 1 : 0));
}
function ii(e, t, n, r = {}) {
  const s = { direct: 0, related: 0, verification: 0, missing: 0 };
  n.forEach((u) => s[u.category]++);
  const a = /* @__PURE__ */ new Map();
  for (const u of n)
    if (!(u.category !== "direct" && u.category !== "related"))
      for (const c of u.entities) {
        const f = a.get(c) ?? { score: 0, requirements: [] };
        f.score += (u.category === "direct" ? 1 : 0.4) * (c === "imw" ? 0.4 : 1), f.requirements.push(u.id), a.set(c, f);
      }
  const o = ["direct", "related", "verification", "missing"], l = { required: 0, preferred: 1, mentioned: 2, undefined: 1 };
  return {
    title: t,
    source: "role",
    notes: [],
    ...r,
    requirements: [...n].sort((u, c) => o.indexOf(u.category) - o.indexOf(c.category) || l[String(u.priority)] - l[String(c.priority)]),
    counts: s,
    entities: [...a.entries()].map(([u, c]) => ({ id: u, ...c })).filter((u) => e.entity.has(u.id)).sort((u, c) => c.score - u.score)
  };
}
function $e(e, t) {
  const n = e.role.get(t);
  if (!n) throw new Error(`unknown role ${t}`);
  const r = [...n.requirements.map((a) => ue(e, a)), ...n.gaps.map((a) => ue(e, a))], s = [n.level_note, e.subject.level_note].filter(Boolean);
  return ii(e, n.title, r, { source: "role", roleId: t, notes: s });
}
const ie = {
  direct: "Direct evidence",
  related: "Related evidence",
  verification: "Verification required",
  missing: "Not currently demonstrated"
}, Ue = (e) => [...new Set(e)], ps = /* @__PURE__ */ new Set(["ai", "bi", "ml", "aws", "gcp", "sql", "api", "asr", "tts", "sse", "ec2", "s3", "hl7", "cda", "k6", "gpu", "etl"]), Rt = (e) => e.replace(/\b[a-z][a-z0-9]*/g, (t) => ps.has(t) ? t.toUpperCase() : t.charAt(0).toUpperCase() + t.slice(1)), Pe = { bachelor: 1, master: 2, phd: 3, mba: 0 }, Mi = { bachelor: "Bachelor's", master: "Master's", phd: "PhD", mba: "MBA" }, ms = [
  ["bachelor", /\bbachelor|\b(?:b\.s\.?|b\.sc\.?|bsc|b\.a\.|b\.tech|btech|b\.e\.)(?![a-z])|\b(?:bs|ba)(?=\s*(?:\/|or\b|in\b|degree\b|,))|\b(?:undergraduate|college|university|4-year|four-year) degree/i],
  ["master", /\bmaster'?s\b|\bmasters\b|\bmaster of\b|\bmaster degree|\b(?:m\.s\.?|m\.sc\.?|msc|m\.tech|mtech|m\.eng\.?|meng)(?![a-z])|(?<![a-z])ms(?=\s*(?:\/|or\b|in\b|degree\b|,|$))|\b(?:graduate|advanced|post-?graduate) degree/i],
  ["phd", /\bph\.? ?d\b|\bdoctorate\b|\bdoctoral\b/i],
  ["mba", /\bmba\b/i]
], fs = /\b(?:degree|bachelor'?s?|master'?s?|ph\.? ?d|doctorate|bs|ms|ba|b\.s\.?|m\.s\.?|bsc|msc)\s+(?:degree\s+)?in\s+(.+)/i, gs = /computer|computing|quantitative|\bstem\b|technical|math|statistic|data|machine learning|artificial intelligence|\bai\b|information|software|engineering|analytics|related|relevant|equivalent|similar/i, ws = /[,;:(]|\s(?:or|and|such as|e\.g|including|preferred|required|with|from|plus)\b/i, ys = /\bdegree\b|\brequired\b|\bpreferred\b|\bor equivalent\b|\brelated field\b|\bminimum\b|\bgpa\b|\bclass of\b|graduat/i, vs = /graduat|\bdegree (?:completed|conferred|earned|awarded)\b|\bcompleted (?:a |an |your |their )?(?:bachelor'?s |master'?s |ph\.? ?d |)degree|\bclass of\b|\bnew grad|\brecent grad|\bearly[- ]career\b|\bentry[- ]level\b|within the (?:past|last|previous)/i, bs = /\bnew grad|\brecent(?:ly)? grad|\bearly[- ]career\b|\bentry[- ]level\b/i, _s = /\bcurrently (?:enrolled|pursuing|attending)\b|\benrolled (?:in|at) (?:a|an)\b|\bpursuing (?:a|an|your) (?:bachelor|master|degree|ph\.? ?d|ms\b|bs\b|graduate)|\breturning to (?:school|university|college)\b|\bmust be a (?:current )?(?:student|undergraduate|graduate student)\b|\bcurrent (?:students?|undergraduates?)\b/i, ks = /\bgpa\b|grade point average/i, ji = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12, spring: 5, summer: 8, fall: 12, autumn: 12, winter: 12 }, xs = /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?|spring|summer|fall|autumn|winter)\.?,?\s+(20\d{2})\b|\b(0?[1-9]|1[0-2])\/(20\d{2})\b/gi, $s = /within the (?:past|last|previous) (\d{1,2}|one|two|three|four|five|six|twelve|eighteen|twenty-four) (months?|years?)/i, Re = (e, t) => e * 12 + (t - 1), un = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12, eighteen: 18, "twenty-four": 24 }, Cs = /\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*(?:(?:-|to)\s*(?:\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*)?(?:years?|yrs?)\b/i, Es = /experien|professional|industry|hands-on|track record|working|background|building|developing|shipping|\bas an? /i, qs = /\b(?:hybrid|on-?site|in[- ]office|in[- ]person|remote|days? (?:a|per) week|relocat\w*|visa|sponsorship|work authori[sz]ation|authori[sz]ed to work|citizenship|security clearance|clearance|background check|drug (?:test|screen)\w*|travel|salary|compensation|pay range|benefits|401\(?k\)?|pto|paid time off|shifts?|commute|time ?zones?|full[- ]time|part[- ]time|location)\b/i, Ss = (e) => `Not assessed: ${e.join("; ")}. These didn't match anything in the evidence database, so they are neither confirmed nor ruled out. Ask Rahul about them.`, As = "Work-arrangement items (location, schedule, travel, authorization) are not skills, so they are left out of this comparison. Ask Rahul about them directly.", Is = (e) => e.replace(/[’‘`]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ").trim().replace(/^(?:[-*•·▪◦]|\d+[.)])\s+/, ""), xt = (e) => e.charAt(0).toUpperCase() + e.slice(1), Ms = (e) => [...new Set(e)];
function js(e) {
  return e.length < 2 ? e.join("") : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function pn(e) {
  const t = ms.filter(([, n]) => n.test(e)).map(([n]) => n);
  return t.length > 1 ? t.filter((n) => n !== "mba") : t;
}
function Ts(e, t, n) {
  const r = pn(t), s = e.subject.credentials;
  if (!r.length || !s) return null;
  const o = t.match(fs)?.[1] ?? "", l = o.split(ws)[0].replace(/^(?:a|an|the)\s+/i, "").split(" ").slice(0, 5).join(" ").trim(), u = r[r.length - 1], c = `${js(r.map((m) => Mi[m]))}${u === "phd" || u === "mba" ? "" : " degree"}${l ? ` in ${l}` : ""}`, f = Math.min(...r.map((m) => Pe[m])), w = [...s.degrees].sort((m, v) => Pe[m.level] - Pe[v.level]), d = f > 0 ? w.filter((m) => Pe[m.level] >= f) : [], y = { id: `degree:${r.join("+")}`, label: c, priority: n, entities: ["education"], strength: "self_reported" };
  if (d.length) {
    const m = `Holds ${w.slice().reverse().map((k) => k.short).join(" and ")}.`, v = !!l && !gs.test(o);
    return {
      ...y,
      category: v ? "related" : "direct",
      claims: d.map((k) => k.claim),
      statement: v ? `${m} Both are in ${s.fields}; the description names a different field.` : m
    };
  }
  const g = w[w.length - 1], h = r.map((m) => m === "phd" ? "a PhD" : m === "mba" ? "an MBA" : Mi[m]).join(" or ");
  return { ...y, category: "missing", claims: [g.claim], statement: `His highest degree is ${g.short}; he does not hold ${h}.` };
}
function Rs(e, t, n) {
  const r = t.match(Cs), s = e.subject.credentials?.experience;
  if (!r || !s) return null;
  const a = /^\d+$/.test(r[1]) ? Number(r[1]) : un[r[1].toLowerCase()] ?? 0;
  if (a > 29 || a < 1 && !/^0\s*(?:-|to)/.test(r[0])) return null;
  const o = xt(t.slice(r.index).split(/[.;(]|,\s/)[0].slice(0, 70).trim()), l = s.years, u = a <= l ? "direct" : a === l + 1 ? "related" : "missing", c = `${l}+ years of professional ML and data-science experience`, f = a === 0 ? `${c}, which fits the entry-level range asked for. Roles: ${s.summary}.` : u === "direct" ? `${c}: ${s.summary}.` : u === "related" ? `${c}, close to the ${a}+ asked for. Roles: ${s.summary}.` : `${c}, short of the ${a}+ years asked for. Roles: ${s.summary}.`, w = Ms(s.claims.map((d) => e.claim.get(d)?.entity).filter((d) => !!d));
  return { id: `years:${a}`, label: o, category: u, priority: n, claims: [...s.claims], entities: w, strength: "self_reported", statement: f };
}
function Ls(e, t) {
  const n = Re(t.getFullYear(), t.getMonth() + 1), r = [...e.matchAll(xs)].map((o) => o[1] ? Re(Number(o[2]), ji[o[1].slice(0, 3).toLowerCase()] ?? ji[o[1].toLowerCase()]) : Re(Number(o[4]), Number(o[3])));
  if (r.length >= 2) return [Math.min(...r), Math.max(...r)];
  if (r.length === 1)
    return /\b(?:by|before|no later than|prior to|until)\b/i.test(e) ? [0, r[0]] : /\b(?:after|since|on or after|from)\b/i.test(e) ? [r[0], 1 / 0] : [r[0] - 1, r[0] + 1];
  const s = e.match($s);
  if (s) {
    const o = /^\d+$/.test(s[1]) ? Number(s[1]) : un[s[1].toLowerCase()];
    return [n - o * (/year/i.test(s[2]) ? 12 : 1), n + 12];
  }
  const a = [...e.matchAll(/\b(20\d{2})\b/g)].map((o) => Number(o[1]));
  return a.length ? [Re(Math.min(...a), 1), Re(Math.max(...a), 12)] : bs.test(e) ? [n - 24, n + 12] : null;
}
function Ps(e, t, n, r) {
  const s = e.subject.credentials;
  if (!s || !vs.test(t)) return null;
  const a = pn(t), o = a.length ? Math.min(...a.map((h) => Pe[h]).filter((h) => h > 0)) : 1, l = [...s.degrees].sort((h, m) => h.date.localeCompare(m.date)), u = l.filter((h) => Pe[h.level] >= o), c = Ls(t, r), f = (h) => Re(Number(h.date.slice(0, 4)), Number(h.date.slice(5, 7))), w = u.filter((h) => !c || f(h) >= c[0] && f(h) <= c[1]), d = xt(t.split(/[;]|\.\s/)[0].slice(0, 90).trim()), y = { id: `grad:${o}`, label: d, priority: n, entities: ["education"], strength: "self_reported" };
  if (w.length) {
    const h = w[w.length - 1], m = c ? ", within the window asked for" : "";
    return { ...y, category: "direct", claims: w.map((v) => v.claim).reverse(), statement: `Completed ${h.short.replace(/ \(UMKC, \d{4}\)$/, "")} at UMKC in ${h.when}${m}.` };
  }
  const g = l.map((h) => `${h.when} (${h.abbr})`).join(" and ");
  return { ...y, category: "missing", claims: l.map((h) => h.claim).reverse(), statement: `His degrees were completed in ${g}, outside the window asked for.` };
}
function Ds(e, t, n) {
  const r = e.subject.credentials;
  if (!r || !_s.test(t)) return null;
  const s = [...r.degrees].sort((a, o) => a.date.localeCompare(o.date)).pop();
  return {
    id: "enrollment",
    label: xt(t.slice(0, 90)),
    category: "missing",
    priority: n,
    claims: [s.claim],
    entities: ["education"],
    strength: "self_reported",
    statement: `He completed his ${s.abbr} in ${s.when}, so he is not currently enrolled.`
  };
}
function Fs(e, t, n) {
  const r = e.subject.credentials;
  return !r || !ks.test(t) ? null : {
    id: "gpa",
    label: xt(t.slice(0, 90)),
    category: "verification",
    priority: n,
    claims: r.degrees.map((s) => s.claim),
    entities: ["education"],
    statement: "His GPA isn't listed in the portfolio. Ask Rahul for it."
  };
}
function mn(e, t, n, r = !1, s = /* @__PURE__ */ new Date()) {
  const a = [];
  for (const o of Is(t).split(/;\s|\.\s+(?=[A-Z])/)) {
    if (!r || ys.test(o)) {
      const l = Ds(e, o, n) ?? Ps(e, o, n, s) ?? Ts(e, o, n);
      l && a.push(l);
      const u = Fs(e, o, n);
      u && a.push(u);
    }
    if (!r || Es.test(o)) {
      const l = Rs(e, o, n);
      l && a.push(l);
    }
  }
  return a;
}
const Ns = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/, ni = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/, Ws = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/, Hs = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;
function Os(e) {
  const t = e.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(t)) return null;
  const n = le(t).replace(/^#+\s*/, ""), r = n.split(" ").length;
  return n.length > 0 && n.length < 70 && (/[:：]$/.test(n) || /^#/.test(t) || r <= 5 && !/[.,;]/.test(n)) ? Ns.test(n) ? "skip" : ni.test(n) ? "preferred" : Ws.test(n) ? "required" : Hs.test(n) ? "mentioned" : null : null;
}
function Bs(e, t) {
  const n = t.split(/\r?\n/);
  let r = "mentioned";
  const s = /* @__PURE__ */ new Map(), a = [], o = { required: 3, preferred: 2, mentioned: 1, skip: 0 };
  for (const y of n) {
    if (!y.trim()) continue;
    const g = Os(y);
    if (g) {
      r = g;
      continue;
    }
    if (r === "skip") continue;
    const h = ni.test(le(y)) ? "preferred" : r;
    a.push({ text: y, priority: h });
    for (const m of kt(e, y)) {
      const v = m.near ? `near:${m.term.toLowerCase()}` : m.id, k = s.get(v);
      k ? (k.count += m.count, o[h] > o[k.priority] && (k.priority = h)) : s.set(v, { id: m.id, near: m.near ? m.term.toLowerCase() : void 0, priority: h, count: m.count });
    }
  }
  const l = le(t), u = [...l.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((y) => Number(y[1])).filter((y) => y > 0 && y < 30), c = l.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/), f = new Set([...s.values()].filter((y) => !y.near && e.skill.has(y.id)).map((y) => y.id));
  let w, d = 0;
  for (const y of e.roles) {
    const g = y.requirements.filter((h) => f.has(h)).length / y.requirements.length;
    g > d && (d = g, w = y.id);
  }
  return {
    concepts: [...s.values()],
    quals: a,
    years: u.length ? Math.max(...u) : void 0,
    seniority: c?.[1],
    closestRole: d >= 0.25 ? w : void 0
  };
}
function ft(e, t, n = [], r = /* @__PURE__ */ new Date()) {
  const s = Bs(e, t), a = [], o = /* @__PURE__ */ new Set(), l = { required: 0, preferred: 1, mentioned: 2 }, u = [...s.concepts].sort((g, h) => l[g.priority] - l[h.priority] || h.count - g.count).slice(0, 26);
  for (const g of u) {
    const h = ue(e, g.id, { near: g.near, priority: g.priority === "skip" ? "mentioned" : g.priority });
    o.has(h.id) || (o.add(h.id), a.push(h));
  }
  const c = (g) => {
    o.has(g.id) || (o.add(g.id), a.push(g));
  };
  for (const g of s.quals) mn(e, g.text, g.priority === "skip" ? "mentioned" : g.priority, g.priority === "mentioned", r).forEach(c);
  let f = !1;
  const w = [];
  for (const g of n) {
    const h = zs(e, g, ni.test(le(g)) ? "preferred" : "required", r);
    h.covs.forEach(c), f || (f = h.logistics), h.unmatched && !w.includes(h.unmatched) && w.push(h.unmatched);
  }
  const d = [], y = Math.max(0, ...a.filter((g) => g.id.startsWith("years:")).map((g) => Number(g.id.slice(6))));
  return y > (e.subject.credentials?.experience.years ?? 2) ? d.push(`The description asks for ${y}+ years. ${e.subject.level_note}`) : s.seniority && d.push(`The description uses the word "${s.seniority}". ${e.subject.level_note}`), w.length && d.push(Ss(w)), f && d.push(As), a.length || d.push("No recognizable technical requirements were found. Try pasting the requirements section."), ii(e, "Your job description", a, {
    source: "jd",
    notes: d,
    unassessed: w,
    closestRole: s.closestRole ? e.role.get(s.closestRole)?.title : void 0,
    roleId: s.closestRole
  });
}
function zs(e, t, n = "required", r = /* @__PURE__ */ new Date()) {
  const s = t.trim().slice(0, 160), a = mn(e, s, n, !1, r);
  for (const o of kt(e, s)) a.push(ue(e, o.id, { near: o.near ? o.term.toLowerCase() : void 0, priority: n }));
  return a.length ? { covs: a, logistics: !1 } : qs.test(s) ? { covs: [], logistics: !0 } : { covs: [], logistics: !1, unmatched: s.length > 2 ? s : void 0 };
}
const si = (e) => e.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(e), fn = /\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|best candidate|excellent fit|great fit|strong fit|perfect|10\s?\/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|highly recommend|must hire|unmatched|brilliant|superstar)\b/i, Us = /(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)/i, Vs = /(\b(rate|score|rank)\b.*\b(him|rahul|candidate)\b|\bout of (10|ten|100)\b|percent(age)? (match|fit)|%\s?(match|fit)|match (score|percentage)|fit score)/i, Gs = /\b(weather|joke|poem|recipe|song|lyrics|stock price|bitcoin|politic|election|horoscope|translate this|write (me )?(an? )?(essay|story|cover letter)|capital of|who won the)\b/i, Ks = (e) => [...new Set(e)], Qs = /(how (can|could|do|would) you (say|know|tell|claim|conclude)|what makes you (say|think)|why (do|would) you (say|think)|prove (it|that|this)|how (does|do|did) (that|this|it) (make sense|prove|show|follow|answer|mean)|how (that|this|it) makes? sense|(that|this|it) (doesn'?t|does not|didn'?t) make (any )?sense|makes? no sense|what('?s| is) the (evidence|proof|reasoning|logic)|explain (that|this|why|your reasoning|how)|\bhow so\b|^really\b|are you sure|i don'?t (get|understand|buy|see)|not convinced|so what|why does (that|this) matter|^why\??$|^but (how|why|what)\b)/, Ti = /* @__PURE__ */ new Map(), Ys = (e) => {
  let t = Ti.get(e.id);
  return t || Ti.set(e.id, t = e.match.map((n) => new RegExp(n, "i"))), t;
};
function Js(e, t) {
  const n = le(t);
  let r, s = 0;
  for (const a of e.topics ?? []) {
    const o = Ys(a).reduce((l, u) => l + (u.test(n) ? 1 : 0), 0);
    o > s && (r = a, s = o);
  }
  return r;
}
const Fe = (e, t) => t ? e.topics?.find((n) => n.id === t) : void 0;
function Xs(e, t) {
  const n = (r) => Fe(e, r);
  return {
    points: t.points ?? n(t.points_from)?.points ?? [],
    takeaway: t.takeaway ?? n(t.takeaway_from)?.takeaway,
    why: t.why ?? n(t.why_from)?.why,
    plain: t.plain ?? n(t.why_from)?.plain,
    failures: t.failures ?? n(t.points_from)?.failures ?? []
  };
}
function se(e) {
  const t = [{ type: "p", text: e.lead, cites: e.leadCites?.length ? e.leadCites : void 0, lead: !0 }];
  e.points.length && t.push({ type: "points", items: e.points }), e.extra?.length && t.push(...e.extra), e.takeaway && t.push({ type: "takeaway", text: e.takeaway, cites: e.takeawayCites });
  const n = e.sources ?? Ks([...e.leadCites ?? [], ...e.points.flatMap((r) => r.cites), ...e.takeawayCites ?? []]);
  return n.length && t.push({ type: "claims", title: "Sources", ids: n, collapsed: !0 }), t;
}
function gn(e, t, n) {
  return { blocks: t, followups: n.followups ?? [], actions: n.actions ?? [], engine: "evidence", intent: e, entities: n.entities ?? [], topic: n.topic };
}
const Zs = (e, t) => t.map((n) => e.entity.get(n)).filter((n) => !!n && n.kind !== "education").slice(0, 2).map((n) => ({ kind: "anchor", label: `See ${n.short} on the portfolio`, target: n.anchor }));
function Ye(e, t, n, r = {}) {
  const s = Xs(e, t), a = n === "recruiter" || n === "founder" ? [] : s.failures.filter((u) => e.failures.some((c) => c.id === u)), o = r.challenged && r.again ? s.plain ?? `Put simply: ${s.takeaway?.text.replace(/^(For your team|Bottom line): /, "") ?? t.lead.text}` : r.challenged && s.why ? `Fair question. ${s.why}` : r.lead ?? t.lead.text, l = se({
    lead: o,
    leadCites: r.challenged ? [] : t.lead.cites,
    points: s.points,
    takeaway: s.takeaway?.text,
    takeawayCites: s.takeaway?.cites,
    extra: a.length ? [{ type: "failures", ids: a.slice(0, 2) }] : []
  });
  return gn(r.challenged ? "reasoning" : "topic_answer", l, {
    entities: t.entities,
    topic: t.id,
    actions: t.actions ?? Zs(e, t.entities),
    followups: t.followups
  });
}
function er(e, t, n) {
  const r = n.entities?.map((l) => e.entity.get(l)).find(Boolean), s = r ? (e.statableByEntity.get(r.id) ?? []).filter((l) => l.kind !== "limitation").slice(0, 2) : [], a = [
    { label: "What the answer rests on", text: "Only verified evidence: public code, data, recordings and papers, plus his employment history, with each item labelled by how it can be checked.", cites: [] }
  ];
  r && a.push({ label: `What it shows about ${r.short}`, text: r.summaries[t] ?? r.tagline, cites: s.map((l) => l.id) }), a.push({ label: "How it connects to your question", text: 'Those are the closest verified items to what you asked. If you meant something more specific, ask it directly, for example "How does he handle disagreements in a team?", and you will get an answer to that exact question.', cites: [] });
  const o = se({
    lead: n.question ? `Fair question. The previous answer was about "${n.question}". Here is the reasoning behind it:` : "Fair question. Here is the reasoning:",
    points: a
  });
  return gn("reasoning", o, {
    entities: r ? [r.id] : [],
    followups: ["How does he work in a team?", "What has Rahul actually shipped?", "Why should we hire Rahul?"]
  });
}
function tr(e, t) {
  const n = /* @__PURE__ */ new Set(["python", "metrics", "healthcare", "fintech", "product_judgment", "testing"]), r = t.tags.find((s) => !n.has(s)) ?? t.tags[0];
  return r ? _t(e, r) : e.entity.get(t.entity)?.short ?? "Evidence";
}
function Je(e, t, n = 2) {
  const r = /* @__PURE__ */ new Map();
  for (const s of t.filter(F)) {
    const a = r.get(s.entity) ?? r.set(s.entity, []).get(s.entity);
    a.length < n && a.push(s);
  }
  return [...r.entries()].map(([s, a]) => {
    const o = e.entity.get(s);
    return { label: o ? o.kind === "experience" && o.role ? `${o.short} · ${o.role.split(" · ")[0]}` : o.name : s, text: a.map((u) => u.text).join(" "), cites: a.map((u) => u.id) };
  });
}
function wn(e, t) {
  return t.filter(F).map((n) => ({ label: tr(e, n), text: n.text, cites: [n.id] }));
}
const T = (e, t) => t.test(e), Q = (e) => [...new Set(e)];
function Ri(e, t) {
  let n = e.strength === "public_artifact" ? 1 : 0.6;
  const r = new Set(e.tags), s = !!e.code?.length;
  switch (t) {
    case "engineer":
      n += s ? 1.2 : 0, n += e.kind === "fact" ? 0.4 : 0;
      break;
    case "researcher":
      n += e.kind === "metric" ? 1 : 0, n += e.kind === "limitation" ? 0.8 : 0, n += r.has("research_methods") || r.has("metrics") ? 0.6 : 0;
      break;
    case "manager":
      n += e.kind === "metric" ? 0.6 : 0, n += r.has("stakeholder") || r.has("deployment") || r.has("testing") ? 0.5 : 0;
      break;
    case "founder":
      n += r.has("product_judgment") || r.has("cost_modeling") ? 1 : 0, n += e.kind === "metric" ? 0.4 : 0;
      break;
    case "recruiter":
      n += e.kind === "metric" ? 0.6 : 0, n -= e.kind === "limitation" ? 0.8 : 0;
      break;
  }
  return n;
}
function ae(e, t, n, r = 3, s = 9) {
  const a = [...t].filter(F).sort((u, c) => Ri(c, n) - Ri(u, n)), o = /* @__PURE__ */ new Map(), l = [];
  for (const u of a) {
    const c = o.get(u.entity) ?? 0;
    if (!(c >= r || l.includes(u)) && (o.set(u.entity, c + 1), l.push(u), l.length >= s))
      break;
  }
  return l;
}
function ri(e, t) {
  return Q(t.flatMap((n) => e.statableBySkill.get(n) ?? []));
}
function Se(e, t) {
  return (e.statableByEntity.get(t) ?? []).filter((n) => n.kind === "limitation");
}
function O(e) {
  return e.map((t) => t.id);
}
function ai(e) {
  return { kind: "anchor", label: `Jump to ${e.short} on the portfolio`, target: e.anchor };
}
function Ne(e, t, n = {}) {
  const r = e.entity.get(t);
  if (!r) return [];
  const s = [];
  n.xray !== !1 && e.archByEntity.has(t) && s.push({ kind: "mode", label: `X-Ray ${r.short}`, target: "xray", arg: t }), s.push(ai(r));
  for (const a of r.links.slice(0, 2)) s.push({ kind: "url", label: a.label, target: a.url });
  return s;
}
function U(e, t, n = []) {
  const r = e.entity.get(t);
  if (!r) return [];
  const s = r.short, a = [
    ["architecture", `Show the architecture of ${s}`],
    ["why", `Why was ${s} designed this way?`],
    ["evaluation", `How was ${s} evaluated?`],
    ["failure", `What failed in ${s}?`],
    ["code", `Show me the code for ${s}`],
    ["challenge", `What would an interviewer challenge about ${s}?`],
    ["personally", `What did Rahul personally do on ${s}?`],
    ["scale", `How would ${s} scale?`]
  ], o = e.archByEntity.has(t);
  return a.filter(([l]) => !n.includes(l)).filter(([l]) => l === "architecture" ? o : !0).filter(([l]) => l === "failure" ? e.failures.some((u) => u.entity === t) || Se(e, t).length > 0 : !0).filter(([l]) => l === "why" ? e.decisions.some((u) => u.entity === t) : !0).map(([, l]) => l).slice(0, 5);
}
const $t = [
  "What has Rahul actually shipped?",
  "Show me his strongest RAG work.",
  "How does he evaluate AI systems?",
  "What failure did he find and fix?",
  "What has he built beyond LLM wrappers?",
  "Show me his backend engineering experience."
];
function S(e, t, n = {}) {
  return {
    blocks: t,
    followups: n.followups ?? $t.slice(0, 4),
    actions: n.actions ?? [],
    engine: "evidence",
    intent: e,
    entities: n.entities ?? [],
    basis: n.basis,
    topic: n.topic
  };
}
function oi(e) {
  return Q(e.blocks.flatMap((t) => t.type === "claims" ? t.ids : t.type === "p" || t.type === "takeaway" ? t.cites ?? [] : t.type === "points" ? t.items.flatMap((n) => n.cites) : []));
}
function ir(e) {
  return e.blocks.map((t) => {
    switch (t.type) {
      case "p":
      case "note":
      case "takeaway":
        return t.text;
      case "points":
        return t.items.map((n) => `${n.label}: ${n.text}`).join(" ");
      case "gaps":
        return t.items.map((n) => `${n.name}: ${n.statement}`).join(" ");
      case "compare":
        return t.rows.map((n) => n.values.join(" ")).join(" ");
      case "coverage":
        return t.analysis.requirements.map((n) => `${n.label} ${n.statement ?? ""}`).join(" ") + " " + t.analysis.notes.join(" ");
      default:
        return "";
    }
  }).join(`
`);
}
function nr(e, t) {
  const n = oi(t);
  return t.basis = {
    retrieved: t.basis?.retrieved ?? n,
    checks: [
      { label: "Only verified, public-safe claims cited", ok: n.every((r) => F(e.claim.get(r))) },
      { label: "No fit scores, rankings or praise", ok: !fn.test(ir(t)) },
      { label: "Every cited claim links to a source", ok: n.every((r) => (e.claim.get(r)?.sources.length ?? 0) > 0) }
    ]
  }, t;
}
const sr = [
  [/applied (ai|ml|machine learning)|ai product engineer/, "applied_ai"],
  [/(llm|genai|gen ai|generative ai) (app(lication)? )?(engineer|developer)|llm application/, "llm_app"],
  [/(ai |llm |model )?(evaluation|evals?|quality) engineer|ai evaluation|llm evaluation role/, "ai_eval"],
  [/automation engineer|ai automation|workflow engineer/, "ai_automation"],
  [/\bnlp\b|natural language processing engineer|text ml/, "nlp"],
  [/conversational|voice (ai )?(agent )?engineer/, "conversational"],
  [/analytics engineer/, "analytics_eng"],
  [/data engineer/, "data_eng"],
  [/data scientist/, "data_sci"],
  [/(ml|machine learning) test|ai test|qa engineer|test engineer/, "ml_test"],
  [/backend|back-end|python engineer|api engineer/, "backend_ai"],
  [/integration engineer|implementation engineer|solutions developer/, "ai_integration"],
  [/computer vision|vision engineer|\bcv engineer|imaging/, "cv"],
  [/mlops|ml ops/, "mlops"],
  [/platform engineer|ml infrastructure|ml infra/, "ml_platform"],
  [/research engineer|generative vision/, "research_genvision"],
  [/forward[- ]deployed|\bfde\b|solutions engineer|customer engineer/, "fde"],
  [/\bsearch (relevance )?engineer|relevance engineer|retrieval engineer|ranking engineer/, "search"],
  [/ai software|software engineer/, "ai_swe"],
  [/(machine learning|\bml\b) engineer|\bmle\b/, "mle"],
  [/\bai engineer\b|\bai\/ml engineer\b/, "applied_ai"]
];
function rr(e) {
  const t = le(e);
  return sr.find(([n]) => n.test(t))?.[1];
}
function ar(e, t, n) {
  return nr(e, or(e, t, n));
}
function or(e, t, n) {
  const r = t.trim(), s = le(r), a = n.persona;
  if (!s) return lr(e);
  if (Us.test(r))
    return S("injection", [
      { type: "p", text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." }
    ], { followups: $t.slice(0, 4) });
  if (si(r)) return mr(e, r);
  if (Vs.test(s)) {
    const m = Fe(e, "why_hire"), v = "I won't put a number on a person, because a score hides the evidence you actually need. Here is the case instead, point by point:";
    if (m) return { ...Ye(e, m, a, { lead: v }), intent: "no_scores", actions: [{ kind: "mode", label: "Check against your job description", target: "role", arg: "jd" }] };
  }
  const o = dn(r), l = kt(e, r), u = Q(l.map((m) => m.id));
  if (Gs.test(s) && !o.length && !l.length)
    return S("off_topic", [{ type: "p", text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  if (T(s, /\b(contact|email|reach (him|rahul|out)|get in touch|linkedin|resume|cv|available|availability|open to (work|roles|opportunities)|job search|start date)\b/)) return cr(e);
  const c = Js(e, r);
  if (Qs.test(s) && (c || !o.length && !l.length)) {
    const m = c ?? Fe(e, n.lastTopic);
    return m ? Ye(e, m, a, { challenged: !0, again: n.lastIntent === "reasoning" && n.lastTopic === m.id }) : er(e, a, { question: n.lastQuestion, entities: n.lastEntities });
  }
  const f = pr(e, s, r, o, u, a);
  if (f) return f;
  const w = rr(s);
  if (w && T(s, /(interviewer|interview questions|would .* ask)/)) return Fi(e, w);
  if (w && T(s, /challenge/)) return Ni(e, w);
  if (w && T(s, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return Li(e, w);
  if (n.roleId && T(s, /(this role|the role|this evidence|for this|^challenge)/))
    return T(s, /challenge/) ? Ni(e, n.roleId) : T(s, /(interview|ask)/) ? Fi(e, n.roleId) : Li(e, n.roleId);
  if (T(s, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/))
    return S(
      "role_prompt",
      [{ type: "p", text: "Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated." }],
      { actions: [{ kind: "mode", label: "Select a role", target: "role" }, { kind: "mode", label: "Paste a job description", target: "role", arg: "jd" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an ML Engineer role", "Evaluate Rahul for an LLM Application Engineer role"] }
    );
  if (T(s, /\b(compare|versus|vs\.?|difference between|differ)\b/) && o.length >= 2) return Pi(e, o.slice(0, 2), a);
  if (T(s, /\b(compare|versus|vs\.?)\b/) && o.length === 1 && n.lastEntities?.length) {
    const m = n.lastEntities.find((v) => v !== o[0]);
    if (m) return Pi(e, [m, o[0]], a);
  }
  if (T(s, /(who is (rahul|he)|about rahul|about him|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr|tell me about (rahul|him)$)/)) return $r(e);
  if (c && o.every((m) => c.entities.includes(m))) return kr(e, c, l.map((m) => m.id), a);
  if (s.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/) || T(s, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const m = l.filter((b) => b.kind === "skill").map((b) => b.id), v = tt(s), k = m.length ? m : v;
    if (k.length) return Di(e, k, a, s);
  }
  if (T(s, /\b(strongest|best)\b/) && tt(s).length) return Di(e, tt(s), a, s);
  if (T(s, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/) && l.length) return Ut(e, l.map((m) => ({ id: m.id, near: m.near ? m.term.toLowerCase() : void 0 })), a, s);
  const g = o[0] ?? (T(s, /\b(it|this|that|the project)\b/) ? n.lastEntities?.[0] : void 0);
  if (g) return fr(e, g, s, a);
  if (T(s, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return br();
  if (T(s, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return gr(e, a, T(s, /\b(more|all|other)\b/));
  if (T(s, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return wr(e, a);
  if (T(s, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return yr(e);
  if (T(s, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return vr(e);
  if (T(s, /(personally|himself|his own|individual contribution)/)) return S("personally", [{ type: "p", text: "Ask about a specific project or role. Ownership is recorded per item:" }, ...e.entities.filter((m) => m.ownership && m.kind !== "education").slice(0, 7).map((m) => ({ type: "p", text: `${m.short}: ${m.ownership}` }))]);
  const h = tt(s);
  return h.length ? _r(e, s, h, a) : l.length ? Ut(e, l.map((m) => ({ id: m.id, near: m.near ? m.term.toLowerCase() : void 0 })), a, s) : xr(e, r, a);
}
function lr(e) {
  return S("help", [{ type: "p", text: `Ask about ${e.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}
function cr(e) {
  return S("contact", [{ type: "p", lead: !0, text: `${e.subject.name} is open to full-time AI / ML engineering roles in the US. Email is the fastest way to reach him, and his LinkedIn and GitHub are linked below.` }], {
    actions: [
      { kind: "url", label: "Email Rahul", target: `mailto:${e.subject.email}` },
      { kind: "url", label: "LinkedIn", target: e.subject.links.linkedin },
      { kind: "url", label: "GitHub", target: e.subject.links.github },
      { kind: "anchor", label: "Jump to contact", target: "#contact" }
    ],
    followups: ["Why should we hire Rahul?", "What has Rahul actually shipped?", "How does he work in a team?"]
  });
}
const dr = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi, hr = /\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/, ur = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;
function pr(e, t, n, r, s, a) {
  if (!(/^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(t) || /\b(did|has) (he|rahul)\b/.test(t))) return null;
  const l = t.match(hr)?.[0];
  if (l && ur.test(t) && !/stable diffusion/.test(l)) {
    const f = e.gap.get("pretraining"), w = ae(e, ri(e, ["llm_apis"]), "engineer", 1, 4);
    return S("false_premise", [
      { type: "p", text: `No. Nothing in the evidence supports that premise. ${l.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: "gaps", items: [{ id: f.id, name: f.name, statement: f.statement, closest: ["sssd"] }] },
      { type: "claims", title: "What the evidence does show", ids: O(w) }
    ], { followups: ["What models has Rahul fine-tuned?", "Show me his strongest RAG work.", "What is not demonstrated yet?"] });
  }
  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(t) && !/club/.test(t)) {
    const f = Fe(e, "leadership");
    if (f) return { ...Ye(e, f, a, { lead: "He hasn't managed a team of engineers yet. He has led people and led technical work end to end, which is the foundation for it:" }), intent: "false_premise" };
  }
  const u = /minute|scale|100x|10x/.test(t) ? [] : n.match(dr) ?? [];
  if (u.length) {
    const f = u[0].replace(/\s/g, ""), w = f.replace(/^\$/, "").replace(/[%x×]$/i, ""), d = e.claims.filter((g) => F(g) && g.text.replace(/\s/g, "").includes(w)), y = e.claims.filter((g) => !F(g) && g.text.replace(/\s/g, "").includes(w));
    if (d.length) {
      const g = /patient records|patients|ehr/.test(t) && d.some((h) => /not clinical ehr records/i.test(h.text));
      return S("figure_check", [
        { type: "p", text: g ? `Not quite. ${f} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${f}:`, cites: O(d.slice(0, 1)) },
        { type: "claims", ids: O(d.slice(0, 3)) }
      ], { entities: Q(d.map((h) => h.entity)), followups: U(e, d[0].entity) });
    }
    if (y.length)
      return S("figure_check", [
        { type: "p", text: `That figure is not verified, so I won't state it as fact. ${y[0].note ?? ""}` },
        { type: "note", tone: "warn", text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' }
      ], { entities: Q(y.map((g) => g.entity)) });
    if (r.length || s.length)
      return S("figure_check", [{ type: "p", text: `${f} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities: r });
  }
  const c = s.map((f) => e.gap.get(f)).find((f) => f && !f.verify);
  if (c && /\b(did|does|has|have|is|was)\b/.test(t)) {
    const f = (c.partial ?? []).map((g) => e.claim.get(g)).filter(F), w = [...f, ...c.related.flatMap((g) => e.statableBySkill.get(g) ?? [])], d = f.length ? f.slice(0, 3) : ae(e, w, "engineer", 1, 4), y = Fe(e, "learning");
    return S("unsupported_skill", se({
      lead: `${f.length ? "Not in production yet." : "Not yet."} ${c.statement}`,
      points: Je(e, d, 1),
      takeaway: y?.takeaway ? `How he would close it: ${y.takeaway.text.replace(/^For your team: /, "")}` : void 0
    }), { topic: "learning", followups: ["How fast does he learn new technology?", "What is not demonstrated yet?", "Show me his backend engineering experience."] });
  }
  return null;
}
function yn(e) {
  const t = e.counts, n = e.requirements.length, r = (l, u, c) => `${l} ${l === 1 ? u : c}`, s = e.requirements.filter((l) => l.category === "missing").map((l) => l.label), o = [{ type: "p", lead: !0, text: [
    `Of the ${r(n, "requirement", "requirements")} in this description, ${r(t.direct, "has", "have")} direct evidence${t.related ? ` and ${r(t.related, "has", "have")} related evidence` : ""}.`,
    t.verification ? `${r(t.verification, "needs", "need")} verification.` : "",
    s.length ? `Not currently demonstrated: ${s.join("; ")}.` : "Nothing in it is marked as not demonstrated.",
    e.unassessed?.length ? `${r(e.unassessed.length, "phrase was", "phrases were")} not assessed (see the note below).` : ""
  ].filter(Boolean).join(" ") }, { type: "coverage", analysis: e }];
  return e.notes.forEach((l) => o.push({ type: "note", tone: "warn", text: l })), o;
}
function mr(e, t) {
  return S("jd", yn(ft(e, t)), {
    actions: [{ kind: "mode", label: "Show this on the portfolio", target: "transform" }, { kind: "mode", label: "Technical brief for this role", target: "brief" }],
    followups: ["What is the strongest evidence for this role?", "Challenge this evidence", "What is not demonstrated yet?"]
  });
}
function Li(e, t, n) {
  const r = $e(e, t), s = r.counts, a = r.entities.slice(0, 3).map((l) => ee(e, l.id)), o = [
    { type: "p", text: `Evidence coverage for ${r.title}: ${s.direct} requirements with direct evidence, ${s.related} with related evidence, ${s.verification} needing verification, and ${s.missing} not currently demonstrated. The strongest evidence comes from ${li(a)}.` },
    { type: "coverage", analysis: r }
  ];
  return r.notes.forEach((l) => o.push({ type: "note", tone: "info", text: l })), S("role", o, {
    entities: r.entities.slice(0, 3).map((l) => l.id),
    actions: [
      { kind: "mode", label: "Show this on the portfolio", target: "transform", arg: t },
      { kind: "mode", label: "10-minute technical brief", target: "brief", arg: t },
      { kind: "mode", label: "Explore on the map", target: "map", arg: t }
    ],
    followups: [`Challenge the evidence for ${r.title}`, `What would an interviewer ask for ${r.title}?`, "What is not demonstrated yet?"]
  });
}
function Pi(e, [t, n], r) {
  const s = e.entity.get(t), a = e.entity.get(n), o = (y, g) => ({ label: y, values: [g(t), g(n)] }), l = (y) => Q((e.statableByEntity.get(y) ?? []).flatMap((g) => g.tags)).filter((g) => !["python", "healthcare", "fintech", "product_judgment"].includes(g)).slice(0, 6).map((g) => _t(e, g)).join(", ") || "—", u = (y) => (e.statableByEntity.get(y) ?? []).find((g) => g.tags.some((h) => ["eval_design", "llm_eval", "regression_testing"].includes(h)) && g.kind !== "limitation")?.text ?? "—", c = (y) => {
    const g = (e.statableByEntity.get(y) ?? []).find((h) => h.metrics?.length);
    return g ? g.metrics.map((h) => `${h.label}: ${h.value}`).join(" · ") : "—";
  }, f = (y) => Se(e, y)[0]?.text.replace(/^Limits:\s*/, "") ?? "—", w = (y) => (e.statableByEntity.get(y) ?? []).some((g) => g.tags.includes("deployment")) ? "Yes" : "No public deployment", d = Q([t, n].flatMap((y) => (e.statableByEntity.get(y) ?? []).filter((g) => g.metrics?.length || g.kind === "limitation").slice(0, 3)));
  return S("compare", [
    { type: "p", text: `${s.short} vs ${a.short}, compared on the same evidence fields.` },
    { type: "compare", entities: [t, n], rows: [
      o("What it is", (y) => e.entity.get(y).tagline),
      o("When", (y) => e.entity.get(y).dates),
      o("Demonstrates", l),
      o("Evaluation evidence", u),
      o("Measured results", c),
      o("Deployed", w),
      o("Main limitation", f),
      o("Ownership", (y) => e.entity.get(y).ownership || "—")
    ] },
    { type: "claims", title: "Evidence used", ids: O(ae(e, d, r, 3, 6)) }
  ], { entities: [t, n], actions: [...Ne(e, t).slice(0, 1), ...Ne(e, n).slice(0, 1)], followups: [...U(e, t).slice(0, 2), ...U(e, n).slice(0, 2)] });
}
function Di(e, t, n, r) {
  const s = /* @__PURE__ */ new Map();
  for (const d of ri(e, t)) {
    const y = s.get(d.entity) ?? { s: 0, claims: [] };
    y.s += (d.strength === "public_artifact" ? 1 : 0.7) + (d.code?.length ? 0.4 : 0) + (d.kind === "metric" ? 0.2 : 0), y.claims.push(d), s.set(d.entity, y);
  }
  const a = [...s.entries()].filter(([d]) => d !== "imw").sort((d, y) => y[1].s - d[1].s);
  if (!a.length) return Ut(e, t.map((d) => ({ id: d })), n, r);
  const [o, l] = a[0], u = e.entity.get(o), c = _t(e, t[0]), f = ae(e, l.claims, n, 5, 5), w = a[1] ? ` ${ee(e, a[1][0])} is next.` : "";
  return S("strongest", se({
    lead: `His strongest ${c} work is ${u.name}.${w}`,
    points: wn(e, f),
    extra: e.archByEntity.has(o) ? [{ type: "xray", arch: e.archByEntity.get(o).id }] : []
  }), { entities: [o], actions: Ne(e, o), followups: U(e, o) });
}
function Ut(e, t, n, r) {
  const s = [], a = [], o = [], l = [], u = /* @__PURE__ */ new Set();
  for (const f of t.slice(0, 3)) {
    const w = ue(e, f.id, { near: f.near });
    if (u.has(w.id)) continue;
    u.add(w.id);
    const d = w.entities.map((g) => ee(e, g)), y = !s.length;
    if (w.category === "direct") {
      const g = ae(e, w.claims.map((h) => e.claim.get(h)), n, 2, 5);
      s.push({ type: "p", lead: y, text: `Yes. He has used ${w.label} in ${li(d.slice(0, 4))}.`, cites: w.claims.slice(0, 2) }), s.push({ type: "points", items: Je(e, g, 1) }), l.push(...O(g));
    } else if (w.category === "related") {
      const g = w.via ? `Not directly, but he has closely related experience. ${w.statement ?? ""}` : `Partly. ${w.statement ?? ""}`;
      s.push({ type: "p", lead: y, text: g.trim(), cites: w.claims.slice(0, 1) });
      const h = w.claims.slice(0, 4).map((m) => e.claim.get(m)).filter(Boolean);
      s.push({ type: "points", items: Je(e, h, 1) }), l.push(...O(h));
    } else w.category === "verification" ? s.push({ type: "p", lead: y, text: `${ie.verification}: ${w.statement ?? ""}` }) : (y && s.push({ type: "p", lead: y, text: `Not yet: ${w.label} isn't part of his work so far. Here is the closest experience, and how he tends to pick up new tools:` }), s.push({ type: "gaps", items: [{ id: w.id, name: w.label, statement: w.statement ?? "", closest: w.entities }] }));
    if (a.push(...w.entities), /where/.test(r)) for (const g of w.entities.slice(0, 3)) {
      const h = e.entity.get(g);
      h && o.push(ai(h));
    }
  }
  l.length && s.push({ type: "claims", title: "Sources", ids: Q(l), collapsed: !0 });
  const c = Q(a)[0];
  return S("skill", s, { entities: Q(a), actions: o.length ? o : c ? Ne(e, c) : [], followups: c ? U(e, c).slice(0, 3).concat(["What is not demonstrated yet?"]) : $t.slice(0, 4) });
}
function fr(e, t, n, r) {
  const s = e.entity.get(t), a = e.statableByEntity.get(t) ?? [], o = e.archByEntity.get(t), l = e.failures.filter((g) => g.entity === t), u = e.decisions.filter((g) => g.entity === t), c = Ne(e, t);
  if (T(n, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && o)
    return S("architecture", [
      { type: "p", text: `${o.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: "xray", arch: o.id }
    ], { entities: [t], actions: c, followups: U(e, t, ["architecture"]) });
  if (T(n, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && u.length)
    return S("decisions", [{ type: "decisions", ids: u.map((g) => g.id) }], { entities: [t], actions: c, followups: U(e, t, ["why"]) });
  if (T(n, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const g = Se(e, t), h = [];
    return l.length && h.push({ type: "failures", ids: l.map((m) => m.id) }), g.length && h.push({ type: "claims", title: "Stated limitations", ids: O(g) }), h.length || h.push({ type: "p", text: `The evidence database records no specific failure case for ${s.short}.` }), S("failures", h, { entities: [t], actions: [...e.attacks.some((m) => m.entity === t) ? [{ kind: "mode", label: "Try to break it", target: "lab", arg: t }] : [], ...c], followups: U(e, t, ["failure"]) });
  }
  if (T(n, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const g = a.filter((v) => v.tags.some((k) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(k))), h = [{ type: "claims", ids: O(ae(e, g, "researcher", 7, 7)) }];
    t === "cliniq" && h.push({ type: "chart", chart: "cliniq" }), t === "voice" && h.push({ type: "chart", chart: "voice_quality" });
    const m = e.traces.find((v) => v.entity === t);
    return m && h.push({ type: "trace", id: m.id }), S("evaluation", h, { entities: [t], actions: [{ kind: "mode", label: "Open the proof lab", target: "lab", arg: t }, ...c], followups: U(e, t, ["evaluation"]) });
  }
  if (T(n, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const g = a.filter((h) => h.code?.length);
    return S("code", [
      { type: "p", text: `Code links are pinned to a specific commit, so line numbers do not drift.${s.repo ? "" : " This is employment work, so no source code is public."}` },
      { type: "claims", ids: O(ae(e, g, "engineer", 8, 8)) }
    ], { entities: [t], actions: c, followups: U(e, t, ["code"]) });
  }
  if (T(n, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const g = Se(e, t), h = [{ type: "p", text: `Questions an interviewer could reasonably press on for ${s.short}:` }];
    return s.questions.forEach((m) => h.push({ type: "p", text: `• ${m}` })), g.length && h.push({ type: "claims", title: "Limitations the evidence already states", ids: O(g) }), u.length && h.push({ type: "decisions", ids: u.slice(0, 2).map((m) => m.id) }), S("challenge", h, { entities: [t], actions: c, followups: U(e, t, ["challenge"]) });
  }
  if (T(n, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/))
    return S("personally", [
      { type: "p", text: s.ownership || "The portfolio does not break down individual contributions for this item." },
      { type: "claims", ids: O(ae(e, a, r, 4, 4)) }
    ], { entities: [t], actions: c, followups: U(e, t, ["personally"]) });
  if (T(n, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const g = a.filter((m) => m.tags.some((v) => ["rate_limiting", "caching", "deployment", "docker", "monitoring"].includes(v))), h = ["distributed_systems", "kubernetes"].map((m) => e.gap.get(m));
    return S("scale", [
      { type: "p", text: `What is implemented today for ${s.short}:` },
      g.length ? { type: "claims", ids: O(g.slice(0, 5)) } : { type: "p", text: "No scaling-related controls are recorded for this item." },
      { type: "gaps", items: h.map((m) => ({ id: m.id, name: m.name, statement: m.statement, closest: [] })) },
      { type: "note", tone: "info", text: "A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented." }
    ], { entities: [t], actions: c, followups: U(e, t, ["scale"]) });
  }
  if (n.length > 70) {
    const g = hn(e, n, { entities: [t], limit: 8 }).map((m) => m.claim).filter((m) => m.entity === t), h = Se(e, t).filter((m) => !g.includes(m));
    if (g.length)
      return S("focused", [
        { type: "p", text: `The evidence most relevant to this question about ${s.short}:`, cites: O(g.slice(0, 2)) },
        { type: "claims", ids: O(g.slice(0, 5)) },
        ...h.length ? [{ type: "claims", title: "Stated limitations", ids: O(h.slice(0, 2)) }] : []
      ], { entities: [t], actions: c, followups: U(e, t) });
  }
  const f = s.summaries[r] ?? s.tagline, w = ae(e, a, r, r === "recruiter" ? 4 : 5, r === "recruiter" ? 4 : 5), d = [];
  if (r === "engineer" && o && d.push({ type: "xray", arch: o.id }), r === "researcher") {
    const g = Se(e, t);
    g.length && d.push({ type: "claims", title: "Stated limitations", ids: O(g) });
  }
  r === "manager" && s.ownership && d.push({ type: "note", tone: "info", text: `Ownership: ${s.ownership}` });
  const y = [{ type: "entity", id: t }, ...se({ lead: f, leadCites: O(w.slice(0, 2)), points: wn(e, w), extra: d })];
  return S("entity", y, { entities: [t], actions: c, followups: U(e, t) });
}
function gr(e, t, n = !1) {
  const s = n ? e.failures.map((a) => a.id) : {
    engineer: ["f.voice.bargein", "f.voice.artifacts", "f.cliniq.embedding"],
    recruiter: ["f.voice.bargein", "f.cliniq.embedding"],
    manager: ["f.voice.artifacts", "f.voice.incomplete", "f.voice.bargein"],
    founder: ["f.cliniq.revenue", "f.cliniq.embedding", "f.voice.bargein"],
    researcher: ["f.cliniq.embedding", "f.qml.speedup", "f.sssd.debug"]
  }[t].filter((a) => e.failures.some((o) => o.id === a));
  return S("failures", [
    { type: "p", text: "Failures found and fixed, each with how it was detected and what now prevents it:" },
    { type: "failures", ids: s }
  ], {
    entities: Q(s.map((a) => e.failures.find((o) => o.id === a).entity)),
    actions: [{ kind: "mode", label: "Open the proof lab", target: "lab" }],
    followups: ["Show me the barge-in fix in code", "Show more failure cases", "How does he evaluate AI systems?"]
  });
}
function wr(e, t) {
  const r = [
    ["dia.no_llm_review", "Deterministic label review, no LLM"],
    ["dia.four_tier", "A four-tier severity classifier"],
    ["dia.calibration", "Calibrated classical ML"],
    ["dia.entity_filter", "Retrieval guardrails"],
    ["voice.bargein", "A realtime audio protocol fix"],
    ["voice.gate", "A fail-closed release gate"],
    ["cliniq.schema", "Database design"],
    ["cliniq.workload", "An operational planning model"],
    ["sssd.encoder", "Custom diffusion conditioning"]
  ].filter(([s]) => F(e.claim.get(s))).slice(0, t === "recruiter" ? 5 : 9);
  return S("beyond_wrappers", se({
    lead: "A lot. In much of his work the language model is one component, or absent entirely:",
    points: r.map(([s, a]) => ({ label: a, text: e.claim.get(s).text, cites: [s] })),
    takeaway: "For your team: he knows when not to use an LLM, and how to engineer the parts around one, which is what keeps AI systems reliable."
  }), { entities: Q(r.map(([s]) => e.claim.get(s).entity)), actions: [{ kind: "mode", label: "X-Ray the Drug Interaction Agent", target: "xray", arg: "dia" }], followups: ["Why keep label review free of an LLM?", "Show me the barge-in fix in code", "Show the architecture of ClinIQ"] });
}
function yr(e, t) {
  return S("shipped", se({
    lead: "He has shipped AI both in production at work and as public, live systems you can try right now:",
    points: [
      { label: "In production at TIFIN (Mar 2025 – May 2026)", text: "Three models in an AI portfolio copilot (intent classification, entity extraction and retrieval ranking), deployed and monitored on AWS SageMaker and GCP Vertex AI. The AI capabilities reached 40,000+ users.", cites: ["tifin.role", "tifin.models", "tifin.deploy", "tifin.reach"] },
      { label: "In production at Citizen Health (current)", text: "Source-grounded retrieval and summarization for a patient-advocacy product, released behind an evaluation suite that catches regressions before they reach patients.", cites: ["citizen.role", "citizen.release_eval"] },
      { label: "Live: Drug Interaction Agent", text: "A React + FastAPI application in one Docker container on a public Hugging Face Space, with 41 backend and 7 frontend tests in CI and 24/24 severity accuracy on its regression set.", cites: ["dia.shipped", "dia.tests", "dia.eval_scores"] },
      { label: "Live: ClinIQ", text: "A 5-panel Streamlit dashboard with Docker Compose, CI and a live demo; 4th place at the NSF NRT Research-A-Thon 2026.", cites: ["cliniq.delivery", "cliniq.award"] },
      { label: "Live: this assistant", text: "An evidence-gated assistant on this portfolio, plus a public MCP server any AI client can query.", cites: ["imw.system", "imw.mcp"] }
    ],
    takeaway: "Bottom line: he has taken AI from prototype to production end to end, including the model, API, interface, container, CI and the evaluation that keeps it reliable."
  }), {
    entities: ["tifin", "citizen", "dia", "cliniq"],
    actions: [{ kind: "url", label: "Open Drug Interaction Agent", target: e.entity.get("dia").links[0].url }, { kind: "url", label: "Open ClinIQ demo", target: e.entity.get("cliniq").links[0].url }, { kind: "anchor", label: "Jump to TIFIN experience", target: "#tifin" }],
    followups: ["What did Rahul personally do on TIFIN?", "Show the architecture of the Drug Interaction Agent", "How was ClinIQ evaluated?"]
  });
}
function vr(e) {
  return S("gaps", se({
    lead: "Honest answer: his gaps are large-scale infrastructure and formal people management, which is typical at his career stage, and each one sits next to experience he can build on:",
    points: [],
    extra: [{ type: "gaps", items: ["kubernetes", "iac", "distributed_inference", "pretraining", "orchestration", "human_annotation", "online_experiments", "customer_deployments"].map((n) => e.gap.get(n)).map((n) => ({ id: n.id, name: n.name, statement: n.statement, closest: Q(n.related.flatMap((r) => (e.statableBySkill.get(r) ?? []).map((s) => s.entity))).slice(0, 3) })) }],
    takeaway: "How he closes gaps: by building. Realtime voice, diffusion models and quantum ML were each new to him, and each became a working, tested system.",
    takeawayCites: ["voice.harness", "sssd.encoder", "qml.benchmark"]
  }), { topic: "learning", followups: ["How fast does he learn new technology?", "Evaluate Rahul for an MLOps Engineer role", "Why should we hire Rahul?"] });
}
function br(e) {
  return S("level", se({
    lead: "Early-career, with real production experience: he has worked on production AI at TIFIN and now at Citizen Health, and holds an M.S. in Computer Science.",
    points: [
      { label: "Now · Citizen Health", text: "AI Engineer building source-grounded retrieval and summarization for a patient-advocacy product.", cites: ["citizen.role"] },
      { label: "Production AI · TIFIN", text: "AI/ML Engineer on an AI portfolio copilot, with ownership that included deploying and monitoring models on AWS SageMaker and GCP Vertex AI.", cites: ["tifin.role", "tifin.deploy"] },
      { label: "Agents · Athena", text: "Prototyped task-planning, tool-use and prompt-orchestration components for an executive-assistant workflow.", cites: ["athena.role"] },
      { label: "Education", text: "M.S. in Computer Science with an AI emphasis and a B.S. in Computer Science, both from UMKC.", cites: ["edu.ms", "edu.bs"] }
    ],
    takeaway: "He fits AI / ML engineer roles at the early-career level, and the work itself (production deployment, evaluation and end-to-end systems) is what those roles ask for. For senior roles, the difference is years of ownership rather than the kind of work."
  }), { followups: ["What has Rahul actually shipped?", "Why should we hire Rahul?", "Evaluate Rahul for a Machine Learning Engineer I role"] });
}
const vn = [
  [
    /\b(rag|retrieval|vector|embedding|semantic search|grounded)/,
    ["rag", "vector_db", "semantic_search", "embeddings", "provenance"],
    "Retrieval and RAG run through his work, from a public medication assistant to production systems in finance and healthcare:",
    "For your team: he designs retrieval as an engineering system, with exact lookups, relevance filters, calibrated scoring and caching, not just a vector search."
  ],
  [
    /(evaluat|test(ing|s)?\b|measure|benchmark|metrics|quality assurance|qa\b|red[- ]team|judge)/,
    ["eval_design", "llm_eval", "regression_testing", "safety_testing", "model_comparison"],
    "He evaluates AI systems the way production teams need to: designed test suites, a separate LLM judge with validated output, hand review, fail-closed release gates and baselines.",
    "For your team: releases are gated on evidence, and regressions are caught before users see them."
  ],
  [
    /(backend|back-end|api|fastapi|server|cache|redis|rate limit|docker|infrastructure)/,
    ["fastapi", "rest_api", "caching", "rate_limiting", "docker", "testing"],
    "He builds production backends in Python: FastAPI services with caching, rate limiting, containers and tests.",
    "For your team: he can own the service around a model, not only the model."
  ],
  [
    /(vision|image|diffusion|cnn|imaging|stable diffusion|lora)/,
    ["computer_vision", "diffusion", "fine_tuning", "cnn", "xai"],
    "He has done hands-on computer-vision research, from generative diffusion models to explainable image classification:",
    "For your team: he can change model internals (conditioning, adapters and evaluation), not only apply pretrained models."
  ],
  [
    /(data engineer|pipeline|snowflake|spark|etl|sql|data quality|warehouse)/,
    ["etl", "snowflake", "pyspark", "data_quality", "data_modeling", "sql"],
    "He has built data pipelines at production scale and in research:",
    "For your team: data quality is treated as part of the ML system, with audits and validation built in."
  ],
  [
    /(voice|realtime|real-time|speech|audio|twilio|websocket|phone)/,
    ["voice_ai", "realtime_audio", "twilio", "websockets"],
    "He has built and debugged realtime voice AI down to the audio-protocol level:",
    "For your team: he can work below the SDK, where realtime systems actually break."
  ],
  [
    /(agent|agentic|langgraph|langchain|tool call|workflow|automation)/,
    ["agents", "langgraph", "langchain", "tool_calling", "workflow_automation"],
    "He has built LLM agents and multi-step workflows in production and in public projects:",
    "For your team: agents with shared state, validation and retries, evaluated like any other system."
  ],
  [
    /(research|paper|experiment|reproducib|baseline|scientific)/,
    ["research_methods", "model_comparison", "metrics"],
    "His research practice centers on baselines, honest metrics and reproducibility:",
    "For your team: results you can rerun and trust."
  ],
  [
    /(ml model|machine learning|classifier|model development|train)/,
    ["classical_ml", "deep_learning", "calibration", "model_comparison"],
    "He has developed models across classical ML and deep learning, with calibration and head-to-head comparisons:",
    "For your team: models chosen and tuned on evidence rather than habit."
  ],
  [
    /(aws|gcp|cloud|sagemaker|vertex|mlops|deploy)/,
    ["sagemaker", "vertex_ai", "deployment", "mlops", "docker"],
    "He has deployed models and applications on AWS SageMaker, GCP Vertex AI, Docker and Hugging Face Spaces:",
    "For your team: he can take a model from a notebook to a monitored deployment."
  ],
  [
    /(healthcare|clinical|medical|patient)/,
    ["healthcare"],
    "Healthcare runs through his work, from patient records in production to clinical research prototypes:",
    "For your team: he understands the grounding, privacy and safety constraints that healthcare AI has to meet."
  ],
  [
    /(fintech|financ|advisor|invest)/,
    ["fintech"],
    "He has built AI for financial advisors in production:",
    "For your team: experience shipping AI under enterprise compliance controls."
  ]
];
function tt(e) {
  return vn.find(([t]) => t.test(e))?.[1] ?? [];
}
function _r(e, t, n, r) {
  const [, , s, a] = vn.find(([c]) => c.test(t)), o = ae(e, ri(e, n), r, r === "recruiter" ? 2 : 3, r === "recruiter" ? 6 : 9), l = Q(o.map((c) => c.entity)), u = [];
  return n.includes("eval_design") && r !== "recruiter" && u.push({ type: "chart", chart: "cliniq" }), n.includes("rag") && l.includes("dia") && r === "engineer" && u.push({ type: "xray", arch: "arch.dia" }), n.includes("voice_ai") && u.push({ type: "trace", id: "t.voice.emergency" }), S("topic", se({ lead: s, points: Je(e, o, r === "recruiter" ? 1 : 2), extra: u, takeaway: a }), {
    entities: l,
    actions: l.slice(0, 3).map((c) => ai(e.entity.get(c))),
    followups: l[0] ? U(e, l[0]).slice(0, 3).concat(l[1] ? [`Compare ${ee(e, l[0])} and ${ee(e, l[1])}`] : []) : $t.slice(0, 4)
  });
}
function kr(e, t, n, r) {
  const s = t.id === "learning" ? n[0] : void 0;
  if (!s) return Ye(e, t, r);
  const a = ue(e, s), o = li(a.entities.slice(0, 3).map((u) => ee(e, u))), l = a.category === "direct" ? `He already has direct experience with ${a.label}, in ${o}.` : a.category === "related" ? (a.via ? `He has closely related experience: ${a.statement ?? ""}` : `Partly. ${a.statement ?? ""}`).trim() : `${a.label} isn't part of his work yet. ${a.statement ?? ""}`.trim();
  return Ye(e, t, r, { lead: `${l} On picking it up: the clearest evidence is how many different kinds of systems he has built from scratch, each in a new stack or domain, and each one working, tested and documented.` });
}
function xr(e, t, n) {
  const r = hn(e, t, { limit: 8 });
  if (!r.length || r[0].score < 2)
    return S("no_evidence", [
      { type: "p", lead: !0, text: "I don't have evidence that answers that directly. I can speak to his projects, experience, technical skills, and how he works with people. For example:" }
    ], { followups: ["Why should we hire Rahul?", "How does he work in a team?", "What has Rahul actually shipped?", "How fast does he learn new technology?"] });
  const s = ae(e, r.map((o) => o.claim), n, 2, 6), a = s[0].entity;
  return S(
    "retrieval",
    se({ lead: "Here is what his work shows on that:", points: Je(e, s) }),
    { entities: Q(s.map((o) => o.entity)), actions: Ne(e, a), followups: U(e, a).slice(0, 3), basis: { retrieved: r.map((o) => o.claim.id) } }
  );
}
function $r(e, t) {
  const n = [
    { label: "Current role · Citizen Health", text: "Builds source-grounded retrieval and summarization for a patient-advocacy product, with each statement linked to its medical record and every release gated by evaluation.", cites: ["citizen.role", "citizen.source_linked", "citizen.release_eval"] },
    { label: "Production AI · TIFIN", text: "LangGraph advisor workflows with tool calling and structured outputs. The AI capabilities reached 40,000+ users, models improved recommendation accuracy by 19% and F1 by 24%, and a 65% reduction in manual effort was reported.", cites: ["tifin.agents", "tifin.structured", "tifin.reach", "tifin.gains", "tifin.effort"] },
    { label: "Public systems you can try", text: "A deployed Drug Interaction Agent (React, FastAPI, Docker) and the ClinIQ dashboard, both live on Hugging Face Spaces.", cites: ["dia.shipped", "cliniq.delivery"] },
    { label: "Evaluation discipline", text: "A voice-agent QA harness that places real calls, with an LLM judge, hand review and a fail-closed release gate.", cites: ["voice.harness", "voice.judge", "voice.gate"] },
    { label: "Research depth", text: "Kinematic-conditioned diffusion for surgical video, and a published classical-versus-quantum ML imaging study.", cites: ["sssd.encoder", "qml.xai"] },
    { label: "Education", text: "M.S. in Computer Science with an AI emphasis (May 2026).", cites: ["edu.ms"] }
  ];
  return S("overview", se({
    lead: `${e.subject.name} is an AI / ML engineer who builds LLM applications, retrieval systems and ML models, and makes them measurable. He is currently an AI Engineer at Citizen Health.`,
    leadCites: ["citizen.role"],
    points: n,
    takeaway: "Bottom line: production experience, public work you can inspect, and the evaluation habits that make AI systems dependable."
  }), {
    entities: ["citizen", "tifin", "dia", "voice"],
    actions: [{ kind: "mode", label: "Evaluate against a role", target: "role" }, { kind: "mode", label: "Explore the evidence map", target: "map" }],
    followups: ["Why should we hire Rahul?", "How does he work in a team?", "What has Rahul actually shipped?"]
  });
}
function Fi(e, t) {
  const n = $e(e, t), r = n.entities.slice(0, 3).map((o) => e.entity.get(o.id)).filter(Boolean), s = [{ type: "p", text: `Questions worth asking for ${n.title}, grounded in the evidence an interviewer would see:` }];
  for (const o of r) o.questions.slice(0, 2).forEach((l) => s.push({ type: "p", text: `• ${o.short}: ${l}` }));
  return n.requirements.filter((o) => o.category === "missing").slice(0, 2).forEach((o) => s.push({ type: "p", text: `• Gap: ${o.label}. How would you close it in your first months?` })), S("role_questions", s, { entities: r.map((o) => o.id), actions: [{ kind: "mode", label: "10-minute technical brief", target: "brief", arg: t }], followups: [`Challenge the evidence for ${n.title}`] });
}
function Ni(e, t) {
  const n = $e(e, t), r = n.entities.slice(0, 3).map((l) => l.id), s = r.flatMap((l) => Se(e, l)).slice(0, 4), a = n.requirements.filter((l) => l.category === "direct" && l.strength === "self_reported").map((l) => l.label), o = [
    { type: "p", text: `The weakest points in the evidence for ${n.title}:` },
    { type: "gaps", items: n.requirements.filter((l) => l.category === "missing" || l.category === "verification").map((l) => ({ id: l.id, name: l.label, statement: l.statement ?? "", closest: l.entities.slice(0, 3) })) }
  ];
  return a.length && o.push({ type: "note", tone: "warn", text: `Supported only by self-reported employment experience (no public artifact): ${a.join(", ")}.` }), s.length && o.push({ type: "claims", title: "Limitations stated in the strongest projects", ids: O(s) }), n.notes.forEach((l) => o.push({ type: "note", tone: "info", text: l })), S("challenge", o, { entities: r, followups: [`What would an interviewer ask for ${n.title}?`, "What failure did he find and fix?"] });
}
function li(e) {
  return e.length <= 1 ? e[0] ?? "the portfolio" : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
const Cr = "https://astra6-interview-my-work.hf.space";
function bn() {
  return (document.querySelector('meta[name="imw-api"]')?.content || Cr).replace(/\/$/, "");
}
async function gt(e, t) {
  const n = new AbortController(), r = setTimeout(() => n.abort(), t.timeout);
  try {
    const s = await fetch(bn() + e, { ...t, signal: n.signal, headers: { "Content-Type": "application/json", ...t.headers || {} } });
    if (!s.ok) throw Object.assign(new Error(`HTTP ${s.status}`), { status: s.status });
    return await s.json();
  } finally {
    clearTimeout(r);
  }
}
async function Er(e) {
  e("checking");
  const t = (n) => e(n?.ai_enabled ? "ready" : "offline");
  try {
    t(await gt("/api/health", { method: "GET", timeout: 4e3 }));
    return;
  } catch {
  }
  e("waking");
  try {
    t(await gt("/api/health", { method: "GET", timeout: 45e3 }));
  } catch {
    e("offline");
  }
}
async function qr(e, t, n, r, s, a) {
  const o = await gt("/api/ask", {
    method: "POST",
    timeout: 3e4,
    body: JSON.stringify({ question: t, persona: n, history: r.slice(-3), role: s ?? null, topic: a ?? null })
  }), l = o.sentences.flatMap((d) => d.cites), u = [...o.sentences.map((d) => `${d.label ?? ""} ${d.text}`), o.hypothetical ?? ""].join(" ");
  if (!o.sentences.length || l.some((d) => !F(e.claim.get(d))) || fn.test(u))
    throw new Error("model answer failed client validation");
  const c = [];
  if (o.sentences.some((d) => d.kind === "point" && d.label)) {
    const d = o.sentences.filter((h) => h.kind === "lead"), y = o.sentences.filter((h) => h.kind === "point"), g = o.sentences.filter((h) => h.kind === "takeaway");
    d.length && c.push({ type: "p", lead: !0, text: d.map((h) => h.text.trim()).join(" "), cites: [...new Set(d.flatMap((h) => h.cites))] }), c.push({ type: "points", items: y.map((h) => ({ label: (h.label || "").trim() || "Evidence", text: h.text.trim(), cites: h.cites })) }), g.length && c.push({ type: "takeaway", text: g.map((h) => h.text.trim()).join(" "), cites: [...new Set(g.flatMap((h) => h.cites))] });
  } else {
    let d = { text: "", cites: [] };
    for (const y of o.sentences)
      d.text += (d.text ? " " : "") + y.text.trim(), d.cites.push(...y.cites), d.text.length > 320 && (c.push({ type: "p", text: d.text, cites: [...new Set(d.cites)], lead: !c.length }), d = { text: "", cites: [] });
    d.text && c.push({ type: "p", text: d.text, cites: [...new Set(d.cites)], lead: !c.length });
  }
  o.hypothetical && c.push({ type: "note", tone: "info", text: `Hypothetical, not implemented: ${o.hypothetical}` });
  const w = (o.gaps ?? []).map((d) => e.gap.get(d)).filter(Boolean);
  return w.length && c.push({ type: "gaps", items: w.map((d) => ({ id: d.id, name: d.name, statement: d.statement, closest: [] })) }), {
    blocks: c,
    followups: (o.followups ?? []).slice(0, 4),
    actions: [],
    engine: "model",
    intent: "model",
    entities: (o.entities ?? []).filter((d) => e.entity.has(d)),
    basis: { retrieved: o.retrieved ?? [...new Set(l)], checks: o.checks, model: o.model }
  };
}
async function _n(e) {
  const t = await gt("/api/jd", { method: "POST", timeout: 25e3, body: JSON.stringify({ text: e.slice(0, 12e3) }) });
  return Array.isArray(t.requirements) ? t.requirements.filter((n) => typeof n == "string").slice(0, 30) : [];
}
const kn = Xn(null), I = () => is(kn), Ce = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function B(e, t = {}) {
  try {
    window.dispatchEvent(new CustomEvent("imw:event", { detail: { name: e, ...t } }));
  } catch {
  }
}
let Le = null;
const Vt = [], wt = /* @__PURE__ */ new Set(), K = (e, t, n) => {
  const r = document.createElement(e);
  return r.className = t, n && (r.textContent = n), r;
};
function Sr(e, t, n) {
  Gt();
  const r = new Map(t.entities.map((v) => [v.id, v.score])), s = (v) => t.requirements.filter((k) => (k.category === "direct" || k.category === "related") && k.entities.includes(v)), a = document.getElementById("work"), o = a ? [...a.querySelectorAll(":scope > article.project")] : [];
  if (o.length && a) {
    Le = { parent: a, order: [...a.children], numbers: o.map((p) => [p.querySelector(".project-number"), p.querySelector(".project-number")?.textContent ?? ""]) };
    const v = (p) => e.entities.find((x) => x.anchor === `#${p.id}`)?.id ?? "", k = new Map(o.map((p) => [p, p.getBoundingClientRect()])), b = [...o].sort((p, x) => (r.get(v(x)) ?? 0) - (r.get(v(p)) ?? 0)), _ = a.querySelector(":scope > .research");
    if (b.forEach((p, x) => {
      a.insertBefore(p, _);
      const C = p.querySelector(".project-number");
      C && (C.textContent = `${String(x + 1).padStart(2, "0")} —`);
    }), !Ce())
      for (const p of b) {
        const x = k.get(p), C = p.getBoundingClientRect(), E = x.top - C.top;
        E && p.animate([{ transform: `translateY(${E}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
  }
  for (const v of e.entities) {
    if (v.id === "imw" || v.kind === "education") continue;
    const k = document.querySelector(v.anchor);
    if (!k || k.id === "work" || k.id === "experience") continue;
    const b = s(v.id);
    if (k.classList.add(b.length ? "imw-lens-hit" : "imw-lens-dim"), wt.add(k), b.length) {
      const _ = K("div", "imw-lens-tag");
      _.append(K("span", "imw-lens-tag-label", `✦ Evidence for ${t.title}`)), b.slice(0, 6).forEach((p) => _.append(K("span", `imw-lens-chip is-${p.category}`, p.label))), k.prepend(_), Vt.push(_);
    }
  }
  const l = t.requirements.filter((v) => v.category === "direct").flatMap((v) => [v.label, ...e.skill.get(v.id)?.aliases ?? []]).map((v) => v.toLowerCase());
  document.querySelectorAll("#skills .skill").forEach((v) => {
    const k = v.textContent?.toLowerCase() ?? "";
    v.classList.add(l.some((b) => b.length > 2 && k.includes(b)) ? "imw-lens-hit" : "imw-lens-dim"), wt.add(v);
  });
  const u = K("div", "imw-lens-bar");
  u.setAttribute("role", "region"), u.setAttribute("aria-label", "Role lens");
  const c = K("div", "imw-lens-head");
  c.append(K("span", "imw-lens-mark", "✦"), K("strong", "", `Viewing as: ${t.title}`));
  const f = K("div", "imw-lens-counts");
  ["direct", "related", "verification", "missing"].forEach((v) => f.append(K("span", `is-${v}`, `${t.counts[v]} ${ie[v].toLowerCase()}`)));
  const w = t.requirements.filter((v) => v.category === "missing").map((v) => v.label), d = K("div", "imw-lens-missing", w.length ? `Not demonstrated: ${w.slice(0, 4).join(", ")}${w.length > 4 ? "…" : ""}` : "Every listed requirement has at least related evidence."), y = K("div", "imw-lens-actions"), g = K("button", "imw-lens-btn", "Open analysis"), h = K("button", "imw-lens-btn is-primary", "Restore portfolio");
  g.onclick = () => n.reopen(), h.onclick = () => {
    Gt(), n.restore();
  }, y.append(g, h);
  const m = K("div", "imw-lens-mid");
  m.append(f, d), u.append(c, m, y), document.body.append(u), Vt.push(u), document.documentElement.classList.add("imw-lens"), requestAnimationFrame(() => (a ?? document.body).scrollIntoView({ behavior: Ce() ? "auto" : "smooth", block: "start" })), h.focus({ preventScroll: !0 });
}
function Gt() {
  Vt.splice(0).forEach((e) => e.remove()), wt.forEach((e) => e.classList.remove("imw-lens-hit", "imw-lens-dim")), wt.clear(), Le && (Le.order.forEach((e) => Le.parent.appendChild(e)), Le.numbers.forEach(([e, t]) => {
    e && (e.textContent = t);
  }), Le = null), document.documentElement.classList.remove("imw-lens");
}
let ve = null;
function Ar(e, t) {
  const n = document.querySelector(e);
  if (!n) {
    t();
    return;
  }
  n.scrollIntoView({ behavior: Ce() ? "auto" : "smooth", block: "start" }), n.classList.add("imw-flash"), setTimeout(() => n.classList.remove("imw-flash"), 2400), n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus({ preventScroll: !0 }), ve?.remove(), ve = K("button", "imw-return", "✦ Back to Interview My Work"), ve.onclick = () => {
    ve?.remove(), ve = null, t();
  }, document.body.append(ve), setTimeout(() => {
    ve?.remove(), ve = null;
  }, 2e4);
}
function xn(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "Verified · public artifact" : "Verified · self-reported" : { verification_required: "Verification required", unsupported: "Unsupported", deprecated: "Withdrawn" }[e.status] ?? e.status;
}
function yt(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "st-artifact" : "st-self" : e.status === "verification_required" ? "st-pending" : "st-no";
}
const De = ({ cls: e, label: t }) => /* @__PURE__ */ i("i", { class: `imw-dot ${e}`, "aria-hidden": t ? void 0 : "true", "aria-label": t });
function We({ refs: e, max: t = 4 }) {
  return e?.length ? /* @__PURE__ */ i("ul", { class: "imw-code", children: e.slice(0, t).map((n) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("a", { href: n.url, target: "_blank", rel: "noopener", children: [
    /* @__PURE__ */ i("span", { class: "imw-code-label", children: n.label }),
    /* @__PURE__ */ i("span", { class: "imw-code-path", children: [
      n.path,
      n.lines ? `#L${n.lines[0]}–${n.lines[1]}` : ""
    ] })
  ] }) }, n.url)) }) : null;
}
function Ir({ id: e, compact: t }) {
  const { kb: n, setInspect: r, inspect: s } = I(), a = n.claim.get(e);
  if (!a) return null;
  const o = n.entity.get(a.entity), l = s?.kind === "claim" && s.id === e;
  return /* @__PURE__ */ i("li", { class: `imw-claim${l ? " is-on" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-claim-btn", onClick: () => r({ kind: "claim", id: e }), "aria-label": `View evidence: ${a.text}`, children: [
      /* @__PURE__ */ i(De, { cls: yt(a) }),
      /* @__PURE__ */ i("span", { class: "imw-claim-text", children: a.text })
    ] }),
    !t && /* @__PURE__ */ i("div", { class: "imw-claim-meta", children: [
      /* @__PURE__ */ i("span", { children: o?.short }),
      /* @__PURE__ */ i("span", { class: `imw-st ${yt(a)}`, children: xn(a) }),
      a.code?.length ? /* @__PURE__ */ i("a", { href: a.code[0].url, target: "_blank", rel: "noopener", class: "imw-mini-link", children: "Code ↗" }) : null,
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r({ kind: "claim", id: e }), children: "Evidence" })
    ] })
  ] });
}
function ne({ ids: e, title: t, compact: n }) {
  return e.length ? /* @__PURE__ */ i("div", { class: "imw-claims", children: [
    t && /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: t }),
    /* @__PURE__ */ i("ul", { children: e.map((r) => /* @__PURE__ */ i(Ir, { id: r, compact: n }, r)) })
  ] }) : null;
}
function dt({ a: e }) {
  const { go: t, jump: n, ask: r, toggleLens: s, coverage: a, kb: o } = I();
  if (e.kind === "url") {
    const u = e.target.startsWith("mailto:") || e.target.includes("linkedin");
    return /* @__PURE__ */ i("a", { class: "imw-btn", href: e.target, target: e.target.startsWith("mailto:") ? void 0 : "_blank", rel: "noopener", onClick: () => u && B("contact_clicked_from_ai"), children: [
      e.label,
      " ",
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: "↗" })
    ] });
  }
  return /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => {
    if (e.kind === "anchor") return n(e.target);
    if (e.kind === "ask") return r(e.target);
    if (e.target === "transform")
      return s(!0, e.arg && e.arg !== a?.roleId ? $e(o, e.arg) : void 0);
    t(e.target, e.arg);
  }, children: [
    e.label,
    e.kind === "anchor" ? /* @__PURE__ */ i("span", { "aria-hidden": "true", children: " ↓" }) : null
  ] });
}
const Ee = { direct: "cat-direct", related: "cat-related", verification: "cat-pending", missing: "cat-missing" };
function xe({ children: e }) {
  return /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: e });
}
function Mr({ id: e }) {
  const { kb: t, setInspect: n } = I(), r = t.entity.get(e);
  return r ? /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n({ kind: "entity", id: e }), children: r.short }) : null;
}
const it = ["direct", "related", "verification", "missing"], jr = { direct: "direct", related: "related", verification: "to verify", missing: "not shown" };
function Ct({ counts: e, compact: t }) {
  const n = it.reduce((r, s) => r + e[s], 0) || 1;
  return /* @__PURE__ */ i("div", { class: `imw-covbar${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-covbar-track", role: "img", "aria-label": it.map((r) => `${e[r]} ${ie[r]}`).join(", "), children: it.filter((r) => e[r]).map((r) => /* @__PURE__ */ i("span", { class: `imw-covbar-seg ${Ee[r]}`, style: { flexGrow: e[r] / n }, title: `${e[r]} · ${ie[r]}` }, r)) }),
    /* @__PURE__ */ i("ul", { class: "imw-covbar-legend", children: it.map((r) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${Ee[r]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("b", { children: e[r] }),
      " ",
      t ? jr[r] : ie[r]
    ] }, r)) })
  ] });
}
function $n({ analysis: e, max: t = 16 }) {
  const { kb: n, setInspect: r } = I(), [s, a] = q(null), o = e.requirements.slice(0, t), l = e.entities.slice(0, 7).map((b) => b.id), u = 26, c = 18, f = 640, w = c * 2 + Math.max(o.length, l.length) * u, d = (b) => c + (b + 0.5) * u * (Math.max(o.length, l.length) / Math.max(l.length, 1)), y = (b) => c + (b + 0.5) * u, g = 232, h = 408, m = o.flatMap(
    (b, _) => b.category === "direct" || b.category === "related" ? b.entities.filter((p) => l.includes(p)).slice(0, 3).map((p) => ({ r: b.id, e: p, cat: b.category, y1: y(_), y2: d(l.indexOf(p)) })) : []
  ), v = (b, _) => !s || s === b || s === _, k = !Ce();
  return /* @__PURE__ */ i("figure", { class: "imw-map", children: [
    /* @__PURE__ */ i("svg", { viewBox: `0 0 ${f} ${w}`, role: "group", "aria-label": "Requirement to evidence map", class: k ? "is-anim" : "", children: [
      m.map((b, _) => /* @__PURE__ */ i(
        "path",
        {
          d: `M${g},${b.y1} C${g + 90},${b.y1} ${h - 90},${b.y2} ${h},${b.y2}`,
          class: `imw-link ${b.cat === "direct" ? "is-direct" : "is-related"}${v(b.r, b.e) ? " is-lit" : " is-dim"}`,
          style: { animationDelay: `${Math.min(_ * 25, 700)}ms` }
        },
        _
      )),
      o.map((b, _) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-req ${Ee[b.category]}${s && s !== b.id ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${b.label}: ${ie[b.category]}`,
          onMouseEnter: () => a(b.id),
          onMouseLeave: () => a(null),
          onFocus: () => a(b.id),
          onBlur: () => a(null),
          onClick: () => r({ kind: "req", req: b }),
          onKeyDown: (p) => (p.key === "Enter" || p.key === " ") && (p.preventDefault(), r({ kind: "req", req: b })),
          children: [
            /* @__PURE__ */ i("rect", { x: 0, y: y(_) - u / 2, width: g + 6, height: u, class: "imw-hit" }),
            /* @__PURE__ */ i("text", { x: g - 12, y: y(_) + 4, "text-anchor": "end", children: Tr(b.label, 30) }),
            /* @__PURE__ */ i("circle", { cx: g, cy: y(_), r: 4.5 })
          ]
        },
        b.id
      )),
      l.map((b, _) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-ent${s && s !== b && !m.some((p) => p.e === b && p.r === s) ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": n.entity.get(b)?.name,
          onMouseEnter: () => a(b),
          onMouseLeave: () => a(null),
          onFocus: () => a(b),
          onBlur: () => a(null),
          onClick: () => r({ kind: "entity", id: b }),
          onKeyDown: (p) => (p.key === "Enter" || p.key === " ") && (p.preventDefault(), r({ kind: "entity", id: b })),
          children: [
            /* @__PURE__ */ i("rect", { x: h - 6, y: d(_) - u / 2, width: f - h + 6, height: u, class: "imw-hit" }),
            /* @__PURE__ */ i("circle", { cx: h, cy: d(_), r: 5.5 }),
            /* @__PURE__ */ i("text", { x: h + 14, y: d(_) + 4, children: n.entity.get(b)?.short })
          ]
        },
        b
      ))
    ] }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Solid lines: direct evidence. Dashed: related evidence. Hollow markers have no supporting evidence.",
      e.requirements.length > t ? ` Showing ${t} of ${e.requirements.length} requirements; the full list is below.` : ""
    ] })
  ] });
}
const Tr = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e, Wi = [
  { key: "precision", label: "Precision", cls: "viz-1" },
  { key: "recall", label: "Recall", cls: "viz-2" },
  { key: "f1", label: "F1", cls: "viz-3" }
];
function Cn() {
  const { kb: e } = I(), t = e.datasets.cliniq_confusion, [n, r] = q(null), [s, a] = q(!1), o = he(() => t.methods.map((m) => {
    const v = m.tp / (m.tp + m.fp), k = m.tp / (m.tp + m.fn);
    return { ...m, precision: v, recall: k, f1: 2 * v * k / (v + k) };
  }), [t]), l = 560, u = 230, c = 36, f = 30, w = 12, d = (l - c - 12) / o.length, y = 22, g = 2, h = (m) => w + (1 - m) * (u - w - f);
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: [
        "ClinIQ detectors on ",
        t.sample
      ] }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a(!s), "aria-pressed": s, children: s ? "Chart view" : "Table view" })
    ] }),
    s ? /* @__PURE__ */ i("table", { class: "imw-table", children: [
      /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: "Method" }),
        /* @__PURE__ */ i("th", { children: "Precision" }),
        /* @__PURE__ */ i("th", { children: "Recall" }),
        /* @__PURE__ */ i("th", { children: "F1" }),
        /* @__PURE__ */ i("th", { children: "TP" }),
        /* @__PURE__ */ i("th", { children: "FP" }),
        /* @__PURE__ */ i("th", { children: "FN" }),
        /* @__PURE__ */ i("th", { children: "TN" })
      ] }) }),
      /* @__PURE__ */ i("tbody", { children: o.map((m) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: m.label }),
        /* @__PURE__ */ i("td", { children: m.precision.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: m.recall.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: m.f1.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: m.tp }),
        /* @__PURE__ */ i("td", { children: m.fp }),
        /* @__PURE__ */ i("td", { children: m.fn }),
        /* @__PURE__ */ i("td", { children: m.tn })
      ] }, m.id)) })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => r(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${l} ${u}`, role: "img", "aria-label": "Precision, recall and F1 for rules, embedding and LLM plus RAG detectors", children: [
        [0, 0.25, 0.5, 0.75, 1].map((m) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: c, x2: l - 8, y1: h(m), y2: h(m) }),
          /* @__PURE__ */ i("text", { x: c - 6, y: h(m) + 4, "text-anchor": "end", children: m.toFixed(2) })
        ] }, m)),
        o.map((m, v) => {
          const k = c + v * d + (d - (y * 3 + g * 2)) / 2;
          return /* @__PURE__ */ i("g", { children: [
            Wi.map((b, _) => {
              const p = m[b.key], x = k + _ * (y + g);
              return /* @__PURE__ */ i(
                "path",
                {
                  class: `imw-bar ${b.cls}`,
                  d: Rr(x, h(p), y, h(0) - h(p)),
                  onMouseEnter: () => r({ x: (x + y / 2) / l, y: h(p) / u, text: `${m.label} · ${b.label} ${p.toFixed(3)}` })
                },
                b.key
              );
            }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: c + v * d + d / 2, y: u - 10, "text-anchor": "middle", children: m.label })
          ] }, m.id);
        })
      ] }),
      n && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: `${n.x * 100}%`, top: `${n.y * 100}%` }, children: n.text })
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: Wi.map((m) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-swatch ${m.cls}`, "aria-hidden": "true" }),
      m.label
    ] }, m.key)) }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. ",
      t.caveat
    ] })
  ] });
}
function Rr(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return r <= 0 ? "" : `M${e},${t + r} V${t + s} Q${e},${t} ${e + s},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r} Z`;
}
function ci() {
  const { kb: e } = I(), t = e.datasets.voice_quality, n = [...t.rows].sort((d, y) => y[3] - d[3]), [r, s] = q(null), a = 560, o = 20, l = 150, u = 40, c = n.length * o + 24, f = (d) => l + d / 60 * (a - l - u), w = n.reduce((d, y) => d + y[3], 0) / n.length;
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: /* @__PURE__ */ i("strong", { children: "Mid-call silence per recorded call (%)" }) }),
    /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => s(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${a} ${c}`, role: "img", "aria-label": `Mid-call silence per call; average ${w.toFixed(1)} percent`, children: [
        [0, 20, 40, 60].map((d) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: f(d), x2: f(d), y1: 0, y2: c - 18 }),
          /* @__PURE__ */ i("text", { x: f(d), y: c - 4, "text-anchor": "middle", children: d })
        ] }, d)),
        n.map((d, y) => {
          const g = y * o + 3;
          return /* @__PURE__ */ i("g", { onMouseEnter: () => s({ y: (g + o / 2) / c, text: `${d[0]} · silence ${d[3]}% · talk-over ${d[2]}% · longest gap ${d[4]}s` }), children: [
            /* @__PURE__ */ i("rect", { class: "imw-hit", x: 0, y: g - 2, width: a, height: o }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: l - 8, y: g + 11, "text-anchor": "end", children: d[0].replace(/_/g, " ") }),
            /* @__PURE__ */ i("path", { class: "imw-bar viz-1", d: Lr(l, g + 2, f(d[3]) - l, o - 8) })
          ] }, d[0]);
        }),
        /* @__PURE__ */ i("line", { class: "imw-ref", x1: f(w), x2: f(w), y1: 0, y2: c - 18 }),
        /* @__PURE__ */ i("text", { class: "imw-ref-label", x: f(w) + 4, y: 10, children: [
          "avg ",
          w.toFixed(1),
          "%"
        ] })
      ] }),
      r && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: "55%", top: `${r.y * 100}%` }, children: r.text })
    ] }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Talk-over averaged 0.3% and the mean pause between turns was 0.5 s. ",
      t.caveat
    ] })
  ] });
}
function Lr(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return n <= 0 ? "" : `M${e},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r - s} Q${e + n},${t + r} ${e + n - s},${t + r} H${e} Z`;
}
const Lt = 198, nt = 96, Ve = 174, be = 56, je = 28, Hi = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e;
function En({ arch: e, selected: t, onSelect: n, scan: r = !0 }) {
  const s = we(null), [a, o] = q(!1), [l, u] = q(!1);
  ts(() => {
    const h = s.current;
    if (!h) return;
    const m = new ResizeObserver(([v]) => o(v.contentRect.width < 560));
    return m.observe(h), () => m.disconnect();
  }, []), V(() => {
    if (!r || Ce()) return;
    u(!0);
    const h = setTimeout(() => u(!1), 1300);
    return () => clearTimeout(h);
  }, [e.id, r]);
  const c = Math.max(...e.nodes.map((h) => h.col)) + 1, f = Math.max(...e.nodes.map((h) => h.row)) + 1, w = je * 2 + c * Lt - (Lt - Ve), d = je * 2 + f * nt - (nt - be) + (e.lanes.length ? 14 : 0), y = (h) => {
    const m = e.nodes.find((v) => v.id === h);
    return { x: je + m.col * Lt, y: je + (e.lanes.length ? 14 : 0) + m.row * nt };
  }, g = (h, m) => {
    (h.key === "Enter" || h.key === " ") && (h.preventDefault(), n(m));
  };
  if (a) {
    const h = new Map(e.nodes.map((b) => [b.id, 0]));
    e.edges.forEach(([, b]) => h.set(b, (h.get(b) ?? 0) + 1));
    const m = (b, _) => b.col - _.col || b.row - _.row, v = e.nodes.filter((b) => !h.get(b.id)).sort(m), k = [];
    for (; v.length; ) {
      const b = v.shift();
      k.push(b);
      const _ = e.edges.filter(([p]) => p === b.id).map(([, p]) => p).filter((p) => (h.set(p, h.get(p) - 1), h.get(p) === 0)).map((p) => e.nodes.find((x) => x.id === p)).sort(m);
      v.unshift(..._);
    }
    return e.nodes.forEach((b) => {
      k.includes(b) || k.push(b);
    }), /* @__PURE__ */ i("div", { ref: s, class: "imw-arch-stack", children: k.map((b, _) => /* @__PURE__ */ i("div", { class: "imw-arch-step", children: [
      _ > 0 && /* @__PURE__ */ i("span", { class: "imw-arch-arrow", "aria-hidden": "true", children: "↓" }),
      /* @__PURE__ */ i("button", { class: `imw-arch-card${t === b.id ? " is-on" : ""}`, onClick: () => n(b.id), "aria-pressed": t === b.id, children: [
        /* @__PURE__ */ i("strong", { children: b.label }),
        /* @__PURE__ */ i("small", { children: b.sub })
      ] })
    ] }, b.id)) });
  }
  return /* @__PURE__ */ i("div", { ref: s, class: `imw-arch${l ? " is-scanning" : ""}`, children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${w} ${d}`, role: "group", "aria-label": `${e.title} architecture`, children: [
    /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("marker", { id: `ah-${e.id}`, viewBox: "0 0 8 8", refX: "7", refY: "4", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse", children: /* @__PURE__ */ i("path", { d: "M0,0 L8,4 L0,8 z", class: "imw-arrowhead" }) }) }),
    e.lanes.map((h) => /* @__PURE__ */ i("text", { class: "imw-lane", x: je, y: je + h.row * nt + 6, children: h.label.toUpperCase() }, h.row)),
    e.edges.map(([h, m]) => {
      const v = y(h), k = y(m);
      let b;
      if (k.x > v.x) {
        const p = v.x + Ve, x = v.y + be / 2, C = k.x - 4, E = k.y + be / 2, M = (p + C) / 2;
        b = `M${p},${x} C${M},${x} ${M},${E} ${C},${E}`;
      } else if (k.x < v.x) {
        const p = v.x, x = v.y + be / 2, C = k.x + Ve + 4, E = k.y + be / 2, M = (p + C) / 2;
        b = `M${p},${x} C${M},${x} ${M},${E} ${C},${E}`;
      } else {
        const p = k.y > v.y, x = v.x + Ve / 2, C = p ? v.y + be : v.y, E = p ? k.y - 4 : k.y + be + 4;
        b = `M${x},${C} L${x},${E}`;
      }
      return /* @__PURE__ */ i("path", { d: b, class: `imw-edge${t === h || t === m ? " is-on" : ""}`, "marker-end": `url(#ah-${e.id})` }, h + m);
    }),
    e.nodes.map((h) => {
      const m = y(h.id);
      return /* @__PURE__ */ i(
        "g",
        {
          class: `imw-node${t === h.id ? " is-on" : ""}`,
          transform: `translate(${m.x},${m.y})`,
          tabIndex: 0,
          role: "button",
          "aria-pressed": t === h.id,
          "aria-label": `${h.label}. ${h.sub}`,
          style: { animationDelay: `${h.col * 120}ms` },
          onClick: () => n(h.id),
          onKeyDown: (v) => g(v, h.id),
          children: [
            /* @__PURE__ */ i("rect", { width: Ve, height: be, rx: 4 }),
            /* @__PURE__ */ i("text", { x: 12, y: 24, class: "imw-node-label", children: Hi(h.label, 22) }),
            /* @__PURE__ */ i("text", { x: 12, y: 42, class: "imw-node-sub", children: Hi(h.sub, 25) })
          ]
        },
        h.id
      );
    }),
    l && /* @__PURE__ */ i("rect", { class: "imw-scan", x: 0, y: 0, width: 3, height: d })
  ] }) });
}
const qn = (e) => {
  const t = new URL(["..", "..", "evidence", "dist", e].join("/"), import.meta.url), n = new URL(import.meta.url).searchParams.get("v");
  return n && t.searchParams.set("v", n), t.href;
};
function Sn({ id: e, compact: t }) {
  const { kb: n, go: r } = I(), s = n.traces.find((w) => w.id === e), [a, o] = q(t ? 0 : 1 / 0), l = we();
  if (V(() => () => clearInterval(l.current), []), !s) return null;
  if (s.dataset === "dia_regression") return /* @__PURE__ */ i(Pr, {});
  const u = t ? s.steps.slice(0, 4) : s.steps, c = () => {
    if (B("replay_played", { trace: s.id }), Ce()) {
      o(1 / 0);
      return;
    }
    o(0), clearInterval(l.current);
    let w = 0;
    l.current = window.setInterval(() => {
      w++, o(w), w >= u.length && clearInterval(l.current);
    }, 520);
  }, f = a === 1 / 0 ? u.length : a;
  return /* @__PURE__ */ i("figure", { class: `imw-trace${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: s.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: c, "aria-label": `Replay ${s.title}`, children: "▶ Replay" }),
        t && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("lab", s.id), children: "Open in proof lab →" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: s.summary }),
    /* @__PURE__ */ i("ol", { class: "imw-steps", "aria-live": "polite", children: u.map((w, d) => /* @__PURE__ */ i("li", { class: `imw-step is-${w.kind}${d < f ? " is-shown" : ""}`, "aria-hidden": d >= f, children: [
      /* @__PURE__ */ i("span", { class: "imw-step-kind", children: w.label }),
      w.quote ? /* @__PURE__ */ i("q", { children: w.quote }) : /* @__PURE__ */ i("span", { children: w.body }),
      w.status && /* @__PURE__ */ i("span", { class: `imw-verdict is-${w.status}`, children: w.status === "pass" ? "✓ PASS" : w.status === "fail" ? "✕ FAIL" : "! REVIEW" })
    ] }, d)) }),
    t && s.steps.length > u.length && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      s.steps.length - u.length,
      " more steps in the full replay."
    ] })
  ] });
}
function Pr() {
  const { kb: e } = I(), t = e.datasets.dia_regression, [n, r] = q(t.rows.length), s = we();
  V(() => () => clearInterval(s.current), []);
  const a = () => {
    if (B("replay_played", { trace: "t.dia.regression" }), Ce()) {
      r(t.rows.length);
      return;
    }
    r(0), clearInterval(s.current);
    let l = 0;
    s.current = window.setInterval(() => {
      l++, r(l), l >= t.rows.length && clearInterval(s.current);
    }, 70);
  }, o = t.rows.slice(0, n).filter((l) => l[1] === l[2]).length;
  return /* @__PURE__ */ i("figure", { class: "imw-trace", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: "24-pair severity regression · retriever + classifier path" }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: a, children: "▶ Re-run from the saved record" })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", "aria-live": "polite", children: n < t.rows.length ? `Checking ${n}/${t.rows.length}…` : `${o}/${t.rows.length} severities match the authored labels.` }),
    /* @__PURE__ */ i("div", { class: "imw-table-wrap is-tall", children: /* @__PURE__ */ i("table", { class: "imw-table", children: [
      /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: "Pair" }),
        /* @__PURE__ */ i("th", { children: "Expected" }),
        /* @__PURE__ */ i("th", { children: "Actual" }),
        /* @__PURE__ */ i("th", { children: "Tier" }),
        /* @__PURE__ */ i("th", { children: "Conf." }),
        /* @__PURE__ */ i("th", {})
      ] }) }),
      /* @__PURE__ */ i("tbody", { children: t.rows.map((l, u) => /* @__PURE__ */ i("tr", { class: u < n ? "is-done" : "is-wait", children: [
        /* @__PURE__ */ i("th", { scope: "row", children: l[0] }),
        /* @__PURE__ */ i("td", { children: l[1] }),
        /* @__PURE__ */ i("td", { children: u < n ? l[2] : "…" }),
        /* @__PURE__ */ i("td", { children: l[3] }),
        /* @__PURE__ */ i("td", { children: l[4].toFixed(2) }),
        /* @__PURE__ */ i("td", { children: u < n ? l[1] === l[2] ? /* @__PURE__ */ i("span", { class: "imw-verdict is-pass", children: "✓" }) : /* @__PURE__ */ i("span", { class: "imw-verdict is-fail", children: "✕" }) : "" })
      ] }, l[0])) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      t.caveat,
      " The final LLM explanation is excluded; this is not a clinical validation."
    ] })
  ] });
}
function An({ id: e }) {
  const { kb: t, go: n } = I(), r = t.attacks.find((l) => l.id === e), [s, a] = q(!1);
  if (!r) return null;
  const o = { held: "✓ Held", flagged: "! Flagged for review", fixed: "✓ Fixed" }[r.result];
  return /* @__PURE__ */ i("article", { class: `imw-attack is-${r.result}${s ? " is-open" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-attack-head", "aria-expanded": s, onClick: () => a(!s), children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: t.entity.get(r.entity)?.short }),
      /* @__PURE__ */ i("strong", { children: r.label }),
      /* @__PURE__ */ i("span", { class: `imw-verdict is-${r.result === "flagged" ? "warn" : "pass"}`, children: o })
    ] }),
    s && /* @__PURE__ */ i("div", { class: "imw-attack-body", children: [
      /* @__PURE__ */ i("dl", { class: "imw-kv", children: [
        /* @__PURE__ */ i("dt", { children: "Attempt" }),
        /* @__PURE__ */ i("dd", { children: r.attempt }),
        /* @__PURE__ */ i("dt", { children: "Expected" }),
        /* @__PURE__ */ i("dd", { children: r.expected }),
        /* @__PURE__ */ i("dt", { children: "Observed" }),
        /* @__PURE__ */ i("dd", { children: r.observed }),
        /* @__PURE__ */ i("dt", { children: "What protects it" }),
        /* @__PURE__ */ i("dd", { children: r.protection })
      ] }),
      /* @__PURE__ */ i(We, { refs: r.code }),
      r.trace && /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => n("lab", r.trace), children: "▶ Replay the recorded run" })
    ] })
  ] });
}
function Dr(e, t, n, r, s, a, o) {
  const l = e / (e + n), u = t / (t + r), c = s * a * l, f = s * (1 - a) * u, w = c + f;
  return { trueAlerts: c, falseAlerts: f, missed: s * a * (1 - l), reviews: w, hours: w * o / 60, precision: w ? c / w : null };
}
function Fr() {
  const { kb: e } = I(), t = e.datasets.cliniq_confusion, [n, r] = q(1e4), [s, a] = q(5), [o, l] = q(3), u = he(() => t.methods.map((w) => ({ m: w, r: Dr(w.tp, w.fp, w.fn, w.tn, n, s / 100, o) })), [t, n, s, o]), c = Math.max(...u.map((w) => w.r.hours), 1), f = (w) => w.toLocaleString(void 0, { maximumFractionDigits: 0 });
  return /* @__PURE__ */ i("div", { class: "imw-workload", children: [
    /* @__PURE__ */ i("div", { class: "imw-sliders", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Reviews per month ",
          /* @__PURE__ */ i("b", { children: f(n) })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1e3, max: 1e5, step: 1e3, value: n, onInput: (w) => r(+w.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Prevalence of true signals ",
          /* @__PURE__ */ i("b", { children: [
            s,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 30, step: 1, value: s, onInput: (w) => a(+w.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Minutes per human review ",
          /* @__PURE__ */ i("b", { children: o })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 15, step: 1, value: o, onInput: (w) => l(+w.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-table-wrap", children: /* @__PURE__ */ i("table", { class: "imw-table", children: [
      /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: "Method" }),
        /* @__PURE__ */ i("th", { children: "Alerts" }),
        /* @__PURE__ */ i("th", { children: "True" }),
        /* @__PURE__ */ i("th", { children: "Missed signals" }),
        /* @__PURE__ */ i("th", { children: "Expected precision" }),
        /* @__PURE__ */ i("th", { children: "Reviewer hours" })
      ] }) }),
      /* @__PURE__ */ i("tbody", { children: u.map(({ m: w, r: d }) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { scope: "row", children: w.label }),
        /* @__PURE__ */ i("td", { children: f(d.reviews) }),
        /* @__PURE__ */ i("td", { children: f(d.trueAlerts) }),
        /* @__PURE__ */ i("td", { children: f(d.missed) }),
        /* @__PURE__ */ i("td", { children: d.precision === null ? "—" : d.precision.toFixed(2) }),
        /* @__PURE__ */ i("td", { class: "imw-barcell", children: [
          /* @__PURE__ */ i("span", { class: "imw-inline-bar viz-2", style: { width: `${d.hours / c * 100}%` }, "aria-hidden": "true" }),
          /* @__PURE__ */ i("b", { children: f(d.hours) })
        ] })
      ] }, w.id)) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Same formula as ClinIQ's ",
      /* @__PURE__ */ i("code", { children: "estimate_workload()" }),
      ", fed the saved confusion counts. At low prevalence, the embedding detector's false positives dominate reviewer time. ",
      t.caveat
    ] }),
    /* @__PURE__ */ i(ne, { ids: ["cliniq.workload"], compact: !0 })
  ] });
}
function Nr() {
  const [e, t] = q(null);
  if (V(() => {
    fetch(qn("evaluation-report.json")).then((s) => s.ok ? s.json() : null).then(t).catch(() => t(null));
  }, []), !e) return null;
  const n = e.suites.reduce((s, a) => s + a.passed, 0), r = e.suites.reduce((s, a) => s + a.total, 0);
  return /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "This assistant's own tests" }),
    /* @__PURE__ */ i("h4", { children: [
      n,
      "/",
      r,
      " evaluation cases passing"
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Generated ",
      new Date(e.generated_at).toLocaleDateString(),
      " by CI. It covers invented skills, false premises, unverified figures, prompt injection, hype language, role mapping and link correctness."
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-suites", children: e.suites.map((s) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("span", { class: `imw-verdict is-${s.passed === s.total ? "pass" : "fail"}`, children: s.passed === s.total ? "✓" : "✕" }),
      /* @__PURE__ */ i("span", { children: s.name }),
      /* @__PURE__ */ i("b", { children: [
        s.passed,
        "/",
        s.total
      ] })
    ] }, s.name)) })
  ] });
}
function Wr() {
  const { kb: e, modeArg: t } = I(), n = e.traces.find((o) => o.id === t)?.id ?? "t.voice.emergency", [r, s] = q(n);
  V(() => {
    e.traces.some((o) => o.id === t) && s(t);
  }, [t]);
  const a = e.attacks.filter((o) => !t || !e.entity.has(t) || o.entity === t);
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Proof lab" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Don't take the write-up's word for it." }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Replays use the recorded transcripts, grades and records from the repositories; nothing here is simulated. The calculator runs the project's own formula on its saved results." })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Replay a recorded run" }),
      /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "Recorded runs", children: e.traces.map((o) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": r === o.id, class: r === o.id ? "is-on" : "", onClick: () => s(o.id), children: o.title }, o.id)) }),
      /* @__PURE__ */ i(Sn, { id: r }, r)
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Try to break it" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Adversarial and edge cases, what the system did, and the test that keeps it that way." }),
      /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: a.map((o) => /* @__PURE__ */ i(An, { id: o.id }, o.id)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Run the numbers · ClinIQ review workload" }),
      /* @__PURE__ */ i(Fr, {})
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Measured from the audio · Voice QA Harness" }),
      /* @__PURE__ */ i(ci, {})
    ] }),
    /* @__PURE__ */ i(Nr, {})
  ] });
}
function Hr({ a: e }) {
  const { setInspect: t, ask: n } = I(), r = oi(e), s = (a) => r.indexOf(a) + 1;
  return /* @__PURE__ */ i("div", { class: "imw-answer", children: [
    /* @__PURE__ */ i("div", { class: "imw-answer-head", children: [
      /* @__PURE__ */ i("span", { class: `imw-engine is-${e.engine}`, children: e.engine === "model" ? "Claude · validated" : "Evidence engine" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => t({ kind: "basis", retrieved: e.basis?.retrieved ?? [], checks: e.basis?.checks, model: e.basis?.model, engine: e.engine }), children: "Why this answer?" }),
      e.refined && /* @__PURE__ */ i("span", { class: "imw-help", children: "Requirements refined by AI parsing" })
    ] }),
    e.blocks.map((a, o) => /* @__PURE__ */ i(Br, { b: a, num: s }, o)),
    e.actions.length > 0 && /* @__PURE__ */ i("div", { class: "imw-actions", children: e.actions.map((a, o) => /* @__PURE__ */ i(dt, { a }, o)) }),
    e.followups.length > 0 && /* @__PURE__ */ i("div", { class: "imw-followups", "aria-label": "Suggested follow-up questions", children: e.followups.map((a) => /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n(a), children: a }, a)) })
  ] });
}
const Or = (e) => {
  const t = e.replace(/^Bottom line: /, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
};
function Pt({ ids: e, num: t }) {
  const { kb: n, setInspect: r } = I();
  return e?.length ? /* @__PURE__ */ i(oe, { children: e.map((s) => /* @__PURE__ */ i("button", { class: "imw-cite", onClick: () => r({ kind: "claim", id: s }), "aria-label": `Source ${t(s)}: ${n.claim.get(s)?.text ?? s}`, children: t(s) }, s)) }) : null;
}
function Br({ b: e, num: t }) {
  const n = I(), { kb: r, setInspect: s, go: a } = n;
  switch (e.type) {
    case "p":
      return /* @__PURE__ */ i("p", { class: `imw-p${e.lead ? " is-lead" : ""}`, children: [
        e.text,
        /* @__PURE__ */ i(Pt, { ids: e.cites, num: t })
      ] });
    case "points":
      return /* @__PURE__ */ i("ol", { class: "imw-points", children: e.items.map((o) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: o.label }),
        /* @__PURE__ */ i("span", { children: [
          o.text,
          /* @__PURE__ */ i(Pt, { ids: o.cites, num: t })
        ] })
      ] }, o.label)) });
    case "takeaway":
      return /* @__PURE__ */ i("div", { class: "imw-takeaway", children: [
        /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Bottom line" }),
        /* @__PURE__ */ i("p", { children: [
          Or(e.text),
          /* @__PURE__ */ i(Pt, { ids: e.cites, num: t })
        ] })
      ] });
    case "note":
      return /* @__PURE__ */ i("p", { class: `imw-note${e.tone === "warn" ? " is-warn" : ""}`, children: e.text });
    case "claims":
      return e.collapsed ? /* @__PURE__ */ i("details", { class: "imw-sources", children: [
        /* @__PURE__ */ i("summary", { children: [
          "Sources · ",
          e.ids.length,
          " verified item",
          e.ids.length === 1 ? "" : "s",
          " with links"
        ] }),
        /* @__PURE__ */ i(ne, { ids: e.ids })
      ] }) : /* @__PURE__ */ i(ne, { ids: e.ids, title: e.title });
    case "entity": {
      const o = r.entity.get(e.id);
      return o ? /* @__PURE__ */ i("div", { class: "imw-entity", children: [
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: [
          o.kind,
          " · ",
          o.dates
        ] }),
        /* @__PURE__ */ i("h3", { children: o.name }),
        /* @__PURE__ */ i("p", { class: "imw-help", children: o.role ?? o.tagline })
      ] }) : null;
    }
    case "coverage":
      return /* @__PURE__ */ i("div", { class: "imw-coverage-inline", children: [
        /* @__PURE__ */ i(Ct, { counts: e.analysis.counts }),
        /* @__PURE__ */ i($n, { analysis: e.analysis, max: 12 }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
          n.setCoverage(e.analysis), a("role");
        }, children: "Open the full analysis →" })
      ] });
    case "xray": {
      const o = r.architectures.find((l) => l.id === e.arch);
      return o ? /* @__PURE__ */ i("div", { class: "imw-xray-inline", children: [
        /* @__PURE__ */ i(En, { arch: o, scan: !1, onSelect: (l) => s({ kind: "node", arch: o.id, node: l }) }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a("xray", o.entity), children: "Open X-Ray view →" })
      ] }) : null;
    }
    case "failures":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(di, { id: o }, o)) });
    case "decisions":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(hi, { id: o }, o)) });
    case "compare":
      return /* @__PURE__ */ i("div", { class: "imw-table-wrap", children: /* @__PURE__ */ i("table", { class: "imw-table imw-compare", children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "col", children: /* @__PURE__ */ i("span", { class: "sr-only", children: "Field" }) }),
          e.entities.map((o) => /* @__PURE__ */ i("th", { scope: "col", children: r.entity.get(o)?.short }, o))
        ] }) }),
        /* @__PURE__ */ i("tbody", { children: e.rows.map((o) => /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "row", children: o.label }),
          o.values.map((l, u) => /* @__PURE__ */ i("td", { children: l }, u))
        ] }, o.label)) })
      ] }) });
    case "gaps":
      return /* @__PURE__ */ i("ul", { class: "imw-gaps", children: e.items.map((o) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-cat cat-missing", children: ie.missing }),
        /* @__PURE__ */ i("strong", { children: o.name }),
        /* @__PURE__ */ i("p", { children: o.statement }),
        o.closest.length > 0 && /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("span", { class: "imw-help", children: "Closest:" }),
          o.closest.map((l) => /* @__PURE__ */ i(Mr, { id: l }, l))
        ] })
      ] }, o.id)) });
    case "chart":
      return e.chart === "cliniq" ? /* @__PURE__ */ i(Cn, {}) : /* @__PURE__ */ i(ci, {});
    case "trace":
      return /* @__PURE__ */ i(Sn, { id: e.id, compact: !0 });
  }
}
function di({ id: e, open: t = !1 }) {
  const { kb: n } = I(), r = n.failures.find((l) => l.id === e), [s, a] = q(t);
  if (!r) return null;
  const o = [["Problem", r.problem], ["Detection", r.detection], ["Diagnosis", r.diagnosis], ["Fix", r.fix], ["Prevention", r.prevention], ["Measured", r.measurement]];
  return /* @__PURE__ */ i("article", { class: `imw-story${s ? " is-open" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-story-head", "aria-expanded": s, onClick: () => a(!s), children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
        "Failure · ",
        n.entity.get(r.entity)?.short
      ] }),
      /* @__PURE__ */ i("strong", { children: r.title }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: s ? "Hide" : "Problem → detection → fix → prevention" })
    ] }),
    s && /* @__PURE__ */ i("div", { class: "imw-story-body", children: [
      /* @__PURE__ */ i("ol", { class: "imw-flow", children: o.map(([l, u]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: l }),
        /* @__PURE__ */ i("span", { children: u })
      ] }, l)) }),
      /* @__PURE__ */ i(We, { refs: r.code }),
      /* @__PURE__ */ i(ne, { ids: r.claims, title: "Evidence", compact: !0 })
    ] })
  ] });
}
function hi({ id: e }) {
  const { kb: t } = I(), n = t.decisions.find((r) => r.id === e);
  return n ? /* @__PURE__ */ i("article", { class: "imw-story is-open", children: [
    /* @__PURE__ */ i("div", { class: "imw-story-head is-static", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
        "Decision · ",
        t.entity.get(n.entity)?.short
      ] }),
      /* @__PURE__ */ i("strong", { children: n.title })
    ] }),
    /* @__PURE__ */ i("dl", { class: "imw-kv", children: [
      /* @__PURE__ */ i("dt", { children: "Choice" }),
      /* @__PURE__ */ i("dd", { children: n.choice }),
      /* @__PURE__ */ i("dt", { children: "Why" }),
      /* @__PURE__ */ i("dd", { children: n.rationale }),
      /* @__PURE__ */ i("dt", { children: "Tradeoff" }),
      /* @__PURE__ */ i("dd", { children: n.tradeoff })
    ] })
  ] }) : null;
}
function zr({ analysis: e }) {
  const { kb: t, setInspect: n } = I();
  return /* @__PURE__ */ i("div", { class: "imw-reqgroups", children: ["direct", "related", "verification", "missing"].map((s) => {
    const a = e.requirements.filter((o) => o.category === s);
    return a.length ? /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i("h4", { class: `imw-cat ${Ee[s]}`, children: [
        ie[s],
        " · ",
        a.length
      ] }),
      /* @__PURE__ */ i("ul", { class: "imw-reqs", children: a.map((o) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: o }), children: [
        /* @__PURE__ */ i("i", { class: `imw-cat-dot ${Ee[o.category]}`, "aria-hidden": "true" }),
        /* @__PURE__ */ i("span", { children: [
          o.label,
          o.priority === "preferred" ? /* @__PURE__ */ i("em", { children: " · preferred" }) : null,
          o.strength === "self_reported" ? /* @__PURE__ */ i("em", { children: " · self-reported" }) : null
        ] }),
        /* @__PURE__ */ i("small", { children: o.entities.length ? o.entities.slice(0, 3).map((l) => t.entity.get(l)?.short).join(" · ") : o.statement })
      ] }) }, o.id)) })
    ] }, s) : null;
  }) });
}
function Ur() {
  try {
    return window.__siteCfg?.web3forms ?? "";
  } catch {
    return "";
  }
}
const st = (e, t) => e.replace(/\s+/g, " ").trim().slice(0, t), Vr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Gr(e, t, n) {
  const r = st(t.name, 80), s = st(t.company, 80), a = st(t.email, 120), o = n.coverage;
  return {
    access_key: e,
    subject: `Portfolio visitor: ${[r, s].filter(Boolean).join(", ") || "someone who left a note"}`,
    from_name: "vajja1405.github.io",
    name: r || "(not given)",
    company: s || "(not given)",
    their_role: st(t.role, 80) || "(not given)",
    message: t.message.trim().slice(0, 1e3) || "(no message)",
    // Web3Forms uses "email" as the reply-to address, so only a well-formed one is passed on.
    ...Vr.test(a) ? { email: a } : {},
    perspective: n.persona,
    left_after: n.where === "jd" ? "a job-description analysis" : "downloading the PDF",
    ...o ? { coverage: `${o.counts.direct} direct, ${o.counts.related} related, ${o.counts.verification} to verify, ${o.counts.missing} not demonstrated${o.closestRole ? `; closest profile: ${o.closestRole}` : ""}` } : {},
    botcheck: t.botcheck
  };
}
async function Kr(e) {
  const t = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(e)
  }), n = await t.json().catch(() => ({}));
  return t.ok && n.success === !0;
}
const In = "imw-hello-done", Qr = () => {
  try {
    return sessionStorage.getItem(In) === "1";
  } catch {
    return !1;
  }
}, Oi = () => {
  try {
    sessionStorage.setItem(In, "1");
  } catch {
  }
};
function Mn({ where: e }) {
  const { kb: t, persona: n, coverage: r } = I(), s = Ur(), [a, o] = q(() => Qr() ? "hidden" : "closed"), [l, u] = q({ name: "", company: "", role: t.personas.find((d) => d.id === n)?.label ?? "", email: "", message: "", botcheck: !1 });
  if (!s || a === "hidden") return null;
  const c = (d) => (y) => u({ ...l, [d]: y.target.value }), f = () => {
    Oi(), o("hidden");
  }, w = async (d) => {
    d.preventDefault(), o("busy");
    try {
      const y = await Kr(Gr(s, l, { persona: n, where: e, coverage: r }));
      o(y ? "sent" : "error"), y && (Oi(), B("hello_sent", { where: e }));
    } catch {
      o("error");
    }
  };
  return a === "sent" ? /* @__PURE__ */ i("div", { class: "imw-hello", role: "status", children: [
    /* @__PURE__ */ i("b", { children: [
      "Thanks",
      l.name.trim() ? `, ${l.name.trim().split(" ")[0]}` : "",
      "."
    ] }),
    " Rahul will see your note."
  ] }) : a === "closed" ? /* @__PURE__ */ i("div", { class: "imw-hello", children: [
    /* @__PURE__ */ i("p", { children: [
      /* @__PURE__ */ i("b", { children: e === "jd" ? "Hiring for this role?" : "Taking this to your team?" }),
      " Let Rahul know you stopped by. It's optional and takes ten seconds."
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-actions", children: [
      /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: () => {
        o("open"), B("hello_opened", { where: e });
      }, children: "Leave a note" }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: f, children: "No thanks" })
    ] })
  ] }) : /* @__PURE__ */ i("form", { class: "imw-hello", onSubmit: w, children: [
    /* @__PURE__ */ i("p", { children: /* @__PURE__ */ i("b", { children: "Let Rahul know you stopped by" }) }),
    /* @__PURE__ */ i("div", { class: "imw-hello-grid", children: [
      /* @__PURE__ */ i("label", { children: [
        "Name",
        /* @__PURE__ */ i("input", { value: l.name, onInput: c("name"), maxLength: 80, autoComplete: "name" })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Company",
        /* @__PURE__ */ i("input", { value: l.company, onInput: c("company"), maxLength: 80, autoComplete: "organization" })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Your role",
        /* @__PURE__ */ i("input", { value: l.role, onInput: c("role"), maxLength: 80, placeholder: "Recruiter, hiring manager…" })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Email, if you'd like a reply",
        /* @__PURE__ */ i("input", { type: "email", value: l.email, onInput: c("email"), maxLength: 120, autoComplete: "email" })
      ] }),
      /* @__PURE__ */ i("label", { class: "is-wide", children: [
        "Message",
        /* @__PURE__ */ i("textarea", { rows: 3, value: l.message, onInput: c("message"), maxLength: 1e3, placeholder: "What role are you hiring for, or what would you like to talk about?" })
      ] }),
      /* @__PURE__ */ i("input", { type: "checkbox", class: "imw-hello-trap", tabIndex: -1, "aria-hidden": "true", checked: l.botcheck, onChange: (d) => u({ ...l, botcheck: d.target.checked }) })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: "Every field is optional. Your note is emailed to Rahul and not stored on this site. Please leave out anything confidential." }),
    /* @__PURE__ */ i("div", { class: "imw-actions", children: [
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-btn is-primary", disabled: a === "busy" || !(l.name.trim() || l.company.trim() || l.message.trim() || l.email.trim()), children: a === "busy" ? "Sending…" : "Send to Rahul" }),
      /* @__PURE__ */ i("button", { type: "button", class: "imw-btn", onClick: f, children: "Cancel" })
    ] }),
    a === "error" && /* @__PURE__ */ i("p", { class: "imw-note is-warn", role: "alert", children: [
      "The note couldn't be sent. You can email Rahul directly at ",
      /* @__PURE__ */ i("a", { href: `mailto:${t.subject.email}`, children: t.subject.email }),
      "."
    ] })
  ] });
}
const Yr = [
  { q: "What has Rahul actually shipped?" },
  { q: "Show me his strongest RAG work." },
  { q: "How does he evaluate AI systems?" },
  { q: "What has he built beyond LLM wrappers?" },
  { q: "Show me his backend engineering experience." },
  { q: "What failure did he find and fix?" },
  { q: "Evaluate Rahul for a role", mode: "role" },
  { q: "Paste a job description", mode: "jd" }
];
function Jr({ turns: e }) {
  const { kb: t, ask: n, go: r, persona: s, setPersona: a } = I(), [o, l] = q(""), u = we(null), c = we(null), f = e[e.length - 1];
  V(() => {
    c.current?.querySelector(".imw-turn:last-child")?.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [e.length, f?.pending]);
  const w = () => {
    const g = o.trim();
    g && (l(""), u.current && (u.current.style.height = "auto"), n(g));
  }, d = si(o), y = t.claims.reduce((g, h) => g + (F(h) ? h.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-ask", children: [
    /* @__PURE__ */ i("div", { class: "imw-log", ref: c, children: [
      e.length === 0 && /* @__PURE__ */ i("div", { class: "imw-welcome", children: [
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "✦ Interview My Work" }),
        /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Ask about my projects, engineering decisions, experience, or how my background maps to a role." }),
        /* @__PURE__ */ i("p", { class: "imw-lead", children: "Don't just read my résumé. Inspect the evidence behind the work: every answer links to its source, measured result and code." }),
        /* @__PURE__ */ i("dl", { class: "imw-stats is-inline", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: t.claims.filter(F).length }),
            /* @__PURE__ */ i("dd", { children: "verified claims" })
          ] }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: y }),
            /* @__PURE__ */ i("dd", { children: "pinned code links" })
          ] }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: t.architectures.length }),
            /* @__PURE__ */ i("dd", { children: "system X-Rays" })
          ] }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: t.traces.length }),
            /* @__PURE__ */ i("dd", { children: "recorded replays" })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: [
          "Who's asking? ",
          /* @__PURE__ */ i("span", { class: "imw-help", children: "(optional)" })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Who is asking", children: t.personas.map((g) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": s === g.id, class: s === g.id ? "is-on" : "", onClick: () => a(g.id), children: g.label }, g.id)) }),
        /* @__PURE__ */ i("p", { class: "imw-help", children: [
          "Prefer your own assistant? ",
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("connect"), children: "Connect Claude, Cursor or VS Code to this evidence →" })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Start with" }),
        /* @__PURE__ */ i("div", { class: "imw-starters", children: Yr.map((g, h) => /* @__PURE__ */ i("button", { onClick: () => {
          B("starter_question_selected", { index: h }), g.mode ? r("role", g.mode === "jd" ? "jd" : void 0) : n(g.q);
        }, children: [
          /* @__PURE__ */ i("span", { class: "imw-starter-n", children: String(h + 1).padStart(2, "0") }),
          /* @__PURE__ */ i("span", { children: g.q })
        ] }, g.q)) })
      ] }),
      e.map((g) => /* @__PURE__ */ i("section", { class: "imw-turn", "aria-label": `Question: ${g.q}`, children: [
        /* @__PURE__ */ i("p", { class: "imw-q", children: [
          /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "You asked" }),
          g.q
        ] }),
        g.pending && /* @__PURE__ */ i("div", { class: "imw-pending", role: "status", children: [
          /* @__PURE__ */ i("span", { class: "imw-pulse", "aria-hidden": "true" }),
          "Writing an answer from the evidence and checking every citation (about 10 seconds)…"
        ] }),
        g.a && /* @__PURE__ */ i(Hr, { a: g.a })
      ] }, g.id)),
      f?.a?.intent === "jd" && !f.pending && /* @__PURE__ */ i(Mn, { where: "jd" }),
      e.some((g) => g.a) && !f?.pending && /* @__PURE__ */ i("p", { class: "imw-keep", children: [
        "Want to keep this? ",
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("export"), children: "Download your questions and answers as a PDF →" })
      ] })
    ] }),
    /* @__PURE__ */ i("form", { class: "imw-composer", onSubmit: (g) => {
      g.preventDefault(), w();
    }, children: [
      d && /* @__PURE__ */ i("p", { class: "imw-jd-hint", children: "This looks like a job description. Sending it runs an evidence-coverage analysis." }),
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-q", children: "Ask a question or paste a job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-q",
          ref: u,
          rows: 1,
          value: o,
          placeholder: "Ask a question, or paste a job description…",
          maxLength: 12e3,
          onInput: (g) => {
            const h = g.target;
            l(h.value), h.style.height = "auto", h.style.height = `${Math.min(h.scrollHeight, 180)}px`;
          },
          onKeyDown: (g) => {
            g.key === "Enter" && !g.shiftKey && (g.preventDefault(), w());
          }
        }
      ),
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-send", disabled: !o.trim(), children: d ? "Analyze" : "Ask" })
    ] })
  ] });
}
function Xr(e) {
  const t = location.origin + location.pathname;
  if (e.source === "role" && e.roleId) return `${t}#imw=role:${e.roleId}`;
  const n = e.requirements.map((r) => r.id).filter((r) => !r.startsWith("term:")).join(",");
  return `${t}#imw=role:${encodeURIComponent(`jd~${n}`)}`;
}
function Zr(e, t) {
  const n = [`# Evidence coverage: ${e.title}`, `Candidate: ${t}`, ""];
  for (const r of ["direct", "related", "verification", "missing"]) {
    const s = e.requirements.filter((a) => a.category === r);
    s.length && (n.push(`## ${ie[r]} (${s.length})`), s.forEach((a) => n.push(`- ${a.label}${a.statement && r !== "direct" ? ` — ${a.statement}` : ""}`)), n.push(""));
  }
  return e.notes.length && n.push(...e.notes.map((r) => `> ${r}`), ""), n.push("Generated by Interview My Work from verified evidence. No fit score is computed."), n.join(`
`);
}
function ea() {
  const { kb: e, coverage: t, setCoverage: n, modeArg: r, api: s, toggleLens: a, ask: o, go: l } = I(), [u, c] = q(r === "jd" ? "jd" : "role"), [f, w] = q(""), [d, y] = q(!1), [g, h] = q("");
  V(() => {
    if (!r) return;
    if (r === "jd") {
      c("jd");
      return;
    }
    const p = decodeURIComponent(r);
    if (e.role.has(p)) n($e(e, p));
    else if (p.startsWith("jd~")) {
      const C = p.slice(3).split(",").filter(Boolean).map((E) => E.startsWith("near:") ? ue(e, e.skills.find((M) => M.near?.includes(E.slice(5)))?.id ?? E, { near: E.slice(5) }) : ue(e, E));
      n(ii(e, "Shared job description", C, { source: "jd" }));
    }
  }, [r]);
  const m = (p) => {
    p && (n($e(e, p)), B("role_selected", { role: p }));
  }, v = () => {
    if (f.trim().length < 40) return;
    const p = ft(e, f);
    n(p), B("jd_analyzed", { requirements: p.requirements.length }), s === "ready" && (y(!0), _n(f).then((x) => {
      x.length && n(ft(e, f, x), p);
    }).catch(() => {
    }).finally(() => y(!1)));
  }, k = async (p) => {
    if (t)
      try {
        await navigator.clipboard.writeText(p === "link" ? Xr(t) : Zr(t, e.subject.name)), h(p), setTimeout(() => h(""), 2e3);
      } catch {
      }
  }, b = e.roles.filter((p) => p.priority).sort((p, x) => p.priority - x.priority), _ = [["strong", "Strong fit"], ["adjacent", "Adjacent"], ["stretch", "Stretch"]];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Evaluate against a role" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "What are you evaluating Rahul for?" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Each requirement is classified as direct evidence, related evidence, verification required, or not currently demonstrated. There is no match percentage." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg", role: "tablist", "aria-label": "Input", children: [
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": u === "role", class: u === "role" ? "is-on" : "", onClick: () => c("role"), children: "Select a role" }),
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": u === "jd", class: u === "jd" ? "is-on" : "", onClick: () => c("jd"), children: "Paste a job description" })
    ] }),
    u === "role" ? /* @__PURE__ */ i("div", { class: "imw-rolepick", children: [
      /* @__PURE__ */ i("div", { class: "imw-role-cards", children: b.map((p) => /* @__PURE__ */ i("button", { class: t?.roleId === p.id && t.source === "role" ? "is-on" : "", onClick: () => m(p.id), children: [
        /* @__PURE__ */ i("strong", { children: p.title }),
        /* @__PURE__ */ i("small", { children: p.proof_note })
      ] }, p.id)) }),
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "More roles" }),
        /* @__PURE__ */ i("select", { onChange: (p) => m(p.target.value), value: t?.source === "role" ? t.roleId : "", children: [
          /* @__PURE__ */ i("option", { value: "", children: "Choose a role…" }),
          _.map(([p, x]) => /* @__PURE__ */ i("optgroup", { label: x, children: e.roles.filter((C) => C.tier === p && !C.priority).map((C) => /* @__PURE__ */ i("option", { value: C.id, children: C.title }, C.id)) }, p))
        ] })
      ] })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-jd", children: [
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-jd", children: "Job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-jd",
          rows: 8,
          value: f,
          maxLength: 12e3,
          placeholder: "Paste the full job description, including requirements and nice-to-haves.",
          onInput: (p) => w(p.target.value)
        }
      ),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: v, disabled: f.trim().length < 40, children: "Analyze coverage" }),
        /* @__PURE__ */ i("span", { class: "imw-help", children: s === "ready" ? "Parsed in your browser, then refined by the AI parser. The text is not stored." : "Parsed in your browser. Nothing is sent anywhere." })
      ] })
    ] }),
    t && /* @__PURE__ */ i("section", { class: "imw-analysis", "aria-live": "polite", children: [
      /* @__PURE__ */ i("div", { class: "imw-analysis-head", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: [
            "Evidence coverage",
            d ? " · refining with AI…" : ""
          ] }),
          /* @__PURE__ */ i("h3", { children: t.title }),
          t.source === "jd" && t.closestRole && /* @__PURE__ */ i("p", { class: "imw-help", children: [
            "Closest target profile: ",
            t.closestRole
          ] })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: () => a(!0), children: "Show this on the portfolio" }),
          /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l("brief"), children: "10-minute brief" })
        ] })
      ] }),
      /* @__PURE__ */ i(Ct, { counts: t.counts }),
      t.notes.map((p) => /* @__PURE__ */ i("p", { class: "imw-note", children: p }, p)),
      /* @__PURE__ */ i($n, { analysis: t, max: 18 }),
      /* @__PURE__ */ i(zr, { analysis: t }),
      /* @__PURE__ */ i("div", { class: "imw-actions", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => o(t.roleId ? `Challenge the evidence for ${t.title}` : "Challenge this evidence"), children: "Challenge this evidence" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l("map", t.roleId), children: "View on the evidence map" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("link"), children: g === "link" ? "Link copied" : "Copy shareable link" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("md"), children: g === "md" ? "Summary copied" : "Copy summary" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l("export"), children: "Download PDF" })
      ] })
    ] })
  ] });
}
function ta() {
  const { kb: e, modeArg: t, setInspect: n, inspect: r, ask: s, noteEntity: a } = I(), o = e.architectures, [l, u] = q(o.find((p) => p.entity === t)?.id ?? o[0].id), c = o.find((p) => p.id === l), [f, w] = q("why");
  V(() => {
    const p = o.find((x) => x.entity === t);
    p && u(p.id);
  }, [t]), V(() => {
    a(c.entity);
  }, [c.entity]);
  const d = e.entity.get(c.entity), y = e.statableByEntity.get(c.entity) ?? [], g = e.decisions.filter((p) => p.entity === c.entity), h = e.failures.filter((p) => p.entity === c.entity), m = e.attacks.filter((p) => p.entity === c.entity), v = y.filter((p) => p.tags.some((x) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(x))), k = y.flatMap((p) => p.code ?? []), b = r?.kind === "node" && r.arch === c.id ? r.node : void 0, _ = [
    ["why", "Why this design?", g.length],
    ["failures", "Failure cases", h.length + y.filter((p) => p.kind === "limitation").length],
    ["break", "Try to break it", m.length],
    ["evaluation", "Evaluation", v.length],
    ["code", "Code", k.length],
    ["questions", "Interviewer questions", d.questions.length]
  ];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "X-Ray · system anatomy" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: c.title }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        c.note,
        " Select a component to see its purpose, inputs and outputs, why it exists, and the evidence behind it."
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "System", children: o.map((p) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": p.id === l, class: p.id === l ? "is-on" : "", onClick: () => {
      u(p.id), n(null);
    }, children: e.entity.get(p.entity)?.short }, p.id)) }),
    /* @__PURE__ */ i(En, { arch: c, selected: b, onSelect: (p) => n({ kind: "node", arch: c.id, node: p }) }),
    /* @__PURE__ */ i("div", { class: "imw-subtabs", role: "tablist", "aria-label": "Inspect", children: _.filter(([, , p]) => p > 0).map(([p, x, C]) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": f === p, class: f === p ? "is-on" : "", onClick: () => w(p), children: [
      x,
      " ",
      /* @__PURE__ */ i("small", { children: C })
    ] }, p)) }),
    /* @__PURE__ */ i("div", { class: "imw-tabpanel", role: "tabpanel", children: [
      f === "why" && /* @__PURE__ */ i("div", { class: "imw-stack", children: g.map((p) => /* @__PURE__ */ i(hi, { id: p.id }, p.id)) }),
      f === "failures" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        h.map((p, x) => /* @__PURE__ */ i(di, { id: p.id, open: x === 0 }, p.id)),
        /* @__PURE__ */ i(ne, { ids: y.filter((p) => p.kind === "limitation").map((p) => p.id), title: "Stated limitations" })
      ] }),
      f === "break" && /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: m.map((p) => /* @__PURE__ */ i(An, { id: p.id }, p.id)) }),
      f === "evaluation" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i(ne, { ids: v.map((p) => p.id) }),
        c.entity === "cliniq" && /* @__PURE__ */ i(Cn, {}),
        c.entity === "voice" && /* @__PURE__ */ i(ci, {})
      ] }),
      f === "code" && /* @__PURE__ */ i(We, { refs: k, max: 30 }),
      f === "questions" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i("p", { class: "imw-help", children: "Questions a skeptical interviewer could press on. Select one to see what the evidence says." }),
        d.questions.map((p) => /* @__PURE__ */ i("button", { class: "imw-question", onClick: () => s(p.includes(d.short) ? p : `${p} (${d.short})`), children: p }, p))
      ] })
    ] })
  ] });
}
const ia = 1e3, na = 720, J = 500, te = 360, Kt = 170, Qt = 305, sa = /* @__PURE__ */ new Set(["project", "research", "experience", "leadership"]);
function ra(e, t) {
  const n = e.groups, r = e.entities.filter((h) => sa.has(h.kind)), s = new Map(e.skills.map((h) => [h.id, h.group])), a = /* @__PURE__ */ new Map();
  for (const h of e.claims.filter(F)) {
    const m = a.get(h.entity) ?? /* @__PURE__ */ new Map();
    new Set(h.tags.map((v) => s.get(v)).filter(Boolean)).forEach((v) => m.set(v, (m.get(v) ?? 0) + 1)), a.set(h.entity, m);
  }
  const o = new Map(n.map((h, m) => [h.id, -Math.PI / 2 + m / n.length * Math.PI * 2])), l = new Set(t?.requirements.filter((h) => h.category === "direct" || h.category === "related").map((h) => h.id) ?? []), u = new Map(n.map((h) => {
    if (!t) return [h.id, 1];
    const m = e.skills.filter((v) => v.group === h.id);
    return [h.id, m.filter((v) => l.has(v.id)).length / Math.max(1, Math.min(4, m.length))];
  })), c = Math.max(1, ...t?.entities.map((h) => h.score) ?? [1]), f = new Map(r.map((h) => [h.id, t ? (t.entities.find((m) => m.id === h.id)?.score ?? 0) / c : 1])), w = /* @__PURE__ */ new Map();
  for (const h of n) {
    const m = Math.min(1, u.get(h.id)), v = t ? Kt * (m > 0 ? 1 - 0.16 * m : 1.1) : Kt, k = o.get(h.id);
    w.set(h.id, { x: J + v * Math.cos(k), y: te + v * Math.sin(k), o: t ? m > 0 ? 1 : 0.16 : 1 });
  }
  const d = r.map((h) => {
    const m = a.get(h.id) ?? /* @__PURE__ */ new Map();
    let v = 0, k = 0;
    return m.forEach((b, _) => {
      const p = o.get(_);
      v += b * Math.cos(p), k += b * Math.sin(p);
    }), { id: h.id, a: Math.atan2(k, v) };
  }).sort((h, m) => h.a - m.a), y = Math.PI * 2 / d.length * 0.8;
  for (let h = 0; h < 8; h++)
    for (let m = 0; m < d.length; m++) {
      const v = d[m], k = d[(m + 1) % d.length];
      let b = k.a - v.a;
      if (m === d.length - 1 && (b += Math.PI * 2), b < y) {
        const _ = (y - b) / 2;
        v.a -= _, k.a += _;
      }
    }
  const g = /* @__PURE__ */ new Map();
  for (const h of d) {
    const m = f.get(h.id), v = t ? Qt * (m > 0 ? 1 - 0.2 * m : 1.06) : Qt;
    g.set(h.id, { x: J + v * Math.cos(h.a), y: te + v * Math.sin(h.a), o: t ? m > 0 ? 0.35 + 0.65 * m : 0.14 : 1 });
  }
  return { groups: n, ents: r, weight: a, gPos: w, ePos: g };
}
const aa = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
function oa() {
  const { kb: e, modeArg: t, coverage: n, setInspect: r, go: s } = I(), [a, o] = q(t && e.role.has(t) ? t : ""), [l, u] = q(null), c = he(() => a === "__current" ? n : a ? $e(e, a) : null, [a, e, n]), f = he(() => ra(e, c), [e, c]), [w, d] = q(() => new Map([...f.gPos, ...f.ePos].map(([_]) => [_, { x: J, y: te, o: 0 }]))), y = we(w);
  V(() => {
    const _ = new Map([...f.gPos, ...f.ePos]);
    if (Ce()) {
      y.current = _, d(_);
      return;
    }
    const p = y.current, x = performance.now(), C = 850;
    let E = 0;
    const M = (D) => {
      const Y = aa(Math.min(1, (D - x) / C)), Me = /* @__PURE__ */ new Map();
      _.forEach((re, ye) => {
        const H = p.get(ye) ?? { x: J, y: te, o: 0 };
        Me.set(ye, { x: H.x + (re.x - H.x) * Y, y: H.y + (re.y - H.y) * Y, o: H.o + (re.o - H.o) * Y });
      }), y.current = Me, d(Me), Y < 1 && (E = requestAnimationFrame(M));
    };
    return E = requestAnimationFrame(M), () => cancelAnimationFrame(E);
  }, [f]);
  const g = (_) => w.get(_) ?? { x: J, y: te, o: 0 }, h = Math.max(1, ...[...f.weight.values()].flatMap((_) => [..._.values()])), m = (_) => e.claims.filter((p) => F(p) && p.tags.some((x) => e.skill.get(x)?.group === _)).length, v = (_) => e.statableByEntity.get(_)?.length ?? 0, k = l ? e.skills.filter((_) => _.group === l).map((_, p, x) => {
    const C = g(l), E = Math.atan2(C.y - te, C.x - J), M = Math.min(Math.PI * 0.9, x.length * 0.22), D = E - M / 2 + M * (p + 0.5) / x.length;
    return { s: _, cov: ue(e, _.id), x: C.x + 92 * Math.cos(D), y: C.y + 92 * Math.sin(D) };
  }) : [], b = e.roles.filter((_) => _.priority).sort((_, p) => _.priority - p.priority);
  return /* @__PURE__ */ i("div", { class: "imw-view is-map", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Explore my engineering" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Evidence map" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Capability areas (inner ring) connect to the projects and roles that evidence them (outer ring). Line weight is the number of verified claims. Apply a role lens to pull relevant work toward the centre." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-row imw-map-controls", children: [
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "Role lens" }),
        /* @__PURE__ */ i("select", { value: a, onChange: (_) => {
          o(_.target.value), u(null);
        }, children: [
          /* @__PURE__ */ i("option", { value: "", children: "No lens: everything" }),
          n && /* @__PURE__ */ i("option", { value: "__current", children: [
            "Current analysis: ",
            n.title
          ] }),
          /* @__PURE__ */ i("optgroup", { label: "Priority roles", children: b.map((_) => /* @__PURE__ */ i("option", { value: _.id, children: _.title }, _.id)) }),
          /* @__PURE__ */ i("optgroup", { label: "Other roles", children: e.roles.filter((_) => !_.priority).map((_) => /* @__PURE__ */ i("option", { value: _.id, children: _.title }, _.id)) })
        ] })
      ] }),
      c && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
        s("role");
      }, children: "Open coverage analysis →" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-constellation", children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${ia} ${na}`, role: "group", "aria-label": "Evidence map of capability areas and projects", children: [
      /* @__PURE__ */ i("circle", { cx: J, cy: te, r: Kt, class: "imw-orbit" }),
      /* @__PURE__ */ i("circle", { cx: J, cy: te, r: Qt, class: "imw-orbit" }),
      f.groups.map((_) => {
        const p = g(_.id);
        return /* @__PURE__ */ i("line", { x1: J, y1: te, x2: p.x, y2: p.y, class: "imw-spoke", style: { opacity: p.o * 0.5 } }, `c-${_.id}`);
      }),
      f.ents.flatMap((_) => [...(f.weight.get(_.id) ?? /* @__PURE__ */ new Map()).entries()].map(([p, x]) => {
        const C = g(p), E = g(_.id), M = l ? l === p : !0;
        return /* @__PURE__ */ i("line", { x1: C.x, y1: C.y, x2: E.x, y2: E.y, class: "imw-web", style: { strokeWidth: 0.6 + 2.2 * x / h, opacity: Math.min(C.o, E.o) * (M ? 0.55 : 0.08) } }, `${_.id}-${p}`);
      })),
      /* @__PURE__ */ i("g", { class: "imw-core", children: [
        /* @__PURE__ */ i("circle", { cx: J, cy: te, r: 34 }),
        /* @__PURE__ */ i("text", { x: J, y: te - 2, "text-anchor": "middle", children: "Rahul" }),
        /* @__PURE__ */ i("text", { x: J, y: te + 14, "text-anchor": "middle", class: "imw-core-sub", children: "Vajja" })
      ] }),
      f.groups.map((_) => {
        const p = g(_.id), x = m(_.id), C = 6 + Math.sqrt(x) * 1.6, E = p.x < J - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-gnode${l === _.id ? " is-on" : ""}`,
            style: { opacity: p.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${_.label}: ${x} verified claims`,
            onClick: () => {
              u(l === _.id ? null : _.id), r({ kind: "group", id: _.id });
            },
            onKeyDown: (M) => {
              (M.key === "Enter" || M.key === " ") && (M.preventDefault(), u(l === _.id ? null : _.id), r({ kind: "group", id: _.id }));
            },
            children: [
              /* @__PURE__ */ i("circle", { cx: p.x, cy: p.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("circle", { cx: p.x, cy: p.y, r: C }),
              /* @__PURE__ */ i("text", { x: p.x + (E ? -C - 7 : C + 7), y: p.y + 4, "text-anchor": E ? "end" : "start", children: _.label })
            ]
          },
          _.id
        );
      }),
      k.map(({ s: _, cov: p, x, y: C }) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-sat ${Ee[p.category]}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${_.name}: ${p.category}`,
          onClick: () => r({ kind: "req", req: p }),
          onKeyDown: (E) => (E.key === "Enter" || E.key === " ") && (E.preventDefault(), r({ kind: "req", req: p })),
          children: [
            /* @__PURE__ */ i("line", { x1: g(l).x, y1: g(l).y, x2: x, y2: C }),
            /* @__PURE__ */ i("circle", { cx: x, cy: C, r: 4 }),
            /* @__PURE__ */ i("text", { x, y: C - 8, "text-anchor": "middle", children: _.name.length > 22 ? _.name.slice(0, 21) + "…" : _.name })
          ]
        },
        _.id
      )),
      f.ents.map((_) => {
        const p = g(_.id), x = v(_.id), C = 7 + Math.sqrt(x) * 1.4, E = p.x < J - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-enode is-${_.kind}`,
            style: { opacity: p.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${_.name}: ${x} verified claims`,
            onClick: () => r({ kind: "entity", id: _.id }),
            onKeyDown: (M) => (M.key === "Enter" || M.key === " ") && (M.preventDefault(), r({ kind: "entity", id: _.id })),
            children: [
              /* @__PURE__ */ i("circle", { cx: p.x, cy: p.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("rect", { x: p.x - C, y: p.y - C, width: C * 2, height: C * 2, rx: _.kind === "experience" ? C : 3 }),
              /* @__PURE__ */ i("text", { x: p.x + (E ? -C - 8 : C + 8), y: p.y + 4, "text-anchor": E ? "end" : "start", children: _.short })
            ]
          },
          _.id
        );
      })
    ] }) }),
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: [
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("i", { class: "imw-swatch is-group", "aria-hidden": "true" }),
        " Capability area"
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("i", { class: "imw-swatch is-project", "aria-hidden": "true" }),
        " Project / research"
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("i", { class: "imw-swatch is-experience", "aria-hidden": "true" }),
        " Experience"
      ] }),
      /* @__PURE__ */ i("li", { children: "Select an area to see its skills, coloured by evidence state." })
    ] })
  ] });
}
function la() {
  const { kb: e, coverage: t, modeArg: n, setCoverage: r, go: s } = I(), [a, o] = q(n && e.role.has(n) ? n : t?.roleId ?? "applied_ai");
  V(() => {
    n && e.role.has(n) && o(n);
  }, [n]);
  const l = t?.source === "jd" && !n, u = he(() => l && t ? t : $e(e, a), [e, a, l, t]);
  V(() => {
    B("brief_generated", { role: u.roleId ?? "jd" });
  }, [u]);
  const c = u.entities.filter((p) => p.id !== "imw" && e.entity.get(p.id)?.kind !== "education").slice(0, 3).map((p) => e.entity.get(p.id)), f = c.map((p) => p.id), w = e.decisions.filter((p) => f.includes(p.entity)).slice(0, 3), d = e.failures.filter((p) => f.includes(p.entity)).slice(0, 2), y = e.claims.find((p) => F(p) && p.kind === "limitation" && f.includes(p.entity)), g = u.requirements.filter((p) => p.category === "missing").slice(0, 2), h = f.flatMap((p) => (e.statableByEntity.get(p) ?? []).flatMap((x) => x.code ?? [])).filter((p) => p.lines).slice(0, 4), m = e.claims.find((p) => F(p) && p.kind === "metric" && ["cliniq", "sssd", "qml"].includes(p.entity) && (f.includes(p.entity) || p.entity === "cliniq")), v = c.flatMap((p) => p.questions.slice(0, 2).map((x) => ({ e: p.short, q: x }))), k = () => [
    `# 10-minute technical brief: ${u.title}`,
    `Candidate: ${e.subject.name}. Evidence-only; no fit score.`,
    "",
    "## Strongest relevant systems",
    ...c.map((p) => `- **${p.name}**: ${p.summaries.engineer ?? p.tagline}`),
    "",
    "## Decisions worth questioning",
    ...w.map((p) => `- ${p.title}. Tradeoff: ${p.tradeoff}`),
    "",
    "## Failure cases",
    ...d.map((p) => `- ${p.title}: ${p.fix}`),
    "",
    "## Limitations and gaps",
    ...y ? [`- ${y.text}`] : [],
    ...g.map((p) => `- ${p.label}: ${p.statement}`),
    "",
    "## Code to open",
    ...h.map((p) => `- ${p.label}: ${p.url}`),
    "",
    "## Suggested questions",
    ...v.map((p) => `- (${p.e}) ${p.q}`)
  ].join(`
`), [b, _] = q(!1);
  return /* @__PURE__ */ i("div", { class: "imw-view imw-brief", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Technical interview brief · 10 minutes" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: u.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        !l && /* @__PURE__ */ i("label", { class: "imw-select", children: [
          /* @__PURE__ */ i("span", { children: "Role" }),
          /* @__PURE__ */ i("select", { value: a, onChange: (p) => o(p.target.value), children: e.roles.map((p) => /* @__PURE__ */ i("option", { value: p.id, children: p.title }, p.id)) })
        ] }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: async () => {
          try {
            await navigator.clipboard.writeText(k()), _(!0), setTimeout(() => _(!1), 2e3);
          } catch {
          }
        }, children: b ? "Copied" : "Copy as Markdown" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => {
          r(u), s("export");
        }, children: "Download PDF" })
      ] }),
      /* @__PURE__ */ i(Ct, { counts: u.counts, compact: !0 })
    ] }),
    /* @__PURE__ */ i("ol", { class: "imw-agenda", children: [
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "0–2 min" }),
        /* @__PURE__ */ i("h4", { children: "Strongest relevant systems" }),
        c.map((p) => /* @__PURE__ */ i("p", { children: [
          /* @__PURE__ */ i("strong", { children: [
            p.name,
            "."
          ] }),
          " ",
          p.summaries.engineer ?? p.tagline
        ] }, p.id))
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "2–5 min" }),
        /* @__PURE__ */ i("h4", { children: "Decisions worth questioning" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: w.map((p) => /* @__PURE__ */ i(hi, { id: p.id }, p.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "5–7 min" }),
        /* @__PURE__ */ i("h4", { children: "Failure cases" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: d.map((p) => /* @__PURE__ */ i(di, { id: p.id }, p.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "7–8 min" }),
        /* @__PURE__ */ i("h4", { children: "Limitations and gaps" }),
        y && /* @__PURE__ */ i(ne, { ids: [y.id], compact: !0 }),
        g.map((p) => /* @__PURE__ */ i("p", { class: "imw-note", children: [
          p.label,
          ": ",
          p.statement
        ] }, p.id)),
        m && /* @__PURE__ */ i(oe, { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "One research result" }),
          /* @__PURE__ */ i(ne, { ids: [m.id], compact: !0 })
        ] })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "8–10 min" }),
        /* @__PURE__ */ i("h4", { children: "Code to open" }),
        /* @__PURE__ */ i(We, { refs: h })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "Questions" }),
        /* @__PURE__ */ i("h4", { children: "Suggested interview questions" }),
        /* @__PURE__ */ i("ul", { class: "imw-bullets", children: v.map((p) => /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i("em", { children: [
            p.e,
            ":"
          ] }),
          " ",
          p.q
        ] }, p.q)) })
      ] })
    ] })
  ] });
}
const Dt = "rahul-vajja", ca = [
  ["search_evidence", "Search verified claims by topic"],
  ["get_skill_evidence", "Direct, related or not demonstrated, with the proof"],
  ["compare_job_description", "Map a job description to evidence, with no score"],
  ["evaluate_requirements", "Classify requirement phrases your AI extracted"],
  ["get_role_evidence", "Coverage for one of 20 target role profiles"],
  ["get_project", "Summary, claims, limits, decisions, failures"],
  ["get_architecture", "Components as implemented, with supporting claims"],
  ["get_failure_cases", "Problem, detection, fix and prevention"],
  ["get_code_reference", "Exact files and lines, pinned to a commit"],
  ["get_known_gaps", "What is not demonstrated, and what is held back"],
  ["list_projects", "Projects and roles with ids"]
], da = [
  "Using the rahul-vajja tools, compare Rahul against this job description and cite claim ids: …",
  "Does Rahul have AI evaluation experience? Show the evidence and the code.",
  "What would you challenge in the Drug Interaction Agent architecture?"
];
function ha() {
  const e = `${bn()}/mcp`, t = [
    { id: "claude-code", label: "Claude Code", how: "Run in a terminal:", code: `claude mcp add --transport http ${Dt} ${e}` },
    { id: "claude", label: "Claude", how: "In Claude (web or desktop): Settings → Connectors → Add custom connector, then paste this URL:", code: e },
    { id: "cursor", label: "Cursor", how: "Add to ~/.cursor/mcp.json:", code: JSON.stringify({ mcpServers: { [Dt]: { url: e } } }, null, 2) },
    { id: "vscode", label: "VS Code", how: "Add to .vscode/mcp.json:", code: JSON.stringify({ servers: { [Dt]: { type: "http", url: e } } }, null, 2) },
    { id: "other", label: "Other", how: "Any MCP client that supports Streamable HTTP:", code: e }
  ], [n, r] = q(t[0].id), [s, a] = q(""), [o, l] = q({ state: "idle" }), u = t.find((w) => w.id === n), c = async (w, d) => {
    try {
      await navigator.clipboard.writeText(w), a(d), setTimeout(() => a(""), 1800);
    } catch {
    }
    B("contact_clicked_from_ai", { mcp_copy: d });
  };
  return /* @__PURE__ */ i("div", { class: "imw-view imw-connect", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Connect Rahul to your AI" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Ask your own assistant, with the same evidence." }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "The verified evidence behind this portfolio is also a public, read-only MCP server. Connect it to Claude, Claude Code, Cursor or VS Code and ask about Rahul's work from inside your own tools. Your AI does the reasoning; every result carries its evidence strength and a usage policy, and nothing you send is stored." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-endpoint", children: [
      /* @__PURE__ */ i("code", { children: e }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => c(e, "url"), children: s === "url" ? "Copied" : "Copy URL" }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: async () => {
        l({ state: "running" });
        const w = performance.now();
        try {
          const d = new AbortController(), y = setTimeout(() => d.abort(), 45e3), g = await fetch(e, {
            method: "POST",
            signal: d.signal,
            headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
            body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list", params: {} })
          });
          clearTimeout(y);
          const m = (await g.json())?.result?.tools?.length;
          if (!g.ok || !m) throw new Error(`HTTP ${g.status}`);
          l({ state: "ok", text: `${m} tools available · ${Math.round(performance.now() - w)} ms` });
        } catch {
          l({ state: "fail", text: "The server did not answer. It may be waking up; try again in a minute." });
        }
      }, disabled: o.state === "running", children: o.state === "running" ? "Checking…" : "Test the server" }),
      o.text && /* @__PURE__ */ i("span", { class: `imw-verdict is-${o.state === "ok" ? "pass" : "warn"}`, role: "status", children: [
        o.state === "ok" ? "✓ " : "! ",
        o.text
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "Client", children: t.map((w) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": n === w.id, class: n === w.id ? "is-on" : "", onClick: () => r(w.id), children: w.label }, w.id)) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: u.how }),
    /* @__PURE__ */ i("div", { class: "imw-snippet", children: [
      /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: u.code }) }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => c(u.code, u.id), children: s === u.id ? "Copied" : "Copy" })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Then try" }),
      /* @__PURE__ */ i("ul", { class: "imw-bullets", children: da.map((w) => /* @__PURE__ */ i("li", { children: w }, w)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Tools · all read-only" }),
      /* @__PURE__ */ i("ul", { class: "imw-tools", children: ca.map(([w, d]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("code", { children: w }),
        /* @__PURE__ */ i("span", { children: d })
      ] }, w)) }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        "Also available: a ",
        /* @__PURE__ */ i("code", { children: "rahul://profile" }),
        " resource with the evidence policy, ",
        /* @__PURE__ */ i("code", { children: "rahul://roles" }),
        ", and an ",
        /* @__PURE__ */ i("code", { children: "evaluate_for_role" }),
        " prompt."
      ] })
    ] })
  ] });
}
const Et = {
  recruiter: {
    label: "Recruiter",
    projects: 4,
    claims: 3,
    code: 1,
    decisions: 0,
    failures: 0,
    arch: !1,
    intro: "Written for screening: what Rahul has done, which parts are publicly verifiable, and what to confirm in a conversation."
  },
  engineer: {
    label: "Engineer",
    projects: 6,
    claims: 6,
    code: 3,
    decisions: 2,
    failures: 1,
    arch: !0,
    intro: "Written for a technical review: architecture, evaluation, failure cases and the exact code to open."
  },
  manager: {
    label: "Hiring manager",
    projects: 5,
    claims: 4,
    code: 1,
    decisions: 2,
    failures: 1,
    arch: !1,
    intro: "Written for a hiring manager: ownership, how problems were found and fixed, and where the evidence stops."
  },
  founder: {
    label: "Founder / Product",
    projects: 5,
    claims: 4,
    code: 1,
    decisions: 1,
    failures: 1,
    arch: !1,
    intro: "Written for a founder or product lead: the problem each system solves, what shipped, and the tradeoffs made."
  },
  researcher: {
    label: "Researcher",
    projects: 6,
    claims: 6,
    code: 2,
    decisions: 2,
    failures: 1,
    arch: !1,
    intro: "Written for a research review: methods, baselines, metrics, limitations and reproducibility."
  }
}, ke = {
  qa: "Your questions and answers",
  roles: "Role and job-description evidence",
  projects: "Projects and experience in detail",
  questions: "Suggested interview questions",
  gaps: "Growth areas"
}, jn = /* @__PURE__ */ new Set(["project", "research", "experience"]), ua = { backend: "Backend", data: "Data engineering", domain: "Domains", mlops: "MLOps & deployment", vision: "Computer vision", voice: "Voice AI" }, pa = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function Bi(e) {
  if (/present/i.test(e)) return 1e6;
  const t = [...e.matchAll(/\b(19|20)\d{2}\b/g)].map((r) => +r[0]), n = [...e.toLowerCase().matchAll(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/g)].map((r) => pa.indexOf(r[1]));
  return (t.length ? Math.max(...t) : 0) * 12 + (n.length ? n[n.length - 1] : 0);
}
const Xe = (e) => [...new Set(e)], Tn = (e, t) => e.summaries[t] ?? e.summaries.engineer ?? e.tagline;
function ma(e) {
  return e.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
}
function Rn(e, t, n = /* @__PURE__ */ new Date()) {
  const r = e.subject.name.replace(/[^A-Za-z0-9]+/g, "-"), s = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  return `${r}-evidence-dossier-${t}-${s}.pdf`;
}
const fa = (e, t) => `${e.subject.name} · Evidence dossier · ${Et[t].label} perspective · ${(e.subject.links.site ?? "").replace(/^https?:\/\/|\/$/g, "")}`;
function ga(e, t) {
  const n = t.turns.flatMap((s) => s.a?.entities.slice(0, 3) ?? []), r = t.analyses.flatMap((s) => s.entities.slice(0, 3).map((a) => a.id));
  return Xe([...t.seen, ...n, ...r]).filter((s) => jn.has(e.entity.get(s)?.kind ?? ""));
}
function Ln(e, t, n) {
  const r = Et[n], s = ga(e, t);
  return s.length ? { ids: s.slice(0, r.projects), defaulted: !1 } : { ids: (e.roles.find((o) => o.priority === 1) ?? e.roles[0]).focus_entities.filter((o) => jn.has(e.entity.get(o)?.kind ?? "")).slice(0, r.projects), defaulted: !0 };
}
function Pn(e, t, n) {
  if (!F(t)) return null;
  const r = t.strength === "public_artifact" ? "artifact" : "self", s = (t.code ?? []).slice(0, n.code).map((o) => ({
    label: `${o.label} (${o.path}${o.lines ? `, lines ${o.lines[0]}–${o.lines[1]}` : ""})`,
    url: o.url
  }));
  if (!s.length) {
    const o = t.sources.map((l) => e.sources.find((u) => u.id === l)).find((l) => l?.public && l.url);
    o?.url && s.push({ label: o.title, url: o.url });
  }
  const a = r === "artifact" ? "Verified · public artifact" : "Verified · self-reported";
  return { t: "claim", text: t.text, tone: r, meta: `${ee(e, t.entity)} · ${a}`, links: s };
}
const Dn = (e, t, n) => Xe(t).map((r) => e.claim.get(r)).filter(F).map((r) => Pn(e, r, n));
function wa(e, t, n) {
  const r = (s) => (s.strength === "public_artifact" ? 0 : 2) + (s.kind === "metric" ? 0 : 1);
  return (e.statableByEntity.get(t) ?? []).filter((s) => s.kind !== "limitation").sort((s, a) => r(s) - r(a)).slice(0, n);
}
function ya(e, t, n) {
  if (t.category === "direct" || t.category === "related") {
    const s = t.entities.slice(0, 3).map((u) => ee(e, u)).join(", "), a = t.category === "related" && t.via ? `Related through ${e.skill.get(t.via)?.name ?? t.via}. ` : "", o = t.claims.map((u) => e.claim.get(u)).find((u) => F(u) && !n.has(u.id));
    o && n.add(o.id);
    const l = !t.via && t.statement ? `${t.statement} ` : "";
    return `${a}${l}${s ? `Evidence: ${s}.` : ""}${o ? ` For example: ${o.text}` : ""}`.trim();
  }
  const r = t.entities.length ? ` Closest evidence: ${t.entities.slice(0, 3).map((s) => ee(e, s)).join(", ")}.` : "";
  return `${t.statement ?? ""}${r}`.trim();
}
function Fn(e, t, n = 99) {
  const r = [{ t: "counts", counts: t.counts }], s = /* @__PURE__ */ new Set();
  for (const a of ["direct", "related", "verification", "missing"])
    t.requirements.filter((o) => o.category === a).slice(0, n).forEach((o) => r.push({ t: "req", category: a, label: o.label, detail: ya(e, o, s) }));
  return Xe(t.notes).forEach((a) => r.push({ t: "note", text: a })), r;
}
const va = (e, t) => e.title === t.title && e.source === t.source && e.requirements.map((n) => n.id).join() === t.requirements.map((n) => n.id).join();
function ba(e, t) {
  const { kb: n, persona: r, lens: s } = e;
  switch (t.type) {
    case "p":
      return [{ t: "p", text: t.text }];
    case "points":
      return [{ t: "kv", items: t.items.map((a) => [a.label, a.text]) }];
    case "takeaway":
      return [{ t: "note", text: t.text }];
    case "note":
      return [{ t: "note", text: t.text }];
    case "claims": {
      const a = t.collapsed ? t.ids.filter((l) => !e.shown.has(n.claim.get(l)?.text ?? "")) : t.ids, o = Dn(n, a, s);
      return o.length ? [...t.title ? [{ t: "h3", text: t.title }] : [], ...o] : [];
    }
    case "entity": {
      const a = n.entity.get(t.id);
      return a ? [{ t: "p", text: `${a.name}: ${Tn(a, r)}` }] : [];
    }
    case "coverage": {
      const a = { t: "h3", text: `Evidence coverage: ${t.analysis.title}` };
      return e.detailed.some((o) => va(o, t.analysis)) ? [a, { t: "counts", counts: t.analysis.counts }, { t: "p", text: `The full requirement-by-requirement breakdown is in "${ke.roles}".`, muted: !0 }] : [a, ...Fn(n, t.analysis, 6)];
    }
    case "xray": {
      const a = n.architectures.find((o) => o.id === t.arch);
      return a ? [{ t: "h3", text: `System X-Ray: ${a.title}` }, { t: "bullets", items: a.nodes.slice(0, 10).map((o) => `${o.label}: ${o.detail.purpose}`) }] : [];
    }
    case "failures":
      return t.ids.map((a) => n.failures.find((o) => o.id === a)).filter((a) => !!a).flatMap((a) => [
        { t: "h3", text: `Failure case: ${a.title}` },
        { t: "kv", items: [["Problem", a.problem], ["How it was found", a.detection], ["Fix", a.fix], ["Prevention", a.prevention]] }
      ]);
    case "decisions":
      return t.ids.map((a) => n.decisions.find((o) => o.id === a)).filter((a) => !!a).flatMap((a) => [
        { t: "h3", text: `Decision: ${a.title}` },
        { t: "kv", items: [["Choice", a.choice], ["Why", a.rationale], ["Tradeoff", a.tradeoff]] }
      ]);
    case "compare":
      return [{ t: "table", head: ["", ...t.entities.map((a) => ee(n, a))], rows: t.rows.map((a) => [a.label, ...a.values]) }];
    case "gaps":
      return [{ t: "bullets", items: t.items.map((a) => `${a.name}: ${a.statement}${a.closest.length ? ` Closest evidence: ${a.closest.map((o) => ee(n, o)).join(", ")}.` : ""}`) }];
    case "trace": {
      const a = n.traces.find((o) => o.id === t.id);
      return a ? [
        { t: "h3", text: `Recorded replay: ${a.title}` },
        { t: "p", text: a.summary, muted: !0 },
        { t: "bullets", items: a.steps.slice(0, 8).map((o) => `${o.label}${o.status ? ` (${o.status})` : ""}`) }
      ] : [];
    }
    case "chart":
      return [];
  }
}
function _a(e, t) {
  const { kb: n, lens: r } = e, s = [], a = /* @__PURE__ */ new Set();
  e.shown.clear();
  for (const c of t.blocks) c.type === "points" && c.items.forEach((f) => e.shown.add(f.text));
  for (const c of t.blocks)
    for (const f of ba(e, c)) {
      if (f.t === "note") {
        if (a.has(f.text)) continue;
        a.add(f.text);
      }
      s.push(f);
    }
  const o = new Set(t.blocks.flatMap((c) => c.type === "claims" ? c.ids : c.type === "points" ? c.items.flatMap((f) => f.cites) : [])), l = oi(t).filter((c) => !o.has(c)), u = Dn(n, l, r).slice(0, 8);
  return u.length && s.push({ t: "h3", text: "Evidence cited" }, ...u), s;
}
function ka(e, t, n, r) {
  const s = e.entity.get(t);
  if (!s) return [];
  const a = [
    { t: "h2", text: s.name, meta: [s.role, s.dates].filter(Boolean).join(" · ") },
    { t: "p", text: Tn(s, n) }
  ];
  s.ownership && a.push({ t: "kv", items: [["Ownership", s.ownership]] });
  const o = wa(e, t, r.claims).map((f) => Pn(e, f, r));
  o.length && a.push({ t: "h3", text: "Verified evidence" }, ...o);
  const l = (e.statableByEntity.get(t) ?? []).filter((f) => f.kind === "limitation").slice(0, 2);
  l.length && a.push({ t: "h3", text: "Stated limitations" }, { t: "bullets", items: l.map((f) => f.text) }), e.decisions.filter((f) => f.entity === t).slice(0, r.decisions).forEach((f) => a.push({ t: "h3", text: `Decision: ${f.title}` }, { t: "kv", items: [["Choice", f.choice], ["Tradeoff", f.tradeoff]] })), e.failures.filter((f) => f.entity === t).slice(0, r.failures).forEach((f) => a.push({ t: "h3", text: `Failure case: ${f.title}` }, { t: "kv", items: [["Problem", f.problem], ["Fix", f.fix], ["Prevention", f.prevention]] }));
  const u = r.arch ? e.archByEntity.get(t) : void 0;
  u && a.push({ t: "h3", text: "Architecture" }, { t: "bullets", items: u.nodes.slice(0, 8).map((f) => `${f.label}: ${f.detail.purpose}`) });
  const c = s.links.filter((f) => /^https?:/.test(f.url));
  return c.length && a.push({ t: "links", items: c.map((f) => ({ label: f.label, url: f.url })) }), a;
}
function xa(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.skills) {
    if (!(e.statableBySkill.get(n.id) ?? []).some((a) => a.strength === "public_artifact")) continue;
    const s = e.groups.find((a) => a.id === n.group)?.label ?? ua[n.group] ?? n.group;
    (t.get(s) ?? t.set(s, []).get(s)).push(n.name);
  }
  return [...t.entries()];
}
function $a(e, t, n) {
  const r = Et[n.persona], s = n.date ?? /* @__PURE__ */ new Date(), { subject: a } = e, o = t.turns.filter((h) => h.a), l = [], u = [
    { label: a.email, url: `mailto:${a.email}` },
    ...a.links.linkedin ? [{ label: "LinkedIn", url: a.links.linkedin }] : [],
    ...a.links.github ? [{ label: "GitHub", url: a.links.github }] : [],
    ...a.links.site ? [{ label: "Portfolio", url: a.links.site }] : []
  ];
  l.push({
    t: "cover",
    name: a.name,
    headline: a.headline,
    contacts: u,
    line: `Evidence dossier · ${r.label} perspective · ${ma(s)}`
  }), l.push({ t: "p", text: r.intro });
  const c = [
    o.length ? `${o.length} question${o.length === 1 ? "" : "s"} answered` : "",
    t.analyses.length ? `${t.analyses.length} role analys${t.analyses.length === 1 ? "is" : "es"}` : ""
  ].filter(Boolean).join(" · ");
  l.push({ t: "note", text: `How to read this: "Verified · public artifact" means you can open the code, data, recording or paper behind it. "Verified · self-reported" is Rahul's description of work that is not public, such as employer systems. Nothing here is a fit score. ${c ? `Session: ${c}.` : ""}`.trim() }), l.push({ t: "h1", text: "At a glance" }), l.push({ t: "p", text: a.level_note, muted: !0 });
  const f = e.entities.filter((h) => h.kind === "experience").sort((h, m) => Bi(m.dates) - Bi(h.dates));
  f.length && (l.push({ t: "h3", text: "Experience" }), l.push({ t: "table", head: ["Where", "Role", "Dates"], rows: f.map((h) => [h.name, h.role ?? "", h.dates]) }));
  const w = [
    ...e.entities.filter((h) => h.kind === "education").map((h) => ["Education", [h.name, h.role].filter(Boolean).join(": ")]),
    ...e.entities.filter((h) => h.kind === "leadership").map((h) => ["Leadership", `${h.role ? `${h.role}, ` : ""}${h.name} (${h.dates})`])
  ];
  w.length && l.push({ t: "kv", items: w });
  const d = xa(e);
  d.length && (l.push({ t: "h3", text: "Skills with public evidence" }), l.push({ t: "kv", items: d.map(([h, m]) => [h, m.join(", ")]) }));
  const y = { kb: e, persona: n.persona, lens: r, detailed: n.sections.roles ? t.analyses : [], shown: /* @__PURE__ */ new Set() };
  if (n.sections.qa && o.length && (l.push({ t: "h1", text: ke.qa, lead: "Each answer was generated from the evidence database and checked before it was shown." }), o.forEach((h, m) => {
    l.push({ t: "h2", text: `Q${m + 1}. ${h.q}`, meta: h.a.engine === "model" ? "Written by Claude, validated against the evidence" : "Answered by the evidence engine" }), l.push(..._a(y, h.a));
  })), n.sections.roles && t.analyses.length) {
    l.push({ t: "h1", text: ke.roles, lead: "Each requirement is classified by the evidence behind it. No score is computed." });
    for (const h of t.analyses)
      l.push({ t: "h2", text: h.title, meta: h.source === "jd" ? `Job description you provided${h.closestRole ? ` · closest target role: ${h.closestRole}` : ""}` : "Target role" }), l.push(...Fn(e, h));
  }
  const g = Ln(e, t, n.persona);
  if (n.sections.projects && g.ids.length && (l.push({ t: "h1", text: ke.projects, lead: g.defaulted ? "You did not open specific projects, so these are the strongest for an applied AI role." : "The work you explored, in the order you explored it." }), g.ids.forEach((h) => l.push(...ka(e, h, n.persona, r)))), n.sections.questions) {
    const h = g.ids.flatMap((k) => (e.entity.get(k)?.questions ?? []).slice(0, 2).map((b) => `${ee(e, k)}: ${b}`)), m = t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing" || b.category === "verification").slice(0, 2).map((b) => `${b.label}: what is the closest thing you have done, and how would you close the gap?`)), v = Xe([...h, ...m]);
    v.length && (l.push({ t: "h1", text: ke.questions, lead: "Questions that test the evidence above rather than repeat it." }), l.push({ t: "bullets", items: v }));
  }
  if (n.sections.gaps) {
    l.push({ t: "h1", text: ke.gaps });
    const h = Xe(t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing").map((b) => `${b.label}: ${b.statement ?? "Not demonstrated in the evidence."}`))), m = h.length ? h : e.gaps.filter((k) => !k.verify).slice(0, 6).map((k) => `${k.name}: ${k.statement}`);
    l.push({ t: "h3", text: h.length ? "Not yet shown for the roles you checked" : "Not yet part of his work" }, { t: "bullets", items: m });
    const v = Fe(e, "learning");
    v?.takeaway && l.push({ t: "h3", text: "How he closes gaps" }, { t: "p", text: v.takeaway.text.replace(/^For your team: /, "") });
  }
  return l.push({ t: "h1", text: "About this document", keep: 150 }), l.push({ t: "p", text: `Generated in your browser by Interview My Work on ${a.links.site ?? "the portfolio"} from evidence version ${e.version}. Nothing you typed was uploaded to create it. Every claim links to its source, and the live workspace shows the full evidence trail for each one.`, muted: !0 }), l.push({ t: "links", items: [
    ...a.links.site ? [{ label: "Open Interview My Work", url: `${a.links.site.replace(/\/$/, "")}/#imw=ask` }] : [],
    { label: `Email ${a.first}`, url: `mailto:${a.email}` }
  ] }), { title: `${a.name}: evidence dossier (${r.label})`, nodes: l, filename: Rn(e, n.persona, s) };
}
const Ge = [20, 24, 31], Z = [90, 99, 110], zi = [222, 227, 232], fe = [22, 117, 94], Ca = [242, 246, 245], ht = { direct: fe, related: [40, 104, 184], verification: [150, 98, 16], missing: [118, 124, 133] }, Ea = { direct: "DIRECT", related: "RELATED", verification: "TO VERIFY", missing: "NOT SHOWN" }, qa = { direct: "direct evidence", related: "related evidence", verification: "verification required", missing: "not demonstrated" }, Sa = { artifact: fe, self: ht.related }, Yt = 612, Te = 792, L = 56, Ft = 64, Ui = 64, z = Yt - L * 2, Aa = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ", Vi = {
  "→": "->",
  "←": "<-",
  "⇒": "=>",
  "↗": "",
  "↘": "",
  "⤓": "",
  "✓": "",
  "✔": "",
  "✗": "x",
  "✕": "x",
  "✦": "",
  "★": "",
  "≤": "<=",
  "≥": ">=",
  "≈": "~",
  "≠": "!=",
  "−": "-",
  "‑": "-",
  "‐": "-",
  "′": "'",
  "″": '"',
  " ": " ",
  " ": " ",
  " ": " ",
  "​": "",
  "­": "",
  "	": " "
};
function qe(e) {
  let t = "";
  for (const n of e) {
    if (n in Vi) {
      t += Vi[n];
      continue;
    }
    const r = n.codePointAt(0);
    if (r === 10 || r >= 32 && r <= 126 || r >= 161 && r <= 255 || Aa.includes(n)) {
      t += n;
      continue;
    }
    const s = n.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    [...s].every((a) => a.codePointAt(0) < 127) && (t += s);
  }
  return t.replace(/ {2,}/g, " ");
}
class Ia {
  constructor(t) {
    wi(this, "y", Ft);
    this.d = t;
  }
  font(t, n = "normal", r = Ge) {
    this.d.setFont("helvetica", n), this.d.setFontSize(t), this.d.setTextColor(...r);
  }
  need(t) {
    this.y + t > Te - Ui && (this.d.addPage(), this.y = Ft);
  }
  split(t, n) {
    return this.d.splitTextToSize(qe(t), n);
  }
  write(t, n = {}) {
    const { size: r = 10, style: s = "normal", color: a = Ge, x: o = L, width: l = z, lh: u = 1.42, after: c = 0 } = n;
    this.font(r, s, a);
    const f = r * u;
    for (const w of this.split(t, l))
      this.need(f), this.d.text(w, o, this.y, { baseline: "top" }), this.y += f;
    this.y += c;
  }
  links(t, { size: n = 8.5, x: r = L, width: s = z } = {}) {
    this.font(n, "normal", fe);
    const a = n * 1.55, o = 14;
    let l = r;
    this.need(a);
    for (const u of t) {
      const c = qe(u.label);
      let f = c;
      for (; this.d.getTextWidth(f) > s && f.length > 8; ) f = f.slice(0, -3);
      f !== c && (f = `${f.trimEnd()}…`);
      const w = this.d.getTextWidth(f);
      l > r && l + w > r + s && (this.y += a, this.need(a), l = r), this.d.text(f, l, this.y, { baseline: "top" }), this.d.link(l, this.y - 1, w, n + 2, { url: u.url }), this.d.setDrawColor(...fe), this.d.setLineWidth(0.4), this.d.line(l, this.y + n + 0.5, l + w, this.y + n + 0.5), l += w + o;
    }
    this.y += a;
  }
  rule(t = zi, n = 0.6) {
    this.d.setDrawColor(...t), this.d.setLineWidth(n), this.d.line(L, this.y, L + z, this.y);
  }
  node(t) {
    const n = this.d;
    switch (t.t) {
      case "cover": {
        this.write(t.name, { size: 26, style: "bold", lh: 1.15, after: 2 }), this.write(t.headline, { size: 12, color: Z, after: 6 }), this.links(t.contacts, { size: 9.5 }), this.y += 6, this.rule(fe, 1.6), this.y += 10, this.write(t.line, { size: 9, style: "bold", color: fe, after: 8 });
        return;
      }
      case "h1":
        this.need(t.keep ?? 80), this.y += 14, this.rule(), this.y += 12, this.write(t.text, { size: 15, style: "bold", color: fe, lh: 1.25, after: 3 }), t.lead ? this.write(t.lead, { size: 9.5, style: "italic", color: Z, after: 6 }) : this.y += 4;
        return;
      case "h2":
        this.need(60), this.y += 10, this.write(t.text, { size: 11.5, style: "bold", lh: 1.3, after: 1 }), t.meta ? this.write(t.meta, { size: 8.5, color: Z, after: 5 }) : this.y += 4;
        return;
      case "h3":
        this.need(40), this.y += 5, this.write(t.text.toUpperCase(), { size: 7.5, style: "bold", color: Z, after: 3 });
        return;
      case "p":
        this.write(t.text, { size: t.muted ? 9.5 : 10, color: t.muted ? Z : Ge, after: 6 });
        return;
      case "note": {
        this.font(9);
        const s = this.split(t.text, z - 24).length * 9 * 1.42 + 14;
        s < Te - Ft - Ui && this.need(s);
        const a = this.y;
        n.setFillColor(...Ca), n.rect(L, a, z, s, "F"), n.setFillColor(...fe), n.rect(L, a, 2, s, "F"), this.y = a + 7, this.write(t.text, { size: 9, color: Z, x: L + 14, width: z - 24 }), this.y = Math.max(this.y, a + s) + 8;
        return;
      }
      case "kv": {
        for (const [s, a] of t.items) {
          this.need(14), this.font(8, "bold", Z);
          const o = this.split(s.toUpperCase(), 106), l = this.y;
          o.forEach((u, c) => n.text(u, L, l + 1.5 + c * 11, { baseline: "top" })), this.write(a, { size: 9.5, x: L + 118, width: z - 118 }), this.y > l && (this.y = Math.max(this.y, l + o.length * 11 + 2)), this.y += 4;
        }
        this.y += 2;
        return;
      }
      case "bullets":
        for (const r of t.items)
          this.need(14), this.font(9.5, "normal", fe), n.text("•", L + 2, this.y, { baseline: "top" }), this.write(r, { size: 9.5, x: L + 14, width: z - 14, after: 3 });
        this.y += 3;
        return;
      case "claim": {
        this.need(30), n.setFillColor(...Sa[t.tone]), n.circle(L + 4, this.y + 5.5, 2.6, "F"), this.write(t.text, { size: 9.5, x: L + 14, width: z - 14, after: 1 }), this.write(t.meta, { size: 8, color: Z, x: L + 14, width: z - 14 }), t.links.length && this.links(t.links, { size: 8, x: L + 14, width: z - 14 }), this.y += 5;
        return;
      }
      case "req": {
        this.need(26), this.font(7, "bold", ht[t.category]), n.text(Ea[t.category], L, this.y + 2, { baseline: "top" }), this.write(t.label, { size: 9.5, style: "bold", x: L + 70, width: z - 70, after: 1 }), t.detail && this.write(t.detail, { size: 8.5, color: Z, x: L + 70, width: z - 70 }), this.y += 5;
        return;
      }
      case "counts": {
        const r = ["direct", "related", "verification", "missing"].filter((o) => t.counts[o] > 0), s = r.reduce((o, l) => o + t.counts[l], 0);
        if (!s) return;
        this.need(34);
        let a = L;
        for (const o of r) {
          const l = z * t.counts[o] / s;
          n.setFillColor(...ht[o]), n.rect(a, this.y, Math.max(l - 1.5, 1), 6, "F"), a += l;
        }
        this.y += 12, a = L, this.font(8.5, "normal", Z);
        for (const o of r) {
          const l = `${t.counts[o]} ${qa[o]}`;
          n.setFillColor(...ht[o]), n.rect(a, this.y + 1.5, 6, 6, "F"), n.text(l, a + 10, this.y, { baseline: "top" }), a += n.getTextWidth(l) + 26;
        }
        this.y += 18;
        return;
      }
      case "table": {
        const r = t.head.length;
        this.font(9);
        const s = t.head.map((c, f) => Math.max(n.getTextWidth(qe(c)), ...t.rows.map((w) => n.getTextWidth(qe(w[f] ?? "")))) + 12);
        let a;
        if (s.reduce((c, f) => c + f, 0) <= z)
          a = [...s], a[r - 1] += z - s.reduce((c, f) => c + f, 0);
        else {
          const c = Math.min(s[0], 140);
          a = [c, ...Array(r - 1).fill((z - c) / (r - 1))];
        }
        const o = a.map((c, f) => L + a.slice(0, f).reduce((w, d) => w + d, 0)), l = (c, f) => {
          this.font(f ? 7.5 : 9, "bold", f ? Z : Ge);
          const w = c.map((y, g) => this.split(f ? y.toUpperCase() : y, a[g] - 10)), d = (f ? 7.5 : 9) * 1.38;
          return { wrapped: w, lh: d, h: Math.max(...w.map((y) => y.length)) * d + 8 };
        }, u = (c, f) => {
          const { wrapped: w, lh: d, h: y } = l(c, f);
          this.need(f && t.rows.length ? y + l(t.rows[0], !1).h : y), w.forEach((g, h) => {
            this.font(f ? 7.5 : 9, f || h === 0 ? "bold" : "normal", f ? Z : Ge), g.forEach((m, v) => n.text(m, o[h], this.y + 4 + v * d, { baseline: "top" }));
          }), this.y += y, this.rule();
        };
        u(t.head, !0), t.rows.forEach((c) => u(c, !1)), this.y += 8;
        return;
      }
      case "links":
        this.links(t.items, { size: 9 }), this.y += 4;
        return;
    }
  }
  finish(t) {
    const n = this.d, r = n.getNumberOfPages();
    for (let s = 1; s <= r; s++)
      n.setPage(s), this.font(7.5, "normal", Z), n.text(qe(t), L, Te - 38, { baseline: "top" }), n.text(`Page ${s} of ${r}`, Yt - L, Te - 38, { baseline: "top", align: "right" }), n.setDrawColor(...zi), n.setLineWidth(0.6), n.line(L, Te - 46, Yt - L, Te - 46);
  }
}
async function Ma(e, t) {
  const { jsPDF: n } = await import("./chunks/jspdf.es.min-0Bk908vi.js"), r = new n({ unit: "pt", format: "letter", compress: !0 });
  r.setProperties({ title: qe(t.title), subject: "Evidence dossier", author: qe(t.author), creator: "Interview My Work" });
  const s = new Ia(r);
  for (const a of e) s.node(a);
  return s.finish(t.footer), r;
}
function ja(e, t) {
  const n = URL.createObjectURL(e), r = document.createElement("a");
  r.href = n, r.download = t, r.rel = "noopener", document.body.append(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(n), 6e4);
}
function Ta() {
  const { kb: e, persona: t, session: n, go: r } = I(), [s, a] = q(t);
  V(() => a(t), [t]);
  const o = n.turns.filter((m) => m.a), l = he(() => Ln(e, n, s), [e, n, s]), [u, c] = q({ qa: !0, roles: !0, projects: !0, questions: !0, gaps: !0 }), [f, w] = q({ kind: "idle" });
  V(() => {
    import("./chunks/jspdf.es.min-0Bk908vi.js").catch(() => {
    });
  }, []);
  const d = {
    qa: {
      text: `${o.length} question${o.length === 1 ? "" : "s"} with answers and the evidence each one cited`,
      empty: "Ask a question first and it will be included here.",
      items: o.map((m) => m.q)
    },
    roles: {
      text: `${n.analyses.length} analys${n.analyses.length === 1 ? "is" : "es"}, requirement by requirement`,
      empty: "Evaluate a role or paste a job description to include it here.",
      items: n.analyses.map((m) => m.title)
    },
    projects: {
      text: l.defaulted ? "You have not opened a project yet, so this includes the strongest work for an applied AI role:" : "The work you explored, with verified evidence, limitations and links:",
      items: l.ids.map((m) => ee(e, m))
    },
    questions: { text: "Questions that test the evidence rather than repeat it, including your gaps" },
    gaps: { text: "What he hasn't done yet, and how he closes gaps" }
  }, y = (m) => m === "qa" ? o.length > 0 : m === "roles" ? n.analyses.length > 0 : !0, g = Rn(e, s), h = async () => {
    w({ kind: "busy" });
    try {
      const m = $a(e, n, { persona: s, sections: u }), v = await Ma(m.nodes, { title: m.title, author: e.subject.name, footer: fa(e, s) });
      ja(v.output("blob"), m.filename), B("dossier_downloaded", { persona: s, questions: o.length, analyses: n.analyses.length }), w({ kind: "done", file: m.filename });
    } catch {
      w({ kind: "error" });
    }
  };
  return /* @__PURE__ */ i("div", { class: "imw-view imw-export", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Download · PDF" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Take this with you" }),
      /* @__PURE__ */ i("p", { class: "imw-lead", children: "A PDF of what you explored here, written for your perspective: your questions with their answers and sources, the roles you checked, and the projects you opened. Every claim keeps its evidence label and link." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Written for" }),
    /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Perspective", children: e.personas.map((m) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": s === m.id, class: s === m.id ? "is-on" : "", onClick: () => a(m.id), children: m.label }, m.id)) }),
    /* @__PURE__ */ i("p", { class: "imw-help imw-export-intro", children: Et[s].intro }),
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Include" }),
    /* @__PURE__ */ i("ul", { class: "imw-export-list", children: [
      /* @__PURE__ */ i("li", { class: "is-fixed", children: [
        /* @__PURE__ */ i("span", { class: "imw-export-check", "aria-hidden": "true" }),
        /* @__PURE__ */ i("span", { children: [
          /* @__PURE__ */ i("strong", { children: "Contact details and experience at a glance" }),
          /* @__PURE__ */ i("small", { children: "Always included: roles and dates, education, and the skills that public work demonstrates." })
        ] })
      ] }),
      Object.keys(ke).map((m) => {
        const v = d[m], k = y(m) && u[m];
        return /* @__PURE__ */ i("li", { class: y(m) ? "" : "is-empty", children: [
          /* @__PURE__ */ i("label", { children: [
            /* @__PURE__ */ i("input", { type: "checkbox", checked: k, disabled: !y(m), onChange: (b) => c({ ...u, [m]: b.target.checked }) }),
            /* @__PURE__ */ i("span", { children: [
              /* @__PURE__ */ i("strong", { children: ke[m] }),
              /* @__PURE__ */ i("small", { children: y(m) ? v.text : v.empty }),
              y(m) && v.items && v.items.length > 0 && /* @__PURE__ */ i("span", { class: "imw-export-items", children: [
                v.items.slice(0, 6).map((b) => /* @__PURE__ */ i("em", { children: b }, b)),
                v.items.length > 6 && /* @__PURE__ */ i("em", { children: [
                  "+",
                  v.items.length - 6,
                  " more"
                ] })
              ] })
            ] })
          ] }),
          !y(m) && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r(m === "qa" ? "ask" : "role"), children: m === "qa" ? "Ask a question →" : "Evaluate a role →" })
        ] }, m);
      })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-export-go", children: [
      /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: h, disabled: f.kind === "busy", children: f.kind === "busy" ? "Building PDF…" : "Download PDF" }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: g })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", role: "status", "aria-live": "polite", children: [
      f.kind === "done" && `Downloaded ${f.file}. You can keep exploring and download again; the PDF always reflects the whole session.`,
      f.kind === "error" && "The PDF could not be built. Check your connection and try again; the rest of the workspace still works.",
      f.kind !== "done" && f.kind !== "error" && "Built in your browser. Nothing you typed or pasted is uploaded, and pasted job descriptions appear only as the requirements that were detected."
    ] }),
    f.kind === "done" && /* @__PURE__ */ i(Mn, { where: "pdf" })
  ] });
}
function Ra() {
  const e = I(), { inspect: t, setInspect: n } = e;
  return /* @__PURE__ */ i("div", { class: "imw-evidence", children: [
    /* @__PURE__ */ i("div", { class: "imw-evidence-head", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Evidence" }),
      t && /* @__PURE__ */ i("button", { class: "imw-icon imw-evidence-close", onClick: () => n(null), "aria-label": "Close evidence", children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-evidence-body", "aria-live": "polite", children: [
      !t && /* @__PURE__ */ i(La, {}),
      t?.kind === "claim" && /* @__PURE__ */ i(Pa, { id: t.id }),
      t?.kind === "node" && /* @__PURE__ */ i(Da, { arch: t.arch, node: t.node }),
      t?.kind === "req" && /* @__PURE__ */ i(Fa, {}),
      t?.kind === "entity" && /* @__PURE__ */ i(Na, { id: t.id }),
      t?.kind === "group" && /* @__PURE__ */ i(Wa, { id: t.id }),
      t?.kind === "basis" && /* @__PURE__ */ i(Ha, {})
    ] })
  ] });
}
function La() {
  const { kb: e } = I(), t = e.claims.reduce((n, r) => n + (F(r) ? r.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-intro", children: [
    /* @__PURE__ */ i("p", { children: "Select any claim, architecture component or requirement to inspect what supports it: sources, measured results and the exact code." }),
    /* @__PURE__ */ i("dl", { class: "imw-stats", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("dt", { children: e.claims.filter(F).length }),
        /* @__PURE__ */ i("dd", { children: "verified claims" })
      ] }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("dt", { children: t }),
        /* @__PURE__ */ i("dd", { children: "pinned code links" })
      ] }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("dt", { children: e.architectures.length }),
        /* @__PURE__ */ i("dd", { children: "system X-Rays" })
      ] }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("dt", { children: e.failures.length }),
        /* @__PURE__ */ i("dd", { children: "failure write-ups" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: "Evidence panels show sources and validation checks. They never show hidden model reasoning." })
  ] });
}
function Pa({ id: e }) {
  const { kb: t, setInspect: n } = I(), r = t.claim.get(e);
  if (!r) return null;
  const s = t.entity.get(r.entity), a = t.architectures.flatMap((l) => l.nodes.filter((u) => u.detail.claims.includes(e)).map((u) => ({ a: l, n: u }))), o = [...t.decisions, ...t.failures].filter((l) => l.claims.includes(e));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-st ${yt(r)}`, children: [
      /* @__PURE__ */ i(De, { cls: yt(r) }),
      " ",
      xn(r)
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-card-claim", children: r.text }),
    r.note && /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: r.note }),
    r.metrics?.length ? /* @__PURE__ */ i("dl", { class: "imw-metrics", children: r.metrics.map((l) => /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ i("dt", { children: l.value }),
      /* @__PURE__ */ i("dd", { children: l.label })
    ] }, l.label)) }) : null,
    s && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "From ",
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => n({ kind: "entity", id: s.id }), children: s.name }),
      " · verified ",
      r.last_verified
    ] }),
    /* @__PURE__ */ i(xe, { children: "Sources" }),
    /* @__PURE__ */ i("ul", { class: "imw-sources", children: r.sources.map((l) => {
      const u = t.sources.find((c) => c.id === l);
      return /* @__PURE__ */ i("li", { children: u.url && u.public ? /* @__PURE__ */ i("a", { href: u.url, target: "_blank", rel: "noopener", children: [
        u.title,
        " ↗"
      ] }) : /* @__PURE__ */ i("span", { children: [
        u.title,
        " ",
        /* @__PURE__ */ i("em", { children: "(private cross-check)" })
      ] }) }, l);
    }) }),
    r.code?.length ? /* @__PURE__ */ i(oe, { children: [
      /* @__PURE__ */ i(xe, { children: "Show me the code" }),
      /* @__PURE__ */ i(We, { refs: r.code })
    ] }) : null,
    a.length ? /* @__PURE__ */ i(oe, { children: [
      /* @__PURE__ */ i(xe, { children: "Appears in" }),
      /* @__PURE__ */ i("ul", { class: "imw-sources", children: a.map(({ a: l, n: u }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => n({ kind: "node", arch: l.id, node: u.id }), children: [
        l.title,
        " → ",
        u.label
      ] }) }, l.id + u.id)) })
    ] }) : null,
    o.length ? /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Also referenced by: ",
      o.map((l) => l.title).join("; ")
    ] }) : null
  ] });
}
function Da({ arch: e, node: t }) {
  const { kb: n } = I(), r = n.architectures.find((o) => o.id === e), s = r?.nodes.find((o) => o.id === t);
  if (!r || !s) return null;
  const a = s.detail.claims.flatMap((o) => n.claim.get(o)?.code ?? []);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
      r.title,
      " · component"
    ] }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: s.label }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: s.sub }),
    /* @__PURE__ */ i("dl", { class: "imw-kv", children: [
      /* @__PURE__ */ i("dt", { children: "Purpose" }),
      /* @__PURE__ */ i("dd", { children: s.detail.purpose }),
      /* @__PURE__ */ i("dt", { children: "Input → output" }),
      /* @__PURE__ */ i("dd", { children: [
        s.detail.input,
        " → ",
        s.detail.output
      ] }),
      s.detail.why && /* @__PURE__ */ i(oe, { children: [
        /* @__PURE__ */ i("dt", { children: "Why it matters" }),
        /* @__PURE__ */ i("dd", { children: s.detail.why })
      ] }),
      s.detail.observed && /* @__PURE__ */ i(oe, { children: [
        /* @__PURE__ */ i("dt", { children: "Observed" }),
        /* @__PURE__ */ i("dd", { children: s.detail.observed })
      ] })
    ] }),
    /* @__PURE__ */ i(ne, { ids: s.detail.claims, title: "Supporting claims", compact: !0 }),
    a.length ? /* @__PURE__ */ i(oe, { children: [
      /* @__PURE__ */ i(xe, { children: "Code" }),
      /* @__PURE__ */ i(We, { refs: a, max: 3 })
    ] }) : null
  ] });
}
function Fa() {
  const { kb: e, inspect: t } = I();
  if (t?.kind !== "req") return null;
  const n = t.req, r = n.via ? e.skill.get(n.via)?.name : void 0, s = (n.pending ?? []).map((a) => e.claim.get(a)).filter(Boolean);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-cat ${Ee[n.category]}`, children: ie[n.category] }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: n.label }),
    n.priority && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Listed as ",
      n.priority,
      " in the description."
    ] }),
    n.statement && /* @__PURE__ */ i("p", { children: n.statement }),
    n.category === "direct" && n.strength === "self_reported" && /* @__PURE__ */ i("p", { class: "imw-note", children: [
      "Supported by self-reported ",
      n.id.startsWith("degree:") ? "education history" : "employment experience",
      "; no public artifact."
    ] }),
    r && n.category === "related" && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Related through: ",
      r
    ] }),
    /* @__PURE__ */ i(ne, { ids: n.claims.slice(0, 8), title: n.category === "missing" ? "Closest evidence" : "Evidence", compact: !0 }),
    s.length ? /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      s.length,
      " related statement",
      s.length > 1 ? "s are" : " is",
      " awaiting verification and not used here."
    ] }) : null
  ] });
}
function Na({ id: e }) {
  const { kb: t, persona: n } = I(), r = t.entity.get(e);
  if (!r) return null;
  const s = (t.statableByEntity.get(e) ?? []).filter((a) => a.kind !== "limitation").slice(0, 5).map((a) => a.id);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
      r.kind,
      " · ",
      r.dates
    ] }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: r.name }),
    r.role && /* @__PURE__ */ i("p", { class: "imw-help", children: r.role }),
    /* @__PURE__ */ i("p", { children: r.summaries[n] ?? r.tagline }),
    r.ownership && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Ownership: ",
      r.ownership
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-actions", children: [
      t.archByEntity.has(e) && /* @__PURE__ */ i(dt, { a: { kind: "mode", label: "X-Ray", target: "xray", arg: e } }),
      /* @__PURE__ */ i(dt, { a: { kind: "anchor", label: "Jump to section", target: r.anchor } }),
      r.links.slice(0, 2).map((a) => /* @__PURE__ */ i(dt, { a: { kind: "url", label: a.label, target: a.url } }, a.url))
    ] }),
    /* @__PURE__ */ i(ne, { ids: s, title: "Key evidence", compact: !0 })
  ] });
}
function Wa({ id: e }) {
  const { kb: t, setInspect: n } = I(), r = t.groups.find((a) => a.id === e);
  if (!r) return null;
  const s = t.skills.filter((a) => a.group === e).map((a) => ({ s: a, cov: ue(t, a.id) }));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Capability area" }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: r.label }),
    /* @__PURE__ */ i("ul", { class: "imw-reqs", children: s.map(({ s: a, cov: o }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: o }), children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${Ee[o.category]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("span", { children: a.name }),
      /* @__PURE__ */ i("small", { children: o.entities.slice(0, 3).map((l) => t.entity.get(l)?.short).join(" · ") || ie[o.category] })
    ] }) }, a.id)) })
  ] });
}
function Ha() {
  const { inspect: e } = I();
  return e?.kind !== "basis" ? null : /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Why this answer?" }),
    /* @__PURE__ */ i("p", { children: e.engine === "model" ? `Written by ${e.model ?? "Claude"} from a retrieved evidence pack, then validated by the API and again in your browser before display.` : "Composed by the deterministic evidence engine in your browser. No model was involved." }),
    e.checks?.length ? /* @__PURE__ */ i("ul", { class: "imw-checks", children: e.checks.map((t) => /* @__PURE__ */ i("li", { class: t.ok ? "ok" : "bad", children: [
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: t.ok ? "✓" : "✕" }),
      " ",
      t.label
    ] }, t.label)) }) : null,
    /* @__PURE__ */ i(ne, { ids: e.retrieved.slice(0, 12), title: "Evidence used", compact: !0 }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: "This panel lists sources and checks only. It never shows hidden model reasoning." })
  ] });
}
function Oa() {
  const { kb: e, persona: t, setPersona: n, coverage: r, setCoverage: s, toggleLens: a, lensOn: o, go: l } = I(), u = e.personas.find((c) => c.id === t);
  return /* @__PURE__ */ i("div", { class: "imw-rail", children: [
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i(xe, { children: "Answer depth" }),
      /* @__PURE__ */ i("div", { class: "imw-personas", role: "radiogroup", "aria-label": "Who is asking", children: e.personas.map((c) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": t === c.id, class: t === c.id ? "is-on" : "", onClick: () => n(c.id), children: c.label }, c.id)) }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        u.focus,
        " Persona changes depth, never the facts."
      ] })
    ] }),
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i(xe, { children: "Role context" }),
      r ? /* @__PURE__ */ i("div", { class: "imw-context-card", children: [
        /* @__PURE__ */ i("strong", { children: r.title }),
        r.closestRole && r.source === "jd" && /* @__PURE__ */ i("span", { class: "imw-help", children: [
          "Closest target profile: ",
          r.closestRole
        ] }),
        /* @__PURE__ */ i(Ct, { counts: r.counts, compact: !0 }),
        /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l("role"), children: "Open analysis" }),
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a(!o), children: o ? "Restore portfolio" : "Show on portfolio" }),
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
            s(null), o && a(!1);
          }, children: "Clear" })
        ] })
      ] }) : /* @__PURE__ */ i("p", { class: "imw-help", children: [
        "No role selected. ",
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l("role"), children: "Evaluate against a role →" })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i(xe, { children: "Evidence states" }),
      /* @__PURE__ */ i("ul", { class: "imw-legend", children: [
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(De, { cls: "st-artifact" }),
          " Verified, public artifact"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(De, { cls: "st-self" }),
          " Verified, self-reported employment"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(De, { cls: "st-pending" }),
          " Verification required (never stated)"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(De, { cls: "st-no" }),
          " ",
          ie.missing
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-rail-about", children: [
      /* @__PURE__ */ i(xe, { children: "How this works" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        "Answers come from ",
        e.claims.filter((c) => c.status === "verified").length,
        " verified claims with sources and pinned code links.",
        " ",
        e.claims.filter((c) => c.status !== "verified").length,
        " statements from other sources are held back until verified."
      ] }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l("xray", "imw"), children: "X-Ray this system →" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l("connect"), children: "Connect your own AI (MCP) →" })
    ] })
  ] });
}
const Gi = [
  { id: "ask", label: "Ask", hint: "Questions answered from verified evidence" },
  { id: "role", label: "Role fit", hint: "Evidence coverage for a role or job description" },
  { id: "xray", label: "X-Ray", hint: "Explore each system component by component" },
  { id: "map", label: "Map", hint: "The whole body of work as an evidence graph" },
  { id: "lab", label: "Proof lab", hint: "Replays, break-it tests and live numbers" },
  { id: "brief", label: "Brief", hint: "A 10-minute technical interview brief" },
  { id: "connect", label: "Connect your AI", hint: "Use this evidence from Claude, Cursor or VS Code over MCP" }
], Ba = /* @__PURE__ */ new Set(["retrieval", "no_evidence", "topic", "entity", "focused", "skill", "personally", "scale", "challenge", "level", "overview", "shipped", "beyond_wrappers", "evaluation", "strongest"]), za = /* @__PURE__ */ new Set(["entity", "claims", "xray", "chart", "trace", "decisions", "failures"]);
function Ua({ kb: e, initial: t, register: n }) {
  const [r, s] = q(!0), [a, o] = q("ask"), [l, u] = q(), [c, f] = q("recruiter"), w = me(($) => {
    f($), B("persona_selected", { persona: $ });
  }, []), [d, y] = q(null), [g, h] = q(null), [m, v] = q([]), [k, b] = q([]), [_, p] = q([]), [x, C] = q("checking"), [E, M] = q(!1), D = we(null), Y = we(null), Me = we(!1), re = me(($, A) => {
    if (h($), !$) return;
    const X = (G) => `${G.source}|${G.title}|${G.requirements.map((ce) => ce.id).join()}`;
    v((G) => {
      const ce = G.findIndex((W) => W === A || $.source === "role" && W.source === "role" && W.roleId === $.roleId || X(W) === X($));
      return ce >= 0 ? G.map((W, Be) => Be === ce ? $ : W) : [...G, $];
    });
  }, []), ye = me(($) => {
    $ && b((A) => A.includes($) ? A : [...A, $]);
  }, []), H = me(($, A) => {
    o($), u(A), $ === "xray" && B("xray_opened", { project: A ?? "dia" }), D.current?.querySelector(".imw-main")?.scrollTo({ top: 0 });
  }, []), ui = me(($) => {
    Y.current = $.trigger ?? document.activeElement, s(!0);
    const A = Gi.find((X) => X.id === $.mode)?.id ?? "ask";
    $.mode === "transform" && $.arg ? H("role", $.arg) : H(A, $.arg), B("interview_my_work_opened", { mode: A });
  }, [H]);
  V(() => {
    n(ui), ui(t);
  }, []), V(() => {
    r && !Me.current && (Me.current = !0, Er(C));
  }, [r]), V(() => {
    const $ = document.querySelector(".wrap"), A = document.querySelector(".imw-fab");
    r ? (document.documentElement.classList.add("imw-open"), $?.setAttribute("inert", ""), A?.setAttribute("inert", ""), requestAnimationFrame(() => D.current?.querySelector("[data-autofocus]")?.focus() ?? D.current?.focus())) : (document.documentElement.classList.remove("imw-open"), $?.removeAttribute("inert"), A?.removeAttribute("inert"), Y.current?.focus?.());
  }, [r]);
  const He = me(() => s(!1), []), Nn = ($) => {
    if ($.key === "Escape") {
      $.preventDefault(), d && matchMedia("(max-width: 1100px)").matches ? y(null) : He();
      return;
    }
    if ($.key !== "Tab" || !D.current) return;
    const A = [...D.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((ce) => ce.offsetParent !== null);
    if (!A.length) return;
    const X = A[0], G = A[A.length - 1];
    $.shiftKey && document.activeElement === X ? ($.preventDefault(), G.focus()) : !$.shiftKey && document.activeElement === G && ($.preventDefault(), X.focus());
  }, pi = me(($) => {
    s(!1), B("project_opened_from_ai", { anchor: $ }), Ar($, () => s(!0));
  }, []), mi = me(($, A) => {
    const X = $ ?? !E, G = A ?? g;
    X && G ? (A && re(A), Sr(e, G, { reopen: () => {
      s(!0), H("role");
    }, restore: () => M(!1) }), M(!0), s(!1), B("portfolio_lens_applied", { source: G.source })) : (Gt(), M(!1));
  }, [E, g, e, H, re]), fi = me(async ($) => {
    const A = $.trim();
    if (!A) return;
    H("ask");
    const X = Date.now(), G = [..._].reverse().find((j) => j.a?.entities.length)?.a?.entities, ce = [..._].reverse().find((j) => j.a), W = ar(e, A, { persona: c, roleId: g?.roleId, lastEntities: G, lastTopic: ce?.a?.topic, lastQuestion: ce?.q, lastIntent: ce?.a?.intent }), Be = si(A);
    if (W.intent === "jd" || W.intent === "role") {
      const j = W.blocks.find((de) => de.type === "coverage");
      j && j.type === "coverage" && re(j.analysis), Be && B("jd_analyzed", { requirements: j && j.type === "coverage" ? j.analysis.requirements.length : 0 });
    }
    const qt = x === "ready" && Ba.has(W.intent);
    if (p((j) => [...j, { id: X, q: Be ? "Job description (pasted)" : A, a: qt ? void 0 : W, pending: qt }]), Be && x === "ready" && _n(A).then((j) => {
      if (!j.length) return;
      const de = ft(e, A, j), pe = W.blocks.find((At) => At.type === "coverage");
      re(de, pe && pe.type === "coverage" ? pe.analysis : void 0), p((At) => At.map((ze) => ze.id === X && ze.a ? { ...ze, a: { ...ze.a, blocks: yn(de), refined: !0 } } : ze));
    }).catch(() => {
    }), !qt) return;
    const Hn = _.filter((j) => j.a).slice(-3).map((j) => ({ q: j.q, cites: j.a.basis?.retrieved?.slice(0, 8) ?? [] }));
    let St;
    try {
      const j = await qr(e, A, c, Hn, g?.roleId, W.topic), de = W.blocks.filter((pe) => za.has(pe.type)).map((pe) => pe.type === "claims" ? { ...pe, title: "Sources", collapsed: !0 } : pe);
      St = { ...j, blocks: [...j.blocks, ...de], actions: W.actions, followups: j.followups.length ? j.followups : W.followups, entities: [.../* @__PURE__ */ new Set([...j.entities, ...W.entities])], topic: W.topic };
    } catch (j) {
      St = W, (j.status ?? 0) >= 500 && C("offline");
    }
    p((j) => j.map((de) => de.id === X ? { ...de, a: St, pending: !1 } : de));
  }, [e, c, g, x, _, H, re]), gi = he(() => ({ turns: _, analyses: m, seen: k }), [_, m, k]), Oe = _.filter(($) => $.a).length + m.length, Wn = he(() => ({
    kb: e,
    persona: c,
    setPersona: w,
    mode: a,
    go: H,
    modeArg: l,
    inspect: d,
    setInspect: ($) => {
      y($), $ && (B("evidence_opened", { kind: $.kind }), $.kind === "entity" ? ye($.id) : $.kind === "claim" ? ye(e.claim.get($.id)?.entity) : $.kind === "node" && ye(e.architectures.find((A) => A.id === $.arch)?.entity));
    },
    coverage: g,
    setCoverage: re,
    session: gi,
    noteEntity: ye,
    ask: fi,
    api: x,
    jump: pi,
    lensOn: E,
    toggleLens: mi,
    close: He
  }), [e, c, w, a, H, l, d, g, re, gi, ye, fi, x, pi, E, mi, He]);
  return /* @__PURE__ */ i(kn.Provider, { value: Wn, children: /* @__PURE__ */ i("div", { class: "imw", hidden: !r, children: [
    /* @__PURE__ */ i("div", { class: "imw-backdrop", onClick: He }),
    /* @__PURE__ */ i("div", { class: "imw-dialog", ref: D, role: "dialog", "aria-modal": "true", "aria-labelledby": "imw-title", tabIndex: -1, onKeyDown: Nn, children: [
      /* @__PURE__ */ i("header", { class: "imw-top", children: [
        /* @__PURE__ */ i("div", { class: "imw-brand", children: [
          /* @__PURE__ */ i("span", { class: "imw-mark", "aria-hidden": "true", children: "✦" }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("h2", { id: "imw-title", children: "Interview My Work" }),
            /* @__PURE__ */ i("p", { children: [
              "Evidence-gated · ",
              e.claims.filter(($) => $.status === "verified").length,
              " verified claims"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-tabs", role: "tablist", "aria-label": "Workspace views", children: Gi.map(($) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": a === $.id, class: a === $.id ? "is-on" : "", title: $.hint, onClick: () => H($.id), children: $.label }, $.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-top-right", children: [
          /* @__PURE__ */ i(Va, { status: x }),
          /* @__PURE__ */ i(
            "button",
            {
              class: `imw-dl${a === "export" ? " is-on" : ""}`,
              onClick: () => H("export"),
              title: "Download what you explored as a PDF",
              "aria-label": Oe ? `Download PDF (${Oe} item${Oe === 1 ? "" : "s"} explored)` : "Download PDF",
              children: [
                /* @__PURE__ */ i("svg", { viewBox: "0 0 16 16", width: "14", height: "14", "aria-hidden": "true", children: /* @__PURE__ */ i("path", { d: "M8 2v8m0 0L4.8 6.8M8 10l3.2-3.2M3 13h10", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
                /* @__PURE__ */ i("span", { class: "imw-dl-label", children: "PDF" }),
                Oe > 0 && /* @__PURE__ */ i("span", { class: "imw-dl-count", "aria-hidden": "true", children: Oe })
              ]
            }
          ),
          /* @__PURE__ */ i("select", { class: "imw-persona-mobile", "aria-label": "Answer depth", value: c, onChange: ($) => w($.target.value), children: e.personas.map(($) => /* @__PURE__ */ i("option", { value: $.id, children: $.label }, $.id)) }),
          /* @__PURE__ */ i("button", { class: "imw-icon", onClick: He, "aria-label": "Close Interview My Work", children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { class: "imw-body", children: [
        /* @__PURE__ */ i("aside", { class: "imw-left", "aria-label": "Context", children: /* @__PURE__ */ i(Oa, {}) }),
        /* @__PURE__ */ i("main", { class: "imw-main", id: "imw-main", children: [
          a === "ask" && /* @__PURE__ */ i(Jr, { turns: _ }),
          a === "role" && /* @__PURE__ */ i(ea, {}),
          a === "xray" && /* @__PURE__ */ i(ta, {}),
          a === "map" && /* @__PURE__ */ i(oa, {}),
          a === "lab" && /* @__PURE__ */ i(Wr, {}),
          a === "brief" && /* @__PURE__ */ i(la, {}),
          a === "connect" && /* @__PURE__ */ i(ha, {}),
          a === "export" && /* @__PURE__ */ i(Ta, {})
        ] }),
        /* @__PURE__ */ i("aside", { class: `imw-right${d ? " has-item" : ""}`, "aria-label": "Evidence", children: /* @__PURE__ */ i(Ra, {}) })
      ] })
    ] })
  ] }) });
}
function Va({ status: e }) {
  const t = {
    checking: "Connecting",
    waking: "AI waking up · evidence ready",
    ready: "AI + evidence",
    offline: "Evidence engine"
  }, n = {
    checking: "Checking the AI service.",
    waking: "The AI service is starting. Answers come from the offline evidence engine until it is ready.",
    ready: "Claude writes prose for open questions; every cited claim is validated against the evidence database.",
    offline: "The AI service is unavailable. Every feature still works from the in-browser evidence engine."
  };
  return /* @__PURE__ */ i("span", { class: `imw-pill is-${e}`, title: n[e], role: "status", children: [
    /* @__PURE__ */ i("i", { "aria-hidden": "true" }),
    t[e]
  ] });
}
let Nt = null, rt = null, Wt = null;
async function Ka(e = {}) {
  Nt ?? (Nt = ds(qn("evidence.json")).catch((n) => {
    throw Nt = null, n;
  }));
  const t = await Nt;
  if (Wt) {
    Wt(e);
    return;
  }
  rt = document.createElement("div"), rt.id = "imw-host", document.body.appendChild(rt), Jn(/* @__PURE__ */ i(Ua, { kb: t, initial: e, register: (n) => Wt = n }), rt);
}
export {
  Ka as open
};
