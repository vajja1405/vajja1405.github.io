var Sn = Object.defineProperty;
var In = (e, t, n) => t in e ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ui = (e, t, n) => In(e, typeof t != "symbol" ? t + "" : t, n);
var gt, R, Hi, ke, pi, Ni, Bi, Et, nt, Ue, Oi, Qt, Wt, Dt, zi, ct = {}, dt = [], Mn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, wt = Array.isArray;
function we(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Kt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function jn(e, t, n) {
  var r, s, a, o = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? s = t[a] : o[a] = t[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? gt.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
  return st(e, o, r, s, null);
}
function st(e, t, n, r, s) {
  var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Hi, __i: -1, __u: 0 };
  return s == null && R.vnode != null && R.vnode(a), a;
}
function oe(e) {
  return e.children;
}
function rt(e, t) {
  this.props = e, this.context = t;
}
function Ie(e, t) {
  if (t == null) return e.__ ? Ie(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ie(e) : null;
}
function Tn(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, r = [], s = [], a = we({}, t);
    a.__v = t.__v + 1, R.vnode && R.vnode(a), Jt(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? Ie(t), !!(32 & t.__u), s), a.__v = t.__v, a.__.__k[a.__i] = a, Ki(r, a, s), t.__e = t.__ = null, a.__e != n && Ui(a);
  }
}
function Ui(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Ui(e);
}
function Ht(e) {
  (!e.__d && (e.__d = !0) && ke.push(e) && !ht.__r++ || pi != R.debounceRendering) && ((pi = R.debounceRendering) || Ni)(ht);
}
function ht() {
  try {
    for (var e, t = 1; ke.length; ) ke.length > t && ke.sort(Bi), e = ke.shift(), t = ke.length, Tn(e);
  } finally {
    ke.length = ht.__r = 0;
  }
}
function Vi(e, t, n, r, s, a, o, l, p, d, m) {
  var g, c, y, w, u, f, v = r && r.__k || dt, k = t.length;
  for (p = Rn(n, t, v, p, k), g = 0; g < k; g++) (y = n.__k[g]) != null && (c = y.__i != -1 && v[y.__i] || ct, y.__i = g, f = Jt(e, y, c, s, a, o, l, p, d, m), w = y.__e, y.ref && c.ref != y.ref && (c.ref && Yt(c.ref, null, y), m.push(y.ref, y.__c || w, y)), u == null && w != null && (u = w), 4 & y.__u ? (p = Gi(y, p, e), c.__e && (c.__e = null)) : typeof y.type == "function" && f !== void 0 ? p = f : w && (p = w.nextSibling), y.__u &= -7);
  return n.__e = u, p;
}
function Rn(e, t, n, r, s) {
  var a, o, l, p, d, m = n.length, g = m, c = 0;
  for (e.__k = new Array(s), a = 0; a < s; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = st(null, o, null, null, null) : wt(o) ? o = e.__k[a] = st(oe, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = st(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, p = a + c, o.__ = e, o.__b = e.__b + 1, l = null, (d = o.__i = Ln(o, n, p, g)) != -1 && (g--, (l = n[d]) && (l.__u |= 2)), l == null || l.__v == null ? (d == -1 && (s > m ? c-- : s < m && c++), typeof o.type != "function" && (o.__u |= 4)) : d != p && (d == p - 1 ? c-- : d == p + 1 ? c++ : (d > p ? c-- : c++, o.__u |= 4))) : e.__k[a] = null;
  if (g) for (a = 0; a < m; a++) (l = n[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = Ie(l)), Yi(l, l));
  return r;
}
function Gi(e, t, n) {
  var r, s;
  if (typeof e.type == "function") {
    for (r = e.__k, s = 0; r && s < r.length; s++) r[s] && (r[s].__ = e, t = Gi(r[s], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = Ie(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ln(e, t, n, r) {
  var s, a, o, l = e.key, p = e.type, d = t[n], m = d != null && (2 & d.__u) == 0;
  if (d === null && l == null || m && l == d.key && p == d.type) return n;
  if (r > (m ? 1 : 0)) {
    for (s = n - 1, a = n + 1; s >= 0 || a < t.length; ) if ((d = t[o = s >= 0 ? s-- : a++]) != null && (2 & d.__u) == 0 && l == d.key && p == d.type) return o;
  }
  return -1;
}
function mi(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Mn.test(t) ? n : n + "px";
}
function Ye(e, t, n, r, s) {
  var a, o;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || mi(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || mi(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Oi, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r ? n[Ue] = r[Ue] : (n[Ue] = Qt, e.addEventListener(t, a ? Dt : Wt, a)) : e.removeEventListener(t, a ? Dt : Wt, a);
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
function fi(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[nt] == null) t[nt] = Qt++;
      else if (t[nt] < n[Ue]) return;
      return n(R.event ? R.event(t) : t);
    }
  };
}
function Jt(e, t, n, r, s, a, o, l, p, d) {
  var m, g, c, y, w, u, f, v, k, b, _, h, x, C, q, S, H = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (p = !!(32 & n.__u), a = [l = t.__e = n.__e]), (m = R.__b) && m(t);
  e: if (typeof H == "function") {
    g = o.length;
    try {
      if (k = t.props, b = H.prototype && H.prototype.render, _ = (m = H.contextType) && r[m.__c], h = m ? _ ? _.props.value : m.__ : r, n.__c ? v = (c = t.__c = n.__c).__ = c.__E : (b ? t.__c = c = new H(k, h) : (t.__c = c = new rt(k, h), c.constructor = H, c.render = Fn), _ && _.sub(c), c.state || (c.state = {}), c.__n = r, y = c.__d = !0, c.__h = [], c._sb = []), b && c.__s == null && (c.__s = c.state), b && H.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = we({}, c.__s)), we(c.__s, H.getDerivedStateFromProps(k, c.__s))), w = c.props, u = c.state, c.__v = t, y) b && H.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), b && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (b && H.getDerivedStateFromProps == null && k !== w && c.componentWillReceiveProps != null && c.componentWillReceiveProps(k, h), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(k, c.__s, h) === !1) {
          t.__v != n.__v && (c.props = k, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(K) {
            K && (K.__ = t);
          }), dt.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && o.push(c), l = Ie(n);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(k, c.__s, h), b && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(w, u, f);
        });
      }
      if (c.context = h, c.props = k, c.__P = e, c.__e = !1, x = R.__r, C = 0, b) c.state = c.__s, c.__d = !1, x && x(t), m = c.render(c.props, c.state, c.context), dt.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, x && x(t), m = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++C < 25);
      c.state = c.__s, c.getChildContext != null && (r = we(we({}, r), c.getChildContext())), b && !y && c.getSnapshotBeforeUpdate != null && (f = c.getSnapshotBeforeUpdate(w, u)), q = m != null && m.type === oe && m.key == null ? Ji(m.props.children) : m, l = Vi(e, wt(q) ? q : [q], t, n, r, s, a, o, l, p, d), c.base = t.__e, t.__u &= -161, c.__h.length && o.push(c), v && (c.__E = c.__ = null);
    } catch (K) {
      if (o.length = g, t.__v = null, p || a != null) {
        if (K.then) {
          for (t.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
          a != null && (a[a.indexOf(l)] = null), t.__e = l;
        } else if (a != null) for (S = a.length; S--; ) Kt(a[S]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), K.then || Qi(t), R.__e(K, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = Pn(n.__e, t, n, r, s, a, o, p, d);
  return (m = R.diffed) && m(t), 128 & t.__u ? void 0 : l;
}
function Qi(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Qi));
}
function Ki(e, t, n) {
  for (var r = 0; r < n.length; r++) Yt(n[r], n[++r], n[++r]);
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
function Ji(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : wt(e) ? e.map(Ji) : e.constructor !== void 0 ? null : we({}, e);
}
function Pn(e, t, n, r, s, a, o, l, p) {
  var d, m, g, c, y, w, u, f = n.props || ct, v = t.props, k = t.type;
  if (k == "svg" ? s = "http://www.w3.org/2000/svg" : k == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((y = a[d]) && "setAttribute" in y == !!k && (k ? y.localName == k : y.nodeType == 3)) {
      e = y, a[d] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode(v);
    e = document.createElementNS(s, k, v.is && v), l && (R.__m && R.__m(t, a), l = !1), a = null;
  }
  if (k == null) f === v || l && e.data == v || (e.data = v);
  else {
    if (a = k == "textarea" && v.defaultValue != null ? null : a && gt.call(e.childNodes), !l && a != null) for (f = {}, d = 0; d < e.attributes.length; d++) f[(y = e.attributes[d]).name] = y.value;
    for (d in f) y = f[d], d == "dangerouslySetInnerHTML" ? g = y : d == "children" || d in v || d == "value" && "defaultValue" in v || d == "checked" && "defaultChecked" in v || Ye(e, d, null, y, s);
    for (d in v) y = v[d], d == "children" ? c = y : d == "dangerouslySetInnerHTML" ? m = y : d == "value" ? w = y : d == "checked" ? u = y : l && typeof y != "function" || f[d] === y || Ye(e, d, y, f[d], s);
    if (m) l || g && (m.__html == g.__html || m.__html == e.innerHTML) || (e.innerHTML = m.__html), t.__k = [];
    else if (g && (e.innerHTML = ""), Vi(t.type == "template" ? e.content : e, wt(c) ? c : [c], t, n, r, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, a, o, a ? a[0] : n.__k && Ie(n, 0), l, p), a != null) for (d = a.length; d--; ) Kt(a[d]);
    l && k != "textarea" || (d = "value", k == "progress" && w == null ? e.removeAttribute("value") : w != null && (w !== e[d] || k == "progress" && !w || k == "option" && w != f[d]) && Ye(e, d, w, f[d], s), d = "checked", u != null && u != e[d] && Ye(e, d, u, f[d], s));
  }
  return e;
}
function Yt(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    R.__e(s, n);
  }
}
function Yi(e, t, n) {
  var r, s;
  if (R.unmount && R.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || Yt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      R.__e(a, t);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = e.__k) for (s = 0; s < r.length; s++) r[s] && Yi(r[s], t, n || typeof e.type != "function");
  n || Kt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Fn(e, t, n) {
  return this.constructor(e, n);
}
function Wn(e, t, n) {
  var r, s, a, o;
  t == document && (t = document.documentElement), R.__ && R.__(e, t), s = (r = !1) ? null : t.__k, a = [], o = [], Jt(t, e = t.__k = jn(oe, null, [e]), s || ct, ct, t.namespaceURI, s ? null : t.firstChild ? gt.call(t.childNodes) : null, a, s ? s.__e : t.firstChild, r, o), Ki(a, e, o), e.props.children = null;
}
function Dn(e) {
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
  return t.__c = "__cC" + zi++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
gt = dt.slice, R = { __e: function(e, t, n, r) {
  for (var s, a, o; t = t.__; ) if ((s = t.__c) && !s.__) try {
    if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(e)), o = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), o = s.__d), o) return s.__E = s;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Hi = 0, rt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = we({}, this.state), typeof e == "function" && (e = e(we({}, n), this.props)), e && we(n, e), e != null && this.__v && (t && this._sb.push(t), Ht(this));
}, rt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ht(this));
}, rt.prototype.render = oe, ke = [], Ni = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Bi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ht.__r = 0, Et = Math.random().toString(8), nt = "__d" + Et, Ue = "__a" + Et, Oi = /(PointerCapture)$|Capture$/i, Qt = 0, Wt = fi(!1), Dt = fi(!0), zi = 0;
var Hn = 0;
function i(e, t, n, r, s, a) {
  t || (t = {});
  var o, l, p = t;
  if ("ref" in p) for (l in p = {}, t) l == "ref" ? o = t[l] : p[l] = t[l];
  var d = { type: e, props: p, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Hn, __i: -1, __u: 0, __source: s, __self: a };
  if (typeof e == "function" && (o = e.defaultProps)) for (l in o) p[l] === void 0 && (p[l] = o[l]);
  return R.vnode && R.vnode(d), d;
}
var Me, P, At, gi, Ve = 0, Xi = [], W = R, wi = W.__b, yi = W.__r, vi = W.diffed, bi = W.__c, _i = W.unmount, ki = W.__;
function Je(e, t) {
  W.__h && W.__h(P, e, Ve || t), Ve = 0;
  var n = P.__H || (P.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function E(e) {
  return Ve = 1, Nn(Zi, e);
}
function Nn(e, t, n) {
  var r = Je(Me++, 2);
  if (r.t = e, !r.__c && (r.__ = [Zi(void 0, t), function(l) {
    var p = r.__N ? r.__N[0] : r.__[0], d = r.t(p, l);
    p !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = P, !P.__f)) {
    var s = function(l, p, d) {
      if (!r.__c.__H) return !0;
      var m = !1, g = r.__c.props !== l;
      if (r.__c.__H.__.some(function(y) {
        if (y.__N) {
          m = !0;
          var w = y.__[0];
          y.__ = y.__N, y.__N = void 0, w !== y.__[0] && (g = !0);
        }
      }), a) {
        var c = a.call(this, l, p, d);
        return m ? c || g : c;
      }
      return !m || g;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate, o = P.componentWillUpdate;
    P.componentWillUpdate = function(l, p, d) {
      if (this.__e) {
        var m = a;
        a = void 0, s(l, p, d), a = m;
      }
      o && o.call(this, l, p, d);
    }, P.shouldComponentUpdate = s;
  }
  return r.__N || r.__;
}
function z(e, t) {
  var n = Je(Me++, 3);
  !W.__s && Xt(n.__H, t) && (n.__ = e, n.u = t, P.__H.__h.push(n));
}
function Bn(e, t) {
  var n = Je(Me++, 4);
  !W.__s && Xt(n.__H, t) && (n.__ = e, n.u = t, P.__h.push(n));
}
function ye(e) {
  return Ve = 5, he(function() {
    return { current: e };
  }, []);
}
function he(e, t) {
  var n = Je(Me++, 7);
  return Xt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ve(e, t) {
  return Ve = 8, he(function() {
    return e;
  }, t);
}
function On(e) {
  var t = P.context[e.__c], n = Je(Me++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(P)), t.props.value) : e.__;
}
function zn() {
  for (var e; e = Xi.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(at), t.__h.some(Nt), t.__h = [];
    } catch (n) {
      t.__h = [], W.__e(n, e.__v);
    }
  }
}
W.__b = function(e) {
  P = null, wi && wi(e);
}, W.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ki && ki(e, t);
}, W.__r = function(e) {
  yi && yi(e), Me = 0;
  var t = (P = e.__c).__H;
  t && (At === P ? (t.__h = [], P.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(at), t.__h.some(Nt), t.__h = [], Me = 0)), At = P;
}, W.diffed = function(e) {
  vi && vi(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Xi.push(t) !== 1 && gi === W.requestAnimationFrame || ((gi = W.requestAnimationFrame) || Un)(zn)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), At = P = null;
}, W.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(at), n.__h = n.__h.filter(function(r) {
        return !r.__ || Nt(r);
      });
    } catch (r) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], W.__e(r, n.__v);
    }
  }), bi && bi(e, t);
}, W.unmount = function(e) {
  _i && _i(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      at(r);
    } catch (s) {
      t = s;
    }
  }), n.__H = void 0, t && W.__e(t, n.__v));
};
var xi = typeof requestAnimationFrame == "function";
function Un(e) {
  var t, n = function() {
    clearTimeout(r), xi && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  xi && (t = requestAnimationFrame(n));
}
function at(e) {
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
function Zi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ue(e) {
  return e.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}
const Vn = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work".split(" ")
);
function en(e) {
  return ue(e).replace(/[^a-z0-9+#/. -]/g, " ").split(/[\s/]+/).map((t) => t.replace(/^[.-]+|[.-]+$/g, "")).filter((t) => t.length > 1 && !Vn.has(t)).map(Gn);
}
function Gn(e) {
  if (e.length <= 4) return e;
  for (const t of ["ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"])
    if (e.endsWith(t) && e.length - t.length >= 4) return e.slice(0, -t.length);
  return e;
}
const D = (e) => !!e && e.status === "verified" && e.public_safe, Qn = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function Kn(e) {
  return new RegExp(`(?<![a-z0-9])${Qn(e)}(?![a-z0-9+#])`, "g");
}
function Jn(e) {
  const t = e;
  t.claim = new Map(e.claims.map((s) => [s.id, s])), t.entity = new Map(e.entities.map((s) => [s.id, s])), t.skill = new Map(e.skills.map((s) => [s.id, s])), t.gap = new Map(e.gaps.map((s) => [s.id, s])), t.role = new Map(e.roles.map((s) => [s.id, s])), t.archByEntity = new Map(e.architectures.map((s) => [s.entity, s]));
  const n = [], r = (s, a) => {
    const o = ue(s);
    o && n.push({ term: o, ref: { ...a, term: s }, re: Kn(o) });
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
async function Yn(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`evidence ${t.status}`);
  return Jn(await t.json());
}
const ee = (e, t) => e.entity.get(t)?.short ?? t, yt = (e, t) => e.skill.get(t)?.name ?? e.gap.get(t)?.name ?? t;
function vt(e, t) {
  const n = ue(t), r = [], s = /* @__PURE__ */ new Map();
  for (const a of e.aliases) {
    a.re.lastIndex = 0;
    let o;
    for (; o = a.re.exec(n); ) {
      const l = o.index, p = l + o[0].length;
      if (r.some(([g, c]) => l < c && p > g)) continue;
      r.push([l, p]);
      const d = a.ref.near ? `near:${a.ref.term}` : a.ref.id, m = s.get(d);
      m ? m.count++ : s.set(d, { ...a.ref, count: 1, index: l });
    }
  }
  return [...s.values()].sort((a, o) => a.index - o.index);
}
const Xn = {
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
}, St = Object.entries(Xn).map(
  ([e, t]) => [e, new RegExp(`(?<![a-z0-9])(${t.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`)]
);
function tn(e) {
  const t = ue(e);
  return St.filter(([, n]) => n.test(t)).map(([n]) => n).sort((n, r) => t.search(St.find(([s]) => s === n)[1]) - t.search(St.find(([s]) => s === r)[1]));
}
const $i = /* @__PURE__ */ new WeakMap();
function Zn(e) {
  let t = $i.get(e);
  if (t) return t;
  const n = e.claims.filter(D).map((s) => {
    const a = [e.entity.get(s.entity)?.name ?? "", ...s.tags.map((o) => e.skill.get(o)?.name ?? "")].join(" ");
    return { claim: s, toks: en(`${s.text} ${a}`) };
  }), r = /* @__PURE__ */ new Map();
  for (const s of n) new Set(s.toks).forEach((a) => r.set(a, (r.get(a) ?? 0) + 1));
  return t = { docs: n, df: r, avg: n.reduce((s, a) => s + a.toks.length, 0) / Math.max(1, n.length) }, $i.set(e, t), t;
}
function nn(e, t, n = {}) {
  const r = Zn(e), s = [...new Set(en(t))], a = new Set(n.concepts ?? vt(e, t).filter((g) => g.kind === "skill").map((g) => g.id)), o = new Set(n.entities ?? tn(t)), l = r.docs.length, p = 1.2, d = 0.75, m = [];
  for (const g of r.docs) {
    let c = 0;
    for (const y of s) {
      const w = g.toks.filter((v) => v === y).length;
      if (!w) continue;
      const u = r.df.get(y) ?? 0, f = Math.log(1 + (l - u + 0.5) / (u + 0.5));
      c += f * (w * (p + 1) / (w + p * (1 - d + d * g.toks.length / r.avg)));
    }
    for (const y of g.claim.tags) a.has(y) && (c += 2.5);
    o.has(g.claim.entity) && (c += 3), g.claim.kind === "limitation" && (c *= 0.8), c > 0 && m.push({ claim: g.claim, score: c });
  }
  return m.sort((g, c) => c.score - g.score).slice(0, n.limit ?? 12);
}
const Ci = { public_artifact: 1, self_reported: 0.8 };
function le(e, t, n = {}) {
  const r = e.gap.get(t);
  if (r) {
    const l = r.related.flatMap((p) => e.statableBySkill.get(p) ?? []);
    return {
      id: t,
      label: r.name,
      category: r.verify ? "verification" : "missing",
      priority: n.priority,
      claims: [],
      entities: Xe(l.map((p) => p.entity)).slice(0, 4),
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
      label: Mt(n.near),
      term: n.near,
      category: a.length ? "related" : "missing",
      priority: n.priority,
      claims: a.slice(0, 6).map((l) => l.id),
      entities: Xe(a.map((l) => l.entity)),
      via: t,
      statement: a.length ? `${Mt(n.near)} itself is not demonstrated. The closest evidence is ${s.name.toLowerCase()}.` : `${Mt(n.near)} is not demonstrated.`
    };
  if (a.length) {
    const l = a.some((p) => p.strength === "public_artifact");
    return {
      id: t,
      label: s.name,
      category: "direct",
      priority: n.priority,
      claims: It(a).map((p) => p.id),
      entities: Xe(It(a).map((p) => p.entity)),
      strength: l ? "artifact" : "self_reported",
      pending: o
    };
  }
  for (const l of s.related) {
    const p = e.statableBySkill.get(l) ?? [];
    if (p.length)
      return {
        id: t,
        label: s.name,
        category: "related",
        priority: n.priority,
        via: l,
        claims: It(p).slice(0, 6).map((d) => d.id),
        entities: Xe(p.map((d) => d.entity)),
        pending: o,
        statement: `No direct evidence for ${s.name.toLowerCase()}. The closest is ${yt(e, l).toLowerCase()}.`
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
function It(e) {
  return [...e].sort((t, n) => (Ci[n.strength] ?? 0) - (Ci[t.strength] ?? 0) || (t.kind === "limitation" ? 1 : 0) - (n.kind === "limitation" ? 1 : 0));
}
function Zt(e, t, n, r = {}) {
  const s = { direct: 0, related: 0, verification: 0, missing: 0 };
  n.forEach((p) => s[p.category]++);
  const a = /* @__PURE__ */ new Map();
  for (const p of n)
    if (!(p.category !== "direct" && p.category !== "related"))
      for (const d of p.entities) {
        const m = a.get(d) ?? { score: 0, requirements: [] };
        m.score += (p.category === "direct" ? 1 : 0.4) * (d === "imw" ? 0.4 : 1), m.requirements.push(p.id), a.set(d, m);
      }
  const o = ["direct", "related", "verification", "missing"], l = { required: 0, preferred: 1, mentioned: 2, undefined: 1 };
  return {
    title: t,
    source: "role",
    notes: [],
    ...r,
    requirements: [...n].sort((p, d) => o.indexOf(p.category) - o.indexOf(d.category) || l[String(p.priority)] - l[String(d.priority)]),
    counts: s,
    entities: [...a.entries()].map(([p, d]) => ({ id: p, ...d })).filter((p) => e.entity.has(p.id)).sort((p, d) => d.score - p.score)
  };
}
function Ce(e, t) {
  const n = e.role.get(t);
  if (!n) throw new Error(`unknown role ${t}`);
  const r = [...n.requirements.map((a) => le(e, a)), ...n.gaps.map((a) => le(e, a))], s = [n.level_note, e.subject.level_note].filter(Boolean);
  return Zt(e, n.title, r, { source: "role", roleId: t, notes: s });
}
const ie = {
  direct: "Direct evidence",
  related: "Related evidence",
  verification: "Verification required",
  missing: "Not currently demonstrated"
}, Xe = (e) => [...new Set(e)], Mt = (e) => e.replace(/\b[a-z]/g, (t) => t.toUpperCase()), es = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/, sn = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/, ts = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/, is = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;
function ns(e) {
  const t = e.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(t)) return null;
  const n = ue(t).replace(/^#+\s*/, ""), r = n.split(" ").length;
  return n.length > 0 && n.length < 70 && (/[:：]$/.test(n) || /^#/.test(t) || r <= 5 && !/[.,;]/.test(n)) ? es.test(n) ? "skip" : sn.test(n) ? "preferred" : ts.test(n) ? "required" : is.test(n) ? "mentioned" : null : null;
}
function ss(e, t) {
  const n = t.split(/\r?\n/);
  let r = "mentioned";
  const s = /* @__PURE__ */ new Map(), a = { required: 3, preferred: 2, mentioned: 1, skip: 0 };
  for (const c of n) {
    if (!c.trim()) continue;
    const y = ns(c);
    if (y) {
      r = y;
      continue;
    }
    if (r === "skip") continue;
    const w = sn.test(ue(c)) ? "preferred" : r;
    for (const u of vt(e, c)) {
      const f = u.near ? `near:${u.term.toLowerCase()}` : u.id, v = s.get(f);
      v ? (v.count += u.count, a[w] > a[v.priority] && (v.priority = w)) : s.set(f, { id: u.id, near: u.near ? u.term.toLowerCase() : void 0, priority: w, count: u.count });
    }
  }
  const o = ue(t), l = [...o.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((c) => Number(c[1])).filter((c) => c > 0 && c < 30), p = o.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/), d = new Set([...s.values()].filter((c) => !c.near && e.skill.has(c.id)).map((c) => c.id));
  let m, g = 0;
  for (const c of e.roles) {
    const y = c.requirements.filter((w) => d.has(w)).length / c.requirements.length;
    y > g && (g = y, m = c.id);
  }
  return {
    concepts: [...s.values()],
    years: l.length ? Math.max(...l) : void 0,
    seniority: p?.[1],
    closestRole: g >= 0.25 ? m : void 0
  };
}
function ut(e, t, n = []) {
  const r = ss(e, t), s = [], a = /* @__PURE__ */ new Set(), o = { required: 0, preferred: 1, mentioned: 2 }, l = [...r.concepts].sort((d, m) => o[d.priority] - o[m.priority] || m.count - d.count).slice(0, 26);
  for (const d of l) {
    const m = le(e, d.id, { near: d.near, priority: d.priority === "skip" ? "mentioned" : d.priority });
    a.has(m.id) || (a.add(m.id), s.push(m));
  }
  for (const d of n) {
    const m = vt(e, d);
    if (m.length)
      for (const g of m) {
        const c = le(e, g.id, { near: g.near ? g.term.toLowerCase() : void 0, priority: "required" });
        a.has(c.id) || (a.add(c.id), s.push(c));
      }
    else if (d.trim().length > 2) {
      const g = le(e, d.trim(), { priority: "required" });
      a.has(g.id) || (a.add(g.id), s.push(g));
    }
  }
  const p = [];
  return r.years && r.years >= 3 ? p.push(`The description asks for ${r.years}+ years. ${e.subject.level_note}`) : r.seniority && p.push(`The description uses the word "${r.seniority}". ${e.subject.level_note}`), s.length || p.push("No recognizable technical requirements were found. Try pasting the requirements section."), Zt(e, "Your job description", s, {
    source: "jd",
    notes: p,
    closestRole: r.closestRole ? e.role.get(r.closestRole)?.title : void 0,
    roleId: r.closestRole
  });
}
const ei = (e) => e.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(e), rn = /\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|best candidate|excellent fit|great fit|strong fit|perfect|10\s?\/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|highly recommend|must hire|unmatched|brilliant|superstar)\b/i, rs = /(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)/i, as = /(\b(rate|score|rank)\b.*\b(him|rahul|candidate)\b|\bout of (10|ten|100)\b|percent(age)? (match|fit)|%\s?(match|fit)|match (score|percentage)|fit score)/i, os = /\b(weather|joke|poem|recipe|song|lyrics|stock price|bitcoin|politic|election|horoscope|translate this|write (me )?(an? )?(essay|story|cover letter)|capital of|who won the)\b/i, ls = (e) => [...new Set(e)], cs = /(how (can|could|do|would) you (say|know|tell|claim|conclude)|what makes you (say|think)|why (do|would) you (say|think)|prove (it|that|this)|how (does|do|did) (that|this|it) (make sense|prove|show|follow|answer|mean)|how (that|this|it) makes? sense|(that|this|it) (doesn'?t|does not|didn'?t) make (any )?sense|makes? no sense|what('?s| is) the (evidence|proof|reasoning|logic)|explain (that|this|why|your reasoning|how)|\bhow so\b|^really\b|are you sure|i don'?t (get|understand|buy|see)|not convinced|so what|why does (that|this) matter|^why\??$|^but (how|why|what)\b)/, qi = /* @__PURE__ */ new Map(), ds = (e) => {
  let t = qi.get(e.id);
  return t || qi.set(e.id, t = e.match.map((n) => new RegExp(n, "i"))), t;
};
function hs(e, t) {
  const n = ue(t);
  let r, s = 0;
  for (const a of e.topics ?? []) {
    const o = ds(a).reduce((l, p) => l + (p.test(n) ? 1 : 0), 0);
    o > s && (r = a, s = o);
  }
  return r;
}
const Fe = (e, t) => t ? e.topics?.find((n) => n.id === t) : void 0;
function us(e, t) {
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
  const n = e.sources ?? ls([...e.leadCites ?? [], ...e.points.flatMap((r) => r.cites), ...e.takeawayCites ?? []]);
  return n.length && t.push({ type: "claims", title: "Sources", ids: n, collapsed: !0 }), t;
}
function an(e, t, n) {
  return { blocks: t, followups: n.followups ?? [], actions: n.actions ?? [], engine: "evidence", intent: e, entities: n.entities ?? [], topic: n.topic };
}
const ps = (e, t) => t.map((n) => e.entity.get(n)).filter((n) => !!n && n.kind !== "education").slice(0, 2).map((n) => ({ kind: "anchor", label: `See ${n.short} on the portfolio`, target: n.anchor }));
function Ge(e, t, n, r = {}) {
  const s = us(e, t), a = n === "recruiter" || n === "founder" ? [] : s.failures.filter((p) => e.failures.some((d) => d.id === p)), o = r.challenged && r.again ? s.plain ?? `Put simply: ${s.takeaway?.text.replace(/^(For your team|Bottom line): /, "") ?? t.lead.text}` : r.challenged && s.why ? `Fair question. ${s.why}` : r.lead ?? t.lead.text, l = se({
    lead: o,
    leadCites: r.challenged ? [] : t.lead.cites,
    points: s.points,
    takeaway: s.takeaway?.text,
    takeawayCites: s.takeaway?.cites,
    extra: a.length ? [{ type: "failures", ids: a.slice(0, 2) }] : []
  });
  return an(r.challenged ? "reasoning" : "topic_answer", l, {
    entities: t.entities,
    topic: t.id,
    actions: t.actions ?? ps(e, t.entities),
    followups: t.followups
  });
}
function ms(e, t, n) {
  const r = n.entities?.map((l) => e.entity.get(l)).find(Boolean), s = r ? (e.statableByEntity.get(r.id) ?? []).filter((l) => l.kind !== "limitation").slice(0, 2) : [], a = [
    { label: "What the answer rests on", text: "Only verified evidence: public code, data, recordings and papers, plus his employment history, with each item labelled by how it can be checked.", cites: [] }
  ];
  r && a.push({ label: `What it shows about ${r.short}`, text: r.summaries[t] ?? r.tagline, cites: s.map((l) => l.id) }), a.push({ label: "How it connects to your question", text: 'Those are the closest verified items to what you asked. If you meant something more specific, ask it directly, for example "How does he handle disagreements in a team?", and you will get an answer to that exact question.', cites: [] });
  const o = se({
    lead: n.question ? `Fair question. The previous answer was about "${n.question}". Here is the reasoning behind it:` : "Fair question. Here is the reasoning:",
    points: a
  });
  return an("reasoning", o, {
    entities: r ? [r.id] : [],
    followups: ["How does he work in a team?", "What has Rahul actually shipped?", "Why should we hire Rahul?"]
  });
}
function fs(e, t) {
  const n = /* @__PURE__ */ new Set(["python", "metrics", "healthcare", "fintech", "product_judgment", "testing"]), r = t.tags.find((s) => !n.has(s)) ?? t.tags[0];
  return r ? yt(e, r) : e.entity.get(t.entity)?.short ?? "Evidence";
}
function Qe(e, t, n = 2) {
  const r = /* @__PURE__ */ new Map();
  for (const s of t.filter(D)) {
    const a = r.get(s.entity) ?? r.set(s.entity, []).get(s.entity);
    a.length < n && a.push(s);
  }
  return [...r.entries()].map(([s, a]) => {
    const o = e.entity.get(s);
    return { label: o ? o.kind === "experience" && o.role ? `${o.short} · ${o.role.split(" · ")[0]}` : o.name : s, text: a.map((p) => p.text).join(" "), cites: a.map((p) => p.id) };
  });
}
function on(e, t) {
  return t.filter(D).map((n) => ({ label: fs(e, n), text: n.text, cites: [n.id] }));
}
const j = (e, t) => t.test(e), Q = (e) => [...new Set(e)];
function Ei(e, t) {
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
  const a = [...t].filter(D).sort((p, d) => Ei(d, n) - Ei(p, n)), o = /* @__PURE__ */ new Map(), l = [];
  for (const p of a) {
    const d = o.get(p.entity) ?? 0;
    if (!(d >= r || l.includes(p)) && (o.set(p.entity, d + 1), l.push(p), l.length >= s))
      break;
  }
  return l;
}
function ti(e, t) {
  return Q(t.flatMap((n) => e.statableBySkill.get(n) ?? []));
}
function Se(e, t) {
  return (e.statableByEntity.get(t) ?? []).filter((n) => n.kind === "limitation");
}
function N(e) {
  return e.map((t) => t.id);
}
function ii(e) {
  return { kind: "anchor", label: `Jump to ${e.short} on the portfolio`, target: e.anchor };
}
function We(e, t, n = {}) {
  const r = e.entity.get(t);
  if (!r) return [];
  const s = [];
  n.xray !== !1 && e.archByEntity.has(t) && s.push({ kind: "mode", label: `X-Ray ${r.short}`, target: "xray", arg: t }), s.push(ii(r));
  for (const a of r.links.slice(0, 2)) s.push({ kind: "url", label: a.label, target: a.url });
  return s;
}
function O(e, t, n = []) {
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
  return a.filter(([l]) => !n.includes(l)).filter(([l]) => l === "architecture" ? o : !0).filter(([l]) => l === "failure" ? e.failures.some((p) => p.entity === t) || Se(e, t).length > 0 : !0).filter(([l]) => l === "why" ? e.decisions.some((p) => p.entity === t) : !0).map(([, l]) => l).slice(0, 5);
}
const bt = [
  "What has Rahul actually shipped?",
  "Show me his strongest RAG work.",
  "How does he evaluate AI systems?",
  "What failure did he find and fix?",
  "What has he built beyond LLM wrappers?",
  "Show me his backend engineering experience."
];
function A(e, t, n = {}) {
  return {
    blocks: t,
    followups: n.followups ?? bt.slice(0, 4),
    actions: n.actions ?? [],
    engine: "evidence",
    intent: e,
    entities: n.entities ?? [],
    basis: n.basis,
    topic: n.topic
  };
}
function ni(e) {
  return Q(e.blocks.flatMap((t) => t.type === "claims" ? t.ids : t.type === "p" || t.type === "takeaway" ? t.cites ?? [] : t.type === "points" ? t.items.flatMap((n) => n.cites) : []));
}
function gs(e) {
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
function ws(e, t) {
  const n = ni(t);
  return t.basis = {
    retrieved: t.basis?.retrieved ?? n,
    checks: [
      { label: "Only verified, public-safe claims cited", ok: n.every((r) => D(e.claim.get(r))) },
      { label: "No fit scores, rankings or praise", ok: !rn.test(gs(t)) },
      { label: "Every cited claim links to a source", ok: n.every((r) => (e.claim.get(r)?.sources.length ?? 0) > 0) }
    ]
  }, t;
}
const ys = [
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
function vs(e) {
  const t = ue(e);
  return ys.find(([n]) => n.test(t))?.[1];
}
function bs(e, t, n) {
  return ws(e, _s(e, t, n));
}
function _s(e, t, n) {
  const r = t.trim(), s = ue(r), a = n.persona;
  if (!s) return ks(e);
  if (rs.test(r))
    return A("injection", [
      { type: "p", text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." }
    ], { followups: bt.slice(0, 4) });
  if (ei(r)) return As(e, r);
  if (as.test(s)) {
    const f = Fe(e, "why_hire"), v = "I won't put a number on a person, because a score hides the evidence you actually need. Here is the case instead, point by point:";
    if (f) return { ...Ge(e, f, a, { lead: v }), intent: "no_scores", actions: [{ kind: "mode", label: "Check against your job description", target: "role", arg: "jd" }] };
  }
  const o = tn(r), l = vt(e, r), p = Q(l.map((f) => f.id));
  if (os.test(s) && !o.length && !l.length)
    return A("off_topic", [{ type: "p", text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  if (j(s, /\b(contact|email|reach (him|rahul|out)|get in touch|linkedin|resume|cv|available|availability|open to (work|roles|opportunities)|job search|start date)\b/)) return xs(e);
  const d = hs(e, r);
  if (cs.test(s) && (d || !o.length && !l.length)) {
    const f = d ?? Fe(e, n.lastTopic);
    return f ? Ge(e, f, a, { challenged: !0, again: n.lastIntent === "reasoning" && n.lastTopic === f.id }) : ms(e, a, { question: n.lastQuestion, entities: n.lastEntities });
  }
  const m = Es(e, s, r, o, p, a);
  if (m) return m;
  const g = vs(s);
  if (g && j(s, /(interviewer|interview questions|would .* ask)/)) return Mi(e, g);
  if (g && j(s, /challenge/)) return ji(e, g);
  if (g && j(s, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return Ai(e, g);
  if (n.roleId && j(s, /(this role|the role|this evidence|for this|^challenge)/))
    return j(s, /challenge/) ? ji(e, n.roleId) : j(s, /(interview|ask)/) ? Mi(e, n.roleId) : Ai(e, n.roleId);
  if (j(s, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/))
    return A(
      "role_prompt",
      [{ type: "p", text: "Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated." }],
      { actions: [{ kind: "mode", label: "Select a role", target: "role" }, { kind: "mode", label: "Paste a job description", target: "role", arg: "jd" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an ML Engineer role", "Evaluate Rahul for an LLM Application Engineer role"] }
    );
  if (j(s, /\b(compare|versus|vs\.?|difference between|differ)\b/) && o.length >= 2) return Si(e, o.slice(0, 2), a);
  if (j(s, /\b(compare|versus|vs\.?)\b/) && o.length === 1 && n.lastEntities?.length) {
    const f = n.lastEntities.find((v) => v !== o[0]);
    if (f) return Si(e, [f, o[0]], a);
  }
  if (j(s, /(who is (rahul|he)|about rahul|about him|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr|tell me about (rahul|him)$)/)) return Ws(e);
  if (d && o.every((f) => d.entities.includes(f))) return Ps(e, d, l.map((f) => f.id), a);
  if (s.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/) || j(s, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const f = l.filter((b) => b.kind === "skill").map((b) => b.id), v = Ze(s), k = f.length ? f : v;
    if (k.length) return Ii(e, k, a, s);
  }
  if (j(s, /\b(strongest|best)\b/) && Ze(s).length) return Ii(e, Ze(s), a, s);
  if (j(s, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/) && l.length) return Bt(e, l.map((f) => ({ id: f.id, near: f.near ? f.term.toLowerCase() : void 0 })), a, s);
  const w = o[0] ?? (j(s, /\b(it|this|that|the project)\b/) ? n.lastEntities?.[0] : void 0);
  if (w) return Ss(e, w, s, a);
  if (j(s, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return Rs();
  if (j(s, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return Is(e, a, j(s, /\b(more|all|other)\b/));
  if (j(s, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return Ms(e, a);
  if (j(s, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return js(e);
  if (j(s, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return Ts(e);
  if (j(s, /(personally|himself|his own|individual contribution)/)) return A("personally", [{ type: "p", text: "Ask about a specific project or role. Ownership is recorded per item:" }, ...e.entities.filter((f) => f.ownership && f.kind !== "education").slice(0, 7).map((f) => ({ type: "p", text: `${f.short}: ${f.ownership}` }))]);
  const u = Ze(s);
  return u.length ? Ls(e, s, u, a) : l.length ? Bt(e, l.map((f) => ({ id: f.id, near: f.near ? f.term.toLowerCase() : void 0 })), a, s) : Fs(e, r, a);
}
function ks(e) {
  return A("help", [{ type: "p", text: `Ask about ${e.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}
function xs(e) {
  return A("contact", [{ type: "p", lead: !0, text: `${e.subject.name} is open to full-time AI / ML engineering roles in the US. Email is the fastest way to reach him, and his LinkedIn and GitHub are linked below.` }], {
    actions: [
      { kind: "url", label: "Email Rahul", target: `mailto:${e.subject.email}` },
      { kind: "url", label: "LinkedIn", target: e.subject.links.linkedin },
      { kind: "url", label: "GitHub", target: e.subject.links.github },
      { kind: "anchor", label: "Jump to contact", target: "#contact" }
    ],
    followups: ["Why should we hire Rahul?", "What has Rahul actually shipped?", "How does he work in a team?"]
  });
}
const $s = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi, Cs = /\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/, qs = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;
function Es(e, t, n, r, s, a) {
  if (!(/^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(t) || /\b(did|has) (he|rahul)\b/.test(t))) return null;
  const l = t.match(Cs)?.[0];
  if (l && qs.test(t) && !/stable diffusion/.test(l)) {
    const m = e.gap.get("pretraining"), g = ae(e, ti(e, ["llm_apis"]), "engineer", 1, 4);
    return A("false_premise", [
      { type: "p", text: `No. Nothing in the evidence supports that premise. ${l.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: "gaps", items: [{ id: m.id, name: m.name, statement: m.statement, closest: ["sssd"] }] },
      { type: "claims", title: "What the evidence does show", ids: N(g) }
    ], { followups: ["What models has Rahul fine-tuned?", "Show me his strongest RAG work.", "What is not demonstrated yet?"] });
  }
  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(t) && !/club/.test(t)) {
    const m = Fe(e, "leadership");
    if (m) return { ...Ge(e, m, a, { lead: "He hasn't managed a team of engineers yet. He has led people and led technical work end to end, which is the foundation for it:" }), intent: "false_premise" };
  }
  const p = /minute|scale|100x|10x/.test(t) ? [] : n.match($s) ?? [];
  if (p.length) {
    const m = p[0].replace(/\s/g, ""), g = m.replace(/^\$/, "").replace(/[%x×]$/i, ""), c = e.claims.filter((w) => D(w) && w.text.replace(/\s/g, "").includes(g)), y = e.claims.filter((w) => !D(w) && w.text.replace(/\s/g, "").includes(g));
    if (c.length) {
      const w = /patient records|patients|ehr/.test(t) && c.some((u) => /not clinical ehr records/i.test(u.text));
      return A("figure_check", [
        { type: "p", text: w ? `Not quite. ${m} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${m}:`, cites: N(c.slice(0, 1)) },
        { type: "claims", ids: N(c.slice(0, 3)) }
      ], { entities: Q(c.map((u) => u.entity)), followups: O(e, c[0].entity) });
    }
    if (y.length)
      return A("figure_check", [
        { type: "p", text: `That figure is not verified, so I won't state it as fact. ${y[0].note ?? ""}` },
        { type: "note", tone: "warn", text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' }
      ], { entities: Q(y.map((w) => w.entity)) });
    if (r.length || s.length)
      return A("figure_check", [{ type: "p", text: `${m} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities: r });
  }
  const d = s.map((m) => e.gap.get(m)).find((m) => m && !m.verify);
  if (d && /\b(did|does|has|have|is|was)\b/.test(t)) {
    const m = d.related.flatMap((y) => e.statableBySkill.get(y) ?? []), g = ae(e, m, "engineer", 1, 4), c = Fe(e, "learning");
    return A("unsupported_skill", se({
      lead: `Not yet. ${d.statement}`,
      points: Qe(e, g, 1),
      takeaway: c?.takeaway ? `How he would close it: ${c.takeaway.text.replace(/^For your team: /, "")}` : void 0
    }), { topic: "learning", followups: ["How fast does he learn new technology?", "What is not demonstrated yet?", "Show me his backend engineering experience."] });
  }
  return null;
}
function As(e, t) {
  const n = ut(e, t), r = n.counts, s = [
    { type: "p", text: `I found ${n.requirements.length} requirements. ${r.direct} have direct evidence, ${r.related} related evidence, ${r.verification} need verification, and ${r.missing} are not currently demonstrated.` },
    { type: "coverage", analysis: n }
  ];
  return n.notes.forEach((a) => s.push({ type: "note", tone: "warn", text: a })), A("jd", s, {
    actions: [{ kind: "mode", label: "Show this on the portfolio", target: "transform" }, { kind: "mode", label: "Technical brief for this role", target: "brief" }],
    followups: ["What is the strongest evidence for this role?", "Challenge this evidence", "What is not demonstrated yet?"]
  });
}
function Ai(e, t, n) {
  const r = Ce(e, t), s = r.counts, a = r.entities.slice(0, 3).map((l) => ee(e, l.id)), o = [
    { type: "p", text: `Evidence coverage for ${r.title}: ${s.direct} requirements with direct evidence, ${s.related} with related evidence, ${s.verification} needing verification, and ${s.missing} not currently demonstrated. The strongest evidence comes from ${si(a)}.` },
    { type: "coverage", analysis: r }
  ];
  return r.notes.forEach((l) => o.push({ type: "note", tone: "info", text: l })), A("role", o, {
    entities: r.entities.slice(0, 3).map((l) => l.id),
    actions: [
      { kind: "mode", label: "Show this on the portfolio", target: "transform", arg: t },
      { kind: "mode", label: "10-minute technical brief", target: "brief", arg: t },
      { kind: "mode", label: "Explore on the map", target: "map", arg: t }
    ],
    followups: [`Challenge the evidence for ${r.title}`, `What would an interviewer ask for ${r.title}?`, "What is not demonstrated yet?"]
  });
}
function Si(e, [t, n], r) {
  const s = e.entity.get(t), a = e.entity.get(n), o = (y, w) => ({ label: y, values: [w(t), w(n)] }), l = (y) => Q((e.statableByEntity.get(y) ?? []).flatMap((w) => w.tags)).filter((w) => !["python", "healthcare", "fintech", "product_judgment"].includes(w)).slice(0, 6).map((w) => yt(e, w)).join(", ") || "—", p = (y) => (e.statableByEntity.get(y) ?? []).find((w) => w.tags.some((u) => ["eval_design", "llm_eval", "regression_testing"].includes(u)) && w.kind !== "limitation")?.text ?? "—", d = (y) => {
    const w = (e.statableByEntity.get(y) ?? []).find((u) => u.metrics?.length);
    return w ? w.metrics.map((u) => `${u.label}: ${u.value}`).join(" · ") : "—";
  }, m = (y) => Se(e, y)[0]?.text.replace(/^Limits:\s*/, "") ?? "—", g = (y) => (e.statableByEntity.get(y) ?? []).some((w) => w.tags.includes("deployment")) ? "Yes" : "No public deployment", c = Q([t, n].flatMap((y) => (e.statableByEntity.get(y) ?? []).filter((w) => w.metrics?.length || w.kind === "limitation").slice(0, 3)));
  return A("compare", [
    { type: "p", text: `${s.short} vs ${a.short}, compared on the same evidence fields.` },
    { type: "compare", entities: [t, n], rows: [
      o("What it is", (y) => e.entity.get(y).tagline),
      o("When", (y) => e.entity.get(y).dates),
      o("Demonstrates", l),
      o("Evaluation evidence", p),
      o("Measured results", d),
      o("Deployed", g),
      o("Main limitation", m),
      o("Ownership", (y) => e.entity.get(y).ownership || "—")
    ] },
    { type: "claims", title: "Evidence used", ids: N(ae(e, c, r, 3, 6)) }
  ], { entities: [t, n], actions: [...We(e, t).slice(0, 1), ...We(e, n).slice(0, 1)], followups: [...O(e, t).slice(0, 2), ...O(e, n).slice(0, 2)] });
}
function Ii(e, t, n, r) {
  const s = /* @__PURE__ */ new Map();
  for (const c of ti(e, t)) {
    const y = s.get(c.entity) ?? { s: 0, claims: [] };
    y.s += (c.strength === "public_artifact" ? 1 : 0.7) + (c.code?.length ? 0.4 : 0) + (c.kind === "metric" ? 0.2 : 0), y.claims.push(c), s.set(c.entity, y);
  }
  const a = [...s.entries()].filter(([c]) => c !== "imw").sort((c, y) => y[1].s - c[1].s);
  if (!a.length) return Bt(e, t.map((c) => ({ id: c })), n, r);
  const [o, l] = a[0], p = e.entity.get(o), d = yt(e, t[0]), m = ae(e, l.claims, n, 5, 5), g = a[1] ? ` ${ee(e, a[1][0])} is next.` : "";
  return A("strongest", se({
    lead: `His strongest ${d} work is ${p.name}.${g}`,
    points: on(e, m),
    extra: e.archByEntity.has(o) ? [{ type: "xray", arch: e.archByEntity.get(o).id }] : []
  }), { entities: [o], actions: We(e, o), followups: O(e, o) });
}
function Bt(e, t, n, r) {
  const s = [], a = [], o = [], l = [], p = /* @__PURE__ */ new Set();
  for (const m of t.slice(0, 3)) {
    const g = le(e, m.id, { near: m.near });
    if (p.has(g.id)) continue;
    p.add(g.id);
    const c = g.entities.map((w) => ee(e, w)), y = !s.length;
    if (g.category === "direct") {
      const w = ae(e, g.claims.map((u) => e.claim.get(u)), n, 2, 5);
      s.push({ type: "p", lead: y, text: `Yes. He has used ${g.label} in ${si(c.slice(0, 4))}.`, cites: g.claims.slice(0, 2) }), s.push({ type: "points", items: Qe(e, w, 1) }), l.push(...N(w));
    } else if (g.category === "related") {
      s.push({ type: "p", lead: y, text: `Not directly, but he has closely related experience. ${g.statement ?? ""}`.trim(), cites: g.claims.slice(0, 1) });
      const w = g.claims.slice(0, 4).map((u) => e.claim.get(u)).filter(Boolean);
      s.push({ type: "points", items: Qe(e, w, 1) }), l.push(...N(w));
    } else g.category === "verification" ? s.push({ type: "p", lead: y, text: `${ie.verification}: ${g.statement ?? ""}` }) : (y && s.push({ type: "p", lead: y, text: `Not yet: ${g.label} isn't part of his work so far. Here is the closest experience, and how he tends to pick up new tools:` }), s.push({ type: "gaps", items: [{ id: g.id, name: g.label, statement: g.statement ?? "", closest: g.entities }] }));
    if (a.push(...g.entities), /where/.test(r)) for (const w of g.entities.slice(0, 3)) {
      const u = e.entity.get(w);
      u && o.push(ii(u));
    }
  }
  l.length && s.push({ type: "claims", title: "Sources", ids: Q(l), collapsed: !0 });
  const d = Q(a)[0];
  return A("skill", s, { entities: Q(a), actions: o.length ? o : d ? We(e, d) : [], followups: d ? O(e, d).slice(0, 3).concat(["What is not demonstrated yet?"]) : bt.slice(0, 4) });
}
function Ss(e, t, n, r) {
  const s = e.entity.get(t), a = e.statableByEntity.get(t) ?? [], o = e.archByEntity.get(t), l = e.failures.filter((w) => w.entity === t), p = e.decisions.filter((w) => w.entity === t), d = We(e, t);
  if (j(n, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && o)
    return A("architecture", [
      { type: "p", text: `${o.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: "xray", arch: o.id }
    ], { entities: [t], actions: d, followups: O(e, t, ["architecture"]) });
  if (j(n, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && p.length)
    return A("decisions", [{ type: "decisions", ids: p.map((w) => w.id) }], { entities: [t], actions: d, followups: O(e, t, ["why"]) });
  if (j(n, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const w = Se(e, t), u = [];
    return l.length && u.push({ type: "failures", ids: l.map((f) => f.id) }), w.length && u.push({ type: "claims", title: "Stated limitations", ids: N(w) }), u.length || u.push({ type: "p", text: `The evidence database records no specific failure case for ${s.short}.` }), A("failures", u, { entities: [t], actions: [...e.attacks.some((f) => f.entity === t) ? [{ kind: "mode", label: "Try to break it", target: "lab", arg: t }] : [], ...d], followups: O(e, t, ["failure"]) });
  }
  if (j(n, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const w = a.filter((v) => v.tags.some((k) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(k))), u = [{ type: "claims", ids: N(ae(e, w, "researcher", 7, 7)) }];
    t === "cliniq" && u.push({ type: "chart", chart: "cliniq" }), t === "voice" && u.push({ type: "chart", chart: "voice_quality" });
    const f = e.traces.find((v) => v.entity === t);
    return f && u.push({ type: "trace", id: f.id }), A("evaluation", u, { entities: [t], actions: [{ kind: "mode", label: "Open the proof lab", target: "lab", arg: t }, ...d], followups: O(e, t, ["evaluation"]) });
  }
  if (j(n, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const w = a.filter((u) => u.code?.length);
    return A("code", [
      { type: "p", text: `Code links are pinned to a specific commit, so line numbers do not drift.${s.repo ? "" : " This is employment work, so no source code is public."}` },
      { type: "claims", ids: N(ae(e, w, "engineer", 8, 8)) }
    ], { entities: [t], actions: d, followups: O(e, t, ["code"]) });
  }
  if (j(n, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const w = Se(e, t), u = [{ type: "p", text: `Questions an interviewer could reasonably press on for ${s.short}:` }];
    return s.questions.forEach((f) => u.push({ type: "p", text: `• ${f}` })), w.length && u.push({ type: "claims", title: "Limitations the evidence already states", ids: N(w) }), p.length && u.push({ type: "decisions", ids: p.slice(0, 2).map((f) => f.id) }), A("challenge", u, { entities: [t], actions: d, followups: O(e, t, ["challenge"]) });
  }
  if (j(n, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/))
    return A("personally", [
      { type: "p", text: s.ownership || "The portfolio does not break down individual contributions for this item." },
      { type: "claims", ids: N(ae(e, a, r, 4, 4)) }
    ], { entities: [t], actions: d, followups: O(e, t, ["personally"]) });
  if (j(n, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const w = a.filter((f) => f.tags.some((v) => ["rate_limiting", "caching", "deployment", "docker", "monitoring"].includes(v))), u = ["distributed_systems", "kubernetes"].map((f) => e.gap.get(f));
    return A("scale", [
      { type: "p", text: `What is implemented today for ${s.short}:` },
      w.length ? { type: "claims", ids: N(w.slice(0, 5)) } : { type: "p", text: "No scaling-related controls are recorded for this item." },
      { type: "gaps", items: u.map((f) => ({ id: f.id, name: f.name, statement: f.statement, closest: [] })) },
      { type: "note", tone: "info", text: "A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented." }
    ], { entities: [t], actions: d, followups: O(e, t, ["scale"]) });
  }
  if (n.length > 70) {
    const w = nn(e, n, { entities: [t], limit: 8 }).map((f) => f.claim).filter((f) => f.entity === t), u = Se(e, t).filter((f) => !w.includes(f));
    if (w.length)
      return A("focused", [
        { type: "p", text: `The evidence most relevant to this question about ${s.short}:`, cites: N(w.slice(0, 2)) },
        { type: "claims", ids: N(w.slice(0, 5)) },
        ...u.length ? [{ type: "claims", title: "Stated limitations", ids: N(u.slice(0, 2)) }] : []
      ], { entities: [t], actions: d, followups: O(e, t) });
  }
  const m = s.summaries[r] ?? s.tagline, g = ae(e, a, r, r === "recruiter" ? 4 : 5, r === "recruiter" ? 4 : 5), c = [];
  if (r === "engineer" && o && c.push({ type: "xray", arch: o.id }), r === "researcher") {
    const w = Se(e, t);
    w.length && c.push({ type: "claims", title: "Stated limitations", ids: N(w) });
  }
  r === "manager" && s.ownership && c.push({ type: "note", tone: "info", text: `Ownership: ${s.ownership}` });
  const y = [{ type: "entity", id: t }, ...se({ lead: m, leadCites: N(g.slice(0, 2)), points: on(e, g), extra: c })];
  return A("entity", y, { entities: [t], actions: d, followups: O(e, t) });
}
function Is(e, t, n = !1) {
  const s = n ? e.failures.map((a) => a.id) : {
    engineer: ["f.voice.bargein", "f.voice.artifacts", "f.cliniq.embedding"],
    recruiter: ["f.voice.bargein", "f.cliniq.embedding"],
    manager: ["f.voice.artifacts", "f.voice.incomplete", "f.voice.bargein"],
    founder: ["f.cliniq.revenue", "f.cliniq.embedding", "f.voice.bargein"],
    researcher: ["f.cliniq.embedding", "f.qml.speedup", "f.sssd.debug"]
  }[t].filter((a) => e.failures.some((o) => o.id === a));
  return A("failures", [
    { type: "p", text: "Failures found and fixed, each with how it was detected and what now prevents it:" },
    { type: "failures", ids: s }
  ], {
    entities: Q(s.map((a) => e.failures.find((o) => o.id === a).entity)),
    actions: [{ kind: "mode", label: "Open the proof lab", target: "lab" }],
    followups: ["Show me the barge-in fix in code", "Show more failure cases", "How does he evaluate AI systems?"]
  });
}
function Ms(e, t) {
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
  ].filter(([s]) => D(e.claim.get(s))).slice(0, t === "recruiter" ? 5 : 9);
  return A("beyond_wrappers", se({
    lead: "A lot. In much of his work the language model is one component, or absent entirely:",
    points: r.map(([s, a]) => ({ label: a, text: e.claim.get(s).text, cites: [s] })),
    takeaway: "For your team: he knows when not to use an LLM, and how to engineer the parts around one, which is what keeps AI systems reliable."
  }), { entities: Q(r.map(([s]) => e.claim.get(s).entity)), actions: [{ kind: "mode", label: "X-Ray the Drug Interaction Agent", target: "xray", arg: "dia" }], followups: ["Why keep label review free of an LLM?", "Show me the barge-in fix in code", "Show the architecture of ClinIQ"] });
}
function js(e, t) {
  return A("shipped", se({
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
function Ts(e) {
  return A("gaps", se({
    lead: "Honest answer: his gaps are large-scale infrastructure and formal people management, which is typical at his career stage, and each one sits next to experience he can build on:",
    points: [],
    extra: [{ type: "gaps", items: ["kubernetes", "iac", "distributed_inference", "pretraining", "orchestration", "human_annotation", "online_experiments", "customer_deployments"].map((n) => e.gap.get(n)).map((n) => ({ id: n.id, name: n.name, statement: n.statement, closest: Q(n.related.flatMap((r) => (e.statableBySkill.get(r) ?? []).map((s) => s.entity))).slice(0, 3) })) }],
    takeaway: "How he closes gaps: by building. Realtime voice, diffusion models and quantum ML were each new to him, and each became a working, tested system.",
    takeawayCites: ["voice.harness", "sssd.encoder", "qml.benchmark"]
  }), { topic: "learning", followups: ["How fast does he learn new technology?", "Evaluate Rahul for an MLOps Engineer role", "Why should we hire Rahul?"] });
}
function Rs(e) {
  return A("level", se({
    lead: "Early-career, with real production experience: he has worked on production AI at TIFIN and now at Citizen Health, and holds an M.S. in Computer Science.",
    points: [
      { label: "Now · Citizen Health", text: "AI Engineer building source-grounded retrieval and summarization for a patient-advocacy product.", cites: ["citizen.role"] },
      { label: "Production AI · TIFIN", text: "AI/ML Engineer Intern on an AI portfolio copilot, with ownership that included deploying and monitoring models on AWS SageMaker and GCP Vertex AI.", cites: ["tifin.role", "tifin.deploy"] },
      { label: "Agents · Athena", text: "Prototyped task-planning, tool-use and prompt-orchestration components for an executive-assistant workflow.", cites: ["athena.role"] },
      { label: "Education", text: "M.S. in Computer Science with an AI emphasis and a B.S. in Computer Science, both from UMKC.", cites: ["edu.ms", "edu.bs"] }
    ],
    takeaway: "He fits AI / ML engineer roles at the early-career level, and the work itself (production deployment, evaluation and end-to-end systems) is what those roles ask for. For senior roles, the difference is years of ownership rather than the kind of work."
  }), { followups: ["What has Rahul actually shipped?", "Why should we hire Rahul?", "Evaluate Rahul for a Machine Learning Engineer I role"] });
}
const ln = [
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
function Ze(e) {
  return ln.find(([t]) => t.test(e))?.[1] ?? [];
}
function Ls(e, t, n, r) {
  const [, , s, a] = ln.find(([d]) => d.test(t)), o = ae(e, ti(e, n), r, r === "recruiter" ? 2 : 3, r === "recruiter" ? 6 : 9), l = Q(o.map((d) => d.entity)), p = [];
  return n.includes("eval_design") && r !== "recruiter" && p.push({ type: "chart", chart: "cliniq" }), n.includes("rag") && l.includes("dia") && r === "engineer" && p.push({ type: "xray", arch: "arch.dia" }), n.includes("voice_ai") && p.push({ type: "trace", id: "t.voice.emergency" }), A("topic", se({ lead: s, points: Qe(e, o, r === "recruiter" ? 1 : 2), extra: p, takeaway: a }), {
    entities: l,
    actions: l.slice(0, 3).map((d) => ii(e.entity.get(d))),
    followups: l[0] ? O(e, l[0]).slice(0, 3).concat(l[1] ? [`Compare ${ee(e, l[0])} and ${ee(e, l[1])}`] : []) : bt.slice(0, 4)
  });
}
function Ps(e, t, n, r) {
  const s = t.id === "learning" ? n[0] : void 0;
  if (!s) return Ge(e, t, r);
  const a = le(e, s), o = si(a.entities.slice(0, 3).map((p) => ee(e, p))), l = a.category === "direct" ? `He already has direct experience with ${a.label}, in ${o}.` : a.category === "related" ? `He has closely related experience: ${a.statement ?? ""}`.trim() : `${a.label} isn't part of his work yet. ${a.statement ?? ""}`.trim();
  return Ge(e, t, r, { lead: `${l} On picking it up: the clearest evidence is how many different kinds of systems he has built from scratch, each in a new stack or domain, and each one working, tested and documented.` });
}
function Fs(e, t, n) {
  const r = nn(e, t, { limit: 8 });
  if (!r.length || r[0].score < 2)
    return A("no_evidence", [
      { type: "p", lead: !0, text: "I don't have evidence that answers that directly. I can speak to his projects, experience, technical skills, and how he works with people. For example:" }
    ], { followups: ["Why should we hire Rahul?", "How does he work in a team?", "What has Rahul actually shipped?", "How fast does he learn new technology?"] });
  const s = ae(e, r.map((o) => o.claim), n, 2, 6), a = s[0].entity;
  return A(
    "retrieval",
    se({ lead: "Here is what his work shows on that:", points: Qe(e, s) }),
    { entities: Q(s.map((o) => o.entity)), actions: We(e, a), followups: O(e, a).slice(0, 3), basis: { retrieved: r.map((o) => o.claim.id) } }
  );
}
function Ws(e, t) {
  const n = [
    { label: "Current role · Citizen Health", text: "Builds source-grounded retrieval and summarization for a patient-advocacy product, with each statement linked to its medical record and every release gated by evaluation.", cites: ["citizen.role", "citizen.source_linked", "citizen.release_eval"] },
    { label: "Production AI · TIFIN", text: "LangGraph advisor workflows with tool calling and structured outputs. The AI capabilities reached 40,000+ users, models improved recommendation accuracy by 19% and F1 by 24%, and a 65% reduction in manual effort was reported.", cites: ["tifin.agents", "tifin.structured", "tifin.reach", "tifin.gains", "tifin.effort"] },
    { label: "Public systems you can try", text: "A deployed Drug Interaction Agent (React, FastAPI, Docker) and the ClinIQ dashboard, both live on Hugging Face Spaces.", cites: ["dia.shipped", "cliniq.delivery"] },
    { label: "Evaluation discipline", text: "A voice-agent QA harness that places real calls, with an LLM judge, hand review and a fail-closed release gate.", cites: ["voice.harness", "voice.judge", "voice.gate"] },
    { label: "Research depth", text: "Kinematic-conditioned diffusion for surgical video, and a published classical-versus-quantum ML imaging study.", cites: ["sssd.encoder", "qml.xai"] },
    { label: "Education", text: "M.S. in Computer Science with an AI emphasis (May 2026).", cites: ["edu.ms"] }
  ];
  return A("overview", se({
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
function Mi(e, t) {
  const n = Ce(e, t), r = n.entities.slice(0, 3).map((o) => e.entity.get(o.id)).filter(Boolean), s = [{ type: "p", text: `Questions worth asking for ${n.title}, grounded in the evidence an interviewer would see:` }];
  for (const o of r) o.questions.slice(0, 2).forEach((l) => s.push({ type: "p", text: `• ${o.short}: ${l}` }));
  return n.requirements.filter((o) => o.category === "missing").slice(0, 2).forEach((o) => s.push({ type: "p", text: `• Gap: ${o.label}. How would you close it in your first months?` })), A("role_questions", s, { entities: r.map((o) => o.id), actions: [{ kind: "mode", label: "10-minute technical brief", target: "brief", arg: t }], followups: [`Challenge the evidence for ${n.title}`] });
}
function ji(e, t) {
  const n = Ce(e, t), r = n.entities.slice(0, 3).map((l) => l.id), s = r.flatMap((l) => Se(e, l)).slice(0, 4), a = n.requirements.filter((l) => l.category === "direct" && l.strength === "self_reported").map((l) => l.label), o = [
    { type: "p", text: `The weakest points in the evidence for ${n.title}:` },
    { type: "gaps", items: n.requirements.filter((l) => l.category === "missing" || l.category === "verification").map((l) => ({ id: l.id, name: l.label, statement: l.statement ?? "", closest: l.entities.slice(0, 3) })) }
  ];
  return a.length && o.push({ type: "note", tone: "warn", text: `Supported only by self-reported employment experience (no public artifact): ${a.join(", ")}.` }), s.length && o.push({ type: "claims", title: "Limitations stated in the strongest projects", ids: N(s) }), n.notes.forEach((l) => o.push({ type: "note", tone: "info", text: l })), A("challenge", o, { entities: r, followups: [`What would an interviewer ask for ${n.title}?`, "What failure did he find and fix?"] });
}
function si(e) {
  return e.length <= 1 ? e[0] ?? "the portfolio" : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
const Ds = "https://astra6-interview-my-work.hf.space";
function cn() {
  return (document.querySelector('meta[name="imw-api"]')?.content || Ds).replace(/\/$/, "");
}
async function pt(e, t) {
  const n = new AbortController(), r = setTimeout(() => n.abort(), t.timeout);
  try {
    const s = await fetch(cn() + e, { ...t, signal: n.signal, headers: { "Content-Type": "application/json", ...t.headers || {} } });
    if (!s.ok) throw Object.assign(new Error(`HTTP ${s.status}`), { status: s.status });
    return await s.json();
  } finally {
    clearTimeout(r);
  }
}
async function Hs(e) {
  e("checking");
  const t = (n) => e(n?.ai_enabled ? "ready" : "offline");
  try {
    t(await pt("/api/health", { method: "GET", timeout: 4e3 }));
    return;
  } catch {
  }
  e("waking");
  try {
    t(await pt("/api/health", { method: "GET", timeout: 45e3 }));
  } catch {
    e("offline");
  }
}
async function Ns(e, t, n, r, s, a) {
  const o = await pt("/api/ask", {
    method: "POST",
    timeout: 3e4,
    body: JSON.stringify({ question: t, persona: n, history: r.slice(-3), role: s ?? null, topic: a ?? null })
  }), l = o.sentences.flatMap((c) => c.cites), p = [...o.sentences.map((c) => `${c.label ?? ""} ${c.text}`), o.hypothetical ?? ""].join(" ");
  if (!o.sentences.length || l.some((c) => !D(e.claim.get(c))) || rn.test(p))
    throw new Error("model answer failed client validation");
  const d = [];
  if (o.sentences.some((c) => c.kind === "point" && c.label)) {
    const c = o.sentences.filter((u) => u.kind === "lead"), y = o.sentences.filter((u) => u.kind === "point"), w = o.sentences.filter((u) => u.kind === "takeaway");
    c.length && d.push({ type: "p", lead: !0, text: c.map((u) => u.text.trim()).join(" "), cites: [...new Set(c.flatMap((u) => u.cites))] }), d.push({ type: "points", items: y.map((u) => ({ label: (u.label || "").trim() || "Evidence", text: u.text.trim(), cites: u.cites })) }), w.length && d.push({ type: "takeaway", text: w.map((u) => u.text.trim()).join(" "), cites: [...new Set(w.flatMap((u) => u.cites))] });
  } else {
    let c = { text: "", cites: [] };
    for (const y of o.sentences)
      c.text += (c.text ? " " : "") + y.text.trim(), c.cites.push(...y.cites), c.text.length > 320 && (d.push({ type: "p", text: c.text, cites: [...new Set(c.cites)], lead: !d.length }), c = { text: "", cites: [] });
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
async function dn(e) {
  const t = await pt("/api/jd", { method: "POST", timeout: 25e3, body: JSON.stringify({ text: e.slice(0, 12e3) }) });
  return Array.isArray(t.requirements) ? t.requirements.filter((n) => typeof n == "string").slice(0, 30) : [];
}
const hn = Dn(null), M = () => On(hn), qe = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function G(e, t = {}) {
  try {
    window.dispatchEvent(new CustomEvent("imw:event", { detail: { name: e, ...t } }));
  } catch {
  }
}
let Le = null;
const Ot = [], mt = /* @__PURE__ */ new Set(), V = (e, t, n) => {
  const r = document.createElement(e);
  return r.className = t, n && (r.textContent = n), r;
};
function Bs(e, t, n) {
  zt();
  const r = new Map(t.entities.map((v) => [v.id, v.score])), s = (v) => t.requirements.filter((k) => (k.category === "direct" || k.category === "related") && k.entities.includes(v)), a = document.getElementById("work"), o = a ? [...a.querySelectorAll(":scope > article.project")] : [];
  if (o.length && a) {
    Le = { parent: a, order: [...a.children], numbers: o.map((h) => [h.querySelector(".project-number"), h.querySelector(".project-number")?.textContent ?? ""]) };
    const v = (h) => e.entities.find((x) => x.anchor === `#${h.id}`)?.id ?? "", k = new Map(o.map((h) => [h, h.getBoundingClientRect()])), b = [...o].sort((h, x) => (r.get(v(x)) ?? 0) - (r.get(v(h)) ?? 0)), _ = a.querySelector(":scope > .research");
    if (b.forEach((h, x) => {
      a.insertBefore(h, _);
      const C = h.querySelector(".project-number");
      C && (C.textContent = `${String(x + 1).padStart(2, "0")} —`);
    }), !qe())
      for (const h of b) {
        const x = k.get(h), C = h.getBoundingClientRect(), q = x.top - C.top;
        q && h.animate([{ transform: `translateY(${q}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
  }
  for (const v of e.entities) {
    if (v.id === "imw" || v.kind === "education") continue;
    const k = document.querySelector(v.anchor);
    if (!k || k.id === "work" || k.id === "experience") continue;
    const b = s(v.id);
    if (k.classList.add(b.length ? "imw-lens-hit" : "imw-lens-dim"), mt.add(k), b.length) {
      const _ = V("div", "imw-lens-tag");
      _.append(V("span", "imw-lens-tag-label", `✦ Evidence for ${t.title}`)), b.slice(0, 6).forEach((h) => _.append(V("span", `imw-lens-chip is-${h.category}`, h.label))), k.prepend(_), Ot.push(_);
    }
  }
  const l = t.requirements.filter((v) => v.category === "direct").flatMap((v) => [v.label, ...e.skill.get(v.id)?.aliases ?? []]).map((v) => v.toLowerCase());
  document.querySelectorAll("#skills .skill").forEach((v) => {
    const k = v.textContent?.toLowerCase() ?? "";
    v.classList.add(l.some((b) => b.length > 2 && k.includes(b)) ? "imw-lens-hit" : "imw-lens-dim"), mt.add(v);
  });
  const p = V("div", "imw-lens-bar");
  p.setAttribute("role", "region"), p.setAttribute("aria-label", "Role lens");
  const d = V("div", "imw-lens-head");
  d.append(V("span", "imw-lens-mark", "✦"), V("strong", "", `Viewing as: ${t.title}`));
  const m = V("div", "imw-lens-counts");
  ["direct", "related", "verification", "missing"].forEach((v) => m.append(V("span", `is-${v}`, `${t.counts[v]} ${ie[v].toLowerCase()}`)));
  const g = t.requirements.filter((v) => v.category === "missing").map((v) => v.label), c = V("div", "imw-lens-missing", g.length ? `Not demonstrated: ${g.slice(0, 4).join(", ")}${g.length > 4 ? "…" : ""}` : "Every listed requirement has at least related evidence."), y = V("div", "imw-lens-actions"), w = V("button", "imw-lens-btn", "Open analysis"), u = V("button", "imw-lens-btn is-primary", "Restore portfolio");
  w.onclick = () => n.reopen(), u.onclick = () => {
    zt(), n.restore();
  }, y.append(w, u);
  const f = V("div", "imw-lens-mid");
  f.append(m, c), p.append(d, f, y), document.body.append(p), Ot.push(p), document.documentElement.classList.add("imw-lens"), requestAnimationFrame(() => (a ?? document.body).scrollIntoView({ behavior: qe() ? "auto" : "smooth", block: "start" })), u.focus({ preventScroll: !0 });
}
function zt() {
  Ot.splice(0).forEach((e) => e.remove()), mt.forEach((e) => e.classList.remove("imw-lens-hit", "imw-lens-dim")), mt.clear(), Le && (Le.order.forEach((e) => Le.parent.appendChild(e)), Le.numbers.forEach(([e, t]) => {
    e && (e.textContent = t);
  }), Le = null), document.documentElement.classList.remove("imw-lens");
}
let be = null;
function Os(e, t) {
  const n = document.querySelector(e);
  if (!n) {
    t();
    return;
  }
  n.scrollIntoView({ behavior: qe() ? "auto" : "smooth", block: "start" }), n.classList.add("imw-flash"), setTimeout(() => n.classList.remove("imw-flash"), 2400), n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus({ preventScroll: !0 }), be?.remove(), be = V("button", "imw-return", "✦ Back to Interview My Work"), be.onclick = () => {
    be?.remove(), be = null, t();
  }, document.body.append(be), setTimeout(() => {
    be?.remove(), be = null;
  }, 2e4);
}
function un(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "Verified · public artifact" : "Verified · self-reported" : { verification_required: "Verification required", unsupported: "Unsupported", deprecated: "Withdrawn" }[e.status] ?? e.status;
}
function ft(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "st-artifact" : "st-self" : e.status === "verification_required" ? "st-pending" : "st-no";
}
const Pe = ({ cls: e, label: t }) => /* @__PURE__ */ i("i", { class: `imw-dot ${e}`, "aria-hidden": t ? void 0 : "true", "aria-label": t });
function De({ refs: e, max: t = 4 }) {
  return e?.length ? /* @__PURE__ */ i("ul", { class: "imw-code", children: e.slice(0, t).map((n) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("a", { href: n.url, target: "_blank", rel: "noopener", children: [
    /* @__PURE__ */ i("span", { class: "imw-code-label", children: n.label }),
    /* @__PURE__ */ i("span", { class: "imw-code-path", children: [
      n.path,
      n.lines ? `#L${n.lines[0]}–${n.lines[1]}` : ""
    ] })
  ] }) }, n.url)) }) : null;
}
function zs({ id: e, compact: t }) {
  const { kb: n, setInspect: r, inspect: s } = M(), a = n.claim.get(e);
  if (!a) return null;
  const o = n.entity.get(a.entity), l = s?.kind === "claim" && s.id === e;
  return /* @__PURE__ */ i("li", { class: `imw-claim${l ? " is-on" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-claim-btn", onClick: () => r({ kind: "claim", id: e }), "aria-label": `View evidence: ${a.text}`, children: [
      /* @__PURE__ */ i(Pe, { cls: ft(a) }),
      /* @__PURE__ */ i("span", { class: "imw-claim-text", children: a.text })
    ] }),
    !t && /* @__PURE__ */ i("div", { class: "imw-claim-meta", children: [
      /* @__PURE__ */ i("span", { children: o?.short }),
      /* @__PURE__ */ i("span", { class: `imw-st ${ft(a)}`, children: un(a) }),
      a.code?.length ? /* @__PURE__ */ i("a", { href: a.code[0].url, target: "_blank", rel: "noopener", class: "imw-mini-link", children: "Code ↗" }) : null,
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r({ kind: "claim", id: e }), children: "Evidence" })
    ] })
  ] });
}
function ne({ ids: e, title: t, compact: n }) {
  return e.length ? /* @__PURE__ */ i("div", { class: "imw-claims", children: [
    t && /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: t }),
    /* @__PURE__ */ i("ul", { children: e.map((r) => /* @__PURE__ */ i(zs, { id: r, compact: n }, r)) })
  ] }) : null;
}
function ot({ a: e }) {
  const { go: t, jump: n, ask: r, toggleLens: s, coverage: a, kb: o } = M();
  if (e.kind === "url") {
    const p = e.target.startsWith("mailto:") || e.target.includes("linkedin");
    return /* @__PURE__ */ i("a", { class: "imw-btn", href: e.target, target: e.target.startsWith("mailto:") ? void 0 : "_blank", rel: "noopener", onClick: () => p && G("contact_clicked_from_ai"), children: [
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
const Ee = { direct: "cat-direct", related: "cat-related", verification: "cat-pending", missing: "cat-missing" };
function $e({ children: e }) {
  return /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: e });
}
function Us({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.entity.get(e);
  return r ? /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n({ kind: "entity", id: e }), children: r.short }) : null;
}
const et = ["direct", "related", "verification", "missing"], Vs = { direct: "direct", related: "related", verification: "to verify", missing: "not shown" };
function _t({ counts: e, compact: t }) {
  const n = et.reduce((r, s) => r + e[s], 0) || 1;
  return /* @__PURE__ */ i("div", { class: `imw-covbar${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-covbar-track", role: "img", "aria-label": et.map((r) => `${e[r]} ${ie[r]}`).join(", "), children: et.filter((r) => e[r]).map((r) => /* @__PURE__ */ i("span", { class: `imw-covbar-seg ${Ee[r]}`, style: { flexGrow: e[r] / n }, title: `${e[r]} · ${ie[r]}` }, r)) }),
    /* @__PURE__ */ i("ul", { class: "imw-covbar-legend", children: et.map((r) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${Ee[r]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("b", { children: e[r] }),
      " ",
      t ? Vs[r] : ie[r]
    ] }, r)) })
  ] });
}
function pn({ analysis: e, max: t = 16 }) {
  const { kb: n, setInspect: r } = M(), [s, a] = E(null), o = e.requirements.slice(0, t), l = e.entities.slice(0, 7).map((b) => b.id), p = 26, d = 18, m = 640, g = d * 2 + Math.max(o.length, l.length) * p, c = (b) => d + (b + 0.5) * p * (Math.max(o.length, l.length) / Math.max(l.length, 1)), y = (b) => d + (b + 0.5) * p, w = 232, u = 408, f = o.flatMap(
    (b, _) => b.category === "direct" || b.category === "related" ? b.entities.filter((h) => l.includes(h)).slice(0, 3).map((h) => ({ r: b.id, e: h, cat: b.category, y1: y(_), y2: c(l.indexOf(h)) })) : []
  ), v = (b, _) => !s || s === b || s === _, k = !qe();
  return /* @__PURE__ */ i("figure", { class: "imw-map", children: [
    /* @__PURE__ */ i("svg", { viewBox: `0 0 ${m} ${g}`, role: "group", "aria-label": "Requirement to evidence map", class: k ? "is-anim" : "", children: [
      f.map((b, _) => /* @__PURE__ */ i(
        "path",
        {
          d: `M${w},${b.y1} C${w + 90},${b.y1} ${u - 90},${b.y2} ${u},${b.y2}`,
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
          onKeyDown: (h) => (h.key === "Enter" || h.key === " ") && (h.preventDefault(), r({ kind: "req", req: b })),
          children: [
            /* @__PURE__ */ i("rect", { x: 0, y: y(_) - p / 2, width: w + 6, height: p, class: "imw-hit" }),
            /* @__PURE__ */ i("text", { x: w - 12, y: y(_) + 4, "text-anchor": "end", children: Gs(b.label, 30) }),
            /* @__PURE__ */ i("circle", { cx: w, cy: y(_), r: 4.5 })
          ]
        },
        b.id
      )),
      l.map((b, _) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-ent${s && s !== b && !f.some((h) => h.e === b && h.r === s) ? " is-dim" : ""}`,
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
            /* @__PURE__ */ i("rect", { x: u - 6, y: c(_) - p / 2, width: m - u + 6, height: p, class: "imw-hit" }),
            /* @__PURE__ */ i("circle", { cx: u, cy: c(_), r: 5.5 }),
            /* @__PURE__ */ i("text", { x: u + 14, y: c(_) + 4, children: n.entity.get(b)?.short })
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
const Gs = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e, Ti = [
  { key: "precision", label: "Precision", cls: "viz-1" },
  { key: "recall", label: "Recall", cls: "viz-2" },
  { key: "f1", label: "F1", cls: "viz-3" }
];
function mn() {
  const { kb: e } = M(), t = e.datasets.cliniq_confusion, [n, r] = E(null), [s, a] = E(!1), o = he(() => t.methods.map((f) => {
    const v = f.tp / (f.tp + f.fp), k = f.tp / (f.tp + f.fn);
    return { ...f, precision: v, recall: k, f1: 2 * v * k / (v + k) };
  }), [t]), l = 560, p = 230, d = 36, m = 30, g = 12, c = (l - d - 12) / o.length, y = 22, w = 2, u = (f) => g + (1 - f) * (p - g - m);
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
      /* @__PURE__ */ i("tbody", { children: o.map((f) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: f.label }),
        /* @__PURE__ */ i("td", { children: f.precision.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: f.recall.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: f.f1.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: f.tp }),
        /* @__PURE__ */ i("td", { children: f.fp }),
        /* @__PURE__ */ i("td", { children: f.fn }),
        /* @__PURE__ */ i("td", { children: f.tn })
      ] }, f.id)) })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => r(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${l} ${p}`, role: "img", "aria-label": "Precision, recall and F1 for rules, embedding and LLM plus RAG detectors", children: [
        [0, 0.25, 0.5, 0.75, 1].map((f) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: d, x2: l - 8, y1: u(f), y2: u(f) }),
          /* @__PURE__ */ i("text", { x: d - 6, y: u(f) + 4, "text-anchor": "end", children: f.toFixed(2) })
        ] }, f)),
        o.map((f, v) => {
          const k = d + v * c + (c - (y * 3 + w * 2)) / 2;
          return /* @__PURE__ */ i("g", { children: [
            Ti.map((b, _) => {
              const h = f[b.key], x = k + _ * (y + w);
              return /* @__PURE__ */ i(
                "path",
                {
                  class: `imw-bar ${b.cls}`,
                  d: Qs(x, u(h), y, u(0) - u(h)),
                  onMouseEnter: () => r({ x: (x + y / 2) / l, y: u(h) / p, text: `${f.label} · ${b.label} ${h.toFixed(3)}` })
                },
                b.key
              );
            }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: d + v * c + c / 2, y: p - 10, "text-anchor": "middle", children: f.label })
          ] }, f.id);
        })
      ] }),
      n && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: `${n.x * 100}%`, top: `${n.y * 100}%` }, children: n.text })
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: Ti.map((f) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-swatch ${f.cls}`, "aria-hidden": "true" }),
      f.label
    ] }, f.key)) }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. ",
      t.caveat
    ] })
  ] });
}
function Qs(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return r <= 0 ? "" : `M${e},${t + r} V${t + s} Q${e},${t} ${e + s},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r} Z`;
}
function ri() {
  const { kb: e } = M(), t = e.datasets.voice_quality, n = [...t.rows].sort((c, y) => y[3] - c[3]), [r, s] = E(null), a = 560, o = 20, l = 150, p = 40, d = n.length * o + 24, m = (c) => l + c / 60 * (a - l - p), g = n.reduce((c, y) => c + y[3], 0) / n.length;
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: /* @__PURE__ */ i("strong", { children: "Mid-call silence per recorded call (%)" }) }),
    /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => s(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${a} ${d}`, role: "img", "aria-label": `Mid-call silence per call; average ${g.toFixed(1)} percent`, children: [
        [0, 20, 40, 60].map((c) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: m(c), x2: m(c), y1: 0, y2: d - 18 }),
          /* @__PURE__ */ i("text", { x: m(c), y: d - 4, "text-anchor": "middle", children: c })
        ] }, c)),
        n.map((c, y) => {
          const w = y * o + 3;
          return /* @__PURE__ */ i("g", { onMouseEnter: () => s({ y: (w + o / 2) / d, text: `${c[0]} · silence ${c[3]}% · talk-over ${c[2]}% · longest gap ${c[4]}s` }), children: [
            /* @__PURE__ */ i("rect", { class: "imw-hit", x: 0, y: w - 2, width: a, height: o }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: l - 8, y: w + 11, "text-anchor": "end", children: c[0].replace(/_/g, " ") }),
            /* @__PURE__ */ i("path", { class: "imw-bar viz-1", d: Ks(l, w + 2, m(c[3]) - l, o - 8) })
          ] }, c[0]);
        }),
        /* @__PURE__ */ i("line", { class: "imw-ref", x1: m(g), x2: m(g), y1: 0, y2: d - 18 }),
        /* @__PURE__ */ i("text", { class: "imw-ref-label", x: m(g) + 4, y: 10, children: [
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
function Ks(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return n <= 0 ? "" : `M${e},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r - s} Q${e + n},${t + r} ${e + n - s},${t + r} H${e} Z`;
}
const jt = 198, tt = 96, Oe = 174, _e = 56, Te = 28, Ri = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e;
function fn({ arch: e, selected: t, onSelect: n, scan: r = !0 }) {
  const s = ye(null), [a, o] = E(!1), [l, p] = E(!1);
  Bn(() => {
    const u = s.current;
    if (!u) return;
    const f = new ResizeObserver(([v]) => o(v.contentRect.width < 560));
    return f.observe(u), () => f.disconnect();
  }, []), z(() => {
    if (!r || qe()) return;
    p(!0);
    const u = setTimeout(() => p(!1), 1300);
    return () => clearTimeout(u);
  }, [e.id, r]);
  const d = Math.max(...e.nodes.map((u) => u.col)) + 1, m = Math.max(...e.nodes.map((u) => u.row)) + 1, g = Te * 2 + d * jt - (jt - Oe), c = Te * 2 + m * tt - (tt - _e) + (e.lanes.length ? 14 : 0), y = (u) => {
    const f = e.nodes.find((v) => v.id === u);
    return { x: Te + f.col * jt, y: Te + (e.lanes.length ? 14 : 0) + f.row * tt };
  }, w = (u, f) => {
    (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n(f));
  };
  if (a) {
    const u = new Map(e.nodes.map((b) => [b.id, 0]));
    e.edges.forEach(([, b]) => u.set(b, (u.get(b) ?? 0) + 1));
    const f = (b, _) => b.col - _.col || b.row - _.row, v = e.nodes.filter((b) => !u.get(b.id)).sort(f), k = [];
    for (; v.length; ) {
      const b = v.shift();
      k.push(b);
      const _ = e.edges.filter(([h]) => h === b.id).map(([, h]) => h).filter((h) => (u.set(h, u.get(h) - 1), u.get(h) === 0)).map((h) => e.nodes.find((x) => x.id === h)).sort(f);
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
    e.lanes.map((u) => /* @__PURE__ */ i("text", { class: "imw-lane", x: Te, y: Te + u.row * tt + 6, children: u.label.toUpperCase() }, u.row)),
    e.edges.map(([u, f]) => {
      const v = y(u), k = y(f);
      let b;
      if (k.x > v.x) {
        const h = v.x + Oe, x = v.y + _e / 2, C = k.x - 4, q = k.y + _e / 2, S = (h + C) / 2;
        b = `M${h},${x} C${S},${x} ${S},${q} ${C},${q}`;
      } else if (k.x < v.x) {
        const h = v.x, x = v.y + _e / 2, C = k.x + Oe + 4, q = k.y + _e / 2, S = (h + C) / 2;
        b = `M${h},${x} C${S},${x} ${S},${q} ${C},${q}`;
      } else {
        const h = k.y > v.y, x = v.x + Oe / 2, C = h ? v.y + _e : v.y, q = h ? k.y - 4 : k.y + _e + 4;
        b = `M${x},${C} L${x},${q}`;
      }
      return /* @__PURE__ */ i("path", { d: b, class: `imw-edge${t === u || t === f ? " is-on" : ""}`, "marker-end": `url(#ah-${e.id})` }, u + f);
    }),
    e.nodes.map((u) => {
      const f = y(u.id);
      return /* @__PURE__ */ i(
        "g",
        {
          class: `imw-node${t === u.id ? " is-on" : ""}`,
          transform: `translate(${f.x},${f.y})`,
          tabIndex: 0,
          role: "button",
          "aria-pressed": t === u.id,
          "aria-label": `${u.label}. ${u.sub}`,
          style: { animationDelay: `${u.col * 120}ms` },
          onClick: () => n(u.id),
          onKeyDown: (v) => w(v, u.id),
          children: [
            /* @__PURE__ */ i("rect", { width: Oe, height: _e, rx: 4 }),
            /* @__PURE__ */ i("text", { x: 12, y: 24, class: "imw-node-label", children: Ri(u.label, 22) }),
            /* @__PURE__ */ i("text", { x: 12, y: 42, class: "imw-node-sub", children: Ri(u.sub, 25) })
          ]
        },
        u.id
      );
    }),
    l && /* @__PURE__ */ i("rect", { class: "imw-scan", x: 0, y: 0, width: 3, height: c })
  ] }) });
}
const gn = (e) => {
  const t = new URL(["..", "..", "evidence", "dist", e].join("/"), import.meta.url), n = new URL(import.meta.url).searchParams.get("v");
  return n && t.searchParams.set("v", n), t.href;
};
function wn({ id: e, compact: t }) {
  const { kb: n, go: r } = M(), s = n.traces.find((g) => g.id === e), [a, o] = E(t ? 0 : 1 / 0), l = ye();
  if (z(() => () => clearInterval(l.current), []), !s) return null;
  if (s.dataset === "dia_regression") return /* @__PURE__ */ i(Js, {});
  const p = t ? s.steps.slice(0, 4) : s.steps, d = () => {
    if (G("replay_played", { trace: s.id }), qe()) {
      o(1 / 0);
      return;
    }
    o(0), clearInterval(l.current);
    let g = 0;
    l.current = window.setInterval(() => {
      g++, o(g), g >= p.length && clearInterval(l.current);
    }, 520);
  }, m = a === 1 / 0 ? p.length : a;
  return /* @__PURE__ */ i("figure", { class: `imw-trace${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: s.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: d, "aria-label": `Replay ${s.title}`, children: "▶ Replay" }),
        t && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("lab", s.id), children: "Open in proof lab →" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: s.summary }),
    /* @__PURE__ */ i("ol", { class: "imw-steps", "aria-live": "polite", children: p.map((g, c) => /* @__PURE__ */ i("li", { class: `imw-step is-${g.kind}${c < m ? " is-shown" : ""}`, "aria-hidden": c >= m, children: [
      /* @__PURE__ */ i("span", { class: "imw-step-kind", children: g.label }),
      g.quote ? /* @__PURE__ */ i("q", { children: g.quote }) : /* @__PURE__ */ i("span", { children: g.body }),
      g.status && /* @__PURE__ */ i("span", { class: `imw-verdict is-${g.status}`, children: g.status === "pass" ? "✓ PASS" : g.status === "fail" ? "✕ FAIL" : "! REVIEW" })
    ] }, c)) }),
    t && s.steps.length > p.length && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      s.steps.length - p.length,
      " more steps in the full replay."
    ] })
  ] });
}
function Js() {
  const { kb: e } = M(), t = e.datasets.dia_regression, [n, r] = E(t.rows.length), s = ye();
  z(() => () => clearInterval(s.current), []);
  const a = () => {
    if (G("replay_played", { trace: "t.dia.regression" }), qe()) {
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
      /* @__PURE__ */ i("tbody", { children: t.rows.map((l, p) => /* @__PURE__ */ i("tr", { class: p < n ? "is-done" : "is-wait", children: [
        /* @__PURE__ */ i("th", { scope: "row", children: l[0] }),
        /* @__PURE__ */ i("td", { children: l[1] }),
        /* @__PURE__ */ i("td", { children: p < n ? l[2] : "…" }),
        /* @__PURE__ */ i("td", { children: l[3] }),
        /* @__PURE__ */ i("td", { children: l[4].toFixed(2) }),
        /* @__PURE__ */ i("td", { children: p < n ? l[1] === l[2] ? /* @__PURE__ */ i("span", { class: "imw-verdict is-pass", children: "✓" }) : /* @__PURE__ */ i("span", { class: "imw-verdict is-fail", children: "✕" }) : "" })
      ] }, l[0])) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      t.caveat,
      " The final LLM explanation is excluded; this is not a clinical validation."
    ] })
  ] });
}
function yn({ id: e }) {
  const { kb: t, go: n } = M(), r = t.attacks.find((l) => l.id === e), [s, a] = E(!1);
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
function Ys(e, t, n, r, s, a, o) {
  const l = e / (e + n), p = t / (t + r), d = s * a * l, m = s * (1 - a) * p, g = d + m;
  return { trueAlerts: d, falseAlerts: m, missed: s * a * (1 - l), reviews: g, hours: g * o / 60, precision: g ? d / g : null };
}
function Xs() {
  const { kb: e } = M(), t = e.datasets.cliniq_confusion, [n, r] = E(1e4), [s, a] = E(5), [o, l] = E(3), p = he(() => t.methods.map((g) => ({ m: g, r: Ys(g.tp, g.fp, g.fn, g.tn, n, s / 100, o) })), [t, n, s, o]), d = Math.max(...p.map((g) => g.r.hours), 1), m = (g) => g.toLocaleString(void 0, { maximumFractionDigits: 0 });
  return /* @__PURE__ */ i("div", { class: "imw-workload", children: [
    /* @__PURE__ */ i("div", { class: "imw-sliders", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Reviews per month ",
          /* @__PURE__ */ i("b", { children: m(n) })
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
      /* @__PURE__ */ i("tbody", { children: p.map(({ m: g, r: c }) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { scope: "row", children: g.label }),
        /* @__PURE__ */ i("td", { children: m(c.reviews) }),
        /* @__PURE__ */ i("td", { children: m(c.trueAlerts) }),
        /* @__PURE__ */ i("td", { children: m(c.missed) }),
        /* @__PURE__ */ i("td", { children: c.precision === null ? "—" : c.precision.toFixed(2) }),
        /* @__PURE__ */ i("td", { class: "imw-barcell", children: [
          /* @__PURE__ */ i("span", { class: "imw-inline-bar viz-2", style: { width: `${c.hours / d * 100}%` }, "aria-hidden": "true" }),
          /* @__PURE__ */ i("b", { children: m(c.hours) })
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
function Zs() {
  const [e, t] = E(null);
  if (z(() => {
    fetch(gn("evaluation-report.json")).then((s) => s.ok ? s.json() : null).then(t).catch(() => t(null));
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
function er() {
  const { kb: e, modeArg: t } = M(), n = e.traces.find((o) => o.id === t)?.id ?? "t.voice.emergency", [r, s] = E(n);
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
      /* @__PURE__ */ i(wn, { id: r }, r)
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Try to break it" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Adversarial and edge cases, what the system did, and the test that keeps it that way." }),
      /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: a.map((o) => /* @__PURE__ */ i(yn, { id: o.id }, o.id)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Run the numbers · ClinIQ review workload" }),
      /* @__PURE__ */ i(Xs, {})
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Measured from the audio · Voice QA Harness" }),
      /* @__PURE__ */ i(ri, {})
    ] }),
    /* @__PURE__ */ i(Zs, {})
  ] });
}
function tr({ a: e }) {
  const { setInspect: t, ask: n } = M(), r = ni(e), s = (a) => r.indexOf(a) + 1;
  return /* @__PURE__ */ i("div", { class: "imw-answer", children: [
    /* @__PURE__ */ i("div", { class: "imw-answer-head", children: [
      /* @__PURE__ */ i("span", { class: `imw-engine is-${e.engine}`, children: e.engine === "model" ? "Claude · validated" : "Evidence engine" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => t({ kind: "basis", retrieved: e.basis?.retrieved ?? [], checks: e.basis?.checks, model: e.basis?.model, engine: e.engine }), children: "Why this answer?" }),
      e.refined && /* @__PURE__ */ i("span", { class: "imw-help", children: "Requirements refined by AI parsing" })
    ] }),
    e.blocks.map((a, o) => /* @__PURE__ */ i(nr, { b: a, num: s }, o)),
    e.actions.length > 0 && /* @__PURE__ */ i("div", { class: "imw-actions", children: e.actions.map((a, o) => /* @__PURE__ */ i(ot, { a }, o)) }),
    e.followups.length > 0 && /* @__PURE__ */ i("div", { class: "imw-followups", "aria-label": "Suggested follow-up questions", children: e.followups.map((a) => /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n(a), children: a }, a)) })
  ] });
}
const ir = (e) => {
  const t = e.replace(/^Bottom line: /, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
};
function Tt({ ids: e, num: t }) {
  const { kb: n, setInspect: r } = M();
  return e?.length ? /* @__PURE__ */ i(oe, { children: e.map((s) => /* @__PURE__ */ i("button", { class: "imw-cite", onClick: () => r({ kind: "claim", id: s }), "aria-label": `Source ${t(s)}: ${n.claim.get(s)?.text ?? s}`, children: t(s) }, s)) }) : null;
}
function nr({ b: e, num: t }) {
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
          ir(e.text),
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
        /* @__PURE__ */ i(_t, { counts: e.analysis.counts }),
        /* @__PURE__ */ i(pn, { analysis: e.analysis, max: 12 }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
          n.setCoverage(e.analysis), a("role");
        }, children: "Open the full analysis →" })
      ] });
    case "xray": {
      const o = r.architectures.find((l) => l.id === e.arch);
      return o ? /* @__PURE__ */ i("div", { class: "imw-xray-inline", children: [
        /* @__PURE__ */ i(fn, { arch: o, scan: !1, onSelect: (l) => s({ kind: "node", arch: o.id, node: l }) }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a("xray", o.entity), children: "Open X-Ray view →" })
      ] }) : null;
    }
    case "failures":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(ai, { id: o }, o)) });
    case "decisions":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(oi, { id: o }, o)) });
    case "compare":
      return /* @__PURE__ */ i("div", { class: "imw-table-wrap", children: /* @__PURE__ */ i("table", { class: "imw-table imw-compare", children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "col", children: /* @__PURE__ */ i("span", { class: "sr-only", children: "Field" }) }),
          e.entities.map((o) => /* @__PURE__ */ i("th", { scope: "col", children: r.entity.get(o)?.short }, o))
        ] }) }),
        /* @__PURE__ */ i("tbody", { children: e.rows.map((o) => /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "row", children: o.label }),
          o.values.map((l, p) => /* @__PURE__ */ i("td", { children: l }, p))
        ] }, o.label)) })
      ] }) });
    case "gaps":
      return /* @__PURE__ */ i("ul", { class: "imw-gaps", children: e.items.map((o) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-cat cat-missing", children: ie.missing }),
        /* @__PURE__ */ i("strong", { children: o.name }),
        /* @__PURE__ */ i("p", { children: o.statement }),
        o.closest.length > 0 && /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("span", { class: "imw-help", children: "Closest:" }),
          o.closest.map((l) => /* @__PURE__ */ i(Us, { id: l }, l))
        ] })
      ] }, o.id)) });
    case "chart":
      return e.chart === "cliniq" ? /* @__PURE__ */ i(mn, {}) : /* @__PURE__ */ i(ri, {});
    case "trace":
      return /* @__PURE__ */ i(wn, { id: e.id, compact: !0 });
  }
}
function ai({ id: e, open: t = !1 }) {
  const { kb: n } = M(), r = n.failures.find((l) => l.id === e), [s, a] = E(t);
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
      /* @__PURE__ */ i("ol", { class: "imw-flow", children: o.map(([l, p]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: l }),
        /* @__PURE__ */ i("span", { children: p })
      ] }, l)) }),
      /* @__PURE__ */ i(De, { refs: r.code }),
      /* @__PURE__ */ i(ne, { ids: r.claims, title: "Evidence", compact: !0 })
    ] })
  ] });
}
function oi({ id: e }) {
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
function sr({ analysis: e }) {
  const { kb: t, setInspect: n } = M();
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
const rr = [
  { q: "What has Rahul actually shipped?" },
  { q: "Show me his strongest RAG work." },
  { q: "How does he evaluate AI systems?" },
  { q: "What has he built beyond LLM wrappers?" },
  { q: "Show me his backend engineering experience." },
  { q: "What failure did he find and fix?" },
  { q: "Evaluate Rahul for a role", mode: "role" },
  { q: "Paste a job description", mode: "jd" }
];
function ar({ turns: e }) {
  const { kb: t, ask: n, go: r, persona: s, setPersona: a } = M(), [o, l] = E(""), p = ye(null), d = ye(null), m = e[e.length - 1];
  z(() => {
    d.current?.querySelector(".imw-turn:last-child")?.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [e.length, m?.pending]);
  const g = () => {
    const w = o.trim();
    w && (l(""), n(w));
  }, c = ei(o), y = t.claims.reduce((w, u) => w + (D(u) ? u.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-ask", children: [
    /* @__PURE__ */ i("div", { class: "imw-log", ref: d, children: [
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
        /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Who is asking", children: t.personas.map((w) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": s === w.id, class: s === w.id ? "is-on" : "", onClick: () => a(w.id), children: w.label }, w.id)) }),
        /* @__PURE__ */ i("p", { class: "imw-help", children: [
          "Prefer your own assistant? ",
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("connect"), children: "Connect Claude, Cursor or VS Code to this evidence →" })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Start with" }),
        /* @__PURE__ */ i("div", { class: "imw-starters", children: rr.map((w, u) => /* @__PURE__ */ i("button", { onClick: () => {
          G("starter_question_selected", { index: u }), w.mode ? r("role", w.mode === "jd" ? "jd" : void 0) : n(w.q);
        }, children: [
          /* @__PURE__ */ i("span", { class: "imw-starter-n", children: String(u + 1).padStart(2, "0") }),
          /* @__PURE__ */ i("span", { children: w.q })
        ] }, w.q)) })
      ] }),
      e.map((w) => /* @__PURE__ */ i("section", { class: "imw-turn", "aria-label": `Question: ${w.q}`, children: [
        /* @__PURE__ */ i("p", { class: "imw-q", children: [
          /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "You asked" }),
          w.q
        ] }),
        w.pending && /* @__PURE__ */ i("div", { class: "imw-pending", role: "status", children: [
          /* @__PURE__ */ i("span", { class: "imw-pulse", "aria-hidden": "true" }),
          "Retrieving evidence and validating the answer…"
        ] }),
        w.a && /* @__PURE__ */ i(tr, { a: w.a })
      ] }, w.id)),
      e.some((w) => w.a) && !m?.pending && /* @__PURE__ */ i("p", { class: "imw-keep", children: [
        "Want to keep this? ",
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("export"), children: "Download your questions and answers as a PDF →" })
      ] })
    ] }),
    /* @__PURE__ */ i("form", { class: "imw-composer", onSubmit: (w) => {
      w.preventDefault(), g();
    }, children: [
      c && /* @__PURE__ */ i("p", { class: "imw-jd-hint", children: "This looks like a job description. Sending it runs an evidence-coverage analysis." }),
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-q", children: "Ask a question or paste a job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-q",
          ref: p,
          rows: 1,
          value: o,
          placeholder: "Ask a question, or paste a job description…",
          maxLength: 12e3,
          onInput: (w) => {
            const u = w.target;
            l(u.value), u.style.height = "auto", u.style.height = `${Math.min(u.scrollHeight, 180)}px`;
          },
          onKeyDown: (w) => {
            w.key === "Enter" && !w.shiftKey && (w.preventDefault(), g());
          }
        }
      ),
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-send", disabled: !o.trim(), children: c ? "Analyze" : "Ask" })
    ] })
  ] });
}
function or(e) {
  const t = location.origin + location.pathname;
  if (e.source === "role" && e.roleId) return `${t}#imw=role:${e.roleId}`;
  const n = e.requirements.map((r) => r.id).filter((r) => !r.startsWith("term:")).join(",");
  return `${t}#imw=role:${encodeURIComponent(`jd~${n}`)}`;
}
function lr(e, t) {
  const n = [`# Evidence coverage: ${e.title}`, `Candidate: ${t}`, ""];
  for (const r of ["direct", "related", "verification", "missing"]) {
    const s = e.requirements.filter((a) => a.category === r);
    s.length && (n.push(`## ${ie[r]} (${s.length})`), s.forEach((a) => n.push(`- ${a.label}${a.statement && r !== "direct" ? ` — ${a.statement}` : ""}`)), n.push(""));
  }
  return e.notes.length && n.push(...e.notes.map((r) => `> ${r}`), ""), n.push("Generated by Interview My Work from verified evidence. No fit score is computed."), n.join(`
`);
}
function cr() {
  const { kb: e, coverage: t, setCoverage: n, modeArg: r, api: s, toggleLens: a, ask: o, go: l } = M(), [p, d] = E(r === "jd" ? "jd" : "role"), [m, g] = E(""), [c, y] = E(!1), [w, u] = E("");
  z(() => {
    if (!r) return;
    if (r === "jd") {
      d("jd");
      return;
    }
    const h = decodeURIComponent(r);
    if (e.role.has(h)) n(Ce(e, h));
    else if (h.startsWith("jd~")) {
      const C = h.slice(3).split(",").filter(Boolean).map((q) => q.startsWith("near:") ? le(e, e.skills.find((S) => S.near?.includes(q.slice(5)))?.id ?? q, { near: q.slice(5) }) : le(e, q));
      n(Zt(e, "Shared job description", C, { source: "jd" }));
    }
  }, [r]);
  const f = (h) => {
    h && (n(Ce(e, h)), G("role_selected", { role: h }));
  }, v = () => {
    if (m.trim().length < 40) return;
    const h = ut(e, m);
    n(h), G("jd_analyzed", { requirements: h.requirements.length }), s === "ready" && (y(!0), dn(m).then((x) => {
      x.length && n(ut(e, m, x), h);
    }).catch(() => {
    }).finally(() => y(!1)));
  }, k = async (h) => {
    if (t)
      try {
        await navigator.clipboard.writeText(h === "link" ? or(t) : lr(t, e.subject.name)), u(h), setTimeout(() => u(""), 2e3);
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
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": p === "role", class: p === "role" ? "is-on" : "", onClick: () => d("role"), children: "Select a role" }),
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": p === "jd", class: p === "jd" ? "is-on" : "", onClick: () => d("jd"), children: "Paste a job description" })
    ] }),
    p === "role" ? /* @__PURE__ */ i("div", { class: "imw-rolepick", children: [
      /* @__PURE__ */ i("div", { class: "imw-role-cards", children: b.map((h) => /* @__PURE__ */ i("button", { class: t?.roleId === h.id && t.source === "role" ? "is-on" : "", onClick: () => f(h.id), children: [
        /* @__PURE__ */ i("strong", { children: h.title }),
        /* @__PURE__ */ i("small", { children: h.proof_note })
      ] }, h.id)) }),
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "More roles" }),
        /* @__PURE__ */ i("select", { onChange: (h) => f(h.target.value), value: t?.source === "role" ? t.roleId : "", children: [
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
          value: m,
          maxLength: 12e3,
          placeholder: "Paste the full job description, including requirements and nice-to-haves.",
          onInput: (h) => g(h.target.value)
        }
      ),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: v, disabled: m.trim().length < 40, children: "Analyze coverage" }),
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
      /* @__PURE__ */ i(_t, { counts: t.counts }),
      t.notes.map((h) => /* @__PURE__ */ i("p", { class: "imw-note", children: h }, h)),
      /* @__PURE__ */ i(pn, { analysis: t, max: 18 }),
      /* @__PURE__ */ i(sr, { analysis: t }),
      /* @__PURE__ */ i("div", { class: "imw-actions", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => o(t.roleId ? `Challenge the evidence for ${t.title}` : "Challenge this evidence"), children: "Challenge this evidence" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l("map", t.roleId), children: "View on the evidence map" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("link"), children: w === "link" ? "Link copied" : "Copy shareable link" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("md"), children: w === "md" ? "Summary copied" : "Copy summary" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l("export"), children: "Download PDF" })
      ] })
    ] })
  ] });
}
function dr() {
  const { kb: e, modeArg: t, setInspect: n, inspect: r, ask: s, noteEntity: a } = M(), o = e.architectures, [l, p] = E(o.find((h) => h.entity === t)?.id ?? o[0].id), d = o.find((h) => h.id === l), [m, g] = E("why");
  z(() => {
    const h = o.find((x) => x.entity === t);
    h && p(h.id);
  }, [t]), z(() => {
    a(d.entity);
  }, [d.entity]);
  const c = e.entity.get(d.entity), y = e.statableByEntity.get(d.entity) ?? [], w = e.decisions.filter((h) => h.entity === d.entity), u = e.failures.filter((h) => h.entity === d.entity), f = e.attacks.filter((h) => h.entity === d.entity), v = y.filter((h) => h.tags.some((x) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(x))), k = y.flatMap((h) => h.code ?? []), b = r?.kind === "node" && r.arch === d.id ? r.node : void 0, _ = [
    ["why", "Why this design?", w.length],
    ["failures", "Failure cases", u.length + y.filter((h) => h.kind === "limitation").length],
    ["break", "Try to break it", f.length],
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
      p(h.id), n(null);
    }, children: e.entity.get(h.entity)?.short }, h.id)) }),
    /* @__PURE__ */ i(fn, { arch: d, selected: b, onSelect: (h) => n({ kind: "node", arch: d.id, node: h }) }),
    /* @__PURE__ */ i("div", { class: "imw-subtabs", role: "tablist", "aria-label": "Inspect", children: _.filter(([, , h]) => h > 0).map(([h, x, C]) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": m === h, class: m === h ? "is-on" : "", onClick: () => g(h), children: [
      x,
      " ",
      /* @__PURE__ */ i("small", { children: C })
    ] }, h)) }),
    /* @__PURE__ */ i("div", { class: "imw-tabpanel", role: "tabpanel", children: [
      m === "why" && /* @__PURE__ */ i("div", { class: "imw-stack", children: w.map((h) => /* @__PURE__ */ i(oi, { id: h.id }, h.id)) }),
      m === "failures" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        u.map((h, x) => /* @__PURE__ */ i(ai, { id: h.id, open: x === 0 }, h.id)),
        /* @__PURE__ */ i(ne, { ids: y.filter((h) => h.kind === "limitation").map((h) => h.id), title: "Stated limitations" })
      ] }),
      m === "break" && /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: f.map((h) => /* @__PURE__ */ i(yn, { id: h.id }, h.id)) }),
      m === "evaluation" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i(ne, { ids: v.map((h) => h.id) }),
        d.entity === "cliniq" && /* @__PURE__ */ i(mn, {}),
        d.entity === "voice" && /* @__PURE__ */ i(ri, {})
      ] }),
      m === "code" && /* @__PURE__ */ i(De, { refs: k, max: 30 }),
      m === "questions" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i("p", { class: "imw-help", children: "Questions a skeptical interviewer could press on. Select one to see what the evidence says." }),
        c.questions.map((h) => /* @__PURE__ */ i("button", { class: "imw-question", onClick: () => s(h.includes(c.short) ? h : `${h} (${c.short})`), children: h }, h))
      ] })
    ] })
  ] });
}
const hr = 1e3, ur = 720, Y = 500, te = 360, Ut = 170, Vt = 305, pr = /* @__PURE__ */ new Set(["project", "research", "experience", "leadership"]);
function mr(e, t) {
  const n = e.groups, r = e.entities.filter((u) => pr.has(u.kind)), s = new Map(e.skills.map((u) => [u.id, u.group])), a = /* @__PURE__ */ new Map();
  for (const u of e.claims.filter(D)) {
    const f = a.get(u.entity) ?? /* @__PURE__ */ new Map();
    new Set(u.tags.map((v) => s.get(v)).filter(Boolean)).forEach((v) => f.set(v, (f.get(v) ?? 0) + 1)), a.set(u.entity, f);
  }
  const o = new Map(n.map((u, f) => [u.id, -Math.PI / 2 + f / n.length * Math.PI * 2])), l = new Set(t?.requirements.filter((u) => u.category === "direct" || u.category === "related").map((u) => u.id) ?? []), p = new Map(n.map((u) => {
    if (!t) return [u.id, 1];
    const f = e.skills.filter((v) => v.group === u.id);
    return [u.id, f.filter((v) => l.has(v.id)).length / Math.max(1, Math.min(4, f.length))];
  })), d = Math.max(1, ...t?.entities.map((u) => u.score) ?? [1]), m = new Map(r.map((u) => [u.id, t ? (t.entities.find((f) => f.id === u.id)?.score ?? 0) / d : 1])), g = /* @__PURE__ */ new Map();
  for (const u of n) {
    const f = Math.min(1, p.get(u.id)), v = t ? Ut * (f > 0 ? 1 - 0.16 * f : 1.1) : Ut, k = o.get(u.id);
    g.set(u.id, { x: Y + v * Math.cos(k), y: te + v * Math.sin(k), o: t ? f > 0 ? 1 : 0.16 : 1 });
  }
  const c = r.map((u) => {
    const f = a.get(u.id) ?? /* @__PURE__ */ new Map();
    let v = 0, k = 0;
    return f.forEach((b, _) => {
      const h = o.get(_);
      v += b * Math.cos(h), k += b * Math.sin(h);
    }), { id: u.id, a: Math.atan2(k, v) };
  }).sort((u, f) => u.a - f.a), y = Math.PI * 2 / c.length * 0.8;
  for (let u = 0; u < 8; u++)
    for (let f = 0; f < c.length; f++) {
      const v = c[f], k = c[(f + 1) % c.length];
      let b = k.a - v.a;
      if (f === c.length - 1 && (b += Math.PI * 2), b < y) {
        const _ = (y - b) / 2;
        v.a -= _, k.a += _;
      }
    }
  const w = /* @__PURE__ */ new Map();
  for (const u of c) {
    const f = m.get(u.id), v = t ? Vt * (f > 0 ? 1 - 0.2 * f : 1.06) : Vt;
    w.set(u.id, { x: Y + v * Math.cos(u.a), y: te + v * Math.sin(u.a), o: t ? f > 0 ? 0.35 + 0.65 * f : 0.14 : 1 });
  }
  return { groups: n, ents: r, weight: a, gPos: g, ePos: w };
}
const fr = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
function gr() {
  const { kb: e, modeArg: t, coverage: n, setInspect: r, go: s } = M(), [a, o] = E(t && e.role.has(t) ? t : ""), [l, p] = E(null), d = he(() => a === "__current" ? n : a ? Ce(e, a) : null, [a, e, n]), m = he(() => mr(e, d), [e, d]), [g, c] = E(() => new Map([...m.gPos, ...m.ePos].map(([_]) => [_, { x: Y, y: te, o: 0 }]))), y = ye(g);
  z(() => {
    const _ = new Map([...m.gPos, ...m.ePos]);
    if (qe()) {
      y.current = _, c(_);
      return;
    }
    const h = y.current, x = performance.now(), C = 850;
    let q = 0;
    const S = (H) => {
      const K = fr(Math.min(1, (H - x) / C)), re = /* @__PURE__ */ new Map();
      _.forEach((pe, J) => {
        const me = h.get(J) ?? { x: Y, y: te, o: 0 };
        re.set(J, { x: me.x + (pe.x - me.x) * K, y: me.y + (pe.y - me.y) * K, o: me.o + (pe.o - me.o) * K });
      }), y.current = re, c(re), K < 1 && (q = requestAnimationFrame(S));
    };
    return q = requestAnimationFrame(S), () => cancelAnimationFrame(q);
  }, [m]);
  const w = (_) => g.get(_) ?? { x: Y, y: te, o: 0 }, u = Math.max(1, ...[...m.weight.values()].flatMap((_) => [..._.values()])), f = (_) => e.claims.filter((h) => D(h) && h.tags.some((x) => e.skill.get(x)?.group === _)).length, v = (_) => e.statableByEntity.get(_)?.length ?? 0, k = l ? e.skills.filter((_) => _.group === l).map((_, h, x) => {
    const C = w(l), q = Math.atan2(C.y - te, C.x - Y), S = Math.min(Math.PI * 0.9, x.length * 0.22), H = q - S / 2 + S * (h + 0.5) / x.length;
    return { s: _, cov: le(e, _.id), x: C.x + 92 * Math.cos(H), y: C.y + 92 * Math.sin(H) };
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
          o(_.target.value), p(null);
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
    /* @__PURE__ */ i("div", { class: "imw-constellation", children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${hr} ${ur}`, role: "group", "aria-label": "Evidence map of capability areas and projects", children: [
      /* @__PURE__ */ i("circle", { cx: Y, cy: te, r: Ut, class: "imw-orbit" }),
      /* @__PURE__ */ i("circle", { cx: Y, cy: te, r: Vt, class: "imw-orbit" }),
      m.groups.map((_) => {
        const h = w(_.id);
        return /* @__PURE__ */ i("line", { x1: Y, y1: te, x2: h.x, y2: h.y, class: "imw-spoke", style: { opacity: h.o * 0.5 } }, `c-${_.id}`);
      }),
      m.ents.flatMap((_) => [...(m.weight.get(_.id) ?? /* @__PURE__ */ new Map()).entries()].map(([h, x]) => {
        const C = w(h), q = w(_.id), S = l ? l === h : !0;
        return /* @__PURE__ */ i("line", { x1: C.x, y1: C.y, x2: q.x, y2: q.y, class: "imw-web", style: { strokeWidth: 0.6 + 2.2 * x / u, opacity: Math.min(C.o, q.o) * (S ? 0.55 : 0.08) } }, `${_.id}-${h}`);
      })),
      /* @__PURE__ */ i("g", { class: "imw-core", children: [
        /* @__PURE__ */ i("circle", { cx: Y, cy: te, r: 34 }),
        /* @__PURE__ */ i("text", { x: Y, y: te - 2, "text-anchor": "middle", children: "Rahul" }),
        /* @__PURE__ */ i("text", { x: Y, y: te + 14, "text-anchor": "middle", class: "imw-core-sub", children: "Vajja" })
      ] }),
      m.groups.map((_) => {
        const h = w(_.id), x = f(_.id), C = 6 + Math.sqrt(x) * 1.6, q = h.x < Y - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-gnode${l === _.id ? " is-on" : ""}`,
            style: { opacity: h.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${_.label}: ${x} verified claims`,
            onClick: () => {
              p(l === _.id ? null : _.id), r({ kind: "group", id: _.id });
            },
            onKeyDown: (S) => {
              (S.key === "Enter" || S.key === " ") && (S.preventDefault(), p(l === _.id ? null : _.id), r({ kind: "group", id: _.id }));
            },
            children: [
              /* @__PURE__ */ i("circle", { cx: h.x, cy: h.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("circle", { cx: h.x, cy: h.y, r: C }),
              /* @__PURE__ */ i("text", { x: h.x + (q ? -C - 7 : C + 7), y: h.y + 4, "text-anchor": q ? "end" : "start", children: _.label })
            ]
          },
          _.id
        );
      }),
      k.map(({ s: _, cov: h, x, y: C }) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-sat ${Ee[h.category]}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${_.name}: ${h.category}`,
          onClick: () => r({ kind: "req", req: h }),
          onKeyDown: (q) => (q.key === "Enter" || q.key === " ") && (q.preventDefault(), r({ kind: "req", req: h })),
          children: [
            /* @__PURE__ */ i("line", { x1: w(l).x, y1: w(l).y, x2: x, y2: C }),
            /* @__PURE__ */ i("circle", { cx: x, cy: C, r: 4 }),
            /* @__PURE__ */ i("text", { x, y: C - 8, "text-anchor": "middle", children: _.name.length > 22 ? _.name.slice(0, 21) + "…" : _.name })
          ]
        },
        _.id
      )),
      m.ents.map((_) => {
        const h = w(_.id), x = v(_.id), C = 7 + Math.sqrt(x) * 1.4, q = h.x < Y - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-enode is-${_.kind}`,
            style: { opacity: h.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${_.name}: ${x} verified claims`,
            onClick: () => r({ kind: "entity", id: _.id }),
            onKeyDown: (S) => (S.key === "Enter" || S.key === " ") && (S.preventDefault(), r({ kind: "entity", id: _.id })),
            children: [
              /* @__PURE__ */ i("circle", { cx: h.x, cy: h.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("rect", { x: h.x - C, y: h.y - C, width: C * 2, height: C * 2, rx: _.kind === "experience" ? C : 3 }),
              /* @__PURE__ */ i("text", { x: h.x + (q ? -C - 8 : C + 8), y: h.y + 4, "text-anchor": q ? "end" : "start", children: _.short })
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
function wr() {
  const { kb: e, coverage: t, modeArg: n, setCoverage: r, go: s } = M(), [a, o] = E(n && e.role.has(n) ? n : t?.roleId ?? "applied_ai");
  z(() => {
    n && e.role.has(n) && o(n);
  }, [n]);
  const l = t?.source === "jd" && !n, p = he(() => l && t ? t : Ce(e, a), [e, a, l, t]);
  z(() => {
    G("brief_generated", { role: p.roleId ?? "jd" });
  }, [p]);
  const d = p.entities.filter((h) => h.id !== "imw" && e.entity.get(h.id)?.kind !== "education").slice(0, 3).map((h) => e.entity.get(h.id)), m = d.map((h) => h.id), g = e.decisions.filter((h) => m.includes(h.entity)).slice(0, 3), c = e.failures.filter((h) => m.includes(h.entity)).slice(0, 2), y = e.claims.find((h) => D(h) && h.kind === "limitation" && m.includes(h.entity)), w = p.requirements.filter((h) => h.category === "missing").slice(0, 2), u = m.flatMap((h) => (e.statableByEntity.get(h) ?? []).flatMap((x) => x.code ?? [])).filter((h) => h.lines).slice(0, 4), f = e.claims.find((h) => D(h) && h.kind === "metric" && ["cliniq", "sssd", "qml"].includes(h.entity) && (m.includes(h.entity) || h.entity === "cliniq")), v = d.flatMap((h) => h.questions.slice(0, 2).map((x) => ({ e: h.short, q: x }))), k = () => [
    `# 10-minute technical brief: ${p.title}`,
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
    ...y ? [`- ${y.text}`] : [],
    ...w.map((h) => `- ${h.label}: ${h.statement}`),
    "",
    "## Code to open",
    ...u.map((h) => `- ${h.label}: ${h.url}`),
    "",
    "## Suggested questions",
    ...v.map((h) => `- (${h.e}) ${h.q}`)
  ].join(`
`), [b, _] = E(!1);
  return /* @__PURE__ */ i("div", { class: "imw-view imw-brief", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Technical interview brief · 10 minutes" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: p.title }),
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
          r(p), s("export");
        }, children: "Download PDF" })
      ] }),
      /* @__PURE__ */ i(_t, { counts: p.counts, compact: !0 })
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
        /* @__PURE__ */ i("div", { class: "imw-stack", children: g.map((h) => /* @__PURE__ */ i(oi, { id: h.id }, h.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "5–7 min" }),
        /* @__PURE__ */ i("h4", { children: "Failure cases" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: c.map((h) => /* @__PURE__ */ i(ai, { id: h.id }, h.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "7–8 min" }),
        /* @__PURE__ */ i("h4", { children: "Limitations and gaps" }),
        y && /* @__PURE__ */ i(ne, { ids: [y.id], compact: !0 }),
        w.map((h) => /* @__PURE__ */ i("p", { class: "imw-note", children: [
          h.label,
          ": ",
          h.statement
        ] }, h.id)),
        f && /* @__PURE__ */ i(oe, { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "One research result" }),
          /* @__PURE__ */ i(ne, { ids: [f.id], compact: !0 })
        ] })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "8–10 min" }),
        /* @__PURE__ */ i("h4", { children: "Code to open" }),
        /* @__PURE__ */ i(De, { refs: u })
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
const Rt = "rahul-vajja", yr = [
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
], vr = [
  "Using the rahul-vajja tools, compare Rahul against this job description and cite claim ids: …",
  "Does Rahul have AI evaluation experience? Show the evidence and the code.",
  "What would you challenge in the Drug Interaction Agent architecture?"
];
function br() {
  const e = `${cn()}/mcp`, t = [
    { id: "claude-code", label: "Claude Code", how: "Run in a terminal:", code: `claude mcp add --transport http ${Rt} ${e}` },
    { id: "claude", label: "Claude", how: "In Claude (web or desktop): Settings → Connectors → Add custom connector, then paste this URL:", code: e },
    { id: "cursor", label: "Cursor", how: "Add to ~/.cursor/mcp.json:", code: JSON.stringify({ mcpServers: { [Rt]: { url: e } } }, null, 2) },
    { id: "vscode", label: "VS Code", how: "Add to .vscode/mcp.json:", code: JSON.stringify({ servers: { [Rt]: { type: "http", url: e } } }, null, 2) },
    { id: "other", label: "Other", how: "Any MCP client that supports Streamable HTTP:", code: e }
  ], [n, r] = E(t[0].id), [s, a] = E(""), [o, l] = E({ state: "idle" }), p = t.find((g) => g.id === n), d = async (g, c) => {
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
          const c = new AbortController(), y = setTimeout(() => c.abort(), 45e3), w = await fetch(e, {
            method: "POST",
            signal: c.signal,
            headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
            body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list", params: {} })
          });
          clearTimeout(y);
          const f = (await w.json())?.result?.tools?.length;
          if (!w.ok || !f) throw new Error(`HTTP ${w.status}`);
          l({ state: "ok", text: `${f} tools available · ${Math.round(performance.now() - g)} ms` });
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
    /* @__PURE__ */ i("p", { class: "imw-help", children: p.how }),
    /* @__PURE__ */ i("div", { class: "imw-snippet", children: [
      /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: p.code }) }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => d(p.code, p.id), children: s === p.id ? "Copied" : "Copy" })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Then try" }),
      /* @__PURE__ */ i("ul", { class: "imw-bullets", children: vr.map((g) => /* @__PURE__ */ i("li", { children: g }, g)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Tools · all read-only" }),
      /* @__PURE__ */ i("ul", { class: "imw-tools", children: yr.map(([g, c]) => /* @__PURE__ */ i("li", { children: [
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
const kt = {
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
}, vn = /* @__PURE__ */ new Set(["project", "research", "experience"]), _r = { backend: "Backend", data: "Data engineering", domain: "Domains", mlops: "MLOps & deployment", vision: "Computer vision", voice: "Voice AI" }, kr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function Li(e) {
  if (/present/i.test(e)) return 1e6;
  const t = [...e.matchAll(/\b(19|20)\d{2}\b/g)].map((r) => +r[0]), n = [...e.toLowerCase().matchAll(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/g)].map((r) => kr.indexOf(r[1]));
  return (t.length ? Math.max(...t) : 0) * 12 + (n.length ? n[n.length - 1] : 0);
}
const Ke = (e) => [...new Set(e)], bn = (e, t) => e.summaries[t] ?? e.summaries.engineer ?? e.tagline;
function xr(e) {
  return e.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
}
function _n(e, t, n = /* @__PURE__ */ new Date()) {
  const r = e.subject.name.replace(/[^A-Za-z0-9]+/g, "-"), s = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  return `${r}-evidence-dossier-${t}-${s}.pdf`;
}
const $r = (e, t) => `${e.subject.name} · Evidence dossier · ${kt[t].label} perspective · ${(e.subject.links.site ?? "").replace(/^https?:\/\/|\/$/g, "")}`;
function Cr(e, t) {
  const n = t.turns.flatMap((s) => s.a?.entities.slice(0, 3) ?? []), r = t.analyses.flatMap((s) => s.entities.slice(0, 3).map((a) => a.id));
  return Ke([...t.seen, ...n, ...r]).filter((s) => vn.has(e.entity.get(s)?.kind ?? ""));
}
function kn(e, t, n) {
  const r = kt[n], s = Cr(e, t);
  return s.length ? { ids: s.slice(0, r.projects), defaulted: !1 } : { ids: (e.roles.find((o) => o.priority === 1) ?? e.roles[0]).focus_entities.filter((o) => vn.has(e.entity.get(o)?.kind ?? "")).slice(0, r.projects), defaulted: !0 };
}
function xn(e, t, n) {
  if (!D(t)) return null;
  const r = t.strength === "public_artifact" ? "artifact" : "self", s = (t.code ?? []).slice(0, n.code).map((o) => ({
    label: `${o.label} (${o.path}${o.lines ? `, lines ${o.lines[0]}–${o.lines[1]}` : ""})`,
    url: o.url
  }));
  if (!s.length) {
    const o = t.sources.map((l) => e.sources.find((p) => p.id === l)).find((l) => l?.public && l.url);
    o?.url && s.push({ label: o.title, url: o.url });
  }
  const a = r === "artifact" ? "Verified · public artifact" : "Verified · self-reported";
  return { t: "claim", text: t.text, tone: r, meta: `${ee(e, t.entity)} · ${a}`, links: s };
}
const $n = (e, t, n) => Ke(t).map((r) => e.claim.get(r)).filter(D).map((r) => xn(e, r, n));
function qr(e, t, n) {
  const r = (s) => (s.strength === "public_artifact" ? 0 : 2) + (s.kind === "metric" ? 0 : 1);
  return (e.statableByEntity.get(t) ?? []).filter((s) => s.kind !== "limitation").sort((s, a) => r(s) - r(a)).slice(0, n);
}
function Er(e, t, n) {
  if (t.category === "direct" || t.category === "related") {
    const s = t.entities.slice(0, 3).map((l) => ee(e, l)).join(", "), a = t.category === "related" && t.via ? `Related through ${e.skill.get(t.via)?.name ?? t.via}. ` : "", o = t.claims.map((l) => e.claim.get(l)).find((l) => D(l) && !n.has(l.id));
    return o && n.add(o.id), `${a}${s ? `Evidence: ${s}.` : ""}${o ? ` For example: ${o.text}` : ""}`.trim();
  }
  const r = t.entities.length ? ` Closest evidence: ${t.entities.slice(0, 3).map((s) => ee(e, s)).join(", ")}.` : "";
  return `${t.statement ?? ""}${r}`.trim();
}
function Cn(e, t, n = 99) {
  const r = [{ t: "counts", counts: t.counts }], s = /* @__PURE__ */ new Set();
  for (const a of ["direct", "related", "verification", "missing"])
    t.requirements.filter((o) => o.category === a).slice(0, n).forEach((o) => r.push({ t: "req", category: a, label: o.label, detail: Er(e, o, s) }));
  return Ke(t.notes).forEach((a) => r.push({ t: "note", text: a })), r;
}
const Ar = (e, t) => e.title === t.title && e.source === t.source && e.requirements.map((n) => n.id).join() === t.requirements.map((n) => n.id).join();
function Sr(e, t) {
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
      const a = t.collapsed ? t.ids.filter((l) => !e.shown.has(n.claim.get(l)?.text ?? "")) : t.ids, o = $n(n, a, s);
      return o.length ? [...t.title ? [{ t: "h3", text: t.title }] : [], ...o] : [];
    }
    case "entity": {
      const a = n.entity.get(t.id);
      return a ? [{ t: "p", text: `${a.name}: ${bn(a, r)}` }] : [];
    }
    case "coverage": {
      const a = { t: "h3", text: `Evidence coverage: ${t.analysis.title}` };
      return e.detailed.some((o) => Ar(o, t.analysis)) ? [a, { t: "counts", counts: t.analysis.counts }, { t: "p", text: `The full requirement-by-requirement breakdown is in "${xe.roles}".`, muted: !0 }] : [a, ...Cn(n, t.analysis, 6)];
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
function Ir(e, t) {
  const { kb: n, lens: r } = e, s = [], a = /* @__PURE__ */ new Set();
  e.shown.clear();
  for (const d of t.blocks) d.type === "points" && d.items.forEach((m) => e.shown.add(m.text));
  for (const d of t.blocks)
    for (const m of Sr(e, d)) {
      if (m.t === "note") {
        if (a.has(m.text)) continue;
        a.add(m.text);
      }
      s.push(m);
    }
  const o = new Set(t.blocks.flatMap((d) => d.type === "claims" ? d.ids : d.type === "points" ? d.items.flatMap((m) => m.cites) : [])), l = ni(t).filter((d) => !o.has(d)), p = $n(n, l, r).slice(0, 8);
  return p.length && s.push({ t: "h3", text: "Evidence cited" }, ...p), s;
}
function Mr(e, t, n, r) {
  const s = e.entity.get(t);
  if (!s) return [];
  const a = [
    { t: "h2", text: s.name, meta: [s.role, s.dates].filter(Boolean).join(" · ") },
    { t: "p", text: bn(s, n) }
  ];
  s.ownership && a.push({ t: "kv", items: [["Ownership", s.ownership]] });
  const o = qr(e, t, r.claims).map((m) => xn(e, m, r));
  o.length && a.push({ t: "h3", text: "Verified evidence" }, ...o);
  const l = (e.statableByEntity.get(t) ?? []).filter((m) => m.kind === "limitation").slice(0, 2);
  l.length && a.push({ t: "h3", text: "Stated limitations" }, { t: "bullets", items: l.map((m) => m.text) }), e.decisions.filter((m) => m.entity === t).slice(0, r.decisions).forEach((m) => a.push({ t: "h3", text: `Decision: ${m.title}` }, { t: "kv", items: [["Choice", m.choice], ["Tradeoff", m.tradeoff]] })), e.failures.filter((m) => m.entity === t).slice(0, r.failures).forEach((m) => a.push({ t: "h3", text: `Failure case: ${m.title}` }, { t: "kv", items: [["Problem", m.problem], ["Fix", m.fix], ["Prevention", m.prevention]] }));
  const p = r.arch ? e.archByEntity.get(t) : void 0;
  p && a.push({ t: "h3", text: "Architecture" }, { t: "bullets", items: p.nodes.slice(0, 8).map((m) => `${m.label}: ${m.detail.purpose}`) });
  const d = s.links.filter((m) => /^https?:/.test(m.url));
  return d.length && a.push({ t: "links", items: d.map((m) => ({ label: m.label, url: m.url })) }), a;
}
function jr(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.skills) {
    if (!(e.statableBySkill.get(n.id) ?? []).some((a) => a.strength === "public_artifact")) continue;
    const s = e.groups.find((a) => a.id === n.group)?.label ?? _r[n.group] ?? n.group;
    (t.get(s) ?? t.set(s, []).get(s)).push(n.name);
  }
  return [...t.entries()];
}
function Tr(e, t, n) {
  const r = kt[n.persona], s = n.date ?? /* @__PURE__ */ new Date(), { subject: a } = e, o = t.turns.filter((u) => u.a), l = [], p = [
    { label: a.email, url: `mailto:${a.email}` },
    ...a.links.linkedin ? [{ label: "LinkedIn", url: a.links.linkedin }] : [],
    ...a.links.github ? [{ label: "GitHub", url: a.links.github }] : [],
    ...a.links.site ? [{ label: "Portfolio", url: a.links.site }] : []
  ];
  l.push({
    t: "cover",
    name: a.name,
    headline: a.headline,
    contacts: p,
    line: `Evidence dossier · ${r.label} perspective · ${xr(s)}`
  }), l.push({ t: "p", text: r.intro });
  const d = [
    o.length ? `${o.length} question${o.length === 1 ? "" : "s"} answered` : "",
    t.analyses.length ? `${t.analyses.length} role analys${t.analyses.length === 1 ? "is" : "es"}` : ""
  ].filter(Boolean).join(" · ");
  l.push({ t: "note", text: `How to read this: "Verified · public artifact" means you can open the code, data, recording or paper behind it. "Verified · self-reported" is Rahul's description of work that is not public, such as employer systems. Nothing here is a fit score. ${d ? `Session: ${d}.` : ""}`.trim() }), l.push({ t: "h1", text: "At a glance" }), l.push({ t: "p", text: a.level_note, muted: !0 });
  const m = e.entities.filter((u) => u.kind === "experience").sort((u, f) => Li(f.dates) - Li(u.dates));
  m.length && (l.push({ t: "h3", text: "Experience" }), l.push({ t: "table", head: ["Where", "Role", "Dates"], rows: m.map((u) => [u.name, u.role ?? "", u.dates]) }));
  const g = [
    ...e.entities.filter((u) => u.kind === "education").map((u) => ["Education", [u.name, u.role].filter(Boolean).join(": ")]),
    ...e.entities.filter((u) => u.kind === "leadership").map((u) => ["Leadership", `${u.role ? `${u.role}, ` : ""}${u.name} (${u.dates})`])
  ];
  g.length && l.push({ t: "kv", items: g });
  const c = jr(e);
  c.length && (l.push({ t: "h3", text: "Skills with public evidence" }), l.push({ t: "kv", items: c.map(([u, f]) => [u, f.join(", ")]) }));
  const y = { kb: e, persona: n.persona, lens: r, detailed: n.sections.roles ? t.analyses : [], shown: /* @__PURE__ */ new Set() };
  if (n.sections.qa && o.length && (l.push({ t: "h1", text: xe.qa, lead: "Each answer was generated from the evidence database and checked before it was shown." }), o.forEach((u, f) => {
    l.push({ t: "h2", text: `Q${f + 1}. ${u.q}`, meta: u.a.engine === "model" ? "Written by Claude, validated against the evidence" : "Answered by the evidence engine" }), l.push(...Ir(y, u.a));
  })), n.sections.roles && t.analyses.length) {
    l.push({ t: "h1", text: xe.roles, lead: "Each requirement is classified by the evidence behind it. No score is computed." });
    for (const u of t.analyses)
      l.push({ t: "h2", text: u.title, meta: u.source === "jd" ? `Job description you provided${u.closestRole ? ` · closest target role: ${u.closestRole}` : ""}` : "Target role" }), l.push(...Cn(e, u));
  }
  const w = kn(e, t, n.persona);
  if (n.sections.projects && w.ids.length && (l.push({ t: "h1", text: xe.projects, lead: w.defaulted ? "You did not open specific projects, so these are the strongest for an applied AI role." : "The work you explored, in the order you explored it." }), w.ids.forEach((u) => l.push(...Mr(e, u, n.persona, r)))), n.sections.questions) {
    const u = w.ids.flatMap((k) => (e.entity.get(k)?.questions ?? []).slice(0, 2).map((b) => `${ee(e, k)}: ${b}`)), f = t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing" || b.category === "verification").slice(0, 2).map((b) => `${b.label}: what is the closest thing you have done, and how would you close the gap?`)), v = Ke([...u, ...f]);
    v.length && (l.push({ t: "h1", text: xe.questions, lead: "Questions that test the evidence above rather than repeat it." }), l.push({ t: "bullets", items: v }));
  }
  if (n.sections.gaps) {
    l.push({ t: "h1", text: xe.gaps });
    const u = Ke(t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing").map((b) => `${b.label}: ${b.statement ?? "Not demonstrated in the evidence."}`))), f = u.length ? u : e.gaps.filter((k) => !k.verify).slice(0, 6).map((k) => `${k.name}: ${k.statement}`);
    l.push({ t: "h3", text: u.length ? "Not yet shown for the roles you checked" : "Not yet part of his work" }, { t: "bullets", items: f });
    const v = Fe(e, "learning");
    v?.takeaway && l.push({ t: "h3", text: "How he closes gaps" }, { t: "p", text: v.takeaway.text.replace(/^For your team: /, "") });
  }
  return l.push({ t: "h1", text: "About this document", keep: 150 }), l.push({ t: "p", text: `Generated in your browser by Interview My Work on ${a.links.site ?? "the portfolio"} from evidence version ${e.version}. Nothing you typed was uploaded to create it. Every claim links to its source, and the live workspace shows the full evidence trail for each one.`, muted: !0 }), l.push({ t: "links", items: [
    ...a.links.site ? [{ label: "Open Interview My Work", url: `${a.links.site.replace(/\/$/, "")}/#imw=ask` }] : [],
    { label: `Email ${a.first}`, url: `mailto:${a.email}` }
  ] }), { title: `${a.name}: evidence dossier (${r.label})`, nodes: l, filename: _n(e, n.persona, s) };
}
const ze = [20, 24, 31], Z = [90, 99, 110], Pi = [222, 227, 232], ge = [22, 117, 94], Rr = [242, 246, 245], lt = { direct: ge, related: [40, 104, 184], verification: [150, 98, 16], missing: [118, 124, 133] }, Lr = { direct: "DIRECT", related: "RELATED", verification: "TO VERIFY", missing: "NOT SHOWN" }, Pr = { direct: "direct evidence", related: "related evidence", verification: "verification required", missing: "not demonstrated" }, Fr = { artifact: ge, self: lt.related }, Gt = 612, Re = 792, L = 56, Lt = 64, Fi = 64, B = Gt - L * 2, Wr = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ", Wi = {
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
function Ae(e) {
  let t = "";
  for (const n of e) {
    if (n in Wi) {
      t += Wi[n];
      continue;
    }
    const r = n.codePointAt(0);
    if (r === 10 || r >= 32 && r <= 126 || r >= 161 && r <= 255 || Wr.includes(n)) {
      t += n;
      continue;
    }
    const s = n.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    [...s].every((a) => a.codePointAt(0) < 127) && (t += s);
  }
  return t.replace(/ {2,}/g, " ");
}
class Dr {
  constructor(t) {
    ui(this, "y", Lt);
    this.d = t;
  }
  font(t, n = "normal", r = ze) {
    this.d.setFont("helvetica", n), this.d.setFontSize(t), this.d.setTextColor(...r);
  }
  need(t) {
    this.y + t > Re - Fi && (this.d.addPage(), this.y = Lt);
  }
  split(t, n) {
    return this.d.splitTextToSize(Ae(t), n);
  }
  write(t, n = {}) {
    const { size: r = 10, style: s = "normal", color: a = ze, x: o = L, width: l = B, lh: p = 1.42, after: d = 0 } = n;
    this.font(r, s, a);
    const m = r * p;
    for (const g of this.split(t, l))
      this.need(m), this.d.text(g, o, this.y, { baseline: "top" }), this.y += m;
    this.y += d;
  }
  links(t, { size: n = 8.5, x: r = L, width: s = B } = {}) {
    this.font(n, "normal", ge);
    const a = n * 1.55, o = 14;
    let l = r;
    this.need(a);
    for (const p of t) {
      const d = Ae(p.label);
      let m = d;
      for (; this.d.getTextWidth(m) > s && m.length > 8; ) m = m.slice(0, -3);
      m !== d && (m = `${m.trimEnd()}…`);
      const g = this.d.getTextWidth(m);
      l > r && l + g > r + s && (this.y += a, this.need(a), l = r), this.d.text(m, l, this.y, { baseline: "top" }), this.d.link(l, this.y - 1, g, n + 2, { url: p.url }), this.d.setDrawColor(...ge), this.d.setLineWidth(0.4), this.d.line(l, this.y + n + 0.5, l + g, this.y + n + 0.5), l += g + o;
    }
    this.y += a;
  }
  rule(t = Pi, n = 0.6) {
    this.d.setDrawColor(...t), this.d.setLineWidth(n), this.d.line(L, this.y, L + B, this.y);
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
        this.write(t.text, { size: t.muted ? 9.5 : 10, color: t.muted ? Z : ze, after: 6 });
        return;
      case "note": {
        this.font(9);
        const s = this.split(t.text, B - 24).length * 9 * 1.42 + 14;
        s < Re - Lt - Fi && this.need(s);
        const a = this.y;
        n.setFillColor(...Rr), n.rect(L, a, B, s, "F"), n.setFillColor(...ge), n.rect(L, a, 2, s, "F"), this.y = a + 7, this.write(t.text, { size: 9, color: Z, x: L + 14, width: B - 24 }), this.y = Math.max(this.y, a + s) + 8;
        return;
      }
      case "kv": {
        for (const [s, a] of t.items) {
          this.need(14), this.font(8, "bold", Z);
          const o = this.split(s.toUpperCase(), 106), l = this.y;
          o.forEach((p, d) => n.text(p, L, l + 1.5 + d * 11, { baseline: "top" })), this.write(a, { size: 9.5, x: L + 118, width: B - 118 }), this.y > l && (this.y = Math.max(this.y, l + o.length * 11 + 2)), this.y += 4;
        }
        this.y += 2;
        return;
      }
      case "bullets":
        for (const r of t.items)
          this.need(14), this.font(9.5, "normal", ge), n.text("•", L + 2, this.y, { baseline: "top" }), this.write(r, { size: 9.5, x: L + 14, width: B - 14, after: 3 });
        this.y += 3;
        return;
      case "claim": {
        this.need(30), n.setFillColor(...Fr[t.tone]), n.circle(L + 4, this.y + 5.5, 2.6, "F"), this.write(t.text, { size: 9.5, x: L + 14, width: B - 14, after: 1 }), this.write(t.meta, { size: 8, color: Z, x: L + 14, width: B - 14 }), t.links.length && this.links(t.links, { size: 8, x: L + 14, width: B - 14 }), this.y += 5;
        return;
      }
      case "req": {
        this.need(26), this.font(7, "bold", lt[t.category]), n.text(Lr[t.category], L, this.y + 2, { baseline: "top" }), this.write(t.label, { size: 9.5, style: "bold", x: L + 70, width: B - 70, after: 1 }), t.detail && this.write(t.detail, { size: 8.5, color: Z, x: L + 70, width: B - 70 }), this.y += 5;
        return;
      }
      case "counts": {
        const r = ["direct", "related", "verification", "missing"].filter((o) => t.counts[o] > 0), s = r.reduce((o, l) => o + t.counts[l], 0);
        if (!s) return;
        this.need(34);
        let a = L;
        for (const o of r) {
          const l = B * t.counts[o] / s;
          n.setFillColor(...lt[o]), n.rect(a, this.y, Math.max(l - 1.5, 1), 6, "F"), a += l;
        }
        this.y += 12, a = L, this.font(8.5, "normal", Z);
        for (const o of r) {
          const l = `${t.counts[o]} ${Pr[o]}`;
          n.setFillColor(...lt[o]), n.rect(a, this.y + 1.5, 6, 6, "F"), n.text(l, a + 10, this.y, { baseline: "top" }), a += n.getTextWidth(l) + 26;
        }
        this.y += 18;
        return;
      }
      case "table": {
        const r = t.head.length;
        this.font(9);
        const s = t.head.map((d, m) => Math.max(n.getTextWidth(Ae(d)), ...t.rows.map((g) => n.getTextWidth(Ae(g[m] ?? "")))) + 12);
        let a;
        if (s.reduce((d, m) => d + m, 0) <= B)
          a = [...s], a[r - 1] += B - s.reduce((d, m) => d + m, 0);
        else {
          const d = Math.min(s[0], 140);
          a = [d, ...Array(r - 1).fill((B - d) / (r - 1))];
        }
        const o = a.map((d, m) => L + a.slice(0, m).reduce((g, c) => g + c, 0)), l = (d, m) => {
          this.font(m ? 7.5 : 9, "bold", m ? Z : ze);
          const g = d.map((y, w) => this.split(m ? y.toUpperCase() : y, a[w] - 10)), c = (m ? 7.5 : 9) * 1.38;
          return { wrapped: g, lh: c, h: Math.max(...g.map((y) => y.length)) * c + 8 };
        }, p = (d, m) => {
          const { wrapped: g, lh: c, h: y } = l(d, m);
          this.need(m && t.rows.length ? y + l(t.rows[0], !1).h : y), g.forEach((w, u) => {
            this.font(m ? 7.5 : 9, m || u === 0 ? "bold" : "normal", m ? Z : ze), w.forEach((f, v) => n.text(f, o[u], this.y + 4 + v * c, { baseline: "top" }));
          }), this.y += y, this.rule();
        };
        p(t.head, !0), t.rows.forEach((d) => p(d, !1)), this.y += 8;
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
      n.setPage(s), this.font(7.5, "normal", Z), n.text(Ae(t), L, Re - 38, { baseline: "top" }), n.text(`Page ${s} of ${r}`, Gt - L, Re - 38, { baseline: "top", align: "right" }), n.setDrawColor(...Pi), n.setLineWidth(0.6), n.line(L, Re - 46, Gt - L, Re - 46);
  }
}
async function Hr(e, t) {
  const { jsPDF: n } = await import("./chunks/jspdf.es.min-0Bk908vi.js"), r = new n({ unit: "pt", format: "letter", compress: !0 });
  r.setProperties({ title: Ae(t.title), subject: "Evidence dossier", author: Ae(t.author), creator: "Interview My Work" });
  const s = new Dr(r);
  for (const a of e) s.node(a);
  return s.finish(t.footer), r;
}
function Nr(e, t) {
  const n = URL.createObjectURL(e), r = document.createElement("a");
  r.href = n, r.download = t, r.rel = "noopener", document.body.append(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(n), 6e4);
}
function Br() {
  const { kb: e, persona: t, session: n, go: r } = M(), [s, a] = E(t);
  z(() => a(t), [t]);
  const o = n.turns.filter((f) => f.a), l = he(() => kn(e, n, s), [e, n, s]), [p, d] = E({ qa: !0, roles: !0, projects: !0, questions: !0, gaps: !0 }), [m, g] = E({ kind: "idle" });
  z(() => {
    import("./chunks/jspdf.es.min-0Bk908vi.js").catch(() => {
    });
  }, []);
  const c = {
    qa: {
      text: `${o.length} question${o.length === 1 ? "" : "s"} with answers and the evidence each one cited`,
      empty: "Ask a question first and it will be included here.",
      items: o.map((f) => f.q)
    },
    roles: {
      text: `${n.analyses.length} analys${n.analyses.length === 1 ? "is" : "es"}, requirement by requirement`,
      empty: "Evaluate a role or paste a job description to include it here.",
      items: n.analyses.map((f) => f.title)
    },
    projects: {
      text: l.defaulted ? "You have not opened a project yet, so this includes the strongest work for an applied AI role:" : "The work you explored, with verified evidence, limitations and links:",
      items: l.ids.map((f) => ee(e, f))
    },
    questions: { text: "Questions that test the evidence rather than repeat it, including your gaps" },
    gaps: { text: "What he hasn't done yet, and how he closes gaps" }
  }, y = (f) => f === "qa" ? o.length > 0 : f === "roles" ? n.analyses.length > 0 : !0, w = _n(e, s), u = async () => {
    g({ kind: "busy" });
    try {
      const f = Tr(e, n, { persona: s, sections: p }), v = await Hr(f.nodes, { title: f.title, author: e.subject.name, footer: $r(e, s) });
      Nr(v.output("blob"), f.filename), G("dossier_downloaded", { persona: s, questions: o.length, analyses: n.analyses.length }), g({ kind: "done", file: f.filename });
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
    /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Perspective", children: e.personas.map((f) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": s === f.id, class: s === f.id ? "is-on" : "", onClick: () => a(f.id), children: f.label }, f.id)) }),
    /* @__PURE__ */ i("p", { class: "imw-help imw-export-intro", children: kt[s].intro }),
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Include" }),
    /* @__PURE__ */ i("ul", { class: "imw-export-list", children: [
      /* @__PURE__ */ i("li", { class: "is-fixed", children: [
        /* @__PURE__ */ i("span", { class: "imw-export-check", "aria-hidden": "true" }),
        /* @__PURE__ */ i("span", { children: [
          /* @__PURE__ */ i("strong", { children: "Contact details and experience at a glance" }),
          /* @__PURE__ */ i("small", { children: "Always included: roles and dates, education, and the skills that public work demonstrates." })
        ] })
      ] }),
      Object.keys(xe).map((f) => {
        const v = c[f], k = y(f) && p[f];
        return /* @__PURE__ */ i("li", { class: y(f) ? "" : "is-empty", children: [
          /* @__PURE__ */ i("label", { children: [
            /* @__PURE__ */ i("input", { type: "checkbox", checked: k, disabled: !y(f), onChange: (b) => d({ ...p, [f]: b.target.checked }) }),
            /* @__PURE__ */ i("span", { children: [
              /* @__PURE__ */ i("strong", { children: xe[f] }),
              /* @__PURE__ */ i("small", { children: y(f) ? v.text : v.empty }),
              y(f) && v.items && v.items.length > 0 && /* @__PURE__ */ i("span", { class: "imw-export-items", children: [
                v.items.slice(0, 6).map((b) => /* @__PURE__ */ i("em", { children: b }, b)),
                v.items.length > 6 && /* @__PURE__ */ i("em", { children: [
                  "+",
                  v.items.length - 6,
                  " more"
                ] })
              ] })
            ] })
          ] }),
          !y(f) && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r(f === "qa" ? "ask" : "role"), children: f === "qa" ? "Ask a question →" : "Evaluate a role →" })
        ] }, f);
      })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-export-go", children: [
      /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: u, disabled: m.kind === "busy", children: m.kind === "busy" ? "Building PDF…" : "Download PDF" }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: w })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", role: "status", "aria-live": "polite", children: [
      m.kind === "done" && `Downloaded ${m.file}. You can keep exploring and download again; the PDF always reflects the whole session.`,
      m.kind === "error" && "The PDF could not be built. Check your connection and try again; the rest of the workspace still works.",
      m.kind !== "done" && m.kind !== "error" && "Built in your browser. Nothing you typed or pasted is uploaded, and pasted job descriptions appear only as the requirements that were detected."
    ] })
  ] });
}
function Or() {
  const e = M(), { inspect: t, setInspect: n } = e;
  return /* @__PURE__ */ i("div", { class: "imw-evidence", children: [
    /* @__PURE__ */ i("div", { class: "imw-evidence-head", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Evidence" }),
      t && /* @__PURE__ */ i("button", { class: "imw-icon imw-evidence-close", onClick: () => n(null), "aria-label": "Close evidence", children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-evidence-body", "aria-live": "polite", children: [
      !t && /* @__PURE__ */ i(zr, {}),
      t?.kind === "claim" && /* @__PURE__ */ i(Ur, { id: t.id }),
      t?.kind === "node" && /* @__PURE__ */ i(Vr, { arch: t.arch, node: t.node }),
      t?.kind === "req" && /* @__PURE__ */ i(Gr, {}),
      t?.kind === "entity" && /* @__PURE__ */ i(Qr, { id: t.id }),
      t?.kind === "group" && /* @__PURE__ */ i(Kr, { id: t.id }),
      t?.kind === "basis" && /* @__PURE__ */ i(Jr, {})
    ] })
  ] });
}
function zr() {
  const { kb: e } = M(), t = e.claims.reduce((n, r) => n + (D(r) ? r.code?.length ?? 0 : 0), 0);
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
function Ur({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.claim.get(e);
  if (!r) return null;
  const s = t.entity.get(r.entity), a = t.architectures.flatMap((l) => l.nodes.filter((p) => p.detail.claims.includes(e)).map((p) => ({ a: l, n: p }))), o = [...t.decisions, ...t.failures].filter((l) => l.claims.includes(e));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-st ${ft(r)}`, children: [
      /* @__PURE__ */ i(Pe, { cls: ft(r) }),
      " ",
      un(r)
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
      const p = t.sources.find((d) => d.id === l);
      return /* @__PURE__ */ i("li", { children: p.url && p.public ? /* @__PURE__ */ i("a", { href: p.url, target: "_blank", rel: "noopener", children: [
        p.title,
        " ↗"
      ] }) : /* @__PURE__ */ i("span", { children: [
        p.title,
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
      /* @__PURE__ */ i("ul", { class: "imw-sources", children: a.map(({ a: l, n: p }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => n({ kind: "node", arch: l.id, node: p.id }), children: [
        l.title,
        " → ",
        p.label
      ] }) }, l.id + p.id)) })
    ] }) : null,
    o.length ? /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Also referenced by: ",
      o.map((l) => l.title).join("; ")
    ] }) : null
  ] });
}
function Vr({ arch: e, node: t }) {
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
function Gr() {
  const { kb: e, inspect: t } = M();
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
    n.category === "direct" && n.strength === "self_reported" && /* @__PURE__ */ i("p", { class: "imw-note", children: "Supported by self-reported employment experience; no public artifact." }),
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
function Qr({ id: e }) {
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
      t.archByEntity.has(e) && /* @__PURE__ */ i(ot, { a: { kind: "mode", label: "X-Ray", target: "xray", arg: e } }),
      /* @__PURE__ */ i(ot, { a: { kind: "anchor", label: "Jump to section", target: r.anchor } }),
      r.links.slice(0, 2).map((a) => /* @__PURE__ */ i(ot, { a: { kind: "url", label: a.label, target: a.url } }, a.url))
    ] }),
    /* @__PURE__ */ i(ne, { ids: s, title: "Key evidence", compact: !0 })
  ] });
}
function Kr({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.groups.find((a) => a.id === e);
  if (!r) return null;
  const s = t.skills.filter((a) => a.group === e).map((a) => ({ s: a, cov: le(t, a.id) }));
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
function Jr() {
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
function Yr() {
  const { kb: e, persona: t, setPersona: n, coverage: r, setCoverage: s, toggleLens: a, lensOn: o, go: l } = M(), p = e.personas.find((d) => d.id === t);
  return /* @__PURE__ */ i("div", { class: "imw-rail", children: [
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i($e, { children: "Answer depth" }),
      /* @__PURE__ */ i("div", { class: "imw-personas", role: "radiogroup", "aria-label": "Who is asking", children: e.personas.map((d) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": t === d.id, class: t === d.id ? "is-on" : "", onClick: () => n(d.id), children: d.label }, d.id)) }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        p.focus,
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
        /* @__PURE__ */ i(_t, { counts: r.counts, compact: !0 }),
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
const Di = [
  { id: "ask", label: "Ask", hint: "Questions answered from verified evidence" },
  { id: "role", label: "Role fit", hint: "Evidence coverage for a role or job description" },
  { id: "xray", label: "X-Ray", hint: "Explore each system component by component" },
  { id: "map", label: "Map", hint: "The whole body of work as an evidence graph" },
  { id: "lab", label: "Proof lab", hint: "Replays, break-it tests and live numbers" },
  { id: "brief", label: "Brief", hint: "A 10-minute technical interview brief" },
  { id: "connect", label: "Connect your AI", hint: "Use this evidence from Claude, Cursor or VS Code over MCP" }
], Xr = /* @__PURE__ */ new Set(["retrieval", "no_evidence", "topic", "topic_answer", "reasoning", "entity", "focused", "skill", "personally", "scale", "challenge", "level", "overview", "shipped", "beyond_wrappers", "evaluation", "strongest"]), Zr = /* @__PURE__ */ new Set(["entity", "claims", "xray", "chart", "trace", "decisions", "failures"]);
function ea({ kb: e, initial: t, register: n }) {
  const [r, s] = E(!0), [a, o] = E("ask"), [l, p] = E(), [d, m] = E("recruiter"), [g, c] = E(null), [y, w] = E(null), [u, f] = E([]), [v, k] = E([]), [b, _] = E([]), [h, x] = E("checking"), [C, q] = E(!1), S = ye(null), H = ye(null), K = ye(!1), re = ve(($, I) => {
    if (w($), !$) return;
    const X = (U) => `${U.source}|${U.title}|${U.requirements.map((ce) => ce.id).join()}`;
    f((U) => {
      const ce = U.findIndex((F) => F === I || $.source === "role" && F.source === "role" && F.roleId === $.roleId || X(F) === X($));
      return ce >= 0 ? U.map((F, Be) => Be === ce ? $ : F) : [...U, $];
    });
  }, []), pe = ve(($) => {
    $ && k((I) => I.includes($) ? I : [...I, $]);
  }, []), J = ve(($, I) => {
    o($), p(I), $ === "xray" && G("xray_opened", { project: I ?? "dia" }), S.current?.querySelector(".imw-main")?.scrollTo({ top: 0 });
  }, []), me = ve(($) => {
    H.current = $.trigger ?? document.activeElement, s(!0);
    const I = Di.find((X) => X.id === $.mode)?.id ?? "ask";
    $.mode === "transform" && $.arg ? J("role", $.arg) : J(I, $.arg), G("interview_my_work_opened", { mode: I });
  }, [J]);
  z(() => {
    n(me), me(t);
  }, []), z(() => {
    r && !K.current && (K.current = !0, Hs(x));
  }, [r]), z(() => {
    const $ = document.querySelector(".wrap"), I = document.querySelector(".imw-fab");
    r ? (document.documentElement.classList.add("imw-open"), $?.setAttribute("inert", ""), I?.setAttribute("inert", ""), requestAnimationFrame(() => S.current?.querySelector("[data-autofocus]")?.focus() ?? S.current?.focus())) : (document.documentElement.classList.remove("imw-open"), $?.removeAttribute("inert"), I?.removeAttribute("inert"), H.current?.focus?.());
  }, [r]);
  const He = ve(() => s(!1), []), qn = ($) => {
    if ($.key === "Escape") {
      $.preventDefault(), g && matchMedia("(max-width: 1100px)").matches ? c(null) : He();
      return;
    }
    if ($.key !== "Tab" || !S.current) return;
    const I = [...S.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((ce) => ce.offsetParent !== null);
    if (!I.length) return;
    const X = I[0], U = I[I.length - 1];
    $.shiftKey && document.activeElement === X ? ($.preventDefault(), U.focus()) : !$.shiftKey && document.activeElement === U && ($.preventDefault(), X.focus());
  }, li = ve(($) => {
    s(!1), G("project_opened_from_ai", { anchor: $ }), Os($, () => s(!0));
  }, []), ci = ve(($, I) => {
    const X = $ ?? !C, U = I ?? y;
    X && U ? (I && re(I), Bs(e, U, { reopen: () => {
      s(!0), J("role");
    }, restore: () => q(!1) }), q(!0), s(!1), G("portfolio_lens_applied", { source: U.source })) : (zt(), q(!1));
  }, [C, y, e, J, re]), di = ve(async ($) => {
    const I = $.trim();
    if (!I) return;
    J("ask");
    const X = Date.now(), U = [...b].reverse().find((T) => T.a?.entities.length)?.a?.entities, ce = [...b].reverse().find((T) => T.a), F = bs(e, I, { persona: d, roleId: y?.roleId, lastEntities: U, lastTopic: ce?.a?.topic, lastQuestion: ce?.q, lastIntent: ce?.a?.intent }), Be = ei(I);
    if (F.intent === "jd" || F.intent === "role") {
      const T = F.blocks.find((de) => de.type === "coverage");
      T && T.type === "coverage" && re(T.analysis), Be && G("jd_analyzed", { requirements: T && T.type === "coverage" ? T.analysis.requirements.length : 0 });
    }
    const xt = h === "ready" && Xr.has(F.intent);
    if (_((T) => [...T, { id: X, q: Be ? "Job description (pasted)" : I, a: xt ? void 0 : F, pending: xt }]), Be && h === "ready" && dn(I).then((T) => {
      if (!T.length) return;
      const de = ut(e, I, T), fe = F.blocks.find((Ct) => Ct.type === "coverage");
      re(de, fe && fe.type === "coverage" ? fe.analysis : void 0), _((Ct) => Ct.map((je) => je.id === X && je.a ? { ...je, a: { ...je.a, blocks: je.a.blocks.map((qt) => qt.type === "coverage" ? { ...qt, analysis: de } : qt), refined: !0 } } : je));
    }).catch(() => {
    }), !xt) return;
    const An = b.filter((T) => T.a).slice(-3).map((T) => ({ q: T.q, cites: T.a.basis?.retrieved?.slice(0, 8) ?? [] }));
    let $t;
    try {
      const T = await Ns(e, I, d, An, y?.roleId, F.topic), de = F.blocks.filter((fe) => Zr.has(fe.type)).map((fe) => fe.type === "claims" ? { ...fe, title: "Sources", collapsed: !0 } : fe);
      $t = { ...T, blocks: [...T.blocks, ...de], actions: F.actions, followups: T.followups.length ? T.followups : F.followups, entities: [.../* @__PURE__ */ new Set([...T.entities, ...F.entities])], topic: F.topic };
    } catch {
      $t = { ...F, blocks: [{ type: "note", tone: "info", text: "The AI service did not return a validated answer, so this one comes from the offline evidence engine." }, ...F.blocks] };
    }
    _((T) => T.map((de) => de.id === X ? { ...de, a: $t, pending: !1 } : de));
  }, [e, d, y, h, b, J, re]), hi = he(() => ({ turns: b, analyses: u, seen: v }), [b, u, v]), Ne = b.filter(($) => $.a).length + u.length, En = he(() => ({
    kb: e,
    persona: d,
    setPersona: m,
    mode: a,
    go: J,
    modeArg: l,
    inspect: g,
    setInspect: ($) => {
      c($), $ && (G("evidence_opened", { kind: $.kind }), $.kind === "entity" ? pe($.id) : $.kind === "claim" ? pe(e.claim.get($.id)?.entity) : $.kind === "node" && pe(e.architectures.find((I) => I.id === $.arch)?.entity));
    },
    coverage: y,
    setCoverage: re,
    session: hi,
    noteEntity: pe,
    ask: di,
    api: h,
    jump: li,
    lensOn: C,
    toggleLens: ci,
    close: He
  }), [e, d, a, J, l, g, y, re, hi, pe, di, h, li, C, ci, He]);
  return /* @__PURE__ */ i(hn.Provider, { value: En, children: /* @__PURE__ */ i("div", { class: "imw", hidden: !r, children: [
    /* @__PURE__ */ i("div", { class: "imw-backdrop", onClick: He }),
    /* @__PURE__ */ i("div", { class: "imw-dialog", ref: S, role: "dialog", "aria-modal": "true", "aria-labelledby": "imw-title", tabIndex: -1, onKeyDown: qn, children: [
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
        /* @__PURE__ */ i("div", { class: "imw-tabs", role: "tablist", "aria-label": "Workspace views", children: Di.map(($) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": a === $.id, class: a === $.id ? "is-on" : "", title: $.hint, onClick: () => J($.id), children: $.label }, $.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-top-right", children: [
          /* @__PURE__ */ i(ta, { status: h }),
          /* @__PURE__ */ i(
            "button",
            {
              class: `imw-dl${a === "export" ? " is-on" : ""}`,
              onClick: () => J("export"),
              title: "Download what you explored as a PDF",
              "aria-label": Ne ? `Download PDF (${Ne} item${Ne === 1 ? "" : "s"} explored)` : "Download PDF",
              children: [
                /* @__PURE__ */ i("svg", { viewBox: "0 0 16 16", width: "14", height: "14", "aria-hidden": "true", children: /* @__PURE__ */ i("path", { d: "M8 2v8m0 0L4.8 6.8M8 10l3.2-3.2M3 13h10", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
                /* @__PURE__ */ i("span", { class: "imw-dl-label", children: "PDF" }),
                Ne > 0 && /* @__PURE__ */ i("span", { class: "imw-dl-count", "aria-hidden": "true", children: Ne })
              ]
            }
          ),
          /* @__PURE__ */ i("select", { class: "imw-persona-mobile", "aria-label": "Answer depth", value: d, onChange: ($) => m($.target.value), children: e.personas.map(($) => /* @__PURE__ */ i("option", { value: $.id, children: $.label }, $.id)) }),
          /* @__PURE__ */ i("button", { class: "imw-icon", onClick: He, "aria-label": "Close Interview My Work", children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { class: "imw-body", children: [
        /* @__PURE__ */ i("aside", { class: "imw-left", "aria-label": "Context", children: /* @__PURE__ */ i(Yr, {}) }),
        /* @__PURE__ */ i("main", { class: "imw-main", id: "imw-main", children: [
          a === "ask" && /* @__PURE__ */ i(ar, { turns: b }),
          a === "role" && /* @__PURE__ */ i(cr, {}),
          a === "xray" && /* @__PURE__ */ i(dr, {}),
          a === "map" && /* @__PURE__ */ i(gr, {}),
          a === "lab" && /* @__PURE__ */ i(er, {}),
          a === "brief" && /* @__PURE__ */ i(wr, {}),
          a === "connect" && /* @__PURE__ */ i(br, {}),
          a === "export" && /* @__PURE__ */ i(Br, {})
        ] }),
        /* @__PURE__ */ i("aside", { class: `imw-right${g ? " has-item" : ""}`, "aria-label": "Evidence", children: /* @__PURE__ */ i(Or, {}) })
      ] })
    ] })
  ] }) });
}
function ta({ status: e }) {
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
let Pt = null, it = null, Ft = null;
async function na(e = {}) {
  Pt ?? (Pt = Yn(gn("evidence.json")).catch((n) => {
    throw Pt = null, n;
  }));
  const t = await Pt;
  if (Ft) {
    Ft(e);
    return;
  }
  it = document.createElement("div"), it.id = "imw-host", document.body.appendChild(it), Wn(/* @__PURE__ */ i(ea, { kb: t, initial: e, register: (n) => Ft = n }), it);
}
export {
  na as open
};
