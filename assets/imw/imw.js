var jn = Object.defineProperty;
var Tn = (e, t, n) => t in e ? jn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pi = (e, t, n) => Tn(e, typeof t != "symbol" ? t + "" : t, n);
var wt, R, Oi, ke, mi, Bi, zi, qt, st, Ve, Ui, Qt, Dt, Wt, Vi, dt = {}, ht = [], Rn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, yt = Array.isArray;
function we(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Kt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Ln(e, t, n) {
  var r, s, a, o = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? s = t[a] : o[a] = t[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? wt.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
  return rt(e, o, r, s, null);
}
function rt(e, t, n, r, s) {
  var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Oi, __i: -1, __u: 0 };
  return s == null && R.vnode != null && R.vnode(a), a;
}
function oe(e) {
  return e.children;
}
function at(e, t) {
  this.props = e, this.context = t;
}
function Ie(e, t) {
  if (t == null) return e.__ ? Ie(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ie(e) : null;
}
function Pn(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, r = [], s = [], a = we({}, t);
    a.__v = t.__v + 1, R.vnode && R.vnode(a), Yt(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? Ie(t), !!(32 & t.__u), s), a.__v = t.__v, a.__.__k[a.__i] = a, Ji(r, a, s), t.__e = t.__ = null, a.__e != n && Gi(a);
  }
}
function Gi(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Gi(e);
}
function Ht(e) {
  (!e.__d && (e.__d = !0) && ke.push(e) && !ut.__r++ || mi != R.debounceRendering) && ((mi = R.debounceRendering) || Bi)(ut);
}
function ut() {
  try {
    for (var e, t = 1; ke.length; ) ke.length > t && ke.sort(zi), e = ke.shift(), t = ke.length, Pn(e);
  } finally {
    ke.length = ut.__r = 0;
  }
}
function Qi(e, t, n, r, s, a, o, l, u, d, f) {
  var g, c, w, y, p, m, v = r && r.__k || ht, k = t.length;
  for (u = Fn(n, t, v, u, k), g = 0; g < k; g++) (w = n.__k[g]) != null && (c = w.__i != -1 && v[w.__i] || dt, w.__i = g, m = Yt(e, w, c, s, a, o, l, u, d, f), y = w.__e, w.ref && c.ref != w.ref && (c.ref && Jt(c.ref, null, w), f.push(w.ref, w.__c || y, w)), p == null && y != null && (p = y), 4 & w.__u ? (u = Ki(w, u, e), c.__e && (c.__e = null)) : typeof w.type == "function" && m !== void 0 ? u = m : y && (u = y.nextSibling), w.__u &= -7);
  return n.__e = p, u;
}
function Fn(e, t, n, r, s) {
  var a, o, l, u, d, f = n.length, g = f, c = 0;
  for (e.__k = new Array(s), a = 0; a < s; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = rt(null, o, null, null, null) : yt(o) ? o = e.__k[a] = rt(oe, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = rt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, u = a + c, o.__ = e, o.__b = e.__b + 1, l = null, (d = o.__i = Dn(o, n, u, g)) != -1 && (g--, (l = n[d]) && (l.__u |= 2)), l == null || l.__v == null ? (d == -1 && (s > f ? c-- : s < f && c++), typeof o.type != "function" && (o.__u |= 4)) : d != u && (d == u - 1 ? c-- : d == u + 1 ? c++ : (d > u ? c-- : c++, o.__u |= 4))) : e.__k[a] = null;
  if (g) for (a = 0; a < f; a++) (l = n[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = Ie(l)), Zi(l, l));
  return r;
}
function Ki(e, t, n) {
  var r, s;
  if (typeof e.type == "function") {
    for (r = e.__k, s = 0; r && s < r.length; s++) r[s] && (r[s].__ = e, t = Ki(r[s], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = Ie(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Dn(e, t, n, r) {
  var s, a, o, l = e.key, u = e.type, d = t[n], f = d != null && (2 & d.__u) == 0;
  if (d === null && l == null || f && l == d.key && u == d.type) return n;
  if (r > (f ? 1 : 0)) {
    for (s = n - 1, a = n + 1; s >= 0 || a < t.length; ) if ((d = t[o = s >= 0 ? s-- : a++]) != null && (2 & d.__u) == 0 && l == d.key && u == d.type) return o;
  }
  return -1;
}
function fi(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Rn.test(t) ? n : n + "px";
}
function Xe(e, t, n, r, s) {
  var a, o;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || fi(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || fi(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Ui, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r ? n[Ve] = r[Ve] : (n[Ve] = Qt, e.addEventListener(t, a ? Wt : Dt, a)) : e.removeEventListener(t, a ? Wt : Dt, a);
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
function gi(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[st] == null) t[st] = Qt++;
      else if (t[st] < n[Ve]) return;
      return n(R.event ? R.event(t) : t);
    }
  };
}
function Yt(e, t, n, r, s, a, o, l, u, d) {
  var f, g, c, w, y, p, m, v, k, b, _, h, x, C, E, A, H = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (u = !!(32 & n.__u), a = [l = t.__e = n.__e]), (f = R.__b) && f(t);
  e: if (typeof H == "function") {
    g = o.length;
    try {
      if (k = t.props, b = H.prototype && H.prototype.render, _ = (f = H.contextType) && r[f.__c], h = f ? _ ? _.props.value : f.__ : r, n.__c ? v = (c = t.__c = n.__c).__ = c.__E : (b ? t.__c = c = new H(k, h) : (t.__c = c = new at(k, h), c.constructor = H, c.render = Hn), _ && _.sub(c), c.state || (c.state = {}), c.__n = r, w = c.__d = !0, c.__h = [], c._sb = []), b && c.__s == null && (c.__s = c.state), b && H.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = we({}, c.__s)), we(c.__s, H.getDerivedStateFromProps(k, c.__s))), y = c.props, p = c.state, c.__v = t, w) b && H.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), b && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (b && H.getDerivedStateFromProps == null && k !== y && c.componentWillReceiveProps != null && c.componentWillReceiveProps(k, h), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(k, c.__s, h) === !1) {
          t.__v != n.__v && (c.props = k, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(K) {
            K && (K.__ = t);
          }), ht.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && o.push(c), l = Ie(n);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(k, c.__s, h), b && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(y, p, m);
        });
      }
      if (c.context = h, c.props = k, c.__P = e, c.__e = !1, x = R.__r, C = 0, b) c.state = c.__s, c.__d = !1, x && x(t), f = c.render(c.props, c.state, c.context), ht.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, x && x(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++C < 25);
      c.state = c.__s, c.getChildContext != null && (r = we(we({}, r), c.getChildContext())), b && !w && c.getSnapshotBeforeUpdate != null && (m = c.getSnapshotBeforeUpdate(y, p)), E = f != null && f.type === oe && f.key == null ? Xi(f.props.children) : f, l = Qi(e, yt(E) ? E : [E], t, n, r, s, a, o, l, u, d), c.base = t.__e, t.__u &= -161, c.__h.length && o.push(c), v && (c.__E = c.__ = null);
    } catch (K) {
      if (o.length = g, t.__v = null, u || a != null) {
        if (K.then) {
          for (t.__u |= u ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
          a != null && (a[a.indexOf(l)] = null), t.__e = l;
        } else if (a != null) for (A = a.length; A--; ) Kt(a[A]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), K.then || Yi(t), R.__e(K, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = Wn(n.__e, t, n, r, s, a, o, u, d);
  return (f = R.diffed) && f(t), 128 & t.__u ? void 0 : l;
}
function Yi(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Yi));
}
function Ji(e, t, n) {
  for (var r = 0; r < n.length; r++) Jt(n[r], n[++r], n[++r]);
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
function Xi(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : yt(e) ? e.map(Xi) : e.constructor !== void 0 ? null : we({}, e);
}
function Wn(e, t, n, r, s, a, o, l, u) {
  var d, f, g, c, w, y, p, m = n.props || dt, v = t.props, k = t.type;
  if (k == "svg" ? s = "http://www.w3.org/2000/svg" : k == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((w = a[d]) && "setAttribute" in w == !!k && (k ? w.localName == k : w.nodeType == 3)) {
      e = w, a[d] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode(v);
    e = document.createElementNS(s, k, v.is && v), l && (R.__m && R.__m(t, a), l = !1), a = null;
  }
  if (k == null) m === v || l && e.data == v || (e.data = v);
  else {
    if (a = k == "textarea" && v.defaultValue != null ? null : a && wt.call(e.childNodes), !l && a != null) for (m = {}, d = 0; d < e.attributes.length; d++) m[(w = e.attributes[d]).name] = w.value;
    for (d in m) w = m[d], d == "dangerouslySetInnerHTML" ? g = w : d == "children" || d in v || d == "value" && "defaultValue" in v || d == "checked" && "defaultChecked" in v || Xe(e, d, null, w, s);
    for (d in v) w = v[d], d == "children" ? c = w : d == "dangerouslySetInnerHTML" ? f = w : d == "value" ? y = w : d == "checked" ? p = w : l && typeof w != "function" || m[d] === w || Xe(e, d, w, m[d], s);
    if (f) l || g && (f.__html == g.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (g && (e.innerHTML = ""), Qi(t.type == "template" ? e.content : e, yt(c) ? c : [c], t, n, r, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, a, o, a ? a[0] : n.__k && Ie(n, 0), l, u), a != null) for (d = a.length; d--; ) Kt(a[d]);
    l && k != "textarea" || (d = "value", k == "progress" && y == null ? e.removeAttribute("value") : y != null && (y !== e[d] || k == "progress" && !y || k == "option" && y != m[d]) && Xe(e, d, y, m[d], s), d = "checked", p != null && p != e[d] && Xe(e, d, p, m[d], s));
  }
  return e;
}
function Jt(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    R.__e(s, n);
  }
}
function Zi(e, t, n) {
  var r, s;
  if (R.unmount && R.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || Jt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      R.__e(a, t);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = e.__k) for (s = 0; s < r.length; s++) r[s] && Zi(r[s], t, n || typeof e.type != "function");
  n || Kt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Hn(e, t, n) {
  return this.constructor(e, n);
}
function Nn(e, t, n) {
  var r, s, a, o;
  t == document && (t = document.documentElement), R.__ && R.__(e, t), s = (r = !1) ? null : t.__k, a = [], o = [], Yt(t, e = t.__k = Ln(oe, null, [e]), s || dt, dt, t.namespaceURI, s ? null : t.firstChild ? wt.call(t.childNodes) : null, a, s ? s.__e : t.firstChild, r, o), Ji(a, e, o), e.props.children = null;
}
function On(e) {
  function t(n) {
    var r, s;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (s = {})[t.__c] = this, this.getChildContext = function() {
      return s;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && r.forEach(function(o) {
        o.__e = !0, Ht(o);
      });
    }, this.sub = function(a) {
      r.add(a);
      var o = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        r && r.delete(a), o && o.call(a);
      };
    }), n.children;
  }
  return t.__c = "__cC" + Vi++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
wt = ht.slice, R = { __e: function(e, t, n, r) {
  for (var s, a, o; t = t.__; ) if ((s = t.__c) && !s.__) try {
    if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(e)), o = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), o = s.__d), o) return s.__E = s;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Oi = 0, at.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = we({}, this.state), typeof e == "function" && (e = e(we({}, n), this.props)), e && we(n, e), e != null && this.__v && (t && this._sb.push(t), Ht(this));
}, at.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ht(this));
}, at.prototype.render = oe, ke = [], Bi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, zi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ut.__r = 0, qt = Math.random().toString(8), st = "__d" + qt, Ve = "__a" + qt, Ui = /(PointerCapture)$|Capture$/i, Qt = 0, Dt = gi(!1), Wt = gi(!0), Vi = 0;
var Bn = 0;
function i(e, t, n, r, s, a) {
  t || (t = {});
  var o, l, u = t;
  if ("ref" in u) for (l in u = {}, t) l == "ref" ? o = t[l] : u[l] = t[l];
  var d = { type: e, props: u, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Bn, __i: -1, __u: 0, __source: s, __self: a };
  if (typeof e == "function" && (o = e.defaultProps)) for (l in o) u[l] === void 0 && (u[l] = o[l]);
  return R.vnode && R.vnode(d), d;
}
var Me, P, St, wi, Ge = 0, en = [], D = R, yi = D.__b, vi = D.__r, bi = D.diffed, _i = D.__c, ki = D.unmount, xi = D.__;
function Je(e, t) {
  D.__h && D.__h(P, e, Ge || t), Ge = 0;
  var n = P.__H || (P.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function q(e) {
  return Ge = 1, zn(tn, e);
}
function zn(e, t, n) {
  var r = Je(Me++, 2);
  if (r.t = e, !r.__c && (r.__ = [tn(void 0, t), function(l) {
    var u = r.__N ? r.__N[0] : r.__[0], d = r.t(u, l);
    u !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = P, !P.__f)) {
    var s = function(l, u, d) {
      if (!r.__c.__H) return !0;
      var f = !1, g = r.__c.props !== l;
      if (r.__c.__H.__.some(function(w) {
        if (w.__N) {
          f = !0;
          var y = w.__[0];
          w.__ = w.__N, w.__N = void 0, y !== w.__[0] && (g = !0);
        }
      }), a) {
        var c = a.call(this, l, u, d);
        return f ? c || g : c;
      }
      return !f || g;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate, o = P.componentWillUpdate;
    P.componentWillUpdate = function(l, u, d) {
      if (this.__e) {
        var f = a;
        a = void 0, s(l, u, d), a = f;
      }
      o && o.call(this, l, u, d);
    }, P.shouldComponentUpdate = s;
  }
  return r.__N || r.__;
}
function z(e, t) {
  var n = Je(Me++, 3);
  !D.__s && Xt(n.__H, t) && (n.__ = e, n.u = t, P.__H.__h.push(n));
}
function Un(e, t) {
  var n = Je(Me++, 4);
  !D.__s && Xt(n.__H, t) && (n.__ = e, n.u = t, P.__h.push(n));
}
function ye(e) {
  return Ge = 5, ue(function() {
    return { current: e };
  }, []);
}
function ue(e, t) {
  var n = Je(Me++, 7);
  return Xt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ve(e, t) {
  return Ge = 8, ue(function() {
    return e;
  }, t);
}
function Vn(e) {
  var t = P.context[e.__c], n = Je(Me++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(P)), t.props.value) : e.__;
}
function Gn() {
  for (var e; e = en.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(ot), t.__h.some(Nt), t.__h = [];
    } catch (n) {
      t.__h = [], D.__e(n, e.__v);
    }
  }
}
D.__b = function(e) {
  P = null, yi && yi(e);
}, D.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), xi && xi(e, t);
}, D.__r = function(e) {
  vi && vi(e), Me = 0;
  var t = (P = e.__c).__H;
  t && (St === P ? (t.__h = [], P.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(ot), t.__h.some(Nt), t.__h = [], Me = 0)), St = P;
}, D.diffed = function(e) {
  bi && bi(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (en.push(t) !== 1 && wi === D.requestAnimationFrame || ((wi = D.requestAnimationFrame) || Qn)(Gn)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), St = P = null;
}, D.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(ot), n.__h = n.__h.filter(function(r) {
        return !r.__ || Nt(r);
      });
    } catch (r) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], D.__e(r, n.__v);
    }
  }), _i && _i(e, t);
}, D.unmount = function(e) {
  ki && ki(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      ot(r);
    } catch (s) {
      t = s;
    }
  }), n.__H = void 0, t && D.__e(t, n.__v));
};
var $i = typeof requestAnimationFrame == "function";
function Qn(e) {
  var t, n = function() {
    clearTimeout(r), $i && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  $i && (t = requestAnimationFrame(n));
}
function ot(e) {
  var t = P, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), P = t;
}
function Nt(e) {
  var t = P;
  e.__c = e.__(), P = t;
}
function Xt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function tn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function le(e) {
  return e.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}
const Kn = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work".split(" ")
);
function nn(e) {
  return le(e).replace(/[^a-z0-9+#/. -]/g, " ").split(/[\s/]+/).map((t) => t.replace(/^[.-]+|[.-]+$/g, "")).filter((t) => t.length > 1 && !Kn.has(t)).map(Yn);
}
function Yn(e) {
  if (e.length <= 4) return e;
  for (const t of ["ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"])
    if (e.endsWith(t) && e.length - t.length >= 4) return e.slice(0, -t.length);
  return e;
}
const F = (e) => !!e && e.status === "verified" && e.public_safe, Jn = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function Xn(e) {
  const t = e.length >= 4 && /[a-rt-z]$/.test(e) ? "s?" : "";
  return new RegExp(`(?<![a-z0-9])${Jn(e)}${t}(?![a-z0-9+#])`, "g");
}
function Zn(e) {
  const t = e;
  t.claim = new Map(e.claims.map((s) => [s.id, s])), t.entity = new Map(e.entities.map((s) => [s.id, s])), t.skill = new Map(e.skills.map((s) => [s.id, s])), t.gap = new Map(e.gaps.map((s) => [s.id, s])), t.role = new Map(e.roles.map((s) => [s.id, s])), t.archByEntity = new Map(e.architectures.map((s) => [s.entity, s]));
  const n = [], r = (s, a) => {
    const o = le(s);
    o && n.push({ term: o, ref: { ...a, term: s }, re: Xn(o) });
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
async function es(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`evidence ${t.status}`);
  return Zn(await t.json());
}
const ee = (e, t) => e.entity.get(t)?.short ?? t, vt = (e, t) => e.skill.get(t)?.name ?? e.gap.get(t)?.name ?? t;
function bt(e, t) {
  const n = le(t), r = [], s = /* @__PURE__ */ new Map();
  for (const a of e.aliases) {
    a.re.lastIndex = 0;
    let o;
    for (; o = a.re.exec(n); ) {
      const l = o.index, u = l + o[0].length;
      if (r.some(([g, c]) => l < c && u > g)) continue;
      r.push([l, u]);
      const d = a.ref.near ? `near:${a.ref.term}` : a.ref.id, f = s.get(d);
      f ? f.count++ : s.set(d, { ...a.ref, count: 1, index: l });
    }
  }
  return [...s.values()].sort((a, o) => a.index - o.index);
}
const ts = {
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
}, At = Object.entries(ts).map(
  ([e, t]) => [e, new RegExp(`(?<![a-z0-9])(${t.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`)]
);
function sn(e) {
  const t = le(e);
  return At.filter(([, n]) => n.test(t)).map(([n]) => n).sort((n, r) => t.search(At.find(([s]) => s === n)[1]) - t.search(At.find(([s]) => s === r)[1]));
}
const Ci = /* @__PURE__ */ new WeakMap();
function is(e) {
  let t = Ci.get(e);
  if (t) return t;
  const n = e.claims.filter(F).map((s) => {
    const a = [e.entity.get(s.entity)?.name ?? "", ...s.tags.map((o) => e.skill.get(o)?.name ?? "")].join(" ");
    return { claim: s, toks: nn(`${s.text} ${a}`) };
  }), r = /* @__PURE__ */ new Map();
  for (const s of n) new Set(s.toks).forEach((a) => r.set(a, (r.get(a) ?? 0) + 1));
  return t = { docs: n, df: r, avg: n.reduce((s, a) => s + a.toks.length, 0) / Math.max(1, n.length) }, Ci.set(e, t), t;
}
function rn(e, t, n = {}) {
  const r = is(e), s = [...new Set(nn(t))], a = new Set(n.concepts ?? bt(e, t).filter((g) => g.kind === "skill").map((g) => g.id)), o = new Set(n.entities ?? sn(t)), l = r.docs.length, u = 1.2, d = 0.75, f = [];
  for (const g of r.docs) {
    let c = 0;
    for (const w of s) {
      const y = g.toks.filter((v) => v === w).length;
      if (!y) continue;
      const p = r.df.get(w) ?? 0, m = Math.log(1 + (l - p + 0.5) / (p + 0.5));
      c += m * (y * (u + 1) / (y + u * (1 - d + d * g.toks.length / r.avg)));
    }
    for (const w of g.claim.tags) a.has(w) && (c += 2.5);
    o.has(g.claim.entity) && (c += 3), g.claim.kind === "limitation" && (c *= 0.8), c > 0 && f.push({ claim: g.claim, score: c });
  }
  return f.sort((g, c) => c.score - g.score).slice(0, n.limit ?? 12);
}
const Ei = { public_artifact: 1, self_reported: 0.8 };
function ce(e, t, n = {}) {
  const r = e.gap.get(t), s = (r?.partial ?? []).map((u) => e.claim.get(u)).filter((u) => !!u && u.status === "verified" && u.public_safe);
  if (r && s.length)
    return {
      id: t,
      label: r.name,
      category: "related",
      priority: n.priority,
      claims: s.map((u) => u.id),
      entities: Be(s.map((u) => u.entity)),
      statement: r.statement
    };
  if (r) {
    const u = r.related.flatMap((d) => e.statableBySkill.get(d) ?? []);
    return {
      id: t,
      label: r.name,
      category: r.verify ? "verification" : "missing",
      priority: n.priority,
      claims: [],
      entities: Be(u.map((d) => d.entity)).slice(0, 4),
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
      label: Mt(n.near),
      term: n.near,
      category: o.length ? "related" : "missing",
      priority: n.priority,
      claims: o.slice(0, 6).map((u) => u.id),
      entities: Be(o.map((u) => u.entity)),
      via: t,
      statement: o.length ? `${Mt(n.near)} itself is not demonstrated. The closest evidence is ${a.name.toLowerCase()}.` : `${Mt(n.near)} is not demonstrated.`
    };
  if (o.length) {
    const u = o.some((d) => d.strength === "public_artifact");
    return {
      id: t,
      label: a.name,
      category: "direct",
      priority: n.priority,
      claims: It(o).map((d) => d.id),
      entities: Be(It(o).map((d) => d.entity)),
      strength: u ? "artifact" : "self_reported",
      pending: l
    };
  }
  for (const u of a.related) {
    const d = e.statableBySkill.get(u) ?? [];
    if (d.length)
      return {
        id: t,
        label: a.name,
        category: "related",
        priority: n.priority,
        via: u,
        claims: It(d).slice(0, 6).map((f) => f.id),
        entities: Be(d.map((f) => f.entity)),
        pending: l,
        statement: `No direct evidence for ${a.name.toLowerCase()}. The closest is ${vt(e, u).toLowerCase()}.`
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
function It(e) {
  return [...e].sort((t, n) => (Ei[n.strength] ?? 0) - (Ei[t.strength] ?? 0) || (t.kind === "limitation" ? 1 : 0) - (n.kind === "limitation" ? 1 : 0));
}
function Zt(e, t, n, r = {}) {
  const s = { direct: 0, related: 0, verification: 0, missing: 0 };
  n.forEach((u) => s[u.category]++);
  const a = /* @__PURE__ */ new Map();
  for (const u of n)
    if (!(u.category !== "direct" && u.category !== "related"))
      for (const d of u.entities) {
        const f = a.get(d) ?? { score: 0, requirements: [] };
        f.score += (u.category === "direct" ? 1 : 0.4) * (d === "imw" ? 0.4 : 1), f.requirements.push(u.id), a.set(d, f);
      }
  const o = ["direct", "related", "verification", "missing"], l = { required: 0, preferred: 1, mentioned: 2, undefined: 1 };
  return {
    title: t,
    source: "role",
    notes: [],
    ...r,
    requirements: [...n].sort((u, d) => o.indexOf(u.category) - o.indexOf(d.category) || l[String(u.priority)] - l[String(d.priority)]),
    counts: s,
    entities: [...a.entries()].map(([u, d]) => ({ id: u, ...d })).filter((u) => e.entity.has(u.id)).sort((u, d) => d.score - u.score)
  };
}
function Ce(e, t) {
  const n = e.role.get(t);
  if (!n) throw new Error(`unknown role ${t}`);
  const r = [...n.requirements.map((a) => ce(e, a)), ...n.gaps.map((a) => ce(e, a))], s = [n.level_note, e.subject.level_note].filter(Boolean);
  return Zt(e, n.title, r, { source: "role", roleId: t, notes: s });
}
const ie = {
  direct: "Direct evidence",
  related: "Related evidence",
  verification: "Verification required",
  missing: "Not currently demonstrated"
}, Be = (e) => [...new Set(e)], ns = /* @__PURE__ */ new Set(["ai", "bi", "ml", "aws", "gcp", "sql", "api", "asr", "tts", "sse", "ec2", "s3", "hl7", "cda", "k6", "gpu", "etl"]), Mt = (e) => e.replace(/\b[a-z][a-z0-9]*/g, (t) => ns.has(t) ? t.toUpperCase() : t.charAt(0).toUpperCase() + t.slice(1)), Ze = { bachelor: 1, master: 2, phd: 3, mba: 0 }, qi = { bachelor: "Bachelor's", master: "Master's", phd: "PhD", mba: "MBA" }, ss = [
  ["bachelor", /\bbachelor|\b(?:b\.s\.?|b\.sc\.?|bsc|b\.a\.|b\.tech|btech|b\.e\.)(?![a-z])|\b(?:bs|ba)(?=\s*(?:\/|or\b|in\b|degree\b|,))|\b(?:undergraduate|college|university|4-year|four-year) degree/i],
  ["master", /\bmaster'?s\b|\bmasters\b|\bmaster of\b|\bmaster degree|\b(?:m\.s\.?|m\.sc\.?|msc|m\.tech|mtech|m\.eng\.?|meng)(?![a-z])|(?<![a-z])ms(?=\s*(?:\/|or\b|in\b|degree\b|,|$))|\b(?:graduate|advanced|post-?graduate) degree/i],
  ["phd", /\bph\.? ?d\b|\bdoctorate\b|\bdoctoral\b/i],
  ["mba", /\bmba\b/i]
], rs = /\b(?:degree|bachelor'?s?|master'?s?|ph\.? ?d|doctorate|bs|ms|ba|b\.s\.?|m\.s\.?|bsc|msc)\s+(?:degree\s+)?in\s+(.+)/i, as = /computer|computing|quantitative|\bstem\b|technical|math|statistic|data|machine learning|artificial intelligence|\bai\b|information|software|engineering|analytics|related|relevant|equivalent|similar/i, os = /[,;:(]|\s(?:or|and|such as|e\.g|including|preferred|required|with|from|plus)\b/i, ls = /\bdegree\b|\brequired\b|\bpreferred\b|\bor equivalent\b|\brelated field\b|\bminimum\b/i, cs = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 }, ds = /\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*(?:(?:-|to)\s*(?:\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*)?(?:years?|yrs?)\b/i, hs = /experien|professional|industry|hands-on|track record|working|background|building|developing|shipping|\bas an? /i, us = /\b(?:hybrid|on-?site|in[- ]office|in[- ]person|remote|days? (?:a|per) week|relocat\w*|visa|sponsorship|work authori[sz]ation|authori[sz]ed to work|citizenship|security clearance|clearance|background check|drug (?:test|screen)\w*|travel|salary|compensation|pay range|benefits|401\(?k\)?|pto|paid time off|shifts?|commute|time ?zones?|full[- ]time|part[- ]time|location)\b/i, ps = "Work-arrangement items (location, schedule, travel, authorization) are not skills, so they are left out of this comparison. Ask Rahul about them directly.", ms = (e) => e.replace(/[’‘`]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ").trim(), fs = (e) => e.charAt(0).toUpperCase() + e.slice(1), gs = (e) => [...new Set(e)];
function ws(e) {
  return e.length < 2 ? e.join("") : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function ys(e) {
  const t = ss.filter(([, n]) => n.test(e)).map(([n]) => n);
  return t.length > 1 ? t.filter((n) => n !== "mba") : t;
}
function vs(e, t, n) {
  const r = ys(t), s = e.subject.credentials;
  if (!r.length || !s) return null;
  const o = t.match(rs)?.[1] ?? "", l = o.split(os)[0].replace(/^(?:a|an|the)\s+/i, "").split(" ").slice(0, 5).join(" ").trim(), u = r[r.length - 1], d = `${ws(r.map((m) => qi[m]))}${u === "phd" || u === "mba" ? "" : " degree"}${l ? ` in ${l}` : ""}`, f = Math.min(...r.map((m) => Ze[m])), g = [...s.degrees].sort((m, v) => Ze[m.level] - Ze[v.level]), c = f > 0 ? g.filter((m) => Ze[m.level] >= f) : [], w = { id: `degree:${r.join("+")}`, label: d, priority: n, entities: ["education"], strength: "self_reported" };
  if (c.length) {
    const m = `Holds ${g.slice().reverse().map((k) => k.short).join(" and ")}.`, v = !!l && !as.test(o);
    return {
      ...w,
      category: v ? "related" : "direct",
      claims: c.map((k) => k.claim),
      statement: v ? `${m} Both are in ${s.fields}; the description names a different field.` : m
    };
  }
  const y = g[g.length - 1], p = r.map((m) => m === "phd" ? "a PhD" : m === "mba" ? "an MBA" : qi[m]).join(" or ");
  return { ...w, category: "missing", claims: [y.claim], statement: `His highest degree is ${y.short}; he does not hold ${p}.` };
}
function bs(e, t, n) {
  const r = t.match(ds), s = e.subject.credentials?.experience;
  if (!r || !s) return null;
  const a = Number(r[1]) || cs[r[1].toLowerCase()] || 0;
  if (a < 1 || a > 29) return null;
  const o = fs(t.slice(r.index).split(/[.;(]|,\s/)[0].slice(0, 70).trim()), l = s.years, u = a <= l ? "direct" : a === l + 1 ? "related" : "missing", d = `${l}+ years of professional ML and data-science experience`, f = u === "direct" ? `${d}: ${s.summary}.` : u === "related" ? `${d}, close to the ${a}+ asked for. Roles: ${s.summary}.` : `${d}, short of the ${a}+ years asked for. Roles: ${s.summary}.`, g = gs(s.claims.map((c) => e.claim.get(c)?.entity).filter((c) => !!c));
  return { id: `years:${a}`, label: o, category: u, priority: n, claims: [...s.claims], entities: g, strength: "self_reported", statement: f };
}
function an(e, t, n, r = !1) {
  const s = [];
  for (const a of ms(t).split(/;\s|\.\s+(?=[A-Z])/)) {
    if (!r || ls.test(a)) {
      const o = vs(e, a, n);
      o && s.push(o);
    }
    if (!r || hs.test(a)) {
      const o = bs(e, a, n);
      o && s.push(o);
    }
  }
  return s;
}
const _s = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/, ei = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/, ks = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/, xs = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;
function $s(e) {
  const t = e.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(t)) return null;
  const n = le(t).replace(/^#+\s*/, ""), r = n.split(" ").length;
  return n.length > 0 && n.length < 70 && (/[:：]$/.test(n) || /^#/.test(t) || r <= 5 && !/[.,;]/.test(n)) ? _s.test(n) ? "skip" : ei.test(n) ? "preferred" : ks.test(n) ? "required" : xs.test(n) ? "mentioned" : null : null;
}
function Cs(e, t) {
  const n = t.split(/\r?\n/);
  let r = "mentioned";
  const s = /* @__PURE__ */ new Map(), a = [], o = { required: 3, preferred: 2, mentioned: 1, skip: 0 };
  for (const w of n) {
    if (!w.trim()) continue;
    const y = $s(w);
    if (y) {
      r = y;
      continue;
    }
    if (r === "skip") continue;
    const p = ei.test(le(w)) ? "preferred" : r;
    a.push({ text: w, priority: p });
    for (const m of bt(e, w)) {
      const v = m.near ? `near:${m.term.toLowerCase()}` : m.id, k = s.get(v);
      k ? (k.count += m.count, o[p] > o[k.priority] && (k.priority = p)) : s.set(v, { id: m.id, near: m.near ? m.term.toLowerCase() : void 0, priority: p, count: m.count });
    }
  }
  const l = le(t), u = [...l.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((w) => Number(w[1])).filter((w) => w > 0 && w < 30), d = l.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/), f = new Set([...s.values()].filter((w) => !w.near && e.skill.has(w.id)).map((w) => w.id));
  let g, c = 0;
  for (const w of e.roles) {
    const y = w.requirements.filter((p) => f.has(p)).length / w.requirements.length;
    y > c && (c = y, g = w.id);
  }
  return {
    concepts: [...s.values()],
    quals: a,
    years: u.length ? Math.max(...u) : void 0,
    seniority: d?.[1],
    closestRole: c >= 0.25 ? g : void 0
  };
}
function pt(e, t, n = []) {
  const r = Cs(e, t), s = [], a = /* @__PURE__ */ new Set(), o = { required: 0, preferred: 1, mentioned: 2 }, l = [...r.concepts].sort((c, w) => o[c.priority] - o[w.priority] || w.count - c.count).slice(0, 26);
  for (const c of l) {
    const w = ce(e, c.id, { near: c.near, priority: c.priority === "skip" ? "mentioned" : c.priority });
    a.has(w.id) || (a.add(w.id), s.push(w));
  }
  const u = (c) => {
    a.has(c.id) || (a.add(c.id), s.push(c));
  };
  for (const c of r.quals) an(e, c.text, c.priority === "skip" ? "mentioned" : c.priority, c.priority === "mentioned").forEach(u);
  let d = !1;
  for (const c of n) {
    const w = Es(e, c, ei.test(le(c)) ? "preferred" : "required");
    w.covs.forEach(u), d || (d = w.logistics);
  }
  const f = [], g = Math.max(0, ...s.filter((c) => c.id.startsWith("years:")).map((c) => Number(c.id.slice(6))));
  return g > (e.subject.credentials?.experience.years ?? 2) ? f.push(`The description asks for ${g}+ years. ${e.subject.level_note}`) : r.seniority && f.push(`The description uses the word "${r.seniority}". ${e.subject.level_note}`), d && f.push(ps), s.length || f.push("No recognizable technical requirements were found. Try pasting the requirements section."), Zt(e, "Your job description", s, {
    source: "jd",
    notes: f,
    closestRole: r.closestRole ? e.role.get(r.closestRole)?.title : void 0,
    roleId: r.closestRole
  });
}
function Es(e, t, n = "required") {
  const r = t.trim().slice(0, 160), s = an(e, r, n);
  for (const a of bt(e, r)) s.push(ce(e, a.id, { near: a.near ? a.term.toLowerCase() : void 0, priority: n }));
  return s.length ? { covs: s, logistics: !1 } : us.test(r) ? { covs: [], logistics: !0 } : { covs: r.length > 2 ? [ce(e, r, { priority: n })] : [], logistics: !1 };
}
const ti = (e) => e.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(e), on = /\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|best candidate|excellent fit|great fit|strong fit|perfect|10\s?\/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|highly recommend|must hire|unmatched|brilliant|superstar)\b/i, qs = /(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)/i, Ss = /(\b(rate|score|rank)\b.*\b(him|rahul|candidate)\b|\bout of (10|ten|100)\b|percent(age)? (match|fit)|%\s?(match|fit)|match (score|percentage)|fit score)/i, As = /\b(weather|joke|poem|recipe|song|lyrics|stock price|bitcoin|politic|election|horoscope|translate this|write (me )?(an? )?(essay|story|cover letter)|capital of|who won the)\b/i, Is = (e) => [...new Set(e)], Ms = /(how (can|could|do|would) you (say|know|tell|claim|conclude)|what makes you (say|think)|why (do|would) you (say|think)|prove (it|that|this)|how (does|do|did) (that|this|it) (make sense|prove|show|follow|answer|mean)|how (that|this|it) makes? sense|(that|this|it) (doesn'?t|does not|didn'?t) make (any )?sense|makes? no sense|what('?s| is) the (evidence|proof|reasoning|logic)|explain (that|this|why|your reasoning|how)|\bhow so\b|^really\b|are you sure|i don'?t (get|understand|buy|see)|not convinced|so what|why does (that|this) matter|^why\??$|^but (how|why|what)\b)/, Si = /* @__PURE__ */ new Map(), js = (e) => {
  let t = Si.get(e.id);
  return t || Si.set(e.id, t = e.match.map((n) => new RegExp(n, "i"))), t;
};
function Ts(e, t) {
  const n = le(t);
  let r, s = 0;
  for (const a of e.topics ?? []) {
    const o = js(a).reduce((l, u) => l + (u.test(n) ? 1 : 0), 0);
    o > s && (r = a, s = o);
  }
  return r;
}
const Pe = (e, t) => t ? e.topics?.find((n) => n.id === t) : void 0;
function Rs(e, t) {
  const n = (r) => Pe(e, r);
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
  const n = e.sources ?? Is([...e.leadCites ?? [], ...e.points.flatMap((r) => r.cites), ...e.takeawayCites ?? []]);
  return n.length && t.push({ type: "claims", title: "Sources", ids: n, collapsed: !0 }), t;
}
function ln(e, t, n) {
  return { blocks: t, followups: n.followups ?? [], actions: n.actions ?? [], engine: "evidence", intent: e, entities: n.entities ?? [], topic: n.topic };
}
const Ls = (e, t) => t.map((n) => e.entity.get(n)).filter((n) => !!n && n.kind !== "education").slice(0, 2).map((n) => ({ kind: "anchor", label: `See ${n.short} on the portfolio`, target: n.anchor }));
function Qe(e, t, n, r = {}) {
  const s = Rs(e, t), a = n === "recruiter" || n === "founder" ? [] : s.failures.filter((u) => e.failures.some((d) => d.id === u)), o = r.challenged && r.again ? s.plain ?? `Put simply: ${s.takeaway?.text.replace(/^(For your team|Bottom line): /, "") ?? t.lead.text}` : r.challenged && s.why ? `Fair question. ${s.why}` : r.lead ?? t.lead.text, l = se({
    lead: o,
    leadCites: r.challenged ? [] : t.lead.cites,
    points: s.points,
    takeaway: s.takeaway?.text,
    takeawayCites: s.takeaway?.cites,
    extra: a.length ? [{ type: "failures", ids: a.slice(0, 2) }] : []
  });
  return ln(r.challenged ? "reasoning" : "topic_answer", l, {
    entities: t.entities,
    topic: t.id,
    actions: t.actions ?? Ls(e, t.entities),
    followups: t.followups
  });
}
function Ps(e, t, n) {
  const r = n.entities?.map((l) => e.entity.get(l)).find(Boolean), s = r ? (e.statableByEntity.get(r.id) ?? []).filter((l) => l.kind !== "limitation").slice(0, 2) : [], a = [
    { label: "What the answer rests on", text: "Only verified evidence: public code, data, recordings and papers, plus his employment history, with each item labelled by how it can be checked.", cites: [] }
  ];
  r && a.push({ label: `What it shows about ${r.short}`, text: r.summaries[t] ?? r.tagline, cites: s.map((l) => l.id) }), a.push({ label: "How it connects to your question", text: 'Those are the closest verified items to what you asked. If you meant something more specific, ask it directly, for example "How does he handle disagreements in a team?", and you will get an answer to that exact question.', cites: [] });
  const o = se({
    lead: n.question ? `Fair question. The previous answer was about "${n.question}". Here is the reasoning behind it:` : "Fair question. Here is the reasoning:",
    points: a
  });
  return ln("reasoning", o, {
    entities: r ? [r.id] : [],
    followups: ["How does he work in a team?", "What has Rahul actually shipped?", "Why should we hire Rahul?"]
  });
}
function Fs(e, t) {
  const n = /* @__PURE__ */ new Set(["python", "metrics", "healthcare", "fintech", "product_judgment", "testing"]), r = t.tags.find((s) => !n.has(s)) ?? t.tags[0];
  return r ? vt(e, r) : e.entity.get(t.entity)?.short ?? "Evidence";
}
function Ke(e, t, n = 2) {
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
function cn(e, t) {
  return t.filter(F).map((n) => ({ label: Fs(e, n), text: n.text, cites: [n.id] }));
}
const T = (e, t) => t.test(e), Q = (e) => [...new Set(e)];
function Ai(e, t) {
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
  const a = [...t].filter(F).sort((u, d) => Ai(d, n) - Ai(u, n)), o = /* @__PURE__ */ new Map(), l = [];
  for (const u of a) {
    const d = o.get(u.entity) ?? 0;
    if (!(d >= r || l.includes(u)) && (o.set(u.entity, d + 1), l.push(u), l.length >= s))
      break;
  }
  return l;
}
function ii(e, t) {
  return Q(t.flatMap((n) => e.statableBySkill.get(n) ?? []));
}
function Ae(e, t) {
  return (e.statableByEntity.get(t) ?? []).filter((n) => n.kind === "limitation");
}
function N(e) {
  return e.map((t) => t.id);
}
function ni(e) {
  return { kind: "anchor", label: `Jump to ${e.short} on the portfolio`, target: e.anchor };
}
function Fe(e, t, n = {}) {
  const r = e.entity.get(t);
  if (!r) return [];
  const s = [];
  n.xray !== !1 && e.archByEntity.has(t) && s.push({ kind: "mode", label: `X-Ray ${r.short}`, target: "xray", arg: t }), s.push(ni(r));
  for (const a of r.links.slice(0, 2)) s.push({ kind: "url", label: a.label, target: a.url });
  return s;
}
function B(e, t, n = []) {
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
  return a.filter(([l]) => !n.includes(l)).filter(([l]) => l === "architecture" ? o : !0).filter(([l]) => l === "failure" ? e.failures.some((u) => u.entity === t) || Ae(e, t).length > 0 : !0).filter(([l]) => l === "why" ? e.decisions.some((u) => u.entity === t) : !0).map(([, l]) => l).slice(0, 5);
}
const _t = [
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
    followups: n.followups ?? _t.slice(0, 4),
    actions: n.actions ?? [],
    engine: "evidence",
    intent: e,
    entities: n.entities ?? [],
    basis: n.basis,
    topic: n.topic
  };
}
function si(e) {
  return Q(e.blocks.flatMap((t) => t.type === "claims" ? t.ids : t.type === "p" || t.type === "takeaway" ? t.cites ?? [] : t.type === "points" ? t.items.flatMap((n) => n.cites) : []));
}
function Ds(e) {
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
function Ws(e, t) {
  const n = si(t);
  return t.basis = {
    retrieved: t.basis?.retrieved ?? n,
    checks: [
      { label: "Only verified, public-safe claims cited", ok: n.every((r) => F(e.claim.get(r))) },
      { label: "No fit scores, rankings or praise", ok: !on.test(Ds(t)) },
      { label: "Every cited claim links to a source", ok: n.every((r) => (e.claim.get(r)?.sources.length ?? 0) > 0) }
    ]
  }, t;
}
const Hs = [
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
function Ns(e) {
  const t = le(e);
  return Hs.find(([n]) => n.test(t))?.[1];
}
function Os(e, t, n) {
  return Ws(e, Bs(e, t, n));
}
function Bs(e, t, n) {
  const r = t.trim(), s = le(r), a = n.persona;
  if (!s) return zs(e);
  if (qs.test(r))
    return S("injection", [
      { type: "p", text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." }
    ], { followups: _t.slice(0, 4) });
  if (ti(r)) return Ys(e, r);
  if (Ss.test(s)) {
    const m = Pe(e, "why_hire"), v = "I won't put a number on a person, because a score hides the evidence you actually need. Here is the case instead, point by point:";
    if (m) return { ...Qe(e, m, a, { lead: v }), intent: "no_scores", actions: [{ kind: "mode", label: "Check against your job description", target: "role", arg: "jd" }] };
  }
  const o = sn(r), l = bt(e, r), u = Q(l.map((m) => m.id));
  if (As.test(s) && !o.length && !l.length)
    return S("off_topic", [{ type: "p", text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  if (T(s, /\b(contact|email|reach (him|rahul|out)|get in touch|linkedin|resume|cv|available|availability|open to (work|roles|opportunities)|job search|start date)\b/)) return Us(e);
  const d = Ts(e, r);
  if (Ms.test(s) && (d || !o.length && !l.length)) {
    const m = d ?? Pe(e, n.lastTopic);
    return m ? Qe(e, m, a, { challenged: !0, again: n.lastIntent === "reasoning" && n.lastTopic === m.id }) : Ps(e, a, { question: n.lastQuestion, entities: n.lastEntities });
  }
  const f = Ks(e, s, r, o, u, a);
  if (f) return f;
  const g = Ns(s);
  if (g && T(s, /(interviewer|interview questions|would .* ask)/)) return Ti(e, g);
  if (g && T(s, /challenge/)) return Ri(e, g);
  if (g && T(s, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return Ii(e, g);
  if (n.roleId && T(s, /(this role|the role|this evidence|for this|^challenge)/))
    return T(s, /challenge/) ? Ri(e, n.roleId) : T(s, /(interview|ask)/) ? Ti(e, n.roleId) : Ii(e, n.roleId);
  if (T(s, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/))
    return S(
      "role_prompt",
      [{ type: "p", text: "Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated." }],
      { actions: [{ kind: "mode", label: "Select a role", target: "role" }, { kind: "mode", label: "Paste a job description", target: "role", arg: "jd" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an ML Engineer role", "Evaluate Rahul for an LLM Application Engineer role"] }
    );
  if (T(s, /\b(compare|versus|vs\.?|difference between|differ)\b/) && o.length >= 2) return Mi(e, o.slice(0, 2), a);
  if (T(s, /\b(compare|versus|vs\.?)\b/) && o.length === 1 && n.lastEntities?.length) {
    const m = n.lastEntities.find((v) => v !== o[0]);
    if (m) return Mi(e, [m, o[0]], a);
  }
  if (T(s, /(who is (rahul|he)|about rahul|about him|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr|tell me about (rahul|him)$)/)) return ar(e);
  if (d && o.every((m) => d.entities.includes(m))) return sr(e, d, l.map((m) => m.id), a);
  if (s.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/) || T(s, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const m = l.filter((b) => b.kind === "skill").map((b) => b.id), v = et(s), k = m.length ? m : v;
    if (k.length) return ji(e, k, a, s);
  }
  if (T(s, /\b(strongest|best)\b/) && et(s).length) return ji(e, et(s), a, s);
  if (T(s, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/) && l.length) return Ot(e, l.map((m) => ({ id: m.id, near: m.near ? m.term.toLowerCase() : void 0 })), a, s);
  const y = o[0] ?? (T(s, /\b(it|this|that|the project)\b/) ? n.lastEntities?.[0] : void 0);
  if (y) return Js(e, y, s, a);
  if (T(s, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return ir();
  if (T(s, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return Xs(e, a, T(s, /\b(more|all|other)\b/));
  if (T(s, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return Zs(e, a);
  if (T(s, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return er(e);
  if (T(s, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return tr(e);
  if (T(s, /(personally|himself|his own|individual contribution)/)) return S("personally", [{ type: "p", text: "Ask about a specific project or role. Ownership is recorded per item:" }, ...e.entities.filter((m) => m.ownership && m.kind !== "education").slice(0, 7).map((m) => ({ type: "p", text: `${m.short}: ${m.ownership}` }))]);
  const p = et(s);
  return p.length ? nr(e, s, p, a) : l.length ? Ot(e, l.map((m) => ({ id: m.id, near: m.near ? m.term.toLowerCase() : void 0 })), a, s) : rr(e, r, a);
}
function zs(e) {
  return S("help", [{ type: "p", text: `Ask about ${e.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}
function Us(e) {
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
const Vs = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi, Gs = /\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/, Qs = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;
function Ks(e, t, n, r, s, a) {
  if (!(/^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(t) || /\b(did|has) (he|rahul)\b/.test(t))) return null;
  const l = t.match(Gs)?.[0];
  if (l && Qs.test(t) && !/stable diffusion/.test(l)) {
    const f = e.gap.get("pretraining"), g = ae(e, ii(e, ["llm_apis"]), "engineer", 1, 4);
    return S("false_premise", [
      { type: "p", text: `No. Nothing in the evidence supports that premise. ${l.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: "gaps", items: [{ id: f.id, name: f.name, statement: f.statement, closest: ["sssd"] }] },
      { type: "claims", title: "What the evidence does show", ids: N(g) }
    ], { followups: ["What models has Rahul fine-tuned?", "Show me his strongest RAG work.", "What is not demonstrated yet?"] });
  }
  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(t) && !/club/.test(t)) {
    const f = Pe(e, "leadership");
    if (f) return { ...Qe(e, f, a, { lead: "He hasn't managed a team of engineers yet. He has led people and led technical work end to end, which is the foundation for it:" }), intent: "false_premise" };
  }
  const u = /minute|scale|100x|10x/.test(t) ? [] : n.match(Vs) ?? [];
  if (u.length) {
    const f = u[0].replace(/\s/g, ""), g = f.replace(/^\$/, "").replace(/[%x×]$/i, ""), c = e.claims.filter((y) => F(y) && y.text.replace(/\s/g, "").includes(g)), w = e.claims.filter((y) => !F(y) && y.text.replace(/\s/g, "").includes(g));
    if (c.length) {
      const y = /patient records|patients|ehr/.test(t) && c.some((p) => /not clinical ehr records/i.test(p.text));
      return S("figure_check", [
        { type: "p", text: y ? `Not quite. ${f} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${f}:`, cites: N(c.slice(0, 1)) },
        { type: "claims", ids: N(c.slice(0, 3)) }
      ], { entities: Q(c.map((p) => p.entity)), followups: B(e, c[0].entity) });
    }
    if (w.length)
      return S("figure_check", [
        { type: "p", text: `That figure is not verified, so I won't state it as fact. ${w[0].note ?? ""}` },
        { type: "note", tone: "warn", text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' }
      ], { entities: Q(w.map((y) => y.entity)) });
    if (r.length || s.length)
      return S("figure_check", [{ type: "p", text: `${f} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities: r });
  }
  const d = s.map((f) => e.gap.get(f)).find((f) => f && !f.verify);
  if (d && /\b(did|does|has|have|is|was)\b/.test(t)) {
    const f = (d.partial ?? []).map((y) => e.claim.get(y)).filter(F), g = [...f, ...d.related.flatMap((y) => e.statableBySkill.get(y) ?? [])], c = f.length ? f.slice(0, 3) : ae(e, g, "engineer", 1, 4), w = Pe(e, "learning");
    return S("unsupported_skill", se({
      lead: `${f.length ? "Not in production yet." : "Not yet."} ${d.statement}`,
      points: Ke(e, c, 1),
      takeaway: w?.takeaway ? `How he would close it: ${w.takeaway.text.replace(/^For your team: /, "")}` : void 0
    }), { topic: "learning", followups: ["How fast does he learn new technology?", "What is not demonstrated yet?", "Show me his backend engineering experience."] });
  }
  return null;
}
function dn(e) {
  const t = e.counts, n = e.requirements.length, r = (l, u, d) => `${l} ${l === 1 ? u : d}`, s = e.requirements.filter((l) => l.category === "missing").map((l) => l.label), o = [{ type: "p", lead: !0, text: [
    `Of the ${r(n, "requirement", "requirements")} in this description, ${r(t.direct, "has", "have")} direct evidence${t.related ? ` and ${r(t.related, "has", "have")} related evidence` : ""}.`,
    t.verification ? `${r(t.verification, "needs", "need")} verification.` : "",
    s.length ? `Not currently demonstrated: ${s.join("; ")}.` : "Nothing in it is marked as not demonstrated."
  ].filter(Boolean).join(" ") }, { type: "coverage", analysis: e }];
  return e.notes.forEach((l) => o.push({ type: "note", tone: "warn", text: l })), o;
}
function Ys(e, t) {
  return S("jd", dn(pt(e, t)), {
    actions: [{ kind: "mode", label: "Show this on the portfolio", target: "transform" }, { kind: "mode", label: "Technical brief for this role", target: "brief" }],
    followups: ["What is the strongest evidence for this role?", "Challenge this evidence", "What is not demonstrated yet?"]
  });
}
function Ii(e, t, n) {
  const r = Ce(e, t), s = r.counts, a = r.entities.slice(0, 3).map((l) => ee(e, l.id)), o = [
    { type: "p", text: `Evidence coverage for ${r.title}: ${s.direct} requirements with direct evidence, ${s.related} with related evidence, ${s.verification} needing verification, and ${s.missing} not currently demonstrated. The strongest evidence comes from ${ri(a)}.` },
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
function Mi(e, [t, n], r) {
  const s = e.entity.get(t), a = e.entity.get(n), o = (w, y) => ({ label: w, values: [y(t), y(n)] }), l = (w) => Q((e.statableByEntity.get(w) ?? []).flatMap((y) => y.tags)).filter((y) => !["python", "healthcare", "fintech", "product_judgment"].includes(y)).slice(0, 6).map((y) => vt(e, y)).join(", ") || "—", u = (w) => (e.statableByEntity.get(w) ?? []).find((y) => y.tags.some((p) => ["eval_design", "llm_eval", "regression_testing"].includes(p)) && y.kind !== "limitation")?.text ?? "—", d = (w) => {
    const y = (e.statableByEntity.get(w) ?? []).find((p) => p.metrics?.length);
    return y ? y.metrics.map((p) => `${p.label}: ${p.value}`).join(" · ") : "—";
  }, f = (w) => Ae(e, w)[0]?.text.replace(/^Limits:\s*/, "") ?? "—", g = (w) => (e.statableByEntity.get(w) ?? []).some((y) => y.tags.includes("deployment")) ? "Yes" : "No public deployment", c = Q([t, n].flatMap((w) => (e.statableByEntity.get(w) ?? []).filter((y) => y.metrics?.length || y.kind === "limitation").slice(0, 3)));
  return S("compare", [
    { type: "p", text: `${s.short} vs ${a.short}, compared on the same evidence fields.` },
    { type: "compare", entities: [t, n], rows: [
      o("What it is", (w) => e.entity.get(w).tagline),
      o("When", (w) => e.entity.get(w).dates),
      o("Demonstrates", l),
      o("Evaluation evidence", u),
      o("Measured results", d),
      o("Deployed", g),
      o("Main limitation", f),
      o("Ownership", (w) => e.entity.get(w).ownership || "—")
    ] },
    { type: "claims", title: "Evidence used", ids: N(ae(e, c, r, 3, 6)) }
  ], { entities: [t, n], actions: [...Fe(e, t).slice(0, 1), ...Fe(e, n).slice(0, 1)], followups: [...B(e, t).slice(0, 2), ...B(e, n).slice(0, 2)] });
}
function ji(e, t, n, r) {
  const s = /* @__PURE__ */ new Map();
  for (const c of ii(e, t)) {
    const w = s.get(c.entity) ?? { s: 0, claims: [] };
    w.s += (c.strength === "public_artifact" ? 1 : 0.7) + (c.code?.length ? 0.4 : 0) + (c.kind === "metric" ? 0.2 : 0), w.claims.push(c), s.set(c.entity, w);
  }
  const a = [...s.entries()].filter(([c]) => c !== "imw").sort((c, w) => w[1].s - c[1].s);
  if (!a.length) return Ot(e, t.map((c) => ({ id: c })), n, r);
  const [o, l] = a[0], u = e.entity.get(o), d = vt(e, t[0]), f = ae(e, l.claims, n, 5, 5), g = a[1] ? ` ${ee(e, a[1][0])} is next.` : "";
  return S("strongest", se({
    lead: `His strongest ${d} work is ${u.name}.${g}`,
    points: cn(e, f),
    extra: e.archByEntity.has(o) ? [{ type: "xray", arch: e.archByEntity.get(o).id }] : []
  }), { entities: [o], actions: Fe(e, o), followups: B(e, o) });
}
function Ot(e, t, n, r) {
  const s = [], a = [], o = [], l = [], u = /* @__PURE__ */ new Set();
  for (const f of t.slice(0, 3)) {
    const g = ce(e, f.id, { near: f.near });
    if (u.has(g.id)) continue;
    u.add(g.id);
    const c = g.entities.map((y) => ee(e, y)), w = !s.length;
    if (g.category === "direct") {
      const y = ae(e, g.claims.map((p) => e.claim.get(p)), n, 2, 5);
      s.push({ type: "p", lead: w, text: `Yes. He has used ${g.label} in ${ri(c.slice(0, 4))}.`, cites: g.claims.slice(0, 2) }), s.push({ type: "points", items: Ke(e, y, 1) }), l.push(...N(y));
    } else if (g.category === "related") {
      const y = g.via ? `Not directly, but he has closely related experience. ${g.statement ?? ""}` : `Partly. ${g.statement ?? ""}`;
      s.push({ type: "p", lead: w, text: y.trim(), cites: g.claims.slice(0, 1) });
      const p = g.claims.slice(0, 4).map((m) => e.claim.get(m)).filter(Boolean);
      s.push({ type: "points", items: Ke(e, p, 1) }), l.push(...N(p));
    } else g.category === "verification" ? s.push({ type: "p", lead: w, text: `${ie.verification}: ${g.statement ?? ""}` }) : (w && s.push({ type: "p", lead: w, text: `Not yet: ${g.label} isn't part of his work so far. Here is the closest experience, and how he tends to pick up new tools:` }), s.push({ type: "gaps", items: [{ id: g.id, name: g.label, statement: g.statement ?? "", closest: g.entities }] }));
    if (a.push(...g.entities), /where/.test(r)) for (const y of g.entities.slice(0, 3)) {
      const p = e.entity.get(y);
      p && o.push(ni(p));
    }
  }
  l.length && s.push({ type: "claims", title: "Sources", ids: Q(l), collapsed: !0 });
  const d = Q(a)[0];
  return S("skill", s, { entities: Q(a), actions: o.length ? o : d ? Fe(e, d) : [], followups: d ? B(e, d).slice(0, 3).concat(["What is not demonstrated yet?"]) : _t.slice(0, 4) });
}
function Js(e, t, n, r) {
  const s = e.entity.get(t), a = e.statableByEntity.get(t) ?? [], o = e.archByEntity.get(t), l = e.failures.filter((y) => y.entity === t), u = e.decisions.filter((y) => y.entity === t), d = Fe(e, t);
  if (T(n, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && o)
    return S("architecture", [
      { type: "p", text: `${o.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: "xray", arch: o.id }
    ], { entities: [t], actions: d, followups: B(e, t, ["architecture"]) });
  if (T(n, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && u.length)
    return S("decisions", [{ type: "decisions", ids: u.map((y) => y.id) }], { entities: [t], actions: d, followups: B(e, t, ["why"]) });
  if (T(n, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const y = Ae(e, t), p = [];
    return l.length && p.push({ type: "failures", ids: l.map((m) => m.id) }), y.length && p.push({ type: "claims", title: "Stated limitations", ids: N(y) }), p.length || p.push({ type: "p", text: `The evidence database records no specific failure case for ${s.short}.` }), S("failures", p, { entities: [t], actions: [...e.attacks.some((m) => m.entity === t) ? [{ kind: "mode", label: "Try to break it", target: "lab", arg: t }] : [], ...d], followups: B(e, t, ["failure"]) });
  }
  if (T(n, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const y = a.filter((v) => v.tags.some((k) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(k))), p = [{ type: "claims", ids: N(ae(e, y, "researcher", 7, 7)) }];
    t === "cliniq" && p.push({ type: "chart", chart: "cliniq" }), t === "voice" && p.push({ type: "chart", chart: "voice_quality" });
    const m = e.traces.find((v) => v.entity === t);
    return m && p.push({ type: "trace", id: m.id }), S("evaluation", p, { entities: [t], actions: [{ kind: "mode", label: "Open the proof lab", target: "lab", arg: t }, ...d], followups: B(e, t, ["evaluation"]) });
  }
  if (T(n, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const y = a.filter((p) => p.code?.length);
    return S("code", [
      { type: "p", text: `Code links are pinned to a specific commit, so line numbers do not drift.${s.repo ? "" : " This is employment work, so no source code is public."}` },
      { type: "claims", ids: N(ae(e, y, "engineer", 8, 8)) }
    ], { entities: [t], actions: d, followups: B(e, t, ["code"]) });
  }
  if (T(n, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const y = Ae(e, t), p = [{ type: "p", text: `Questions an interviewer could reasonably press on for ${s.short}:` }];
    return s.questions.forEach((m) => p.push({ type: "p", text: `• ${m}` })), y.length && p.push({ type: "claims", title: "Limitations the evidence already states", ids: N(y) }), u.length && p.push({ type: "decisions", ids: u.slice(0, 2).map((m) => m.id) }), S("challenge", p, { entities: [t], actions: d, followups: B(e, t, ["challenge"]) });
  }
  if (T(n, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/))
    return S("personally", [
      { type: "p", text: s.ownership || "The portfolio does not break down individual contributions for this item." },
      { type: "claims", ids: N(ae(e, a, r, 4, 4)) }
    ], { entities: [t], actions: d, followups: B(e, t, ["personally"]) });
  if (T(n, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const y = a.filter((m) => m.tags.some((v) => ["rate_limiting", "caching", "deployment", "docker", "monitoring"].includes(v))), p = ["distributed_systems", "kubernetes"].map((m) => e.gap.get(m));
    return S("scale", [
      { type: "p", text: `What is implemented today for ${s.short}:` },
      y.length ? { type: "claims", ids: N(y.slice(0, 5)) } : { type: "p", text: "No scaling-related controls are recorded for this item." },
      { type: "gaps", items: p.map((m) => ({ id: m.id, name: m.name, statement: m.statement, closest: [] })) },
      { type: "note", tone: "info", text: "A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented." }
    ], { entities: [t], actions: d, followups: B(e, t, ["scale"]) });
  }
  if (n.length > 70) {
    const y = rn(e, n, { entities: [t], limit: 8 }).map((m) => m.claim).filter((m) => m.entity === t), p = Ae(e, t).filter((m) => !y.includes(m));
    if (y.length)
      return S("focused", [
        { type: "p", text: `The evidence most relevant to this question about ${s.short}:`, cites: N(y.slice(0, 2)) },
        { type: "claims", ids: N(y.slice(0, 5)) },
        ...p.length ? [{ type: "claims", title: "Stated limitations", ids: N(p.slice(0, 2)) }] : []
      ], { entities: [t], actions: d, followups: B(e, t) });
  }
  const f = s.summaries[r] ?? s.tagline, g = ae(e, a, r, r === "recruiter" ? 4 : 5, r === "recruiter" ? 4 : 5), c = [];
  if (r === "engineer" && o && c.push({ type: "xray", arch: o.id }), r === "researcher") {
    const y = Ae(e, t);
    y.length && c.push({ type: "claims", title: "Stated limitations", ids: N(y) });
  }
  r === "manager" && s.ownership && c.push({ type: "note", tone: "info", text: `Ownership: ${s.ownership}` });
  const w = [{ type: "entity", id: t }, ...se({ lead: f, leadCites: N(g.slice(0, 2)), points: cn(e, g), extra: c })];
  return S("entity", w, { entities: [t], actions: d, followups: B(e, t) });
}
function Xs(e, t, n = !1) {
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
function Zs(e, t) {
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
function er(e, t) {
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
function tr(e) {
  return S("gaps", se({
    lead: "Honest answer: his gaps are large-scale infrastructure and formal people management, which is typical at his career stage, and each one sits next to experience he can build on:",
    points: [],
    extra: [{ type: "gaps", items: ["kubernetes", "iac", "distributed_inference", "pretraining", "orchestration", "human_annotation", "online_experiments", "customer_deployments"].map((n) => e.gap.get(n)).map((n) => ({ id: n.id, name: n.name, statement: n.statement, closest: Q(n.related.flatMap((r) => (e.statableBySkill.get(r) ?? []).map((s) => s.entity))).slice(0, 3) })) }],
    takeaway: "How he closes gaps: by building. Realtime voice, diffusion models and quantum ML were each new to him, and each became a working, tested system.",
    takeawayCites: ["voice.harness", "sssd.encoder", "qml.benchmark"]
  }), { topic: "learning", followups: ["How fast does he learn new technology?", "Evaluate Rahul for an MLOps Engineer role", "Why should we hire Rahul?"] });
}
function ir(e) {
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
const hn = [
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
function et(e) {
  return hn.find(([t]) => t.test(e))?.[1] ?? [];
}
function nr(e, t, n, r) {
  const [, , s, a] = hn.find(([d]) => d.test(t)), o = ae(e, ii(e, n), r, r === "recruiter" ? 2 : 3, r === "recruiter" ? 6 : 9), l = Q(o.map((d) => d.entity)), u = [];
  return n.includes("eval_design") && r !== "recruiter" && u.push({ type: "chart", chart: "cliniq" }), n.includes("rag") && l.includes("dia") && r === "engineer" && u.push({ type: "xray", arch: "arch.dia" }), n.includes("voice_ai") && u.push({ type: "trace", id: "t.voice.emergency" }), S("topic", se({ lead: s, points: Ke(e, o, r === "recruiter" ? 1 : 2), extra: u, takeaway: a }), {
    entities: l,
    actions: l.slice(0, 3).map((d) => ni(e.entity.get(d))),
    followups: l[0] ? B(e, l[0]).slice(0, 3).concat(l[1] ? [`Compare ${ee(e, l[0])} and ${ee(e, l[1])}`] : []) : _t.slice(0, 4)
  });
}
function sr(e, t, n, r) {
  const s = t.id === "learning" ? n[0] : void 0;
  if (!s) return Qe(e, t, r);
  const a = ce(e, s), o = ri(a.entities.slice(0, 3).map((u) => ee(e, u))), l = a.category === "direct" ? `He already has direct experience with ${a.label}, in ${o}.` : a.category === "related" ? (a.via ? `He has closely related experience: ${a.statement ?? ""}` : `Partly. ${a.statement ?? ""}`).trim() : `${a.label} isn't part of his work yet. ${a.statement ?? ""}`.trim();
  return Qe(e, t, r, { lead: `${l} On picking it up: the clearest evidence is how many different kinds of systems he has built from scratch, each in a new stack or domain, and each one working, tested and documented.` });
}
function rr(e, t, n) {
  const r = rn(e, t, { limit: 8 });
  if (!r.length || r[0].score < 2)
    return S("no_evidence", [
      { type: "p", lead: !0, text: "I don't have evidence that answers that directly. I can speak to his projects, experience, technical skills, and how he works with people. For example:" }
    ], { followups: ["Why should we hire Rahul?", "How does he work in a team?", "What has Rahul actually shipped?", "How fast does he learn new technology?"] });
  const s = ae(e, r.map((o) => o.claim), n, 2, 6), a = s[0].entity;
  return S(
    "retrieval",
    se({ lead: "Here is what his work shows on that:", points: Ke(e, s) }),
    { entities: Q(s.map((o) => o.entity)), actions: Fe(e, a), followups: B(e, a).slice(0, 3), basis: { retrieved: r.map((o) => o.claim.id) } }
  );
}
function ar(e, t) {
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
function Ti(e, t) {
  const n = Ce(e, t), r = n.entities.slice(0, 3).map((o) => e.entity.get(o.id)).filter(Boolean), s = [{ type: "p", text: `Questions worth asking for ${n.title}, grounded in the evidence an interviewer would see:` }];
  for (const o of r) o.questions.slice(0, 2).forEach((l) => s.push({ type: "p", text: `• ${o.short}: ${l}` }));
  return n.requirements.filter((o) => o.category === "missing").slice(0, 2).forEach((o) => s.push({ type: "p", text: `• Gap: ${o.label}. How would you close it in your first months?` })), S("role_questions", s, { entities: r.map((o) => o.id), actions: [{ kind: "mode", label: "10-minute technical brief", target: "brief", arg: t }], followups: [`Challenge the evidence for ${n.title}`] });
}
function Ri(e, t) {
  const n = Ce(e, t), r = n.entities.slice(0, 3).map((l) => l.id), s = r.flatMap((l) => Ae(e, l)).slice(0, 4), a = n.requirements.filter((l) => l.category === "direct" && l.strength === "self_reported").map((l) => l.label), o = [
    { type: "p", text: `The weakest points in the evidence for ${n.title}:` },
    { type: "gaps", items: n.requirements.filter((l) => l.category === "missing" || l.category === "verification").map((l) => ({ id: l.id, name: l.label, statement: l.statement ?? "", closest: l.entities.slice(0, 3) })) }
  ];
  return a.length && o.push({ type: "note", tone: "warn", text: `Supported only by self-reported employment experience (no public artifact): ${a.join(", ")}.` }), s.length && o.push({ type: "claims", title: "Limitations stated in the strongest projects", ids: N(s) }), n.notes.forEach((l) => o.push({ type: "note", tone: "info", text: l })), S("challenge", o, { entities: r, followups: [`What would an interviewer ask for ${n.title}?`, "What failure did he find and fix?"] });
}
function ri(e) {
  return e.length <= 1 ? e[0] ?? "the portfolio" : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
const or = "https://astra6-interview-my-work.hf.space";
function un() {
  return (document.querySelector('meta[name="imw-api"]')?.content || or).replace(/\/$/, "");
}
async function mt(e, t) {
  const n = new AbortController(), r = setTimeout(() => n.abort(), t.timeout);
  try {
    const s = await fetch(un() + e, { ...t, signal: n.signal, headers: { "Content-Type": "application/json", ...t.headers || {} } });
    if (!s.ok) throw Object.assign(new Error(`HTTP ${s.status}`), { status: s.status });
    return await s.json();
  } finally {
    clearTimeout(r);
  }
}
async function lr(e) {
  e("checking");
  const t = (n) => e(n?.ai_enabled ? "ready" : "offline");
  try {
    t(await mt("/api/health", { method: "GET", timeout: 4e3 }));
    return;
  } catch {
  }
  e("waking");
  try {
    t(await mt("/api/health", { method: "GET", timeout: 45e3 }));
  } catch {
    e("offline");
  }
}
async function cr(e, t, n, r, s, a) {
  const o = await mt("/api/ask", {
    method: "POST",
    timeout: 3e4,
    body: JSON.stringify({ question: t, persona: n, history: r.slice(-3), role: s ?? null, topic: a ?? null })
  }), l = o.sentences.flatMap((c) => c.cites), u = [...o.sentences.map((c) => `${c.label ?? ""} ${c.text}`), o.hypothetical ?? ""].join(" ");
  if (!o.sentences.length || l.some((c) => !F(e.claim.get(c))) || on.test(u))
    throw new Error("model answer failed client validation");
  const d = [];
  if (o.sentences.some((c) => c.kind === "point" && c.label)) {
    const c = o.sentences.filter((p) => p.kind === "lead"), w = o.sentences.filter((p) => p.kind === "point"), y = o.sentences.filter((p) => p.kind === "takeaway");
    c.length && d.push({ type: "p", lead: !0, text: c.map((p) => p.text.trim()).join(" "), cites: [...new Set(c.flatMap((p) => p.cites))] }), d.push({ type: "points", items: w.map((p) => ({ label: (p.label || "").trim() || "Evidence", text: p.text.trim(), cites: p.cites })) }), y.length && d.push({ type: "takeaway", text: y.map((p) => p.text.trim()).join(" "), cites: [...new Set(y.flatMap((p) => p.cites))] });
  } else {
    let c = { text: "", cites: [] };
    for (const w of o.sentences)
      c.text += (c.text ? " " : "") + w.text.trim(), c.cites.push(...w.cites), c.text.length > 320 && (d.push({ type: "p", text: c.text, cites: [...new Set(c.cites)], lead: !d.length }), c = { text: "", cites: [] });
    c.text && d.push({ type: "p", text: c.text, cites: [...new Set(c.cites)], lead: !d.length });
  }
  o.hypothetical && d.push({ type: "note", tone: "info", text: `Hypothetical, not implemented: ${o.hypothetical}` });
  const g = (o.gaps ?? []).map((c) => e.gap.get(c)).filter(Boolean);
  return g.length && d.push({ type: "gaps", items: g.map((c) => ({ id: c.id, name: c.name, statement: c.statement, closest: [] })) }), {
    blocks: d,
    followups: (o.followups ?? []).slice(0, 4),
    actions: [],
    engine: "model",
    intent: "model",
    entities: (o.entities ?? []).filter((c) => e.entity.has(c)),
    basis: { retrieved: o.retrieved ?? [...new Set(l)], checks: o.checks, model: o.model }
  };
}
async function pn(e) {
  const t = await mt("/api/jd", { method: "POST", timeout: 25e3, body: JSON.stringify({ text: e.slice(0, 12e3) }) });
  return Array.isArray(t.requirements) ? t.requirements.filter((n) => typeof n == "string").slice(0, 30) : [];
}
const mn = On(null), M = () => Vn(mn), Ee = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function G(e, t = {}) {
  try {
    window.dispatchEvent(new CustomEvent("imw:event", { detail: { name: e, ...t } }));
  } catch {
  }
}
let Re = null;
const Bt = [], ft = /* @__PURE__ */ new Set(), V = (e, t, n) => {
  const r = document.createElement(e);
  return r.className = t, n && (r.textContent = n), r;
};
function dr(e, t, n) {
  zt();
  const r = new Map(t.entities.map((v) => [v.id, v.score])), s = (v) => t.requirements.filter((k) => (k.category === "direct" || k.category === "related") && k.entities.includes(v)), a = document.getElementById("work"), o = a ? [...a.querySelectorAll(":scope > article.project")] : [];
  if (o.length && a) {
    Re = { parent: a, order: [...a.children], numbers: o.map((h) => [h.querySelector(".project-number"), h.querySelector(".project-number")?.textContent ?? ""]) };
    const v = (h) => e.entities.find((x) => x.anchor === `#${h.id}`)?.id ?? "", k = new Map(o.map((h) => [h, h.getBoundingClientRect()])), b = [...o].sort((h, x) => (r.get(v(x)) ?? 0) - (r.get(v(h)) ?? 0)), _ = a.querySelector(":scope > .research");
    if (b.forEach((h, x) => {
      a.insertBefore(h, _);
      const C = h.querySelector(".project-number");
      C && (C.textContent = `${String(x + 1).padStart(2, "0")} —`);
    }), !Ee())
      for (const h of b) {
        const x = k.get(h), C = h.getBoundingClientRect(), E = x.top - C.top;
        E && h.animate([{ transform: `translateY(${E}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
  }
  for (const v of e.entities) {
    if (v.id === "imw" || v.kind === "education") continue;
    const k = document.querySelector(v.anchor);
    if (!k || k.id === "work" || k.id === "experience") continue;
    const b = s(v.id);
    if (k.classList.add(b.length ? "imw-lens-hit" : "imw-lens-dim"), ft.add(k), b.length) {
      const _ = V("div", "imw-lens-tag");
      _.append(V("span", "imw-lens-tag-label", `✦ Evidence for ${t.title}`)), b.slice(0, 6).forEach((h) => _.append(V("span", `imw-lens-chip is-${h.category}`, h.label))), k.prepend(_), Bt.push(_);
    }
  }
  const l = t.requirements.filter((v) => v.category === "direct").flatMap((v) => [v.label, ...e.skill.get(v.id)?.aliases ?? []]).map((v) => v.toLowerCase());
  document.querySelectorAll("#skills .skill").forEach((v) => {
    const k = v.textContent?.toLowerCase() ?? "";
    v.classList.add(l.some((b) => b.length > 2 && k.includes(b)) ? "imw-lens-hit" : "imw-lens-dim"), ft.add(v);
  });
  const u = V("div", "imw-lens-bar");
  u.setAttribute("role", "region"), u.setAttribute("aria-label", "Role lens");
  const d = V("div", "imw-lens-head");
  d.append(V("span", "imw-lens-mark", "✦"), V("strong", "", `Viewing as: ${t.title}`));
  const f = V("div", "imw-lens-counts");
  ["direct", "related", "verification", "missing"].forEach((v) => f.append(V("span", `is-${v}`, `${t.counts[v]} ${ie[v].toLowerCase()}`)));
  const g = t.requirements.filter((v) => v.category === "missing").map((v) => v.label), c = V("div", "imw-lens-missing", g.length ? `Not demonstrated: ${g.slice(0, 4).join(", ")}${g.length > 4 ? "…" : ""}` : "Every listed requirement has at least related evidence."), w = V("div", "imw-lens-actions"), y = V("button", "imw-lens-btn", "Open analysis"), p = V("button", "imw-lens-btn is-primary", "Restore portfolio");
  y.onclick = () => n.reopen(), p.onclick = () => {
    zt(), n.restore();
  }, w.append(y, p);
  const m = V("div", "imw-lens-mid");
  m.append(f, c), u.append(d, m, w), document.body.append(u), Bt.push(u), document.documentElement.classList.add("imw-lens"), requestAnimationFrame(() => (a ?? document.body).scrollIntoView({ behavior: Ee() ? "auto" : "smooth", block: "start" })), p.focus({ preventScroll: !0 });
}
function zt() {
  Bt.splice(0).forEach((e) => e.remove()), ft.forEach((e) => e.classList.remove("imw-lens-hit", "imw-lens-dim")), ft.clear(), Re && (Re.order.forEach((e) => Re.parent.appendChild(e)), Re.numbers.forEach(([e, t]) => {
    e && (e.textContent = t);
  }), Re = null), document.documentElement.classList.remove("imw-lens");
}
let be = null;
function hr(e, t) {
  const n = document.querySelector(e);
  if (!n) {
    t();
    return;
  }
  n.scrollIntoView({ behavior: Ee() ? "auto" : "smooth", block: "start" }), n.classList.add("imw-flash"), setTimeout(() => n.classList.remove("imw-flash"), 2400), n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus({ preventScroll: !0 }), be?.remove(), be = V("button", "imw-return", "✦ Back to Interview My Work"), be.onclick = () => {
    be?.remove(), be = null, t();
  }, document.body.append(be), setTimeout(() => {
    be?.remove(), be = null;
  }, 2e4);
}
function fn(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "Verified · public artifact" : "Verified · self-reported" : { verification_required: "Verification required", unsupported: "Unsupported", deprecated: "Withdrawn" }[e.status] ?? e.status;
}
function gt(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "st-artifact" : "st-self" : e.status === "verification_required" ? "st-pending" : "st-no";
}
const Le = ({ cls: e, label: t }) => /* @__PURE__ */ i("i", { class: `imw-dot ${e}`, "aria-hidden": t ? void 0 : "true", "aria-label": t });
function De({ refs: e, max: t = 4 }) {
  return e?.length ? /* @__PURE__ */ i("ul", { class: "imw-code", children: e.slice(0, t).map((n) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("a", { href: n.url, target: "_blank", rel: "noopener", children: [
    /* @__PURE__ */ i("span", { class: "imw-code-label", children: n.label }),
    /* @__PURE__ */ i("span", { class: "imw-code-path", children: [
      n.path,
      n.lines ? `#L${n.lines[0]}–${n.lines[1]}` : ""
    ] })
  ] }) }, n.url)) }) : null;
}
function ur({ id: e, compact: t }) {
  const { kb: n, setInspect: r, inspect: s } = M(), a = n.claim.get(e);
  if (!a) return null;
  const o = n.entity.get(a.entity), l = s?.kind === "claim" && s.id === e;
  return /* @__PURE__ */ i("li", { class: `imw-claim${l ? " is-on" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-claim-btn", onClick: () => r({ kind: "claim", id: e }), "aria-label": `View evidence: ${a.text}`, children: [
      /* @__PURE__ */ i(Le, { cls: gt(a) }),
      /* @__PURE__ */ i("span", { class: "imw-claim-text", children: a.text })
    ] }),
    !t && /* @__PURE__ */ i("div", { class: "imw-claim-meta", children: [
      /* @__PURE__ */ i("span", { children: o?.short }),
      /* @__PURE__ */ i("span", { class: `imw-st ${gt(a)}`, children: fn(a) }),
      a.code?.length ? /* @__PURE__ */ i("a", { href: a.code[0].url, target: "_blank", rel: "noopener", class: "imw-mini-link", children: "Code ↗" }) : null,
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r({ kind: "claim", id: e }), children: "Evidence" })
    ] })
  ] });
}
function ne({ ids: e, title: t, compact: n }) {
  return e.length ? /* @__PURE__ */ i("div", { class: "imw-claims", children: [
    t && /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: t }),
    /* @__PURE__ */ i("ul", { children: e.map((r) => /* @__PURE__ */ i(ur, { id: r, compact: n }, r)) })
  ] }) : null;
}
function lt({ a: e }) {
  const { go: t, jump: n, ask: r, toggleLens: s, coverage: a, kb: o } = M();
  if (e.kind === "url") {
    const u = e.target.startsWith("mailto:") || e.target.includes("linkedin");
    return /* @__PURE__ */ i("a", { class: "imw-btn", href: e.target, target: e.target.startsWith("mailto:") ? void 0 : "_blank", rel: "noopener", onClick: () => u && G("contact_clicked_from_ai"), children: [
      e.label,
      " ",
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: "↗" })
    ] });
  }
  return /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => {
    if (e.kind === "anchor") return n(e.target);
    if (e.kind === "ask") return r(e.target);
    if (e.target === "transform")
      return s(!0, e.arg && e.arg !== a?.roleId ? Ce(o, e.arg) : void 0);
    t(e.target, e.arg);
  }, children: [
    e.label,
    e.kind === "anchor" ? /* @__PURE__ */ i("span", { "aria-hidden": "true", children: " ↓" }) : null
  ] });
}
const qe = { direct: "cat-direct", related: "cat-related", verification: "cat-pending", missing: "cat-missing" };
function $e({ children: e }) {
  return /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: e });
}
function pr({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.entity.get(e);
  return r ? /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n({ kind: "entity", id: e }), children: r.short }) : null;
}
const tt = ["direct", "related", "verification", "missing"], mr = { direct: "direct", related: "related", verification: "to verify", missing: "not shown" };
function kt({ counts: e, compact: t }) {
  const n = tt.reduce((r, s) => r + e[s], 0) || 1;
  return /* @__PURE__ */ i("div", { class: `imw-covbar${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-covbar-track", role: "img", "aria-label": tt.map((r) => `${e[r]} ${ie[r]}`).join(", "), children: tt.filter((r) => e[r]).map((r) => /* @__PURE__ */ i("span", { class: `imw-covbar-seg ${qe[r]}`, style: { flexGrow: e[r] / n }, title: `${e[r]} · ${ie[r]}` }, r)) }),
    /* @__PURE__ */ i("ul", { class: "imw-covbar-legend", children: tt.map((r) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${qe[r]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("b", { children: e[r] }),
      " ",
      t ? mr[r] : ie[r]
    ] }, r)) })
  ] });
}
function gn({ analysis: e, max: t = 16 }) {
  const { kb: n, setInspect: r } = M(), [s, a] = q(null), o = e.requirements.slice(0, t), l = e.entities.slice(0, 7).map((b) => b.id), u = 26, d = 18, f = 640, g = d * 2 + Math.max(o.length, l.length) * u, c = (b) => d + (b + 0.5) * u * (Math.max(o.length, l.length) / Math.max(l.length, 1)), w = (b) => d + (b + 0.5) * u, y = 232, p = 408, m = o.flatMap(
    (b, _) => b.category === "direct" || b.category === "related" ? b.entities.filter((h) => l.includes(h)).slice(0, 3).map((h) => ({ r: b.id, e: h, cat: b.category, y1: w(_), y2: c(l.indexOf(h)) })) : []
  ), v = (b, _) => !s || s === b || s === _, k = !Ee();
  return /* @__PURE__ */ i("figure", { class: "imw-map", children: [
    /* @__PURE__ */ i("svg", { viewBox: `0 0 ${f} ${g}`, role: "group", "aria-label": "Requirement to evidence map", class: k ? "is-anim" : "", children: [
      m.map((b, _) => /* @__PURE__ */ i(
        "path",
        {
          d: `M${y},${b.y1} C${y + 90},${b.y1} ${p - 90},${b.y2} ${p},${b.y2}`,
          class: `imw-link ${b.cat === "direct" ? "is-direct" : "is-related"}${v(b.r, b.e) ? " is-lit" : " is-dim"}`,
          style: { animationDelay: `${Math.min(_ * 25, 700)}ms` }
        },
        _
      )),
      o.map((b, _) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-req ${qe[b.category]}${s && s !== b.id ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${b.label}: ${ie[b.category]}`,
          onMouseEnter: () => a(b.id),
          onMouseLeave: () => a(null),
          onFocus: () => a(b.id),
          onBlur: () => a(null),
          onClick: () => r({ kind: "req", req: b }),
          onKeyDown: (h) => (h.key === "Enter" || h.key === " ") && (h.preventDefault(), r({ kind: "req", req: b })),
          children: [
            /* @__PURE__ */ i("rect", { x: 0, y: w(_) - u / 2, width: y + 6, height: u, class: "imw-hit" }),
            /* @__PURE__ */ i("text", { x: y - 12, y: w(_) + 4, "text-anchor": "end", children: fr(b.label, 30) }),
            /* @__PURE__ */ i("circle", { cx: y, cy: w(_), r: 4.5 })
          ]
        },
        b.id
      )),
      l.map((b, _) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-ent${s && s !== b && !m.some((h) => h.e === b && h.r === s) ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": n.entity.get(b)?.name,
          onMouseEnter: () => a(b),
          onMouseLeave: () => a(null),
          onFocus: () => a(b),
          onBlur: () => a(null),
          onClick: () => r({ kind: "entity", id: b }),
          onKeyDown: (h) => (h.key === "Enter" || h.key === " ") && (h.preventDefault(), r({ kind: "entity", id: b })),
          children: [
            /* @__PURE__ */ i("rect", { x: p - 6, y: c(_) - u / 2, width: f - p + 6, height: u, class: "imw-hit" }),
            /* @__PURE__ */ i("circle", { cx: p, cy: c(_), r: 5.5 }),
            /* @__PURE__ */ i("text", { x: p + 14, y: c(_) + 4, children: n.entity.get(b)?.short })
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
const fr = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e, Li = [
  { key: "precision", label: "Precision", cls: "viz-1" },
  { key: "recall", label: "Recall", cls: "viz-2" },
  { key: "f1", label: "F1", cls: "viz-3" }
];
function wn() {
  const { kb: e } = M(), t = e.datasets.cliniq_confusion, [n, r] = q(null), [s, a] = q(!1), o = ue(() => t.methods.map((m) => {
    const v = m.tp / (m.tp + m.fp), k = m.tp / (m.tp + m.fn);
    return { ...m, precision: v, recall: k, f1: 2 * v * k / (v + k) };
  }), [t]), l = 560, u = 230, d = 36, f = 30, g = 12, c = (l - d - 12) / o.length, w = 22, y = 2, p = (m) => g + (1 - m) * (u - g - f);
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
          /* @__PURE__ */ i("line", { x1: d, x2: l - 8, y1: p(m), y2: p(m) }),
          /* @__PURE__ */ i("text", { x: d - 6, y: p(m) + 4, "text-anchor": "end", children: m.toFixed(2) })
        ] }, m)),
        o.map((m, v) => {
          const k = d + v * c + (c - (w * 3 + y * 2)) / 2;
          return /* @__PURE__ */ i("g", { children: [
            Li.map((b, _) => {
              const h = m[b.key], x = k + _ * (w + y);
              return /* @__PURE__ */ i(
                "path",
                {
                  class: `imw-bar ${b.cls}`,
                  d: gr(x, p(h), w, p(0) - p(h)),
                  onMouseEnter: () => r({ x: (x + w / 2) / l, y: p(h) / u, text: `${m.label} · ${b.label} ${h.toFixed(3)}` })
                },
                b.key
              );
            }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: d + v * c + c / 2, y: u - 10, "text-anchor": "middle", children: m.label })
          ] }, m.id);
        })
      ] }),
      n && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: `${n.x * 100}%`, top: `${n.y * 100}%` }, children: n.text })
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: Li.map((m) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-swatch ${m.cls}`, "aria-hidden": "true" }),
      m.label
    ] }, m.key)) }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. ",
      t.caveat
    ] })
  ] });
}
function gr(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return r <= 0 ? "" : `M${e},${t + r} V${t + s} Q${e},${t} ${e + s},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r} Z`;
}
function ai() {
  const { kb: e } = M(), t = e.datasets.voice_quality, n = [...t.rows].sort((c, w) => w[3] - c[3]), [r, s] = q(null), a = 560, o = 20, l = 150, u = 40, d = n.length * o + 24, f = (c) => l + c / 60 * (a - l - u), g = n.reduce((c, w) => c + w[3], 0) / n.length;
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: /* @__PURE__ */ i("strong", { children: "Mid-call silence per recorded call (%)" }) }),
    /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => s(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${a} ${d}`, role: "img", "aria-label": `Mid-call silence per call; average ${g.toFixed(1)} percent`, children: [
        [0, 20, 40, 60].map((c) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: f(c), x2: f(c), y1: 0, y2: d - 18 }),
          /* @__PURE__ */ i("text", { x: f(c), y: d - 4, "text-anchor": "middle", children: c })
        ] }, c)),
        n.map((c, w) => {
          const y = w * o + 3;
          return /* @__PURE__ */ i("g", { onMouseEnter: () => s({ y: (y + o / 2) / d, text: `${c[0]} · silence ${c[3]}% · talk-over ${c[2]}% · longest gap ${c[4]}s` }), children: [
            /* @__PURE__ */ i("rect", { class: "imw-hit", x: 0, y: y - 2, width: a, height: o }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: l - 8, y: y + 11, "text-anchor": "end", children: c[0].replace(/_/g, " ") }),
            /* @__PURE__ */ i("path", { class: "imw-bar viz-1", d: wr(l, y + 2, f(c[3]) - l, o - 8) })
          ] }, c[0]);
        }),
        /* @__PURE__ */ i("line", { class: "imw-ref", x1: f(g), x2: f(g), y1: 0, y2: d - 18 }),
        /* @__PURE__ */ i("text", { class: "imw-ref-label", x: f(g) + 4, y: 10, children: [
          "avg ",
          g.toFixed(1),
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
function wr(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return n <= 0 ? "" : `M${e},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r - s} Q${e + n},${t + r} ${e + n - s},${t + r} H${e} Z`;
}
const jt = 198, it = 96, ze = 174, _e = 56, je = 28, Pi = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e;
function yn({ arch: e, selected: t, onSelect: n, scan: r = !0 }) {
  const s = ye(null), [a, o] = q(!1), [l, u] = q(!1);
  Un(() => {
    const p = s.current;
    if (!p) return;
    const m = new ResizeObserver(([v]) => o(v.contentRect.width < 560));
    return m.observe(p), () => m.disconnect();
  }, []), z(() => {
    if (!r || Ee()) return;
    u(!0);
    const p = setTimeout(() => u(!1), 1300);
    return () => clearTimeout(p);
  }, [e.id, r]);
  const d = Math.max(...e.nodes.map((p) => p.col)) + 1, f = Math.max(...e.nodes.map((p) => p.row)) + 1, g = je * 2 + d * jt - (jt - ze), c = je * 2 + f * it - (it - _e) + (e.lanes.length ? 14 : 0), w = (p) => {
    const m = e.nodes.find((v) => v.id === p);
    return { x: je + m.col * jt, y: je + (e.lanes.length ? 14 : 0) + m.row * it };
  }, y = (p, m) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n(m));
  };
  if (a) {
    const p = new Map(e.nodes.map((b) => [b.id, 0]));
    e.edges.forEach(([, b]) => p.set(b, (p.get(b) ?? 0) + 1));
    const m = (b, _) => b.col - _.col || b.row - _.row, v = e.nodes.filter((b) => !p.get(b.id)).sort(m), k = [];
    for (; v.length; ) {
      const b = v.shift();
      k.push(b);
      const _ = e.edges.filter(([h]) => h === b.id).map(([, h]) => h).filter((h) => (p.set(h, p.get(h) - 1), p.get(h) === 0)).map((h) => e.nodes.find((x) => x.id === h)).sort(m);
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
  return /* @__PURE__ */ i("div", { ref: s, class: `imw-arch${l ? " is-scanning" : ""}`, children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${g} ${c}`, role: "group", "aria-label": `${e.title} architecture`, children: [
    /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("marker", { id: `ah-${e.id}`, viewBox: "0 0 8 8", refX: "7", refY: "4", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse", children: /* @__PURE__ */ i("path", { d: "M0,0 L8,4 L0,8 z", class: "imw-arrowhead" }) }) }),
    e.lanes.map((p) => /* @__PURE__ */ i("text", { class: "imw-lane", x: je, y: je + p.row * it + 6, children: p.label.toUpperCase() }, p.row)),
    e.edges.map(([p, m]) => {
      const v = w(p), k = w(m);
      let b;
      if (k.x > v.x) {
        const h = v.x + ze, x = v.y + _e / 2, C = k.x - 4, E = k.y + _e / 2, A = (h + C) / 2;
        b = `M${h},${x} C${A},${x} ${A},${E} ${C},${E}`;
      } else if (k.x < v.x) {
        const h = v.x, x = v.y + _e / 2, C = k.x + ze + 4, E = k.y + _e / 2, A = (h + C) / 2;
        b = `M${h},${x} C${A},${x} ${A},${E} ${C},${E}`;
      } else {
        const h = k.y > v.y, x = v.x + ze / 2, C = h ? v.y + _e : v.y, E = h ? k.y - 4 : k.y + _e + 4;
        b = `M${x},${C} L${x},${E}`;
      }
      return /* @__PURE__ */ i("path", { d: b, class: `imw-edge${t === p || t === m ? " is-on" : ""}`, "marker-end": `url(#ah-${e.id})` }, p + m);
    }),
    e.nodes.map((p) => {
      const m = w(p.id);
      return /* @__PURE__ */ i(
        "g",
        {
          class: `imw-node${t === p.id ? " is-on" : ""}`,
          transform: `translate(${m.x},${m.y})`,
          tabIndex: 0,
          role: "button",
          "aria-pressed": t === p.id,
          "aria-label": `${p.label}. ${p.sub}`,
          style: { animationDelay: `${p.col * 120}ms` },
          onClick: () => n(p.id),
          onKeyDown: (v) => y(v, p.id),
          children: [
            /* @__PURE__ */ i("rect", { width: ze, height: _e, rx: 4 }),
            /* @__PURE__ */ i("text", { x: 12, y: 24, class: "imw-node-label", children: Pi(p.label, 22) }),
            /* @__PURE__ */ i("text", { x: 12, y: 42, class: "imw-node-sub", children: Pi(p.sub, 25) })
          ]
        },
        p.id
      );
    }),
    l && /* @__PURE__ */ i("rect", { class: "imw-scan", x: 0, y: 0, width: 3, height: c })
  ] }) });
}
const vn = (e) => {
  const t = new URL(["..", "..", "evidence", "dist", e].join("/"), import.meta.url), n = new URL(import.meta.url).searchParams.get("v");
  return n && t.searchParams.set("v", n), t.href;
};
function bn({ id: e, compact: t }) {
  const { kb: n, go: r } = M(), s = n.traces.find((g) => g.id === e), [a, o] = q(t ? 0 : 1 / 0), l = ye();
  if (z(() => () => clearInterval(l.current), []), !s) return null;
  if (s.dataset === "dia_regression") return /* @__PURE__ */ i(yr, {});
  const u = t ? s.steps.slice(0, 4) : s.steps, d = () => {
    if (G("replay_played", { trace: s.id }), Ee()) {
      o(1 / 0);
      return;
    }
    o(0), clearInterval(l.current);
    let g = 0;
    l.current = window.setInterval(() => {
      g++, o(g), g >= u.length && clearInterval(l.current);
    }, 520);
  }, f = a === 1 / 0 ? u.length : a;
  return /* @__PURE__ */ i("figure", { class: `imw-trace${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: s.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: d, "aria-label": `Replay ${s.title}`, children: "▶ Replay" }),
        t && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("lab", s.id), children: "Open in proof lab →" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: s.summary }),
    /* @__PURE__ */ i("ol", { class: "imw-steps", "aria-live": "polite", children: u.map((g, c) => /* @__PURE__ */ i("li", { class: `imw-step is-${g.kind}${c < f ? " is-shown" : ""}`, "aria-hidden": c >= f, children: [
      /* @__PURE__ */ i("span", { class: "imw-step-kind", children: g.label }),
      g.quote ? /* @__PURE__ */ i("q", { children: g.quote }) : /* @__PURE__ */ i("span", { children: g.body }),
      g.status && /* @__PURE__ */ i("span", { class: `imw-verdict is-${g.status}`, children: g.status === "pass" ? "✓ PASS" : g.status === "fail" ? "✕ FAIL" : "! REVIEW" })
    ] }, c)) }),
    t && s.steps.length > u.length && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      s.steps.length - u.length,
      " more steps in the full replay."
    ] })
  ] });
}
function yr() {
  const { kb: e } = M(), t = e.datasets.dia_regression, [n, r] = q(t.rows.length), s = ye();
  z(() => () => clearInterval(s.current), []);
  const a = () => {
    if (G("replay_played", { trace: "t.dia.regression" }), Ee()) {
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
function _n({ id: e }) {
  const { kb: t, go: n } = M(), r = t.attacks.find((l) => l.id === e), [s, a] = q(!1);
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
      /* @__PURE__ */ i(De, { refs: r.code }),
      r.trace && /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => n("lab", r.trace), children: "▶ Replay the recorded run" })
    ] })
  ] });
}
function vr(e, t, n, r, s, a, o) {
  const l = e / (e + n), u = t / (t + r), d = s * a * l, f = s * (1 - a) * u, g = d + f;
  return { trueAlerts: d, falseAlerts: f, missed: s * a * (1 - l), reviews: g, hours: g * o / 60, precision: g ? d / g : null };
}
function br() {
  const { kb: e } = M(), t = e.datasets.cliniq_confusion, [n, r] = q(1e4), [s, a] = q(5), [o, l] = q(3), u = ue(() => t.methods.map((g) => ({ m: g, r: vr(g.tp, g.fp, g.fn, g.tn, n, s / 100, o) })), [t, n, s, o]), d = Math.max(...u.map((g) => g.r.hours), 1), f = (g) => g.toLocaleString(void 0, { maximumFractionDigits: 0 });
  return /* @__PURE__ */ i("div", { class: "imw-workload", children: [
    /* @__PURE__ */ i("div", { class: "imw-sliders", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Reviews per month ",
          /* @__PURE__ */ i("b", { children: f(n) })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1e3, max: 1e5, step: 1e3, value: n, onInput: (g) => r(+g.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Prevalence of true signals ",
          /* @__PURE__ */ i("b", { children: [
            s,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 30, step: 1, value: s, onInput: (g) => a(+g.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Minutes per human review ",
          /* @__PURE__ */ i("b", { children: o })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 15, step: 1, value: o, onInput: (g) => l(+g.target.value) })
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
      /* @__PURE__ */ i("tbody", { children: u.map(({ m: g, r: c }) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { scope: "row", children: g.label }),
        /* @__PURE__ */ i("td", { children: f(c.reviews) }),
        /* @__PURE__ */ i("td", { children: f(c.trueAlerts) }),
        /* @__PURE__ */ i("td", { children: f(c.missed) }),
        /* @__PURE__ */ i("td", { children: c.precision === null ? "—" : c.precision.toFixed(2) }),
        /* @__PURE__ */ i("td", { class: "imw-barcell", children: [
          /* @__PURE__ */ i("span", { class: "imw-inline-bar viz-2", style: { width: `${c.hours / d * 100}%` }, "aria-hidden": "true" }),
          /* @__PURE__ */ i("b", { children: f(c.hours) })
        ] })
      ] }, g.id)) })
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
function _r() {
  const [e, t] = q(null);
  if (z(() => {
    fetch(vn("evaluation-report.json")).then((s) => s.ok ? s.json() : null).then(t).catch(() => t(null));
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
function kr() {
  const { kb: e, modeArg: t } = M(), n = e.traces.find((o) => o.id === t)?.id ?? "t.voice.emergency", [r, s] = q(n);
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
      /* @__PURE__ */ i(bn, { id: r }, r)
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Try to break it" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Adversarial and edge cases, what the system did, and the test that keeps it that way." }),
      /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: a.map((o) => /* @__PURE__ */ i(_n, { id: o.id }, o.id)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Run the numbers · ClinIQ review workload" }),
      /* @__PURE__ */ i(br, {})
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Measured from the audio · Voice QA Harness" }),
      /* @__PURE__ */ i(ai, {})
    ] }),
    /* @__PURE__ */ i(_r, {})
  ] });
}
function xr({ a: e }) {
  const { setInspect: t, ask: n } = M(), r = si(e), s = (a) => r.indexOf(a) + 1;
  return /* @__PURE__ */ i("div", { class: "imw-answer", children: [
    /* @__PURE__ */ i("div", { class: "imw-answer-head", children: [
      /* @__PURE__ */ i("span", { class: `imw-engine is-${e.engine}`, children: e.engine === "model" ? "Claude · validated" : "Evidence engine" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => t({ kind: "basis", retrieved: e.basis?.retrieved ?? [], checks: e.basis?.checks, model: e.basis?.model, engine: e.engine }), children: "Why this answer?" }),
      e.refined && /* @__PURE__ */ i("span", { class: "imw-help", children: "Requirements refined by AI parsing" })
    ] }),
    e.blocks.map((a, o) => /* @__PURE__ */ i(Cr, { b: a, num: s }, o)),
    e.actions.length > 0 && /* @__PURE__ */ i("div", { class: "imw-actions", children: e.actions.map((a, o) => /* @__PURE__ */ i(lt, { a }, o)) }),
    e.followups.length > 0 && /* @__PURE__ */ i("div", { class: "imw-followups", "aria-label": "Suggested follow-up questions", children: e.followups.map((a) => /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n(a), children: a }, a)) })
  ] });
}
const $r = (e) => {
  const t = e.replace(/^Bottom line: /, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
};
function Tt({ ids: e, num: t }) {
  const { kb: n, setInspect: r } = M();
  return e?.length ? /* @__PURE__ */ i(oe, { children: e.map((s) => /* @__PURE__ */ i("button", { class: "imw-cite", onClick: () => r({ kind: "claim", id: s }), "aria-label": `Source ${t(s)}: ${n.claim.get(s)?.text ?? s}`, children: t(s) }, s)) }) : null;
}
function Cr({ b: e, num: t }) {
  const n = M(), { kb: r, setInspect: s, go: a } = n;
  switch (e.type) {
    case "p":
      return /* @__PURE__ */ i("p", { class: `imw-p${e.lead ? " is-lead" : ""}`, children: [
        e.text,
        /* @__PURE__ */ i(Tt, { ids: e.cites, num: t })
      ] });
    case "points":
      return /* @__PURE__ */ i("ol", { class: "imw-points", children: e.items.map((o) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: o.label }),
        /* @__PURE__ */ i("span", { children: [
          o.text,
          /* @__PURE__ */ i(Tt, { ids: o.cites, num: t })
        ] })
      ] }, o.label)) });
    case "takeaway":
      return /* @__PURE__ */ i("div", { class: "imw-takeaway", children: [
        /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Bottom line" }),
        /* @__PURE__ */ i("p", { children: [
          $r(e.text),
          /* @__PURE__ */ i(Tt, { ids: e.cites, num: t })
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
        /* @__PURE__ */ i(kt, { counts: e.analysis.counts }),
        /* @__PURE__ */ i(gn, { analysis: e.analysis, max: 12 }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
          n.setCoverage(e.analysis), a("role");
        }, children: "Open the full analysis →" })
      ] });
    case "xray": {
      const o = r.architectures.find((l) => l.id === e.arch);
      return o ? /* @__PURE__ */ i("div", { class: "imw-xray-inline", children: [
        /* @__PURE__ */ i(yn, { arch: o, scan: !1, onSelect: (l) => s({ kind: "node", arch: o.id, node: l }) }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a("xray", o.entity), children: "Open X-Ray view →" })
      ] }) : null;
    }
    case "failures":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(oi, { id: o }, o)) });
    case "decisions":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(li, { id: o }, o)) });
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
          o.closest.map((l) => /* @__PURE__ */ i(pr, { id: l }, l))
        ] })
      ] }, o.id)) });
    case "chart":
      return e.chart === "cliniq" ? /* @__PURE__ */ i(wn, {}) : /* @__PURE__ */ i(ai, {});
    case "trace":
      return /* @__PURE__ */ i(bn, { id: e.id, compact: !0 });
  }
}
function oi({ id: e, open: t = !1 }) {
  const { kb: n } = M(), r = n.failures.find((l) => l.id === e), [s, a] = q(t);
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
      /* @__PURE__ */ i(De, { refs: r.code }),
      /* @__PURE__ */ i(ne, { ids: r.claims, title: "Evidence", compact: !0 })
    ] })
  ] });
}
function li({ id: e }) {
  const { kb: t } = M(), n = t.decisions.find((r) => r.id === e);
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
function Er({ analysis: e }) {
  const { kb: t, setInspect: n } = M();
  return /* @__PURE__ */ i("div", { class: "imw-reqgroups", children: ["direct", "related", "verification", "missing"].map((s) => {
    const a = e.requirements.filter((o) => o.category === s);
    return a.length ? /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i("h4", { class: `imw-cat ${qe[s]}`, children: [
        ie[s],
        " · ",
        a.length
      ] }),
      /* @__PURE__ */ i("ul", { class: "imw-reqs", children: a.map((o) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: o }), children: [
        /* @__PURE__ */ i("i", { class: `imw-cat-dot ${qe[o.category]}`, "aria-hidden": "true" }),
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
const qr = [
  { q: "What has Rahul actually shipped?" },
  { q: "Show me his strongest RAG work." },
  { q: "How does he evaluate AI systems?" },
  { q: "What has he built beyond LLM wrappers?" },
  { q: "Show me his backend engineering experience." },
  { q: "What failure did he find and fix?" },
  { q: "Evaluate Rahul for a role", mode: "role" },
  { q: "Paste a job description", mode: "jd" }
];
function Sr({ turns: e }) {
  const { kb: t, ask: n, go: r, persona: s, setPersona: a } = M(), [o, l] = q(""), u = ye(null), d = ye(null), f = e[e.length - 1];
  z(() => {
    d.current?.querySelector(".imw-turn:last-child")?.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [e.length, f?.pending]);
  const g = () => {
    const y = o.trim();
    y && (l(""), u.current && (u.current.style.height = "auto"), n(y));
  }, c = ti(o), w = t.claims.reduce((y, p) => y + (F(p) ? p.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-ask", children: [
    /* @__PURE__ */ i("div", { class: "imw-log", ref: d, children: [
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
            /* @__PURE__ */ i("dt", { children: w }),
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
        /* @__PURE__ */ i("div", { class: "imw-starters", children: qr.map((y, p) => /* @__PURE__ */ i("button", { onClick: () => {
          G("starter_question_selected", { index: p }), y.mode ? r("role", y.mode === "jd" ? "jd" : void 0) : n(y.q);
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
          "Writing an answer from the evidence and checking every citation (about 10 seconds)…"
        ] }),
        y.a && /* @__PURE__ */ i(xr, { a: y.a })
      ] }, y.id)),
      e.some((y) => y.a) && !f?.pending && /* @__PURE__ */ i("p", { class: "imw-keep", children: [
        "Want to keep this? ",
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("export"), children: "Download your questions and answers as a PDF →" })
      ] })
    ] }),
    /* @__PURE__ */ i("form", { class: "imw-composer", onSubmit: (y) => {
      y.preventDefault(), g();
    }, children: [
      c && /* @__PURE__ */ i("p", { class: "imw-jd-hint", children: "This looks like a job description. Sending it runs an evidence-coverage analysis." }),
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
          onInput: (y) => {
            const p = y.target;
            l(p.value), p.style.height = "auto", p.style.height = `${Math.min(p.scrollHeight, 180)}px`;
          },
          onKeyDown: (y) => {
            y.key === "Enter" && !y.shiftKey && (y.preventDefault(), g());
          }
        }
      ),
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-send", disabled: !o.trim(), children: c ? "Analyze" : "Ask" })
    ] })
  ] });
}
function Ar(e) {
  const t = location.origin + location.pathname;
  if (e.source === "role" && e.roleId) return `${t}#imw=role:${e.roleId}`;
  const n = e.requirements.map((r) => r.id).filter((r) => !r.startsWith("term:")).join(",");
  return `${t}#imw=role:${encodeURIComponent(`jd~${n}`)}`;
}
function Ir(e, t) {
  const n = [`# Evidence coverage: ${e.title}`, `Candidate: ${t}`, ""];
  for (const r of ["direct", "related", "verification", "missing"]) {
    const s = e.requirements.filter((a) => a.category === r);
    s.length && (n.push(`## ${ie[r]} (${s.length})`), s.forEach((a) => n.push(`- ${a.label}${a.statement && r !== "direct" ? ` — ${a.statement}` : ""}`)), n.push(""));
  }
  return e.notes.length && n.push(...e.notes.map((r) => `> ${r}`), ""), n.push("Generated by Interview My Work from verified evidence. No fit score is computed."), n.join(`
`);
}
function Mr() {
  const { kb: e, coverage: t, setCoverage: n, modeArg: r, api: s, toggleLens: a, ask: o, go: l } = M(), [u, d] = q(r === "jd" ? "jd" : "role"), [f, g] = q(""), [c, w] = q(!1), [y, p] = q("");
  z(() => {
    if (!r) return;
    if (r === "jd") {
      d("jd");
      return;
    }
    const h = decodeURIComponent(r);
    if (e.role.has(h)) n(Ce(e, h));
    else if (h.startsWith("jd~")) {
      const C = h.slice(3).split(",").filter(Boolean).map((E) => E.startsWith("near:") ? ce(e, e.skills.find((A) => A.near?.includes(E.slice(5)))?.id ?? E, { near: E.slice(5) }) : ce(e, E));
      n(Zt(e, "Shared job description", C, { source: "jd" }));
    }
  }, [r]);
  const m = (h) => {
    h && (n(Ce(e, h)), G("role_selected", { role: h }));
  }, v = () => {
    if (f.trim().length < 40) return;
    const h = pt(e, f);
    n(h), G("jd_analyzed", { requirements: h.requirements.length }), s === "ready" && (w(!0), pn(f).then((x) => {
      x.length && n(pt(e, f, x), h);
    }).catch(() => {
    }).finally(() => w(!1)));
  }, k = async (h) => {
    if (t)
      try {
        await navigator.clipboard.writeText(h === "link" ? Ar(t) : Ir(t, e.subject.name)), p(h), setTimeout(() => p(""), 2e3);
      } catch {
      }
  }, b = e.roles.filter((h) => h.priority).sort((h, x) => h.priority - x.priority), _ = [["strong", "Strong fit"], ["adjacent", "Adjacent"], ["stretch", "Stretch"]];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Evaluate against a role" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "What are you evaluating Rahul for?" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Each requirement is classified as direct evidence, related evidence, verification required, or not currently demonstrated. There is no match percentage." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg", role: "tablist", "aria-label": "Input", children: [
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": u === "role", class: u === "role" ? "is-on" : "", onClick: () => d("role"), children: "Select a role" }),
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": u === "jd", class: u === "jd" ? "is-on" : "", onClick: () => d("jd"), children: "Paste a job description" })
    ] }),
    u === "role" ? /* @__PURE__ */ i("div", { class: "imw-rolepick", children: [
      /* @__PURE__ */ i("div", { class: "imw-role-cards", children: b.map((h) => /* @__PURE__ */ i("button", { class: t?.roleId === h.id && t.source === "role" ? "is-on" : "", onClick: () => m(h.id), children: [
        /* @__PURE__ */ i("strong", { children: h.title }),
        /* @__PURE__ */ i("small", { children: h.proof_note })
      ] }, h.id)) }),
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "More roles" }),
        /* @__PURE__ */ i("select", { onChange: (h) => m(h.target.value), value: t?.source === "role" ? t.roleId : "", children: [
          /* @__PURE__ */ i("option", { value: "", children: "Choose a role…" }),
          _.map(([h, x]) => /* @__PURE__ */ i("optgroup", { label: x, children: e.roles.filter((C) => C.tier === h && !C.priority).map((C) => /* @__PURE__ */ i("option", { value: C.id, children: C.title }, C.id)) }, h))
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
          onInput: (h) => g(h.target.value)
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
            c ? " · refining with AI…" : ""
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
      /* @__PURE__ */ i(kt, { counts: t.counts }),
      t.notes.map((h) => /* @__PURE__ */ i("p", { class: "imw-note", children: h }, h)),
      /* @__PURE__ */ i(gn, { analysis: t, max: 18 }),
      /* @__PURE__ */ i(Er, { analysis: t }),
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
function jr() {
  const { kb: e, modeArg: t, setInspect: n, inspect: r, ask: s, noteEntity: a } = M(), o = e.architectures, [l, u] = q(o.find((h) => h.entity === t)?.id ?? o[0].id), d = o.find((h) => h.id === l), [f, g] = q("why");
  z(() => {
    const h = o.find((x) => x.entity === t);
    h && u(h.id);
  }, [t]), z(() => {
    a(d.entity);
  }, [d.entity]);
  const c = e.entity.get(d.entity), w = e.statableByEntity.get(d.entity) ?? [], y = e.decisions.filter((h) => h.entity === d.entity), p = e.failures.filter((h) => h.entity === d.entity), m = e.attacks.filter((h) => h.entity === d.entity), v = w.filter((h) => h.tags.some((x) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(x))), k = w.flatMap((h) => h.code ?? []), b = r?.kind === "node" && r.arch === d.id ? r.node : void 0, _ = [
    ["why", "Why this design?", y.length],
    ["failures", "Failure cases", p.length + w.filter((h) => h.kind === "limitation").length],
    ["break", "Try to break it", m.length],
    ["evaluation", "Evaluation", v.length],
    ["code", "Code", k.length],
    ["questions", "Interviewer questions", c.questions.length]
  ];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "X-Ray · system anatomy" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: d.title }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        d.note,
        " Select a component to see its purpose, inputs and outputs, why it exists, and the evidence behind it."
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "System", children: o.map((h) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": h.id === l, class: h.id === l ? "is-on" : "", onClick: () => {
      u(h.id), n(null);
    }, children: e.entity.get(h.entity)?.short }, h.id)) }),
    /* @__PURE__ */ i(yn, { arch: d, selected: b, onSelect: (h) => n({ kind: "node", arch: d.id, node: h }) }),
    /* @__PURE__ */ i("div", { class: "imw-subtabs", role: "tablist", "aria-label": "Inspect", children: _.filter(([, , h]) => h > 0).map(([h, x, C]) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": f === h, class: f === h ? "is-on" : "", onClick: () => g(h), children: [
      x,
      " ",
      /* @__PURE__ */ i("small", { children: C })
    ] }, h)) }),
    /* @__PURE__ */ i("div", { class: "imw-tabpanel", role: "tabpanel", children: [
      f === "why" && /* @__PURE__ */ i("div", { class: "imw-stack", children: y.map((h) => /* @__PURE__ */ i(li, { id: h.id }, h.id)) }),
      f === "failures" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        p.map((h, x) => /* @__PURE__ */ i(oi, { id: h.id, open: x === 0 }, h.id)),
        /* @__PURE__ */ i(ne, { ids: w.filter((h) => h.kind === "limitation").map((h) => h.id), title: "Stated limitations" })
      ] }),
      f === "break" && /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: m.map((h) => /* @__PURE__ */ i(_n, { id: h.id }, h.id)) }),
      f === "evaluation" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i(ne, { ids: v.map((h) => h.id) }),
        d.entity === "cliniq" && /* @__PURE__ */ i(wn, {}),
        d.entity === "voice" && /* @__PURE__ */ i(ai, {})
      ] }),
      f === "code" && /* @__PURE__ */ i(De, { refs: k, max: 30 }),
      f === "questions" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i("p", { class: "imw-help", children: "Questions a skeptical interviewer could press on. Select one to see what the evidence says." }),
        c.questions.map((h) => /* @__PURE__ */ i("button", { class: "imw-question", onClick: () => s(h.includes(c.short) ? h : `${h} (${c.short})`), children: h }, h))
      ] })
    ] })
  ] });
}
const Tr = 1e3, Rr = 720, J = 500, te = 360, Ut = 170, Vt = 305, Lr = /* @__PURE__ */ new Set(["project", "research", "experience", "leadership"]);
function Pr(e, t) {
  const n = e.groups, r = e.entities.filter((p) => Lr.has(p.kind)), s = new Map(e.skills.map((p) => [p.id, p.group])), a = /* @__PURE__ */ new Map();
  for (const p of e.claims.filter(F)) {
    const m = a.get(p.entity) ?? /* @__PURE__ */ new Map();
    new Set(p.tags.map((v) => s.get(v)).filter(Boolean)).forEach((v) => m.set(v, (m.get(v) ?? 0) + 1)), a.set(p.entity, m);
  }
  const o = new Map(n.map((p, m) => [p.id, -Math.PI / 2 + m / n.length * Math.PI * 2])), l = new Set(t?.requirements.filter((p) => p.category === "direct" || p.category === "related").map((p) => p.id) ?? []), u = new Map(n.map((p) => {
    if (!t) return [p.id, 1];
    const m = e.skills.filter((v) => v.group === p.id);
    return [p.id, m.filter((v) => l.has(v.id)).length / Math.max(1, Math.min(4, m.length))];
  })), d = Math.max(1, ...t?.entities.map((p) => p.score) ?? [1]), f = new Map(r.map((p) => [p.id, t ? (t.entities.find((m) => m.id === p.id)?.score ?? 0) / d : 1])), g = /* @__PURE__ */ new Map();
  for (const p of n) {
    const m = Math.min(1, u.get(p.id)), v = t ? Ut * (m > 0 ? 1 - 0.16 * m : 1.1) : Ut, k = o.get(p.id);
    g.set(p.id, { x: J + v * Math.cos(k), y: te + v * Math.sin(k), o: t ? m > 0 ? 1 : 0.16 : 1 });
  }
  const c = r.map((p) => {
    const m = a.get(p.id) ?? /* @__PURE__ */ new Map();
    let v = 0, k = 0;
    return m.forEach((b, _) => {
      const h = o.get(_);
      v += b * Math.cos(h), k += b * Math.sin(h);
    }), { id: p.id, a: Math.atan2(k, v) };
  }).sort((p, m) => p.a - m.a), w = Math.PI * 2 / c.length * 0.8;
  for (let p = 0; p < 8; p++)
    for (let m = 0; m < c.length; m++) {
      const v = c[m], k = c[(m + 1) % c.length];
      let b = k.a - v.a;
      if (m === c.length - 1 && (b += Math.PI * 2), b < w) {
        const _ = (w - b) / 2;
        v.a -= _, k.a += _;
      }
    }
  const y = /* @__PURE__ */ new Map();
  for (const p of c) {
    const m = f.get(p.id), v = t ? Vt * (m > 0 ? 1 - 0.2 * m : 1.06) : Vt;
    y.set(p.id, { x: J + v * Math.cos(p.a), y: te + v * Math.sin(p.a), o: t ? m > 0 ? 0.35 + 0.65 * m : 0.14 : 1 });
  }
  return { groups: n, ents: r, weight: a, gPos: g, ePos: y };
}
const Fr = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
function Dr() {
  const { kb: e, modeArg: t, coverage: n, setInspect: r, go: s } = M(), [a, o] = q(t && e.role.has(t) ? t : ""), [l, u] = q(null), d = ue(() => a === "__current" ? n : a ? Ce(e, a) : null, [a, e, n]), f = ue(() => Pr(e, d), [e, d]), [g, c] = q(() => new Map([...f.gPos, ...f.ePos].map(([_]) => [_, { x: J, y: te, o: 0 }]))), w = ye(g);
  z(() => {
    const _ = new Map([...f.gPos, ...f.ePos]);
    if (Ee()) {
      w.current = _, c(_);
      return;
    }
    const h = w.current, x = performance.now(), C = 850;
    let E = 0;
    const A = (H) => {
      const K = Fr(Math.min(1, (H - x) / C)), re = /* @__PURE__ */ new Map();
      _.forEach((pe, Y) => {
        const me = h.get(Y) ?? { x: J, y: te, o: 0 };
        re.set(Y, { x: me.x + (pe.x - me.x) * K, y: me.y + (pe.y - me.y) * K, o: me.o + (pe.o - me.o) * K });
      }), w.current = re, c(re), K < 1 && (E = requestAnimationFrame(A));
    };
    return E = requestAnimationFrame(A), () => cancelAnimationFrame(E);
  }, [f]);
  const y = (_) => g.get(_) ?? { x: J, y: te, o: 0 }, p = Math.max(1, ...[...f.weight.values()].flatMap((_) => [..._.values()])), m = (_) => e.claims.filter((h) => F(h) && h.tags.some((x) => e.skill.get(x)?.group === _)).length, v = (_) => e.statableByEntity.get(_)?.length ?? 0, k = l ? e.skills.filter((_) => _.group === l).map((_, h, x) => {
    const C = y(l), E = Math.atan2(C.y - te, C.x - J), A = Math.min(Math.PI * 0.9, x.length * 0.22), H = E - A / 2 + A * (h + 0.5) / x.length;
    return { s: _, cov: ce(e, _.id), x: C.x + 92 * Math.cos(H), y: C.y + 92 * Math.sin(H) };
  }) : [], b = e.roles.filter((_) => _.priority).sort((_, h) => _.priority - h.priority);
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
      d && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
        s("role");
      }, children: "Open coverage analysis →" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-constellation", children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${Tr} ${Rr}`, role: "group", "aria-label": "Evidence map of capability areas and projects", children: [
      /* @__PURE__ */ i("circle", { cx: J, cy: te, r: Ut, class: "imw-orbit" }),
      /* @__PURE__ */ i("circle", { cx: J, cy: te, r: Vt, class: "imw-orbit" }),
      f.groups.map((_) => {
        const h = y(_.id);
        return /* @__PURE__ */ i("line", { x1: J, y1: te, x2: h.x, y2: h.y, class: "imw-spoke", style: { opacity: h.o * 0.5 } }, `c-${_.id}`);
      }),
      f.ents.flatMap((_) => [...(f.weight.get(_.id) ?? /* @__PURE__ */ new Map()).entries()].map(([h, x]) => {
        const C = y(h), E = y(_.id), A = l ? l === h : !0;
        return /* @__PURE__ */ i("line", { x1: C.x, y1: C.y, x2: E.x, y2: E.y, class: "imw-web", style: { strokeWidth: 0.6 + 2.2 * x / p, opacity: Math.min(C.o, E.o) * (A ? 0.55 : 0.08) } }, `${_.id}-${h}`);
      })),
      /* @__PURE__ */ i("g", { class: "imw-core", children: [
        /* @__PURE__ */ i("circle", { cx: J, cy: te, r: 34 }),
        /* @__PURE__ */ i("text", { x: J, y: te - 2, "text-anchor": "middle", children: "Rahul" }),
        /* @__PURE__ */ i("text", { x: J, y: te + 14, "text-anchor": "middle", class: "imw-core-sub", children: "Vajja" })
      ] }),
      f.groups.map((_) => {
        const h = y(_.id), x = m(_.id), C = 6 + Math.sqrt(x) * 1.6, E = h.x < J - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-gnode${l === _.id ? " is-on" : ""}`,
            style: { opacity: h.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${_.label}: ${x} verified claims`,
            onClick: () => {
              u(l === _.id ? null : _.id), r({ kind: "group", id: _.id });
            },
            onKeyDown: (A) => {
              (A.key === "Enter" || A.key === " ") && (A.preventDefault(), u(l === _.id ? null : _.id), r({ kind: "group", id: _.id }));
            },
            children: [
              /* @__PURE__ */ i("circle", { cx: h.x, cy: h.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("circle", { cx: h.x, cy: h.y, r: C }),
              /* @__PURE__ */ i("text", { x: h.x + (E ? -C - 7 : C + 7), y: h.y + 4, "text-anchor": E ? "end" : "start", children: _.label })
            ]
          },
          _.id
        );
      }),
      k.map(({ s: _, cov: h, x, y: C }) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-sat ${qe[h.category]}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${_.name}: ${h.category}`,
          onClick: () => r({ kind: "req", req: h }),
          onKeyDown: (E) => (E.key === "Enter" || E.key === " ") && (E.preventDefault(), r({ kind: "req", req: h })),
          children: [
            /* @__PURE__ */ i("line", { x1: y(l).x, y1: y(l).y, x2: x, y2: C }),
            /* @__PURE__ */ i("circle", { cx: x, cy: C, r: 4 }),
            /* @__PURE__ */ i("text", { x, y: C - 8, "text-anchor": "middle", children: _.name.length > 22 ? _.name.slice(0, 21) + "…" : _.name })
          ]
        },
        _.id
      )),
      f.ents.map((_) => {
        const h = y(_.id), x = v(_.id), C = 7 + Math.sqrt(x) * 1.4, E = h.x < J - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-enode is-${_.kind}`,
            style: { opacity: h.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${_.name}: ${x} verified claims`,
            onClick: () => r({ kind: "entity", id: _.id }),
            onKeyDown: (A) => (A.key === "Enter" || A.key === " ") && (A.preventDefault(), r({ kind: "entity", id: _.id })),
            children: [
              /* @__PURE__ */ i("circle", { cx: h.x, cy: h.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("rect", { x: h.x - C, y: h.y - C, width: C * 2, height: C * 2, rx: _.kind === "experience" ? C : 3 }),
              /* @__PURE__ */ i("text", { x: h.x + (E ? -C - 8 : C + 8), y: h.y + 4, "text-anchor": E ? "end" : "start", children: _.short })
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
function Wr() {
  const { kb: e, coverage: t, modeArg: n, setCoverage: r, go: s } = M(), [a, o] = q(n && e.role.has(n) ? n : t?.roleId ?? "applied_ai");
  z(() => {
    n && e.role.has(n) && o(n);
  }, [n]);
  const l = t?.source === "jd" && !n, u = ue(() => l && t ? t : Ce(e, a), [e, a, l, t]);
  z(() => {
    G("brief_generated", { role: u.roleId ?? "jd" });
  }, [u]);
  const d = u.entities.filter((h) => h.id !== "imw" && e.entity.get(h.id)?.kind !== "education").slice(0, 3).map((h) => e.entity.get(h.id)), f = d.map((h) => h.id), g = e.decisions.filter((h) => f.includes(h.entity)).slice(0, 3), c = e.failures.filter((h) => f.includes(h.entity)).slice(0, 2), w = e.claims.find((h) => F(h) && h.kind === "limitation" && f.includes(h.entity)), y = u.requirements.filter((h) => h.category === "missing").slice(0, 2), p = f.flatMap((h) => (e.statableByEntity.get(h) ?? []).flatMap((x) => x.code ?? [])).filter((h) => h.lines).slice(0, 4), m = e.claims.find((h) => F(h) && h.kind === "metric" && ["cliniq", "sssd", "qml"].includes(h.entity) && (f.includes(h.entity) || h.entity === "cliniq")), v = d.flatMap((h) => h.questions.slice(0, 2).map((x) => ({ e: h.short, q: x }))), k = () => [
    `# 10-minute technical brief: ${u.title}`,
    `Candidate: ${e.subject.name}. Evidence-only; no fit score.`,
    "",
    "## Strongest relevant systems",
    ...d.map((h) => `- **${h.name}**: ${h.summaries.engineer ?? h.tagline}`),
    "",
    "## Decisions worth questioning",
    ...g.map((h) => `- ${h.title}. Tradeoff: ${h.tradeoff}`),
    "",
    "## Failure cases",
    ...c.map((h) => `- ${h.title}: ${h.fix}`),
    "",
    "## Limitations and gaps",
    ...w ? [`- ${w.text}`] : [],
    ...y.map((h) => `- ${h.label}: ${h.statement}`),
    "",
    "## Code to open",
    ...p.map((h) => `- ${h.label}: ${h.url}`),
    "",
    "## Suggested questions",
    ...v.map((h) => `- (${h.e}) ${h.q}`)
  ].join(`
`), [b, _] = q(!1);
  return /* @__PURE__ */ i("div", { class: "imw-view imw-brief", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Technical interview brief · 10 minutes" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: u.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        !l && /* @__PURE__ */ i("label", { class: "imw-select", children: [
          /* @__PURE__ */ i("span", { children: "Role" }),
          /* @__PURE__ */ i("select", { value: a, onChange: (h) => o(h.target.value), children: e.roles.map((h) => /* @__PURE__ */ i("option", { value: h.id, children: h.title }, h.id)) })
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
      /* @__PURE__ */ i(kt, { counts: u.counts, compact: !0 })
    ] }),
    /* @__PURE__ */ i("ol", { class: "imw-agenda", children: [
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "0–2 min" }),
        /* @__PURE__ */ i("h4", { children: "Strongest relevant systems" }),
        d.map((h) => /* @__PURE__ */ i("p", { children: [
          /* @__PURE__ */ i("strong", { children: [
            h.name,
            "."
          ] }),
          " ",
          h.summaries.engineer ?? h.tagline
        ] }, h.id))
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "2–5 min" }),
        /* @__PURE__ */ i("h4", { children: "Decisions worth questioning" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: g.map((h) => /* @__PURE__ */ i(li, { id: h.id }, h.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "5–7 min" }),
        /* @__PURE__ */ i("h4", { children: "Failure cases" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: c.map((h) => /* @__PURE__ */ i(oi, { id: h.id }, h.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "7–8 min" }),
        /* @__PURE__ */ i("h4", { children: "Limitations and gaps" }),
        w && /* @__PURE__ */ i(ne, { ids: [w.id], compact: !0 }),
        y.map((h) => /* @__PURE__ */ i("p", { class: "imw-note", children: [
          h.label,
          ": ",
          h.statement
        ] }, h.id)),
        m && /* @__PURE__ */ i(oe, { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "One research result" }),
          /* @__PURE__ */ i(ne, { ids: [m.id], compact: !0 })
        ] })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "8–10 min" }),
        /* @__PURE__ */ i("h4", { children: "Code to open" }),
        /* @__PURE__ */ i(De, { refs: p })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "Questions" }),
        /* @__PURE__ */ i("h4", { children: "Suggested interview questions" }),
        /* @__PURE__ */ i("ul", { class: "imw-bullets", children: v.map((h) => /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i("em", { children: [
            h.e,
            ":"
          ] }),
          " ",
          h.q
        ] }, h.q)) })
      ] })
    ] })
  ] });
}
const Rt = "rahul-vajja", Hr = [
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
], Nr = [
  "Using the rahul-vajja tools, compare Rahul against this job description and cite claim ids: …",
  "Does Rahul have AI evaluation experience? Show the evidence and the code.",
  "What would you challenge in the Drug Interaction Agent architecture?"
];
function Or() {
  const e = `${un()}/mcp`, t = [
    { id: "claude-code", label: "Claude Code", how: "Run in a terminal:", code: `claude mcp add --transport http ${Rt} ${e}` },
    { id: "claude", label: "Claude", how: "In Claude (web or desktop): Settings → Connectors → Add custom connector, then paste this URL:", code: e },
    { id: "cursor", label: "Cursor", how: "Add to ~/.cursor/mcp.json:", code: JSON.stringify({ mcpServers: { [Rt]: { url: e } } }, null, 2) },
    { id: "vscode", label: "VS Code", how: "Add to .vscode/mcp.json:", code: JSON.stringify({ servers: { [Rt]: { type: "http", url: e } } }, null, 2) },
    { id: "other", label: "Other", how: "Any MCP client that supports Streamable HTTP:", code: e }
  ], [n, r] = q(t[0].id), [s, a] = q(""), [o, l] = q({ state: "idle" }), u = t.find((g) => g.id === n), d = async (g, c) => {
    try {
      await navigator.clipboard.writeText(g), a(c), setTimeout(() => a(""), 1800);
    } catch {
    }
    G("contact_clicked_from_ai", { mcp_copy: c });
  };
  return /* @__PURE__ */ i("div", { class: "imw-view imw-connect", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Connect Rahul to your AI" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Ask your own assistant, with the same evidence." }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "The verified evidence behind this portfolio is also a public, read-only MCP server. Connect it to Claude, Claude Code, Cursor or VS Code and ask about Rahul's work from inside your own tools. Your AI does the reasoning; every result carries its evidence strength and a usage policy, and nothing you send is stored." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-endpoint", children: [
      /* @__PURE__ */ i("code", { children: e }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => d(e, "url"), children: s === "url" ? "Copied" : "Copy URL" }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: async () => {
        l({ state: "running" });
        const g = performance.now();
        try {
          const c = new AbortController(), w = setTimeout(() => c.abort(), 45e3), y = await fetch(e, {
            method: "POST",
            signal: c.signal,
            headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
            body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list", params: {} })
          });
          clearTimeout(w);
          const m = (await y.json())?.result?.tools?.length;
          if (!y.ok || !m) throw new Error(`HTTP ${y.status}`);
          l({ state: "ok", text: `${m} tools available · ${Math.round(performance.now() - g)} ms` });
        } catch {
          l({ state: "fail", text: "The server did not answer. It may be waking up; try again in a minute." });
        }
      }, disabled: o.state === "running", children: o.state === "running" ? "Checking…" : "Test the server" }),
      o.text && /* @__PURE__ */ i("span", { class: `imw-verdict is-${o.state === "ok" ? "pass" : "warn"}`, role: "status", children: [
        o.state === "ok" ? "✓ " : "! ",
        o.text
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "Client", children: t.map((g) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": n === g.id, class: n === g.id ? "is-on" : "", onClick: () => r(g.id), children: g.label }, g.id)) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: u.how }),
    /* @__PURE__ */ i("div", { class: "imw-snippet", children: [
      /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: u.code }) }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => d(u.code, u.id), children: s === u.id ? "Copied" : "Copy" })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Then try" }),
      /* @__PURE__ */ i("ul", { class: "imw-bullets", children: Nr.map((g) => /* @__PURE__ */ i("li", { children: g }, g)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Tools · all read-only" }),
      /* @__PURE__ */ i("ul", { class: "imw-tools", children: Hr.map(([g, c]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("code", { children: g }),
        /* @__PURE__ */ i("span", { children: c })
      ] }, g)) }),
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
const xt = {
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
}, xe = {
  qa: "Your questions and answers",
  roles: "Role and job-description evidence",
  projects: "Projects and experience in detail",
  questions: "Suggested interview questions",
  gaps: "Growth areas"
}, kn = /* @__PURE__ */ new Set(["project", "research", "experience"]), Br = { backend: "Backend", data: "Data engineering", domain: "Domains", mlops: "MLOps & deployment", vision: "Computer vision", voice: "Voice AI" }, zr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function Fi(e) {
  if (/present/i.test(e)) return 1e6;
  const t = [...e.matchAll(/\b(19|20)\d{2}\b/g)].map((r) => +r[0]), n = [...e.toLowerCase().matchAll(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/g)].map((r) => zr.indexOf(r[1]));
  return (t.length ? Math.max(...t) : 0) * 12 + (n.length ? n[n.length - 1] : 0);
}
const Ye = (e) => [...new Set(e)], xn = (e, t) => e.summaries[t] ?? e.summaries.engineer ?? e.tagline;
function Ur(e) {
  return e.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
}
function $n(e, t, n = /* @__PURE__ */ new Date()) {
  const r = e.subject.name.replace(/[^A-Za-z0-9]+/g, "-"), s = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  return `${r}-evidence-dossier-${t}-${s}.pdf`;
}
const Vr = (e, t) => `${e.subject.name} · Evidence dossier · ${xt[t].label} perspective · ${(e.subject.links.site ?? "").replace(/^https?:\/\/|\/$/g, "")}`;
function Gr(e, t) {
  const n = t.turns.flatMap((s) => s.a?.entities.slice(0, 3) ?? []), r = t.analyses.flatMap((s) => s.entities.slice(0, 3).map((a) => a.id));
  return Ye([...t.seen, ...n, ...r]).filter((s) => kn.has(e.entity.get(s)?.kind ?? ""));
}
function Cn(e, t, n) {
  const r = xt[n], s = Gr(e, t);
  return s.length ? { ids: s.slice(0, r.projects), defaulted: !1 } : { ids: (e.roles.find((o) => o.priority === 1) ?? e.roles[0]).focus_entities.filter((o) => kn.has(e.entity.get(o)?.kind ?? "")).slice(0, r.projects), defaulted: !0 };
}
function En(e, t, n) {
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
const qn = (e, t, n) => Ye(t).map((r) => e.claim.get(r)).filter(F).map((r) => En(e, r, n));
function Qr(e, t, n) {
  const r = (s) => (s.strength === "public_artifact" ? 0 : 2) + (s.kind === "metric" ? 0 : 1);
  return (e.statableByEntity.get(t) ?? []).filter((s) => s.kind !== "limitation").sort((s, a) => r(s) - r(a)).slice(0, n);
}
function Kr(e, t, n) {
  if (t.category === "direct" || t.category === "related") {
    const s = t.entities.slice(0, 3).map((u) => ee(e, u)).join(", "), a = t.category === "related" && t.via ? `Related through ${e.skill.get(t.via)?.name ?? t.via}. ` : "", o = t.claims.map((u) => e.claim.get(u)).find((u) => F(u) && !n.has(u.id));
    o && n.add(o.id);
    const l = !t.via && t.statement ? `${t.statement} ` : "";
    return `${a}${l}${s ? `Evidence: ${s}.` : ""}${o ? ` For example: ${o.text}` : ""}`.trim();
  }
  const r = t.entities.length ? ` Closest evidence: ${t.entities.slice(0, 3).map((s) => ee(e, s)).join(", ")}.` : "";
  return `${t.statement ?? ""}${r}`.trim();
}
function Sn(e, t, n = 99) {
  const r = [{ t: "counts", counts: t.counts }], s = /* @__PURE__ */ new Set();
  for (const a of ["direct", "related", "verification", "missing"])
    t.requirements.filter((o) => o.category === a).slice(0, n).forEach((o) => r.push({ t: "req", category: a, label: o.label, detail: Kr(e, o, s) }));
  return Ye(t.notes).forEach((a) => r.push({ t: "note", text: a })), r;
}
const Yr = (e, t) => e.title === t.title && e.source === t.source && e.requirements.map((n) => n.id).join() === t.requirements.map((n) => n.id).join();
function Jr(e, t) {
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
      const a = t.collapsed ? t.ids.filter((l) => !e.shown.has(n.claim.get(l)?.text ?? "")) : t.ids, o = qn(n, a, s);
      return o.length ? [...t.title ? [{ t: "h3", text: t.title }] : [], ...o] : [];
    }
    case "entity": {
      const a = n.entity.get(t.id);
      return a ? [{ t: "p", text: `${a.name}: ${xn(a, r)}` }] : [];
    }
    case "coverage": {
      const a = { t: "h3", text: `Evidence coverage: ${t.analysis.title}` };
      return e.detailed.some((o) => Yr(o, t.analysis)) ? [a, { t: "counts", counts: t.analysis.counts }, { t: "p", text: `The full requirement-by-requirement breakdown is in "${xe.roles}".`, muted: !0 }] : [a, ...Sn(n, t.analysis, 6)];
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
function Xr(e, t) {
  const { kb: n, lens: r } = e, s = [], a = /* @__PURE__ */ new Set();
  e.shown.clear();
  for (const d of t.blocks) d.type === "points" && d.items.forEach((f) => e.shown.add(f.text));
  for (const d of t.blocks)
    for (const f of Jr(e, d)) {
      if (f.t === "note") {
        if (a.has(f.text)) continue;
        a.add(f.text);
      }
      s.push(f);
    }
  const o = new Set(t.blocks.flatMap((d) => d.type === "claims" ? d.ids : d.type === "points" ? d.items.flatMap((f) => f.cites) : [])), l = si(t).filter((d) => !o.has(d)), u = qn(n, l, r).slice(0, 8);
  return u.length && s.push({ t: "h3", text: "Evidence cited" }, ...u), s;
}
function Zr(e, t, n, r) {
  const s = e.entity.get(t);
  if (!s) return [];
  const a = [
    { t: "h2", text: s.name, meta: [s.role, s.dates].filter(Boolean).join(" · ") },
    { t: "p", text: xn(s, n) }
  ];
  s.ownership && a.push({ t: "kv", items: [["Ownership", s.ownership]] });
  const o = Qr(e, t, r.claims).map((f) => En(e, f, r));
  o.length && a.push({ t: "h3", text: "Verified evidence" }, ...o);
  const l = (e.statableByEntity.get(t) ?? []).filter((f) => f.kind === "limitation").slice(0, 2);
  l.length && a.push({ t: "h3", text: "Stated limitations" }, { t: "bullets", items: l.map((f) => f.text) }), e.decisions.filter((f) => f.entity === t).slice(0, r.decisions).forEach((f) => a.push({ t: "h3", text: `Decision: ${f.title}` }, { t: "kv", items: [["Choice", f.choice], ["Tradeoff", f.tradeoff]] })), e.failures.filter((f) => f.entity === t).slice(0, r.failures).forEach((f) => a.push({ t: "h3", text: `Failure case: ${f.title}` }, { t: "kv", items: [["Problem", f.problem], ["Fix", f.fix], ["Prevention", f.prevention]] }));
  const u = r.arch ? e.archByEntity.get(t) : void 0;
  u && a.push({ t: "h3", text: "Architecture" }, { t: "bullets", items: u.nodes.slice(0, 8).map((f) => `${f.label}: ${f.detail.purpose}`) });
  const d = s.links.filter((f) => /^https?:/.test(f.url));
  return d.length && a.push({ t: "links", items: d.map((f) => ({ label: f.label, url: f.url })) }), a;
}
function ea(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.skills) {
    if (!(e.statableBySkill.get(n.id) ?? []).some((a) => a.strength === "public_artifact")) continue;
    const s = e.groups.find((a) => a.id === n.group)?.label ?? Br[n.group] ?? n.group;
    (t.get(s) ?? t.set(s, []).get(s)).push(n.name);
  }
  return [...t.entries()];
}
function ta(e, t, n) {
  const r = xt[n.persona], s = n.date ?? /* @__PURE__ */ new Date(), { subject: a } = e, o = t.turns.filter((p) => p.a), l = [], u = [
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
    line: `Evidence dossier · ${r.label} perspective · ${Ur(s)}`
  }), l.push({ t: "p", text: r.intro });
  const d = [
    o.length ? `${o.length} question${o.length === 1 ? "" : "s"} answered` : "",
    t.analyses.length ? `${t.analyses.length} role analys${t.analyses.length === 1 ? "is" : "es"}` : ""
  ].filter(Boolean).join(" · ");
  l.push({ t: "note", text: `How to read this: "Verified · public artifact" means you can open the code, data, recording or paper behind it. "Verified · self-reported" is Rahul's description of work that is not public, such as employer systems. Nothing here is a fit score. ${d ? `Session: ${d}.` : ""}`.trim() }), l.push({ t: "h1", text: "At a glance" }), l.push({ t: "p", text: a.level_note, muted: !0 });
  const f = e.entities.filter((p) => p.kind === "experience").sort((p, m) => Fi(m.dates) - Fi(p.dates));
  f.length && (l.push({ t: "h3", text: "Experience" }), l.push({ t: "table", head: ["Where", "Role", "Dates"], rows: f.map((p) => [p.name, p.role ?? "", p.dates]) }));
  const g = [
    ...e.entities.filter((p) => p.kind === "education").map((p) => ["Education", [p.name, p.role].filter(Boolean).join(": ")]),
    ...e.entities.filter((p) => p.kind === "leadership").map((p) => ["Leadership", `${p.role ? `${p.role}, ` : ""}${p.name} (${p.dates})`])
  ];
  g.length && l.push({ t: "kv", items: g });
  const c = ea(e);
  c.length && (l.push({ t: "h3", text: "Skills with public evidence" }), l.push({ t: "kv", items: c.map(([p, m]) => [p, m.join(", ")]) }));
  const w = { kb: e, persona: n.persona, lens: r, detailed: n.sections.roles ? t.analyses : [], shown: /* @__PURE__ */ new Set() };
  if (n.sections.qa && o.length && (l.push({ t: "h1", text: xe.qa, lead: "Each answer was generated from the evidence database and checked before it was shown." }), o.forEach((p, m) => {
    l.push({ t: "h2", text: `Q${m + 1}. ${p.q}`, meta: p.a.engine === "model" ? "Written by Claude, validated against the evidence" : "Answered by the evidence engine" }), l.push(...Xr(w, p.a));
  })), n.sections.roles && t.analyses.length) {
    l.push({ t: "h1", text: xe.roles, lead: "Each requirement is classified by the evidence behind it. No score is computed." });
    for (const p of t.analyses)
      l.push({ t: "h2", text: p.title, meta: p.source === "jd" ? `Job description you provided${p.closestRole ? ` · closest target role: ${p.closestRole}` : ""}` : "Target role" }), l.push(...Sn(e, p));
  }
  const y = Cn(e, t, n.persona);
  if (n.sections.projects && y.ids.length && (l.push({ t: "h1", text: xe.projects, lead: y.defaulted ? "You did not open specific projects, so these are the strongest for an applied AI role." : "The work you explored, in the order you explored it." }), y.ids.forEach((p) => l.push(...Zr(e, p, n.persona, r)))), n.sections.questions) {
    const p = y.ids.flatMap((k) => (e.entity.get(k)?.questions ?? []).slice(0, 2).map((b) => `${ee(e, k)}: ${b}`)), m = t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing" || b.category === "verification").slice(0, 2).map((b) => `${b.label}: what is the closest thing you have done, and how would you close the gap?`)), v = Ye([...p, ...m]);
    v.length && (l.push({ t: "h1", text: xe.questions, lead: "Questions that test the evidence above rather than repeat it." }), l.push({ t: "bullets", items: v }));
  }
  if (n.sections.gaps) {
    l.push({ t: "h1", text: xe.gaps });
    const p = Ye(t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing").map((b) => `${b.label}: ${b.statement ?? "Not demonstrated in the evidence."}`))), m = p.length ? p : e.gaps.filter((k) => !k.verify).slice(0, 6).map((k) => `${k.name}: ${k.statement}`);
    l.push({ t: "h3", text: p.length ? "Not yet shown for the roles you checked" : "Not yet part of his work" }, { t: "bullets", items: m });
    const v = Pe(e, "learning");
    v?.takeaway && l.push({ t: "h3", text: "How he closes gaps" }, { t: "p", text: v.takeaway.text.replace(/^For your team: /, "") });
  }
  return l.push({ t: "h1", text: "About this document", keep: 150 }), l.push({ t: "p", text: `Generated in your browser by Interview My Work on ${a.links.site ?? "the portfolio"} from evidence version ${e.version}. Nothing you typed was uploaded to create it. Every claim links to its source, and the live workspace shows the full evidence trail for each one.`, muted: !0 }), l.push({ t: "links", items: [
    ...a.links.site ? [{ label: "Open Interview My Work", url: `${a.links.site.replace(/\/$/, "")}/#imw=ask` }] : [],
    { label: `Email ${a.first}`, url: `mailto:${a.email}` }
  ] }), { title: `${a.name}: evidence dossier (${r.label})`, nodes: l, filename: $n(e, n.persona, s) };
}
const Ue = [20, 24, 31], Z = [90, 99, 110], Di = [222, 227, 232], ge = [22, 117, 94], ia = [242, 246, 245], ct = { direct: ge, related: [40, 104, 184], verification: [150, 98, 16], missing: [118, 124, 133] }, na = { direct: "DIRECT", related: "RELATED", verification: "TO VERIFY", missing: "NOT SHOWN" }, sa = { direct: "direct evidence", related: "related evidence", verification: "verification required", missing: "not demonstrated" }, ra = { artifact: ge, self: ct.related }, Gt = 612, Te = 792, L = 56, Lt = 64, Wi = 64, O = Gt - L * 2, aa = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ", Hi = {
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
function Se(e) {
  let t = "";
  for (const n of e) {
    if (n in Hi) {
      t += Hi[n];
      continue;
    }
    const r = n.codePointAt(0);
    if (r === 10 || r >= 32 && r <= 126 || r >= 161 && r <= 255 || aa.includes(n)) {
      t += n;
      continue;
    }
    const s = n.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    [...s].every((a) => a.codePointAt(0) < 127) && (t += s);
  }
  return t.replace(/ {2,}/g, " ");
}
class oa {
  constructor(t) {
    pi(this, "y", Lt);
    this.d = t;
  }
  font(t, n = "normal", r = Ue) {
    this.d.setFont("helvetica", n), this.d.setFontSize(t), this.d.setTextColor(...r);
  }
  need(t) {
    this.y + t > Te - Wi && (this.d.addPage(), this.y = Lt);
  }
  split(t, n) {
    return this.d.splitTextToSize(Se(t), n);
  }
  write(t, n = {}) {
    const { size: r = 10, style: s = "normal", color: a = Ue, x: o = L, width: l = O, lh: u = 1.42, after: d = 0 } = n;
    this.font(r, s, a);
    const f = r * u;
    for (const g of this.split(t, l))
      this.need(f), this.d.text(g, o, this.y, { baseline: "top" }), this.y += f;
    this.y += d;
  }
  links(t, { size: n = 8.5, x: r = L, width: s = O } = {}) {
    this.font(n, "normal", ge);
    const a = n * 1.55, o = 14;
    let l = r;
    this.need(a);
    for (const u of t) {
      const d = Se(u.label);
      let f = d;
      for (; this.d.getTextWidth(f) > s && f.length > 8; ) f = f.slice(0, -3);
      f !== d && (f = `${f.trimEnd()}…`);
      const g = this.d.getTextWidth(f);
      l > r && l + g > r + s && (this.y += a, this.need(a), l = r), this.d.text(f, l, this.y, { baseline: "top" }), this.d.link(l, this.y - 1, g, n + 2, { url: u.url }), this.d.setDrawColor(...ge), this.d.setLineWidth(0.4), this.d.line(l, this.y + n + 0.5, l + g, this.y + n + 0.5), l += g + o;
    }
    this.y += a;
  }
  rule(t = Di, n = 0.6) {
    this.d.setDrawColor(...t), this.d.setLineWidth(n), this.d.line(L, this.y, L + O, this.y);
  }
  node(t) {
    const n = this.d;
    switch (t.t) {
      case "cover": {
        this.write(t.name, { size: 26, style: "bold", lh: 1.15, after: 2 }), this.write(t.headline, { size: 12, color: Z, after: 6 }), this.links(t.contacts, { size: 9.5 }), this.y += 6, this.rule(ge, 1.6), this.y += 10, this.write(t.line, { size: 9, style: "bold", color: ge, after: 8 });
        return;
      }
      case "h1":
        this.need(t.keep ?? 80), this.y += 14, this.rule(), this.y += 12, this.write(t.text, { size: 15, style: "bold", color: ge, lh: 1.25, after: 3 }), t.lead ? this.write(t.lead, { size: 9.5, style: "italic", color: Z, after: 6 }) : this.y += 4;
        return;
      case "h2":
        this.need(60), this.y += 10, this.write(t.text, { size: 11.5, style: "bold", lh: 1.3, after: 1 }), t.meta ? this.write(t.meta, { size: 8.5, color: Z, after: 5 }) : this.y += 4;
        return;
      case "h3":
        this.need(40), this.y += 5, this.write(t.text.toUpperCase(), { size: 7.5, style: "bold", color: Z, after: 3 });
        return;
      case "p":
        this.write(t.text, { size: t.muted ? 9.5 : 10, color: t.muted ? Z : Ue, after: 6 });
        return;
      case "note": {
        this.font(9);
        const s = this.split(t.text, O - 24).length * 9 * 1.42 + 14;
        s < Te - Lt - Wi && this.need(s);
        const a = this.y;
        n.setFillColor(...ia), n.rect(L, a, O, s, "F"), n.setFillColor(...ge), n.rect(L, a, 2, s, "F"), this.y = a + 7, this.write(t.text, { size: 9, color: Z, x: L + 14, width: O - 24 }), this.y = Math.max(this.y, a + s) + 8;
        return;
      }
      case "kv": {
        for (const [s, a] of t.items) {
          this.need(14), this.font(8, "bold", Z);
          const o = this.split(s.toUpperCase(), 106), l = this.y;
          o.forEach((u, d) => n.text(u, L, l + 1.5 + d * 11, { baseline: "top" })), this.write(a, { size: 9.5, x: L + 118, width: O - 118 }), this.y > l && (this.y = Math.max(this.y, l + o.length * 11 + 2)), this.y += 4;
        }
        this.y += 2;
        return;
      }
      case "bullets":
        for (const r of t.items)
          this.need(14), this.font(9.5, "normal", ge), n.text("•", L + 2, this.y, { baseline: "top" }), this.write(r, { size: 9.5, x: L + 14, width: O - 14, after: 3 });
        this.y += 3;
        return;
      case "claim": {
        this.need(30), n.setFillColor(...ra[t.tone]), n.circle(L + 4, this.y + 5.5, 2.6, "F"), this.write(t.text, { size: 9.5, x: L + 14, width: O - 14, after: 1 }), this.write(t.meta, { size: 8, color: Z, x: L + 14, width: O - 14 }), t.links.length && this.links(t.links, { size: 8, x: L + 14, width: O - 14 }), this.y += 5;
        return;
      }
      case "req": {
        this.need(26), this.font(7, "bold", ct[t.category]), n.text(na[t.category], L, this.y + 2, { baseline: "top" }), this.write(t.label, { size: 9.5, style: "bold", x: L + 70, width: O - 70, after: 1 }), t.detail && this.write(t.detail, { size: 8.5, color: Z, x: L + 70, width: O - 70 }), this.y += 5;
        return;
      }
      case "counts": {
        const r = ["direct", "related", "verification", "missing"].filter((o) => t.counts[o] > 0), s = r.reduce((o, l) => o + t.counts[l], 0);
        if (!s) return;
        this.need(34);
        let a = L;
        for (const o of r) {
          const l = O * t.counts[o] / s;
          n.setFillColor(...ct[o]), n.rect(a, this.y, Math.max(l - 1.5, 1), 6, "F"), a += l;
        }
        this.y += 12, a = L, this.font(8.5, "normal", Z);
        for (const o of r) {
          const l = `${t.counts[o]} ${sa[o]}`;
          n.setFillColor(...ct[o]), n.rect(a, this.y + 1.5, 6, 6, "F"), n.text(l, a + 10, this.y, { baseline: "top" }), a += n.getTextWidth(l) + 26;
        }
        this.y += 18;
        return;
      }
      case "table": {
        const r = t.head.length;
        this.font(9);
        const s = t.head.map((d, f) => Math.max(n.getTextWidth(Se(d)), ...t.rows.map((g) => n.getTextWidth(Se(g[f] ?? "")))) + 12);
        let a;
        if (s.reduce((d, f) => d + f, 0) <= O)
          a = [...s], a[r - 1] += O - s.reduce((d, f) => d + f, 0);
        else {
          const d = Math.min(s[0], 140);
          a = [d, ...Array(r - 1).fill((O - d) / (r - 1))];
        }
        const o = a.map((d, f) => L + a.slice(0, f).reduce((g, c) => g + c, 0)), l = (d, f) => {
          this.font(f ? 7.5 : 9, "bold", f ? Z : Ue);
          const g = d.map((w, y) => this.split(f ? w.toUpperCase() : w, a[y] - 10)), c = (f ? 7.5 : 9) * 1.38;
          return { wrapped: g, lh: c, h: Math.max(...g.map((w) => w.length)) * c + 8 };
        }, u = (d, f) => {
          const { wrapped: g, lh: c, h: w } = l(d, f);
          this.need(f && t.rows.length ? w + l(t.rows[0], !1).h : w), g.forEach((y, p) => {
            this.font(f ? 7.5 : 9, f || p === 0 ? "bold" : "normal", f ? Z : Ue), y.forEach((m, v) => n.text(m, o[p], this.y + 4 + v * c, { baseline: "top" }));
          }), this.y += w, this.rule();
        };
        u(t.head, !0), t.rows.forEach((d) => u(d, !1)), this.y += 8;
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
      n.setPage(s), this.font(7.5, "normal", Z), n.text(Se(t), L, Te - 38, { baseline: "top" }), n.text(`Page ${s} of ${r}`, Gt - L, Te - 38, { baseline: "top", align: "right" }), n.setDrawColor(...Di), n.setLineWidth(0.6), n.line(L, Te - 46, Gt - L, Te - 46);
  }
}
async function la(e, t) {
  const { jsPDF: n } = await import("./chunks/jspdf.es.min-0Bk908vi.js"), r = new n({ unit: "pt", format: "letter", compress: !0 });
  r.setProperties({ title: Se(t.title), subject: "Evidence dossier", author: Se(t.author), creator: "Interview My Work" });
  const s = new oa(r);
  for (const a of e) s.node(a);
  return s.finish(t.footer), r;
}
function ca(e, t) {
  const n = URL.createObjectURL(e), r = document.createElement("a");
  r.href = n, r.download = t, r.rel = "noopener", document.body.append(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(n), 6e4);
}
function da() {
  const { kb: e, persona: t, session: n, go: r } = M(), [s, a] = q(t);
  z(() => a(t), [t]);
  const o = n.turns.filter((m) => m.a), l = ue(() => Cn(e, n, s), [e, n, s]), [u, d] = q({ qa: !0, roles: !0, projects: !0, questions: !0, gaps: !0 }), [f, g] = q({ kind: "idle" });
  z(() => {
    import("./chunks/jspdf.es.min-0Bk908vi.js").catch(() => {
    });
  }, []);
  const c = {
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
  }, w = (m) => m === "qa" ? o.length > 0 : m === "roles" ? n.analyses.length > 0 : !0, y = $n(e, s), p = async () => {
    g({ kind: "busy" });
    try {
      const m = ta(e, n, { persona: s, sections: u }), v = await la(m.nodes, { title: m.title, author: e.subject.name, footer: Vr(e, s) });
      ca(v.output("blob"), m.filename), G("dossier_downloaded", { persona: s, questions: o.length, analyses: n.analyses.length }), g({ kind: "done", file: m.filename });
    } catch {
      g({ kind: "error" });
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
    /* @__PURE__ */ i("p", { class: "imw-help imw-export-intro", children: xt[s].intro }),
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Include" }),
    /* @__PURE__ */ i("ul", { class: "imw-export-list", children: [
      /* @__PURE__ */ i("li", { class: "is-fixed", children: [
        /* @__PURE__ */ i("span", { class: "imw-export-check", "aria-hidden": "true" }),
        /* @__PURE__ */ i("span", { children: [
          /* @__PURE__ */ i("strong", { children: "Contact details and experience at a glance" }),
          /* @__PURE__ */ i("small", { children: "Always included: roles and dates, education, and the skills that public work demonstrates." })
        ] })
      ] }),
      Object.keys(xe).map((m) => {
        const v = c[m], k = w(m) && u[m];
        return /* @__PURE__ */ i("li", { class: w(m) ? "" : "is-empty", children: [
          /* @__PURE__ */ i("label", { children: [
            /* @__PURE__ */ i("input", { type: "checkbox", checked: k, disabled: !w(m), onChange: (b) => d({ ...u, [m]: b.target.checked }) }),
            /* @__PURE__ */ i("span", { children: [
              /* @__PURE__ */ i("strong", { children: xe[m] }),
              /* @__PURE__ */ i("small", { children: w(m) ? v.text : v.empty }),
              w(m) && v.items && v.items.length > 0 && /* @__PURE__ */ i("span", { class: "imw-export-items", children: [
                v.items.slice(0, 6).map((b) => /* @__PURE__ */ i("em", { children: b }, b)),
                v.items.length > 6 && /* @__PURE__ */ i("em", { children: [
                  "+",
                  v.items.length - 6,
                  " more"
                ] })
              ] })
            ] })
          ] }),
          !w(m) && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r(m === "qa" ? "ask" : "role"), children: m === "qa" ? "Ask a question →" : "Evaluate a role →" })
        ] }, m);
      })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-export-go", children: [
      /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: p, disabled: f.kind === "busy", children: f.kind === "busy" ? "Building PDF…" : "Download PDF" }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: y })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", role: "status", "aria-live": "polite", children: [
      f.kind === "done" && `Downloaded ${f.file}. You can keep exploring and download again; the PDF always reflects the whole session.`,
      f.kind === "error" && "The PDF could not be built. Check your connection and try again; the rest of the workspace still works.",
      f.kind !== "done" && f.kind !== "error" && "Built in your browser. Nothing you typed or pasted is uploaded, and pasted job descriptions appear only as the requirements that were detected."
    ] })
  ] });
}
function ha() {
  const e = M(), { inspect: t, setInspect: n } = e;
  return /* @__PURE__ */ i("div", { class: "imw-evidence", children: [
    /* @__PURE__ */ i("div", { class: "imw-evidence-head", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Evidence" }),
      t && /* @__PURE__ */ i("button", { class: "imw-icon imw-evidence-close", onClick: () => n(null), "aria-label": "Close evidence", children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-evidence-body", "aria-live": "polite", children: [
      !t && /* @__PURE__ */ i(ua, {}),
      t?.kind === "claim" && /* @__PURE__ */ i(pa, { id: t.id }),
      t?.kind === "node" && /* @__PURE__ */ i(ma, { arch: t.arch, node: t.node }),
      t?.kind === "req" && /* @__PURE__ */ i(fa, {}),
      t?.kind === "entity" && /* @__PURE__ */ i(ga, { id: t.id }),
      t?.kind === "group" && /* @__PURE__ */ i(wa, { id: t.id }),
      t?.kind === "basis" && /* @__PURE__ */ i(ya, {})
    ] })
  ] });
}
function ua() {
  const { kb: e } = M(), t = e.claims.reduce((n, r) => n + (F(r) ? r.code?.length ?? 0 : 0), 0);
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
function pa({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.claim.get(e);
  if (!r) return null;
  const s = t.entity.get(r.entity), a = t.architectures.flatMap((l) => l.nodes.filter((u) => u.detail.claims.includes(e)).map((u) => ({ a: l, n: u }))), o = [...t.decisions, ...t.failures].filter((l) => l.claims.includes(e));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-st ${gt(r)}`, children: [
      /* @__PURE__ */ i(Le, { cls: gt(r) }),
      " ",
      fn(r)
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
    /* @__PURE__ */ i($e, { children: "Sources" }),
    /* @__PURE__ */ i("ul", { class: "imw-sources", children: r.sources.map((l) => {
      const u = t.sources.find((d) => d.id === l);
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
      /* @__PURE__ */ i($e, { children: "Show me the code" }),
      /* @__PURE__ */ i(De, { refs: r.code })
    ] }) : null,
    a.length ? /* @__PURE__ */ i(oe, { children: [
      /* @__PURE__ */ i($e, { children: "Appears in" }),
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
function ma({ arch: e, node: t }) {
  const { kb: n } = M(), r = n.architectures.find((o) => o.id === e), s = r?.nodes.find((o) => o.id === t);
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
      /* @__PURE__ */ i($e, { children: "Code" }),
      /* @__PURE__ */ i(De, { refs: a, max: 3 })
    ] }) : null
  ] });
}
function fa() {
  const { kb: e, inspect: t } = M();
  if (t?.kind !== "req") return null;
  const n = t.req, r = n.via ? e.skill.get(n.via)?.name : void 0, s = (n.pending ?? []).map((a) => e.claim.get(a)).filter(Boolean);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-cat ${qe[n.category]}`, children: ie[n.category] }),
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
function ga({ id: e }) {
  const { kb: t, persona: n } = M(), r = t.entity.get(e);
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
      t.archByEntity.has(e) && /* @__PURE__ */ i(lt, { a: { kind: "mode", label: "X-Ray", target: "xray", arg: e } }),
      /* @__PURE__ */ i(lt, { a: { kind: "anchor", label: "Jump to section", target: r.anchor } }),
      r.links.slice(0, 2).map((a) => /* @__PURE__ */ i(lt, { a: { kind: "url", label: a.label, target: a.url } }, a.url))
    ] }),
    /* @__PURE__ */ i(ne, { ids: s, title: "Key evidence", compact: !0 })
  ] });
}
function wa({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.groups.find((a) => a.id === e);
  if (!r) return null;
  const s = t.skills.filter((a) => a.group === e).map((a) => ({ s: a, cov: ce(t, a.id) }));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Capability area" }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: r.label }),
    /* @__PURE__ */ i("ul", { class: "imw-reqs", children: s.map(({ s: a, cov: o }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: o }), children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${qe[o.category]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("span", { children: a.name }),
      /* @__PURE__ */ i("small", { children: o.entities.slice(0, 3).map((l) => t.entity.get(l)?.short).join(" · ") || ie[o.category] })
    ] }) }, a.id)) })
  ] });
}
function ya() {
  const { inspect: e } = M();
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
function va() {
  const { kb: e, persona: t, setPersona: n, coverage: r, setCoverage: s, toggleLens: a, lensOn: o, go: l } = M(), u = e.personas.find((d) => d.id === t);
  return /* @__PURE__ */ i("div", { class: "imw-rail", children: [
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i($e, { children: "Answer depth" }),
      /* @__PURE__ */ i("div", { class: "imw-personas", role: "radiogroup", "aria-label": "Who is asking", children: e.personas.map((d) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": t === d.id, class: t === d.id ? "is-on" : "", onClick: () => n(d.id), children: d.label }, d.id)) }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        u.focus,
        " Persona changes depth, never the facts."
      ] })
    ] }),
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i($e, { children: "Role context" }),
      r ? /* @__PURE__ */ i("div", { class: "imw-context-card", children: [
        /* @__PURE__ */ i("strong", { children: r.title }),
        r.closestRole && r.source === "jd" && /* @__PURE__ */ i("span", { class: "imw-help", children: [
          "Closest target profile: ",
          r.closestRole
        ] }),
        /* @__PURE__ */ i(kt, { counts: r.counts, compact: !0 }),
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
      /* @__PURE__ */ i($e, { children: "Evidence states" }),
      /* @__PURE__ */ i("ul", { class: "imw-legend", children: [
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Le, { cls: "st-artifact" }),
          " Verified, public artifact"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Le, { cls: "st-self" }),
          " Verified, self-reported employment"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Le, { cls: "st-pending" }),
          " Verification required (never stated)"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Le, { cls: "st-no" }),
          " ",
          ie.missing
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-rail-about", children: [
      /* @__PURE__ */ i($e, { children: "How this works" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        "Answers come from ",
        e.claims.filter((d) => d.status === "verified").length,
        " verified claims with sources and pinned code links.",
        " ",
        e.claims.filter((d) => d.status !== "verified").length,
        " statements from other sources are held back until verified."
      ] }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l("xray", "imw"), children: "X-Ray this system →" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l("connect"), children: "Connect your own AI (MCP) →" })
    ] })
  ] });
}
const Ni = [
  { id: "ask", label: "Ask", hint: "Questions answered from verified evidence" },
  { id: "role", label: "Role fit", hint: "Evidence coverage for a role or job description" },
  { id: "xray", label: "X-Ray", hint: "Explore each system component by component" },
  { id: "map", label: "Map", hint: "The whole body of work as an evidence graph" },
  { id: "lab", label: "Proof lab", hint: "Replays, break-it tests and live numbers" },
  { id: "brief", label: "Brief", hint: "A 10-minute technical interview brief" },
  { id: "connect", label: "Connect your AI", hint: "Use this evidence from Claude, Cursor or VS Code over MCP" }
], ba = /* @__PURE__ */ new Set(["retrieval", "no_evidence", "topic", "entity", "focused", "skill", "personally", "scale", "challenge", "level", "overview", "shipped", "beyond_wrappers", "evaluation", "strongest"]), _a = /* @__PURE__ */ new Set(["entity", "claims", "xray", "chart", "trace", "decisions", "failures"]);
function ka({ kb: e, initial: t, register: n }) {
  const [r, s] = q(!0), [a, o] = q("ask"), [l, u] = q(), [d, f] = q("recruiter"), [g, c] = q(null), [w, y] = q(null), [p, m] = q([]), [v, k] = q([]), [b, _] = q([]), [h, x] = q("checking"), [C, E] = q(!1), A = ye(null), H = ye(null), K = ye(!1), re = ve(($, I) => {
    if (y($), !$) return;
    const X = (U) => `${U.source}|${U.title}|${U.requirements.map((de) => de.id).join()}`;
    m((U) => {
      const de = U.findIndex((W) => W === I || $.source === "role" && W.source === "role" && W.roleId === $.roleId || X(W) === X($));
      return de >= 0 ? U.map((W, Ne) => Ne === de ? $ : W) : [...U, $];
    });
  }, []), pe = ve(($) => {
    $ && k((I) => I.includes($) ? I : [...I, $]);
  }, []), Y = ve(($, I) => {
    o($), u(I), $ === "xray" && G("xray_opened", { project: I ?? "dia" }), A.current?.querySelector(".imw-main")?.scrollTo({ top: 0 });
  }, []), me = ve(($) => {
    H.current = $.trigger ?? document.activeElement, s(!0);
    const I = Ni.find((X) => X.id === $.mode)?.id ?? "ask";
    $.mode === "transform" && $.arg ? Y("role", $.arg) : Y(I, $.arg), G("interview_my_work_opened", { mode: I });
  }, [Y]);
  z(() => {
    n(me), me(t);
  }, []), z(() => {
    r && !K.current && (K.current = !0, lr(x));
  }, [r]), z(() => {
    const $ = document.querySelector(".wrap"), I = document.querySelector(".imw-fab");
    r ? (document.documentElement.classList.add("imw-open"), $?.setAttribute("inert", ""), I?.setAttribute("inert", ""), requestAnimationFrame(() => A.current?.querySelector("[data-autofocus]")?.focus() ?? A.current?.focus())) : (document.documentElement.classList.remove("imw-open"), $?.removeAttribute("inert"), I?.removeAttribute("inert"), H.current?.focus?.());
  }, [r]);
  const We = ve(() => s(!1), []), An = ($) => {
    if ($.key === "Escape") {
      $.preventDefault(), g && matchMedia("(max-width: 1100px)").matches ? c(null) : We();
      return;
    }
    if ($.key !== "Tab" || !A.current) return;
    const I = [...A.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((de) => de.offsetParent !== null);
    if (!I.length) return;
    const X = I[0], U = I[I.length - 1];
    $.shiftKey && document.activeElement === X ? ($.preventDefault(), U.focus()) : !$.shiftKey && document.activeElement === U && ($.preventDefault(), X.focus());
  }, ci = ve(($) => {
    s(!1), G("project_opened_from_ai", { anchor: $ }), hr($, () => s(!0));
  }, []), di = ve(($, I) => {
    const X = $ ?? !C, U = I ?? w;
    X && U ? (I && re(I), dr(e, U, { reopen: () => {
      s(!0), Y("role");
    }, restore: () => E(!1) }), E(!0), s(!1), G("portfolio_lens_applied", { source: U.source })) : (zt(), E(!1));
  }, [C, w, e, Y, re]), hi = ve(async ($) => {
    const I = $.trim();
    if (!I) return;
    Y("ask");
    const X = Date.now(), U = [...b].reverse().find((j) => j.a?.entities.length)?.a?.entities, de = [...b].reverse().find((j) => j.a), W = Os(e, I, { persona: d, roleId: w?.roleId, lastEntities: U, lastTopic: de?.a?.topic, lastQuestion: de?.q, lastIntent: de?.a?.intent }), Ne = ti(I);
    if (W.intent === "jd" || W.intent === "role") {
      const j = W.blocks.find((he) => he.type === "coverage");
      j && j.type === "coverage" && re(j.analysis), Ne && G("jd_analyzed", { requirements: j && j.type === "coverage" ? j.analysis.requirements.length : 0 });
    }
    const $t = h === "ready" && ba.has(W.intent);
    if (_((j) => [...j, { id: X, q: Ne ? "Job description (pasted)" : I, a: $t ? void 0 : W, pending: $t }]), Ne && h === "ready" && pn(I).then((j) => {
      if (!j.length) return;
      const he = pt(e, I, j), fe = W.blocks.find((Et) => Et.type === "coverage");
      re(he, fe && fe.type === "coverage" ? fe.analysis : void 0), _((Et) => Et.map((Oe) => Oe.id === X && Oe.a ? { ...Oe, a: { ...Oe.a, blocks: dn(he), refined: !0 } } : Oe));
    }).catch(() => {
    }), !$t) return;
    const Mn = b.filter((j) => j.a).slice(-3).map((j) => ({ q: j.q, cites: j.a.basis?.retrieved?.slice(0, 8) ?? [] }));
    let Ct;
    try {
      const j = await cr(e, I, d, Mn, w?.roleId, W.topic), he = W.blocks.filter((fe) => _a.has(fe.type)).map((fe) => fe.type === "claims" ? { ...fe, title: "Sources", collapsed: !0 } : fe);
      Ct = { ...j, blocks: [...j.blocks, ...he], actions: W.actions, followups: j.followups.length ? j.followups : W.followups, entities: [.../* @__PURE__ */ new Set([...j.entities, ...W.entities])], topic: W.topic };
    } catch (j) {
      Ct = W, (j.status ?? 0) >= 500 && x("offline");
    }
    _((j) => j.map((he) => he.id === X ? { ...he, a: Ct, pending: !1 } : he));
  }, [e, d, w, h, b, Y, re]), ui = ue(() => ({ turns: b, analyses: p, seen: v }), [b, p, v]), He = b.filter(($) => $.a).length + p.length, In = ue(() => ({
    kb: e,
    persona: d,
    setPersona: f,
    mode: a,
    go: Y,
    modeArg: l,
    inspect: g,
    setInspect: ($) => {
      c($), $ && (G("evidence_opened", { kind: $.kind }), $.kind === "entity" ? pe($.id) : $.kind === "claim" ? pe(e.claim.get($.id)?.entity) : $.kind === "node" && pe(e.architectures.find((I) => I.id === $.arch)?.entity));
    },
    coverage: w,
    setCoverage: re,
    session: ui,
    noteEntity: pe,
    ask: hi,
    api: h,
    jump: ci,
    lensOn: C,
    toggleLens: di,
    close: We
  }), [e, d, a, Y, l, g, w, re, ui, pe, hi, h, ci, C, di, We]);
  return /* @__PURE__ */ i(mn.Provider, { value: In, children: /* @__PURE__ */ i("div", { class: "imw", hidden: !r, children: [
    /* @__PURE__ */ i("div", { class: "imw-backdrop", onClick: We }),
    /* @__PURE__ */ i("div", { class: "imw-dialog", ref: A, role: "dialog", "aria-modal": "true", "aria-labelledby": "imw-title", tabIndex: -1, onKeyDown: An, children: [
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
        /* @__PURE__ */ i("div", { class: "imw-tabs", role: "tablist", "aria-label": "Workspace views", children: Ni.map(($) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": a === $.id, class: a === $.id ? "is-on" : "", title: $.hint, onClick: () => Y($.id), children: $.label }, $.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-top-right", children: [
          /* @__PURE__ */ i(xa, { status: h }),
          /* @__PURE__ */ i(
            "button",
            {
              class: `imw-dl${a === "export" ? " is-on" : ""}`,
              onClick: () => Y("export"),
              title: "Download what you explored as a PDF",
              "aria-label": He ? `Download PDF (${He} item${He === 1 ? "" : "s"} explored)` : "Download PDF",
              children: [
                /* @__PURE__ */ i("svg", { viewBox: "0 0 16 16", width: "14", height: "14", "aria-hidden": "true", children: /* @__PURE__ */ i("path", { d: "M8 2v8m0 0L4.8 6.8M8 10l3.2-3.2M3 13h10", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
                /* @__PURE__ */ i("span", { class: "imw-dl-label", children: "PDF" }),
                He > 0 && /* @__PURE__ */ i("span", { class: "imw-dl-count", "aria-hidden": "true", children: He })
              ]
            }
          ),
          /* @__PURE__ */ i("select", { class: "imw-persona-mobile", "aria-label": "Answer depth", value: d, onChange: ($) => f($.target.value), children: e.personas.map(($) => /* @__PURE__ */ i("option", { value: $.id, children: $.label }, $.id)) }),
          /* @__PURE__ */ i("button", { class: "imw-icon", onClick: We, "aria-label": "Close Interview My Work", children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { class: "imw-body", children: [
        /* @__PURE__ */ i("aside", { class: "imw-left", "aria-label": "Context", children: /* @__PURE__ */ i(va, {}) }),
        /* @__PURE__ */ i("main", { class: "imw-main", id: "imw-main", children: [
          a === "ask" && /* @__PURE__ */ i(Sr, { turns: b }),
          a === "role" && /* @__PURE__ */ i(Mr, {}),
          a === "xray" && /* @__PURE__ */ i(jr, {}),
          a === "map" && /* @__PURE__ */ i(Dr, {}),
          a === "lab" && /* @__PURE__ */ i(kr, {}),
          a === "brief" && /* @__PURE__ */ i(Wr, {}),
          a === "connect" && /* @__PURE__ */ i(Or, {}),
          a === "export" && /* @__PURE__ */ i(da, {})
        ] }),
        /* @__PURE__ */ i("aside", { class: `imw-right${g ? " has-item" : ""}`, "aria-label": "Evidence", children: /* @__PURE__ */ i(ha, {}) })
      ] })
    ] })
  ] }) });
}
function xa({ status: e }) {
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
let Pt = null, nt = null, Ft = null;
async function Ca(e = {}) {
  Pt ?? (Pt = es(vn("evidence.json")).catch((n) => {
    throw Pt = null, n;
  }));
  const t = await Pt;
  if (Ft) {
    Ft(e);
    return;
  }
  nt = document.createElement("div"), nt.id = "imw-host", document.body.appendChild(nt), Nn(/* @__PURE__ */ i(ka, { kb: t, initial: e, register: (n) => Ft = n }), nt);
}
export {
  Ca as open
};
