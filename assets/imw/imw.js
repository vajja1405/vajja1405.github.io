var et, j, ri, de, Wt, li, ai, ot, Ne, Me, oi, Ct, gt, wt, ci, ze = {}, Qe = [], Pi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, tt = Array.isArray;
function ie(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function qt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Wi(e, t, n) {
  var s, r, l, a = {};
  for (l in t) l == "key" ? s = t[l] : l == "ref" ? r = t[l] : a[l] = t[l];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? et.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (l in e.defaultProps) a[l] === void 0 && (a[l] = e.defaultProps[l]);
  return Fe(e, a, s, r, null);
}
function Fe(e, t, n, s, r) {
  var l = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++ri, __i: -1, __u: 0 };
  return r == null && j.vnode != null && j.vnode(l), l;
}
function ee(e) {
  return e.children;
}
function Oe(e, t) {
  this.props = e, this.context = t;
}
function we(e, t) {
  if (t == null) return e.__ ? we(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? we(e) : null;
}
function Di(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, s = [], r = [], l = ie({}, t);
    l.__v = t.__v + 1, j.vnode && j.vnode(l), Et(e.__P, l, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, s, n ?? we(t), !!(32 & t.__u), r), l.__v = t.__v, l.__.__k[l.__i] = l, mi(s, l, r), t.__e = t.__ = null, l.__e != n && di(l);
  }
}
function di(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), di(e);
}
function yt(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !Ge.__r++ || Wt != j.debounceRendering) && ((Wt = j.debounceRendering) || li)(Ge);
}
function Ge() {
  try {
    for (var e, t = 1; de.length; ) de.length > t && de.sort(ai), e = de.shift(), t = de.length, Di(e);
  } finally {
    de.length = Ge.__r = 0;
  }
}
function hi(e, t, n, s, r, l, a, o, h, d, g) {
  var w, c, f, v, u, _, b = s && s.__k || Qe, k = t.length;
  for (h = Bi(n, t, b, h, k), w = 0; w < k; w++) (f = n.__k[w]) != null && (c = f.__i != -1 && b[f.__i] || ze, f.__i = w, _ = Et(e, f, c, r, l, a, o, h, d, g), v = f.__e, f.ref && c.ref != f.ref && (c.ref && It(c.ref, null, f), g.push(f.ref, f.__c || v, f)), u == null && v != null && (u = v), 4 & f.__u ? (h = ui(f, h, e), c.__e && (c.__e = null)) : typeof f.type == "function" && _ !== void 0 ? h = _ : v && (h = v.nextSibling), f.__u &= -7);
  return n.__e = u, h;
}
function Bi(e, t, n, s, r) {
  var l, a, o, h, d, g = n.length, w = g, c = 0;
  for (e.__k = new Array(r), l = 0; l < r; l++) (a = t[l]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[l] = Fe(null, a, null, null, null) : tt(a) ? a = e.__k[l] = Fe(ee, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[l] = Fe(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[l] = a, h = l + c, a.__ = e, a.__b = e.__b + 1, o = null, (d = a.__i = Hi(a, n, h, w)) != -1 && (w--, (o = n[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (r > g ? c-- : r < g && c++), typeof a.type != "function" && (a.__u |= 4)) : d != h && (d == h - 1 ? c-- : d == h + 1 ? c++ : (d > h ? c-- : c++, a.__u |= 4))) : e.__k[l] = null;
  if (w) for (l = 0; l < g; l++) (o = n[l]) != null && (2 & o.__u) == 0 && (o.__e == s && (s = we(o)), gi(o, o));
  return s;
}
function ui(e, t, n) {
  var s, r;
  if (typeof e.type == "function") {
    for (s = e.__k, r = 0; s && r < s.length; r++) s[r] && (s[r].__ = e, t = ui(s[r], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = we(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Hi(e, t, n, s) {
  var r, l, a, o = e.key, h = e.type, d = t[n], g = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || g && o == d.key && h == d.type) return n;
  if (s > (g ? 1 : 0)) {
    for (r = n - 1, l = n + 1; r >= 0 || l < t.length; ) if ((d = t[a = r >= 0 ? r-- : l++]) != null && (2 & d.__u) == 0 && o == d.key && h == d.type) return a;
  }
  return -1;
}
function Dt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Pi.test(t) ? n : n + "px";
}
function Le(e, t, n, s, r) {
  var l, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof s == "string" && (e.style.cssText = s = ""), s) for (t in s) n && t in n || Dt(e.style, t, "");
    if (n) for (t in n) s && n[t] == s[t] || Dt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") l = t != (t = t.replace(oi, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + l] = n, n ? s ? n[Me] = s[Me] : (n[Me] = Ct, e.addEventListener(t, l ? wt : gt, l)) : e.removeEventListener(t, l ? wt : gt, l);
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
function Bt(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[Ne] == null) t[Ne] = Ct++;
      else if (t[Ne] < n[Me]) return;
      return n(j.event ? j.event(t) : t);
    }
  };
}
function Et(e, t, n, s, r, l, a, o, h, d) {
  var g, w, c, f, v, u, _, b, k, p, m, y, x, $, C, S, W = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (h = !!(32 & n.__u), l = [o = t.__e = n.__e]), (g = j.__b) && g(t);
  e: if (typeof W == "function") {
    w = a.length;
    try {
      if (k = t.props, p = W.prototype && W.prototype.render, m = (g = W.contextType) && s[g.__c], y = g ? m ? m.props.value : g.__ : s, n.__c ? b = (c = t.__c = n.__c).__ = c.__E : (p ? t.__c = c = new W(k, y) : (t.__c = c = new Oe(k, y), c.constructor = W, c.render = Fi), m && m.sub(c), c.state || (c.state = {}), c.__n = s, f = c.__d = !0, c.__h = [], c._sb = []), p && c.__s == null && (c.__s = c.state), p && W.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ie({}, c.__s)), ie(c.__s, W.getDerivedStateFromProps(k, c.__s))), v = c.props, u = c.state, c.__v = t, f) p && W.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), p && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (p && W.getDerivedStateFromProps == null && k !== v && c.componentWillReceiveProps != null && c.componentWillReceiveProps(k, y), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(k, c.__s, y) === !1) {
          t.__v != n.__v && (c.props = k, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(z) {
            z && (z.__ = t);
          }), Qe.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && a.push(c), o = we(n);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(k, c.__s, y), p && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(v, u, _);
        });
      }
      if (c.context = y, c.props = k, c.__P = e, c.__e = !1, x = j.__r, $ = 0, p) c.state = c.__s, c.__d = !1, x && x(t), g = c.render(c.props, c.state, c.context), Qe.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, x && x(t), g = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++$ < 25);
      c.state = c.__s, c.getChildContext != null && (s = ie(ie({}, s), c.getChildContext())), p && !f && c.getSnapshotBeforeUpdate != null && (_ = c.getSnapshotBeforeUpdate(v, u)), C = g != null && g.type === ee && g.key == null ? fi(g.props.children) : g, o = hi(e, tt(C) ? C : [C], t, n, s, r, l, a, o, h, d), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), b && (c.__E = c.__ = null);
    } catch (z) {
      if (a.length = w, t.__v = null, h || l != null) {
        if (z.then) {
          for (t.__u |= h ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
          l != null && (l[l.indexOf(o)] = null), t.__e = o;
        } else if (l != null) for (S = l.length; S--; ) qt(l[S]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), z.then || pi(t), j.__e(z, t, n);
    }
  } else l == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : o = t.__e = Ni(n.__e, t, n, s, r, l, a, h, d);
  return (g = j.diffed) && g(t), 128 & t.__u ? void 0 : o;
}
function pi(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(pi));
}
function mi(e, t, n) {
  for (var s = 0; s < n.length; s++) It(n[s], n[++s], n[++s]);
  j.__c && j.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(l) {
        l.call(r);
      });
    } catch (l) {
      j.__e(l, r.__v);
    }
  });
}
function fi(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : tt(e) ? e.map(fi) : e.constructor !== void 0 ? null : ie({}, e);
}
function Ni(e, t, n, s, r, l, a, o, h) {
  var d, g, w, c, f, v, u, _ = n.props || ze, b = t.props, k = t.type;
  if (k == "svg" ? r = "http://www.w3.org/2000/svg" : k == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), l != null) {
    for (d = 0; d < l.length; d++) if ((f = l[d]) && "setAttribute" in f == !!k && (k ? f.localName == k : f.nodeType == 3)) {
      e = f, l[d] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode(b);
    e = document.createElementNS(r, k, b.is && b), o && (j.__m && j.__m(t, l), o = !1), l = null;
  }
  if (k == null) _ === b || o && e.data == b || (e.data = b);
  else {
    if (l = k == "textarea" && b.defaultValue != null ? null : l && et.call(e.childNodes), !o && l != null) for (_ = {}, d = 0; d < e.attributes.length; d++) _[(f = e.attributes[d]).name] = f.value;
    for (d in _) f = _[d], d == "dangerouslySetInnerHTML" ? w = f : d == "children" || d in b || d == "value" && "defaultValue" in b || d == "checked" && "defaultChecked" in b || Le(e, d, null, f, r);
    for (d in b) f = b[d], d == "children" ? c = f : d == "dangerouslySetInnerHTML" ? g = f : d == "value" ? v = f : d == "checked" ? u = f : o && typeof f != "function" || _[d] === f || Le(e, d, f, _[d], r);
    if (g) o || w && (g.__html == w.__html || g.__html == e.innerHTML) || (e.innerHTML = g.__html), t.__k = [];
    else if (w && (e.innerHTML = ""), hi(t.type == "template" ? e.content : e, tt(c) ? c : [c], t, n, s, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, l, a, l ? l[0] : n.__k && we(n, 0), o, h), l != null) for (d = l.length; d--; ) qt(l[d]);
    o && k != "textarea" || (d = "value", k == "progress" && v == null ? e.removeAttribute("value") : v != null && (v !== e[d] || k == "progress" && !v || k == "option" && v != _[d]) && Le(e, d, v, _[d], r), d = "checked", u != null && u != e[d] && Le(e, d, u, _[d], r));
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
function gi(e, t, n) {
  var s, r;
  if (j.unmount && j.unmount(e), (s = e.ref) && (s.current && s.current != e.__e || It(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount) try {
      s.componentWillUnmount();
    } catch (l) {
      j.__e(l, t);
    }
    s.base = s.__P = s.__n = null;
  }
  if (s = e.__k) for (r = 0; r < s.length; r++) s[r] && gi(s[r], t, n || typeof e.type != "function");
  n || qt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Fi(e, t, n) {
  return this.constructor(e, n);
}
function Oi(e, t, n) {
  var s, r, l, a;
  t == document && (t = document.documentElement), j.__ && j.__(e, t), r = (s = !1) ? null : t.__k, l = [], a = [], Et(t, e = t.__k = Wi(ee, null, [e]), r || ze, ze, t.namespaceURI, r ? null : t.firstChild ? et.call(t.childNodes) : null, l, r ? r.__e : t.firstChild, s, a), mi(l, e, a), e.props.children = null;
}
function Ui(e) {
  function t(n) {
    var s, r;
    return this.getChildContext || (s = /* @__PURE__ */ new Set(), (r = {})[t.__c] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      s = null;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value != l.value && s.forEach(function(a) {
        a.__e = !0, yt(a);
      });
    }, this.sub = function(l) {
      s.add(l);
      var a = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        s && s.delete(l), a && a.call(l);
      };
    }), n.children;
  }
  return t.__c = "__cC" + ci++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, s) {
    return n.children(s);
  }).contextType = t, t;
}
et = Qe.slice, j = { __e: function(e, t, n, s) {
  for (var r, l, a; t = t.__; ) if ((r = t.__c) && !r.__) try {
    if ((l = r.constructor) && l.getDerivedStateFromError != null && (r.setState(l.getDerivedStateFromError(e)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, s || {}), a = r.__d), a) return r.__E = r;
  } catch (o) {
    e = o;
  }
  throw e;
} }, ri = 0, Oe.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ie({}, this.state), typeof e == "function" && (e = e(ie({}, n), this.props)), e && ie(n, e), e != null && this.__v && (t && this._sb.push(t), yt(this));
}, Oe.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), yt(this));
}, Oe.prototype.render = ee, de = [], li = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ai = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ge.__r = 0, ot = Math.random().toString(8), Ne = "__d" + ot, Me = "__a" + ot, oi = /(PointerCapture)$|Capture$/i, Ct = 0, gt = Bt(!1), wt = Bt(!0), ci = 0;
var Vi = 0;
function i(e, t, n, s, r, l) {
  t || (t = {});
  var a, o, h = t;
  if ("ref" in h) for (o in h = {}, t) o == "ref" ? a = t[o] : h[o] = t[o];
  var d = { type: e, props: h, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Vi, __i: -1, __u: 0, __source: r, __self: l };
  if (typeof e == "function" && (a = e.defaultProps)) for (o in a) h[o] === void 0 && (h[o] = a[o]);
  return j.vnode && j.vnode(d), d;
}
var ye, P, ct, Ht, Ae = 0, wi = [], D = j, Nt = D.__b, Ft = D.__r, Ot = D.diffed, Ut = D.__c, Vt = D.unmount, zt = D.__;
function je(e, t) {
  D.__h && D.__h(P, e, Ae || t), Ae = 0;
  var n = P.__H || (P.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function I(e) {
  return Ae = 1, zi(yi, e);
}
function zi(e, t, n) {
  var s = je(ye++, 2);
  if (s.t = e, !s.__c && (s.__ = [yi(void 0, t), function(o) {
    var h = s.__N ? s.__N[0] : s.__[0], d = s.t(h, o);
    h !== d && (s.__N = [d, s.__[1]], s.__c.setState({}));
  }], s.__c = P, !P.__f)) {
    var r = function(o, h, d) {
      if (!s.__c.__H) return !0;
      var g = !1, w = s.__c.props !== o;
      if (s.__c.__H.__.some(function(f) {
        if (f.__N) {
          g = !0;
          var v = f.__[0];
          f.__ = f.__N, f.__N = void 0, v !== f.__[0] && (w = !0);
        }
      }), l) {
        var c = l.call(this, o, h, d);
        return g ? c || w : c;
      }
      return !g || w;
    };
    P.__f = !0;
    var l = P.shouldComponentUpdate, a = P.componentWillUpdate;
    P.componentWillUpdate = function(o, h, d) {
      if (this.__e) {
        var g = l;
        l = void 0, r(o, h, d), l = g;
      }
      a && a.call(this, o, h, d);
    }, P.shouldComponentUpdate = r;
  }
  return s.__N || s.__;
}
function U(e, t) {
  var n = je(ye++, 3);
  !D.__s && St(n.__H, t) && (n.__ = e, n.u = t, P.__H.__h.push(n));
}
function Qi(e, t) {
  var n = je(ye++, 4);
  !D.__s && St(n.__H, t) && (n.__ = e, n.u = t, P.__h.push(n));
}
function ne(e) {
  return Ae = 5, ue(function() {
    return { current: e };
  }, []);
}
function ue(e, t) {
  var n = je(ye++, 7);
  return St(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ke(e, t) {
  return Ae = 8, ue(function() {
    return e;
  }, t);
}
function Gi(e) {
  var t = P.context[e.__c], n = je(ye++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(P)), t.props.value) : e.__;
}
function Ki() {
  for (var e; e = wi.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Ue), t.__h.some(vt), t.__h = [];
    } catch (n) {
      t.__h = [], D.__e(n, e.__v);
    }
  }
}
D.__b = function(e) {
  P = null, Nt && Nt(e);
}, D.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), zt && zt(e, t);
}, D.__r = function(e) {
  Ft && Ft(e), ye = 0;
  var t = (P = e.__c).__H;
  t && (ct === P ? (t.__h = [], P.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Ue), t.__h.some(vt), t.__h = [], ye = 0)), ct = P;
}, D.diffed = function(e) {
  Ot && Ot(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (wi.push(t) !== 1 && Ht === D.requestAnimationFrame || ((Ht = D.requestAnimationFrame) || Ji)(Ki)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), ct = P = null;
}, D.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Ue), n.__h = n.__h.filter(function(s) {
        return !s.__ || vt(s);
      });
    } catch (s) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], D.__e(s, n.__v);
    }
  }), Ut && Ut(e, t);
}, D.unmount = function(e) {
  Vt && Vt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(s) {
    try {
      Ue(s);
    } catch (r) {
      t = r;
    }
  }), n.__H = void 0, t && D.__e(t, n.__v));
};
var Qt = typeof requestAnimationFrame == "function";
function Ji(e) {
  var t, n = function() {
    clearTimeout(s), Qt && cancelAnimationFrame(t), setTimeout(e);
  }, s = setTimeout(n, 35);
  Qt && (t = requestAnimationFrame(n));
}
function Ue(e) {
  var t = P, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), P = t;
}
function vt(e) {
  var t = P;
  e.__c = e.__(), P = t;
}
function St(e, t) {
  return !e || e.length !== t.length || t.some(function(n, s) {
    return n !== e[s];
  });
}
function yi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function se(e) {
  return e.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}
const Xi = new Set(
  "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work".split(" ")
);
function vi(e) {
  return se(e).replace(/[^a-z0-9+#/. -]/g, " ").split(/[\s/]+/).map((t) => t.replace(/^[.-]+|[.-]+$/g, "")).filter((t) => t.length > 1 && !Xi.has(t)).map(Yi);
}
function Yi(e) {
  if (e.length <= 4) return e;
  for (const t of ["ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"])
    if (e.endsWith(t) && e.length - t.length >= 4) return e.slice(0, -t.length);
  return e;
}
const B = (e) => !!e && e.status === "verified" && e.public_safe, Zi = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function en(e) {
  return new RegExp(`(?<![a-z0-9])${Zi(e)}(?![a-z0-9+#])`, "g");
}
function tn(e) {
  const t = e;
  t.claim = new Map(e.claims.map((r) => [r.id, r])), t.entity = new Map(e.entities.map((r) => [r.id, r])), t.skill = new Map(e.skills.map((r) => [r.id, r])), t.gap = new Map(e.gaps.map((r) => [r.id, r])), t.role = new Map(e.roles.map((r) => [r.id, r])), t.archByEntity = new Map(e.architectures.map((r) => [r.entity, r]));
  const n = [], s = (r, l) => {
    const a = se(r);
    a && n.push({ term: a, ref: { ...l, term: r }, re: en(a) });
  };
  for (const r of e.skills)
    s(r.name, { id: r.id, kind: "skill", near: !1 }), r.aliases.forEach((l) => s(l, { id: r.id, kind: "skill", near: !1 })), (r.near || []).forEach((l) => s(l, { id: r.id, kind: "skill", near: !0 }));
  for (const r of e.gaps) r.aliases.forEach((l) => s(l, { id: r.id, kind: "gap", near: !1 }));
  n.sort((r, l) => l.term.length - r.term.length), t.aliases = n, t.statableBySkill = /* @__PURE__ */ new Map(), t.statableByEntity = /* @__PURE__ */ new Map(), t.pendingBySkill = /* @__PURE__ */ new Map();
  for (const r of e.claims)
    if (B(r)) {
      for (const l of r.tags) (t.statableBySkill.get(l) ?? t.statableBySkill.set(l, []).get(l)).push(r);
      (t.statableByEntity.get(r.entity) ?? t.statableByEntity.set(r.entity, []).get(r.entity)).push(r);
    } else if (r.status === "verification_required")
      for (const l of r.tags) (t.pendingBySkill.get(l) ?? t.pendingBySkill.set(l, []).get(l)).push(r);
  return t;
}
async function nn(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`evidence ${t.status}`);
  return tn(await t.json());
}
const Re = (e, t) => e.entity.get(t)?.short ?? t, Mt = (e, t) => e.skill.get(t)?.name ?? e.gap.get(t)?.name ?? t;
function it(e, t) {
  const n = se(t), s = [], r = /* @__PURE__ */ new Map();
  for (const l of e.aliases) {
    l.re.lastIndex = 0;
    let a;
    for (; a = l.re.exec(n); ) {
      const o = a.index, h = o + a[0].length;
      if (s.some(([w, c]) => o < c && h > w)) continue;
      s.push([o, h]);
      const d = l.ref.near ? `near:${l.ref.term}` : l.ref.id, g = r.get(d);
      g ? g.count++ : r.set(d, { ...l.ref, count: 1, index: o });
    }
  }
  return [...r.values()].sort((l, a) => l.index - a.index);
}
const sn = {
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
}, dt = Object.entries(sn).map(
  ([e, t]) => [e, new RegExp(`(?<![a-z0-9])(${t.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`)]
);
function _i(e) {
  const t = se(e);
  return dt.filter(([, n]) => n.test(t)).map(([n]) => n).sort((n, s) => t.search(dt.find(([r]) => r === n)[1]) - t.search(dt.find(([r]) => r === s)[1]));
}
const Gt = /* @__PURE__ */ new WeakMap();
function rn(e) {
  let t = Gt.get(e);
  if (t) return t;
  const n = e.claims.filter(B).map((r) => {
    const l = [e.entity.get(r.entity)?.name ?? "", ...r.tags.map((a) => e.skill.get(a)?.name ?? "")].join(" ");
    return { claim: r, toks: vi(`${r.text} ${l}`) };
  }), s = /* @__PURE__ */ new Map();
  for (const r of n) new Set(r.toks).forEach((l) => s.set(l, (s.get(l) ?? 0) + 1));
  return t = { docs: n, df: s, avg: n.reduce((r, l) => r + l.toks.length, 0) / Math.max(1, n.length) }, Gt.set(e, t), t;
}
function bi(e, t, n = {}) {
  const s = rn(e), r = [...new Set(vi(t))], l = new Set(n.concepts ?? it(e, t).filter((w) => w.kind === "skill").map((w) => w.id)), a = new Set(n.entities ?? _i(t)), o = s.docs.length, h = 1.2, d = 0.75, g = [];
  for (const w of s.docs) {
    let c = 0;
    for (const f of r) {
      const v = w.toks.filter((b) => b === f).length;
      if (!v) continue;
      const u = s.df.get(f) ?? 0, _ = Math.log(1 + (o - u + 0.5) / (u + 0.5));
      c += _ * (v * (h + 1) / (v + h * (1 - d + d * w.toks.length / s.avg)));
    }
    for (const f of w.claim.tags) l.has(f) && (c += 2.5);
    a.has(w.claim.entity) && (c += 3), w.claim.kind === "limitation" && (c *= 0.8), c > 0 && g.push({ claim: w.claim, score: c });
  }
  return g.sort((w, c) => c.score - w.score).slice(0, n.limit ?? 12);
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
  const l = e.statableBySkill.get(t) ?? [], a = (e.pendingBySkill.get(t) ?? []).map((o) => o.id);
  if (n.near)
    return {
      id: `near:${n.near}`,
      label: ut(n.near),
      term: n.near,
      category: l.length ? "related" : "missing",
      priority: n.priority,
      claims: l.slice(0, 6).map((o) => o.id),
      entities: Pe(l.map((o) => o.entity)),
      via: t,
      statement: l.length ? `${ut(n.near)} itself is not demonstrated. The closest evidence is ${r.name.toLowerCase()}.` : `${ut(n.near)} is not demonstrated.`
    };
  if (l.length) {
    const o = l.some((h) => h.strength === "public_artifact");
    return {
      id: t,
      label: r.name,
      category: "direct",
      priority: n.priority,
      claims: ht(l).map((h) => h.id),
      entities: Pe(ht(l).map((h) => h.entity)),
      strength: o ? "artifact" : "self_reported",
      pending: a
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
        pending: a,
        statement: `No direct evidence for ${r.name.toLowerCase()}. The closest is ${Mt(e, o).toLowerCase()}.`
      };
  }
  return a.length ? {
    id: t,
    label: r.name,
    category: "verification",
    priority: n.priority,
    claims: [],
    entities: [],
    pending: a,
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
function At(e, t, n, s = {}) {
  const r = { direct: 0, related: 0, verification: 0, missing: 0 };
  n.forEach((h) => r[h.category]++);
  const l = /* @__PURE__ */ new Map();
  for (const h of n)
    if (!(h.category !== "direct" && h.category !== "related"))
      for (const d of h.entities) {
        const g = l.get(d) ?? { score: 0, requirements: [] };
        g.score += (h.category === "direct" ? 1 : 0.4) * (d === "imw" ? 0.4 : 1), g.requirements.push(h.id), l.set(d, g);
      }
  const a = ["direct", "related", "verification", "missing"], o = { required: 0, preferred: 1, mentioned: 2, undefined: 1 };
  return {
    title: t,
    source: "role",
    notes: [],
    ...s,
    requirements: [...n].sort((h, d) => a.indexOf(h.category) - a.indexOf(d.category) || o[String(h.priority)] - o[String(d.priority)]),
    counts: r,
    entities: [...l.entries()].map(([h, d]) => ({ id: h, ...d })).filter((h) => e.entity.has(h.id)).sort((h, d) => d.score - h.score)
  };
}
function pe(e, t) {
  const n = e.role.get(t);
  if (!n) throw new Error(`unknown role ${t}`);
  const s = [...n.requirements.map((l) => te(e, l)), ...n.gaps.map((l) => te(e, l))], r = [n.level_note, e.subject.level_note].filter(Boolean);
  return At(e, n.title, s, { source: "role", roleId: t, notes: r });
}
const V = {
  direct: "Direct evidence",
  related: "Related evidence",
  verification: "Verification required",
  missing: "Not currently demonstrated"
}, Pe = (e) => [...new Set(e)], ut = (e) => e.replace(/\b[a-z]/g, (t) => t.toUpperCase()), ln = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/, ki = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/, an = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/, on = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;
function cn(e) {
  const t = e.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(t)) return null;
  const n = se(t).replace(/^#+\s*/, ""), s = n.split(" ").length;
  return n.length > 0 && n.length < 70 && (/[:：]$/.test(n) || /^#/.test(t) || s <= 5 && !/[.,;]/.test(n)) ? ln.test(n) ? "skip" : ki.test(n) ? "preferred" : an.test(n) ? "required" : on.test(n) ? "mentioned" : null : null;
}
function dn(e, t) {
  const n = t.split(/\r?\n/);
  let s = "mentioned";
  const r = /* @__PURE__ */ new Map(), l = { required: 3, preferred: 2, mentioned: 1, skip: 0 };
  for (const c of n) {
    if (!c.trim()) continue;
    const f = cn(c);
    if (f) {
      s = f;
      continue;
    }
    if (s === "skip") continue;
    const v = ki.test(se(c)) ? "preferred" : s;
    for (const u of it(e, c)) {
      const _ = u.near ? `near:${u.term.toLowerCase()}` : u.id, b = r.get(_);
      b ? (b.count += u.count, l[v] > l[b.priority] && (b.priority = v)) : r.set(_, { id: u.id, near: u.near ? u.term.toLowerCase() : void 0, priority: v, count: u.count });
    }
  }
  const a = se(t), o = [...a.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((c) => Number(c[1])).filter((c) => c > 0 && c < 30), h = a.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/), d = new Set([...r.values()].filter((c) => !c.near && e.skill.has(c.id)).map((c) => c.id));
  let g, w = 0;
  for (const c of e.roles) {
    const f = c.requirements.filter((v) => d.has(v)).length / c.requirements.length;
    f > w && (w = f, g = c.id);
  }
  return {
    concepts: [...r.values()],
    years: o.length ? Math.max(...o) : void 0,
    seniority: h?.[1],
    closestRole: w >= 0.25 ? g : void 0
  };
}
function Ke(e, t, n = []) {
  const s = dn(e, t), r = [], l = /* @__PURE__ */ new Set(), a = { required: 0, preferred: 1, mentioned: 2 }, o = [...s.concepts].sort((d, g) => a[d.priority] - a[g.priority] || g.count - d.count).slice(0, 26);
  for (const d of o) {
    const g = te(e, d.id, { near: d.near, priority: d.priority === "skip" ? "mentioned" : d.priority });
    l.has(g.id) || (l.add(g.id), r.push(g));
  }
  for (const d of n) {
    const g = it(e, d);
    if (g.length)
      for (const w of g) {
        const c = te(e, w.id, { near: w.near ? w.term.toLowerCase() : void 0, priority: "required" });
        l.has(c.id) || (l.add(c.id), r.push(c));
      }
    else if (d.trim().length > 2) {
      const w = te(e, d.trim(), { priority: "required" });
      l.has(w.id) || (l.add(w.id), r.push(w));
    }
  }
  const h = [];
  return s.years && s.years >= 3 ? h.push(`The description asks for ${s.years}+ years. ${e.subject.level_note}`) : s.seniority && h.push(`The description uses the word "${s.seniority}". ${e.subject.level_note}`), r.length || h.push("No recognizable technical requirements were found. Try pasting the requirements section."), At(e, "Your job description", r, {
    source: "jd",
    notes: h,
    closestRole: s.closestRole ? e.role.get(s.closestRole)?.title : void 0,
    roleId: s.closestRole
  });
}
const Rt = (e) => e.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(e), xi = /\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|best candidate|excellent fit|great fit|strong fit|perfect|10\s?\/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|highly recommend|must hire|unmatched|brilliant|superstar)\b/i, hn = /(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)/i, un = /(\b(rate|score|rank)\b.*\b(him|rahul|candidate)\b|\bout of (10|ten|100)\b|percent(age)? (match|fit)|%\s?(match|fit)|match (score|percentage)|fit score|is (he|rahul) (the )?(best|perfect|ideal|a good|great)|should (we|i) hire|would (he|rahul) be (a )?(good|great|perfect))/i, pn = /\b(weather|joke|poem|recipe|song|lyrics|stock price|bitcoin|politic|election|horoscope|translate this|write (me )?(an? )?(essay|story|cover letter)|capital of|who won the)\b/i, M = (e, t) => t.test(e), F = (e) => [...new Set(e)];
function Jt(e, t) {
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
function J(e, t, n, s = 3, r = 9) {
  const l = [...t].filter(B).sort((h, d) => Jt(d, n) - Jt(h, n)), a = /* @__PURE__ */ new Map(), o = [];
  for (const h of l) {
    const d = a.get(h.entity) ?? 0;
    if (!(d >= s || o.includes(h)) && (a.set(h.entity, d + 1), o.push(h), o.length >= r))
      break;
  }
  return o;
}
function Je(e, t) {
  return F(t.flatMap((n) => e.statableBySkill.get(n) ?? []));
}
function ge(e, t) {
  return (e.statableByEntity.get(t) ?? []).filter((n) => n.kind === "limitation");
}
function A(e) {
  return e.map((t) => t.id);
}
function jt(e) {
  return { kind: "anchor", label: `Jump to ${e.short} on the portfolio`, target: e.anchor };
}
function qe(e, t, n = {}) {
  const s = e.entity.get(t);
  if (!s) return [];
  const r = [];
  n.xray !== !1 && e.archByEntity.has(t) && r.push({ kind: "mode", label: `X-Ray ${s.short}`, target: "xray", arg: t }), r.push(jt(s));
  for (const l of s.links.slice(0, 2)) r.push({ kind: "url", label: l.label, target: l.url });
  return r;
}
function H(e, t, n = []) {
  const s = e.entity.get(t);
  if (!s) return [];
  const r = s.short, l = [
    ["architecture", `Show the architecture of ${r}`],
    ["why", `Why was ${r} designed this way?`],
    ["evaluation", `How was ${r} evaluated?`],
    ["failure", `What failed in ${r}?`],
    ["code", `Show me the code for ${r}`],
    ["challenge", `What would an interviewer challenge about ${r}?`],
    ["personally", `What did Rahul personally do on ${r}?`],
    ["scale", `How would ${r} scale?`]
  ], a = e.archByEntity.has(t);
  return l.filter(([o]) => !n.includes(o)).filter(([o]) => o === "architecture" ? a : !0).filter(([o]) => o === "failure" ? e.failures.some((h) => h.entity === t) || ge(e, t).length > 0 : !0).filter(([o]) => o === "why" ? e.decisions.some((h) => h.entity === t) : !0).map(([, o]) => o).slice(0, 5);
}
const Te = [
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
    followups: n.followups ?? Te.slice(0, 4),
    actions: n.actions ?? [],
    engine: "evidence",
    intent: e,
    entities: n.entities ?? [],
    basis: n.basis
  };
}
function mn(e) {
  return F(e.blocks.flatMap((t) => t.type === "claims" ? t.ids : t.type === "p" ? t.cites ?? [] : []));
}
function fn(e) {
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
function gn(e, t) {
  const n = mn(t);
  return t.basis = {
    retrieved: t.basis?.retrieved ?? n,
    checks: [
      { label: "Only verified, public-safe claims cited", ok: n.every((s) => B(e.claim.get(s))) },
      { label: "No fit scores, rankings or praise", ok: !xi.test(fn(t)) },
      { label: "Every cited claim links to a source", ok: n.every((s) => (e.claim.get(s)?.sources.length ?? 0) > 0) }
    ]
  }, t;
}
const wn = [
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
function yn(e) {
  const t = se(e);
  return wn.find(([n]) => n.test(t))?.[1];
}
function vn(e, t, n) {
  return gn(e, _n(e, t, n));
}
function _n(e, t, n) {
  const s = t.trim(), r = se(s), l = n.persona;
  if (!r) return bn(e);
  if (hn.test(s))
    return E("injection", [
      { type: "p", text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." }
    ], { followups: Te.slice(0, 4) });
  if (Rt(s)) return En(e, s);
  if (un.test(r))
    return E("no_scores", [
      { type: "p", text: "I don't produce fit scores, rankings or hiring recommendations. What I can do is show evidence coverage: for each requirement of a role, whether the portfolio has direct evidence, related evidence, claims awaiting verification, or nothing yet." }
    ], { actions: [{ kind: "mode", label: "Evaluate against a role", target: "role" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an AI Evaluation Engineer role", "What is not demonstrated yet?"] });
  const a = _i(s), o = it(e, s), h = F(o.map((u) => u.id));
  if (pn.test(r) && !a.length && !o.length)
    return E("off_topic", [{ type: "p", text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  if (M(r, /\b(contact|email|reach (him|rahul|out)|get in touch|hire him|linkedin|resume|cv)\b/)) return kn(e);
  const d = qn(e, r, s, a, h);
  if (d) return d;
  const g = yn(r);
  if (g && M(r, /(interviewer|interview questions|would .* ask)/)) return ei(e, g);
  if (g && M(r, /challenge/)) return ti(e, g);
  if (g && M(r, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return Xt(e, g);
  if (n.roleId && M(r, /(this role|the role|this evidence|for this|^challenge)/))
    return M(r, /challenge/) ? ti(e, n.roleId) : M(r, /(interview|ask)/) ? ei(e, n.roleId) : Xt(e, n.roleId);
  if (M(r, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/))
    return E(
      "role_prompt",
      [{ type: "p", text: "Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated." }],
      { actions: [{ kind: "mode", label: "Select a role", target: "role" }, { kind: "mode", label: "Paste a job description", target: "role", arg: "jd" }], followups: ["Evaluate Rahul for an Applied AI Engineer role", "Evaluate Rahul for an ML Engineer role", "Evaluate Rahul for an LLM Application Engineer role"] }
    );
  if (M(r, /\b(compare|versus|vs\.?|difference between|differ)\b/) && a.length >= 2) return Yt(e, a.slice(0, 2), l);
  if (M(r, /\b(compare|versus|vs\.?)\b/) && a.length === 1 && n.lastEntities?.length) {
    const u = n.lastEntities.find((_) => _ !== a[0]);
    if (u) return Yt(e, [u, a[0]], l);
  }
  if (M(r, /(who is (rahul|he)|about rahul|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr)/)) return Pn(e, l);
  if (r.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/) || M(r, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const u = o.filter((k) => k.kind === "skill").map((k) => k.id), _ = We(r), b = u.length ? u : _;
    if (b.length) return Zt(e, b, l, r);
  }
  if (M(r, /\b(strongest|best)\b/) && We(r).length) return Zt(e, We(r), l, r);
  if (M(r, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/) && o.length) return _t(e, o.map((u) => ({ id: u.id, near: u.near ? u.term.toLowerCase() : void 0 })), l, r);
  const f = a[0] ?? (M(r, /\b(it|this|that|the project)\b/) ? n.lastEntities?.[0] : void 0);
  if (f) return In(e, f, r, l);
  if (M(r, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return jn(e);
  if (M(r, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return Sn(e, l, M(r, /\b(more|all|other)\b/));
  if (M(r, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return Mn(e, l);
  if (M(r, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return An(e);
  if (M(r, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return Rn(e);
  if (M(r, /(personally|himself|his own|individual contribution)/)) return E("personally", [{ type: "p", text: "Ask about a specific project or role. Ownership is recorded per item:" }, ...e.entities.filter((u) => u.ownership && u.kind !== "education").slice(0, 7).map((u) => ({ type: "p", text: `${u.short}: ${u.ownership}` }))]);
  const v = We(r);
  return v.length ? Tn(e, r, v, l) : o.length ? _t(e, o.map((u) => ({ id: u.id, near: u.near ? u.term.toLowerCase() : void 0 })), l, r) : Ln(e, s, l);
}
function bn(e) {
  return E("help", [{ type: "p", text: `Ask about ${e.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}
function kn(e) {
  return E("contact", [{ type: "p", text: `${e.subject.name} is seeking full-time AI / ML engineering roles across the US.` }], {
    actions: [
      { kind: "url", label: "Email Rahul", target: `mailto:${e.subject.email}` },
      { kind: "url", label: "LinkedIn", target: e.subject.links.linkedin },
      { kind: "url", label: "GitHub", target: e.subject.links.github },
      { kind: "anchor", label: "Jump to contact", target: "#contact" }
    ]
  });
}
const xn = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi, $n = /\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/, Cn = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;
function qn(e, t, n, s, r) {
  if (!(/^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(t) || /\b(did|has) (he|rahul)\b/.test(t))) return null;
  const a = t.match($n)?.[0];
  if (a && Cn.test(t) && !/stable diffusion/.test(a)) {
    const d = e.gap.get("pretraining"), g = J(e, Je(e, ["llm_apis"]), "engineer", 1, 4);
    return E("false_premise", [
      { type: "p", text: `No. Nothing in the evidence supports that premise. ${a.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: "gaps", items: [{ id: d.id, name: d.name, statement: d.statement, closest: ["sssd"] }] },
      { type: "claims", title: "What the evidence does show", ids: A(g) }
    ], { followups: ["What models has Rahul fine-tuned?", "Show me his strongest RAG work.", "What is not demonstrated yet?"] });
  }
  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(t) && !/club/.test(t)) {
    const d = e.claim.get("dac.lead"), g = Je(e, ["stakeholder"]).filter((w) => w.id !== "dac.lead").slice(0, 2);
    return E("false_premise", [
      { type: "p", text: "The portfolio does not show people management or leading an engineering team. The closest evidence is student leadership and cross-functional collaboration:" },
      { type: "claims", ids: [d.id, ...A(g)] }
    ]);
  }
  const o = /minute|scale|100x|10x/.test(t) ? [] : n.match(xn) ?? [];
  if (o.length) {
    const d = o[0].replace(/\s/g, ""), g = d.replace(/^\$/, "").replace(/[%x×]$/i, ""), w = e.claims.filter((f) => B(f) && f.text.replace(/\s/g, "").includes(g)), c = e.claims.filter((f) => !B(f) && f.text.replace(/\s/g, "").includes(g));
    if (w.length) {
      const f = /patient records|patients|ehr/.test(t) && w.some((v) => /not clinical ehr records/i.test(v.text));
      return E("figure_check", [
        { type: "p", text: f ? `Not quite. ${d} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${d}:`, cites: A(w.slice(0, 1)) },
        { type: "claims", ids: A(w.slice(0, 3)) }
      ], { entities: F(w.map((v) => v.entity)), followups: H(e, w[0].entity) });
    }
    if (c.length)
      return E("figure_check", [
        { type: "p", text: `That figure is not verified, so I won't state it as fact. ${c[0].note ?? ""}` },
        { type: "note", tone: "warn", text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' }
      ], { entities: F(c.map((f) => f.entity)) });
    if (s.length || r.length)
      return E("figure_check", [{ type: "p", text: `${d} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities: s });
  }
  const h = r.map((d) => e.gap.get(d)).find((d) => d && !d.verify);
  if (h && /\b(did|does|has|have|is|was)\b/.test(t)) {
    const d = h.related.flatMap((g) => e.statableBySkill.get(g) ?? []);
    return E("unsupported_skill", [
      { type: "p", text: `No. ${h.statement}` },
      ...d.length ? [{ type: "claims", title: "Closest related evidence", ids: A(J(e, d, "engineer", 1, 4)) }] : []
    ], { followups: ["What is not demonstrated yet?", "Show me his backend engineering experience.", "Evaluate Rahul for an MLOps Engineer role"] });
  }
  return null;
}
function En(e, t) {
  const n = Ke(e, t), s = n.counts, r = [
    { type: "p", text: `I found ${n.requirements.length} requirements. ${s.direct} have direct evidence, ${s.related} related evidence, ${s.verification} need verification, and ${s.missing} are not currently demonstrated.` },
    { type: "coverage", analysis: n }
  ];
  return n.notes.forEach((l) => r.push({ type: "note", tone: "warn", text: l })), E("jd", r, {
    actions: [{ kind: "mode", label: "Show this on the portfolio", target: "transform" }, { kind: "mode", label: "Technical brief for this role", target: "brief" }],
    followups: ["What is the strongest evidence for this role?", "Challenge this evidence", "What is not demonstrated yet?"]
  });
}
function Xt(e, t, n) {
  const s = pe(e, t), r = s.counts, l = s.entities.slice(0, 3).map((o) => Re(e, o.id)), a = [
    { type: "p", text: `Evidence coverage for ${s.title}: ${r.direct} requirements with direct evidence, ${r.related} with related evidence, ${r.verification} needing verification, and ${r.missing} not currently demonstrated. The strongest evidence comes from ${Ci(l)}.` },
    { type: "coverage", analysis: s }
  ];
  return s.notes.forEach((o) => a.push({ type: "note", tone: "info", text: o })), E("role", a, {
    entities: s.entities.slice(0, 3).map((o) => o.id),
    actions: [
      { kind: "mode", label: "Show this on the portfolio", target: "transform", arg: t },
      { kind: "mode", label: "10-minute technical brief", target: "brief", arg: t },
      { kind: "mode", label: "Explore on the map", target: "map", arg: t }
    ],
    followups: [`Challenge the evidence for ${s.title}`, `What would an interviewer ask for ${s.title}?`, "What is not demonstrated yet?"]
  });
}
function Yt(e, [t, n], s) {
  const r = e.entity.get(t), l = e.entity.get(n), a = (f, v) => ({ label: f, values: [v(t), v(n)] }), o = (f) => F((e.statableByEntity.get(f) ?? []).flatMap((v) => v.tags)).filter((v) => !["python", "healthcare", "fintech", "product_judgment"].includes(v)).slice(0, 6).map((v) => Mt(e, v)).join(", ") || "—", h = (f) => (e.statableByEntity.get(f) ?? []).find((v) => v.tags.some((u) => ["eval_design", "llm_eval", "regression_testing"].includes(u)) && v.kind !== "limitation")?.text ?? "—", d = (f) => {
    const v = (e.statableByEntity.get(f) ?? []).find((u) => u.metrics?.length);
    return v ? v.metrics.map((u) => `${u.label}: ${u.value}`).join(" · ") : "—";
  }, g = (f) => ge(e, f)[0]?.text.replace(/^Limits:\s*/, "") ?? "—", w = (f) => (e.statableByEntity.get(f) ?? []).some((v) => v.tags.includes("deployment")) ? "Yes" : "No public deployment", c = F([t, n].flatMap((f) => (e.statableByEntity.get(f) ?? []).filter((v) => v.metrics?.length || v.kind === "limitation").slice(0, 3)));
  return E("compare", [
    { type: "p", text: `${r.short} vs ${l.short}, compared on the same evidence fields.` },
    { type: "compare", entities: [t, n], rows: [
      a("What it is", (f) => e.entity.get(f).tagline),
      a("When", (f) => e.entity.get(f).dates),
      a("Demonstrates", o),
      a("Evaluation evidence", h),
      a("Measured results", d),
      a("Deployed", w),
      a("Main limitation", g),
      a("Ownership", (f) => e.entity.get(f).ownership || "—")
    ] },
    { type: "claims", title: "Evidence used", ids: A(J(e, c, s, 3, 6)) }
  ], { entities: [t, n], actions: [...qe(e, t).slice(0, 1), ...qe(e, n).slice(0, 1)], followups: [...H(e, t).slice(0, 2), ...H(e, n).slice(0, 2)] });
}
function Zt(e, t, n, s) {
  const r = /* @__PURE__ */ new Map();
  for (const c of Je(e, t)) {
    const f = r.get(c.entity) ?? { s: 0, claims: [] };
    f.s += (c.strength === "public_artifact" ? 1 : 0.7) + (c.code?.length ? 0.4 : 0) + (c.kind === "metric" ? 0.2 : 0), f.claims.push(c), r.set(c.entity, f);
  }
  const l = [...r.entries()].filter(([c]) => c !== "imw").sort((c, f) => f[1].s - c[1].s);
  if (!l.length) return _t(e, t.map((c) => ({ id: c })), n, s);
  const [a, o] = l[0], h = e.entity.get(a), d = Mt(e, t[0]).toLowerCase(), g = o.claims.filter((c) => c.code?.length).length, w = l[1] ? ` The next strongest is ${Re(e, l[1][0])}.` : "";
  return E("strongest", [
    { type: "p", text: `The strongest evidence for ${d} is ${h.name}: ${o.claims.length} supporting claims, ${g} with linked code.${w}`, cites: A(o.claims.slice(0, 2)) },
    { type: "claims", ids: A(J(e, o.claims, n, 5, 5)) },
    ...e.archByEntity.has(a) ? [{ type: "xray", arch: e.archByEntity.get(a).id }] : []
  ], { entities: [a], actions: qe(e, a), followups: H(e, a) });
}
function _t(e, t, n, s) {
  const r = [], l = [], a = [], o = /* @__PURE__ */ new Set();
  for (const d of t.slice(0, 3)) {
    const g = te(e, d.id, { near: d.near });
    if (o.has(g.id)) continue;
    o.add(g.id);
    const w = g.entities.map((c) => Re(e, c));
    if (g.category === "direct") {
      const c = g.strength === "self_reported" ? " This evidence is self-reported employment experience; there is no public artifact." : "";
      r.push({ type: "p", text: `${V.direct}: ${g.label} appears in ${Ci(w.slice(0, 4))}.${c}`, cites: g.claims.slice(0, 2) }), r.push({ type: "claims", ids: A(J(e, g.claims.map((f) => e.claim.get(f)), n, 2, 5)) });
    } else g.category === "related" ? (r.push({ type: "p", text: `${V.related}: ${g.statement}`, cites: g.claims.slice(0, 1) }), r.push({ type: "claims", ids: g.claims.slice(0, 4) })) : g.category === "verification" ? r.push({ type: "p", text: `${V.verification}: ${g.statement ?? ""}` }) : r.push({ type: "gaps", items: [{ id: g.id, name: g.label, statement: g.statement ?? "", closest: g.entities }] });
    if (l.push(...g.entities), /where/.test(s)) for (const c of g.entities.slice(0, 3)) {
      const f = e.entity.get(c);
      f && a.push(jt(f));
    }
  }
  const h = F(l)[0];
  return E("skill", r, { entities: F(l), actions: a.length ? a : h ? qe(e, h) : [], followups: h ? H(e, h).slice(0, 3).concat(["What is not demonstrated yet?"]) : Te.slice(0, 4) });
}
function In(e, t, n, s) {
  const r = e.entity.get(t), l = e.statableByEntity.get(t) ?? [], a = e.archByEntity.get(t), o = e.failures.filter((f) => f.entity === t), h = e.decisions.filter((f) => f.entity === t), d = qe(e, t);
  if (M(n, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && a)
    return E("architecture", [
      { type: "p", text: `${a.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: "xray", arch: a.id }
    ], { entities: [t], actions: d, followups: H(e, t, ["architecture"]) });
  if (M(n, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && h.length)
    return E("decisions", [{ type: "decisions", ids: h.map((f) => f.id) }], { entities: [t], actions: d, followups: H(e, t, ["why"]) });
  if (M(n, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const f = ge(e, t), v = [];
    return o.length && v.push({ type: "failures", ids: o.map((u) => u.id) }), f.length && v.push({ type: "claims", title: "Stated limitations", ids: A(f) }), v.length || v.push({ type: "p", text: `The evidence database records no specific failure case for ${r.short}.` }), E("failures", v, { entities: [t], actions: [...e.attacks.some((u) => u.entity === t) ? [{ kind: "mode", label: "Try to break it", target: "lab", arg: t }] : [], ...d], followups: H(e, t, ["failure"]) });
  }
  if (M(n, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const f = l.filter((_) => _.tags.some((b) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(b))), v = [{ type: "claims", ids: A(J(e, f, "researcher", 7, 7)) }];
    t === "cliniq" && v.push({ type: "chart", chart: "cliniq" }), t === "voice" && v.push({ type: "chart", chart: "voice_quality" });
    const u = e.traces.find((_) => _.entity === t);
    return u && v.push({ type: "trace", id: u.id }), E("evaluation", v, { entities: [t], actions: [{ kind: "mode", label: "Open the proof lab", target: "lab", arg: t }, ...d], followups: H(e, t, ["evaluation"]) });
  }
  if (M(n, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const f = l.filter((v) => v.code?.length);
    return E("code", [
      { type: "p", text: `Code links are pinned to a specific commit, so line numbers do not drift.${r.repo ? "" : " This is employment work, so no source code is public."}` },
      { type: "claims", ids: A(J(e, f, "engineer", 8, 8)) }
    ], { entities: [t], actions: d, followups: H(e, t, ["code"]) });
  }
  if (M(n, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const f = ge(e, t), v = [{ type: "p", text: `Questions an interviewer could reasonably press on for ${r.short}:` }];
    return r.questions.forEach((u) => v.push({ type: "p", text: `• ${u}` })), f.length && v.push({ type: "claims", title: "Limitations the evidence already states", ids: A(f) }), h.length && v.push({ type: "decisions", ids: h.slice(0, 2).map((u) => u.id) }), E("challenge", v, { entities: [t], actions: d, followups: H(e, t, ["challenge"]) });
  }
  if (M(n, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/))
    return E("personally", [
      { type: "p", text: r.ownership || "The portfolio does not break down individual contributions for this item." },
      { type: "claims", ids: A(J(e, l, s, 4, 4)) }
    ], { entities: [t], actions: d, followups: H(e, t, ["personally"]) });
  if (M(n, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const f = l.filter((u) => u.tags.some((_) => ["rate_limiting", "caching", "deployment", "docker", "monitoring"].includes(_))), v = ["distributed_systems", "kubernetes"].map((u) => e.gap.get(u));
    return E("scale", [
      { type: "p", text: `What is implemented today for ${r.short}:` },
      f.length ? { type: "claims", ids: A(f.slice(0, 5)) } : { type: "p", text: "No scaling-related controls are recorded for this item." },
      { type: "gaps", items: v.map((u) => ({ id: u.id, name: u.name, statement: u.statement, closest: [] })) },
      { type: "note", tone: "info", text: "A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented." }
    ], { entities: [t], actions: d, followups: H(e, t, ["scale"]) });
  }
  if (n.length > 70) {
    const f = bi(e, n, { entities: [t], limit: 8 }).map((u) => u.claim).filter((u) => u.entity === t), v = ge(e, t).filter((u) => !f.includes(u));
    if (f.length)
      return E("focused", [
        { type: "p", text: `The evidence most relevant to this question about ${r.short}:`, cites: A(f.slice(0, 2)) },
        { type: "claims", ids: A(f.slice(0, 5)) },
        ...v.length ? [{ type: "claims", title: "Stated limitations", ids: A(v.slice(0, 2)) }] : []
      ], { entities: [t], actions: d, followups: H(e, t) });
  }
  const g = r.summaries[s] ?? r.tagline, w = J(e, l, s, s === "recruiter" ? 3 : 5, s === "recruiter" ? 3 : 5), c = [{ type: "entity", id: t }, { type: "p", text: g, cites: A(w.slice(0, 2)) }, { type: "claims", ids: A(w) }];
  if (s === "engineer" && a && c.push({ type: "xray", arch: a.id }), s === "researcher") {
    const f = ge(e, t);
    f.length && c.push({ type: "claims", title: "Stated limitations", ids: A(f) });
  }
  return s === "manager" && r.ownership && c.push({ type: "note", tone: "info", text: `Ownership: ${r.ownership}` }), E("entity", c, { entities: [t], actions: d, followups: H(e, t) });
}
function Sn(e, t, n = !1) {
  const r = n ? e.failures.map((l) => l.id) : {
    engineer: ["f.voice.bargein", "f.voice.artifacts", "f.cliniq.embedding"],
    recruiter: ["f.voice.bargein", "f.cliniq.embedding"],
    manager: ["f.voice.artifacts", "f.voice.incomplete", "f.voice.bargein"],
    founder: ["f.cliniq.revenue", "f.cliniq.embedding", "f.voice.bargein"],
    researcher: ["f.cliniq.embedding", "f.qml.speedup", "f.sssd.debug"]
  }[t].filter((l) => e.failures.some((a) => a.id === l));
  return E("failures", [
    { type: "p", text: "Failures found and fixed, each with how it was detected and what now prevents it:" },
    { type: "failures", ids: r }
  ], {
    entities: F(r.map((l) => e.failures.find((a) => a.id === l).entity)),
    actions: [{ kind: "mode", label: "Open the proof lab", target: "lab" }],
    followups: ["Show me the barge-in fix in code", "Show more failure cases", "How does he evaluate AI systems?"]
  });
}
function Mn(e, t) {
  const s = ["dia.no_llm_review", "dia.four_tier", "dia.calibration", "dia.entity_filter", "voice.bargein", "voice.gate", "cliniq.schema", "cliniq.workload", "sssd.encoder"].map((r) => e.claim.get(r)).filter(B);
  return E("beyond_wrappers", [
    { type: "p", text: "Work where a language model is one component, or absent entirely: deterministic review pipelines, classical classifiers with calibration, realtime audio engineering, database design, release gates, and a custom diffusion conditioning encoder." },
    { type: "claims", ids: A(t === "recruiter" ? s.slice(0, 5) : s) }
  ], { entities: F(s.map((r) => r.entity)), actions: [{ kind: "mode", label: "X-Ray the Drug Interaction Agent", target: "xray", arg: "dia" }], followups: ["Why keep label review free of an LLM?", "Show me the barge-in fix in code", "Show the architecture of ClinIQ"] });
}
function An(e, t) {
  const n = ["dia.shipped", "cliniq.delivery", "tifin.deploy", "tifin.reach", "imw.system"].map((s) => e.claim.get(s)).filter(B);
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
    { type: "gaps", items: ["kubernetes", "iac", "distributed_inference", "pretraining", "orchestration", "human_annotation", "online_experiments", "customer_deployments"].map((n) => e.gap.get(n)).map((n) => ({ id: n.id, name: n.name, statement: n.statement, closest: F(n.related.flatMap((s) => (e.statableBySkill.get(s) ?? []).map((r) => r.entity))).slice(0, 3) })) },
    { type: "note", tone: "info", text: `Also pending verification (not stated as fact): ${e.conflicts.filter((n) => !n.decision.startsWith("No conflict")).map((n) => n.label).slice(0, 5).join("; ")}.` }
  ], { followups: ["Evaluate Rahul for an MLOps Engineer role", "What is his strongest evidence overall?", "How does he evaluate AI systems?"] });
}
function jn(e) {
  const t = ["citizen.role", "tifin.role", "athena.role", "edu.ms"].map((n) => e.claim.get(n)).filter(B);
  return E("level", [{ type: "p", text: e.subject.level_note }, { type: "claims", ids: A(t) }], { followups: ["What has Rahul actually shipped?", "Evaluate Rahul for a Machine Learning Engineer I role"] });
}
const $i = [
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
  return $i.find(([t]) => t.test(e))?.[1] ?? [];
}
function Tn(e, t, n, s) {
  const r = $i.find(([h]) => h.test(t))[2], l = J(e, Je(e, n), s, s === "recruiter" ? 2 : 3, s === "recruiter" ? 6 : 9), a = F(l.map((h) => h.entity)), o = [{ type: "p", text: r, cites: A(l.slice(0, 2)) }, { type: "claims", ids: A(l) }];
  return n.includes("eval_design") && s !== "recruiter" && o.push({ type: "chart", chart: "cliniq" }), n.includes("rag") && a.includes("dia") && s === "engineer" && o.push({ type: "xray", arch: "arch.dia" }), n.includes("voice_ai") && o.push({ type: "trace", id: "t.voice.emergency" }), E("topic", o, {
    entities: a,
    actions: a.slice(0, 3).map((h) => jt(e.entity.get(h))),
    followups: a[0] ? H(e, a[0]).slice(0, 3).concat(a[1] ? [`Compare ${Re(e, a[0])} and ${Re(e, a[1])}`] : []) : Te.slice(0, 4)
  });
}
function Ln(e, t, n) {
  const s = bi(e, t, { limit: 6 });
  if (!s.length || s[0].score < 2)
    return E("no_evidence", [
      { type: "p", text: "The evidence database doesn't cover that. I only answer from verified material about Rahul's work, so here is what I can answer:" }
    ], { followups: Te });
  const r = J(e, s.map((a) => a.claim), n, 2, 5), l = r[0].entity;
  return E("retrieval", [
    { type: "p", text: "The closest verified evidence:", cites: A(r.slice(0, 1)) },
    { type: "claims", ids: A(r) }
  ], { entities: F(r.map((a) => a.entity)), actions: qe(e, l), followups: H(e, l).slice(0, 3), basis: { retrieved: s.map((a) => a.claim.id) } });
}
function Pn(e, t) {
  const n = ["dia.shipped", "voice.gate", "cliniq.comparison", "tifin.agents", "sssd.encoder"].map((s) => e.claim.get(s)).filter(B);
  return E("overview", [
    { type: "p", text: `${e.subject.name} is an early-career AI/ML engineer. The strongest inspectable evidence, one item per area:` },
    { type: "claims", ids: A(t === "recruiter" ? n.slice(0, 4) : n) },
    { type: "note", tone: "info", text: e.subject.level_note }
  ], {
    entities: F(n.map((s) => s.entity)),
    actions: [{ kind: "mode", label: "Explore the evidence map", target: "map" }, { kind: "mode", label: "Evaluate against a role", target: "role" }],
    followups: ["What has Rahul actually shipped?", "What failure did he find and fix?", "What is not demonstrated yet?"]
  });
}
function ei(e, t) {
  const n = pe(e, t), s = n.entities.slice(0, 3).map((a) => e.entity.get(a.id)).filter(Boolean), r = [{ type: "p", text: `Questions worth asking for ${n.title}, grounded in the evidence an interviewer would see:` }];
  for (const a of s) a.questions.slice(0, 2).forEach((o) => r.push({ type: "p", text: `• ${a.short}: ${o}` }));
  return n.requirements.filter((a) => a.category === "missing").slice(0, 2).forEach((a) => r.push({ type: "p", text: `• Gap: ${a.label}. How would you close it in your first months?` })), E("role_questions", r, { entities: s.map((a) => a.id), actions: [{ kind: "mode", label: "10-minute technical brief", target: "brief", arg: t }], followups: [`Challenge the evidence for ${n.title}`] });
}
function ti(e, t) {
  const n = pe(e, t), s = n.entities.slice(0, 3).map((o) => o.id), r = s.flatMap((o) => ge(e, o)).slice(0, 4), l = n.requirements.filter((o) => o.category === "direct" && o.strength === "self_reported").map((o) => o.label), a = [
    { type: "p", text: `The weakest points in the evidence for ${n.title}:` },
    { type: "gaps", items: n.requirements.filter((o) => o.category === "missing" || o.category === "verification").map((o) => ({ id: o.id, name: o.label, statement: o.statement ?? "", closest: o.entities.slice(0, 3) })) }
  ];
  return l.length && a.push({ type: "note", tone: "warn", text: `Supported only by self-reported employment experience (no public artifact): ${l.join(", ")}.` }), r.length && a.push({ type: "claims", title: "Limitations stated in the strongest projects", ids: A(r) }), n.notes.forEach((o) => a.push({ type: "note", tone: "info", text: o })), E("challenge", a, { entities: s, followups: [`What would an interviewer ask for ${n.title}?`, "What failure did he find and fix?"] });
}
function Ci(e) {
  return e.length <= 1 ? e[0] ?? "the portfolio" : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
const Wn = "https://astra6-interview-my-work.hf.space";
function Dn() {
  return (document.querySelector('meta[name="imw-api"]')?.content || Wn).replace(/\/$/, "");
}
async function Xe(e, t) {
  const n = new AbortController(), s = setTimeout(() => n.abort(), t.timeout);
  try {
    const r = await fetch(Dn() + e, { ...t, signal: n.signal, headers: { "Content-Type": "application/json", ...t.headers || {} } });
    if (!r.ok) throw Object.assign(new Error(`HTTP ${r.status}`), { status: r.status });
    return await r.json();
  } finally {
    clearTimeout(s);
  }
}
async function Bn(e) {
  e("checking");
  const t = (n) => e(n?.ai_enabled ? "ready" : "offline");
  try {
    t(await Xe("/api/health", { method: "GET", timeout: 4e3 }));
    return;
  } catch {
  }
  e("waking");
  try {
    t(await Xe("/api/health", { method: "GET", timeout: 45e3 }));
  } catch {
    e("offline");
  }
}
async function Hn(e, t, n, s, r) {
  const l = await Xe("/api/ask", {
    method: "POST",
    timeout: 3e4,
    body: JSON.stringify({ question: t, persona: n, history: s.slice(-3), role: r ?? null })
  }), a = l.sentences.flatMap((w) => w.cites), o = [...l.sentences.map((w) => w.text), l.hypothetical ?? ""].join(" ");
  if (!l.sentences.length || a.some((w) => !B(e.claim.get(w))) || xi.test(o))
    throw new Error("model answer failed client validation");
  const h = [];
  let d = { text: "", cites: [] };
  for (const w of l.sentences)
    d.text += (d.text ? " " : "") + w.text.trim(), d.cites.push(...w.cites), d.text.length > 320 && (h.push({ type: "p", text: d.text, cites: [...new Set(d.cites)] }), d = { text: "", cites: [] });
  d.text && h.push({ type: "p", text: d.text, cites: [...new Set(d.cites)] }), l.hypothetical && h.push({ type: "note", tone: "info", text: `Hypothetical, not implemented: ${l.hypothetical}` });
  const g = (l.gaps ?? []).map((w) => e.gap.get(w)).filter(Boolean);
  return g.length && h.push({ type: "gaps", items: g.map((w) => ({ id: w.id, name: w.name, statement: w.statement, closest: [] })) }), {
    blocks: h,
    followups: (l.followups ?? []).slice(0, 4),
    actions: [],
    engine: "model",
    intent: "model",
    entities: (l.entities ?? []).filter((w) => e.entity.has(w)),
    basis: { retrieved: l.retrieved ?? [...new Set(a)], checks: l.checks, model: l.model }
  };
}
async function qi(e) {
  const t = await Xe("/api/jd", { method: "POST", timeout: 25e3, body: JSON.stringify({ text: e.slice(0, 12e3) }) });
  return Array.isArray(t.requirements) ? t.requirements.filter((n) => typeof n == "string").slice(0, 30) : [];
}
const Ei = Ui(null), R = () => Gi(Ei), me = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function G(e, t = {}) {
  try {
    window.dispatchEvent(new CustomEvent("imw:event", { detail: { name: e, ...t } }));
  } catch {
  }
}
let $e = null;
const bt = [], Ye = /* @__PURE__ */ new Set(), N = (e, t, n) => {
  const s = document.createElement(e);
  return s.className = t, n && (s.textContent = n), s;
};
function Nn(e, t, n) {
  kt();
  const s = new Map(t.entities.map((b) => [b.id, b.score])), r = (b) => t.requirements.filter((k) => (k.category === "direct" || k.category === "related") && k.entities.includes(b)), l = document.getElementById("work"), a = l ? [...l.querySelectorAll(":scope > article.project")] : [];
  if (a.length && l) {
    $e = { parent: l, order: [...l.children], numbers: a.map((y) => [y.querySelector(".project-number"), y.querySelector(".project-number")?.textContent ?? ""]) };
    const b = (y) => e.entities.find((x) => x.anchor === `#${y.id}`)?.id ?? "", k = new Map(a.map((y) => [y, y.getBoundingClientRect()])), p = [...a].sort((y, x) => (s.get(b(x)) ?? 0) - (s.get(b(y)) ?? 0)), m = l.querySelector(":scope > .research");
    if (p.forEach((y, x) => {
      l.insertBefore(y, m);
      const $ = y.querySelector(".project-number");
      $ && ($.textContent = `${String(x + 1).padStart(2, "0")} —`);
    }), !me())
      for (const y of p) {
        const x = k.get(y), $ = y.getBoundingClientRect(), C = x.top - $.top;
        C && y.animate([{ transform: `translateY(${C}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
  }
  for (const b of e.entities) {
    if (b.id === "imw" || b.kind === "education") continue;
    const k = document.querySelector(b.anchor);
    if (!k || k.id === "work" || k.id === "experience") continue;
    const p = r(b.id);
    if (k.classList.add(p.length ? "imw-lens-hit" : "imw-lens-dim"), Ye.add(k), p.length) {
      const m = N("div", "imw-lens-tag");
      m.append(N("span", "imw-lens-tag-label", `✦ Evidence for ${t.title}`)), p.slice(0, 6).forEach((y) => m.append(N("span", `imw-lens-chip is-${y.category}`, y.label))), k.prepend(m), bt.push(m);
    }
  }
  const o = t.requirements.filter((b) => b.category === "direct").flatMap((b) => [b.label, ...e.skill.get(b.id)?.aliases ?? []]).map((b) => b.toLowerCase());
  document.querySelectorAll("#skills .skill").forEach((b) => {
    const k = b.textContent?.toLowerCase() ?? "";
    b.classList.add(o.some((p) => p.length > 2 && k.includes(p)) ? "imw-lens-hit" : "imw-lens-dim"), Ye.add(b);
  });
  const h = N("div", "imw-lens-bar");
  h.setAttribute("role", "region"), h.setAttribute("aria-label", "Role lens");
  const d = N("div", "imw-lens-head");
  d.append(N("span", "imw-lens-mark", "✦"), N("strong", "", `Viewing as: ${t.title}`));
  const g = N("div", "imw-lens-counts");
  ["direct", "related", "verification", "missing"].forEach((b) => g.append(N("span", `is-${b}`, `${t.counts[b]} ${V[b].toLowerCase()}`)));
  const w = t.requirements.filter((b) => b.category === "missing").map((b) => b.label), c = N("div", "imw-lens-missing", w.length ? `Not demonstrated: ${w.slice(0, 4).join(", ")}${w.length > 4 ? "…" : ""}` : "Every listed requirement has at least related evidence."), f = N("div", "imw-lens-actions"), v = N("button", "imw-lens-btn", "Open analysis"), u = N("button", "imw-lens-btn is-primary", "Restore portfolio");
  v.onclick = () => n.reopen(), u.onclick = () => {
    kt(), n.restore();
  }, f.append(v, u);
  const _ = N("div", "imw-lens-mid");
  _.append(g, c), h.append(d, _, f), document.body.append(h), bt.push(h), document.documentElement.classList.add("imw-lens"), requestAnimationFrame(() => (l ?? document.body).scrollIntoView({ behavior: me() ? "auto" : "smooth", block: "start" })), u.focus({ preventScroll: !0 });
}
function kt() {
  bt.splice(0).forEach((e) => e.remove()), Ye.forEach((e) => e.classList.remove("imw-lens-hit", "imw-lens-dim")), Ye.clear(), $e && ($e.order.forEach((e) => $e.parent.appendChild(e)), $e.numbers.forEach(([e, t]) => {
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
  n.scrollIntoView({ behavior: me() ? "auto" : "smooth", block: "start" }), n.classList.add("imw-flash"), setTimeout(() => n.classList.remove("imw-flash"), 2400), n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus({ preventScroll: !0 }), oe?.remove(), oe = N("button", "imw-return", "✦ Back to Interview My Work"), oe.onclick = () => {
    oe?.remove(), oe = null, t();
  }, document.body.append(oe), setTimeout(() => {
    oe?.remove(), oe = null;
  }, 2e4);
}
function Ii(e) {
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
function On({ id: e, compact: t }) {
  const { kb: n, setInspect: s, inspect: r } = R(), l = n.claim.get(e);
  if (!l) return null;
  const a = n.entity.get(l.entity), o = r?.kind === "claim" && r.id === e;
  return /* @__PURE__ */ i("li", { class: `imw-claim${o ? " is-on" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-claim-btn", onClick: () => s({ kind: "claim", id: e }), "aria-label": `View evidence: ${l.text}`, children: [
      /* @__PURE__ */ i(Ce, { cls: Ze(l) }),
      /* @__PURE__ */ i("span", { class: "imw-claim-text", children: l.text })
    ] }),
    !t && /* @__PURE__ */ i("div", { class: "imw-claim-meta", children: [
      /* @__PURE__ */ i("span", { children: a?.short }),
      /* @__PURE__ */ i("span", { class: `imw-st ${Ze(l)}`, children: Ii(l) }),
      l.code?.length ? /* @__PURE__ */ i("a", { href: l.code[0].url, target: "_blank", rel: "noopener", class: "imw-mini-link", children: "Code ↗" }) : null,
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => s({ kind: "claim", id: e }), children: "Evidence" })
    ] })
  ] });
}
function X({ ids: e, title: t, compact: n }) {
  return e.length ? /* @__PURE__ */ i("div", { class: "imw-claims", children: [
    t && /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: t }),
    /* @__PURE__ */ i("ul", { children: e.map((s) => /* @__PURE__ */ i(On, { id: s, compact: n }, s)) })
  ] }) : null;
}
function Ve({ a: e }) {
  const { go: t, jump: n, ask: s, toggleLens: r, coverage: l, kb: a } = R();
  if (e.kind === "url") {
    const h = e.target.startsWith("mailto:") || e.target.includes("linkedin");
    return /* @__PURE__ */ i("a", { class: "imw-btn", href: e.target, target: e.target.startsWith("mailto:") ? void 0 : "_blank", rel: "noopener", onClick: () => h && G("contact_clicked_from_ai"), children: [
      e.label,
      " ",
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: "↗" })
    ] });
  }
  return /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => {
    if (e.kind === "anchor") return n(e.target);
    if (e.kind === "ask") return s(e.target);
    if (e.target === "transform")
      return r(!0, e.arg && e.arg !== l?.roleId ? pe(a, e.arg) : void 0);
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
function Un({ id: e }) {
  const { kb: t, setInspect: n } = R(), s = t.entity.get(e);
  return s ? /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n({ kind: "entity", id: e }), children: s.short }) : null;
}
const De = ["direct", "related", "verification", "missing"], Vn = { direct: "direct", related: "related", verification: "to verify", missing: "not shown" };
function nt({ counts: e, compact: t }) {
  const n = De.reduce((s, r) => s + e[r], 0) || 1;
  return /* @__PURE__ */ i("div", { class: `imw-covbar${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-covbar-track", role: "img", "aria-label": De.map((s) => `${e[s]} ${V[s]}`).join(", "), children: De.filter((s) => e[s]).map((s) => /* @__PURE__ */ i("span", { class: `imw-covbar-seg ${fe[s]}`, style: { flexGrow: e[s] / n }, title: `${e[s]} · ${V[s]}` }, s)) }),
    /* @__PURE__ */ i("ul", { class: "imw-covbar-legend", children: De.map((s) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${fe[s]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("b", { children: e[s] }),
      " ",
      t ? Vn[s] : V[s]
    ] }, s)) })
  ] });
}
function Si({ analysis: e, max: t = 16 }) {
  const { kb: n, setInspect: s } = R(), [r, l] = I(null), a = e.requirements.slice(0, t), o = e.entities.slice(0, 7).map((p) => p.id), h = 26, d = 18, g = 640, w = d * 2 + Math.max(a.length, o.length) * h, c = (p) => d + (p + 0.5) * h * (Math.max(a.length, o.length) / Math.max(o.length, 1)), f = (p) => d + (p + 0.5) * h, v = 232, u = 408, _ = a.flatMap(
    (p, m) => p.category === "direct" || p.category === "related" ? p.entities.filter((y) => o.includes(y)).slice(0, 3).map((y) => ({ r: p.id, e: y, cat: p.category, y1: f(m), y2: c(o.indexOf(y)) })) : []
  ), b = (p, m) => !r || r === p || r === m, k = !me();
  return /* @__PURE__ */ i("figure", { class: "imw-map", children: [
    /* @__PURE__ */ i("svg", { viewBox: `0 0 ${g} ${w}`, role: "group", "aria-label": "Requirement to evidence map", class: k ? "is-anim" : "", children: [
      _.map((p, m) => /* @__PURE__ */ i(
        "path",
        {
          d: `M${v},${p.y1} C${v + 90},${p.y1} ${u - 90},${p.y2} ${u},${p.y2}`,
          class: `imw-link ${p.cat === "direct" ? "is-direct" : "is-related"}${b(p.r, p.e) ? " is-lit" : " is-dim"}`,
          style: { animationDelay: `${Math.min(m * 25, 700)}ms` }
        },
        m
      )),
      a.map((p, m) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-req ${fe[p.category]}${r && r !== p.id ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${p.label}: ${V[p.category]}`,
          onMouseEnter: () => l(p.id),
          onMouseLeave: () => l(null),
          onFocus: () => l(p.id),
          onBlur: () => l(null),
          onClick: () => s({ kind: "req", req: p }),
          onKeyDown: (y) => (y.key === "Enter" || y.key === " ") && (y.preventDefault(), s({ kind: "req", req: p })),
          children: [
            /* @__PURE__ */ i("rect", { x: 0, y: f(m) - h / 2, width: v + 6, height: h, class: "imw-hit" }),
            /* @__PURE__ */ i("text", { x: v - 12, y: f(m) + 4, "text-anchor": "end", children: zn(p.label, 30) }),
            /* @__PURE__ */ i("circle", { cx: v, cy: f(m), r: 4.5 })
          ]
        },
        p.id
      )),
      o.map((p, m) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-map-ent${r && r !== p && !_.some((y) => y.e === p && y.r === r) ? " is-dim" : ""}`,
          tabIndex: 0,
          role: "button",
          "aria-label": n.entity.get(p)?.name,
          onMouseEnter: () => l(p),
          onMouseLeave: () => l(null),
          onFocus: () => l(p),
          onBlur: () => l(null),
          onClick: () => s({ kind: "entity", id: p }),
          onKeyDown: (y) => (y.key === "Enter" || y.key === " ") && (y.preventDefault(), s({ kind: "entity", id: p })),
          children: [
            /* @__PURE__ */ i("rect", { x: u - 6, y: c(m) - h / 2, width: g - u + 6, height: h, class: "imw-hit" }),
            /* @__PURE__ */ i("circle", { cx: u, cy: c(m), r: 5.5 }),
            /* @__PURE__ */ i("text", { x: u + 14, y: c(m) + 4, children: n.entity.get(p)?.short })
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
const zn = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e, ii = [
  { key: "precision", label: "Precision", cls: "viz-1" },
  { key: "recall", label: "Recall", cls: "viz-2" },
  { key: "f1", label: "F1", cls: "viz-3" }
];
function Mi() {
  const { kb: e } = R(), t = e.datasets.cliniq_confusion, [n, s] = I(null), [r, l] = I(!1), a = ue(() => t.methods.map((_) => {
    const b = _.tp / (_.tp + _.fp), k = _.tp / (_.tp + _.fn);
    return { ..._, precision: b, recall: k, f1: 2 * b * k / (b + k) };
  }), [t]), o = 560, h = 230, d = 36, g = 30, w = 12, c = (o - d - 12) / a.length, f = 22, v = 2, u = (_) => w + (1 - _) * (h - w - g);
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: [
        "ClinIQ detectors on ",
        t.sample
      ] }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l(!r), "aria-pressed": r, children: r ? "Chart view" : "Table view" })
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
      /* @__PURE__ */ i("tbody", { children: a.map((_) => /* @__PURE__ */ i("tr", { children: [
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
        a.map((_, b) => {
          const k = d + b * c + (c - (f * 3 + v * 2)) / 2;
          return /* @__PURE__ */ i("g", { children: [
            ii.map((p, m) => {
              const y = _[p.key], x = k + m * (f + v);
              return /* @__PURE__ */ i(
                "path",
                {
                  class: `imw-bar ${p.cls}`,
                  d: Qn(x, u(y), f, u(0) - u(y)),
                  onMouseEnter: () => s({ x: (x + f / 2) / o, y: u(y) / h, text: `${_.label} · ${p.label} ${y.toFixed(3)}` })
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
    /* @__PURE__ */ i("ul", { class: "imw-legend-row", children: ii.map((_) => /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("i", { class: `imw-swatch ${_.cls}`, "aria-hidden": "true" }),
      _.label
    ] }, _.key)) }),
    /* @__PURE__ */ i("figcaption", { class: "imw-help", children: [
      "Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. ",
      t.caveat
    ] })
  ] });
}
function Qn(e, t, n, s) {
  const r = Math.min(4, s / 2, n / 2);
  return s <= 0 ? "" : `M${e},${t + s} V${t + r} Q${e},${t} ${e + r},${t} H${e + n - r} Q${e + n},${t} ${e + n},${t + r} V${t + s} Z`;
}
function Tt() {
  const { kb: e } = R(), t = e.datasets.voice_quality, n = [...t.rows].sort((c, f) => f[3] - c[3]), [s, r] = I(null), l = 560, a = 20, o = 150, h = 40, d = n.length * a + 24, g = (c) => o + c / 60 * (l - o - h), w = n.reduce((c, f) => c + f[3], 0) / n.length;
  return /* @__PURE__ */ i("figure", { class: "imw-chart", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: /* @__PURE__ */ i("strong", { children: "Mid-call silence per recorded call (%)" }) }),
    /* @__PURE__ */ i("div", { class: "imw-chart-plot", onMouseLeave: () => r(null), children: [
      /* @__PURE__ */ i("svg", { viewBox: `0 0 ${l} ${d}`, role: "img", "aria-label": `Mid-call silence per call; average ${w.toFixed(1)} percent`, children: [
        [0, 20, 40, 60].map((c) => /* @__PURE__ */ i("g", { class: "imw-grid", children: [
          /* @__PURE__ */ i("line", { x1: g(c), x2: g(c), y1: 0, y2: d - 18 }),
          /* @__PURE__ */ i("text", { x: g(c), y: d - 4, "text-anchor": "middle", children: c })
        ] }, c)),
        n.map((c, f) => {
          const v = f * a + 3;
          return /* @__PURE__ */ i("g", { onMouseEnter: () => r({ y: (v + a / 2) / d, text: `${c[0]} · silence ${c[3]}% · talk-over ${c[2]}% · longest gap ${c[4]}s` }), children: [
            /* @__PURE__ */ i("rect", { class: "imw-hit", x: 0, y: v - 2, width: l, height: a }),
            /* @__PURE__ */ i("text", { class: "imw-axis-label", x: o - 8, y: v + 11, "text-anchor": "end", children: c[0].replace(/_/g, " ") }),
            /* @__PURE__ */ i("path", { class: "imw-bar viz-1", d: Gn(o, v + 2, g(c[3]) - o, a - 8) })
          ] }, c[0]);
        }),
        /* @__PURE__ */ i("line", { class: "imw-ref", x1: g(w), x2: g(w), y1: 0, y2: d - 18 }),
        /* @__PURE__ */ i("text", { class: "imw-ref-label", x: g(w) + 4, y: 10, children: [
          "avg ",
          w.toFixed(1),
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
const pt = 198, Be = 96, Se = 174, ce = 56, xe = 28, ni = (e, t) => e.length > t ? e.slice(0, t - 1) + "…" : e;
function Ai({ arch: e, selected: t, onSelect: n, scan: s = !0 }) {
  const r = ne(null), [l, a] = I(!1), [o, h] = I(!1);
  Qi(() => {
    const u = r.current;
    if (!u) return;
    const _ = new ResizeObserver(([b]) => a(b.contentRect.width < 560));
    return _.observe(u), () => _.disconnect();
  }, []), U(() => {
    if (!s || me()) return;
    h(!0);
    const u = setTimeout(() => h(!1), 1300);
    return () => clearTimeout(u);
  }, [e.id, s]);
  const d = Math.max(...e.nodes.map((u) => u.col)) + 1, g = Math.max(...e.nodes.map((u) => u.row)) + 1, w = xe * 2 + d * pt - (pt - Se), c = xe * 2 + g * Be - (Be - ce) + (e.lanes.length ? 14 : 0), f = (u) => {
    const _ = e.nodes.find((b) => b.id === u);
    return { x: xe + _.col * pt, y: xe + (e.lanes.length ? 14 : 0) + _.row * Be };
  }, v = (u, _) => {
    (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n(_));
  };
  if (l) {
    const u = new Map(e.nodes.map((p) => [p.id, 0]));
    e.edges.forEach(([, p]) => u.set(p, (u.get(p) ?? 0) + 1));
    const _ = (p, m) => p.col - m.col || p.row - m.row, b = e.nodes.filter((p) => !u.get(p.id)).sort(_), k = [];
    for (; b.length; ) {
      const p = b.shift();
      k.push(p);
      const m = e.edges.filter(([y]) => y === p.id).map(([, y]) => y).filter((y) => (u.set(y, u.get(y) - 1), u.get(y) === 0)).map((y) => e.nodes.find((x) => x.id === y)).sort(_);
      b.unshift(...m);
    }
    return e.nodes.forEach((p) => {
      k.includes(p) || k.push(p);
    }), /* @__PURE__ */ i("div", { ref: r, class: "imw-arch-stack", children: k.map((p, m) => /* @__PURE__ */ i("div", { class: "imw-arch-step", children: [
      m > 0 && /* @__PURE__ */ i("span", { class: "imw-arch-arrow", "aria-hidden": "true", children: "↓" }),
      /* @__PURE__ */ i("button", { class: `imw-arch-card${t === p.id ? " is-on" : ""}`, onClick: () => n(p.id), "aria-pressed": t === p.id, children: [
        /* @__PURE__ */ i("strong", { children: p.label }),
        /* @__PURE__ */ i("small", { children: p.sub })
      ] })
    ] }, p.id)) });
  }
  return /* @__PURE__ */ i("div", { ref: r, class: `imw-arch${o ? " is-scanning" : ""}`, children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${w} ${c}`, role: "group", "aria-label": `${e.title} architecture`, children: [
    /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("marker", { id: `ah-${e.id}`, viewBox: "0 0 8 8", refX: "7", refY: "4", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse", children: /* @__PURE__ */ i("path", { d: "M0,0 L8,4 L0,8 z", class: "imw-arrowhead" }) }) }),
    e.lanes.map((u) => /* @__PURE__ */ i("text", { class: "imw-lane", x: xe, y: xe + u.row * Be + 6, children: u.label.toUpperCase() }, u.row)),
    e.edges.map(([u, _]) => {
      const b = f(u), k = f(_);
      let p;
      if (k.x > b.x) {
        const y = b.x + Se, x = b.y + ce / 2, $ = k.x - 4, C = k.y + ce / 2, S = (y + $) / 2;
        p = `M${y},${x} C${S},${x} ${S},${C} ${$},${C}`;
      } else if (k.x < b.x) {
        const y = b.x, x = b.y + ce / 2, $ = k.x + Se + 4, C = k.y + ce / 2, S = (y + $) / 2;
        p = `M${y},${x} C${S},${x} ${S},${C} ${$},${C}`;
      } else {
        const y = k.y > b.y, x = b.x + Se / 2, $ = y ? b.y + ce : b.y, C = y ? k.y - 4 : k.y + ce + 4;
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
          onKeyDown: (b) => v(b, u.id),
          children: [
            /* @__PURE__ */ i("rect", { width: Se, height: ce, rx: 4 }),
            /* @__PURE__ */ i("text", { x: 12, y: 24, class: "imw-node-label", children: ni(u.label, 22) }),
            /* @__PURE__ */ i("text", { x: 12, y: 42, class: "imw-node-sub", children: ni(u.sub, 25) })
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
function ji({ id: e, compact: t }) {
  const { kb: n, go: s } = R(), r = n.traces.find((w) => w.id === e), [l, a] = I(t ? 0 : 1 / 0), o = ne();
  if (U(() => () => clearInterval(o.current), []), !r) return null;
  if (r.dataset === "dia_regression") return /* @__PURE__ */ i(Kn, {});
  const h = t ? r.steps.slice(0, 4) : r.steps, d = () => {
    if (G("replay_played", { trace: r.id }), me()) {
      a(1 / 0);
      return;
    }
    a(0), clearInterval(o.current);
    let w = 0;
    o.current = window.setInterval(() => {
      w++, a(w), w >= h.length && clearInterval(o.current);
    }, 520);
  }, g = l === 1 / 0 ? h.length : l;
  return /* @__PURE__ */ i("figure", { class: `imw-trace${t ? " is-compact" : ""}`, children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: r.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: d, "aria-label": `Replay ${r.title}`, children: "▶ Replay" }),
        t && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => s("lab", r.id), children: "Open in proof lab →" })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: r.summary }),
    /* @__PURE__ */ i("ol", { class: "imw-steps", "aria-live": "polite", children: h.map((w, c) => /* @__PURE__ */ i("li", { class: `imw-step is-${w.kind}${c < g ? " is-shown" : ""}`, "aria-hidden": c >= g, children: [
      /* @__PURE__ */ i("span", { class: "imw-step-kind", children: w.label }),
      w.quote ? /* @__PURE__ */ i("q", { children: w.quote }) : /* @__PURE__ */ i("span", { children: w.body }),
      w.status && /* @__PURE__ */ i("span", { class: `imw-verdict is-${w.status}`, children: w.status === "pass" ? "✓ PASS" : w.status === "fail" ? "✕ FAIL" : "! REVIEW" })
    ] }, c)) }),
    t && r.steps.length > h.length && /* @__PURE__ */ i("p", { class: "imw-help", children: [
      r.steps.length - h.length,
      " more steps in the full replay."
    ] })
  ] });
}
function Kn() {
  const { kb: e } = R(), t = e.datasets.dia_regression, [n, s] = I(t.rows.length), r = ne();
  U(() => () => clearInterval(r.current), []);
  const l = () => {
    if (G("replay_played", { trace: "t.dia.regression" }), me()) {
      s(t.rows.length);
      return;
    }
    s(0), clearInterval(r.current);
    let o = 0;
    r.current = window.setInterval(() => {
      o++, s(o), o >= t.rows.length && clearInterval(r.current);
    }, 70);
  }, a = t.rows.slice(0, n).filter((o) => o[1] === o[2]).length;
  return /* @__PURE__ */ i("figure", { class: "imw-trace", children: [
    /* @__PURE__ */ i("div", { class: "imw-chart-head", children: [
      /* @__PURE__ */ i("strong", { children: "24-pair severity regression · retriever + classifier path" }),
      /* @__PURE__ */ i("button", { class: "imw-btn", onClick: l, children: "▶ Re-run from the saved record" })
    ] }),
    /* @__PURE__ */ i("p", { class: "imw-help", "aria-live": "polite", children: n < t.rows.length ? `Checking ${n}/${t.rows.length}…` : `${a}/${t.rows.length} severities match the authored labels.` }),
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
function Ti({ id: e }) {
  const { kb: t, go: n } = R(), s = t.attacks.find((o) => o.id === e), [r, l] = I(!1);
  if (!s) return null;
  const a = { held: "✓ Held", flagged: "! Flagged for review", fixed: "✓ Fixed" }[s.result];
  return /* @__PURE__ */ i("article", { class: `imw-attack is-${s.result}${r ? " is-open" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-attack-head", "aria-expanded": r, onClick: () => l(!r), children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: t.entity.get(s.entity)?.short }),
      /* @__PURE__ */ i("strong", { children: s.label }),
      /* @__PURE__ */ i("span", { class: `imw-verdict is-${s.result === "flagged" ? "warn" : "pass"}`, children: a })
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
function Jn(e, t, n, s, r, l, a) {
  const o = e / (e + n), h = t / (t + s), d = r * l * o, g = r * (1 - l) * h, w = d + g;
  return { trueAlerts: d, falseAlerts: g, missed: r * l * (1 - o), reviews: w, hours: w * a / 60, precision: w ? d / w : null };
}
function Xn() {
  const { kb: e } = R(), t = e.datasets.cliniq_confusion, [n, s] = I(1e4), [r, l] = I(5), [a, o] = I(3), h = ue(() => t.methods.map((w) => ({ m: w, r: Jn(w.tp, w.fp, w.fn, w.tn, n, r / 100, a) })), [t, n, r, a]), d = Math.max(...h.map((w) => w.r.hours), 1), g = (w) => w.toLocaleString(void 0, { maximumFractionDigits: 0 });
  return /* @__PURE__ */ i("div", { class: "imw-workload", children: [
    /* @__PURE__ */ i("div", { class: "imw-sliders", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Reviews per month ",
          /* @__PURE__ */ i("b", { children: g(n) })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1e3, max: 1e5, step: 1e3, value: n, onInput: (w) => s(+w.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Prevalence of true signals ",
          /* @__PURE__ */ i("b", { children: [
            r,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 30, step: 1, value: r, onInput: (w) => l(+w.target.value) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { children: [
          "Minutes per human review ",
          /* @__PURE__ */ i("b", { children: a })
        ] }),
        /* @__PURE__ */ i("input", { type: "range", min: 1, max: 15, step: 1, value: a, onInput: (w) => o(+w.target.value) })
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
      /* @__PURE__ */ i("tbody", { children: h.map(({ m: w, r: c }) => /* @__PURE__ */ i("tr", { children: [
        /* @__PURE__ */ i("th", { scope: "row", children: w.label }),
        /* @__PURE__ */ i("td", { children: g(c.reviews) }),
        /* @__PURE__ */ i("td", { children: g(c.trueAlerts) }),
        /* @__PURE__ */ i("td", { children: g(c.missed) }),
        /* @__PURE__ */ i("td", { children: c.precision === null ? "—" : c.precision.toFixed(2) }),
        /* @__PURE__ */ i("td", { class: "imw-barcell", children: [
          /* @__PURE__ */ i("span", { class: "imw-inline-bar viz-2", style: { width: `${c.hours / d * 100}%` }, "aria-hidden": "true" }),
          /* @__PURE__ */ i("b", { children: g(c.hours) })
        ] })
      ] }, w.id)) })
    ] }) }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Same formula as ClinIQ's ",
      /* @__PURE__ */ i("code", { children: "estimate_workload()" }),
      ", fed the saved confusion counts. At low prevalence, the embedding detector's false positives dominate reviewer time. ",
      t.caveat
    ] }),
    /* @__PURE__ */ i(X, { ids: ["cliniq.workload"], compact: !0 })
  ] });
}
function Yn() {
  const [e, t] = I(null);
  if (U(() => {
    fetch(Ri("evaluation-report.json")).then((r) => r.ok ? r.json() : null).then(t).catch(() => t(null));
  }, []), !e) return null;
  const n = e.suites.reduce((r, l) => r + l.passed, 0), s = e.suites.reduce((r, l) => r + l.total, 0);
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
function Zn() {
  const { kb: e, modeArg: t } = R(), n = e.traces.find((a) => a.id === t)?.id ?? "t.voice.emergency", [s, r] = I(n);
  U(() => {
    e.traces.some((a) => a.id === t) && r(t);
  }, [t]);
  const l = e.attacks.filter((a) => !t || !e.entity.has(t) || a.entity === t);
  return /* @__PURE__ */ i("div", { class: "imw-view", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Proof lab" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Don't take the write-up's word for it." }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Replays use the recorded transcripts, grades and records from the repositories; nothing here is simulated. The calculator runs the project's own formula on its saved results." })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Replay a recorded run" }),
      /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "Recorded runs", children: e.traces.map((a) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": s === a.id, class: s === a.id ? "is-on" : "", onClick: () => r(a.id), children: a.title }, a.id)) }),
      /* @__PURE__ */ i(ji, { id: s }, s)
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Try to break it" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Adversarial and edge cases, what the system did, and the test that keeps it that way." }),
      /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: l.map((a) => /* @__PURE__ */ i(Ti, { id: a.id }, a.id)) })
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Run the numbers · ClinIQ review workload" }),
      /* @__PURE__ */ i(Xn, {})
    ] }),
    /* @__PURE__ */ i("section", { class: "imw-lab-section", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Measured from the audio · Voice QA Harness" }),
      /* @__PURE__ */ i(Tt, {})
    ] }),
    /* @__PURE__ */ i(Yn, {})
  ] });
}
function es({ a: e }) {
  const { setInspect: t, ask: n } = R();
  return /* @__PURE__ */ i("div", { class: "imw-answer", children: [
    /* @__PURE__ */ i("div", { class: "imw-answer-head", children: [
      /* @__PURE__ */ i("span", { class: `imw-engine is-${e.engine}`, children: e.engine === "model" ? "Claude · validated" : "Evidence engine" }),
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => t({ kind: "basis", retrieved: e.basis?.retrieved ?? [], checks: e.basis?.checks, model: e.basis?.model, engine: e.engine }), children: "Why this answer?" }),
      e.refined && /* @__PURE__ */ i("span", { class: "imw-help", children: "Requirements refined by AI parsing" })
    ] }),
    e.blocks.map((s, r) => /* @__PURE__ */ i(ts, { b: s }, r)),
    e.actions.length > 0 && /* @__PURE__ */ i("div", { class: "imw-actions", children: e.actions.map((s, r) => /* @__PURE__ */ i(Ve, { a: s }, r)) }),
    e.followups.length > 0 && /* @__PURE__ */ i("div", { class: "imw-followups", "aria-label": "Suggested follow-up questions", children: e.followups.map((s) => /* @__PURE__ */ i("button", { class: "imw-chip", onClick: () => n(s), children: s }, s)) })
  ] });
}
function ts({ b: e }) {
  const t = R(), { kb: n, setInspect: s, go: r } = t;
  switch (e.type) {
    case "p":
      return /* @__PURE__ */ i("p", { class: "imw-p", children: [
        e.text,
        e.cites?.map((l, a) => /* @__PURE__ */ i("button", { class: "imw-cite", onClick: () => s({ kind: "claim", id: l }), "aria-label": `Evidence ${a + 1}: ${n.claim.get(l)?.text ?? l}`, children: a + 1 }, l))
      ] });
    case "note":
      return /* @__PURE__ */ i("p", { class: `imw-note${e.tone === "warn" ? " is-warn" : ""}`, children: e.text });
    case "claims":
      return /* @__PURE__ */ i(X, { ids: e.ids, title: e.title });
    case "entity": {
      const l = n.entity.get(e.id);
      return l ? /* @__PURE__ */ i("div", { class: "imw-entity", children: [
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: [
          l.kind,
          " · ",
          l.dates
        ] }),
        /* @__PURE__ */ i("h3", { children: l.name }),
        /* @__PURE__ */ i("p", { class: "imw-help", children: l.role ?? l.tagline })
      ] }) : null;
    }
    case "coverage":
      return /* @__PURE__ */ i("div", { class: "imw-coverage-inline", children: [
        /* @__PURE__ */ i(nt, { counts: e.analysis.counts }),
        /* @__PURE__ */ i(Si, { analysis: e.analysis, max: 12 }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
          t.setCoverage(e.analysis), r("role");
        }, children: "Open the full analysis →" })
      ] });
    case "xray": {
      const l = n.architectures.find((a) => a.id === e.arch);
      return l ? /* @__PURE__ */ i("div", { class: "imw-xray-inline", children: [
        /* @__PURE__ */ i(Ai, { arch: l, scan: !1, onSelect: (a) => s({ kind: "node", arch: l.id, node: a }) }),
        /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => r("xray", l.entity), children: "Open X-Ray view →" })
      ] }) : null;
    }
    case "failures":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((l) => /* @__PURE__ */ i(Lt, { id: l }, l)) });
    case "decisions":
      return /* @__PURE__ */ i("div", { class: "imw-stack", children: e.ids.map((l) => /* @__PURE__ */ i(Pt, { id: l }, l)) });
    case "compare":
      return /* @__PURE__ */ i("div", { class: "imw-table-wrap", children: /* @__PURE__ */ i("table", { class: "imw-table imw-compare", children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "col", children: /* @__PURE__ */ i("span", { class: "sr-only", children: "Field" }) }),
          e.entities.map((l) => /* @__PURE__ */ i("th", { scope: "col", children: n.entity.get(l)?.short }, l))
        ] }) }),
        /* @__PURE__ */ i("tbody", { children: e.rows.map((l) => /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { scope: "row", children: l.label }),
          l.values.map((a, o) => /* @__PURE__ */ i("td", { children: a }, o))
        ] }, l.label)) })
      ] }) });
    case "gaps":
      return /* @__PURE__ */ i("ul", { class: "imw-gaps", children: e.items.map((l) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-cat cat-missing", children: V.missing }),
        /* @__PURE__ */ i("strong", { children: l.name }),
        /* @__PURE__ */ i("p", { children: l.statement }),
        l.closest.length > 0 && /* @__PURE__ */ i("div", { class: "imw-row", children: [
          /* @__PURE__ */ i("span", { class: "imw-help", children: "Closest:" }),
          l.closest.map((a) => /* @__PURE__ */ i(Un, { id: a }, a))
        ] })
      ] }, l.id)) });
    case "chart":
      return e.chart === "cliniq" ? /* @__PURE__ */ i(Mi, {}) : /* @__PURE__ */ i(Tt, {});
    case "trace":
      return /* @__PURE__ */ i(ji, { id: e.id, compact: !0 });
  }
}
function Lt({ id: e, open: t = !1 }) {
  const { kb: n } = R(), s = n.failures.find((o) => o.id === e), [r, l] = I(t);
  if (!s) return null;
  const a = [["Problem", s.problem], ["Detection", s.detection], ["Diagnosis", s.diagnosis], ["Fix", s.fix], ["Prevention", s.prevention], ["Measured", s.measurement]];
  return /* @__PURE__ */ i("article", { class: `imw-story${r ? " is-open" : ""}`, children: [
    /* @__PURE__ */ i("button", { class: "imw-story-head", "aria-expanded": r, onClick: () => l(!r), children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: [
        "Failure · ",
        n.entity.get(s.entity)?.short
      ] }),
      /* @__PURE__ */ i("strong", { children: s.title }),
      /* @__PURE__ */ i("span", { class: "imw-help", children: r ? "Hide" : "Problem → detection → fix → prevention" })
    ] }),
    r && /* @__PURE__ */ i("div", { class: "imw-story-body", children: [
      /* @__PURE__ */ i("ol", { class: "imw-flow", children: a.map(([o, h]) => /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("strong", { children: o }),
        /* @__PURE__ */ i("span", { children: h })
      ] }, o)) }),
      /* @__PURE__ */ i(Ee, { refs: s.code }),
      /* @__PURE__ */ i(X, { ids: s.claims, title: "Evidence", compact: !0 })
    ] })
  ] });
}
function Pt({ id: e }) {
  const { kb: t } = R(), n = t.decisions.find((s) => s.id === e);
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
function is({ analysis: e }) {
  const { kb: t, setInspect: n } = R();
  return /* @__PURE__ */ i("div", { class: "imw-reqgroups", children: ["direct", "related", "verification", "missing"].map((r) => {
    const l = e.requirements.filter((a) => a.category === r);
    return l.length ? /* @__PURE__ */ i("section", { children: [
      /* @__PURE__ */ i("h4", { class: `imw-cat ${fe[r]}`, children: [
        V[r],
        " · ",
        l.length
      ] }),
      /* @__PURE__ */ i("ul", { class: "imw-reqs", children: l.map((a) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: a }), children: [
        /* @__PURE__ */ i("i", { class: `imw-cat-dot ${fe[a.category]}`, "aria-hidden": "true" }),
        /* @__PURE__ */ i("span", { children: [
          a.label,
          a.priority === "preferred" ? /* @__PURE__ */ i("em", { children: " · preferred" }) : null,
          a.strength === "self_reported" ? /* @__PURE__ */ i("em", { children: " · self-reported" }) : null
        ] }),
        /* @__PURE__ */ i("small", { children: a.entities.length ? a.entities.slice(0, 3).map((o) => t.entity.get(o)?.short).join(" · ") : a.statement })
      ] }) }, a.id)) })
    ] }, r) : null;
  }) });
}
const ns = [
  { q: "What has Rahul actually shipped?" },
  { q: "Show me his strongest RAG work." },
  { q: "How does he evaluate AI systems?" },
  { q: "What has he built beyond LLM wrappers?" },
  { q: "Show me his backend engineering experience." },
  { q: "What failure did he find and fix?" },
  { q: "Evaluate Rahul for a role", mode: "role" },
  { q: "Paste a job description", mode: "jd" }
];
function ss({ turns: e }) {
  const { kb: t, ask: n, go: s, persona: r, setPersona: l } = R(), [a, o] = I(""), h = ne(null), d = ne(null), g = e[e.length - 1];
  U(() => {
    d.current?.querySelector(".imw-turn:last-child")?.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [e.length, g?.pending]);
  const w = () => {
    const v = a.trim();
    v && (o(""), n(v));
  }, c = Rt(a), f = t.claims.reduce((v, u) => v + (B(u) ? u.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-ask", children: [
    /* @__PURE__ */ i("div", { class: "imw-log", ref: d, children: [
      e.length === 0 && /* @__PURE__ */ i("div", { class: "imw-welcome", children: [
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "✦ Interview My Work" }),
        /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Ask about my projects, engineering decisions, experience, or how my background maps to a role." }),
        /* @__PURE__ */ i("p", { class: "imw-lead", children: "Don't just read my résumé. Inspect the evidence behind the work: every answer links to its source, measured result and code." }),
        /* @__PURE__ */ i("dl", { class: "imw-stats is-inline", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("dt", { children: t.claims.filter(B).length }),
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
        /* @__PURE__ */ i("div", { class: "imw-personas is-inline", role: "radiogroup", "aria-label": "Who is asking", children: t.personas.map((v) => /* @__PURE__ */ i("button", { role: "radio", "aria-checked": r === v.id, class: r === v.id ? "is-on" : "", onClick: () => l(v.id), children: v.label }, v.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Start with" }),
        /* @__PURE__ */ i("div", { class: "imw-starters", children: ns.map((v, u) => /* @__PURE__ */ i("button", { onClick: () => {
          G("starter_question_selected", { index: u }), v.mode ? s("role", v.mode === "jd" ? "jd" : void 0) : n(v.q);
        }, children: [
          /* @__PURE__ */ i("span", { class: "imw-starter-n", children: String(u + 1).padStart(2, "0") }),
          /* @__PURE__ */ i("span", { children: v.q })
        ] }, v.q)) })
      ] }),
      e.map((v) => /* @__PURE__ */ i("section", { class: "imw-turn", "aria-label": `Question: ${v.q}`, children: [
        /* @__PURE__ */ i("p", { class: "imw-q", children: [
          /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "You asked" }),
          v.q
        ] }),
        v.pending && /* @__PURE__ */ i("div", { class: "imw-pending", role: "status", children: [
          /* @__PURE__ */ i("span", { class: "imw-pulse", "aria-hidden": "true" }),
          "Retrieving evidence and validating the answer…"
        ] }),
        v.a && /* @__PURE__ */ i(es, { a: v.a })
      ] }, v.id))
    ] }),
    /* @__PURE__ */ i("form", { class: "imw-composer", onSubmit: (v) => {
      v.preventDefault(), w();
    }, children: [
      c && /* @__PURE__ */ i("p", { class: "imw-jd-hint", children: "This looks like a job description. Sending it runs an evidence-coverage analysis." }),
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-q", children: "Ask a question or paste a job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-q",
          ref: h,
          rows: 1,
          value: a,
          placeholder: "Ask a question, or paste a job description…",
          maxLength: 12e3,
          onInput: (v) => {
            const u = v.target;
            o(u.value), u.style.height = "auto", u.style.height = `${Math.min(u.scrollHeight, 180)}px`;
          },
          onKeyDown: (v) => {
            v.key === "Enter" && !v.shiftKey && (v.preventDefault(), w());
          }
        }
      ),
      /* @__PURE__ */ i("button", { type: "submit", class: "imw-send", disabled: !a.trim(), children: c ? "Analyze" : "Ask" })
    ] })
  ] });
}
function rs(e) {
  const t = location.origin + location.pathname;
  if (e.source === "role" && e.roleId) return `${t}#imw=role:${e.roleId}`;
  const n = e.requirements.map((s) => s.id).filter((s) => !s.startsWith("term:")).join(",");
  return `${t}#imw=role:${encodeURIComponent(`jd~${n}`)}`;
}
function ls(e, t) {
  const n = [`# Evidence coverage: ${e.title}`, `Candidate: ${t}`, ""];
  for (const s of ["direct", "related", "verification", "missing"]) {
    const r = e.requirements.filter((l) => l.category === s);
    r.length && (n.push(`## ${V[s]} (${r.length})`), r.forEach((l) => n.push(`- ${l.label}${l.statement && s !== "direct" ? ` — ${l.statement}` : ""}`)), n.push(""));
  }
  return e.notes.length && n.push(...e.notes.map((s) => `> ${s}`), ""), n.push("Generated by Interview My Work from verified evidence. No fit score is computed."), n.join(`
`);
}
function as() {
  const { kb: e, coverage: t, setCoverage: n, modeArg: s, api: r, toggleLens: l, ask: a, go: o } = R(), [h, d] = I(s === "jd" ? "jd" : "role"), [g, w] = I(""), [c, f] = I(!1), [v, u] = I("");
  U(() => {
    if (!s) return;
    if (s === "jd") {
      d("jd");
      return;
    }
    const y = decodeURIComponent(s);
    if (e.role.has(y)) n(pe(e, y));
    else if (y.startsWith("jd~")) {
      const $ = y.slice(3).split(",").filter(Boolean).map((C) => C.startsWith("near:") ? te(e, e.skills.find((S) => S.near?.includes(C.slice(5)))?.id ?? C, { near: C.slice(5) }) : te(e, C));
      n(At(e, "Shared job description", $, { source: "jd" }));
    }
  }, [s]);
  const _ = (y) => {
    y && (n(pe(e, y)), G("role_selected", { role: y }));
  }, b = () => {
    if (g.trim().length < 40) return;
    const y = Ke(e, g);
    n(y), G("jd_analyzed", { requirements: y.requirements.length }), r === "ready" && (f(!0), qi(g).then((x) => {
      x.length && n(Ke(e, g, x));
    }).catch(() => {
    }).finally(() => f(!1)));
  }, k = async (y) => {
    if (t)
      try {
        await navigator.clipboard.writeText(y === "link" ? rs(t) : ls(t, e.subject.name)), u(y), setTimeout(() => u(""), 2e3);
      } catch {
      }
  }, p = e.roles.filter((y) => y.priority).sort((y, x) => y.priority - x.priority), m = [["strong", "Strong fit"], ["adjacent", "Adjacent"], ["stretch", "Stretch"]];
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
      /* @__PURE__ */ i("div", { class: "imw-role-cards", children: p.map((y) => /* @__PURE__ */ i("button", { class: t?.roleId === y.id && t.source === "role" ? "is-on" : "", onClick: () => _(y.id), children: [
        /* @__PURE__ */ i("strong", { children: y.title }),
        /* @__PURE__ */ i("small", { children: y.proof_note })
      ] }, y.id)) }),
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "More roles" }),
        /* @__PURE__ */ i("select", { onChange: (y) => _(y.target.value), value: t?.source === "role" ? t.roleId : "", children: [
          /* @__PURE__ */ i("option", { value: "", children: "Choose a role…" }),
          m.map(([y, x]) => /* @__PURE__ */ i("optgroup", { label: x, children: e.roles.filter(($) => $.tier === y && !$.priority).map(($) => /* @__PURE__ */ i("option", { value: $.id, children: $.title }, $.id)) }, y))
        ] })
      ] })
    ] }) : /* @__PURE__ */ i("div", { class: "imw-jd", children: [
      /* @__PURE__ */ i("label", { class: "sr-only", for: "imw-jd", children: "Job description" }),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "imw-jd",
          rows: 8,
          value: g,
          maxLength: 12e3,
          placeholder: "Paste the full job description, including requirements and nice-to-haves.",
          onInput: (y) => w(y.target.value)
        }
      ),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: b, disabled: g.trim().length < 40, children: "Analyze coverage" }),
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
          /* @__PURE__ */ i("button", { class: "imw-btn is-primary", onClick: () => l(!0), children: "Show this on the portfolio" }),
          /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => o("brief"), children: "10-minute brief" })
        ] })
      ] }),
      /* @__PURE__ */ i(nt, { counts: t.counts }),
      t.notes.map((y) => /* @__PURE__ */ i("p", { class: "imw-note", children: y }, y)),
      /* @__PURE__ */ i(Si, { analysis: t, max: 18 }),
      /* @__PURE__ */ i(is, { analysis: t }),
      /* @__PURE__ */ i("div", { class: "imw-actions", children: [
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => a(t.roleId ? `Challenge the evidence for ${t.title}` : "Challenge this evidence"), children: "Challenge this evidence" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => o("map", t.roleId), children: "View on the evidence map" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("link"), children: v === "link" ? "Link copied" : "Copy shareable link" }),
        /* @__PURE__ */ i("button", { class: "imw-btn", onClick: () => k("md"), children: v === "md" ? "Summary copied" : "Copy summary" })
      ] })
    ] })
  ] });
}
function os() {
  const { kb: e, modeArg: t, setInspect: n, inspect: s, ask: r } = R(), l = e.architectures, [a, o] = I(l.find((m) => m.entity === t)?.id ?? l[0].id), h = l.find((m) => m.id === a), [d, g] = I("why");
  U(() => {
    const m = l.find((y) => y.entity === t);
    m && o(m.id);
  }, [t]);
  const w = e.entity.get(h.entity), c = e.statableByEntity.get(h.entity) ?? [], f = e.decisions.filter((m) => m.entity === h.entity), v = e.failures.filter((m) => m.entity === h.entity), u = e.attacks.filter((m) => m.entity === h.entity), _ = c.filter((m) => m.tags.some((y) => ["eval_design", "llm_eval", "regression_testing", "metrics", "testing", "model_comparison"].includes(y))), b = c.flatMap((m) => m.code ?? []), k = s?.kind === "node" && s.arch === h.id ? s.node : void 0, p = [
    ["why", "Why this design?", f.length],
    ["failures", "Failure cases", v.length + c.filter((m) => m.kind === "limitation").length],
    ["break", "Try to break it", u.length],
    ["evaluation", "Evaluation", _.length],
    ["code", "Code", b.length],
    ["questions", "Interviewer questions", w.questions.length]
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
    /* @__PURE__ */ i("div", { class: "imw-seg is-scroll", role: "tablist", "aria-label": "System", children: l.map((m) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": m.id === a, class: m.id === a ? "is-on" : "", onClick: () => {
      o(m.id), n(null);
    }, children: e.entity.get(m.entity)?.short }, m.id)) }),
    /* @__PURE__ */ i(Ai, { arch: h, selected: k, onSelect: (m) => n({ kind: "node", arch: h.id, node: m }) }),
    /* @__PURE__ */ i("div", { class: "imw-subtabs", role: "tablist", "aria-label": "Inspect", children: p.filter(([, , m]) => m > 0).map(([m, y, x]) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": d === m, class: d === m ? "is-on" : "", onClick: () => g(m), children: [
      y,
      " ",
      /* @__PURE__ */ i("small", { children: x })
    ] }, m)) }),
    /* @__PURE__ */ i("div", { class: "imw-tabpanel", role: "tabpanel", children: [
      d === "why" && /* @__PURE__ */ i("div", { class: "imw-stack", children: f.map((m) => /* @__PURE__ */ i(Pt, { id: m.id }, m.id)) }),
      d === "failures" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        v.map((m, y) => /* @__PURE__ */ i(Lt, { id: m.id, open: y === 0 }, m.id)),
        /* @__PURE__ */ i(X, { ids: c.filter((m) => m.kind === "limitation").map((m) => m.id), title: "Stated limitations" })
      ] }),
      d === "break" && /* @__PURE__ */ i("div", { class: "imw-attack-grid", children: u.map((m) => /* @__PURE__ */ i(Ti, { id: m.id }, m.id)) }),
      d === "evaluation" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i(X, { ids: _.map((m) => m.id) }),
        h.entity === "cliniq" && /* @__PURE__ */ i(Mi, {}),
        h.entity === "voice" && /* @__PURE__ */ i(Tt, {})
      ] }),
      d === "code" && /* @__PURE__ */ i(Ee, { refs: b, max: 30 }),
      d === "questions" && /* @__PURE__ */ i("div", { class: "imw-stack", children: [
        /* @__PURE__ */ i("p", { class: "imw-help", children: "Questions a skeptical interviewer could press on. Select one to see what the evidence says." }),
        w.questions.map((m) => /* @__PURE__ */ i("button", { class: "imw-question", onClick: () => r(m.includes(w.short) ? m : `${m} (${w.short})`), children: m }, m))
      ] })
    ] })
  ] });
}
const cs = 1e3, ds = 720, O = 500, K = 360, xt = 170, $t = 305, hs = /* @__PURE__ */ new Set(["project", "research", "experience", "leadership"]);
function us(e, t) {
  const n = e.groups, s = e.entities.filter((u) => hs.has(u.kind)), r = new Map(e.skills.map((u) => [u.id, u.group])), l = /* @__PURE__ */ new Map();
  for (const u of e.claims.filter(B)) {
    const _ = l.get(u.entity) ?? /* @__PURE__ */ new Map();
    new Set(u.tags.map((b) => r.get(b)).filter(Boolean)).forEach((b) => _.set(b, (_.get(b) ?? 0) + 1)), l.set(u.entity, _);
  }
  const a = new Map(n.map((u, _) => [u.id, -Math.PI / 2 + _ / n.length * Math.PI * 2])), o = new Set(t?.requirements.filter((u) => u.category === "direct" || u.category === "related").map((u) => u.id) ?? []), h = new Map(n.map((u) => {
    if (!t) return [u.id, 1];
    const _ = e.skills.filter((b) => b.group === u.id);
    return [u.id, _.filter((b) => o.has(b.id)).length / Math.max(1, Math.min(4, _.length))];
  })), d = Math.max(1, ...t?.entities.map((u) => u.score) ?? [1]), g = new Map(s.map((u) => [u.id, t ? (t.entities.find((_) => _.id === u.id)?.score ?? 0) / d : 1])), w = /* @__PURE__ */ new Map();
  for (const u of n) {
    const _ = Math.min(1, h.get(u.id)), b = t ? xt * (_ > 0 ? 1 - 0.16 * _ : 1.1) : xt, k = a.get(u.id);
    w.set(u.id, { x: O + b * Math.cos(k), y: K + b * Math.sin(k), o: t ? _ > 0 ? 1 : 0.16 : 1 });
  }
  const c = s.map((u) => {
    const _ = l.get(u.id) ?? /* @__PURE__ */ new Map();
    let b = 0, k = 0;
    return _.forEach((p, m) => {
      const y = a.get(m);
      b += p * Math.cos(y), k += p * Math.sin(y);
    }), { id: u.id, a: Math.atan2(k, b) };
  }).sort((u, _) => u.a - _.a), f = Math.PI * 2 / c.length * 0.8;
  for (let u = 0; u < 8; u++)
    for (let _ = 0; _ < c.length; _++) {
      const b = c[_], k = c[(_ + 1) % c.length];
      let p = k.a - b.a;
      if (_ === c.length - 1 && (p += Math.PI * 2), p < f) {
        const m = (f - p) / 2;
        b.a -= m, k.a += m;
      }
    }
  const v = /* @__PURE__ */ new Map();
  for (const u of c) {
    const _ = g.get(u.id), b = t ? $t * (_ > 0 ? 1 - 0.2 * _ : 1.06) : $t;
    v.set(u.id, { x: O + b * Math.cos(u.a), y: K + b * Math.sin(u.a), o: t ? _ > 0 ? 0.35 + 0.65 * _ : 0.14 : 1 });
  }
  return { groups: n, ents: s, weight: l, gPos: w, ePos: v };
}
const ps = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
function ms() {
  const { kb: e, modeArg: t, coverage: n, setInspect: s, go: r } = R(), [l, a] = I(t && e.role.has(t) ? t : ""), [o, h] = I(null), d = ue(() => l === "__current" ? n : l ? pe(e, l) : null, [l, e, n]), g = ue(() => us(e, d), [e, d]), [w, c] = I(() => new Map([...g.gPos, ...g.ePos].map(([m]) => [m, { x: O, y: K, o: 0 }]))), f = ne(w);
  U(() => {
    const m = new Map([...g.gPos, ...g.ePos]);
    if (me()) {
      f.current = m, c(m);
      return;
    }
    const y = f.current, x = performance.now(), $ = 850;
    let C = 0;
    const S = (W) => {
      const z = ps(Math.min(1, (W - x) / $)), ve = /* @__PURE__ */ new Map();
      m.forEach((_e, Ie) => {
        const re = y.get(Ie) ?? { x: O, y: K, o: 0 };
        ve.set(Ie, { x: re.x + (_e.x - re.x) * z, y: re.y + (_e.y - re.y) * z, o: re.o + (_e.o - re.o) * z });
      }), f.current = ve, c(ve), z < 1 && (C = requestAnimationFrame(S));
    };
    return C = requestAnimationFrame(S), () => cancelAnimationFrame(C);
  }, [g]);
  const v = (m) => w.get(m) ?? { x: O, y: K, o: 0 }, u = Math.max(1, ...[...g.weight.values()].flatMap((m) => [...m.values()])), _ = (m) => e.claims.filter((y) => B(y) && y.tags.some((x) => e.skill.get(x)?.group === m)).length, b = (m) => e.statableByEntity.get(m)?.length ?? 0, k = o ? e.skills.filter((m) => m.group === o).map((m, y, x) => {
    const $ = v(o), C = Math.atan2($.y - K, $.x - O), S = Math.min(Math.PI * 0.9, x.length * 0.22), W = C - S / 2 + S * (y + 0.5) / x.length;
    return { s: m, cov: te(e, m.id), x: $.x + 92 * Math.cos(W), y: $.y + 92 * Math.sin(W) };
  }) : [], p = e.roles.filter((m) => m.priority).sort((m, y) => m.priority - y.priority);
  return /* @__PURE__ */ i("div", { class: "imw-view is-map", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Explore my engineering" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: "Evidence map" }),
      /* @__PURE__ */ i("p", { class: "imw-help", children: "Capability areas (inner ring) connect to the projects and roles that evidence them (outer ring). Line weight is the number of verified claims. Apply a role lens to pull relevant work toward the centre." })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-row imw-map-controls", children: [
      /* @__PURE__ */ i("label", { class: "imw-select", children: [
        /* @__PURE__ */ i("span", { children: "Role lens" }),
        /* @__PURE__ */ i("select", { value: l, onChange: (m) => {
          a(m.target.value), h(null);
        }, children: [
          /* @__PURE__ */ i("option", { value: "", children: "No lens: everything" }),
          n && /* @__PURE__ */ i("option", { value: "__current", children: [
            "Current analysis: ",
            n.title
          ] }),
          /* @__PURE__ */ i("optgroup", { label: "Priority roles", children: p.map((m) => /* @__PURE__ */ i("option", { value: m.id, children: m.title }, m.id)) }),
          /* @__PURE__ */ i("optgroup", { label: "Other roles", children: e.roles.filter((m) => !m.priority).map((m) => /* @__PURE__ */ i("option", { value: m.id, children: m.title }, m.id)) })
        ] })
      ] }),
      d && /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
        r("role");
      }, children: "Open coverage analysis →" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-constellation", children: /* @__PURE__ */ i("svg", { viewBox: `0 0 ${cs} ${ds}`, role: "group", "aria-label": "Evidence map of capability areas and projects", children: [
      /* @__PURE__ */ i("circle", { cx: O, cy: K, r: xt, class: "imw-orbit" }),
      /* @__PURE__ */ i("circle", { cx: O, cy: K, r: $t, class: "imw-orbit" }),
      g.groups.map((m) => {
        const y = v(m.id);
        return /* @__PURE__ */ i("line", { x1: O, y1: K, x2: y.x, y2: y.y, class: "imw-spoke", style: { opacity: y.o * 0.5 } }, `c-${m.id}`);
      }),
      g.ents.flatMap((m) => [...(g.weight.get(m.id) ?? /* @__PURE__ */ new Map()).entries()].map(([y, x]) => {
        const $ = v(y), C = v(m.id), S = o ? o === y : !0;
        return /* @__PURE__ */ i("line", { x1: $.x, y1: $.y, x2: C.x, y2: C.y, class: "imw-web", style: { strokeWidth: 0.6 + 2.2 * x / u, opacity: Math.min($.o, C.o) * (S ? 0.55 : 0.08) } }, `${m.id}-${y}`);
      })),
      /* @__PURE__ */ i("g", { class: "imw-core", children: [
        /* @__PURE__ */ i("circle", { cx: O, cy: K, r: 34 }),
        /* @__PURE__ */ i("text", { x: O, y: K - 2, "text-anchor": "middle", children: "Rahul" }),
        /* @__PURE__ */ i("text", { x: O, y: K + 14, "text-anchor": "middle", class: "imw-core-sub", children: "Vajja" })
      ] }),
      g.groups.map((m) => {
        const y = v(m.id), x = _(m.id), $ = 6 + Math.sqrt(x) * 1.6, C = y.x < O - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-gnode${o === m.id ? " is-on" : ""}`,
            style: { opacity: y.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${m.label}: ${x} verified claims`,
            onClick: () => {
              h(o === m.id ? null : m.id), s({ kind: "group", id: m.id });
            },
            onKeyDown: (S) => {
              (S.key === "Enter" || S.key === " ") && (S.preventDefault(), h(o === m.id ? null : m.id), s({ kind: "group", id: m.id }));
            },
            children: [
              /* @__PURE__ */ i("circle", { cx: y.x, cy: y.y, r: $ + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("circle", { cx: y.x, cy: y.y, r: $ }),
              /* @__PURE__ */ i("text", { x: y.x + (C ? -$ - 7 : $ + 7), y: y.y + 4, "text-anchor": C ? "end" : "start", children: m.label })
            ]
          },
          m.id
        );
      }),
      k.map(({ s: m, cov: y, x, y: $ }) => /* @__PURE__ */ i(
        "g",
        {
          class: `imw-sat ${fe[y.category]}`,
          tabIndex: 0,
          role: "button",
          "aria-label": `${m.name}: ${y.category}`,
          onClick: () => s({ kind: "req", req: y }),
          onKeyDown: (C) => (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s({ kind: "req", req: y })),
          children: [
            /* @__PURE__ */ i("line", { x1: v(o).x, y1: v(o).y, x2: x, y2: $ }),
            /* @__PURE__ */ i("circle", { cx: x, cy: $, r: 4 }),
            /* @__PURE__ */ i("text", { x, y: $ - 8, "text-anchor": "middle", children: m.name.length > 22 ? m.name.slice(0, 21) + "…" : m.name })
          ]
        },
        m.id
      )),
      g.ents.map((m) => {
        const y = v(m.id), x = b(m.id), $ = 7 + Math.sqrt(x) * 1.4, C = y.x < O - 5;
        return /* @__PURE__ */ i(
          "g",
          {
            class: `imw-enode is-${m.kind}`,
            style: { opacity: y.o },
            tabIndex: 0,
            role: "button",
            "aria-label": `${m.name}: ${x} verified claims`,
            onClick: () => s({ kind: "entity", id: m.id }),
            onKeyDown: (S) => (S.key === "Enter" || S.key === " ") && (S.preventDefault(), s({ kind: "entity", id: m.id })),
            children: [
              /* @__PURE__ */ i("circle", { cx: y.x, cy: y.y, r: $ + 10, class: "imw-hit" }),
              /* @__PURE__ */ i("rect", { x: y.x - $, y: y.y - $, width: $ * 2, height: $ * 2, rx: m.kind === "experience" ? $ : 3 }),
              /* @__PURE__ */ i("text", { x: y.x + (C ? -$ - 8 : $ + 8), y: y.y + 4, "text-anchor": C ? "end" : "start", children: m.short })
            ]
          },
          m.id
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
function fs() {
  const { kb: e, coverage: t, modeArg: n } = R(), [s, r] = I(n && e.role.has(n) ? n : t?.roleId ?? "applied_ai");
  U(() => {
    n && e.role.has(n) && r(n);
  }, [n]);
  const l = t?.source === "jd" && !n, a = ue(() => l && t ? t : pe(e, s), [e, s, l, t]);
  U(() => {
    G("brief_generated", { role: a.roleId ?? "jd" });
  }, [a]);
  const o = a.entities.filter((p) => p.id !== "imw" && e.entity.get(p.id)?.kind !== "education").slice(0, 3).map((p) => e.entity.get(p.id)), h = o.map((p) => p.id), d = e.decisions.filter((p) => h.includes(p.entity)).slice(0, 3), g = e.failures.filter((p) => h.includes(p.entity)).slice(0, 2), w = e.claims.find((p) => B(p) && p.kind === "limitation" && h.includes(p.entity)), c = a.requirements.filter((p) => p.category === "missing").slice(0, 2), f = h.flatMap((p) => (e.statableByEntity.get(p) ?? []).flatMap((m) => m.code ?? [])).filter((p) => p.lines).slice(0, 4), v = e.claims.find((p) => B(p) && p.kind === "metric" && ["cliniq", "sssd", "qml"].includes(p.entity) && (h.includes(p.entity) || p.entity === "cliniq")), u = o.flatMap((p) => p.questions.slice(0, 2).map((m) => ({ e: p.short, q: m }))), _ = () => [
    `# 10-minute technical brief: ${a.title}`,
    `Candidate: ${e.subject.name}. Evidence-only; no fit score.`,
    "",
    "## Strongest relevant systems",
    ...o.map((p) => `- **${p.name}**: ${p.summaries.engineer ?? p.tagline}`),
    "",
    "## Decisions worth questioning",
    ...d.map((p) => `- ${p.title}. Tradeoff: ${p.tradeoff}`),
    "",
    "## Failure cases",
    ...g.map((p) => `- ${p.title}: ${p.fix}`),
    "",
    "## Limitations and gaps",
    ...w ? [`- ${w.text}`] : [],
    ...c.map((p) => `- ${p.label}: ${p.statement}`),
    "",
    "## Code to open",
    ...f.map((p) => `- ${p.label}: ${p.url}`),
    "",
    "## Suggested questions",
    ...u.map((p) => `- (${p.e}) ${p.q}`)
  ].join(`
`), [b, k] = I(!1);
  return /* @__PURE__ */ i("div", { class: "imw-view imw-brief", children: [
    /* @__PURE__ */ i("header", { class: "imw-view-head", children: [
      /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "Technical interview brief · 10 minutes" }),
      /* @__PURE__ */ i("h3", { "data-autofocus": !0, tabIndex: -1, children: a.title }),
      /* @__PURE__ */ i("div", { class: "imw-row", children: [
        !l && /* @__PURE__ */ i("label", { class: "imw-select", children: [
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
      /* @__PURE__ */ i(nt, { counts: a.counts, compact: !0 })
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
        /* @__PURE__ */ i("div", { class: "imw-stack", children: d.map((p) => /* @__PURE__ */ i(Pt, { id: p.id }, p.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "5–7 min" }),
        /* @__PURE__ */ i("h4", { children: "Failure cases" }),
        /* @__PURE__ */ i("div", { class: "imw-stack", children: g.map((p) => /* @__PURE__ */ i(Lt, { id: p.id }, p.id)) })
      ] }),
      /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i("span", { class: "imw-time", children: "7–8 min" }),
        /* @__PURE__ */ i("h4", { children: "Limitations and gaps" }),
        w && /* @__PURE__ */ i(X, { ids: [w.id], compact: !0 }),
        c.map((p) => /* @__PURE__ */ i("p", { class: "imw-note", children: [
          p.label,
          ": ",
          p.statement
        ] }, p.id)),
        v && /* @__PURE__ */ i(ee, { children: [
          /* @__PURE__ */ i("div", { class: "imw-eyebrow", children: "One research result" }),
          /* @__PURE__ */ i(X, { ids: [v.id], compact: !0 })
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
function gs() {
  const e = R(), { inspect: t, setInspect: n } = e;
  return /* @__PURE__ */ i("div", { class: "imw-evidence", children: [
    /* @__PURE__ */ i("div", { class: "imw-evidence-head", children: [
      /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Evidence" }),
      t && /* @__PURE__ */ i("button", { class: "imw-icon imw-evidence-close", onClick: () => n(null), "aria-label": "Close evidence", children: "✕" })
    ] }),
    /* @__PURE__ */ i("div", { class: "imw-evidence-body", "aria-live": "polite", children: [
      !t && /* @__PURE__ */ i(ws, {}),
      t?.kind === "claim" && /* @__PURE__ */ i(ys, { id: t.id }),
      t?.kind === "node" && /* @__PURE__ */ i(vs, { arch: t.arch, node: t.node }),
      t?.kind === "req" && /* @__PURE__ */ i(_s, {}),
      t?.kind === "entity" && /* @__PURE__ */ i(bs, { id: t.id }),
      t?.kind === "group" && /* @__PURE__ */ i(ks, { id: t.id }),
      t?.kind === "basis" && /* @__PURE__ */ i(xs, {})
    ] })
  ] });
}
function ws() {
  const { kb: e } = R(), t = e.claims.reduce((n, s) => n + (B(s) ? s.code?.length ?? 0 : 0), 0);
  return /* @__PURE__ */ i("div", { class: "imw-intro", children: [
    /* @__PURE__ */ i("p", { children: "Select any claim, architecture component or requirement to inspect what supports it: sources, measured results and the exact code." }),
    /* @__PURE__ */ i("dl", { class: "imw-stats", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("dt", { children: e.claims.filter(B).length }),
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
function ys({ id: e }) {
  const { kb: t, setInspect: n } = R(), s = t.claim.get(e);
  if (!s) return null;
  const r = t.entity.get(s.entity), l = t.architectures.flatMap((o) => o.nodes.filter((h) => h.detail.claims.includes(e)).map((h) => ({ a: o, n: h }))), a = [...t.decisions, ...t.failures].filter((o) => o.claims.includes(e));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-st ${Ze(s)}`, children: [
      /* @__PURE__ */ i(Ce, { cls: Ze(s) }),
      " ",
      Ii(s)
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
    l.length ? /* @__PURE__ */ i(ee, { children: [
      /* @__PURE__ */ i(he, { children: "Appears in" }),
      /* @__PURE__ */ i("ul", { class: "imw-sources", children: l.map(({ a: o, n: h }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => n({ kind: "node", arch: o.id, node: h.id }), children: [
        o.title,
        " → ",
        h.label
      ] }) }, o.id + h.id)) })
    ] }) : null,
    a.length ? /* @__PURE__ */ i("p", { class: "imw-help", children: [
      "Also referenced by: ",
      a.map((o) => o.title).join("; ")
    ] }) : null
  ] });
}
function vs({ arch: e, node: t }) {
  const { kb: n } = R(), s = n.architectures.find((a) => a.id === e), r = s?.nodes.find((a) => a.id === t);
  if (!s || !r) return null;
  const l = r.detail.claims.flatMap((a) => n.claim.get(a)?.code ?? []);
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
    /* @__PURE__ */ i(X, { ids: r.detail.claims, title: "Supporting claims", compact: !0 }),
    l.length ? /* @__PURE__ */ i(ee, { children: [
      /* @__PURE__ */ i(he, { children: "Code" }),
      /* @__PURE__ */ i(Ee, { refs: l, max: 3 })
    ] }) : null
  ] });
}
function _s() {
  const { kb: e, inspect: t } = R();
  if (t?.kind !== "req") return null;
  const n = t.req, s = n.via ? e.skill.get(n.via)?.name : void 0, r = (n.pending ?? []).map((l) => e.claim.get(l)).filter(Boolean);
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: `imw-cat ${fe[n.category]}`, children: V[n.category] }),
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
    /* @__PURE__ */ i(X, { ids: n.claims.slice(0, 8), title: n.category === "missing" ? "Closest evidence" : "Evidence", compact: !0 }),
    r.length ? /* @__PURE__ */ i("p", { class: "imw-note is-warn", children: [
      r.length,
      " related statement",
      r.length > 1 ? "s are" : " is",
      " awaiting verification and not used here."
    ] }) : null
  ] });
}
function bs({ id: e }) {
  const { kb: t, persona: n } = R(), s = t.entity.get(e);
  if (!s) return null;
  const r = (t.statableByEntity.get(e) ?? []).filter((l) => l.kind !== "limitation").slice(0, 5).map((l) => l.id);
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
      s.links.slice(0, 2).map((l) => /* @__PURE__ */ i(Ve, { a: { kind: "url", label: l.label, target: l.url } }, l.url))
    ] }),
    /* @__PURE__ */ i(X, { ids: r, title: "Key evidence", compact: !0 })
  ] });
}
function ks({ id: e }) {
  const { kb: t, setInspect: n } = R(), s = t.groups.find((l) => l.id === e);
  if (!s) return null;
  const r = t.skills.filter((l) => l.group === e).map((l) => ({ s: l, cov: te(t, l.id) }));
  return /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Capability area" }),
    /* @__PURE__ */ i("h3", { class: "imw-card-title", children: s.label }),
    /* @__PURE__ */ i("ul", { class: "imw-reqs", children: r.map(({ s: l, cov: a }) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", { class: "imw-req-btn", onClick: () => n({ kind: "req", req: a }), children: [
      /* @__PURE__ */ i("i", { class: `imw-cat-dot ${fe[a.category]}`, "aria-hidden": "true" }),
      /* @__PURE__ */ i("span", { children: l.name }),
      /* @__PURE__ */ i("small", { children: a.entities.slice(0, 3).map((o) => t.entity.get(o)?.short).join(" · ") || V[a.category] })
    ] }) }, l.id)) })
  ] });
}
function xs() {
  const { inspect: e } = R();
  return e?.kind !== "basis" ? null : /* @__PURE__ */ i("article", { class: "imw-card", children: [
    /* @__PURE__ */ i("span", { class: "imw-eyebrow", children: "Why this answer?" }),
    /* @__PURE__ */ i("p", { children: e.engine === "model" ? `Written by ${e.model ?? "Claude"} from a retrieved evidence pack, then validated by the API and again in your browser before display.` : "Composed by the deterministic evidence engine in your browser. No model was involved." }),
    e.checks?.length ? /* @__PURE__ */ i("ul", { class: "imw-checks", children: e.checks.map((t) => /* @__PURE__ */ i("li", { class: t.ok ? "ok" : "bad", children: [
      /* @__PURE__ */ i("span", { "aria-hidden": "true", children: t.ok ? "✓" : "✕" }),
      " ",
      t.label
    ] }, t.label)) }) : null,
    /* @__PURE__ */ i(X, { ids: e.retrieved.slice(0, 12), title: "Evidence used", compact: !0 }),
    /* @__PURE__ */ i("p", { class: "imw-help", children: "This panel lists sources and checks only. It never shows hidden model reasoning." })
  ] });
}
function $s() {
  const { kb: e, persona: t, setPersona: n, coverage: s, setCoverage: r, toggleLens: l, lensOn: a, go: o } = R(), h = e.personas.find((d) => d.id === t);
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
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => l(!a), children: a ? "Restore portfolio" : "Show on portfolio" }),
          /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => {
            r(null), a && l(!1);
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
          V.missing
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
      /* @__PURE__ */ i("button", { class: "imw-mini-link", onClick: () => o("xray", "imw"), children: "X-Ray this system →" })
    ] })
  ] });
}
const si = [
  { id: "ask", label: "Ask", hint: "Questions answered from verified evidence" },
  { id: "role", label: "Role fit", hint: "Evidence coverage for a role or job description" },
  { id: "xray", label: "X-Ray", hint: "Explore each system component by component" },
  { id: "map", label: "Map", hint: "The whole body of work as an evidence graph" },
  { id: "lab", label: "Proof lab", hint: "Replays, break-it tests and live numbers" },
  { id: "brief", label: "Brief", hint: "A 10-minute technical interview brief" }
], Cs = /* @__PURE__ */ new Set(["retrieval", "no_evidence", "topic", "entity", "focused", "skill", "personally", "scale", "challenge", "level", "overview", "shipped", "beyond_wrappers", "evaluation", "strongest"]), qs = /* @__PURE__ */ new Set(["entity", "claims", "xray", "chart", "trace", "decisions", "failures"]);
function Es({ kb: e, initial: t, register: n }) {
  const [s, r] = I(!0), [l, a] = I("ask"), [o, h] = I(), [d, g] = I("recruiter"), [w, c] = I(null), [f, v] = I(null), [u, _] = I([]), [b, k] = I("checking"), [p, m] = I(!1), y = ne(null), x = ne(null), $ = ne(!1), C = ke((q, L) => {
    a(q), h(L), q === "xray" && G("xray_opened", { project: L ?? "dia" }), y.current?.querySelector(".imw-main")?.scrollTo({ top: 0 });
  }, []), S = ke((q) => {
    x.current = q.trigger ?? document.activeElement, r(!0);
    const L = si.find((Y) => Y.id === q.mode)?.id ?? "ask";
    q.mode === "transform" && q.arg ? C("role", q.arg) : C(L, q.arg), G("interview_my_work_opened", { mode: L });
  }, [C]);
  U(() => {
    n(S), S(t);
  }, []), U(() => {
    s && !$.current && ($.current = !0, Bn(k));
  }, [s]), U(() => {
    const q = document.querySelector(".wrap"), L = document.querySelector(".imw-fab");
    s ? (document.documentElement.classList.add("imw-open"), q?.setAttribute("inert", ""), L?.setAttribute("inert", ""), requestAnimationFrame(() => y.current?.querySelector("[data-autofocus]")?.focus() ?? y.current?.focus())) : (document.documentElement.classList.remove("imw-open"), q?.removeAttribute("inert"), L?.removeAttribute("inert"), x.current?.focus?.());
  }, [s]);
  const W = ke(() => r(!1), []), z = (q) => {
    if (q.key === "Escape") {
      q.preventDefault(), w && matchMedia("(max-width: 1100px)").matches ? c(null) : W();
      return;
    }
    if (q.key !== "Tab" || !y.current) return;
    const L = [...y.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((Q) => Q.offsetParent !== null);
    if (!L.length) return;
    const Y = L[0], le = L[L.length - 1];
    q.shiftKey && document.activeElement === Y ? (q.preventDefault(), le.focus()) : !q.shiftKey && document.activeElement === le && (q.preventDefault(), Y.focus());
  }, ve = ke((q) => {
    r(!1), G("project_opened_from_ai", { anchor: q }), Fn(q, () => r(!0));
  }, []), _e = ke((q, L) => {
    const Y = q ?? !p, le = L ?? f;
    Y && le ? (L && v(L), Nn(e, le, { reopen: () => {
      r(!0), C("role");
    }, restore: () => m(!1) }), m(!0), r(!1), G("portfolio_lens_applied", { source: le.source })) : (kt(), m(!1));
  }, [p, f, e, C]), Ie = ke(async (q) => {
    const L = q.trim();
    if (!L) return;
    C("ask");
    const Y = Date.now(), le = [...u].reverse().find((T) => T.a?.entities.length)?.a?.entities, Q = vn(e, L, { persona: d, roleId: f?.roleId, lastEntities: le }), st = Rt(L);
    if (Q.intent === "jd" || Q.intent === "role") {
      const T = Q.blocks.find((Z) => Z.type === "coverage");
      T && T.type === "coverage" && v(T.analysis), st && G("jd_analyzed", { requirements: T && T.type === "coverage" ? T.analysis.requirements.length : 0 });
    }
    const rt = b === "ready" && Cs.has(Q.intent);
    if (_((T) => [...T, { id: Y, q: st ? "Job description (pasted)" : L, a: rt ? void 0 : Q, pending: rt }]), st && b === "ready" && qi(L).then((T) => {
      if (!T.length) return;
      const Z = Ke(e, L, T);
      v(Z), _((ae) => ae.map((be) => be.id === Y && be.a ? { ...be, a: { ...be.a, blocks: be.a.blocks.map((at) => at.type === "coverage" ? { ...at, analysis: Z } : at), refined: !0 } } : be));
    }).catch(() => {
    }), !rt) return;
    const Li = u.filter((T) => T.a).slice(-3).map((T) => ({ q: T.q, cites: T.a.basis?.retrieved?.slice(0, 8) ?? [] }));
    let lt;
    try {
      const T = await Hn(e, L, d, Li, f?.roleId), Z = Q.blocks.filter((ae) => qs.has(ae.type)).map((ae) => ae.type === "claims" ? { ...ae, title: ae.title ?? "Supporting evidence" } : ae);
      lt = { ...T, blocks: [...T.blocks, ...Z], actions: Q.actions, followups: T.followups.length ? T.followups : Q.followups, entities: [.../* @__PURE__ */ new Set([...T.entities, ...Q.entities])] };
    } catch {
      lt = { ...Q, blocks: [{ type: "note", tone: "info", text: "The AI service did not return a validated answer, so this one comes from the offline evidence engine." }, ...Q.blocks] };
    }
    _((T) => T.map((Z) => Z.id === Y ? { ...Z, a: lt, pending: !1 } : Z));
  }, [e, d, f, b, u, C]), re = ue(() => ({
    kb: e,
    persona: d,
    setPersona: g,
    mode: l,
    go: C,
    modeArg: o,
    inspect: w,
    setInspect: (q) => {
      c(q), q && G("evidence_opened", { kind: q.kind });
    },
    coverage: f,
    setCoverage: v,
    ask: Ie,
    api: b,
    jump: ve,
    lensOn: p,
    toggleLens: _e,
    close: W
  }), [e, d, l, C, o, w, f, Ie, b, ve, p, _e, W]);
  return /* @__PURE__ */ i(Ei.Provider, { value: re, children: /* @__PURE__ */ i("div", { class: "imw", hidden: !s, children: [
    /* @__PURE__ */ i("div", { class: "imw-backdrop", onClick: W }),
    /* @__PURE__ */ i("div", { class: "imw-dialog", ref: y, role: "dialog", "aria-modal": "true", "aria-labelledby": "imw-title", tabIndex: -1, onKeyDown: z, children: [
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
        /* @__PURE__ */ i("div", { class: "imw-tabs", role: "tablist", "aria-label": "Workspace views", children: si.map((q) => /* @__PURE__ */ i("button", { role: "tab", "aria-selected": l === q.id, class: l === q.id ? "is-on" : "", title: q.hint, onClick: () => C(q.id), children: q.label }, q.id)) }),
        /* @__PURE__ */ i("div", { class: "imw-top-right", children: [
          /* @__PURE__ */ i(Is, { status: b }),
          /* @__PURE__ */ i("select", { class: "imw-persona-mobile", "aria-label": "Answer depth", value: d, onChange: (q) => g(q.target.value), children: e.personas.map((q) => /* @__PURE__ */ i("option", { value: q.id, children: q.label }, q.id)) }),
          /* @__PURE__ */ i("button", { class: "imw-icon", onClick: W, "aria-label": "Close Interview My Work", children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { class: "imw-body", children: [
        /* @__PURE__ */ i("aside", { class: "imw-left", "aria-label": "Context", children: /* @__PURE__ */ i($s, {}) }),
        /* @__PURE__ */ i("main", { class: "imw-main", id: "imw-main", children: [
          l === "ask" && /* @__PURE__ */ i(ss, { turns: u }),
          l === "role" && /* @__PURE__ */ i(as, {}),
          l === "xray" && /* @__PURE__ */ i(os, {}),
          l === "map" && /* @__PURE__ */ i(ms, {}),
          l === "lab" && /* @__PURE__ */ i(Zn, {}),
          l === "brief" && /* @__PURE__ */ i(fs, {})
        ] }),
        /* @__PURE__ */ i("aside", { class: `imw-right${w ? " has-item" : ""}`, "aria-label": "Evidence", children: /* @__PURE__ */ i(gs, {}) })
      ] })
    ] })
  ] }) });
}
function Is({ status: e }) {
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
let mt = null, He = null, ft = null;
async function Ss(e = {}) {
  mt ?? (mt = nn(Ri("evidence.json")).catch((n) => {
    throw mt = null, n;
  }));
  const t = await mt;
  if (ft) {
    ft(e);
    return;
  }
  He = document.createElement("div"), He.id = "imw-host", document.body.appendChild(He), Oi(/* @__PURE__ */ i(Es, { kb: t, initial: e, register: (n) => ft = n }), He);
}
export {
  Ss as open
};
