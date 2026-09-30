var Dn = Object.defineProperty;
var Fn = (e, t, n) => t in e ? Dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fi = (e, t, n) => Fn(e, typeof t != "symbol" ? t + "" : t, n);
var yt, R, Ui, ke, gi, Vi, Gi, St, rt, Ke, Ki, Yt, Wt, Ht, Qi, ht = {}, ut = [], Nn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, vt = Array.isArray;
function we(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Jt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Wn(e, t, n) {
  var r, s, a, o = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? s = t[a] : o[a] = t[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? yt.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
  return at(e, o, r, s, null);
}
function at(e, t, n, r, s) {
  var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Ui, __i: -1, __u: 0 };
  return s == null && R.vnode != null && R.vnode(a), a;
}
function oe(e) {
  return e.children;
}
function ot(e, t) {
  this.props = e, this.context = t;
}
function Ie(e, t) {
  if (t == null) return e.__ ? Ie(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ie(e) : null;
}
function Hn(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, r = [], s = [], a = we({}, t);
    a.__v = t.__v + 1, R.vnode && R.vnode(a), Xt(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? Ie(t), !!(32 & t.__u), s), a.__v = t.__v, a.__.__k[a.__i] = a, en(r, a, s), t.__e = t.__ = null, a.__e != n && Yi(a);
  }
}
function Yi(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Yi(e);
}
function Ot(e) {
  (!e.__d && (e.__d = !0) && ke.push(e) && !pt.__r++ || gi != R.debounceRendering) && ((gi = R.debounceRendering) || Vi)(pt);
}
function pt() {
  try {
    for (var e, t = 1; ke.length; ) ke.length > t && ke.sort(Gi), e = ke.shift(), t = ke.length, Hn(e);
  } finally {
    ke.length = pt.__r = 0;
  }
}
function Ji(e, t, n, r, s, a, o, l, p, c, f) {
  var w, h, y, g, d, m, v = r && r.__k || ut, k = t.length;
  for (p = On(n, t, v, p, k), w = 0; w < k; w++) (y = n.__k[w]) != null && (h = y.__i != -1 && v[y.__i] || ht, y.__i = w, m = Xt(e, y, h, s, a, o, l, p, c, f), g = y.__e, y.ref && h.ref != y.ref && (h.ref && Zt(h.ref, null, y), f.push(y.ref, y.__c || g, y)), d == null && g != null && (d = g), 4 & y.__u ? (p = Xi(y, p, e), h.__e && (h.__e = null)) : typeof y.type == "function" && m !== void 0 ? p = m : g && (p = g.nextSibling), y.__u &= -7);
  return n.__e = d, p;
}
function On(e, t, n, r, s) {
  var a, o, l, p, c, f = n.length, w = f, h = 0;
  for (e.__k = new Array(s), a = 0; a < s; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = at(null, o, null, null, null) : vt(o) ? o = e.__k[a] = at(oe, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = at(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, p = a + h, o.__ = e, o.__b = e.__b + 1, l = null, (c = o.__i = Bn(o, n, p, w)) != -1 && (w--, (l = n[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (s > f ? h-- : s < f && h++), typeof o.type != "function" && (o.__u |= 4)) : c != p && (c == p - 1 ? h-- : c == p + 1 ? h++ : (c > p ? h-- : h++, o.__u |= 4))) : e.__k[a] = null;
  if (w) for (a = 0; a < f; a++) (l = n[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = Ie(l)), nn(l, l));
  return r;
}
function Xi(e, t, n) {
  var r, s;
  if (typeof e.type == "function") {
    for (r = e.__k, s = 0; r && s < r.length; s++) r[s] && (r[s].__ = e, t = Xi(r[s], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = Ie(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Bn(e, t, n, r) {
  var s, a, o, l = e.key, p = e.type, c = t[n], f = c != null && (2 & c.__u) == 0;
  if (c === null && l == null || f && l == c.key && p == c.type) return n;
  if (r > (f ? 1 : 0)) {
    for (s = n - 1, a = n + 1; s >= 0 || a < t.length; ) if ((c = t[o = s >= 0 ? s-- : a++]) != null && (2 & c.__u) == 0 && l == c.key && p == c.type) return o;
  }
  return -1;
}
function wi(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Nn.test(t) ? n : n + "px";
}
function et(e, t, n, r, s) {
  var a, o;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || wi(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || wi(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Ki, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r ? n[Ke] = r[Ke] : (n[Ke] = Yt, e.addEventListener(t, a ? Ht : Wt, a)) : e.removeEventListener(t, a ? Ht : Wt, a);
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
function yi(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[rt] == null) t[rt] = Yt++;
      else if (t[rt] < n[Ke]) return;
      return n(R.event ? R.event(t) : t);
    }
  };
}
function Xt(e, t, n, r, s, a, o, l, p, c) {
  var f, w, h, y, g, d, m, v, k, b, _, u, x, C, E, S, W = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (p = !!(32 & n.__u), a = [l = t.__e = n.__e]), (f = R.__b) && f(t);
  e: if (typeof W == "function") {
    w = o.length;
    try {
      if (k = t.props, b = W.prototype && W.prototype.render, _ = (f = W.contextType) && r[f.__c], u = f ? _ ? _.props.value : f.__ : r, n.__c ? v = (h = t.__c = n.__c).__ = h.__E : (b ? t.__c = h = new W(k, u) : (t.__c = h = new ot(k, u), h.constructor = W, h.render = Un), _ && _.sub(h), h.state || (h.state = {}), h.__n = r, y = h.__d = !0, h.__h = [], h._sb = []), b && h.__s == null && (h.__s = h.state), b && W.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = we({}, h.__s)), we(h.__s, W.getDerivedStateFromProps(k, h.__s))), g = h.props, d = h.state, h.__v = t, y) b && W.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), b && h.componentDidMount != null && h.__h.push(h.componentDidMount);
      else {
        if (b && W.getDerivedStateFromProps == null && k !== g && h.componentWillReceiveProps != null && h.componentWillReceiveProps(k, u), t.__v == n.__v || !h.__e && h.shouldComponentUpdate != null && h.shouldComponentUpdate(k, h.__s, u) === !1) {
          t.__v != n.__v && (h.props = k, h.state = h.__s, h.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(Q) {
            Q && (Q.__ = t);
          }), ut.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && o.push(h), l = Ie(n);
          break e;
        }
        h.componentWillUpdate != null && h.componentWillUpdate(k, h.__s, u), b && h.componentDidUpdate != null && h.__h.push(function() {
          h.componentDidUpdate(g, d, m);
        });
      }
      if (h.context = u, h.props = k, h.__P = e, h.__e = !1, x = R.__r, C = 0, b) h.state = h.__s, h.__d = !1, x && x(t), f = h.render(h.props, h.state, h.context), ut.push.apply(h.__h, h._sb), h._sb = [];
      else do
        h.__d = !1, x && x(t), f = h.render(h.props, h.state, h.context), h.state = h.__s;
      while (h.__d && ++C < 25);
      h.state = h.__s, h.getChildContext != null && (r = we(we({}, r), h.getChildContext())), b && !y && h.getSnapshotBeforeUpdate != null && (m = h.getSnapshotBeforeUpdate(g, d)), E = f != null && f.type === oe && f.key == null ? tn(f.props.children) : f, l = Ji(e, vt(E) ? E : [E], t, n, r, s, a, o, l, p, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
    } catch (Q) {
      if (o.length = w, t.__v = null, p || a != null) {
        if (Q.then) {
          for (t.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
          a != null && (a[a.indexOf(l)] = null), t.__e = l;
        } else if (a != null) for (S = a.length; S--; ) Jt(a[S]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), Q.then || Zi(t), R.__e(Q, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = zn(n.__e, t, n, r, s, a, o, p, c);
  return (f = R.diffed) && f(t), 128 & t.__u ? void 0 : l;
}
function Zi(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Zi));
}
function en(e, t, n) {
  for (var r = 0; r < n.length; r++) Zt(n[r], n[++r], n[++r]);
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
function tn(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : vt(e) ? e.map(tn) : e.constructor !== void 0 ? null : we({}, e);
}
function zn(e, t, n, r, s, a, o, l, p) {
  var c, f, w, h, y, g, d, m = n.props || ht, v = t.props, k = t.type;
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
    if (a = k == "textarea" && v.defaultValue != null ? null : a && yt.call(e.childNodes), !l && a != null) for (m = {}, c = 0; c < e.attributes.length; c++) m[(y = e.attributes[c]).name] = y.value;
    for (c in m) y = m[c], c == "dangerouslySetInnerHTML" ? w = y : c == "children" || c in v || c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v || et(e, c, null, y, s);
    for (c in v) y = v[c], c == "children" ? h = y : c == "dangerouslySetInnerHTML" ? f = y : c == "value" ? g = y : c == "checked" ? d = y : l && typeof y != "function" || m[c] === y || et(e, c, y, m[c], s);
    if (f) l || w && (f.__html == w.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (w && (e.innerHTML = ""), Ji(t.type == "template" ? e.content : e, vt(h) ? h : [h], t, n, r, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, a, o, a ? a[0] : n.__k && Ie(n, 0), l, p), a != null) for (c = a.length; c--; ) Jt(a[c]);
    l && k != "textarea" || (c = "value", k == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[c] || k == "progress" && !g || k == "option" && g != m[c]) && et(e, c, g, m[c], s), c = "checked", d != null && d != e[c] && et(e, c, d, m[c], s));
  }
  return e;
}
function Zt(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    R.__e(s, n);
  }
}
function nn(e, t, n) {
  var r, s;
  if (R.unmount && R.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || Zt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      R.__e(a, t);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = e.__k) for (s = 0; s < r.length; s++) r[s] && nn(r[s], t, n || typeof e.type != "function");
  n || Jt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Un(e, t, n) {
  return this.constructor(e, n);
}
function Vn(e, t, n) {
  var r, s, a, o;
  t == document && (t = document.documentElement), R.__ && R.__(e, t), s = (r = !1) ? null : t.__k, a = [], o = [], Xt(t, e = t.__k = Wn(oe, null, [e]), s || ht, ht, t.namespaceURI, s ? null : t.firstChild ? yt.call(t.childNodes) : null, a, s ? s.__e : t.firstChild, r, o), en(a, e, o), e.props.children = null;
}
function Gn(e) {
  function t(n) {
    var r, s;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (s = {})[t.__c] = this, this.getChildContext = function() {
      return s;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && r.forEach(function(o) {
        o.__e = !0, Ot(o);
      });
    }, this.sub = function(a) {
      r.add(a);
      var o = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        r && r.delete(a), o && o.call(a);
      };
    }), n.children;
  }
  return t.__c = "__cC" + Qi++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
yt = ut.slice, R = { __e: function(e, t, n, r) {
  for (var s, a, o; t = t.__; ) if ((s = t.__c) && !s.__) try {
    if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(e)), o = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, r || {}), o = s.__d), o) return s.__E = s;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Ui = 0, ot.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = we({}, this.state), typeof e == "function" && (e = e(we({}, n), this.props)), e && we(n, e), e != null && this.__v && (t && this._sb.push(t), Ot(this));
}, ot.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ot(this));
}, ot.prototype.render = oe, ke = [], Vi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Gi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pt.__r = 0, St = Math.random().toString(8), rt = "__d" + St, Ke = "__a" + St, Ki = /(PointerCapture)$|Capture$/i, Yt = 0, Wt = yi(!1), Ht = yi(!0), Qi = 0;
var Kn = 0;
function i(e, t, n, r, s, a) {
  t || (t = {});
  var o, l, p = t;
  if ("ref" in p) for (l in p = {}, t) l == "ref" ? o = t[l] : p[l] = t[l];
  var c = { type: e, props: p, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Kn, __i: -1, __u: 0, __source: s, __self: a };
  if (typeof e == "function" && (o = e.defaultProps)) for (l in o) p[l] === void 0 && (p[l] = o[l]);
  return R.vnode && R.vnode(c), c;
}
var Me, P, It, vi, Qe = 0, sn = [], F = R, bi = F.__b, _i = F.__r, ki = F.diffed, xi = F.__c, $i = F.unmount, Ci = F.__;
function Ze(e, t) {
  F.__h && F.__h(P, e, Qe || t), Qe = 0;
  var n = P.__H || (P.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function q(e) {
  return Qe = 1, Qn(rn, e);
}
function Qn(e, t, n) {
  var r = Ze(Me++, 2);
  if (r.t = e, !r.__c && (r.__ = [rn(void 0, t), function(l) {
    var p = r.__N ? r.__N[0] : r.__[0], c = r.t(p, l);
    p !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = P, !P.__f)) {
    var s = function(l, p, c) {
      if (!r.__c.__H) return !0;
      var f = !1, w = r.__c.props !== l;
      if (r.__c.__H.__.some(function(y) {
        if (y.__N) {
          f = !0;
          var g = y.__[0];
          y.__ = y.__N, y.__N = void 0, g !== y.__[0] && (w = !0);
        }
      }), a) {
        var h = a.call(this, l, p, c);
        return f ? h || w : h;
      }
      return !f || w;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate, o = P.componentWillUpdate;
    P.componentWillUpdate = function(l, p, c) {
      if (this.__e) {
        var f = a;
        a = void 0, s(l, p, c), a = f;
      }
      o && o.call(this, l, p, c);
    }, P.shouldComponentUpdate = s;
  }
  return r.__N || r.__;
}
function z(e, t) {
  var n = Ze(Me++, 3);
  !F.__s && ei(n.__H, t) && (n.__ = e, n.u = t, P.__H.__h.push(n));
}
function Yn(e, t) {
  var n = Ze(Me++, 4);
  !F.__s && ei(n.__H, t) && (n.__ = e, n.u = t, P.__h.push(n));
}
function ye(e) {
  return Qe = 5, he(function() {
    return { current: e };
  }, []);
}
function he(e, t) {
  var n = Ze(Me++, 7);
  return ei(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ve(e, t) {
  return Qe = 8, he(function() {
    return e;
  }, t);
}
function Jn(e) {
  var t = P.context[e.__c], n = Ze(Me++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(P)), t.props.value) : e.__;
}
function Xn() {
  for (var e; e = sn.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(lt), t.__h.some(Bt), t.__h = [];
    } catch (n) {
      t.__h = [], F.__e(n, e.__v);
    }
  }
}
F.__b = function(e) {
  P = null, bi && bi(e);
}, F.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ci && Ci(e, t);
}, F.__r = function(e) {
  _i && _i(e), Me = 0;
  var t = (P = e.__c).__H;
  t && (It === P ? (t.__h = [], P.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(lt), t.__h.some(Bt), t.__h = [], Me = 0)), It = P;
}, F.diffed = function(e) {
  ki && ki(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (sn.push(t) !== 1 && vi === F.requestAnimationFrame || ((vi = F.requestAnimationFrame) || Zn)(Xn)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), It = P = null;
}, F.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(lt), n.__h = n.__h.filter(function(r) {
        return !r.__ || Bt(r);
      });
    } catch (r) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], F.__e(r, n.__v);
    }
  }), xi && xi(e, t);
}, F.unmount = function(e) {
  $i && $i(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      lt(r);
    } catch (s) {
      t = s;
    }
  }), n.__H = void 0, t && F.__e(t, n.__v));
};
var Ei = typeof requestAnimationFrame == "function";
function Zn(e) {
  var t, n = function() {
    clearTimeout(r), Ei && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Ei && (t = requestAnimationFrame(n));
}
function lt(e) {
  var t = P, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), P = t;
}
function Bt(e) {
  var t = P;
  e.__c = e.__(), P = t;
}
function ei(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function rn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function le(e) {
  return e.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}
const es = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work".split(" ")
);
function an(e) {
  return le(e).replace(/[^a-z0-9+#/. -]/g, " ").split(/[\s/]+/).map((t) => t.replace(/^[.-]+|[.-]+$/g, "")).filter((t) => t.length > 1 && !es.has(t)).map(ts);
}
function ts(e) {
  if (e.length <= 4) return e;
  for (const t of ["ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"])
    if (e.endsWith(t) && e.length - t.length >= 4) return e.slice(0, -t.length);
  return e;
}
const D = (e) => !!e && e.status === "verified" && e.public_safe, is = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function ns(e) {
  const t = e.length >= 4 && /[a-rt-z]$/.test(e) ? "s?" : "";
  return new RegExp(`(?<![a-z0-9])${is(e)}${t}(?![a-z0-9+#])`, "g");
}
function ss(e) {
  const t = e;
  t.claim = new Map(e.claims.map((s) => [s.id, s])), t.entity = new Map(e.entities.map((s) => [s.id, s])), t.skill = new Map(e.skills.map((s) => [s.id, s])), t.gap = new Map(e.gaps.map((s) => [s.id, s])), t.role = new Map(e.roles.map((s) => [s.id, s])), t.archByEntity = new Map(e.architectures.map((s) => [s.entity, s]));
  const n = [], r = (s, a) => {
    const o = le(s);
    o && n.push({ term: o, ref: { ...a, term: s }, re: ns(o) });
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
async function rs(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`evidence ${t.status}`);
  return ss(await t.json());
}
const ee = (e, t) => e.entity.get(t)?.short ?? t, bt = (e, t) => e.skill.get(t)?.name ?? e.gap.get(t)?.name ?? t;
function _t(e, t) {
  const n = le(t), r = [], s = /* @__PURE__ */ new Map();
  for (const a of e.aliases) {
    a.re.lastIndex = 0;
    let o;
    for (; o = a.re.exec(n); ) {
      const l = o.index, p = l + o[0].length;
      if (r.some(([w, h]) => l < h && p > w)) continue;
      r.push([l, p]);
      const c = a.ref.near ? `near:${a.ref.term}` : a.ref.id, f = s.get(c);
      f ? f.count++ : s.set(c, { ...a.ref, count: 1, index: l });
    }
  }
  return [...s.values()].sort((a, o) => a.index - o.index);
}
const as = {
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
}, Mt = Object.entries(as).map(
  ([e, t]) => [e, new RegExp(`(?<![a-z0-9])(${t.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`)]
);
function on(e) {
  const t = le(e);
  return Mt.filter(([, n]) => n.test(t)).map(([n]) => n).sort((n, r) => t.search(Mt.find(([s]) => s === n)[1]) - t.search(Mt.find(([s]) => s === r)[1]));
}
const qi = /* @__PURE__ */ new WeakMap();
function os(e) {
  let t = qi.get(e);
  if (t) return t;
  const n = e.claims.filter(D).map((s) => {
    const a = [e.entity.get(s.entity)?.name ?? "", ...s.tags.map((o) => e.skill.get(o)?.name ?? "")].join(" ");
    return { claim: s, toks: an(`${s.text} ${a}`) };
  }), r = /* @__PURE__ */ new Map();
  for (const s of n) new Set(s.toks).forEach((a) => r.set(a, (r.get(a) ?? 0) + 1));
  return t = { docs: n, df: r, avg: n.reduce((s, a) => s + a.toks.length, 0) / Math.max(1, n.length) }, qi.set(e, t), t;
}
function ln(e, t, n = {}) {
  const r = os(e), s = [...new Set(an(t))], a = new Set(n.concepts ?? _t(e, t).filter((w) => w.kind === "skill").map((w) => w.id)), o = new Set(n.entities ?? on(t)), l = r.docs.length, p = 1.2, c = 0.75, f = [];
  for (const w of r.docs) {
    let h = 0;
    for (const y of s) {
      const g = w.toks.filter((v) => v === y).length;
      if (!g) continue;
      const d = r.df.get(y) ?? 0, m = Math.log(1 + (l - d + 0.5) / (d + 0.5));
      h += m * (g * (p + 1) / (g + p * (1 - c + c * w.toks.length / r.avg)));
    }
    for (const y of w.claim.tags) a.has(y) && (h += 2.5);
    o.has(w.claim.entity) && (h += 3), w.claim.kind === "limitation" && (h *= 0.8), h > 0 && f.push({ claim: w.claim, score: h });
  }
  return f.sort((w, h) => h.score - w.score).slice(0, n.limit ?? 12);
}
const Ai = { public_artifact: 1, self_reported: 0.8 };
function ue(e, t, n = {}) {
  const r = e.gap.get(t), s = (r?.partial ?? []).map((p) => e.claim.get(p)).filter((p) => !!p && p.status === "verified" && p.public_safe);
  if (r && s.length)
    return {
      id: t,
      label: r.name,
      category: "related",
      priority: n.priority,
      claims: s.map((p) => p.id),
      entities: Ue(s.map((p) => p.entity)),
      statement: r.statement
    };
  if (r) {
    const p = r.related.flatMap((c) => e.statableBySkill.get(c) ?? []);
    return {
      id: t,
      label: r.name,
      category: r.verify ? "verification" : "missing",
      priority: n.priority,
      claims: [],
      entities: Ue(p.map((c) => c.entity)).slice(0, 4),
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
  const o = e.statableBySkill.get(t) ?? [], l = (e.pendingBySkill.get(t) ?? []).map((p) => p.id);
  if (n.near)
    return {
      id: `near:${n.near}`,
      label: Tt(n.near),
      term: n.near,
      category: o.length ? "related" : "missing",
      priority: n.priority,
      claims: o.slice(0, 6).map((p) => p.id),
      entities: Ue(o.map((p) => p.entity)),
      via: t,
      statement: o.length ? `${Tt(n.near)} itself is not demonstrated. The closest evidence is ${a.name.toLowerCase()}.` : `${Tt(n.near)} is not demonstrated.`
    };
  if (o.length) {
    const p = o.some((c) => c.strength === "public_artifact");
    return {
      id: t,
      label: a.name,
      category: "direct",
      priority: n.priority,
      claims: jt(o).map((c) => c.id),
      entities: Ue(jt(o).map((c) => c.entity)),
      strength: p ? "artifact" : "self_reported",
      pending: l
    };
  }
  for (const p of a.related) {
    const c = e.statableBySkill.get(p) ?? [];
    if (c.length)
      return {
        id: t,
        label: a.name,
        category: "related",
        priority: n.priority,
        via: p,
        claims: jt(c).slice(0, 6).map((f) => f.id),
        entities: Ue(c.map((f) => f.entity)),
        pending: l,
        statement: `No direct evidence for ${a.name.toLowerCase()}. The closest is ${bt(e, p).toLowerCase()}.`
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
function jt(e) {
  return [...e].sort((t, n) => (Ai[n.strength] ?? 0) - (Ai[t.strength] ?? 0) || (t.kind === "limitation" ? 1 : 0) - (n.kind === "limitation" ? 1 : 0));
}
function ti(e, t, n, r = {}) {
  const s = { direct: 0, related: 0, verification: 0, missing: 0 };
  n.forEach((p) => s[p.category]++);
  const a = /* @__PURE__ */ new Map();
  for (const p of n)
    if (!(p.category !== "direct" && p.category !== "related"))
      for (const c of p.entities) {
        const f = a.get(c) ?? { score: 0, requirements: [] };
        f.score += (p.category === "direct" ? 1 : 0.4) * (c === "imw" ? 0.4 : 1), f.requirements.push(p.id), a.set(c, f);
      }
  const o = ["direct", "related", "verification", "missing"], l = { required: 0, preferred: 1, mentioned: 2, undefined: 1 };
  return {
    title: t,
    source: "role",
    notes: [],
    ...r,
    requirements: [...n].sort((p, c) => o.indexOf(p.category) - o.indexOf(c.category) || l[String(p.priority)] - l[String(c.priority)]),
    counts: s,
    entities: [...a.entries()].map(([p, c]) => ({ id: p, ...c })).filter((p) => e.entity.has(p.id)).sort((p, c) => c.score - p.score)
  };
}
function Ce(e, t) {
  const n = e.role.get(t);
  if (!n) throw new Error(`unknown role ${t}`);
  const r = [...n.requirements.map((a) => ue(e, a)), ...n.gaps.map((a) => ue(e, a))], s = [n.level_note, e.subject.level_note].filter(Boolean);
  return ti(e, n.title, r, { source: "role", roleId: t, notes: s });
}
const ie = {
  direct: "Direct evidence",
  related: "Related evidence",
  verification: "Verification required",
  missing: "Not currently demonstrated"
}, Ue = (e) => [...new Set(e)], ls = /* @__PURE__ */ new Set(["ai", "bi", "ml", "aws", "gcp", "sql", "api", "asr", "tts", "sse", "ec2", "s3", "hl7", "cda", "k6", "gpu", "etl"]), Tt = (e) => e.replace(/\b[a-z][a-z0-9]*/g, (t) => ls.has(t) ? t.toUpperCase() : t.charAt(0).toUpperCase() + t.slice(1)), Pe = { bachelor: 1, master: 2, phd: 3, mba: 0 }, Si = { bachelor: "Bachelor's", master: "Master's", phd: "PhD", mba: "MBA" }, cs = [
  ["bachelor", /\bbachelor|\b(?:b\.s\.?|b\.sc\.?|bsc|b\.a\.|b\.tech|btech|b\.e\.)(?![a-z])|\b(?:bs|ba)(?=\s*(?:\/|or\b|in\b|degree\b|,))|\b(?:undergraduate|college|university|4-year|four-year) degree/i],
  ["master", /\bmaster'?s\b|\bmasters\b|\bmaster of\b|\bmaster degree|\b(?:m\.s\.?|m\.sc\.?|msc|m\.tech|mtech|m\.eng\.?|meng)(?![a-z])|(?<![a-z])ms(?=\s*(?:\/|or\b|in\b|degree\b|,|$))|\b(?:graduate|advanced|post-?graduate) degree/i],
  ["phd", /\bph\.? ?d\b|\bdoctorate\b|\bdoctoral\b/i],
  ["mba", /\bmba\b/i]
], ds = /\b(?:degree|bachelor'?s?|master'?s?|ph\.? ?d|doctorate|bs|ms|ba|b\.s\.?|m\.s\.?|bsc|msc)\s+(?:degree\s+)?in\s+(.+)/i, hs = /computer|computing|quantitative|\bstem\b|technical|math|statistic|data|machine learning|artificial intelligence|\bai\b|information|software|engineering|analytics|related|relevant|equivalent|similar/i, us = /[,;:(]|\s(?:or|and|such as|e\.g|including|preferred|required|with|from|plus)\b/i, ps = /\bdegree\b|\brequired\b|\bpreferred\b|\bor equivalent\b|\brelated field\b|\bminimum\b|\bgpa\b|\bclass of\b|graduat/i, ms = /graduat|\bdegree (?:completed|conferred|earned|awarded)\b|\bcompleted (?:a |an |your |their )?(?:bachelor'?s |master'?s |ph\.? ?d |)degree|\bclass of\b|\bnew grad|\brecent grad|\bearly[- ]career\b|\bentry[- ]level\b|within the (?:past|last|previous)/i, fs = /\bnew grad|\brecent(?:ly)? grad|\bearly[- ]career\b|\bentry[- ]level\b/i, gs = /\bcurrently (?:enrolled|pursuing|attending)\b|\benrolled (?:in|at) (?:a|an)\b|\bpursuing (?:a|an|your) (?:bachelor|master|degree|ph\.? ?d|ms\b|bs\b|graduate)|\breturning to (?:school|university|college)\b|\bmust be a (?:current )?(?:student|undergraduate|graduate student)\b|\bcurrent (?:students?|undergraduates?)\b/i, ws = /\bgpa\b|grade point average/i, Ii = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12, spring: 5, summer: 8, fall: 12, autumn: 12, winter: 12 }, ys = /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?|spring|summer|fall|autumn|winter)\.?,?\s+(20\d{2})\b|\b(0?[1-9]|1[0-2])\/(20\d{2})\b/gi, vs = /within the (?:past|last|previous) (\d{1,2}|one|two|three|four|five|six|twelve|eighteen|twenty-four) (months?|years?)/i, Re = (e, t) => e * 12 + (t - 1), cn = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12, eighteen: 18, "twenty-four": 24 }, bs = /\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*(?:(?:-|to)\s*(?:\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*)?(?:years?|yrs?)\b/i, _s = /experien|professional|industry|hands-on|track record|working|background|building|developing|shipping|\bas an? /i, ks = /\b(?:hybrid|on-?site|in[- ]office|in[- ]person|remote|days? (?:a|per) week|relocat\w*|visa|sponsorship|work authori[sz]ation|authori[sz]ed to work|citizenship|security clearance|clearance|background check|drug (?:test|screen)\w*|travel|salary|compensation|pay range|benefits|401\(?k\)?|pto|paid time off|shifts?|commute|time ?zones?|full[- ]time|part[- ]time|location)\b/i, xs = (e) => `Not assessed: ${e.join("; ")}. These didn't match anything in the evidence database, so they are neither confirmed nor ruled out. Ask Rahul about them.`, $s = "Work-arrangement items (location, schedule, travel, authorization) are not skills, so they are left out of this comparison. Ask Rahul about them directly.", Cs = (e) => e.replace(/[’‘`]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ").trim(), kt = (e) => e.charAt(0).toUpperCase() + e.slice(1), Es = (e) => [...new Set(e)];
function qs(e) {
  return e.length < 2 ? e.join("") : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function dn(e) {
  const t = cs.filter(([, n]) => n.test(e)).map(([n]) => n);
  return t.length > 1 ? t.filter((n) => n !== "mba") : t;
}
function As(e, t, n) {
  const r = dn(t), s = e.subject.credentials;
  if (!r.length || !s) return null;
  const o = t.match(ds)?.[1] ?? "", l = o.split(us)[0].replace(/^(?:a|an|the)\s+/i, "").split(" ").slice(0, 5).join(" ").trim(), p = r[r.length - 1], c = `${qs(r.map((m) => Si[m]))}${p === "phd" || p === "mba" ? "" : " degree"}${l ? ` in ${l}` : ""}`, f = Math.min(...r.map((m) => Pe[m])), w = [...s.degrees].sort((m, v) => Pe[m.level] - Pe[v.level]), h = f > 0 ? w.filter((m) => Pe[m.level] >= f) : [], y = { id: `degree:${r.join("+")}`, label: c, priority: n, entities: ["education"], strength: "self_reported" };
  if (h.length) {
    const m = `Holds ${w.slice().reverse().map((k) => k.short).join(" and ")}.`, v = !!l && !hs.test(o);
    return {
      ...y,
      category: v ? "related" : "direct",
      claims: h.map((k) => k.claim),
      statement: v ? `${m} Both are in ${s.fields}; the description names a different field.` : m
    };
  }
  const g = w[w.length - 1], d = r.map((m) => m === "phd" ? "a PhD" : m === "mba" ? "an MBA" : Si[m]).join(" or ");
  return { ...y, category: "missing", claims: [g.claim], statement: `His highest degree is ${g.short}; he does not hold ${d}.` };
}
function Ss(e, t, n) {
  const r = t.match(bs), s = e.subject.credentials?.experience;
  if (!r || !s) return null;
  const a = /^\d+$/.test(r[1]) ? Number(r[1]) : cn[r[1].toLowerCase()] ?? 0;
  if (a > 29 || a < 1 && !/^0\s*(?:-|to)/.test(r[0])) return null;
  const o = kt(t.slice(r.index).split(/[.;(]|,\s/)[0].slice(0, 70).trim()), l = s.years, p = a <= l ? "direct" : a === l + 1 ? "related" : "missing", c = `${l}+ years of professional ML and data-science experience`, f = a === 0 ? `${c}, which fits the entry-level range asked for. Roles: ${s.summary}.` : p === "direct" ? `${c}: ${s.summary}.` : p === "related" ? `${c}, close to the ${a}+ asked for. Roles: ${s.summary}.` : `${c}, short of the ${a}+ years asked for. Roles: ${s.summary}.`, w = Es(s.claims.map((h) => e.claim.get(h)?.entity).filter((h) => !!h));
  return { id: `years:${a}`, label: o, category: p, priority: n, claims: [...s.claims], entities: w, strength: "self_reported", statement: f };
}
function Is(e, t) {
  const n = Re(t.getFullYear(), t.getMonth() + 1), r = [...e.matchAll(ys)].map((o) => o[1] ? Re(Number(o[2]), Ii[o[1].slice(0, 3).toLowerCase()] ?? Ii[o[1].toLowerCase()]) : Re(Number(o[4]), Number(o[3])));
  if (r.length >= 2) return [Math.min(...r), Math.max(...r)];
  if (r.length === 1)
    return /\b(?:by|before|no later than|prior to|until)\b/i.test(e) ? [0, r[0]] : /\b(?:after|since|on or after|from)\b/i.test(e) ? [r[0], 1 / 0] : [r[0] - 1, r[0] + 1];
  const s = e.match(vs);
  if (s) {
    const o = /^\d+$/.test(s[1]) ? Number(s[1]) : cn[s[1].toLowerCase()];
    return [n - o * (/year/i.test(s[2]) ? 12 : 1), n + 12];
  }
  const a = [...e.matchAll(/\b(20\d{2})\b/g)].map((o) => Number(o[1]));
  return a.length ? [Re(Math.min(...a), 1), Re(Math.max(...a), 12)] : fs.test(e) ? [n - 24, n + 12] : null;
}
function Ms(e, t, n, r) {
  const s = e.subject.credentials;
  if (!s || !ms.test(t)) return null;
  const a = dn(t), o = a.length ? Math.min(...a.map((d) => Pe[d]).filter((d) => d > 0)) : 1, l = [...s.degrees].sort((d, m) => d.date.localeCompare(m.date)), p = l.filter((d) => Pe[d.level] >= o), c = Is(t, r), f = (d) => Re(Number(d.date.slice(0, 4)), Number(d.date.slice(5, 7))), w = p.filter((d) => !c || f(d) >= c[0] && f(d) <= c[1]), h = kt(t.split(/[;]|\.\s/)[0].slice(0, 90).trim()), y = { id: `grad:${c ? c.join("-") : "any"}:${o}`, label: h, priority: n, entities: ["education"], strength: "self_reported" };
  if (w.length) {
    const d = w[w.length - 1], m = c ? ", within the window asked for" : "";
    return { ...y, category: "direct", claims: w.map((v) => v.claim).reverse(), statement: `Completed ${d.short.replace(/ \(UMKC, \d{4}\)$/, "")} at UMKC in ${d.when}${m}.` };
  }
  const g = l.map((d) => `${d.when} (${d.abbr})`).join(" and ");
  return { ...y, category: "missing", claims: l.map((d) => d.claim).reverse(), statement: `His degrees were completed in ${g}, outside the window asked for.` };
}
function js(e, t, n) {
  const r = e.subject.credentials;
  if (!r || !gs.test(t)) return null;
  const s = [...r.degrees].sort((a, o) => a.date.localeCompare(o.date)).pop();
  return {
    id: "enrollment",
    label: kt(t.slice(0, 90)),
    category: "missing",
    priority: n,
    claims: [s.claim],
    entities: ["education"],
    strength: "self_reported",
    statement: `He completed his ${s.abbr} in ${s.when}, so he is not currently enrolled.`
  };
}
function Ts(e, t, n) {
  const r = e.subject.credentials;
  return !r || !ws.test(t) ? null : {
    id: "gpa",
    label: kt(t.slice(0, 90)),
    category: "verification",
    priority: n,
    claims: r.degrees.map((s) => s.claim),
    entities: ["education"],
    statement: "His GPA isn't listed in the portfolio. Ask Rahul for it."
  };
}
function hn(e, t, n, r = !1, s = /* @__PURE__ */ new Date()) {
  const a = [];
  for (const o of Cs(t).split(/;\s|\.\s+(?=[A-Z])/)) {
    if (!r || ps.test(o)) {
      const l = js(e, o, n) ?? Ms(e, o, n, s) ?? As(e, o, n);
      l && a.push(l);
      const p = Ts(e, o, n);
      p && a.push(p);
    }
    if (!r || _s.test(o)) {
      const l = Ss(e, o, n);
      l && a.push(l);
    }
  }
  return a;
}
const Rs = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/, ii = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/, Ls = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/, Ps = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;
function Ds(e) {
  const t = e.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(t)) return null;
  const n = le(t).replace(/^#+\s*/, ""), r = n.split(" ").length;
  return n.length > 0 && n.length < 70 && (/[:：]$/.test(n) || /^#/.test(t) || r <= 5 && !/[.,;]/.test(n)) ? Rs.test(n) ? "skip" : ii.test(n) ? "preferred" : Ls.test(n) ? "required" : Ps.test(n) ? "mentioned" : null : null;
}
function Fs(e, t) {
  const n = t.split(/\r?\n/);
  let r = "mentioned";
  const s = /* @__PURE__ */ new Map(), a = [], o = { required: 3, preferred: 2, mentioned: 1, skip: 0 };
  for (const y of n) {
    if (!y.trim()) continue;
    const g = Ds(y);
    if (g) {
      r = g;
      continue;
    }
    if (r === "skip") continue;
    const d = ii.test(le(y)) ? "preferred" : r;
    a.push({ text: y, priority: d });
    for (const m of _t(e, y)) {
      const v = m.near ? `near:${m.term.toLowerCase()}` : m.id, k = s.get(v);
      k ? (k.count += m.count, o[d] > o[k.priority] && (k.priority = d)) : s.set(v, { id: m.id, near: m.near ? m.term.toLowerCase() : void 0, priority: d, count: m.count });
    }
  }
  const l = le(t), p = [...l.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((y) => Number(y[1])).filter((y) => y > 0 && y < 30), c = l.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/), f = new Set([...s.values()].filter((y) => !y.near && e.skill.has(y.id)).map((y) => y.id));
  let w, h = 0;
  for (const y of e.roles) {
    const g = y.requirements.filter((d) => f.has(d)).length / y.requirements.length;
    g > h && (h = g, w = y.id);
  }
  return {
    concepts: [...s.values()],
    quals: a,
    years: p.length ? Math.max(...p) : void 0,
    seniority: c?.[1],
    closestRole: h >= 0.25 ? w : void 0
  };
}
function mt(e, t, n = [], r = /* @__PURE__ */ new Date()) {
  const s = Fs(e, t), a = [], o = /* @__PURE__ */ new Set(), l = { required: 0, preferred: 1, mentioned: 2 }, p = [...s.concepts].sort((g, d) => l[g.priority] - l[d.priority] || d.count - g.count).slice(0, 26);
  for (const g of p) {
    const d = ue(e, g.id, { near: g.near, priority: g.priority === "skip" ? "mentioned" : g.priority });
    o.has(d.id) || (o.add(d.id), a.push(d));
  }
  const c = (g) => {
    o.has(g.id) || (o.add(g.id), a.push(g));
  };
  for (const g of s.quals) hn(e, g.text, g.priority === "skip" ? "mentioned" : g.priority, g.priority === "mentioned", r).forEach(c);
  let f = !1;
  const w = [];
  for (const g of n) {
    const d = Ns(e, g, ii.test(le(g)) ? "preferred" : "required", r);
    d.covs.forEach(c), f || (f = d.logistics), d.unmatched && !w.includes(d.unmatched) && w.push(d.unmatched);
  }
  const h = [], y = Math.max(0, ...a.filter((g) => g.id.startsWith("years:")).map((g) => Number(g.id.slice(6))));
  return y > (e.subject.credentials?.experience.years ?? 2) ? h.push(`The description asks for ${y}+ years. ${e.subject.level_note}`) : s.seniority && h.push(`The description uses the word "${s.seniority}". ${e.subject.level_note}`), w.length && h.push(xs(w)), f && h.push($s), a.length || h.push("No recognizable technical requirements were found. Try pasting the requirements section."), ti(e, "Your job description", a, {
    source: "jd",
    notes: h,
    unassessed: w,
    closestRole: s.closestRole ? e.role.get(s.closestRole)?.title : void 0,
    roleId: s.closestRole
  });
}
function Ns(e, t, n = "required", r = /* @__PURE__ */ new Date()) {
  const s = t.trim().slice(0, 160), a = hn(e, s, n, !1, r);
  for (const o of _t(e, s)) a.push(ue(e, o.id, { near: o.near ? o.term.toLowerCase() : void 0, priority: n }));
  return a.length ? { covs: a, logistics: !1 } : ks.test(s) ? { covs: [], logistics: !0 } : { covs: [], logistics: !1, unmatched: s.length > 2 ? s : void 0 };
}
const ni = (e) => e.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(e), un = /\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|best candidate|excellent fit|great fit|strong fit|perfect|10\s?\/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|highly recommend|must hire|unmatched|brilliant|superstar)\b/i, Ws = /(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)/i, Hs = /(\b(rate|score|rank)\b.*\b(him|rahul|candidate)\b|\bout of (10|ten|100)\b|percent(age)? (match|fit)|%\s?(match|fit)|match (score|percentage)|fit score)/i, Os = /\b(weather|joke|poem|recipe|song|lyrics|stock price|bitcoin|politic|election|horoscope|translate this|write (me )?(an? )?(essay|story|cover letter)|capital of|who won the)\b/i, Bs = (e) => [...new Set(e)], zs = /(how (can|could|do|would) you (say|know|tell|claim|conclude)|what makes you (say|think)|why (do|would) you (say|think)|prove (it|that|this)|how (does|do|did) (that|this|it) (make sense|prove|show|follow|answer|mean)|how (that|this|it) makes? sense|(that|this|it) (doesn'?t|does not|didn'?t) make (any )?sense|makes? no sense|what('?s| is) the (evidence|proof|reasoning|logic)|explain (that|this|why|your reasoning|how)|\bhow so\b|^really\b|are you sure|i don'?t (get|understand|buy|see)|not convinced|so what|why does (that|this) matter|^why\??$|^but (how|why|what)\b)/, Mi = /* @__PURE__ */ new Map(), Us = (e) => {
  let t = Mi.get(e.id);
  return t || Mi.set(e.id, t = e.match.map((n) => new RegExp(n, "i"))), t;
};
function Vs(e, t) {
  const n = le(t);
  let r, s = 0;
  for (const a of e.topics ?? []) {
    const o = Us(a).reduce((l, p) => l + (p.test(n) ? 1 : 0), 0);
    o > s && (r = a, s = o);
  }
  return r;
}
const Fe = (e, t) => t ? e.topics?.find((n) => n.id === t) : void 0;
function Gs(e, t) {
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
  const n = e.sources ?? Bs([...e.leadCites ?? [], ...e.points.flatMap((r) => r.cites), ...e.takeawayCites ?? []]);
  return n.length && t.push({ type: "claims", title: "Sources", ids: n, collapsed: !0 }), t;
}
function pn(e, t, n) {
  return { blocks: t, followups: n.followups ?? [], actions: n.actions ?? [], engine: "evidence", intent: e, entities: n.entities ?? [], topic: n.topic };
}
const Ks = (e, t) => t.map((n) => e.entity.get(n)).filter((n) => !!n && n.kind !== "education").slice(0, 2).map((n) => ({ kind: "anchor", label: `See ${n.short} on the portfolio`, target: n.anchor }));
function Ye(e, t, n, r = {}) {
  const s = Gs(e, t), a = n === "recruiter" || n === "founder" ? [] : s.failures.filter((p) => e.failures.some((c) => c.id === p)), o = r.challenged && r.again ? s.plain ?? `Put simply: ${s.takeaway?.text.replace(/^(For your team|Bottom line): /, "") ?? t.lead.text}` : r.challenged && s.why ? `Fair question. ${s.why}` : r.lead ?? t.lead.text, l = se({
    lead: o,
    leadCites: r.challenged ? [] : t.lead.cites,
    points: s.points,
    takeaway: s.takeaway?.text,
    takeawayCites: s.takeaway?.cites,
    extra: a.length ? [{ type: "failures", ids: a.slice(0, 2) }] : []
  });
  return pn(r.challenged ? "reasoning" : "topic_answer", l, {
    entities: t.entities,
    topic: t.id,
    actions: t.actions ?? Ks(e, t.entities),
    followups: t.followups
  });
}
function Qs(e, t, n) {
  const r = n.entities?.map((l) => e.entity.get(l)).find(Boolean), s = r ? (e.statableByEntity.get(r.id) ?? []).filter((l) => l.kind !== "limitation").slice(0, 2) : [], a = [
    { label: "What the answer rests on", text: "Only verified evidence: public code, data, recordings and papers, plus his employment history, with each item labelled by how it can be checked.", cites: [] }
  ];
  r && a.push({ label: `What it shows about ${r.short}`, text: r.summaries[t] ?? r.tagline, cites: s.map((l) => l.id) }), a.push({ label: "How it connects to your question", text: 'Those are the closest verified items to what you asked. If you meant something more specific, ask it directly, for example "How does he handle disagreements in a team?", and you will get an answer to that exact question.', cites: [] });
  const o = se({
    lead: n.question ? `Fair question. The previous answer was about "${n.question}". Here is the reasoning behind it:` : "Fair question. Here is the reasoning:",
    points: a
  });
  return pn("reasoning", o, {
    entities: r ? [r.id] : [],
    followups: ["How does he work in a team?", "What has Rahul actually shipped?", "Why should we hire Rahul?"]
  });
}
function Ys(e, t) {
  const n = /* @__PURE__ */ new Set(["python", "metrics", "healthcare", "fintech", "product_judgment", "testing"]), r = t.tags.find((s) => !n.has(s)) ?? t.tags[0];
  return r ? bt(e, r) : e.entity.get(t.entity)?.short ?? "Evidence";
}
function Je(e, t, n = 2) {
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
function mn(e, t) {
  return t.filter(D).map((n) => ({ label: Ys(e, n), text: n.text, cites: [n.id] }));
}
const T = (e, t) => t.test(e), K = (e) => [...new Set(e)];
function ji(e, t) {
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
  const a = [...t].filter(D).sort((p, c) => ji(c, n) - ji(p, n)), o = /* @__PURE__ */ new Map(), l = [];
  for (const p of a) {
    const c = o.get(p.entity) ?? 0;
    if (!(c >= r || l.includes(p)) && (o.set(p.entity, c + 1), l.push(p), l.length >= s))
      break;
  }
  return l;
}
function si(e, t) {
  return K(t.flatMap((n) => e.statableBySkill.get(n) ?? []));
}
function Se(e, t) {
  return (e.statableByEntity.get(t) ?? []).filter((n) => n.kind === "limitation");
}
function H(e) {
  return e.map((t) => t.id);
}
function ri(e) {
  return { kind: "anchor", label: `Jump to ${e.short} on the portfolio`, target: e.anchor };
}
function Ne(e, t, n = {}) {
  const r = e.entity.get(t);
  if (!r) return [];
  const s = [];
  n.xray !== !1 && e.archByEntity.has(t) && s.push({ kind: "mode", label: `X-Ray ${r.short}`, target: "xray", arg: t }), s.push(ri(r));
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
  return a.filter(([l]) => !n.includes(l)).filter(([l]) => l === "architecture" ? o : !0).filter(([l]) => l === "failure" ? e.failures.some((p) => p.entity === t) || Se(e, t).length > 0 : !0).filter(([l]) => l === "why" ? e.decisions.some((p) => p.entity === t) : !0).map(([, l]) => l).slice(0, 5);
}
const xt = [
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
    followups: n.followups ?? xt.slice(0, 4),
    actions: n.actions ?? [],
    engine: "evidence",
    intent: e,
    entities: n.entities ?? [],
    basis: n.basis,
    topic: n.topic
  };
}
function ai(e) {
  return K(e.blocks.flatMap((t) => t.type === "claims" ? t.ids : t.type === "p" || t.type === "takeaway" ? t.cites ?? [] : t.type === "points" ? t.items.flatMap((n) => n.cites) : []));
}
function Js(e) {
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
function Xs(e, t) {
  const n = ai(t);
  return t.basis = {
    retrieved: t.basis?.retrieved ?? n,
    checks: [
      { label: "Only verified, public-safe claims cited", ok: n.every((r) => D(e.claim.get(r))) },
      { label: "No fit scores, rankings or praise", ok: !un.test(Js(t)) },
      { label: "Every cited claim links to a source", ok: n.every((r) => (e.claim.get(r)?.sources.length ?? 0) > 0) }
    ]
  }, t;
}
const Zs = [
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
function er(e) {
  const t = le(e);
  return Zs.find(([n]) => n.test(t))?.[1];
}
function tr(e, t, n) {
  return Xs(e, ir(e, t, n));
}
function ir(e, t, n) {
  const r = t.trim(), s = le(r), a = n.persona;
  if (!s) return nr(e);
  if (Ws.test(r))
    return A("injection", [
      { type: "p", text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." }
    ], { followups: xt.slice(0, 4) });
  if (ni(r)) return cr(e, r);
  if (Hs.test(s)) {
    const m = Fe(e, "why_hire"), v = "I won't put a number on a person, because a score hides the evidence you actually need. Here is the case instead, point by point:";
    if (m) return { ...Ye(e, m, a, { lead: v }), intent: "no_scores", actions: [{ kind: "mode", label: "Check against your job description", target: "role", arg: "jd" }] };
  }
  const o = on(r), l = _t(e, r), p = K(l.map((m) => m.id));
  if (Os.test(s) && !o.length && !l.length)
    return A("off_topic", [{ type: "p", text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  if (T(s, /\b(contact|email|reach (him|rahul|out)|get in touch|linkedin|resume|cv|available|availability|open to (work|roles|opportunities)|job search|start date)\b/)) return sr(e);
  const c = Vs(e, r);
  if (zs.test(s) && (c || !o.length && !l.length)) {
    const m = c ?? Fe(e, n.lastTopic);
    return m ? Ye(e, m, a, { challenged: !0, again: n.lastIntent === "reasoning" && n.lastTopic === m.id }) : Qs(e, a, { question: n.lastQuestion, entities: n.lastEntities });
  }
  const f = lr(e, s, r, o, p, a);
  if (f) return f;
  const w = er(s);
  if (w && T(s, /(interviewer|interview questions|would .* ask)/)) return Pi(e, w);
  if (w && T(s, /challenge/)) return Di(e, w);
  if (w && T(s, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return Ti(e, w);
  if (n.roleId && T(s, /(this role|the role|this evidence|for this|^challenge)/))
    return T(s, /challenge/) ? Di(e, n.roleId) : T(s, /(interview|ask)/) ? Pi(e, n.roleId) : Ti(e, n.roleId);
  if (T(s, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/))
    return A(
      "role_prompt",
      [{ type: "p", text: "Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated." }],
      { actions: [{ kind: "mode", label: "Select a role", target: "role" }, { kind: "mode", label: "Paste a job description", target: "role", arg: "jd" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an ML Engineer role", "Evaluate Rahul for an LLM Application Engineer role"] }
    );
  if (T(s, /\b(compare|versus|vs\.?|difference between|differ)\b/) && o.length >= 2) return Ri(e, o.slice(0, 2), a);
  if (T(s, /\b(compare|versus|vs\.?)\b/) && o.length === 1 && n.lastEntities?.length) {
    const m = n.lastEntities.find((v) => v !== o[0]);
    if (m) return Ri(e, [m, o[0]], a);
  }
  if (T(s, /(who is (rahul|he)|about rahul|about him|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr|tell me about (rahul|him)$)/)) return vr(e);
  if (c && o.every((m) => c.entities.includes(m))) return wr(e, c, l.map((m) => m.id), a);
  if (s.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/) || T(s, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const m = l.filter((b) => b.kind === "skill").map((b) => b.id), v = tt(s), k = m.length ? m : v;
    if (k.length) return Li(e, k, a, s);
  }
  if (T(s, /\b(strongest|best)\b/) && tt(s).length) return Li(e, tt(s), a, s);
  if (T(s, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/) && l.length) return zt(e, l.map((m) => ({ id: m.id, near: m.near ? m.term.toLowerCase() : void 0 })), a, s);
  const g = o[0] ?? (T(s, /\b(it|this|that|the project)\b/) ? n.lastEntities?.[0] : void 0);
  if (g) return dr(e, g, s, a);
  if (T(s, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return fr();
  if (T(s, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return hr(e, a, T(s, /\b(more|all|other)\b/));
  if (T(s, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return ur(e, a);
  if (T(s, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return pr(e);
  if (T(s, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return mr(e);
  if (T(s, /(personally|himself|his own|individual contribution)/)) return A("personally", [{ type: "p", text: "Ask about a specific project or role. Ownership is recorded per item:" }, ...e.entities.filter((m) => m.ownership && m.kind !== "education").slice(0, 7).map((m) => ({ type: "p", text: `${m.short}: ${m.ownership}` }))]);
  const d = tt(s);
  return d.length ? gr(e, s, d, a) : l.length ? zt(e, l.map((m) => ({ id: m.id, near: m.near ? m.term.toLowerCase() : void 0 })), a, s) : yr(e, r, a);
}
function nr(e) {
  return A("help", [{ type: "p", text: `Ask about ${e.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}
function sr(e) {
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
const rr = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi, ar = /\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/, or = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;
function lr(e, t, n, r, s, a) {
  if (!(/^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(t) || /\b(did|has) (he|rahul)\b/.test(t))) return null;
  const l = t.match(ar)?.[0];
  if (l && or.test(t) && !/stable diffusion/.test(l)) {
    const f = e.gap.get("pretraining"), w = ae(e, si(e, ["llm_apis"]), "engineer", 1, 4);
    return A("false_premise", [
      { type: "p", text: `No. Nothing in the evidence supports that premise. ${l.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: "gaps", items: [{ id: f.id, name: f.name, statement: f.statement, closest: ["sssd"] }] },
      { type: "claims", title: "What the evidence does show", ids: H(w) }
    ], { followups: ["What models has Rahul fine-tuned?", "Show me his strongest RAG work.", "What is not demonstrated yet?"] });
  }
  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(t) && !/club/.test(t)) {
    const f = Fe(e, "leadership");
    if (f) return { ...Ye(e, f, a, { lead: "He hasn't managed a team of engineers yet. He has led people and led technical work end to end, which is the foundation for it:" }), intent: "false_premise" };
  }
  const p = /minute|scale|100x|10x/.test(t) ? [] : n.match(rr) ?? [];
  if (p.length) {
    const f = p[0].replace(/\s/g, ""), w = f.replace(/^\$/, "").replace(/[%x×]$/i, ""), h = e.claims.filter((g) => D(g) && g.text.replace(/\s/g, "").includes(w)), y = e.claims.filter((g) => !D(g) && g.text.replace(/\s/g, "").includes(w));
    if (h.length) {
      const g = /patient records|patients|ehr/.test(t) && h.some((d) => /not clinical ehr records/i.test(d.text));
      return A("figure_check", [
        { type: "p", text: g ? `Not quite. ${f} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${f}:`, cites: H(h.slice(0, 1)) },
        { type: "claims", ids: H(h.slice(0, 3)) }
      ], { entities: K(h.map((d) => d.entity)), followups: B(e, h[0].entity) });
    }
    if (y.length)
      return A("figure_check", [
        { type: "p", text: `That figure is not verified, so I won't state it as fact. ${y[0].note ?? ""}` },
        { type: "note", tone: "warn", text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' }
      ], { entities: K(y.map((g) => g.entity)) });
    if (r.length || s.length)
      return A("figure_check", [{ type: "p", text: `${f} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities: r });
  }
  const c = s.map((f) => e.gap.get(f)).find((f) => f && !f.verify);
  if (c && /\b(did|does|has|have|is|was)\b/.test(t)) {
    const f = (c.partial ?? []).map((g) => e.claim.get(g)).filter(D), w = [...f, ...c.related.flatMap((g) => e.statableBySkill.get(g) ?? [])], h = f.length ? f.slice(0, 3) : ae(e, w, "engineer", 1, 4), y = Fe(e, "learning");
    return A("unsupported_skill", se({
      lead: `${f.length ? "Not in production yet." : "Not yet."} ${c.statement}`,
      points: Je(e, h, 1),
      takeaway: y?.takeaway ? `How he would close it: ${y.takeaway.text.replace(/^For your team: /, "")}` : void 0
    }), { topic: "learning", followups: ["How fast does he learn new technology?", "What is not demonstrated yet?", "Show me his backend engineering experience."] });
  }
  return null;
}
function fn(e) {
  const t = e.counts, n = e.requirements.length, r = (l, p, c) => `${l} ${l === 1 ? p : c}`, s = e.requirements.filter((l) => l.category === "missing").map((l) => l.label), o = [{ type: "p", lead: !0, text: [
    `Of the ${r(n, "requirement", "requirements")} in this description, ${r(t.direct, "has", "have")} direct evidence${t.related ? ` and ${r(t.related, "has", "have")} related evidence` : ""}.`,
    t.verification ? `${r(t.verification, "needs", "need")} verification.` : "",
    s.length ? `Not currently demonstrated: ${s.join("; ")}.` : "Nothing in it is marked as not demonstrated.",
    e.unassessed?.length ? `${r(e.unassessed.length, "phrase was", "phrases were")} not assessed (see the note below).` : ""
  ].filter(Boolean).join(" ") }, { type: "coverage", analysis: e }];
  return e.notes.forEach((l) => o.push({ type: "note", tone: "warn", text: l })), o;
}
function cr(e, t) {
  return A("jd", fn(mt(e, t)), {
    actions: [{ kind: "mode", label: "Show this on the portfolio", target: "transform" }, { kind: "mode", label: "Technical brief for this role", target: "brief" }],
    followups: ["What is the strongest evidence for this role?", "Challenge this evidence", "What is not demonstrated yet?"]
  });
}
function Ti(e, t, n) {
  const r = Ce(e, t), s = r.counts, a = r.entities.slice(0, 3).map((l) => ee(e, l.id)), o = [
    { type: "p", text: `Evidence coverage for ${r.title}: ${s.direct} requirements with direct evidence, ${s.related} with related evidence, ${s.verification} needing verification, and ${s.missing} not currently demonstrated. The strongest evidence comes from ${oi(a)}.` },
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
function Ri(e, [t, n], r) {
  const s = e.entity.get(t), a = e.entity.get(n), o = (y, g) => ({ label: y, values: [g(t), g(n)] }), l = (y) => K((e.statableByEntity.get(y) ?? []).flatMap((g) => g.tags)).filter((g) => !["python", "healthcare", "fintech", "product_judgment"].includes(g)).slice(0, 6).map((g) => bt(e, g)).join(", ") || "—", p = (y) => (e.statableByEntity.get(y) ?? []).find((g) => g.tags.some((d) => ["eval_design", "llm_eval", "regression_testing"].includes(d)) && g.kind !== "limitation")?.text ?? "—", c = (y) => {
    const g = (e.statableByEntity.get(y) ?? []).find((d) => d.metrics?.length);
    return g ? g.metrics.map((d) => `${d.label}: ${d.value}`).join(" · ") : "—";
  }, f = (y) => Se(e, y)[0]?.text.replace(/^Limits:\s*/, "") ?? "—", w = (y) => (e.statableByEntity.get(y) ?? []).some((g) => g.tags.includes("deployment")) ? "Yes" : "No public deployment", h = K([t, n].flatMap((y) => (e.statableByEntity.get(y) ?? []).filter((g) => g.metrics?.length || g.kind === "limitation").slice(0, 3)));
  return A("compare", [
    { type: "p", text: `${s.short} vs ${a.short}, compared on the same evidence fields.` },
    { type: "compare", entities: [t, n], rows: [
      o("What it is", (y) => e.entity.get(y).tagline),
      o("When", (y) => e.entity.get(y).dates),
      o("Demonstrates", l),
      o("Evaluation evidence", p),
      o("Measured results", c),
      o("Deployed", w),
      o("Main limitation", f),
      o("Ownership", (y) => e.entity.get(y).ownership || "—")
    ] },
    { type: "claims", title: "Evidence used", ids: H(ae(e, h, r, 3, 6)) }
  ], { entities: [t, n], actions: [...Ne(e, t).slice(0, 1), ...Ne(e, n).slice(0, 1)], followups: [...B(e, t).slice(0, 2), ...B(e, n).slice(0, 2)] });
}
function Li(e, t, n, r) {
  const s = /* @__PURE__ */ new Map();
  for (const h of si(e, t)) {
    const y = s.get(h.entity) ?? { s: 0, claims: [] };
    y.s += (h.strength === "public_artifact" ? 1 : 0.7) + (h.code?.length ? 0.4 : 0) + (h.kind === "metric" ? 0.2 : 0), y.claims.push(h), s.set(h.entity, y);
  }
  const a = [...s.entries()].filter(([h]) => h !== "imw").sort((h, y) => y[1].s - h[1].s);
  if (!a.length) return zt(e, t.map((h) => ({ id: h })), n, r);
  const [o, l] = a[0], p = e.entity.get(o), c = bt(e, t[0]), f = ae(e, l.claims, n, 5, 5), w = a[1] ? ` ${ee(e, a[1][0])} is next.` : "";
  return A("strongest", se({
    lead: `His strongest ${c} work is ${p.name}.${w}`,
    points: mn(e, f),
    extra: e.archByEntity.has(o) ? [{ type: "xray", arch: e.archByEntity.get(o).id }] : []
  }), { entities: [o], actions: Ne(e, o), followups: B(e, o) });
}
function zt(e, t, n, r) {
  const s = [], a = [], o = [], l = [], p = /* @__PURE__ */ new Set();
  for (const f of t.slice(0, 3)) {
    const w = ue(e, f.id, { near: f.near });
    if (p.has(w.id)) continue;
    p.add(w.id);
    const h = w.entities.map((g) => ee(e, g)), y = !s.length;
    if (w.category === "direct") {
      const g = ae(e, w.claims.map((d) => e.claim.get(d)), n, 2, 5);
      s.push({ type: "p", lead: y, text: `Yes. He has used ${w.label} in ${oi(h.slice(0, 4))}.`, cites: w.claims.slice(0, 2) }), s.push({ type: "points", items: Je(e, g, 1) }), l.push(...H(g));
    } else if (w.category === "related") {
      const g = w.via ? `Not directly, but he has closely related experience. ${w.statement ?? ""}` : `Partly. ${w.statement ?? ""}`;
      s.push({ type: "p", lead: y, text: g.trim(), cites: w.claims.slice(0, 1) });
      const d = w.claims.slice(0, 4).map((m) => e.claim.get(m)).filter(Boolean);
      s.push({ type: "points", items: Je(e, d, 1) }), l.push(...H(d));
    } else w.category === "verification" ? s.push({ type: "p", lead: y, text: `${ie.verification}: ${w.statement ?? ""}` }) : (y && s.push({ type: "p", lead: y, text: `Not yet: ${w.label} isn't part of his work so far. Here is the closest experience, and how he tends to pick up new tools:` }), s.push({ type: "gaps", items: [{ id: w.id, name: w.label, statement: w.statement ?? "", closest: w.entities }] }));
    if (a.push(...w.entities), /where/.test(r)) for (const g of w.entities.slice(0, 3)) {
      const d = e.entity.get(g);
      d && o.push(ri(d));
    }
  }
  l.length && s.push({ type: "claims", title: "Sources", ids: K(l), collapsed: !0 });
  const c = K(a)[0];
  return A("skill", s, { entities: K(a), actions: o.length ? o : c ? Ne(e, c) : [], followups: c ? B(e, c).slice(0, 3).concat(["What is not demonstrated yet?"]) : xt.slice(0, 4) });
}
function dr(e, t, n, r) {
  const s = e.entity.get(t), a = e.statableByEntity.get(t) ?? [], o = e.archByEntity.get(t), l = e.failures.filter((g) => g.entity === t), p = e.decisions.filter((g) => g.entity === t), c = Ne(e, t);
  if (T(n, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && o)
    return A("architecture", [
      { type: "p", text: `${o.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: "xray", arch: o.id }
    ], { entities: [t], actions: c, followups: B(e, t, ["architecture"]) });
  if (T(n, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && p.length)
    return A("decisions", [{ type: "decisions", ids: p.map((g) => g.id) }], { entities: [t], actions: c, followups: B(e, t, ["why"]) });
  if (T(n, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const g = Se(e, t), d = [];
    return l.length && d.push({ type: "failures", ids: l.map((m) => m.id) }), g.length && d.push({ type: "claims", title: "Stated limitations", ids: H(g) }), d.length || d.push({ type: "p", text: `The evidence database records no specific failure case for ${s.short}.` }), A("failures", d, { entities: [t], actions: [...e.attacks.some((m) => m.entity === t) ? [{ kind: "mode", label: "Try to break it", target: "lab", arg: t }] : [], ...c], followups: B(e, t, ["failure"]) });
  }
  if (T(n, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const g = a.filter((v) => v.tags.some((k) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(k))), d = [{ type: "claims", ids: H(ae(e, g, "researcher", 7, 7)) }];
    t === "cliniq" && d.push({ type: "chart", chart: "cliniq" }), t === "voice" && d.push({ type: "chart", chart: "voice_quality" });
    const m = e.traces.find((v) => v.entity === t);
    return m && d.push({ type: "trace", id: m.id }), A("evaluation", d, { entities: [t], actions: [{ kind: "mode", label: "Open the proof lab", target: "lab", arg: t }, ...c], followups: B(e, t, ["evaluation"]) });
  }
  if (T(n, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const g = a.filter((d) => d.code?.length);
    return A("code", [
      { type: "p", text: `Code links are pinned to a specific commit, so line numbers do not drift.${s.repo ? "" : " This is employment work, so no source code is public."}` },
      { type: "claims", ids: H(ae(e, g, "engineer", 8, 8)) }
    ], { entities: [t], actions: c, followups: B(e, t, ["code"]) });
  }
  if (T(n, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const g = Se(e, t), d = [{ type: "p", text: `Questions an interviewer could reasonably press on for ${s.short}:` }];
    return s.questions.forEach((m) => d.push({ type: "p", text: `• ${m}` })), g.length && d.push({ type: "claims", title: "Limitations the evidence already states", ids: H(g) }), p.length && d.push({ type: "decisions", ids: p.slice(0, 2).map((m) => m.id) }), A("challenge", d, { entities: [t], actions: c, followups: B(e, t, ["challenge"]) });
  }
  if (T(n, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/))
    return A("personally", [
      { type: "p", text: s.ownership || "The portfolio does not break down individual contributions for this item." },
      { type: "claims", ids: H(ae(e, a, r, 4, 4)) }
    ], { entities: [t], actions: c, followups: B(e, t, ["personally"]) });
  if (T(n, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const g = a.filter((m) => m.tags.some((v) => ["rate_limiting", "caching", "deployment", "docker", "monitoring"].includes(v))), d = ["distributed_systems", "kubernetes"].map((m) => e.gap.get(m));
    return A("scale", [
      { type: "p", text: `What is implemented today for ${s.short}:` },
      g.length ? { type: "claims", ids: H(g.slice(0, 5)) } : { type: "p", text: "No scaling-related controls are recorded for this item." },
      { type: "gaps", items: d.map((m) => ({ id: m.id, name: m.name, statement: m.statement, closest: [] })) },
      { type: "note", tone: "info", text: "A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented." }
    ], { entities: [t], actions: c, followups: B(e, t, ["scale"]) });
  }
  if (n.length > 70) {
    const g = ln(e, n, { entities: [t], limit: 8 }).map((m) => m.claim).filter((m) => m.entity === t), d = Se(e, t).filter((m) => !g.includes(m));
    if (g.length)
      return A("focused", [
        { type: "p", text: `The evidence most relevant to this question about ${s.short}:`, cites: H(g.slice(0, 2)) },
        { type: "claims", ids: H(g.slice(0, 5)) },
        ...d.length ? [{ type: "claims", title: "Stated limitations", ids: H(d.slice(0, 2)) }] : []
      ], { entities: [t], actions: c, followups: B(e, t) });
  }
  const f = s.summaries[r] ?? s.tagline, w = ae(e, a, r, r === "recruiter" ? 4 : 5, r === "recruiter" ? 4 : 5), h = [];
  if (r === "engineer" && o && h.push({ type: "xray", arch: o.id }), r === "researcher") {
    const g = Se(e, t);
    g.length && h.push({ type: "claims", title: "Stated limitations", ids: H(g) });
  }
  r === "manager" && s.ownership && h.push({ type: "note", tone: "info", text: `Ownership: ${s.ownership}` });
  const y = [{ type: "entity", id: t }, ...se({ lead: f, leadCites: H(w.slice(0, 2)), points: mn(e, w), extra: h })];
  return A("entity", y, { entities: [t], actions: c, followups: B(e, t) });
}
function hr(e, t, n = !1) {
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
    entities: K(s.map((a) => e.failures.find((o) => o.id === a).entity)),
    actions: [{ kind: "mode", label: "Open the proof lab", target: "lab" }],
    followups: ["Show me the barge-in fix in code", "Show more failure cases", "How does he evaluate AI systems?"]
  });
}
function ur(e, t) {
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
  }), { entities: K(r.map(([s]) => e.claim.get(s).entity)), actions: [{ kind: "mode", label: "X-Ray the Drug Interaction Agent", target: "xray", arg: "dia" }], followups: ["Why keep label review free of an LLM?", "Show me the barge-in fix in code", "Show the architecture of ClinIQ"] });
}
function pr(e, t) {
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
function mr(e) {
  return A("gaps", se({
    lead: "Honest answer: his gaps are large-scale infrastructure and formal people management, which is typical at his career stage, and each one sits next to experience he can build on:",
    points: [],
    extra: [{ type: "gaps", items: ["kubernetes", "iac", "distributed_inference", "pretraining", "orchestration", "human_annotation", "online_experiments", "customer_deployments"].map((n) => e.gap.get(n)).map((n) => ({ id: n.id, name: n.name, statement: n.statement, closest: K(n.related.flatMap((r) => (e.statableBySkill.get(r) ?? []).map((s) => s.entity))).slice(0, 3) })) }],
    takeaway: "How he closes gaps: by building. Realtime voice, diffusion models and quantum ML were each new to him, and each became a working, tested system.",
    takeawayCites: ["voice.harness", "sssd.encoder", "qml.benchmark"]
  }), { topic: "learning", followups: ["How fast does he learn new technology?", "Evaluate Rahul for an MLOps Engineer role", "Why should we hire Rahul?"] });
}
function fr(e) {
  return A("level", se({
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
const gn = [
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
  return gn.find(([t]) => t.test(e))?.[1] ?? [];
}
function gr(e, t, n, r) {
  const [, , s, a] = gn.find(([c]) => c.test(t)), o = ae(e, si(e, n), r, r === "recruiter" ? 2 : 3, r === "recruiter" ? 6 : 9), l = K(o.map((c) => c.entity)), p = [];
  return n.includes("eval_design") && r !== "recruiter" && p.push({ type: "chart", chart: "cliniq" }), n.includes("rag") && l.includes("dia") && r === "engineer" && p.push({ type: "xray", arch: "arch.dia" }), n.includes("voice_ai") && p.push({ type: "trace", id: "t.voice.emergency" }), A("topic", se({ lead: s, points: Je(e, o, r === "recruiter" ? 1 : 2), extra: p, takeaway: a }), {
    entities: l,
    actions: l.slice(0, 3).map((c) => ri(e.entity.get(c))),
    followups: l[0] ? B(e, l[0]).slice(0, 3).concat(l[1] ? [`Compare ${ee(e, l[0])} and ${ee(e, l[1])}`] : []) : xt.slice(0, 4)
  });
}
function wr(e, t, n, r) {
  const s = t.id === "learning" ? n[0] : void 0;
  if (!s) return Ye(e, t, r);
  const a = ue(e, s), o = oi(a.entities.slice(0, 3).map((p) => ee(e, p))), l = a.category === "direct" ? `He already has direct experience with ${a.label}, in ${o}.` : a.category === "related" ? (a.via ? `He has closely related experience: ${a.statement ?? ""}` : `Partly. ${a.statement ?? ""}`).trim() : `${a.label} isn't part of his work yet. ${a.statement ?? ""}`.trim();
  return Ye(e, t, r, { lead: `${l} On picking it up: the clearest evidence is how many different kinds of systems he has built from scratch, each in a new stack or domain, and each one working, tested and documented.` });
}
function yr(e, t, n) {
  const r = ln(e, t, { limit: 8 });
  if (!r.length || r[0].score < 2)
    return A("no_evidence", [
      { type: "p", lead: !0, text: "I don't have evidence that answers that directly. I can speak to his projects, experience, technical skills, and how he works with people. For example:" }
    ], { followups: ["Why should we hire Rahul?", "How does he work in a team?", "What has Rahul actually shipped?", "How fast does he learn new technology?"] });
  const s = ae(e, r.map((o) => o.claim), n, 2, 6), a = s[0].entity;
  return A(
    "retrieval",
    se({ lead: "Here is what his work shows on that:", points: Je(e, s) }),
    { entities: K(s.map((o) => o.entity)), actions: Ne(e, a), followups: B(e, a).slice(0, 3), basis: { retrieved: r.map((o) => o.claim.id) } }
  );
}
function vr(e, t) {
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
function Pi(e, t) {
  const n = Ce(e, t), r = n.entities.slice(0, 3).map((o) => e.entity.get(o.id)).filter(Boolean), s = [{ type: "p", text: `Questions worth asking for ${n.title}, grounded in the evidence an interviewer would see:` }];
  for (const o of r) o.questions.slice(0, 2).forEach((l) => s.push({ type: "p", text: `• ${o.short}: ${l}` }));
  return n.requirements.filter((o) => o.category === "missing").slice(0, 2).forEach((o) => s.push({ type: "p", text: `• Gap: ${o.label}. How would you close it in your first months?` })), A("role_questions", s, { entities: r.map((o) => o.id), actions: [{ kind: "mode", label: "10-minute technical brief", target: "brief", arg: t }], followups: [`Challenge the evidence for ${n.title}`] });
}
function Di(e, t) {
  const n = Ce(e, t), r = n.entities.slice(0, 3).map((l) => l.id), s = r.flatMap((l) => Se(e, l)).slice(0, 4), a = n.requirements.filter((l) => l.category === "direct" && l.strength === "self_reported").map((l) => l.label), o = [
    { type: "p", text: `The weakest points in the evidence for ${n.title}:` },
    { type: "gaps", items: n.requirements.filter((l) => l.category === "missing" || l.category === "verification").map((l) => ({ id: l.id, name: l.label, statement: l.statement ?? "", closest: l.entities.slice(0, 3) })) }
  ];
  return a.length && o.push({ type: "note", tone: "warn", text: `Supported only by self-reported employment experience (no public artifact): ${a.join(", ")}.` }), s.length && o.push({ type: "claims", title: "Limitations stated in the strongest projects", ids: H(s) }), n.notes.forEach((l) => o.push({ type: "note", tone: "info", text: l })), A("challenge", o, { entities: r, followups: [`What would an interviewer ask for ${n.title}?`, "What failure did he find and fix?"] });
}
function oi(e) {
  return e.length <= 1 ? e[0] ?? "the portfolio" : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
const br = "https://astra6-interview-my-work.hf.space";
function wn() {
  return (document.querySelector('meta[name="imw-api"]')?.content || br).replace(/\/$/, "");
}
async function ft(e, t) {
  const n = new AbortController(), r = setTimeout(() => n.abort(), t.timeout);
  try {
    const s = await fetch(wn() + e, { ...t, signal: n.signal, headers: { "Content-Type": "application/json", ...t.headers || {} } });
    if (!s.ok) throw Object.assign(new Error(`HTTP ${s.status}`), { status: s.status });
    return await s.json();
  } finally {
    clearTimeout(r);
  }
}
async function _r(e) {
  e("checking");
  const t = (n) => e(n?.ai_enabled ? "ready" : "offline");
  try {
    t(await ft("/api/health", { method: "GET", timeout: 4e3 }));
    return;
  } catch {
  }
  e("waking");
  try {
    t(await ft("/api/health", { method: "GET", timeout: 45e3 }));
  } catch {
    e("offline");
  }
}
async function kr(e, t, n, r, s, a) {
  const o = await ft("/api/ask", {
    method: "POST",
    timeout: 3e4,
    body: JSON.stringify({ question: t, persona: n, history: r.slice(-3), role: s ?? null, topic: a ?? null })
  }), l = o.sentences.flatMap((h) => h.cites), p = [...o.sentences.map((h) => `${h.label ?? ""} ${h.text}`), o.hypothetical ?? ""].join(" ");
  if (!o.sentences.length || l.some((h) => !D(e.claim.get(h))) || un.test(p))
    throw new Error("model answer failed client validation");
  const c = [];
  if (o.sentences.some((h) => h.kind === "point" && h.label)) {
    const h = o.sentences.filter((d) => d.kind === "lead"), y = o.sentences.filter((d) => d.kind === "point"), g = o.sentences.filter((d) => d.kind === "takeaway");
    h.length && c.push({ type: "p", lead: !0, text: h.map((d) => d.text.trim()).join(" "), cites: [...new Set(h.flatMap((d) => d.cites))] }), c.push({ type: "points", items: y.map((d) => ({ label: (d.label || "").trim() || "Evidence", text: d.text.trim(), cites: d.cites })) }), g.length && c.push({ type: "takeaway", text: g.map((d) => d.text.trim()).join(" "), cites: [...new Set(g.flatMap((d) => d.cites))] });
  } else {
    let h = { text: "", cites: [] };
    for (const y of o.sentences)
      h.text += (h.text ? " " : "") + y.text.trim(), h.cites.push(...y.cites), h.text.length > 320 && (c.push({ type: "p", text: h.text, cites: [...new Set(h.cites)], lead: !c.length }), h = { text: "", cites: [] });
    h.text && c.push({ type: "p", text: h.text, cites: [...new Set(h.cites)], lead: !c.length });
  }
  o.hypothetical && c.push({ type: "note", tone: "info", text: `Hypothetical, not implemented: ${o.hypothetical}` });
  const w = (o.gaps ?? []).map((h) => e.gap.get(h)).filter(Boolean);
  return w.length && c.push({ type: "gaps", items: w.map((h) => ({ id: h.id, name: h.name, statement: h.statement, closest: [] })) }), {
    blocks: c,
    followups: (o.followups ?? []).slice(0, 4),
    actions: [],
    engine: "model",
    intent: "model",
    entities: (o.entities ?? []).filter((h) => e.entity.has(h)),
    basis: { retrieved: o.retrieved ?? [...new Set(l)], checks: o.checks, model: o.model }
  };
}
async function yn(e) {
  const t = await ft("/api/jd", { method: "POST", timeout: 25e3, body: JSON.stringify({ text: e.slice(0, 12e3) }) });
  return Array.isArray(t.requirements) ? t.requirements.filter((n) => typeof n == "string").slice(0, 30) : [];
}
const vn = Gn(null), M = () => Jn(vn), Ee = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function G(e, t = {}) {
  try {
    window.dispatchEvent(new CustomEvent("imw:event", { detail: { name: e, ...t } }));
  } catch {
  }
}
let Le = null;
const Ut = [], gt = /* @__PURE__ */ new Set(), V = (e, t, n) => {
  const r = document.createElement(e);
  return r.className = t, n && (r.textContent = n), r;
};
function xr(e, t, n) {
  Vt();
  const r = new Map(t.entities.map((v) => [v.id, v.score])), s = (v) => t.requirements.filter((k) => (k.category === "direct" || k.category === "related") && k.entities.includes(v)), a = document.getElementById("work"), o = a ? [...a.querySelectorAll(":scope > article.project")] : [];
  if (o.length && a) {
    Le = { parent: a, order: [...a.children], numbers: o.map((u) => [u.querySelector(".project-number"), u.querySelector(".project-number")?.textContent ?? ""]) };
    const v = (u) => e.entities.find((x) => x.anchor === `#${u.id}`)?.id ?? "", k = new Map(o.map((u) => [u, u.getBoundingClientRect()])), b = [...o].sort((u, x) => (r.get(v(x)) ?? 0) - (r.get(v(u)) ?? 0)), _ = a.querySelector(":scope > .research");
    if (b.forEach((u, x) => {
      a.insertBefore(u, _);
      const C = u.querySelector(".project-number");
      C && (C.textContent = `${String(x + 1).padStart(2, "0")} —`);
    }), !Ee())
      for (const u of b) {
        const x = k.get(u), C = u.getBoundingClientRect(), E = x.top - C.top;
        E && u.animate([{ transform: `translateY(${E}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
  }
  for (const v of e.entities) {
    if (v.id === "imw" || v.kind === "education") continue;
    const k = document.querySelector(v.anchor);
    if (!k || k.id === "work" || k.id === "experience") continue;
    const b = s(v.id);
    if (k.classList.add(b.length ? "imw-lens-hit" : "imw-lens-dim"), gt.add(k), b.length) {
      const _ = V("div", "imw-lens-tag");
      _.append(V("span", "imw-lens-tag-label", `✦ Evidence for ${t.title}`)), b.slice(0, 6).forEach((u) => _.append(V("span", `imw-lens-chip is-${u.category}`, u.label))), k.prepend(_), Ut.push(_);
    }
  }
  const l = t.requirements.filter((v) => v.category === "direct").flatMap((v) => [v.label, ...e.skill.get(v.id)?.aliases ?? []]).map((v) => v.toLowerCase());
  document.querySelectorAll("#skills .skill").forEach((v) => {
    const k = v.textContent?.toLowerCase() ?? "";
    v.classList.add(l.some((b) => b.length > 2 && k.includes(b)) ? "imw-lens-hit" : "imw-lens-dim"), gt.add(v);
  });
  const p = V("div", "imw-lens-bar");
  p.setAttribute("role", "region"), p.setAttribute("aria-label", "Role lens");
  const c = V("div", "imw-lens-head");
  c.append(V("span", "imw-lens-mark", "✦"), V("strong", "", `Viewing as: ${t.title}`));
  const f = V("div", "imw-lens-counts");
  ["direct", "related", "verification", "missing"].forEach((v) => f.append(V("span", `is-${v}`, `${t.counts[v]} ${ie[v].toLowerCase()}`)));
  const w = t.requirements.filter((v) => v.category === "missing").map((v) => v.label), h = V("div", "imw-lens-missing", w.length ? `Not demonstrated: ${w.slice(0, 4).join(", ")}${w.length > 4 ? "…" : ""}` : "Every listed requirement has at least related evidence."), y = V("div", "imw-lens-actions"), g = V("button", "imw-lens-btn", "Open analysis"), d = V("button", "imw-lens-btn is-primary", "Restore portfolio");
  g.onclick = () => n.reopen(), d.onclick = () => {
    Vt(), n.restore();
  }, y.append(g, d);
  const m = V("div", "imw-lens-mid");
  m.append(f, h), p.append(c, m, y), document.body.append(p), Ut.push(p), document.documentElement.classList.add("imw-lens"), requestAnimationFrame(() => (a ?? document.body).scrollIntoView({ behavior: Ee() ? "auto" : "smooth", block: "start" })), d.focus({ preventScroll: !0 });
}
function Vt() {
  Ut.splice(0).forEach((e) => e.remove()), gt.forEach((e) => e.classList.remove("imw-lens-hit", "imw-lens-dim")), gt.clear(), Le && (Le.order.forEach((e) => Le.parent.appendChild(e)), Le.numbers.forEach(([e, t]) => {
    e && (e.textContent = t);
  }), Le = null), document.documentElement.classList.remove("imw-lens");
}
let be = null;
function $r(e, t) {
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
function bn(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "Verified · public artifact" : "Verified · self-reported" : { verification_required: "Verification required", unsupported: "Unsupported", deprecated: "Withdrawn" }[e.status] ?? e.status;
}
function wt(e) {
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
function Cr({ id: e, compact: t }) {
  const { kb: n, setInspect: r, inspect: s } = M(), a = n.claim.get(e);
  if (!a) return null;
  const o = n.entity.get(a.entity), l = s?.kind === "claim" && s.id === e;
  return /* @__PURE__ */ i("li", { class: `imw-claim${l ? " is-on" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-claim-btn", onClick: () => r({ kind: "claim", id: e }), "aria-label": `View evidence: ${a.text}`, children: [
      /* @__PURE__ */ i(De, { cls: wt(a) }),
      /* @__PURE__ */ i("span", { class: "imw-claim-text", children: a.text })
    ] }),
    !t && /* @__PURE__ */ i("div", { class: "imw-claim-meta", children: [
      /* @__PURE__ */ i("span", { children: o?.short }),
      /* @__PURE__ */ i("span", { class: `imw-st ${wt(a)}`, children: bn(a) }),
      a.code?.length ? /* @__PURE__ */ i("a", { href: a.code[0].url, target: "_blank", rel: "noopener", class: "imw-mini-link", children: "Code ↗" }) : null,
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r({ kind: "claim", id: e }), children: "Evidence" })
    ] })
  ] });
}
function ne({ ids: e, title: t, compact: n }) {
  return e.length ? /* @__PURE__ */ i("div", { class: "imw-claims", children: [
    t && /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: t }),
    /* @__PURE__ */ i("ul", { children: e.map((r) => /* @__PURE__ */ i(Cr, { id: r, compact: n }, r)) })
  ] }) : null;
}
function ct({ a: e }) {
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
const qe = { direct: "cat-direct", related: "cat-related", verification: "cat-pending", missing: "cat-missing" };
function $e({ children: e }) {
  return /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: e });
}
function Er({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.entity.get(e);
  return r ? /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n({ kind: "entity", id: e }), children: r.short }) : null;
}
const it = ["direct", "related", "verification", "missing"], qr = { direct: "direct", related: "related", verification: "to verify", missing: "not shown" };
function $t({ counts: e, compact: t }) {
  const n = it.reduce((r, s) => r + e[s], 0) || 1;
  return /* @__PURE__ */ i("div", { class: `imw-covbar${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-covbar-track", role: "img", "aria-label": it.map((r) => `${e[r]} ${ie[r]}`).join(", "), children: it.filter((r) => e[r]).map((r) => /* @__PURE__ */ i("span", { class: `imw-covbar-seg ${qe[r]}`, style: { flexGrow: e[r] / n }, title: `${e[r]} · ${ie[r]}` }, r)) }),
    /* @__PURE__ */ i("ul", { class: "imw-covbar-legend", children: it.map((r) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${qe[r]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("b", { children: e[r] }),
      " ",
      t ? qr[r] : ie[r]
    ] }, r)) })
  ] });
}
function _n({ analysis: e, max: t = 16 }) {
  const { kb: n, setInspect: r } = M(), [s, a] = q(null), o = e.requirements.slice(0, t), l = e.entities.slice(0, 7).map((b) => b.id), p = 26, c = 18, f = 640, w = c * 2 + Math.max(o.length, l.length) * p, h = (b) => c + (b + 0.5) * p * (Math.max(o.length, l.length) / Math.max(l.length, 1)), y = (b) => c + (b + 0.5) * p, g = 232, d = 408, m = o.flatMap(
    (b, _) => b.category === "direct" || b.category === "related" ? b.entities.filter((u) => l.includes(u)).slice(0, 3).map((u) => ({ r: b.id, e: u, cat: b.category, y1: y(_), y2: h(l.indexOf(u)) })) : []
  ), v = (b, _) => !s || s === b || s === _, k = !Ee();
  return /* @__PURE__ */ i("figure", { class: "imw-map", children: [
    /* @__PURE__ */ i("svg", { viewBox: `0 0 ${f} ${w}`, role: "group", "aria-label": "Requirement to evidence map", class: k ? "is-anim" : "", children: [
      m.map((b, _) => /* @__PURE__ */ i(
        "path",
        {
          d: `M${g},${b.y1} C${g + 90},${b.y1} ${d - 90},${b.y2} ${d},${b.y2}`,
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
          onKeyDown: (u) => (u.key === "Enter" || u.key === " ") && (u.preventDefault(), r({ kind: "req", req: b })),
          children: [
            /* @__PURE__ */ i("rect", { x: 0, y: y(_) - p / 2, width: g + 6, height: p, class: "imw-hit" }),
            /* @__PURE__ */ i("text", { x: g - 12, y: y(_) + 4, "text-anchor": "end", children: Ar(b.label, 30) }),
            /* @__PURE__ */ i("circle", { cx: g, cy: y(_), r: 4.5 })
          ]
        },
        b.id
      )),
      l.map((b, _) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-ent${s && s !== b && !m.some((u) => u.e === b && u.r === s) ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": n.entity.get(b)?.name,
          onMouseEnter: () => a(b),
          onMouseLeave: () => a(null),
          onFocus: () => a(b),
          onBlur: () => a(null),
          onClick: () => r({ kind: "entity", id: b }),
          onKeyDown: (u) => (u.key === "Enter" || u.key === " ") && (u.preventDefault(), r({ kind: "entity", id: b })),
          children: [
            /* @__PURE__ */ i("rect", { x: d - 6, y: h(_) - p / 2, width: f - d + 6, height: p, class: "imw-hit" }),
            /* @__PURE__ */ i("circle", { cx: d, cy: h(_), r: 5.5 }),
            /* @__PURE__ */ i("text", { x: d + 14, y: h(_) + 4, children: n.entity.get(b)?.short })
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
const Ar = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e, Fi = [
  { key: "precision", label: "Precision", cls: "viz-1" },
  { key: "recall", label: "Recall", cls: "viz-2" },
  { key: "f1", label: "F1", cls: "viz-3" }
];
function kn() {
  const { kb: e } = M(), t = e.datasets.cliniq_confusion, [n, r] = q(null), [s, a] = q(!1), o = he(() => t.methods.map((m) => {
    const v = m.tp / (m.tp + m.fp), k = m.tp / (m.tp + m.fn);
    return { ...m, precision: v, recall: k, f1: 2 * v * k / (v + k) };
  }), [t]), l = 560, p = 230, c = 36, f = 30, w = 12, h = (l - c - 12) / o.length, y = 22, g = 2, d = (m) => w + (1 - m) * (p - w - f);
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
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${l} ${p}`, role: "img", "aria-label": "Precision, recall and F1 for rules, embedding and LLM plus RAG detectors", children: [
        [0, 0.25, 0.5, 0.75, 1].map((m) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: c, x2: l - 8, y1: d(m), y2: d(m) }),
          /* @__PURE__ */ i("text", { x: c - 6, y: d(m) + 4, "text-anchor": "end", children: m.toFixed(2) })
        ] }, m)),
        o.map((m, v) => {
          const k = c + v * h + (h - (y * 3 + g * 2)) / 2;
          return /* @__PURE__ */ i("g", { children: [
            Fi.map((b, _) => {
              const u = m[b.key], x = k + _ * (y + g);
              return /* @__PURE__ */ i(
                "path",
                {
                  class: `imw-bar ${b.cls}`,
                  d: Sr(x, d(u), y, d(0) - d(u)),
                  onMouseEnter: () => r({ x: (x + y / 2) / l, y: d(u) / p, text: `${m.label} · ${b.label} ${u.toFixed(3)}` })
                },
                b.key
              );
            }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: c + v * h + h / 2, y: p - 10, "text-anchor": "middle", children: m.label })
          ] }, m.id);
        })
      ] }),
      n && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: `${n.x * 100}%`, top: `${n.y * 100}%` }, children: n.text })
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: Fi.map((m) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-swatch ${m.cls}`, "aria-hidden": "true" }),
      m.label
    ] }, m.key)) }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. ",
      t.caveat
    ] })
  ] });
}
function Sr(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return r <= 0 ? "" : `M${e},${t + r} V${t + s} Q${e},${t} ${e + s},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r} Z`;
}
function li() {
  const { kb: e } = M(), t = e.datasets.voice_quality, n = [...t.rows].sort((h, y) => y[3] - h[3]), [r, s] = q(null), a = 560, o = 20, l = 150, p = 40, c = n.length * o + 24, f = (h) => l + h / 60 * (a - l - p), w = n.reduce((h, y) => h + y[3], 0) / n.length;
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: /* @__PURE__ */ i("strong", { children: "Mid-call silence per recorded call (%)" }) }),
    /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => s(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${a} ${c}`, role: "img", "aria-label": `Mid-call silence per call; average ${w.toFixed(1)} percent`, children: [
        [0, 20, 40, 60].map((h) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: f(h), x2: f(h), y1: 0, y2: c - 18 }),
          /* @__PURE__ */ i("text", { x: f(h), y: c - 4, "text-anchor": "middle", children: h })
        ] }, h)),
        n.map((h, y) => {
          const g = y * o + 3;
          return /* @__PURE__ */ i("g", { onMouseEnter: () => s({ y: (g + o / 2) / c, text: `${h[0]} · silence ${h[3]}% · talk-over ${h[2]}% · longest gap ${h[4]}s` }), children: [
            /* @__PURE__ */ i("rect", { class: "imw-hit", x: 0, y: g - 2, width: a, height: o }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: l - 8, y: g + 11, "text-anchor": "end", children: h[0].replace(/_/g, " ") }),
            /* @__PURE__ */ i("path", { class: "imw-bar viz-1", d: Ir(l, g + 2, f(h[3]) - l, o - 8) })
          ] }, h[0]);
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
function Ir(e, t, n, r) {
  const s = Math.min(4, r / 2, n / 2);
  return n <= 0 ? "" : `M${e},${t} H${e + n - s} Q${e + n},${t} ${e + n},${t + s} V${t + r - s} Q${e + n},${t + r} ${e + n - s},${t + r} H${e} Z`;
}
const Rt = 198, nt = 96, Ve = 174, _e = 56, je = 28, Ni = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e;
function xn({ arch: e, selected: t, onSelect: n, scan: r = !0 }) {
  const s = ye(null), [a, o] = q(!1), [l, p] = q(!1);
  Yn(() => {
    const d = s.current;
    if (!d) return;
    const m = new ResizeObserver(([v]) => o(v.contentRect.width < 560));
    return m.observe(d), () => m.disconnect();
  }, []), z(() => {
    if (!r || Ee()) return;
    p(!0);
    const d = setTimeout(() => p(!1), 1300);
    return () => clearTimeout(d);
  }, [e.id, r]);
  const c = Math.max(...e.nodes.map((d) => d.col)) + 1, f = Math.max(...e.nodes.map((d) => d.row)) + 1, w = je * 2 + c * Rt - (Rt - Ve), h = je * 2 + f * nt - (nt - _e) + (e.lanes.length ? 14 : 0), y = (d) => {
    const m = e.nodes.find((v) => v.id === d);
    return { x: je + m.col * Rt, y: je + (e.lanes.length ? 14 : 0) + m.row * nt };
  }, g = (d, m) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), n(m));
  };
  if (a) {
    const d = new Map(e.nodes.map((b) => [b.id, 0]));
    e.edges.forEach(([, b]) => d.set(b, (d.get(b) ?? 0) + 1));
    const m = (b, _) => b.col - _.col || b.row - _.row, v = e.nodes.filter((b) => !d.get(b.id)).sort(m), k = [];
    for (; v.length; ) {
      const b = v.shift();
      k.push(b);
      const _ = e.edges.filter(([u]) => u === b.id).map(([, u]) => u).filter((u) => (d.set(u, d.get(u) - 1), d.get(u) === 0)).map((u) => e.nodes.find((x) => x.id === u)).sort(m);
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
  return /* @__PURE__ */ i("div", { ref: s, class: `imw-arch${l ? " is-scanning" : ""}`, children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${w} ${h}`, role: "group", "aria-label": `${e.title} architecture`, children: [
    /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("marker", { id: `ah-${e.id}`, viewBox: "0 0 8 8", refX: "7", refY: "4", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse", children: /* @__PURE__ */ i("path", { d: "M0,0 L8,4 L0,8 z", class: "imw-arrowhead" }) }) }),
    e.lanes.map((d) => /* @__PURE__ */ i("text", { class: "imw-lane", x: je, y: je + d.row * nt + 6, children: d.label.toUpperCase() }, d.row)),
    e.edges.map(([d, m]) => {
      const v = y(d), k = y(m);
      let b;
      if (k.x > v.x) {
        const u = v.x + Ve, x = v.y + _e / 2, C = k.x - 4, E = k.y + _e / 2, S = (u + C) / 2;
        b = `M${u},${x} C${S},${x} ${S},${E} ${C},${E}`;
      } else if (k.x < v.x) {
        const u = v.x, x = v.y + _e / 2, C = k.x + Ve + 4, E = k.y + _e / 2, S = (u + C) / 2;
        b = `M${u},${x} C${S},${x} ${S},${E} ${C},${E}`;
      } else {
        const u = k.y > v.y, x = v.x + Ve / 2, C = u ? v.y + _e : v.y, E = u ? k.y - 4 : k.y + _e + 4;
        b = `M${x},${C} L${x},${E}`;
      }
      return /* @__PURE__ */ i("path", { d: b, class: `imw-edge${t === d || t === m ? " is-on" : ""}`, "marker-end": `url(#ah-${e.id})` }, d + m);
    }),
    e.nodes.map((d) => {
      const m = y(d.id);
      return /* @__PURE__ */ i(
        "g",
        {
          class: `imw-node${t === d.id ? " is-on" : ""}`,
          transform: `translate(${m.x},${m.y})`,
          tabIndex: 0,
          role: "button",
          "aria-pressed": t === d.id,
          "aria-label": `${d.label}. ${d.sub}`,
          style: { animationDelay: `${d.col * 120}ms` },
          onClick: () => n(d.id),
          onKeyDown: (v) => g(v, d.id),
          children: [
            /* @__PURE__ */ i("rect", { width: Ve, height: _e, rx: 4 }),
            /* @__PURE__ */ i("text", { x: 12, y: 24, class: "imw-node-label", children: Ni(d.label, 22) }),
            /* @__PURE__ */ i("text", { x: 12, y: 42, class: "imw-node-sub", children: Ni(d.sub, 25) })
          ]
        },
        d.id
      );
    }),
    l && /* @__PURE__ */ i("rect", { class: "imw-scan", x: 0, y: 0, width: 3, height: h })
  ] }) });
}
const $n = (e) => {
  const t = new URL(["..", "..", "evidence", "dist", e].join("/"), import.meta.url), n = new URL(import.meta.url).searchParams.get("v");
  return n && t.searchParams.set("v", n), t.href;
};
function Cn({ id: e, compact: t }) {
  const { kb: n, go: r } = M(), s = n.traces.find((w) => w.id === e), [a, o] = q(t ? 0 : 1 / 0), l = ye();
  if (z(() => () => clearInterval(l.current), []), !s) return null;
  if (s.dataset === "dia_regression") return /* @__PURE__ */ i(Mr, {});
  const p = t ? s.steps.slice(0, 4) : s.steps, c = () => {
    if (G("replay_played", { trace: s.id }), Ee()) {
      o(1 / 0);
      return;
    }
    o(0), clearInterval(l.current);
    let w = 0;
    l.current = window.setInterval(() => {
      w++, o(w), w >= p.length && clearInterval(l.current);
    }, 520);
  }, f = a === 1 / 0 ? p.length : a;
  return /* @__PURE__ */ i("figure", { class: `imw-trace${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: s.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: c, "aria-label": `Replay ${s.title}`, children: "▶ Replay" }),
        t && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("lab", s.id), children: "Open in proof lab →" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: s.summary }),
    /* @__PURE__ */ i("ol", { class: "imw-steps", "aria-live": "polite", children: p.map((w, h) => /* @__PURE__ */ i("li", { class: `imw-step is-${w.kind}${h < f ? " is-shown" : ""}`, "aria-hidden": h >= f, children: [
      /* @__PURE__ */ i("span", { class: "imw-step-kind", children: w.label }),
      w.quote ? /* @__PURE__ */ i("q", { children: w.quote }) : /* @__PURE__ */ i("span", { children: w.body }),
      w.status && /* @__PURE__ */ i("span", { class: `imw-verdict is-${w.status}`, children: w.status === "pass" ? "✓ PASS" : w.status === "fail" ? "✕ FAIL" : "! REVIEW" })
    ] }, h)) }),
    t && s.steps.length > p.length && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      s.steps.length - p.length,
      " more steps in the full replay."
    ] })
  ] });
}
function Mr() {
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
function En({ id: e }) {
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
      /* @__PURE__ */ i(We, { refs: r.code }),
      r.trace && /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => n("lab", r.trace), children: "▶ Replay the recorded run" })
    ] })
  ] });
}
function jr(e, t, n, r, s, a, o) {
  const l = e / (e + n), p = t / (t + r), c = s * a * l, f = s * (1 - a) * p, w = c + f;
  return { trueAlerts: c, falseAlerts: f, missed: s * a * (1 - l), reviews: w, hours: w * o / 60, precision: w ? c / w : null };
}
function Tr() {
  const { kb: e } = M(), t = e.datasets.cliniq_confusion, [n, r] = q(1e4), [s, a] = q(5), [o, l] = q(3), p = he(() => t.methods.map((w) => ({ m: w, r: jr(w.tp, w.fp, w.fn, w.tn, n, s / 100, o) })), [t, n, s, o]), c = Math.max(...p.map((w) => w.r.hours), 1), f = (w) => w.toLocaleString(void 0, { maximumFractionDigits: 0 });
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
      /* @__PURE__ */ i("tbody", { children: p.map(({ m: w, r: h }) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { scope: "row", children: w.label }),
        /* @__PURE__ */ i("td", { children: f(h.reviews) }),
        /* @__PURE__ */ i("td", { children: f(h.trueAlerts) }),
        /* @__PURE__ */ i("td", { children: f(h.missed) }),
        /* @__PURE__ */ i("td", { children: h.precision === null ? "—" : h.precision.toFixed(2) }),
        /* @__PURE__ */ i("td", { class: "imw-barcell", children: [
          /* @__PURE__ */ i("span", { class: "imw-inline-bar viz-2", style: { width: `${h.hours / c * 100}%` }, "aria-hidden": "true" }),
          /* @__PURE__ */ i("b", { children: f(h.hours) })
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
function Rr() {
  const [e, t] = q(null);
  if (z(() => {
    fetch($n("evaluation-report.json")).then((s) => s.ok ? s.json() : null).then(t).catch(() => t(null));
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
function Lr() {
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
      /* @__PURE__ */ i(Cn, { id: r }, r)
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Try to break it" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Adversarial and edge cases, what the system did, and the test that keeps it that way." }),
      /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: a.map((o) => /* @__PURE__ */ i(En, { id: o.id }, o.id)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Run the numbers · ClinIQ review workload" }),
      /* @__PURE__ */ i(Tr, {})
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Measured from the audio · Voice QA Harness" }),
      /* @__PURE__ */ i(li, {})
    ] }),
    /* @__PURE__ */ i(Rr, {})
  ] });
}
function Pr({ a: e }) {
  const { setInspect: t, ask: n } = M(), r = ai(e), s = (a) => r.indexOf(a) + 1;
  return /* @__PURE__ */ i("div", { class: "imw-answer", children: [
    /* @__PURE__ */ i("div", { class: "imw-answer-head", children: [
      /* @__PURE__ */ i("span", { class: `imw-engine is-${e.engine}`, children: e.engine === "model" ? "Claude · validated" : "Evidence engine" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => t({ kind: "basis", retrieved: e.basis?.retrieved ?? [], checks: e.basis?.checks, model: e.basis?.model, engine: e.engine }), children: "Why this answer?" }),
      e.refined && /* @__PURE__ */ i("span", { class: "imw-help", children: "Requirements refined by AI parsing" })
    ] }),
    e.blocks.map((a, o) => /* @__PURE__ */ i(Fr, { b: a, num: s }, o)),
    e.actions.length > 0 && /* @__PURE__ */ i("div", { class: "imw-actions", children: e.actions.map((a, o) => /* @__PURE__ */ i(ct, { a }, o)) }),
    e.followups.length > 0 && /* @__PURE__ */ i("div", { class: "imw-followups", "aria-label": "Suggested follow-up questions", children: e.followups.map((a) => /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n(a), children: a }, a)) })
  ] });
}
const Dr = (e) => {
  const t = e.replace(/^Bottom line: /, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
};
function Lt({ ids: e, num: t }) {
  const { kb: n, setInspect: r } = M();
  return e?.length ? /* @__PURE__ */ i(oe, { children: e.map((s) => /* @__PURE__ */ i("button", { class: "imw-cite", onClick: () => r({ kind: "claim", id: s }), "aria-label": `Source ${t(s)}: ${n.claim.get(s)?.text ?? s}`, children: t(s) }, s)) }) : null;
}
function Fr({ b: e, num: t }) {
  const n = M(), { kb: r, setInspect: s, go: a } = n;
  switch (e.type) {
    case "p":
      return /* @__PURE__ */ i("p", { class: `imw-p${e.lead ? " is-lead" : ""}`, children: [
        e.text,
        /* @__PURE__ */ i(Lt, { ids: e.cites, num: t })
      ] });
    case "points":
      return /* @__PURE__ */ i("ol", { class: "imw-points", children: e.items.map((o) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: o.label }),
        /* @__PURE__ */ i("span", { children: [
          o.text,
          /* @__PURE__ */ i(Lt, { ids: o.cites, num: t })
        ] })
      ] }, o.label)) });
    case "takeaway":
      return /* @__PURE__ */ i("div", { class: "imw-takeaway", children: [
        /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Bottom line" }),
        /* @__PURE__ */ i("p", { children: [
          Dr(e.text),
          /* @__PURE__ */ i(Lt, { ids: e.cites, num: t })
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
        /* @__PURE__ */ i($t, { counts: e.analysis.counts }),
        /* @__PURE__ */ i(_n, { analysis: e.analysis, max: 12 }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
          n.setCoverage(e.analysis), a("role");
        }, children: "Open the full analysis →" })
      ] });
    case "xray": {
      const o = r.architectures.find((l) => l.id === e.arch);
      return o ? /* @__PURE__ */ i("div", { class: "imw-xray-inline", children: [
        /* @__PURE__ */ i(xn, { arch: o, scan: !1, onSelect: (l) => s({ kind: "node", arch: o.id, node: l }) }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a("xray", o.entity), children: "Open X-Ray view →" })
      ] }) : null;
    }
    case "failures":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(ci, { id: o }, o)) });
    case "decisions":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((o) => /* @__PURE__ */ i(di, { id: o }, o)) });
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
          o.closest.map((l) => /* @__PURE__ */ i(Er, { id: l }, l))
        ] })
      ] }, o.id)) });
    case "chart":
      return e.chart === "cliniq" ? /* @__PURE__ */ i(kn, {}) : /* @__PURE__ */ i(li, {});
    case "trace":
      return /* @__PURE__ */ i(Cn, { id: e.id, compact: !0 });
  }
}
function ci({ id: e, open: t = !1 }) {
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
      /* @__PURE__ */ i("ol", { class: "imw-flow", children: o.map(([l, p]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: l }),
        /* @__PURE__ */ i("span", { children: p })
      ] }, l)) }),
      /* @__PURE__ */ i(We, { refs: r.code }),
      /* @__PURE__ */ i(ne, { ids: r.claims, title: "Evidence", compact: !0 })
    ] })
  ] });
}
function di({ id: e }) {
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
function Nr({ analysis: e }) {
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
const Wr = [
  { q: "What has Rahul actually shipped?" },
  { q: "Show me his strongest RAG work." },
  { q: "How does he evaluate AI systems?" },
  { q: "What has he built beyond LLM wrappers?" },
  { q: "Show me his backend engineering experience." },
  { q: "What failure did he find and fix?" },
  { q: "Evaluate Rahul for a role", mode: "role" },
  { q: "Paste a job description", mode: "jd" }
];
function Hr({ turns: e }) {
  const { kb: t, ask: n, go: r, persona: s, setPersona: a } = M(), [o, l] = q(""), p = ye(null), c = ye(null), f = e[e.length - 1];
  z(() => {
    c.current?.querySelector(".imw-turn:last-child")?.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [e.length, f?.pending]);
  const w = () => {
    const g = o.trim();
    g && (l(""), p.current && (p.current.style.height = "auto"), n(g));
  }, h = ni(o), y = t.claims.reduce((g, d) => g + (D(d) ? d.code?.length ?? 0 : 0), 0);
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
        /* @__PURE__ */ i("div", { class: "imw-starters", children: Wr.map((g, d) => /* @__PURE__ */ i("button", { onClick: () => {
          G("starter_question_selected", { index: d }), g.mode ? r("role", g.mode === "jd" ? "jd" : void 0) : n(g.q);
        }, children: [
          /* @__PURE__ */ i("span", { class: "imw-starter-n", children: String(d + 1).padStart(2, "0") }),
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
        g.a && /* @__PURE__ */ i(Pr, { a: g.a })
      ] }, g.id)),
      e.some((g) => g.a) && !f?.pending && /* @__PURE__ */ i("p", { class: "imw-keep", children: [
        "Want to keep this? ",
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("export"), children: "Download your questions and answers as a PDF →" })
      ] })
    ] }),
    /* @__PURE__ */ i("form", { class: "imw-composer", onSubmit: (g) => {
      g.preventDefault(), w();
    }, children: [
      h && /* @__PURE__ */ i("p", { class: "imw-jd-hint", children: "This looks like a job description. Sending it runs an evidence-coverage analysis." }),
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
          onInput: (g) => {
            const d = g.target;
            l(d.value), d.style.height = "auto", d.style.height = `${Math.min(d.scrollHeight, 180)}px`;
          },
          onKeyDown: (g) => {
            g.key === "Enter" && !g.shiftKey && (g.preventDefault(), w());
          }
        }
      ),
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-send", disabled: !o.trim(), children: h ? "Analyze" : "Ask" })
    ] })
  ] });
}
function Or(e) {
  const t = location.origin + location.pathname;
  if (e.source === "role" && e.roleId) return `${t}#imw=role:${e.roleId}`;
  const n = e.requirements.map((r) => r.id).filter((r) => !r.startsWith("term:")).join(",");
  return `${t}#imw=role:${encodeURIComponent(`jd~${n}`)}`;
}
function Br(e, t) {
  const n = [`# Evidence coverage: ${e.title}`, `Candidate: ${t}`, ""];
  for (const r of ["direct", "related", "verification", "missing"]) {
    const s = e.requirements.filter((a) => a.category === r);
    s.length && (n.push(`## ${ie[r]} (${s.length})`), s.forEach((a) => n.push(`- ${a.label}${a.statement && r !== "direct" ? ` — ${a.statement}` : ""}`)), n.push(""));
  }
  return e.notes.length && n.push(...e.notes.map((r) => `> ${r}`), ""), n.push("Generated by Interview My Work from verified evidence. No fit score is computed."), n.join(`
`);
}
function zr() {
  const { kb: e, coverage: t, setCoverage: n, modeArg: r, api: s, toggleLens: a, ask: o, go: l } = M(), [p, c] = q(r === "jd" ? "jd" : "role"), [f, w] = q(""), [h, y] = q(!1), [g, d] = q("");
  z(() => {
    if (!r) return;
    if (r === "jd") {
      c("jd");
      return;
    }
    const u = decodeURIComponent(r);
    if (e.role.has(u)) n(Ce(e, u));
    else if (u.startsWith("jd~")) {
      const C = u.slice(3).split(",").filter(Boolean).map((E) => E.startsWith("near:") ? ue(e, e.skills.find((S) => S.near?.includes(E.slice(5)))?.id ?? E, { near: E.slice(5) }) : ue(e, E));
      n(ti(e, "Shared job description", C, { source: "jd" }));
    }
  }, [r]);
  const m = (u) => {
    u && (n(Ce(e, u)), G("role_selected", { role: u }));
  }, v = () => {
    if (f.trim().length < 40) return;
    const u = mt(e, f);
    n(u), G("jd_analyzed", { requirements: u.requirements.length }), s === "ready" && (y(!0), yn(f).then((x) => {
      x.length && n(mt(e, f, x), u);
    }).catch(() => {
    }).finally(() => y(!1)));
  }, k = async (u) => {
    if (t)
      try {
        await navigator.clipboard.writeText(u === "link" ? Or(t) : Br(t, e.subject.name)), d(u), setTimeout(() => d(""), 2e3);
      } catch {
      }
  }, b = e.roles.filter((u) => u.priority).sort((u, x) => u.priority - x.priority), _ = [["strong", "Strong fit"], ["adjacent", "Adjacent"], ["stretch", "Stretch"]];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Evaluate against a role" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "What are you evaluating Rahul for?" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Each requirement is classified as direct evidence, related evidence, verification required, or not currently demonstrated. There is no match percentage." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg", role: "tablist", "aria-label": "Input", children: [
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": p === "role", class: p === "role" ? "is-on" : "", onClick: () => c("role"), children: "Select a role" }),
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": p === "jd", class: p === "jd" ? "is-on" : "", onClick: () => c("jd"), children: "Paste a job description" })
    ] }),
    p === "role" ? /* @__PURE__ */ i("div", { class: "imw-rolepick", children: [
      /* @__PURE__ */ i("div", { class: "imw-role-cards", children: b.map((u) => /* @__PURE__ */ i("button", { class: t?.roleId === u.id && t.source === "role" ? "is-on" : "", onClick: () => m(u.id), children: [
        /* @__PURE__ */ i("strong", { children: u.title }),
        /* @__PURE__ */ i("small", { children: u.proof_note })
      ] }, u.id)) }),
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "More roles" }),
        /* @__PURE__ */ i("select", { onChange: (u) => m(u.target.value), value: t?.source === "role" ? t.roleId : "", children: [
          /* @__PURE__ */ i("option", { value: "", children: "Choose a role…" }),
          _.map(([u, x]) => /* @__PURE__ */ i("optgroup", { label: x, children: e.roles.filter((C) => C.tier === u && !C.priority).map((C) => /* @__PURE__ */ i("option", { value: C.id, children: C.title }, C.id)) }, u))
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
          onInput: (u) => w(u.target.value)
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
      /* @__PURE__ */ i($t, { counts: t.counts }),
      t.notes.map((u) => /* @__PURE__ */ i("p", { class: "imw-note", children: u }, u)),
      /* @__PURE__ */ i(_n, { analysis: t, max: 18 }),
      /* @__PURE__ */ i(Nr, { analysis: t }),
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
function Ur() {
  const { kb: e, modeArg: t, setInspect: n, inspect: r, ask: s, noteEntity: a } = M(), o = e.architectures, [l, p] = q(o.find((u) => u.entity === t)?.id ?? o[0].id), c = o.find((u) => u.id === l), [f, w] = q("why");
  z(() => {
    const u = o.find((x) => x.entity === t);
    u && p(u.id);
  }, [t]), z(() => {
    a(c.entity);
  }, [c.entity]);
  const h = e.entity.get(c.entity), y = e.statableByEntity.get(c.entity) ?? [], g = e.decisions.filter((u) => u.entity === c.entity), d = e.failures.filter((u) => u.entity === c.entity), m = e.attacks.filter((u) => u.entity === c.entity), v = y.filter((u) => u.tags.some((x) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(x))), k = y.flatMap((u) => u.code ?? []), b = r?.kind === "node" && r.arch === c.id ? r.node : void 0, _ = [
    ["why", "Why this design?", g.length],
    ["failures", "Failure cases", d.length + y.filter((u) => u.kind === "limitation").length],
    ["break", "Try to break it", m.length],
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
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "System", children: o.map((u) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": u.id === l, class: u.id === l ? "is-on" : "", onClick: () => {
      p(u.id), n(null);
    }, children: e.entity.get(u.entity)?.short }, u.id)) }),
    /* @__PURE__ */ i(xn, { arch: c, selected: b, onSelect: (u) => n({ kind: "node", arch: c.id, node: u }) }),
    /* @__PURE__ */ i("div", { class: "imw-subtabs", role: "tablist", "aria-label": "Inspect", children: _.filter(([, , u]) => u > 0).map(([u, x, C]) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": f === u, class: f === u ? "is-on" : "", onClick: () => w(u), children: [
      x,
      " ",
      /* @__PURE__ */ i("small", { children: C })
    ] }, u)) }),
    /* @__PURE__ */ i("div", { class: "imw-tabpanel", role: "tabpanel", children: [
      f === "why" && /* @__PURE__ */ i("div", { class: "imw-stack", children: g.map((u) => /* @__PURE__ */ i(di, { id: u.id }, u.id)) }),
      f === "failures" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        d.map((u, x) => /* @__PURE__ */ i(ci, { id: u.id, open: x === 0 }, u.id)),
        /* @__PURE__ */ i(ne, { ids: y.filter((u) => u.kind === "limitation").map((u) => u.id), title: "Stated limitations" })
      ] }),
      f === "break" && /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: m.map((u) => /* @__PURE__ */ i(En, { id: u.id }, u.id)) }),
      f === "evaluation" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i(ne, { ids: v.map((u) => u.id) }),
        c.entity === "cliniq" && /* @__PURE__ */ i(kn, {}),
        c.entity === "voice" && /* @__PURE__ */ i(li, {})
      ] }),
      f === "code" && /* @__PURE__ */ i(We, { refs: k, max: 30 }),
      f === "questions" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i("p", { class: "imw-help", children: "Questions a skeptical interviewer could press on. Select one to see what the evidence says." }),
        h.questions.map((u) => /* @__PURE__ */ i("button", { class: "imw-question", onClick: () => s(u.includes(h.short) ? u : `${u} (${h.short})`), children: u }, u))
      ] })
    ] })
  ] });
}
const Vr = 1e3, Gr = 720, J = 500, te = 360, Gt = 170, Kt = 305, Kr = /* @__PURE__ */ new Set(["project", "research", "experience", "leadership"]);
function Qr(e, t) {
  const n = e.groups, r = e.entities.filter((d) => Kr.has(d.kind)), s = new Map(e.skills.map((d) => [d.id, d.group])), a = /* @__PURE__ */ new Map();
  for (const d of e.claims.filter(D)) {
    const m = a.get(d.entity) ?? /* @__PURE__ */ new Map();
    new Set(d.tags.map((v) => s.get(v)).filter(Boolean)).forEach((v) => m.set(v, (m.get(v) ?? 0) + 1)), a.set(d.entity, m);
  }
  const o = new Map(n.map((d, m) => [d.id, -Math.PI / 2 + m / n.length * Math.PI * 2])), l = new Set(t?.requirements.filter((d) => d.category === "direct" || d.category === "related").map((d) => d.id) ?? []), p = new Map(n.map((d) => {
    if (!t) return [d.id, 1];
    const m = e.skills.filter((v) => v.group === d.id);
    return [d.id, m.filter((v) => l.has(v.id)).length / Math.max(1, Math.min(4, m.length))];
  })), c = Math.max(1, ...t?.entities.map((d) => d.score) ?? [1]), f = new Map(r.map((d) => [d.id, t ? (t.entities.find((m) => m.id === d.id)?.score ?? 0) / c : 1])), w = /* @__PURE__ */ new Map();
  for (const d of n) {
    const m = Math.min(1, p.get(d.id)), v = t ? Gt * (m > 0 ? 1 - 0.16 * m : 1.1) : Gt, k = o.get(d.id);
    w.set(d.id, { x: J + v * Math.cos(k), y: te + v * Math.sin(k), o: t ? m > 0 ? 1 : 0.16 : 1 });
  }
  const h = r.map((d) => {
    const m = a.get(d.id) ?? /* @__PURE__ */ new Map();
    let v = 0, k = 0;
    return m.forEach((b, _) => {
      const u = o.get(_);
      v += b * Math.cos(u), k += b * Math.sin(u);
    }), { id: d.id, a: Math.atan2(k, v) };
  }).sort((d, m) => d.a - m.a), y = Math.PI * 2 / h.length * 0.8;
  for (let d = 0; d < 8; d++)
    for (let m = 0; m < h.length; m++) {
      const v = h[m], k = h[(m + 1) % h.length];
      let b = k.a - v.a;
      if (m === h.length - 1 && (b += Math.PI * 2), b < y) {
        const _ = (y - b) / 2;
        v.a -= _, k.a += _;
      }
    }
  const g = /* @__PURE__ */ new Map();
  for (const d of h) {
    const m = f.get(d.id), v = t ? Kt * (m > 0 ? 1 - 0.2 * m : 1.06) : Kt;
    g.set(d.id, { x: J + v * Math.cos(d.a), y: te + v * Math.sin(d.a), o: t ? m > 0 ? 0.35 + 0.65 * m : 0.14 : 1 });
  }
  return { groups: n, ents: r, weight: a, gPos: w, ePos: g };
}
const Yr = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
function Jr() {
  const { kb: e, modeArg: t, coverage: n, setInspect: r, go: s } = M(), [a, o] = q(t && e.role.has(t) ? t : ""), [l, p] = q(null), c = he(() => a === "__current" ? n : a ? Ce(e, a) : null, [a, e, n]), f = he(() => Qr(e, c), [e, c]), [w, h] = q(() => new Map([...f.gPos, ...f.ePos].map(([_]) => [_, { x: J, y: te, o: 0 }]))), y = ye(w);
  z(() => {
    const _ = new Map([...f.gPos, ...f.ePos]);
    if (Ee()) {
      y.current = _, h(_);
      return;
    }
    const u = y.current, x = performance.now(), C = 850;
    let E = 0;
    const S = (W) => {
      const Q = Yr(Math.min(1, (W - x) / C)), re = /* @__PURE__ */ new Map();
      _.forEach((pe, Y) => {
        const me = u.get(Y) ?? { x: J, y: te, o: 0 };
        re.set(Y, { x: me.x + (pe.x - me.x) * Q, y: me.y + (pe.y - me.y) * Q, o: me.o + (pe.o - me.o) * Q });
      }), y.current = re, h(re), Q < 1 && (E = requestAnimationFrame(S));
    };
    return E = requestAnimationFrame(S), () => cancelAnimationFrame(E);
  }, [f]);
  const g = (_) => w.get(_) ?? { x: J, y: te, o: 0 }, d = Math.max(1, ...[...f.weight.values()].flatMap((_) => [..._.values()])), m = (_) => e.claims.filter((u) => D(u) && u.tags.some((x) => e.skill.get(x)?.group === _)).length, v = (_) => e.statableByEntity.get(_)?.length ?? 0, k = l ? e.skills.filter((_) => _.group === l).map((_, u, x) => {
    const C = g(l), E = Math.atan2(C.y - te, C.x - J), S = Math.min(Math.PI * 0.9, x.length * 0.22), W = E - S / 2 + S * (u + 0.5) / x.length;
    return { s: _, cov: ue(e, _.id), x: C.x + 92 * Math.cos(W), y: C.y + 92 * Math.sin(W) };
  }) : [], b = e.roles.filter((_) => _.priority).sort((_, u) => _.priority - u.priority);
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
      c && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
        s("role");
      }, children: "Open coverage analysis →" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-constellation", children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${Vr} ${Gr}`, role: "group", "aria-label": "Evidence map of capability areas and projects", children: [
      /* @__PURE__ */ i("circle", { cx: J, cy: te, r: Gt, class: "imw-orbit" }),
      /* @__PURE__ */ i("circle", { cx: J, cy: te, r: Kt, class: "imw-orbit" }),
      f.groups.map((_) => {
        const u = g(_.id);
        return /* @__PURE__ */ i("line", { x1: J, y1: te, x2: u.x, y2: u.y, class: "imw-spoke", style: { opacity: u.o * 0.5 } }, `c-${_.id}`);
      }),
      f.ents.flatMap((_) => [...(f.weight.get(_.id) ?? /* @__PURE__ */ new Map()).entries()].map(([u, x]) => {
        const C = g(u), E = g(_.id), S = l ? l === u : !0;
        return /* @__PURE__ */ i("line", { x1: C.x, y1: C.y, x2: E.x, y2: E.y, class: "imw-web", style: { strokeWidth: 0.6 + 2.2 * x / d, opacity: Math.min(C.o, E.o) * (S ? 0.55 : 0.08) } }, `${_.id}-${u}`);
      })),
      /* @__PURE__ */ i("g", { class: "imw-core", children: [
        /* @__PURE__ */ i("circle", { cx: J, cy: te, r: 34 }),
        /* @__PURE__ */ i("text", { x: J, y: te - 2, "text-anchor": "middle", children: "Rahul" }),
        /* @__PURE__ */ i("text", { x: J, y: te + 14, "text-anchor": "middle", class: "imw-core-sub", children: "Vajja" })
      ] }),
      f.groups.map((_) => {
        const u = g(_.id), x = m(_.id), C = 6 + Math.sqrt(x) * 1.6, E = u.x < J - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-gnode${l === _.id ? " is-on" : ""}`,
            style: { opacity: u.o },
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
              /* @__PURE__ */ i("circle", { cx: u.x, cy: u.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("circle", { cx: u.x, cy: u.y, r: C }),
              /* @__PURE__ */ i("text", { x: u.x + (E ? -C - 7 : C + 7), y: u.y + 4, "text-anchor": E ? "end" : "start", children: _.label })
            ]
          },
          _.id
        );
      }),
      k.map(({ s: _, cov: u, x, y: C }) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-sat ${qe[u.category]}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${_.name}: ${u.category}`,
          onClick: () => r({ kind: "req", req: u }),
          onKeyDown: (E) => (E.key === "Enter" || E.key === " ") && (E.preventDefault(), r({ kind: "req", req: u })),
          children: [
            /* @__PURE__ */ i("line", { x1: g(l).x, y1: g(l).y, x2: x, y2: C }),
            /* @__PURE__ */ i("circle", { cx: x, cy: C, r: 4 }),
            /* @__PURE__ */ i("text", { x, y: C - 8, "text-anchor": "middle", children: _.name.length > 22 ? _.name.slice(0, 21) + "…" : _.name })
          ]
        },
        _.id
      )),
      f.ents.map((_) => {
        const u = g(_.id), x = v(_.id), C = 7 + Math.sqrt(x) * 1.4, E = u.x < J - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-enode is-${_.kind}`,
            style: { opacity: u.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${_.name}: ${x} verified claims`,
            onClick: () => r({ kind: "entity", id: _.id }),
            onKeyDown: (S) => (S.key === "Enter" || S.key === " ") && (S.preventDefault(), r({ kind: "entity", id: _.id })),
            children: [
              /* @__PURE__ */ i("circle", { cx: u.x, cy: u.y, r: C + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("rect", { x: u.x - C, y: u.y - C, width: C * 2, height: C * 2, rx: _.kind === "experience" ? C : 3 }),
              /* @__PURE__ */ i("text", { x: u.x + (E ? -C - 8 : C + 8), y: u.y + 4, "text-anchor": E ? "end" : "start", children: _.short })
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
function Xr() {
  const { kb: e, coverage: t, modeArg: n, setCoverage: r, go: s } = M(), [a, o] = q(n && e.role.has(n) ? n : t?.roleId ?? "applied_ai");
  z(() => {
    n && e.role.has(n) && o(n);
  }, [n]);
  const l = t?.source === "jd" && !n, p = he(() => l && t ? t : Ce(e, a), [e, a, l, t]);
  z(() => {
    G("brief_generated", { role: p.roleId ?? "jd" });
  }, [p]);
  const c = p.entities.filter((u) => u.id !== "imw" && e.entity.get(u.id)?.kind !== "education").slice(0, 3).map((u) => e.entity.get(u.id)), f = c.map((u) => u.id), w = e.decisions.filter((u) => f.includes(u.entity)).slice(0, 3), h = e.failures.filter((u) => f.includes(u.entity)).slice(0, 2), y = e.claims.find((u) => D(u) && u.kind === "limitation" && f.includes(u.entity)), g = p.requirements.filter((u) => u.category === "missing").slice(0, 2), d = f.flatMap((u) => (e.statableByEntity.get(u) ?? []).flatMap((x) => x.code ?? [])).filter((u) => u.lines).slice(0, 4), m = e.claims.find((u) => D(u) && u.kind === "metric" && ["cliniq", "sssd", "qml"].includes(u.entity) && (f.includes(u.entity) || u.entity === "cliniq")), v = c.flatMap((u) => u.questions.slice(0, 2).map((x) => ({ e: u.short, q: x }))), k = () => [
    `# 10-minute technical brief: ${p.title}`,
    `Candidate: ${e.subject.name}. Evidence-only; no fit score.`,
    "",
    "## Strongest relevant systems",
    ...c.map((u) => `- **${u.name}**: ${u.summaries.engineer ?? u.tagline}`),
    "",
    "## Decisions worth questioning",
    ...w.map((u) => `- ${u.title}. Tradeoff: ${u.tradeoff}`),
    "",
    "## Failure cases",
    ...h.map((u) => `- ${u.title}: ${u.fix}`),
    "",
    "## Limitations and gaps",
    ...y ? [`- ${y.text}`] : [],
    ...g.map((u) => `- ${u.label}: ${u.statement}`),
    "",
    "## Code to open",
    ...d.map((u) => `- ${u.label}: ${u.url}`),
    "",
    "## Suggested questions",
    ...v.map((u) => `- (${u.e}) ${u.q}`)
  ].join(`
`), [b, _] = q(!1);
  return /* @__PURE__ */ i("div", { class: "imw-view imw-brief", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Technical interview brief · 10 minutes" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: p.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        !l && /* @__PURE__ */ i("label", { class: "imw-select", children: [
          /* @__PURE__ */ i("span", { children: "Role" }),
          /* @__PURE__ */ i("select", { value: a, onChange: (u) => o(u.target.value), children: e.roles.map((u) => /* @__PURE__ */ i("option", { value: u.id, children: u.title }, u.id)) })
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
      /* @__PURE__ */ i($t, { counts: p.counts, compact: !0 })
    ] }),
    /* @__PURE__ */ i("ol", { class: "imw-agenda", children: [
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "0–2 min" }),
        /* @__PURE__ */ i("h4", { children: "Strongest relevant systems" }),
        c.map((u) => /* @__PURE__ */ i("p", { children: [
          /* @__PURE__ */ i("strong", { children: [
            u.name,
            "."
          ] }),
          " ",
          u.summaries.engineer ?? u.tagline
        ] }, u.id))
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "2–5 min" }),
        /* @__PURE__ */ i("h4", { children: "Decisions worth questioning" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: w.map((u) => /* @__PURE__ */ i(di, { id: u.id }, u.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "5–7 min" }),
        /* @__PURE__ */ i("h4", { children: "Failure cases" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: h.map((u) => /* @__PURE__ */ i(ci, { id: u.id }, u.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "7–8 min" }),
        /* @__PURE__ */ i("h4", { children: "Limitations and gaps" }),
        y && /* @__PURE__ */ i(ne, { ids: [y.id], compact: !0 }),
        g.map((u) => /* @__PURE__ */ i("p", { class: "imw-note", children: [
          u.label,
          ": ",
          u.statement
        ] }, u.id)),
        m && /* @__PURE__ */ i(oe, { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "One research result" }),
          /* @__PURE__ */ i(ne, { ids: [m.id], compact: !0 })
        ] })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "8–10 min" }),
        /* @__PURE__ */ i("h4", { children: "Code to open" }),
        /* @__PURE__ */ i(We, { refs: d })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "Questions" }),
        /* @__PURE__ */ i("h4", { children: "Suggested interview questions" }),
        /* @__PURE__ */ i("ul", { class: "imw-bullets", children: v.map((u) => /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i("em", { children: [
            u.e,
            ":"
          ] }),
          " ",
          u.q
        ] }, u.q)) })
      ] })
    ] })
  ] });
}
const Pt = "rahul-vajja", Zr = [
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
], ea = [
  "Using the rahul-vajja tools, compare Rahul against this job description and cite claim ids: …",
  "Does Rahul have AI evaluation experience? Show the evidence and the code.",
  "What would you challenge in the Drug Interaction Agent architecture?"
];
function ta() {
  const e = `${wn()}/mcp`, t = [
    { id: "claude-code", label: "Claude Code", how: "Run in a terminal:", code: `claude mcp add --transport http ${Pt} ${e}` },
    { id: "claude", label: "Claude", how: "In Claude (web or desktop): Settings → Connectors → Add custom connector, then paste this URL:", code: e },
    { id: "cursor", label: "Cursor", how: "Add to ~/.cursor/mcp.json:", code: JSON.stringify({ mcpServers: { [Pt]: { url: e } } }, null, 2) },
    { id: "vscode", label: "VS Code", how: "Add to .vscode/mcp.json:", code: JSON.stringify({ servers: { [Pt]: { type: "http", url: e } } }, null, 2) },
    { id: "other", label: "Other", how: "Any MCP client that supports Streamable HTTP:", code: e }
  ], [n, r] = q(t[0].id), [s, a] = q(""), [o, l] = q({ state: "idle" }), p = t.find((w) => w.id === n), c = async (w, h) => {
    try {
      await navigator.clipboard.writeText(w), a(h), setTimeout(() => a(""), 1800);
    } catch {
    }
    G("contact_clicked_from_ai", { mcp_copy: h });
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
          const h = new AbortController(), y = setTimeout(() => h.abort(), 45e3), g = await fetch(e, {
            method: "POST",
            signal: h.signal,
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
    /* @__PURE__ */ i("p", { class: "imw-help", children: p.how }),
    /* @__PURE__ */ i("div", { class: "imw-snippet", children: [
      /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: p.code }) }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => c(p.code, p.id), children: s === p.id ? "Copied" : "Copy" })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Then try" }),
      /* @__PURE__ */ i("ul", { class: "imw-bullets", children: ea.map((w) => /* @__PURE__ */ i("li", { children: w }, w)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Tools · all read-only" }),
      /* @__PURE__ */ i("ul", { class: "imw-tools", children: Zr.map(([w, h]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("code", { children: w }),
        /* @__PURE__ */ i("span", { children: h })
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
const Ct = {
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
}, qn = /* @__PURE__ */ new Set(["project", "research", "experience"]), ia = { backend: "Backend", data: "Data engineering", domain: "Domains", mlops: "MLOps & deployment", vision: "Computer vision", voice: "Voice AI" }, na = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function Wi(e) {
  if (/present/i.test(e)) return 1e6;
  const t = [...e.matchAll(/\b(19|20)\d{2}\b/g)].map((r) => +r[0]), n = [...e.toLowerCase().matchAll(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/g)].map((r) => na.indexOf(r[1]));
  return (t.length ? Math.max(...t) : 0) * 12 + (n.length ? n[n.length - 1] : 0);
}
const Xe = (e) => [...new Set(e)], An = (e, t) => e.summaries[t] ?? e.summaries.engineer ?? e.tagline;
function sa(e) {
  return e.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
}
function Sn(e, t, n = /* @__PURE__ */ new Date()) {
  const r = e.subject.name.replace(/[^A-Za-z0-9]+/g, "-"), s = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  return `${r}-evidence-dossier-${t}-${s}.pdf`;
}
const ra = (e, t) => `${e.subject.name} · Evidence dossier · ${Ct[t].label} perspective · ${(e.subject.links.site ?? "").replace(/^https?:\/\/|\/$/g, "")}`;
function aa(e, t) {
  const n = t.turns.flatMap((s) => s.a?.entities.slice(0, 3) ?? []), r = t.analyses.flatMap((s) => s.entities.slice(0, 3).map((a) => a.id));
  return Xe([...t.seen, ...n, ...r]).filter((s) => qn.has(e.entity.get(s)?.kind ?? ""));
}
function In(e, t, n) {
  const r = Ct[n], s = aa(e, t);
  return s.length ? { ids: s.slice(0, r.projects), defaulted: !1 } : { ids: (e.roles.find((o) => o.priority === 1) ?? e.roles[0]).focus_entities.filter((o) => qn.has(e.entity.get(o)?.kind ?? "")).slice(0, r.projects), defaulted: !0 };
}
function Mn(e, t, n) {
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
const jn = (e, t, n) => Xe(t).map((r) => e.claim.get(r)).filter(D).map((r) => Mn(e, r, n));
function oa(e, t, n) {
  const r = (s) => (s.strength === "public_artifact" ? 0 : 2) + (s.kind === "metric" ? 0 : 1);
  return (e.statableByEntity.get(t) ?? []).filter((s) => s.kind !== "limitation").sort((s, a) => r(s) - r(a)).slice(0, n);
}
function la(e, t, n) {
  if (t.category === "direct" || t.category === "related") {
    const s = t.entities.slice(0, 3).map((p) => ee(e, p)).join(", "), a = t.category === "related" && t.via ? `Related through ${e.skill.get(t.via)?.name ?? t.via}. ` : "", o = t.claims.map((p) => e.claim.get(p)).find((p) => D(p) && !n.has(p.id));
    o && n.add(o.id);
    const l = !t.via && t.statement ? `${t.statement} ` : "";
    return `${a}${l}${s ? `Evidence: ${s}.` : ""}${o ? ` For example: ${o.text}` : ""}`.trim();
  }
  const r = t.entities.length ? ` Closest evidence: ${t.entities.slice(0, 3).map((s) => ee(e, s)).join(", ")}.` : "";
  return `${t.statement ?? ""}${r}`.trim();
}
function Tn(e, t, n = 99) {
  const r = [{ t: "counts", counts: t.counts }], s = /* @__PURE__ */ new Set();
  for (const a of ["direct", "related", "verification", "missing"])
    t.requirements.filter((o) => o.category === a).slice(0, n).forEach((o) => r.push({ t: "req", category: a, label: o.label, detail: la(e, o, s) }));
  return Xe(t.notes).forEach((a) => r.push({ t: "note", text: a })), r;
}
const ca = (e, t) => e.title === t.title && e.source === t.source && e.requirements.map((n) => n.id).join() === t.requirements.map((n) => n.id).join();
function da(e, t) {
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
      const a = t.collapsed ? t.ids.filter((l) => !e.shown.has(n.claim.get(l)?.text ?? "")) : t.ids, o = jn(n, a, s);
      return o.length ? [...t.title ? [{ t: "h3", text: t.title }] : [], ...o] : [];
    }
    case "entity": {
      const a = n.entity.get(t.id);
      return a ? [{ t: "p", text: `${a.name}: ${An(a, r)}` }] : [];
    }
    case "coverage": {
      const a = { t: "h3", text: `Evidence coverage: ${t.analysis.title}` };
      return e.detailed.some((o) => ca(o, t.analysis)) ? [a, { t: "counts", counts: t.analysis.counts }, { t: "p", text: `The full requirement-by-requirement breakdown is in "${xe.roles}".`, muted: !0 }] : [a, ...Tn(n, t.analysis, 6)];
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
function ha(e, t) {
  const { kb: n, lens: r } = e, s = [], a = /* @__PURE__ */ new Set();
  e.shown.clear();
  for (const c of t.blocks) c.type === "points" && c.items.forEach((f) => e.shown.add(f.text));
  for (const c of t.blocks)
    for (const f of da(e, c)) {
      if (f.t === "note") {
        if (a.has(f.text)) continue;
        a.add(f.text);
      }
      s.push(f);
    }
  const o = new Set(t.blocks.flatMap((c) => c.type === "claims" ? c.ids : c.type === "points" ? c.items.flatMap((f) => f.cites) : [])), l = ai(t).filter((c) => !o.has(c)), p = jn(n, l, r).slice(0, 8);
  return p.length && s.push({ t: "h3", text: "Evidence cited" }, ...p), s;
}
function ua(e, t, n, r) {
  const s = e.entity.get(t);
  if (!s) return [];
  const a = [
    { t: "h2", text: s.name, meta: [s.role, s.dates].filter(Boolean).join(" · ") },
    { t: "p", text: An(s, n) }
  ];
  s.ownership && a.push({ t: "kv", items: [["Ownership", s.ownership]] });
  const o = oa(e, t, r.claims).map((f) => Mn(e, f, r));
  o.length && a.push({ t: "h3", text: "Verified evidence" }, ...o);
  const l = (e.statableByEntity.get(t) ?? []).filter((f) => f.kind === "limitation").slice(0, 2);
  l.length && a.push({ t: "h3", text: "Stated limitations" }, { t: "bullets", items: l.map((f) => f.text) }), e.decisions.filter((f) => f.entity === t).slice(0, r.decisions).forEach((f) => a.push({ t: "h3", text: `Decision: ${f.title}` }, { t: "kv", items: [["Choice", f.choice], ["Tradeoff", f.tradeoff]] })), e.failures.filter((f) => f.entity === t).slice(0, r.failures).forEach((f) => a.push({ t: "h3", text: `Failure case: ${f.title}` }, { t: "kv", items: [["Problem", f.problem], ["Fix", f.fix], ["Prevention", f.prevention]] }));
  const p = r.arch ? e.archByEntity.get(t) : void 0;
  p && a.push({ t: "h3", text: "Architecture" }, { t: "bullets", items: p.nodes.slice(0, 8).map((f) => `${f.label}: ${f.detail.purpose}`) });
  const c = s.links.filter((f) => /^https?:/.test(f.url));
  return c.length && a.push({ t: "links", items: c.map((f) => ({ label: f.label, url: f.url })) }), a;
}
function pa(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.skills) {
    if (!(e.statableBySkill.get(n.id) ?? []).some((a) => a.strength === "public_artifact")) continue;
    const s = e.groups.find((a) => a.id === n.group)?.label ?? ia[n.group] ?? n.group;
    (t.get(s) ?? t.set(s, []).get(s)).push(n.name);
  }
  return [...t.entries()];
}
function ma(e, t, n) {
  const r = Ct[n.persona], s = n.date ?? /* @__PURE__ */ new Date(), { subject: a } = e, o = t.turns.filter((d) => d.a), l = [], p = [
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
    line: `Evidence dossier · ${r.label} perspective · ${sa(s)}`
  }), l.push({ t: "p", text: r.intro });
  const c = [
    o.length ? `${o.length} question${o.length === 1 ? "" : "s"} answered` : "",
    t.analyses.length ? `${t.analyses.length} role analys${t.analyses.length === 1 ? "is" : "es"}` : ""
  ].filter(Boolean).join(" · ");
  l.push({ t: "note", text: `How to read this: "Verified · public artifact" means you can open the code, data, recording or paper behind it. "Verified · self-reported" is Rahul's description of work that is not public, such as employer systems. Nothing here is a fit score. ${c ? `Session: ${c}.` : ""}`.trim() }), l.push({ t: "h1", text: "At a glance" }), l.push({ t: "p", text: a.level_note, muted: !0 });
  const f = e.entities.filter((d) => d.kind === "experience").sort((d, m) => Wi(m.dates) - Wi(d.dates));
  f.length && (l.push({ t: "h3", text: "Experience" }), l.push({ t: "table", head: ["Where", "Role", "Dates"], rows: f.map((d) => [d.name, d.role ?? "", d.dates]) }));
  const w = [
    ...e.entities.filter((d) => d.kind === "education").map((d) => ["Education", [d.name, d.role].filter(Boolean).join(": ")]),
    ...e.entities.filter((d) => d.kind === "leadership").map((d) => ["Leadership", `${d.role ? `${d.role}, ` : ""}${d.name} (${d.dates})`])
  ];
  w.length && l.push({ t: "kv", items: w });
  const h = pa(e);
  h.length && (l.push({ t: "h3", text: "Skills with public evidence" }), l.push({ t: "kv", items: h.map(([d, m]) => [d, m.join(", ")]) }));
  const y = { kb: e, persona: n.persona, lens: r, detailed: n.sections.roles ? t.analyses : [], shown: /* @__PURE__ */ new Set() };
  if (n.sections.qa && o.length && (l.push({ t: "h1", text: xe.qa, lead: "Each answer was generated from the evidence database and checked before it was shown." }), o.forEach((d, m) => {
    l.push({ t: "h2", text: `Q${m + 1}. ${d.q}`, meta: d.a.engine === "model" ? "Written by Claude, validated against the evidence" : "Answered by the evidence engine" }), l.push(...ha(y, d.a));
  })), n.sections.roles && t.analyses.length) {
    l.push({ t: "h1", text: xe.roles, lead: "Each requirement is classified by the evidence behind it. No score is computed." });
    for (const d of t.analyses)
      l.push({ t: "h2", text: d.title, meta: d.source === "jd" ? `Job description you provided${d.closestRole ? ` · closest target role: ${d.closestRole}` : ""}` : "Target role" }), l.push(...Tn(e, d));
  }
  const g = In(e, t, n.persona);
  if (n.sections.projects && g.ids.length && (l.push({ t: "h1", text: xe.projects, lead: g.defaulted ? "You did not open specific projects, so these are the strongest for an applied AI role." : "The work you explored, in the order you explored it." }), g.ids.forEach((d) => l.push(...ua(e, d, n.persona, r)))), n.sections.questions) {
    const d = g.ids.flatMap((k) => (e.entity.get(k)?.questions ?? []).slice(0, 2).map((b) => `${ee(e, k)}: ${b}`)), m = t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing" || b.category === "verification").slice(0, 2).map((b) => `${b.label}: what is the closest thing you have done, and how would you close the gap?`)), v = Xe([...d, ...m]);
    v.length && (l.push({ t: "h1", text: xe.questions, lead: "Questions that test the evidence above rather than repeat it." }), l.push({ t: "bullets", items: v }));
  }
  if (n.sections.gaps) {
    l.push({ t: "h1", text: xe.gaps });
    const d = Xe(t.analyses.flatMap((k) => k.requirements.filter((b) => b.category === "missing").map((b) => `${b.label}: ${b.statement ?? "Not demonstrated in the evidence."}`))), m = d.length ? d : e.gaps.filter((k) => !k.verify).slice(0, 6).map((k) => `${k.name}: ${k.statement}`);
    l.push({ t: "h3", text: d.length ? "Not yet shown for the roles you checked" : "Not yet part of his work" }, { t: "bullets", items: m });
    const v = Fe(e, "learning");
    v?.takeaway && l.push({ t: "h3", text: "How he closes gaps" }, { t: "p", text: v.takeaway.text.replace(/^For your team: /, "") });
  }
  return l.push({ t: "h1", text: "About this document", keep: 150 }), l.push({ t: "p", text: `Generated in your browser by Interview My Work on ${a.links.site ?? "the portfolio"} from evidence version ${e.version}. Nothing you typed was uploaded to create it. Every claim links to its source, and the live workspace shows the full evidence trail for each one.`, muted: !0 }), l.push({ t: "links", items: [
    ...a.links.site ? [{ label: "Open Interview My Work", url: `${a.links.site.replace(/\/$/, "")}/#imw=ask` }] : [],
    { label: `Email ${a.first}`, url: `mailto:${a.email}` }
  ] }), { title: `${a.name}: evidence dossier (${r.label})`, nodes: l, filename: Sn(e, n.persona, s) };
}
const Ge = [20, 24, 31], Z = [90, 99, 110], Hi = [222, 227, 232], ge = [22, 117, 94], fa = [242, 246, 245], dt = { direct: ge, related: [40, 104, 184], verification: [150, 98, 16], missing: [118, 124, 133] }, ga = { direct: "DIRECT", related: "RELATED", verification: "TO VERIFY", missing: "NOT SHOWN" }, wa = { direct: "direct evidence", related: "related evidence", verification: "verification required", missing: "not demonstrated" }, ya = { artifact: ge, self: dt.related }, Qt = 612, Te = 792, L = 56, Dt = 64, Oi = 64, O = Qt - L * 2, va = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ", Bi = {
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
    if (n in Bi) {
      t += Bi[n];
      continue;
    }
    const r = n.codePointAt(0);
    if (r === 10 || r >= 32 && r <= 126 || r >= 161 && r <= 255 || va.includes(n)) {
      t += n;
      continue;
    }
    const s = n.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    [...s].every((a) => a.codePointAt(0) < 127) && (t += s);
  }
  return t.replace(/ {2,}/g, " ");
}
class ba {
  constructor(t) {
    fi(this, "y", Dt);
    this.d = t;
  }
  font(t, n = "normal", r = Ge) {
    this.d.setFont("helvetica", n), this.d.setFontSize(t), this.d.setTextColor(...r);
  }
  need(t) {
    this.y + t > Te - Oi && (this.d.addPage(), this.y = Dt);
  }
  split(t, n) {
    return this.d.splitTextToSize(Ae(t), n);
  }
  write(t, n = {}) {
    const { size: r = 10, style: s = "normal", color: a = Ge, x: o = L, width: l = O, lh: p = 1.42, after: c = 0 } = n;
    this.font(r, s, a);
    const f = r * p;
    for (const w of this.split(t, l))
      this.need(f), this.d.text(w, o, this.y, { baseline: "top" }), this.y += f;
    this.y += c;
  }
  links(t, { size: n = 8.5, x: r = L, width: s = O } = {}) {
    this.font(n, "normal", ge);
    const a = n * 1.55, o = 14;
    let l = r;
    this.need(a);
    for (const p of t) {
      const c = Ae(p.label);
      let f = c;
      for (; this.d.getTextWidth(f) > s && f.length > 8; ) f = f.slice(0, -3);
      f !== c && (f = `${f.trimEnd()}…`);
      const w = this.d.getTextWidth(f);
      l > r && l + w > r + s && (this.y += a, this.need(a), l = r), this.d.text(f, l, this.y, { baseline: "top" }), this.d.link(l, this.y - 1, w, n + 2, { url: p.url }), this.d.setDrawColor(...ge), this.d.setLineWidth(0.4), this.d.line(l, this.y + n + 0.5, l + w, this.y + n + 0.5), l += w + o;
    }
    this.y += a;
  }
  rule(t = Hi, n = 0.6) {
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
        this.write(t.text, { size: t.muted ? 9.5 : 10, color: t.muted ? Z : Ge, after: 6 });
        return;
      case "note": {
        this.font(9);
        const s = this.split(t.text, O - 24).length * 9 * 1.42 + 14;
        s < Te - Dt - Oi && this.need(s);
        const a = this.y;
        n.setFillColor(...fa), n.rect(L, a, O, s, "F"), n.setFillColor(...ge), n.rect(L, a, 2, s, "F"), this.y = a + 7, this.write(t.text, { size: 9, color: Z, x: L + 14, width: O - 24 }), this.y = Math.max(this.y, a + s) + 8;
        return;
      }
      case "kv": {
        for (const [s, a] of t.items) {
          this.need(14), this.font(8, "bold", Z);
          const o = this.split(s.toUpperCase(), 106), l = this.y;
          o.forEach((p, c) => n.text(p, L, l + 1.5 + c * 11, { baseline: "top" })), this.write(a, { size: 9.5, x: L + 118, width: O - 118 }), this.y > l && (this.y = Math.max(this.y, l + o.length * 11 + 2)), this.y += 4;
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
        this.need(30), n.setFillColor(...ya[t.tone]), n.circle(L + 4, this.y + 5.5, 2.6, "F"), this.write(t.text, { size: 9.5, x: L + 14, width: O - 14, after: 1 }), this.write(t.meta, { size: 8, color: Z, x: L + 14, width: O - 14 }), t.links.length && this.links(t.links, { size: 8, x: L + 14, width: O - 14 }), this.y += 5;
        return;
      }
      case "req": {
        this.need(26), this.font(7, "bold", dt[t.category]), n.text(ga[t.category], L, this.y + 2, { baseline: "top" }), this.write(t.label, { size: 9.5, style: "bold", x: L + 70, width: O - 70, after: 1 }), t.detail && this.write(t.detail, { size: 8.5, color: Z, x: L + 70, width: O - 70 }), this.y += 5;
        return;
      }
      case "counts": {
        const r = ["direct", "related", "verification", "missing"].filter((o) => t.counts[o] > 0), s = r.reduce((o, l) => o + t.counts[l], 0);
        if (!s) return;
        this.need(34);
        let a = L;
        for (const o of r) {
          const l = O * t.counts[o] / s;
          n.setFillColor(...dt[o]), n.rect(a, this.y, Math.max(l - 1.5, 1), 6, "F"), a += l;
        }
        this.y += 12, a = L, this.font(8.5, "normal", Z);
        for (const o of r) {
          const l = `${t.counts[o]} ${wa[o]}`;
          n.setFillColor(...dt[o]), n.rect(a, this.y + 1.5, 6, 6, "F"), n.text(l, a + 10, this.y, { baseline: "top" }), a += n.getTextWidth(l) + 26;
        }
        this.y += 18;
        return;
      }
      case "table": {
        const r = t.head.length;
        this.font(9);
        const s = t.head.map((c, f) => Math.max(n.getTextWidth(Ae(c)), ...t.rows.map((w) => n.getTextWidth(Ae(w[f] ?? "")))) + 12);
        let a;
        if (s.reduce((c, f) => c + f, 0) <= O)
          a = [...s], a[r - 1] += O - s.reduce((c, f) => c + f, 0);
        else {
          const c = Math.min(s[0], 140);
          a = [c, ...Array(r - 1).fill((O - c) / (r - 1))];
        }
        const o = a.map((c, f) => L + a.slice(0, f).reduce((w, h) => w + h, 0)), l = (c, f) => {
          this.font(f ? 7.5 : 9, "bold", f ? Z : Ge);
          const w = c.map((y, g) => this.split(f ? y.toUpperCase() : y, a[g] - 10)), h = (f ? 7.5 : 9) * 1.38;
          return { wrapped: w, lh: h, h: Math.max(...w.map((y) => y.length)) * h + 8 };
        }, p = (c, f) => {
          const { wrapped: w, lh: h, h: y } = l(c, f);
          this.need(f && t.rows.length ? y + l(t.rows[0], !1).h : y), w.forEach((g, d) => {
            this.font(f ? 7.5 : 9, f || d === 0 ? "bold" : "normal", f ? Z : Ge), g.forEach((m, v) => n.text(m, o[d], this.y + 4 + v * h, { baseline: "top" }));
          }), this.y += y, this.rule();
        };
        p(t.head, !0), t.rows.forEach((c) => p(c, !1)), this.y += 8;
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
      n.setPage(s), this.font(7.5, "normal", Z), n.text(Ae(t), L, Te - 38, { baseline: "top" }), n.text(`Page ${s} of ${r}`, Qt - L, Te - 38, { baseline: "top", align: "right" }), n.setDrawColor(...Hi), n.setLineWidth(0.6), n.line(L, Te - 46, Qt - L, Te - 46);
  }
}
async function _a(e, t) {
  const { jsPDF: n } = await import("./chunks/jspdf.es.min-0Bk908vi.js"), r = new n({ unit: "pt", format: "letter", compress: !0 });
  r.setProperties({ title: Ae(t.title), subject: "Evidence dossier", author: Ae(t.author), creator: "Interview My Work" });
  const s = new ba(r);
  for (const a of e) s.node(a);
  return s.finish(t.footer), r;
}
function ka(e, t) {
  const n = URL.createObjectURL(e), r = document.createElement("a");
  r.href = n, r.download = t, r.rel = "noopener", document.body.append(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(n), 6e4);
}
function xa() {
  const { kb: e, persona: t, session: n, go: r } = M(), [s, a] = q(t);
  z(() => a(t), [t]);
  const o = n.turns.filter((m) => m.a), l = he(() => In(e, n, s), [e, n, s]), [p, c] = q({ qa: !0, roles: !0, projects: !0, questions: !0, gaps: !0 }), [f, w] = q({ kind: "idle" });
  z(() => {
    import("./chunks/jspdf.es.min-0Bk908vi.js").catch(() => {
    });
  }, []);
  const h = {
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
  }, y = (m) => m === "qa" ? o.length > 0 : m === "roles" ? n.analyses.length > 0 : !0, g = Sn(e, s), d = async () => {
    w({ kind: "busy" });
    try {
      const m = ma(e, n, { persona: s, sections: p }), v = await _a(m.nodes, { title: m.title, author: e.subject.name, footer: ra(e, s) });
      ka(v.output("blob"), m.filename), G("dossier_downloaded", { persona: s, questions: o.length, analyses: n.analyses.length }), w({ kind: "done", file: m.filename });
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
    /* @__PURE__ */ i("p", { class: "imw-help imw-export-intro", children: Ct[s].intro }),
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
        const v = h[m], k = y(m) && p[m];
        return /* @__PURE__ */ i("li", { class: y(m) ? "" : "is-empty", children: [
          /* @__PURE__ */ i("label", { children: [
            /* @__PURE__ */ i("input", { type: "checkbox", checked: k, disabled: !y(m), onChange: (b) => c({ ...p, [m]: b.target.checked }) }),
            /* @__PURE__ */ i("span", { children: [
              /* @__PURE__ */ i("strong", { children: xe[m] }),
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
      /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: d, disabled: f.kind === "busy", children: f.kind === "busy" ? "Building PDF…" : "Download PDF" }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: g })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", role: "status", "aria-live": "polite", children: [
      f.kind === "done" && `Downloaded ${f.file}. You can keep exploring and download again; the PDF always reflects the whole session.`,
      f.kind === "error" && "The PDF could not be built. Check your connection and try again; the rest of the workspace still works.",
      f.kind !== "done" && f.kind !== "error" && "Built in your browser. Nothing you typed or pasted is uploaded, and pasted job descriptions appear only as the requirements that were detected."
    ] })
  ] });
}
function $a() {
  const e = M(), { inspect: t, setInspect: n } = e;
  return /* @__PURE__ */ i("div", { class: "imw-evidence", children: [
    /* @__PURE__ */ i("div", { class: "imw-evidence-head", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Evidence" }),
      t && /* @__PURE__ */ i("button", { class: "imw-icon imw-evidence-close", onClick: () => n(null), "aria-label": "Close evidence", children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-evidence-body", "aria-live": "polite", children: [
      !t && /* @__PURE__ */ i(Ca, {}),
      t?.kind === "claim" && /* @__PURE__ */ i(Ea, { id: t.id }),
      t?.kind === "node" && /* @__PURE__ */ i(qa, { arch: t.arch, node: t.node }),
      t?.kind === "req" && /* @__PURE__ */ i(Aa, {}),
      t?.kind === "entity" && /* @__PURE__ */ i(Sa, { id: t.id }),
      t?.kind === "group" && /* @__PURE__ */ i(Ia, { id: t.id }),
      t?.kind === "basis" && /* @__PURE__ */ i(Ma, {})
    ] })
  ] });
}
function Ca() {
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
function Ea({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.claim.get(e);
  if (!r) return null;
  const s = t.entity.get(r.entity), a = t.architectures.flatMap((l) => l.nodes.filter((p) => p.detail.claims.includes(e)).map((p) => ({ a: l, n: p }))), o = [...t.decisions, ...t.failures].filter((l) => l.claims.includes(e));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-st ${wt(r)}`, children: [
      /* @__PURE__ */ i(De, { cls: wt(r) }),
      " ",
      bn(r)
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
      const p = t.sources.find((c) => c.id === l);
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
      /* @__PURE__ */ i(We, { refs: r.code })
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
function qa({ arch: e, node: t }) {
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
      /* @__PURE__ */ i(We, { refs: a, max: 3 })
    ] }) : null
  ] });
}
function Aa() {
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
function Sa({ id: e }) {
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
      t.archByEntity.has(e) && /* @__PURE__ */ i(ct, { a: { kind: "mode", label: "X-Ray", target: "xray", arg: e } }),
      /* @__PURE__ */ i(ct, { a: { kind: "anchor", label: "Jump to section", target: r.anchor } }),
      r.links.slice(0, 2).map((a) => /* @__PURE__ */ i(ct, { a: { kind: "url", label: a.label, target: a.url } }, a.url))
    ] }),
    /* @__PURE__ */ i(ne, { ids: s, title: "Key evidence", compact: !0 })
  ] });
}
function Ia({ id: e }) {
  const { kb: t, setInspect: n } = M(), r = t.groups.find((a) => a.id === e);
  if (!r) return null;
  const s = t.skills.filter((a) => a.group === e).map((a) => ({ s: a, cov: ue(t, a.id) }));
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
function Ma() {
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
function ja() {
  const { kb: e, persona: t, setPersona: n, coverage: r, setCoverage: s, toggleLens: a, lensOn: o, go: l } = M(), p = e.personas.find((c) => c.id === t);
  return /* @__PURE__ */ i("div", { class: "imw-rail", children: [
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i($e, { children: "Answer depth" }),
      /* @__PURE__ */ i("div", { class: "imw-personas", role: "radiogroup", "aria-label": "Who is asking", children: e.personas.map((c) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": t === c.id, class: t === c.id ? "is-on" : "", onClick: () => n(c.id), children: c.label }, c.id)) }),
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
        /* @__PURE__ */ i($t, { counts: r.counts, compact: !0 }),
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
      /* @__PURE__ */ i($e, { children: "How this works" }),
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
const zi = [
  { id: "ask", label: "Ask", hint: "Questions answered from verified evidence" },
  { id: "role", label: "Role fit", hint: "Evidence coverage for a role or job description" },
  { id: "xray", label: "X-Ray", hint: "Explore each system component by component" },
  { id: "map", label: "Map", hint: "The whole body of work as an evidence graph" },
  { id: "lab", label: "Proof lab", hint: "Replays, break-it tests and live numbers" },
  { id: "brief", label: "Brief", hint: "A 10-minute technical interview brief" },
  { id: "connect", label: "Connect your AI", hint: "Use this evidence from Claude, Cursor or VS Code over MCP" }
], Ta = /* @__PURE__ */ new Set(["retrieval", "no_evidence", "topic", "entity", "focused", "skill", "personally", "scale", "challenge", "level", "overview", "shipped", "beyond_wrappers", "evaluation", "strongest"]), Ra = /* @__PURE__ */ new Set(["entity", "claims", "xray", "chart", "trace", "decisions", "failures"]);
function La({ kb: e, initial: t, register: n }) {
  const [r, s] = q(!0), [a, o] = q("ask"), [l, p] = q(), [c, f] = q("recruiter"), [w, h] = q(null), [y, g] = q(null), [d, m] = q([]), [v, k] = q([]), [b, _] = q([]), [u, x] = q("checking"), [C, E] = q(!1), S = ye(null), W = ye(null), Q = ye(!1), re = ve(($, I) => {
    if (g($), !$) return;
    const X = (U) => `${U.source}|${U.title}|${U.requirements.map((ce) => ce.id).join()}`;
    m((U) => {
      const ce = U.findIndex((N) => N === I || $.source === "role" && N.source === "role" && N.roleId === $.roleId || X(N) === X($));
      return ce >= 0 ? U.map((N, Be) => Be === ce ? $ : N) : [...U, $];
    });
  }, []), pe = ve(($) => {
    $ && k((I) => I.includes($) ? I : [...I, $]);
  }, []), Y = ve(($, I) => {
    o($), p(I), $ === "xray" && G("xray_opened", { project: I ?? "dia" }), S.current?.querySelector(".imw-main")?.scrollTo({ top: 0 });
  }, []), me = ve(($) => {
    W.current = $.trigger ?? document.activeElement, s(!0);
    const I = zi.find((X) => X.id === $.mode)?.id ?? "ask";
    $.mode === "transform" && $.arg ? Y("role", $.arg) : Y(I, $.arg), G("interview_my_work_opened", { mode: I });
  }, [Y]);
  z(() => {
    n(me), me(t);
  }, []), z(() => {
    r && !Q.current && (Q.current = !0, _r(x));
  }, [r]), z(() => {
    const $ = document.querySelector(".wrap"), I = document.querySelector(".imw-fab");
    r ? (document.documentElement.classList.add("imw-open"), $?.setAttribute("inert", ""), I?.setAttribute("inert", ""), requestAnimationFrame(() => S.current?.querySelector("[data-autofocus]")?.focus() ?? S.current?.focus())) : (document.documentElement.classList.remove("imw-open"), $?.removeAttribute("inert"), I?.removeAttribute("inert"), W.current?.focus?.());
  }, [r]);
  const He = ve(() => s(!1), []), Rn = ($) => {
    if ($.key === "Escape") {
      $.preventDefault(), w && matchMedia("(max-width: 1100px)").matches ? h(null) : He();
      return;
    }
    if ($.key !== "Tab" || !S.current) return;
    const I = [...S.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((ce) => ce.offsetParent !== null);
    if (!I.length) return;
    const X = I[0], U = I[I.length - 1];
    $.shiftKey && document.activeElement === X ? ($.preventDefault(), U.focus()) : !$.shiftKey && document.activeElement === U && ($.preventDefault(), X.focus());
  }, hi = ve(($) => {
    s(!1), G("project_opened_from_ai", { anchor: $ }), $r($, () => s(!0));
  }, []), ui = ve(($, I) => {
    const X = $ ?? !C, U = I ?? y;
    X && U ? (I && re(I), xr(e, U, { reopen: () => {
      s(!0), Y("role");
    }, restore: () => E(!1) }), E(!0), s(!1), G("portfolio_lens_applied", { source: U.source })) : (Vt(), E(!1));
  }, [C, y, e, Y, re]), pi = ve(async ($) => {
    const I = $.trim();
    if (!I) return;
    Y("ask");
    const X = Date.now(), U = [...b].reverse().find((j) => j.a?.entities.length)?.a?.entities, ce = [...b].reverse().find((j) => j.a), N = tr(e, I, { persona: c, roleId: y?.roleId, lastEntities: U, lastTopic: ce?.a?.topic, lastQuestion: ce?.q, lastIntent: ce?.a?.intent }), Be = ni(I);
    if (N.intent === "jd" || N.intent === "role") {
      const j = N.blocks.find((de) => de.type === "coverage");
      j && j.type === "coverage" && re(j.analysis), Be && G("jd_analyzed", { requirements: j && j.type === "coverage" ? j.analysis.requirements.length : 0 });
    }
    const Et = u === "ready" && Ta.has(N.intent);
    if (_((j) => [...j, { id: X, q: Be ? "Job description (pasted)" : I, a: Et ? void 0 : N, pending: Et }]), Be && u === "ready" && yn(I).then((j) => {
      if (!j.length) return;
      const de = mt(e, I, j), fe = N.blocks.find((At) => At.type === "coverage");
      re(de, fe && fe.type === "coverage" ? fe.analysis : void 0), _((At) => At.map((ze) => ze.id === X && ze.a ? { ...ze, a: { ...ze.a, blocks: fn(de), refined: !0 } } : ze));
    }).catch(() => {
    }), !Et) return;
    const Pn = b.filter((j) => j.a).slice(-3).map((j) => ({ q: j.q, cites: j.a.basis?.retrieved?.slice(0, 8) ?? [] }));
    let qt;
    try {
      const j = await kr(e, I, c, Pn, y?.roleId, N.topic), de = N.blocks.filter((fe) => Ra.has(fe.type)).map((fe) => fe.type === "claims" ? { ...fe, title: "Sources", collapsed: !0 } : fe);
      qt = { ...j, blocks: [...j.blocks, ...de], actions: N.actions, followups: j.followups.length ? j.followups : N.followups, entities: [.../* @__PURE__ */ new Set([...j.entities, ...N.entities])], topic: N.topic };
    } catch (j) {
      qt = N, (j.status ?? 0) >= 500 && x("offline");
    }
    _((j) => j.map((de) => de.id === X ? { ...de, a: qt, pending: !1 } : de));
  }, [e, c, y, u, b, Y, re]), mi = he(() => ({ turns: b, analyses: d, seen: v }), [b, d, v]), Oe = b.filter(($) => $.a).length + d.length, Ln = he(() => ({
    kb: e,
    persona: c,
    setPersona: f,
    mode: a,
    go: Y,
    modeArg: l,
    inspect: w,
    setInspect: ($) => {
      h($), $ && (G("evidence_opened", { kind: $.kind }), $.kind === "entity" ? pe($.id) : $.kind === "claim" ? pe(e.claim.get($.id)?.entity) : $.kind === "node" && pe(e.architectures.find((I) => I.id === $.arch)?.entity));
    },
    coverage: y,
    setCoverage: re,
    session: mi,
    noteEntity: pe,
    ask: pi,
    api: u,
    jump: hi,
    lensOn: C,
    toggleLens: ui,
    close: He
  }), [e, c, a, Y, l, w, y, re, mi, pe, pi, u, hi, C, ui, He]);
  return /* @__PURE__ */ i(vn.Provider, { value: Ln, children: /* @__PURE__ */ i("div", { class: "imw", hidden: !r, children: [
    /* @__PURE__ */ i("div", { class: "imw-backdrop", onClick: He }),
    /* @__PURE__ */ i("div", { class: "imw-dialog", ref: S, role: "dialog", "aria-modal": "true", "aria-labelledby": "imw-title", tabIndex: -1, onKeyDown: Rn, children: [
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
        /* @__PURE__ */ i("div", { class: "imw-tabs", role: "tablist", "aria-label": "Workspace views", children: zi.map(($) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": a === $.id, class: a === $.id ? "is-on" : "", title: $.hint, onClick: () => Y($.id), children: $.label }, $.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-top-right", children: [
          /* @__PURE__ */ i(Pa, { status: u }),
          /* @__PURE__ */ i(
            "button",
            {
              class: `imw-dl${a === "export" ? " is-on" : ""}`,
              onClick: () => Y("export"),
              title: "Download what you explored as a PDF",
              "aria-label": Oe ? `Download PDF (${Oe} item${Oe === 1 ? "" : "s"} explored)` : "Download PDF",
              children: [
                /* @__PURE__ */ i("svg", { viewBox: "0 0 16 16", width: "14", height: "14", "aria-hidden": "true", children: /* @__PURE__ */ i("path", { d: "M8 2v8m0 0L4.8 6.8M8 10l3.2-3.2M3 13h10", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
                /* @__PURE__ */ i("span", { class: "imw-dl-label", children: "PDF" }),
                Oe > 0 && /* @__PURE__ */ i("span", { class: "imw-dl-count", "aria-hidden": "true", children: Oe })
              ]
            }
          ),
          /* @__PURE__ */ i("select", { class: "imw-persona-mobile", "aria-label": "Answer depth", value: c, onChange: ($) => f($.target.value), children: e.personas.map(($) => /* @__PURE__ */ i("option", { value: $.id, children: $.label }, $.id)) }),
          /* @__PURE__ */ i("button", { class: "imw-icon", onClick: He, "aria-label": "Close Interview My Work", children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { class: "imw-body", children: [
        /* @__PURE__ */ i("aside", { class: "imw-left", "aria-label": "Context", children: /* @__PURE__ */ i(ja, {}) }),
        /* @__PURE__ */ i("main", { class: "imw-main", id: "imw-main", children: [
          a === "ask" && /* @__PURE__ */ i(Hr, { turns: b }),
          a === "role" && /* @__PURE__ */ i(zr, {}),
          a === "xray" && /* @__PURE__ */ i(Ur, {}),
          a === "map" && /* @__PURE__ */ i(Jr, {}),
          a === "lab" && /* @__PURE__ */ i(Lr, {}),
          a === "brief" && /* @__PURE__ */ i(Xr, {}),
          a === "connect" && /* @__PURE__ */ i(ta, {}),
          a === "export" && /* @__PURE__ */ i(xa, {})
        ] }),
        /* @__PURE__ */ i("aside", { class: `imw-right${w ? " has-item" : ""}`, "aria-label": "Evidence", children: /* @__PURE__ */ i($a, {}) })
      ] })
    ] })
  ] }) });
}
function Pa({ status: e }) {
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
let Ft = null, st = null, Nt = null;
async function Fa(e = {}) {
  Ft ?? (Ft = rs($n("evidence.json")).catch((n) => {
    throw Ft = null, n;
  }));
  const t = await Ft;
  if (Nt) {
    Nt(e);
    return;
  }
  st = document.createElement("div"), st.id = "imw-host", document.body.appendChild(st), Vn(/* @__PURE__ */ i(La, { kb: t, initial: e, register: (n) => Nt = n }), st);
}
export {
  Fa as open
};
