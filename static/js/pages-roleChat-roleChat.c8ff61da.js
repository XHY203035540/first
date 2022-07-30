(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-roleChat-roleChat"], { "0cd2": function(t, e) { t.exports = [{ text: "任务11", confirmText: "确定1" }, { text: "任务12", confirmText: "确定2" }, { text: "任务13", confirmText: "返回" }] }, "1de5": function(t, e, n) { "use strict";
            t.exports = function(t, e) { return e || (e = {}), t = t && t.__esModule ? t.default : t, "string" !== typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t) } }, "2d1d": function(t, e, n) { "use strict"; var a = n("4ea4");
            n("ac1f"), n("5319"), Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var i = a(n("5530")),
                o = n("26cb"),
                r = { name: "myBar", data: function() { return { showTitle: !0, hasNotice: !1, flashItv: null, noticeStyle: { backgroundPositionX: "0rpx" } } }, methods: { readMsg: function() { uni.navigateTo({ url: "/pages/gongNeng/xi/xi" }) }, stopp: function() { clearInterval(this.flashItv), this.flashItv = null }, flashXi: function() { var t = this;
                            this.flashItv || (this.flashItv = setInterval((function() { "0rpx" == t.noticeStyle.backgroundPositionX ? t.noticeStyle.backgroundPositionX = "-59.5rpx" : t.noticeStyle.backgroundPositionX = "0rpx" }), 50)) } }, computed: (0, i.default)({}, (0, o.mapState)({ newMsg: function(t) { return t.newMsg }, titleName: function(t) { return t.positionInf.currentTImg }, titleText: function(t) { return t.positionInf.currentText.replace("返回", "") } })), watch: { newMsg: function(t) { t ? (this.hasNotice = !0, this.flashXi()) : (this.hasNotice = !1, this.stopp()) }, titleName: function() { var t = this;
                            this.showTitle = !1, setTimeout((function() { t.showTitle = !0 }), 100) } } };
            e.default = r }, "2d1e": function(t, e) { t.exports = [{ text: "任务21", confirmText: "确定1" }, { text: "任务22", confirmText: "确定2" }, { text: "任务23", confirmText: "返回" }] }, 3789: function(t, e, n) { var a = { "./fj.js": "66fb", "./text1.js": "0cd2", "./text2.js": "2d1e" };

            function i(t) { var e = o(t); return n(e) }

            function o(t) { if (!n.o(a, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return a[t] }
            i.keys = function() { return Object.keys(a) }, i.resolve = o, t.exports = i, i.id = "3789" }, "3e78": function(t, e, n) { "use strict";
            n.r(e); var a = n("409d"),
                i = n.n(a); for (var o in a) "default" !== o && function(t) { n.d(e, t, (function() { return a[t] })) }(o);
            e["default"] = i.a }, "409d": function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var a = { data: function() { return { npc: { name: "吕布", pic: "n_21572" }, my: { name: uni.getStorageSync("nikename"), pic: uni.getStorageSync("headpicture") }, confirmClass: "golden", currentTextIndex: 0, mainText: null } }, methods: { back: function() {}, tap: function() { var t = this; if ("返回" != this.mainText[this.currentTextIndex].confirmText) { var e = (.3 * Math.random() + .2).toFixed(1),
                                n = setInterval((function() { "golden" == t.confirmClass ? t.confirmClass = "white" : t.confirmClass = "golden" }), 50);
                            setTimeout((function() { clearInterval(n), t.currentTextIndex++ }), 1e3 * e) } } }, onLoad: function() { var t = "text1";
                    this.mainText = n("3789")("./".concat(t, ".js")) } };
            e.default = a }, "4d39": function(t, e, n) { "use strict";
            n.r(e); var a = n("c8b7"),
                i = n.n(a); for (var o in a) "default" !== o && function(t) { n.d(e, t, (function() { return a[t] })) }(o);
            e["default"] = i.a }, "52e3": function(t, e, n) { var a = n("24fb"),
                i = n("1de5"),
                o = n("9ada"),
                r = n("d807");
            e = a(!1); var c = i(o),
                s = i(r);
            e.push([t.i, ".golden[data-v-0d9ce998]{color:gold}.white[data-v-0d9ce998]{color:#fff}.outerr .outer[data-v-0d9ce998]{position:relative;height:%?936?%;background-image:url(" + c + ");background-repeat:no-repeat;background-size:cover}.outerr .outer .yBtn[data-v-0d9ce998]{position:absolute;display:inline-block;bottom:%?30?%;left:%?30?%}.outerr .outer uni-image[data-v-0d9ce998]{vertical-align:middle;width:%?180?%;height:%?180?%}.outerr .outer .npc[data-v-0d9ce998]{color:#f50;font-weight:600;position:absolute;top:%?6?%;left:%?40?%}.outerr .outer .npc uni-text[data-v-0d9ce998]{margin-left:%?20?%}.outerr .outer .my[data-v-0d9ce998]{color:#f50;font-weight:600;position:absolute;top:%?750?%;right:%?40?%}.outerr .outer .my uni-text[data-v-0d9ce998]{margin-right:%?20?%}.outerr .outer .content[data-v-0d9ce998]{position:absolute;margin:auto;left:0;right:0;top:%?208?%;width:%?720?%;height:%?510?%;border:#838589 solid %?4?%;display:flex;flex-direction:column}.outerr .outer .content .text[data-v-0d9ce998]{border-bottom:#838589 solid %?4?%;padding:%?16?%;flex:5.5;background-color:#000}.outerr .outer .content .confirm[data-v-0d9ce998]{position:relative;flex:1;text-align:center;line-height:%?80?%}.outerr .outer .content .confirm .jt[data-v-0d9ce998]{margin-right:%?10?%;vertical-align:-15%;display:inline-block;background-image:url(" + s + ");background-repeat:no-repeat;background-size:cover;width:%?50?%;height:%?50?%;-webkit-animation:jtRun-data-v-0d9ce998 .3s infinite steps(5);animation:jtRun-data-v-0d9ce998 .3s infinite steps(5)}@-webkit-keyframes jtRun-data-v-0d9ce998{from{background-position:%?0?% 0}to{background-position:%?-250?% 0}}@keyframes jtRun-data-v-0d9ce998{from{background-position:%?0?% 0}to{background-position:%?-250?% 0}}", ""]), t.exports = e }, 5324: function(t, e, n) { var a = n("24fb"),
                i = n("1de5"),
                o = n("595c"),
                r = n("c2a8"),
                c = n("a0a5");
            e = a(!1); var s = i(o),
                u = i(r),
                d = i(c);
            e.push([t.i, ".color1[data-v-d8043e44]{color:#ca0300}.color2[data-v-d8043e44]{color:#d8b2b3}.btnD[data-v-d8043e44]{vertical-align:middle;height:%?75?%;display:inline-block;width:%?203?%;background-image:url(" + s + ");background-repeat:no-repeat;background-size:cover}.btnU[data-v-d8043e44]{height:%?75?%;vertical-align:middle;display:inline-block;width:%?203?%;background-image:url(" + u + ");background-repeat:no-repeat;background-size:cover}.btnT[data-v-d8043e44]{display:inline-block;font-weight:600;line-height:%?75?%;white-space:nowrap;height:%?75?%;background-image:url(" + d + ");background-repeat:no-repeat;background-size:100% 100%;padding:0 %?50?%}", ""]), t.exports = e }, "595c": function(t, e, n) { t.exports = n.p + "static/img/y_btnd.ae4a556d.png" }, "66fb": function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var a = [{ text: "测试1", confirmText: "急速下降" }, { text: "测试2", confirmText: "漫长的黑夜过后" }, { text: "测试3", confirmText: "返回" }];
            e.default = a }, "6cda": function(t, e) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAANCAYAAAB1qTppAAAFQUlEQVR42q2YK3TjQAxFAxcGFhYWFhYWFgYWFgYGFhYGBhYGBgYaBhouXBi4cGHYrK5mni07/vR3cnTsjH+y7jxp5MVlMfP7e0qXS9VavUuXzXO6bF+SH1t8/FdX76m26xvbv6b65SnV61Xi2Kd8wQ+2i6/9TsddqqpttveNb790p3+HdHmzeLDtjw/ZVHwOG4uFxePU9YX/QxbP6d4qAuPFMIBZsC+P93bhorXV42QgO8B262wAWz2k+uEu1XaPxuzenDf6in/2XV9ub7IPTCj5wPUGZA5uZZOn2q5TZfepnh5SdbNMld2ren5sYDrYzWoeLmDsvbIvqxYU2/tb8/Xx2kZg1se3VNs9PB7mi0A53LubHLe+BZjdYAEHYLLlsg0YQcR4OcEeg4hTwAGYbPkrOykFYsAtsCcDhm96PhCxw6tlhGNqJuD9XfZ1JvgOEogYELG3l1SZz34chd7dZrjbdRoFKEONPFeQZPa+bvKXfc7brcfVhhqJUYHkccSIHWa+uimWTJ5JRRIkqVDKVKAUvLk0KjVa8BsVSpkWKHfkI+lM/qA2+UFggMq4p9xj9o1jExPMIQENtaFKgAESqDbu51jgHCLHhvwDkr1PJzv1jXMEUGCJJf9/t5PWYTHhY3bqGyAFUMBN7f7f1DoMkoAobSlYqFT7n6hLQPKH4QxbFIjT2qc+zilRKRN/lCWib8A9n/JWapyo254ygWTA3dgXSIN7OrxnyEWN1NFBkKiP56FGKRLfXCE9kMfXFiLj52MXJJOcGKFGKRJQpNc+yN1LB2Id/LsGqQDxYClSqvAU8tSOzYEE2OtzfrAUKZUqhZSxSUXKeDY+kPI1qTD5yr6UOuBfs7jBqI8AszSlxY4bYIHMflFqR5kxnQJO8Hi+AAuk0qmMc/qKFDzACR6wBFgglU5lnDOuyFMOhB5Mqoo1M6qCoE7VSVao61X7YNJprJkyAR2DieKYYDwPgE3NWbYpV2rEn1UJJsfOXXW64kidQASgaiT7SrlFjQ7S3tX/2zGuvVrgzKVWQKJI4HGNauY538tBblYfS62ARJEokWtUM0ttv579BEwLCwKo2khgNIaxAJmrkQDSwgaFqjaiSI1V28aZ63bj2GYHfGBfk4nnA19w8Z2J6H4t2jGpEYCA0iqVfaVYFkCoUnDNJ29PGFf6lSojyP2mVWdMs0M1UmMcL6rsgLRrG3XGNDtUI0+hbBVVXoPEYa1WCYoUqOU/x1jFckzBGwNJ2lRKwCEpUK0Ix1jFcozzYy8Zs4PUx/MiSE0y1UyMMVTJtvS6DoU0qVRa0mUHpFaqqpkYY6iSrf33mhlBAk6pla0WQVGRajtoR7xte2hakA5IwCm1stUiKCpSbQftiNq20oK0AAmMapACpcDF1KVUptRLsII6HQgPV44HnkBFkPynfsbUC9yoTk2sWCeBGuuhekv5RACVNUKv6+CUMmVAjfVQvSVABRUlYwDFlwhSqostBhYVCWD8BWDvw0EHpFQXWwwsKhLA1EYA9j4ctOmUAGkho/ZDfZvUGYOrca4rx5p0qtkDMLUfQFI6KLAa1Wq8OD658NFEUzaIX3sEXbVxrhXRCrak0s7XngJdtfFqwTNk1D5sLLWerz8GjH21afpIpdF+aq2Gvuwwe2OTX9dZecxopdIYFC1AuJmUG1erpYc8b07p9/6QlccsUioNC5u62uc6CdCi3EmQ+PSFz4ODIFGZUubiB3/qGye+5Hz4s6b6xt6XnP5von+ruyntG844zPDJ7ltBmqjLX4H54xD7qv2Bew19W+3//gN8YwHYQeioMAAAAABJRU5ErkJggg==" }, "752c": function(t, e, n) { "use strict"; var a = n("7b84"),
                i = n.n(a);
            i.a }, "77cf": function(t, e, n) { "use strict"; var a = n("fd11"),
                i = n.n(a);
            i.a }, "7b84": function(t, e, n) { var a = n("b3c9"); "string" === typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals); var i = n("4f06").default;
            i("997e4272", a, !0, { sourceMap: !1, shadowMode: !1 }) }, "7c7e": function(t, e, n) { "use strict";
            n.r(e); var a = n("a261"),
                i = n("4d39"); for (var o in i) "default" !== o && function(t) { n.d(e, t, (function() { return i[t] })) }(o);
            n("77cf"); var r, c = n("f0c5"),
                s = Object(c["a"])(i["default"], a["b"], a["c"], !1, null, "d8043e44", null, !1, a["a"], r);
            e["default"] = s.exports }, "9ada": function(t, e, n) { t.exports = n.p + "static/img/roleChat.16e976ae.png" }, a0a5: function(t, e, n) { t.exports = n.p + "static/img/y_btn.ac3490dc.png" }, a261: function(t, e, n) { "use strict"; var a;
            n.d(e, "b", (function() { return i })), n.d(e, "c", (function() { return o })), n.d(e, "a", (function() { return a })); var i = function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("v-uni-view", { class: [t.btnClass, t.textClass], on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.tap.apply(void 0, arguments) } } }, [n("v-uni-text", [t._v(t._s(t.mainText))])], 1) },
                o = [] }, a5c0: function(t, e, n) { "use strict";
            n.r(e); var a = n("ded0"),
                i = n("3e78"); for (var o in i) "default" !== o && function(t) { n.d(e, t, (function() { return i[t] })) }(o);
            n("fe08"); var r, c = n("f0c5"),
                s = Object(c["a"])(i["default"], a["b"], a["c"], !1, null, "0d9ce998", null, !1, a["a"], r);
            e["default"] = s.exports }, b3c9: function(t, e, n) { var a = n("24fb"),
                i = n("1de5"),
                o = n("df28"),
                r = n("6cda");
            e = a(!1); var c = i(o),
                s = i(r);
            e.push([t.i, ".myBarOuter[data-v-13d06c4c]{margin-top:0;height:%?64?%;background-image:url(" + c + ");background-size:100% 100%;background-repeat:no-repeat}.myBarOuter .myBarContent[data-v-13d06c4c]{position:relative;height:%?64?%;line-height:%?64?%}.myBarOuter .myBarContent uni-image[data-v-13d06c4c]{height:%?64?%;width:%?250?%;margin-left:%?0?%;-webkit-animation:myBarImgT-data-v-13d06c4c 1s;animation:myBarImgT-data-v-13d06c4c 1s}@-webkit-keyframes myBarImgT-data-v-13d06c4c{from{margin-left:%?-150?%}}@keyframes myBarImgT-data-v-13d06c4c{from{margin-left:%?-150?%}}.myBarOuter .myBarContent uni-text[data-v-13d06c4c]{position:absolute;top:45%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:myBarTextT-data-v-13d06c4c 1s;animation:myBarTextT-data-v-13d06c4c 1s}@-webkit-keyframes myBarTextT-data-v-13d06c4c{from{top:0}}@keyframes myBarTextT-data-v-13d06c4c{from{top:0}}.myBarOuter .myBarContent .notice[data-v-13d06c4c]{height:%?41?%;width:%?60?%;position:absolute;top:%?8?%;right:%?7?%;background-image:url(" + s + ");background-size:cover;background-position-x:%?0?%;background-repeat:no-repeat}", ""]), t.exports = e }, c2a8: function(t, e, n) { t.exports = n.p + "static/img/y_btnu.94a554f6.png" }, c8b7: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var a = { name: "yBtn", props: ["buttonType", "text", "stopFlash"], data: function() { return { btnClass: null, mainText: null, textClass: "color1", textFlashItv: null } }, methods: { tap: function() { var t = this; "no" != this.stopFlash && (this.textFlashItv = setInterval((function() { "color1" == t.textClass ? t.textClass = "color2" : t.textClass = "color1", t.stopFlash && clearInterval(t.textFlashItv) }), 50)) } }, created: function() { switch (this.buttonType) {
                        case "up":
                            this.btnClass = "btnU"; break;
                        case "down":
                            this.btnClass = "btnD"; break;
                        case "text":
                            this.btnClass = "btnT", this.mainText = this.text; break;
                        default:
                            break } } };
            e.default = a }, d704: function(t, e, n) { var a = n("52e3"); "string" === typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals); var i = n("4f06").default;
            i("7c3829bb", a, !0, { sourceMap: !1, shadowMode: !1 }) }, d807: function(t, e, n) { t.exports = n.p + "static/img/npc_jt.c4d4d92c.png" }, dd55: function(t, e, n) { "use strict";
            n.r(e); var a = n("dd68"),
                i = n("e33d"); for (var o in i) "default" !== o && function(t) { n.d(e, t, (function() { return i[t] })) }(o);
            n("752c"); var r, c = n("f0c5"),
                s = Object(c["a"])(i["default"], a["b"], a["c"], !1, null, "13d06c4c", null, !1, a["a"], r);
            e["default"] = s.exports }, dd68: function(t, e, n) { "use strict"; var a;
            n.d(e, "b", (function() { return i })), n.d(e, "c", (function() { return o })), n.d(e, "a", (function() { return a })); var i = function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("v-uni-view", { staticClass: "myBarOuter" }, [t.showTitle ? n("v-uni-view", { staticClass: "myBarContent" }, [n("v-uni-image", { attrs: { src: "/unisg/static/images/" + t.titleName + ".png", mode: "aspectFit" } }), n("v-uni-text", { directives: [{ name: "show", rawName: "v-show", value: t.titleName, expression: "titleName" }] }, [t._v(t._s(t.titleText))]), n("v-uni-view", { directives: [{ name: "show", rawName: "v-show", value: t.hasNotice, expression: "hasNotice" }], staticClass: "notice", style: t.noticeStyle, on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.readMsg.apply(void 0, arguments) } } })], 1) : t._e()], 1) },
                o = [] }, ded0: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return i })), n.d(e, "c", (function() { return o })), n.d(e, "a", (function() { return a })); var a = { myBar: n("dd55").default, yBtn: n("7c7e").default },
                i = function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("v-uni-view", { staticClass: "outerr" }, [n("myBar", { attrs: { titleName: "t_img16", text: "下邳" } }), n("v-uni-view", { staticClass: "outer" }, [n("v-uni-view", { staticClass: "npc" }, [n("v-uni-image", { attrs: { src: "/unisg/static/images/" + t.npc.pic + ".png", mode: "scaleToFill" } }), n("v-uni-text", [t._v(t._s(t.npc.name))])], 1), n("v-uni-view", { staticClass: "content", on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.tap.apply(void 0, arguments) } } }, [n("v-uni-view", { staticClass: "text" }, [n("v-uni-text", [t._v(t._s(t.mainText[t.currentTextIndex].text))])], 1), n("v-uni-view", { staticClass: "confirm", class: t.confirmClass }, [n("v-uni-view", { staticClass: "jt" }), n("v-uni-text", [t._v(t._s(t.mainText[t.currentTextIndex].confirmText))])], 1)], 1), n("v-uni-view", { staticClass: "yBtn", on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.back.apply(void 0, arguments) } } }, [n("yBtn", { attrs: { buttonType: "text", text: "返回", stopFlash: "no" } })], 1), n("v-uni-view", { staticClass: "my" }, [n("v-uni-text", [t._v(t._s(t.my.name))]), n("v-uni-image", { attrs: { src: "/unisg/static/images/ws1.png", mode: "scaleToFill" } })], 1)], 1)], 1) },
                o = [] }, df28: function(t, e, n) { t.exports = n.p + "static/img/game_tit.8776e22e.png" }, e33d: function(t, e, n) { "use strict";
            n.r(e); var a = n("2d1d"),
                i = n.n(a); for (var o in a) "default" !== o && function(t) { n.d(e, t, (function() { return a[t] })) }(o);
            e["default"] = i.a }, fd11: function(t, e, n) { var a = n("5324"); "string" === typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals); var i = n("4f06").default;
            i("0e8fd513", a, !0, { sourceMap: !1, shadowMode: !1 }) }, fe08: function(t, e, n) { "use strict"; var a = n("d704"),
                i = n.n(a);
            i.a } }
]);