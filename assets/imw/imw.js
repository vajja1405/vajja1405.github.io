var _n = Object.defineProperty;
var bn = (e, t, n) => t in e ? _n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var si = (e, t, n) => bn(e, typeof t != "symbol" ? t + "" : t, n);
var ft, R, ji, be, ri, Ii, Ti, kt, et, He, Ri, Bt, It, Tt, Pi, at = {}, ot = [], kn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, gt = Array.isArray;
function fe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ht(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function xn(e, t, n) {
  var r, s, a, o = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? s = t[a] : o[a] = t[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ft.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
  return tt(e, o, r, s, null);
}
function tt(e, t, n, r, s) {
  var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++ji, __i: -1, __u: 0 };
  return s == null && R.vnode != null && R.vnode(a), a;
}
function ce(e) {
  return e.children;
}
function it(e, t) {
  this.props = e, this.context = t;
}
function Me(e, t) {
  if (t == null) return e.__ ? Me(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Me(e) : null;
}
function $n(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, r = [], s = [], a = fe({}, t);
    a.__v = t.__v + 1, R.vnode && R.vnode(a), zt(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? Me(t), !!(32 & t.__u), s), a.__v = t.__v, a.__.__k[a.__i] = a, Ni(r, a, s), t.__e = t.__ = null, a.__e != n && Li(a);
  }
}
function Li(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Li(e);
}
function Rt(e) {
  (!e.__d && (e.__d = !0) && be.push(e) && !lt.__r++ || ri != R.debounceRendering) && ((ri = R.debounceRendering) || Ii)(lt);
}
function lt() {
  try {
    for (var e, t = 1; be.length; ) be.length > t && be.sort(Ti), e = be.shift(), t = be.length, $n(e);
  } finally {
    be.length = lt.__r = 0;
  }
}
function Wi(e, t, n, r, s, a, o, l, m, c, u) {
  var f, h, g, y, p, w, v = r && r.__k || ot, k = t.length;
  for (m = Cn(n, t, v, m, k), f = 0; f < k; f++) (g = n.__k[f]) != null && (h = g.__i != -1 && v[g.__i] || at, g.__i = f, w = zt(e, g, h, s, a, o, l, m, c, u), y = g.__e, g.ref && h.ref != g.ref && (h.ref && Ut(h.ref, null, g), u.push(g.ref, g.__c || y, g)), p == null && y != null && (p = y), 4 & g.__u ? (m = Di(g, m, e), h.__e && (h.__e = null)) : typeof g.type == "function" && w !== void 0 ? m = w : y && (m = y.nextSibling), g.__u &= -7);
  return n.__e = p, m;
}
function Cn(e, t, n, r, s) {
  var a, o, l, m, c, u = n.length, f = u, h = 0;
  for (e.__k = new Array(s), a = 0; a < s; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = tt(null, o, null, null, null) : gt(o) ? o = e.__k[a] = tt(ce, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = tt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, m = a + h, o.__ = e, o.__b = e.__b + 1, l = null, (c = o.__i = En(o, n, m, f)) != -1 && (f--, (l = n[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (s > u ? h-- : s < u && h++), typeof o.type != "function" && (o.__u |= 4)) : c != m && (c == m - 1 ? h-- : c == m + 1 ? h++ : (c > m ? h-- : h++, o.__u |= 4))) : e.__k[a] = null;
  if (f) for (a = 0; a < u; a++) (l = n[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = Me(l)), Bi(l, l));
  return r;
}
function Di(e, t, n) {
  var r, s;
  if (typeof e.type == "function") {
    for (r = e.__k, s = 0; r && s < r.length; s++) r[s] && (r[s].__ = e, t = Di(r[s], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = Me(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function En(e, t, n, r) {
  var s, a, o, l = e.key, m = e.type, c = t[n], u = c != null && (2 & c.__u) == 0;
  if (c === null && l == null || u && l == c.key && m == c.type) return n;
  if (r > (u ? 1 : 0)) {
    for (s = n - 1, a = n + 1; s >= 0 || a < t.length; ) if ((c = t[o = s >= 0 ? s-- : a++]) != null && (2 & c.__u) == 0 && l == c.key && m == c.type) return o;
  }
  return -1;
}
function ai(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || kn.test(t) ? n : n + "px";
}
function Ge(e, t, n, r, s) {
  var a, o;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || ai(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || ai(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Ri, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r ? n[He] = r[He] : (n[He] = Bt, e.addEventListener(t, a ? Tt : It, a)) : e.removeEventListener(t, a ? Tt : It, a);
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
function oi(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[et] == null) t[et] = Bt++;
      else if (t[et] < n[He]) return;
      return n(R.event ? R.event(t) : t);
    }
  };
}
function zt(e, t, n, r, s, a, o, l, m, c) {
  var u, f, h, g, y, p, w, v, k, _, b, d, x, C, E, M, O = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (m = !!(32 & n.__u), a = [l = t.__e = n.__e]), (u = R.__b) && u(t);
  e: if (typeof O == "function") {
    f = o.length;
    try {
      if (k = t.props, _ = O.prototype && O.prototype.render, b = (u = O.contextType) && r[u.__c], d = u ? b ? b.props.value : u.__ : r, n.__c ? v = (h = t.__c = n.__c).__ = h.__E : (_ ? t.__c = h = new O(k, d) : (t.__c = h = new it(k, d), h.constructor = O, h.render = Sn), b && b.sub(h), h.state || (h.state = {}), h.__n = r, g = h.__d = !0, h.__h = [], h._sb = []), _ && h.__s == null && (h.__s = h.state), _ && O.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = fe({}, h.__s)), fe(h.__s, O.getDerivedStateFromProps(k, h.__s))), y = h.props, p = h.state, h.__v = t, g) _ && O.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), _ && h.componentDidMount != null && h.__h.push(h.componentDidMount);
      else {
        if (_ && O.getDerivedStateFromProps == null && k !== y && h.componentWillReceiveProps != null && h.componentWillReceiveProps(k, d), t.__v == n.__v || !h.__e && h.shouldComponentUpdate != null && h.shouldComponentUpdate(k, h.__s, d) === !1) {
          t.__v != n.__v && (h.props = k, h.state = h.__s, h.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(K) {
            K && (K.__ = t);
          }), ot.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && o.push(h), l = Me(n);
          break e;
        }
        h.componentWillUpdate != null && h.componentWillUpdate(k, h.__s, d), _ && h.componentDidUpdate != null && h.__h.push(function() {
          h.componentDidUpdate(y, p, w);
        });
      }
      if (h.context = d, h.props = k, h.__P = e, h.__e = !1, x = R.__r, C = 0, _) h.state = h.__s, h.__d = !1, x && x(t), u = h.render(h.props, h.state, h.context), ot.push.apply(h.__h, h._sb), h._sb = [];
      else do
        h.__d = !1, x && x(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
      while (h.__d && ++C < 25);
      h.state = h.__s, h.getChildContext != null && (r = fe(fe({}, r), h.getChildContext())), _ && !g && h.getSnapshotBeforeUpdate != null && (w = h.getSnapshotBeforeUpdate(y, p)), E = u != null && u.type === ce && u.key == null ? Oi(u.props.children) : u, l = Wi(e, gt(E) ? E : [E], t, n, r, s, a, o, l, m, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
    } catch (K) {
      if (o.length = f, t.__v = null, m || a != null) {
        if (K.then) {
          for (t.__u |= m ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
          a != null && (a[a.indexOf(l)] = null), t.__e = l;
        } else if (a != null) for (M = a.length; M--; ) Ht(a[M]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), K.then || Fi(t), R.__e(K, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = qn(n.__e, t, n, r, s, a, o, m, c);
  return (u = R.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function Fi(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Fi));
}
function Ni(e, t, n) {
  for (var r = 0; r < n.length; r++) Ut(n[r], n[++r], n[++r]);
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
function Oi(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : gt(e) ? e.map(Oi) : e.constructor !== void 0 ? null : fe({}, e);
}
function qn(e, t, n, r, s, a, o, l, m) {
  var c, u, f, h, g, y, p, w = n.props || at, v = t.props, k = t.type;
  if (k == "svg" ? s = "http://www.w3.org/2000/svg" : k == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), a != null) {
    for (c = 0; c < a.length; c++) if ((g = a[c]) && "setAttribute" in g == !!k && (k ? g.localName == k : g.nodeType == 3)) {
      e = g, a[c] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode(v);
    e = document.createElementNS(s, k, v.is && v), l && (R.__m && R.__m(t, a), l = !1), a = null;
  }
  if (k == null) w === v || l && e.data == v || (e.data = v);
  else {
    if (a = k == "textarea" && v.defaultValue != null ? null : a && ft.call(e.childNodes), !l && a != null) for (w = {}, c = 0; c < e.attributes.length; c++) w[(g = e.attributes[c]).name] = g.value;
    for (c in w) g = w[c], c == "dangerouslySetInnerHTML" ? f = g : c == "children" || c in v || c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v || Ge(e, c, null, g, s);
    for (c in v) g = v[c], c == "children" ? h = g : c == "dangerouslySetInnerHTML" ? u = g : c == "value" ? y = g : c == "checked" ? p = g : l && typeof g != "function" || w[c] === g || Ge(e, c, g, w[c], s);
    if (u) l || f && (u.__html == f.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (f && (e.innerHTML = ""), Wi(t.type == "template" ? e.content : e, gt(h) ? h : [h], t, n, r, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, a, o, a ? a[0] : n.__k && Me(n, 0), l, m), a != null) for (c = a.length; c--; ) Ht(a[c]);
    l && k != "textarea" || (c = "value", k == "progress" && y == null ? e.removeAttribute("value") : y != null && (y !== e[c] || k == "progress" && !y || k == "option" && y != w[c]) && Ge(e, c, y, w[c], s), c = "checked", p != null && p != e[c] && Ge(e, c, p, w[c], s));
  }
  return e;
}
function Ut(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    R.__e(s, n);
  }
}
function Bi(e, t, n) {
  var r, s;
  if (R.unmount && R.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || Ut(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      R.__e(a, t);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = e.__k) for (s = 0; s < r.length; s++) r[s] && Bi(r[s], t, n || typeof e.type != "function");
  n || Ht(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Sn(e, t, n) {
  return this.constructor(e, n);
}
function Mn(e, t, n) {
  var r, s, a, o;
  t == document && (t = document.documentElement), R.__ && R.__(e, t), s = (r = !1) ? null : t.__k, a = [], o = [], zt(t, e = t.__k = xn(ce, null, [e]), s || at, at, t.namespaceURI, s ? null : t.firstChild ? ft.call(t.childNodes) : null, a, s ? s.__e : t.firstChild, r, o), Ni(a, e, o), e.props.children = null;
}
function An(e) {
  function t(n) {
    var r, s;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (s = {})[t.__c] = this, this.getChildContext = function() {
      return s;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && r.forEach(function(o) {
        o.__e = !0, Rt(o);
      });
    }, this.sub = function(a) {
      r.add(a);
      var o = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        r && r.delete(a), o && o.call(a);
      };
    }), n.children;
  }
  return t.__c = "__cC" + Pi++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
ft = ot.slice, R = { __e: function(e, t, n, r) {
  for (var s, a, o; t = t.__; ) if ((s = t.__c) && !s.__) try {
    if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(e)), o = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), o = s.__d), o) return s.__E = s;
  } catch (l) {
    e = l;
  }
  throw e;
} }, ji = 0, it.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = fe({}, this.state), typeof e == "function" && (e = e(fe({}, n), this.props)), e && fe(n, e), e != null && this.__v && (t && this._sb.push(t), Rt(this));
}, it.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rt(this));
}, it.prototype.render = ce, be = [], Ii = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ti = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, lt.__r = 0, kt = Math.random().toString(8), et = "__d" + kt, He = "__a" + kt, Ri = /(PointerCapture)$|Capture$/i, Bt = 0, It = oi(!1), Tt = oi(!0), Pi = 0;
var jn = 0;
function i(e, t, n, r, s, a) {
  t || (t = {});
  var o, l, m = t;
  if ("ref" in m) for (l in m = {}, t) l == "ref" ? o = t[l] : m[l] = t[l];
  var c = { type: e, props: m, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --jn, __i: -1, __u: 0, __source: s, __self: a };
  if (typeof e == "function" && (o = e.defaultProps)) for (l in o) m[l] === void 0 && (m[l] = o[l]);
  return R.vnode && R.vnode(c), c;
}
var Ae, W, xt, li, ze = 0, Hi = [], F = R, ci = F.__b, di = F.__r, hi = F.diffed, ui = F.__c, pi = F.unmount, mi = F.__;
function Ve(e, t) {
  F.__h && F.__h(W, e, ze || t), ze = 0;
  var n = W.__H || (W.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function q(e) {
  return ze = 1, In(zi, e);
}
function In(e, t, n) {
  var r = Ve(Ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [zi(void 0, t), function(l) {
    var m = r.__N ? r.__N[0] : r.__[0], c = r.t(m, l);
    m !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = W, !W.__f)) {
    var s = function(l, m, c) {
      if (!r.__c.__H) return !0;
      var u = !1, f = r.__c.props !== l;
      if (r.__c.__H.__.some(function(g) {
        if (g.__N) {
          u = !0;
          var y = g.__[0];
          g.__ = g.__N, g.__N = void 0, y !== g.__[0] && (f = !0);
        }
      }), a) {
        var h = a.call(this, l, m, c);
        return u ? h || f : h;
      }
      return !u || f;
    };
    W.__f = !0;
    var a = W.shouldComponentUpdate, o = W.componentWillUpdate;
    W.componentWillUpdate = function(l, m, c) {
      if (this.__e) {
        var u = a;
        a = void 0, s(l, m, c), a = u;
      }
      o && o.call(this, l, m, c);
    }, W.shouldComponentUpdate = s;
  }
  return r.__N || r.__;
}
function z(e, t) {
  var n = Ve(Ae++, 3);
  !F.__s && Vt(n.__H, t) && (n.__ = e, n.u = t, W.__H.__h.push(n));
}
function Tn(e, t) {
  var n = Ve(Ae++, 4);
  !F.__s && Vt(n.__H, t) && (n.__ = e, n.u = t, W.__h.push(n));
}
function ge(e) {
  return ze = 5, he(function() {
    return { current: e };
  }, []);
}
function he(e, t) {
  var n = Ve(Ae++, 7);
  return Vt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ye(e, t) {
  return ze = 8, he(function() {
    return e;
  }, t);
}
function Rn(e) {
  var t = W.context[e.__c], n = Ve(Ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(W)), t.props.value) : e.__;
}
function Pn() {
  for (var e; e = Hi.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(nt), t.__h.some(Pt), t.__h = [];
    } catch (n) {
      t.__h = [], F.__e(n, e.__v);
    }
  }
}
F.__b = function(e) {
  W = null, ci && ci(e);
}, F.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), mi && mi(e, t);
}, F.__r = function(e) {
  di && di(e), Ae = 0;
  var t = (W = e.__c).__H;
  t && (xt === W ? (t.__h = [], W.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(nt), t.__h.some(Pt), t.__h = [], Ae = 0)), xt = W;
}, F.diffed = function(e) {
  hi && hi(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Hi.push(t) !== 1 && li === F.requestAnimationFrame || ((li = F.requestAnimationFrame) || Ln)(Pn)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), xt = W = null;
}, F.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(nt), n.__h = n.__h.filter(function(r) {
        return !r.__ || Pt(r);
      });
    } catch (r) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], F.__e(r, n.__v);
    }
  }), ui && ui(e, t);
}, F.unmount = function(e) {
  pi && pi(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      nt(r);
    } catch (s) {
      t = s;
    }
  }), n.__H = void 0, t && F.__e(t, n.__v));
};
var fi = typeof requestAnimationFrame == "function";
function Ln(e) {
  var t, n = function() {
    clearTimeout(r), fi && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  fi && (t = requestAnimationFrame(n));
}
function nt(e) {
  var t = W, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), W = t;
}
function Pt(e) {
  var t = W;
  e.__c = e.__(), W = t;
}
function Vt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function zi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function we(e) {
  return e.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}
const Wn = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work".split(" ")
);
function Ui(e) {
  return we(e).replace(/[^a-z0-9+#/. -]/g, " ").split(/[\s/]+/).map((t) => t.replace(/^[.-]+|[.-]+$/g, "")).filter((t) => t.length > 1 && !Wn.has(t)).map(Dn);
}
function Dn(e) {
  if (e.length <= 4) return e;
  for (const t of ["ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"])
    if (e.endsWith(t) && e.length - t.length >= 4) return e.slice(0, -t.length);
  return e;
}
const D = (e) => !!e && e.status === "verified" && e.public_safe, Fn = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function Nn(e) {
  return new RegExp(`(?<![a-z0-9])${Fn(e)}(?![a-z0-9+#])`, "g");
}
function On(e) {
  const t = e;
  t.claim = new Map(e.claims.map((s) => [s.id, s])), t.entity = new Map(e.entities.map((s) => [s.id, s])), t.skill = new Map(e.skills.map((s) => [s.id, s])), t.gap = new Map(e.gaps.map((s) => [s.id, s])), t.role = new Map(e.roles.map((s) => [s.id, s])), t.archByEntity = new Map(e.architectures.map((s) => [s.entity, s]));
  const n = [], r = (s, a) => {
    const o = we(s);
    o && n.push({ term: o, ref: { ...a, term: s }, re: Nn(o) });
  };
  for (const s of e.skills)
    r(s.name, { id: s.id, kind: "skill", near: !1 }), s.aliases.forEach((a) => r(a, { id: s.id, kind: "skill", near: !1 })), (s.near || []).forEach((a) => r(a, { id: s.id, kind: "skill", near: !0 }));
  for (const s of e.gaps) s.aliases.forEach((a) => r(a, { id: s.id, kind: "gap", near: !1 }));
  n.sort((s, a) => a.term.length - s.term.length), t.aliases = n, t.statableBySkill = /* @__PURE__ */ new Map(), t.statableByEntity = /* @__PURE__ */ new Map(), t.pendingBySkill = /* @__PURE__ */ new Map();
  for (const s of e.claims)
    if (D(s)) {
      for (const a of s.tags) (t.statableBySkill.get(a) ?? t.statableBySkill.set(a, []).get(a)).push(s);
      (t.statableByEntity.get(s.entity) ?? t.statableByEntity.set(s.entity, []).get(s.entity)).push(s);
    } else if (s.status === "verification_required")
      for (const a of s.tags) (t.pendingBySkill.get(a) ?? t.pendingBySkill.set(a, []).get(a)).push(s);
  return t;
}
async function Bn(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`evidence ${t.status}`);
  return On(await t.json());
}
const ie = (e, t) => e.entity.get(t)?.short ?? t, Qt = (e, t) => e.skill.get(t)?.name ?? e.gap.get(t)?.name ?? t;
function wt(e, t) {
  const n = we(t), r = [], s = /* @__PURE__ */ new Map();
  for (const a of e.aliases) {
    a.re.lastIndex = 0;
    let o;
    for (; o = a.re.exec(n); ) {
      const l = o.index, m = l + o[0].length;
      if (r.some(([f, h]) => l < h && m > f)) continue;
      r.push([l, m]);
      const c = a.ref.near ? `near:${a.ref.term}` : a.ref.id, u = s.get(c);
      u ? u.count++ : s.set(c, { ...a.ref, count: 1, index: l });
    }
  }
  return [...s.values()].sort((a, o) => a.index - o.index);
}
const Hn = {
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
}, $t = Object.entries(Hn).map(
  ([e, t]) => [e, new RegExp(`(?<![a-z0-9])(${t.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`)]
);
function Vi(e) {
  const t = we(e);
  return $t.filter(([, n]) => n.test(t)).map(([n]) => n).sort((n, r) => t.search($t.find(([s]) => s === n)[1]) - t.search($t.find(([s]) => s === r)[1]));
}
const gi = /* @__PURE__ */ new WeakMap();
function zn(e) {
  let t = gi.get(e);
  if (t) return t;
  const n = e.claims.filter(D).map((s) => {
    const a = [e.entity.get(s.entity)?.name ?? "", ...s.tags.map((o) => e.skill.get(o)?.name ?? "")].join(" ");
    return { claim: s, toks: Ui(`${s.text} ${a}`) };
  }), r = /* @__PURE__ */ new Map();
  for (const s of n) new Set(s.toks).forEach((a) => r.set(a, (r.get(a) ?? 0) + 1));
  return t = { docs: n, df: r, avg: n.reduce((s, a) => s + a.toks.length, 0) / Math.max(1, n.length) }, gi.set(e, t), t;
}
function Qi(e, t, n = {}) {
  const r = zn(e), s = [...new Set(Ui(t))], a = new Set(n.concepts ?? wt(e, t).filter((f) => f.kind === "skill").map((f) => f.id)), o = new Set(n.entities ?? Vi(t)), l = r.docs.length, m = 1.2, c = 0.75, u = [];
  for (const f of r.docs) {
    let h = 0;
    for (const g of s) {
      const y = f.toks.filter((v) => v === g).length;
      if (!y) continue;
      const p = r.df.get(g) ?? 0, w = Math.log(1 + (l - p + 0.5) / (p + 0.5));
      h += w * (y * (m + 1) / (y + m * (1 - c + c * f.toks.length / r.avg)));
    }
    for (const g of f.claim.tags) a.has(g) && (h += 2.5);
    o.has(f.claim.entity) && (h += 3), f.claim.kind === "limitation" && (h *= 0.8), h > 0 && u.push({ claim: f.claim, score: h });
  }
  return u.sort((f, h) => h.score - f.score).slice(0, n.limit ?? 12);
}
const wi = { public_artifact: 1, self_reported: 0.8 };
function de(e, t, n = {}) {
  const r = e.gap.get(t);
  if (r) {
    const l = r.related.flatMap((m) => e.statableBySkill.get(m) ?? []);
    return {
      id: t,
      label: r.name,
      category: r.verify ? "verification" : "missing",
      priority: n.priority,
      claims: [],
      entities: Ke(l.map((m) => m.entity)).slice(0, 4),
      statement: r.statement,
      via: r.related[0]
    };
  }
  const s = e.skill.get(t);
  if (!s)
    return {
      id: `term:${t}`,
      label: t,
      term: t,
      category: "missing",
      priority: n.priority,
      claims: [],
      entities: [],
      statement: "The evidence database has nothing that addresses this requirement."
    };
  const a = e.statableBySkill.get(t) ?? [], o = (e.pendingBySkill.get(t) ?? []).map((l) => l.id);
  if (n.near)
    return {
      id: `near:${n.near}`,
      label: Et(n.near),
      term: n.near,
      category: a.length ? "related" : "missing",
      priority: n.priority,
      claims: a.slice(0, 6).map((l) => l.id),
      entities: Ke(a.map((l) => l.entity)),
      via: t,
      statement: a.length ? `${Et(n.near)} itself is not demonstrated. The closest evidence is ${s.name.toLowerCase()}.` : `${Et(n.near)} is not demonstrated.`
    };
  if (a.length) {
    const l = a.some((m) => m.strength === "public_artifact");
    return {
      id: t,
      label: s.name,
      category: "direct",
      priority: n.priority,
      claims: Ct(a).map((m) => m.id),
      entities: Ke(Ct(a).map((m) => m.entity)),
      strength: l ? "artifact" : "self_reported",
      pending: o
    };
  }
  for (const l of s.related) {
    const m = e.statableBySkill.get(l) ?? [];
    if (m.length)
      return {
        id: t,
        label: s.name,
        category: "related",
        priority: n.priority,
        via: l,
        claims: Ct(m).slice(0, 6).map((c) => c.id),
        entities: Ke(m.map((c) => c.entity)),
        pending: o,
        statement: `No direct evidence for ${s.name.toLowerCase()}. The closest is ${Qt(e, l).toLowerCase()}.`
      };
  }
  return o.length ? {
    id: t,
    label: s.name,
    category: "verification",
    priority: n.priority,
    claims: [],
    entities: [],
    pending: o,
    statement: "Only claims that still need verification mention this."
  } : {
    id: t,
    label: s.name,
    category: "missing",
    priority: n.priority,
    claims: [],
    entities: [],
    statement: `${s.name} is not currently demonstrated in the portfolio.`
  };
}
function Ct(e) {
  return [...e].sort((t, n) => (wi[n.strength] ?? 0) - (wi[t.strength] ?? 0) || (t.kind === "limitation" ? 1 : 0) - (n.kind === "limitation" ? 1 : 0));
}
function Gt(e, t, n, r = {}) {
  const s = { direct: 0, related: 0, verification: 0, missing: 0 };
  n.forEach((m) => s[m.category]++);
  const a = /* @__PURE__ */ new Map();
  for (const m of n)
    if (!(m.category !== "direct" && m.category !== "related"))
      for (const c of m.entities) {
        const u = a.get(c) ?? { score: 0, requirements: [] };
        u.score += (m.category === "direct" ? 1 : 0.4) * (c === "imw" ? 0.4 : 1), u.requirements.push(m.id), a.set(c, u);
      }
  const o = ["direct", "related", "verification", "missing"], l = { required: 0, preferred: 1, mentioned: 2, undefined: 1 };
  return {
    title: t,
    source: "role",
    notes: [],
    ...r,
    requirements: [...n].sort((m, c) => o.indexOf(m.category) - o.indexOf(c.category) || l[String(m.priority)] - l[String(c.priority)]),
    counts: s,
    entities: [...a.entries()].map(([m, c]) => ({ id: m, ...c })).filter((m) => e.entity.has(m.id)).sort((m, c) => c.score - m.score)
  };
}
function $e(e, t) {
  const n = e.role.get(t);
  if (!n) throw new Error(`unknown role ${t}`);
  const r = [...n.requirements.map((a) => de(e, a)), ...n.gaps.map((a) => de(e, a))], s = [n.level_note, e.subject.level_note].filter(Boolean);
  return Gt(e, n.title, r, { source: "role", roleId: t, notes: s });
}
const X = {
  direct: "Direct evidence",
  related: "Related evidence",
  verification: "Verification required",
  missing: "Not currently demonstrated"
}, Ke = (e) => [...new Set(e)], Et = (e) => e.replace(/\b[a-z]/g, (t) => t.toUpperCase()), Un = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/, Gi = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/, Vn = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/, Qn = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;
function Gn(e) {
  const t = e.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(t)) return null;
  const n = we(t).replace(/^#+\s*/, ""), r = n.split(" ").length;
  return n.length > 0 && n.length < 70 && (/[:：]$/.test(n) || /^#/.test(t) || r <= 5 && !/[.,;]/.test(n)) ? Un.test(n) ? "skip" : Gi.test(n) ? "preferred" : Vn.test(n) ? "required" : Qn.test(n) ? "mentioned" : null : null;
}
function Kn(e, t) {
  const n = t.split(/\r?\n/);
  let r = "mentioned";
  const s = /* @__PURE__ */ new Map(), a = { required: 3, preferred: 2, mentioned: 1, skip: 0 };
  for (const h of n) {
    if (!h.trim()) continue;
    const g = Gn(h);
    if (g) {
      r = g;
      continue;
    }
    if (r === "skip") continue;
    const y = Gi.test(we(h)) ? "preferred" : r;
    for (const p of wt(e, h)) {
      const w = p.near ? `near:${p.term.toLowerCase()}` : p.id, v = s.get(w);
      v ? (v.count += p.count, a[y] > a[v.priority] && (v.priority = y)) : s.set(w, { id: p.id, near: p.near ? p.term.toLowerCase() : void 0, priority: y, count: p.count });
    }
  }
  const o = we(t), l = [...o.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((h) => Number(h[1])).filter((h) => h > 0 && h < 30), m = o.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/), c = new Set([...s.values()].filter((h) => !h.near && e.skill.has(h.id)).map((h) => h.id));
  let u, f = 0;
  for (const h of e.roles) {
    const g = h.requirements.filter((y) => c.has(y)).length / h.requirements.length;
    g > f && (f = g, u = h.id);
  }
  return {
    concepts: [...s.values()],
    years: l.length ? Math.max(...l) : void 0,
    seniority: m?.[1],
    closestRole: f >= 0.25 ? u : void 0
  };
}
function ct(e, t, n = []) {
  const r = Kn(e, t), s = [], a = /* @__PURE__ */ new Set(), o = { required: 0, preferred: 1, mentioned: 2 }, l = [...r.concepts].sort((c, u) => o[c.priority] - o[u.priority] || u.count - c.count).slice(0, 26);
  for (const c of l) {
    const u = de(e, c.id, { near: c.near, priority: c.priority === "skip" ? "mentioned" : c.priority });
    a.has(u.id) || (a.add(u.id), s.push(u));
  }
  for (const c of n) {
    const u = wt(e, c);
    if (u.length)
      for (const f of u) {
        const h = de(e, f.id, { near: f.near ? f.term.toLowerCase() : void 0, priority: "required" });
        a.has(h.id) || (a.add(h.id), s.push(h));
      }
    else if (c.trim().length > 2) {
      const f = de(e, c.trim(), { priority: "required" });
      a.has(f.id) || (a.add(f.id), s.push(f));
    }
  }
  const m = [];
  return r.years && r.years >= 3 ? m.push(`The description asks for ${r.years}+ years. ${e.subject.level_note}`) : r.seniority && m.push(`The description uses the word "${r.seniority}". ${e.subject.level_note}`), s.length || m.push("No recognizable technical requirements were found. Try pasting the requirements section."), Gt(e, "Your job description", s, {
    source: "jd",
    notes: m,
    closestRole: r.closestRole ? e.role.get(r.closestRole)?.title : void 0,
    roleId: r.closestRole
  });
}
const Kt = (e) => e.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(e), Ki = /\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|best candidate|excellent fit|great fit|strong fit|perfect|10\s?\/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|highly recommend|must hire|unmatched|brilliant|superstar)\b/i, Jn = /(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)/i, Yn = /(\b(rate|score|rank)\b.*\b(him|rahul|candidate)\b|\bout of (10|ten|100)\b|percent(age)? (match|fit)|%\s?(match|fit)|match (score|percentage)|fit score|is (he|rahul) (the )?(best|perfect|ideal|a good|great)|should (we|i) hire|would (he|rahul) be (a )?(good|great|perfect))/i, Xn = /\b(weather|joke|poem|recipe|song|lyrics|stock price|bitcoin|politic|election|horoscope|translate this|write (me )?(an? )?(essay|story|cover letter)|capital of|who won the)\b/i, I = (e, t) => t.test(e), G = (e) => [...new Set(e)];
function yi(e, t) {
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
function se(e, t, n, r = 3, s = 9) {
  const a = [...t].filter(D).sort((m, c) => yi(c, n) - yi(m, n)), o = /* @__PURE__ */ new Map(), l = [];
  for (const m of a) {
    const c = o.get(m.entity) ?? 0;
    if (!(c >= r || l.includes(m)) && (o.set(m.entity, c + 1), l.push(m), l.length >= s))
      break;
  }
  return l;
}
function dt(e, t) {
  return G(t.flatMap((n) => e.statableBySkill.get(n) ?? []));
}
function Se(e, t) {
  return (e.statableByEntity.get(t) ?? []).filter((n) => n.kind === "limitation");
}
function T(e) {
  return e.map((t) => t.id);
}
function Jt(e) {
  return { kind: "anchor", label: `Jump to ${e.short} on the portfolio`, target: e.anchor };
}
function Le(e, t, n = {}) {
  const r = e.entity.get(t);
  if (!r) return [];
  const s = [];
  n.xray !== !1 && e.archByEntity.has(t) && s.push({ kind: "mode", label: `X-Ray ${r.short}`, target: "xray", arg: t }), s.push(Jt(r));
  for (const a of r.links.slice(0, 2)) s.push({ kind: "url", label: a.label, target: a.url });
  return s;
}
function H(e, t, n = []) {
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
  return a.filter(([l]) => !n.includes(l)).filter(([l]) => l === "architecture" ? o : !0).filter(([l]) => l === "failure" ? e.failures.some((m) => m.entity === t) || Se(e, t).length > 0 : !0).filter(([l]) => l === "why" ? e.decisions.some((m) => m.entity === t) : !0).map(([, l]) => l).slice(0, 5);
}
const Qe = [
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
    followups: n.followups ?? Qe.slice(0, 4),
    actions: n.actions ?? [],
    engine: "evidence",
    intent: e,
    entities: n.entities ?? [],
    basis: n.basis
  };
}
function Ji(e) {
  return G(e.blocks.flatMap((t) => t.type === "claims" ? t.ids : t.type === "p" ? t.cites ?? [] : []));
}
function Zn(e) {
  return e.blocks.map((t) => {
    switch (t.type) {
      case "p":
      case "note":
        return t.text;
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
function es(e, t) {
  const n = Ji(t);
  return t.basis = {
    retrieved: t.basis?.retrieved ?? n,
    checks: [
      { label: "Only verified, public-safe claims cited", ok: n.every((r) => D(e.claim.get(r))) },
      { label: "No fit scores, rankings or praise", ok: !Ki.test(Zn(t)) },
      { label: "Every cited claim links to a source", ok: n.every((r) => (e.claim.get(r)?.sources.length ?? 0) > 0) }
    ]
  }, t;
}
const ts = [
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
function is(e) {
  const t = we(e);
  return ts.find(([n]) => n.test(t))?.[1];
}
function ns(e, t, n) {
  return es(e, ss(e, t, n));
}
function ss(e, t, n) {
  const r = t.trim(), s = we(r), a = n.persona;
  if (!s) return rs(e);
  if (Jn.test(r))
    return S("injection", [
      { type: "p", text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." }
    ], { followups: Qe.slice(0, 4) });
  if (Kt(r)) return hs(e, r);
  if (Yn.test(s))
    return S("no_scores", [
      { type: "p", text: "I don't produce fit scores, rankings or hiring recommendations. What I can do is show evidence coverage: for each requirement of a role, whether the portfolio has direct evidence, related evidence, claims awaiting verification, or nothing yet." }
    ], { actions: [{ kind: "mode", label: "Evaluate against a role", target: "role" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an AI Evaluation Engineer role", "What is not demonstrated yet?"] });
  const o = Vi(r), l = wt(e, r), m = G(l.map((p) => p.id));
  if (Xn.test(s) && !o.length && !l.length)
    return S("off_topic", [{ type: "p", text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  if (I(s, /\b(contact|email|reach (him|rahul|out)|get in touch|hire him|linkedin|resume|cv)\b/)) return as(e);
  const c = ds(e, s, r, o, m);
  if (c) return c;
  const u = is(s);
  if (u && I(s, /(interviewer|interview questions|would .* ask)/)) return ki(e, u);
  if (u && I(s, /challenge/)) return xi(e, u);
  if (u && I(s, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return vi(e, u);
  if (n.roleId && I(s, /(this role|the role|this evidence|for this|^challenge)/))
    return I(s, /challenge/) ? xi(e, n.roleId) : I(s, /(interview|ask)/) ? ki(e, n.roleId) : vi(e, n.roleId);
  if (I(s, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/))
    return S(
      "role_prompt",
      [{ type: "p", text: "Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated." }],
      { actions: [{ kind: "mode", label: "Select a role", target: "role" }, { kind: "mode", label: "Paste a job description", target: "role", arg: "jd" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an ML Engineer role", "Evaluate Rahul for an LLM Application Engineer role"] }
    );
  if (I(s, /\b(compare|versus|vs\.?|difference between|differ)\b/) && o.length >= 2) return _i(e, o.slice(0, 2), a);
  if (I(s, /\b(compare|versus|vs\.?)\b/) && o.length === 1 && n.lastEntities?.length) {
    const p = n.lastEntities.find((w) => w !== o[0]);
    if (p) return _i(e, [p, o[0]], a);
  }
  if (I(s, /(who is (rahul|he)|about rahul|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr)/)) return _s(e, a);
  if (s.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/) || I(s, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const p = l.filter((k) => k.kind === "skill").map((k) => k.id), w = Je(s), v = p.length ? p : w;
    if (v.length) return bi(e, v, a, s);
  }
  if (I(s, /\b(strongest|best)\b/) && Je(s).length) return bi(e, Je(s), a, s);
  if (I(s, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/) && l.length) return Lt(e, l.map((p) => ({ id: p.id, near: p.near ? p.term.toLowerCase() : void 0 })), a, s);
  const g = o[0] ?? (I(s, /\b(it|this|that|the project)\b/) ? n.lastEntities?.[0] : void 0);
  if (g) return us(e, g, s, a);
  if (I(s, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return ws(e);
  if (I(s, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return ps(e, a, I(s, /\b(more|all|other)\b/));
  if (I(s, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return ms(e, a);
  if (I(s, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return fs(e);
  if (I(s, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return gs(e);
  if (I(s, /(personally|himself|his own|individual contribution)/)) return S("personally", [{ type: "p", text: "Ask about a specific project or role. Ownership is recorded per item:" }, ...e.entities.filter((p) => p.ownership && p.kind !== "education").slice(0, 7).map((p) => ({ type: "p", text: `${p.short}: ${p.ownership}` }))]);
  const y = Je(s);
  return y.length ? ys(e, s, y, a) : l.length ? Lt(e, l.map((p) => ({ id: p.id, near: p.near ? p.term.toLowerCase() : void 0 })), a, s) : vs(e, r, a);
}
function rs(e) {
  return S("help", [{ type: "p", text: `Ask about ${e.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}
function as(e) {
  return S("contact", [{ type: "p", text: `${e.subject.name} is seeking full-time AI / ML engineering roles across the US.` }], {
    actions: [
      { kind: "url", label: "Email Rahul", target: `mailto:${e.subject.email}` },
      { kind: "url", label: "LinkedIn", target: e.subject.links.linkedin },
      { kind: "url", label: "GitHub", target: e.subject.links.github },
      { kind: "anchor", label: "Jump to contact", target: "#contact" }
    ]
  });
}
const os = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi, ls = /\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/, cs = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;
function ds(e, t, n, r, s) {
  if (!(/^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(t) || /\b(did|has) (he|rahul)\b/.test(t))) return null;
  const o = t.match(ls)?.[0];
  if (o && cs.test(t) && !/stable diffusion/.test(o)) {
    const c = e.gap.get("pretraining"), u = se(e, dt(e, ["llm_apis"]), "engineer", 1, 4);
    return S("false_premise", [
      { type: "p", text: `No. Nothing in the evidence supports that premise. ${o.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: "gaps", items: [{ id: c.id, name: c.name, statement: c.statement, closest: ["sssd"] }] },
      { type: "claims", title: "What the evidence does show", ids: T(u) }
    ], { followups: ["What models has Rahul fine-tuned?", "Show me his strongest RAG work.", "What is not demonstrated yet?"] });
  }
  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(t) && !/club/.test(t)) {
    const c = e.claim.get("dac.lead"), u = dt(e, ["stakeholder"]).filter((f) => f.id !== "dac.lead").slice(0, 2);
    return S("false_premise", [
      { type: "p", text: "The portfolio does not show people management or leading an engineering team. The closest evidence is student leadership and cross-functional collaboration:" },
      { type: "claims", ids: [c.id, ...T(u)] }
    ]);
  }
  const l = /minute|scale|100x|10x/.test(t) ? [] : n.match(os) ?? [];
  if (l.length) {
    const c = l[0].replace(/\s/g, ""), u = c.replace(/^\$/, "").replace(/[%x×]$/i, ""), f = e.claims.filter((g) => D(g) && g.text.replace(/\s/g, "").includes(u)), h = e.claims.filter((g) => !D(g) && g.text.replace(/\s/g, "").includes(u));
    if (f.length) {
      const g = /patient records|patients|ehr/.test(t) && f.some((y) => /not clinical ehr records/i.test(y.text));
      return S("figure_check", [
        { type: "p", text: g ? `Not quite. ${c} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${c}:`, cites: T(f.slice(0, 1)) },
        { type: "claims", ids: T(f.slice(0, 3)) }
      ], { entities: G(f.map((y) => y.entity)), followups: H(e, f[0].entity) });
    }
    if (h.length)
      return S("figure_check", [
        { type: "p", text: `That figure is not verified, so I won't state it as fact. ${h[0].note ?? ""}` },
        { type: "note", tone: "warn", text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' }
      ], { entities: G(h.map((g) => g.entity)) });
    if (r.length || s.length)
      return S("figure_check", [{ type: "p", text: `${c} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities: r });
  }
  const m = s.map((c) => e.gap.get(c)).find((c) => c && !c.verify);
  if (m && /\b(did|does|has|have|is|was)\b/.test(t)) {
    const c = m.related.flatMap((u) => e.statableBySkill.get(u) ?? []);
    return S("unsupported_skill", [
      { type: "p", text: `No. ${m.statement}` },
      ...c.length ? [{ type: "claims", title: "Closest related evidence", ids: T(se(e, c, "engineer", 1, 4)) }] : []
    ], { followups: ["What is not demonstrated yet?", "Show me his backend engineering experience.", "Evaluate Rahul for an MLOps Engineer role"] });
  }
  return null;
}
function hs(e, t) {
  const n = ct(e, t), r = n.counts, s = [
    { type: "p", text: `I found ${n.requirements.length} requirements. ${r.direct} have direct evidence, ${r.related} related evidence, ${r.verification} need verification, and ${r.missing} are not currently demonstrated.` },
    { type: "coverage", analysis: n }
  ];
  return n.notes.forEach((a) => s.push({ type: "note", tone: "warn", text: a })), S("jd", s, {
    actions: [{ kind: "mode", label: "Show this on the portfolio", target: "transform" }, { kind: "mode", label: "Technical brief for this role", target: "brief" }],
    followups: ["What is the strongest evidence for this role?", "Challenge this evidence", "What is not demonstrated yet?"]
  });
}
function vi(e, t, n) {
  const r = $e(e, t), s = r.counts, a = r.entities.slice(0, 3).map((l) => ie(e, l.id)), o = [
    { type: "p", text: `Evidence coverage for ${r.title}: ${s.direct} requirements with direct evidence, ${s.related} with related evidence, ${s.verification} needing verification, and ${s.missing} not currently demonstrated. The strongest evidence comes from ${Xi(a)}.` },
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
function _i(e, [t, n], r) {
  const s = e.entity.get(t), a = e.entity.get(n), o = (g, y) => ({ label: g, values: [y(t), y(n)] }), l = (g) => G((e.statableByEntity.get(g) ?? []).flatMap((y) => y.tags)).filter((y) => !["python", "healthcare", "fintech", "product_judgment"].includes(y)).slice(0, 6).map((y) => Qt(e, y)).join(", ") || "—", m = (g) => (e.statableByEntity.get(g) ?? []).find((y) => y.tags.some((p) => ["eval_design", "llm_eval", "regression_testing"].includes(p)) && y.kind !== "limitation")?.text ?? "—", c = (g) => {
    const y = (e.statableByEntity.get(g) ?? []).find((p) => p.metrics?.length);
    return y ? y.metrics.map((p) => `${p.label}: ${p.value}`).join(" · ") : "—";
  }, u = (g) => Se(e, g)[0]?.text.replace(/^Limits:\s*/, "") ?? "—", f = (g) => (e.statableByEntity.get(g) ?? []).some((y) => y.tags.includes("deployment")) ? "Yes" : "No public deployment", h = G([t, n].flatMap((g) => (e.statableByEntity.get(g) ?? []).filter((y) => y.metrics?.length || y.kind === "limitation").slice(0, 3)));
  return S("compare", [
    { type: "p", text: `${s.short} vs ${a.short}, compared on the same evidence fields.` },
    { type: "compare", entities: [t, n], rows: [
      o("What it is", (g) => e.entity.get(g).tagline),
      o("When", (g) => e.entity.get(g).dates),
      o("Demonstrates", l),
      o("Evaluation evidence", m),
      o("Measured results", c),
      o("Deployed", f),
      o("Main limitation", u),
      o("Ownership", (g) => e.entity.get(g).ownership || "—")
    ] },
    { type: "claims", title: "Evidence used", ids: T(se(e, h, r, 3, 6)) }
  ], { entities: [t, n], actions: [...Le(e, t).slice(0, 1), ...Le(e, n).slice(0, 1)], followups: [...H(e, t).slice(0, 2), ...H(e, n).slice(0, 2)] });
}
function bi(e, t, n, r) {
  const s = /* @__PURE__ */ new Map();
  for (const h of dt(e, t)) {
    const g = s.get(h.entity) ?? { s: 0, claims: [] };
    g.s += (h.strength === "public_artifact" ? 1 : 0.7) + (h.code?.length ? 0.4 : 0) + (h.kind === "metric" ? 0.2 : 0), g.claims.push(h), s.set(h.entity, g);
  }
  const a = [...s.entries()].filter(([h]) => h !== "imw").sort((h, g) => g[1].s - h[1].s);
  if (!a.length) return Lt(e, t.map((h) => ({ id: h })), n, r);
  const [o, l] = a[0], m = e.entity.get(o), c = Qt(e, t[0]).toLowerCase(), u = l.claims.filter((h) => h.code?.length).length, f = a[1] ? ` The next strongest is ${ie(e, a[1][0])}.` : "";
  return S("strongest", [
    { type: "p", text: `The strongest evidence for ${c} is ${m.name}: ${l.claims.length} supporting claims, ${u} with linked code.${f}`, cites: T(l.claims.slice(0, 2)) },
    { type: "claims", ids: T(se(e, l.claims, n, 5, 5)) },
    ...e.archByEntity.has(o) ? [{ type: "xray", arch: e.archByEntity.get(o).id }] : []
  ], { entities: [o], actions: Le(e, o), followups: H(e, o) });
}
function Lt(e, t, n, r) {
  const s = [], a = [], o = [], l = /* @__PURE__ */ new Set();
  for (const c of t.slice(0, 3)) {
    const u = de(e, c.id, { near: c.near });
    if (l.has(u.id)) continue;
    l.add(u.id);
    const f = u.entities.map((h) => ie(e, h));
    if (u.category === "direct") {
      const h = u.strength === "self_reported" ? " This evidence is self-reported employment experience; there is no public artifact." : "";
      s.push({ type: "p", text: `${X.direct}: ${u.label} appears in ${Xi(f.slice(0, 4))}.${h}`, cites: u.claims.slice(0, 2) }), s.push({ type: "claims", ids: T(se(e, u.claims.map((g) => e.claim.get(g)), n, 2, 5)) });
    } else u.category === "related" ? (s.push({ type: "p", text: `${X.related}: ${u.statement}`, cites: u.claims.slice(0, 1) }), s.push({ type: "claims", ids: u.claims.slice(0, 4) })) : u.category === "verification" ? s.push({ type: "p", text: `${X.verification}: ${u.statement ?? ""}` }) : s.push({ type: "gaps", items: [{ id: u.id, name: u.label, statement: u.statement ?? "", closest: u.entities }] });
    if (a.push(...u.entities), /where/.test(r)) for (const h of u.entities.slice(0, 3)) {
      const g = e.entity.get(h);
      g && o.push(Jt(g));
    }
  }
  const m = G(a)[0];
  return S("skill", s, { entities: G(a), actions: o.length ? o : m ? Le(e, m) : [], followups: m ? H(e, m).slice(0, 3).concat(["What is not demonstrated yet?"]) : Qe.slice(0, 4) });
}
function us(e, t, n, r) {
  const s = e.entity.get(t), a = e.statableByEntity.get(t) ?? [], o = e.archByEntity.get(t), l = e.failures.filter((g) => g.entity === t), m = e.decisions.filter((g) => g.entity === t), c = Le(e, t);
  if (I(n, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && o)
    return S("architecture", [
      { type: "p", text: `${o.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: "xray", arch: o.id }
    ], { entities: [t], actions: c, followups: H(e, t, ["architecture"]) });
  if (I(n, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && m.length)
    return S("decisions", [{ type: "decisions", ids: m.map((g) => g.id) }], { entities: [t], actions: c, followups: H(e, t, ["why"]) });
  if (I(n, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const g = Se(e, t), y = [];
    return l.length && y.push({ type: "failures", ids: l.map((p) => p.id) }), g.length && y.push({ type: "claims", title: "Stated limitations", ids: T(g) }), y.length || y.push({ type: "p", text: `The evidence database records no specific failure case for ${s.short}.` }), S("failures", y, { entities: [t], actions: [...e.attacks.some((p) => p.entity === t) ? [{ kind: "mode", label: "Try to break it", target: "lab", arg: t }] : [], ...c], followups: H(e, t, ["failure"]) });
  }
  if (I(n, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const g = a.filter((w) => w.tags.some((v) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(v))), y = [{ type: "claims", ids: T(se(e, g, "researcher", 7, 7)) }];
    t === "cliniq" && y.push({ type: "chart", chart: "cliniq" }), t === "voice" && y.push({ type: "chart", chart: "voice_quality" });
    const p = e.traces.find((w) => w.entity === t);
    return p && y.push({ type: "trace", id: p.id }), S("evaluation", y, { entities: [t], actions: [{ kind: "mode", label: "Open the proof lab", target: "lab", arg: t }, ...c], followups: H(e, t, ["evaluation"]) });
  }
  if (I(n, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const g = a.filter((y) => y.code?.length);
    return S("code", [
      { type: "p", text: `Code links are pinned to a specific commit, so line numbers do not drift.${s.repo ? "" : " This is employment work, so no source code is public."}` },
      { type: "claims", ids: T(se(e, g, "engineer", 8, 8)) }
    ], { entities: [t], actions: c, followups: H(e, t, ["code"]) });
  }
  if (I(n, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const g = Se(e, t), y = [{ type: "p", text: `Questions an interviewer could reasonably press on for ${s.short}:` }];
    return s.questions.forEach((p) => y.push({ type: "p", text: `• ${p}` })), g.length && y.push({ type: "claims", title: "Limitations the evidence already states", ids: T(g) }), m.length && y.push({ type: "decisions", ids: m.slice(0, 2).map((p) => p.id) }), S("challenge", y, { entities: [t], actions: c, followups: H(e, t, ["challenge"]) });
  }
  if (I(n, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/))
    return S("personally", [
      { type: "p", text: s.ownership || "The portfolio does not break down individual contributions for this item." },
      { type: "claims", ids: T(se(e, a, r, 4, 4)) }
    ], { entities: [t], actions: c, followups: H(e, t, ["personally"]) });
  if (I(n, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const g = a.filter((p) => p.tags.some((w) => ["rate_limiting", "caching", "deployment", "docker", "monitoring"].includes(w))), y = ["distributed_systems", "kubernetes"].map((p) => e.gap.get(p));
    return S("scale", [
      { type: "p", text: `What is implemented today for ${s.short}:` },
      g.length ? { type: "claims", ids: T(g.slice(0, 5)) } : { type: "p", text: "No scaling-related controls are recorded for this item." },
      { type: "gaps", items: y.map((p) => ({ id: p.id, name: p.name, statement: p.statement, closest: [] })) },
      { type: "note", tone: "info", text: "A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented." }
    ], { entities: [t], actions: c, followups: H(e, t, ["scale"]) });
  }
  if (n.length > 70) {
    const g = Qi(e, n, { entities: [t], limit: 8 }).map((p) => p.claim).filter((p) => p.entity === t), y = Se(e, t).filter((p) => !g.includes(p));
    if (g.length)
      return S("focused", [
        { type: "p", text: `The evidence most relevant to this question about ${s.short}:`, cites: T(g.slice(0, 2)) },
        { type: "claims", ids: T(g.slice(0, 5)) },
        ...y.length ? [{ type: "claims", title: "Stated limitations", ids: T(y.slice(0, 2)) }] : []
      ], { entities: [t], actions: c, followups: H(e, t) });
  }
  const u = s.summaries[r] ?? s.tagline, f = se(e, a, r, r === "recruiter" ? 3 : 5, r === "recruiter" ? 3 : 5), h = [{ type: "entity", id: t }, { type: "p", text: u, cites: T(f.slice(0, 2)) }, { type: "claims", ids: T(f) }];
  if (r === "engineer" && o && h.push({ type: "xray", arch: o.id }), r === "researcher") {
    const g = Se(e, t);
    g.length && h.push({ type: "claims", title: "Stated limitations", ids: T(g) });
  }
  return r === "manager" && s.ownership && h.push({ type: "note", tone: "info", text: `Ownership: ${s.ownership}` }), S("entity", h, { entities: [t], actions: c, followups: H(e, t) });
}
function ps(e, t, n = !1) {
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
    entities: G(s.map((a) => e.failures.find((o) => o.id === a).entity)),
    actions: [{ kind: "mode", label: "Open the proof lab", target: "lab" }],
    followups: ["Show me the barge-in fix in code", "Show more failure cases", "How does he evaluate AI systems?"]
  });
}
function ms(e, t) {
  const r = ["dia.no_llm_review", "dia.four_tier", "dia.calibration", "dia.entity_filter", "voice.bargein", "voice.gate", "cliniq.schema", "cliniq.workload", "sssd.encoder"].map((s) => e.claim.get(s)).filter(D);
  return S("beyond_wrappers", [
    { type: "p", text: "Work where a language model is one component, or absent entirely: deterministic review pipelines, classical classifiers with calibration, realtime audio engineering, database design, release gates, and a custom diffusion conditioning encoder." },
    { type: "claims", ids: T(t === "recruiter" ? r.slice(0, 5) : r) }
  ], { entities: G(r.map((s) => s.entity)), actions: [{ kind: "mode", label: "X-Ray the Drug Interaction Agent", target: "xray", arg: "dia" }], followups: ["Why keep label review free of an LLM?", "Show me the barge-in fix in code", "Show the architecture of ClinIQ"] });
}
function fs(e, t) {
  const n = ["dia.shipped", "cliniq.delivery", "tifin.deploy", "tifin.reach", "imw.system"].map((r) => e.claim.get(r)).filter(D);
  return S("shipped", [
    { type: "p", text: "Publicly deployed and inspectable: the Drug Interaction Agent (live app) and ClinIQ (live demo), both on Hugging Face Spaces. Production work at TIFIN is self-reported employment experience with no public artifact. The Voice-Agent QA Harness is a test system, not a deployed product.", cites: ["dia.shipped", "cliniq.delivery", "tifin.deploy"] },
    { type: "claims", ids: T(n) }
  ], {
    entities: ["dia", "cliniq", "tifin"],
    actions: [{ kind: "url", label: "Open Drug Interaction Agent", target: e.entity.get("dia").links[0].url }, { kind: "url", label: "Open ClinIQ demo", target: e.entity.get("cliniq").links[0].url }, { kind: "anchor", label: "Jump to TIFIN experience", target: "#tifin" }],
    followups: ["Show the architecture of the Drug Interaction Agent", "How was ClinIQ evaluated?", "What did Rahul personally do on TIFIN?"]
  });
}
function gs(e) {
  return S("gaps", [
    { type: "p", text: "What the current portfolio does not demonstrate, and the closest related evidence for each:" },
    { type: "gaps", items: ["kubernetes", "iac", "distributed_inference", "pretraining", "orchestration", "human_annotation", "online_experiments", "customer_deployments"].map((n) => e.gap.get(n)).map((n) => ({ id: n.id, name: n.name, statement: n.statement, closest: G(n.related.flatMap((r) => (e.statableBySkill.get(r) ?? []).map((s) => s.entity))).slice(0, 3) })) },
    { type: "note", tone: "info", text: `Also pending verification (not stated as fact): ${e.conflicts.filter((n) => !n.decision.startsWith("No conflict")).map((n) => n.label).slice(0, 5).join("; ")}.` }
  ], { followups: ["Evaluate Rahul for an MLOps Engineer role", "What is his strongest evidence overall?", "How does he evaluate AI systems?"] });
}
function ws(e) {
  const t = ["citizen.role", "tifin.role", "athena.role", "edu.ms"].map((n) => e.claim.get(n)).filter(D);
  return S("level", [{ type: "p", text: e.subject.level_note }, { type: "claims", ids: T(t) }], { followups: ["What has Rahul actually shipped?", "Evaluate Rahul for a Machine Learning Engineer I role"] });
}
const Yi = [
  [/\b(rag|retrieval|vector|embedding|semantic search|grounded)/, ["rag", "vector_db", "semantic_search", "embeddings", "provenance"], "Retrieval and RAG work, grouped by where it was done:"],
  [/(evaluat|test(ing|s)?\b|measure|benchmark|metrics|quality assurance|qa\b|red[- ]team|judge)/, ["eval_design", "llm_eval", "regression_testing", "safety_testing", "model_comparison"], "How Rahul evaluates AI systems: designed test suites, a separate LLM judge with validated output, hand review, fail-closed release gates, and baselines:"],
  [/(backend|back-end|api|fastapi|server|cache|redis|rate limit|docker|infrastructure)/, ["fastapi", "rest_api", "caching", "rate_limiting", "docker", "testing"], "Backend engineering evidence:"],
  [/(vision|image|diffusion|cnn|imaging|stable diffusion|lora)/, ["computer_vision", "diffusion", "fine_tuning", "cnn", "xai"], "Computer-vision and generative-vision research:"],
  [/(data engineer|pipeline|snowflake|spark|etl|sql|data quality|warehouse)/, ["etl", "snowflake", "pyspark", "data_quality", "data_modeling", "sql"], "Data engineering evidence:"],
  [/(voice|realtime|real-time|speech|audio|twilio|websocket|phone)/, ["voice_ai", "realtime_audio", "twilio", "websockets"], "Realtime voice AI evidence:"],
  [/(agent|agentic|langgraph|langchain|tool call|workflow|automation)/, ["agents", "langgraph", "langchain", "tool_calling", "workflow_automation"], "Agents and workflow automation:"],
  [/(research|paper|experiment|reproducib|baseline|scientific)/, ["research_methods", "model_comparison", "metrics"], "Research practice: baselines, metrics, limitations and reproducibility checks:"],
  [/(ml model|machine learning|classifier|model development|train)/, ["classical_ml", "deep_learning", "calibration", "model_comparison"], "Model development evidence:"],
  [/(aws|gcp|cloud|sagemaker|vertex|mlops|deploy)/, ["sagemaker", "vertex_ai", "deployment", "mlops", "docker"], "Cloud and deployment evidence:"],
  [/(healthcare|clinical|medical|patient)/, ["healthcare"], "Healthcare work:"],
  [/(fintech|financ|advisor|invest)/, ["fintech"], "Financial-services work:"]
];
function Je(e) {
  return Yi.find(([t]) => t.test(e))?.[1] ?? [];
}
function ys(e, t, n, r) {
  const s = Yi.find(([m]) => m.test(t))[2], a = se(e, dt(e, n), r, r === "recruiter" ? 2 : 3, r === "recruiter" ? 6 : 9), o = G(a.map((m) => m.entity)), l = [{ type: "p", text: s, cites: T(a.slice(0, 2)) }, { type: "claims", ids: T(a) }];
  return n.includes("eval_design") && r !== "recruiter" && l.push({ type: "chart", chart: "cliniq" }), n.includes("rag") && o.includes("dia") && r === "engineer" && l.push({ type: "xray", arch: "arch.dia" }), n.includes("voice_ai") && l.push({ type: "trace", id: "t.voice.emergency" }), S("topic", l, {
    entities: o,
    actions: o.slice(0, 3).map((m) => Jt(e.entity.get(m))),
    followups: o[0] ? H(e, o[0]).slice(0, 3).concat(o[1] ? [`Compare ${ie(e, o[0])} and ${ie(e, o[1])}`] : []) : Qe.slice(0, 4)
  });
}
function vs(e, t, n) {
  const r = Qi(e, t, { limit: 6 });
  if (!r.length || r[0].score < 2)
    return S("no_evidence", [
      { type: "p", text: "The evidence database doesn't cover that. I only answer from verified material about Rahul's work, so here is what I can answer:" }
    ], { followups: Qe });
  const s = se(e, r.map((o) => o.claim), n, 2, 5), a = s[0].entity;
  return S("retrieval", [
    { type: "p", text: "The closest verified evidence:", cites: T(s.slice(0, 1)) },
    { type: "claims", ids: T(s) }
  ], { entities: G(s.map((o) => o.entity)), actions: Le(e, a), followups: H(e, a).slice(0, 3), basis: { retrieved: r.map((o) => o.claim.id) } });
}
function _s(e, t) {
  const n = ["dia.shipped", "voice.gate", "cliniq.comparison", "tifin.agents", "sssd.encoder"].map((r) => e.claim.get(r)).filter(D);
  return S("overview", [
    { type: "p", text: `${e.subject.name} is an early-career AI/ML engineer. The strongest inspectable evidence, one item per area:` },
    { type: "claims", ids: T(t === "recruiter" ? n.slice(0, 4) : n) },
    { type: "note", tone: "info", text: e.subject.level_note }
  ], {
    entities: G(n.map((r) => r.entity)),
    actions: [{ kind: "mode", label: "Explore the evidence map", target: "map" }, { kind: "mode", label: "Evaluate against a role", target: "role" }],
    followups: ["What has Rahul actually shipped?", "What failure did he find and fix?", "What is not demonstrated yet?"]
  });
}
function ki(e, t) {
  const n = $e(e, t), r = n.entities.slice(0, 3).map((o) => e.entity.get(o.id)).filter(Boolean), s = [{ type: "p", text: `Questions worth asking for ${n.title}, grounded in the evidence an interviewer would see:` }];
  for (const o of r) o.questions.slice(0, 2).forEach((l) => s.push({ type: "p", text: `• ${o.short}: ${l}` }));
  return n.requirements.filter((o) => o.category === "missing").slice(0, 2).forEach((o) => s.push({ type: "p", text: `• Gap: ${o.label}. How would you close it in your first months?` })), S("role_questions", s, { entities: r.map((o) => o.id), actions: [{ kind: "mode", label: "10-minute technical brief", target: "brief", arg: t }], followups: [`Challenge the evidence for ${n.title}`] });
}
function xi(e, t) {
  const n = $e(e, t), r = n.entities.slice(0, 3).map((l) => l.id), s = r.flatMap((l) => Se(e, l)).slice(0, 4), a = n.requirements.filter((l) => l.category === "direct" && l.strength === "self_reported").map((l) => l.label), o = [
    { type: "p", text: `The weakest points in the evidence for ${n.title}:` },
    { type: "gaps", items: n.requirements.filter((l) => l.category === "missing" || l.category === "verification").map((l) => ({ id: l.id, name: l.label, statement: l.statement ?? "", closest: l.entities.slice(0, 3) })) }
  ];
  return a.length && o.push({ type: "note", tone: "warn", text: `Supported only by self-reported employment experience (no public artifact): ${a.join(", ")}.` }), s.length && o.push({ type: "claims", title: "Limitations stated in the strongest projects", ids: T(s) }), n.notes.forEach((l) => o.push({ type: "note", tone: "info", text: l })), S("challenge", o, { entities: r, followups: [`What would an interviewer ask for ${n.title}?`, "What failure did he find and fix?"] });
}
function Xi(e) {
  return e.length <= 1 ? e[0] ?? "the portfolio" : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
const bs = "https://astra6-interview-my-work.hf.space";
function Zi() {
  return (document.querySelector('meta[name="imw-api"]')?.content || bs).replace(/\/$/, "");
}
async function ht(e, t) {
  const n = new AbortController(), r = setTimeout(() => n.abort(), t.timeout);
  try {
    const s = await fetch(Zi() + e, { ...t, signal: n.signal, headers: { "Content-Type": "application/json", ...t.headers || {} } });
    if (!s.ok) throw Object.assign(new Error(`HTTP ${s.status}`), { status: s.status });
    return await s.json();
  } finally {
    clearTimeout(r);
  }
}
async function ks(e) {
  e("checking");
  const t = (n) => e(n?.ai_enabled ? "ready" : "offline");
  try {
    t(await ht("/api/health", { method: "GET", timeout: 4e3 }));
    return;
  } catch {
  }
  e("waking");
  try {
    t(await ht("/api/health", { method: "GET", timeout: 45e3 }));
  } catch {
    e("offline");
  }
}
async function xs(e, t, n, r, s) {
  const a = await ht("/api/ask", {
    method: "POST",
    timeout: 3e4,
    body: JSON.stringify({ question: t, persona: n, history: r.slice(-3), role: s ?? null })
  }), o = a.sentences.flatMap((f) => f.cites), l = [...a.sentences.map((f) => f.text), a.hypothetical ?? ""].join(" ");
  if (!a.sentences.length || o.some((f) => !D(e.claim.get(f))) || Ki.test(l))
    throw new Error("model answer failed client validation");
  const m = [];
  let c = { text: "", cites: [] };
  for (const f of a.sentences)
    c.text += (c.text ? " " : "") + f.text.trim(), c.cites.push(...f.cites), c.text.length > 320 && (m.push({ type: "p", text: c.text, cites: [...new Set(c.cites)] }), c = { text: "", cites: [] });
  c.text && m.push({ type: "p", text: c.text, cites: [...new Set(c.cites)] }), a.hypothetical && m.push({ type: "note", tone: "info", text: `Hypothetical, not implemented: ${a.hypothetical}` });
  const u = (a.gaps ?? []).map((f) => e.gap.get(f)).filter(Boolean);
  return u.length && m.push({ type: "gaps", items: u.map((f) => ({ id: f.id, name: f.name, statement: f.statement, closest: [] })) }), {
    blocks: m,
    followups: (a.followups ?? []).slice(0, 4),
    actions: [],
    engine: "model",
    intent: "model",
    entities: (a.entities ?? []).filter((f) => e.entity.has(f)),
    basis: { retrieved: a.retrieved ?? [...new Set(o)], checks: a.checks, model: a.model }
  };
}
async function en(e) {
  const t = await ht("/api/jd", { method: "POST", timeout: 25e3, body: JSON.stringify({ text: e.slice(0, 12e3) }) });
  return Array.isArray(t.requirements) ? t.requirements.filter((n) => typeof n == "string").slice(0, 30) : [];
}
const tn = An(null), j = () => Rn(tn), Ce = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function Q(e, t = {}) {
  try {
    window.dispatchEvent(new CustomEvent("imw:event", { detail: { name: e, ...t } }));
  } catch {
  }
}
let Re = null;
const Wt = [], ut = /* @__PURE__ */ new Set(), V = (e, t, n) => {
  const r = document.createElement(e);
  return r.className = t, n && (r.textContent = n), r;
};
function $s(e, t, n) {
  Dt();
  const r = new Map(t.entities.map((v) => [v.id, v.score])), s = (v) => t.requirements.filter((k) => (k.category === "direct" || k.category === "related") && k.entities.includes(v)), a = document.getElementById("work"), o = a ? [...a.querySelectorAll(":scope > article.project")] : [];
  if (o.length && a) {
    Re = { parent: a, order: [...a.children], numbers: o.map((d) => [d.querySelector(".project-number"), d.querySelector(".project-number")?.textContent ?? ""]) };
    const v = (d) => e.entities.find((x) => x.anchor === `#${d.id}`)?.id ?? "", k = new Map(o.map((d) => [d, d.getBoundingClientRect()])), _ = [...o].sort((d, x) => (r.get(v(x)) ?? 0) - (r.get(v(d)) ?? 0)), b = a.querySelector(":scope > .research");
    if (_.forEach((d, x) => {
      a.insertBefore(d, b);
      const C = d.querySelector(".project-number");
      C && (C.textContent = `${String(x + 1).padStart(2, "0")} —`);
    }), !Ce())
      for (const d of _) {
        const x = k.get(d), C = d.getBoundingClientRect(), E = x.top - C.top;
        E && d.animate([{ transform: `translateY(${E}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
  }
  for (const v of e.entities) {
    if (v.id === "imw" || v.kind === "education") continue;
    const k = document.querySelector(v.anchor);
    if (!k || k.id === "work" || k.id === "experience") continue;
    const _ = s(v.id);
    if (k.classList.add(_.length ? "imw-lens-hit" : "imw-lens-dim"), ut.add(k), _.length) {
      const b = V("div", "imw-lens-tag");
      b.append(V("span", "imw-lens-tag-label", `✦ Evidence for ${t.title}`)), _.slice(0, 6).forEach((d) => b.append(V("span", `imw-lens-chip is-${d.category}`, d.label))), k.prepend(b), Wt.push(b);
    }
  }
  const l = t.requirements.filter((v) => v.category === "direct").flatMap((v) => [v.label, ...e.skill.get(v.id)?.aliases ?? []]).map((v) => v.toLowerCase());
  document.querySelectorAll("#skills .skill").forEach((v) => {
    const k = v.textContent?.toLowerCase() ?? "";
    v.classList.add(l.some((_) => _.length > 2 && k.includes(_)) ? "imw-lens-hit" : "imw-lens-dim"), ut.add(v);
  });
  const m = V("div", "imw-lens-bar");
  m.setAttribute("role", "region"), m.setAttribute("aria-label", "Role lens");
  const c = V("div", "imw-lens-head");
  c.append(V("span", "imw-lens-mark", "✦"), V("strong", "", `Viewing as: ${t.title}`));
  const u = V("div", "imw-lens-counts");
  ["direct", "related", "verification", "missing"].forEach((v) => u.append(V("span", `is-${v}`, `${t.counts[v]} ${X[v].toLowerCase()}`)));
  const f = t.requirements.filter((v) => v.category === "missing").map((v) => v.label), h = V("div", "imw-lens-missing", f.length ? `Not demonstrated: ${f.slice(0, 4).join(", ")}${f.length > 4 ? "…" : ""}` : "Every listed requirement has at least related evidence."), g = V("div", "imw-lens-actions"), y = V("button", "imw-lens-btn", "Open analysis"), p = V("button", "imw-lens-btn is-primary", "Restore portfolio");
  y.onclick = () => n.reopen(), p.onclick = () => {
    Dt(), n.restore();
  }, g.append(y, p);
  const w = V("div", "imw-lens-mid");
  w.append(u, h), m.append(c, w, g), document.body.append(m), Wt.push(m), document.documentElement.classList.add("imw-lens"), requestAnimationFrame(() => (a ?? document.body).scrollIntoView({ behavior: Ce() ? "auto" : "smooth", block: "start" })), p.focus({ preventScroll: !0 });
}
function Dt() {
  Wt.splice(0).forEach((e) => e.remove()), ut.forEach((e) => e.classList.remove("imw-lens-hit", "imw-lens-dim")), ut.clear(), Re && (Re.order.forEach((e) => Re.parent.appendChild(e)), Re.numbers.forEach(([e, t]) => {
    e && (e.textContent = t);
  }), Re = null), document.documentElement.classList.remove("imw-lens");
}
let ve = null;
function Cs(e, t) {
  const n = document.querySelector(e);
  if (!n) {
    t();
    return;
  }
  n.scrollIntoView({ behavior: Ce() ? "auto" : "smooth", block: "start" }), n.classList.add("imw-flash"), setTimeout(() => n.classList.remove("imw-flash"), 2400), n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus({ preventScroll: !0 }), ve?.remove(), ve = V("button", "imw-return", "✦ Back to Interview My Work"), ve.onclick = () => {
    ve?.remove(), ve = null, t();
  }, document.body.append(ve), setTimeout(() => {
    ve?.remove(), ve = null;
  }, 2e4);
}
function nn(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "Verified · public artifact" : "Verified · self-reported" : { verification_required: "Verification required", unsupported: "Unsupported", deprecated: "Withdrawn" }[e.status] ?? e.status;
}
function pt(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "st-artifact" : "st-self" : e.status === "verification_required" ? "st-pending" : "st-no";
}
const Pe = ({ cls: e, label: t }) => /* @__PURE__ */ i("i", { class: `imw-dot ${e}`, "aria-hidden": t ? void 0 : "true", "aria-label": t });
function We({ refs: e, max: t = 4 }) {
  return e?.length ? /* @__PURE__ */ i("ul", { class: "imw-code", children: e.slice(0, t).map((n) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("a", { href: n.url, target: "_blank", rel: "noopener", children: [
    /* @__PURE__ */ i("span", { class: "imw-code-label", children: n.label }),
    /* @__PURE__ */ i("span", { class: "imw-code-path", children: [
      n.path,
      n.lines ? `#L${n.lines[0]}–${n.lines[1]}` : ""
    ] })
  ] }) }, n.url)) }) : null;
}
function Es({ id: e, compact: t }) {
  const { kb: n, setInspect: r, inspect: s } = j(), a = n.claim.get(e);
  if (!a) return null;
  const o = n.entity.get(a.entity), l = s?.kind === "claim" && s.id === e;
  return /* @__PURE__ */ i("li", { class: `imw-claim${l ? " is-on" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-claim-btn", onClick: () => r({ kind: "claim", id: e }), "aria-label": `View evidence: ${a.text}`, children: [
      /* @__PURE__ */ i(Pe, { cls: pt(a) }),
      /* @__PURE__ */ i("span", { class: "imw-claim-text", children: a.text })
    ] }),
    !t && /* @__PURE__ */ i("div", { class: "imw-claim-meta", children: [
      /* @__PURE__ */ i("span", { children: o?.short }),
      /* @__PURE__ */ i("span", { class: `imw-st ${pt(a)}`, children: nn(a) }),
      a.code?.length ? /* @__PURE__ */ i("a", { href: a.code[0].url, target: "_blank", rel: "noopener", class: "imw-mini-link", children: "Code ↗" }) : null,
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r({ kind: "claim", id: e }), children: "Evidence" })
    ] })
  ] });
}
function re({ ids: e, title: t, compact: n }) {
  return e.length ? /* @__PURE__ */ i("div", { class: "imw-claims", children: [
    t && /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: t }),
    /* @__PURE__ */ i("ul", { children: e.map((r) => /* @__PURE__ */ i(Es, { id: r, compact: n }, r)) })
  ] }) : null;
}
function st({ a: e }) {
  const { go: t, jump: n, ask: r, toggleLens: s, coverage: a, kb: o } = j();
  if (e.kind === "url") {
    const m = e.target.startsWith("mailto:") || e.target.includes("linkedin");
    return /* @__PURE__ */ i("a", { class: "imw-btn", href: e.target, target: e.target.startsWith("mailto:") ? void 0 : "_blank", rel: "noopener", onClick: () => m && Q("contact_clicked_from_ai"), children: [
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
function qs({ id: e }) {
  const { kb: t, setInspect: n } = j(), r = t.entity.get(e);
  return r ? /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n({ kind: "entity", id: e }), children: r.short }) : null;
}
const Ye = ["direct", "related", "verification", "missing"], Ss = { direct: "direct", related: "related", verification: "to verify", missing: "not shown" };
function yt({ counts: e, compact: t }) {
  const n = Ye.reduce((r, s) => r + e[s], 0) || 1;
  return /* @__PURE__ */ i("div", { class: `imw-covbar${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-covbar-track", role: "img", "aria-label": Ye.map((r) => `${e[r]} ${X[r]}`).join(", "), children: Ye.filter((r) => e[r]).map((r) => /* @__PURE__ */ i("span", { class: `imw-covbar-seg ${Ee[r]}`, style: { flexGrow: e[r] / n }, title: `${e[r]} · ${X[r]}` }, r)) }),
    /* @__PURE__ */ i("ul", { class: "imw-covbar-legend", children: Ye.map((r) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${Ee[r]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("b", { children: e[r] }),
      " ",
      t ? Ss[r] : X[r]
    ] }, r)) })
  ] });
}
function sn({ analysis: e, max: t = 16 }) {
  const { kb: n, setInspect: r } = j(), [s, a] = q(null), o = e.requirements.slice(0, t), l = e.entities.slice(0, 7).map((_) => _.id), m = 26, c = 18, u = 640, f = c * 2 + Math.max(o.length, l.length) * m, h = (_) => c + (_ + 0.5) * m * (Math.max(o.length, l.length) / Math.max(l.length, 1)), g = (_) => c + (_ + 0.5) * m, y = 232, p = 408, w = o.flatMap(
    (_, b) => _.category === "direct" || _.category === "related" ? _.entities.filter((d) => l.includes(d)).slice(0, 3).map((d) => ({ r: _.id, e: d, cat: _.category, y1: g(b), y2: h(l.indexOf(d)) })) : []
  ), v = (_, b) => !s || s === _ || s === b, k = !Ce();
  return /* @__PURE__ */ i("figure", { class: "imw-map", children: [
    /* @__PURE__ */ i("svg", { viewBox: `0 0 ${u} ${f}`, role: "group", "aria-label": "Requirement to evidence map", class: k ? "is-anim" : "", children: [
      w.map((_, b) => /* @__PURE__ */ i(
        "path",
        {
          d: `M${y},${_.y1} C${y + 90},${_.y1} ${p - 90},${_.y2} ${p},${_.y2}`,
          class: `imw-link ${_.cat === "direct" ? "is-direct" : "is-related"}${v(_.r, _.e) ? " is-lit" : " is-dim"}`,
          style: { animationDelay: `${Math.min(b * 25, 700)}ms` }
        },
        b
      )),
      o.map((_, b) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-req ${Ee[_.category]}${s && s !== _.id ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${_.label}: ${X[_.category]}`,
          onMouseEnter: () => a(_.id),
          onMouseLeave: () => a(null),
          onFocus: () => a(_.id),
          onBlur: () => a(null),
          onClick: () => r({ kind: "req", req: _ }),
          onKeyDown: (d) => (d.key === "Enter" || d.key === " ") && (d.preventDefault(), r({ kind: "req", req: _ })),
          children: [
            /* @__PURE__ */ i("rect", { x: 0, y: g(b) - m / 2, width: y + 6, height: m, class: "imw-hit" }),
            /* @__PURE__ */ i("text", { x: y - 12, y: g(b) + 4, "text-anchor": "end", children: Ms(_.label, 30) }),
            /* @__PURE__ */ i("circle", { cx: y, cy: g(b), r: 4.5 })
          ]
        },
        _.id
      )),
      l.map((_, b) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-ent${s && s !== _ && !w.some((d) => d.e === _ && d.r === s) ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": n.entity.get(_)?.name,
          onMouseEnter: () => a(_),
          onMouseLeave: () => a(null),
          onFocus: () => a(_),
          onBlur: () => a(null),
          onClick: () => r({ kind: "entity", id: _ }),
          onKeyDown: (d) => (d.key === "Enter" || d.key === " ") && (d.preventDefault(), r({ kind: "entity", id: _ })),
          children: [
            /* @__PURE__ */ i("rect", { x: p - 6, y: h(b) - m / 2, width: u - p + 6, height: m, class: "imw-hit" }),
            /* @__PURE__ */ i("circle", { cx: p, cy: h(b), r: 5.5 }),
            /* @__PURE__ */ i("text", { x: p + 14, y: h(b) + 4, children: n.entity.get(_)?.short })
          ]
        },
        _
      ))
    ] }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Solid lines: direct evidence. Dashed: related evidence. Hollow markers have no supporting evidence.",
      e.requirements.length > t ? ` Showing ${t} of ${e.requirements.length} requirements; the full list is below.` : ""
    ] })
  ] });
}
const Ms = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e, $i = [
  { key: "precision", label: "Precision", cls: "viz-1" },
  { key: "recall", label: "Recall", cls: "viz-2" },
  { key: "f1", label: "F1", cls: "viz-3" }
];
function rn() {
  const { kb: e } = j(), t = e.datasets.cliniq_confusion, [n, r] = q(null), [s, a] = q(!1), o = he(() => t.methods.map((w) => {
    const v = w.tp / (w.tp + w.fp), k = w.tp / (w.tp + w.fn);
    return { ...w, precision: v, recall: k, f1: 2 * v * k / (v + k) };
  }), [t]), l = 560, m = 230, c = 36, u = 30, f = 12, h = (l - c - 12) / o.length, g = 22, y = 2, p = (w) => f + (1 - w) * (m - f - u);
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
      /* @__PURE__ */ i("tbody", { children: o.map((w) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: w.label }),
        /* @__PURE__ */ i("td", { children: w.precision.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: w.recall.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: w.f1.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: w.tp }),
        /* @__PURE__ */ i("td", { children: w.fp }),
        /* @__PURE__ */ i("td", { children: w.fn }),
        /* @__PURE__ */ i("td", { children: w.tn })
      ] }, w.id)) })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => r(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${l} ${m}`, role: "img", "aria-label": "Precision, recall and F1 for rules, embedding and LLM plus RAG detectors", children: [
        [0, 0.25, 0.5, 0.75, 1].map((w) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: c, x2: l - 8, y1: p(w), y2: p(w) }),
          /* @__PURE__ */ i("text", { x: c - 6, y: p(w) + 4, "text-anchor": "end", children: w.toFixed(2) })
        ] }, w)),
        o.map((w, v) => {
          const k = c + v * h + (h - (g * 3 + y * 2)) / 2;
          return /* @__PURE__ */ i("g", { children: [
            $i.map((_, b) => {
              const d = w[_.key], x = k + b * (g + y);
              return /* @__PURE__ */ i(
                "path",
                {
                  class: `imw-bar ${_.cls}`,
                  d: As(x, p(d), g, p(0) - p(d)),
                  onMouseEnter: () => r({ x: (x + g / 2) / l, y: p(d) / m, text: `${w.label} · ${_.label} ${d.toFixed(3)}` })
                },
                _.key
              );
            }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: c + v * h + h / 2, y: m - 10, "text-anchor": "middle", children: w.label })
          ] }, w.id);
        })
      ] }),
      n && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: `${n.x * 100}%`, top: `${n.y * 100}%` }, children: n.text })
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: $i.map((w) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-swatch ${w.cls}`, "aria-hidden": "true" }),
      w.label
    ] }, w.key)) }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. ",
      t.caveat
    ] })
  ] });
}
function As(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return r <= 0 ? "" : `M${e},${t + r} V${t + s} Q${e},${t} ${e + s},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r} Z`;
}
function Yt() {
  const { kb: e } = j(), t = e.datasets.voice_quality, n = [...t.rows].sort((h, g) => g[3] - h[3]), [r, s] = q(null), a = 560, o = 20, l = 150, m = 40, c = n.length * o + 24, u = (h) => l + h / 60 * (a - l - m), f = n.reduce((h, g) => h + g[3], 0) / n.length;
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: /* @__PURE__ */ i("strong", { children: "Mid-call silence per recorded call (%)" }) }),
    /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => s(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${a} ${c}`, role: "img", "aria-label": `Mid-call silence per call; average ${f.toFixed(1)} percent`, children: [
        [0, 20, 40, 60].map((h) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: u(h), x2: u(h), y1: 0, y2: c - 18 }),
          /* @__PURE__ */ i("text", { x: u(h), y: c - 4, "text-anchor": "middle", children: h })
        ] }, h)),
        n.map((h, g) => {
          const y = g * o + 3;
          return /* @__PURE__ */ i("g", { onMouseEnter: () => s({ y: (y + o / 2) / c, text: `${h[0]} · silence ${h[3]}% · talk-over ${h[2]}% · longest gap ${h[4]}s` }), children: [
            /* @__PURE__ */ i("rect", { class: "imw-hit", x: 0, y: y - 2, width: a, height: o }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: l - 8, y: y + 11, "text-anchor": "end", children: h[0].replace(/_/g, " ") }),
            /* @__PURE__ */ i("path", { class: "imw-bar viz-1", d: js(l, y + 2, u(h[3]) - l, o - 8) })
          ] }, h[0]);
        }),
        /* @__PURE__ */ i("line", { class: "imw-ref", x1: u(f), x2: u(f), y1: 0, y2: c - 18 }),
        /* @__PURE__ */ i("text", { class: "imw-ref-label", x: u(f) + 4, y: 10, children: [
          "avg ",
          f.toFixed(1),
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
function js(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return n <= 0 ? "" : `M${e},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r - s} Q${e + n},${t + r} ${e + n - s},${t + r} H${e} Z`;
}
const qt = 198, Xe = 96, Oe = 174, _e = 56, Ie = 28, Ci = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e;
function an({ arch: e, selected: t, onSelect: n, scan: r = !0 }) {
  const s = ge(null), [a, o] = q(!1), [l, m] = q(!1);
  Tn(() => {
    const p = s.current;
    if (!p) return;
    const w = new ResizeObserver(([v]) => o(v.contentRect.width < 560));
    return w.observe(p), () => w.disconnect();
  }, []), z(() => {
    if (!r || Ce()) return;
    m(!0);
    const p = setTimeout(() => m(!1), 1300);
    return () => clearTimeout(p);
  }, [e.id, r]);
  const c = Math.max(...e.nodes.map((p) => p.col)) + 1, u = Math.max(...e.nodes.map((p) => p.row)) + 1, f = Ie * 2 + c * qt - (qt - Oe), h = Ie * 2 + u * Xe - (Xe - _e) + (e.lanes.length ? 14 : 0), g = (p) => {
    const w = e.nodes.find((v) => v.id === p);
    return { x: Ie + w.col * qt, y: Ie + (e.lanes.length ? 14 : 0) + w.row * Xe };
  }, y = (p, w) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n(w));
  };
  if (a) {
    const p = new Map(e.nodes.map((_) => [_.id, 0]));
    e.edges.forEach(([, _]) => p.set(_, (p.get(_) ?? 0) + 1));
    const w = (_, b) => _.col - b.col || _.row - b.row, v = e.nodes.filter((_) => !p.get(_.id)).sort(w), k = [];
    for (; v.length; ) {
      const _ = v.shift();
      k.push(_);
      const b = e.edges.filter(([d]) => d === _.id).map(([, d]) => d).filter((d) => (p.set(d, p.get(d) - 1), p.get(d) === 0)).map((d) => e.nodes.find((x) => x.id === d)).sort(w);
      v.unshift(...b);
    }
    return e.nodes.forEach((_) => {
      k.includes(_) || k.push(_);
    }), /* @__PURE__ */ i("div", { ref: s, class: "imw-arch-stack", children: k.map((_, b) => /* @__PURE__ */ i("div", { class: "imw-arch-step", children: [
      b > 0 && /* @__PURE__ */ i("span", { class: "imw-arch-arrow", "aria-hidden": "true", children: "↓" }),
      /* @__PURE__ */ i("button", { class: `imw-arch-card${t === _.id ? " is-on" : ""}`, onClick: () => n(_.id), "aria-pressed": t === _.id, children: [
        /* @__PURE__ */ i("strong", { children: _.label }),
        /* @__PURE__ */ i("small", { children: _.sub })
      ] })
    ] }, _.id)) });
  }
  return /* @__PURE__ */ i("div", { ref: s, class: `imw-arch${l ? " is-scanning" : ""}`, children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${f} ${h}`, role: "group", "aria-label": `${e.title} architecture`, children: [
    /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("marker", { id: `ah-${e.id}`, viewBox: "0 0 8 8", refX: "7", refY: "4", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse", children: /* @__PURE__ */ i("path", { d: "M0,0 L8,4 L0,8 z", class: "imw-arrowhead" }) }) }),
    e.lanes.map((p) => /* @__PURE__ */ i("text", { class: "imw-lane", x: Ie, y: Ie + p.row * Xe + 6, children: p.label.toUpperCase() }, p.row)),
    e.edges.map(([p, w]) => {
      const v = g(p), k = g(w);
      let _;
      if (k.x > v.x) {
        const d = v.x + Oe, x = v.y + _e / 2, C = k.x - 4, E = k.y + _e / 2, M = (d + C) / 2;
        _ = `M${d},${x} C${M},${x} ${M},${E} ${C},${E}`;
      } else if (k.x < v.x) {
        const d = v.x, x = v.y + _e / 2, C = k.x + Oe + 4, E = k.y + _e / 2, M = (d + C) / 2;
        _ = `M${d},${x} C${M},${x} ${M},${E} ${C},${E}`;
      } else {
        const d = k.y > v.y, x = v.x + Oe / 2, C = d ? v.y + _e : v.y, E = d ? k.y - 4 : k.y + _e + 4;
        _ = `M${x},${C} L${x},${E}`;
      }
      return /* @__PURE__ */ i("path", { d: _, class: `imw-edge${t === p || t === w ? " is-on" : ""}`, "marker-end": `url(#ah-${e.id})` }, p + w);
    }),
    e.nodes.map((p) => {
      const w = g(p.id);
      return /* @__PURE__ */ i(
        "g",
        {
          class: `imw-node${t === p.id ? " is-on" : ""}`,
          transform: `translate(${w.x},${w.y})`,
          tabIndex: 0,
          role: "button",
          "aria-pressed": t === p.id,
          "aria-label": `${p.label}. ${p.sub}`,
          style: { animationDelay: `${p.col * 120}ms` },
          onClick: () => n(p.id),
          onKeyDown: (v) => y(v, p.id),
          children: [
            /* @__PURE__ */ i("rect", { width: Oe, height: _e, rx: 4 }),
            /* @__PURE__ */ i("text", { x: 12, y: 24, class: "imw-node-label", children: Ci(p.label, 22) }),
            /* @__PURE__ */ i("text", { x: 12, y: 42, class: "imw-node-sub", children: Ci(p.sub, 25) })
          ]
        },
        p.id
      );
    }),
    l && /* @__PURE__ */ i("rect", { class: "imw-scan", x: 0, y: 0, width: 3, height: h })
  ] }) });
}
const on = (e) => {
  const t = new URL(["..", "..", "evidence", "dist", e].join("/"), import.meta.url), n = new URL(import.meta.url).searchParams.get("v");
  return n && t.searchParams.set("v", n), t.href;
};
function ln({ id: e, compact: t }) {
  const { kb: n, go: r } = j(), s = n.traces.find((f) => f.id === e), [a, o] = q(t ? 0 : 1 / 0), l = ge();
  if (z(() => () => clearInterval(l.current), []), !s) return null;
  if (s.dataset === "dia_regression") return /* @__PURE__ */ i(Is, {});
  const m = t ? s.steps.slice(0, 4) : s.steps, c = () => {
    if (Q("replay_played", { trace: s.id }), Ce()) {
      o(1 / 0);
      return;
    }
    o(0), clearInterval(l.current);
    let f = 0;
    l.current = window.setInterval(() => {
      f++, o(f), f >= m.length && clearInterval(l.current);
    }, 520);
  }, u = a === 1 / 0 ? m.length : a;
  return /* @__PURE__ */ i("figure", { class: `imw-trace${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: s.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: c, "aria-label": `Replay ${s.title}`, children: "▶ Replay" }),
        t && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("lab", s.id), children: "Open in proof lab →" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: s.summary }),
    /* @__PURE__ */ i("ol", { class: "imw-steps", "aria-live": "polite", children: m.map((f, h) => /* @__PURE__ */ i("li", { class: `imw-step is-${f.kind}${h < u ? " is-shown" : ""}`, "aria-hidden": h >= u, children: [
      /* @__PURE__ */ i("span", { class: "imw-step-kind", children: f.label }),
      f.quote ? /* @__PURE__ */ i("q", { children: f.quote }) : /* @__PURE__ */ i("span", { children: f.body }),
      f.status && /* @__PURE__ */ i("span", { class: `imw-verdict is-${f.status}`, children: f.status === "pass" ? "✓ PASS" : f.status === "fail" ? "✕ FAIL" : "! REVIEW" })
    ] }, h)) }),
    t && s.steps.length > m.length && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      s.steps.length - m.length,
      " more steps in the full replay."
    ] })
  ] });
}
function Is() {
  const { kb: e } = j(), t = e.datasets.dia_regression, [n, r] = q(t.rows.length), s = ge();
  z(() => () => clearInterval(s.current), []);
  const a = () => {
    if (Q("replay_played", { trace: "t.dia.regression" }), Ce()) {
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
      /* @__PURE__ */ i("tbody", { children: t.rows.map((l, m) => /* @__PURE__ */ i("tr", { class: m < n ? "is-done" : "is-wait", children: [
        /* @__PURE__ */ i("th", { scope: "row", children: l[0] }),
        /* @__PURE__ */ i("td", { children: l[1] }),
        /* @__PURE__ */ i("td", { children: m < n ? l[2] : "…" }),
        /* @__PURE__ */ i("td", { children: l[3] }),
        /* @__PURE__ */ i("td", { children: l[4].toFixed(2) }),
        /* @__PURE__ */ i("td", { children: m < n ? l[1] === l[2] ? /* @__PURE__ */ i("span", { class: "imw-verdict is-pass", children: "✓" }) : /* @__PURE__ */ i("span", { class: "imw-verdict is-fail", children: "✕" }) : "" })
      ] }, l[0])) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      t.caveat,
      " The final LLM explanation is excluded; this is not a clinical validation."
    ] })
  ] });
}
function cn({ id: e }) {
  const { kb: t, go: n } = j(), r = t.attacks.find((l) => l.id === e), [s, a] = q(!1);
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
function Ts(e, t, n, r, s, a, o) {
  const l = e / (e + n), m = t / (t + r), c = s * a * l, u = s * (1 - a) * m, f = c + u;
  return { trueAlerts: c, falseAlerts: u, missed: s * a * (1 - l), reviews: f, hours: f * o / 60, precision: f ? c / f : null };
}
function Rs() {
  const { kb: e } = j(), t = e.datasets.cliniq_confusion, [n, r] = q(1e4), [s, a] = q(5), [o, l] = q(3), m = he(() => t.methods.map((f) => ({ m: f, r: Ts(f.tp, f.fp, f.fn, f.tn, n, s / 100, o) })), [t, n, s, o]), c = Math.max(...m.map((f) => f.r.hours), 1), u = (f) => f.toLocaleString(void 0, { maximumFractionDigits: 0 });
  return /* @__PURE__ */ i("div", { class: "imw-workload", children: [
    /* @__PURE__ */ i("div", { class: "imw-sliders", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Reviews per month ",
          /* @__PURE__ */ i("b", { children: u(n) })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1e3, max: 1e5, step: 1e3, value: n, onInput: (f) => r(+f.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Prevalence of true signals ",
          /* @__PURE__ */ i("b", { children: [
            s,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 30, step: 1, value: s, onInput: (f) => a(+f.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Minutes per human review ",
          /* @__PURE__ */ i("b", { children: o })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 15, step: 1, value: o, onInput: (f) => l(+f.target.value) })
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
      /* @__PURE__ */ i("tbody", { children: m.map(({ m: f, r: h }) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { scope: "row", children: f.label }),
        /* @__PURE__ */ i("td", { children: u(h.reviews) }),
        /* @__PURE__ */ i("td", { children: u(h.trueAlerts) }),
        /* @__PURE__ */ i("td", { children: u(h.missed) }),
        /* @__PURE__ */ i("td", { children: h.precision === null ? "—" : h.precision.toFixed(2) }),
        /* @__PURE__ */ i("td", { class: "imw-barcell", children: [
          /* @__PURE__ */ i("span", { class: "imw-inline-bar viz-2", style: { width: `${h.hours / c * 100}%` }, "aria-hidden": "true" }),
          /* @__PURE__ */ i("b", { children: u(h.hours) })
        ] })
      ] }, f.id)) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Same formula as ClinIQ's ",
      /* @__PURE__ */ i("code", { children: "estimate_workload()" }),
      ", fed the saved confusion counts. At low prevalence, the embedding detector's false positives dominate reviewer time. ",
      t.caveat
    ] }),
    /* @__PURE__ */ i(re, { ids: ["cliniq.workload"], compact: !0 })
  ] });
}
function Ps() {
  const [e, t] = q(null);
  if (z(() => {
    fetch(on("evaluation-report.json")).then((s) => s.ok ? s.json() : null).then(t).catch(() => t(null));
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
function Ls() {
  const { kb: e, modeArg: t } = j(), n = e.traces.find((o) => o.id === t)?.id ?? "t.voice.emergency", [r, s] = q(n);
  z(() => {
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
      /* @__PURE__ */ i(ln, { id: r }, r)
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Try to break it" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Adversarial and edge cases, what the system did, and the test that keeps it that way." }),
      /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: a.map((o) => /* @__PURE__ */ i(cn, { id: o.id }, o.id)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Run the numbers · ClinIQ review workload" }),
      /* @__PURE__ */ i(Rs, {})
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Measured from the audio · Voice QA Harness" }),
      /* @__PURE__ */ i(Yt, {})
    ] }),
    /* @__PURE__ */ i(Ps, {})
  ] });
}
function Ws({ a: e }) {
  const { setInspect: t, ask: n } = j();
  return /* @__PURE__ */ i("div", { class: "imw-answer", children: [
    /* @__PURE__ */ i("div", { class: "imw-answer-head", children: [
      /* @__PURE__ */ i("span", { class: `imw-engine is-${e.engine}`, children: e.engine === "model" ? "Claude · validated" : "Evidence engine" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => t({ kind: "basis", retrieved: e.basis?.retrieved ?? [], checks: e.basis?.checks, model: e.basis?.model, engine: e.engine }), children: "Why this answer?" }),
      e.refined && /* @__PURE__ */ i("span", { class: "imw-help", children: "Requirements refined by AI parsing" })
    ] }),
    e.blocks.map((r, s) => /* @__PURE__ */ i(Ds, { b: r }, s)),
    e.actions.length > 0 && /* @__PURE__ */ i("div", { class: "imw-actions", children: e.actions.map((r, s) => /* @__PURE__ */ i(st, { a: r }, s)) }),
    e.followups.length > 0 && /* @__PURE__ */ i("div", { class: "imw-followups", "aria-label": "Suggested follow-up questions", children: e.followups.map((r) => /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n(r), children: r }, r)) })
  ] });
}
function Ds({ b: e }) {
  const t = j(), { kb: n, setInspect: r, go: s } = t;
  switch (e.type) {
    case "p":
      return /* @__PURE__ */ i("p", { class: "imw-p", children: [
        e.text,
        e.cites?.map((a, o) => /* @__PURE__ */ i("button", { class: "imw-cite", onClick: () => r({ kind: "claim", id: a }), "aria-label": `Evidence ${o + 1}: ${n.claim.get(a)?.text ?? a}`, children: o + 1 }, a))
      ] });
    case "note":
      return /* @__PURE__ */ i("p", { class: `imw-note${e.tone === "warn" ? " is-warn" : ""}`, children: e.text });
    case "claims":
      return /* @__PURE__ */ i(re, { ids: e.ids, title: e.title });
    case "entity": {
      const a = n.entity.get(e.id);
      return a ? /* @__PURE__ */ i("div", { class: "imw-entity", children: [
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: [
          a.kind,
          " · ",
          a.dates
        ] }),
        /* @__PURE__ */ i("h3", { children: a.name }),
        /* @__PURE__ */ i("p", { class: "imw-help", children: a.role ?? a.tagline })
      ] }) : null;
    }
    case "coverage":
      return /* @__PURE__ */ i("div", { class: "imw-coverage-inline", children: [
        /* @__PURE__ */ i(yt, { counts: e.analysis.counts }),
        /* @__PURE__ */ i(sn, { analysis: e.analysis, max: 12 }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
          t.setCoverage(e.analysis), s("role");
        }, children: "Open the full analysis →" })
      ] });
    case "xray": {
      const a = n.architectures.find((o) => o.id === e.arch);
      return a ? /* @__PURE__ */ i("div", { class: "imw-xray-inline", children: [
        /* @__PURE__ */ i(an, { arch: a, scan: !1, onSelect: (o) => r({ kind: "node", arch: a.id, node: o }) }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => s("xray", a.entity), children: "Open X-Ray view →" })
      ] }) : null;
    }
    case "failures":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((a) => /* @__PURE__ */ i(Xt, { id: a }, a)) });
    case "decisions":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((a) => /* @__PURE__ */ i(Zt, { id: a }, a)) });
    case "compare":
      return /* @__PURE__ */ i("div", { class: "imw-table-wrap", children: /* @__PURE__ */ i("table", { class: "imw-table imw-compare", children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "col", children: /* @__PURE__ */ i("span", { class: "sr-only", children: "Field" }) }),
          e.entities.map((a) => /* @__PURE__ */ i("th", { scope: "col", children: n.entity.get(a)?.short }, a))
        ] }) }),
        /* @__PURE__ */ i("tbody", { children: e.rows.map((a) => /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "row", children: a.label }),
          a.values.map((o, l) => /* @__PURE__ */ i("td", { children: o }, l))
        ] }, a.label)) })
      ] }) });
    case "gaps":
      return /* @__PURE__ */ i("ul", { class: "imw-gaps", children: e.items.map((a) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-cat cat-missing", children: X.missing }),
        /* @__PURE__ */ i("strong", { children: a.name }),
        /* @__PURE__ */ i("p", { children: a.statement }),
        a.closest.length > 0 && /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("span", { class: "imw-help", children: "Closest:" }),
          a.closest.map((o) => /* @__PURE__ */ i(qs, { id: o }, o))
        ] })
      ] }, a.id)) });
    case "chart":
      return e.chart === "cliniq" ? /* @__PURE__ */ i(rn, {}) : /* @__PURE__ */ i(Yt, {});
    case "trace":
      return /* @__PURE__ */ i(ln, { id: e.id, compact: !0 });
  }
}
function Xt({ id: e, open: t = !1 }) {
  const { kb: n } = j(), r = n.failures.find((l) => l.id === e), [s, a] = q(t);
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
      /* @__PURE__ */ i("ol", { class: "imw-flow", children: o.map(([l, m]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: l }),
        /* @__PURE__ */ i("span", { children: m })
      ] }, l)) }),
      /* @__PURE__ */ i(We, { refs: r.code }),
      /* @__PURE__ */ i(re, { ids: r.claims, title: "Evidence", compact: !0 })
    ] })
  ] });
}
function Zt({ id: e }) {
  const { kb: t } = j(), n = t.decisions.find((r) => r.id === e);
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
function Fs({ analysis: e }) {
  const { kb: t, setInspect: n } = j();
  return /* @__PURE__ */ i("div", { class: "imw-reqgroups", children: ["direct", "related", "verification", "missing"].map((s) => {
    const a = e.requirements.filter((o) => o.category === s);
    return a.length ? /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i("h4", { class: `imw-cat ${Ee[s]}`, children: [
        X[s],
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
const Ns = [
  { q: "What has Rahul actually shipped?" },
  { q: "Show me his strongest RAG work." },
  { q: "How does he evaluate AI systems?" },
  { q: "What has he built beyond LLM wrappers?" },
  { q: "Show me his backend engineering experience." },
  { q: "What failure did he find and fix?" },
  { q: "Evaluate Rahul for a role", mode: "role" },
  { q: "Paste a job description", mode: "jd" }
];
function Os({ turns: e }) {
  const { kb: t, ask: n, go: r, persona: s, setPersona: a } = j(), [o, l] = q(""), m = ge(null), c = ge(null), u = e[e.length - 1];
  z(() => {
    c.current?.querySelector(".imw-turn:last-child")?.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [e.length, u?.pending]);
  const f = () => {
    const y = o.trim();
    y && (l(""), n(y));
  }, h = Kt(o), g = t.claims.reduce((y, p) => y + (D(p) ? p.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-ask", children: [
    /* @__PURE__ */ i("div", { class: "imw-log", ref: c, children: [
      e.length === 0 && /* @__PURE__ */ i("div", { class: "imw-welcome", children: [
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "✦ Interview My Work" }),
        /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Ask about my projects, engineering decisions, experience, or how my background maps to a role." }),
        /* @__PURE__ */ i("p", { class: "imw-lead", children: "Don't just read my résumé. Inspect the evidence behind the work: every answer links to its source, measured result and code." }),
        /* @__PURE__ */ i("dl", { class: "imw-stats is-inline", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: t.claims.filter(D).length }),
            /* @__PURE__ */ i("dd", { children: "verified claims" })
          ] }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: g }),
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
        /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Who is asking", children: t.personas.map((y) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": s === y.id, class: s === y.id ? "is-on" : "", onClick: () => a(y.id), children: y.label }, y.id)) }),
        /* @__PURE__ */ i("p", { class: "imw-help", children: [
          "Prefer your own assistant? ",
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("connect"), children: "Connect Claude, Cursor or VS Code to this evidence →" })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Start with" }),
        /* @__PURE__ */ i("div", { class: "imw-starters", children: Ns.map((y, p) => /* @__PURE__ */ i("button", { onClick: () => {
          Q("starter_question_selected", { index: p }), y.mode ? r("role", y.mode === "jd" ? "jd" : void 0) : n(y.q);
        }, children: [
          /* @__PURE__ */ i("span", { class: "imw-starter-n", children: String(p + 1).padStart(2, "0") }),
          /* @__PURE__ */ i("span", { children: y.q })
        ] }, y.q)) })
      ] }),
      e.map((y) => /* @__PURE__ */ i("section", { class: "imw-turn", "aria-label": `Question: ${y.q}`, children: [
        /* @__PURE__ */ i("p", { class: "imw-q", children: [
          /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "You asked" }),
          y.q
        ] }),
        y.pending && /* @__PURE__ */ i("div", { class: "imw-pending", role: "status", children: [
          /* @__PURE__ */ i("span", { class: "imw-pulse", "aria-hidden": "true" }),
          "Retrieving evidence and validating the answer…"
        ] }),
        y.a && /* @__PURE__ */ i(Ws, { a: y.a })
      ] }, y.id)),
      e.some((y) => y.a) && !u?.pending && /* @__PURE__ */ i("p", { class: "imw-keep", children: [
        "Want to keep this? ",
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("export"), children: "Download your questions and answers as a PDF →" })
      ] })
    ] }),
    /* @__PURE__ */ i("form", { class: "imw-composer", onSubmit: (y) => {
      y.preventDefault(), f();
    }, children: [
      h && /* @__PURE__ */ i("p", { class: "imw-jd-hint", children: "This looks like a job description. Sending it runs an evidence-coverage analysis." }),
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-q", children: "Ask a question or paste a job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-q",
          ref: m,
          rows: 1,
          value: o,
          placeholder: "Ask a question, or paste a job description…",
          maxLength: 12e3,
          onInput: (y) => {
            const p = y.target;
            l(p.value), p.style.height = "auto", p.style.height = `${Math.min(p.scrollHeight, 180)}px`;
          },
          onKeyDown: (y) => {
            y.key === "Enter" && !y.shiftKey && (y.preventDefault(), f());
          }
        }
      ),
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-send", disabled: !o.trim(), children: h ? "Analyze" : "Ask" })
    ] })
  ] });
}
function Bs(e) {
  const t = location.origin + location.pathname;
  if (e.source === "role" && e.roleId) return `${t}#imw=role:${e.roleId}`;
  const n = e.requirements.map((r) => r.id).filter((r) => !r.startsWith("term:")).join(",");
  return `${t}#imw=role:${encodeURIComponent(`jd~${n}`)}`;
}
function Hs(e, t) {
  const n = [`# Evidence coverage: ${e.title}`, `Candidate: ${t}`, ""];
  for (const r of ["direct", "related", "verification", "missing"]) {
    const s = e.requirements.filter((a) => a.category === r);
    s.length && (n.push(`## ${X[r]} (${s.length})`), s.forEach((a) => n.push(`- ${a.label}${a.statement && r !== "direct" ? ` — ${a.statement}` : ""}`)), n.push(""));
  }
  return e.notes.length && n.push(...e.notes.map((r) => `> ${r}`), ""), n.push("Generated by Interview My Work from verified evidence. No fit score is computed."), n.join(`
`);
}
function zs() {
  const { kb: e, coverage: t, setCoverage: n, modeArg: r, api: s, toggleLens: a, ask: o, go: l } = j(), [m, c] = q(r === "jd" ? "jd" : "role"), [u, f] = q(""), [h, g] = q(!1), [y, p] = q("");
  z(() => {
    if (!r) return;
    if (r === "jd") {
      c("jd");
      return;
    }
    const d = decodeURIComponent(r);
    if (e.role.has(d)) n($e(e, d));
    else if (d.startsWith("jd~")) {
      const C = d.slice(3).split(",").filter(Boolean).map((E) => E.startsWith("near:") ? de(e, e.skills.find((M) => M.near?.includes(E.slice(5)))?.id ?? E, { near: E.slice(5) }) : de(e, E));
      n(Gt(e, "Shared job description", C, { source: "jd" }));
    }
  }, [r]);
  const w = (d) => {
    d && (n($e(e, d)), Q("role_selected", { role: d }));
  }, v = () => {
    if (u.trim().length < 40) return;
    const d = ct(e, u);
    n(d), Q("jd_analyzed", { requirements: d.requirements.length }), s === "ready" && (g(!0), en(u).then((x) => {
      x.length && n(ct(e, u, x), d);
    }).catch(() => {
    }).finally(() => g(!1)));
  }, k = async (d) => {
    if (t)
      try {
        await navigator.clipboard.writeText(d === "link" ? Bs(t) : Hs(t, e.subject.name)), p(d), setTimeout(() => p(""), 2e3);
      } catch {
      }
  }, _ = e.roles.filter((d) => d.priority).sort((d, x) => d.priority - x.priority), b = [["strong", "Strong fit"], ["adjacent", "Adjacent"], ["stretch", "Stretch"]];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Evaluate against a role" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "What are you evaluating Rahul for?" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Each requirement is classified as direct evidence, related evidence, verification required, or not currently demonstrated. There is no match percentage." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg", role: "tablist", "aria-label": "Input", children: [
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": m === "role", class: m === "role" ? "is-on" : "", onClick: () => c("role"), children: "Select a role" }),
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": m === "jd", class: m === "jd" ? "is-on" : "", onClick: () => c("jd"), children: "Paste a job description" })
    ] }),
    m === "role" ? /* @__PURE__ */ i("div", { class: "imw-rolepick", children: [
      /* @__PURE__ */ i("div", { class: "imw-role-cards", children: _.map((d) => /* @__PURE__ */ i("button", { class: t?.roleId === d.id && t.source === "role" ? "is-on" : "", onClick: () => w(d.id), children: [
        /* @__PURE__ */ i("strong", { children: d.title }),
        /* @__PURE__ */ i("small", { children: d.proof_note })
      ] }, d.id)) }),
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "More roles" }),
        /* @__PURE__ */ i("select", { onChange: (d) => w(d.target.value), value: t?.source === "role" ? t.roleId : "", children: [
          /* @__PURE__ */ i("option", { value: "", children: "Choose a role…" }),
          b.map(([d, x]) => /* @__PURE__ */ i("optgroup", { label: x, children: e.roles.filter((C) => C.tier === d && !C.priority).map((C) => /* @__PURE__ */ i("option", { value: C.id, children: C.title }, C.id)) }, d))
        ] })
      ] })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-jd", children: [
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-jd", children: "Job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-jd",
          rows: 8,
          value: u,
          maxLength: 12e3,
          placeholder: "Paste the full job description, including requirements and nice-to-haves.",
          onInput: (d) => f(d.target.value)
        }
      ),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: v, disabled: u.trim().length < 40, children: "Analyze coverage" }),
        /* @__PURE__ */ i("span", { class: "imw-help", children: s === "ready" ? "Parsed in your browser, then refined by the AI parser. The text is not stored." : "Parsed in your browser. Nothing is sent anywhere." })
      ] })
    ] }),
    t && /* @__PURE__ */ i("section", { class: "imw-analysis", "aria-live": "polite", children: [
      /* @__PURE__ */ i("div", { class: "imw-analysis-head", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: [
            "Evidence coverage",
            h ? " · refining with AI…" : ""
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
      /* @__PURE__ */ i(yt, { counts: t.counts }),
      t.notes.map((d) => /* @__PURE__ */ i("p", { class: "imw-note", children: d }, d)),
      /* @__PURE__ */ i(sn, { analysis: t, max: 18 }),
      /* @__PURE__ */ i(Fs, { analysis: t }),
      /* @__PURE__ */ i("div", { class: "imw-actions", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => o(t.roleId ? `Challenge the evidence for ${t.title}` : "Challenge this evidence"), children: "Challenge this evidence" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l("map", t.roleId), children: "View on the evidence map" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("link"), children: y === "link" ? "Link copied" : "Copy shareable link" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("md"), children: y === "md" ? "Summary copied" : "Copy summary" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l("export"), children: "Download PDF" })
      ] })
    ] })
  ] });
}
function Us() {
  const { kb: e, modeArg: t, setInspect: n, inspect: r, ask: s, noteEntity: a } = j(), o = e.architectures, [l, m] = q(o.find((d) => d.entity === t)?.id ?? o[0].id), c = o.find((d) => d.id === l), [u, f] = q("why");
  z(() => {
    const d = o.find((x) => x.entity === t);
    d && m(d.id);
  }, [t]), z(() => {
    a(c.entity);
  }, [c.entity]);
  const h = e.entity.get(c.entity), g = e.statableByEntity.get(c.entity) ?? [], y = e.decisions.filter((d) => d.entity === c.entity), p = e.failures.filter((d) => d.entity === c.entity), w = e.attacks.filter((d) => d.entity === c.entity), v = g.filter((d) => d.tags.some((x) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(x))), k = g.flatMap((d) => d.code ?? []), _ = r?.kind === "node" && r.arch === c.id ? r.node : void 0, b = [
    ["why", "Why this design?", y.length],
    ["failures", "Failure cases", p.length + g.filter((d) => d.kind === "limitation").length],
    ["break", "Try to break it", w.length],
    ["evaluation", "Evaluation", v.length],
    ["code", "Code", k.length],
    ["questions", "Interviewer questions", h.questions.length]
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
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "System", children: o.map((d) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": d.id === l, class: d.id === l ? "is-on" : "", onClick: () => {
      m(d.id), n(null);
    }, children: e.entity.get(d.entity)?.short }, d.id)) }),
    /* @__PURE__ */ i(an, { arch: c, selected: _, onSelect: (d) => n({ kind: "node", arch: c.id, node: d }) }),
    /* @__PURE__ */ i("div", { class: "imw-subtabs", role: "tablist", "aria-label": "Inspect", children: b.filter(([, , d]) => d > 0).map(([d, x, C]) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": u === d, class: u === d ? "is-on" : "", onClick: () => f(d), children: [
      x,
      " ",
      /* @__PURE__ */ i("small", { children: C })
    ] }, d)) }),
    /* @__PURE__ */ i("div", { class: "imw-tabpanel", role: "tabpanel", children: [
      u === "why" && /* @__PURE__ */ i("div", { class: "imw-stack", children: y.map((d) => /* @__PURE__ */ i(Zt, { id: d.id }, d.id)) }),
      u === "failures" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        p.map((d, x) => /* @__PURE__ */ i(Xt, { id: d.id, open: x === 0 }, d.id)),
        /* @__PURE__ */ i(re, { ids: g.filter((d) => d.kind === "limitation").map((d) => d.id), title: "Stated limitations" })
      ] }),
      u === "break" && /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: w.map((d) => /* @__PURE__ */ i(cn, { id: d.id }, d.id)) }),
      u === "evaluation" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i(re, { ids: v.map((d) => d.id) }),
        c.entity === "cliniq" && /* @__PURE__ */ i(rn, {}),
        c.entity === "voice" && /* @__PURE__ */ i(Yt, {})
      ] }),
      u === "code" && /* @__PURE__ */ i(We, { refs: k, max: 30 }),
      u === "questions" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i("p", { class: "imw-help", children: "Questions a skeptical interviewer could press on. Select one to see what the evidence says." }),
        h.questions.map((d) => /* @__PURE__ */ i("button", { class: "imw-question", onClick: () => s(d.includes(h.short) ? d : `${d} (${h.short})`), children: d }, d))
      ] })
    ] })
  ] });
}
const Vs = 1e3, Qs = 720, Y = 500, te = 360, Ft = 170, Nt = 305, Gs = /* @__PURE__ */ new Set(["project", "research", "experience", "leadership"]);
function Ks(e, t) {
  const n = e.groups, r = e.entities.filter((p) => Gs.has(p.kind)), s = new Map(e.skills.map((p) => [p.id, p.group])), a = /* @__PURE__ */ new Map();
  for (const p of e.claims.filter(D)) {
    const w = a.get(p.entity) ?? /* @__PURE__ */ new Map();
    new Set(p.tags.map((v) => s.get(v)).filter(Boolean)).forEach((v) => w.set(v, (w.get(v) ?? 0) + 1)), a.set(p.entity, w);
  }
  const o = new Map(n.map((p, w) => [p.id, -Math.PI / 2 + w / n.length * Math.PI * 2])), l = new Set(t?.requirements.filter((p) => p.category === "direct" || p.category === "related").map((p) => p.id) ?? []), m = new Map(n.map((p) => {
    if (!t) return [p.id, 1];
    const w = e.skills.filter((v) => v.group === p.id);
    return [p.id, w.filter((v) => l.has(v.id)).length / Math.max(1, Math.min(4, w.length))];
  })), c = Math.max(1, ...t?.entities.map((p) => p.score) ?? [1]), u = new Map(r.map((p) => [p.id, t ? (t.entities.find((w) => w.id === p.id)?.score ?? 0) / c : 1])), f = /* @__PURE__ */ new Map();
  for (const p of n) {
    const w = Math.min(1, m.get(p.id)), v = t ? Ft * (w > 0 ? 1 - 0.16 * w : 1.1) : Ft, k = o.get(p.id);
    f.set(p.id, { x: Y + v * Math.cos(k), y: te + v * Math.sin(k), o: t ? w > 0 ? 1 : 0.16 : 1 });
  }
  const h = r.map((p) => {
    const w = a.get(p.id) ?? /* @__PURE__ */ new Map();
    let v = 0, k = 0;
    return w.forEach((_, b) => {
      const d = o.get(b);
      v += _ * Math.cos(d), k += _ * Math.sin(d);
    }), { id: p.id, a: Math.atan2(k, v) };
  }).sort((p, w) => p.a - w.a), g = Math.PI * 2 / h.length * 0.8;
  for (let p = 0; p < 8; p++)
    for (let w = 0; w < h.length; w++) {
      const v = h[w], k = h[(w + 1) % h.length];
      let _ = k.a - v.a;
      if (w === h.length - 1 && (_ += Math.PI * 2), _ < g) {
        const b = (g - _) / 2;
        v.a -= b, k.a += b;
      }
    }
  const y = /* @__PURE__ */ new Map();
  for (const p of h) {
    const w = u.get(p.id), v = t ? Nt * (w > 0 ? 1 - 0.2 * w : 1.06) : Nt;
    y.set(p.id, { x: Y + v * Math.cos(p.a), y: te + v * Math.sin(p.a), o: t ? w > 0 ? 0.35 + 0.65 * w : 0.14 : 1 });
  }
  return { groups: n, ents: r, weight: a, gPos: f, ePos: y };
}
const Js = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
function Ys() {
  const { kb: e, modeArg: t, coverage: n, setInspect: r, go: s } = j(), [a, o] = q(t && e.role.has(t) ? t : ""), [l, m] = q(null), c = he(() => a === "__current" ? n : a ? $e(e, a) : null, [a, e, n]), u = he(() => Ks(e, c), [e, c]), [f, h] = q(() => new Map([...u.gPos, ...u.ePos].map(([b]) => [b, { x: Y, y: te, o: 0 }]))), g = ge(f);
  z(() => {
    const b = new Map([...u.gPos, ...u.ePos]);
    if (Ce()) {
      g.current = b, h(b);
      return;
    }
    const d = g.current, x = performance.now(), C = 850;
    let E = 0;
    const M = (O) => {
      const K = Js(Math.min(1, (O - x) / C)), ne = /* @__PURE__ */ new Map();
      b.forEach((ue, J) => {
        const pe = d.get(J) ?? { x: Y, y: te, o: 0 };
        ne.set(J, { x: pe.x + (ue.x - pe.x) * K, y: pe.y + (ue.y - pe.y) * K, o: pe.o + (ue.o - pe.o) * K });
      }), g.current = ne, h(ne), K < 1 && (E = requestAnimationFrame(M));
    };
    return E = requestAnimationFrame(M), () => cancelAnimationFrame(E);
  }, [u]);
  const y = (b) => f.get(b) ?? { x: Y, y: te, o: 0 }, p = Math.max(1, ...[...u.weight.values()].flatMap((b) => [...b.values()])), w = (b) => e.claims.filter((d) => D(d) && d.tags.some((x) => e.skill.get(x)?.group === b)).length, v = (b) => e.statableByEntity.get(b)?.length ?? 0, k = l ? e.skills.filter((b) => b.group === l).map((b, d, x) => {
    const C = y(l), E = Math.atan2(C.y - te, C.x - Y), M = Math.min(Math.PI * 0.9, x.length * 0.22), O = E - M / 2 + M * (d + 0.5) / x.length;
    return { s: b, cov: de(e, b.id), x: C.x + 92 * Math.cos(O), y: C.y + 92 * Math.sin(O) };
  }) : [], _ = e.roles.filter((b) => b.priority).sort((b, d) => b.priority - d.priority);
  return /* @__PURE__ */ i("div", { class: "imw-view is-map", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Explore my engineering" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Evidence map" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Capability areas (inner ring) connect to the projects and roles that evidence them (outer ring). Line weight is the number of verified claims. Apply a role lens to pull relevant work toward the centre." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-row imw-map-controls", children: [
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "Role lens" }),
        /* @__PURE__ */ i("select", { value: a, onChange: (b) => {
          o(b.target.value), m(null);
        }, children: [
          /* @__PURE__ */ i("option", { value: "", children: "No lens: everything" }),
          n && /* @__PURE__ */ i("option", { value: "__current", children: [
            "Current analysis: ",
            n.title
          ] }),
          /* @__PURE__ */ i("optgroup", { label: "Priority roles", children: _.map((b) => /* @__PURE__ */ i("option", { value: b.id, children: b.title }, b.id)) }),
          /* @__PURE__ */ i("optgroup", { label: "Other roles", children: e.roles.filter((b) => !b.priority).map((b) => /* @__PURE__ */ i("option", { value: b.id, children: b.title }, b.id)) })
        ] })
      ] }),
      c && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
        s("role");
      }, children: "Open coverage analysis →" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-constellation", children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${Vs} ${Qs}`, role: "group", "aria-label": "Evidence map of capability areas and projects", children: [
      /* @__PURE__ */ i("circle", { cx: Y, cy: te, r: Ft, class: "imw-orbit" }),
      /* @__PURE__ */ i("circle", { cx: Y, cy: te, r: Nt, class: "imw-orbit" }),
      u.groups.map((b) => {
        const d = y(b.id);
        return /* @__PURE__ */ i("line", { x1: Y, y1: te, x2: d.x, y2: d.y, class: "imw-spoke", style: { opacity: d.o * 0.5 } }, `c-${b.id}`);
      }),
      u.ents.flatMap((b) => [...(u.weight.get(b.id) ?? /* @__PURE__ */ new Map()).entries()].map(([d, x]) => {
        const C = y(d), E = y(b.id), M = l ? l === d : !0;
        return /* @__PURE__ */ i("line", { x1: C.x, y1: C.y, x2: E.x, y2: E.y, class: "imw-web", style: { strokeWidth: 0.6 + 2.2 * x / p, opacity: Math.min(C.o, E.o) * (M ? 0.55 : 0.08) } }, `${b.id}-${d}`);
      })),
      /* @__PURE__ */ i("g", { class: "imw-core", children: [
        /* @__PURE__ */ i("circle", { cx: Y, cy: te, r: 34 }),
        /* @__PURE__ */ i("text", { x: Y, y: te - 2, "text-anchor": "middle", children: "Rahul" }),
        /* @__PURE__ */ i("text", { x: Y, y: te + 14, "text-anchor": "middle", class: "imw-core-sub", children: "Vajja" })
      ] }),
      u.groups.map((b) => {
        const d = y(b.id), x = w(b.id), C = 6 + Math.sqrt(x) * 1.6, E = d.x < Y - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-gnode${l === b.id ? " is-on" : ""}`,
            style: { opacity: d.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${b.label}: ${x} verified claims`,
            onClick: () => {
              m(l === b.id ? null : b.id), r({ kind: "group", id: b.id });
            },
            onKeyDown: (M) => {
              (M.key === "Enter" || M.key === " ") && (M.preventDefault(), m(l === b.id ? null : b.id), r({ kind: "group", id: b.id }));
            },
            children: [
              /* @__PURE__ */ i("circle", { cx: d.x, cy: d.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("circle", { cx: d.x, cy: d.y, r: C }),
              /* @__PURE__ */ i("text", { x: d.x + (E ? -C - 7 : C + 7), y: d.y + 4, "text-anchor": E ? "end" : "start", children: b.label })
            ]
          },
          b.id
        );
      }),
      k.map(({ s: b, cov: d, x, y: C }) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-sat ${Ee[d.category]}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${b.name}: ${d.category}`,
          onClick: () => r({ kind: "req", req: d }),
          onKeyDown: (E) => (E.key === "Enter" || E.key === " ") && (E.preventDefault(), r({ kind: "req", req: d })),
          children: [
            /* @__PURE__ */ i("line", { x1: y(l).x, y1: y(l).y, x2: x, y2: C }),
            /* @__PURE__ */ i("circle", { cx: x, cy: C, r: 4 }),
            /* @__PURE__ */ i("text", { x, y: C - 8, "text-anchor": "middle", children: b.name.length > 22 ? b.name.slice(0, 21) + "…" : b.name })
          ]
        },
        b.id
      )),
      u.ents.map((b) => {
        const d = y(b.id), x = v(b.id), C = 7 + Math.sqrt(x) * 1.4, E = d.x < Y - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-enode is-${b.kind}`,
            style: { opacity: d.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${b.name}: ${x} verified claims`,
            onClick: () => r({ kind: "entity", id: b.id }),
            onKeyDown: (M) => (M.key === "Enter" || M.key === " ") && (M.preventDefault(), r({ kind: "entity", id: b.id })),
            children: [
              /* @__PURE__ */ i("circle", { cx: d.x, cy: d.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("rect", { x: d.x - C, y: d.y - C, width: C * 2, height: C * 2, rx: b.kind === "experience" ? C : 3 }),
              /* @__PURE__ */ i("text", { x: d.x + (E ? -C - 8 : C + 8), y: d.y + 4, "text-anchor": E ? "end" : "start", children: b.short })
            ]
          },
          b.id
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
function Xs() {
  const { kb: e, coverage: t, modeArg: n, setCoverage: r, go: s } = j(), [a, o] = q(n && e.role.has(n) ? n : t?.roleId ?? "applied_ai");
  z(() => {
    n && e.role.has(n) && o(n);
  }, [n]);
  const l = t?.source === "jd" && !n, m = he(() => l && t ? t : $e(e, a), [e, a, l, t]);
  z(() => {
    Q("brief_generated", { role: m.roleId ?? "jd" });
  }, [m]);
  const c = m.entities.filter((d) => d.id !== "imw" && e.entity.get(d.id)?.kind !== "education").slice(0, 3).map((d) => e.entity.get(d.id)), u = c.map((d) => d.id), f = e.decisions.filter((d) => u.includes(d.entity)).slice(0, 3), h = e.failures.filter((d) => u.includes(d.entity)).slice(0, 2), g = e.claims.find((d) => D(d) && d.kind === "limitation" && u.includes(d.entity)), y = m.requirements.filter((d) => d.category === "missing").slice(0, 2), p = u.flatMap((d) => (e.statableByEntity.get(d) ?? []).flatMap((x) => x.code ?? [])).filter((d) => d.lines).slice(0, 4), w = e.claims.find((d) => D(d) && d.kind === "metric" && ["cliniq", "sssd", "qml"].includes(d.entity) && (u.includes(d.entity) || d.entity === "cliniq")), v = c.flatMap((d) => d.questions.slice(0, 2).map((x) => ({ e: d.short, q: x }))), k = () => [
    `# 10-minute technical brief: ${m.title}`,
    `Candidate: ${e.subject.name}. Evidence-only; no fit score.`,
    "",
    "## Strongest relevant systems",
    ...c.map((d) => `- **${d.name}**: ${d.summaries.engineer ?? d.tagline}`),
    "",
    "## Decisions worth questioning",
    ...f.map((d) => `- ${d.title}. Tradeoff: ${d.tradeoff}`),
    "",
    "## Failure cases",
    ...h.map((d) => `- ${d.title}: ${d.fix}`),
    "",
    "## Limitations and gaps",
    ...g ? [`- ${g.text}`] : [],
    ...y.map((d) => `- ${d.label}: ${d.statement}`),
    "",
    "## Code to open",
    ...p.map((d) => `- ${d.label}: ${d.url}`),
    "",
    "## Suggested questions",
    ...v.map((d) => `- (${d.e}) ${d.q}`)
  ].join(`
`), [_, b] = q(!1);
  return /* @__PURE__ */ i("div", { class: "imw-view imw-brief", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Technical interview brief · 10 minutes" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: m.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        !l && /* @__PURE__ */ i("label", { class: "imw-select", children: [
          /* @__PURE__ */ i("span", { children: "Role" }),
          /* @__PURE__ */ i("select", { value: a, onChange: (d) => o(d.target.value), children: e.roles.map((d) => /* @__PURE__ */ i("option", { value: d.id, children: d.title }, d.id)) })
        ] }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: async () => {
          try {
            await navigator.clipboard.writeText(k()), b(!0), setTimeout(() => b(!1), 2e3);
          } catch {
          }
        }, children: _ ? "Copied" : "Copy as Markdown" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => {
          r(m), s("export");
        }, children: "Download PDF" })
      ] }),
      /* @__PURE__ */ i(yt, { counts: m.counts, compact: !0 })
    ] }),
    /* @__PURE__ */ i("ol", { class: "imw-agenda", children: [
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "0–2 min" }),
        /* @__PURE__ */ i("h4", { children: "Strongest relevant systems" }),
        c.map((d) => /* @__PURE__ */ i("p", { children: [
          /* @__PURE__ */ i("strong", { children: [
            d.name,
            "."
          ] }),
          " ",
          d.summaries.engineer ?? d.tagline
        ] }, d.id))
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "2–5 min" }),
        /* @__PURE__ */ i("h4", { children: "Decisions worth questioning" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: f.map((d) => /* @__PURE__ */ i(Zt, { id: d.id }, d.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "5–7 min" }),
        /* @__PURE__ */ i("h4", { children: "Failure cases" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: h.map((d) => /* @__PURE__ */ i(Xt, { id: d.id }, d.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "7–8 min" }),
        /* @__PURE__ */ i("h4", { children: "Limitations and gaps" }),
        g && /* @__PURE__ */ i(re, { ids: [g.id], compact: !0 }),
        y.map((d) => /* @__PURE__ */ i("p", { class: "imw-note", children: [
          d.label,
          ": ",
          d.statement
        ] }, d.id)),
        w && /* @__PURE__ */ i(ce, { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "One research result" }),
          /* @__PURE__ */ i(re, { ids: [w.id], compact: !0 })
        ] })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "8–10 min" }),
        /* @__PURE__ */ i("h4", { children: "Code to open" }),
        /* @__PURE__ */ i(We, { refs: p })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "Questions" }),
        /* @__PURE__ */ i("h4", { children: "Suggested interview questions" }),
        /* @__PURE__ */ i("ul", { class: "imw-bullets", children: v.map((d) => /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i("em", { children: [
            d.e,
            ":"
          ] }),
          " ",
          d.q
        ] }, d.q)) })
      ] })
    ] })
  ] });
}
const St = "rahul-vajja", Zs = [
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
], er = [
  "Using the rahul-vajja tools, compare Rahul against this job description and cite claim ids: …",
  "Does Rahul have AI evaluation experience? Show the evidence and the code.",
  "What would you challenge in the Drug Interaction Agent architecture?"
];
function tr() {
  const e = `${Zi()}/mcp`, t = [
    { id: "claude-code", label: "Claude Code", how: "Run in a terminal:", code: `claude mcp add --transport http ${St} ${e}` },
    { id: "claude", label: "Claude", how: "In Claude (web or desktop): Settings → Connectors → Add custom connector, then paste this URL:", code: e },
    { id: "cursor", label: "Cursor", how: "Add to ~/.cursor/mcp.json:", code: JSON.stringify({ mcpServers: { [St]: { url: e } } }, null, 2) },
    { id: "vscode", label: "VS Code", how: "Add to .vscode/mcp.json:", code: JSON.stringify({ servers: { [St]: { type: "http", url: e } } }, null, 2) },
    { id: "other", label: "Other", how: "Any MCP client that supports Streamable HTTP:", code: e }
  ], [n, r] = q(t[0].id), [s, a] = q(""), [o, l] = q({ state: "idle" }), m = t.find((f) => f.id === n), c = async (f, h) => {
    try {
      await navigator.clipboard.writeText(f), a(h), setTimeout(() => a(""), 1800);
    } catch {
    }
    Q("contact_clicked_from_ai", { mcp_copy: h });
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
        const f = performance.now();
        try {
          const h = new AbortController(), g = setTimeout(() => h.abort(), 45e3), y = await fetch(e, {
            method: "POST",
            signal: h.signal,
            headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
            body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list", params: {} })
          });
          clearTimeout(g);
          const w = (await y.json())?.result?.tools?.length;
          if (!y.ok || !w) throw new Error(`HTTP ${y.status}`);
          l({ state: "ok", text: `${w} tools available · ${Math.round(performance.now() - f)} ms` });
        } catch {
          l({ state: "fail", text: "The server did not answer. It may be waking up; try again in a minute." });
        }
      }, disabled: o.state === "running", children: o.state === "running" ? "Checking…" : "Test the server" }),
      o.text && /* @__PURE__ */ i("span", { class: `imw-verdict is-${o.state === "ok" ? "pass" : "warn"}`, role: "status", children: [
        o.state === "ok" ? "✓ " : "! ",
        o.text
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "Client", children: t.map((f) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": n === f.id, class: n === f.id ? "is-on" : "", onClick: () => r(f.id), children: f.label }, f.id)) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: m.how }),
    /* @__PURE__ */ i("div", { class: "imw-snippet", children: [
      /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: m.code }) }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => c(m.code, m.id), children: s === m.id ? "Copied" : "Copy" })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Then try" }),
      /* @__PURE__ */ i("ul", { class: "imw-bullets", children: er.map((f) => /* @__PURE__ */ i("li", { children: f }, f)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Tools · all read-only" }),
      /* @__PURE__ */ i("ul", { class: "imw-tools", children: Zs.map(([f, h]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("code", { children: f }),
        /* @__PURE__ */ i("span", { children: h })
      ] }, f)) }),
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
const mt = {
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
  gaps: "Gaps and items held back"
}, dn = /* @__PURE__ */ new Set(["project", "research", "experience"]), ir = { backend: "Backend", data: "Data engineering", domain: "Domains", mlops: "MLOps & deployment", vision: "Computer vision", voice: "Voice AI" }, nr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function Ei(e) {
  if (/present/i.test(e)) return 1e6;
  const t = [...e.matchAll(/\b(19|20)\d{2}\b/g)].map((r) => +r[0]), n = [...e.toLowerCase().matchAll(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/g)].map((r) => nr.indexOf(r[1]));
  return (t.length ? Math.max(...t) : 0) * 12 + (n.length ? n[n.length - 1] : 0);
}
const Ue = (e) => [...new Set(e)], hn = (e, t) => e.summaries[t] ?? e.summaries.engineer ?? e.tagline;
function sr(e) {
  return e.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
}
function un(e, t, n = /* @__PURE__ */ new Date()) {
  const r = e.subject.name.replace(/[^A-Za-z0-9]+/g, "-"), s = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  return `${r}-evidence-dossier-${t}-${s}.pdf`;
}
function rr(e, t) {
  const n = t.turns.flatMap((s) => s.a?.entities.slice(0, 3) ?? []), r = t.analyses.flatMap((s) => s.entities.slice(0, 3).map((a) => a.id));
  return Ue([...t.seen, ...n, ...r]).filter((s) => dn.has(e.entity.get(s)?.kind ?? ""));
}
function pn(e, t, n) {
  const r = mt[n], s = rr(e, t);
  return s.length ? { ids: s.slice(0, r.projects), defaulted: !1 } : { ids: (e.roles.find((o) => o.priority === 1) ?? e.roles[0]).focus_entities.filter((o) => dn.has(e.entity.get(o)?.kind ?? "")).slice(0, r.projects), defaulted: !0 };
}
function mn(e, t, n) {
  if (!D(t)) return null;
  const r = t.strength === "public_artifact" ? "artifact" : "self", s = (t.code ?? []).slice(0, n.code).map((o) => ({
    label: `${o.label} (${o.path}${o.lines ? `, lines ${o.lines[0]}–${o.lines[1]}` : ""})`,
    url: o.url
  }));
  if (!s.length) {
    const o = t.sources.map((l) => e.sources.find((m) => m.id === l)).find((l) => l?.public && l.url);
    o?.url && s.push({ label: o.title, url: o.url });
  }
  const a = r === "artifact" ? "Verified · public artifact" : "Verified · self-reported";
  return { t: "claim", text: t.text, tone: r, meta: `${ie(e, t.entity)} · ${a}`, links: s };
}
const fn = (e, t, n) => Ue(t).map((r) => e.claim.get(r)).filter(D).map((r) => mn(e, r, n));
function ar(e, t, n) {
  const r = (s) => (s.strength === "public_artifact" ? 0 : 2) + (s.kind === "metric" ? 0 : 1);
  return (e.statableByEntity.get(t) ?? []).filter((s) => s.kind !== "limitation").sort((s, a) => r(s) - r(a)).slice(0, n);
}
function or(e, t, n) {
  if (t.category === "direct" || t.category === "related") {
    const s = t.entities.slice(0, 3).map((l) => ie(e, l)).join(", "), a = t.category === "related" && t.via ? `Related through ${e.skill.get(t.via)?.name ?? t.via}. ` : "", o = t.claims.map((l) => e.claim.get(l)).find((l) => D(l) && !n.has(l.id));
    return o && n.add(o.id), `${a}${s ? `Evidence: ${s}.` : ""}${o ? ` For example: ${o.text}` : ""}`.trim();
  }
  const r = t.entities.length ? ` Closest evidence: ${t.entities.slice(0, 3).map((s) => ie(e, s)).join(", ")}.` : "";
  return `${t.statement ?? ""}${r}`.trim();
}
function gn(e, t, n = 99) {
  const r = [{ t: "counts", counts: t.counts }], s = /* @__PURE__ */ new Set();
  for (const a of ["direct", "related", "verification", "missing"])
    t.requirements.filter((o) => o.category === a).slice(0, n).forEach((o) => r.push({ t: "req", category: a, label: o.label, detail: or(e, o, s) }));
  return Ue(t.notes).forEach((a) => r.push({ t: "note", text: a })), r;
}
const lr = (e, t) => e.title === t.title && e.source === t.source && e.requirements.map((n) => n.id).join() === t.requirements.map((n) => n.id).join();
function cr(e, t) {
  const { kb: n, persona: r, lens: s } = e;
  switch (t.type) {
    case "p":
      return [{ t: "p", text: t.text }];
    case "note":
      return [{ t: "note", text: t.text }];
    case "claims":
      return [...t.title ? [{ t: "h3", text: t.title }] : [], ...fn(n, t.ids, s)];
    case "entity": {
      const a = n.entity.get(t.id);
      return a ? [{ t: "p", text: `${a.name}: ${hn(a, r)}` }] : [];
    }
    case "coverage": {
      const a = { t: "h3", text: `Evidence coverage: ${t.analysis.title}` };
      return e.detailed.some((o) => lr(o, t.analysis)) ? [a, { t: "counts", counts: t.analysis.counts }, { t: "p", text: `The full requirement-by-requirement breakdown is in "${ke.roles}".`, muted: !0 }] : [a, ...gn(n, t.analysis, 6)];
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
      return [{ t: "table", head: ["", ...t.entities.map((a) => ie(n, a))], rows: t.rows.map((a) => [a.label, ...a.values]) }];
    case "gaps":
      return [{ t: "bullets", items: t.items.map((a) => `${a.name}: ${a.statement}${a.closest.length ? ` Closest evidence: ${a.closest.map((o) => ie(n, o)).join(", ")}.` : ""}`) }];
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
function dr(e, t) {
  const { kb: n, lens: r } = e, s = [], a = /* @__PURE__ */ new Set();
  for (const c of t.blocks)
    for (const u of cr(e, c)) {
      if (u.t === "note") {
        if (a.has(u.text)) continue;
        a.add(u.text);
      }
      s.push(u);
    }
  const o = new Set(t.blocks.flatMap((c) => c.type === "claims" ? c.ids : [])), l = Ji(t).filter((c) => !o.has(c)), m = fn(n, l, r).slice(0, 8);
  return m.length && s.push({ t: "h3", text: "Evidence cited" }, ...m), s;
}
function hr(e, t, n, r) {
  const s = e.entity.get(t);
  if (!s) return [];
  const a = [
    { t: "h2", text: s.name, meta: [s.role, s.dates].filter(Boolean).join(" · ") },
    { t: "p", text: hn(s, n) }
  ];
  s.ownership && a.push({ t: "kv", items: [["Ownership", s.ownership]] });
  const o = ar(e, t, r.claims).map((u) => mn(e, u, r));
  o.length && a.push({ t: "h3", text: "Verified evidence" }, ...o);
  const l = (e.statableByEntity.get(t) ?? []).filter((u) => u.kind === "limitation").slice(0, 2);
  l.length && a.push({ t: "h3", text: "Stated limitations" }, { t: "bullets", items: l.map((u) => u.text) }), e.decisions.filter((u) => u.entity === t).slice(0, r.decisions).forEach((u) => a.push({ t: "h3", text: `Decision: ${u.title}` }, { t: "kv", items: [["Choice", u.choice], ["Tradeoff", u.tradeoff]] })), e.failures.filter((u) => u.entity === t).slice(0, r.failures).forEach((u) => a.push({ t: "h3", text: `Failure case: ${u.title}` }, { t: "kv", items: [["Problem", u.problem], ["Fix", u.fix], ["Prevention", u.prevention]] }));
  const m = r.arch ? e.archByEntity.get(t) : void 0;
  m && a.push({ t: "h3", text: "Architecture" }, { t: "bullets", items: m.nodes.slice(0, 8).map((u) => `${u.label}: ${u.detail.purpose}`) });
  const c = s.links.filter((u) => /^https?:/.test(u.url));
  return c.length && a.push({ t: "links", items: c.map((u) => ({ label: u.label, url: u.url })) }), a;
}
function ur(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.skills) {
    if (!(e.statableBySkill.get(n.id) ?? []).some((a) => a.strength === "public_artifact")) continue;
    const s = e.groups.find((a) => a.id === n.group)?.label ?? ir[n.group] ?? n.group;
    (t.get(s) ?? t.set(s, []).get(s)).push(n.name);
  }
  return [...t.entries()];
}
function pr(e, t, n) {
  const r = mt[n.persona], s = n.date ?? /* @__PURE__ */ new Date(), { subject: a } = e, o = t.turns.filter((p) => p.a), l = [], m = [
    { label: a.email, url: `mailto:${a.email}` },
    ...a.links.linkedin ? [{ label: "LinkedIn", url: a.links.linkedin }] : [],
    ...a.links.github ? [{ label: "GitHub", url: a.links.github }] : [],
    ...a.links.site ? [{ label: "Portfolio", url: a.links.site }] : []
  ];
  l.push({
    t: "cover",
    name: a.name,
    headline: a.headline,
    contacts: m,
    line: `Evidence dossier · ${r.label} perspective · ${sr(s)}`
  }), l.push({ t: "p", text: r.intro });
  const c = [
    o.length ? `${o.length} question${o.length === 1 ? "" : "s"} answered` : "",
    t.analyses.length ? `${t.analyses.length} role analys${t.analyses.length === 1 ? "is" : "es"}` : ""
  ].filter(Boolean).join(" · ");
  l.push({ t: "note", text: `How to read this: "Verified · public artifact" means you can open the code, data, recording or paper behind it. "Verified · self-reported" is Rahul's description of work that is not public, such as employer systems. Nothing here is a fit score. ${c ? `Session: ${c}.` : ""}`.trim() }), l.push({ t: "h1", text: "At a glance" }), l.push({ t: "p", text: a.level_note, muted: !0 });
  const u = e.entities.filter((p) => p.kind === "experience").sort((p, w) => Ei(w.dates) - Ei(p.dates));
  u.length && (l.push({ t: "h3", text: "Experience" }), l.push({ t: "table", head: ["Where", "Role", "Dates"], rows: u.map((p) => [p.name, p.role ?? "", p.dates]) }));
  const f = [
    ...e.entities.filter((p) => p.kind === "education").map((p) => ["Education", [p.name, p.role].filter(Boolean).join(": ")]),
    ...e.entities.filter((p) => p.kind === "leadership").map((p) => ["Leadership", `${p.role ? `${p.role}, ` : ""}${p.name} (${p.dates})`])
  ];
  f.length && l.push({ t: "kv", items: f });
  const h = ur(e);
  h.length && (l.push({ t: "h3", text: "Skills with public evidence" }), l.push({ t: "kv", items: h.map(([p, w]) => [p, w.join(", ")]) }));
  const g = { kb: e, persona: n.persona, lens: r, detailed: n.sections.roles ? t.analyses : [] };
  if (n.sections.qa && o.length && (l.push({ t: "h1", text: ke.qa, lead: "Each answer was generated from the evidence database and checked before it was shown." }), o.forEach((p, w) => {
    l.push({ t: "h2", text: `Q${w + 1}. ${p.q}`, meta: p.a.engine === "model" ? "Written by Claude, validated against the evidence" : "Answered by the evidence engine" }), l.push(...dr(g, p.a));
  })), n.sections.roles && t.analyses.length) {
    l.push({ t: "h1", text: ke.roles, lead: "Each requirement is classified by the evidence behind it. No score is computed." });
    for (const p of t.analyses)
      l.push({ t: "h2", text: p.title, meta: p.source === "jd" ? `Job description you provided${p.closestRole ? ` · closest target role: ${p.closestRole}` : ""}` : "Target role" }), l.push(...gn(e, p));
  }
  const y = pn(e, t, n.persona);
  if (n.sections.projects && y.ids.length && (l.push({ t: "h1", text: ke.projects, lead: y.defaulted ? "You did not open specific projects, so these are the strongest for an applied AI role." : "The work you explored, in the order you explored it." }), y.ids.forEach((p) => l.push(...hr(e, p, n.persona, r)))), n.sections.questions) {
    const p = y.ids.flatMap((k) => (e.entity.get(k)?.questions ?? []).slice(0, 2).map((_) => `${ie(e, k)}: ${_}`)), w = t.analyses.flatMap((k) => k.requirements.filter((_) => _.category === "missing" || _.category === "verification").slice(0, 2).map((_) => `${_.label}: what is the closest thing you have done, and how would you close the gap?`)), v = Ue([...p, ...w]);
    v.length && (l.push({ t: "h1", text: ke.questions, lead: "Questions that test the evidence above rather than repeat it." }), l.push({ t: "bullets", items: v }));
  }
  if (n.sections.gaps) {
    l.push({ t: "h1", text: ke.gaps });
    const p = Ue(t.analyses.flatMap((k) => k.requirements.filter((_) => _.category === "missing").map((_) => `${_.label}: ${_.statement ?? "Not demonstrated in the evidence."}`))), w = p.length ? p : e.gaps.filter((k) => !k.verify).slice(0, 6).map((k) => `${k.name}: ${k.statement}`);
    l.push({ t: "h3", text: p.length ? "Not demonstrated for the roles you checked" : "Not currently demonstrated" }, { t: "bullets", items: w });
    const v = e.conflicts.map((k) => k.label).filter(Boolean);
    v.length && (l.push({ t: "h3", text: "Held back until verified" }), l.push({ t: "p", text: "These résumé items have no public source yet, so this document and the assistant do not state their figures. Ask Rahul about them directly.", muted: !0 }), l.push({ t: "bullets", items: v }));
  }
  return l.push({ t: "h1", text: "About this document", keep: 150 }), l.push({ t: "p", text: `Generated in your browser by Interview My Work on ${a.links.site ?? "the portfolio"} from evidence version ${e.version}. Nothing you typed was uploaded to create it. Every claim links to its source, and the live workspace shows the full evidence trail for each one.`, muted: !0 }), l.push({ t: "links", items: [
    ...a.links.site ? [{ label: "Open Interview My Work", url: `${a.links.site.replace(/\/$/, "")}/#imw=ask` }] : [],
    { label: `Email ${a.first}`, url: `mailto:${a.email}` }
  ] }), { title: `${a.name}: evidence dossier (${r.label})`, nodes: l, filename: un(e, n.persona, s) };
}
const Be = [20, 24, 31], ee = [90, 99, 110], qi = [222, 227, 232], me = [22, 117, 94], mr = [242, 246, 245], rt = { direct: me, related: [40, 104, 184], verification: [150, 98, 16], missing: [118, 124, 133] }, fr = { direct: "DIRECT", related: "RELATED", verification: "TO VERIFY", missing: "NOT SHOWN" }, gr = { direct: "direct evidence", related: "related evidence", verification: "verification required", missing: "not demonstrated" }, wr = { artifact: me, self: rt.related }, Ot = 612, Te = 792, L = 56, Mt = 64, Si = 64, B = Ot - L * 2, yr = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ", Mi = {
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
    if (n in Mi) {
      t += Mi[n];
      continue;
    }
    const r = n.codePointAt(0);
    if (r === 10 || r >= 32 && r <= 126 || r >= 161 && r <= 255 || yr.includes(n)) {
      t += n;
      continue;
    }
    const s = n.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    [...s].every((a) => a.codePointAt(0) < 127) && (t += s);
  }
  return t.replace(/ {2,}/g, " ");
}
class vr {
  constructor(t) {
    si(this, "y", Mt);
    this.d = t;
  }
  font(t, n = "normal", r = Be) {
    this.d.setFont("helvetica", n), this.d.setFontSize(t), this.d.setTextColor(...r);
  }
  need(t) {
    this.y + t > Te - Si && (this.d.addPage(), this.y = Mt);
  }
  split(t, n) {
    return this.d.splitTextToSize(qe(t), n);
  }
  write(t, n = {}) {
    const { size: r = 10, style: s = "normal", color: a = Be, x: o = L, width: l = B, lh: m = 1.42, after: c = 0 } = n;
    this.font(r, s, a);
    const u = r * m;
    for (const f of this.split(t, l))
      this.need(u), this.d.text(f, o, this.y, { baseline: "top" }), this.y += u;
    this.y += c;
  }
  links(t, { size: n = 8.5, x: r = L, width: s = B } = {}) {
    this.font(n, "normal", me);
    const a = n * 1.55, o = 14;
    let l = r;
    this.need(a);
    for (const m of t) {
      const c = qe(m.label);
      let u = c;
      for (; this.d.getTextWidth(u) > s && u.length > 8; ) u = u.slice(0, -3);
      u !== c && (u = `${u.trimEnd()}…`);
      const f = this.d.getTextWidth(u);
      l > r && l + f > r + s && (this.y += a, this.need(a), l = r), this.d.text(u, l, this.y, { baseline: "top" }), this.d.link(l, this.y - 1, f, n + 2, { url: m.url }), this.d.setDrawColor(...me), this.d.setLineWidth(0.4), this.d.line(l, this.y + n + 0.5, l + f, this.y + n + 0.5), l += f + o;
    }
    this.y += a;
  }
  rule(t = qi, n = 0.6) {
    this.d.setDrawColor(...t), this.d.setLineWidth(n), this.d.line(L, this.y, L + B, this.y);
  }
  node(t) {
    const n = this.d;
    switch (t.t) {
      case "cover": {
        this.write(t.name, { size: 26, style: "bold", lh: 1.15, after: 2 }), this.write(t.headline, { size: 12, color: ee, after: 6 }), this.links(t.contacts, { size: 9.5 }), this.y += 6, this.rule(me, 1.6), this.y += 10, this.write(t.line, { size: 9, style: "bold", color: me, after: 8 });
        return;
      }
      case "h1":
        this.need(t.keep ?? 80), this.y += 14, this.rule(), this.y += 12, this.write(t.text, { size: 15, style: "bold", color: me, lh: 1.25, after: 3 }), t.lead ? this.write(t.lead, { size: 9.5, style: "italic", color: ee, after: 6 }) : this.y += 4;
        return;
      case "h2":
        this.need(60), this.y += 10, this.write(t.text, { size: 11.5, style: "bold", lh: 1.3, after: 1 }), t.meta ? this.write(t.meta, { size: 8.5, color: ee, after: 5 }) : this.y += 4;
        return;
      case "h3":
        this.need(40), this.y += 5, this.write(t.text.toUpperCase(), { size: 7.5, style: "bold", color: ee, after: 3 });
        return;
      case "p":
        this.write(t.text, { size: t.muted ? 9.5 : 10, color: t.muted ? ee : Be, after: 6 });
        return;
      case "note": {
        this.font(9);
        const s = this.split(t.text, B - 24).length * 9 * 1.42 + 14;
        s < Te - Mt - Si && this.need(s);
        const a = this.y;
        n.setFillColor(...mr), n.rect(L, a, B, s, "F"), n.setFillColor(...me), n.rect(L, a, 2, s, "F"), this.y = a + 7, this.write(t.text, { size: 9, color: ee, x: L + 14, width: B - 24 }), this.y = Math.max(this.y, a + s) + 8;
        return;
      }
      case "kv": {
        for (const [s, a] of t.items) {
          this.need(14), this.font(8, "bold", ee);
          const o = this.split(s.toUpperCase(), 106), l = this.y;
          o.forEach((m, c) => n.text(m, L, l + 1.5 + c * 11, { baseline: "top" })), this.write(a, { size: 9.5, x: L + 118, width: B - 118 }), this.y > l && (this.y = Math.max(this.y, l + o.length * 11 + 2)), this.y += 4;
        }
        this.y += 2;
        return;
      }
      case "bullets":
        for (const r of t.items)
          this.need(14), this.font(9.5, "normal", me), n.text("•", L + 2, this.y, { baseline: "top" }), this.write(r, { size: 9.5, x: L + 14, width: B - 14, after: 3 });
        this.y += 3;
        return;
      case "claim": {
        this.need(30), n.setFillColor(...wr[t.tone]), n.circle(L + 4, this.y + 5.5, 2.6, "F"), this.write(t.text, { size: 9.5, x: L + 14, width: B - 14, after: 1 }), this.write(t.meta, { size: 8, color: ee, x: L + 14, width: B - 14 }), t.links.length && this.links(t.links, { size: 8, x: L + 14, width: B - 14 }), this.y += 5;
        return;
      }
      case "req": {
        this.need(26), this.font(7, "bold", rt[t.category]), n.text(fr[t.category], L, this.y + 2, { baseline: "top" }), this.write(t.label, { size: 9.5, style: "bold", x: L + 70, width: B - 70, after: 1 }), t.detail && this.write(t.detail, { size: 8.5, color: ee, x: L + 70, width: B - 70 }), this.y += 5;
        return;
      }
      case "counts": {
        const r = ["direct", "related", "verification", "missing"].filter((o) => t.counts[o] > 0), s = r.reduce((o, l) => o + t.counts[l], 0);
        if (!s) return;
        this.need(34);
        let a = L;
        for (const o of r) {
          const l = B * t.counts[o] / s;
          n.setFillColor(...rt[o]), n.rect(a, this.y, Math.max(l - 1.5, 1), 6, "F"), a += l;
        }
        this.y += 12, a = L, this.font(8.5, "normal", ee);
        for (const o of r) {
          const l = `${t.counts[o]} ${gr[o]}`;
          n.setFillColor(...rt[o]), n.rect(a, this.y + 1.5, 6, 6, "F"), n.text(l, a + 10, this.y, { baseline: "top" }), a += n.getTextWidth(l) + 26;
        }
        this.y += 18;
        return;
      }
      case "table": {
        const r = t.head.length;
        this.font(9);
        const s = t.head.map((c, u) => Math.max(n.getTextWidth(qe(c)), ...t.rows.map((f) => n.getTextWidth(qe(f[u] ?? "")))) + 12);
        let a;
        if (s.reduce((c, u) => c + u, 0) <= B)
          a = [...s], a[r - 1] += B - s.reduce((c, u) => c + u, 0);
        else {
          const c = Math.min(s[0], 140);
          a = [c, ...Array(r - 1).fill((B - c) / (r - 1))];
        }
        const o = a.map((c, u) => L + a.slice(0, u).reduce((f, h) => f + h, 0)), l = (c, u) => {
          this.font(u ? 7.5 : 9, "bold", u ? ee : Be);
          const f = c.map((g, y) => this.split(u ? g.toUpperCase() : g, a[y] - 10)), h = (u ? 7.5 : 9) * 1.38;
          return { wrapped: f, lh: h, h: Math.max(...f.map((g) => g.length)) * h + 8 };
        }, m = (c, u) => {
          const { wrapped: f, lh: h, h: g } = l(c, u);
          this.need(u && t.rows.length ? g + l(t.rows[0], !1).h : g), f.forEach((y, p) => {
            this.font(u ? 7.5 : 9, u || p === 0 ? "bold" : "normal", u ? ee : Be), y.forEach((w, v) => n.text(w, o[p], this.y + 4 + v * h, { baseline: "top" }));
          }), this.y += g, this.rule();
        };
        m(t.head, !0), t.rows.forEach((c) => m(c, !1)), this.y += 8;
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
      n.setPage(s), this.font(7.5, "normal", ee), n.text(qe(t), L, Te - 38, { baseline: "top" }), n.text(`Page ${s} of ${r}`, Ot - L, Te - 38, { baseline: "top", align: "right" }), n.setDrawColor(...qi), n.setLineWidth(0.6), n.line(L, Te - 46, Ot - L, Te - 46);
  }
}
async function _r(e, t) {
  const { jsPDF: n } = await import("./chunks/jspdf.es.min-0Bk908vi.js"), r = new n({ unit: "pt", format: "letter", compress: !0 });
  r.setProperties({ title: qe(t.title), subject: "Evidence dossier", author: qe(t.author), creator: "Interview My Work" });
  const s = new vr(r);
  for (const a of e) s.node(a);
  return s.finish(t.footer), r;
}
function br(e, t) {
  const n = URL.createObjectURL(e), r = document.createElement("a");
  r.href = n, r.download = t, r.rel = "noopener", document.body.append(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(n), 6e4);
}
function kr() {
  const { kb: e, persona: t, session: n, go: r } = j(), [s, a] = q(t);
  z(() => a(t), [t]);
  const o = n.turns.filter((w) => w.a), l = he(() => pn(e, n, s), [e, n, s]), [m, c] = q({ qa: !0, roles: !0, projects: !0, questions: !0, gaps: !0 }), [u, f] = q({ kind: "idle" });
  z(() => {
    import("./chunks/jspdf.es.min-0Bk908vi.js").catch(() => {
    });
  }, []);
  const h = {
    qa: {
      text: `${o.length} question${o.length === 1 ? "" : "s"} with answers and the evidence each one cited`,
      empty: "Ask a question first and it will be included here.",
      items: o.map((w) => w.q)
    },
    roles: {
      text: `${n.analyses.length} analys${n.analyses.length === 1 ? "is" : "es"}, requirement by requirement`,
      empty: "Evaluate a role or paste a job description to include it here.",
      items: n.analyses.map((w) => w.title)
    },
    projects: {
      text: l.defaulted ? "You have not opened a project yet, so this includes the strongest work for an applied AI role:" : "The work you explored, with verified evidence, limitations and links:",
      items: l.ids.map((w) => ie(e, w))
    },
    questions: { text: "Questions that test the evidence rather than repeat it, including your gaps" },
    gaps: { text: "What is not demonstrated, and résumé figures held back until a source confirms them" }
  }, g = (w) => w === "qa" ? o.length > 0 : w === "roles" ? n.analyses.length > 0 : !0, y = un(e, s), p = async () => {
    f({ kind: "busy" });
    try {
      const w = pr(e, n, { persona: s, sections: m }), v = await _r(w.nodes, {
        title: w.title,
        author: e.subject.name,
        footer: `${e.subject.name} · Evidence dossier · ${mt[s].label} perspective · ${(e.subject.links.site ?? "").replace(/^https?:\/\/|\/$/g, "")}`
      });
      br(v.output("blob"), w.filename), Q("dossier_downloaded", { persona: s, questions: o.length, analyses: n.analyses.length }), f({ kind: "done", file: w.filename });
    } catch {
      f({ kind: "error" });
    }
  };
  return /* @__PURE__ */ i("div", { class: "imw-view imw-export", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Download · PDF" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Take this with you" }),
      /* @__PURE__ */ i("p", { class: "imw-lead", children: "A PDF of what you explored here, written for your perspective: your questions with their answers and sources, the roles you checked, and the projects you opened. Every claim keeps its evidence label and link." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Written for" }),
    /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Perspective", children: e.personas.map((w) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": s === w.id, class: s === w.id ? "is-on" : "", onClick: () => a(w.id), children: w.label }, w.id)) }),
    /* @__PURE__ */ i("p", { class: "imw-help imw-export-intro", children: mt[s].intro }),
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Include" }),
    /* @__PURE__ */ i("ul", { class: "imw-export-list", children: [
      /* @__PURE__ */ i("li", { class: "is-fixed", children: [
        /* @__PURE__ */ i("span", { class: "imw-export-check", "aria-hidden": "true" }),
        /* @__PURE__ */ i("span", { children: [
          /* @__PURE__ */ i("strong", { children: "Contact details and experience at a glance" }),
          /* @__PURE__ */ i("small", { children: "Always included: roles and dates, education, and the skills that public work demonstrates." })
        ] })
      ] }),
      Object.keys(ke).map((w) => {
        const v = h[w], k = g(w) && m[w];
        return /* @__PURE__ */ i("li", { class: g(w) ? "" : "is-empty", children: [
          /* @__PURE__ */ i("label", { children: [
            /* @__PURE__ */ i("input", { type: "checkbox", checked: k, disabled: !g(w), onChange: (_) => c({ ...m, [w]: _.target.checked }) }),
            /* @__PURE__ */ i("span", { children: [
              /* @__PURE__ */ i("strong", { children: ke[w] }),
              /* @__PURE__ */ i("small", { children: g(w) ? v.text : v.empty }),
              g(w) && v.items && v.items.length > 0 && /* @__PURE__ */ i("span", { class: "imw-export-items", children: [
                v.items.slice(0, 6).map((_) => /* @__PURE__ */ i("em", { children: _ }, _)),
                v.items.length > 6 && /* @__PURE__ */ i("em", { children: [
                  "+",
                  v.items.length - 6,
                  " more"
                ] })
              ] })
            ] })
          ] }),
          !g(w) && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r(w === "qa" ? "ask" : "role"), children: w === "qa" ? "Ask a question →" : "Evaluate a role →" })
        ] }, w);
      })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-export-go", children: [
      /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: p, disabled: u.kind === "busy", children: u.kind === "busy" ? "Building PDF…" : "Download PDF" }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: y })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", role: "status", "aria-live": "polite", children: [
      u.kind === "done" && `Downloaded ${u.file}. You can keep exploring and download again; the PDF always reflects the whole session.`,
      u.kind === "error" && "The PDF could not be built. Check your connection and try again; the rest of the workspace still works.",
      u.kind !== "done" && u.kind !== "error" && "Built in your browser. Nothing you typed or pasted is uploaded, and pasted job descriptions appear only as the requirements that were detected."
    ] })
  ] });
}
function xr() {
  const e = j(), { inspect: t, setInspect: n } = e;
  return /* @__PURE__ */ i("div", { class: "imw-evidence", children: [
    /* @__PURE__ */ i("div", { class: "imw-evidence-head", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Evidence" }),
      t && /* @__PURE__ */ i("button", { class: "imw-icon imw-evidence-close", onClick: () => n(null), "aria-label": "Close evidence", children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-evidence-body", "aria-live": "polite", children: [
      !t && /* @__PURE__ */ i($r, {}),
      t?.kind === "claim" && /* @__PURE__ */ i(Cr, { id: t.id }),
      t?.kind === "node" && /* @__PURE__ */ i(Er, { arch: t.arch, node: t.node }),
      t?.kind === "req" && /* @__PURE__ */ i(qr, {}),
      t?.kind === "entity" && /* @__PURE__ */ i(Sr, { id: t.id }),
      t?.kind === "group" && /* @__PURE__ */ i(Mr, { id: t.id }),
      t?.kind === "basis" && /* @__PURE__ */ i(Ar, {})
    ] })
  ] });
}
function $r() {
  const { kb: e } = j(), t = e.claims.reduce((n, r) => n + (D(r) ? r.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-intro", children: [
    /* @__PURE__ */ i("p", { children: "Select any claim, architecture component or requirement to inspect what supports it: sources, measured results and the exact code." }),
    /* @__PURE__ */ i("dl", { class: "imw-stats", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("dt", { children: e.claims.filter(D).length }),
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
function Cr({ id: e }) {
  const { kb: t, setInspect: n } = j(), r = t.claim.get(e);
  if (!r) return null;
  const s = t.entity.get(r.entity), a = t.architectures.flatMap((l) => l.nodes.filter((m) => m.detail.claims.includes(e)).map((m) => ({ a: l, n: m }))), o = [...t.decisions, ...t.failures].filter((l) => l.claims.includes(e));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-st ${pt(r)}`, children: [
      /* @__PURE__ */ i(Pe, { cls: pt(r) }),
      " ",
      nn(r)
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
      const m = t.sources.find((c) => c.id === l);
      return /* @__PURE__ */ i("li", { children: m.url && m.public ? /* @__PURE__ */ i("a", { href: m.url, target: "_blank", rel: "noopener", children: [
        m.title,
        " ↗"
      ] }) : /* @__PURE__ */ i("span", { children: [
        m.title,
        " ",
        /* @__PURE__ */ i("em", { children: "(private cross-check)" })
      ] }) }, l);
    }) }),
    r.code?.length ? /* @__PURE__ */ i(ce, { children: [
      /* @__PURE__ */ i(xe, { children: "Show me the code" }),
      /* @__PURE__ */ i(We, { refs: r.code })
    ] }) : null,
    a.length ? /* @__PURE__ */ i(ce, { children: [
      /* @__PURE__ */ i(xe, { children: "Appears in" }),
      /* @__PURE__ */ i("ul", { class: "imw-sources", children: a.map(({ a: l, n: m }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => n({ kind: "node", arch: l.id, node: m.id }), children: [
        l.title,
        " → ",
        m.label
      ] }) }, l.id + m.id)) })
    ] }) : null,
    o.length ? /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Also referenced by: ",
      o.map((l) => l.title).join("; ")
    ] }) : null
  ] });
}
function Er({ arch: e, node: t }) {
  const { kb: n } = j(), r = n.architectures.find((o) => o.id === e), s = r?.nodes.find((o) => o.id === t);
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
      s.detail.why && /* @__PURE__ */ i(ce, { children: [
        /* @__PURE__ */ i("dt", { children: "Why it matters" }),
        /* @__PURE__ */ i("dd", { children: s.detail.why })
      ] }),
      s.detail.observed && /* @__PURE__ */ i(ce, { children: [
        /* @__PURE__ */ i("dt", { children: "Observed" }),
        /* @__PURE__ */ i("dd", { children: s.detail.observed })
      ] })
    ] }),
    /* @__PURE__ */ i(re, { ids: s.detail.claims, title: "Supporting claims", compact: !0 }),
    a.length ? /* @__PURE__ */ i(ce, { children: [
      /* @__PURE__ */ i(xe, { children: "Code" }),
      /* @__PURE__ */ i(We, { refs: a, max: 3 })
    ] }) : null
  ] });
}
function qr() {
  const { kb: e, inspect: t } = j();
  if (t?.kind !== "req") return null;
  const n = t.req, r = n.via ? e.skill.get(n.via)?.name : void 0, s = (n.pending ?? []).map((a) => e.claim.get(a)).filter(Boolean);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-cat ${Ee[n.category]}`, children: X[n.category] }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: n.label }),
    n.priority && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Listed as ",
      n.priority,
      " in the description."
    ] }),
    n.statement && /* @__PURE__ */ i("p", { children: n.statement }),
    n.category === "direct" && n.strength === "self_reported" && /* @__PURE__ */ i("p", { class: "imw-note", children: "Supported by self-reported employment experience; no public artifact." }),
    r && n.category === "related" && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Related through: ",
      r
    ] }),
    /* @__PURE__ */ i(re, { ids: n.claims.slice(0, 8), title: n.category === "missing" ? "Closest evidence" : "Evidence", compact: !0 }),
    s.length ? /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      s.length,
      " related statement",
      s.length > 1 ? "s are" : " is",
      " awaiting verification and not used here."
    ] }) : null
  ] });
}
function Sr({ id: e }) {
  const { kb: t, persona: n } = j(), r = t.entity.get(e);
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
      t.archByEntity.has(e) && /* @__PURE__ */ i(st, { a: { kind: "mode", label: "X-Ray", target: "xray", arg: e } }),
      /* @__PURE__ */ i(st, { a: { kind: "anchor", label: "Jump to section", target: r.anchor } }),
      r.links.slice(0, 2).map((a) => /* @__PURE__ */ i(st, { a: { kind: "url", label: a.label, target: a.url } }, a.url))
    ] }),
    /* @__PURE__ */ i(re, { ids: s, title: "Key evidence", compact: !0 })
  ] });
}
function Mr({ id: e }) {
  const { kb: t, setInspect: n } = j(), r = t.groups.find((a) => a.id === e);
  if (!r) return null;
  const s = t.skills.filter((a) => a.group === e).map((a) => ({ s: a, cov: de(t, a.id) }));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Capability area" }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: r.label }),
    /* @__PURE__ */ i("ul", { class: "imw-reqs", children: s.map(({ s: a, cov: o }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: o }), children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${Ee[o.category]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("span", { children: a.name }),
      /* @__PURE__ */ i("small", { children: o.entities.slice(0, 3).map((l) => t.entity.get(l)?.short).join(" · ") || X[o.category] })
    ] }) }, a.id)) })
  ] });
}
function Ar() {
  const { inspect: e } = j();
  return e?.kind !== "basis" ? null : /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Why this answer?" }),
    /* @__PURE__ */ i("p", { children: e.engine === "model" ? `Written by ${e.model ?? "Claude"} from a retrieved evidence pack, then validated by the API and again in your browser before display.` : "Composed by the deterministic evidence engine in your browser. No model was involved." }),
    e.checks?.length ? /* @__PURE__ */ i("ul", { class: "imw-checks", children: e.checks.map((t) => /* @__PURE__ */ i("li", { class: t.ok ? "ok" : "bad", children: [
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: t.ok ? "✓" : "✕" }),
      " ",
      t.label
    ] }, t.label)) }) : null,
    /* @__PURE__ */ i(re, { ids: e.retrieved.slice(0, 12), title: "Evidence used", compact: !0 }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: "This panel lists sources and checks only. It never shows hidden model reasoning." })
  ] });
}
function jr() {
  const { kb: e, persona: t, setPersona: n, coverage: r, setCoverage: s, toggleLens: a, lensOn: o, go: l } = j(), m = e.personas.find((c) => c.id === t);
  return /* @__PURE__ */ i("div", { class: "imw-rail", children: [
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i(xe, { children: "Answer depth" }),
      /* @__PURE__ */ i("div", { class: "imw-personas", role: "radiogroup", "aria-label": "Who is asking", children: e.personas.map((c) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": t === c.id, class: t === c.id ? "is-on" : "", onClick: () => n(c.id), children: c.label }, c.id)) }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        m.focus,
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
        /* @__PURE__ */ i(yt, { counts: r.counts, compact: !0 }),
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
          /* @__PURE__ */ i(Pe, { cls: "st-artifact" }),
          " Verified, public artifact"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Pe, { cls: "st-self" }),
          " Verified, self-reported employment"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Pe, { cls: "st-pending" }),
          " Verification required (never stated)"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Pe, { cls: "st-no" }),
          " ",
          X.missing
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
const Ai = [
  { id: "ask", label: "Ask", hint: "Questions answered from verified evidence" },
  { id: "role", label: "Role fit", hint: "Evidence coverage for a role or job description" },
  { id: "xray", label: "X-Ray", hint: "Explore each system component by component" },
  { id: "map", label: "Map", hint: "The whole body of work as an evidence graph" },
  { id: "lab", label: "Proof lab", hint: "Replays, break-it tests and live numbers" },
  { id: "brief", label: "Brief", hint: "A 10-minute technical interview brief" },
  { id: "connect", label: "Connect your AI", hint: "Use this evidence from Claude, Cursor or VS Code over MCP" }
], Ir = /* @__PURE__ */ new Set(["retrieval", "no_evidence", "topic", "entity", "focused", "skill", "personally", "scale", "challenge", "level", "overview", "shipped", "beyond_wrappers", "evaluation", "strongest"]), Tr = /* @__PURE__ */ new Set(["entity", "claims", "xray", "chart", "trace", "decisions", "failures"]);
function Rr({ kb: e, initial: t, register: n }) {
  const [r, s] = q(!0), [a, o] = q("ask"), [l, m] = q(), [c, u] = q("recruiter"), [f, h] = q(null), [g, y] = q(null), [p, w] = q([]), [v, k] = q([]), [_, b] = q([]), [d, x] = q("checking"), [C, E] = q(!1), M = ge(null), O = ge(null), K = ge(!1), ne = ye(($, A) => {
    if (y($), !$) return;
    const Z = (U) => `${U.source}|${U.title}|${U.requirements.map((N) => N.id).join()}`;
    w((U) => {
      const N = U.findIndex((ae) => ae === A || $.source === "role" && ae.source === "role" && ae.roleId === $.roleId || Z(ae) === Z($));
      return N >= 0 ? U.map((ae, Ne) => Ne === N ? $ : ae) : [...U, $];
    });
  }, []), ue = ye(($) => {
    $ && k((A) => A.includes($) ? A : [...A, $]);
  }, []), J = ye(($, A) => {
    o($), m(A), $ === "xray" && Q("xray_opened", { project: A ?? "dia" }), M.current?.querySelector(".imw-main")?.scrollTo({ top: 0 });
  }, []), pe = ye(($) => {
    O.current = $.trigger ?? document.activeElement, s(!0);
    const A = Ai.find((Z) => Z.id === $.mode)?.id ?? "ask";
    $.mode === "transform" && $.arg ? J("role", $.arg) : J(A, $.arg), Q("interview_my_work_opened", { mode: A });
  }, [J]);
  z(() => {
    n(pe), pe(t);
  }, []), z(() => {
    r && !K.current && (K.current = !0, ks(x));
  }, [r]), z(() => {
    const $ = document.querySelector(".wrap"), A = document.querySelector(".imw-fab");
    r ? (document.documentElement.classList.add("imw-open"), $?.setAttribute("inert", ""), A?.setAttribute("inert", ""), requestAnimationFrame(() => M.current?.querySelector("[data-autofocus]")?.focus() ?? M.current?.focus())) : (document.documentElement.classList.remove("imw-open"), $?.removeAttribute("inert"), A?.removeAttribute("inert"), O.current?.focus?.());
  }, [r]);
  const De = ye(() => s(!1), []), wn = ($) => {
    if ($.key === "Escape") {
      $.preventDefault(), f && matchMedia("(max-width: 1100px)").matches ? h(null) : De();
      return;
    }
    if ($.key !== "Tab" || !M.current) return;
    const A = [...M.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((N) => N.offsetParent !== null);
    if (!A.length) return;
    const Z = A[0], U = A[A.length - 1];
    $.shiftKey && document.activeElement === Z ? ($.preventDefault(), U.focus()) : !$.shiftKey && document.activeElement === U && ($.preventDefault(), Z.focus());
  }, ei = ye(($) => {
    s(!1), Q("project_opened_from_ai", { anchor: $ }), Cs($, () => s(!0));
  }, []), ti = ye(($, A) => {
    const Z = $ ?? !C, U = A ?? g;
    Z && U ? (A && ne(A), $s(e, U, { reopen: () => {
      s(!0), J("role");
    }, restore: () => E(!1) }), E(!0), s(!1), Q("portfolio_lens_applied", { source: U.source })) : (Dt(), E(!1));
  }, [C, g, e, J, ne]), ii = ye(async ($) => {
    const A = $.trim();
    if (!A) return;
    J("ask");
    const Z = Date.now(), U = [..._].reverse().find((P) => P.a?.entities.length)?.a?.entities, N = ns(e, A, { persona: c, roleId: g?.roleId, lastEntities: U }), ae = Kt(A);
    if (N.intent === "jd" || N.intent === "role") {
      const P = N.blocks.find((oe) => oe.type === "coverage");
      P && P.type === "coverage" && ne(P.analysis), ae && Q("jd_analyzed", { requirements: P && P.type === "coverage" ? P.analysis.requirements.length : 0 });
    }
    const Ne = d === "ready" && Ir.has(N.intent);
    if (b((P) => [...P, { id: Z, q: ae ? "Job description (pasted)" : A, a: Ne ? void 0 : N, pending: Ne }]), ae && d === "ready" && en(A).then((P) => {
      if (!P.length) return;
      const oe = ct(e, A, P), le = N.blocks.find((_t) => _t.type === "coverage");
      ne(oe, le && le.type === "coverage" ? le.analysis : void 0), b((_t) => _t.map((je) => je.id === Z && je.a ? { ...je, a: { ...je.a, blocks: je.a.blocks.map((bt) => bt.type === "coverage" ? { ...bt, analysis: oe } : bt), refined: !0 } } : je));
    }).catch(() => {
    }), !Ne) return;
    const vn = _.filter((P) => P.a).slice(-3).map((P) => ({ q: P.q, cites: P.a.basis?.retrieved?.slice(0, 8) ?? [] }));
    let vt;
    try {
      const P = await xs(e, A, c, vn, g?.roleId), oe = N.blocks.filter((le) => Tr.has(le.type)).map((le) => le.type === "claims" ? { ...le, title: le.title ?? "Supporting evidence" } : le);
      vt = { ...P, blocks: [...P.blocks, ...oe], actions: N.actions, followups: P.followups.length ? P.followups : N.followups, entities: [.../* @__PURE__ */ new Set([...P.entities, ...N.entities])] };
    } catch {
      vt = { ...N, blocks: [{ type: "note", tone: "info", text: "The AI service did not return a validated answer, so this one comes from the offline evidence engine." }, ...N.blocks] };
    }
    b((P) => P.map((oe) => oe.id === Z ? { ...oe, a: vt, pending: !1 } : oe));
  }, [e, c, g, d, _, J, ne]), ni = he(() => ({ turns: _, analyses: p, seen: v }), [_, p, v]), Fe = _.filter(($) => $.a).length + p.length, yn = he(() => ({
    kb: e,
    persona: c,
    setPersona: u,
    mode: a,
    go: J,
    modeArg: l,
    inspect: f,
    setInspect: ($) => {
      h($), $ && (Q("evidence_opened", { kind: $.kind }), $.kind === "entity" ? ue($.id) : $.kind === "claim" ? ue(e.claim.get($.id)?.entity) : $.kind === "node" && ue(e.architectures.find((A) => A.id === $.arch)?.entity));
    },
    coverage: g,
    setCoverage: ne,
    session: ni,
    noteEntity: ue,
    ask: ii,
    api: d,
    jump: ei,
    lensOn: C,
    toggleLens: ti,
    close: De
  }), [e, c, a, J, l, f, g, ne, ni, ue, ii, d, ei, C, ti, De]);
  return /* @__PURE__ */ i(tn.Provider, { value: yn, children: /* @__PURE__ */ i("div", { class: "imw", hidden: !r, children: [
    /* @__PURE__ */ i("div", { class: "imw-backdrop", onClick: De }),
    /* @__PURE__ */ i("div", { class: "imw-dialog", ref: M, role: "dialog", "aria-modal": "true", "aria-labelledby": "imw-title", tabIndex: -1, onKeyDown: wn, children: [
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
        /* @__PURE__ */ i("div", { class: "imw-tabs", role: "tablist", "aria-label": "Workspace views", children: Ai.map(($) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": a === $.id, class: a === $.id ? "is-on" : "", title: $.hint, onClick: () => J($.id), children: $.label }, $.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-top-right", children: [
          /* @__PURE__ */ i(Pr, { status: d }),
          /* @__PURE__ */ i(
            "button",
            {
              class: `imw-dl${a === "export" ? " is-on" : ""}`,
              onClick: () => J("export"),
              title: "Download what you explored as a PDF",
              "aria-label": Fe ? `Download PDF (${Fe} item${Fe === 1 ? "" : "s"} explored)` : "Download PDF",
              children: [
                /* @__PURE__ */ i("svg", { viewBox: "0 0 16 16", width: "14", height: "14", "aria-hidden": "true", children: /* @__PURE__ */ i("path", { d: "M8 2v8m0 0L4.8 6.8M8 10l3.2-3.2M3 13h10", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
                /* @__PURE__ */ i("span", { class: "imw-dl-label", children: "PDF" }),
                Fe > 0 && /* @__PURE__ */ i("span", { class: "imw-dl-count", "aria-hidden": "true", children: Fe })
              ]
            }
          ),
          /* @__PURE__ */ i("select", { class: "imw-persona-mobile", "aria-label": "Answer depth", value: c, onChange: ($) => u($.target.value), children: e.personas.map(($) => /* @__PURE__ */ i("option", { value: $.id, children: $.label }, $.id)) }),
          /* @__PURE__ */ i("button", { class: "imw-icon", onClick: De, "aria-label": "Close Interview My Work", children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { class: "imw-body", children: [
        /* @__PURE__ */ i("aside", { class: "imw-left", "aria-label": "Context", children: /* @__PURE__ */ i(jr, {}) }),
        /* @__PURE__ */ i("main", { class: "imw-main", id: "imw-main", children: [
          a === "ask" && /* @__PURE__ */ i(Os, { turns: _ }),
          a === "role" && /* @__PURE__ */ i(zs, {}),
          a === "xray" && /* @__PURE__ */ i(Us, {}),
          a === "map" && /* @__PURE__ */ i(Ys, {}),
          a === "lab" && /* @__PURE__ */ i(Ls, {}),
          a === "brief" && /* @__PURE__ */ i(Xs, {}),
          a === "connect" && /* @__PURE__ */ i(tr, {}),
          a === "export" && /* @__PURE__ */ i(kr, {})
        ] }),
        /* @__PURE__ */ i("aside", { class: `imw-right${f ? " has-item" : ""}`, "aria-label": "Evidence", children: /* @__PURE__ */ i(xr, {}) })
      ] })
    ] })
  ] }) });
}
function Pr({ status: e }) {
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
let At = null, Ze = null, jt = null;
async function Wr(e = {}) {
  At ?? (At = Bn(on("evidence.json")).catch((n) => {
    throw At = null, n;
  }));
  const t = await At;
  if (jt) {
    jt(e);
    return;
  }
  Ze = document.createElement("div"), Ze.id = "imw-host", document.body.appendChild(Ze), Mn(/* @__PURE__ */ i(Rr, { kb: t, initial: e, register: (n) => jt = n }), Ze);
}
export {
  Wr as open
};
