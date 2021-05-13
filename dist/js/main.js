!
function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t),
        i.loaded = !0,
        i.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "/dist",
    t(0)
} ([function(e, t, n) {
    e.exports = n(1)
},
function(e, t, n) {
    "use strict";
    n(2),
    n(5).polyfill(),
    n(10),
    n(12),
    n(67);
    var r = n(68),
    i = document.getElementById("main"),
    o = new r.APP(i);
    n(125).setUser(),
    o.start(),
    o.diagnose()
},
function(e, t, n) { (function(t) {
        e.exports = t.$ = n(3)
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) { (function(t) {
        e.exports = t.jQuery = n(4)
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) {
    var r, i;
    /*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
    !
    function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        }: n(t)
    } ("undefined" != typeof window ? window: this,
    function(n, o) {
        "use strict";
        function s(e, t) {
            t = t || re;
            var n = t.createElement("script");
            n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        function a(e) {
            var t = !!e && "length" in e && e.length,
            n = me.type(e);
            return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function u(e, t, n) {
            if (me.isFunction(t)) return me.grep(e,
            function(e, r) {
                return !! t.call(e, r, e) !== n
            });
            if (t.nodeType) return me.grep(e,
            function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Ee.test(t)) return me.filter(t, e, n);
                t = me.filter(t, e)
            }
            return me.grep(e,
            function(e) {
                return ue.call(t, e) > -1 !== n && 1 === e.nodeType
            })
        }
        function c(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        function l(e) {
            var t = {};
            return me.each(e.match(Pe) || [],
            function(e, n) {
                t[n] = !0
            }),
            t
        }
        function f(e) {
            return e
        }
        function p(e) {
            throw e
        }
        function h(e, t, n) {
            var r;
            try {
                e && me.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && me.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
            } catch(e) {
                n.call(void 0, e)
            }
        }
        function d() {
            re.removeEventListener("DOMContentLoaded", d),
            n.removeEventListener("load", d),
            me.ready()
        }
        function g() {
            this.expando = me.expando + g.uid++
        }
        function m(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Ue, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Be.test(n) ? JSON.parse(n) : n)
                } catch(i) {}
                Fe.set(e, t, n)
            } else n = void 0;
            return n
        }
        function y(e, t, n, r) {
            var i, o = 1,
            s = 20,
            a = r ?
            function() {
                return r.cur()
            }: function() {
                return me.css(e, t, "")
            },
            u = a(),
            c = n && n[3] || (me.cssNumber[t] ? "": "px"),
            l = (me.cssNumber[t] || "px" !== c && +u) && Me.exec(me.css(e, t));
            if (l && l[3] !== c) {
                c = c || l[3],
                n = n || [],
                l = +u || 1;
                do o = o || ".5",
                l /= o,
                me.style(e, t, l + c);
                while (o !== (o = a() / u) && 1 !== o && --s)
            }
            return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)),
            i
        }
        function v(e) {
            var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Qe[r];
            return i ? i: (t = n.body.appendChild(n.createElement(r)), i = me.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Qe[r] = i, i)
        }
        function b(e, t) {
            for (var n, r, i = [], o = 0, s = e.length; o < s; o++) r = e[o],
            r.style && (n = r.style.display, t ? ("none" === n && (i[o] = qe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && $e(r) && (i[o] = v(r))) : "none" !== n && (i[o] = "none", qe.set(r, "display", n)));
            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }
        function w(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && me.nodeName(e, t) ? me.merge([e], n) : n
        }
        function x(e, t) {
            for (var n = 0,
            r = e.length; n < r; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
        }
        function T(e, t, n, r, i) {
            for (var o, s, a, u, c, l, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++) if (o = e[h], o || 0 === o) if ("object" === me.type(o)) me.merge(p, o.nodeType ? [o] : o);
            else if (Ke.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), a = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[a] || Ge._default, s.innerHTML = u[1] + me.htmlPrefilter(o) + u[2], l = u[0]; l--;) s = s.lastChild;
                me.merge(p, s.childNodes),
                s = f.firstChild,
                s.textContent = ""
            } else p.push(t.createTextNode(o));
            for (f.textContent = "", h = 0; o = p[h++];) if (r && me.inArray(o, r) > -1) i && i.push(o);
            else if (c = me.contains(o.ownerDocument, o), s = w(f.appendChild(o), "script"), c && x(s), n) for (l = 0; o = s[l++];) Ve.test(o.type || "") && n.push(o);
            return f
        }
        function S() {
            return ! 0
        }
        function _() {
            return ! 1
        }
        function k() {
            try {
                return re.activeElement
            } catch(e) {}
        }
        function E(e, t, n, r, i, o) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (a in t) E(e, a, n, r, t[a], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = _;
            else if (!i) return e;
            return 1 === o && (s = i, i = function(e) {
                return me().off(e),
                s.apply(this, arguments)
            },
            i.guid = s.guid || (s.guid = me.guid++)),
            e.each(function() {
                me.event.add(this, t, i, r, n)
            })
        }
        function A(e, t) {
            return me.nodeName(e, "table") && me.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e: e
        }
        function C(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function O(e) {
            var t = ot.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function j(e, t) {
            var n, r, i, o, s, a, u, c;
            if (1 === t.nodeType) {
                if (qe.hasData(e) && (o = qe.access(e), s = qe.set(t, o), c = o.events)) {
                    delete s.handle,
                    s.events = {};
                    for (i in c) for (n = 0, r = c[i].length; n < r; n++) me.event.add(t, i, c[i][n])
                }
                Fe.hasData(e) && (a = Fe.access(e), u = me.extend({},
                a), Fe.set(t, u))
            }
        }
        function D(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Je.test(e.type) ? t.checked = e.checked: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function P(e, t, n, r) {
            t = se.apply([], t);
            var i, o, a, u, c, l, f = 0,
            p = e.length,
            h = p - 1,
            d = t[0],
            g = me.isFunction(d);
            if (g || p > 1 && "string" == typeof d && !de.checkClone && it.test(d)) return e.each(function(i) {
                var o = e.eq(i);
                g && (t[0] = d.call(this, i, o.html())),
                P(o, t, n, r)
            });
            if (p && (i = T(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (a = me.map(w(i, "script"), C), u = a.length; f < p; f++) c = i,
                f !== h && (c = me.clone(c, !0, !0), u && me.merge(a, w(c, "script"))),
                n.call(e[f], c, f);
                if (u) for (l = a[a.length - 1].ownerDocument, me.map(a, O), f = 0; f < u; f++) c = a[f],
                Ve.test(c.type || "") && !qe.access(c, "globalEval") && me.contains(l, c) && (c.src ? me._evalUrl && me._evalUrl(c.src) : s(c.textContent.replace(st, ""), l))
            }
            return e
        }
        function R(e, t, n) {
            for (var r, i = t ? me.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || me.cleanData(w(r)),
            r.parentNode && (n && me.contains(r.ownerDocument, r) && x(w(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        function I(e, t, n) {
            var r, i, o, s, a = e.style;
            return n = n || ct(e),
            n && (s = n.getPropertyValue(t) || n[t], "" !== s || me.contains(e.ownerDocument, e) || (s = me.style(e, t)), !de.pixelMarginRight() && ut.test(s) && at.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)),
            void 0 !== s ? s + "": s
        }
        function L(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get: (this.get = t).apply(this, arguments)
                }
            }
        }
        function N(e) {
            if (e in dt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;) if (e = ht[n] + t, e in dt) return e
        }
        function q(e, t, n) {
            var r = Me.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function F(e, t, n, r, i) {
            for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)"margin" === n && (s += me.css(e, n + ze[o], !0, i)),
            r ? ("content" === n && (s -= me.css(e, "padding" + ze[o], !0, i)), "margin" !== n && (s -= me.css(e, "border" + ze[o] + "Width", !0, i))) : (s += me.css(e, "padding" + ze[o], !0, i), "padding" !== n && (s += me.css(e, "border" + ze[o] + "Width", !0, i)));
            return s
        }
        function B(e, t, n) {
            var r, i = !0,
            o = ct(e),
            s = "border-box" === me.css(e, "boxSizing", !1, o);
            if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
                if (r = I(e, t, o), (r < 0 || null == r) && (r = e.style[t]), ut.test(r)) return r;
                i = s && (de.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
            }
            return r + F(e, t, n || (s ? "border": "content"), i, o) + "px"
        }
        function U(e, t, n, r, i) {
            return new U.prototype.init(e, t, n, r, i)
        }
        function H() {
            mt && (n.requestAnimationFrame(H), me.fx.tick())
        }
        function M() {
            return n.setTimeout(function() {
                gt = void 0
            }),
            gt = me.now()
        }
        function z(e, t) {
            var n, r = 0,
            i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = ze[r],
            i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function $(e, t, n) {
            for (var r, i = (J.tweeners[t] || []).concat(J.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r
        }
        function W(e, t, n) {
            var r, i, o, s, a, u, c, l, f = "width" in t || "height" in t,
            p = this,
            h = {},
            d = e.style,
            g = e.nodeType && $e(e),
            m = qe.get(e, "fxshow");
            n.queue || (s = me._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--,
                    me.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (r in t) if (i = t[r], yt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide": "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0
                }
                h[r] = m && m[r] || me.style(e, r)
            }
            if (u = !me.isEmptyObject(t), u || !me.isEmptyObject(h)) {
                f && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = m && m.display, null == c && (c = qe.get(e, "display")), l = me.css(e, "display"), "none" === l && (c ? l = c: (b([e], !0), c = e.style.display || c, l = me.css(e, "display"), b([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === me.css(e, "float") && (u || (p.done(function() {
                    d.display = c
                }), null == c && (l = d.display, c = "none" === l ? "": l)), d.display = "inline-block")),
                n.overflow && (d.overflow = "hidden", p.always(function() {
                    d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
                })),
                u = !1;
                for (r in h) u || (m ? "hidden" in m && (g = m.hidden) : m = qe.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && b([e], !0), p.done(function() {
                    g || b([e]),
                    qe.remove(e, "fxshow");
                    for (r in h) me.style(e, r, h[r])
                })),
                u = $(g ? m[r] : 0, r, p),
                r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
            }
        }
        function Q(e, t) {
            var n, r, i, o, s;
            for (n in e) if (r = me.camelCase(n), i = t[r], o = e[n], me.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = me.cssHooks[r], s && "expand" in s) {
                o = s.expand(o),
                delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }
        function J(e, t, n) {
            var r, i, o = 0,
            s = J.prefilters.length,
            a = me.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return ! 1;
                for (var t = gt || M(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, s = 0, u = c.tweens.length; s < u; s++) c.tweens[s].run(o);
                return a.notifyWith(e, [c, o, n]),
                o < 1 && u ? n: (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: me.extend({},
                t),
                opts: me.extend(!0, {
                    specialEasing: {},
                    easing: me.easing._default
                },
                n),
                originalProperties: t,
                originalOptions: n,
                startTime: gt || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = me.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0,
                    r = t ? c.tweens.length: 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                    this
                }
            }),
            l = c.props;
            for (Q(l, c.opts.specialEasing); o < s; o++) if (r = J.prefilters[o].call(c, e, l, c.opts)) return me.isFunction(r.stop) && (me._queueHooks(c.elem, c.opts.queue).stop = me.proxy(r.stop, r)),
            r;
            return me.map(l, $, c),
            me.isFunction(c.opts.start) && c.opts.start.call(e, c),
            me.fx.timer(me.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        function X(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function V(e, t, n, r) {
            var i;
            if (me.isArray(t)) me.each(t,
            function(t, i) {
                n || jt.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i && null != i ? t: "") + "]", i, n, r)
            });
            else if (n || "object" !== me.type(t)) r(e, t);
            else for (i in t) V(e + "[" + i + "]", t[i], n, r)
        }
        function G(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                o = t.toLowerCase().match(Pe) || [];
                if (me.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function K(e, t, n, r) {
            function i(a) {
                var u;
                return o[a] = !0,
                me.each(e[a] || [],
                function(e, a) {
                    var c = a(t, n, r);
                    return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                }),
                u
            }
            var o = {},
            s = e === Mt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }
        function Y(e, t) {
            var n, r, i = me.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e: r || (r = {}))[n] = t[n]);
            return r && me.extend(!0, e, r),
            e
        }
        function Z(e, t, n) {
            for (var r, i, o, s, a = e.contents,
            u = e.dataTypes;
            "*" === u[0];) u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) for (i in a) if (a[i] && a[i].test(r)) {
                u.unshift(i);
                break
            }
            if (u[0] in n) o = u[0];
            else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    s || (s = i)
                }
                o = o || s
            }
            if (o) return o !== u[0] && u.unshift(o),
            n[o]
        }
        function ee(e, t, n, r) {
            var i, o, s, a, u, c = {},
            l = e.dataTypes.slice();
            if (l[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u;
            else if ("*" !== u && u !== o) {
                if (s = c[u + " " + o] || c["* " + o], !s) for (i in c) if (a = i.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                    s === !0 ? s = c[i] : c[i] !== !0 && (o = a[0], l.unshift(a[1]));
                    break
                }
                if (s !== !0) if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch(f) {
                    return {
                        state: "parsererror",
                        error: s ? f: "No conversion from " + u + " to " + o
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        function te(e) {
            return me.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
        }
        var ne = [],
        re = n.document,
        ie = Object.getPrototypeOf,
        oe = ne.slice,
        se = ne.concat,
        ae = ne.push,
        ue = ne.indexOf,
        ce = {},
        le = ce.toString,
        fe = ce.hasOwnProperty,
        pe = fe.toString,
        he = pe.call(Object),
        de = {},
        ge = "3.1.0",
        me = function(e, t) {
            return new me.fn.init(e, t)
        },
        ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        be = /-([a-z])/g,
        we = function(e, t) {
            return t.toUpperCase()
        };
        me.fn = me.prototype = {
            jquery: ge,
            constructor: me,
            length: 0,
            toArray: function() {
                return oe.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this)
            },
            pushStack: function(e) {
                var t = me.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return me.each(this, e)
            },
            map: function(e) {
                return this.pushStack(me.map(this,
                function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(oe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length,
                n = +e + (e < 0 ? t: 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ae,
            sort: ne.sort,
            splice: ne.splice
        },
        me.extend = me.fn.extend = function() {
            var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {},
            a++), "object" == typeof s || me.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t],
            r = e[t],
            s !== r && (c && r && (me.isPlainObject(r) || (i = me.isArray(r))) ? (i ? (i = !1, o = n && me.isArray(n) ? n: []) : o = n && me.isPlainObject(n) ? n: {},
            s[t] = me.extend(c, o, r)) : void 0 !== r && (s[t] = r));
            return s
        },
        me.extend({
            expando: "jQuery" + (ge + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === me.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = me.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return ! (!e || "[object Object]" !== le.call(e)) && (!(t = ie(e)) || (n = fe.call(t, "constructor") && t.constructor, "function" == typeof n && pe.call(n) === he))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return ! 1;
                return ! 0
            },
            type: function(e) {
                return null == e ? e + "": "object" == typeof e || "function" == typeof e ? ce[le.call(e)] || "object": typeof e
            },
            globalEval: function(e) {
                s(e)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(be, we)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (a(e)) for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
                else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "": (e + "").replace(ye, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : ue.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length,
                r = 0,
                i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) r = !t(e[o], o),
                r !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                s = [];
                if (a(e)) for (r = e.length; o < r; o++) i = t(e[o], o, n),
                null != i && s.push(i);
                else for (o in e) i = t(e[o], o, n),
                null != i && s.push(i);
                return se.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return r = oe.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, r.concat(oe.call(arguments)))
                },
                i.guid = e.guid = e.guid || me.guid++,
                i
            },
            now: Date.now,
            support: de
        }),
        "function" == typeof Symbol && (me.fn[Symbol.iterator] = ne[Symbol.iterator]),
        me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
            ce["[object " + t + "]"] = t.toLowerCase()
        });
        var xe =
        /*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
        function(e) {
            function t(e, t, n, r) {
                var i, o, s, a, u, c, l, p = t && t.ownerDocument,
                d = t ? t.nodeType: 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
                if (!r && ((t ? t.ownerDocument || t: H) !== R && P(t), t = t || R, L)) {
                    if (11 !== d && (u = ye.exec(e))) if (i = u[1]) {
                        if (9 === d) {
                            if (! (s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s),
                            n
                        } else if (p && (s = p.getElementById(i)) && B(t, s) && s.id === i) return n.push(s),
                        n
                    } else {
                        if (u[2]) return Y.apply(n, t.getElementsByTagName(e)),
                        n;
                        if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(i)),
                        n
                    }
                    if (T.qsa && !Q[e + " "] && (!N || !N.test(e))) {
                        if (1 !== d) p = t,
                        l = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(xe, Te) : t.setAttribute("id", a = U), c = E(e), o = c.length; o--;) c[o] = "#" + a + " " + h(c[o]);
                            l = c.join(","),
                            p = ve.test(e) && f(t.parentNode) || t
                        }
                        if (l) try {
                            return Y.apply(n, p.querySelectorAll(l)),
                            n
                        } catch(g) {} finally {
                            a === U && t.removeAttribute("id")
                        }
                    }
                }
                return C(e.replace(ae, "$1"), t, n, r)
            }
            function n() {
                function e(n, r) {
                    return t.push(n + " ") > S.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
                }
                var t = [];
                return e
            }
            function r(e) {
                return e[U] = !0,
                e
            }
            function i(e) {
                var t = R.createElement("fieldset");
                try {
                    return !! e(t)
                } catch(n) {
                    return ! 1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function o(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) S.attrHandle[n[r]] = t
            }
            function s(e, t) {
                var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                return e ? 1 : -1
            }
            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function c(e) {
                return function(t) {
                    return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !_e(t)) !== e)
                }
            }
            function l(e) {
                return r(function(t) {
                    return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function f(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function p() {}
            function h(e) {
                for (var t = 0,
                n = e.length,
                r = ""; t < n; t++) r += e[t].value;
                return r
            }
            function d(e, t, n) {
                var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = z++;
                return t.first ?
                function(t, n, i) {
                    for (; t = t[r];) if (1 === t.nodeType || s) return e(t, n, i)
                }: function(t, n, u) {
                    var c, l, f, p = [M, a];
                    if (u) {
                        for (; t = t[r];) if ((1 === t.nodeType || s) && e(t, n, u)) return ! 0
                    } else for (; t = t[r];) if (1 === t.nodeType || s) if (f = t[U] || (t[U] = {}), l = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                    else {
                        if ((c = l[o]) && c[0] === M && c[1] === a) return p[2] = c[2];
                        if (l[o] = p, p[2] = e(t, n, u)) return ! 0
                    }
                }
            }
            function g(e) {
                return e.length > 1 ?
                function(t, n, r) {
                    for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                    return ! 0
                }: e[0]
            }
            function m(e, n, r) {
                for (var i = 0,
                o = n.length; i < o; i++) t(e, n[i], r);
                return r
            }
            function y(e, t, n, r, i) {
                for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
                return s
            }
            function v(e, t, n, i, o, s) {
                return i && !i[U] && (i = v(i)),
                o && !o[U] && (o = v(o, s)),
                r(function(r, s, a, u) {
                    var c, l, f, p = [],
                    h = [],
                    d = s.length,
                    g = r || m(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !r && t ? g: y(g, p, e, a, u),
                    b = n ? o || (r ? e: d || i) ? [] : s: v;
                    if (n && n(v, b, a, u), i) for (c = y(b, h), i(c, [], a, u), l = c.length; l--;)(f = c[l]) && (b[h[l]] = !(v[h[l]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], l = b.length; l--;)(f = b[l]) && c.push(v[l] = f);
                                o(null, b = [], c, u)
                            }
                            for (l = b.length; l--;)(f = b[l]) && (c = o ? ee(r, f) : p[l]) > -1 && (r[c] = !(s[c] = f))
                        }
                    } else b = y(b === s ? b.splice(d, b.length) : b),
                    o ? o(null, s, b, u) : Y.apply(s, b)
                })
            }
            function b(e) {
                for (var t, n, r, i = e.length,
                o = S.relative[e[0].type], s = o || S.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                    return e === t
                },
                s, !0), c = d(function(e) {
                    return ee(t, e) > -1
                },
                s, !0), l = [function(e, n, r) {
                    var i = !o && (r || n !== O) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                    return t = null,
                    i
                }]; a < i; a++) if (n = S.relative[e[a].type]) l = [d(g(l), n)];
                else {
                    if (n = S.filter[e[a].type].apply(null, e[a].matches), n[U]) {
                        for (r = ++a; r < i && !S.relative[e[r].type]; r++);
                        return v(a > 1 && g(l), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*": ""
                        })).replace(ae, "$1"), n, a < r && b(e.slice(a, r)), r < i && b(e = e.slice(r)), r < i && h(e))
                    }
                    l.push(n)
                }
                return g(l)
            }
            function w(e, n) {
                var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, c) {
                    var l, f, p, h = 0,
                    d = "0",
                    g = r && [],
                    m = [],
                    v = O,
                    b = r || o && S.find.TAG("*", c),
                    w = M += null == v ? 1 : Math.random() || .1,
                    x = b.length;
                    for (c && (O = s === R || s || c); d !== x && null != (l = b[d]); d++) {
                        if (o && l) {
                            for (f = 0, s || l.ownerDocument === R || (P(l), a = !L); p = e[f++];) if (p(l, s || R, a)) {
                                u.push(l);
                                break
                            }
                            c && (M = w)
                        }
                        i && ((l = !p && l) && h--, r && g.push(l))
                    }
                    if (h += d, i && d !== h) {
                        for (f = 0; p = n[f++];) p(g, m, s, a);
                        if (r) {
                            if (h > 0) for (; d--;) g[d] || m[d] || (m[d] = G.call(u));
                            m = y(m)
                        }
                        Y.apply(u, m),
                        c && !r && m.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                    }
                    return c && (M = w, O = v),
                    g
                };
                return i ? r(s) : s
            }
            var x, T, S, _, k, E, A, C, O, j, D, P, R, I, L, N, q, F, B, U = "sizzle" + 1 * new Date,
            H = e.document,
            M = 0,
            z = 0,
            $ = n(),
            W = n(),
            Q = n(),
            J = function(e, t) {
                return e === t && (D = !0),
                0
            },
            X = {}.hasOwnProperty,
            V = [],
            G = V.pop,
            K = V.push,
            Y = V.push,
            Z = V.slice,
            ee = function(e, t) {
                for (var n = 0,
                r = e.length; n < r; n++) if (e[n] === t) return n;
                return - 1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            pe = new RegExp("^" + re + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            Te = function(e, t) {
                return t ? "\0" === e ? "�": e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ": "\\" + e
            },
            Se = function() {
                P()
            },
            _e = d(function(e) {
                return e.disabled === !0
            },
            {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Y.apply(V = Z.call(H.childNodes), H.childNodes),
                V[H.childNodes.length].nodeType
            } catch(ke) {
                Y = {
                    apply: V.length ?
                    function(e, t) {
                        K.apply(e, Z.call(t))
                    }: function(e, t) {
                        for (var n = e.length,
                        r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            T = t.support = {},
            k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !! t && "HTML" !== t.nodeName
            },
            P = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e: H;
                return r !== R && 9 === r.nodeType && r.documentElement ? (R = r, I = R.documentElement, L = !k(R), H !== R && (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), T.attributes = i(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }), T.getElementsByTagName = i(function(e) {
                    return e.appendChild(R.createComment("")),
                    !e.getElementsByTagName("*").length
                }), T.getElementsByClassName = me.test(R.getElementsByClassName), T.getById = i(function(e) {
                    return I.appendChild(e).id = U,
                    !R.getElementsByName || !R.getElementsByName(U).length
                }), T.getById ? (S.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && L) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                },
                S.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete S.find.ID, S.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), S.find.TAG = T.getElementsByTagName ?
                function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                }: function(e, t) {
                    var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                },
                S.find.CLASS = T.getElementsByClassName &&
                function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && L) return t.getElementsByClassName(e)
                },
                q = [], N = [], (T.qsa = me.test(R.querySelectorAll)) && (i(function(e) {
                    I.appendChild(e).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + U + "-]").length || N.push("~="),
                    e.querySelectorAll(":checked").length || N.push(":checked"),
                    e.querySelectorAll("a#" + U + "+*").length || N.push(".#.+[+~]")
                }), i(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = R.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"),
                    I.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    N.push(",.*:")
                })), (T.matchesSelector = me.test(F = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && i(function(e) {
                    T.disconnectedMatch = F.call(e, "*"),
                    F.call(e, "[s!='']:x"),
                    q.push("!=", oe)
                }), N = N.length && new RegExp(N.join("|")), q = q.length && new RegExp(q.join("|")), t = me.test(I.compareDocumentPosition), B = t || me.test(I.contains) ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement: e,
                    r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }: function(e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                    return ! 1
                },
                J = t ?
                function(e, t) {
                    if (e === t) return D = !0,
                    0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === R || e.ownerDocument === H && B(H, e) ? -1 : t === R || t.ownerDocument === H && B(H, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                }: function(e, t) {
                    if (e === t) return D = !0,
                    0;
                    var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    u = [t];
                    if (!i || !o) return e === R ? -1 : t === R ? 1 : i ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (i === o) return s(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; a[r] === u[r];) r++;
                    return r ? s(a[r], u[r]) : a[r] === H ? -1 : u[r] === H ? 1 : 0
                },
                R) : R
            },
            t.matches = function(e, n) {
                return t(e, null, null, n)
            },
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== R && P(e), n = n.replace(le, "='$1']"), T.matchesSelector && L && !Q[n + " "] && (!q || !q.test(n)) && (!N || !N.test(n))) try {
                    var r = F.call(e, n);
                    if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch(i) {}
                return t(n, R, null, [e]).length > 0
            },
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== R && P(e),
                B(e, t)
            },
            t.attr = function(e, t) { (e.ownerDocument || e) !== R && P(e);
                var n = S.attrHandle[t.toLowerCase()],
                r = n && X.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                return void 0 !== r ? r: T.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
            },
            t.escape = function(e) {
                return (e + "").replace(xe, Te)
            },
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            },
            t.uniqueSort = function(e) {
                var t, n = [],
                r = 0,
                i = 0;
                if (D = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(J), D) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return j = null,
                e
            },
            _ = t.getText = function(e) {
                var t, n = "",
                r = 0,
                i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else for (; t = e[r++];) n += _(t);
                return n
            },
            S = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, we),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(be, we),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ?
                        function() {
                            return ! 0
                        }: function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = $[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e,
                        function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n: !n || (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice( - 4),
                        a = "of-type" === t;
                        return 1 === r && 0 === i ?
                        function(e) {
                            return !! e.parentNode
                        }: function(t, n, u) {
                            var c, l, f, p, h, d, g = o !== s ? "nextSibling": "previousSibling",
                            m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !u && !a,
                            b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === y: 1 === p.nodeType) return ! 1;
                                        d = g = "only" === e && !d && "nextSibling"
                                    }
                                    return ! 0
                                }
                                if (d = [s ? m.firstChild: m.lastChild], s && v) {
                                    for (p = m, f = p[U] || (p[U] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], h = c[0] === M && c[1], b = h && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || d.pop();) if (1 === p.nodeType && ++b && p === t) {
                                        l[e] = [M, h, b];
                                        break
                                    }
                                } else if (v && (p = t, f = p[U] || (p[U] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], h = c[0] === M && c[1], b = h), b === !1) for (; (p = ++h && p && p[g] || (b = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== y: 1 !== p.nodeType) || !++b || (v && (f = p[U] || (p[U] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), l[e] = [M, b]), p !== t)););
                                return b -= i,
                                b === r || b % r === 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[U] ? o(n) : o.length > 1 ? (i = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]),
                            e[r] = !(t[r] = i[s])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                        n = [],
                        i = A(e.replace(ae, "$1"));
                        return i[U] ? r(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                            i(t, null, o, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(be, we),
                        function(t) {
                            return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                            if (n = L ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                            n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return ! 1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === I
                    },
                    focus: function(e) {
                        return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                        return ! 0
                    },
                    parent: function(e) {
                        return ! S.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return de.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t: n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t: n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t: n; ++r < t;) e.push(r);
                        return e
                    })
                }
            },
            S.pseudos.nth = S.pseudos.eq;
            for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[x] = a(x);
            for (x in {
                submit: !0,
                reset: !0
            }) S.pseudos[x] = u(x);
            return p.prototype = S.filters = S.pseudos,
            S.setFilters = new p,
            E = t.tokenize = function(e, n) {
                var r, i, o, s, a, u, c, l = W[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (a = e, u = [], c = S.preFilter; a;) {
                    r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])),
                    r = !1,
                    (i = ce.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ae, " ")
                    }), a = a.slice(r.length));
                    for (s in S.filter) ! (i = he[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                    if (!r) break
                }
                return n ? a.length: a ? t.error(e) : W(e, u).slice(0)
            },
            A = t.compile = function(e, t) {
                var n, r = [],
                i = [],
                o = Q[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = b(t[n]),
                    o[U] ? r.push(o) : i.push(o);
                    o = Q(e, w(i, r)),
                    o.selector = e
                }
                return o
            },
            C = t.select = function(e, t, n, r) {
                var i, o, s, a, u, c = "function" == typeof e && e,
                l = !r && E(e = c.selector || e);
                if (n = n || [], 1 === l.length) {
                    if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === t.nodeType && L && S.relative[o[1].type]) {
                        if (t = (S.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
                        c && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = he.needsContext.test(e) ? 0 : o.length; i--&&(s = o[i], !S.relative[a = s.type]);) if ((u = S.find[a]) && (r = u(s.matches[0].replace(be, we), ve.test(o[0].type) && f(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && h(o), !e) return Y.apply(n, r),
                        n;
                        break
                    }
                }
                return (c || A(e, l))(r, t, !L, n, !t || ve.test(e) && f(t.parentNode) || t),
                n
            },
            T.sortStable = U.split("").sort(J).join("") === U,
            T.detectDuplicates = !!D,
            P(),
            T.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(R.createElement("fieldset"))
            }),
            i(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width",
            function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            T.attributes && i(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || o("value",
            function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }),
            i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te,
            function(e, t, n) {
                var r;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
            }),
            t
        } (n);
        me.find = xe,
        me.expr = xe.selectors,
        me.expr[":"] = me.expr.pseudos,
        me.uniqueSort = me.unique = xe.uniqueSort,
        me.text = xe.getText,
        me.isXMLDoc = xe.isXML,
        me.contains = xe.contains,
        me.escapeSelector = xe.escape;
        var Te = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && me(e).is(n)) break;
                r.push(e)
            }
            return r
        },
        Se = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        _e = me.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ee = /^.[^:#\[\.,]*$/;
        me.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? me.find.matchesSelector(r, e) ? [r] : [] : me.find.matches(e, me.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        me.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                i = this;
                if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                    for (t = 0; t < r; t++) if (me.contains(i[t], this)) return ! 0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) me.find(e, i[t], n);
                return r > 1 ? me.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(u(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(u(this, e || [], !0))
            },
            is: function(e) {
                return !! u(this, "string" == typeof e && _e.test(e) ? me(e) : e || [], !1).length
            }
        });
        var Ae, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Oe = me.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || Ae, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ce.exec(e), !r || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: re, !0)), ke.test(r[1]) && me.isPlainObject(t)) for (r in t) me.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = re.getElementById(r[2]),
                i && (this[0] = i, this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this)
        };
        Oe.prototype = me.fn,
        Ae = me(re);
        var je = /^(?:parents|prev(?:Until|All))/,
        De = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        me.fn.extend({
            has: function(e) {
                var t = me(e, this),
                n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++) if (me.contains(this, t[e])) return ! 0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && me(e);
                if (!_e.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ue.call(me(e), this[0]) : ue.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(e, t) {
                return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
            }
        }),
        me.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t: null
            },
            parents: function(e) {
                return Te(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Te(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return Te(e, "nextSibling")
            },
            prevAll: function(e) {
                return Te(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Te(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Te(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Se((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Se(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || me.merge([], e.childNodes)
            }
        },
        function(e, t) {
            me.fn[e] = function(n, r) {
                var i = me.map(this, t, n);
                return "Until" !== e.slice( - 5) && (r = n),
                r && "string" == typeof r && (i = me.filter(r, i)),
                this.length > 1 && (De[e] || me.uniqueSort(i), je.test(e) && i.reverse()),
                this.pushStack(i)
            }
        });
        var Pe = /\S+/g;
        me.Callbacks = function(e) {
            e = "string" == typeof e ? l(e) : me.extend({},
            e);
            var t, n, r, i, o = [],
            s = [],
            a = -1,
            u = function() {
                for (i = e.once, r = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;) o[a].apply(n[0], n[1]) === !1 && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1),
                t = !1,
                i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (a = o.length - 1, s.push(n)),
                    function r(t) {
                        me.each(t,
                        function(t, n) {
                            me.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== me.type(n) && r(n)
                        })
                    } (arguments), n && !t && u()),
                    this
                },
                remove: function() {
                    return me.each(arguments,
                    function(e, t) {
                        for (var n; (n = me.inArray(t, o, n)) > -1;) o.splice(n, 1),
                        n <= a && a--
                    }),
                    this
                },
                has: function(e) {
                    return e ? me.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return i = s = [],
                    o = n = "",
                    this
                },
                disabled: function() {
                    return ! o
                },
                lock: function() {
                    return i = s = [],
                    n || t || (o = n = ""),
                    this
                },
                locked: function() {
                    return !! i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! r
                }
            };
            return c
        },
        me.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2], ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return me.Deferred(function(n) {
                            me.each(t,
                            function(t, r) {
                                var i = me.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, r, i) {
                        function o(e, t, r, i) {
                            return function() {
                                var a = this,
                                u = arguments,
                                c = function() {
                                    var n, c;
                                    if (! (e < s)) {
                                        if (n = r.apply(a, u), n === t.promise()) throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        me.isFunction(c) ? i ? c.call(n, o(s, t, f, i), o(s, t, p, i)) : (s++, c.call(n, o(s, t, f, i), o(s, t, p, i), o(s, t, f, t.notifyWith))) : (r !== f && (a = void 0, u = [n]), (i || t.resolveWith)(a, u))
                                    }
                                },
                                l = i ? c: function() {
                                    try {
                                        c()
                                    } catch(n) {
                                        me.Deferred.exceptionHook && me.Deferred.exceptionHook(n, l.stackTrace),
                                        e + 1 >= s && (r !== p && (a = void 0, u = [n]), t.rejectWith(a, u))
                                    }
                                };
                                e ? l() : (me.Deferred.getStackHook && (l.stackTrace = me.Deferred.getStackHook()), n.setTimeout(l))
                            }
                        }
                        var s = 0;
                        return me.Deferred(function(n) {
                            t[0][3].add(o(0, n, me.isFunction(i) ? i: f, n.notifyWith)),
                            t[1][3].add(o(0, n, me.isFunction(e) ? e: f)),
                            t[2][3].add(o(0, n, me.isFunction(r) ? r: p))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? me.extend(e, i) : i
                    }
                },
                o = {};
                return me.each(t,
                function(e, n) {
                    var s = n[2],
                    a = n[5];
                    i[n[1]] = s.add,
                    a && s.add(function() {
                        r = a
                    },
                    t[3 - e][2].disable, t[0][2].lock),
                    s.add(n[3].fire),
                    o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                    },
                    o[n[0] + "With"] = s.fireWith
                }),
                i.promise(o),
                e && e.call(o, o),
                o
            },
            when: function(e) {
                var t = arguments.length,
                n = t,
                r = Array(n),
                i = oe.call(arguments),
                o = me.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this,
                        i[e] = arguments.length > 1 ? oe.call(arguments) : n,
                        --t || o.resolveWith(r, i)
                    }
                };
                if (t <= 1 && (h(e, o.done(s(n)).resolve, o.reject), "pending" === o.state() || me.isFunction(i[n] && i[n].then))) return o.then();
                for (; n--;) h(i[n], s(n), o.reject);
                return o.promise()
            }
        });
        var Re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        me.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && Re.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        },
        me.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var Ie = me.Deferred();
        me.fn.ready = function(e) {
            return Ie.then(e)["catch"](function(e) {
                me.readyException(e)
            }),
            this
        },
        me.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? me.readyWait++:me.ready(!0)
            },
            ready: function(e) { (e === !0 ? --me.readyWait: me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || Ie.resolveWith(re, [me]))
            }
        }),
        me.ready.then = Ie.then,
        "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll ? n.setTimeout(me.ready) : (re.addEventListener("DOMContentLoaded", d), n.addEventListener("load", d));
        var Le = function(e, t, n, r, i, o, s) {
            var a = 0,
            u = e.length,
            c = null == n;
            if ("object" === me.type(n)) {
                i = !0;
                for (a in n) Le(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, me.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                return c.call(me(e), n)
            })), t)) for (; a < u; a++) t(e[a], n, s ? r: r.call(e[a], a, t(e[a], n)));
            return i ? e: c ? t.call(e) : u ? t(e[0], n) : o
        },
        Ne = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        g.uid = 1,
        g.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                Ne(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[me.camelCase(t)] = n;
                else for (r in t) i[me.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n: t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        me.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in r ? [t] : t.match(Pe) || []),
                        n = t.length;
                        for (; n--;) delete r[t[n]]
                    } (void 0 === t || me.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !me.isEmptyObject(t)
            }
        };
        var qe = new g,
        Fe = new g,
        Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ue = /[A-Z]/g;
        me.extend({
            hasData: function(e) {
                return Fe.hasData(e) || qe.hasData(e)
            },
            data: function(e, t, n) {
                return Fe.access(e, t, n)
            },
            removeData: function(e, t) {
                Fe.remove(e, t)
            },
            _data: function(e, t, n) {
                return qe.access(e, t, n)
            },
            _removeData: function(e, t) {
                qe.remove(e, t)
            }
        }),
        me.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Fe.get(o), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = me.camelCase(r.slice(5)), m(o, r, i[r])));
                        qe.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Fe.set(this, e)
                }) : Le(this,
                function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (n = Fe.get(o, e), void 0 !== n) return n;
                        if (n = m(o, e), void 0 !== n) return n
                    } else this.each(function() {
                        Fe.set(this, e, t)
                    })
                },
                null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Fe.remove(this, e)
                })
            }
        }),
        me.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue",
                r = qe.get(e, t),
                n && (!r || me.isArray(n) ? r = qe.access(e, t, me.makeArray(n)) : r.push(n)),
                r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = me.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = me._queueHooks(e, t),
                s = function() {
                    me.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(), r--),
                i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return qe.get(e, n) || qe.access(e, n, {
                    empty: me.Callbacks("once memory").add(function() {
                        qe.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        me.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--),
                arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                    var n = me.queue(this, e, t);
                    me._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    me.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                i = me.Deferred(),
                o = this,
                s = this.length,
                a = function() {--r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = qe.get(o[s], e + "queueHooks"),
                n && n.empty && (r++, n.empty.add(a));
                return a(),
                i.promise(t)
            }
        });
        var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Me = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
        ze = ["Top", "Right", "Bottom", "Left"],
        $e = function(e, t) {
            return e = t || e,
            "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display")
        },
        We = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o],
            e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        },
        Qe = {};
        me.fn.extend({
            show: function() {
                return b(this, !0)
            },
            hide: function() {
                return b(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    $e(this) ? me(this).show() : me(this).hide()
                })
            }
        });
        var Je = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ge.optgroup = Ge.option,
        Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead,
        Ge.th = Ge.td;
        var Ke = /<|&#?\w+;/; !
        function() {
            var e = re.createDocumentFragment(),
            t = e.appendChild(re.createElement("div")),
            n = re.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
        } ();
        var Ye = re.documentElement,
        Ze = /^key/,
        et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        tt = /^([^.]*)(?:\.(.+)|)/;
        me.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, s, a, u, c, l, f, p, h, d, g, m = qe.get(e);
                if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), i && me.find.matchesSelector(Ye, i), n.guid || (n.guid = me.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                    return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(Pe) || [""], c = t.length; c--;) a = tt.exec(t[c]) || [],
                h = g = a[1],
                d = (a[2] || "").split(".").sort(),
                h && (f = me.event.special[h] || {},
                h = (i ? f.delegateType: f.bindType) || h, f = me.event.special[h] || {},
                l = me.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && me.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                },
                o), (p = u[h]) || (p = u[h] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, d, s) !== !1 || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), me.event.global[h] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, s, a, u, c, l, f, p, h, d, g, m = qe.hasData(e) && qe.get(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(Pe) || [""], c = t.length; c--;) if (a = tt.exec(t[c]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
                        for (f = me.event.special[h] || {},
                        h = (r ? f.delegateType: f.bindType) || h, p = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) l = p[o],
                        !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                        s && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || me.removeEvent(e, h, m.handle), delete u[h])
                    } else for (h in u) me.event.remove(e, h + t[c], n, r, !0);
                    me.isEmptyObject(u) && qe.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, s, a = me.event.fix(e),
                u = new Array(arguments.length),
                c = (qe.get(this, "events") || {})[a.type] || [],
                l = me.event.special[a.type] || {};
                for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (a.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, a) !== !1) {
                    for (s = me.event.handlers.call(this, a, c), t = 0; (i = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, r = ((me.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (a.result = r) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
                if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                    for (r = [], n = 0; n < a; n++) o = t[n],
                    i = o.selector + " ",
                    void 0 === r[i] && (r[i] = o.needsContext ? me(i, this).index(u) > -1 : me.find(i, this, null, [u]).length),
                    r[i] && r.push(o);
                    r.length && s.push({
                        elem: u,
                        handlers: r
                    })
                }
                return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }),
                s
            },
            addProp: function(e, t) {
                Object.defineProperty(me.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: me.isFunction(t) ?
                    function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    }: function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[me.expando] ? e: new me.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus) return this.focus(),
                        !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur) return this.blur(),
                        !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && me.nodeName(this, "input")) return this.click(),
                        !1
                    },
                    _default: function(e) {
                        return me.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        me.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        },
        me.Event = function(e, t) {
            return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? S: _, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode: e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t)
        },
        me.Event.prototype = {
            constructor: me.Event,
            isDefaultPrevented: _,
            isPropagationStopped: _,
            isImmediatePropagationStopped: _,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = S,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = S,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = S,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        me.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode: e.keyCode: !e.which && void 0 !== t && et.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        },
        me.event.addProp),
        me.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        },
        function(e, t) {
            me.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                    return i && (i === r || me.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                    n
                }
            }
        }),
        me.fn.extend({
            on: function(e, t, n, r) {
                return E(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return E(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                me(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
                this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0),
                n === !1 && (n = _),
                this.each(function() {
                    me.event.remove(this, e, n, t)
                })
            }
        });
        var nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        rt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^true\/(.*)/,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        me.extend({
            htmlPrefilter: function(e) {
                return e.replace(nt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, s, a = e.cloneNode(!0),
                u = me.contains(e.ownerDocument, e);
                if (! (de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e))) for (s = w(a), o = w(e), r = 0, i = o.length; r < i; r++) D(o[r], s[r]);
                if (t) if (n) for (o = o || w(e), s = s || w(a), r = 0, i = o.length; r < i; r++) j(o[r], s[r]);
                else j(e, a);
                return s = w(a, "script"),
                s.length > 0 && x(s, !u && w(e, "script")),
                a
            },
            cleanData: function(e) {
                for (var t, n, r, i = me.event.special,
                o = 0; void 0 !== (n = e[o]); o++) if (Ne(n)) {
                    if (t = n[qe.expando]) {
                        if (t.events) for (r in t.events) i[r] ? me.event.remove(n, r) : me.removeEvent(n, r, t.handle);
                        n[qe.expando] = void 0
                    }
                    n[Fe.expando] && (n[Fe.expando] = void 0)
                }
            }
        }),
        me.fn.extend({
            detach: function(e) {
                return R(this, e, !0)
            },
            remove: function(e) {
                return R(this, e)
            },
            text: function(e) {
                return Le(this,
                function(e) {
                    return void 0 === e ? me.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                },
                null, e, arguments.length)
            },
            append: function() {
                return P(this, arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = A(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return P(this, arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = A(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return P(this, arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return P(this, arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(w(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e: t,
                this.map(function() {
                    return me.clone(this, e, t)
                })
            },
            html: function(e) {
                return Le(this,
                function(e) {
                    var t = this[0] || {},
                    n = 0,
                    r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !rt.test(e) && !Ge[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = me.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) t = this[n] || {},
                            1 === t.nodeType && (me.cleanData(w(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch(i) {}
                    }
                    t && this.empty().append(e)
                },
                null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return P(this, arguments,
                function(t) {
                    var n = this.parentNode;
                    me.inArray(this, e) < 0 && (me.cleanData(w(this)), n && n.replaceChild(t, this))
                },
                e)
            }
        }),
        me.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(e, t) {
            me.fn[e] = function(e) {
                for (var n, r = [], i = me(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this: this.clone(!0),
                me(i[s])[t](n),
                ae.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var at = /^margin/,
        ut = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
        ct = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }; !
        function() {
            function e() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    a.innerHTML = "",
                    Ye.appendChild(s);
                    var e = n.getComputedStyle(a);
                    t = "1%" !== e.top,
                    o = "2px" === e.marginLeft,
                    r = "4px" === e.width,
                    a.style.marginRight = "50%",
                    i = "4px" === e.marginRight,
                    Ye.removeChild(s),
                    a = null
                }
            }
            var t, r, i, o, s = re.createElement("div"),
            a = re.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), me.extend(de, {
                pixelPosition: function() {
                    return e(),
                    t
                },
                boxSizingReliable: function() {
                    return e(),
                    r
                },
                pixelMarginRight: function() {
                    return e(),
                    i
                },
                reliableMarginLeft: function() {
                    return e(),
                    o
                }
            }))
        } ();
        var lt = /^(none|table(?!-c[ea]).+)/,
        ft = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ht = ["Webkit", "Moz", "ms"],
        dt = re.createElement("div").style;
        me.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = I(e, "opacity");
                            return "" === n ? "1": n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, s, a = me.camelCase(t),
                    u = e.style;
                    return t = me.cssProps[a] || (me.cssProps[a] = N(a) || a),
                    s = me.cssHooks[t] || me.cssHooks[a],
                    void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i: u[t] : (o = typeof n, "string" === o && (i = Me.exec(n)) && i[1] && (n = y(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (me.cssNumber[a] ? "": "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
                }
            },
            css: function(e, t, n, r) {
                var i, o, s, a = me.camelCase(t);
                return t = me.cssProps[a] || (me.cssProps[a] = N(a) || a),
                s = me.cssHooks[t] || me.cssHooks[a],
                s && "get" in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = I(e, t, r)),
                "normal" === i && t in pt && (i = pt[t]),
                "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }),
        me.each(["height", "width"],
        function(e, t) {
            me.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return ! lt.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, r) : We(e, ft,
                    function() {
                        return B(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var i, o = r && ct(e),
                    s = r && F(e, t, r, "border-box" === me.css(e, "boxSizing", !1, o), o);
                    return s && (i = Me.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = me.css(e, t)),
                    q(e, n, s)
                }
            }
        }),
        me.cssHooks.marginLeft = L(de.reliableMarginLeft,
        function(e, t) {
            if (t) return (parseFloat(I(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            },
            function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }),
        me.each({
            margin: "",
            padding: "",
            border: "Width"
        },
        function(e, t) {
            me.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ze[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            at.test(e) || (me.cssHooks[e + t].set = q)
        }),
        me.fn.extend({
            css: function(e, t) {
                return Le(this,
                function(e, t, n) {
                    var r, i, o = {},
                    s = 0;
                    if (me.isArray(t)) {
                        for (r = ct(e), i = t.length; s < i; s++) o[t[s]] = me.css(e, t[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
                },
                e, t, arguments.length > 1)
            }
        }),
        me.Tween = U,
        U.prototype = {
            constructor: U,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || me.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (me.cssNumber[n] ? "": "px")
            },
            cur: function() {
                var e = U.propHooks[this.prop];
                return e && e.get ? e.get(this) : U.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = U.propHooks[this.prop];
                return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : U.propHooks._default.set(this),
                this
            }
        },
        U.prototype.init.prototype = U.prototype,
        U.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0)
                },
                set: function(e) {
                    me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now: me.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        U.propHooks.scrollTop = U.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        me.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        me.fx = U.prototype.init,
        me.fx.step = {};
        var gt, mt, yt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
        me.Animation = me.extend(J, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, Me.exec(t), n),
                    n
                }]
            },
            tweener: function(e, t) {
                me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Pe);
                for (var n, r = 0,
                i = e.length; r < i; r++) n = e[r],
                J.tweeners[n] = J.tweeners[n] || [],
                J.tweeners[n].unshift(t)
            },
            prefilters: [W],
            prefilter: function(e, t) {
                t ? J.prefilters.unshift(e) : J.prefilters.push(e)
            }
        }),
        me.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? me.extend({},
            e) : {
                complete: n || !n && t || me.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !me.isFunction(t) && t
            };
            return me.fx.off || re.hidden ? r.duration = 0 : r.duration = "number" == typeof r.duration ? r.duration: r.duration in me.fx.speeds ? me.fx.speeds[r.duration] : me.fx.speeds._default,
            null != r.queue && r.queue !== !0 || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                me.isFunction(r.old) && r.old.call(this),
                r.queue && me.dequeue(this, r.queue)
            },
            r
        },
        me.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: t
                },
                e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = me.isEmptyObject(e),
                o = me.speed(t, n, r),
                s = function() {
                    var t = J(this, me.extend({},
                    e), o); (i || qe.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0,
                    i = null != e && e + "queueHooks",
                    o = me.timers,
                    s = qe.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else for (i in s) s[i] && s[i].stop && vt.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); ! t && n || me.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = qe.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = me.timers,
                    s = r ? r.length: 0;
                    for (n.finish = !0, me.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        me.each(["toggle", "show", "hide"],
        function(e, t) {
            var n = me.fn[t];
            me.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
            }
        }),
        me.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        },
        function(e, t) {
            me.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        me.timers = [],
        me.fx.tick = function() {
            var e, t = 0,
            n = me.timers;
            for (gt = me.now(); t < n.length; t++) e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
            n.length || me.fx.stop(),
            gt = void 0
        },
        me.fx.timer = function(e) {
            me.timers.push(e),
            e() ? me.fx.start() : me.timers.pop()
        },
        me.fx.interval = 13,
        me.fx.start = function() {
            mt || (mt = n.requestAnimationFrame ? n.requestAnimationFrame(H) : n.setInterval(me.fx.tick, me.fx.interval))
        },
        me.fx.stop = function() {
            n.cancelAnimationFrame ? n.cancelAnimationFrame(mt) : n.clearInterval(mt),
            mt = null
        },
        me.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        me.fn.delay = function(e, t) {
            return e = me.fx ? me.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(i)
                }
            })
        },
        function() {
            var e = re.createElement("input"),
            t = re.createElement("select"),
            n = t.appendChild(re.createElement("option"));
            e.type = "checkbox",
            de.checkOn = "" !== e.value,
            de.optSelected = n.selected,
            e = re.createElement("input"),
            e.value = "t",
            e.type = "radio",
            de.radioValue = "t" === e.value
        } ();
        var bt, wt = me.expr.attrHandle;
        me.fn.extend({
            attr: function(e, t) {
                return Le(this, me.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    me.removeAttr(this, e)
                })
            }
        }),
        me.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (i = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? bt: void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = me.find.attr(e, t), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && me.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                i = t && t.match(Pe);
                if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
            }
        }),
        bt = {
            set: function(e, t, n) {
                return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        me.each(me.expr.match.bool.source.match(/\w+/g),
        function(e, t) {
            var n = wt[t] || me.find.attr;
            wt[t] = function(e, t, r) {
                var i, o, s = t.toLowerCase();
                return r || (o = wt[s], wt[s] = i, i = null != n(e, t, r) ? s: null, wt[s] = o),
                i
            }
        });
        var xt = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;
        me.fn.extend({
            prop: function(e, t) {
                return Le(this, me.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[me.propFix[e] || e]
                })
            }
        }),
        me.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, i = me.propHooks[t]),
                void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = me.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : xt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        de.optSelected || (me.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
        function() {
            me.propFix[this.toLowerCase()] = this
        });
        var St = /[\t\r\n\f]/g;
        me.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, s, a, u = 0;
                if (me.isFunction(e)) return this.each(function(t) {
                    me(this).addClass(e.call(this, t, X(this)))
                });
                if ("string" == typeof e && e) for (t = e.match(Pe) || []; n = this[u++];) if (i = X(n), r = 1 === n.nodeType && (" " + i + " ").replace(St, " ")) {
                    for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    a = me.trim(r),
                    i !== a && n.setAttribute("class", a)
                }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, s, a, u = 0;
                if (me.isFunction(e)) return this.each(function(t) {
                    me(this).removeClass(e.call(this, t, X(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e) for (t = e.match(Pe) || []; n = this[u++];) if (i = X(n), r = 1 === n.nodeType && (" " + i + " ").replace(St, " ")) {
                    for (s = 0; o = t[s++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    a = me.trim(r),
                    i !== a && n.setAttribute("class", a)
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                    me(this).toggleClass(e.call(this, n, X(this), t), t)
                }) : this.each(function() {
                    var t, r, i, o;
                    if ("string" === n) for (r = 0, i = me(this), o = e.match(Pe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = X(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "": qe.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + X(n) + " ").replace(St, " ").indexOf(t) > -1) return ! 0;
                return ! 1
            }
        });
        var _t = /\r/g,
        kt = /[\x20\t\r\n\f]+/g;
        me.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0]; {
                    if (arguments.length) return r = me.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, me(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": me.isArray(i) && (i = me.map(i,
                        function(e) {
                            return null == e ? "": e + ""
                        })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return t = me.valHooks[i.type] || me.valHooks[i.nodeName.toLowerCase()],
                    t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "": n)
                }
            }
        }),
        me.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = me.find.attr(e, "value");
                        return null != t ? t: me.trim(me.text(e)).replace(kt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type,
                        s = o ? null: [], a = o ? i + 1 : r.length, u = i < 0 ? a: o ? i: 0; u < a; u++) if (n = r[u], (n.selected || u === i) && !n.disabled && (!n.parentNode.disabled || !me.nodeName(n.parentNode, "optgroup"))) {
                            if (t = me(n).val(), o) return t;
                            s.push(t)
                        }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options,
                        o = me.makeArray(t), s = i.length; s--;) r = i[s],
                        (r.selected = me.inArray(me.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        me.each(["radio", "checkbox"],
        function() {
            me.valHooks[this] = {
                set: function(e, t) {
                    if (me.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1
                }
            },
            de.checkOn || (me.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            })
        });
        var Et = /^(?:focusinfocus|focusoutblur)$/;
        me.extend(me.event, {
            trigger: function(e, t, r, i) {
                var o, s, a, u, c, l, f, p = [r || re],
                h = fe.call(e, "type") ? e.type: e,
                d = fe.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(h + me.event.triggered) && (h.indexOf(".") > -1 && (d = h.split("."), h = d.shift(), d.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[me.expando] ? e: new me.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : me.makeArray(t, [e]), f = me.event.special[h] || {},
                i || !f.trigger || f.trigger.apply(r, t) !== !1)) {
                    if (!i && !f.noBubble && !me.isWindow(r)) {
                        for (u = f.delegateType || h, Et.test(u + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
                        a = s;
                        a === (r.ownerDocument || re) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0; (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u: f.bindType || h,
                    l = (qe.get(s, "events") || {})[e.type] && qe.get(s, "handle"),
                    l && l.apply(s, t),
                    l = c && s[c],
                    l && l.apply && Ne(s) && (e.result = l.apply(s, t), e.result === !1 && e.preventDefault());
                    return e.type = h,
                    i || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), t) !== !1 || !Ne(r) || c && me.isFunction(r[h]) && !me.isWindow(r) && (a = r[c], a && (r[c] = null), me.event.triggered = h, r[h](), me.event.triggered = void 0, a && (r[c] = a)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = me.extend(new me.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                me.event.trigger(r, null, t)
            }
        }),
        me.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    me.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return me.event.trigger(e, t, n, !0)
            }
        }),
        me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(e, t) {
            me.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        me.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        de.focusin = "onfocusin" in n,
        de.focusin || me.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(e, t) {
            var n = function(e) {
                me.event.simulate(t, e.target, me.event.fix(e))
            };
            me.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                    i = qe.access(r, t);
                    i || r.addEventListener(e, n, !0),
                    qe.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                    i = qe.access(r, t) - 1;
                    i ? qe.access(r, t, i) : (r.removeEventListener(e, n, !0), qe.remove(r, t))
                }
            }
        });
        var At = n.location,
        Ct = me.now(),
        Ot = /\?/;
        me.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch(r) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + e),
            t
        };
        var jt = /\[\]$/,
        Dt = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        Rt = /^(?:input|select|textarea|keygen)/i;
        me.param = function(e, t) {
            var n, r = [],
            i = function(e, t) {
                var n = me.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "": n)
            };
            if (me.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e,
            function() {
                i(this.name, this.value)
            });
            else for (n in e) V(n, e[n], t, i);
            return r.join("&")
        },
        me.fn.extend({
            serialize: function() {
                return me.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = me.prop(this, "elements");
                    return e ? me.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !me(this).is(":disabled") && Rt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Je.test(e))
                }).map(function(e, t) {
                    var n = me(this).val();
                    return null == n ? null: me.isArray(n) ? me.map(n,
                    function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Dt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Dt, "\r\n")
                    }
                }).get()
            }
        });
        var It = /%20/g,
        Lt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Bt = /^(?:GET|HEAD)$/,
        Ut = /^\/\//,
        Ht = {},
        Mt = {},
        zt = "*/".concat("*"),
        $t = re.createElement("a");
        $t.href = At.href,
        me.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: Ft.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": me.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Y(Y(e, me.ajaxSettings), t) : Y(me.ajaxSettings, e)
            },
            ajaxPrefilter: G(Ht),
            ajaxTransport: G(Mt),
            ajax: function(e, t) {
                function r(e, t, r, a) {
                    var c, p, h, w, x, T = t;
                    l || (l = !0, u && n.clearTimeout(u), i = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (w = Z(d, S, r)), w = ee(d, w, S, c), c ? (d.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (me.lastModified[o] = x), x = S.getResponseHeader("etag"), x && (me.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent": 304 === e ? T = "notmodified": (T = w.state, p = w.data, h = w.error, c = !h)) : (h = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || T) + "", c ? y.resolveWith(g, [p, T, S]) : y.rejectWith(g, [S, T, h]), S.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess": "ajaxError", [S, d, c ? p: h]), v.fireWith(g, [S, T]), f && (m.trigger("ajaxComplete", [S, d]), --me.active || me.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0),
                t = t || {};
                var i, o, s, a, u, c, l, f, p, h, d = me.ajaxSetup({},
                t),
                g = d.context || d,
                m = d.context && (g.nodeType || g.jquery) ? me(g) : me.event,
                y = me.Deferred(),
                v = me.Callbacks("once memory"),
                b = d.statusCode || {},
                w = {},
                x = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a) for (a = {}; t = qt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null: t
                    },
                    getAllResponseHeaders: function() {
                        return l ? s: null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (d.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) if (l) S.always(e[S.status]);
                        else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t),
                        r(0, t),
                        this
                    }
                };
                if (y.promise(S), d.url = ((e || d.url || At.href) + "").replace(Ut, At.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(Pe) || [""], null == d.crossDomain) {
                    c = re.createElement("a");
                    try {
                        c.href = d.url,
                        c.href = c.href,
                        d.crossDomain = $t.protocol + "//" + $t.host != c.protocol + "//" + c.host
                    } catch(_) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = me.param(d.data, d.traditional)), K(Ht, d, t, S), l) return S;
                f = me.event && d.global,
                f && 0 === me.active++&&me.event.trigger("ajaxStart"),
                d.type = d.type.toUpperCase(),
                d.hasContent = !Bt.test(d.type),
                o = d.url.replace(Lt, ""),
                d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(It, "+")) : (h = d.url.slice(o.length), d.data && (o += (Ot.test(o) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (o = o.replace(Nt, ""), h = (Ot.test(o) ? "&": "?") + "_=" + Ct+++h), d.url = o + h),
                d.ifModified && (me.lastModified[o] && S.setRequestHeader("If-Modified-Since", me.lastModified[o]), me.etag[o] && S.setRequestHeader("If-None-Match", me.etag[o])),
                (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && S.setRequestHeader("Content-Type", d.contentType),
                S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01": "") : d.accepts["*"]);
                for (p in d.headers) S.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (d.beforeSend.call(g, S, d) === !1 || l)) return S.abort();
                if (T = "abort", v.add(d.complete), S.done(d.success), S.fail(d.error), i = K(Mt, d, t, S)) {
                    if (S.readyState = 1, f && m.trigger("ajaxSend", [S, d]), l) return S;
                    d.async && d.timeout > 0 && (u = n.setTimeout(function() {
                        S.abort("timeout")
                    },
                    d.timeout));
                    try {
                        l = !1,
                        i.send(w, r)
                    } catch(_) {
                        if (l) throw _;
                        r( - 1, _)
                    }
                } else r( - 1, "No Transport");
                return S
            },
            getJSON: function(e, t, n) {
                return me.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return me.get(e, void 0, t, "script")
            }
        }),
        me.each(["get", "post"],
        function(e, t) {
            me[t] = function(e, n, r, i) {
                return me.isFunction(n) && (i = i || r, r = n, n = void 0),
                me.ajax(me.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                },
                me.isPlainObject(e) && e))
            }
        }),
        me._evalUrl = function(e) {
            return me.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        },
        me.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return me.isFunction(e) ? this.each(function(t) {
                    me(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = me(this),
                    n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = me.isFunction(e);
                return this.each(function(n) {
                    me(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    me(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        me.expr.pseudos.hidden = function(e) {
            return ! me.expr.pseudos.visible(e)
        },
        me.expr.pseudos.visible = function(e) {
            return !! (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        me.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch(e) {}
        };
        var Wt = {
            0 : 200,
            1223 : 204
        },
        Qt = me.ajaxSettings.xhr();
        de.cors = !!Qt && "withCredentials" in Qt,
        de.ajax = Qt = !!Qt,
        me.ajaxTransport(function(e) {
            var t, r;
            if (de.cors || Qt && !e.crossDomain) return {
                send: function(i, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) a.setRequestHeader(s, i[s]);
                    t = function(e) {
                        return function() {
                            t && (t = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            }: {
                                text: a.responseText
                            },
                            a.getAllResponseHeaders()))
                        }
                    },
                    a.onload = t(),
                    r = a.onerror = t("error"),
                    void 0 !== a.onabort ? a.onabort = r: a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout(function() {
                            t && r()
                        })
                    },
                    t = t("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch(u) {
                        if (t) throw u
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }),
        me.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        me.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return me.globalEval(e),
                    e
                }
            }
        }),
        me.ajaxPrefilter("script",
        function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        me.ajaxTransport("script",
        function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = me("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && i("error" === e.type ? 404 : 200, e.type)
                        }),
                        re.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Jt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
        me.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Jt.pop() || me.expando + "_" + Ct++;
                return this[e] = !0,
                e
            }
        }),
        me.ajaxPrefilter("json jsonp",
        function(e, t, r) {
            var i, o, s, a = e.jsonp !== !1 && (Xt.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = me.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Xt, "$1" + i) : e.jsonp !== !1 && (e.url += (Ot.test(e.url) ? "&": "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return s || me.error(i + " was not called"),
                s[0]
            },
            e.dataTypes[0] = "json",
            o = n[i],
            n[i] = function() {
                s = arguments
            },
            r.always(function() {
                void 0 === o ? me(n).removeProp(i) : n[i] = o,
                e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)),
                s && me.isFunction(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
        }),
        de.createHTMLDocument = function() {
            var e = re.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        } (),
        me.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var r, i, o;
            return t || (de.createHTMLDocument ? (t = re.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = re.location.href, t.head.appendChild(r)) : t = re),
            i = ke.exec(e),
            o = !n && [],
            i ? [t.createElement(i[1])] : (i = T([e], t, o), o && o.length && me(o).remove(), me.merge([], i.childNodes))
        },
        me.fn.load = function(e, t, n) {
            var r, i, o, s = this,
            a = e.indexOf(" ");
            return a > -1 && (r = me.trim(e.slice(a)), e = e.slice(0, a)),
            me.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
            s.length > 0 && me.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                s.html(r ? me("<div>").append(me.parseHTML(e)).find(r) : e)
            }).always(n &&
            function(e, t) {
                s.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }),
            this
        },
        me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
        function(e, t) {
            me.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        me.expr.pseudos.animated = function(e) {
            return me.grep(me.timers,
            function(t) {
                return e === t.elem
            }).length
        },
        me.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, s, a, u, c, l = me.css(e, "position"),
                f = me(e),
                p = {};
                "static" === l && (e.style.position = "relative"),
                a = f.offset(),
                o = me.css(e, "top"),
                u = me.css(e, "left"),
                c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1,
                c ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0),
                me.isFunction(t) && (t = t.call(e, n, me.extend({},
                a))),
                null != t.top && (p.top = t.top - a.top + s),
                null != t.left && (p.left = t.left - a.left + i),
                "using" in t ? t.using.call(e, p) : f.css(p)
            }
        },
        me.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                    me.offset.setOffset(this, e, t)
                });
                var t, n, r, i, o = this[0];
                if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = te(i), t = i.documentElement, {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), me.nodeName(e[0], "html") || (r = e.offset()), r = {
                        top: r.top + me.css(e[0], "borderTopWidth", !0),
                        left: r.left + me.css(e[0], "borderLeftWidth", !0)
                    }),
                    {
                        top: t.top - r.top - me.css(n, "marginTop", !0),
                        left: t.left - r.left - me.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent;
                    return e || Ye
                })
            }
        }),
        me.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(e, t) {
            var n = "pageYOffset" === t;
            me.fn[e] = function(r) {
                return Le(this,
                function(e, r, i) {
                    var o = te(e);
                    return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset: i, n ? i: o.pageYOffset) : e[r] = i)
                },
                e, r, arguments.length)
            }
        }),
        me.each(["top", "left"],
        function(e, t) {
            me.cssHooks[t] = L(de.pixelPosition,
            function(e, n) {
                if (n) return n = I(e, t),
                ut.test(n) ? me(e).position()[t] + "px": n
            })
        }),
        me.each({
            Height: "height",
            Width: "width"
        },
        function(e, t) {
            me.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            },
            function(n, r) {
                me.fn[r] = function(i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || o === !0 ? "margin": "border");
                    return Le(this,
                    function(t, n, i) {
                        var o;
                        return me.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? me.css(t, n, a) : me.style(t, n, i, a)
                    },
                    t, s ? i: void 0, s)
                }
            })
        }),
        me.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        me.parseJSON = JSON.parse,
        r = [],
        i = function() {
            return me
        }.apply(t, r),
        !(void 0 !== i && (e.exports = i));
        var Vt = n.jQuery,
        Gt = n.$;
        return me.noConflict = function(e) {
            return n.$ === me && (n.$ = Gt),
            e && n.jQuery === me && (n.jQuery = Vt),
            me
        },
        o || (n.jQuery = n.$ = me),
        me
    })
},
function(e, t, n) {
    var r; (function(e, i, o) {
        /*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 *
	 */
        (function() {
            "use strict";
            function s(e) {
                return "function" == typeof e || "object" == typeof e && null !== e
            }
            function a(e) {
                return "function" == typeof e
            }
            function u(e) {
                G = e
            }
            function c(e) {
                ee = e
            }
            function l() {
                return function() {
                    e.nextTick(g)
                }
            }
            function f() {
                return function() {
                    V(g)
                }
            }
            function p() {
                var e = 0,
                t = new re(g),
                n = document.createTextNode("");
                return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = e = ++e % 2
                }
            }
            function h() {
                var e = new MessageChannel;
                return e.port1.onmessage = g,
                function() {
                    e.port2.postMessage(0)
                }
            }
            function d() {
                return function() {
                    setTimeout(g, 1)
                }
            }
            function g() {
                for (var e = 0; e < Z; e += 2) {
                    var t = se[e],
                    n = se[e + 1];
                    t(n),
                    se[e] = void 0,
                    se[e + 1] = void 0
                }
                Z = 0
            }
            function m() {
                try {
                    var e = n(8);
                    return V = e.runOnLoop || e.runOnContext,
                    f()
                } catch(t) {
                    return d()
                }
            }
            function y(e, t) {
                var n = this,
                r = new this.constructor(b);
                void 0 === r[ce] && F(r);
                var i = n._state;
                if (i) {
                    var o = arguments[i - 1];
                    ee(function() {
                        L(i, r, o, n._result)
                    })
                } else D(n, r, e, t);
                return r
            }
            function v(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(b);
                return A(n, e),
                n
            }
            function b() {}
            function w() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function x() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function T(e) {
                try {
                    return e.then
                } catch(t) {
                    return he.error = t,
                    he
                }
            }
            function S(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch(i) {
                    return i
                }
            }
            function _(e, t, n) {
                ee(function(e) {
                    var r = !1,
                    i = S(n, t,
                    function(n) {
                        r || (r = !0, t !== n ? A(e, n) : O(e, n))
                    },
                    function(t) {
                        r || (r = !0, j(e, t))
                    },
                    "Settle: " + (e._label || " unknown promise")); ! r && i && (r = !0, j(e, i))
                },
                e)
            }
            function k(e, t) {
                t._state === fe ? O(e, t._result) : t._state === pe ? j(e, t._result) : D(t, void 0,
                function(t) {
                    A(e, t)
                },
                function(t) {
                    j(e, t)
                })
            }
            function E(e, t, n) {
                t.constructor === e.constructor && n === ae && constructor.resolve === ue ? k(e, t) : n === he ? j(e, he.error) : void 0 === n ? O(e, t) : a(n) ? _(e, t, n) : O(e, t)
            }
            function A(e, t) {
                e === t ? j(e, w()) : s(t) ? E(e, t, T(t)) : O(e, t)
            }
            function C(e) {
                e._onerror && e._onerror(e._result),
                P(e)
            }
            function O(e, t) {
                e._state === le && (e._result = t, e._state = fe, 0 !== e._subscribers.length && ee(P, e))
            }
            function j(e, t) {
                e._state === le && (e._state = pe, e._result = t, ee(C, e))
            }
            function D(e, t, n, r) {
                var i = e._subscribers,
                o = i.length;
                e._onerror = null,
                i[o] = t,
                i[o + fe] = n,
                i[o + pe] = r,
                0 === o && e._state && ee(P, e)
            }
            function P(e) {
                var t = e._subscribers,
                n = e._state;
                if (0 !== t.length) {
                    for (var r, i, o = e._result,
                    s = 0; s < t.length; s += 3) r = t[s],
                    i = t[s + n],
                    r ? L(n, r, i, o) : i(o);
                    e._subscribers.length = 0
                }
            }
            function R() {
                this.error = null
            }
            function I(e, t) {
                try {
                    return e(t)
                } catch(n) {
                    return de.error = n,
                    de
                }
            }
            function L(e, t, n, r) {
                var i, o, s, u, c = a(n);
                if (c) {
                    if (i = I(n, r), i === de ? (u = !0, o = i.error, i = null) : s = !0, t === i) return void j(t, x())
                } else i = r,
                s = !0;
                t._state !== le || (c && s ? A(t, i) : u ? j(t, o) : e === fe ? O(t, i) : e === pe && j(t, i))
            }
            function N(e, t) {
                try {
                    t(function(t) {
                        A(e, t)
                    },
                    function(t) {
                        j(e, t)
                    })
                } catch(n) {
                    j(e, n)
                }
            }
            function q() {
                return ge++
            }
            function F(e) {
                e[ce] = ge++,
                e._state = void 0,
                e._result = void 0,
                e._subscribers = []
            }
            function B(e) {
                return new we(this, e).promise
            }
            function U(e) {
                var t = this;
                return new t(Y(e) ?
                function(n, r) {
                    for (var i = e.length,
                    o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
                }: function(e, t) {
                    t(new TypeError("You must pass an array to race."))
                })
            }
            function H(e) {
                var t = this,
                n = new t(b);
                return j(n, e),
                n
            }
            function M() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function z() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            function $(e) {
                this[ce] = q(),
                this._result = this._state = void 0,
                this._subscribers = [],
                b !== e && ("function" != typeof e && M(), this instanceof $ ? N(this, e) : z())
            }
            function W(e, t) {
                this._instanceConstructor = e,
                this.promise = new e(b),
                this.promise[ce] || F(this.promise),
                Y(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && O(this.promise, this._result))) : j(this.promise, Q())
            }
            function Q() {
                return new Error("Array Methods must be provided an Array")
            }
            function J() {
                var e;
                if ("undefined" != typeof i) e = i;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch(t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var n = e.Promise;
                n && "[object Promise]" === Object.prototype.toString.call(n.resolve()) && !n.cast || (e.Promise = be)
            }
            var X;
            X = Array.isArray ? Array.isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var V, G, K, Y = X,
            Z = 0,
            ee = function(e, t) {
                se[Z] = e,
                se[Z + 1] = t,
                Z += 2,
                2 === Z && (G ? G(g) : K())
            },
            te = "undefined" != typeof window ? window: void 0,
            ne = te || {},
            re = ne.MutationObserver || ne.WebKitMutationObserver,
            ie = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e),
            oe = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            se = new Array(1e3);
            K = ie ? l() : re ? p() : oe ? h() : void 0 === te ? m() : d();
            var ae = y,
            ue = v,
            ce = Math.random().toString(36).substring(16),
            le = void 0,
            fe = 1,
            pe = 2,
            he = new R,
            de = new R,
            ge = 0,
            me = B,
            ye = U,
            ve = H,
            be = $;
            $.all = me,
            $.race = ye,
            $.resolve = ue,
            $.reject = ve,
            $._setScheduler = u,
            $._setAsap = c,
            $._asap = ee,
            $.prototype = {
                constructor: $,
                then: ae,
                "catch": function(e) {
                    return this.then(null, e)
                }
            };
            var we = W;
            W.prototype._enumerate = function() {
                for (var e = this.length,
                t = this._input,
                n = 0; this._state === le && n < e; n++) this._eachEntry(t[n], n)
            },
            W.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor,
                r = n.resolve;
                if (r === ue) {
                    var i = T(e);
                    if (i === ae && e._state !== le) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof i) this._remaining--,
                    this._result[t] = e;
                    else if (n === be) {
                        var o = new n(b);
                        E(o, e, i),
                        this._willSettleAt(o, t)
                    } else this._willSettleAt(new n(function(t) {
                        t(e)
                    }), t)
                } else this._willSettleAt(r(e), t)
            },
            W.prototype._settledAt = function(e, t, n) {
                var r = this.promise;
                r._state === le && (this._remaining--, e === pe ? j(r, n) : this._result[t] = n),
                0 === this._remaining && O(r, this._result)
            },
            W.prototype._willSettleAt = function(e, t) {
                var n = this;
                D(e, void 0,
                function(e) {
                    n._settledAt(fe, t, e)
                },
                function(e) {
                    n._settledAt(pe, t, e)
                })
            };
            var xe = J,
            Te = {
                Promise: be,
                polyfill: xe
            };
            n(9).amd ? (r = function() {
                return Te
            }.call(t, n, t, o), !(void 0 !== r && (o.exports = r))) : "undefined" != typeof o && o.exports ? o.exports = Te: "undefined" != typeof this && (this.ES6Promise = Te),
            xe()
        }).call(this)
    }).call(t, n(6),
    function() {
        return this
    } (), n(7)(e))
},
function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout,
        setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch(t) {
            try {
                return l.call(null, e, 0)
            } catch(t) {
                return l.call(this, e, 0)
            }
        }
    }
    function o(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout,
        clearTimeout(e);
        try {
            return f(e)
        } catch(t) {
            try {
                return f.call(null, e)
            } catch(t) {
                return f.call(this, e)
            }
        }
    }
    function s() {
        g && h && (g = !1, h.length ? d = h.concat(d) : m = -1, d.length && a())
    }
    function a() {
        if (!g) {
            var e = i(s);
            g = !0;
            for (var t = d.length; t;) {
                for (h = d, d = []; ++m < t;) h && h[m].run();
                m = -1,
                t = d.length
            }
            h = null,
            g = !1,
            o(e)
        }
    }
    function u(e, t) {
        this.fun = e,
        this.array = t
    }
    function c() {}
    var l, f, p = e.exports = {}; !
    function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout: n
        } catch(e) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout: r
        } catch(e) {
            f = r
        }
    } ();
    var h, d = [],
    g = !1,
    m = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        d.push(new u(e, t)),
        1 !== d.length || g || i(a)
    },
    u.prototype.run = function() {
        this.fun.apply(null, this.array)
    },
    p.title = "browser",
    p.browser = !0,
    p.env = {},
    p.argv = [],
    p.version = "",
    p.versions = {},
    p.on = c,
    p.addListener = c,
    p.once = c,
    p.off = c,
    p.removeListener = c,
    p.removeAllListeners = c,
    p.emit = c,
    p.prependListener = c,
    p.prependOnceListener = c,
    p.listeners = function(e) {
        return []
    },
    p.binding = function(e) {
        throw new Error("process.binding is not supported")
    },
    p.cwd = function() {
        return "/"
    },
    p.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    },
    p.umask = function() {
        return 0
    }
},
function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {},
        e.paths = [], e.children = [], e.webpackPolyfill = 1),
        e
    }
},
function(e, t) {},
function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
},
function(e, t, n) {
    n(11),
    e.exports = self.fetch.bind(self)
},
function(e, t) { !
    function(e) {
        "use strict";
        function t(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }
        function n(e) {
            return "string" != typeof e && (e = String(e)),
            e
        }
        function r(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return y.iterable && (t[Symbol.iterator] = function() {
                return t
            }),
            t
        }
        function i(e) {
            this.map = {},
            e instanceof i ? e.forEach(function(e, t) {
                this.append(t, e)
            },
            this) : Array.isArray(e) ? e.forEach(function(e) {
                this.append(e[0], e[1])
            },
            this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            },
            this)
        }
        function o(e) {
            return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
        }
        function s(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                },
                e.onerror = function() {
                    n(e.error)
                }
            })
        }
        function a(e) {
            var t = new FileReader,
            n = s(t);
            return t.readAsArrayBuffer(e),
            n
        }
        function u(e) {
            var t = new FileReader,
            n = s(t);
            return t.readAsText(e),
            n
        }
        function c(e) {
            for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
            return n.join("")
        }
        function l(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)),
            t.buffer
        }
        function f() {
            return this.bodyUsed = !1,
            this._initBody = function(e) {
                if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e;
                else if (y.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (y.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (y.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (y.arrayBuffer && y.blob && b(e)) this._bodyArrayBuffer = l(e.buffer),
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!y.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !w(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = l(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            },
            y.blob && (this.blob = function() {
                var e = o(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            },
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
            }),
            this.text = function() {
                var e = o(this);
                if (e) return e;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            },
            y.formData && (this.formData = function() {
                return this.text().then(d)
            }),
            this.json = function() {
                return this.text().then(JSON.parse)
            },
            this
        }
        function p(e) {
            var t = e.toUpperCase();
            return x.indexOf(t) > -1 ? t: e
        }
        function h(e, t) {
            t = t || {};
            var n = t.body;
            if (e instanceof h) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url,
                this.credentials = e.credentials,
                t.headers || (this.headers = new i(e.headers)),
                this.method = e.method,
                this.mode = e.mode,
                n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new i(t.headers)), this.method = p(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function d(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            }),
            t
        }
        function g(e) {
            var t = new i,
            n = e.replace(/\r?\n[\t ]+/g, " ");
            return n.split(/\r?\n/).forEach(function(e) {
                var n = e.split(":"),
                r = n.shift().trim();
                if (r) {
                    var i = n.join(":").trim();
                    t.append(r, i)
                }
            }),
            t
        }
        function m(e, t) {
            t || (t = {}),
            this.type = "default",
            this.status = void 0 === t.status ? 200 : t.status,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText" in t ? t.statusText: "OK",
            this.headers = new i(t.headers),
            this.url = t.url || "",
            this._initBody(e)
        }
        if (!e.fetch) {
            var y = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e &&
                function() {
                    try {
                        return new Blob,
                        !0
                    } catch(e) {
                        return ! 1
                    }
                } (),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (y.arrayBuffer) var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            b = function(e) {
                return e && DataView.prototype.isPrototypeOf(e)
            },
            w = ArrayBuffer.isView ||
            function(e) {
                return e && v.indexOf(Object.prototype.toString.call(e)) > -1
            };
            i.prototype.append = function(e, r) {
                e = t(e),
                r = n(r);
                var i = this.map[e];
                this.map[e] = i ? i + "," + r: r
            },
            i.prototype["delete"] = function(e) {
                delete this.map[t(e)]
            },
            i.prototype.get = function(e) {
                return e = t(e),
                this.has(e) ? this.map[e] : null
            },
            i.prototype.has = function(e) {
                return this.map.hasOwnProperty(t(e))
            },
            i.prototype.set = function(e, r) {
                this.map[t(e)] = n(r)
            },
            i.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            },
            i.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }),
                r(e)
            },
            i.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }),
                r(e)
            },
            i.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }),
                r(e)
            },
            y.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            h.prototype.clone = function() {
                return new h(this, {
                    body: this._bodyInit
                })
            },
            f.call(h.prototype),
            f.call(m.prototype),
            m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            },
            m.error = function() {
                var e = new m(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error",
                e
            };
            var T = [301, 302, 303, 307, 308];
            m.redirect = function(e, t) {
                if (T.indexOf(t) === -1) throw new RangeError("Invalid status code");
                return new m(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            },
            e.Headers = i,
            e.Request = h,
            e.Response = m,
            e.fetch = function(e, t) {
                return new Promise(function(n, r) {
                    var i = new h(e, t),
                    o = new XMLHttpRequest;
                    o.onload = function() {
                        var e = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: g(o.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL" in o ? o.responseURL: e.headers.get("X-Request-URL");
                        var t = "response" in o ? o.response: o.responseText;
                        n(new m(t, e))
                    },
                    o.onerror = function() {
                        r(new TypeError("Network request failed"))
                    },
                    o.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    },
                    o.open(i.method, i.url, !0),
                    "include" === i.credentials ? o.withCredentials = !0 : "omit" === i.credentials && (o.withCredentials = !1),
                    "responseType" in o && y.blob && (o.responseType = "blob"),
                    i.headers.forEach(function(e, t) {
                        o.setRequestHeader(t, e)
                    }),
                    o.send("undefined" == typeof i._bodyInit ? null: i._bodyInit)
                })
            },
            e.fetch.polyfill = !0
        }
    } ("undefined" != typeof self ? self: this)
},
function(e, t, n) {
    "use strict";
    var r = n(13),
    i = n(66),
    o = i.get;
    i.setLanguage(r.config.language),
    i.get = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.unshift("help-test." + e),
        o.apply(this, t)
    }
},
function(e, t, n) {
    "use strict";
    var r = n(14),
    i = n(15),
    o = n(16),
    s = document.getElementById("config"),
    a = null;
    if (s && (s.remove(), a = JSON.parse(s.textContent.trim()), !a.language)) {
        var u = {
            "zh-TW": "zh_tw"
        },
        c = a.accepts,
        l = a.LANGUAGES,
        f = r.guessLanguage(c, l, u);
        a.language = f
    }
    t.config = o({
        user: null,
        ip: "localhost",
        language: "zh"
    },
    i, a)
},
function(e, t) {
    function n(e, t, n) {
        for (;~e.indexOf(t);) e = e.replace(t, n);
        return e
    }
    function r(e, t, r) {
        for (var i = 0,
        o = r.length; i < o; i++) {
            var s = r[i],
            a = t + (i + 1) + "";
            e = n(e, a, s)
        }
        return e
    }
    function i(e, t, n) {
        if (!n && !n.length) return e;
        for (var r = t + "s";~e.indexOf(r) && n.length;) e = e.replace(r, n.shift());
        return e
    }
    function o(e) {
        var t = e.split(","),
        n = {};
        return t.map(function(e) {
            var t = e.trim().split(";q=");
            if (t.length < 2) t[1] = 1;
            else {
                var r = +t[1];
                t[1] = r || 0
            }
            return n[t[0]] = t[1],
            t[0]
        }).filter(function(e) {
            return n[e] > 0
        }).sort(function(e, t) {
            return n[t] - n[e]
        })
    }
    e.exports = {
        language: "en",
        defaultLanguage: "en",
        replaceKey: "%",
        emptyKey: "&empty;",
        localesSet: {},
        setReplace: function(e) {
            return this.replaceKey = e,
            this
        },
        setEmptyKey: function(e) {
            this.emptyKey = e
        },
        setDefaultLanguage: function(e) {
            this.defaultLanguage = e
        },
        guessLanguage: function(e, t, n) {
            n || (n = {});
            for (var r = o(e), i = 0, s = r.length; i < s; i++) {
                var a = r[i],
                u = a.split("-", 2),
                c = u[0],
                l = n[a];
                if (~t.indexOf(a)) return a;
                if (~t.indexOf(l)) return l;
                if (~t.indexOf(c)) return c
            }
            return this.defaultLanguage
        },
        getLanguage: function() {
            return this.language
        },
        setLanguage: function(e) {
            return this.language = e,
            this
        },
        getLocales: function(e) {
            return e ? this.localesSet[e] || {}: this.localesSet[this.language] || {}
        },
        setLocales: function(e, t) {
            var n = this.localesSet[e];
            n || (n = this.localesSet[e] = {});
            for (var r = Object.keys(t), i = 0, o = r.length; i < o; i++) {
                var s = r[i],
                a = t[s];
                n[s] = a
            }
            return this
        },
        get: function(e) {
            var t = [],
            n = arguments.length;
            if (n > 1) for (var r = 1; r < n; r++) t.push(arguments[r]);
            return this.privateGet(e, this.language, t)
        },
        point: function(e, t) {
            var n = [],
            r = arguments.length;
            if (r > 2) for (var i = 2; i < r; i++) n.push(arguments[i]);
            return this.privateGet(e, t, n)
        },
        privateGet: function(e, t, r) {
            var i = this.getLocales(t),
            o = this.getLocales(this.defaultLanguage),
            s = i[e] || o[e] || e;
            return r.length && (s = this.privateTranslate(s, e, r)),
            s = n(s, this.emptyKey, "")
        },
        privateTranslate: function(e, t, n) {
            return e ? (e = r(e, this.replaceKey, n), e = i(e, this.replaceKey, n)) : t
        }
    }
},
function(e, t) {
    e.exports = {
        HOST: "http://project.ci",
        API_HOST: "http://project.ci/api",
        FILE_HOST: "http://striker.project.ci",
        PUSH_HOST: "http://messaging.project.ci",
        INTEGRATION_HOST: "http://integration.project.ci",
        LANGUAGES: ["zh", "zh_tw", "en", "ja", "ko"]
    }
},
function(e, t, n) {
    var r = n(17),
    i = n(35),
    o = n(36),
    s = n(46),
    a = n(49),
    u = n(50),
    c = Object.prototype,
    l = c.hasOwnProperty,
    f = o(function(e, t) {
        if (a(t) || s(t)) return void i(t, u(t), e);
        for (var n in t) l.call(t, n) && r(e, n, t[n])
    });
    e.exports = f
},
function(e, t, n) {
    function r(e, t, n) {
        var r = e[t];
        a.call(e, t) && o(r, n) && (void 0 !== n || t in e) || i(e, t, n)
    }
    var i = n(18),
    o = n(34),
    s = Object.prototype,
    a = s.hasOwnProperty;
    e.exports = r
},
function(e, t, n) {
    function r(e, t, n) {
        "__proto__" == t && i ? i(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    var i = n(19);
    e.exports = r
},
function(e, t, n) {
    var r = n(20),
    i = function() {
        try {
            var e = r(Object, "defineProperty");
            return e({},
            "", {}),
            e
        } catch(t) {}
    } ();
    e.exports = i
},
function(e, t, n) {
    function r(e, t) {
        var n = o(e, t);
        return i(n) ? n: void 0
    }
    var i = n(21),
    o = n(33);
    e.exports = r
},
function(e, t, n) {
    function r(e) {
        if (!s(e) || o(e)) return ! 1;
        var t = i(e) ? d: c;
        return t.test(a(e))
    }
    var i = n(22),
    o = n(30),
    s = n(29),
    a = n(32),
    u = /[\\^$.*+?()[\]{}|]/g,
    c = /^\[object .+?Constructor\]$/,
    l = Function.prototype,
    f = Object.prototype,
    p = l.toString,
    h = f.hasOwnProperty,
    d = RegExp("^" + p.call(h).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = r
},
function(e, t, n) {
    function r(e) {
        if (!o(e)) return ! 1;
        var t = i(e);
        return t == a || t == u || t == s || t == c
    }
    var i = n(23),
    o = n(29),
    s = "[object AsyncFunction]",
    a = "[object Function]",
    u = "[object GeneratorFunction]",
    c = "[object Proxy]";
    e.exports = r
},
function(e, t, n) {
    function r(e) {
        return null == e ? void 0 === e ? u: a: c && c in Object(e) ? o(e) : s(e)
    }
    var i = n(24),
    o = n(27),
    s = n(28),
    a = "[object Null]",
    u = "[object Undefined]",
    c = i ? i.toStringTag: void 0;
    e.exports = r
},
function(e, t, n) {
    var r = n(25),
    i = r.Symbol;
    e.exports = i
},
function(e, t, n) {
    var r = n(26),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r || i || Function("return this")();
    e.exports = o
},
function(e, t) { (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) {
    function r(e) {
        var t = s.call(e, u),
        n = e[u];
        try {
            e[u] = void 0;
            var r = !0
        } catch(i) {}
        var o = a.call(e);
        return r && (t ? e[u] = n: delete e[u]),
        o
    }
    var i = n(24),
    o = Object.prototype,
    s = o.hasOwnProperty,
    a = o.toString,
    u = i ? i.toStringTag: void 0;
    e.exports = r
},
function(e, t) {
    function n(e) {
        return i.call(e)
    }
    var r = Object.prototype,
    i = r.toString;
    e.exports = n
},
function(e, t) {
    function n(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    e.exports = n
},
function(e, t, n) {
    function r(e) {
        return !! o && o in e
    }
    var i = n(31),
    o = function() {
        var e = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e: ""
    } ();
    e.exports = r
},
function(e, t, n) {
    var r = n(25),
    i = r["__core-js_shared__"];
    e.exports = i
},
function(e, t) {
    function n(e) {
        if (null != e) {
            try {
                return i.call(e)
            } catch(t) {}
            try {
                return e + ""
            } catch(t) {}
        }
        return ""
    }
    var r = Function.prototype,
    i = r.toString;
    e.exports = n
},
function(e, t) {
    function n(e, t) {
        return null == e ? void 0 : e[t]
    }
    e.exports = n
},
function(e, t) {
    function n(e, t) {
        return e === t || e !== e && t !== t
    }
    e.exports = n
},
function(e, t, n) {
    function r(e, t, n, r) {
        var s = !n;
        n || (n = {});
        for (var a = -1,
        u = t.length; ++a < u;) {
            var c = t[a],
            l = r ? r(n[c], e[c], c, n, e) : void 0;
            void 0 === l && (l = e[c]),
            s ? o(n, c, l) : i(n, c, l)
        }
        return n
    }
    var i = n(17),
    o = n(18);
    e.exports = r
},
function(e, t, n) {
    function r(e) {
        return i(function(t, n) {
            var r = -1,
            i = n.length,
            s = i > 1 ? n[i - 1] : void 0,
            a = i > 2 ? n[2] : void 0;
            for (s = e.length > 3 && "function" == typeof s ? (i--, s) : void 0, a && o(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++r < i;) {
                var u = n[r];
                u && e(t, u, r, s)
            }
            return t
        })
    }
    var i = n(37),
    o = n(45);
    e.exports = r
},
function(e, t, n) {
    function r(e, t) {
        return s(o(e, t, i), e + "")
    }
    var i = n(38),
    o = n(39),
    s = n(41);
    e.exports = r
},
function(e, t) {
    function n(e) {
        return e
    }
    e.exports = n
},
function(e, t, n) {
    function r(e, t, n) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments,
            s = -1,
            a = o(r.length - t, 0), u = Array(a); ++s < a;) u[s] = r[t + s];
            s = -1;
            for (var c = Array(t + 1); ++s < t;) c[s] = r[s];
            return c[t] = n(u),
            i(e, this, c)
        }
    }
    var i = n(40),
    o = Math.max;
    e.exports = r
},
function(e, t) {
    function n(e, t, n) {
        switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    e.exports = n
},
function(e, t, n) {
    var r = n(42),
    i = n(44),
    o = i(r);
    e.exports = o
},
function(e, t, n) {
    var r = n(43),
    i = n(19),
    o = n(38),
    s = i ?
    function(e, t) {
        return i(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: r(t),
            writable: !0
        })
    }: o;
    e.exports = s
},
function(e, t) {
    function n(e) {
        return function() {
            return e
        }
    }
    e.exports = n
},
function(e, t) {
    function n(e) {
        var t = 0,
        n = 0;
        return function() {
            var s = o(),
            a = i - (s - n);
            if (n = s, a > 0) {
                if (++t >= r) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var r = 800,
    i = 16,
    o = Date.now;
    e.exports = n
},
function(e, t, n) {
    function r(e, t, n) {
        if (!a(n)) return ! 1;
        var r = typeof t;
        return !! ("number" == r ? o(n) && s(t, n.length) : "string" == r && t in n) && i(n[t], e)
    }
    var i = n(34),
    o = n(46),
    s = n(48),
    a = n(29);
    e.exports = r
},
function(e, t, n) {
    function r(e) {
        return null != e && o(e.length) && !i(e)
    }
    var i = n(22),
    o = n(47);
    e.exports = r
},
function(e, t) {
    function n(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
    }
    var r = 9007199254740991;
    e.exports = n
},
function(e, t) {
    function n(e, t) {
        var n = typeof e;
        return t = null == t ? r: t,
        !!t && ("number" == n || "symbol" != n && i.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var r = 9007199254740991,
    i = /^(?:0|[1-9]\d*)$/;
    e.exports = n
},
function(e, t) {
    function n(e) {
        var t = e && e.constructor,
        n = "function" == typeof t && t.prototype || r;
        return e === n
    }
    var r = Object.prototype;
    e.exports = n
},
function(e, t, n) {
    function r(e) {
        return s(e) ? i(e) : o(e)
    }
    var i = n(51),
    o = n(63),
    s = n(46);
    e.exports = r
},
function(e, t, n) {
    function r(e, t) {
        var n = s(e),
        r = !n && o(e),
        l = !n && !r && a(e),
        p = !n && !r && !l && c(e),
        h = n || r || l || p,
        d = h ? i(e.length, String) : [],
        g = d.length;
        for (var m in e) ! t && !f.call(e, m) || h && ("length" == m || l && ("offset" == m || "parent" == m) || p && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || u(m, g)) || d.push(m);
        return d
    }
    var i = n(52),
    o = n(53),
    s = n(56),
    a = n(57),
    u = n(48),
    c = n(59),
    l = Object.prototype,
    f = l.hasOwnProperty;
    e.exports = r
},
function(e, t) {
    function n(e, t) {
        for (var n = -1,
        r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }
    e.exports = n
},
function(e, t, n) {
    var r = n(54),
    i = n(55),
    o = Object.prototype,
    s = o.hasOwnProperty,
    a = o.propertyIsEnumerable,
    u = r(function() {
        return arguments
    } ()) ? r: function(e) {
        return i(e) && s.call(e, "callee") && !a.call(e, "callee")
    };
    e.exports = u
},
function(e, t, n) {
    function r(e) {
        return o(e) && i(e) == s
    }
    var i = n(23),
    o = n(55),
    s = "[object Arguments]";
    e.exports = r
},
function(e, t) {
    function n(e) {
        return null != e && "object" == typeof e
    }
    e.exports = n
},
function(e, t) {
    var n = Array.isArray;
    e.exports = n
},
function(e, t, n) { (function(e) {
        var r = n(25),
        i = n(58),
        o = "object" == typeof t && t && !t.nodeType && t,
        s = o && "object" == typeof e && e && !e.nodeType && e,
        a = s && s.exports === o,
        u = a ? r.Buffer: void 0,
        c = u ? u.isBuffer: void 0,
        l = c || i;
        e.exports = l
    }).call(t, n(7)(e))
},
function(e, t) {
    function n() {
        return ! 1
    }
    e.exports = n
},
function(e, t, n) {
    var r = n(60),
    i = n(61),
    o = n(62),
    s = o && o.isTypedArray,
    a = s ? i(s) : r;
    e.exports = a
},
function(e, t, n) {
    function r(e) {
        return s(e) && o(e.length) && !!D[i(e)]
    }
    var i = n(23),
    o = n(47),
    s = n(55),
    a = "[object Arguments]",
    u = "[object Array]",
    c = "[object Boolean]",
    l = "[object Date]",
    f = "[object Error]",
    p = "[object Function]",
    h = "[object Map]",
    d = "[object Number]",
    g = "[object Object]",
    m = "[object RegExp]",
    y = "[object Set]",
    v = "[object String]",
    b = "[object WeakMap]",
    w = "[object ArrayBuffer]",
    x = "[object DataView]",
    T = "[object Float32Array]",
    S = "[object Float64Array]",
    _ = "[object Int8Array]",
    k = "[object Int16Array]",
    E = "[object Int32Array]",
    A = "[object Uint8Array]",
    C = "[object Uint8ClampedArray]",
    O = "[object Uint16Array]",
    j = "[object Uint32Array]",
    D = {};
    D[T] = D[S] = D[_] = D[k] = D[E] = D[A] = D[C] = D[O] = D[j] = !0,
    D[a] = D[u] = D[w] = D[c] = D[x] = D[l] = D[f] = D[p] = D[h] = D[d] = D[g] = D[m] = D[y] = D[v] = D[b] = !1,
    e.exports = r
},
function(e, t) {
    function n(e) {
        return function(t) {
            return e(t)
        }
    }
    e.exports = n
},
function(e, t, n) { (function(e) {
        var r = n(26),
        i = "object" == typeof t && t && !t.nodeType && t,
        o = i && "object" == typeof e && e && !e.nodeType && e,
        s = o && o.exports === i,
        a = s && r.process,
        u = function() {
            try {
                var e = o && o.require && o.require("util").types;
                return e ? e: a && a.binding && a.binding("util")
            } catch(t) {}
        } ();
        e.exports = u
    }).call(t, n(7)(e))
},
function(e, t, n) {
    function r(e) {
        if (!i(e)) return o(e);
        var t = [];
        for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
    var i = n(49),
    o = n(64),
    s = Object.prototype,
    a = s.hasOwnProperty;
    e.exports = r
},
function(e, t, n) {
    var r = n(65),
    i = r(Object.keys, Object);
    e.exports = i
},
function(e, t) {
    function n(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    e.exports = n
},
function(e, t, n) {
    var r = n(14);
    r.setLocales("zh", {
        "help-test.title": "影子论坛网络自助测试",
        "help-test.waiting": "等待执行",
        "help-test.checking": "测试中...",
        "help-test.item.API.success": "成功",
        "help-test.item.API.title": "API测试",
        "help-test.item.API.error": "API异常",
        "help-test.item.API.unauthorized": "用户授权失败",
        "help-test.item.CDN.error": "CDN文件加载异常",
        "help-test.item.fileServer.error": "文件传输异常",
        "help-test.item.fileServer.success": "上传成功",
        "help-test.item.fileServer.title": "文件测试",
        "help-test.item.fileServer.uploading": "文件上传中...",
        "help-test.item.ip.title": "IP地址",
        "help-test.item.jQuery.title": "jQuery",
        "help-test.item.js.title": "是否开启JS",
        "help-test.item.userAgent.title": "Agent信息",
        "help-test.item.webSocket.checking": "Socket连接中...",
        "help-test.item.webSocket.errMsg": "Socket异常",
        "help-test.item.webSocket.success": "连接成功",
        "help-test.item.webSocket.title": "WebSocket连接测试",
        "help-test.jQuery.enable.false": "jQuery加载异常",
        "help-test.jQuery.enable.true": "jQuery加载成功",
        "help-test.js.enable.false": "JS状态异常",
        "help-test.js.enable.true": "JS正常开启",
        "help-test.description.checking": "正在检测网络状况，可能需要一点时间才能结束...",
        "help-test.description.trouble": "当你遇到网络问题的时候，可以把下面的测试结果提交给 影子论坛 ，帮助我们改善网络质量。",
        "help-test.description.nologin": "您可以提供当前页面的截图到邮箱swatxhim@outlook.com  帮助我们构建更稳定好用的 影子论坛。",
        "help-test.item.submit.error": "API异常无法提交，可以给 影子论坛 提供截图反馈",
        "help-test.item.submit.prepared": "提交到 影子论坛 ",
        "help-test.item.submit.submiting": "正在努力提交到 Teambition ...",
        "help-test.item.submit.submited": "我们非常高兴收到您的测试结果，这将有助于我们构建稳定好用的 Teambition。"
    }),
    r.setLocales("zh_tw", {
        "help-test.title": "網絡自助測試",
        "help-test.waiting": "等待執行",
        "help-test.checking": "測試中…",
        "help-test.item.API.success": "成功",
        "help-test.item.API.title": "API測試",
        "help-test.item.API.error": "API异常",
        "help-test.item.API.unauthorized": "用戶授權失敗",
        "help-test.item.CDN.error": "CDN檔案加載异常",
        "help-test.item.fileServer.error": "檔案傳輸异常",
        "help-test.item.fileServer.success": "上傳成功",
        "help-test.item.fileServer.title": "檔案測試",
        "help-test.item.fileServer.uploading": "檔案上傳中…",
        "help-test.item.ip.title": "IP地址",
        "help-test.item.jQuery.title": "jQuery",
        "help-test.item.js.title": "是否開啟JS",
        "help-test.item.userAgent.title": "Agent資訊",
        "help-test.item.webSocket.checking": "Socket連接中…",
        "help-test.item.webSocket.errMsg": "Socket异常",
        "help-test.item.webSocket.success": "連接成功",
        "help-test.item.webSocket.title": "WebSocket連接測試",
        "help-test.jQuery.enable.false": "jQuery加載异常",
        "help-test.jQuery.enable.true": "jQuery加載成功",
        "help-test.js.enable.false": "JS狀態异常",
        "help-test.js.enable.true": "JS正常開啟",
        "help-test.description.checking": "正在檢測網絡狀況，可能需要一點時間才能結束…",
        "help-test.description.trouble": "當你有網絡問題的時候，可以把這裡的測試結果提交給Teambition，幫助我們改善網絡質量。",
        "help-test.description.nologin": "您可以提供當前頁面的截圖給我們，幫助我們構建更穩定好用的Teambition。",
        "help-test.item.submit.error": "API异常無法提交，可以給Teambition提供截圖迴響",
        "help-test.item.submit.prepared": "提交到Teambition",
        "help-test.item.submit.submiting": "正在努力提交到Teambition…",
        "help-test.item.submit.submited": "我們非常高興收到您的測試結果，這將有助於我們構建穩定好用的Teambition。"
    }),
    r.setLocales("en", {
        "help-test.title": "Self-Help Tests",
        "help-test.waiting": "Waiting...",
        "help-test.checking": "testing...",
        "help-test.item.API.success": "Success",
        "help-test.item.API.title": "API Test",
        "help-test.item.API.error": "404 Not Found",
        "help-test.item.API.unauthorized": "User authorization Error",
        "help-test.item.CDN.error": "CDN File Error",
        "help-test.item.fileServer.error": "File Upload Error",
        "help-test.item.fileServer.success": "File Upload Success",
        "help-test.item.fileServer.title": "File Upload Test",
        "help-test.item.fileServer.uploading": "Uploading...",
        "help-test.item.ip.title": "IP Address",
        "help-test.item.jQuery.title": "jQuery",
        "help-test.item.js.title": "JavaScript",
        "help-test.item.userAgent.title": "User Agent",
        "help-test.item.webSocket.checking": "Socket Connecting...",
        "help-test.item.webSocket.errMsg": "Socket Error",
        "help-test.item.webSocket.success": "Success",
        "help-test.item.webSocket.title": "WebSocket",
        "help-test.jQuery.enable.false": "jQuery Error",
        "help-test.jQuery.enable.true": "Success",
        "help-test.js.enable.false": "JS Error",
        "help-test.js.enable.true": "Success",
        "help-test.description.checking": "The tests are still running - give them a few seconds to complete.",
        "help-test.description.trouble": "Having trouble? A series of automated tests below will try and figure out what's up.",
        "help-test.description.nologin": "You can simply send the screenshot to us  to make Teambition better !",
        "help-test.item.submit.error": "API ERROR! please send the screenshot to us",
        "help-test.item.submit.prepared": "Send Results to Teambition",
        "help-test.item.submit.submiting": "Sending...",
        "help-test.item.submit.submited": "Thanks for your feedback,we'll make Teambition better"
    }),
    r.setLocales("ja", {
        "help-test.title": "影子论坛网络自助测试",
        "help-test.waiting": "等待执行",
        "help-test.checking": "测试中...",
        "help-test.item.API.success": "成功",
        "help-test.item.API.title": "API测试",
        "help-test.item.API.error": "API异常",
        "help-test.item.API.unauthorized": "用户授权失败",
        "help-test.item.CDN.error": "CDN文件加载异常",
        "help-test.item.fileServer.error": "文件传输异常",
        "help-test.item.fileServer.success": "上传成功",
        "help-test.item.fileServer.title": "文件测试",
        "help-test.item.fileServer.uploading": "文件上传中...",
        "help-test.item.ip.title": "IP地址",
        "help-test.item.jQuery.title": "jQuery",
        "help-test.item.js.title": "是否开启JS",
        "help-test.item.userAgent.title": "Agent信息",
        "help-test.item.webSocket.checking": "Socket连接中...",
        "help-test.item.webSocket.errMsg": "Socket异常",
        "help-test.item.webSocket.success": "连接成功",
        "help-test.item.webSocket.title": "WebSocket连接测试",
        "help-test.jQuery.enable.false": "jQuery加载异常",
        "help-test.jQuery.enable.true": "jQuery加载成功",
        "help-test.js.enable.false": "JS状态异常",
        "help-test.js.enable.true": "JS正常开启",
        "help-test.description.checking": "正在检测网络状况，可能需要一点时间才能结束...",
        "help-test.description.trouble": "当你有网络问题的时候，可以把这里的测试结果提交给 影子论坛 ，帮助我们改善网络质量。",
        "help-test.description.nologin": "您可以提供当前页面的截图给我们，帮助我们构建更稳定好用的 Teambition。",
        "help-test.item.submit.error": "API异常无法提交，可以给 Teambition 提供截图反馈",
        "help-test.item.submit.prepared": "提交到 Teambition ",
        "help-test.item.submit.submiting": "正在努力提交到 Teambition ...",
        "help-test.item.submit.submited": "我们非常高兴收到您的测试结果，这将有助于我们构建稳定好用的 Teambition。"
    }),
    r.setLocales("ko", {
        "help-test.title": "影子论坛网络自助测试",
        "help-test.waiting": "等待执行",
        "help-test.checking": "测试中...",
        "help-test.item.API.success": "成功",
        "help-test.item.API.title": "API测试",
        "help-test.item.API.error": "API异常",
        "help-test.item.API.unauthorized": "用户授权失败",
        "help-test.item.CDN.error": "CDN文件加载异常",
        "help-test.item.fileServer.error": "文件传输异常",
        "help-test.item.fileServer.success": "上传成功",
        "help-test.item.fileServer.title": "文件测试",
        "help-test.item.fileServer.uploading": "文件上传中...",
        "help-test.item.ip.title": "IP地址",
        "help-test.item.jQuery.title": "jQuery",
        "help-test.item.js.title": "是否开启JS",
        "help-test.item.userAgent.title": "Agent信息",
        "help-test.item.webSocket.checking": "Socket连接中...",
        "help-test.item.webSocket.errMsg": "Socket异常",
        "help-test.item.webSocket.success": "连接成功",
        "help-test.item.webSocket.title": "WebSocket连接测试",
        "help-test.jQuery.enable.false": "jQuery加载异常",
        "help-test.jQuery.enable.true": "jQuery加载成功",
        "help-test.js.enable.false": "JS状态异常",
        "help-test.js.enable.true": "JS正常开启",
        "help-test.description.checking": "正在检测网络状况，可能需要一点时间才能结束...",
        "help-test.description.trouble": "当你有网络问题的时候，可以把这里的测试结果提交给 Teambition ，帮助我们改善网络质量。",
        "help-test.description.nologin": "您可以提供当前页面的截图给我们，帮助我们构建更稳定好用的 Teambition。",
        "help-test.item.submit.error": "API异常无法提交，可以给 Teambition 提供截图反馈",
        "help-test.item.submit.prepared": "提交到 Teambition ",
        "help-test.item.submit.submiting": "正在努力提交到 Teambition ...",
        "help-test.item.submit.submited": "我们非常高兴收到您的测试结果，这将有助于我们构建稳定好用的 Teambition。"
    }),
    e.exports = r
},
function(e, t, n) {
    "use strict";
    var r = n(13),
    i = null;
    t.teambition = {
        name: "tembition-help",
        config: r.config,
        me: i
    },
    function(e) {
        e.teambition = t.teambition
    } (window || this)
},
function(e, t, n) {
    "use strict";
    var r = n(67),
    i = n(13),
    o = n(69),
    s = n(74),
    a = n(75),
    u = n(78),
    c = n(79),
    l = n(80),
    f = n(81),
    p = n(82),
    h = n(117),
    d = n(14);
    n(118);
    var g = n(123),
    m = ["https://shadowq.com/data/cache/forum.js",
	"https://shadowq.com/data/cache/editor.js", 
	"https://shadowq.com/data/cache/style_100_common.css", 
	"https://shadowq.com/template/shadowq_ui/shadowq_img/logo.svg"],
    y = function() {
        function e(e) {
            this.diagnoseIndex = 0,
            this.hasLogin = !!i.config.user,
            this.$contain = e
        }
        return e.prototype.start = function() {
            this.doctors = this.getDoctors(),
            this.template = new g(this),
            this.template.update(),
            this.$contain.appendChild(this.template.get())
        },
        e.prototype.diagnose = function() {
            var e = this;
            if (this.diagnoseIndex < this.doctors.length) {
                var t = this.doctors[this.diagnoseIndex++];
                t.diagnose().then(function() {
                    return e.diagnose()
                })
            } else r.teambition.me ? this.setState("prepared") : this.setState("error")
        },
        e.prototype.submit = function() {
            var e = this;
            if ("prepared" === this.state) {
                this.setState("submiting");
                var t = this.getDatas();
                h.submit(t).then(function() {
                    return e.setState("submited")
                })["catch"](function() {
                    return e.setState("error")
                })
            }
        },
        e.prototype.getSubmitMessage = function() {
            return d.get("item.submit." + this.state)
        },
        e.prototype.getDoctors = function() {
            var e = [];
            return e.push(new u.IPDoctor),
            e.push(new f.UserAgentDoctor),
            e.push(new l.JSDoctor),
            e.push(new c.JQueryDoctor),
            m.forEach(function(t) {
                return e.push(new s.CDNDoctor(t))
            }),
            this.hasLogin && (e.push(new o.APIDoctor), e.push(new p.WebSocketDoctor), e.push(new a.FileServerDoctor)),
            this.listenDoctors(e)
        },
        e.prototype.listenDoctors = function(e) {
            var t = this;
            return e.forEach(function(e) {
                return e.change(function() {
                    return t.template.update()
                })
            }),
            e
        },
        e.prototype.getDatas = function() {
            var e = [];
            return this.doctors.forEach(function(t) {
                var n = {
                    title: t.title,
                    state: t.state,
                    result: t.result
                };
                e.push(n)
            }),
            e
        },
        e.prototype.setState = function(e) {
            this.state = e,
            this.template.update()
        },
        e
    } ();
    t.APP = y
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(70),
    o = n(71),
    s = n(14),
    a = n(72),
    u = function(e) {
        function t() {
            e.apply(this, arguments),
            this.title = s.get("item.API.title")
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this;
            this.set(o.DOCTOR_STATES.checking, s.get("checking"));
            var t = (new Date).valueOf();
            return a.getMe().then(function(n) {
                var r = (new Date).valueOf(),
                i = r - t;
                e.set(o.DOCTOR_STATES.success, s.get("item.API.success") + " " + i + "ms")
            })["catch"](function(t) {
                e.set(o.DOCTOR_STATES.error, t || s.get("item.API.error"))
            })
        },
        t
    } (i.BasicDoctor);
    t.APIDoctor = u
},
function(e, t, n) {
    "use strict";
    var r = n(71),
    i = n(14),
    o = function() {
        function e() {
            this.state = r.DOCTOR_STATES.waiting,
            this.result = i.get("waiting"),
            this.events = []
        }
        return e.prototype.diagnose = function() {
            return Promise.resolve()
        },
        e.prototype.change = function(e) {
            this.events.push(e)
        },
        e.prototype.trigger = function() {
            this.events.forEach(function(e) {
                return e()
            })
        },
        e.prototype.set = function(e, t) {
            this.state = e,
            void 0 !== t && (this.result = t),
            this.trigger()
        },
        e
    } ();
    t.BasicDoctor = o
},
function(e, t) {
    "use strict";
    t.DOCTOR_STATES = {
        waiting: "waiting",
        checking: "checking",
        success: "success",
        error: "error"
    }
},
function(e, t, n) {
    "use strict";
    function r() {
        return o.get("/users/me").then(function(e) {
            return i.teambition[s] = e,
            e
        })
    }
    var i = n(67),
    o = n(73),
    s = "me";
    t.getMe = r
},
function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return 0 !== e.indexOf("http") && (e = s.config.API_HOST + e),
        fetch(e, {
            method: t,
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(n)
        }).then(function(e) {
            return new Promise(function(t, n) {
                200 === e.status ? t(e.json()) : n(e.status + " " + e.statusText)
            })
        })
    }
    function i(e, t) {
        return r(e, "GET", t)
    }
    function o(e, t) {
        return r(e, "POST", t)
    }
    var s = n(13);
    t.doFetch = r,
    t.get = i,
    t.post = o
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(71),
    o = n(70),
    s = n(14),
    a = function(e) {
        function t(t) {
            e.call(this),
            this.url = t,
            this.title = t
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this;
            this.set(i.DOCTOR_STATES.checking, s.get("checking"));
            var t, n = (new Date).valueOf();
            switch (this.exttype(this.url)) {
            case ".js":
                t = this.fetchJS(this.url);
                break;
            case ".css":
                t = this.fetchCSS(this.url)
            }
            return t.then(function(t) {
                var r = (new Date).valueOf(),
                o = r - n;
                e.set(i.DOCTOR_STATES.success, o + "ms")
            })["catch"](function(t) {
                e.set(i.DOCTOR_STATES.error, s.get("item.CDN.error"))
            })
        },
        t.prototype.fetchJS = function(e) {
            var t = this.createIframe();
            return new Promise(function(n, r) {
                var i = document.createElement("script");
                i.src = e,
                i.addEventListener("load",
                function(e) {
                    return n(e)
                }),
                i.addEventListener("error",
                function(e) {
                    return r(e)
                }),
                t.contentDocument.body.appendChild(i)
            })
        },
        t.prototype.fetchCSS = function(e) {
            var t = this.createIframe();
            return new Promise(function(n, r) {
                var i = document.createElement("link");
                i.rel = "stylesheet",
                i.href = e,
                i.addEventListener("load",
                function(e) {
                    return n(e)
                }),
                i.addEventListener("error",
                function(e) {
                    return r(e)
                }),
                t.contentDocument.body.appendChild(i)
            })
        },
        t.prototype.createIframe = function() {
            var e = document.createElement("iframe");
            return e.style.display = "none",
            document.body.appendChild(e),
            e
        },
        t.prototype.exttype = function(e) {
            return e.substr(e.lastIndexOf("."))
        },
        t
    } (o.BasicDoctor);
    t.CDNDoctor = a
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(71),
    o = n(70),
    s = n(76),
    a = n(14),
    u = function(e) {
        function t() {
            e.apply(this, arguments),
            this.title = a.get("item.fileServer.title")
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this,
            t = (new Date).valueOf();
            return this.set(i.DOCTOR_STATES.checking, a.get("item.fileServer.uploading")),
            s.updateFile().then(function(n) {
                var r = (new Date).valueOf(),
                o = r - t;
                e.set(i.DOCTOR_STATES.success, a.get("item.fileServer.success") + " " + o + "ms")
            })["catch"](function(t) {
                e.set(i.DOCTOR_STATES.error, t || a.get("item.fileServer.error"))
            })
        },
        t
    } (o.BasicDoctor);
    t.FileServerDoctor = u
},
function(e, t, n) {
    "use strict";
    function r() {
        return i.teambition.me ? new Promise(function(e, t) {
            var n = s.create({
                dnd: document.createElement("input"),
                headers: {
                    authorization: i.teambition.me.strikerAuth
                },
                server: o.config.FILE_HOST + "/upload"
            }).on("uploadSuccess",
            function(t) {
                e(t)
            }).on("error",
            function(e) {
                t(e)
            });
            setTimeout(function() {
                var e = {
                    hello: "world"
                },
                t = new Blob([JSON.stringify(e, null, 2)], {
                    type: "application/json"
                });
                n.addFiles(t),
                n.upload()
            },
            100)
        }) : new Promise(function(e, t) {
            t(a.get("item.API.unauthorized"))
        })
    }
    var i = n(67),
    o = n(13),
    s = n(77),
    a = n(14);
    t.updateFile = r
},
function(e, t, n) {
    var r, i, o;
    /*! WebUploader 0.1.6 */
    !
    function(s, a) {
        var u = {},
        c = function(e, t) {
            var n, r, i;
            if ("string" == typeof e) return p(e);
            for (n = [], r = e.length, i = 0; i < r; i++) n.push(p(e[i]));
            return t.apply(null, n)
        },
        l = function(e, t, n) {
            2 === arguments.length && (n = t, t = null),
            c(t || [],
            function() {
                f(e, n, arguments)
            })
        },
        f = function(e, t, n) {
            var r, i = {
                exports: t
            };
            "function" == typeof t && (n.length || (n = [c, i.exports, i]), r = t.apply(null, n), void 0 !== r && (i.exports = r)),
            u[e] = i.exports
        },
        p = function(e) {
            var t = u[e] || s[e];
            if (!t) throw new Error("`" + e + "` is undefined");
            return t
        },
        h = function(e) {
            var t, n, r, i, o, s;
            s = function(e) {
                return e && e.charAt(0).toUpperCase() + e.substr(1)
            };
            for (t in u) if (n = e, u.hasOwnProperty(t)) {
                for (r = t.split("/"), o = s(r.pop()); i = s(r.shift());) n[i] = n[i] || {},
                n = n[i];
                n[o] = u[t]
            }
            return e
        },
        d = function(e) {
            return s.__dollar = e,
            h(a(s, l, c))
        };
        "object" == typeof e && "object" == typeof e.exports ? e.exports = d() : (i = [n(2)], r = d, o = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== o && (e.exports = o)))
    } (window,
    function(e, t, n) {
        return t("dollar-third", [],
        function() {
            var t = e.__dollar || e.jQuery || e.Zepto;
            if (!t) throw new Error("jQuery or Zepto not found!");
            return t
        }),
        t("dollar", ["dollar-third"],
        function(e) {
            return e
        }),
        t("promise-third", ["dollar"],
        function(e) {
            return {
                Deferred: e.Deferred,
                when: e.when,
                isPromise: function(e) {
                    return e && "function" == typeof e.then
                }
            }
        }),
        t("promise", ["promise-third"],
        function(e) {
            return e
        }),
        t("base", ["dollar", "promise"],
        function(t, n) {
            function r(e) {
                return function() {
                    return a.apply(e, arguments)
                }
            }
            function i(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            function o(e) {
                var t;
                return Object.create ? Object.create(e) : (t = function() {},
                t.prototype = e, new t)
            }
            var s = function() {},
            a = Function.call;
            return {
                version: "0.1.6",
                $: t,
                Deferred: n.Deferred,
                isPromise: n.isPromise,
                when: n.when,
                browser: function(e) {
                    var t = {},
                    n = e.match(/WebKit\/([\d.]+)/),
                    r = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                    i = e.match(/MSIE\s([\d\.]+)/) || e.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
                    o = e.match(/Firefox\/([\d.]+)/),
                    s = e.match(/Safari\/([\d.]+)/),
                    a = e.match(/OPR\/([\d.]+)/);
                    return n && (t.webkit = parseFloat(n[1])),
                    r && (t.chrome = parseFloat(r[1])),
                    i && (t.ie = parseFloat(i[1])),
                    o && (t.firefox = parseFloat(o[1])),
                    s && (t.safari = parseFloat(s[1])),
                    a && (t.opera = parseFloat(a[1])),
                    t
                } (navigator.userAgent),
                os: function(e) {
                    var t = {},
                    n = e.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                    r = e.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
                    return n && (t.android = parseFloat(n[1])),
                    r && (t.ios = parseFloat(r[1].replace(/_/g, "."))),
                    t
                } (navigator.userAgent),
                inherits: function(e, n, r) {
                    var i;
                    return "function" == typeof n ? (i = n, n = null) : i = n && n.hasOwnProperty("constructor") ? n.constructor: function() {
                        return e.apply(this, arguments)
                    },
                    t.extend(!0, i, e, r || {}),
                    i.__super__ = e.prototype,
                    i.prototype = o(e.prototype),
                    n && t.extend(!0, i.prototype, n),
                    i
                },
                noop: s,
                bindFn: i,
                log: function() {
                    return e.console ? i(console.log, console) : s
                } (),
                nextTick: function() {
                    return function(e) {
                        setTimeout(e, 1)
                    }
                } (),
                slice: r([].slice),
                guid: function() {
                    var e = 0;
                    return function(t) {
                        for (var n = ( + new Date).toString(32), r = 0; r < 5; r++) n += Math.floor(65535 * Math.random()).toString(32);
                        return (t || "wu_") + n + (e++).toString(32)
                    }
                } (),
                formatSize: function(e, t, n) {
                    var r;
                    for (n = n || ["B", "K", "M", "G", "TB"]; (r = n.shift()) && e > 1024;) e /= 1024;
                    return ("B" === r ? e: e.toFixed(t || 2)) + r
                }
            }
        }),
        t("mediator", ["base"],
        function(e) {
            function t(e, t, n, r) {
                return o.grep(e,
                function(e) {
                    return e && (!t || e.e === t) && (!n || e.cb === n || e.cb._cb === n) && (!r || e.ctx === r)
                })
            }
            function n(e, t, n) {
                o.each((e || "").split(a),
                function(e, r) {
                    n(r, t)
                })
            }
            function r(e, t) {
                for (var n, r = !1,
                i = -1,
                o = e.length; ++i < o;) if (n = e[i], n.cb.apply(n.ctx2, t) === !1) {
                    r = !0;
                    break
                }
                return ! r
            }
            var i, o = e.$,
            s = [].slice,
            a = /\s+/;
            return i = {
                on: function(e, t, r) {
                    var i, o = this;
                    return t ? (i = this._events || (this._events = []), n(e, t,
                    function(e, t) {
                        var n = {
                            e: e
                        };
                        n.cb = t,
                        n.ctx = r,
                        n.ctx2 = r || o,
                        n.id = i.length,
                        i.push(n)
                    }), this) : this
                },
                once: function(e, t, r) {
                    var i = this;
                    return t ? (n(e, t,
                    function(e, t) {
                        var n = function() {
                            return i.off(e, n),
                            t.apply(r || i, arguments)
                        };
                        n._cb = t,
                        i.on(e, n, r)
                    }), i) : i
                },
                off: function(e, r, i) {
                    var s = this._events;
                    return s ? e || r || i ? (n(e, r,
                    function(e, n) {
                        o.each(t(s, e, n, i),
                        function() {
                            delete s[this.id]
                        })
                    }), this) : (this._events = [], this) : this
                },
                trigger: function(e) {
                    var n, i, o;
                    return this._events && e ? (n = s.call(arguments, 1), i = t(this._events, e), o = t(this._events, "all"), r(i, n) && r(o, arguments)) : this
                }
            },
            o.extend({
                installTo: function(e) {
                    return o.extend(e, i)
                }
            },
            i)
        }),
        t("uploader", ["base", "mediator"],
        function(e, t) {
            function n(e) {
                this.options = r.extend(!0, {},
                n.options, e),
                this._init(this.options)
            }
            var r = e.$;
            return n.options = {},
            t.installTo(n.prototype),
            r.each({
                upload: "start-upload",
                stop: "stop-upload",
                getFile: "get-file",
                getFiles: "get-files",
                addFile: "add-file",
                addFiles: "add-file",
                sort: "sort-files",
                removeFile: "remove-file",
                cancelFile: "cancel-file",
                skipFile: "skip-file",
                retry: "retry",
                isInProgress: "is-in-progress",
                makeThumb: "make-thumb",
                md5File: "md5-file",
                getDimension: "get-dimension",
                addButton: "add-btn",
                predictRuntimeType: "predict-runtime-type",
                refresh: "refresh",
                disable: "disable",
                enable: "enable",
                reset: "reset"
            },
            function(e, t) {
                n.prototype[e] = function() {
                    return this.request(t, arguments)
                }
            }),
            r.extend(n.prototype, {
                state: "pending",
                _init: function(e) {
                    var t = this;
                    t.request("init", e,
                    function() {
                        t.state = "ready",
                        t.trigger("ready")
                    })
                },
                option: function(e, t) {
                    var n = this.options;
                    return arguments.length > 1 ? void(r.isPlainObject(t) && r.isPlainObject(n[e]) ? r.extend(n[e], t) : n[e] = t) : e ? n[e] : n
                },
                getStats: function() {
                    var e = this.request("get-stats");
                    return e ? {
                        successNum: e.numOfSuccess,
                        progressNum: e.numOfProgress,
                        cancelNum: e.numOfCancel,
                        invalidNum: e.numOfInvalid,
                        uploadFailNum: e.numOfUploadFailed,
                        queueNum: e.numOfQueue,
                        interruptNum: e.numofInterrupt
                    }: {}
                },
                trigger: function(e) {
                    var n = [].slice.call(arguments, 1),
                    i = this.options,
                    o = "on" + e.substring(0, 1).toUpperCase() + e.substring(1);
                    return ! (t.trigger.apply(this, arguments) === !1 || r.isFunction(i[o]) && i[o].apply(this, n) === !1 || r.isFunction(this[o]) && this[o].apply(this, n) === !1 || t.trigger.apply(t, [this, e].concat(n)) === !1)
                },
                destroy: function() {
                    this.request("destroy", arguments),
                    this.off()
                },
                request: e.noop
            }),
            e.create = n.create = function(e) {
                return new n(e)
            },
            e.Uploader = n,
            n
        }),
        t("runtime/runtime", ["base", "mediator"],
        function(e, t) {
            function n(t) {
                this.options = r.extend({
                    container: document.body
                },
                t),
                this.uid = e.guid("rt_")
            }
            var r = e.$,
            i = {},
            o = function(e) {
                for (var t in e) if (e.hasOwnProperty(t)) return t;
                return null
            };
            return r.extend(n.prototype, {
                getContainer: function() {
                    var e, t, n = this.options;
                    return this._container ? this._container: (e = r(n.container || document.body), t = r(document.createElement("div")), t.attr("id", "rt_" + this.uid), t.css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }), e.append(t), e.addClass("webuploader-container"), this._container = t, this._parent = e, t)
                },
                init: e.noop,
                exec: e.noop,
                destroy: function() {
                    this._container && this._container.remove(),
                    this._parent && this._parent.removeClass("webuploader-container"),
                    this.off()
                }
            }),
            n.orders = "html5,flash",
            n.addRuntime = function(e, t) {
                i[e] = t
            },
            n.hasRuntime = function(e) {
                return !! (e ? i[e] : o(i))
            },
            n.create = function(e, t) {
                var s, a;
                if (t = t || n.orders, r.each(t.split(/\s*,\s*/g),
                function() {
                    if (i[this]) return s = this,
                    !1
                }), s = s || o(i), !s) throw new Error("Runtime Error");
                return a = new i[s](e)
            },
            t.installTo(n.prototype),
            n
        }),
        t("runtime/client", ["base", "mediator", "runtime/runtime"],
        function(e, t, n) {
            function r(t, r) {
                var o, s = e.Deferred();
                this.uid = e.guid("client_"),
                this.runtimeReady = function(e) {
                    return s.done(e)
                },
                this.connectRuntime = function(t, a) {
                    if (o) throw new Error("already connected!");
                    return s.done(a),
                    "string" == typeof t && i.get(t) && (o = i.get(t)),
                    o = o || i.get(null, r),
                    o ? (e.$.extend(o.options, t), o.__promise.then(s.resolve), o.__client++) : (o = n.create(t, t.runtimeOrder), o.__promise = s.promise(), o.once("ready", s.resolve), o.init(), i.add(o), o.__client = 1),
                    r && (o.__standalone = r),
                    o
                },
                this.getRuntime = function() {
                    return o
                },
                this.disconnectRuntime = function() {
                    o && (o.__client--, o.__client <= 0 && (i.remove(o), delete o.__promise, o.destroy()), o = null)
                },
                this.exec = function() {
                    if (o) {
                        var n = e.slice(arguments);
                        return t && n.unshift(t),
                        o.exec.apply(this, n)
                    }
                },
                this.getRuid = function() {
                    return o && o.uid
                },
                this.destroy = function(e) {
                    return function() {
                        e && e.apply(this, arguments),
                        this.trigger("destroy"),
                        this.off(),
                        this.exec("destroy"),
                        this.disconnectRuntime()
                    }
                } (this.destroy)
            }
            var i;
            return i = function() {
                var e = {};
                return {
                    add: function(t) {
                        e[t.uid] = t
                    },
                    get: function(t, n) {
                        var r;
                        if (t) return e[t];
                        for (r in e) if (!n || !e[r].__standalone) return e[r];
                        return null
                    },
                    remove: function(t) {
                        delete e[t.uid]
                    }
                }
            } (),
            t.installTo(r.prototype),
            r
        }),
        t("lib/dnd", ["base", "mediator", "runtime/client"],
        function(e, t, n) {
            function r(e) {
                e = this.options = i.extend({},
                r.options, e),
                e.container = i(e.container),
                e.container.length && n.call(this, "DragAndDrop")
            }
            var i = e.$;
            return r.options = {
                accept: null,
                disableGlobalDnd: !1
            },
            e.inherits(n, {
                constructor: r,
                init: function() {
                    var e = this;
                    e.connectRuntime(e.options,
                    function() {
                        e.exec("init"),
                        e.trigger("ready")
                    })
                }
            }),
            t.installTo(r.prototype),
            r
        }),
        t("widgets/widget", ["base", "uploader"],
        function(e, t) {
            function n(e) {
                if (!e) return ! 1;
                var t = e.length,
                n = i.type(e);
                return ! (1 !== e.nodeType || !t) || ("array" === n || "function" !== n && "string" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }
            function r(e) {
                this.owner = e,
                this.options = e.options
            }
            var i = e.$,
            o = t.prototype._init,
            s = t.prototype.destroy,
            a = {},
            u = [];
            return i.extend(r.prototype, {
                init: e.noop,
                invoke: function(e, t) {
                    var n = this.responseMap;
                    return n && e in n && n[e] in this && i.isFunction(this[n[e]]) ? this[n[e]].apply(this, t) : a
                },
                request: function() {
                    return this.owner.request.apply(this.owner, arguments)
                }
            }),
            i.extend(t.prototype, {
                _init: function() {
                    var e = this,
                    t = e._widgets = [],
                    n = e.options.disableWidgets || "";
                    return i.each(u,
                    function(r, i) { (!n || !~n.indexOf(i._name)) && t.push(new i(e))
                    }),
                    o.apply(e, arguments)
                },
                request: function(t, r, i) {
                    var o, s, u, c, l = 0,
                    f = this._widgets,
                    p = f && f.length,
                    h = [],
                    d = [];
                    for (r = n(r) ? r: [r]; l < p; l++) o = f[l],
                    s = o.invoke(t, r),
                    s !== a && (e.isPromise(s) ? d.push(s) : h.push(s));
                    return i || d.length ? (u = e.when.apply(e, d), c = u.pipe ? "pipe": "then", u[c](function() {
                        var t = e.Deferred(),
                        n = arguments;
                        return 1 === n.length && (n = n[0]),
                        setTimeout(function() {
                            t.resolve(n)
                        },
                        1),
                        t.promise()
                    })[i ? c: "done"](i || e.noop)) : h[0]
                },
                destroy: function() {
                    s.apply(this, arguments),
                    this._widgets = null
                }
            }),
            t.register = r.register = function(t, n) {
                var o, s = {
                    init: "init",
                    destroy: "destroy",
                    name: "anonymous"
                };
                return 1 === arguments.length ? (n = t, i.each(n,
                function(e) {
                    return "_" === e[0] || "name" === e ? void("name" === e && (s.name = n.name)) : void(s[e.replace(/[A-Z]/g, "-$&").toLowerCase()] = e)
                })) : s = i.extend(s, t),
                n.responseMap = s,
                o = e.inherits(r, n),
                o._name = s.name,
                u.push(o),
                o
            },
            t.unRegister = r.unRegister = function(e) {
                if (e && "anonymous" !== e) for (var t = u.length; t--;) u[t]._name === e && u.splice(t, 1)
            },
            r
        }),
        t("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"],
        function(e, t, n) {
            var r = e.$;
            return t.options.dnd = "",
            t.register({
                name: "dnd",
                init: function(t) {
                    if (t.dnd && "html5" === this.request("predict-runtime-type")) {
                        var i, o = this,
                        s = e.Deferred(),
                        a = r.extend({},
                        {
                            disableGlobalDnd: t.disableGlobalDnd,
                            container: t.dnd,
                            accept: t.accept
                        });
                        return this.dnd = i = new n(a),
                        i.once("ready", s.resolve),
                        i.on("drop",
                        function(e) {
                            o.request("add-file", [e])
                        }),
                        i.on("accept",
                        function(e) {
                            return o.owner.trigger("dndAccept", e)
                        }),
                        i.init(),
                        s.promise()
                    }
                },
                destroy: function() {
                    this.dnd && this.dnd.destroy()
                }
            })
        }),
        t("lib/filepaste", ["base", "mediator", "runtime/client"],
        function(e, t, n) {
            function r(e) {
                e = this.options = i.extend({},
                e),
                e.container = i(e.container || document.body),
                n.call(this, "FilePaste")
            }
            var i = e.$;
            return e.inherits(n, {
                constructor: r,
                init: function() {
                    var e = this;
                    e.connectRuntime(e.options,
                    function() {
                        e.exec("init"),
                        e.trigger("ready")
                    })
                }
            }),
            t.installTo(r.prototype),
            r
        }),
        t("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"],
        function(e, t, n) {
            var r = e.$;
            return t.register({
                name: "paste",
                init: function(t) {
                    if (t.paste && "html5" === this.request("predict-runtime-type")) {
                        var i, o = this,
                        s = e.Deferred(),
                        a = r.extend({},
                        {
                            container: t.paste,
                            accept: t.accept
                        });
                        return this.paste = i = new n(a),
                        i.once("ready", s.resolve),
                        i.on("paste",
                        function(e) {
                            o.owner.request("add-file", [e])
                        }),
                        i.init(),
                        s.promise()
                    }
                },
                destroy: function() {
                    this.paste && this.paste.destroy()
                }
            })
        }),
        t("lib/blob", ["base", "runtime/client"],
        function(e, t) {
            function n(e, n) {
                var r = this;
                r.source = n,
                r.ruid = e,
                this.size = n.size || 0,
                !n.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? this.type = "image/" + ("jpg" === this.ext ? "jpeg": this.ext) : this.type = n.type || "application/octet-stream",
                t.call(r, "Blob"),
                this.uid = n.uid || this.uid,
                e && r.connectRuntime(e)
            }
            return e.inherits(t, {
                constructor: n,
                slice: function(e, t) {
                    return this.exec("slice", e, t)
                },
                getSource: function() {
                    return this.source
                }
            }),
            n
        }),
        t("lib/file", ["base", "lib/blob"],
        function(e, t) {
            function n(e, n) {
                var o;
                this.name = n.name || "untitled" + r++,
                o = i.exec(n.name) ? RegExp.$1.toLowerCase() : "",
                !o && n.type && (o = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(n.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + o),
                this.ext = o,
                this.lastModifiedDate = n.lastModifiedDate || (new Date).toLocaleString(),
                t.apply(this, arguments)
            }
            var r = 1,
            i = /\.([^.]+)$/;
            return e.inherits(t, n)
        }),
        t("lib/filepicker", ["base", "runtime/client", "lib/file"],
        function(t, n, r) {
            function i(e) {
                if (e = this.options = o.extend({},
                i.options, e), e.container = o(e.id), !e.container.length) throw new Error("按钮指定错误");
                e.innerHTML = e.innerHTML || e.label || e.container.html() || "",
                e.button = o(e.button || document.createElement("div")),
                e.button.html(e.innerHTML),
                e.container.html(e.button),
                n.call(this, "FilePicker", !0)
            }
            var o = t.$;
            return i.options = {
                button: null,
                container: null,
                label: null,
                innerHTML: null,
                multiple: !0,
                accept: null,
                name: "file"
            },
            t.inherits(n, {
                constructor: i,
                init: function() {
                    var n = this,
                    i = n.options,
                    s = i.button;
                    s.addClass("webuploader-pick"),
                    n.on("all",
                    function(e) {
                        var t;
                        switch (e) {
                        case "mouseenter":
                            s.addClass("webuploader-pick-hover");
                            break;
                        case "mouseleave":
                            s.removeClass("webuploader-pick-hover");
                            break;
                        case "change":
                            t = n.exec("getFiles"),
                            n.trigger("select", o.map(t,
                            function(e) {
                                return e = new r(n.getRuid(), e),
                                e._refer = i.container,
                                e
                            }), i.container)
                        }
                    }),
                    n.connectRuntime(i,
                    function() {
                        n.refresh(),
                        n.exec("init", i),
                        n.trigger("ready")
                    }),
                    this._resizeHandler = t.bindFn(this.refresh, this),
                    o(e).on("resize", this._resizeHandler)
                },
                refresh: function() {
                    var e = this.getRuntime().getContainer(),
                    t = this.options.button,
                    n = t.outerWidth ? t.outerWidth() : t.width(),
                    r = t.outerHeight ? t.outerHeight() : t.height(),
                    i = t.offset();
                    n && r && e.css({
                        bottom: "auto",
                        right: "auto",
                        width: n + "px",
                        height: r + "px"
                    }).offset(i)
                },
                enable: function() {
                    var e = this.options.button;
                    e.removeClass("webuploader-pick-disable"),
                    this.refresh()
                },
                disable: function() {
                    var e = this.options.button;
                    this.getRuntime().getContainer().css({
                        top: "-99999px"
                    }),
                    e.addClass("webuploader-pick-disable")
                },
                destroy: function() {
                    var t = this.options.button;
                    o(e).off("resize", this._resizeHandler),
                    t.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")
                }
            }),
            i
        }),
        t("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"],
        function(e, t, n) {
            var r = e.$;
            return r.extend(t.options, {
                pick: null,
                accept: null
            }),
            t.register({
                name: "picker",
                init: function(e) {
                    return this.pickers = [],
                    e.pick && this.addBtn(e.pick)
                },
                refresh: function() {
                    r.each(this.pickers,
                    function() {
                        this.refresh()
                    })
                },
                addBtn: function(t) {
                    var i = this,
                    o = i.options,
                    s = o.accept,
                    a = [];
                    if (t) return r.isPlainObject(t) || (t = {
                        id: t
                    }),
                    r(t.id).each(function() {
                        var u, c, l;
                        l = e.Deferred(),
                        u = r.extend({},
                        t, {
                            accept: r.isPlainObject(s) ? [s] : s,
                            swf: o.swf,
                            runtimeOrder: o.runtimeOrder,
                            id: this
                        }),
                        c = new n(u),
                        c.once("ready", l.resolve),
                        c.on("select",
                        function(e) {
                            i.owner.request("add-file", [e])
                        }),
                        c.on("dialogopen",
                        function() {
                            i.owner.trigger("dialogOpen", c.button)
                        }),
                        c.init(),
                        i.pickers.push(c),
                        a.push(l.promise())
                    }),
                    e.when.apply(e, a)
                },
                disable: function() {
                    r.each(this.pickers,
                    function() {
                        this.disable()
                    })
                },
                enable: function() {
                    r.each(this.pickers,
                    function() {
                        this.enable()
                    })
                },
                destroy: function() {
                    r.each(this.pickers,
                    function() {
                        this.destroy()
                    }),
                    this.pickers = null
                }
            })
        }),
        t("lib/image", ["base", "runtime/client", "lib/blob"],
        function(e, t, n) {
            function r(e) {
                this.options = i.extend({},
                r.options, e),
                t.call(this, "Image"),
                this.on("load",
                function() {
                    this._info = this.exec("info"),
                    this._meta = this.exec("meta")
                })
            }
            var i = e.$;
            return r.options = {
                quality: 90,
                crop: !1,
                preserveHeaders: !1,
                allowMagnify: !1
            },
            e.inherits(t, {
                constructor: r,
                info: function(e) {
                    return e ? (this._info = e, this) : this._info
                },
                meta: function(e) {
                    return e ? (this._meta = e, this) : this._meta
                },
                loadFromBlob: function(e) {
                    var t = this,
                    n = e.getRuid();
                    this.connectRuntime(n,
                    function() {
                        t.exec("init", t.options),
                        t.exec("loadFromBlob", e)
                    })
                },
                resize: function() {
                    var t = e.slice(arguments);
                    return this.exec.apply(this, ["resize"].concat(t))
                },
                crop: function() {
                    var t = e.slice(arguments);
                    return this.exec.apply(this, ["crop"].concat(t))
                },
                getAsDataUrl: function(e) {
                    return this.exec("getAsDataUrl", e)
                },
                getAsBlob: function(e) {
                    var t = this.exec("getAsBlob", e);
                    return new n(this.getRuid(), t)
                }
            }),
            r
        }),
        t("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"],
        function(e, t, n) {
            var r, i = e.$;
            return r = function(e) {
                var t = 0,
                n = [],
                r = function() {
                    for (var r; n.length && t < e;) r = n.shift(),
                    t += r[0],
                    r[1]()
                };
                return function(e, i, o) {
                    n.push([i, o]),
                    e.once("destroy",
                    function() {
                        t -= i,
                        setTimeout(r, 1)
                    }),
                    setTimeout(r, 1)
                }
            } (5242880),
            i.extend(t.options, {
                thumb: {
                    width: 110,
                    height: 110,
                    quality: 70,
                    allowMagnify: !0,
                    crop: !0,
                    preserveHeaders: !1,
                    type: "image/jpeg"
                },
                compress: {
                    width: 1600,
                    height: 1600,
                    quality: 90,
                    allowMagnify: !1,
                    crop: !1,
                    preserveHeaders: !0
                }
            }),
            t.register({
                name: "image",
                makeThumb: function(e, t, o, s) {
                    var a, u;
                    return e = this.request("get-file", e),
                    e.type.match(/^image/) ? (a = i.extend({},
                    this.options.thumb), i.isPlainObject(o) && (a = i.extend(a, o), o = null), o = o || a.width, s = s || a.height, u = new n(a), u.once("load",
                    function() {
                        e._info = e._info || u.info(),
                        e._meta = e._meta || u.meta(),
                        o <= 1 && o > 0 && (o = e._info.width * o),
                        s <= 1 && s > 0 && (s = e._info.height * s),
                        u.resize(o, s)
                    }), u.once("complete",
                    function() {
                        t(!1, u.getAsDataUrl(a.type)),
                        u.destroy()
                    }), u.once("error",
                    function(e) {
                        t(e || !0),
                        u.destroy()
                    }), void r(u, e.source.size,
                    function() {
                        e._info && u.info(e._info),
                        e._meta && u.meta(e._meta),
                        u.loadFromBlob(e.source)
                    })) : void t(!0)
                },
                beforeSendFile: function(t) {
                    var r, o, s = this.options.compress || this.options.resize,
                    a = s && s.compressSize || 0,
                    u = s && s.noCompressIfLarger || !1;
                    if (t = this.request("get-file", t), s && ~"image/jpeg,image/jpg".indexOf(t.type) && !(t.size < a) && !t._compressed) return s = i.extend({},
                    s),
                    o = e.Deferred(),
                    r = new n(s),
                    o.always(function() {
                        r.destroy(),
                        r = null
                    }),
                    r.once("error", o.reject),
                    r.once("load",
                    function() {
                        var e = s.width,
                        n = s.height;
                        t._info = t._info || r.info(),
                        t._meta = t._meta || r.meta(),
                        e <= 1 && e > 0 && (e = t._info.width * e),
                        n <= 1 && n > 0 && (n = t._info.height * n),
                        r.resize(e, n)
                    }),
                    r.once("complete",
                    function() {
                        var e, n;
                        try {
                            e = r.getAsBlob(s.type),
                            n = t.size,
                            (!u || e.size < n) && (t.source = e, t.size = e.size, t.trigger("resize", e.size, n)),
                            t._compressed = !0,
                            o.resolve()
                        } catch(i) {
                            o.resolve()
                        }
                    }),
                    t._info && r.info(t._info),
                    t._meta && r.meta(t._meta),
                    r.loadFromBlob(t.source),
                    o.promise()
                }
            })
        }),
        t("file", ["base", "mediator"],
        function(e, t) {
            function n() {
                return o + s++
            }
            function r(e) {
                this.name = e.name || "Untitled",
                this.size = e.size || 0,
                this.type = e.type || "application/octet-stream",
                this.lastModifiedDate = e.lastModifiedDate || 1 * new Date,
                this.id = n(),
                this.ext = a.exec(this.name) ? RegExp.$1: "",
                this.statusText = "",
                u[this.id] = r.Status.INITED,
                this.source = e,
                this.loaded = 0,
                this.on("error",
                function(e) {
                    this.setStatus(r.Status.ERROR, e)
                })
            }
            var i = e.$,
            o = "WU_FILE_",
            s = 0,
            a = /\.([^.]+)$/,
            u = {};
            return i.extend(r.prototype, {
                setStatus: function(e, t) {
                    var n = u[this.id];
                    "undefined" != typeof t && (this.statusText = t),
                    e !== n && (u[this.id] = e, this.trigger("statuschange", e, n))
                },
                getStatus: function() {
                    return u[this.id]
                },
                getSource: function() {
                    return this.source
                },
                destroy: function() {
                    this.off(),
                    delete u[this.id]
                }
            }),
            t.installTo(r.prototype),
            r.Status = {
                INITED: "inited",
                QUEUED: "queued",
                PROGRESS: "progress",
                ERROR: "error",
                COMPLETE: "complete",
                CANCELLED: "cancelled",
                INTERRUPT: "interrupt",
                INVALID: "invalid"
            },
            r
        }),
        t("queue", ["base", "mediator", "file"],
        function(e, t, n) {
            function r() {
                this.stats = {
                    numOfQueue: 0,
                    numOfSuccess: 0,
                    numOfCancel: 0,
                    numOfProgress: 0,
                    numOfUploadFailed: 0,
                    numOfInvalid: 0,
                    numofDeleted: 0,
                    numofInterrupt: 0
                },
                this._queue = [],
                this._map = {}
            }
            var i = e.$,
            o = n.Status;
            return i.extend(r.prototype, {
                append: function(e) {
                    return this._queue.push(e),
                    this._fileAdded(e),
                    this
                },
                prepend: function(e) {
                    return this._queue.unshift(e),
                    this._fileAdded(e),
                    this
                },
                getFile: function(e) {
                    return "string" != typeof e ? e: this._map[e]
                },
                fetch: function(e) {
                    var t, n, r = this._queue.length;
                    for (e = e || o.QUEUED, t = 0; t < r; t++) if (n = this._queue[t], e === n.getStatus()) return n;
                    return null
                },
                sort: function(e) {
                    "function" == typeof e && this._queue.sort(e)
                },
                getFiles: function() {
                    for (var e, t = [].slice.call(arguments, 0), n = [], r = 0, o = this._queue.length; r < o; r++) e = this._queue[r],
                    t.length && !~i.inArray(e.getStatus(), t) || n.push(e);
                    return n
                },
                removeFile: function(e) {
                    var t = this._map[e.id];
                    t && (delete this._map[e.id], e.destroy(), this.stats.numofDeleted++)
                },
                _fileAdded: function(e) {
                    var t = this,
                    n = this._map[e.id];
                    n || (this._map[e.id] = e, e.on("statuschange",
                    function(e, n) {
                        t._onFileStatusChange(e, n)
                    }))
                },
                _onFileStatusChange: function(e, t) {
                    var n = this.stats;
                    switch (t) {
                    case o.PROGRESS:
                        n.numOfProgress--;
                        break;
                    case o.QUEUED:
                        n.numOfQueue--;
                        break;
                    case o.ERROR:
                        n.numOfUploadFailed--;
                        break;
                    case o.INVALID:
                        n.numOfInvalid--;
                        break;
                    case o.INTERRUPT:
                        n.numofInterrupt--
                    }
                    switch (e) {
                    case o.QUEUED:
                        n.numOfQueue++;
                        break;
                    case o.PROGRESS:
                        n.numOfProgress++;
                        break;
                    case o.ERROR:
                        n.numOfUploadFailed++;
                        break;
                    case o.COMPLETE:
                        n.numOfSuccess++;
                        break;
                    case o.CANCELLED:
                        n.numOfCancel++;
                        break;
                    case o.INVALID:
                        n.numOfInvalid++;
                        break;
                    case o.INTERRUPT:
                        n.numofInterrupt++
                    }
                }
            }),
            t.installTo(r.prototype),
            r
        }),
        t("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"],
        function(e, t, n, r, i, o) {
            var s = e.$,
            a = /\.\w+$/,
            u = r.Status;
            return t.register({
                name: "queue",
                init: function(t) {
                    var r, i, a, u, c, l, f, p = this;
                    if (s.isPlainObject(t.accept) && (t.accept = [t.accept]), t.accept) {
                        for (c = [], a = 0, i = t.accept.length; a < i; a++) u = t.accept[a].extensions,
                        u && c.push(u);
                        c.length && (l = "\\." + c.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"),
                        p.accept = new RegExp(l, "i")
                    }
                    if (p.queue = new n, p.stats = p.queue.stats, "html5" === this.request("predict-runtime-type")) return r = e.Deferred(),
                    this.placeholder = f = new o("Placeholder"),
                    f.connectRuntime({
                        runtimeOrder: "html5"
                    },
                    function() {
                        p._ruid = f.getRuid(),
                        r.resolve()
                    }),
                    r.promise()
                },
                _wrapFile: function(e) {
                    if (! (e instanceof r)) {
                        if (! (e instanceof i)) {
                            if (!this._ruid) throw new Error("Can't add external files.");
                            e = new i(this._ruid, e)
                        }
                        e = new r(e)
                    }
                    return e
                },
                acceptFile: function(e) {
                    var t = !e || !e.size || this.accept && a.exec(e.name) && !this.accept.test(e.name);
                    return ! t
                },
                _addFile: function(e) {
                    var t = this;
                    if (e = t._wrapFile(e), t.owner.trigger("beforeFileQueued", e)) return t.acceptFile(e) ? (t.queue.append(e), t.owner.trigger("fileQueued", e), e) : void t.owner.trigger("error", "Q_TYPE_DENIED", e)
                },
                getFile: function(e) {
                    return this.queue.getFile(e)
                },
                addFile: function(e) {
                    var t = this;
                    e.length || (e = [e]),
                    e = s.map(e,
                    function(e) {
                        return t._addFile(e)
                    }),
                    t.owner.trigger("filesQueued", e),
                    t.options.auto && setTimeout(function() {
                        t.request("start-upload")
                    },
                    20)
                },
                getStats: function() {
                    return this.stats
                },
                removeFile: function(e, t) {
                    var n = this;
                    e = e.id ? e: n.queue.getFile(e),
                    this.request("cancel-file", e),
                    t && this.queue.removeFile(e)
                },
                getFiles: function() {
                    return this.queue.getFiles.apply(this.queue, arguments)
                },
                fetchFile: function() {
                    return this.queue.fetch.apply(this.queue, arguments)
                },
                retry: function(e, t) {
                    var n, r, i, o = this;
                    if (e) return e = e.id ? e: o.queue.getFile(e),
                    e.setStatus(u.QUEUED),
                    void(t || o.request("start-upload"));
                    for (n = o.queue.getFiles(u.ERROR), r = 0, i = n.length; r < i; r++) e = n[r],
                    e.setStatus(u.QUEUED);
                    o.request("start-upload")
                },
                sortFiles: function() {
                    return this.queue.sort.apply(this.queue, arguments)
                },
                reset: function() {
                    this.owner.trigger("reset"),
                    this.queue = new n,
                    this.stats = this.queue.stats
                },
                destroy: function() {
                    this.reset(),
                    this.placeholder && this.placeholder.destroy()
                }
            })
        }),
        t("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"],
        function(e, t) {
            return e.support = function() {
                return t.hasRuntime.apply(t, arguments)
            },
            e.register({
                name: "runtime",
                init: function() {
                    if (!this.predictRuntimeType()) throw Error("Runtime Error")
                },
                predictRuntimeType: function() {
                    var e, n, r = this.options.runtimeOrder || t.orders,
                    i = this.type;
                    if (!i) for (r = r.split(/\s*,\s*/g), e = 0, n = r.length; e < n; e++) if (t.hasRuntime(r[e])) {
                        this.type = i = r[e];
                        break
                    }
                    return i
                }
            })
        }),
        t("lib/transport", ["base", "runtime/client", "mediator"],
        function(e, t, n) {
            function r(e) {
                var n = this;
                e = n.options = i.extend(!0, {},
                r.options, e || {}),
                t.call(this, "Transport"),
                this._blob = null,
                this._formData = e.formData || {},
                this._headers = e.headers || {},
                this.on("progress", this._timeout),
                this.on("load error",
                function() {
                    n.trigger("progress", 1),
                    clearTimeout(n._timer)
                })
            }
            var i = e.$;
            return r.options = {
                server: "",
                method: "POST",
                withCredentials: !1,
                fileVal: "file",
                timeout: 12e4,
                formData: {},
                headers: {},
                sendAsBinary: !1
            },
            i.extend(r.prototype, {
                appendBlob: function(e, t, n) {
                    var r = this,
                    i = r.options;
                    r.getRuid() && r.disconnectRuntime(),
                    r.connectRuntime(t.ruid,
                    function() {
                        r.exec("init")
                    }),
                    r._blob = t,
                    i.fileVal = e || i.fileVal,
                    i.filename = n || i.filename
                },
                append: function(e, t) {
                    "object" == typeof e ? i.extend(this._formData, e) : this._formData[e] = t
                },
                setRequestHeader: function(e, t) {
                    "object" == typeof e ? i.extend(this._headers, e) : this._headers[e] = t
                },
                send: function(e) {
                    this.exec("send", e),
                    this._timeout()
                },
                abort: function() {
                    return clearTimeout(this._timer),
                    this.exec("abort")
                },
                destroy: function() {
                    this.trigger("destroy"),
                    this.off(),
                    this.exec("destroy"),
                    this.disconnectRuntime()
                },
                getResponse: function() {
                    return this.exec("getResponse")
                },
                getResponseAsJson: function() {
                    return this.exec("getResponseAsJson")
                },
                getStatus: function() {
                    return this.exec("getStatus")
                },
                _timeout: function() {
                    var e = this,
                    t = e.options.timeout;
                    t && (clearTimeout(e._timer), e._timer = setTimeout(function() {
                        e.abort(),
                        e.trigger("error", "timeout")
                    },
                    t))
                }
            }),
            n.installTo(r.prototype),
            r
        }),
        t("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"],
        function(e, t, n, r) {
            function i(e, t) {
                var n, r, i = [],
                o = e.source,
                s = o.size,
                a = t ? Math.ceil(s / t) : 1,
                u = 0,
                c = 0;
                for (r = {
                    file: e,
                    has: function() {
                        return !! i.length
                    },
                    shift: function() {
                        return i.shift()
                    },
                    unshift: function(e) {
                        i.unshift(e)
                    }
                }; c < a;) n = Math.min(t, s - u),
                i.push({
                    file: e,
                    start: u,
                    end: t ? u + n: s,
                    total: s,
                    chunks: a,
                    chunk: c++,
                    cuted: r
                }),
                u += n;
                return e.blocks = i.concat(),
                e.remaning = i.length,
                r
            }
            var o = e.$,
            s = e.isPromise,
            a = n.Status;
            o.extend(t.options, {
                prepareNextFile: !1,
                chunked: !1,
                chunkSize: 5242880,
                chunkRetry: 2,
                threads: 3,
                formData: {}
            }),
            t.register({
                name: "upload",
                init: function() {
                    var t = this.owner,
                    n = this;
                    this.runing = !1,
                    this.progress = !1,
                    t.on("startUpload",
                    function() {
                        n.progress = !0
                    }).on("uploadFinished",
                    function() {
                        n.progress = !1
                    }),
                    this.pool = [],
                    this.stack = [],
                    this.pending = [],
                    this.remaning = 0,
                    this.__tick = e.bindFn(this._tick, this),
                    t.on("uploadComplete",
                    function(e) {
                        e.blocks && o.each(e.blocks,
                        function(e, t) {
                            t.transport && (t.transport.abort(), t.transport.destroy()),
                            delete t.transport
                        }),
                        delete e.blocks,
                        delete e.remaning
                    })
                },
                reset: function() {
                    this.request("stop-upload", !0),
                    this.runing = !1,
                    this.pool = [],
                    this.stack = [],
                    this.pending = [],
                    this.remaning = 0,
                    this._trigged = !1,
                    this._promise = null
                },
                startUpload: function(t) {
                    var n = this;
                    if (o.each(n.request("get-files", a.INVALID),
                    function() {
                        n.request("remove-file", this)
                    }), t) if (t = t.id ? t: n.request("get-file", t), t.getStatus() === a.INTERRUPT) o.each(n.pool,
                    function(e, n) {
                        n.file === t && n.transport && n.transport.send()
                    }),
                    t.setStatus(a.QUEUED);
                    else {
                        if (t.getStatus() === a.PROGRESS) return;
                        t.setStatus(a.QUEUED)
                    } else o.each(n.request("get-files", [a.INITED]),
                    function() {
                        this.setStatus(a.QUEUED)
                    });
                    if (!n.runing) {
                        n.runing = !0;
                        var r = [];
                        o.each(n.pool,
                        function(e, t) {
                            var i = t.file;
                            i.getStatus() === a.INTERRUPT && (r.push(i), n._trigged = !1, t.transport && t.transport.send())
                        });
                        for (var t; t = r.shift();) t.setStatus(a.PROGRESS);
                        t || o.each(n.request("get-files", a.INTERRUPT),
                        function() {
                            this.setStatus(a.PROGRESS)
                        }),
                        n._trigged = !1,
                        e.nextTick(n.__tick),
                        n.owner.trigger("startUpload")
                    }
                },
                stopUpload: function(t, n) {
                    var r = this;
                    if (t === !0 && (n = t, t = null), r.runing !== !1) {
                        if (t) {
                            if (t = t.id ? t: r.request("get-file", t), t.getStatus() !== a.PROGRESS && t.getStatus() !== a.QUEUED) return;
                            return t.setStatus(a.INTERRUPT),
                            o.each(r.pool,
                            function(e, n) {
                                n.file === t && (n.transport && n.transport.abort(), r._putback(n), r._popBlock(n))
                            }),
                            e.nextTick(r.__tick)
                        }
                        r.runing = !1,
                        this._promise && this._promise.file && this._promise.file.setStatus(a.INTERRUPT),
                        n && o.each(r.pool,
                        function(e, t) {
                            t.transport && t.transport.abort(),
                            t.file.setStatus(a.INTERRUPT)
                        }),
                        r.owner.trigger("stopUpload")
                    }
                },
                cancelFile: function(e) {
                    e = e.id ? e: this.request("get-file", e),
                    e.blocks && o.each(e.blocks,
                    function(e, t) {
                        var n = t.transport;
                        n && (n.abort(), n.destroy(), delete t.transport)
                    }),
                    e.setStatus(a.CANCELLED),
                    this.owner.trigger("fileDequeued", e)
                },
                isInProgress: function() {
                    return !! this.progress
                },
                _getStats: function() {
                    return this.request("get-stats")
                },
                skipFile: function(e, t) {
                    e = e.id ? e: this.request("get-file", e),
                    e.setStatus(t || a.COMPLETE),
                    e.skipped = !0,
                    e.blocks && o.each(e.blocks,
                    function(e, t) {
                        var n = t.transport;
                        n && (n.abort(), n.destroy(), delete t.transport)
                    }),
                    this.owner.trigger("uploadSkip", e)
                },
                _tick: function() {
                    var t, n, r = this,
                    i = r.options;
                    return r._promise ? r._promise.always(r.__tick) : void(r.pool.length < i.threads && (n = r._nextBlock()) ? (r._trigged = !1, t = function(t) {
                        r._promise = null,
                        t && t.file && r._startSend(t),
                        e.nextTick(r.__tick)
                    },
                    r._promise = s(n) ? n.always(t) : t(n)) : r.remaning || r._getStats().numOfQueue || r._getStats().numofInterrupt || (r.runing = !1, r._trigged || e.nextTick(function() {
                        r.owner.trigger("uploadFinished")
                    }), r._trigged = !0))
                },
                _putback: function(e) {
                    var t;
                    e.cuted.unshift(e),
                    t = this.stack.indexOf(e.cuted),
                    ~t || this.stack.unshift(e.cuted)
                },
                _getStack: function() {
                    for (var e, t = 0; e = this.stack[t++];) {
                        if (e.has() && e.file.getStatus() === a.PROGRESS) return e; (!e.has() || e.file.getStatus() !== a.PROGRESS && e.file.getStatus() !== a.INTERRUPT) && this.stack.splice(--t, 1)
                    }
                    return null
                },
                _nextBlock: function() {
                    var e, t, n, r, o = this,
                    a = o.options;
                    return (e = this._getStack()) ? (a.prepareNextFile && !o.pending.length && o._prepareNextFile(), e.shift()) : o.runing ? (!o.pending.length && o._getStats().numOfQueue && o._prepareNextFile(), t = o.pending.shift(), n = function(t) {
                        return t ? (e = i(t, a.chunked ? a.chunkSize: 0), o.stack.push(e), e.shift()) : null
                    },
                    s(t) ? (r = t.file, t = t[t.pipe ? "pipe": "then"](n), t.file = r, t) : n(t)) : void 0
                },
                _prepareNextFile: function() {
                    var e, t = this,
                    n = t.request("fetch-file"),
                    r = t.pending;
                    n && (e = t.request("before-send-file", n,
                    function() {
                        return n.getStatus() === a.PROGRESS || n.getStatus() === a.INTERRUPT ? n: t._finishFile(n)
                    }), t.owner.trigger("uploadStart", n), n.setStatus(a.PROGRESS), e.file = n, e.done(function() {
                        var t = o.inArray(e, r);~t && r.splice(t, 1, n)
                    }), e.fail(function(e) {
                        n.setStatus(a.ERROR, e),
                        t.owner.trigger("uploadError", n, e),
                        t.owner.trigger("uploadComplete", n)
                    }), r.push(e))
                },
                _popBlock: function(e) {
                    var t = o.inArray(e, this.pool);
                    this.pool.splice(t, 1),
                    e.file.remaning--,
                    this.remaning--
                },
                _startSend: function(t) {
                    var n, r = this,
                    i = t.file;
                    return i.getStatus() !== a.PROGRESS ? void(i.getStatus() === a.INTERRUPT && r._putback(t)) : (r.pool.push(t), r.remaning++, t.blob = 1 === t.chunks ? i.source: i.source.slice(t.start, t.end), n = r.request("before-send", t,
                    function() {
                        i.getStatus() === a.PROGRESS ? r._doSend(t) : (r._popBlock(t), e.nextTick(r.__tick))
                    }), void n.fail(function() {
                        1 === i.remaning ? r._finishFile(i).always(function() {
                            t.percentage = 1,
                            r._popBlock(t),
                            r.owner.trigger("uploadComplete", i),
                            e.nextTick(r.__tick)
                        }) : (t.percentage = 1, r.updateFileProgress(i), r._popBlock(t), e.nextTick(r.__tick))
                    }))
                },
                _doSend: function(t) {
                    var n, i, s = this,
                    u = s.owner,
                    c = s.options,
                    l = t.file,
                    f = new r(c),
                    p = o.extend({},
                    c.formData),
                    h = o.extend({},
                    c.headers);
                    t.transport = f,
                    f.on("destroy",
                    function() {
                        delete t.transport,
                        s._popBlock(t),
                        e.nextTick(s.__tick)
                    }),
                    f.on("progress",
                    function(e) {
                        t.percentage = e,
                        s.updateFileProgress(l)
                    }),
                    n = function(e) {
                        var n;
                        return i = f.getResponseAsJson() || {},
                        i._raw = f.getResponse(),
                        n = function(t) {
                            e = t
                        },
                        u.trigger("uploadAccept", t, i, n) || (e = e || "server"),
                        e
                    },
                    f.on("error",
                    function(e, r) {
                        t.retried = t.retried || 0,
                        t.chunks > 1 && ~"http,abort".indexOf(e) && t.retried < c.chunkRetry ? (t.retried++, f.send()) : (r || "server" !== e || (e = n(e)), l.setStatus(a.ERROR, e), u.trigger("uploadError", l, e), u.trigger("uploadComplete", l))
                    }),
                    f.on("load",
                    function() {
                        var e;
                        return (e = n()) ? void f.trigger("error", e, !0) : void(1 === l.remaning ? s._finishFile(l, i) : f.destroy())
                    }),
                    p = o.extend(p, {
                        id: l.id,
                        name: l.name,
                        type: l.type,
                        lastModifiedDate: l.lastModifiedDate,
                        size: l.size
                    }),
                    t.chunks > 1 && o.extend(p, {
                        chunks: t.chunks,
                        chunk: t.chunk
                    }),
                    u.trigger("uploadBeforeSend", t, p, h),
                    f.appendBlob(c.fileVal, t.blob, l.name),
                    f.append(p),
                    f.setRequestHeader(h),
                    f.send()
                },
                _finishFile: function(e, t, n) {
                    var r = this.owner;
                    return r.request("after-send-file", arguments,
                    function() {
                        e.setStatus(a.COMPLETE),
                        r.trigger("uploadSuccess", e, t, n)
                    }).fail(function(t) {
                        e.getStatus() === a.PROGRESS && e.setStatus(a.ERROR, t),
                        r.trigger("uploadError", e, t);
                    }).always(function() {
                        r.trigger("uploadComplete", e)
                    })
                },
                updateFileProgress: function(e) {
                    var t = 0,
                    n = 0;
                    e.blocks && (o.each(e.blocks,
                    function(e, t) {
                        n += (t.percentage || 0) * (t.end - t.start)
                    }), t = n / e.size, this.owner.trigger("uploadProgress", e, t || 0))
                }
            })
        }),
        t("widgets/validator", ["base", "uploader", "file", "widgets/widget"],
        function(e, t, n) {
            var r, i = e.$,
            o = {};
            return r = {
                addValidator: function(e, t) {
                    o[e] = t
                },
                removeValidator: function(e) {
                    delete o[e]
                }
            },
            t.register({
                name: "validator",
                init: function() {
                    var t = this;
                    e.nextTick(function() {
                        i.each(o,
                        function() {
                            this.call(t.owner)
                        })
                    })
                }
            }),
            r.addValidator("fileNumLimit",
            function() {
                var e = this,
                t = e.options,
                n = 0,
                r = parseInt(t.fileNumLimit, 10),
                i = !0;
                r && (e.on("beforeFileQueued",
                function(e) {
                    return n >= r && i && (i = !1, this.trigger("error", "Q_EXCEED_NUM_LIMIT", r, e), setTimeout(function() {
                        i = !0
                    },
                    1)),
                    !(n >= r)
                }), e.on("fileQueued",
                function() {
                    n++
                }), e.on("fileDequeued",
                function() {
                    n--
                }), e.on("reset",
                function() {
                    n = 0
                }))
            }),
            r.addValidator("fileSizeLimit",
            function() {
                var e = this,
                t = e.options,
                n = 0,
                r = parseInt(t.fileSizeLimit, 10),
                i = !0;
                r && (e.on("beforeFileQueued",
                function(e) {
                    var t = n + e.size > r;
                    return t && i && (i = !1, this.trigger("error", "Q_EXCEED_SIZE_LIMIT", r, e), setTimeout(function() {
                        i = !0
                    },
                    1)),
                    !t
                }), e.on("fileQueued",
                function(e) {
                    n += e.size
                }), e.on("fileDequeued",
                function(e) {
                    n -= e.size
                }), e.on("reset",
                function() {
                    n = 0
                }))
            }),
            r.addValidator("fileSingleSizeLimit",
            function() {
                var e = this,
                t = e.options,
                r = t.fileSingleSizeLimit;
                r && e.on("beforeFileQueued",
                function(e) {
                    if (e.size > r) return e.setStatus(n.Status.INVALID, "exceed_size"),
                    this.trigger("error", "F_EXCEED_SIZE", r, e),
                    !1
                })
            }),
            r.addValidator("duplicate",
            function() {
                function e(e) {
                    for (var t, n = 0,
                    r = 0,
                    i = e.length; r < i; r++) t = e.charCodeAt(r),
                    n = t + (n << 6) + (n << 16) - n;
                    return n
                }
                var t = this,
                n = t.options,
                r = {};
                n.duplicate || (t.on("beforeFileQueued",
                function(t) {
                    var n = t.__hash || (t.__hash = e(t.name + t.size + t.lastModifiedDate));
                    if (r[n]) return this.trigger("error", "F_DUPLICATE", t),
                    !1
                }), t.on("fileQueued",
                function(e) {
                    var t = e.__hash;
                    t && (r[t] = !0)
                }), t.on("fileDequeued",
                function(e) {
                    var t = e.__hash;
                    t && delete r[t]
                }), t.on("reset",
                function() {
                    r = {}
                }))
            }),
            r
        }),
        t("runtime/compbase", [],
        function() {
            function e(e, t) {
                this.owner = e,
                this.options = e.options,
                this.getRuntime = function() {
                    return t
                },
                this.getRuid = function() {
                    return t.uid
                },
                this.trigger = function() {
                    return e.trigger.apply(e, arguments)
                }
            }
            return e
        }),
        t("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"],
        function(t, n, r) {
            function i() {
                var e = {},
                r = this,
                i = this.destroy;
                n.apply(r, arguments),
                r.type = o,
                r.exec = function(n, i) {
                    var o, a = this,
                    u = a.uid,
                    c = t.slice(arguments, 2);
                    if (s[n] && (o = e[u] = e[u] || new s[n](a, r), o[i])) return o[i].apply(o, c)
                },
                r.destroy = function() {
                    return i && i.apply(this, arguments)
                }
            }
            var o = "html5",
            s = {};
            return t.inherits(n, {
                constructor: i,
                init: function() {
                    var e = this;
                    setTimeout(function() {
                        e.trigger("ready")
                    },
                    1)
                }
            }),
            i.register = function(e, n) {
                var i = s[e] = t.inherits(r, n);
                return i
            },
            e.Blob && e.FileReader && e.DataView && n.addRuntime(o, i),
            i
        }),
        t("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"],
        function(e, t) {
            return e.register("Blob", {
                slice: function(e, n) {
                    var r = this.owner.source,
                    i = r.slice || r.webkitSlice || r.mozSlice;
                    return r = i.call(r, e, n),
                    new t(this.getRuid(), r)
                }
            })
        }),
        t("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"],
        function(e, t, n) {
            var r = e.$,
            i = "webuploader-dnd-";
            return t.register("DragAndDrop", {
                init: function() {
                    var t = this.elem = this.options.container;
                    this.dragEnterHandler = e.bindFn(this._dragEnterHandler, this),
                    this.dragOverHandler = e.bindFn(this._dragOverHandler, this),
                    this.dragLeaveHandler = e.bindFn(this._dragLeaveHandler, this),
                    this.dropHandler = e.bindFn(this._dropHandler, this),
                    this.dndOver = !1,
                    t.on("dragenter", this.dragEnterHandler),
                    t.on("dragover", this.dragOverHandler),
                    t.on("dragleave", this.dragLeaveHandler),
                    t.on("drop", this.dropHandler),
                    this.options.disableGlobalDnd && (r(document).on("dragover", this.dragOverHandler), r(document).on("drop", this.dropHandler))
                },
                _dragEnterHandler: function(e) {
                    var t, n = this,
                    r = n._denied || !1;
                    return e = e.originalEvent || e,
                    n.dndOver || (n.dndOver = !0, t = e.dataTransfer.items, t && t.length && (n._denied = r = !n.trigger("accept", t)), n.elem.addClass(i + "over"), n.elem[r ? "addClass": "removeClass"](i + "denied")),
                    e.dataTransfer.dropEffect = r ? "none": "copy",
                    !1
                },
                _dragOverHandler: function(e) {
                    var t = this.elem.parent().get(0);
                    return ! (t && !r.contains(t, e.currentTarget)) && (clearTimeout(this._leaveTimer), this._dragEnterHandler.call(this, e), !1)
                },
                _dragLeaveHandler: function() {
                    var e, t = this;
                    return e = function() {
                        t.dndOver = !1,
                        t.elem.removeClass(i + "over " + i + "denied")
                    },
                    clearTimeout(t._leaveTimer),
                    t._leaveTimer = setTimeout(e, 100),
                    !1
                },
                _dropHandler: function(e) {
                    var t, o, s = this,
                    a = s.getRuid(),
                    u = s.elem.parent().get(0);
                    if (u && !r.contains(u, e.currentTarget)) return ! 1;
                    e = e.originalEvent || e,
                    t = e.dataTransfer;
                    try {
                        o = t.getData("text/html")
                    } catch(c) {}
                    return s.dndOver = !1,
                    s.elem.removeClass(i + "over"),
                    !o && t ? (s._getTansferFiles(t,
                    function(e) {
                        s.trigger("drop", r.map(e,
                        function(e) {
                            return new n(a, e)
                        }))
                    }), !1) : void 0
                },
                _getTansferFiles: function(t, n) {
                    var r, i, o, s, a, u, c, l = [],
                    f = [];
                    for (r = t.items, i = t.files, c = !(!r || !r[0].webkitGetAsEntry), a = 0, u = i.length; a < u; a++) o = i[a],
                    s = r && r[a],
                    c && s.webkitGetAsEntry().isDirectory ? f.push(this._traverseDirectoryTree(s.webkitGetAsEntry(), l)) : l.push(o);
                    e.when.apply(e, f).done(function() {
                        l.length && n(l)
                    })
                },
                _traverseDirectoryTree: function(t, n) {
                    var r = e.Deferred(),
                    i = this;
                    return t.isFile ? t.file(function(e) {
                        n.push(e),
                        r.resolve()
                    }) : t.isDirectory && t.createReader().readEntries(function(t) {
                        var o, s = t.length,
                        a = [],
                        u = [];
                        for (o = 0; o < s; o++) a.push(i._traverseDirectoryTree(t[o], u));
                        e.when.apply(e, a).then(function() {
                            n.push.apply(n, u),
                            r.resolve()
                        },
                        r.reject)
                    }),
                    r.promise()
                },
                destroy: function() {
                    var e = this.elem;
                    e && (e.off("dragenter", this.dragEnterHandler), e.off("dragover", this.dragOverHandler), e.off("dragleave", this.dragLeaveHandler), e.off("drop", this.dropHandler), this.options.disableGlobalDnd && (r(document).off("dragover", this.dragOverHandler), r(document).off("drop", this.dropHandler)))
                }
            })
        }),
        t("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"],
        function(e, t, n) {
            return t.register("FilePaste", {
                init: function() {
                    var t, n, r, i, o = this.options,
                    s = this.elem = o.container,
                    a = ".*";
                    if (o.accept) {
                        for (t = [], n = 0, r = o.accept.length; n < r; n++) i = o.accept[n].mimeTypes,
                        i && t.push(i);
                        t.length && (a = t.join(","), a = a.replace(/,/g, "|").replace(/\*/g, ".*"))
                    }
                    this.accept = a = new RegExp(a, "i"),
                    this.hander = e.bindFn(this._pasteHander, this),
                    s.on("paste", this.hander)
                },
                _pasteHander: function(e) {
                    var t, r, i, o, s, a = [],
                    u = this.getRuid();
                    for (e = e.originalEvent || e, t = e.clipboardData.items, o = 0, s = t.length; o < s; o++) r = t[o],
                    "file" === r.kind && (i = r.getAsFile()) && a.push(new n(u, i));
                    a.length && (e.preventDefault(), e.stopPropagation(), this.trigger("paste", a))
                },
                destroy: function() {
                    this.elem.off("paste", this.hander)
                }
            })
        }),
        t("runtime/html5/filepicker", ["base", "runtime/html5/runtime"],
        function(e, t) {
            var n = e.$;
            return t.register("FilePicker", {
                init: function() {
                    var e, t, r, i, o = this.getRuntime().getContainer(),
                    s = this,
                    a = s.owner,
                    u = s.options,
                    c = this.label = n(document.createElement("label")),
                    l = this.input = n(document.createElement("input"));
                    if (l.attr("type", "file"), l.attr("name", u.name), l.addClass("webuploader-element-invisible"), c.on("click",
                    function() {
                        l.trigger("click"),
                        a.trigger("dialogopen")
                    }), c.css({
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                        cursor: "pointer",
                        background: "#ffffff"
                    }), u.multiple && l.attr("multiple", "multiple"), u.accept && u.accept.length > 0) {
                        for (e = [], t = 0, r = u.accept.length; t < r; t++) e.push(u.accept[t].mimeTypes);
                        l.attr("accept", e.join(","))
                    }
                    o.append(l),
                    o.append(c),
                    i = function(e) {
                        a.trigger(e.type)
                    },
                    l.on("change",
                    function(e) {
                        var t, r = arguments.callee;
                        s.files = e.target.files,
                        t = this.cloneNode(!0),
                        t.value = null,
                        this.parentNode.replaceChild(t, this),
                        l.off(),
                        l = n(t).on("change", r).on("mouseenter mouseleave", i),
                        a.trigger("change")
                    }),
                    c.on("mouseenter mouseleave", i)
                },
                getFiles: function() {
                    return this.files
                },
                destroy: function() {
                    this.input.off(),
                    this.label.off()
                }
            })
        }),
        t("runtime/html5/util", ["base"],
        function(t) {
            var n = e.createObjectURL && e || e.URL && URL.revokeObjectURL && URL || e.webkitURL,
            r = t.noop,
            i = r;
            return n && (r = function() {
                return n.createObjectURL.apply(n, arguments)
            },
            i = function() {
                return n.revokeObjectURL.apply(n, arguments)
            }),
            {
                createObjectURL: r,
                revokeObjectURL: i,
                dataURL2Blob: function(e) {
                    var t, n, r, i, o, s;
                    for (s = e.split(","), t = ~s[0].indexOf("base64") ? atob(s[1]) : decodeURIComponent(s[1]), r = new ArrayBuffer(t.length), n = new Uint8Array(r), i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
                    return o = s[0].split(":")[1].split(";")[0],
                    this.arrayBufferToBlob(r, o)
                },
                dataURL2ArrayBuffer: function(e) {
                    var t, n, r, i;
                    for (i = e.split(","), t = ~i[0].indexOf("base64") ? atob(i[1]) : decodeURIComponent(i[1]), n = new Uint8Array(t.length), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
                    return n.buffer
                },
                arrayBufferToBlob: function(t, n) {
                    var r, i = e.BlobBuilder || e.WebKitBlobBuilder;
                    return i ? (r = new i, r.append(t), r.getBlob(n)) : new Blob([t], n ? {
                        type: n
                    }: {})
                },
                canvasToDataUrl: function(e, t, n) {
                    return e.toDataURL(t, n / 100)
                },
                parseMeta: function(e, t) {
                    t(!1, {})
                },
                updateImageHead: function(e) {
                    return e
                }
            }
        }),
        t("runtime/html5/imagemeta", ["runtime/html5/util"],
        function(e) {
            var t;
            return t = {
                parsers: {
                    65505 : []
                },
                maxMetaDataSize: 262144,
                parse: function(e, t) {
                    var n = this,
                    r = new FileReader;
                    r.onload = function() {
                        t(!1, n._parse(this.result)),
                        r = r.onload = r.onerror = null
                    },
                    r.onerror = function(e) {
                        t(e.message),
                        r = r.onload = r.onerror = null
                    },
                    e = e.slice(0, n.maxMetaDataSize),
                    r.readAsArrayBuffer(e.getSource())
                },
                _parse: function(e, n) {
                    if (! (e.byteLength < 6)) {
                        var r, i, o, s, a = new DataView(e),
                        u = 2,
                        c = a.byteLength - 4,
                        l = u,
                        f = {};
                        if (65496 === a.getUint16(0)) {
                            for (; u < c && (r = a.getUint16(u), r >= 65504 && r <= 65519 || 65534 === r) && (i = a.getUint16(u + 2) + 2, !(u + i > a.byteLength));) {
                                if (o = t.parsers[r], !n && o) for (s = 0; s < o.length; s += 1) o[s].call(t, a, u, i, f);
                                u += i,
                                l = u
                            }
                            l > 6 && (e.slice ? f.imageHead = e.slice(2, l) : f.imageHead = new Uint8Array(e).subarray(2, l))
                        }
                        return f
                    }
                },
                updateImageHead: function(e, t) {
                    var n, r, i, o = this._parse(e, !0);
                    return i = 2,
                    o.imageHead && (i = 2 + o.imageHead.byteLength),
                    r = e.slice ? e.slice(i) : new Uint8Array(e).subarray(i),
                    n = new Uint8Array(t.byteLength + 2 + r.byteLength),
                    n[0] = 255,
                    n[1] = 216,
                    n.set(new Uint8Array(t), 2),
                    n.set(new Uint8Array(r), t.byteLength + 2),
                    n.buffer
                }
            },
            e.parseMeta = function() {
                return t.parse.apply(t, arguments)
            },
            e.updateImageHead = function() {
                return t.updateImageHead.apply(t, arguments)
            },
            t
        }),
        t("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"],
        function(e, t) {
            var n = {};
            return n.ExifMap = function() {
                return this
            },
            n.ExifMap.prototype.map = {
                Orientation: 274
            },
            n.ExifMap.prototype.get = function(e) {
                return this[e] || this[this.map[e]]
            },
            n.exifTagTypes = {
                1 : {
                    getValue: function(e, t) {
                        return e.getUint8(t)
                    },
                    size: 1
                },
                2 : {
                    getValue: function(e, t) {
                        return String.fromCharCode(e.getUint8(t))
                    },
                    size: 1,
                    ascii: !0
                },
                3 : {
                    getValue: function(e, t, n) {
                        return e.getUint16(t, n)
                    },
                    size: 2
                },
                4 : {
                    getValue: function(e, t, n) {
                        return e.getUint32(t, n)
                    },
                    size: 4
                },
                5 : {
                    getValue: function(e, t, n) {
                        return e.getUint32(t, n) / e.getUint32(t + 4, n)
                    },
                    size: 8
                },
                9 : {
                    getValue: function(e, t, n) {
                        return e.getInt32(t, n)
                    },
                    size: 4
                },
                10 : {
                    getValue: function(e, t, n) {
                        return e.getInt32(t, n) / e.getInt32(t + 4, n)
                    },
                    size: 8
                }
            },
            n.exifTagTypes[7] = n.exifTagTypes[1],
            n.getExifValue = function(t, r, i, o, s, a) {
                var u, c, l, f, p, h, d = n.exifTagTypes[o];
                if (!d) return void e.log("Invalid Exif data: Invalid tag type.");
                if (u = d.size * s, c = u > 4 ? r + t.getUint32(i + 8, a) : i + 8, c + u > t.byteLength) return void e.log("Invalid Exif data: Invalid data offset.");
                if (1 === s) return d.getValue(t, c, a);
                for (l = [], f = 0; f < s; f += 1) l[f] = d.getValue(t, c + f * d.size, a);
                if (d.ascii) {
                    for (p = "", f = 0; f < l.length && (h = l[f], "\0" !== h); f += 1) p += h;
                    return p
                }
                return l
            },
            n.parseExifTag = function(e, t, r, i, o) {
                var s = e.getUint16(r, i);
                o.exif[s] = n.getExifValue(e, t, r, e.getUint16(r + 2, i), e.getUint32(r + 4, i), i)
            },
            n.parseExifTags = function(t, n, r, i, o) {
                var s, a, u;
                if (r + 6 > t.byteLength) return void e.log("Invalid Exif data: Invalid directory offset.");
                if (s = t.getUint16(r, i), a = r + 2 + 12 * s, a + 4 > t.byteLength) return void e.log("Invalid Exif data: Invalid directory size.");
                for (u = 0; u < s; u += 1) this.parseExifTag(t, n, r + 2 + 12 * u, i, o);
                return t.getUint32(a, i)
            },
            n.parseExifData = function(t, r, i, o) {
                var s, a, u = r + 10;
                if (1165519206 === t.getUint32(r + 4)) {
                    if (u + 8 > t.byteLength) return void e.log("Invalid Exif data: Invalid segment size.");
                    if (0 !== t.getUint16(r + 8)) return void e.log("Invalid Exif data: Missing byte alignment offset.");
                    switch (t.getUint16(u)) {
                    case 18761:
                        s = !0;
                        break;
                    case 19789:
                        s = !1;
                        break;
                    default:
                        return void e.log("Invalid Exif data: Invalid byte alignment marker.")
                    }
                    if (42 !== t.getUint16(u + 2, s)) return void e.log("Invalid Exif data: Missing TIFF marker.");
                    a = t.getUint32(u + 4, s),
                    o.exif = new n.ExifMap,
                    a = n.parseExifTags(t, u, u + a, s, o)
                }
            },
            t.parsers[65505].push(n.parseExifData),
            n
        }),
        t("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"],
        function(e, t, n) {
            var r = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
            return t.register("Image", {
                modified: !1,
                init: function() {
                    var e = this,
                    t = new Image;
                    t.onload = function() {
                        e._info = {
                            type: e.type,
                            width: this.width,
                            height: this.height
                        },
                        e._metas || "image/jpeg" !== e.type ? e.owner.trigger("load") : n.parseMeta(e._blob,
                        function(t, n) {
                            e._metas = n,
                            e.owner.trigger("load")
                        })
                    },
                    t.onerror = function() {
                        e.owner.trigger("error")
                    },
                    e._img = t
                },
                loadFromBlob: function(e) {
                    var t = this,
                    r = t._img;
                    t._blob = e,
                    t.type = e.type,
                    r.src = n.createObjectURL(e.getSource()),
                    t.owner.once("load",
                    function() {
                        n.revokeObjectURL(r.src)
                    })
                },
                resize: function(e, t) {
                    var n = this._canvas || (this._canvas = document.createElement("canvas"));
                    this._resize(this._img, n, e, t),
                    this._blob = null,
                    this.modified = !0,
                    this.owner.trigger("complete", "resize")
                },
                crop: function(e, t, n, r, i) {
                    var o = this._canvas || (this._canvas = document.createElement("canvas")),
                    s = this.options,
                    a = this._img,
                    u = a.naturalWidth,
                    c = a.naturalHeight,
                    l = this.getOrientation();
                    i = i || 1,
                    o.width = n,
                    o.height = r,
                    s.preserveHeaders || this._rotate2Orientaion(o, l),
                    this._renderImageToCanvas(o, a, -e, -t, u * i, c * i),
                    this._blob = null,
                    this.modified = !0,
                    this.owner.trigger("complete", "crop")
                },
                getAsBlob: function(e) {
                    var t, r = this._blob,
                    i = this.options;
                    if (e = e || this.type, this.modified || this.type !== e) {
                        if (t = this._canvas, "image/jpeg" === e) {
                            if (r = n.canvasToDataUrl(t, e, i.quality), i.preserveHeaders && this._metas && this._metas.imageHead) return r = n.dataURL2ArrayBuffer(r),
                            r = n.updateImageHead(r, this._metas.imageHead),
                            r = n.arrayBufferToBlob(r, e)
                        } else r = n.canvasToDataUrl(t, e);
                        r = n.dataURL2Blob(r)
                    }
                    return r
                },
                getAsDataUrl: function(e) {
                    var t = this.options;
                    return e = e || this.type,
                    "image/jpeg" === e ? n.canvasToDataUrl(this._canvas, e, t.quality) : this._canvas.toDataURL(e)
                },
                getOrientation: function() {
                    return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
                },
                info: function(e) {
                    return e ? (this._info = e, this) : this._info
                },
                meta: function(e) {
                    return e ? (this._metas = e, this) : this._metas
                },
                destroy: function() {
                    var e = this._canvas;
                    this._img.onload = null,
                    e && (e.getContext("2d").clearRect(0, 0, e.width, e.height), e.width = e.height = 0, this._canvas = null),
                    this._img.src = r,
                    this._img = this._blob = null
                },
                _resize: function(e, t, n, r) {
                    var i, o, s, a, u, c = this.options,
                    l = e.width,
                    f = e.height,
                    p = this.getOrientation();~ [5, 6, 7, 8].indexOf(p) && (n ^= r, r ^= n, n ^= r),
                    i = Math[c.crop ? "max": "min"](n / l, r / f),
                    c.allowMagnify || (i = Math.min(1, i)),
                    o = l * i,
                    s = f * i,
                    c.crop ? (t.width = n, t.height = r) : (t.width = o, t.height = s),
                    a = (t.width - o) / 2,
                    u = (t.height - s) / 2,
                    c.preserveHeaders || this._rotate2Orientaion(t, p),
                    this._renderImageToCanvas(t, e, a, u, o, s)
                },
                _rotate2Orientaion: function(e, t) {
                    var n = e.width,
                    r = e.height,
                    i = e.getContext("2d");
                    switch (t) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        e.width = r,
                        e.height = n
                    }
                    switch (t) {
                    case 2:
                        i.translate(n, 0),
                        i.scale( - 1, 1);
                        break;
                    case 3:
                        i.translate(n, r),
                        i.rotate(Math.PI);
                        break;
                    case 4:
                        i.translate(0, r),
                        i.scale(1, -1);
                        break;
                    case 5:
                        i.rotate(.5 * Math.PI),
                        i.scale(1, -1);
                        break;
                    case 6:
                        i.rotate(.5 * Math.PI),
                        i.translate(0, -r);
                        break;
                    case 7:
                        i.rotate(.5 * Math.PI),
                        i.translate(n, -r),
                        i.scale( - 1, 1);
                        break;
                    case 8:
                        i.rotate( - .5 * Math.PI),
                        i.translate( - n, 0)
                    }
                },
                _renderImageToCanvas: function() {
                    function t(e, t, n) {
                        var r, i, o, s = document.createElement("canvas"),
                        a = s.getContext("2d"),
                        u = 0,
                        c = n,
                        l = n;
                        for (s.width = 1, s.height = n, a.drawImage(e, 0, 0), r = a.getImageData(0, 0, 1, n).data; l > u;) i = r[4 * (l - 1) + 3],
                        0 === i ? c = l: u = l,
                        l = c + u >> 1;
                        return o = l / n,
                        0 === o ? 1 : o
                    }
                    function n(e) {
                        var t, n, r = e.naturalWidth,
                        i = e.naturalHeight;
                        return r * i > 1048576 && (t = document.createElement("canvas"), t.width = t.height = 1, n = t.getContext("2d"), n.drawImage(e, -r + 1, 0), 0 === n.getImageData(0, 0, 1, 1).data[3])
                    }
                    return e.os.ios ? e.os.ios >= 7 ?
                    function(e, n, r, i, o, s) {
                        var a = n.naturalWidth,
                        u = n.naturalHeight,
                        c = t(n, a, u);
                        return e.getContext("2d").drawImage(n, 0, 0, a * c, u * c, r, i, o, s)
                    }: function(e, r, i, o, s, a) {
                        var u, c, l, f, p, h, d, g = r.naturalWidth,
                        m = r.naturalHeight,
                        y = e.getContext("2d"),
                        v = n(r),
                        b = "image/jpeg" === this.type,
                        w = 1024,
                        x = 0,
                        T = 0;
                        for (v && (g /= 2, m /= 2), y.save(), u = document.createElement("canvas"), u.width = u.height = w, c = u.getContext("2d"), l = b ? t(r, g, m) : 1, f = Math.ceil(w * s / g), p = Math.ceil(w * a / m / l); x < m;) {
                            for (h = 0, d = 0; h < g;) c.clearRect(0, 0, w, w),
                            c.drawImage(r, -h, -x),
                            y.drawImage(u, 0, 0, w, w, i + d, o + T, f, p),
                            h += w,
                            d += f;
                            x += w,
                            T += p
                        }
                        y.restore(),
                        u = c = null
                    }: function(t) {
                        var n = e.slice(arguments, 1),
                        r = t.getContext("2d");
                        r.drawImage.apply(r, n)
                    }
                } ()
            })
        }),
        t("runtime/html5/transport", ["base", "runtime/html5/runtime"],
        function(e, t) {
            var n = e.noop,
            r = e.$;
            return t.register("Transport", {
                init: function() {
                    this._status = 0,
                    this._response = null
                },
                send: function() {
                    var t, n, i, o = this.owner,
                    s = this.options,
                    a = this._initAjax(),
                    u = o._blob,
                    c = s.server;
                    s.sendAsBinary ? (c += (/\?/.test(c) ? "&": "?") + r.param(o._formData), n = u.getSource()) : (t = new FormData, r.each(o._formData,
                    function(e, n) {
                        t.append(e, n)
                    }), t.append(s.fileVal, u.getSource(), s.filename || o._formData.name || "")),
                    s.withCredentials && "withCredentials" in a ? (a.open(s.method, c, !0), a.withCredentials = !0) : a.open(s.method, c),
                    this._setRequestHeader(a, s.headers),
                    n ? (a.overrideMimeType && a.overrideMimeType("application/octet-stream"), e.os.android ? (i = new FileReader, i.onload = function() {
                        a.send(this.result),
                        i = i.onload = null
                    },
                    i.readAsArrayBuffer(n)) : a.send(n)) : a.send(t)
                },
                getResponse: function() {
                    return this._response
                },
                getResponseAsJson: function() {
                    return this._parseJson(this._response)
                },
                getStatus: function() {
                    return this._status
                },
                abort: function() {
                    var e = this._xhr;
                    e && (e.upload.onprogress = n, e.onreadystatechange = n, e.abort(), this._xhr = e = null)
                },
                destroy: function() {
                    this.abort()
                },
                _initAjax: function() {
                    var e = this,
                    t = new XMLHttpRequest,
                    r = this.options;
                    return ! r.withCredentials || "withCredentials" in t || "undefined" == typeof XDomainRequest || (t = new XDomainRequest),
                    t.upload.onprogress = function(t) {
                        var n = 0;
                        return t.lengthComputable && (n = t.loaded / t.total),
                        e.trigger("progress", n)
                    },
                    t.onreadystatechange = function() {
                        if (4 === t.readyState) return t.upload.onprogress = n,
                        t.onreadystatechange = n,
                        e._xhr = null,
                        e._status = t.status,
                        t.status >= 200 && t.status < 300 ? (e._response = t.responseText, e.trigger("load")) : t.status >= 500 && t.status < 600 ? (e._response = t.responseText, e.trigger("error", "server")) : e.trigger("error", e._status ? "http": "abort")
                    },
                    e._xhr = t,
                    t
                },
                _setRequestHeader: function(e, t) {
                    r.each(t,
                    function(t, n) {
                        e.setRequestHeader(t, n)
                    })
                },
                _parseJson: function(e) {
                    var t;
                    try {
                        t = JSON.parse(e)
                    } catch(n) {
                        t = {}
                    }
                    return t
                }
            })
        }),
        t("preset/html5only", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/image", "runtime/html5/transport"],
        function(e) {
            return e
        }),
        t("webuploader", ["preset/html5only"],
        function(e) {
            return e
        }),
        n("webuploader")
    })
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(71),
    o = n(70),
    s = n(14),
    a = n(13),
    u = function(e) {
        function t() {
            e.apply(this, arguments),
            this.title = s.get("item.ip.title")
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this;
            return new Promise(function(t, n) {
                e.set(i.DOCTOR_STATES.success, a.config.ip),
                t()
            })
        },
        t
    } (o.BasicDoctor);
    t.IPDoctor = u
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(71),
    o = n(70),
    s = n(14),
    a = function(e) {
        function t() {
            e.apply(this, arguments),
            this.title = s.get("item.jQuery.title")
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this;
            return new Promise(function(t, n) {
                var r = "$",
                o = !!window[r];
                o ? e.set(i.DOCTOR_STATES.success, s.get("jQuery.enable.true")) : e.set(i.DOCTOR_STATES.error, s.get("jQuery.enable.false")),
                t()
            })
        },
        t
    } (o.BasicDoctor);
    t.JQueryDoctor = a
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(71),
    o = n(70),
    s = n(14),
    a = function(e) {
        function t() {
            e.apply(this, arguments),
            this.title = s.get("item.js.title")
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this;
            return new Promise(function(t, n) {
                var r = "isJavaScriptEnable",
                o = window[r] !== !1;
                o ? e.set(i.DOCTOR_STATES.success, s.get("js.enable.true")) : e.set(i.DOCTOR_STATES.error, s.get("js.enable.false")),
                t()
            })
        },
        t
    } (o.BasicDoctor);
    t.JSDoctor = a
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(71),
    o = n(70),
    s = n(14),
    a = function(e) {
        function t() {
            e.apply(this, arguments),
            this.title = s.get("item.userAgent.title")
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this;
            return new Promise(function(t, n) {
                e.set(i.DOCTOR_STATES.success, window.navigator.userAgent),
                t()
            })
        },
        t
    } (o.BasicDoctor);
    t.UserAgentDoctor = a
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends ||
    function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    },
    i = n(71),
    o = n(70),
    s = n(14),
    a = n(83),
    u = function(e) {
        function t() {
            e.apply(this, arguments),
            this.title = s.get("item.webSocket.title")
        }
        return r(t, e),
        t.prototype.diagnose = function() {
            var e = this;
            this.set(i.DOCTOR_STATES.checking, s.get("item.webSocket.checking"));
            var t = (new Date).valueOf();
            return a.testSocket().then(function(n) {
                var r = (new Date).valueOf(),
                o = r - t;
                e.set(i.DOCTOR_STATES.success, s.get("item.webSocket.success") + " " + o + "ms")
            })["catch"](function(t) {
                e.set(i.DOCTOR_STATES.error, t || s.get("item.webSocket.errMsg"))
            })
        },
        t
    } (o.BasicDoctor);
    t.WebSocketDoctor = u
},
function(e, t, n) {
    "use strict";
    function r() {
        if (!i.teambition.me) return new Promise(function(e, t) {
            t(a.get("item.API.unauthorized"))
        });
        var e = new s(o.config.PUSH_HOST, {
            token: i.teambition.me.tcmToken
        });
        return e.connect(o.config.PUSH_HOST, {
            path: "/websocket",
            token: i.teambition.me.tcmToken
        }),
        new Promise(function(t, n) {
            var r = {
                message: "ping"
            };
            e.request("ping", r,
            function(r, i) {
                return e.close(),
                r ? n(r.toString()) : void("pong" !== i ? n() : t(i))
            })
        })
    }
    var i = n(67),
    o = n(13),
    s = n(84),
    a = n(14);
    t.testSocket = r
},
function(e, t, n) {
    var r, i, o; !
    function(s, a) {
        "use strict";
        "object" == typeof e && e.exports ? e.exports = a(n(85), n(86)) : (i = [n(85), n(86)], r = a, o = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== o && (e.exports = o)))
    } ("object" == typeof window ? window: this,
    function(e, t) {
        "use strict";
        function n(e, t) {
            this.url = e,
            this.options = t || {},
            this.reconnectionTime = c,
            this.lastId = null,
            this.consumerId = null,
            this.connection = null,
            this.connected = !1,
            this.joinQueue = [],
            this.sendQueue = [],
            this.pending = {}
        }
        function r(e) {
            this.type = e.type,
            this.data = e.payload,
            this.id = this.data.id
        }
        function i(t, n, r, i) {
            var o = this;
            this.id = a(),
            this.params = JSON.stringify(e.request(this.id, n, r)),
            this.callback = i || u,
            this.pending = t,
            this.pending[this.id] = this,
            this.timer = setTimeout(function() {
                o.done(new Error("Send RPC time out, " + o.id + ", " + o.params))
            },
            l)
        }
        function o(e) {
            if (e.connected) for (; e.sendQueue.length;) e.connection.send(e.sendQueue.shift().params)
        }
        function s(e) {
            if (e.connected) for (; e.joinQueue.length;) e._join(e.joinQueue.shift(), e.consumerId)
        }
        function a() {
            return p + ":" + ++f
        }
        function u() {}
        var c = 1e3 * (Math.ceil(50 * Math.random()) + 10),
        l = 6e4;
        n.prototype.onopen = u,
        n.prototype.onclose = u,
        n.prototype.onerror = function(e) {
            console.error(new Date, e)
        },
        n.prototype.onmessage = function(e) {
            console.log(new Date, e.type, e.data)
        },
        n.prototype.request = function(e, t, n) {
            return this.sendQueue.push(new i(this.pending, e, t, n)),
            o(this),
            this
        },
        n.prototype.join = function(e) {
            return this.joinQueue.push(e),
            s(this),
            this
        },
        n.prototype._join = function(e, t) {
            throw new Error("_join method not implemented")
        },
        n.prototype._respond = function(t) {
            this.connection.send(JSON.stringify(e.success(t.id, "OK")))
        },
        n.prototype.connect = function(n, i) {
            var a = this;
            return n && (this.url = n),
            i && (this.options = i),
            this.options.token && !this.options.query && (this.options.query = "token=" + this.options.token),
            this.connection && (this.connection.off(), this.connection.close()),
            this.connection = new t(this.url, this.options),
            this.connection.on("open",
            function() {
                a.reconnectionTime = c,
                a.consumerId = this.id,
                a.connected = !0,
                a.onopen(),
                s(a),
                o(a)
            }).on("close",
            function(e) {
                e && a.onerror(e),
                a.close(),
                setTimeout(function() {
                    a.reconnectionTime *= 1.2,
                    a.reconnectionTime > l && (a.reconnectionTime = l),
                    a.connect()
                },
                a.reconnectionTime)
            }).on("error",
            function(e) {
                a.onerror(e)
            }).on("message",
            function(t) {
                var n = new r(e.parse(t));
                switch (n.type) {
                case "invalid":
                    return a.onerror(n.data);
                case "notification":
                    return a.onmessage(n);
                case "success":
                case "error":
                    return a.lastId = n.id,
                    void(a.pending[n.id] ? a.pending[n.id].done(n.data.error, n.data.result) : a.onmessage(n));
                case "request":
                    a._respond(n),
                    n.id !== a.lastResponseId && (a.lastResponseId = n.id, a.onmessage(n))
                }
            }),
            this
        },
        n.prototype.close = function() {
            var e = this; (this.connected || this.connection) && (this.consumerId = null, this.connected = !1, this.connection ? (this.connection.off(), this.connection.once("close",
            function() {
                e.onclose()
            }), this.connection.close(), this.connection = null) : this.onclose())
        },
        i.prototype.clear = function() {
            return !! this.pending[this.id] && (clearTimeout(this.timer), delete this.pending[this.id], !0)
        },
        i.prototype.done = function(e, t) {
            return this.clear() ? (this.callback(e, t), this) : this
        };
        var f = 0,
        p = (Date.now() - (new Date).setMinutes(0, 0, 0)).toString(36);
        return n
    })
},
function(e, t, n) {
    var r, i, o; !
    function(n, s) {
        "use strict";
        "object" == typeof e && e.exports ? e.exports = s() : (i = [], r = s, o = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== o && (e.exports = o)))
    } ("object" == typeof window ? window: this,
    function() {
        "use strict";
        function e(e) {
            var c = null,
            l = null;
            if (e && e.jsonrpc === t.VERSION) if (b.call(e, "id")) {
                if (b.call(e, "method")) l = new n(e.id, e.method, e.params),
                c = u(l);
                else if (b.call(e, "result")) l = new i(e.id, e.result),
                c = u(l);
                else if (b.call(e, "error")) if (e.error) {
                    var f = new a(e.error.message, e.error.code, e.error.data);
                    f.message !== e.error.message || f.code !== e.error.code ? c = a.internalError(e) : (l = new o(e.id, f), c = u(l))
                } else c = a.internalError(e)
            } else l = new r(e.method, e.params),
            c = u(l);
            else c = a.invalidRequest(e);
            return ! c && l ? new s(l) : new s(c || a.invalidRequest(e), "invalid")
        }
        function t() {
            this.jsonrpc = "2.0"
        }
        function n(e, n, r) {
            t.call(this),
            this.id = e,
            this.method = n,
            r !== y && (this.params = r)
        }
        function r(e, n) {
            t.call(this),
            this.method = e,
            n !== y && (this.params = n)
        }
        function i(e, n) {
            t.call(this),
            this.id = e,
            this.result = n
        }
        function o(e, n) {
            t.call(this),
            this.id = e,
            this.error = n
        }
        function s(e, t) {
            this.payload = e,
            this.type = t || e.name
        }
        function a(e, t, n) {
            T(this, this.constructor),
            this.message = e === y ? "": String(e),
            this.code = x(t) ? t: 0,
            null != n && (this.data = n)
        }
        function u(e, t) {
            var s = null;
            switch (e.name) {
            case n.prototype.name:
                s = c(e.id) || l(e.method) || p(e.params);
                break;
            case r.prototype.name:
                s = l(e.method) || p(e.params);
                break;
            case i.prototype.name:
                s = c(e.id) || f(e.result);
                break;
            case o.prototype.name:
                s = c(e.id, !0) || h(e.error)
            }
            if (s && t) throw s;
            return s
        }
        function c(e, t) {
            return t && null === e ? null: d(e) || x(e) ? null: a.internalError('"id" must be provided, a string or an integer.')
        }
        function l(e) {
            return d(e) ? null: a.methodNotFound(e)
        }
        function f(e) {
            return e === y ? a.internalError("Result must exist for success Response objects") : null
        }
        function p(e) {
            if (e === y) return null;
            if (w(e) || g(e)) try {
                return JSON.stringify(e),
                null
            } catch(t) {
                return a.parseError(e)
            }
            return a.invalidParams(e)
        }
        function h(e) {
            return e instanceof a ? x(e.code) ? d(e.message) ? null: a.internalError("Message must exist or must be a string.") : a.internalError("Invalid error code. It must be an integer.") : a.internalError("Error must be an instance of JsonRpcError.")
        }
        function d(e) {
            return e && "string" == typeof e
        }
        function g(e) {
            return e && "object" == typeof e && !w(e)
        }
        function m(e, t) {
            function n() {
                this.constructor = e
            }
            return n.prototype = t.prototype,
            e.prototype = new n,
            e
        }
        var y = void 0,
        v = Object.prototype.toString,
        b = Object.prototype.hasOwnProperty,
        w = Array.isArray ||
        function(e) {
            return "[object Array]" === v.call(e)
        },
        x = Number.isSafeInteger ||
        function(e) {
            return e === Math.floor(e)
        },
        T = Error.captureStackTrace ||
        function(e) {
            e.stack = (new Error).stack
        },
        S = {
            JsonRpc: t,
            JsonRpcError: a
        };
        return S.request = function(e, t, r) {
            var i = new n(e, t, r);
            return u(i, !0),
            i
        },
        S.notification = function(e, t) {
            var n = new r(e, t);
            return u(n, !0),
            n
        },
        S.success = function(e, t) {
            var n = new i(e, t);
            return u(n, !0),
            n
        },
        S.error = function(e, t) {
            var n = new o(e, t);
            return u(n, !0),
            n
        },
        S.parse = function(t) {
            if (!t || "string" != typeof t) return new s(a.invalidRequest(t), "invalid");
            try {
                t = JSON.parse(t)
            } catch(n) {
                return new s(a.parseError(t), "invalid")
            }
            if (!w(t)) return e(t);
            if (!t.length) return new s(a.invalidRequest(t), "invalid");
            for (var r = 0,
            i = t.length; r < i; r++) t[r] = e(t[r]);
            return t
        },
        S.parseObject = e,
        t.VERSION = "2.0",
        t.prototype.serialize = t.prototype.toString = function() {
            return JSON.stringify(this)
        },
        m(n, t),
        n.prototype.name = "request",
        m(r, t),
        r.prototype.name = "notification",
        m(i, t),
        i.prototype.name = "success",
        m(o, t),
        o.prototype.name = "error",
        m(a, Error),
        a.prototype.name = "JsonRpcError",
        a.invalidRequest = function(e) {
            return new a("Invalid request", ( - 32600), e)
        },
        a.methodNotFound = function(e) {
            return new a("Method not found", ( - 32601), e)
        },
        a.invalidParams = function(e) {
            return new a("Invalid params", ( - 32602), e)
        },
        a.internalError = function(e) {
            return new a("Internal error", ( - 32603), e)
        },
        a.parseError = function(e) {
            return new a("Parse error", ( - 32700), e)
        },
        S
    })
},
function(e, t, n) {
    e.exports = n(87)
},
function(e, t, n) {
    e.exports = n(88),
    e.exports.parser = n(95)
},
function(e, t, n) { (function(t) {
        function r(e, n) {
            if (! (this instanceof r)) return new r(e, n);
            n = n || {},
            e && "object" == typeof e && (n = e, e = null),
            e ? (e = l(e), n.hostname = e.host, n.secure = "https" == e.protocol || "wss" == e.protocol, n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = l(n.host).host),
            this.secure = null != n.secure ? n.secure: t.location && "https:" == location.protocol,
            n.hostname && !n.port && (n.port = this.secure ? "443": "80"),
            this.agent = n.agent || !1,
            this.hostname = n.hostname || (t.location ? location.hostname: "localhost"),
            this.port = n.port || (t.location && location.port ? location.port: this.secure ? 443 : 80),
            this.query = n.query || {},
            "string" == typeof this.query && (this.query = p.decode(this.query)),
            this.upgrade = !1 !== n.upgrade,
            this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/",
            this.forceJSONP = !!n.forceJSONP,
            this.jsonp = !1 !== n.jsonp,
            this.forceBase64 = !!n.forceBase64,
            this.enablesXDR = !!n.enablesXDR,
            this.timestampParam = n.timestampParam || "t",
            this.timestampRequests = n.timestampRequests,
            this.transports = n.transports || ["polling", "websocket"],
            this.readyState = "",
            this.writeBuffer = [],
            this.policyPort = n.policyPort || 843,
            this.rememberUpgrade = n.rememberUpgrade || !1,
            this.binaryType = null,
            this.onlyBinaryUpgrades = n.onlyBinaryUpgrades,
            this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}),
            !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
            this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
            this.pfx = n.pfx || null,
            this.key = n.key || null,
            this.passphrase = n.passphrase || null,
            this.cert = n.cert || null,
            this.ca = n.ca || null,
            this.ciphers = n.ciphers || null,
            this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized;
            var i = "object" == typeof t && t;
            i.global === i && n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders),
            this.open()
        }
        function i(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }
        var o = n(89),
        s = n(104),
        a = n(108)("engine.io-client:socket"),
        u = n(114),
        c = n(95),
        l = n(115),
        f = n(116),
        p = n(105);
        e.exports = r,
        r.priorWebsocketSuccess = !1,
        s(r.prototype),
        r.protocol = c.protocol,
        r.Socket = r,
        r.Transport = n(94),
        r.transports = n(89),
        r.parser = n(95),
        r.prototype.createTransport = function(e) {
            a('creating transport "%s"', e);
            var t = i(this.query);
            t.EIO = c.protocol,
            t.transport = e,
            this.id && (t.sid = this.id);
            var n = new o[e]({
                agent: this.agent,
                hostname: this.hostname,
                port: this.port,
                secure: this.secure,
                path: this.path,
                query: t,
                forceJSONP: this.forceJSONP,
                jsonp: this.jsonp,
                forceBase64: this.forceBase64,
                enablesXDR: this.enablesXDR,
                timestampRequests: this.timestampRequests,
                timestampParam: this.timestampParam,
                policyPort: this.policyPort,
                socket: this,
                pfx: this.pfx,
                key: this.key,
                passphrase: this.passphrase,
                cert: this.cert,
                ca: this.ca,
                ciphers: this.ciphers,
                rejectUnauthorized: this.rejectUnauthorized,
                perMessageDeflate: this.perMessageDeflate,
                extraHeaders: this.extraHeaders
            });
            return n
        },
        r.prototype.open = function() {
            var e;
            if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") != -1) e = "websocket";
            else {
                if (0 === this.transports.length) {
                    var t = this;
                    return void setTimeout(function() {
                        t.emit("error", "No transports available")
                    },
                    0)
                }
                e = this.transports[0]
            }
            this.readyState = "opening";
            try {
                e = this.createTransport(e)
            } catch(n) {
                return this.transports.shift(),
                void this.open()
            }
            e.open(),
            this.setTransport(e)
        },
        r.prototype.setTransport = function(e) {
            a("setting transport %s", e.name);
            var t = this;
            this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()),
            this.transport = e,
            e.on("drain",
            function() {
                t.onDrain()
            }).on("packet",
            function(e) {
                t.onPacket(e)
            }).on("error",
            function(e) {
                t.onError(e)
            }).on("close",
            function() {
                t.onClose("transport close")
            })
        },
        r.prototype.probe = function(e) {
            function t() {
                if (p.onlyBinaryUpgrades) {
                    var t = !this.supportsBinary && p.transport.supportsBinary;
                    f = f || t
                }
                f || (a('probe transport "%s" opened', e), l.send([{
                    type: "ping",
                    data: "probe"
                }]), l.once("packet",
                function(t) {
                    if (!f) if ("pong" == t.type && "probe" == t.data) {
                        if (a('probe transport "%s" pong', e), p.upgrading = !0, p.emit("upgrading", l), !l) return;
                        r.priorWebsocketSuccess = "websocket" == l.name,
                        a('pausing current transport "%s"', p.transport.name),
                        p.transport.pause(function() {
                            f || "closed" != p.readyState && (a("changing transport and sending upgrade packet"), c(), p.setTransport(l), l.send([{
                                type: "upgrade"
                            }]), p.emit("upgrade", l), l = null, p.upgrading = !1, p.flush())
                        })
                    } else {
                        a('probe transport "%s" failed', e);
                        var n = new Error("probe error");
                        n.transport = l.name,
                        p.emit("upgradeError", n)
                    }
                }))
            }
            function n() {
                f || (f = !0, c(), l.close(), l = null)
            }
            function i(t) {
                var r = new Error("probe error: " + t);
                r.transport = l.name,
                n(),
                a('probe transport "%s" failed because of error: %s', e, t),
                p.emit("upgradeError", r)
            }
            function o() {
                i("transport closed")
            }
            function s() {
                i("socket closed")
            }
            function u(e) {
                l && e.name != l.name && (a('"%s" works - aborting "%s"', e.name, l.name), n())
            }
            function c() {
                l.removeListener("open", t),
                l.removeListener("error", i),
                l.removeListener("close", o),
                p.removeListener("close", s),
                p.removeListener("upgrading", u)
            }
            a('probing transport "%s"', e);
            var l = this.createTransport(e, {
                probe: 1
            }),
            f = !1,
            p = this;
            r.priorWebsocketSuccess = !1,
            l.once("open", t),
            l.once("error", i),
            l.once("close", o),
            this.once("close", s),
            this.once("upgrading", u),
            l.open()
        },
        r.prototype.onOpen = function() {
            if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                a("starting upgrade probes");
                for (var e = 0,
                t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
            }
        },
        r.prototype.onPacket = function(e) {
            if ("opening" == this.readyState || "open" == this.readyState) switch (a('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
            case "open":
                this.onHandshake(f(e.data));
                break;
            case "pong":
                this.setPing(),
                this.emit("pong");
                break;
            case "error":
                var t = new Error("server error");
                t.code = e.data,
                this.onError(t);
                break;
            case "message":
                this.emit("data", e.data),
                this.emit("message", e.data)
            } else a('packet received with socket readyState "%s"', this.readyState)
        },
        r.prototype.onHandshake = function(e) {
            this.emit("handshake", e),
            this.id = e.sid,
            this.transport.query.sid = e.sid,
            this.upgrades = this.filterUpgrades(e.upgrades),
            this.pingInterval = e.pingInterval,
            this.pingTimeout = e.pingTimeout,
            this.onOpen(),
            "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
        },
        r.prototype.onHeartbeat = function(e) {
            clearTimeout(this.pingTimeoutTimer);
            var t = this;
            t.pingTimeoutTimer = setTimeout(function() {
                "closed" != t.readyState && t.onClose("ping timeout")
            },
            e || t.pingInterval + t.pingTimeout)
        },
        r.prototype.setPing = function() {
            var e = this;
            clearTimeout(e.pingIntervalTimer),
            e.pingIntervalTimer = setTimeout(function() {
                a("writing ping packet - expecting pong within %sms", e.pingTimeout),
                e.ping(),
                e.onHeartbeat(e.pingTimeout)
            },
            e.pingInterval)
        },
        r.prototype.ping = function() {
            var e = this;
            this.sendPacket("ping",
            function() {
                e.emit("ping")
            })
        },
        r.prototype.onDrain = function() {
            this.writeBuffer.splice(0, this.prevBufferLen),
            this.prevBufferLen = 0,
            0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
        },
        r.prototype.flush = function() {
            "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
        },
        r.prototype.write = r.prototype.send = function(e, t, n) {
            return this.sendPacket("message", e, t, n),
            this
        },
        r.prototype.sendPacket = function(e, t, n, r) {
            if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" != this.readyState && "closed" != this.readyState) {
                n = n || {},
                n.compress = !1 !== n.compress;
                var i = {
                    type: e,
                    data: t,
                    options: n
                };
                this.emit("packetCreate", i),
                this.writeBuffer.push(i),
                r && this.once("flush", r),
                this.flush()
            }
        },
        r.prototype.close = function() {
            function e() {
                r.onClose("forced close"),
                a("socket closing - telling transport to close"),
                r.transport.close()
            }
            function t() {
                r.removeListener("upgrade", t),
                r.removeListener("upgradeError", t),
                e()
            }
            function n() {
                r.once("upgrade", t),
                r.once("upgradeError", t)
            }
            if ("opening" == this.readyState || "open" == this.readyState) {
                this.readyState = "closing";
                var r = this;
                this.writeBuffer.length ? this.once("drain",
                function() {
                    this.upgrading ? n() : e()
                }) : this.upgrading ? n() : e()
            }
            return this
        },
        r.prototype.onError = function(e) {
            a("socket error %j", e),
            r.priorWebsocketSuccess = !1,
            this.emit("error", e),
            this.onClose("transport error", e)
        },
        r.prototype.onClose = function(e, t) {
            if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                a('socket close with reason: "%s"', e);
                var n = this;
                clearTimeout(this.pingIntervalTimer),
                clearTimeout(this.pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                this.readyState = "closed",
                this.id = null,
                this.emit("close", e, t),
                n.writeBuffer = [],
                n.prevBufferLen = 0
            }
        },
        r.prototype.filterUpgrades = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; n++)~u(this.transports, e[n]) && t.push(e[n]);
            return t
        }
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) { (function(e) {
        function r(t) {
            var n, r = !1,
            a = !1,
            u = !1 !== t.jsonp;
            if (e.location) {
                var c = "https:" == location.protocol,
                l = location.port;
                l || (l = c ? 443 : 80),
                r = t.hostname != location.hostname || l != t.port,
                a = t.secure != c
            }
            if (t.xdomain = r, t.xscheme = a, n = new i(t), "open" in n && !t.forceJSONP) return new o(t);
            if (!u) throw new Error("JSONP disabled");
            return new s(t)
        }
        var i = n(90),
        o = n(92),
        s = n(111),
        a = n(112);
        t.polling = r,
        t.websocket = a
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) {
    var r = n(91);
    e.exports = function(e) {
        var t = e.xdomain,
        n = e.xscheme,
        i = e.enablesXDR;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!t || r)) return new XMLHttpRequest
        } catch(o) {}
        try {
            if ("undefined" != typeof XDomainRequest && !n && i) return new XDomainRequest
        } catch(o) {}
        if (!t) try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch(o) {}
    }
},
function(e, t) {
    try {
        e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch(n) {
        e.exports = !1
    }
},
function(e, t, n) { (function(t) {
        function r() {}
        function i(e) {
            if (u.call(this, e), t.location) {
                var n = "https:" == location.protocol,
                r = location.port;
                r || (r = n ? 443 : 80),
                this.xd = e.hostname != t.location.hostname || r != e.port,
                this.xs = e.secure != n
            } else this.extraHeaders = e.extraHeaders
        }
        function o(e) {
            this.method = e.method || "GET",
            this.uri = e.uri,
            this.xd = !!e.xd,
            this.xs = !!e.xs,
            this.async = !1 !== e.async,
            this.data = void 0 != e.data ? e.data: null,
            this.agent = e.agent,
            this.isBinary = e.isBinary,
            this.supportsBinary = e.supportsBinary,
            this.enablesXDR = e.enablesXDR,
            this.pfx = e.pfx,
            this.key = e.key,
            this.passphrase = e.passphrase,
            this.cert = e.cert,
            this.ca = e.ca,
            this.ciphers = e.ciphers,
            this.rejectUnauthorized = e.rejectUnauthorized,
            this.extraHeaders = e.extraHeaders,
            this.create()
        }
        function s() {
            for (var e in o.requests) o.requests.hasOwnProperty(e) && o.requests[e].abort()
        }
        var a = n(90),
        u = n(93),
        c = n(104),
        l = n(106),
        f = n(108)("engine.io-client:polling-xhr");
        e.exports = i,
        e.exports.Request = o,
        l(i, u),
        i.prototype.supportsBinary = !0,
        i.prototype.request = function(e) {
            return e = e || {},
            e.uri = this.uri(),
            e.xd = this.xd,
            e.xs = this.xs,
            e.agent = this.agent || !1,
            e.supportsBinary = this.supportsBinary,
            e.enablesXDR = this.enablesXDR,
            e.pfx = this.pfx,
            e.key = this.key,
            e.passphrase = this.passphrase,
            e.cert = this.cert,
            e.ca = this.ca,
            e.ciphers = this.ciphers,
            e.rejectUnauthorized = this.rejectUnauthorized,
            e.extraHeaders = this.extraHeaders,
            new o(e)
        },
        i.prototype.doWrite = function(e, t) {
            var n = "string" != typeof e && void 0 !== e,
            r = this.request({
                method: "POST",
                data: e,
                isBinary: n
            }),
            i = this;
            r.on("success", t),
            r.on("error",
            function(e) {
                i.onError("xhr post error", e)
            }),
            this.sendXhr = r
        },
        i.prototype.doPoll = function() {
            f("xhr poll");
            var e = this.request(),
            t = this;
            e.on("data",
            function(e) {
                t.onData(e)
            }),
            e.on("error",
            function(e) {
                t.onError("xhr poll error", e)
            }),
            this.pollXhr = e
        },
        c(o.prototype),
        o.prototype.create = function() {
            var e = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            e.pfx = this.pfx,
            e.key = this.key,
            e.passphrase = this.passphrase,
            e.cert = this.cert,
            e.ca = this.ca,
            e.ciphers = this.ciphers,
            e.rejectUnauthorized = this.rejectUnauthorized;
            var n = this.xhr = new a(e),
            r = this;
            try {
                f("xhr open %s: %s", this.method, this.uri),
                n.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders) {
                        n.setDisableHeaderCheck(!0);
                        for (var i in this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this.extraHeaders[i])
                    }
                } catch(s) {}
                if (this.supportsBinary && (n.responseType = "arraybuffer"), "POST" == this.method) try {
                    this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch(s) {}
                "withCredentials" in n && (n.withCredentials = !0),
                this.hasXDR() ? (n.onload = function() {
                    r.onLoad()
                },
                n.onerror = function() {
                    r.onError(n.responseText)
                }) : n.onreadystatechange = function() {
                    4 == n.readyState && (200 == n.status || 1223 == n.status ? r.onLoad() : setTimeout(function() {
                        r.onError(n.status)
                    },
                    0))
                },
                f("xhr data %s", this.data),
                n.send(this.data)
            } catch(s) {
                return void setTimeout(function() {
                    r.onError(s)
                },
                0)
            }
            t.document && (this.index = o.requestsCount++, o.requests[this.index] = this)
        },
        o.prototype.onSuccess = function() {
            this.emit("success"),
            this.cleanup()
        },
        o.prototype.onData = function(e) {
            this.emit("data", e),
            this.onSuccess()
        },
        o.prototype.onError = function(e) {
            this.emit("error", e),
            this.cleanup(!0)
        },
        o.prototype.cleanup = function(e) {
            if ("undefined" != typeof this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r: this.xhr.onreadystatechange = r, e) try {
                    this.xhr.abort()
                } catch(n) {}
                t.document && delete o.requests[this.index],
                this.xhr = null
            }
        },
        o.prototype.onLoad = function() {
            var e;
            try {
                var t;
                try {
                    t = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                } catch(n) {}
                if ("application/octet-stream" === t) e = this.xhr.response;
                else if (this.supportsBinary) try {
                    e = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                } catch(n) {
                    for (var r = new Uint8Array(this.xhr.response), i = [], o = 0, s = r.length; o < s; o++) i.push(r[o]);
                    e = String.fromCharCode.apply(null, i)
                } else e = this.xhr.responseText
            } catch(n) {
                this.onError(n)
            }
            null != e && this.onData(e)
        },
        o.prototype.hasXDR = function() {
            return "undefined" != typeof t.XDomainRequest && !this.xs && this.enablesXDR
        },
        o.prototype.abort = function() {
            this.cleanup()
        },
        t.document && (o.requestsCount = 0, o.requests = {},
        t.attachEvent ? t.attachEvent("onunload", s) : t.addEventListener && t.addEventListener("beforeunload", s, !1))
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) {
    function r(e) {
        var t = e && e.forceBase64;
        l && !t || (this.supportsBinary = !1),
        i.call(this, e)
    }
    var i = n(94),
    o = n(105),
    s = n(95),
    a = n(106),
    u = n(107),
    c = n(108)("engine.io-client:polling");
    e.exports = r;
    var l = function() {
        var e = n(90),
        t = new e({
            xdomain: !1
        });
        return null != t.responseType
    } ();
    a(r, i),
    r.prototype.name = "polling",
    r.prototype.doOpen = function() {
        this.poll()
    },
    r.prototype.pause = function(e) {
        function t() {
            c("paused"),
            n.readyState = "paused",
            e()
        }
        var n = this;
        if (this.readyState = "pausing", this.polling || !this.writable) {
            var r = 0;
            this.polling && (c("we are currently polling - waiting to pause"), r++, this.once("pollComplete",
            function() {
                c("pre-pause polling complete"),
                --r || t()
            })),
            this.writable || (c("we are currently writing - waiting to pause"), r++, this.once("drain",
            function() {
                c("pre-pause writing complete"),
                --r || t()
            }))
        } else t()
    },
    r.prototype.poll = function() {
        c("polling"),
        this.polling = !0,
        this.doPoll(),
        this.emit("poll")
    },
    r.prototype.onData = function(e) {
        var t = this;
        c("polling got data %s", e);
        var n = function(e, n, r) {
            return "opening" == t.readyState && t.onOpen(),
            "close" == e.type ? (t.onClose(), !1) : void t.onPacket(e)
        };
        s.decodePayload(e, this.socket.binaryType, n),
        "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
    },
    r.prototype.doClose = function() {
        function e() {
            c("writing close packet"),
            t.write([{
                type: "close"
            }])
        }
        var t = this;
        "open" == this.readyState ? (c("transport open - closing"), e()) : (c("transport not open - deferring close"), this.once("open", e))
    },
    r.prototype.write = function(e) {
        var t = this;
        this.writable = !1;
        var n = function() {
            t.writable = !0,
            t.emit("drain")
        },
        t = this;
        s.encodePayload(e, this.supportsBinary,
        function(e) {
            t.doWrite(e, n)
        })
    },
    r.prototype.uri = function() {
        var e = this.query || {},
        t = this.secure ? "https": "http",
        n = ""; ! 1 !== this.timestampRequests && (e[this.timestampParam] = u()),
        this.supportsBinary || e.sid || (e.b64 = 1),
        e = o.encode(e),
        this.port && ("https" == t && 443 != this.port || "http" == t && 80 != this.port) && (n = ":" + this.port),
        e.length && (e = "?" + e);
        var r = this.hostname.indexOf(":") !== -1;
        return t + "://" + (r ? "[" + this.hostname + "]": this.hostname) + n + this.path + e
    }
},
function(e, t, n) {
    function r(e) {
        this.path = e.path,
        this.hostname = e.hostname,
        this.port = e.port,
        this.secure = e.secure,
        this.query = e.query,
        this.timestampParam = e.timestampParam,
        this.timestampRequests = e.timestampRequests,
        this.readyState = "",
        this.agent = e.agent || !1,
        this.socket = e.socket,
        this.enablesXDR = e.enablesXDR,
        this.pfx = e.pfx,
        this.key = e.key,
        this.passphrase = e.passphrase,
        this.cert = e.cert,
        this.ca = e.ca,
        this.ciphers = e.ciphers,
        this.rejectUnauthorized = e.rejectUnauthorized,
        this.extraHeaders = e.extraHeaders
    }
    var i = n(95),
    o = n(104);
    e.exports = r,
    o(r.prototype),
    r.prototype.onError = function(e, t) {
        var n = new Error(e);
        return n.type = "TransportError",
        n.description = t,
        this.emit("error", n),
        this
    },
    r.prototype.open = function() {
        return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()),
        this
    },
    r.prototype.close = function() {
        return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()),
        this
    },
    r.prototype.send = function(e) {
        if ("open" != this.readyState) throw new Error("Transport not open");
        this.write(e)
    },
    r.prototype.onOpen = function() {
        this.readyState = "open",
        this.writable = !0,
        this.emit("open")
    },
    r.prototype.onData = function(e) {
        var t = i.decodePacket(e, this.socket.binaryType);
        this.onPacket(t)
    },
    r.prototype.onPacket = function(e) {
        this.emit("packet", e)
    },
    r.prototype.onClose = function() {
        this.readyState = "closed",
        this.emit("close")
    }
},
function(e, t, n) { (function(e) {
        function r(e, n) {
            var r = "b" + t.packets[e.type] + e.data.data;
            return n(r)
        }
        function i(e, n, r) {
            if (!n) return t.encodeBase64Packet(e, r);
            var i = e.data,
            o = new Uint8Array(i),
            s = new Uint8Array(1 + i.byteLength);
            s[0] = y[e.type];
            for (var a = 0; a < o.length; a++) s[a + 1] = o[a];
            return r(s.buffer)
        }
        function o(e, n, r) {
            if (!n) return t.encodeBase64Packet(e, r);
            var i = new FileReader;
            return i.onload = function() {
                e.data = i.result,
                t.encodePacket(e, n, !0, r)
            },
            i.readAsArrayBuffer(e.data)
        }
        function s(e, n, r) {
            if (!n) return t.encodeBase64Packet(e, r);
            if (m) return o(e, n, r);
            var i = new Uint8Array(1);
            i[0] = y[e.type];
            var s = new w([i.buffer, e.data]);
            return r(s)
        }
        function a(e, t, n) {
            for (var r = new Array(e.length), i = p(e.length, n), o = function(e, n, i) {
                t(n,
                function(t, n) {
                    r[e] = n,
                    i(t, r)
                })
            },
            s = 0; s < e.length; s++) o(s, e[s], i)
        }
        var u = n(96),
        c = n(97),
        l = n(99),
        f = n(100),
        p = n(101),
        h = n(102),
        d = navigator.userAgent.match(/Android/i),
        g = /PhantomJS/i.test(navigator.userAgent),
        m = d || g;
        t.protocol = 3;
        var y = t.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        v = u(y),
        b = {
            type: "error",
            data: "parser error"
        },
        w = n(103);
        t.encodePacket = function(t, n, o, a) {
            "function" == typeof n && (a = n, n = !1),
            "function" == typeof o && (a = o, o = null);
            var u = void 0 === t.data ? void 0 : t.data.buffer || t.data;
            if (e.ArrayBuffer && u instanceof ArrayBuffer) return i(t, n, a);
            if (w && u instanceof e.Blob) return s(t, n, a);
            if (u && u.base64) return r(t, a);
            var c = y[t.type];
            return void 0 !== t.data && (c += o ? h.encode(String(t.data)) : String(t.data)),
            a("" + c)
        },
        t.encodeBase64Packet = function(n, r) {
            var i = "b" + t.packets[n.type];
            if (w && n.data instanceof e.Blob) {
                var o = new FileReader;
                return o.onload = function() {
                    var e = o.result.split(",")[1];
                    r(i + e)
                },
                o.readAsDataURL(n.data)
            }
            var s;
            try {
                s = String.fromCharCode.apply(null, new Uint8Array(n.data))
            } catch(a) {
                for (var u = new Uint8Array(n.data), c = new Array(u.length), l = 0; l < u.length; l++) c[l] = u[l];
                s = String.fromCharCode.apply(null, c)
            }
            return i += e.btoa(s),
            r(i)
        },
        t.decodePacket = function(e, n, r) {
            if ("string" == typeof e || void 0 === e) {
                if ("b" == e.charAt(0)) return t.decodeBase64Packet(e.substr(1), n);
                if (r) try {
                    e = h.decode(e)
                } catch(i) {
                    return b
                }
                var o = e.charAt(0);
                return Number(o) == o && v[o] ? e.length > 1 ? {
                    type: v[o],
                    data: e.substring(1)
                }: {
                    type: v[o]
                }: b
            }
            var s = new Uint8Array(e),
            o = s[0],
            a = l(e, 1);
            return w && "blob" === n && (a = new w([a])),
            {
                type: v[o],
                data: a
            }
        },
        t.decodeBase64Packet = function(t, n) {
            var r = v[t.charAt(0)];
            if (!e.ArrayBuffer) return {
                type: r,
                data: {
                    base64: !0,
                    data: t.substr(1)
                }
            };
            var i = f.decode(t.substr(1));
            return "blob" === n && w && (i = new w([i])),
            {
                type: r,
                data: i
            }
        },
        t.encodePayload = function(e, n, r) {
            function i(e) {
                return e.length + ":" + e
            }
            function o(e, r) {
                t.encodePacket(e, !!s && n, !0,
                function(e) {
                    r(null, i(e))
                })
            }
            "function" == typeof n && (r = n, n = null);
            var s = c(e);
            return n && s ? w && !m ? t.encodePayloadAsBlob(e, r) : t.encodePayloadAsArrayBuffer(e, r) : e.length ? void a(e, o,
            function(e, t) {
                return r(t.join(""))
            }) : r("0:")
        },
        t.decodePayload = function(e, n, r) {
            if ("string" != typeof e) return t.decodePayloadAsBinary(e, n, r);
            "function" == typeof n && (r = n, n = null);
            var i;
            if ("" == e) return r(b, 0, 1);
            for (var o, s, a = "",
            u = 0,
            c = e.length; u < c; u++) {
                var l = e.charAt(u);
                if (":" != l) a += l;
                else {
                    if ("" == a || a != (o = Number(a))) return r(b, 0, 1);
                    if (s = e.substr(u + 1, o), a != s.length) return r(b, 0, 1);
                    if (s.length) {
                        if (i = t.decodePacket(s, n, !0), b.type == i.type && b.data == i.data) return r(b, 0, 1);
                        var f = r(i, u + o, c);
                        if (!1 === f) return
                    }
                    u += o,
                    a = ""
                }
            }
            return "" != a ? r(b, 0, 1) : void 0
        },
        t.encodePayloadAsArrayBuffer = function(e, n) {
            function r(e, n) {
                t.encodePacket(e, !0, !0,
                function(e) {
                    return n(null, e)
                })
            }
            return e.length ? void a(e, r,
            function(e, t) {
                var r = t.reduce(function(e, t) {
                    var n;
                    return n = "string" == typeof t ? t.length: t.byteLength,
                    e + n.toString().length + n + 2
                },
                0),
                i = new Uint8Array(r),
                o = 0;
                return t.forEach(function(e) {
                    var t = "string" == typeof e,
                    n = e;
                    if (t) {
                        for (var r = new Uint8Array(e.length), s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
                        n = r.buffer
                    }
                    t ? i[o++] = 0 : i[o++] = 1;
                    for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) i[o++] = parseInt(a[s]);
                    i[o++] = 255;
                    for (var r = new Uint8Array(n), s = 0; s < r.length; s++) i[o++] = r[s]
                }),
                n(i.buffer)
            }) : n(new ArrayBuffer(0))
        },
        t.encodePayloadAsBlob = function(e, n) {
            function r(e, n) {
                t.encodePacket(e, !0, !0,
                function(e) {
                    var t = new Uint8Array(1);
                    if (t[0] = 1, "string" == typeof e) {
                        for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                        e = r.buffer,
                        t[0] = 0
                    }
                    for (var o = e instanceof ArrayBuffer ? e.byteLength: e.size, s = o.toString(), a = new Uint8Array(s.length + 1), i = 0; i < s.length; i++) a[i] = parseInt(s[i]);
                    if (a[s.length] = 255, w) {
                        var u = new w([t.buffer, a.buffer, e]);
                        n(null, u)
                    }
                })
            }
            a(e, r,
            function(e, t) {
                return n(new w(t))
            })
        },
        t.decodePayloadAsBinary = function(e, n, r) {
            "function" == typeof n && (r = n, n = null);
            for (var i = e,
            o = [], s = !1; i.byteLength > 0;) {
                for (var a = new Uint8Array(i), u = 0 === a[0], c = "", f = 1; 255 != a[f]; f++) {
                    if (c.length > 310) {
                        s = !0;
                        break
                    }
                    c += a[f]
                }
                if (s) return r(b, 0, 1);
                i = l(i, 2 + c.length),
                c = parseInt(c);
                var p = l(i, 0, c);
                if (u) try {
                    p = String.fromCharCode.apply(null, new Uint8Array(p))
                } catch(h) {
                    var d = new Uint8Array(p);
                    p = "";
                    for (var f = 0; f < d.length; f++) p += String.fromCharCode(d[f])
                }
                o.push(p),
                i = l(i, c)
            }
            var g = o.length;
            o.forEach(function(e, i) {
                r(t.decodePacket(e, n, !0), i, g)
            })
        }
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t) {
    e.exports = Object.keys ||
    function(e) {
        var t = [],
        n = Object.prototype.hasOwnProperty;
        for (var r in e) n.call(e, r) && t.push(r);
        return t
    }
},
function(e, t, n) { (function(t) {
        function r(e) {
            function n(e) {
                if (!e) return ! 1;
                if (t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer || t.Blob && e instanceof Blob || t.File && e instanceof File) return ! 0;
                if (i(e)) {
                    for (var r = 0; r < e.length; r++) if (n(e[r])) return ! 0
                } else if (e && "object" == typeof e) {
                    e.toJSON && (e = e.toJSON());
                    for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o) && n(e[o])) return ! 0
                }
                return ! 1
            }
            return n(e)
        }
        var i = n(98);
        e.exports = r
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t) {
    e.exports = Array.isArray ||
    function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
},
function(e, t) {
    e.exports = function(e, t, n) {
        var r = e.byteLength;
        if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
        if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || 0 === r) return new ArrayBuffer(0);
        for (var i = new Uint8Array(e), o = new Uint8Array(n - t), s = t, a = 0; s < n; s++, a++) o[a] = i[s];
        return o.buffer
    }
},
function(e, t) { !
    function(e) {
        "use strict";
        t.encode = function(t) {
            var n, r = new Uint8Array(t),
            i = r.length,
            o = "";
            for (n = 0; n < i; n += 3) o += e[r[n] >> 2],
            o += e[(3 & r[n]) << 4 | r[n + 1] >> 4],
            o += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
            o += e[63 & r[n + 2]];
            return i % 3 === 2 ? o = o.substring(0, o.length - 1) + "=": i % 3 === 1 && (o = o.substring(0, o.length - 2) + "=="),
            o
        },
        t.decode = function(t) {
            var n, r, i, o, s, a = .75 * t.length,
            u = t.length,
            c = 0;
            "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
            var l = new ArrayBuffer(a),
            f = new Uint8Array(l);
            for (n = 0; n < u; n += 4) r = e.indexOf(t[n]),
            i = e.indexOf(t[n + 1]),
            o = e.indexOf(t[n + 2]),
            s = e.indexOf(t[n + 3]),
            f[c++] = r << 2 | i >> 4,
            f[c++] = (15 & i) << 4 | o >> 2,
            f[c++] = (3 & o) << 6 | 63 & s;
            return l
        }
    } ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
},
function(e, t) {
    function n(e, t, n) {
        function i(e, r) {
            if (i.count <= 0) throw new Error("after called too many times"); --i.count,
            e ? (o = !0, t(e), t = n) : 0 !== i.count || o || t(null, r)
        }
        var o = !1;
        return n = n || r,
        i.count = e,
        0 === e ? t() : i
    }
    function r() {}
    e.exports = n
},
function(e, t, n) {
    var r; (function(e, i) { !
        function(o) {
            function s(e) {
                for (var t, n, r = [], i = 0, o = e.length; i < o;) t = e.charCodeAt(i++),
                t >= 55296 && t <= 56319 && i < o ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
                return r
            }
            function a(e) {
                for (var t, n = e.length,
                r = -1,
                i = ""; ++r < n;) t = e[r],
                t > 65535 && (t -= 65536, i += w(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t),
                i += w(t);
                return i
            }
            function u(e) {
                if (e >= 55296 && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
            }
            function c(e, t) {
                return w(e >> t & 63 | 128)
            }
            function l(e) {
                if (0 == (4294967168 & e)) return w(e);
                var t = "";
                return 0 == (4294965248 & e) ? t = w(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (u(e), t = w(e >> 12 & 15 | 224), t += c(e, 6)) : 0 == (4292870144 & e) && (t = w(e >> 18 & 7 | 240), t += c(e, 12), t += c(e, 6)),
                t += w(63 & e | 128)
            }
            function f(e) {
                for (var t, n = s(e), r = n.length, i = -1, o = ""; ++i < r;) t = n[i],
                o += l(t);
                return o
            }
            function p() {
                if (b >= v) throw Error("Invalid byte index");
                var e = 255 & y[b];
                if (b++, 128 == (192 & e)) return 63 & e;
                throw Error("Invalid continuation byte")
            }
            function h() {
                var e, t, n, r, i;
                if (b > v) throw Error("Invalid byte index");
                if (b == v) return ! 1;
                if (e = 255 & y[b], b++, 0 == (128 & e)) return e;
                if (192 == (224 & e)) {
                    var t = p();
                    if (i = (31 & e) << 6 | t, i >= 128) return i;
                    throw Error("Invalid continuation byte")
                }
                if (224 == (240 & e)) {
                    if (t = p(), n = p(), i = (15 & e) << 12 | t << 6 | n, i >= 2048) return u(i),
                    i;
                    throw Error("Invalid continuation byte")
                }
                if (240 == (248 & e) && (t = p(), n = p(), r = p(), i = (15 & e) << 18 | t << 12 | n << 6 | r, i >= 65536 && i <= 1114111)) return i;
                throw Error("Invalid UTF-8 detected")
            }
            function d(e) {
                y = s(e),
                v = y.length,
                b = 0;
                for (var t, n = []; (t = h()) !== !1;) n.push(t);
                return a(n)
            }
            var g = "object" == typeof t && t,
            m = ("object" == typeof e && e && e.exports == g && e, "object" == typeof i && i);
            m.global !== m && m.window !== m || (o = m);
            var y, v, b, w = String.fromCharCode,
            x = {
                version: "2.0.0",
                encode: f,
                decode: d
            };
            r = function() {
                return x
            }.call(t, n, t, e),
            !(void 0 !== r && (e.exports = r))
        } (this)
    }).call(t, n(7)(e),
    function() {
        return this
    } ())
},
function(e, t) { (function(t) {
        function n(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.buffer instanceof ArrayBuffer) {
                    var r = n.buffer;
                    if (n.byteLength !== r.byteLength) {
                        var i = new Uint8Array(n.byteLength);
                        i.set(new Uint8Array(r, n.byteOffset, n.byteLength)),
                        r = i.buffer
                    }
                    e[t] = r
                }
            }
        }
        function r(e, t) {
            t = t || {};
            var r = new o;
            n(e);
            for (var i = 0; i < e.length; i++) r.append(e[i]);
            return t.type ? r.getBlob(t.type) : r.getBlob()
        }
        function i(e, t) {
            return n(e),
            new Blob(e, t || {})
        }
        var o = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
        s = function() {
            try {
                var e = new Blob(["hi"]);
                return 2 === e.size
            } catch(t) {
                return ! 1
            }
        } (),
        a = s &&
        function() {
            try {
                var e = new Blob([new Uint8Array([1, 2])]);
                return 2 === e.size
            } catch(t) {
                return ! 1
            }
        } (),
        u = o && o.prototype.append && o.prototype.getBlob;
        e.exports = function() {
            return s ? a ? t.Blob: i: u ? r: void 0
        } ()
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t) {
    function n(e) {
        if (e) return r(e)
    }
    function r(e) {
        for (var t in n.prototype) e[t] = n.prototype[t];
        return e
    }
    e.exports = n,
    n.prototype.on = n.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {},
        (this._callbacks[e] = this._callbacks[e] || []).push(t),
        this
    },
    n.prototype.once = function(e, t) {
        function n() {
            r.off(e, n),
            t.apply(this, arguments)
        }
        var r = this;
        return this._callbacks = this._callbacks || {},
        n.fn = t,
        this.on(e, n),
        this
    },
    n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {},
        0 == arguments.length) return this._callbacks = {},
        this;
        var n = this._callbacks[e];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks[e],
        this;
        for (var r, i = 0; i < n.length; i++) if (r = n[i], r === t || r.fn === t) {
            n.splice(i, 1);
            break
        }
        return this
    },
    n.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
        n = this._callbacks[e];
        if (n) {
            n = n.slice(0);
            for (var r = 0,
            i = n.length; r < i; ++r) n[r].apply(this, t)
        }
        return this
    },
    n.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {},
        this._callbacks[e] || []
    },
    n.prototype.hasListeners = function(e) {
        return !! this.listeners(e).length
    }
},
function(e, t) {
    t.encode = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t
    },
    t.decode = function(e) {
        for (var t = {},
        n = e.split("&"), r = 0, i = n.length; r < i; r++) {
            var o = n[r].split("=");
            t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
        }
        return t
    }
},
function(e, t) {
    e.exports = function(e, t) {
        var n = function() {};
        n.prototype = t.prototype,
        e.prototype = new n,
        e.prototype.constructor = e
    }
},
function(e, t) {
    "use strict";
    function n(e) {
        var t = "";
        do t = s[e % a] + t,
        e = Math.floor(e / a);
        while (e > 0);
        return t
    }
    function r(e) {
        var t = 0;
        for (l = 0; l < e.length; l++) t = t * a + u[e.charAt(l)];
        return t
    }
    function i() {
        var e = n( + new Date);
        return e !== o ? (c = 0, o = e) : e + "." + n(c++)
    }
    for (var o, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, u = {},
    c = 0, l = 0; l < a; l++) u[s[l]] = l;
    i.encode = n,
    i.decode = r,
    e.exports = i
},
function(e, t, n) {
    function r() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
    }
    function i() {
        var e = arguments,
        n = this.useColors;
        if (e[0] = (n ? "%c": "") + this.namespace + (n ? " %c": " ") + e[0] + (n ? "%c ": " ") + "+" + t.humanize(this.diff), !n) return e;
        var r = "color: " + this.color;
        e = [e[0], r, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
        var i = 0,
        o = 0;
        return e[0].replace(/%[a-z%]/g,
        function(e) {
            "%%" !== e && (i++, "%c" === e && (o = i))
        }),
        e.splice(o, 0, r),
        e
    }
    function o() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }
    function s(e) {
        try {
            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch(n) {}
    }
    function a() {
        var e;
        try {
            e = t.storage.debug
        } catch(n) {}
        return e
    }
    function u() {
        try {
            return window.localStorage
        } catch(e) {}
    }
    t = e.exports = n(109),
    t.log = o,
    t.formatArgs = i,
    t.save = s,
    t.load = a,
    t.useColors = r,
    t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local: u(),
    t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
    t.formatters.j = function(e) {
        return JSON.stringify(e)
    },
    t.enable(a())
},
function(e, t, n) {
    function r() {
        return t.colors[l++%t.colors.length]
    }
    function i(e) {
        function n() {}
        function i() {
            var e = i,
            n = +new Date,
            o = n - (c || n);
            e.diff = o,
            e.prev = c,
            e.curr = n,
            c = n,
            null == e.useColors && (e.useColors = t.useColors()),
            null == e.color && e.useColors && (e.color = r());
            var s = Array.prototype.slice.call(arguments);
            s[0] = t.coerce(s[0]),
            "string" != typeof s[0] && (s = ["%o"].concat(s));
            var a = 0;
            s[0] = s[0].replace(/%([a-z%])/g,
            function(n, r) {
                if ("%%" === n) return n;
                a++;
                var i = t.formatters[r];
                if ("function" == typeof i) {
                    var o = s[a];
                    n = i.call(e, o),
                    s.splice(a, 1),
                    a--
                }
                return n
            }),
            "function" == typeof t.formatArgs && (s = t.formatArgs.apply(e, s));
            var u = i.log || t.log || console.log.bind(console);
            u.apply(e, s)
        }
        n.enabled = !1,
        i.enabled = !0;
        var o = t.enabled(e) ? i: n;
        return o.namespace = e,
        o
    }
    function o(e) {
        t.save(e);
        for (var n = (e || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }
    function s() {
        t.enable("")
    }
    function a(e) {
        var n, r;
        for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return ! 1;
        for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return ! 0;
        return ! 1
    }
    function u(e) {
        return e instanceof Error ? e.stack || e.message: e
    }
    t = e.exports = i,
    t.coerce = u,
    t.disable = s,
    t.enable = o,
    t.enabled = a,
    t.humanize = n(110),
    t.names = [],
    t.skips = [],
    t.formatters = {};
    var c, l = 0
},
function(e, t) {
    function n(e) {
        if (e = "" + e, !(e.length > 1e4)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
                var n = parseFloat(t[1]),
                r = (t[2] || "ms").toLowerCase();
                switch (r) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return n * l;
                case "days":
                case "day":
                case "d":
                    return n * c;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return n * u;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return n * a;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return n * s;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return n
                }
            }
        }
    }
    function r(e) {
        return e >= c ? Math.round(e / c) + "d": e >= u ? Math.round(e / u) + "h": e >= a ? Math.round(e / a) + "m": e >= s ? Math.round(e / s) + "s": e + "ms"
    }
    function i(e) {
        return o(e, c, "day") || o(e, u, "hour") || o(e, a, "minute") || o(e, s, "second") || e + " ms"
    }
    function o(e, t, n) {
        if (! (e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n: Math.ceil(e / t) + " " + n + "s"
    }
    var s = 1e3,
    a = 60 * s,
    u = 60 * a,
    c = 24 * u,
    l = 365.25 * c;
    e.exports = function(e, t) {
        return t = t || {},
        "string" == typeof e ? n(e) : t["long"] ? i(e) : r(e)
    }
},
function(e, t, n) { (function(t) {
        function r() {}
        function i(e) {
            o.call(this, e),
            this.query = this.query || {},
            a || (t.___eio || (t.___eio = []), a = t.___eio),
            this.index = a.length;
            var n = this;
            a.push(function(e) {
                n.onData(e)
            }),
            this.query.j = this.index,
            t.document && t.addEventListener && t.addEventListener("beforeunload",
            function() {
                n.script && (n.script.onerror = r)
            },
            !1)
        }
        var o = n(93),
        s = n(106);
        e.exports = i;
        var a, u = /\n/g,
        c = /\\n/g;
        s(i, o),
        i.prototype.supportsBinary = !1,
        i.prototype.doClose = function() {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
            this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null),
            o.prototype.doClose.call(this)
        },
        i.prototype.doPoll = function() {
            var e = this,
            t = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
            t.async = !0,
            t.src = this.uri(),
            t.onerror = function(t) {
                e.onError("jsonp poll error", t)
            };
            var n = document.getElementsByTagName("script")[0];
            n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t),
            this.script = t;
            var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
            r && setTimeout(function() {
                var e = document.createElement("iframe");
                document.body.appendChild(e),
                document.body.removeChild(e)
            },
            100)
        },
        i.prototype.doWrite = function(e, t) {
            function n() {
                r(),
                t()
            }
            function r() {
                if (i.iframe) try {
                    i.form.removeChild(i.iframe)
                } catch(e) {
                    i.onError("jsonp polling iframe removal error", e)
                }
                try {
                    var t = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                    o = document.createElement(t)
                } catch(e) {
                    o = document.createElement("iframe"),
                    o.name = i.iframeId,
                    o.src = "javascript:0"
                }
                o.id = i.iframeId,
                i.form.appendChild(o),
                i.iframe = o
            }
            var i = this;
            if (!this.form) {
                var o, s = document.createElement("form"),
                a = document.createElement("textarea"),
                l = this.iframeId = "eio_iframe_" + this.index;
                s.className = "socketio",
                s.style.position = "absolute",
                s.style.top = "-1000px",
                s.style.left = "-1000px",
                s.target = l,
                s.method = "POST",
                s.setAttribute("accept-charset", "utf-8"),
                a.name = "d",
                s.appendChild(a),
                document.body.appendChild(s),
                this.form = s,
                this.area = a
            }
            this.form.action = this.uri(),
            r(),
            e = e.replace(c, "\\\n"),
            this.area.value = e.replace(u, "\\n");
            try {
                this.form.submit()
            } catch(f) {}
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                "complete" == i.iframe.readyState && n()
            }: this.iframe.onload = n
        }
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) { (function(t) {
        function r(e) {
            var t = e && e.forceBase64;
            t && (this.supportsBinary = !1),
            this.perMessageDeflate = e.perMessageDeflate,
            i.call(this, e)
        }
        var i = n(94),
        o = n(95),
        s = n(105),
        a = n(106),
        u = n(107),
        c = n(108)("engine.io-client:websocket"),
        l = t.WebSocket || t.MozWebSocket,
        f = l;
        if (!f && "undefined" == typeof window) try {
            f = n(113)
        } catch(p) {}
        e.exports = r,
        a(r, i),
        r.prototype.name = "websocket",
        r.prototype.supportsBinary = !0,
        r.prototype.doOpen = function() {
            if (this.check()) {
                var e = this.uri(),
                t = void 0,
                n = {
                    agent: this.agent,
                    perMessageDeflate: this.perMessageDeflate
                };
                n.pfx = this.pfx,
                n.key = this.key,
                n.passphrase = this.passphrase,
                n.cert = this.cert,
                n.ca = this.ca,
                n.ciphers = this.ciphers,
                n.rejectUnauthorized = this.rejectUnauthorized,
                this.extraHeaders && (n.headers = this.extraHeaders),
                this.ws = l ? new f(e) : new f(e, t, n),
                void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer",
                this.addEventListeners()
            }
        },
        r.prototype.addEventListeners = function() {
            var e = this;
            this.ws.onopen = function() {
                e.onOpen()
            },
            this.ws.onclose = function() {
                e.onClose()
            },
            this.ws.onmessage = function(t) {
                e.onData(t.data)
            },
            this.ws.onerror = function(t) {
                e.onError("websocket error", t)
            }
        },
        "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (r.prototype.onData = function(e) {
            var t = this;
            setTimeout(function() {
                i.prototype.onData.call(t, e)
            },
            0)
        }),
        r.prototype.write = function(e) {
            function n() {
                r.emit("flush"),
                setTimeout(function() {
                    r.writable = !0,
                    r.emit("drain")
                },
                0)
            }
            var r = this;
            this.writable = !1;
            for (var i = e.length,
            s = 0,
            a = i; s < a; s++) !
            function(e) {
                o.encodePacket(e, r.supportsBinary,
                function(o) {
                    if (!l) {
                        var s = {};
                        if (e.options && (s.compress = e.options.compress), r.perMessageDeflate) {
                            var a = "string" == typeof o ? t.Buffer.byteLength(o) : o.length;
                            a < r.perMessageDeflate.threshold && (s.compress = !1)
                        }
                    }
                    try {
                        l ? r.ws.send(o) : r.ws.send(o, s)
                    } catch(u) {
                        c("websocket closed before onclose event")
                    }--i || n()
                })
            } (e[s])
        },
        r.prototype.onClose = function() {
            i.prototype.onClose.call(this)
        },
        r.prototype.doClose = function() {
            "undefined" != typeof this.ws && this.ws.close()
        },
        r.prototype.uri = function() {
            var e = this.query || {},
            t = this.secure ? "wss": "ws",
            n = "";
            this.port && ("wss" == t && 443 != this.port || "ws" == t && 80 != this.port) && (n = ":" + this.port),
            this.timestampRequests && (e[this.timestampParam] = u()),
            this.supportsBinary || (e.b64 = 1),
            e = s.encode(e),
            e.length && (e = "?" + e);
            var r = this.hostname.indexOf(":") !== -1;
            return t + "://" + (r ? "[" + this.hostname + "]": this.hostname) + n + this.path + e
        },
        r.prototype.check = function() {
            return ! (!f || "__initialize" in f && this.name === r.prototype.name)
        }
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t) {},
function(e, t) {
    var n = [].indexOf;
    e.exports = function(e, t) {
        if (n) return e.indexOf(t);
        for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
        return - 1
    }
},
function(e, t) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    e.exports = function(e) {
        var t = e,
        i = e.indexOf("["),
        o = e.indexOf("]");
        i != -1 && o != -1 && (e = e.substring(0, i) + e.substring(i, o).replace(/:/g, ";") + e.substring(o, e.length));
        for (var s = n.exec(e || ""), a = {},
        u = 14; u--;) a[r[u]] = s[u] || "";
        return i != -1 && o != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0),
        a
    }
},
function(e, t) { (function(t) {
        var n = /^[\],:{}\s]*$/,
        r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        i = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        o = /(?:^|:|,)(?:\s*\[)+/g,
        s = /^\s+/,
        a = /\s+$/;
        e.exports = function(e) {
            return "string" == typeof e && e ? (e = e.replace(s, "").replace(a, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(i, "]").replace(o, "")) ? new Function("return " + e)() : void 0) : null
        }
    }).call(t,
    function() {
        return this
    } ())
},
function(e, t, n) {
    "use strict";
    function r(e) {
        var t = o.teambition.config,
        n = o.teambition.me,
        r = {
            name: n.name,
            email: n.email,
            content: JSON.stringify(e),
            title: "[Help-Test] Network test results"
        };
        return i.post(t.INTEGRATION_HOST + "/zendesk/tickets/create", r)
    }
    var i = n(73),
    o = n(67);
    t.submit = r
},
function(e, t) {},
, , , ,
function(e, t, n) {
    "use strict";
    var r = n(14),
    i = n(13),
    o = n(124),
    s = o.template,
    a = o.element,
    u = o.text,
    c = o.efor,
    l = o.eif,
    f = o.updateAttr,
    p = o.updateText,
    h = s(function(e) {
        a(e, 0, 3, "HEADER", ),
        a(e, 0, 5, "H1", [["class", "title"]]),
        a(e, 5, 6, "B"),
        u(e, 6, 7),
        a(e, 0, 8, "DIV", [["class", "card"]]),
        a(e, 8, 9, "P", [["class", "description"]]),
        u(e, 9, 10),
        a(e, 8, 11, "UL", [["class", "list"]]),
        c(e, 11, 12, d,
        function(e, t) {
            return e.doctors
        }),
        a(e, 8, 19, "P", [["class", "description"], ["style", "display: none"]]),
        u(e, 19, 20),
        a(e, 19, 21, "A", [["class", "contact"]]),
        u(e, 21, 22),
        l(e, 8, 23,
        function(e, t) {
            return e.hasLogin ? [0, g] : [1, b]
        })
    },
    function(e, t) {
        var n = [];
        return n[0] = i.HOST,
        n[1] = r.get("title"),
        n[2] = r.get("description.trouble"),
        n[3] = r.get("description.contact1"),
        n[4] = r.get("description.contact2"),
        n
    },
    function(e, t, n, r, i) {
        var o = r[0];
        i(0, o) && f(e, 4, "href", o);
        var o = r[1];
        i(1, o) && p(e, 7, o);
        var o = r[2];
        i(2, o) && p(e, 10, o);
        var o = r[3];
        i(3, o) && p(e, 20, o);
        var o = r[4];
        i(4, o) && p(e, 22, o)
    }),
    d = s(function(e) {
        a(e, 12, 13, "LI"),
        a(e, 13, 14, "SPAN", [["class", "item-title"]]),
        u(e, 14, 15),
        a(e, 13, 16, "SPAN", [["class", "item-result"]]),
        u(e, 13, 17),
        a(e, 13, 18, "SPAN")
    },
    function(e, t) {
        var n = t[0],
        r = (t[1], []);
        return r[0] = n.state,
        r[1] = n.title,
        r[2] = n.result,
        r
    },
    function(e, t, n, r, i) {
        var o = (n[0], n[1], r[0]);
        i(0, o) && f(e, 13, "class", "item on-" + o);
        var o = r[1];
        i(1, o) && p(e, 15, o + ":");
        var o = r[2];
        i(2, o) && p(e, 17, o)
    }),
    g = s(function(e) {
        a(e, 23, 24, "DIV"),
        l(e, 24, 25,
        function(e, t) {
            return "prepared" === e.state ? [0, m] : e.state ? [1, y] : [2, v]
        })
    }),
    m = s(function(e) {
        a(e, 25, 26, "DIV", [["class", "submit-wrap"]]),
        a(e, 26, 27, "INPUT", [["class", "btn"], ["type", "submit"], ["data-gta", "{action: 'submit', page: 'help-test'}"]], [["click",
        function(e, t, n) {
            return t.submit()
        }]])
    },
    function(e, t) {
        var n = [];
        return n[0] = e.getSubmitMessage(),
        n
    },
    function(e, t, n, r, i) {
        var o = r[0];
        i(0, o) && f(e, 27, "value", o)
    }),
    y = s(function(e) {
        a(e, 28, 29, "P", [["class", "description"]]),
        u(e, 29, 30)
    },
    function(e, t) {
        var n = [];
        return n[0] = e.getSubmitMessage(),
        n
    },
    function(e, t, n, r, i) {
        var o = r[0];
        i(0, o) && p(e, 30, o)
    }),
    v = s(function(e) {
        a(e, 31, 32, "P", [["class", "description"]]),
        u(e, 32, 33)
    },
    function(e, t) {
        var n = [];
        return n[0] = r.get("description.checking"),
        n
    },
    function(e, t, n, r, i) {
        var o = r[0];
        i(0, o) && p(e, 33, o)
    }),
    b = s(function(e) {
        a(e, 34, 35, "DIV"),
        a(e, 35, 36, "P", [["class", "description"]]),
        u(e, 36, 37)
    },
    function(e, t) {
        var n = [];
        return n[0] = r.get("description.nologin"),
        n
    },
    function(e, t, n, r, i) {
        var o = r[0];
        i(0, o) && p(e, 37, o)
    });
    e.exports = h
},
function(e, t) { !
    function(e, t) {
        for (var n in t) e[n] = t[n]
    } (t,
    function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    } ([function(e, t, n) {
        "use strict";
        function r(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }
        r(n(1)),
        r(n(2)),
        r(n(19))
    },
    function(e, t) {
        "use strict";
        function n() {}
        function r(e, t) {
            if (e) for (var n = 0,
            r = e.length; n < r; n++) if (e.hasOwnProperty(n.toString())) {
                var i = e[n];
                t(i, n, e)
            }
        }
        function i(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return r(t,
            function(t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }),
            e
        }
        function o(e, t) {
            if (!e || !t) return e === t;
            var n = e.length,
            r = t.length;
            if (n !== r) return ! 1;
            for (var i = -1,
            o = !0; o && ++i < n;) o = e[i] === t[i];
            return o
        }
        function s(e, t) {
            var n = e.parentNode;
            if (n) {
                var r = e.nextSibling;
                n.insertBefore(t, r)
            }
        }
        function a(e, t) {
            var n = e.parentNode;
            n && n.insertBefore(t, e)
        }
        function u(e) {
            var t = e.parentNode;
            if (t) return t.removeChild(e)
        }
        function c(e, t, n) {
            f(e, t[n])
        }
        function l(e, t, n) {
            r(t,
            function(t, r) {
                r !== n && f(e, t)
            })
        }
        function f(e, t) {
            return r(t,
            function(t) {
                return e.push(t)
            }),
            e
        }
        t.LOOP = n,
        t.each = r,
        t.extend = i,
        t.isArrayEqual = o,
        t.after = s,
        t.before = a,
        t.remove = u,
        t.concatMatrix = c,
        t.concatMatrixOthers = l
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }
        r(n(3)),
        r(n(13)),
        r(n(14)),
        r(n(15)),
        r(n(16)),
        r(n(18))
    },
    function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            var o = new i.IfTemplate(e.context, r);
            o.arguments = e.arguments,
            e.templates[n] = o;
            var s = e.nodes[t];
            s ? s.appendChild(o.get()) : e.roots.push(n)
        }
        var i = n(4);
        t.eif = r
    },
    function(e, t, n) {
        "use strict";
        var r = this && this.__extends ||
        function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = n(1),
        o = n(5),
        s = -1,
        a = -2,
        u = function(e) {
            function t(t, n) {
                e.call(this, t),
                this.ifDataFn = n,
                this.first = document.createComment("Start If"),
                this.last = document.createComment("End If"),
                this.nodes[s] = this.first,
                this.roots.unshift(s),
                this.nodes[a] = this.last,
                this.roots.push(a)
            }
            return r(t, e),
            t.prototype.render = function() {
                var e, t = this.ifDataFn,
                n = t(this.context, this.arguments) || [],
                r = n[0],
                i = n[1];
                i && (e = this.pickChild(r, i)),
                this.switchTo(r, e)
            },
            t.prototype.switchTo = function(e, t) { ! t && this.current ? (this.current.remove(), this.current = null, this.roots = [s, a]) : this.current === t ? this.current.update() : (this.current && this.current.remove(), i.after(this.first, t.get()), this.current = t, this.roots = [s, e, a])
            },
            t.prototype.pickChild = function(e, t) {
                var n = this.templates[e];
                return n ? (n.arguments = this.arguments, n.context = this.context) : (n = new t(this.context, this.arguments), this.templates[e] = n),
                n
            },
            t
        } (o.Template);
        t.IfTemplate = u
    },
    function(e, t, n) {
        "use strict";
        var r = n(6),
        i = n(1),
        o = n(7),
        s = /\s+|,/,
        a = function() {
            function e(e, t) {
                this.roots = [],
                this.arguments = [],
                this.nodes = [],
                this.templates = [],
                this.attrs = [],
                this.includes = [],
                this.excludes = [],
                this.events = [],
                this.state = r.TEMPLATE_STATES.free,
                this.cache = [],
                this.context = e,
                t && (this.arguments = t);
                var n = this.createFn;
                "function" == typeof n && n(this),
                this.first = this.pickFirstNode(),
                this.last = this.pickLastNode()
            }
            return e.prototype.get = function() {
                var e = this;
                this.render();
                var t = document.createDocumentFragment();
                return i.each(this.roots,
                function(n) {
                    var r = e.point(n);
                    r && t.appendChild(r)
                }),
                this.state = r.TEMPLATE_STATES.active,
                t
            },
            e.prototype.point = function(e) {
                var t = this.nodes[e];
                if (t) return t;
                var n = this.templates[e];
                return n ? n.get() : void 0
            },
            e.prototype.update = function() {
                this.checkState() && this.render()
            },
            e.prototype.remove = function() {
                var e = this;
                i.each(this.roots,
                function(t) {
                    var n = e.nodes[t];
                    if (n) return i.remove(n);
                    var r = e.templates[t];
                    return r ? r.remove() : void 0
                }),
                this.state = r.TEMPLATE_STATES.free
            },
            e.prototype.destroy = function() {
                this.remove(),
                i.each(this.events,
                function(e) {
                    e.node.removeEventListener(e.type, e.fn, !1)
                }),
                this.context = null,
                this.first = null,
                this.last = null,
                this.nodes = [],
                this.templates = [],
                this.roots = [],
                this.arguments = [],
                this.events = [],
                i.extend(this, {
                    createFn: i.LOOP,
                    updateFn: i.LOOP,
                    patchFn: i.LOOP,
                    contextFn: i.LOOP
                }),
                this.state = r.TEMPLATE_STATES.destroy
            },
            e.prototype.bind = function(e, t, n) {
                var r, o = this;
                if (r = "number" == typeof e ? this.nodes[e] : e) {
                    var a = t.split(s);
                    i.each(a,
                    function(e) {
                        r.addEventListener(e, n, !1),
                        o.events.push({
                            node: r,
                            fn: n,
                            type: e
                        })
                    })
                }
            },
            e.prototype.setAttr = function(e, t, n) {
                var r = this.nodes[e];
                if (r) {
                    var i = this.pickAttrs(e);
                    i[t] = n,
                    o.setAttr(r, t, n)
                }
            },
            e.prototype.setAttrs = function(e, t) {
                var n = this.nodes[e];
                if (n) {
                    var r = this.pickAttrs(e);
                    i.each(t,
                    function(e) {
                        var t = e[0],
                        i = e[1];
                        r[t] = i,
                        o.setAttr(n, t, i)
                    })
                }
            },
            e.prototype.render = function() {
                this.renderPatch(),
                this.renderTempaltes()
            },
            e.prototype.renderPatch = function() {
                var e = this,
                t = this.updateFn,
                n = this.patchFn;
                if ("function" == typeof t && "function" == typeof n) {
                    var r = function(t, n) {
                        var r, o = e.cache[t];
                        return r = Array.isArray(n) && Array.isArray(o) ? i.isArrayEqual(o, n) : o === n,
                        r || (e.cache[t] = n),
                        !r
                    },
                    o = t(this.context, this.arguments);
                    n(this, this.context, this.arguments, o, r)
                }
            },
            e.prototype.renderTempaltes = function() {
                var e = this;
                this.templates.forEach(function(t) {
                    var n = t.contextFn;
                    "function" == typeof n ? t.context = n(e.context, e.arguments) : t.context = e.context,
                    t.arguments = e.arguments,
                    t.update()
                })
            },
            e.prototype.checkState = function() {
                return this.state === r.TEMPLATE_STATES.active
            },
            e.prototype.pickAttrs = function(e) {
                var t = this.attrs[e];
                return t || (t = {},
                this.attrs[e] = t),
                t
            },
            e.prototype.pickFirstNode = function() {
                var e = this.roots[0];
                if (e) {
                    var t = this.nodes[e];
                    if (t) return t;
                    var n = this.templates[e];
                    return n ? n.first: void 0
                }
            },
            e.prototype.pickLastNode = function() {
                var e = this.roots[this.roots.length - 1];
                if (e) {
                    var t = this.nodes[e];
                    if (t) return t;
                    var n = this.templates[e];
                    return n ? n.last: void 0
                }
            },
            e
        } ();
        t.Template = a
    },
    function(e, t) {
        "use strict";
        t.TEMPLATE_STATES = {
            free: 0,
            active: 1,
            destroy: 2
        }
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }
        r(n(8)),
        r(n(10)),
        r(n(11)),
        r(n(12))
    },
    function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n;
            return n = i.isProperty(e, t) ? e[t] : e.getAttribute(t)
        }
        var i = n(9);
        t.getAttr = r
    },
    function(e, t) {
        "use strict";
        function n(e, t) {
            return r(e.nodeName, t)
        }
        function r(e, t) {
            var n = i[e.toLocaleUpperCase()] || [];
            return !! ~n.indexOf(t)
        }
        var i = {
            INPUT: ["value", "checked"],
            TEXTAREA: ["value"]
        };
        t.isProperty = n
    },
    function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            i.isProperty(e, t) ? e[t] = n: e.setAttribute(t, n)
        }
        var i = n(9);
        t.setAttr = r
    },
    function(e, t, n) {
        "use strict";
        function r(e, t) {
            o.each(t,
            function(t) {
                return i.setAttr(e, t[0], t[1])
            })
        }
        var i = n(10),
        o = n(1);
        t.setAttrs = r
    },
    function(e, t, n) {
        "use strict";
        function r(e, t) {
            Array.isArray(t) ? o(e, t) : i(e, t)
        }
        function i(e, t) {
            a.isProperty(e, t) ? delete e[t] : e.removeAttribute(t)
        }
        function o(e, t) {
            s.each(t,
            function(t) {
                return i(e, t)
            })
        }
        var s = n(1),
        a = n(9);
        t.removeAttribute = r
    },
    function(e, t) {
        "use strict";
        function n(e, t, n, r) {
            var i = document.createTextNode(r || "");
            e.nodes[n] = i;
            var o = e.nodes[t];
            return o ? o.appendChild(i) : e.roots.push(n),
            i
        }
        t.text = n
    },
    function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            var r = function(e) {
                function t() {
                    e.apply(this, arguments)
                }
                return i(t, e),
                t
            } (s.Template);
            return o.extend(r.prototype, {
                createFn: e,
                updateFn: t,
                patchFn: n
            }),
            r
        }
        var i = this && this.__extends ||
        function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        o = n(1),
        s = n(5);
        t.template = r
    },
    function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, s) {
            var a = e.nodes[t],
            u = document.createElement(r);
            e.nodes[n] = u,
            a ? a.appendChild(u) : e.roots.push(n),
            o && e.setAttrs(n, o),
            s && i.each(s,
            function(t) {
                var n = t[0],
                r = t[1];
                e.bind(u, n,
                function(t) {
                    r.call(this, t, e.context, e.arguments)
                })
            })
        }
        var i = n(1);
        t.element = r
    },
    function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, s) {
            var a = new i.ForTemplate(e.context, r, o, s);
            a.arguments = e.arguments,
            e.templates[n] = a;
            var u = e.nodes[t];
            u ? u.appendChild(a.get()) : e.roots.push(n)
        }
        var i = n(17);
        t.efor = r
    },
    function(e, t, n) {
        "use strict";
        var r = this && this.__extends ||
        function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = n(1),
        o = n(5),
        s = -1,
        a = -2,
        u = function(e) {
            function t(t, n, r, i) {
                e.call(this, t),
                this.childConstructor = n,
                this.forDataFn = r,
                this.forTrackByFn = i,
                this.first = document.createComment("Start For"),
                this.last = document.createComment("End For"),
                this.nodes[s] = this.first,
                this.roots.unshift(s),
                this.nodes[a] = this.last,
                this.roots.push(a)
            }
            return r(t, e),
            t.prototype.render = function() {
                var e = this,
                t = this.getForList(),
                n = [];
                i.each(t,
                function(t, r) {
                    var i = e.assembleArguments(t, r),
                    o = e.getForTrackBy(i, r);
                    e.ensureChild(o, i),
                    n.push(o)
                });
                var r = this.roots.filter(function(e) {
                    return ! ~n.indexOf(e) && e !== s && e !== a
                });
                i.each(r,
                function(t) {
                    var n = e.templates[t];
                    n && n.remove()
                });
                var o = !1,
                u = null;
                i.each(n,
                function(t, n) {
                    var r = e.roots[n + 1];
                    t !== r && (o = !0);
                    var s = e.templates[t];
                    s.update(),
                    o && !u ? i.after(e.first, s.get()) : o && i.after(u, s.get()),
                    u = s.last
                }),
                n.unshift(s),
                n.push(a),
                this.roots = n
            },
            t.prototype.assembleArguments = function(e, t) {
                var n = [];
                return n = this.arguments.slice(0),
                n.push(e, t),
                n
            },
            t.prototype.ensureChild = function(e, t) {
                var n = this.templates[e];
                return n ? (n.context = this.context, n.arguments = t) : (n = new this.childConstructor(this.context, t), this.templates[e] = n),
                n
            },
            t.prototype.getForList = function() {
                var e = this.forDataFn;
                return e(this.context, this.arguments)
            },
            t.prototype.getForTrackBy = function(e, t) {
                var n = this.forTrackByFn;
                return n ? n(this.context, e) : t
            },
            t
        } (o.Template);
        t.ForTemplate = u
    },
    function(e, t) {
        "use strict";
        function n(e, t, n, r, i) {
            var o, s = e.nodes[t];
            o = new r("function" == typeof i ? i(e.context, e.arguments) : e.context),
            o.contextFn = i,
            e.templates[n] = o,
            s ? s.appendChild(o.get()) : e.roots.push(n)
        }
        t.child = n
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }
        r(n(20)),
        r(n(21))
    },
    function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            e.setAttrs(t, n)
        }
        function i(e, t, n, r) {
            e.setAttr(t, n, r)
        }
        function o(e, t, n, r) {
            var i = e.nodes[t];
            if (i) {
                var o = e.attrs[t] || {},
                u = e.includes,
                c = e.excludes;
                e.includes = n,
                e.excludes = r;
                var l = n.filter(function(e) {
                    return ! ~u.indexOf(e)
                }),
                f = r.filter(function(e) {
                    return ! ~c.indexOf(e)
                });
                s.removeAttribute(i, f);
                var p = [];
                a.each(l,
                function(e) {
                    return p.push([e, o[e]])
                }),
                e.setAttrs(t, p)
            }
        }
        var s = n(7),
        a = n(1);
        t.updateAttrs = r,
        t.updateAttr = i,
        t.setAttributesCondition = o
    },
    function(e, t) {
        "use strict";
        function n(e, t, n) {
            var r = e.nodes[t];
            r && (r.textContent = n)
        }
        t.updateText = n
    }]))
},
function(e, t, n) {
    var r, i = [].slice,
    o = [].indexOf ||
    function(e) {
        for (var t = 0,
        n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
        return - 1
    }; !
    function(i, o) {
        "use strict";
        var s;
        return s = o(),
        "object" == typeof e && "object" == typeof e.exports ? e.exports = s: (r = function() {
            return s
        }.call(t, n, t, e), !(void 0 !== r && (e.exports = r)))
    } ("object" == typeof window ? window: this,
    function() {
        "use strict";
        var e, t, n, r, s, a, u, c, l, f, p, h, d;
        return h = Array.prototype.slice,
        e = null,
        l = /^\s*\{(.*)\}\s*$/,
        p = function(e) {
            return e.parentNode.removeChild(e)
        },
        n = function(e, t) {
            return e.onerror = function() {
                return window[t] = null,
                p(e)
            },
            e.onload = function() {
                if (!e.getAttribute("data-site-id")) return p(e)
            }
        },
        a = function(e, t) {
            var n, r;
            return r = document.createElement("script"),
            n = document.getElementsByTagName("script")[0],
            r.async = 1,
            r.src = e,
            t && (r.id = t),
            n.parentNode.insertBefore(r, n),
            r
        },
        r = function() {
            var e, t, n, r, o, s, a;
            for (t = arguments[0], r = 2 <= arguments.length ? i.call(arguments, 1) : [], s = 0, a = r.length; s < a; s++) {
                e = r[s];
                for (n in e) o = e[n],
                t[n] = o
            }
            return t
        },
        t = {
            google: function(e) {
                var t;
                if (e) return window.GoogleAnalyticsObject = "_ga",
                window._ga = function() {
                    return _ga.q.push(arguments)
                },
                _ga.q = [],
                _ga.l = 1 * new Date,
                _ga("create", e, "auto"),
                _ga("require", "displayfeatures"),
                _ga("require", "linkid", "linkid.js"),
                _ga("send", "pageview"),
                t = a("//www.google-analytics.com/analytics.js"),
                n(t, "_ga"),
                {
                    name: "google",
                    pageview: function() {
                        var e, t;
                        if (window._ga) return e = h.call(arguments),
                        t = "object" == typeof e[0] ? e[0] : e.join("_"),
                        window._ga("send", "pageview", t)
                    },
                    event: function(e) {
                        var t, n, r;
                        if (window._ga) return n = e.page,
                        t = e.action,
                        r = e.type,
                        window._ga("send", "event", n, t, r)
                    }
                }
            },
            baidu: function(e) {
                var t;
                if (e) return window._hmt = [],
                t = a("//hm.baidu.com/hm.js?" + e),
                n(t, "_hmt"),
                {
                    name: "baidu",
                    pageview: function() {
                        var e, t, n, r;
                        if (window._hmt) return e = h.call(arguments),
                        "object" == typeof e[0] ? (t = e[0].page, t || (t = function() {
                            var t, i;
                            t = e[0],
                            i = [];
                            for (n in t) r = t[n],
                            i.push(r);
                            return i
                        } ().join("_"))) : t = e.join("_"),
                        window._hmt.push(["_trackPageview", t])
                    },
                    event: function(e) {
                        var t, n, r;
                        if (window._hmt) return n = e.page,
                        t = e.action,
                        r = e.type,
                        window._hmt.push(["_trackEvent", n, t, r])
                    }
                }
            },
            tbpanel: function(e) {
                var t, i, o, s, u;
                if (e) return t = "tbpanel",
                o = window.tbpanel = [],
                o._i = [],
                o.init = function(e, n, r) {
                    var i, s, a, u, c, l;
                    for (a = o, null != r ? a = o[r] = [] : r = t, a.people || (a.people = []), a.toString = function(e) {
                        var n;
                        return n = t,
                        r !== t && (n += "." + r),
                        e || (n += " (stub)"),
                        n
                    },
                    a.people.toString = function() {
                        return a.toString(1) + ".people (stub)"
                    },
                    l = function(e, t) {
                        var n;
                        return n = t.split("."),
                        2 === n.length && (e = e[n[0]], t = n[1]),
                        e[t] = function() {
                            return e.push([t].concat(h.call(arguments)))
                        }
                    },
                    s = ["disable", "track", "track_pageview", "track_links", "track_forms", "register", "register_once", "alias", "unregister", "identify", "name_tag", "set_config", "people.set", "people.set_once", "people.increment", "people.append", "people.track_charge", "people.clear_charges", "people.delete_user"], u = 0, c = s.length; u < c; u++) i = s[u],
                    l(a, i);
                    return o._i.push([e, n, r])
                },
                o.__SV = 1.2,
                o.init(e),
                i = a("//dn-st.teambition.net/tbpanel/tbpanel.d812.js"),
                n(i, t),
                s = null,
                u = null,
                {
                    name: "tbpanel",
                    pageview: function() {},
                    setUser: function(e, t) {
                        var n, r, i, a, c;
                        if (u = e, s = t, i = navigator.userAgent.match(/(Teambition(?:-UWP)?)\/([\d\.]+)/i), i && (n = i[0], r = i[1], c = i[2], "Teambition" === r && (r = "Teambition_Desktop"), o.register({
                            $browser: r,
                            $browser_version: c
                        })), a = navigator.userAgent.match(/Windows NT [\d.]+|(?:Macintosh;|Linux|\b\w*BSD)[^;)]*?(?=\)|;)/i)) return o.register({
                            $os_version: a[0]
                        })
                    },
                    event: function(e) {
                        var t, n;
                        return t = r({},
                        e),
                        null == t.platform && (t.platform = "web"),
                        null != u && (t.userKey = u),
                        null != s && r(t, s),
                        null != (n = window.tbpanel) ? n.track(t.action, t) : void 0
                    }
                }
            },
            mixpanel: function(e) {
                var t, i, o, s, u;
                if (e) return t = "mixpanel",
                i = window.mixpanel = [],
                i._i = [],
                i.init = function(e, n, r) {
                    var o, s, a, u, c, l;
                    for (a = i, null != r ? a = i[r] = [] : r = t, a.people || (a.people = []), a.toString = function(e) {
                        var n;
                        return n = t,
                        r !== t && (n += "." + r),
                        e || (n += " (stub)"),
                        n
                    },
                    a.people.toString = function() {
                        return a.toString(1) + ".people (stub)"
                    },
                    l = function(e, t) {
                        var n;
                        return n = t.split("."),
                        2 === n.length && (e = e[n[0]], t = n[1]),
                        e[t] = function() {
                            return e.push([t].concat(h.call(arguments)))
                        }
                    },
                    s = ["disable", "track", "track_pageview", "track_links", "track_forms", "register", "register_once", "alias", "unregister", "identify", "name_tag", "set_config", "people.set", "people.set_once", "people.increment", "people.append", "people.track_charge", "people.clear_charges", "people.delete_user"], u = 0, c = s.length; u < c; u++) o = s[u],
                    l(a, o);
                    return i._i.push([e, n, r])
                },
                i.__SV = 1.2,
                i.init(e),
                o = a("//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"),
                n(o, t),
                s = null,
                u = null,
                {
                    name: "mixpanel",
                    pageview: function() {},
                    setUser: function(e, t) {
                        var n, r, o, a, c;
                        if (u = e, s = t, o = navigator.userAgent.match(/(Teambition(?:-UWP)?)\/([\d\.]+)/i), o && (n = o[0], r = o[1], c = o[2], "Teambition" === r && (r = "Teambition_Desktop"), i.register({
                            $browser: r,
                            $browser_version: c
                        })), a = navigator.userAgent.match(/Windows NT [\d.]+|(?:Macintosh;|Linux|\b\w*BSD)[^;)]*?(?=\)|;)/i)) return i.register({
                            $os_version: a[0]
                        })
                    },
                    event: function(e) {
                        var t, n;
                        return t = r({},
                        e),
                        null == t.platform && (t.platform = "web"),
                        null != u && (t.userKey = u),
                        null != s && r(t, s),
                        null != (n = window.mixpanel) ? n.track(t.action, t) : void 0
                    }
                }
            },
            customer: function(e) {
                var t;
                if (e) return t = function(t) {
                    var r, i, o, s, u, c, l, f;
                    for (u = window._cio = window._cio || [], u.invoked = !0, u.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "reset", "group", "ready", "alias", "page", "once", "off", "on", "load", "identify", "sidentify", "track"], u.factory = function(e) {
                        return function() {
                            return u.push([e].concat(Array.prototype.slice.call(arguments))),
                            u
                        }
                    },
                    f = u.methods, c = 0, l = f.length; c < l; c++) i = f[c],
                    u[i] = u.factory(i);
                    return r = e.split(","),
                    s = (null != t ? t.indexOf("@") : void 0) > 0 ? r[1] : r[0],
                    o = a("//assets.customer.io/assets/track.js", "cio-tracker"),
                    o.setAttribute("data-site-id", s),
                    n(o, "_cio")
                },
                {
                    name: "customer",
                    setUser: function(e, n) {
                        var r;
                        return n.id = e,
                        new Date(n.created_at) >= new Date("2016-01-01") && (n.id = n.email),
                        n.created_at = Math.floor(new Date(n.created_at).valueOf() / 1e3),
                        t(n.id),
                        null != (r = window._cio) ? r.identify(n) : void 0
                    },
                    pageview: function(e) {},
                    event: function(t) {
                        var n, r;
                        if (e) return n = t,
                        null == n.platform && (n.platform = "web"),
                        null != (r = window._cio) ? r.track(n.action, n) : void 0
                    }
                }
            },
            fullstory: function(e) {
                var t, i, o, s, u;
                if (e) return u = window.FS = function(e, t) {
                    return u.q ? u.q.push(arguments) : u._api(e, t)
                },
                u.q = [],
                i = window._fs_debug = window._fs_debug || !1,
                o = window._fs_host = window._fs_host || "www.fullstory.com",
                s = window._fs_org = e,
                t = a("https://" + o + "/s/fs.js"),
                n(t),
                u.identify = function(e, t) {
                    if (u("user", {
                        uid: e
                    }), t) return u("user", t)
                },
                u.setUserVars = function(e) {
                    return u("user", e)
                },
                u.identifyAccount = function(e, t) {
                    return null == t && (t = {}),
                    t.acctId = e,
                    u("account", t)
                },
                {
                    name: "fullstory",
                    setUser: function(e, t) {
                        var n, i, o;
                        n = r({},
                        t);
                        for (i in n) o = n[i],
                        /(^(displayName|email)$)|(.*_(str|int|real|date|bool)$)/.test(i) || delete n[i];
                        return n.displayName = e,
                        n.email = "" + e + "@mail.teambition.com",
                        u.identify(e, n)
                    }
                }
            }
        },
        d = function() {
            var e, t, n, r, i, o, s, a, c;
            try {
                for (s = /utm_(\w+)=([^&]*)&?/gi, a = {}; r = s.exec(window.location.search);) o = r[0],
                n = r[1],
                c = r[2],
                a[n] = c;
                e = "." + /\.?([\w-]+\.\w+)$/.exec(window.location.hostname)[1],
                i = new Date(Date.now() + 2592e6),
                o && (document.cookie = "utm=" + encodeURI(JSON.stringify(a)) + ";expires=" + i.toGMTString() + ";domain=" + e + ";path=/")
            } catch(l) {
                t = l,
                u.debug && console.error(t)
            }
            return this
        },
        c = function() {
            var e, n, r, i, o, s, a, c, l;
            if (r = document.getElementById("gta-main"), s = u.providers = [], !r) return u;
            for (i in t) e = t[i],
            n = r.getAttribute("data-" + i),
            c = r.getAttribute("data-" + i + "-script"),
            l = r.getAttribute("data-" + i + "-track"),
            a = r.getAttribute("data-" + i + "-random-proportion"),
            a && Math.random() > a || n && (o = e(n, c, l)) && s.push(o);
            return u.delegateEvents(),
            p(r),
            d(),
            s
        },
        f = [],
        s = function(e, t) {
            var n, r, i, s, a;
            r = {};
            for (n in t) i = t[n],
            i && (null != i.wlist && (s = e.name, o.call(i.wlist, s) < 0) || ((null != (a = i.alias) ? a[e.name] : void 0) ? r[i.alias[e.name]] = i.value: r[n] = "[object Object]" === Object.prototype.toString.call(i) && "value" in i ? i.value: i));
            return r
        },
        u = {
            debug: !1,
            page: "",
            setCurrentPage: function(e) {
                return this.page = e,
                this
            },
            setUser: function(e, t) {
                var n, r, i, o, a;
                try {
                    for (f = c(), i = 0, o = f.length; i < o; i++) r = f[i],
                    this.debug && console.log("formatUser", r.name, s(r, t)),
                    null != (a = r.setUser) && a.call(r, e, s(r, t))
                } catch(u) {
                    n = u,
                    this.debug && console.error(n)
                }
                return this
            },
            pageview: function() {
                var e, t, n, r;
                try {
                    for (n = 0, r = f.length; n < r; n++) t = f[n],
                    t.pageview.apply(t, arguments)
                } catch(i) {
                    e = i
                }
                return this
            },
            event: function(e) {
                var t, n, r, i, o;
                try {
                    if (n = "object" == typeof e && !!e) for (e.page || (e.page = this.page), e.method || (e.method = "click"), this.debug && console.log("gtaOptions: ", e), i = 0, o = f.length; i < o; i++) r = f[i],
                    "function" == typeof r.event && r.event(e)
                } catch(s) {
                    t = s,
                    this.debug && console.error(t)
                }
                return this
            },
            delegateEvents: function() {
                var e;
                return e = function(e) {
                    return function(t) {
                        var n, r, i, o;
                        for (n = t.target, o = []; n;) r = null != (i = n.dataset) ? i.gta: void 0,
                        l.test(r) && e.event(e.parseGta(r)),
                        o.push(n = n.parentElement);
                        return o
                    }
                } (this),
                document.body.removeEventListener("click", e, !0),
                document.body.addEventListener("click", e, !0)
            },
            parseGta: function(e) {
                var t, n, r, i, o;
                if (e = l.exec(e)[1], e.length) {
                    for (i = /[\s"']*([^:,"']+)[\s"']*:[\s"']*([^:,"']+)[\s"']*,?/g, t = {}; n = i.exec(e);) r = n[1],
                    o = n[2],
                    t[r] = o;
                    return t
                }
            }
        }
    })
}]);
