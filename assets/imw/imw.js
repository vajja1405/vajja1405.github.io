var et, j, ai, de, Dt, li, oi, ot, He, Me, ci, qt, wt, yt, di, ze = {}, Qe = [], Di = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, tt = Array.isArray;
function ie(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Et(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Ni(e, t, n) {
  var s, r, a, l = {};
  for (a in t) a == "key" ? s = t[a] : a == "ref" ? r = t[a] : l[a] = t[a];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? et.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) l[a] === void 0 && (l[a] = e.defaultProps[a]);
  return Be(e, l, s, r, null);
}
function Be(e, t, n, s, r) {
  var a = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++ai, __i: -1, __u: 0 };
  return r == null && j.vnode != null && j.vnode(a), a;
}
function ee(e) {
  return e.children;
}
function Fe(e, t) {
  this.props = e, this.context = t;
}
function we(e, t) {
  if (t == null) return e.__ ? we(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? we(e) : null;
}
function Oi(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, s = [], r = [], a = ie({}, t);
    a.__v = t.__v + 1, j.vnode && j.vnode(a), St(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, s, n ?? we(t), !!(32 & t.__u), r), a.__v = t.__v, a.__.__k[a.__i] = a, fi(s, a, r), t.__e = t.__ = null, a.__e != n && hi(a);
  }
}
function hi(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), hi(e);
}
function vt(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !Je.__r++ || Dt != j.debounceRendering) && ((Dt = j.debounceRendering) || li)(Je);
}
function Je() {
  try {
    for (var e, t = 1; de.length; ) de.length > t && de.sort(oi), e = de.shift(), t = de.length, Oi(e);
  } finally {
    de.length = Je.__r = 0;
  }
}
function ui(e, t, n, s, r, a, l, o, h, d, w) {
  var m, c, f, y, u, _, b = s && s.__k || Qe, k = t.length;
  for (h = Hi(n, t, b, h, k), m = 0; m < k; m++) (f = n.__k[m]) != null && (c = f.__i != -1 && b[f.__i] || ze, f.__i = m, _ = St(e, f, c, r, a, l, o, h, d, w), y = f.__e, f.ref && c.ref != f.ref && (c.ref && It(c.ref, null, f), w.push(f.ref, f.__c || y, f)), u == null && y != null && (u = y), 4 & f.__u ? (h = pi(f, h, e), c.__e && (c.__e = null)) : typeof f.type == "function" && _ !== void 0 ? h = _ : y && (h = y.nextSibling), f.__u &= -7);
  return n.__e = u, h;
}
function Hi(e, t, n, s, r) {
  var a, l, o, h, d, w = n.length, m = w, c = 0;
  for (e.__k = new Array(r), a = 0; a < r; a++) (l = t[a]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[a] = Be(null, l, null, null, null) : tt(l) ? l = e.__k[a] = Be(ee, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? l = e.__k[a] = Be(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[a] = l, h = a + c, l.__ = e, l.__b = e.__b + 1, o = null, (d = l.__i = Bi(l, n, h, m)) != -1 && (m--, (o = n[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (r > w ? c-- : r < w && c++), typeof l.type != "function" && (l.__u |= 4)) : d != h && (d == h - 1 ? c-- : d == h + 1 ? c++ : (d > h ? c-- : c++, l.__u |= 4))) : e.__k[a] = null;
  if (m) for (a = 0; a < w; a++) (o = n[a]) != null && (2 & o.__u) == 0 && (o.__e == s && (s = we(o)), wi(o, o));
  return s;
}
function pi(e, t, n) {
  var s, r;
  if (typeof e.type == "function") {
    for (s = e.__k, r = 0; s && r < s.length; r++) s[r] && (s[r].__ = e, t = pi(s[r], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = we(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Bi(e, t, n, s) {
  var r, a, l, o = e.key, h = e.type, d = t[n], w = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || w && o == d.key && h == d.type) return n;
  if (s > (w ? 1 : 0)) {
    for (r = n - 1, a = n + 1; r >= 0 || a < t.length; ) if ((d = t[l = r >= 0 ? r-- : a++]) != null && (2 & d.__u) == 0 && o == d.key && h == d.type) return l;
  }
  return -1;
}
function Nt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Di.test(t) ? n : n + "px";
}
function Le(e, t, n, s, r) {
  var a, l;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof s == "string" && (e.style.cssText = s = ""), s) for (t in s) n && t in n || Nt(e.style, t, "");
    if (n) for (t in n) s && n[t] == s[t] || Nt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(ci, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? s ? n[Me] = s[Me] : (n[Me] = qt, e.addEventListener(t, a ? yt : wt, a)) : e.removeEventListener(t, a ? yt : wt, a);
  else {
    if (r == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Ot(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[He] == null) t[He] = qt++;
      else if (t[He] < n[Me]) return;
      return n(j.event ? j.event(t) : t);
    }
  };
}
function St(e, t, n, s, r, a, l, o, h, d) {
  var w, m, c, f, y, u, _, b, k, p, g, v, x, $, C, I, W = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (h = !!(32 & n.__u), a = [o = t.__e = n.__e]), (w = j.__b) && w(t);
  e: if (typeof W == "function") {
    m = l.length;
    try {
      if (k = t.props, p = W.prototype && W.prototype.render, g = (w = W.contextType) && s[w.__c], v = w ? g ? g.props.value : w.__ : s, n.__c ? b = (c = t.__c = n.__c).__ = c.__E : (p ? t.__c = c = new W(k, v) : (t.__c = c = new Fe(k, v), c.constructor = W, c.render = Ui), g && g.sub(c), c.state || (c.state = {}), c.__n = s, f = c.__d = !0, c.__h = [], c._sb = []), p && c.__s == null && (c.__s = c.state), p && W.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ie({}, c.__s)), ie(c.__s, W.getDerivedStateFromProps(k, c.__s))), y = c.props, u = c.state, c.__v = t, f) p && W.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), p && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (p && W.getDerivedStateFromProps == null && k !== y && c.componentWillReceiveProps != null && c.componentWillReceiveProps(k, v), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(k, c.__s, v) === !1) {
          t.__v != n.__v && (c.props = k, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(Q) {
            Q && (Q.__ = t);
          }), Qe.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && l.push(c), o = we(n);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(k, c.__s, v), p && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(y, u, _);
        });
      }
      if (c.context = v, c.props = k, c.__P = e, c.__e = !1, x = j.__r, $ = 0, p) c.state = c.__s, c.__d = !1, x && x(t), w = c.render(c.props, c.state, c.context), Qe.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, x && x(t), w = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++$ < 25);
      c.state = c.__s, c.getChildContext != null && (s = ie(ie({}, s), c.getChildContext())), p && !f && c.getSnapshotBeforeUpdate != null && (_ = c.getSnapshotBeforeUpdate(y, u)), C = w != null && w.type === ee && w.key == null ? gi(w.props.children) : w, o = ui(e, tt(C) ? C : [C], t, n, s, r, a, l, o, h, d), c.base = t.__e, t.__u &= -161, c.__h.length && l.push(c), b && (c.__E = c.__ = null);
    } catch (Q) {
      if (l.length = m, t.__v = null, h || a != null) {
        if (Q.then) {
          for (t.__u |= h ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
          a != null && (a[a.indexOf(o)] = null), t.__e = o;
        } else if (a != null) for (I = a.length; I--; ) Et(a[I]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), Q.then || mi(t), j.__e(Q, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : o = t.__e = Fi(n.__e, t, n, s, r, a, l, h, d);
  return (w = j.diffed) && w(t), 128 & t.__u ? void 0 : o;
}
function mi(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(mi));
}
function fi(e, t, n) {
  for (var s = 0; s < n.length; s++) It(n[s], n[++s], n[++s]);
  j.__c && j.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(a) {
        a.call(r);
      });
    } catch (a) {
      j.__e(a, r.__v);
    }
  });
}
function gi(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : tt(e) ? e.map(gi) : e.constructor !== void 0 ? null : ie({}, e);
}
function Fi(e, t, n, s, r, a, l, o, h) {
  var d, w, m, c, f, y, u, _ = n.props || ze, b = t.props, k = t.type;
  if (k == "svg" ? r = "http://www.w3.org/2000/svg" : k == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((f = a[d]) && "setAttribute" in f == !!k && (k ? f.localName == k : f.nodeType == 3)) {
      e = f, a[d] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode(b);
    e = document.createElementNS(r, k, b.is && b), o && (j.__m && j.__m(t, a), o = !1), a = null;
  }
  if (k == null) _ === b || o && e.data == b || (e.data = b);
  else {
    if (a = k == "textarea" && b.defaultValue != null ? null : a && et.call(e.childNodes), !o && a != null) for (_ = {}, d = 0; d < e.attributes.length; d++) _[(f = e.attributes[d]).name] = f.value;
    for (d in _) f = _[d], d == "dangerouslySetInnerHTML" ? m = f : d == "children" || d in b || d == "value" && "defaultValue" in b || d == "checked" && "defaultChecked" in b || Le(e, d, null, f, r);
    for (d in b) f = b[d], d == "children" ? c = f : d == "dangerouslySetInnerHTML" ? w = f : d == "value" ? y = f : d == "checked" ? u = f : o && typeof f != "function" || _[d] === f || Le(e, d, f, _[d], r);
    if (w) o || m && (w.__html == m.__html || w.__html == e.innerHTML) || (e.innerHTML = w.__html), t.__k = [];
    else if (m && (e.innerHTML = ""), ui(t.type == "template" ? e.content : e, tt(c) ? c : [c], t, n, s, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, a, l, a ? a[0] : n.__k && we(n, 0), o, h), a != null) for (d = a.length; d--; ) Et(a[d]);
    o && k != "textarea" || (d = "value", k == "progress" && y == null ? e.removeAttribute("value") : y != null && (y !== e[d] || k == "progress" && !y || k == "option" && y != _[d]) && Le(e, d, y, _[d], r), d = "checked", u != null && u != e[d] && Le(e, d, u, _[d], r));
  }
  return e;
}
function It(e, t, n) {
  try {
    if (typeof e == "function") {
      var s = typeof e.__u == "function";
      s && e.__u(), s && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (r) {
    j.__e(r, n);
  }
}
function wi(e, t, n) {
  var s, r;
  if (j.unmount && j.unmount(e), (s = e.ref) && (s.current && s.current != e.__e || It(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount) try {
      s.componentWillUnmount();
    } catch (a) {
      j.__e(a, t);
    }
    s.base = s.__P = s.__n = null;
  }
  if (s = e.__k) for (r = 0; r < s.length; r++) s[r] && wi(s[r], t, n || typeof e.type != "function");
  n || Et(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ui(e, t, n) {
  return this.constructor(e, n);
}
function Vi(e, t, n) {
  var s, r, a, l;
  t == document && (t = document.documentElement), j.__ && j.__(e, t), r = (s = !1) ? null : t.__k, a = [], l = [], St(t, e = t.__k = Ni(ee, null, [e]), r || ze, ze, t.namespaceURI, r ? null : t.firstChild ? et.call(t.childNodes) : null, a, r ? r.__e : t.firstChild, s, l), fi(a, e, l), e.props.children = null;
}
function zi(e) {
  function t(n) {
    var s, r;
    return this.getChildContext || (s = /* @__PURE__ */ new Set(), (r = {})[t.__c] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      s = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && s.forEach(function(l) {
        l.__e = !0, vt(l);
      });
    }, this.sub = function(a) {
      s.add(a);
      var l = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        s && s.delete(a), l && l.call(a);
      };
    }), n.children;
  }
  return t.__c = "__cC" + di++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, s) {
    return n.children(s);
  }).contextType = t, t;
}
et = Qe.slice, j = { __e: function(e, t, n, s) {
  for (var r, a, l; t = t.__; ) if ((r = t.__c) && !r.__) try {
    if ((a = r.constructor) && a.getDerivedStateFromError != null && (r.setState(a.getDerivedStateFromError(e)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, s || {}), l = r.__d), l) return r.__E = r;
  } catch (o) {
    e = o;
  }
  throw e;
} }, ai = 0, Fe.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ie({}, this.state), typeof e == "function" && (e = e(ie({}, n), this.props)), e && ie(n, e), e != null && this.__v && (t && this._sb.push(t), vt(this));
}, Fe.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vt(this));
}, Fe.prototype.render = ee, de = [], li = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, oi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Je.__r = 0, ot = Math.random().toString(8), He = "__d" + ot, Me = "__a" + ot, ci = /(PointerCapture)$|Capture$/i, qt = 0, wt = Ot(!1), yt = Ot(!0), di = 0;
var Qi = 0;
function i(e, t, n, s, r, a) {
  t || (t = {});
  var l, o, h = t;
  if ("ref" in h) for (o in h = {}, t) o == "ref" ? l = t[o] : h[o] = t[o];
  var d = { type: e, props: h, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Qi, __i: -1, __u: 0, __source: r, __self: a };
  if (typeof e == "function" && (l = e.defaultProps)) for (o in l) h[o] === void 0 && (h[o] = l[o]);
  return j.vnode && j.vnode(d), d;
}
var ye, P, ct, Ht, Ae = 0, yi = [], D = j, Bt = D.__b, Ft = D.__r, Ut = D.diffed, Vt = D.__c, zt = D.unmount, Qt = D.__;
function je(e, t) {
  D.__h && D.__h(P, e, Ae || t), Ae = 0;
  var n = P.__H || (P.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function S(e) {
  return Ae = 1, Ji(vi, e);
}
function Ji(e, t, n) {
  var s = je(ye++, 2);
  if (s.t = e, !s.__c && (s.__ = [vi(void 0, t), function(o) {
    var h = s.__N ? s.__N[0] : s.__[0], d = s.t(h, o);
    h !== d && (s.__N = [d, s.__[1]], s.__c.setState({}));
  }], s.__c = P, !P.__f)) {
    var r = function(o, h, d) {
      if (!s.__c.__H) return !0;
      var w = !1, m = s.__c.props !== o;
      if (s.__c.__H.__.some(function(f) {
        if (f.__N) {
          w = !0;
          var y = f.__[0];
          f.__ = f.__N, f.__N = void 0, y !== f.__[0] && (m = !0);
        }
      }), a) {
        var c = a.call(this, o, h, d);
        return w ? c || m : c;
      }
      return !w || m;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate, l = P.componentWillUpdate;
    P.componentWillUpdate = function(o, h, d) {
      if (this.__e) {
        var w = a;
        a = void 0, r(o, h, d), a = w;
      }
      l && l.call(this, o, h, d);
    }, P.shouldComponentUpdate = r;
  }
  return s.__N || s.__;
}
function V(e, t) {
  var n = je(ye++, 3);
  !D.__s && Mt(n.__H, t) && (n.__ = e, n.u = t, P.__H.__h.push(n));
}
function Gi(e, t) {
  var n = je(ye++, 4);
  !D.__s && Mt(n.__H, t) && (n.__ = e, n.u = t, P.__h.push(n));
}
function ne(e) {
  return Ae = 5, ue(function() {
    return { current: e };
  }, []);
}
function ue(e, t) {
  var n = je(ye++, 7);
  return Mt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ke(e, t) {
  return Ae = 8, ue(function() {
    return e;
  }, t);
}
function Ki(e) {
  var t = P.context[e.__c], n = je(ye++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(P)), t.props.value) : e.__;
}
function Yi() {
  for (var e; e = yi.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Ue), t.__h.some(_t), t.__h = [];
    } catch (n) {
      t.__h = [], D.__e(n, e.__v);
    }
  }
}
D.__b = function(e) {
  P = null, Bt && Bt(e);
}, D.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Qt && Qt(e, t);
}, D.__r = function(e) {
  Ft && Ft(e), ye = 0;
  var t = (P = e.__c).__H;
  t && (ct === P ? (t.__h = [], P.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Ue), t.__h.some(_t), t.__h = [], ye = 0)), ct = P;
}, D.diffed = function(e) {
  Ut && Ut(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (yi.push(t) !== 1 && Ht === D.requestAnimationFrame || ((Ht = D.requestAnimationFrame) || Xi)(Yi)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), ct = P = null;
}, D.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Ue), n.__h = n.__h.filter(function(s) {
        return !s.__ || _t(s);
      });
    } catch (s) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], D.__e(s, n.__v);
    }
  }), Vt && Vt(e, t);
}, D.unmount = function(e) {
  zt && zt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(s) {
    try {
      Ue(s);
    } catch (r) {
      t = r;
    }
  }), n.__H = void 0, t && D.__e(t, n.__v));
};
var Jt = typeof requestAnimationFrame == "function";
function Xi(e) {
  var t, n = function() {
    clearTimeout(s), Jt && cancelAnimationFrame(t), setTimeout(e);
  }, s = setTimeout(n, 35);
  Jt && (t = requestAnimationFrame(n));
}
function Ue(e) {
  var t = P, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), P = t;
}
function _t(e) {
  var t = P;
  e.__c = e.__(), P = t;
}
function Mt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, s) {
    return n !== e[s];
  });
}
function vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function se(e) {
  return e.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}
const Zi = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work".split(" ")
);
function _i(e) {
  return se(e).replace(/[^a-z0-9+#/. -]/g, " ").split(/[\s/]+/).map((t) => t.replace(/^[.-]+|[.-]+$/g, "")).filter((t) => t.length > 1 && !Zi.has(t)).map(en);
}
function en(e) {
  if (e.length <= 4) return e;
  for (const t of ["ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"])
    if (e.endsWith(t) && e.length - t.length >= 4) return e.slice(0, -t.length);
  return e;
}
const N = (e) => !!e && e.status === "verified" && e.public_safe, tn = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function nn(e) {
  return new RegExp(`(?<![a-z0-9])${tn(e)}(?![a-z0-9+#])`, "g");
}
function sn(e) {
  const t = e;
  t.claim = new Map(e.claims.map((r) => [r.id, r])), t.entity = new Map(e.entities.map((r) => [r.id, r])), t.skill = new Map(e.skills.map((r) => [r.id, r])), t.gap = new Map(e.gaps.map((r) => [r.id, r])), t.role = new Map(e.roles.map((r) => [r.id, r])), t.archByEntity = new Map(e.architectures.map((r) => [r.entity, r]));
  const n = [], s = (r, a) => {
    const l = se(r);
    l && n.push({ term: l, ref: { ...a, term: r }, re: nn(l) });
  };
  for (const r of e.skills)
    s(r.name, { id: r.id, kind: "skill", near: !1 }), r.aliases.forEach((a) => s(a, { id: r.id, kind: "skill", near: !1 })), (r.near || []).forEach((a) => s(a, { id: r.id, kind: "skill", near: !0 }));
  for (const r of e.gaps) r.aliases.forEach((a) => s(a, { id: r.id, kind: "gap", near: !1 }));
  n.sort((r, a) => a.term.length - r.term.length), t.aliases = n, t.statableBySkill = /* @__PURE__ */ new Map(), t.statableByEntity = /* @__PURE__ */ new Map(), t.pendingBySkill = /* @__PURE__ */ new Map();
  for (const r of e.claims)
    if (N(r)) {
      for (const a of r.tags) (t.statableBySkill.get(a) ?? t.statableBySkill.set(a, []).get(a)).push(r);
      (t.statableByEntity.get(r.entity) ?? t.statableByEntity.set(r.entity, []).get(r.entity)).push(r);
    } else if (r.status === "verification_required")
      for (const a of r.tags) (t.pendingBySkill.get(a) ?? t.pendingBySkill.set(a, []).get(a)).push(r);
  return t;
}
async function rn(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`evidence ${t.status}`);
  return sn(await t.json());
}
const Te = (e, t) => e.entity.get(t)?.short ?? t, At = (e, t) => e.skill.get(t)?.name ?? e.gap.get(t)?.name ?? t;
function it(e, t) {
  const n = se(t), s = [], r = /* @__PURE__ */ new Map();
  for (const a of e.aliases) {
    a.re.lastIndex = 0;
    let l;
    for (; l = a.re.exec(n); ) {
      const o = l.index, h = o + l[0].length;
      if (s.some(([m, c]) => o < c && h > m)) continue;
      s.push([o, h]);
      const d = a.ref.near ? `near:${a.ref.term}` : a.ref.id, w = r.get(d);
      w ? w.count++ : r.set(d, { ...a.ref, count: 1, index: o });
    }
  }
  return [...r.values()].sort((a, l) => a.index - l.index);
}
const an = {
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
}, dt = Object.entries(an).map(
  ([e, t]) => [e, new RegExp(`(?<![a-z0-9])(${t.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`)]
);
function bi(e) {
  const t = se(e);
  return dt.filter(([, n]) => n.test(t)).map(([n]) => n).sort((n, s) => t.search(dt.find(([r]) => r === n)[1]) - t.search(dt.find(([r]) => r === s)[1]));
}
const Gt = /* @__PURE__ */ new WeakMap();
function ln(e) {
  let t = Gt.get(e);
  if (t) return t;
  const n = e.claims.filter(N).map((r) => {
    const a = [e.entity.get(r.entity)?.name ?? "", ...r.tags.map((l) => e.skill.get(l)?.name ?? "")].join(" ");
    return { claim: r, toks: _i(`${r.text} ${a}`) };
  }), s = /* @__PURE__ */ new Map();
  for (const r of n) new Set(r.toks).forEach((a) => s.set(a, (s.get(a) ?? 0) + 1));
  return t = { docs: n, df: s, avg: n.reduce((r, a) => r + a.toks.length, 0) / Math.max(1, n.length) }, Gt.set(e, t), t;
}
function ki(e, t, n = {}) {
  const s = ln(e), r = [...new Set(_i(t))], a = new Set(n.concepts ?? it(e, t).filter((m) => m.kind === "skill").map((m) => m.id)), l = new Set(n.entities ?? bi(t)), o = s.docs.length, h = 1.2, d = 0.75, w = [];
  for (const m of s.docs) {
    let c = 0;
    for (const f of r) {
      const y = m.toks.filter((b) => b === f).length;
      if (!y) continue;
      const u = s.df.get(f) ?? 0, _ = Math.log(1 + (o - u + 0.5) / (u + 0.5));
      c += _ * (y * (h + 1) / (y + h * (1 - d + d * m.toks.length / s.avg)));
    }
    for (const f of m.claim.tags) a.has(f) && (c += 2.5);
    l.has(m.claim.entity) && (c += 3), m.claim.kind === "limitation" && (c *= 0.8), c > 0 && w.push({ claim: m.claim, score: c });
  }
  return w.sort((m, c) => c.score - m.score).slice(0, n.limit ?? 12);
}
const Kt = { public_artifact: 1, self_reported: 0.8 };
function te(e, t, n = {}) {
  const s = e.gap.get(t);
  if (s) {
    const o = s.related.flatMap((h) => e.statableBySkill.get(h) ?? []);
    return {
      id: t,
      label: s.name,
      category: s.verify ? "verification" : "missing",
      priority: n.priority,
      claims: [],
      entities: Pe(o.map((h) => h.entity)).slice(0, 4),
      statement: s.statement,
      via: s.related[0]
    };
  }
  const r = e.skill.get(t);
  if (!r)
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
  const a = e.statableBySkill.get(t) ?? [], l = (e.pendingBySkill.get(t) ?? []).map((o) => o.id);
  if (n.near)
    return {
      id: `near:${n.near}`,
      label: ut(n.near),
      term: n.near,
      category: a.length ? "related" : "missing",
      priority: n.priority,
      claims: a.slice(0, 6).map((o) => o.id),
      entities: Pe(a.map((o) => o.entity)),
      via: t,
      statement: a.length ? `${ut(n.near)} itself is not demonstrated. The closest evidence is ${r.name.toLowerCase()}.` : `${ut(n.near)} is not demonstrated.`
    };
  if (a.length) {
    const o = a.some((h) => h.strength === "public_artifact");
    return {
      id: t,
      label: r.name,
      category: "direct",
      priority: n.priority,
      claims: ht(a).map((h) => h.id),
      entities: Pe(ht(a).map((h) => h.entity)),
      strength: o ? "artifact" : "self_reported",
      pending: l
    };
  }
  for (const o of r.related) {
    const h = e.statableBySkill.get(o) ?? [];
    if (h.length)
      return {
        id: t,
        label: r.name,
        category: "related",
        priority: n.priority,
        via: o,
        claims: ht(h).slice(0, 6).map((d) => d.id),
        entities: Pe(h.map((d) => d.entity)),
        pending: l,
        statement: `No direct evidence for ${r.name.toLowerCase()}. The closest is ${At(e, o).toLowerCase()}.`
      };
  }
  return l.length ? {
    id: t,
    label: r.name,
    category: "verification",
    priority: n.priority,
    claims: [],
    entities: [],
    pending: l,
    statement: "Only claims that still need verification mention this."
  } : {
    id: t,
    label: r.name,
    category: "missing",
    priority: n.priority,
    claims: [],
    entities: [],
    statement: `${r.name} is not currently demonstrated in the portfolio.`
  };
}
function ht(e) {
  return [...e].sort((t, n) => (Kt[n.strength] ?? 0) - (Kt[t.strength] ?? 0) || (t.kind === "limitation" ? 1 : 0) - (n.kind === "limitation" ? 1 : 0));
}
function Tt(e, t, n, s = {}) {
  const r = { direct: 0, related: 0, verification: 0, missing: 0 };
  n.forEach((h) => r[h.category]++);
  const a = /* @__PURE__ */ new Map();
  for (const h of n)
    if (!(h.category !== "direct" && h.category !== "related"))
      for (const d of h.entities) {
        const w = a.get(d) ?? { score: 0, requirements: [] };
        w.score += (h.category === "direct" ? 1 : 0.4) * (d === "imw" ? 0.4 : 1), w.requirements.push(h.id), a.set(d, w);
      }
  const l = ["direct", "related", "verification", "missing"], o = { required: 0, preferred: 1, mentioned: 2, undefined: 1 };
  return {
    title: t,
    source: "role",
    notes: [],
    ...s,
    requirements: [...n].sort((h, d) => l.indexOf(h.category) - l.indexOf(d.category) || o[String(h.priority)] - o[String(d.priority)]),
    counts: r,
    entities: [...a.entries()].map(([h, d]) => ({ id: h, ...d })).filter((h) => e.entity.has(h.id)).sort((h, d) => d.score - h.score)
  };
}
function pe(e, t) {
  const n = e.role.get(t);
  if (!n) throw new Error(`unknown role ${t}`);
  const s = [...n.requirements.map((a) => te(e, a)), ...n.gaps.map((a) => te(e, a))], r = [n.level_note, e.subject.level_note].filter(Boolean);
  return Tt(e, n.title, s, { source: "role", roleId: t, notes: r });
}
const z = {
  direct: "Direct evidence",
  related: "Related evidence",
  verification: "Verification required",
  missing: "Not currently demonstrated"
}, Pe = (e) => [...new Set(e)], ut = (e) => e.replace(/\b[a-z]/g, (t) => t.toUpperCase()), on = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/, xi = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/, cn = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/, dn = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;
function hn(e) {
  const t = e.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(t)) return null;
  const n = se(t).replace(/^#+\s*/, ""), s = n.split(" ").length;
  return n.length > 0 && n.length < 70 && (/[:：]$/.test(n) || /^#/.test(t) || s <= 5 && !/[.,;]/.test(n)) ? on.test(n) ? "skip" : xi.test(n) ? "preferred" : cn.test(n) ? "required" : dn.test(n) ? "mentioned" : null : null;
}
function un(e, t) {
  const n = t.split(/\r?\n/);
  let s = "mentioned";
  const r = /* @__PURE__ */ new Map(), a = { required: 3, preferred: 2, mentioned: 1, skip: 0 };
  for (const c of n) {
    if (!c.trim()) continue;
    const f = hn(c);
    if (f) {
      s = f;
      continue;
    }
    if (s === "skip") continue;
    const y = xi.test(se(c)) ? "preferred" : s;
    for (const u of it(e, c)) {
      const _ = u.near ? `near:${u.term.toLowerCase()}` : u.id, b = r.get(_);
      b ? (b.count += u.count, a[y] > a[b.priority] && (b.priority = y)) : r.set(_, { id: u.id, near: u.near ? u.term.toLowerCase() : void 0, priority: y, count: u.count });
    }
  }
  const l = se(t), o = [...l.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((c) => Number(c[1])).filter((c) => c > 0 && c < 30), h = l.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/), d = new Set([...r.values()].filter((c) => !c.near && e.skill.has(c.id)).map((c) => c.id));
  let w, m = 0;
  for (const c of e.roles) {
    const f = c.requirements.filter((y) => d.has(y)).length / c.requirements.length;
    f > m && (m = f, w = c.id);
  }
  return {
    concepts: [...r.values()],
    years: o.length ? Math.max(...o) : void 0,
    seniority: h?.[1],
    closestRole: m >= 0.25 ? w : void 0
  };
}
function Ge(e, t, n = []) {
  const s = un(e, t), r = [], a = /* @__PURE__ */ new Set(), l = { required: 0, preferred: 1, mentioned: 2 }, o = [...s.concepts].sort((d, w) => l[d.priority] - l[w.priority] || w.count - d.count).slice(0, 26);
  for (const d of o) {
    const w = te(e, d.id, { near: d.near, priority: d.priority === "skip" ? "mentioned" : d.priority });
    a.has(w.id) || (a.add(w.id), r.push(w));
  }
  for (const d of n) {
    const w = it(e, d);
    if (w.length)
      for (const m of w) {
        const c = te(e, m.id, { near: m.near ? m.term.toLowerCase() : void 0, priority: "required" });
        a.has(c.id) || (a.add(c.id), r.push(c));
      }
    else if (d.trim().length > 2) {
      const m = te(e, d.trim(), { priority: "required" });
      a.has(m.id) || (a.add(m.id), r.push(m));
    }
  }
  const h = [];
  return s.years && s.years >= 3 ? h.push(`The description asks for ${s.years}+ years. ${e.subject.level_note}`) : s.seniority && h.push(`The description uses the word "${s.seniority}". ${e.subject.level_note}`), r.length || h.push("No recognizable technical requirements were found. Try pasting the requirements section."), Tt(e, "Your job description", r, {
    source: "jd",
    notes: h,
    closestRole: s.closestRole ? e.role.get(s.closestRole)?.title : void 0,
    roleId: s.closestRole
  });
}
const jt = (e) => e.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(e), $i = /\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|best candidate|excellent fit|great fit|strong fit|perfect|10\s?\/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|highly recommend|must hire|unmatched|brilliant|superstar)\b/i, pn = /(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)/i, mn = /(\b(rate|score|rank)\b.*\b(him|rahul|candidate)\b|\bout of (10|ten|100)\b|percent(age)? (match|fit)|%\s?(match|fit)|match (score|percentage)|fit score|is (he|rahul) (the )?(best|perfect|ideal|a good|great)|should (we|i) hire|would (he|rahul) be (a )?(good|great|perfect))/i, fn = /\b(weather|joke|poem|recipe|song|lyrics|stock price|bitcoin|politic|election|horoscope|translate this|write (me )?(an? )?(essay|story|cover letter)|capital of|who won the)\b/i, M = (e, t) => t.test(e), B = (e) => [...new Set(e)];
function Yt(e, t) {
  let n = e.strength === "public_artifact" ? 1 : 0.6;
  const s = new Set(e.tags), r = !!e.code?.length;
  switch (t) {
    case "engineer":
      n += r ? 1.2 : 0, n += e.kind === "fact" ? 0.4 : 0;
      break;
    case "researcher":
      n += e.kind === "metric" ? 1 : 0, n += e.kind === "limitation" ? 0.8 : 0, n += s.has("research_methods") || s.has("metrics") ? 0.6 : 0;
      break;
    case "manager":
      n += e.kind === "metric" ? 0.6 : 0, n += s.has("stakeholder") || s.has("deployment") || s.has("testing") ? 0.5 : 0;
      break;
    case "founder":
      n += s.has("product_judgment") || s.has("cost_modeling") ? 1 : 0, n += e.kind === "metric" ? 0.4 : 0;
      break;
    case "recruiter":
      n += e.kind === "metric" ? 0.6 : 0, n -= e.kind === "limitation" ? 0.8 : 0;
      break;
  }
  return n;
}
function K(e, t, n, s = 3, r = 9) {
  const a = [...t].filter(N).sort((h, d) => Yt(d, n) - Yt(h, n)), l = /* @__PURE__ */ new Map(), o = [];
  for (const h of a) {
    const d = l.get(h.entity) ?? 0;
    if (!(d >= s || o.includes(h)) && (l.set(h.entity, d + 1), o.push(h), o.length >= r))
      break;
  }
  return o;
}
function Ke(e, t) {
  return B(t.flatMap((n) => e.statableBySkill.get(n) ?? []));
}
function ge(e, t) {
  return (e.statableByEntity.get(t) ?? []).filter((n) => n.kind === "limitation");
}
function A(e) {
  return e.map((t) => t.id);
}
function Rt(e) {
  return { kind: "anchor", label: `Jump to ${e.short} on the portfolio`, target: e.anchor };
}
function qe(e, t, n = {}) {
  const s = e.entity.get(t);
  if (!s) return [];
  const r = [];
  n.xray !== !1 && e.archByEntity.has(t) && r.push({ kind: "mode", label: `X-Ray ${s.short}`, target: "xray", arg: t }), r.push(Rt(s));
  for (const a of s.links.slice(0, 2)) r.push({ kind: "url", label: a.label, target: a.url });
  return r;
}
function O(e, t, n = []) {
  const s = e.entity.get(t);
  if (!s) return [];
  const r = s.short, a = [
    ["architecture", `Show the architecture of ${r}`],
    ["why", `Why was ${r} designed this way?`],
    ["evaluation", `How was ${r} evaluated?`],
    ["failure", `What failed in ${r}?`],
    ["code", `Show me the code for ${r}`],
    ["challenge", `What would an interviewer challenge about ${r}?`],
    ["personally", `What did Rahul personally do on ${r}?`],
    ["scale", `How would ${r} scale?`]
  ], l = e.archByEntity.has(t);
  return a.filter(([o]) => !n.includes(o)).filter(([o]) => o === "architecture" ? l : !0).filter(([o]) => o === "failure" ? e.failures.some((h) => h.entity === t) || ge(e, t).length > 0 : !0).filter(([o]) => o === "why" ? e.decisions.some((h) => h.entity === t) : !0).map(([, o]) => o).slice(0, 5);
}
const Re = [
  "What has Rahul actually shipped?",
  "Show me his strongest RAG work.",
  "How does he evaluate AI systems?",
  "What failure did he find and fix?",
  "What has he built beyond LLM wrappers?",
  "Show me his backend engineering experience."
];
function E(e, t, n = {}) {
  return {
    blocks: t,
    followups: n.followups ?? Re.slice(0, 4),
    actions: n.actions ?? [],
    engine: "evidence",
    intent: e,
    entities: n.entities ?? [],
    basis: n.basis
  };
}
function gn(e) {
  return B(e.blocks.flatMap((t) => t.type === "claims" ? t.ids : t.type === "p" ? t.cites ?? [] : []));
}
function wn(e) {
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
function yn(e, t) {
  const n = gn(t);
  return t.basis = {
    retrieved: t.basis?.retrieved ?? n,
    checks: [
      { label: "Only verified, public-safe claims cited", ok: n.every((s) => N(e.claim.get(s))) },
      { label: "No fit scores, rankings or praise", ok: !$i.test(wn(t)) },
      { label: "Every cited claim links to a source", ok: n.every((s) => (e.claim.get(s)?.sources.length ?? 0) > 0) }
    ]
  }, t;
}
const vn = [
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
function _n(e) {
  const t = se(e);
  return vn.find(([n]) => n.test(t))?.[1];
}
function bn(e, t, n) {
  return yn(e, kn(e, t, n));
}
function kn(e, t, n) {
  const s = t.trim(), r = se(s), a = n.persona;
  if (!r) return xn(e);
  if (pn.test(s))
    return E("injection", [
      { type: "p", text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." }
    ], { followups: Re.slice(0, 4) });
  if (jt(s)) return In(e, s);
  if (mn.test(r))
    return E("no_scores", [
      { type: "p", text: "I don't produce fit scores, rankings or hiring recommendations. What I can do is show evidence coverage: for each requirement of a role, whether the portfolio has direct evidence, related evidence, claims awaiting verification, or nothing yet." }
    ], { actions: [{ kind: "mode", label: "Evaluate against a role", target: "role" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an AI Evaluation Engineer role", "What is not demonstrated yet?"] });
  const l = bi(s), o = it(e, s), h = B(o.map((u) => u.id));
  if (fn.test(r) && !l.length && !o.length)
    return E("off_topic", [{ type: "p", text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  if (M(r, /\b(contact|email|reach (him|rahul|out)|get in touch|hire him|linkedin|resume|cv)\b/)) return $n(e);
  const d = Sn(e, r, s, l, h);
  if (d) return d;
  const w = _n(r);
  if (w && M(r, /(interviewer|interview questions|would .* ask)/)) return ti(e, w);
  if (w && M(r, /challenge/)) return ii(e, w);
  if (w && M(r, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return Xt(e, w);
  if (n.roleId && M(r, /(this role|the role|this evidence|for this|^challenge)/))
    return M(r, /challenge/) ? ii(e, n.roleId) : M(r, /(interview|ask)/) ? ti(e, n.roleId) : Xt(e, n.roleId);
  if (M(r, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/))
    return E(
      "role_prompt",
      [{ type: "p", text: "Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated." }],
      { actions: [{ kind: "mode", label: "Select a role", target: "role" }, { kind: "mode", label: "Paste a job description", target: "role", arg: "jd" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an ML Engineer role", "Evaluate Rahul for an LLM Application Engineer role"] }
    );
  if (M(r, /\b(compare|versus|vs\.?|difference between|differ)\b/) && l.length >= 2) return Zt(e, l.slice(0, 2), a);
  if (M(r, /\b(compare|versus|vs\.?)\b/) && l.length === 1 && n.lastEntities?.length) {
    const u = n.lastEntities.find((_) => _ !== l[0]);
    if (u) return Zt(e, [u, l[0]], a);
  }
  if (M(r, /(who is (rahul|he)|about rahul|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr)/)) return Dn(e, a);
  if (r.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/) || M(r, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const u = o.filter((k) => k.kind === "skill").map((k) => k.id), _ = We(r), b = u.length ? u : _;
    if (b.length) return ei(e, b, a, r);
  }
  if (M(r, /\b(strongest|best)\b/) && We(r).length) return ei(e, We(r), a, r);
  if (M(r, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/) && o.length) return bt(e, o.map((u) => ({ id: u.id, near: u.near ? u.term.toLowerCase() : void 0 })), a, r);
  const f = l[0] ?? (M(r, /\b(it|this|that|the project)\b/) ? n.lastEntities?.[0] : void 0);
  if (f) return Mn(e, f, r, a);
  if (M(r, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return Ln(e);
  if (M(r, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return An(e, a, M(r, /\b(more|all|other)\b/));
  if (M(r, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return Tn(e, a);
  if (M(r, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return jn(e);
  if (M(r, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return Rn(e);
  if (M(r, /(personally|himself|his own|individual contribution)/)) return E("personally", [{ type: "p", text: "Ask about a specific project or role. Ownership is recorded per item:" }, ...e.entities.filter((u) => u.ownership && u.kind !== "education").slice(0, 7).map((u) => ({ type: "p", text: `${u.short}: ${u.ownership}` }))]);
  const y = We(r);
  return y.length ? Pn(e, r, y, a) : o.length ? bt(e, o.map((u) => ({ id: u.id, near: u.near ? u.term.toLowerCase() : void 0 })), a, r) : Wn(e, s, a);
}
function xn(e) {
  return E("help", [{ type: "p", text: `Ask about ${e.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}
function $n(e) {
  return E("contact", [{ type: "p", text: `${e.subject.name} is seeking full-time AI / ML engineering roles across the US.` }], {
    actions: [
      { kind: "url", label: "Email Rahul", target: `mailto:${e.subject.email}` },
      { kind: "url", label: "LinkedIn", target: e.subject.links.linkedin },
      { kind: "url", label: "GitHub", target: e.subject.links.github },
      { kind: "anchor", label: "Jump to contact", target: "#contact" }
    ]
  });
}
const Cn = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi, qn = /\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/, En = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;
function Sn(e, t, n, s, r) {
  if (!(/^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(t) || /\b(did|has) (he|rahul)\b/.test(t))) return null;
  const l = t.match(qn)?.[0];
  if (l && En.test(t) && !/stable diffusion/.test(l)) {
    const d = e.gap.get("pretraining"), w = K(e, Ke(e, ["llm_apis"]), "engineer", 1, 4);
    return E("false_premise", [
      { type: "p", text: `No. Nothing in the evidence supports that premise. ${l.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: "gaps", items: [{ id: d.id, name: d.name, statement: d.statement, closest: ["sssd"] }] },
      { type: "claims", title: "What the evidence does show", ids: A(w) }
    ], { followups: ["What models has Rahul fine-tuned?", "Show me his strongest RAG work.", "What is not demonstrated yet?"] });
  }
  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(t) && !/club/.test(t)) {
    const d = e.claim.get("dac.lead"), w = Ke(e, ["stakeholder"]).filter((m) => m.id !== "dac.lead").slice(0, 2);
    return E("false_premise", [
      { type: "p", text: "The portfolio does not show people management or leading an engineering team. The closest evidence is student leadership and cross-functional collaboration:" },
      { type: "claims", ids: [d.id, ...A(w)] }
    ]);
  }
  const o = /minute|scale|100x|10x/.test(t) ? [] : n.match(Cn) ?? [];
  if (o.length) {
    const d = o[0].replace(/\s/g, ""), w = d.replace(/^\$/, "").replace(/[%x×]$/i, ""), m = e.claims.filter((f) => N(f) && f.text.replace(/\s/g, "").includes(w)), c = e.claims.filter((f) => !N(f) && f.text.replace(/\s/g, "").includes(w));
    if (m.length) {
      const f = /patient records|patients|ehr/.test(t) && m.some((y) => /not clinical ehr records/i.test(y.text));
      return E("figure_check", [
        { type: "p", text: f ? `Not quite. ${d} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${d}:`, cites: A(m.slice(0, 1)) },
        { type: "claims", ids: A(m.slice(0, 3)) }
      ], { entities: B(m.map((y) => y.entity)), followups: O(e, m[0].entity) });
    }
    if (c.length)
      return E("figure_check", [
        { type: "p", text: `That figure is not verified, so I won't state it as fact. ${c[0].note ?? ""}` },
        { type: "note", tone: "warn", text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' }
      ], { entities: B(c.map((f) => f.entity)) });
    if (s.length || r.length)
      return E("figure_check", [{ type: "p", text: `${d} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities: s });
  }
  const h = r.map((d) => e.gap.get(d)).find((d) => d && !d.verify);
  if (h && /\b(did|does|has|have|is|was)\b/.test(t)) {
    const d = h.related.flatMap((w) => e.statableBySkill.get(w) ?? []);
    return E("unsupported_skill", [
      { type: "p", text: `No. ${h.statement}` },
      ...d.length ? [{ type: "claims", title: "Closest related evidence", ids: A(K(e, d, "engineer", 1, 4)) }] : []
    ], { followups: ["What is not demonstrated yet?", "Show me his backend engineering experience.", "Evaluate Rahul for an MLOps Engineer role"] });
  }
  return null;
}
function In(e, t) {
  const n = Ge(e, t), s = n.counts, r = [
    { type: "p", text: `I found ${n.requirements.length} requirements. ${s.direct} have direct evidence, ${s.related} related evidence, ${s.verification} need verification, and ${s.missing} are not currently demonstrated.` },
    { type: "coverage", analysis: n }
  ];
  return n.notes.forEach((a) => r.push({ type: "note", tone: "warn", text: a })), E("jd", r, {
    actions: [{ kind: "mode", label: "Show this on the portfolio", target: "transform" }, { kind: "mode", label: "Technical brief for this role", target: "brief" }],
    followups: ["What is the strongest evidence for this role?", "Challenge this evidence", "What is not demonstrated yet?"]
  });
}
function Xt(e, t, n) {
  const s = pe(e, t), r = s.counts, a = s.entities.slice(0, 3).map((o) => Te(e, o.id)), l = [
    { type: "p", text: `Evidence coverage for ${s.title}: ${r.direct} requirements with direct evidence, ${r.related} with related evidence, ${r.verification} needing verification, and ${r.missing} not currently demonstrated. The strongest evidence comes from ${qi(a)}.` },
    { type: "coverage", analysis: s }
  ];
  return s.notes.forEach((o) => l.push({ type: "note", tone: "info", text: o })), E("role", l, {
    entities: s.entities.slice(0, 3).map((o) => o.id),
    actions: [
      { kind: "mode", label: "Show this on the portfolio", target: "transform", arg: t },
      { kind: "mode", label: "10-minute technical brief", target: "brief", arg: t },
      { kind: "mode", label: "Explore on the map", target: "map", arg: t }
    ],
    followups: [`Challenge the evidence for ${s.title}`, `What would an interviewer ask for ${s.title}?`, "What is not demonstrated yet?"]
  });
}
function Zt(e, [t, n], s) {
  const r = e.entity.get(t), a = e.entity.get(n), l = (f, y) => ({ label: f, values: [y(t), y(n)] }), o = (f) => B((e.statableByEntity.get(f) ?? []).flatMap((y) => y.tags)).filter((y) => !["python", "healthcare", "fintech", "product_judgment"].includes(y)).slice(0, 6).map((y) => At(e, y)).join(", ") || "—", h = (f) => (e.statableByEntity.get(f) ?? []).find((y) => y.tags.some((u) => ["eval_design", "llm_eval", "regression_testing"].includes(u)) && y.kind !== "limitation")?.text ?? "—", d = (f) => {
    const y = (e.statableByEntity.get(f) ?? []).find((u) => u.metrics?.length);
    return y ? y.metrics.map((u) => `${u.label}: ${u.value}`).join(" · ") : "—";
  }, w = (f) => ge(e, f)[0]?.text.replace(/^Limits:\s*/, "") ?? "—", m = (f) => (e.statableByEntity.get(f) ?? []).some((y) => y.tags.includes("deployment")) ? "Yes" : "No public deployment", c = B([t, n].flatMap((f) => (e.statableByEntity.get(f) ?? []).filter((y) => y.metrics?.length || y.kind === "limitation").slice(0, 3)));
  return E("compare", [
    { type: "p", text: `${r.short} vs ${a.short}, compared on the same evidence fields.` },
    { type: "compare", entities: [t, n], rows: [
      l("What it is", (f) => e.entity.get(f).tagline),
      l("When", (f) => e.entity.get(f).dates),
      l("Demonstrates", o),
      l("Evaluation evidence", h),
      l("Measured results", d),
      l("Deployed", m),
      l("Main limitation", w),
      l("Ownership", (f) => e.entity.get(f).ownership || "—")
    ] },
    { type: "claims", title: "Evidence used", ids: A(K(e, c, s, 3, 6)) }
  ], { entities: [t, n], actions: [...qe(e, t).slice(0, 1), ...qe(e, n).slice(0, 1)], followups: [...O(e, t).slice(0, 2), ...O(e, n).slice(0, 2)] });
}
function ei(e, t, n, s) {
  const r = /* @__PURE__ */ new Map();
  for (const c of Ke(e, t)) {
    const f = r.get(c.entity) ?? { s: 0, claims: [] };
    f.s += (c.strength === "public_artifact" ? 1 : 0.7) + (c.code?.length ? 0.4 : 0) + (c.kind === "metric" ? 0.2 : 0), f.claims.push(c), r.set(c.entity, f);
  }
  const a = [...r.entries()].filter(([c]) => c !== "imw").sort((c, f) => f[1].s - c[1].s);
  if (!a.length) return bt(e, t.map((c) => ({ id: c })), n, s);
  const [l, o] = a[0], h = e.entity.get(l), d = At(e, t[0]).toLowerCase(), w = o.claims.filter((c) => c.code?.length).length, m = a[1] ? ` The next strongest is ${Te(e, a[1][0])}.` : "";
  return E("strongest", [
    { type: "p", text: `The strongest evidence for ${d} is ${h.name}: ${o.claims.length} supporting claims, ${w} with linked code.${m}`, cites: A(o.claims.slice(0, 2)) },
    { type: "claims", ids: A(K(e, o.claims, n, 5, 5)) },
    ...e.archByEntity.has(l) ? [{ type: "xray", arch: e.archByEntity.get(l).id }] : []
  ], { entities: [l], actions: qe(e, l), followups: O(e, l) });
}
function bt(e, t, n, s) {
  const r = [], a = [], l = [], o = /* @__PURE__ */ new Set();
  for (const d of t.slice(0, 3)) {
    const w = te(e, d.id, { near: d.near });
    if (o.has(w.id)) continue;
    o.add(w.id);
    const m = w.entities.map((c) => Te(e, c));
    if (w.category === "direct") {
      const c = w.strength === "self_reported" ? " This evidence is self-reported employment experience; there is no public artifact." : "";
      r.push({ type: "p", text: `${z.direct}: ${w.label} appears in ${qi(m.slice(0, 4))}.${c}`, cites: w.claims.slice(0, 2) }), r.push({ type: "claims", ids: A(K(e, w.claims.map((f) => e.claim.get(f)), n, 2, 5)) });
    } else w.category === "related" ? (r.push({ type: "p", text: `${z.related}: ${w.statement}`, cites: w.claims.slice(0, 1) }), r.push({ type: "claims", ids: w.claims.slice(0, 4) })) : w.category === "verification" ? r.push({ type: "p", text: `${z.verification}: ${w.statement ?? ""}` }) : r.push({ type: "gaps", items: [{ id: w.id, name: w.label, statement: w.statement ?? "", closest: w.entities }] });
    if (a.push(...w.entities), /where/.test(s)) for (const c of w.entities.slice(0, 3)) {
      const f = e.entity.get(c);
      f && l.push(Rt(f));
    }
  }
  const h = B(a)[0];
  return E("skill", r, { entities: B(a), actions: l.length ? l : h ? qe(e, h) : [], followups: h ? O(e, h).slice(0, 3).concat(["What is not demonstrated yet?"]) : Re.slice(0, 4) });
}
function Mn(e, t, n, s) {
  const r = e.entity.get(t), a = e.statableByEntity.get(t) ?? [], l = e.archByEntity.get(t), o = e.failures.filter((f) => f.entity === t), h = e.decisions.filter((f) => f.entity === t), d = qe(e, t);
  if (M(n, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && l)
    return E("architecture", [
      { type: "p", text: `${l.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: "xray", arch: l.id }
    ], { entities: [t], actions: d, followups: O(e, t, ["architecture"]) });
  if (M(n, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && h.length)
    return E("decisions", [{ type: "decisions", ids: h.map((f) => f.id) }], { entities: [t], actions: d, followups: O(e, t, ["why"]) });
  if (M(n, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const f = ge(e, t), y = [];
    return o.length && y.push({ type: "failures", ids: o.map((u) => u.id) }), f.length && y.push({ type: "claims", title: "Stated limitations", ids: A(f) }), y.length || y.push({ type: "p", text: `The evidence database records no specific failure case for ${r.short}.` }), E("failures", y, { entities: [t], actions: [...e.attacks.some((u) => u.entity === t) ? [{ kind: "mode", label: "Try to break it", target: "lab", arg: t }] : [], ...d], followups: O(e, t, ["failure"]) });
  }
  if (M(n, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const f = a.filter((_) => _.tags.some((b) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(b))), y = [{ type: "claims", ids: A(K(e, f, "researcher", 7, 7)) }];
    t === "cliniq" && y.push({ type: "chart", chart: "cliniq" }), t === "voice" && y.push({ type: "chart", chart: "voice_quality" });
    const u = e.traces.find((_) => _.entity === t);
    return u && y.push({ type: "trace", id: u.id }), E("evaluation", y, { entities: [t], actions: [{ kind: "mode", label: "Open the proof lab", target: "lab", arg: t }, ...d], followups: O(e, t, ["evaluation"]) });
  }
  if (M(n, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const f = a.filter((y) => y.code?.length);
    return E("code", [
      { type: "p", text: `Code links are pinned to a specific commit, so line numbers do not drift.${r.repo ? "" : " This is employment work, so no source code is public."}` },
      { type: "claims", ids: A(K(e, f, "engineer", 8, 8)) }
    ], { entities: [t], actions: d, followups: O(e, t, ["code"]) });
  }
  if (M(n, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const f = ge(e, t), y = [{ type: "p", text: `Questions an interviewer could reasonably press on for ${r.short}:` }];
    return r.questions.forEach((u) => y.push({ type: "p", text: `• ${u}` })), f.length && y.push({ type: "claims", title: "Limitations the evidence already states", ids: A(f) }), h.length && y.push({ type: "decisions", ids: h.slice(0, 2).map((u) => u.id) }), E("challenge", y, { entities: [t], actions: d, followups: O(e, t, ["challenge"]) });
  }
  if (M(n, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/))
    return E("personally", [
      { type: "p", text: r.ownership || "The portfolio does not break down individual contributions for this item." },
      { type: "claims", ids: A(K(e, a, s, 4, 4)) }
    ], { entities: [t], actions: d, followups: O(e, t, ["personally"]) });
  if (M(n, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const f = a.filter((u) => u.tags.some((_) => ["rate_limiting", "caching", "deployment", "docker", "monitoring"].includes(_))), y = ["distributed_systems", "kubernetes"].map((u) => e.gap.get(u));
    return E("scale", [
      { type: "p", text: `What is implemented today for ${r.short}:` },
      f.length ? { type: "claims", ids: A(f.slice(0, 5)) } : { type: "p", text: "No scaling-related controls are recorded for this item." },
      { type: "gaps", items: y.map((u) => ({ id: u.id, name: u.name, statement: u.statement, closest: [] })) },
      { type: "note", tone: "info", text: "A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented." }
    ], { entities: [t], actions: d, followups: O(e, t, ["scale"]) });
  }
  if (n.length > 70) {
    const f = ki(e, n, { entities: [t], limit: 8 }).map((u) => u.claim).filter((u) => u.entity === t), y = ge(e, t).filter((u) => !f.includes(u));
    if (f.length)
      return E("focused", [
        { type: "p", text: `The evidence most relevant to this question about ${r.short}:`, cites: A(f.slice(0, 2)) },
        { type: "claims", ids: A(f.slice(0, 5)) },
        ...y.length ? [{ type: "claims", title: "Stated limitations", ids: A(y.slice(0, 2)) }] : []
      ], { entities: [t], actions: d, followups: O(e, t) });
  }
  const w = r.summaries[s] ?? r.tagline, m = K(e, a, s, s === "recruiter" ? 3 : 5, s === "recruiter" ? 3 : 5), c = [{ type: "entity", id: t }, { type: "p", text: w, cites: A(m.slice(0, 2)) }, { type: "claims", ids: A(m) }];
  if (s === "engineer" && l && c.push({ type: "xray", arch: l.id }), s === "researcher") {
    const f = ge(e, t);
    f.length && c.push({ type: "claims", title: "Stated limitations", ids: A(f) });
  }
  return s === "manager" && r.ownership && c.push({ type: "note", tone: "info", text: `Ownership: ${r.ownership}` }), E("entity", c, { entities: [t], actions: d, followups: O(e, t) });
}
function An(e, t, n = !1) {
  const r = n ? e.failures.map((a) => a.id) : {
    engineer: ["f.voice.bargein", "f.voice.artifacts", "f.cliniq.embedding"],
    recruiter: ["f.voice.bargein", "f.cliniq.embedding"],
    manager: ["f.voice.artifacts", "f.voice.incomplete", "f.voice.bargein"],
    founder: ["f.cliniq.revenue", "f.cliniq.embedding", "f.voice.bargein"],
    researcher: ["f.cliniq.embedding", "f.qml.speedup", "f.sssd.debug"]
  }[t].filter((a) => e.failures.some((l) => l.id === a));
  return E("failures", [
    { type: "p", text: "Failures found and fixed, each with how it was detected and what now prevents it:" },
    { type: "failures", ids: r }
  ], {
    entities: B(r.map((a) => e.failures.find((l) => l.id === a).entity)),
    actions: [{ kind: "mode", label: "Open the proof lab", target: "lab" }],
    followups: ["Show me the barge-in fix in code", "Show more failure cases", "How does he evaluate AI systems?"]
  });
}
function Tn(e, t) {
  const s = ["dia.no_llm_review", "dia.four_tier", "dia.calibration", "dia.entity_filter", "voice.bargein", "voice.gate", "cliniq.schema", "cliniq.workload", "sssd.encoder"].map((r) => e.claim.get(r)).filter(N);
  return E("beyond_wrappers", [
    { type: "p", text: "Work where a language model is one component, or absent entirely: deterministic review pipelines, classical classifiers with calibration, realtime audio engineering, database design, release gates, and a custom diffusion conditioning encoder." },
    { type: "claims", ids: A(t === "recruiter" ? s.slice(0, 5) : s) }
  ], { entities: B(s.map((r) => r.entity)), actions: [{ kind: "mode", label: "X-Ray the Drug Interaction Agent", target: "xray", arg: "dia" }], followups: ["Why keep label review free of an LLM?", "Show me the barge-in fix in code", "Show the architecture of ClinIQ"] });
}
function jn(e, t) {
  const n = ["dia.shipped", "cliniq.delivery", "tifin.deploy", "tifin.reach", "imw.system"].map((s) => e.claim.get(s)).filter(N);
  return E("shipped", [
    { type: "p", text: "Publicly deployed and inspectable: the Drug Interaction Agent (live app) and ClinIQ (live demo), both on Hugging Face Spaces. Production work at TIFIN is self-reported employment experience with no public artifact. The Voice-Agent QA Harness is a test system, not a deployed product.", cites: ["dia.shipped", "cliniq.delivery", "tifin.deploy"] },
    { type: "claims", ids: A(n) }
  ], {
    entities: ["dia", "cliniq", "tifin"],
    actions: [{ kind: "url", label: "Open Drug Interaction Agent", target: e.entity.get("dia").links[0].url }, { kind: "url", label: "Open ClinIQ demo", target: e.entity.get("cliniq").links[0].url }, { kind: "anchor", label: "Jump to TIFIN experience", target: "#tifin" }],
    followups: ["Show the architecture of the Drug Interaction Agent", "How was ClinIQ evaluated?", "What did Rahul personally do on TIFIN?"]
  });
}
function Rn(e) {
  return E("gaps", [
    { type: "p", text: "What the current portfolio does not demonstrate, and the closest related evidence for each:" },
    { type: "gaps", items: ["kubernetes", "iac", "distributed_inference", "pretraining", "orchestration", "human_annotation", "online_experiments", "customer_deployments"].map((n) => e.gap.get(n)).map((n) => ({ id: n.id, name: n.name, statement: n.statement, closest: B(n.related.flatMap((s) => (e.statableBySkill.get(s) ?? []).map((r) => r.entity))).slice(0, 3) })) },
    { type: "note", tone: "info", text: `Also pending verification (not stated as fact): ${e.conflicts.filter((n) => !n.decision.startsWith("No conflict")).map((n) => n.label).slice(0, 5).join("; ")}.` }
  ], { followups: ["Evaluate Rahul for an MLOps Engineer role", "What is his strongest evidence overall?", "How does he evaluate AI systems?"] });
}
function Ln(e) {
  const t = ["citizen.role", "tifin.role", "athena.role", "edu.ms"].map((n) => e.claim.get(n)).filter(N);
  return E("level", [{ type: "p", text: e.subject.level_note }, { type: "claims", ids: A(t) }], { followups: ["What has Rahul actually shipped?", "Evaluate Rahul for a Machine Learning Engineer I role"] });
}
const Ci = [
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
function We(e) {
  return Ci.find(([t]) => t.test(e))?.[1] ?? [];
}
function Pn(e, t, n, s) {
  const r = Ci.find(([h]) => h.test(t))[2], a = K(e, Ke(e, n), s, s === "recruiter" ? 2 : 3, s === "recruiter" ? 6 : 9), l = B(a.map((h) => h.entity)), o = [{ type: "p", text: r, cites: A(a.slice(0, 2)) }, { type: "claims", ids: A(a) }];
  return n.includes("eval_design") && s !== "recruiter" && o.push({ type: "chart", chart: "cliniq" }), n.includes("rag") && l.includes("dia") && s === "engineer" && o.push({ type: "xray", arch: "arch.dia" }), n.includes("voice_ai") && o.push({ type: "trace", id: "t.voice.emergency" }), E("topic", o, {
    entities: l,
    actions: l.slice(0, 3).map((h) => Rt(e.entity.get(h))),
    followups: l[0] ? O(e, l[0]).slice(0, 3).concat(l[1] ? [`Compare ${Te(e, l[0])} and ${Te(e, l[1])}`] : []) : Re.slice(0, 4)
  });
}
function Wn(e, t, n) {
  const s = ki(e, t, { limit: 6 });
  if (!s.length || s[0].score < 2)
    return E("no_evidence", [
      { type: "p", text: "The evidence database doesn't cover that. I only answer from verified material about Rahul's work, so here is what I can answer:" }
    ], { followups: Re });
  const r = K(e, s.map((l) => l.claim), n, 2, 5), a = r[0].entity;
  return E("retrieval", [
    { type: "p", text: "The closest verified evidence:", cites: A(r.slice(0, 1)) },
    { type: "claims", ids: A(r) }
  ], { entities: B(r.map((l) => l.entity)), actions: qe(e, a), followups: O(e, a).slice(0, 3), basis: { retrieved: s.map((l) => l.claim.id) } });
}
function Dn(e, t) {
  const n = ["dia.shipped", "voice.gate", "cliniq.comparison", "tifin.agents", "sssd.encoder"].map((s) => e.claim.get(s)).filter(N);
  return E("overview", [
    { type: "p", text: `${e.subject.name} is an early-career AI/ML engineer. The strongest inspectable evidence, one item per area:` },
    { type: "claims", ids: A(t === "recruiter" ? n.slice(0, 4) : n) },
    { type: "note", tone: "info", text: e.subject.level_note }
  ], {
    entities: B(n.map((s) => s.entity)),
    actions: [{ kind: "mode", label: "Explore the evidence map", target: "map" }, { kind: "mode", label: "Evaluate against a role", target: "role" }],
    followups: ["What has Rahul actually shipped?", "What failure did he find and fix?", "What is not demonstrated yet?"]
  });
}
function ti(e, t) {
  const n = pe(e, t), s = n.entities.slice(0, 3).map((l) => e.entity.get(l.id)).filter(Boolean), r = [{ type: "p", text: `Questions worth asking for ${n.title}, grounded in the evidence an interviewer would see:` }];
  for (const l of s) l.questions.slice(0, 2).forEach((o) => r.push({ type: "p", text: `• ${l.short}: ${o}` }));
  return n.requirements.filter((l) => l.category === "missing").slice(0, 2).forEach((l) => r.push({ type: "p", text: `• Gap: ${l.label}. How would you close it in your first months?` })), E("role_questions", r, { entities: s.map((l) => l.id), actions: [{ kind: "mode", label: "10-minute technical brief", target: "brief", arg: t }], followups: [`Challenge the evidence for ${n.title}`] });
}
function ii(e, t) {
  const n = pe(e, t), s = n.entities.slice(0, 3).map((o) => o.id), r = s.flatMap((o) => ge(e, o)).slice(0, 4), a = n.requirements.filter((o) => o.category === "direct" && o.strength === "self_reported").map((o) => o.label), l = [
    { type: "p", text: `The weakest points in the evidence for ${n.title}:` },
    { type: "gaps", items: n.requirements.filter((o) => o.category === "missing" || o.category === "verification").map((o) => ({ id: o.id, name: o.label, statement: o.statement ?? "", closest: o.entities.slice(0, 3) })) }
  ];
  return a.length && l.push({ type: "note", tone: "warn", text: `Supported only by self-reported employment experience (no public artifact): ${a.join(", ")}.` }), r.length && l.push({ type: "claims", title: "Limitations stated in the strongest projects", ids: A(r) }), n.notes.forEach((o) => l.push({ type: "note", tone: "info", text: o })), E("challenge", l, { entities: s, followups: [`What would an interviewer ask for ${n.title}?`, "What failure did he find and fix?"] });
}
function qi(e) {
  return e.length <= 1 ? e[0] ?? "the portfolio" : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
const Nn = "https://astra6-interview-my-work.hf.space";
function Ei() {
  return (document.querySelector('meta[name="imw-api"]')?.content || Nn).replace(/\/$/, "");
}
async function Ye(e, t) {
  const n = new AbortController(), s = setTimeout(() => n.abort(), t.timeout);
  try {
    const r = await fetch(Ei() + e, { ...t, signal: n.signal, headers: { "Content-Type": "application/json", ...t.headers || {} } });
    if (!r.ok) throw Object.assign(new Error(`HTTP ${r.status}`), { status: r.status });
    return await r.json();
  } finally {
    clearTimeout(s);
  }
}
async function On(e) {
  e("checking");
  const t = (n) => e(n?.ai_enabled ? "ready" : "offline");
  try {
    t(await Ye("/api/health", { method: "GET", timeout: 4e3 }));
    return;
  } catch {
  }
  e("waking");
  try {
    t(await Ye("/api/health", { method: "GET", timeout: 45e3 }));
  } catch {
    e("offline");
  }
}
async function Hn(e, t, n, s, r) {
  const a = await Ye("/api/ask", {
    method: "POST",
    timeout: 3e4,
    body: JSON.stringify({ question: t, persona: n, history: s.slice(-3), role: r ?? null })
  }), l = a.sentences.flatMap((m) => m.cites), o = [...a.sentences.map((m) => m.text), a.hypothetical ?? ""].join(" ");
  if (!a.sentences.length || l.some((m) => !N(e.claim.get(m))) || $i.test(o))
    throw new Error("model answer failed client validation");
  const h = [];
  let d = { text: "", cites: [] };
  for (const m of a.sentences)
    d.text += (d.text ? " " : "") + m.text.trim(), d.cites.push(...m.cites), d.text.length > 320 && (h.push({ type: "p", text: d.text, cites: [...new Set(d.cites)] }), d = { text: "", cites: [] });
  d.text && h.push({ type: "p", text: d.text, cites: [...new Set(d.cites)] }), a.hypothetical && h.push({ type: "note", tone: "info", text: `Hypothetical, not implemented: ${a.hypothetical}` });
  const w = (a.gaps ?? []).map((m) => e.gap.get(m)).filter(Boolean);
  return w.length && h.push({ type: "gaps", items: w.map((m) => ({ id: m.id, name: m.name, statement: m.statement, closest: [] })) }), {
    blocks: h,
    followups: (a.followups ?? []).slice(0, 4),
    actions: [],
    engine: "model",
    intent: "model",
    entities: (a.entities ?? []).filter((m) => e.entity.has(m)),
    basis: { retrieved: a.retrieved ?? [...new Set(l)], checks: a.checks, model: a.model }
  };
}
async function Si(e) {
  const t = await Ye("/api/jd", { method: "POST", timeout: 25e3, body: JSON.stringify({ text: e.slice(0, 12e3) }) });
  return Array.isArray(t.requirements) ? t.requirements.filter((n) => typeof n == "string").slice(0, 30) : [];
}
const Ii = zi(null), T = () => Ki(Ii), me = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function U(e, t = {}) {
  try {
    window.dispatchEvent(new CustomEvent("imw:event", { detail: { name: e, ...t } }));
  } catch {
  }
}
let $e = null;
const kt = [], Xe = /* @__PURE__ */ new Set(), H = (e, t, n) => {
  const s = document.createElement(e);
  return s.className = t, n && (s.textContent = n), s;
};
function Bn(e, t, n) {
  xt();
  const s = new Map(t.entities.map((b) => [b.id, b.score])), r = (b) => t.requirements.filter((k) => (k.category === "direct" || k.category === "related") && k.entities.includes(b)), a = document.getElementById("work"), l = a ? [...a.querySelectorAll(":scope > article.project")] : [];
  if (l.length && a) {
    $e = { parent: a, order: [...a.children], numbers: l.map((v) => [v.querySelector(".project-number"), v.querySelector(".project-number")?.textContent ?? ""]) };
    const b = (v) => e.entities.find((x) => x.anchor === `#${v.id}`)?.id ?? "", k = new Map(l.map((v) => [v, v.getBoundingClientRect()])), p = [...l].sort((v, x) => (s.get(b(x)) ?? 0) - (s.get(b(v)) ?? 0)), g = a.querySelector(":scope > .research");
    if (p.forEach((v, x) => {
      a.insertBefore(v, g);
      const $ = v.querySelector(".project-number");
      $ && ($.textContent = `${String(x + 1).padStart(2, "0")} —`);
    }), !me())
      for (const v of p) {
        const x = k.get(v), $ = v.getBoundingClientRect(), C = x.top - $.top;
        C && v.animate([{ transform: `translateY(${C}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
  }
  for (const b of e.entities) {
    if (b.id === "imw" || b.kind === "education") continue;
    const k = document.querySelector(b.anchor);
    if (!k || k.id === "work" || k.id === "experience") continue;
    const p = r(b.id);
    if (k.classList.add(p.length ? "imw-lens-hit" : "imw-lens-dim"), Xe.add(k), p.length) {
      const g = H("div", "imw-lens-tag");
      g.append(H("span", "imw-lens-tag-label", `✦ Evidence for ${t.title}`)), p.slice(0, 6).forEach((v) => g.append(H("span", `imw-lens-chip is-${v.category}`, v.label))), k.prepend(g), kt.push(g);
    }
  }
  const o = t.requirements.filter((b) => b.category === "direct").flatMap((b) => [b.label, ...e.skill.get(b.id)?.aliases ?? []]).map((b) => b.toLowerCase());
  document.querySelectorAll("#skills .skill").forEach((b) => {
    const k = b.textContent?.toLowerCase() ?? "";
    b.classList.add(o.some((p) => p.length > 2 && k.includes(p)) ? "imw-lens-hit" : "imw-lens-dim"), Xe.add(b);
  });
  const h = H("div", "imw-lens-bar");
  h.setAttribute("role", "region"), h.setAttribute("aria-label", "Role lens");
  const d = H("div", "imw-lens-head");
  d.append(H("span", "imw-lens-mark", "✦"), H("strong", "", `Viewing as: ${t.title}`));
  const w = H("div", "imw-lens-counts");
  ["direct", "related", "verification", "missing"].forEach((b) => w.append(H("span", `is-${b}`, `${t.counts[b]} ${z[b].toLowerCase()}`)));
  const m = t.requirements.filter((b) => b.category === "missing").map((b) => b.label), c = H("div", "imw-lens-missing", m.length ? `Not demonstrated: ${m.slice(0, 4).join(", ")}${m.length > 4 ? "…" : ""}` : "Every listed requirement has at least related evidence."), f = H("div", "imw-lens-actions"), y = H("button", "imw-lens-btn", "Open analysis"), u = H("button", "imw-lens-btn is-primary", "Restore portfolio");
  y.onclick = () => n.reopen(), u.onclick = () => {
    xt(), n.restore();
  }, f.append(y, u);
  const _ = H("div", "imw-lens-mid");
  _.append(w, c), h.append(d, _, f), document.body.append(h), kt.push(h), document.documentElement.classList.add("imw-lens"), requestAnimationFrame(() => (a ?? document.body).scrollIntoView({ behavior: me() ? "auto" : "smooth", block: "start" })), u.focus({ preventScroll: !0 });
}
function xt() {
  kt.splice(0).forEach((e) => e.remove()), Xe.forEach((e) => e.classList.remove("imw-lens-hit", "imw-lens-dim")), Xe.clear(), $e && ($e.order.forEach((e) => $e.parent.appendChild(e)), $e.numbers.forEach(([e, t]) => {
    e && (e.textContent = t);
  }), $e = null), document.documentElement.classList.remove("imw-lens");
}
let oe = null;
function Fn(e, t) {
  const n = document.querySelector(e);
  if (!n) {
    t();
    return;
  }
  n.scrollIntoView({ behavior: me() ? "auto" : "smooth", block: "start" }), n.classList.add("imw-flash"), setTimeout(() => n.classList.remove("imw-flash"), 2400), n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus({ preventScroll: !0 }), oe?.remove(), oe = H("button", "imw-return", "✦ Back to Interview My Work"), oe.onclick = () => {
    oe?.remove(), oe = null, t();
  }, document.body.append(oe), setTimeout(() => {
    oe?.remove(), oe = null;
  }, 2e4);
}
function Mi(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "Verified · public artifact" : "Verified · self-reported" : { verification_required: "Verification required", unsupported: "Unsupported", deprecated: "Withdrawn" }[e.status] ?? e.status;
}
function Ze(e) {
  return e.status === "verified" ? e.strength === "public_artifact" ? "st-artifact" : "st-self" : e.status === "verification_required" ? "st-pending" : "st-no";
}
const Ce = ({ cls: e, label: t }) => /* @__PURE__ */ i("i", { class: `imw-dot ${e}`, "aria-hidden": t ? void 0 : "true", "aria-label": t });
function Ee({ refs: e, max: t = 4 }) {
  return e?.length ? /* @__PURE__ */ i("ul", { class: "imw-code", children: e.slice(0, t).map((n) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("a", { href: n.url, target: "_blank", rel: "noopener", children: [
    /* @__PURE__ */ i("span", { class: "imw-code-label", children: n.label }),
    /* @__PURE__ */ i("span", { class: "imw-code-path", children: [
      n.path,
      n.lines ? `#L${n.lines[0]}–${n.lines[1]}` : ""
    ] })
  ] }) }, n.url)) }) : null;
}
function Un({ id: e, compact: t }) {
  const { kb: n, setInspect: s, inspect: r } = T(), a = n.claim.get(e);
  if (!a) return null;
  const l = n.entity.get(a.entity), o = r?.kind === "claim" && r.id === e;
  return /* @__PURE__ */ i("li", { class: `imw-claim${o ? " is-on" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-claim-btn", onClick: () => s({ kind: "claim", id: e }), "aria-label": `View evidence: ${a.text}`, children: [
      /* @__PURE__ */ i(Ce, { cls: Ze(a) }),
      /* @__PURE__ */ i("span", { class: "imw-claim-text", children: a.text })
    ] }),
    !t && /* @__PURE__ */ i("div", { class: "imw-claim-meta", children: [
      /* @__PURE__ */ i("span", { children: l?.short }),
      /* @__PURE__ */ i("span", { class: `imw-st ${Ze(a)}`, children: Mi(a) }),
      a.code?.length ? /* @__PURE__ */ i("a", { href: a.code[0].url, target: "_blank", rel: "noopener", class: "imw-mini-link", children: "Code ↗" }) : null,
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => s({ kind: "claim", id: e }), children: "Evidence" })
    ] })
  ] });
}
function Y({ ids: e, title: t, compact: n }) {
  return e.length ? /* @__PURE__ */ i("div", { class: "imw-claims", children: [
    t && /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: t }),
    /* @__PURE__ */ i("ul", { children: e.map((s) => /* @__PURE__ */ i(Un, { id: s, compact: n }, s)) })
  ] }) : null;
}
function Ve({ a: e }) {
  const { go: t, jump: n, ask: s, toggleLens: r, coverage: a, kb: l } = T();
  if (e.kind === "url") {
    const h = e.target.startsWith("mailto:") || e.target.includes("linkedin");
    return /* @__PURE__ */ i("a", { class: "imw-btn", href: e.target, target: e.target.startsWith("mailto:") ? void 0 : "_blank", rel: "noopener", onClick: () => h && U("contact_clicked_from_ai"), children: [
      e.label,
      " ",
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: "↗" })
    ] });
  }
  return /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => {
    if (e.kind === "anchor") return n(e.target);
    if (e.kind === "ask") return s(e.target);
    if (e.target === "transform")
      return r(!0, e.arg && e.arg !== a?.roleId ? pe(l, e.arg) : void 0);
    t(e.target, e.arg);
  }, children: [
    e.label,
    e.kind === "anchor" ? /* @__PURE__ */ i("span", { "aria-hidden": "true", children: " ↓" }) : null
  ] });
}
const fe = { direct: "cat-direct", related: "cat-related", verification: "cat-pending", missing: "cat-missing" };
function he({ children: e }) {
  return /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: e });
}
function Vn({ id: e }) {
  const { kb: t, setInspect: n } = T(), s = t.entity.get(e);
  return s ? /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n({ kind: "entity", id: e }), children: s.short }) : null;
}
const De = ["direct", "related", "verification", "missing"], zn = { direct: "direct", related: "related", verification: "to verify", missing: "not shown" };
function nt({ counts: e, compact: t }) {
  const n = De.reduce((s, r) => s + e[r], 0) || 1;
  return /* @__PURE__ */ i("div", { class: `imw-covbar${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-covbar-track", role: "img", "aria-label": De.map((s) => `${e[s]} ${z[s]}`).join(", "), children: De.filter((s) => e[s]).map((s) => /* @__PURE__ */ i("span", { class: `imw-covbar-seg ${fe[s]}`, style: { flexGrow: e[s] / n }, title: `${e[s]} · ${z[s]}` }, s)) }),
    /* @__PURE__ */ i("ul", { class: "imw-covbar-legend", children: De.map((s) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${fe[s]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("b", { children: e[s] }),
      " ",
      t ? zn[s] : z[s]
    ] }, s)) })
  ] });
}
function Ai({ analysis: e, max: t = 16 }) {
  const { kb: n, setInspect: s } = T(), [r, a] = S(null), l = e.requirements.slice(0, t), o = e.entities.slice(0, 7).map((p) => p.id), h = 26, d = 18, w = 640, m = d * 2 + Math.max(l.length, o.length) * h, c = (p) => d + (p + 0.5) * h * (Math.max(l.length, o.length) / Math.max(o.length, 1)), f = (p) => d + (p + 0.5) * h, y = 232, u = 408, _ = l.flatMap(
    (p, g) => p.category === "direct" || p.category === "related" ? p.entities.filter((v) => o.includes(v)).slice(0, 3).map((v) => ({ r: p.id, e: v, cat: p.category, y1: f(g), y2: c(o.indexOf(v)) })) : []
  ), b = (p, g) => !r || r === p || r === g, k = !me();
  return /* @__PURE__ */ i("figure", { class: "imw-map", children: [
    /* @__PURE__ */ i("svg", { viewBox: `0 0 ${w} ${m}`, role: "group", "aria-label": "Requirement to evidence map", class: k ? "is-anim" : "", children: [
      _.map((p, g) => /* @__PURE__ */ i(
        "path",
        {
          d: `M${y},${p.y1} C${y + 90},${p.y1} ${u - 90},${p.y2} ${u},${p.y2}`,
          class: `imw-link ${p.cat === "direct" ? "is-direct" : "is-related"}${b(p.r, p.e) ? " is-lit" : " is-dim"}`,
          style: { animationDelay: `${Math.min(g * 25, 700)}ms` }
        },
        g
      )),
      l.map((p, g) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-req ${fe[p.category]}${r && r !== p.id ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${p.label}: ${z[p.category]}`,
          onMouseEnter: () => a(p.id),
          onMouseLeave: () => a(null),
          onFocus: () => a(p.id),
          onBlur: () => a(null),
          onClick: () => s({ kind: "req", req: p }),
          onKeyDown: (v) => (v.key === "Enter" || v.key === " ") && (v.preventDefault(), s({ kind: "req", req: p })),
          children: [
            /* @__PURE__ */ i("rect", { x: 0, y: f(g) - h / 2, width: y + 6, height: h, class: "imw-hit" }),
            /* @__PURE__ */ i("text", { x: y - 12, y: f(g) + 4, "text-anchor": "end", children: Qn(p.label, 30) }),
            /* @__PURE__ */ i("circle", { cx: y, cy: f(g), r: 4.5 })
          ]
        },
        p.id
      )),
      o.map((p, g) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-ent${r && r !== p && !_.some((v) => v.e === p && v.r === r) ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": n.entity.get(p)?.name,
          onMouseEnter: () => a(p),
          onMouseLeave: () => a(null),
          onFocus: () => a(p),
          onBlur: () => a(null),
          onClick: () => s({ kind: "entity", id: p }),
          onKeyDown: (v) => (v.key === "Enter" || v.key === " ") && (v.preventDefault(), s({ kind: "entity", id: p })),
          children: [
            /* @__PURE__ */ i("rect", { x: u - 6, y: c(g) - h / 2, width: w - u + 6, height: h, class: "imw-hit" }),
            /* @__PURE__ */ i("circle", { cx: u, cy: c(g), r: 5.5 }),
            /* @__PURE__ */ i("text", { x: u + 14, y: c(g) + 4, children: n.entity.get(p)?.short })
          ]
        },
        p
      ))
    ] }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Solid lines: direct evidence. Dashed: related evidence. Hollow markers have no supporting evidence.",
      e.requirements.length > t ? ` Showing ${t} of ${e.requirements.length} requirements; the full list is below.` : ""
    ] })
  ] });
}
const Qn = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e, ni = [
  { key: "precision", label: "Precision", cls: "viz-1" },
  { key: "recall", label: "Recall", cls: "viz-2" },
  { key: "f1", label: "F1", cls: "viz-3" }
];
function Ti() {
  const { kb: e } = T(), t = e.datasets.cliniq_confusion, [n, s] = S(null), [r, a] = S(!1), l = ue(() => t.methods.map((_) => {
    const b = _.tp / (_.tp + _.fp), k = _.tp / (_.tp + _.fn);
    return { ..._, precision: b, recall: k, f1: 2 * b * k / (b + k) };
  }), [t]), o = 560, h = 230, d = 36, w = 30, m = 12, c = (o - d - 12) / l.length, f = 22, y = 2, u = (_) => m + (1 - _) * (h - m - w);
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: [
        "ClinIQ detectors on ",
        t.sample
      ] }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a(!r), "aria-pressed": r, children: r ? "Chart view" : "Table view" })
    ] }),
    r ? /* @__PURE__ */ i("table", { class: "imw-table", children: [
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
      /* @__PURE__ */ i("tbody", { children: l.map((_) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: _.label }),
        /* @__PURE__ */ i("td", { children: _.precision.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: _.recall.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: _.f1.toFixed(3) }),
        /* @__PURE__ */ i("td", { children: _.tp }),
        /* @__PURE__ */ i("td", { children: _.fp }),
        /* @__PURE__ */ i("td", { children: _.fn }),
        /* @__PURE__ */ i("td", { children: _.tn })
      ] }, _.id)) })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => s(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${o} ${h}`, role: "img", "aria-label": "Precision, recall and F1 for rules, embedding and LLM plus RAG detectors", children: [
        [0, 0.25, 0.5, 0.75, 1].map((_) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: d, x2: o - 8, y1: u(_), y2: u(_) }),
          /* @__PURE__ */ i("text", { x: d - 6, y: u(_) + 4, "text-anchor": "end", children: _.toFixed(2) })
        ] }, _)),
        l.map((_, b) => {
          const k = d + b * c + (c - (f * 3 + y * 2)) / 2;
          return /* @__PURE__ */ i("g", { children: [
            ni.map((p, g) => {
              const v = _[p.key], x = k + g * (f + y);
              return /* @__PURE__ */ i(
                "path",
                {
                  class: `imw-bar ${p.cls}`,
                  d: Jn(x, u(v), f, u(0) - u(v)),
                  onMouseEnter: () => s({ x: (x + f / 2) / o, y: u(v) / h, text: `${_.label} · ${p.label} ${v.toFixed(3)}` })
                },
                p.key
              );
            }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: d + b * c + c / 2, y: h - 10, "text-anchor": "middle", children: _.label })
          ] }, _.id);
        })
      ] }),
      n && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: `${n.x * 100}%`, top: `${n.y * 100}%` }, children: n.text })
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: ni.map((_) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-swatch ${_.cls}`, "aria-hidden": "true" }),
      _.label
    ] }, _.key)) }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. ",
      t.caveat
    ] })
  ] });
}
function Jn(e, t, n, s) {
  const r = Math.min(4, s / 2, n / 2);
  return s <= 0 ? "" : `M${e},${t + s} V${t + r} Q${e},${t} ${e + r},${t} H${e + n - r} Q${e + n},${t} ${e + n},${t + r} V${t + s} Z`;
}
function Lt() {
  const { kb: e } = T(), t = e.datasets.voice_quality, n = [...t.rows].sort((c, f) => f[3] - c[3]), [s, r] = S(null), a = 560, l = 20, o = 150, h = 40, d = n.length * l + 24, w = (c) => o + c / 60 * (a - o - h), m = n.reduce((c, f) => c + f[3], 0) / n.length;
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: /* @__PURE__ */ i("strong", { children: "Mid-call silence per recorded call (%)" }) }),
    /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => r(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${a} ${d}`, role: "img", "aria-label": `Mid-call silence per call; average ${m.toFixed(1)} percent`, children: [
        [0, 20, 40, 60].map((c) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: w(c), x2: w(c), y1: 0, y2: d - 18 }),
          /* @__PURE__ */ i("text", { x: w(c), y: d - 4, "text-anchor": "middle", children: c })
        ] }, c)),
        n.map((c, f) => {
          const y = f * l + 3;
          return /* @__PURE__ */ i("g", { onMouseEnter: () => r({ y: (y + l / 2) / d, text: `${c[0]} · silence ${c[3]}% · talk-over ${c[2]}% · longest gap ${c[4]}s` }), children: [
            /* @__PURE__ */ i("rect", { class: "imw-hit", x: 0, y: y - 2, width: a, height: l }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: o - 8, y: y + 11, "text-anchor": "end", children: c[0].replace(/_/g, " ") }),
            /* @__PURE__ */ i("path", { class: "imw-bar viz-1", d: Gn(o, y + 2, w(c[3]) - o, l - 8) })
          ] }, c[0]);
        }),
        /* @__PURE__ */ i("line", { class: "imw-ref", x1: w(m), x2: w(m), y1: 0, y2: d - 18 }),
        /* @__PURE__ */ i("text", { class: "imw-ref-label", x: w(m) + 4, y: 10, children: [
          "avg ",
          m.toFixed(1),
          "%"
        ] })
      ] }),
      s && /* @__PURE__ */ i("div", { class: "imw-tip", style: { left: "55%", top: `${s.y * 100}%` }, children: s.text })
    ] }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Talk-over averaged 0.3% and the mean pause between turns was 0.5 s. ",
      t.caveat
    ] })
  ] });
}
function Gn(e, t, n, s) {
  const r = Math.min(4, s / 2, n / 2);
  return n <= 0 ? "" : `M${e},${t} H${e + n - r} Q${e + n},${t} ${e + n},${t + r} V${t + s - r} Q${e + n},${t + s} ${e + n - r},${t + s} H${e} Z`;
}
const pt = 198, Ne = 96, Ie = 174, ce = 56, xe = 28, si = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e;
function ji({ arch: e, selected: t, onSelect: n, scan: s = !0 }) {
  const r = ne(null), [a, l] = S(!1), [o, h] = S(!1);
  Gi(() => {
    const u = r.current;
    if (!u) return;
    const _ = new ResizeObserver(([b]) => l(b.contentRect.width < 560));
    return _.observe(u), () => _.disconnect();
  }, []), V(() => {
    if (!s || me()) return;
    h(!0);
    const u = setTimeout(() => h(!1), 1300);
    return () => clearTimeout(u);
  }, [e.id, s]);
  const d = Math.max(...e.nodes.map((u) => u.col)) + 1, w = Math.max(...e.nodes.map((u) => u.row)) + 1, m = xe * 2 + d * pt - (pt - Ie), c = xe * 2 + w * Ne - (Ne - ce) + (e.lanes.length ? 14 : 0), f = (u) => {
    const _ = e.nodes.find((b) => b.id === u);
    return { x: xe + _.col * pt, y: xe + (e.lanes.length ? 14 : 0) + _.row * Ne };
  }, y = (u, _) => {
    (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n(_));
  };
  if (a) {
    const u = new Map(e.nodes.map((p) => [p.id, 0]));
    e.edges.forEach(([, p]) => u.set(p, (u.get(p) ?? 0) + 1));
    const _ = (p, g) => p.col - g.col || p.row - g.row, b = e.nodes.filter((p) => !u.get(p.id)).sort(_), k = [];
    for (; b.length; ) {
      const p = b.shift();
      k.push(p);
      const g = e.edges.filter(([v]) => v === p.id).map(([, v]) => v).filter((v) => (u.set(v, u.get(v) - 1), u.get(v) === 0)).map((v) => e.nodes.find((x) => x.id === v)).sort(_);
      b.unshift(...g);
    }
    return e.nodes.forEach((p) => {
      k.includes(p) || k.push(p);
    }), /* @__PURE__ */ i("div", { ref: r, class: "imw-arch-stack", children: k.map((p, g) => /* @__PURE__ */ i("div", { class: "imw-arch-step", children: [
      g > 0 && /* @__PURE__ */ i("span", { class: "imw-arch-arrow", "aria-hidden": "true", children: "↓" }),
      /* @__PURE__ */ i("button", { class: `imw-arch-card${t === p.id ? " is-on" : ""}`, onClick: () => n(p.id), "aria-pressed": t === p.id, children: [
        /* @__PURE__ */ i("strong", { children: p.label }),
        /* @__PURE__ */ i("small", { children: p.sub })
      ] })
    ] }, p.id)) });
  }
  return /* @__PURE__ */ i("div", { ref: r, class: `imw-arch${o ? " is-scanning" : ""}`, children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${m} ${c}`, role: "group", "aria-label": `${e.title} architecture`, children: [
    /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("marker", { id: `ah-${e.id}`, viewBox: "0 0 8 8", refX: "7", refY: "4", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse", children: /* @__PURE__ */ i("path", { d: "M0,0 L8,4 L0,8 z", class: "imw-arrowhead" }) }) }),
    e.lanes.map((u) => /* @__PURE__ */ i("text", { class: "imw-lane", x: xe, y: xe + u.row * Ne + 6, children: u.label.toUpperCase() }, u.row)),
    e.edges.map(([u, _]) => {
      const b = f(u), k = f(_);
      let p;
      if (k.x > b.x) {
        const v = b.x + Ie, x = b.y + ce / 2, $ = k.x - 4, C = k.y + ce / 2, I = (v + $) / 2;
        p = `M${v},${x} C${I},${x} ${I},${C} ${$},${C}`;
      } else if (k.x < b.x) {
        const v = b.x, x = b.y + ce / 2, $ = k.x + Ie + 4, C = k.y + ce / 2, I = (v + $) / 2;
        p = `M${v},${x} C${I},${x} ${I},${C} ${$},${C}`;
      } else {
        const v = k.y > b.y, x = b.x + Ie / 2, $ = v ? b.y + ce : b.y, C = v ? k.y - 4 : k.y + ce + 4;
        p = `M${x},${$} L${x},${C}`;
      }
      return /* @__PURE__ */ i("path", { d: p, class: `imw-edge${t === u || t === _ ? " is-on" : ""}`, "marker-end": `url(#ah-${e.id})` }, u + _);
    }),
    e.nodes.map((u) => {
      const _ = f(u.id);
      return /* @__PURE__ */ i(
        "g",
        {
          class: `imw-node${t === u.id ? " is-on" : ""}`,
          transform: `translate(${_.x},${_.y})`,
          tabIndex: 0,
          role: "button",
          "aria-pressed": t === u.id,
          "aria-label": `${u.label}. ${u.sub}`,
          style: { animationDelay: `${u.col * 120}ms` },
          onClick: () => n(u.id),
          onKeyDown: (b) => y(b, u.id),
          children: [
            /* @__PURE__ */ i("rect", { width: Ie, height: ce, rx: 4 }),
            /* @__PURE__ */ i("text", { x: 12, y: 24, class: "imw-node-label", children: si(u.label, 22) }),
            /* @__PURE__ */ i("text", { x: 12, y: 42, class: "imw-node-sub", children: si(u.sub, 25) })
          ]
        },
        u.id
      );
    }),
    o && /* @__PURE__ */ i("rect", { class: "imw-scan", x: 0, y: 0, width: 3, height: c })
  ] }) });
}
const Ri = (e) => {
  const t = new URL(["..", "..", "evidence", "dist", e].join("/"), import.meta.url), n = new URL(import.meta.url).searchParams.get("v");
  return n && t.searchParams.set("v", n), t.href;
};
function Li({ id: e, compact: t }) {
  const { kb: n, go: s } = T(), r = n.traces.find((m) => m.id === e), [a, l] = S(t ? 0 : 1 / 0), o = ne();
  if (V(() => () => clearInterval(o.current), []), !r) return null;
  if (r.dataset === "dia_regression") return /* @__PURE__ */ i(Kn, {});
  const h = t ? r.steps.slice(0, 4) : r.steps, d = () => {
    if (U("replay_played", { trace: r.id }), me()) {
      l(1 / 0);
      return;
    }
    l(0), clearInterval(o.current);
    let m = 0;
    o.current = window.setInterval(() => {
      m++, l(m), m >= h.length && clearInterval(o.current);
    }, 520);
  }, w = a === 1 / 0 ? h.length : a;
  return /* @__PURE__ */ i("figure", { class: `imw-trace${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: r.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: d, "aria-label": `Replay ${r.title}`, children: "▶ Replay" }),
        t && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => s("lab", r.id), children: "Open in proof lab →" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: r.summary }),
    /* @__PURE__ */ i("ol", { class: "imw-steps", "aria-live": "polite", children: h.map((m, c) => /* @__PURE__ */ i("li", { class: `imw-step is-${m.kind}${c < w ? " is-shown" : ""}`, "aria-hidden": c >= w, children: [
      /* @__PURE__ */ i("span", { class: "imw-step-kind", children: m.label }),
      m.quote ? /* @__PURE__ */ i("q", { children: m.quote }) : /* @__PURE__ */ i("span", { children: m.body }),
      m.status && /* @__PURE__ */ i("span", { class: `imw-verdict is-${m.status}`, children: m.status === "pass" ? "✓ PASS" : m.status === "fail" ? "✕ FAIL" : "! REVIEW" })
    ] }, c)) }),
    t && r.steps.length > h.length && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      r.steps.length - h.length,
      " more steps in the full replay."
    ] })
  ] });
}
function Kn() {
  const { kb: e } = T(), t = e.datasets.dia_regression, [n, s] = S(t.rows.length), r = ne();
  V(() => () => clearInterval(r.current), []);
  const a = () => {
    if (U("replay_played", { trace: "t.dia.regression" }), me()) {
      s(t.rows.length);
      return;
    }
    s(0), clearInterval(r.current);
    let o = 0;
    r.current = window.setInterval(() => {
      o++, s(o), o >= t.rows.length && clearInterval(r.current);
    }, 70);
  }, l = t.rows.slice(0, n).filter((o) => o[1] === o[2]).length;
  return /* @__PURE__ */ i("figure", { class: "imw-trace", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: "24-pair severity regression · retriever + classifier path" }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: a, children: "▶ Re-run from the saved record" })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", "aria-live": "polite", children: n < t.rows.length ? `Checking ${n}/${t.rows.length}…` : `${l}/${t.rows.length} severities match the authored labels.` }),
    /* @__PURE__ */ i("div", { class: "imw-table-wrap is-tall", children: /* @__PURE__ */ i("table", { class: "imw-table", children: [
      /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { children: "Pair" }),
        /* @__PURE__ */ i("th", { children: "Expected" }),
        /* @__PURE__ */ i("th", { children: "Actual" }),
        /* @__PURE__ */ i("th", { children: "Tier" }),
        /* @__PURE__ */ i("th", { children: "Conf." }),
        /* @__PURE__ */ i("th", {})
      ] }) }),
      /* @__PURE__ */ i("tbody", { children: t.rows.map((o, h) => /* @__PURE__ */ i("tr", { class: h < n ? "is-done" : "is-wait", children: [
        /* @__PURE__ */ i("th", { scope: "row", children: o[0] }),
        /* @__PURE__ */ i("td", { children: o[1] }),
        /* @__PURE__ */ i("td", { children: h < n ? o[2] : "…" }),
        /* @__PURE__ */ i("td", { children: o[3] }),
        /* @__PURE__ */ i("td", { children: o[4].toFixed(2) }),
        /* @__PURE__ */ i("td", { children: h < n ? o[1] === o[2] ? /* @__PURE__ */ i("span", { class: "imw-verdict is-pass", children: "✓" }) : /* @__PURE__ */ i("span", { class: "imw-verdict is-fail", children: "✕" }) : "" })
      ] }, o[0])) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      t.caveat,
      " The final LLM explanation is excluded; this is not a clinical validation."
    ] })
  ] });
}
function Pi({ id: e }) {
  const { kb: t, go: n } = T(), s = t.attacks.find((o) => o.id === e), [r, a] = S(!1);
  if (!s) return null;
  const l = { held: "✓ Held", flagged: "! Flagged for review", fixed: "✓ Fixed" }[s.result];
  return /* @__PURE__ */ i("article", { class: `imw-attack is-${s.result}${r ? " is-open" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-attack-head", "aria-expanded": r, onClick: () => a(!r), children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: t.entity.get(s.entity)?.short }),
      /* @__PURE__ */ i("strong", { children: s.label }),
      /* @__PURE__ */ i("span", { class: `imw-verdict is-${s.result === "flagged" ? "warn" : "pass"}`, children: l })
    ] }),
    r && /* @__PURE__ */ i("div", { class: "imw-attack-body", children: [
      /* @__PURE__ */ i("dl", { class: "imw-kv", children: [
        /* @__PURE__ */ i("dt", { children: "Attempt" }),
        /* @__PURE__ */ i("dd", { children: s.attempt }),
        /* @__PURE__ */ i("dt", { children: "Expected" }),
        /* @__PURE__ */ i("dd", { children: s.expected }),
        /* @__PURE__ */ i("dt", { children: "Observed" }),
        /* @__PURE__ */ i("dd", { children: s.observed }),
        /* @__PURE__ */ i("dt", { children: "What protects it" }),
        /* @__PURE__ */ i("dd", { children: s.protection })
      ] }),
      /* @__PURE__ */ i(Ee, { refs: s.code }),
      s.trace && /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => n("lab", s.trace), children: "▶ Replay the recorded run" })
    ] })
  ] });
}
function Yn(e, t, n, s, r, a, l) {
  const o = e / (e + n), h = t / (t + s), d = r * a * o, w = r * (1 - a) * h, m = d + w;
  return { trueAlerts: d, falseAlerts: w, missed: r * a * (1 - o), reviews: m, hours: m * l / 60, precision: m ? d / m : null };
}
function Xn() {
  const { kb: e } = T(), t = e.datasets.cliniq_confusion, [n, s] = S(1e4), [r, a] = S(5), [l, o] = S(3), h = ue(() => t.methods.map((m) => ({ m, r: Yn(m.tp, m.fp, m.fn, m.tn, n, r / 100, l) })), [t, n, r, l]), d = Math.max(...h.map((m) => m.r.hours), 1), w = (m) => m.toLocaleString(void 0, { maximumFractionDigits: 0 });
  return /* @__PURE__ */ i("div", { class: "imw-workload", children: [
    /* @__PURE__ */ i("div", { class: "imw-sliders", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Reviews per month ",
          /* @__PURE__ */ i("b", { children: w(n) })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1e3, max: 1e5, step: 1e3, value: n, onInput: (m) => s(+m.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Prevalence of true signals ",
          /* @__PURE__ */ i("b", { children: [
            r,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 30, step: 1, value: r, onInput: (m) => a(+m.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Minutes per human review ",
          /* @__PURE__ */ i("b", { children: l })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 15, step: 1, value: l, onInput: (m) => o(+m.target.value) })
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
      /* @__PURE__ */ i("tbody", { children: h.map(({ m, r: c }) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { scope: "row", children: m.label }),
        /* @__PURE__ */ i("td", { children: w(c.reviews) }),
        /* @__PURE__ */ i("td", { children: w(c.trueAlerts) }),
        /* @__PURE__ */ i("td", { children: w(c.missed) }),
        /* @__PURE__ */ i("td", { children: c.precision === null ? "—" : c.precision.toFixed(2) }),
        /* @__PURE__ */ i("td", { class: "imw-barcell", children: [
          /* @__PURE__ */ i("span", { class: "imw-inline-bar viz-2", style: { width: `${c.hours / d * 100}%` }, "aria-hidden": "true" }),
          /* @__PURE__ */ i("b", { children: w(c.hours) })
        ] })
      ] }, m.id)) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Same formula as ClinIQ's ",
      /* @__PURE__ */ i("code", { children: "estimate_workload()" }),
      ", fed the saved confusion counts. At low prevalence, the embedding detector's false positives dominate reviewer time. ",
      t.caveat
    ] }),
    /* @__PURE__ */ i(Y, { ids: ["cliniq.workload"], compact: !0 })
  ] });
}
function Zn() {
  const [e, t] = S(null);
  if (V(() => {
    fetch(Ri("evaluation-report.json")).then((r) => r.ok ? r.json() : null).then(t).catch(() => t(null));
  }, []), !e) return null;
  const n = e.suites.reduce((r, a) => r + a.passed, 0), s = e.suites.reduce((r, a) => r + a.total, 0);
  return /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
    /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "This assistant's own tests" }),
    /* @__PURE__ */ i("h4", { children: [
      n,
      "/",
      s,
      " evaluation cases passing"
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Generated ",
      new Date(e.generated_at).toLocaleDateString(),
      " by CI. It covers invented skills, false premises, unverified figures, prompt injection, hype language, role mapping and link correctness."
    ] }),
    /* @__PURE__ */ i("ul", { class: "imw-suites", children: e.suites.map((r) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("span", { class: `imw-verdict is-${r.passed === r.total ? "pass" : "fail"}`, children: r.passed === r.total ? "✓" : "✕" }),
      /* @__PURE__ */ i("span", { children: r.name }),
      /* @__PURE__ */ i("b", { children: [
        r.passed,
        "/",
        r.total
      ] })
    ] }, r.name)) })
  ] });
}
function es() {
  const { kb: e, modeArg: t } = T(), n = e.traces.find((l) => l.id === t)?.id ?? "t.voice.emergency", [s, r] = S(n);
  V(() => {
    e.traces.some((l) => l.id === t) && r(t);
  }, [t]);
  const a = e.attacks.filter((l) => !t || !e.entity.has(t) || l.entity === t);
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Proof lab" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Don't take the write-up's word for it." }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Replays use the recorded transcripts, grades and records from the repositories; nothing here is simulated. The calculator runs the project's own formula on its saved results." })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Replay a recorded run" }),
      /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "Recorded runs", children: e.traces.map((l) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": s === l.id, class: s === l.id ? "is-on" : "", onClick: () => r(l.id), children: l.title }, l.id)) }),
      /* @__PURE__ */ i(Li, { id: s }, s)
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Try to break it" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Adversarial and edge cases, what the system did, and the test that keeps it that way." }),
      /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: a.map((l) => /* @__PURE__ */ i(Pi, { id: l.id }, l.id)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Run the numbers · ClinIQ review workload" }),
      /* @__PURE__ */ i(Xn, {})
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Measured from the audio · Voice QA Harness" }),
      /* @__PURE__ */ i(Lt, {})
    ] }),
    /* @__PURE__ */ i(Zn, {})
  ] });
}
function ts({ a: e }) {
  const { setInspect: t, ask: n } = T();
  return /* @__PURE__ */ i("div", { class: "imw-answer", children: [
    /* @__PURE__ */ i("div", { class: "imw-answer-head", children: [
      /* @__PURE__ */ i("span", { class: `imw-engine is-${e.engine}`, children: e.engine === "model" ? "Claude · validated" : "Evidence engine" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => t({ kind: "basis", retrieved: e.basis?.retrieved ?? [], checks: e.basis?.checks, model: e.basis?.model, engine: e.engine }), children: "Why this answer?" }),
      e.refined && /* @__PURE__ */ i("span", { class: "imw-help", children: "Requirements refined by AI parsing" })
    ] }),
    e.blocks.map((s, r) => /* @__PURE__ */ i(is, { b: s }, r)),
    e.actions.length > 0 && /* @__PURE__ */ i("div", { class: "imw-actions", children: e.actions.map((s, r) => /* @__PURE__ */ i(Ve, { a: s }, r)) }),
    e.followups.length > 0 && /* @__PURE__ */ i("div", { class: "imw-followups", "aria-label": "Suggested follow-up questions", children: e.followups.map((s) => /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n(s), children: s }, s)) })
  ] });
}
function is({ b: e }) {
  const t = T(), { kb: n, setInspect: s, go: r } = t;
  switch (e.type) {
    case "p":
      return /* @__PURE__ */ i("p", { class: "imw-p", children: [
        e.text,
        e.cites?.map((a, l) => /* @__PURE__ */ i("button", { class: "imw-cite", onClick: () => s({ kind: "claim", id: a }), "aria-label": `Evidence ${l + 1}: ${n.claim.get(a)?.text ?? a}`, children: l + 1 }, a))
      ] });
    case "note":
      return /* @__PURE__ */ i("p", { class: `imw-note${e.tone === "warn" ? " is-warn" : ""}`, children: e.text });
    case "claims":
      return /* @__PURE__ */ i(Y, { ids: e.ids, title: e.title });
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
        /* @__PURE__ */ i(nt, { counts: e.analysis.counts }),
        /* @__PURE__ */ i(Ai, { analysis: e.analysis, max: 12 }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
          t.setCoverage(e.analysis), r("role");
        }, children: "Open the full analysis →" })
      ] });
    case "xray": {
      const a = n.architectures.find((l) => l.id === e.arch);
      return a ? /* @__PURE__ */ i("div", { class: "imw-xray-inline", children: [
        /* @__PURE__ */ i(ji, { arch: a, scan: !1, onSelect: (l) => s({ kind: "node", arch: a.id, node: l }) }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("xray", a.entity), children: "Open X-Ray view →" })
      ] }) : null;
    }
    case "failures":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((a) => /* @__PURE__ */ i(Pt, { id: a }, a)) });
    case "decisions":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((a) => /* @__PURE__ */ i(Wt, { id: a }, a)) });
    case "compare":
      return /* @__PURE__ */ i("div", { class: "imw-table-wrap", children: /* @__PURE__ */ i("table", { class: "imw-table imw-compare", children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "col", children: /* @__PURE__ */ i("span", { class: "sr-only", children: "Field" }) }),
          e.entities.map((a) => /* @__PURE__ */ i("th", { scope: "col", children: n.entity.get(a)?.short }, a))
        ] }) }),
        /* @__PURE__ */ i("tbody", { children: e.rows.map((a) => /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "row", children: a.label }),
          a.values.map((l, o) => /* @__PURE__ */ i("td", { children: l }, o))
        ] }, a.label)) })
      ] }) });
    case "gaps":
      return /* @__PURE__ */ i("ul", { class: "imw-gaps", children: e.items.map((a) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-cat cat-missing", children: z.missing }),
        /* @__PURE__ */ i("strong", { children: a.name }),
        /* @__PURE__ */ i("p", { children: a.statement }),
        a.closest.length > 0 && /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("span", { class: "imw-help", children: "Closest:" }),
          a.closest.map((l) => /* @__PURE__ */ i(Vn, { id: l }, l))
        ] })
      ] }, a.id)) });
    case "chart":
      return e.chart === "cliniq" ? /* @__PURE__ */ i(Ti, {}) : /* @__PURE__ */ i(Lt, {});
    case "trace":
      return /* @__PURE__ */ i(Li, { id: e.id, compact: !0 });
  }
}
function Pt({ id: e, open: t = !1 }) {
  const { kb: n } = T(), s = n.failures.find((o) => o.id === e), [r, a] = S(t);
  if (!s) return null;
  const l = [["Problem", s.problem], ["Detection", s.detection], ["Diagnosis", s.diagnosis], ["Fix", s.fix], ["Prevention", s.prevention], ["Measured", s.measurement]];
  return /* @__PURE__ */ i("article", { class: `imw-story${r ? " is-open" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-story-head", "aria-expanded": r, onClick: () => a(!r), children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
        "Failure · ",
        n.entity.get(s.entity)?.short
      ] }),
      /* @__PURE__ */ i("strong", { children: s.title }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: r ? "Hide" : "Problem → detection → fix → prevention" })
    ] }),
    r && /* @__PURE__ */ i("div", { class: "imw-story-body", children: [
      /* @__PURE__ */ i("ol", { class: "imw-flow", children: l.map(([o, h]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: o }),
        /* @__PURE__ */ i("span", { children: h })
      ] }, o)) }),
      /* @__PURE__ */ i(Ee, { refs: s.code }),
      /* @__PURE__ */ i(Y, { ids: s.claims, title: "Evidence", compact: !0 })
    ] })
  ] });
}
function Wt({ id: e }) {
  const { kb: t } = T(), n = t.decisions.find((s) => s.id === e);
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
function ns({ analysis: e }) {
  const { kb: t, setInspect: n } = T();
  return /* @__PURE__ */ i("div", { class: "imw-reqgroups", children: ["direct", "related", "verification", "missing"].map((r) => {
    const a = e.requirements.filter((l) => l.category === r);
    return a.length ? /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i("h4", { class: `imw-cat ${fe[r]}`, children: [
        z[r],
        " · ",
        a.length
      ] }),
      /* @__PURE__ */ i("ul", { class: "imw-reqs", children: a.map((l) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: l }), children: [
        /* @__PURE__ */ i("i", { class: `imw-cat-dot ${fe[l.category]}`, "aria-hidden": "true" }),
        /* @__PURE__ */ i("span", { children: [
          l.label,
          l.priority === "preferred" ? /* @__PURE__ */ i("em", { children: " · preferred" }) : null,
          l.strength === "self_reported" ? /* @__PURE__ */ i("em", { children: " · self-reported" }) : null
        ] }),
        /* @__PURE__ */ i("small", { children: l.entities.length ? l.entities.slice(0, 3).map((o) => t.entity.get(o)?.short).join(" · ") : l.statement })
      ] }) }, l.id)) })
    ] }, r) : null;
  }) });
}
const ss = [
  { q: "What has Rahul actually shipped?" },
  { q: "Show me his strongest RAG work." },
  { q: "How does he evaluate AI systems?" },
  { q: "What has he built beyond LLM wrappers?" },
  { q: "Show me his backend engineering experience." },
  { q: "What failure did he find and fix?" },
  { q: "Evaluate Rahul for a role", mode: "role" },
  { q: "Paste a job description", mode: "jd" }
];
function rs({ turns: e }) {
  const { kb: t, ask: n, go: s, persona: r, setPersona: a } = T(), [l, o] = S(""), h = ne(null), d = ne(null), w = e[e.length - 1];
  V(() => {
    d.current?.querySelector(".imw-turn:last-child")?.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [e.length, w?.pending]);
  const m = () => {
    const y = l.trim();
    y && (o(""), n(y));
  }, c = jt(l), f = t.claims.reduce((y, u) => y + (N(u) ? u.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-ask", children: [
    /* @__PURE__ */ i("div", { class: "imw-log", ref: d, children: [
      e.length === 0 && /* @__PURE__ */ i("div", { class: "imw-welcome", children: [
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "✦ Interview My Work" }),
        /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Ask about my projects, engineering decisions, experience, or how my background maps to a role." }),
        /* @__PURE__ */ i("p", { class: "imw-lead", children: "Don't just read my résumé. Inspect the evidence behind the work: every answer links to its source, measured result and code." }),
        /* @__PURE__ */ i("dl", { class: "imw-stats is-inline", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: t.claims.filter(N).length }),
            /* @__PURE__ */ i("dd", { children: "verified claims" })
          ] }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: f }),
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
        /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Who is asking", children: t.personas.map((y) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": r === y.id, class: r === y.id ? "is-on" : "", onClick: () => a(y.id), children: y.label }, y.id)) }),
        /* @__PURE__ */ i("p", { class: "imw-help", children: [
          "Prefer your own assistant? ",
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => s("connect"), children: "Connect Claude, Cursor or VS Code to this evidence →" })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Start with" }),
        /* @__PURE__ */ i("div", { class: "imw-starters", children: ss.map((y, u) => /* @__PURE__ */ i("button", { onClick: () => {
          U("starter_question_selected", { index: u }), y.mode ? s("role", y.mode === "jd" ? "jd" : void 0) : n(y.q);
        }, children: [
          /* @__PURE__ */ i("span", { class: "imw-starter-n", children: String(u + 1).padStart(2, "0") }),
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
        y.a && /* @__PURE__ */ i(ts, { a: y.a })
      ] }, y.id))
    ] }),
    /* @__PURE__ */ i("form", { class: "imw-composer", onSubmit: (y) => {
      y.preventDefault(), m();
    }, children: [
      c && /* @__PURE__ */ i("p", { class: "imw-jd-hint", children: "This looks like a job description. Sending it runs an evidence-coverage analysis." }),
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-q", children: "Ask a question or paste a job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-q",
          ref: h,
          rows: 1,
          value: l,
          placeholder: "Ask a question, or paste a job description…",
          maxLength: 12e3,
          onInput: (y) => {
            const u = y.target;
            o(u.value), u.style.height = "auto", u.style.height = `${Math.min(u.scrollHeight, 180)}px`;
          },
          onKeyDown: (y) => {
            y.key === "Enter" && !y.shiftKey && (y.preventDefault(), m());
          }
        }
      ),
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-send", disabled: !l.trim(), children: c ? "Analyze" : "Ask" })
    ] })
  ] });
}
function as(e) {
  const t = location.origin + location.pathname;
  if (e.source === "role" && e.roleId) return `${t}#imw=role:${e.roleId}`;
  const n = e.requirements.map((s) => s.id).filter((s) => !s.startsWith("term:")).join(",");
  return `${t}#imw=role:${encodeURIComponent(`jd~${n}`)}`;
}
function ls(e, t) {
  const n = [`# Evidence coverage: ${e.title}`, `Candidate: ${t}`, ""];
  for (const s of ["direct", "related", "verification", "missing"]) {
    const r = e.requirements.filter((a) => a.category === s);
    r.length && (n.push(`## ${z[s]} (${r.length})`), r.forEach((a) => n.push(`- ${a.label}${a.statement && s !== "direct" ? ` — ${a.statement}` : ""}`)), n.push(""));
  }
  return e.notes.length && n.push(...e.notes.map((s) => `> ${s}`), ""), n.push("Generated by Interview My Work from verified evidence. No fit score is computed."), n.join(`
`);
}
function os() {
  const { kb: e, coverage: t, setCoverage: n, modeArg: s, api: r, toggleLens: a, ask: l, go: o } = T(), [h, d] = S(s === "jd" ? "jd" : "role"), [w, m] = S(""), [c, f] = S(!1), [y, u] = S("");
  V(() => {
    if (!s) return;
    if (s === "jd") {
      d("jd");
      return;
    }
    const v = decodeURIComponent(s);
    if (e.role.has(v)) n(pe(e, v));
    else if (v.startsWith("jd~")) {
      const $ = v.slice(3).split(",").filter(Boolean).map((C) => C.startsWith("near:") ? te(e, e.skills.find((I) => I.near?.includes(C.slice(5)))?.id ?? C, { near: C.slice(5) }) : te(e, C));
      n(Tt(e, "Shared job description", $, { source: "jd" }));
    }
  }, [s]);
  const _ = (v) => {
    v && (n(pe(e, v)), U("role_selected", { role: v }));
  }, b = () => {
    if (w.trim().length < 40) return;
    const v = Ge(e, w);
    n(v), U("jd_analyzed", { requirements: v.requirements.length }), r === "ready" && (f(!0), Si(w).then((x) => {
      x.length && n(Ge(e, w, x));
    }).catch(() => {
    }).finally(() => f(!1)));
  }, k = async (v) => {
    if (t)
      try {
        await navigator.clipboard.writeText(v === "link" ? as(t) : ls(t, e.subject.name)), u(v), setTimeout(() => u(""), 2e3);
      } catch {
      }
  }, p = e.roles.filter((v) => v.priority).sort((v, x) => v.priority - x.priority), g = [["strong", "Strong fit"], ["adjacent", "Adjacent"], ["stretch", "Stretch"]];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Evaluate against a role" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "What are you evaluating Rahul for?" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Each requirement is classified as direct evidence, related evidence, verification required, or not currently demonstrated. There is no match percentage." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg", role: "tablist", "aria-label": "Input", children: [
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": h === "role", class: h === "role" ? "is-on" : "", onClick: () => d("role"), children: "Select a role" }),
      /* @__PURE__ */ i("button", { role: "tab", "aria-selected": h === "jd", class: h === "jd" ? "is-on" : "", onClick: () => d("jd"), children: "Paste a job description" })
    ] }),
    h === "role" ? /* @__PURE__ */ i("div", { class: "imw-rolepick", children: [
      /* @__PURE__ */ i("div", { class: "imw-role-cards", children: p.map((v) => /* @__PURE__ */ i("button", { class: t?.roleId === v.id && t.source === "role" ? "is-on" : "", onClick: () => _(v.id), children: [
        /* @__PURE__ */ i("strong", { children: v.title }),
        /* @__PURE__ */ i("small", { children: v.proof_note })
      ] }, v.id)) }),
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "More roles" }),
        /* @__PURE__ */ i("select", { onChange: (v) => _(v.target.value), value: t?.source === "role" ? t.roleId : "", children: [
          /* @__PURE__ */ i("option", { value: "", children: "Choose a role…" }),
          g.map(([v, x]) => /* @__PURE__ */ i("optgroup", { label: x, children: e.roles.filter(($) => $.tier === v && !$.priority).map(($) => /* @__PURE__ */ i("option", { value: $.id, children: $.title }, $.id)) }, v))
        ] })
      ] })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-jd", children: [
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-jd", children: "Job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-jd",
          rows: 8,
          value: w,
          maxLength: 12e3,
          placeholder: "Paste the full job description, including requirements and nice-to-haves.",
          onInput: (v) => m(v.target.value)
        }
      ),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: b, disabled: w.trim().length < 40, children: "Analyze coverage" }),
        /* @__PURE__ */ i("span", { class: "imw-help", children: r === "ready" ? "Parsed in your browser, then refined by the AI parser. The text is not stored." : "Parsed in your browser. Nothing is sent anywhere." })
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
          /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => o("brief"), children: "10-minute brief" })
        ] })
      ] }),
      /* @__PURE__ */ i(nt, { counts: t.counts }),
      t.notes.map((v) => /* @__PURE__ */ i("p", { class: "imw-note", children: v }, v)),
      /* @__PURE__ */ i(Ai, { analysis: t, max: 18 }),
      /* @__PURE__ */ i(ns, { analysis: t }),
      /* @__PURE__ */ i("div", { class: "imw-actions", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => l(t.roleId ? `Challenge the evidence for ${t.title}` : "Challenge this evidence"), children: "Challenge this evidence" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => o("map", t.roleId), children: "View on the evidence map" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("link"), children: y === "link" ? "Link copied" : "Copy shareable link" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("md"), children: y === "md" ? "Summary copied" : "Copy summary" })
      ] })
    ] })
  ] });
}
function cs() {
  const { kb: e, modeArg: t, setInspect: n, inspect: s, ask: r } = T(), a = e.architectures, [l, o] = S(a.find((g) => g.entity === t)?.id ?? a[0].id), h = a.find((g) => g.id === l), [d, w] = S("why");
  V(() => {
    const g = a.find((v) => v.entity === t);
    g && o(g.id);
  }, [t]);
  const m = e.entity.get(h.entity), c = e.statableByEntity.get(h.entity) ?? [], f = e.decisions.filter((g) => g.entity === h.entity), y = e.failures.filter((g) => g.entity === h.entity), u = e.attacks.filter((g) => g.entity === h.entity), _ = c.filter((g) => g.tags.some((v) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(v))), b = c.flatMap((g) => g.code ?? []), k = s?.kind === "node" && s.arch === h.id ? s.node : void 0, p = [
    ["why", "Why this design?", f.length],
    ["failures", "Failure cases", y.length + c.filter((g) => g.kind === "limitation").length],
    ["break", "Try to break it", u.length],
    ["evaluation", "Evaluation", _.length],
    ["code", "Code", b.length],
    ["questions", "Interviewer questions", m.questions.length]
  ];
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "X-Ray · system anatomy" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: h.title }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        h.note,
        " Select a component to see its purpose, inputs and outputs, why it exists, and the evidence behind it."
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "System", children: a.map((g) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": g.id === l, class: g.id === l ? "is-on" : "", onClick: () => {
      o(g.id), n(null);
    }, children: e.entity.get(g.entity)?.short }, g.id)) }),
    /* @__PURE__ */ i(ji, { arch: h, selected: k, onSelect: (g) => n({ kind: "node", arch: h.id, node: g }) }),
    /* @__PURE__ */ i("div", { class: "imw-subtabs", role: "tablist", "aria-label": "Inspect", children: p.filter(([, , g]) => g > 0).map(([g, v, x]) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": d === g, class: d === g ? "is-on" : "", onClick: () => w(g), children: [
      v,
      " ",
      /* @__PURE__ */ i("small", { children: x })
    ] }, g)) }),
    /* @__PURE__ */ i("div", { class: "imw-tabpanel", role: "tabpanel", children: [
      d === "why" && /* @__PURE__ */ i("div", { class: "imw-stack", children: f.map((g) => /* @__PURE__ */ i(Wt, { id: g.id }, g.id)) }),
      d === "failures" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        y.map((g, v) => /* @__PURE__ */ i(Pt, { id: g.id, open: v === 0 }, g.id)),
        /* @__PURE__ */ i(Y, { ids: c.filter((g) => g.kind === "limitation").map((g) => g.id), title: "Stated limitations" })
      ] }),
      d === "break" && /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: u.map((g) => /* @__PURE__ */ i(Pi, { id: g.id }, g.id)) }),
      d === "evaluation" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i(Y, { ids: _.map((g) => g.id) }),
        h.entity === "cliniq" && /* @__PURE__ */ i(Ti, {}),
        h.entity === "voice" && /* @__PURE__ */ i(Lt, {})
      ] }),
      d === "code" && /* @__PURE__ */ i(Ee, { refs: b, max: 30 }),
      d === "questions" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i("p", { class: "imw-help", children: "Questions a skeptical interviewer could press on. Select one to see what the evidence says." }),
        m.questions.map((g) => /* @__PURE__ */ i("button", { class: "imw-question", onClick: () => r(g.includes(m.short) ? g : `${g} (${m.short})`), children: g }, g))
      ] })
    ] })
  ] });
}
const ds = 1e3, hs = 720, F = 500, G = 360, $t = 170, Ct = 305, us = /* @__PURE__ */ new Set(["project", "research", "experience", "leadership"]);
function ps(e, t) {
  const n = e.groups, s = e.entities.filter((u) => us.has(u.kind)), r = new Map(e.skills.map((u) => [u.id, u.group])), a = /* @__PURE__ */ new Map();
  for (const u of e.claims.filter(N)) {
    const _ = a.get(u.entity) ?? /* @__PURE__ */ new Map();
    new Set(u.tags.map((b) => r.get(b)).filter(Boolean)).forEach((b) => _.set(b, (_.get(b) ?? 0) + 1)), a.set(u.entity, _);
  }
  const l = new Map(n.map((u, _) => [u.id, -Math.PI / 2 + _ / n.length * Math.PI * 2])), o = new Set(t?.requirements.filter((u) => u.category === "direct" || u.category === "related").map((u) => u.id) ?? []), h = new Map(n.map((u) => {
    if (!t) return [u.id, 1];
    const _ = e.skills.filter((b) => b.group === u.id);
    return [u.id, _.filter((b) => o.has(b.id)).length / Math.max(1, Math.min(4, _.length))];
  })), d = Math.max(1, ...t?.entities.map((u) => u.score) ?? [1]), w = new Map(s.map((u) => [u.id, t ? (t.entities.find((_) => _.id === u.id)?.score ?? 0) / d : 1])), m = /* @__PURE__ */ new Map();
  for (const u of n) {
    const _ = Math.min(1, h.get(u.id)), b = t ? $t * (_ > 0 ? 1 - 0.16 * _ : 1.1) : $t, k = l.get(u.id);
    m.set(u.id, { x: F + b * Math.cos(k), y: G + b * Math.sin(k), o: t ? _ > 0 ? 1 : 0.16 : 1 });
  }
  const c = s.map((u) => {
    const _ = a.get(u.id) ?? /* @__PURE__ */ new Map();
    let b = 0, k = 0;
    return _.forEach((p, g) => {
      const v = l.get(g);
      b += p * Math.cos(v), k += p * Math.sin(v);
    }), { id: u.id, a: Math.atan2(k, b) };
  }).sort((u, _) => u.a - _.a), f = Math.PI * 2 / c.length * 0.8;
  for (let u = 0; u < 8; u++)
    for (let _ = 0; _ < c.length; _++) {
      const b = c[_], k = c[(_ + 1) % c.length];
      let p = k.a - b.a;
      if (_ === c.length - 1 && (p += Math.PI * 2), p < f) {
        const g = (f - p) / 2;
        b.a -= g, k.a += g;
      }
    }
  const y = /* @__PURE__ */ new Map();
  for (const u of c) {
    const _ = w.get(u.id), b = t ? Ct * (_ > 0 ? 1 - 0.2 * _ : 1.06) : Ct;
    y.set(u.id, { x: F + b * Math.cos(u.a), y: G + b * Math.sin(u.a), o: t ? _ > 0 ? 0.35 + 0.65 * _ : 0.14 : 1 });
  }
  return { groups: n, ents: s, weight: a, gPos: m, ePos: y };
}
const ms = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
function fs() {
  const { kb: e, modeArg: t, coverage: n, setInspect: s, go: r } = T(), [a, l] = S(t && e.role.has(t) ? t : ""), [o, h] = S(null), d = ue(() => a === "__current" ? n : a ? pe(e, a) : null, [a, e, n]), w = ue(() => ps(e, d), [e, d]), [m, c] = S(() => new Map([...w.gPos, ...w.ePos].map(([g]) => [g, { x: F, y: G, o: 0 }]))), f = ne(m);
  V(() => {
    const g = new Map([...w.gPos, ...w.ePos]);
    if (me()) {
      f.current = g, c(g);
      return;
    }
    const v = f.current, x = performance.now(), $ = 850;
    let C = 0;
    const I = (W) => {
      const Q = ms(Math.min(1, (W - x) / $)), ve = /* @__PURE__ */ new Map();
      g.forEach((_e, Se) => {
        const re = v.get(Se) ?? { x: F, y: G, o: 0 };
        ve.set(Se, { x: re.x + (_e.x - re.x) * Q, y: re.y + (_e.y - re.y) * Q, o: re.o + (_e.o - re.o) * Q });
      }), f.current = ve, c(ve), Q < 1 && (C = requestAnimationFrame(I));
    };
    return C = requestAnimationFrame(I), () => cancelAnimationFrame(C);
  }, [w]);
  const y = (g) => m.get(g) ?? { x: F, y: G, o: 0 }, u = Math.max(1, ...[...w.weight.values()].flatMap((g) => [...g.values()])), _ = (g) => e.claims.filter((v) => N(v) && v.tags.some((x) => e.skill.get(x)?.group === g)).length, b = (g) => e.statableByEntity.get(g)?.length ?? 0, k = o ? e.skills.filter((g) => g.group === o).map((g, v, x) => {
    const $ = y(o), C = Math.atan2($.y - G, $.x - F), I = Math.min(Math.PI * 0.9, x.length * 0.22), W = C - I / 2 + I * (v + 0.5) / x.length;
    return { s: g, cov: te(e, g.id), x: $.x + 92 * Math.cos(W), y: $.y + 92 * Math.sin(W) };
  }) : [], p = e.roles.filter((g) => g.priority).sort((g, v) => g.priority - v.priority);
  return /* @__PURE__ */ i("div", { class: "imw-view is-map", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Explore my engineering" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Evidence map" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Capability areas (inner ring) connect to the projects and roles that evidence them (outer ring). Line weight is the number of verified claims. Apply a role lens to pull relevant work toward the centre." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-row imw-map-controls", children: [
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "Role lens" }),
        /* @__PURE__ */ i("select", { value: a, onChange: (g) => {
          l(g.target.value), h(null);
        }, children: [
          /* @__PURE__ */ i("option", { value: "", children: "No lens: everything" }),
          n && /* @__PURE__ */ i("option", { value: "__current", children: [
            "Current analysis: ",
            n.title
          ] }),
          /* @__PURE__ */ i("optgroup", { label: "Priority roles", children: p.map((g) => /* @__PURE__ */ i("option", { value: g.id, children: g.title }, g.id)) }),
          /* @__PURE__ */ i("optgroup", { label: "Other roles", children: e.roles.filter((g) => !g.priority).map((g) => /* @__PURE__ */ i("option", { value: g.id, children: g.title }, g.id)) })
        ] })
      ] }),
      d && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
        r("role");
      }, children: "Open coverage analysis →" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-constellation", children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${ds} ${hs}`, role: "group", "aria-label": "Evidence map of capability areas and projects", children: [
      /* @__PURE__ */ i("circle", { cx: F, cy: G, r: $t, class: "imw-orbit" }),
      /* @__PURE__ */ i("circle", { cx: F, cy: G, r: Ct, class: "imw-orbit" }),
      w.groups.map((g) => {
        const v = y(g.id);
        return /* @__PURE__ */ i("line", { x1: F, y1: G, x2: v.x, y2: v.y, class: "imw-spoke", style: { opacity: v.o * 0.5 } }, `c-${g.id}`);
      }),
      w.ents.flatMap((g) => [...(w.weight.get(g.id) ?? /* @__PURE__ */ new Map()).entries()].map(([v, x]) => {
        const $ = y(v), C = y(g.id), I = o ? o === v : !0;
        return /* @__PURE__ */ i("line", { x1: $.x, y1: $.y, x2: C.x, y2: C.y, class: "imw-web", style: { strokeWidth: 0.6 + 2.2 * x / u, opacity: Math.min($.o, C.o) * (I ? 0.55 : 0.08) } }, `${g.id}-${v}`);
      })),
      /* @__PURE__ */ i("g", { class: "imw-core", children: [
        /* @__PURE__ */ i("circle", { cx: F, cy: G, r: 34 }),
        /* @__PURE__ */ i("text", { x: F, y: G - 2, "text-anchor": "middle", children: "Rahul" }),
        /* @__PURE__ */ i("text", { x: F, y: G + 14, "text-anchor": "middle", class: "imw-core-sub", children: "Vajja" })
      ] }),
      w.groups.map((g) => {
        const v = y(g.id), x = _(g.id), $ = 6 + Math.sqrt(x) * 1.6, C = v.x < F - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-gnode${o === g.id ? " is-on" : ""}`,
            style: { opacity: v.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${g.label}: ${x} verified claims`,
            onClick: () => {
              h(o === g.id ? null : g.id), s({ kind: "group", id: g.id });
            },
            onKeyDown: (I) => {
              (I.key === "Enter" || I.key === " ") && (I.preventDefault(), h(o === g.id ? null : g.id), s({ kind: "group", id: g.id }));
            },
            children: [
              /* @__PURE__ */ i("circle", { cx: v.x, cy: v.y, r: $ + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("circle", { cx: v.x, cy: v.y, r: $ }),
              /* @__PURE__ */ i("text", { x: v.x + (C ? -$ - 7 : $ + 7), y: v.y + 4, "text-anchor": C ? "end" : "start", children: g.label })
            ]
          },
          g.id
        );
      }),
      k.map(({ s: g, cov: v, x, y: $ }) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-sat ${fe[v.category]}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${g.name}: ${v.category}`,
          onClick: () => s({ kind: "req", req: v }),
          onKeyDown: (C) => (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s({ kind: "req", req: v })),
          children: [
            /* @__PURE__ */ i("line", { x1: y(o).x, y1: y(o).y, x2: x, y2: $ }),
            /* @__PURE__ */ i("circle", { cx: x, cy: $, r: 4 }),
            /* @__PURE__ */ i("text", { x, y: $ - 8, "text-anchor": "middle", children: g.name.length > 22 ? g.name.slice(0, 21) + "…" : g.name })
          ]
        },
        g.id
      )),
      w.ents.map((g) => {
        const v = y(g.id), x = b(g.id), $ = 7 + Math.sqrt(x) * 1.4, C = v.x < F - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-enode is-${g.kind}`,
            style: { opacity: v.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${g.name}: ${x} verified claims`,
            onClick: () => s({ kind: "entity", id: g.id }),
            onKeyDown: (I) => (I.key === "Enter" || I.key === " ") && (I.preventDefault(), s({ kind: "entity", id: g.id })),
            children: [
              /* @__PURE__ */ i("circle", { cx: v.x, cy: v.y, r: $ + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("rect", { x: v.x - $, y: v.y - $, width: $ * 2, height: $ * 2, rx: g.kind === "experience" ? $ : 3 }),
              /* @__PURE__ */ i("text", { x: v.x + (C ? -$ - 8 : $ + 8), y: v.y + 4, "text-anchor": C ? "end" : "start", children: g.short })
            ]
          },
          g.id
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
function gs() {
  const { kb: e, coverage: t, modeArg: n } = T(), [s, r] = S(n && e.role.has(n) ? n : t?.roleId ?? "applied_ai");
  V(() => {
    n && e.role.has(n) && r(n);
  }, [n]);
  const a = t?.source === "jd" && !n, l = ue(() => a && t ? t : pe(e, s), [e, s, a, t]);
  V(() => {
    U("brief_generated", { role: l.roleId ?? "jd" });
  }, [l]);
  const o = l.entities.filter((p) => p.id !== "imw" && e.entity.get(p.id)?.kind !== "education").slice(0, 3).map((p) => e.entity.get(p.id)), h = o.map((p) => p.id), d = e.decisions.filter((p) => h.includes(p.entity)).slice(0, 3), w = e.failures.filter((p) => h.includes(p.entity)).slice(0, 2), m = e.claims.find((p) => N(p) && p.kind === "limitation" && h.includes(p.entity)), c = l.requirements.filter((p) => p.category === "missing").slice(0, 2), f = h.flatMap((p) => (e.statableByEntity.get(p) ?? []).flatMap((g) => g.code ?? [])).filter((p) => p.lines).slice(0, 4), y = e.claims.find((p) => N(p) && p.kind === "metric" && ["cliniq", "sssd", "qml"].includes(p.entity) && (h.includes(p.entity) || p.entity === "cliniq")), u = o.flatMap((p) => p.questions.slice(0, 2).map((g) => ({ e: p.short, q: g }))), _ = () => [
    `# 10-minute technical brief: ${l.title}`,
    `Candidate: ${e.subject.name}. Evidence-only; no fit score.`,
    "",
    "## Strongest relevant systems",
    ...o.map((p) => `- **${p.name}**: ${p.summaries.engineer ?? p.tagline}`),
    "",
    "## Decisions worth questioning",
    ...d.map((p) => `- ${p.title}. Tradeoff: ${p.tradeoff}`),
    "",
    "## Failure cases",
    ...w.map((p) => `- ${p.title}: ${p.fix}`),
    "",
    "## Limitations and gaps",
    ...m ? [`- ${m.text}`] : [],
    ...c.map((p) => `- ${p.label}: ${p.statement}`),
    "",
    "## Code to open",
    ...f.map((p) => `- ${p.label}: ${p.url}`),
    "",
    "## Suggested questions",
    ...u.map((p) => `- (${p.e}) ${p.q}`)
  ].join(`
`), [b, k] = S(!1);
  return /* @__PURE__ */ i("div", { class: "imw-view imw-brief", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Technical interview brief · 10 minutes" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: l.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        !a && /* @__PURE__ */ i("label", { class: "imw-select", children: [
          /* @__PURE__ */ i("span", { children: "Role" }),
          /* @__PURE__ */ i("select", { value: s, onChange: (p) => r(p.target.value), children: e.roles.map((p) => /* @__PURE__ */ i("option", { value: p.id, children: p.title }, p.id)) })
        ] }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: async () => {
          try {
            await navigator.clipboard.writeText(_()), k(!0), setTimeout(() => k(!1), 2e3);
          } catch {
          }
        }, children: b ? "Copied" : "Copy as Markdown" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => window.print(), children: "Print" })
      ] }),
      /* @__PURE__ */ i(nt, { counts: l.counts, compact: !0 })
    ] }),
    /* @__PURE__ */ i("ol", { class: "imw-agenda", children: [
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "0–2 min" }),
        /* @__PURE__ */ i("h4", { children: "Strongest relevant systems" }),
        o.map((p) => /* @__PURE__ */ i("p", { children: [
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
        /* @__PURE__ */ i("div", { class: "imw-stack", children: d.map((p) => /* @__PURE__ */ i(Wt, { id: p.id }, p.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "5–7 min" }),
        /* @__PURE__ */ i("h4", { children: "Failure cases" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: w.map((p) => /* @__PURE__ */ i(Pt, { id: p.id }, p.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "7–8 min" }),
        /* @__PURE__ */ i("h4", { children: "Limitations and gaps" }),
        m && /* @__PURE__ */ i(Y, { ids: [m.id], compact: !0 }),
        c.map((p) => /* @__PURE__ */ i("p", { class: "imw-note", children: [
          p.label,
          ": ",
          p.statement
        ] }, p.id)),
        y && /* @__PURE__ */ i(ee, { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "One research result" }),
          /* @__PURE__ */ i(Y, { ids: [y.id], compact: !0 })
        ] })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "8–10 min" }),
        /* @__PURE__ */ i("h4", { children: "Code to open" }),
        /* @__PURE__ */ i(Ee, { refs: f })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "Questions" }),
        /* @__PURE__ */ i("h4", { children: "Suggested interview questions" }),
        /* @__PURE__ */ i("ul", { class: "imw-bullets", children: u.map((p) => /* @__PURE__ */ i("li", { children: [
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
const mt = "rahul-vajja", ws = [
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
], ys = [
  "Using the rahul-vajja tools, compare Rahul against this job description and cite claim ids: …",
  "Does Rahul have AI evaluation experience? Show the evidence and the code.",
  "What would you challenge in the Drug Interaction Agent architecture?"
];
function vs() {
  const e = `${Ei()}/mcp`, t = [
    { id: "claude-code", label: "Claude Code", how: "Run in a terminal:", code: `claude mcp add --transport http ${mt} ${e}` },
    { id: "claude", label: "Claude", how: "In Claude (web or desktop): Settings → Connectors → Add custom connector, then paste this URL:", code: e },
    { id: "cursor", label: "Cursor", how: "Add to ~/.cursor/mcp.json:", code: JSON.stringify({ mcpServers: { [mt]: { url: e } } }, null, 2) },
    { id: "vscode", label: "VS Code", how: "Add to .vscode/mcp.json:", code: JSON.stringify({ servers: { [mt]: { type: "http", url: e } } }, null, 2) },
    { id: "other", label: "Other", how: "Any MCP client that supports Streamable HTTP:", code: e }
  ], [n, s] = S(t[0].id), [r, a] = S(""), [l, o] = S({ state: "idle" }), h = t.find((m) => m.id === n), d = async (m, c) => {
    try {
      await navigator.clipboard.writeText(m), a(c), setTimeout(() => a(""), 1800);
    } catch {
    }
    U("contact_clicked_from_ai", { mcp_copy: c });
  };
  return /* @__PURE__ */ i("div", { class: "imw-view imw-connect", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Connect Rahul to your AI" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Ask your own assistant, with the same evidence." }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "The verified evidence behind this portfolio is also a public, read-only MCP server. Connect it to Claude, Claude Code, Cursor or VS Code and ask about Rahul's work from inside your own tools. Your AI does the reasoning; every result carries its evidence strength and a usage policy, and nothing you send is stored." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-endpoint", children: [
      /* @__PURE__ */ i("code", { children: e }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => d(e, "url"), children: r === "url" ? "Copied" : "Copy URL" }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: async () => {
        o({ state: "running" });
        const m = performance.now();
        try {
          const c = new AbortController(), f = setTimeout(() => c.abort(), 45e3), y = await fetch(e, {
            method: "POST",
            signal: c.signal,
            headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
            body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list", params: {} })
          });
          clearTimeout(f);
          const _ = (await y.json())?.result?.tools?.length;
          if (!y.ok || !_) throw new Error(`HTTP ${y.status}`);
          o({ state: "ok", text: `${_} tools available · ${Math.round(performance.now() - m)} ms` });
        } catch {
          o({ state: "fail", text: "The server did not answer. It may be waking up; try again in a minute." });
        }
      }, disabled: l.state === "running", children: l.state === "running" ? "Checking…" : "Test the server" }),
      l.text && /* @__PURE__ */ i("span", { class: `imw-verdict is-${l.state === "ok" ? "pass" : "warn"}`, role: "status", children: [
        l.state === "ok" ? "✓ " : "! ",
        l.text
      ] })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "Client", children: t.map((m) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": n === m.id, class: n === m.id ? "is-on" : "", onClick: () => s(m.id), children: m.label }, m.id)) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: h.how }),
    /* @__PURE__ */ i("div", { class: "imw-snippet", children: [
      /* @__PURE__ */ i("pre", { children: /* @__PURE__ */ i("code", { children: h.code }) }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => d(h.code, h.id), children: r === h.id ? "Copied" : "Copy" })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Then try" }),
      /* @__PURE__ */ i("ul", { class: "imw-bullets", children: ys.map((m) => /* @__PURE__ */ i("li", { children: m }, m)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Tools · all read-only" }),
      /* @__PURE__ */ i("ul", { class: "imw-tools", children: ws.map(([m, c]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("code", { children: m }),
        /* @__PURE__ */ i("span", { children: c })
      ] }, m)) }),
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
function _s() {
  const e = T(), { inspect: t, setInspect: n } = e;
  return /* @__PURE__ */ i("div", { class: "imw-evidence", children: [
    /* @__PURE__ */ i("div", { class: "imw-evidence-head", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Evidence" }),
      t && /* @__PURE__ */ i("button", { class: "imw-icon imw-evidence-close", onClick: () => n(null), "aria-label": "Close evidence", children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-evidence-body", "aria-live": "polite", children: [
      !t && /* @__PURE__ */ i(bs, {}),
      t?.kind === "claim" && /* @__PURE__ */ i(ks, { id: t.id }),
      t?.kind === "node" && /* @__PURE__ */ i(xs, { arch: t.arch, node: t.node }),
      t?.kind === "req" && /* @__PURE__ */ i($s, {}),
      t?.kind === "entity" && /* @__PURE__ */ i(Cs, { id: t.id }),
      t?.kind === "group" && /* @__PURE__ */ i(qs, { id: t.id }),
      t?.kind === "basis" && /* @__PURE__ */ i(Es, {})
    ] })
  ] });
}
function bs() {
  const { kb: e } = T(), t = e.claims.reduce((n, s) => n + (N(s) ? s.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-intro", children: [
    /* @__PURE__ */ i("p", { children: "Select any claim, architecture component or requirement to inspect what supports it: sources, measured results and the exact code." }),
    /* @__PURE__ */ i("dl", { class: "imw-stats", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("dt", { children: e.claims.filter(N).length }),
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
function ks({ id: e }) {
  const { kb: t, setInspect: n } = T(), s = t.claim.get(e);
  if (!s) return null;
  const r = t.entity.get(s.entity), a = t.architectures.flatMap((o) => o.nodes.filter((h) => h.detail.claims.includes(e)).map((h) => ({ a: o, n: h }))), l = [...t.decisions, ...t.failures].filter((o) => o.claims.includes(e));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-st ${Ze(s)}`, children: [
      /* @__PURE__ */ i(Ce, { cls: Ze(s) }),
      " ",
      Mi(s)
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-card-claim", children: s.text }),
    s.note && /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: s.note }),
    s.metrics?.length ? /* @__PURE__ */ i("dl", { class: "imw-metrics", children: s.metrics.map((o) => /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ i("dt", { children: o.value }),
      /* @__PURE__ */ i("dd", { children: o.label })
    ] }, o.label)) }) : null,
    r && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "From ",
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => n({ kind: "entity", id: r.id }), children: r.name }),
      " · verified ",
      s.last_verified
    ] }),
    /* @__PURE__ */ i(he, { children: "Sources" }),
    /* @__PURE__ */ i("ul", { class: "imw-sources", children: s.sources.map((o) => {
      const h = t.sources.find((d) => d.id === o);
      return /* @__PURE__ */ i("li", { children: h.url && h.public ? /* @__PURE__ */ i("a", { href: h.url, target: "_blank", rel: "noopener", children: [
        h.title,
        " ↗"
      ] }) : /* @__PURE__ */ i("span", { children: [
        h.title,
        " ",
        /* @__PURE__ */ i("em", { children: "(private cross-check)" })
      ] }) }, o);
    }) }),
    s.code?.length ? /* @__PURE__ */ i(ee, { children: [
      /* @__PURE__ */ i(he, { children: "Show me the code" }),
      /* @__PURE__ */ i(Ee, { refs: s.code })
    ] }) : null,
    a.length ? /* @__PURE__ */ i(ee, { children: [
      /* @__PURE__ */ i(he, { children: "Appears in" }),
      /* @__PURE__ */ i("ul", { class: "imw-sources", children: a.map(({ a: o, n: h }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => n({ kind: "node", arch: o.id, node: h.id }), children: [
        o.title,
        " → ",
        h.label
      ] }) }, o.id + h.id)) })
    ] }) : null,
    l.length ? /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Also referenced by: ",
      l.map((o) => o.title).join("; ")
    ] }) : null
  ] });
}
function xs({ arch: e, node: t }) {
  const { kb: n } = T(), s = n.architectures.find((l) => l.id === e), r = s?.nodes.find((l) => l.id === t);
  if (!s || !r) return null;
  const a = r.detail.claims.flatMap((l) => n.claim.get(l)?.code ?? []);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
      s.title,
      " · component"
    ] }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: r.label }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: r.sub }),
    /* @__PURE__ */ i("dl", { class: "imw-kv", children: [
      /* @__PURE__ */ i("dt", { children: "Purpose" }),
      /* @__PURE__ */ i("dd", { children: r.detail.purpose }),
      /* @__PURE__ */ i("dt", { children: "Input → output" }),
      /* @__PURE__ */ i("dd", { children: [
        r.detail.input,
        " → ",
        r.detail.output
      ] }),
      r.detail.why && /* @__PURE__ */ i(ee, { children: [
        /* @__PURE__ */ i("dt", { children: "Why it matters" }),
        /* @__PURE__ */ i("dd", { children: r.detail.why })
      ] }),
      r.detail.observed && /* @__PURE__ */ i(ee, { children: [
        /* @__PURE__ */ i("dt", { children: "Observed" }),
        /* @__PURE__ */ i("dd", { children: r.detail.observed })
      ] })
    ] }),
    /* @__PURE__ */ i(Y, { ids: r.detail.claims, title: "Supporting claims", compact: !0 }),
    a.length ? /* @__PURE__ */ i(ee, { children: [
      /* @__PURE__ */ i(he, { children: "Code" }),
      /* @__PURE__ */ i(Ee, { refs: a, max: 3 })
    ] }) : null
  ] });
}
function $s() {
  const { kb: e, inspect: t } = T();
  if (t?.kind !== "req") return null;
  const n = t.req, s = n.via ? e.skill.get(n.via)?.name : void 0, r = (n.pending ?? []).map((a) => e.claim.get(a)).filter(Boolean);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-cat ${fe[n.category]}`, children: z[n.category] }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: n.label }),
    n.priority && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Listed as ",
      n.priority,
      " in the description."
    ] }),
    n.statement && /* @__PURE__ */ i("p", { children: n.statement }),
    n.category === "direct" && n.strength === "self_reported" && /* @__PURE__ */ i("p", { class: "imw-note", children: "Supported by self-reported employment experience; no public artifact." }),
    s && n.category === "related" && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Related through: ",
      s
    ] }),
    /* @__PURE__ */ i(Y, { ids: n.claims.slice(0, 8), title: n.category === "missing" ? "Closest evidence" : "Evidence", compact: !0 }),
    r.length ? /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      r.length,
      " related statement",
      r.length > 1 ? "s are" : " is",
      " awaiting verification and not used here."
    ] }) : null
  ] });
}
function Cs({ id: e }) {
  const { kb: t, persona: n } = T(), s = t.entity.get(e);
  if (!s) return null;
  const r = (t.statableByEntity.get(e) ?? []).filter((a) => a.kind !== "limitation").slice(0, 5).map((a) => a.id);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
      s.kind,
      " · ",
      s.dates
    ] }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: s.name }),
    s.role && /* @__PURE__ */ i("p", { class: "imw-help", children: s.role }),
    /* @__PURE__ */ i("p", { children: s.summaries[n] ?? s.tagline }),
    s.ownership && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Ownership: ",
      s.ownership
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-actions", children: [
      t.archByEntity.has(e) && /* @__PURE__ */ i(Ve, { a: { kind: "mode", label: "X-Ray", target: "xray", arg: e } }),
      /* @__PURE__ */ i(Ve, { a: { kind: "anchor", label: "Jump to section", target: s.anchor } }),
      s.links.slice(0, 2).map((a) => /* @__PURE__ */ i(Ve, { a: { kind: "url", label: a.label, target: a.url } }, a.url))
    ] }),
    /* @__PURE__ */ i(Y, { ids: r, title: "Key evidence", compact: !0 })
  ] });
}
function qs({ id: e }) {
  const { kb: t, setInspect: n } = T(), s = t.groups.find((a) => a.id === e);
  if (!s) return null;
  const r = t.skills.filter((a) => a.group === e).map((a) => ({ s: a, cov: te(t, a.id) }));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Capability area" }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: s.label }),
    /* @__PURE__ */ i("ul", { class: "imw-reqs", children: r.map(({ s: a, cov: l }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: l }), children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${fe[l.category]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("span", { children: a.name }),
      /* @__PURE__ */ i("small", { children: l.entities.slice(0, 3).map((o) => t.entity.get(o)?.short).join(" · ") || z[l.category] })
    ] }) }, a.id)) })
  ] });
}
function Es() {
  const { inspect: e } = T();
  return e?.kind !== "basis" ? null : /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Why this answer?" }),
    /* @__PURE__ */ i("p", { children: e.engine === "model" ? `Written by ${e.model ?? "Claude"} from a retrieved evidence pack, then validated by the API and again in your browser before display.` : "Composed by the deterministic evidence engine in your browser. No model was involved." }),
    e.checks?.length ? /* @__PURE__ */ i("ul", { class: "imw-checks", children: e.checks.map((t) => /* @__PURE__ */ i("li", { class: t.ok ? "ok" : "bad", children: [
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: t.ok ? "✓" : "✕" }),
      " ",
      t.label
    ] }, t.label)) }) : null,
    /* @__PURE__ */ i(Y, { ids: e.retrieved.slice(0, 12), title: "Evidence used", compact: !0 }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: "This panel lists sources and checks only. It never shows hidden model reasoning." })
  ] });
}
function Ss() {
  const { kb: e, persona: t, setPersona: n, coverage: s, setCoverage: r, toggleLens: a, lensOn: l, go: o } = T(), h = e.personas.find((d) => d.id === t);
  return /* @__PURE__ */ i("div", { class: "imw-rail", children: [
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i(he, { children: "Answer depth" }),
      /* @__PURE__ */ i("div", { class: "imw-personas", role: "radiogroup", "aria-label": "Who is asking", children: e.personas.map((d) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": t === d.id, class: t === d.id ? "is-on" : "", onClick: () => n(d.id), children: d.label }, d.id)) }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        h.focus,
        " Persona changes depth, never the facts."
      ] })
    ] }),
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i(he, { children: "Role context" }),
      s ? /* @__PURE__ */ i("div", { class: "imw-context-card", children: [
        /* @__PURE__ */ i("strong", { children: s.title }),
        s.closestRole && s.source === "jd" && /* @__PURE__ */ i("span", { class: "imw-help", children: [
          "Closest target profile: ",
          s.closestRole
        ] }),
        /* @__PURE__ */ i(nt, { counts: s.counts, compact: !0 }),
        /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => o("role"), children: "Open analysis" }),
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => a(!l), children: l ? "Restore portfolio" : "Show on portfolio" }),
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
            r(null), l && a(!1);
          }, children: "Clear" })
        ] })
      ] }) : /* @__PURE__ */ i("p", { class: "imw-help", children: [
        "No role selected. ",
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => o("role"), children: "Evaluate against a role →" })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i(he, { children: "Evidence states" }),
      /* @__PURE__ */ i("ul", { class: "imw-legend", children: [
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Ce, { cls: "st-artifact" }),
          " Verified, public artifact"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Ce, { cls: "st-self" }),
          " Verified, self-reported employment"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Ce, { cls: "st-pending" }),
          " Verification required (never stated)"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i(Ce, { cls: "st-no" }),
          " ",
          z.missing
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-rail-about", children: [
      /* @__PURE__ */ i(he, { children: "How this works" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: [
        "Answers come from ",
        e.claims.filter((d) => d.status === "verified").length,
        " verified claims with sources and pinned code links.",
        " ",
        e.claims.filter((d) => d.status !== "verified").length,
        " statements from other sources are held back until verified."
      ] }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => o("xray", "imw"), children: "X-Ray this system →" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => o("connect"), children: "Connect your own AI (MCP) →" })
    ] })
  ] });
}
const ri = [
  { id: "ask", label: "Ask", hint: "Questions answered from verified evidence" },
  { id: "role", label: "Role fit", hint: "Evidence coverage for a role or job description" },
  { id: "xray", label: "X-Ray", hint: "Explore each system component by component" },
  { id: "map", label: "Map", hint: "The whole body of work as an evidence graph" },
  { id: "lab", label: "Proof lab", hint: "Replays, break-it tests and live numbers" },
  { id: "brief", label: "Brief", hint: "A 10-minute technical interview brief" },
  { id: "connect", label: "Connect your AI", hint: "Use this evidence from Claude, Cursor or VS Code over MCP" }
], Is = /* @__PURE__ */ new Set(["retrieval", "no_evidence", "topic", "entity", "focused", "skill", "personally", "scale", "challenge", "level", "overview", "shipped", "beyond_wrappers", "evaluation", "strongest"]), Ms = /* @__PURE__ */ new Set(["entity", "claims", "xray", "chart", "trace", "decisions", "failures"]);
function As({ kb: e, initial: t, register: n }) {
  const [s, r] = S(!0), [a, l] = S("ask"), [o, h] = S(), [d, w] = S("recruiter"), [m, c] = S(null), [f, y] = S(null), [u, _] = S([]), [b, k] = S("checking"), [p, g] = S(!1), v = ne(null), x = ne(null), $ = ne(!1), C = ke((q, L) => {
    l(q), h(L), q === "xray" && U("xray_opened", { project: L ?? "dia" }), v.current?.querySelector(".imw-main")?.scrollTo({ top: 0 });
  }, []), I = ke((q) => {
    x.current = q.trigger ?? document.activeElement, r(!0);
    const L = ri.find((X) => X.id === q.mode)?.id ?? "ask";
    q.mode === "transform" && q.arg ? C("role", q.arg) : C(L, q.arg), U("interview_my_work_opened", { mode: L });
  }, [C]);
  V(() => {
    n(I), I(t);
  }, []), V(() => {
    s && !$.current && ($.current = !0, On(k));
  }, [s]), V(() => {
    const q = document.querySelector(".wrap"), L = document.querySelector(".imw-fab");
    s ? (document.documentElement.classList.add("imw-open"), q?.setAttribute("inert", ""), L?.setAttribute("inert", ""), requestAnimationFrame(() => v.current?.querySelector("[data-autofocus]")?.focus() ?? v.current?.focus())) : (document.documentElement.classList.remove("imw-open"), q?.removeAttribute("inert"), L?.removeAttribute("inert"), x.current?.focus?.());
  }, [s]);
  const W = ke(() => r(!1), []), Q = (q) => {
    if (q.key === "Escape") {
      q.preventDefault(), m && matchMedia("(max-width: 1100px)").matches ? c(null) : W();
      return;
    }
    if (q.key !== "Tab" || !v.current) return;
    const L = [...v.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((J) => J.offsetParent !== null);
    if (!L.length) return;
    const X = L[0], ae = L[L.length - 1];
    q.shiftKey && document.activeElement === X ? (q.preventDefault(), ae.focus()) : !q.shiftKey && document.activeElement === ae && (q.preventDefault(), X.focus());
  }, ve = ke((q) => {
    r(!1), U("project_opened_from_ai", { anchor: q }), Fn(q, () => r(!0));
  }, []), _e = ke((q, L) => {
    const X = q ?? !p, ae = L ?? f;
    X && ae ? (L && y(L), Bn(e, ae, { reopen: () => {
      r(!0), C("role");
    }, restore: () => g(!1) }), g(!0), r(!1), U("portfolio_lens_applied", { source: ae.source })) : (xt(), g(!1));
  }, [p, f, e, C]), Se = ke(async (q) => {
    const L = q.trim();
    if (!L) return;
    C("ask");
    const X = Date.now(), ae = [...u].reverse().find((R) => R.a?.entities.length)?.a?.entities, J = bn(e, L, { persona: d, roleId: f?.roleId, lastEntities: ae }), st = jt(L);
    if (J.intent === "jd" || J.intent === "role") {
      const R = J.blocks.find((Z) => Z.type === "coverage");
      R && R.type === "coverage" && y(R.analysis), st && U("jd_analyzed", { requirements: R && R.type === "coverage" ? R.analysis.requirements.length : 0 });
    }
    const rt = b === "ready" && Is.has(J.intent);
    if (_((R) => [...R, { id: X, q: st ? "Job description (pasted)" : L, a: rt ? void 0 : J, pending: rt }]), st && b === "ready" && Si(L).then((R) => {
      if (!R.length) return;
      const Z = Ge(e, L, R);
      y(Z), _((le) => le.map((be) => be.id === X && be.a ? { ...be, a: { ...be.a, blocks: be.a.blocks.map((lt) => lt.type === "coverage" ? { ...lt, analysis: Z } : lt), refined: !0 } } : be));
    }).catch(() => {
    }), !rt) return;
    const Wi = u.filter((R) => R.a).slice(-3).map((R) => ({ q: R.q, cites: R.a.basis?.retrieved?.slice(0, 8) ?? [] }));
    let at;
    try {
      const R = await Hn(e, L, d, Wi, f?.roleId), Z = J.blocks.filter((le) => Ms.has(le.type)).map((le) => le.type === "claims" ? { ...le, title: le.title ?? "Supporting evidence" } : le);
      at = { ...R, blocks: [...R.blocks, ...Z], actions: J.actions, followups: R.followups.length ? R.followups : J.followups, entities: [.../* @__PURE__ */ new Set([...R.entities, ...J.entities])] };
    } catch {
      at = { ...J, blocks: [{ type: "note", tone: "info", text: "The AI service did not return a validated answer, so this one comes from the offline evidence engine." }, ...J.blocks] };
    }
    _((R) => R.map((Z) => Z.id === X ? { ...Z, a: at, pending: !1 } : Z));
  }, [e, d, f, b, u, C]), re = ue(() => ({
    kb: e,
    persona: d,
    setPersona: w,
    mode: a,
    go: C,
    modeArg: o,
    inspect: m,
    setInspect: (q) => {
      c(q), q && U("evidence_opened", { kind: q.kind });
    },
    coverage: f,
    setCoverage: y,
    ask: Se,
    api: b,
    jump: ve,
    lensOn: p,
    toggleLens: _e,
    close: W
  }), [e, d, a, C, o, m, f, Se, b, ve, p, _e, W]);
  return /* @__PURE__ */ i(Ii.Provider, { value: re, children: /* @__PURE__ */ i("div", { class: "imw", hidden: !s, children: [
    /* @__PURE__ */ i("div", { class: "imw-backdrop", onClick: W }),
    /* @__PURE__ */ i("div", { class: "imw-dialog", ref: v, role: "dialog", "aria-modal": "true", "aria-labelledby": "imw-title", tabIndex: -1, onKeyDown: Q, children: [
      /* @__PURE__ */ i("header", { class: "imw-top", children: [
        /* @__PURE__ */ i("div", { class: "imw-brand", children: [
          /* @__PURE__ */ i("span", { class: "imw-mark", "aria-hidden": "true", children: "✦" }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("h2", { id: "imw-title", children: "Interview My Work" }),
            /* @__PURE__ */ i("p", { children: [
              "Evidence-gated · ",
              e.claims.filter((q) => q.status === "verified").length,
              " verified claims"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { class: "imw-tabs", role: "tablist", "aria-label": "Workspace views", children: ri.map((q) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": a === q.id, class: a === q.id ? "is-on" : "", title: q.hint, onClick: () => C(q.id), children: q.label }, q.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-top-right", children: [
          /* @__PURE__ */ i(Ts, { status: b }),
          /* @__PURE__ */ i("select", { class: "imw-persona-mobile", "aria-label": "Answer depth", value: d, onChange: (q) => w(q.target.value), children: e.personas.map((q) => /* @__PURE__ */ i("option", { value: q.id, children: q.label }, q.id)) }),
          /* @__PURE__ */ i("button", { class: "imw-icon", onClick: W, "aria-label": "Close Interview My Work", children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { class: "imw-body", children: [
        /* @__PURE__ */ i("aside", { class: "imw-left", "aria-label": "Context", children: /* @__PURE__ */ i(Ss, {}) }),
        /* @__PURE__ */ i("main", { class: "imw-main", id: "imw-main", children: [
          a === "ask" && /* @__PURE__ */ i(rs, { turns: u }),
          a === "role" && /* @__PURE__ */ i(os, {}),
          a === "xray" && /* @__PURE__ */ i(cs, {}),
          a === "map" && /* @__PURE__ */ i(fs, {}),
          a === "lab" && /* @__PURE__ */ i(es, {}),
          a === "brief" && /* @__PURE__ */ i(gs, {}),
          a === "connect" && /* @__PURE__ */ i(vs, {})
        ] }),
        /* @__PURE__ */ i("aside", { class: `imw-right${m ? " has-item" : ""}`, "aria-label": "Evidence", children: /* @__PURE__ */ i(_s, {}) })
      ] })
    ] })
  ] }) });
}
function Ts({ status: e }) {
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
let ft = null, Oe = null, gt = null;
async function js(e = {}) {
  ft ?? (ft = rn(Ri("evidence.json")).catch((n) => {
    throw ft = null, n;
  }));
  const t = await ft;
  if (gt) {
    gt(e);
    return;
  }
  Oe = document.createElement("div"), Oe.id = "imw-host", document.body.appendChild(Oe), Vi(/* @__PURE__ */ i(As, { kb: t, initial: e, register: (n) => gt = n }), Oe);
}
export {
  js as open
};
