(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-gongNeng-gongGao-noticeDetail-noticeDetail"], { 1610: function(t, a, e) { "use strict"; var n = e("3d40"),
                o = e.n(n);
            o.a }, "1c96": function(t, a, e) { var n = e("24fb"),
                o = e("1de5"),
                r = e("5719"),
                i = e("6138");
            a = n(!1); var c = o(r),
                s = o(i);
            a.push([t.i, ".towBorderOuter[data-v-0faa2a86]{width:100%;position:absolute;top:0;height:%?936?%;pointer-events:none}.towBorderOuter .towBorderBoth[data-v-0faa2a86]{position:absolute;height:100%;width:%?71?%;background-size:cover;background-repeat:no-repeat}.towBorderOuter .towBorderLeft[data-v-0faa2a86]{left:0;background-image:url(" + c + ");-webkit-animation:towBorderLeftIn-data-v-0faa2a86 .5s;animation:towBorderLeftIn-data-v-0faa2a86 .5s}@-webkit-keyframes towBorderLeftIn-data-v-0faa2a86{from{background-position:%?-71?% 0}}@keyframes towBorderLeftIn-data-v-0faa2a86{from{background-position:%?-71?% 0}}.towBorderOuter .towBorderRight[data-v-0faa2a86]{right:0;background-image:url(" + s + ");-webkit-animation:towBorderRightIn-data-v-0faa2a86 .5s;animation:towBorderRightIn-data-v-0faa2a86 .5s}@-webkit-keyframes towBorderRightIn-data-v-0faa2a86{from{background-position:%?71?% 0}}@keyframes towBorderRightIn-data-v-0faa2a86{from{background-position:%?71?% 0}}", ""]), t.exports = a }, "1de5": function(t, a, e) { "use strict";
            t.exports = function(t, a) { return a || (a = {}), t = t && t.__esModule ? t.default : t, "string" !== typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), a.hash && (t += a.hash), /["'() \t\n]/.test(t) || a.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t) } }, "24fa": function(t, a, e) { "use strict";
            Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0; var n = { onLoad: function(t) { this.notice = JSON.parse(t.notice) }, data: function() { return { notice: null } }, methods: { back: function() { uni.navigateBack() } } };
            a.default = n }, "2d1d": function(t, a, e) { "use strict"; var n = e("4ea4");
            e("ac1f"), e("5319"), Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0; var o = n(e("5530")),
                r = e("26cb"),
                i = { name: "myBar", data: function() { return { showTitle: !0, hasNotice: !1, flashItv: null, noticeStyle: { backgroundPositionX: "0rpx" } } }, methods: { readMsg: function() { uni.navigateTo({ url: "/pages/gongNeng/xi/xi" }) }, stopp: function() { clearInterval(this.flashItv), this.flashItv = null }, flashXi: function() { var t = this;
                            this.flashItv || (this.flashItv = setInterval((function() { "0rpx" == t.noticeStyle.backgroundPositionX ? t.noticeStyle.backgroundPositionX = "-59.5rpx" : t.noticeStyle.backgroundPositionX = "0rpx" }), 50)) } }, computed: (0, o.default)({}, (0, r.mapState)({ newMsg: function(t) { return t.newMsg }, titleName: function(t) { return t.positionInf.currentTImg }, titleText: function(t) { return t.positionInf.currentText.replace("返回", "") } })), watch: { newMsg: function(t) { t ? (this.hasNotice = !0, this.flashXi()) : (this.hasNotice = !1, this.stopp()) }, titleName: function() { var t = this;
                            this.showTitle = !1, setTimeout((function() { t.showTitle = !0 }), 100) } } };
            a.default = i }, "39a9": function(t, a, e) { "use strict";
            e.r(a); var n = e("5c40"),
                o = e("584f"); for (var r in o) "default" !== r && function(t) { e.d(a, t, (function() { return o[t] })) }(r);
            e("1610"); var i, c = e("f0c5"),
                s = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, "0faa2a86", null, !1, n["a"], i);
            a["default"] = s.exports }, "3d40": function(t, a, e) { var n = e("1c96"); "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals); var o = e("4f06").default;
            o("4ec72d81", n, !0, { sourceMap: !1, shadowMode: !1 }) }, "4d39": function(t, a, e) { "use strict";
            e.r(a); var n = e("c8b7"),
                o = e.n(n); for (var r in n) "default" !== r && function(t) { e.d(a, t, (function() { return n[t] })) }(r);
            a["default"] = o.a }, 5324: function(t, a, e) { var n = e("24fb"),
                o = e("1de5"),
                r = e("595c"),
                i = e("c2a8"),
                c = e("a0a5");
            a = n(!1); var s = o(r),
                u = o(i),
                d = o(c);
            a.push([t.i, ".color1[data-v-d8043e44]{color:#ca0300}.color2[data-v-d8043e44]{color:#d8b2b3}.btnD[data-v-d8043e44]{vertical-align:middle;height:%?75?%;display:inline-block;width:%?203?%;background-image:url(" + s + ");background-repeat:no-repeat;background-size:cover}.btnU[data-v-d8043e44]{height:%?75?%;vertical-align:middle;display:inline-block;width:%?203?%;background-image:url(" + u + ");background-repeat:no-repeat;background-size:cover}.btnT[data-v-d8043e44]{display:inline-block;font-weight:600;line-height:%?75?%;white-space:nowrap;height:%?75?%;background-image:url(" + d + ");background-repeat:no-repeat;background-size:100% 100%;padding:0 %?50?%}", ""]), t.exports = a }, 5719: function(t, a, e) { t.exports = e.p + "static/img/bd_l.cab351d1.png" }, "584f": function(t, a, e) { "use strict";
            e.r(a); var n = e("d8a4"),
                o = e.n(n); for (var r in n) "default" !== r && function(t) { e.d(a, t, (function() { return n[t] })) }(r);
            a["default"] = o.a }, "595c": function(t, a, e) { t.exports = e.p + "static/img/y_btnd.ae4a556d.png" }, "5c40": function(t, a, e) { "use strict"; var n;
            e.d(a, "b", (function() { return o })), e.d(a, "c", (function() { return r })), e.d(a, "a", (function() { return n })); var o = function() { var t = this,
                        a = t.$createElement,
                        e = t._self._c || a; return e("v-uni-view", { staticClass: "towBorderOuter" }, [e("v-uni-view", { staticClass: "towBorderLeft towBorderBoth" }), e("v-uni-view", { staticClass: "towBorderRight towBorderBoth" })], 1) },
                r = [] }, "5d9c": function(t, a, e) { "use strict";
            e.r(a); var n = e("24fa"),
                o = e.n(n); for (var r in n) "default" !== r && function(t) { e.d(a, t, (function() { return n[t] })) }(r);
            a["default"] = o.a }, 6138: function(t, a, e) { t.exports = e.p + "static/img/bd_r.0f553a1c.png" }, "6cda": function(t, a) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAANCAYAAAB1qTppAAAFQUlEQVR42q2YK3TjQAxFAxcGFhYWFhYWFgYWFgYGFhYGBhYGBgYaBhouXBi4cGHYrK5mni07/vR3cnTsjH+y7jxp5MVlMfP7e0qXS9VavUuXzXO6bF+SH1t8/FdX76m26xvbv6b65SnV61Xi2Kd8wQ+2i6/9TsddqqpttveNb790p3+HdHmzeLDtjw/ZVHwOG4uFxePU9YX/QxbP6d4qAuPFMIBZsC+P93bhorXV42QgO8B262wAWz2k+uEu1XaPxuzenDf6in/2XV9ub7IPTCj5wPUGZA5uZZOn2q5TZfepnh5SdbNMld2ren5sYDrYzWoeLmDsvbIvqxYU2/tb8/Xx2kZg1se3VNs9PB7mi0A53LubHLe+BZjdYAEHYLLlsg0YQcR4OcEeg4hTwAGYbPkrOykFYsAtsCcDhm96PhCxw6tlhGNqJuD9XfZ1JvgOEogYELG3l1SZz34chd7dZrjbdRoFKEONPFeQZPa+bvKXfc7brcfVhhqJUYHkccSIHWa+uimWTJ5JRRIkqVDKVKAUvLk0KjVa8BsVSpkWKHfkI+lM/qA2+UFggMq4p9xj9o1jExPMIQENtaFKgAESqDbu51jgHCLHhvwDkr1PJzv1jXMEUGCJJf9/t5PWYTHhY3bqGyAFUMBN7f7f1DoMkoAobSlYqFT7n6hLQPKH4QxbFIjT2qc+zilRKRN/lCWib8A9n/JWapyo254ygWTA3dgXSIN7OrxnyEWN1NFBkKiP56FGKRLfXCE9kMfXFiLj52MXJJOcGKFGKRJQpNc+yN1LB2Id/LsGqQDxYClSqvAU8tSOzYEE2OtzfrAUKZUqhZSxSUXKeDY+kPI1qTD5yr6UOuBfs7jBqI8AszSlxY4bYIHMflFqR5kxnQJO8Hi+AAuk0qmMc/qKFDzACR6wBFgglU5lnDOuyFMOhB5Mqoo1M6qCoE7VSVao61X7YNJprJkyAR2DieKYYDwPgE3NWbYpV2rEn1UJJsfOXXW64kidQASgaiT7SrlFjQ7S3tX/2zGuvVrgzKVWQKJI4HGNauY538tBblYfS62ARJEokWtUM0ttv579BEwLCwKo2khgNIaxAJmrkQDSwgaFqjaiSI1V28aZ63bj2GYHfGBfk4nnA19w8Z2J6H4t2jGpEYCA0iqVfaVYFkCoUnDNJ29PGFf6lSojyP2mVWdMs0M1UmMcL6rsgLRrG3XGNDtUI0+hbBVVXoPEYa1WCYoUqOU/x1jFckzBGwNJ2lRKwCEpUK0Ix1jFcozzYy8Zs4PUx/MiSE0y1UyMMVTJtvS6DoU0qVRa0mUHpFaqqpkYY6iSrf33mhlBAk6pla0WQVGRajtoR7xte2hakA5IwCm1stUiKCpSbQftiNq20oK0AAmMapACpcDF1KVUptRLsII6HQgPV44HnkBFkPynfsbUC9yoTk2sWCeBGuuhekv5RACVNUKv6+CUMmVAjfVQvSVABRUlYwDFlwhSqostBhYVCWD8BWDvw0EHpFQXWwwsKhLA1EYA9j4ctOmUAGkho/ZDfZvUGYOrca4rx5p0qtkDMLUfQFI6KLAa1Wq8OD658NFEUzaIX3sEXbVxrhXRCrak0s7XngJdtfFqwTNk1D5sLLWerz8GjH21afpIpdF+aq2Gvuwwe2OTX9dZecxopdIYFC1AuJmUG1erpYc8b07p9/6QlccsUioNC5u62uc6CdCi3EmQ+PSFz4ODIFGZUubiB3/qGye+5Hz4s6b6xt6XnP5von+ruyntG844zPDJ7ltBmqjLX4H54xD7qv2Bew19W+3//gN8YwHYQeioMAAAAABJRU5ErkJggg==" }, "752c": function(t, a, e) { "use strict"; var n = e("7b84"),
                o = e.n(n);
            o.a }, "77cf": function(t, a, e) { "use strict"; var n = e("fd11"),
                o = e.n(n);
            o.a }, "7b84": function(t, a, e) { var n = e("b3c9"); "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals); var o = e("4f06").default;
            o("997e4272", n, !0, { sourceMap: !1, shadowMode: !1 }) }, "7c7e": function(t, a, e) { "use strict";
            e.r(a); var n = e("a261"),
                o = e("4d39"); for (var r in o) "default" !== r && function(t) { e.d(a, t, (function() { return o[t] })) }(r);
            e("77cf"); var i, c = e("f0c5"),
                s = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, "d8043e44", null, !1, n["a"], i);
            a["default"] = s.exports }, "92d0": function(t, a, e) { "use strict"; var n = e("db6f"),
                o = e.n(n);
            o.a }, a0a5: function(t, a, e) { t.exports = e.p + "static/img/y_btn.ac3490dc.png" }, a12a: function(t, a, e) { "use strict";
            e.r(a); var n = e("f4d2"),
                o = e("5d9c"); for (var r in o) "default" !== r && function(t) { e.d(a, t, (function() { return o[t] })) }(r);
            e("92d0"); var i, c = e("f0c5"),
                s = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, "655c7dcb", null, !1, n["a"], i);
            a["default"] = s.exports }, a261: function(t, a, e) { "use strict"; var n;
            e.d(a, "b", (function() { return o })), e.d(a, "c", (function() { return r })), e.d(a, "a", (function() { return n })); var o = function() { var t = this,
                        a = t.$createElement,
                        e = t._self._c || a; return e("v-uni-view", { class: [t.btnClass, t.textClass], on: { click: function(a) { arguments[0] = a = t.$handleEvent(a), t.tap.apply(void 0, arguments) } } }, [e("v-uni-text", [t._v(t._s(t.mainText))])], 1) },
                r = [] }, b3c9: function(t, a, e) { var n = e("24fb"),
                o = e("1de5"),
                r = e("df28"),
                i = e("6cda");
            a = n(!1); var c = o(r),
                s = o(i);
            a.push([t.i, ".myBarOuter[data-v-13d06c4c]{margin-top:0;height:%?64?%;background-image:url(" + c + ");background-size:100% 100%;background-repeat:no-repeat}.myBarOuter .myBarContent[data-v-13d06c4c]{position:relative;height:%?64?%;line-height:%?64?%}.myBarOuter .myBarContent uni-image[data-v-13d06c4c]{height:%?64?%;width:%?250?%;margin-left:%?0?%;-webkit-animation:myBarImgT-data-v-13d06c4c 1s;animation:myBarImgT-data-v-13d06c4c 1s}@-webkit-keyframes myBarImgT-data-v-13d06c4c{from{margin-left:%?-150?%}}@keyframes myBarImgT-data-v-13d06c4c{from{margin-left:%?-150?%}}.myBarOuter .myBarContent uni-text[data-v-13d06c4c]{position:absolute;top:45%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:myBarTextT-data-v-13d06c4c 1s;animation:myBarTextT-data-v-13d06c4c 1s}@-webkit-keyframes myBarTextT-data-v-13d06c4c{from{top:0}}@keyframes myBarTextT-data-v-13d06c4c{from{top:0}}.myBarOuter .myBarContent .notice[data-v-13d06c4c]{height:%?41?%;width:%?60?%;position:absolute;top:%?8?%;right:%?7?%;background-image:url(" + s + ");background-size:cover;background-position-x:%?0?%;background-repeat:no-repeat}", ""]), t.exports = a }, b684: function(t, a, e) { var n = e("24fb");
            a = n(!1), a.push([t.i, ".btn[data-v-655c7dcb]{display:inline-block}.outerr .outer[data-v-655c7dcb]{position:relative;height:%?936?%;overflow:hidden;background-color:#310030;box-sizing:border-box}.outerr .outer .title[data-v-655c7dcb]{margin-top:%?10?%;position:absolute;width:100%;text-align:center;color:#ffbeb8;font-weight:600}.outerr .outer .ulClass[data-v-655c7dcb]{height:%?720?%;margin-top:%?70?%;box-sizing:border-box;padding:0 %?100?%;line-height:%?50?%}.outerr .outer .backBtn[data-v-655c7dcb]{z-index:6;position:absolute;bottom:%?50?%;left:%?40?%}", ""]), t.exports = a }, c2a8: function(t, a, e) { t.exports = e.p + "static/img/y_btnu.94a554f6.png" }, c8b7: function(t, a, e) { "use strict";
            Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0; var n = { name: "yBtn", props: ["buttonType", "text", "stopFlash"], data: function() { return { btnClass: null, mainText: null, textClass: "color1", textFlashItv: null } }, methods: { tap: function() { var t = this; "no" != this.stopFlash && (this.textFlashItv = setInterval((function() { "color1" == t.textClass ? t.textClass = "color2" : t.textClass = "color1", t.stopFlash && clearInterval(t.textFlashItv) }), 50)) } }, created: function() { switch (this.buttonType) {
                        case "up":
                            this.btnClass = "btnU"; break;
                        case "down":
                            this.btnClass = "btnD"; break;
                        case "text":
                            this.btnClass = "btnT", this.mainText = this.text; break;
                        default:
                            break } } };
            a.default = n }, d8a4: function(t, a, e) { "use strict";
            Object.defineProperty(a, "__esModule", { value: !0 }), a.default = void 0; var n = { name: "towBorder", data: function() { return {} } };
            a.default = n }, db6f: function(t, a, e) { var n = e("b684"); "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals); var o = e("4f06").default;
            o("0a8eb672", n, !0, { sourceMap: !1, shadowMode: !1 }) }, dd55: function(t, a, e) { "use strict";
            e.r(a); var n = e("dd68"),
                o = e("e33d"); for (var r in o) "default" !== r && function(t) { e.d(a, t, (function() { return o[t] })) }(r);
            e("752c"); var i, c = e("f0c5"),
                s = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, "13d06c4c", null, !1, n["a"], i);
            a["default"] = s.exports }, dd68: function(t, a, e) { "use strict"; var n;
            e.d(a, "b", (function() { return o })), e.d(a, "c", (function() { return r })), e.d(a, "a", (function() { return n })); var o = function() { var t = this,
                        a = t.$createElement,
                        e = t._self._c || a; return e("v-uni-view", { staticClass: "myBarOuter" }, [t.showTitle ? e("v-uni-view", { staticClass: "myBarContent" }, [e("v-uni-image", { attrs: { src: "/unisg/static/images/" + t.titleName + ".png", mode: "aspectFit" } }), e("v-uni-text", { directives: [{ name: "show", rawName: "v-show", value: t.titleName, expression: "titleName" }] }, [t._v(t._s(t.titleText))]), e("v-uni-view", { directives: [{ name: "show", rawName: "v-show", value: t.hasNotice, expression: "hasNotice" }], staticClass: "notice", style: t.noticeStyle, on: { click: function(a) { arguments[0] = a = t.$handleEvent(a), t.readMsg.apply(void 0, arguments) } } })], 1) : t._e()], 1) },
                r = [] }, df28: function(t, a, e) { t.exports = e.p + "static/img/game_tit.8776e22e.png" }, e33d: function(t, a, e) { "use strict";
            e.r(a); var n = e("2d1d"),
                o = e.n(n); for (var r in n) "default" !== r && function(t) { e.d(a, t, (function() { return n[t] })) }(r);
            a["default"] = o.a }, f4d2: function(t, a, e) { "use strict";
            e.d(a, "b", (function() { return o })), e.d(a, "c", (function() { return r })), e.d(a, "a", (function() { return n })); var n = { myBar: e("dd55").default, towBorder: e("39a9").default, yBtn: e("7c7e").default },
                o = function() { var t = this,
                        a = t.$createElement,
                        e = t._self._c || a; return e("v-uni-view", { staticClass: "outerr" }, [e("myBar"), e("v-uni-view", { staticClass: "outer" }, [e("towBorder", { staticStyle: { "z-index": "4" } }), e("v-uni-view", { staticClass: "title" }, [e("v-uni-text", [t._v("公告-" + t._s(t.notice.title))])], 1), e("v-uni-scroll-view", { staticClass: "ulClass", attrs: { "scroll-y": "true" } }, [e("v-uni-text", [t._v(t._s(t.notice.content))])], 1), e("v-uni-view", { staticClass: "backBtn", on: { click: function(a) { arguments[0] = a = t.$handleEvent(a), t.back.apply(void 0, arguments) } } }, [e("yBtn", { attrs: { buttonType: "text", text: "返回", stopFlash: "no" } })], 1)], 1)], 1) },
                r = [] }, fd11: function(t, a, e) { var n = e("5324"); "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals); var o = e("4f06").default;
            o("0e8fd513", n, !0, { sourceMap: !1, shadowMode: !1 }) } }
]);