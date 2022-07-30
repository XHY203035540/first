(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-fightSettle-fightSettle"], {
        "122c": function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a("1866"),
                r = a.n(o);
            for (var i in o) "default" !== i && function(t) { a.d(e, t, (function() { return o[t] })) }(i);
            e["default"] = r.a
        },
        1610: function(t, e, a) {
            "use strict";
            var o = a("3d40"),
                r = a.n(o);
            r.a
        },
        1866: function(t, e, a) {
            "use strict";
            var o = a("4ea4");
            a("7db0"), a("caad"), a("d3b7"), a("25f0"), a("2532"), Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
            var r = o(a("5530")),
                i = o(a("b85c")),
                n = a("26cb"),
                s = {
                    onLoad: function(t) {
                        var e = this;
                        "true" == t.isVic ? (this.isVic = !0, this.colors = this.vicColor) : this.colors = this.defColor, this.jumpTo = t.jumpTo, this.horseNum = t.horse;
                        for (var a = JSON.parse(t.roles), o = 0; o < a.length; o++) {
                            var r = a[o],
                                n = "yr" == r.occupation ? -12 : (r.occupation, 0),
                                s = "yr" == r.occupation || "wr" == r.occupation ? 14 : 0,
                                c = "yr" == r.occupation ? 34 : "wr" == r.occupation ? 2 : 0,
                                l = "yr" == r.occupation ? 2 : 0,
                                d = "yr" == r.occupation ? 8 : "wr" == r.occupation ? 10 : 0,
                                u = "yr" == r.occupation ? -12 : "wr" == r.occupation ? -18 : 0,
                                f = "yr" == r.occupation ? -6 : "wr" == r.occupation ? -4 : 0;
                            r.style = { left: o % 2 ? "20rpx" : "90rpx" }, r.bodyStyle = { width: "".concat(72 + c, "rpx"), top: "".concat(64 + n, "rpx"), left: "".concat(-8 + s, "rpx") }, r.footStyle = { width: "".concat(62 + u, "rpx"), height: "".concat(36 + f, "rpx"), top: "".concat(88 + l, "rpx"), left: "".concat(8 + d, "rpx") }
                        }
                        this.roles = a;
                        var v = setInterval((function() {
                            if (e.$store.state.expArr) {
                                clearInterval(v);
                                var t, a = (0, i.default)(e.$store.state.expArr);
                                try {
                                    var o = function() {
                                        var a = t.value,
                                            o = a.exp.toString().includes("-") ? a.exp : "+" + a.exp;
                                        e.roles.find((function(t) { return t.id == a.id })).exp = o
                                    };
                                    for (a.s(); !(t = a.n()).done;) o()
                                } catch (r) { a.e(r) } finally { a.f() }
                                e.$store.commit("setExpArr", void 0)
                            }
                        }), 50)
                    },
                    data: function() {
                        return {
                            jumpTo: void 0,
                            cantTapClass: "",
                            msgArr: [
                                [404, "经验"]
                            ],
                            isVic: !1,
                            expItv: null,
                            expStyle: { color: "#FFF5ED" },
                            horseNum: null,
                            roles: null,
                            colors: null,
                            vicColor: { img: "f_sl", outerBgc: "#bf6719", mainBgc: "#deba72", mainLiBgc: "#de6100", border2C: "#b76d20", elseBorder2: "#663606", border3C: "#e0880d", elseBorder3: "#7D4D0D", color1C: "#ee9a00", elseColor1: "#865900", color2C: "#de6100", elseColor2: "#7B3900" },
                            defColor: { img: "f_bb", outerBgc: "#5B5D5B", mainBgc: "#2A2C29", mainLiBgc: "#555856", border2C: "#6C6C6E", elseBorder2: "#303030", border3C: "#707070", elseBorder3: "#3B3C3A", color1C: "#747174", elseColor1: "#414141", color2C: "#292D29", elseColor2: "#292D29" }
                        }
                    },
                    methods: {
                        conti: function() {
                            var t = this,
                                e = "战斗惜败,损失";
                            this.isVic && (e = "恭喜你获得"), void 0 === this.$store.state["gapSilver"] && uni.showLoading({ title: "", mask: !0 });
                            var a = setInterval((function() { 0 === t.$store.state["gapSilver"] && (uni.hideLoading(), clearInterval(a), r()), t.$store.state["gapSilver"] && (uni.hideLoading(), clearInterval(a), uni.showModal({ showCancel: !1, content: e + t.gapSilver + "银两", success: function(t) { r() } })) }), 50),
                                o = this;

                            function r() { o.$store.commit("setGapSilver", void 0); var t = setInterval((function() { o.$store.state.pagesInf["main"] && o.$store.state.pagesInf["mainChart"] && (clearInterval(t), "main" == o.jumpTo ? uni.navigateTo({ url: "/pages/main/main" }) : uni.navigateBack()) }), 50) }
                        }
                    },
                    created: function() {
                        var t = this;
                        this.isVic && (this.expItv = setInterval((function() { "#FFEA13" == t.expStyle.color ? t.expStyle.color = "#FFF5ED" : t.expStyle.color = "#FFEA13" }), 50))
                    },
                    computed: (0, r.default)({}, (0, n.mapState)({ gapSilver: function(t) { return t.gapSilver } })),
                    beforeDestroy: function() { clearInterval(this.expItv) }
                };
            e.default = s
        },
        "1c96": function(t, e, a) {
            var o = a("24fb"),
                r = a("1de5"),
                i = a("5719"),
                n = a("6138");
            e = o(!1);
            var s = r(i),
                c = r(n);
            e.push([t.i, ".towBorderOuter[data-v-0faa2a86]{width:100%;position:absolute;top:0;height:%?936?%;pointer-events:none}.towBorderOuter .towBorderBoth[data-v-0faa2a86]{position:absolute;height:100%;width:%?71?%;background-size:cover;background-repeat:no-repeat}.towBorderOuter .towBorderLeft[data-v-0faa2a86]{left:0;background-image:url(" + s + ");-webkit-animation:towBorderLeftIn-data-v-0faa2a86 .5s;animation:towBorderLeftIn-data-v-0faa2a86 .5s}@-webkit-keyframes towBorderLeftIn-data-v-0faa2a86{from{background-position:%?-71?% 0}}@keyframes towBorderLeftIn-data-v-0faa2a86{from{background-position:%?-71?% 0}}.towBorderOuter .towBorderRight[data-v-0faa2a86]{right:0;background-image:url(" + c + ");-webkit-animation:towBorderRightIn-data-v-0faa2a86 .5s;animation:towBorderRightIn-data-v-0faa2a86 .5s}@-webkit-keyframes towBorderRightIn-data-v-0faa2a86{from{background-position:%?71?% 0}}@keyframes towBorderRightIn-data-v-0faa2a86{from{background-position:%?71?% 0}}", ""]), t.exports = e
        },
        "1de5": function(t, e, a) {
            "use strict";
            t.exports = function(t, e) { return e || (e = {}), t = t && t.__esModule ? t.default : t, "string" !== typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t) }
        },
        "1eaa": function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() { return r })), a.d(e, "c", (function() { return i })), a.d(e, "a", (function() { return o }));
            var o = { myBar: a("dd55").default, towBorder: a("39a9").default },
                r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("v-uni-view", [a("myBar"), a("v-uni-view", { staticClass: "fightSettle", style: "background-color: " + t.colors.outerBgc + ";", on: { "~click": function(e) { arguments[0] = e = t.$handleEvent(e), t.conti.apply(void 0, arguments) } } }, [a("towBorder", { staticClass: "towBorder" }), a("v-uni-view", { staticClass: "outer", style: "background-color: " + t.colors.outerBgc + ";" }, [a("v-uni-view", { staticClass: "title" }, [a("v-uni-image", { attrs: { src: "/unisg/zgzj.png", mode: "aspectFill" } })], 1), a("v-uni-view", { staticClass: "mainPart", style: "background-color: " + t.colors.mainBgc + ";border-color: " + t.colors.outerBgc + ";" }, [a("v-uni-image", { staticClass: "mainImg", attrs: { src: "/unisg/static/images/" + t.colors.img + ".png", mode: "aspectFill" } }), a("v-uni-view", { staticClass: "mainUl" }, t._l(4, (function(e) { return a("v-uni-view", { key: e, staticClass: "mainLi", style: "background-color: " + t.colors.mainLiBgc + ";" }, [a("v-uni-view", { staticClass: "border2", style: "border-color: " + (t.roles.length >= e ? t.colors.border2C : t.colors.elseBorder2) + ";" }, [a("v-uni-view", { staticClass: "border3", style: "border-color: " + (t.roles.length >= e ? t.colors.border3C : t.colors.elseBorder3) + ";" }, [a("v-uni-view", { staticClass: "color1", style: "background-color: " + (t.roles.length >= e ? t.colors.color1C : t.colors.elseColor1) + ";" }), a("v-uni-view", { staticClass: "color2", style: "background-color: " + (t.roles.length >= e ? t.colors.color2C : t.colors.elseColor2) + ";" }), 1 == e ? a("v-uni-image", { staticClass: "horse", attrs: { src: "/unisg/static/images/ho_" + t.horseNum + ".png", mode: "aspectFill" } }) : t._e(), t.roles.length >= e ? a("v-uni-view", { staticClass: "role", style: t.roles[e - 1].style }, [a("v-uni-image", { staticClass: "head", attrs: { src: "/unisg/static/images/" + t.roles[e - 1].headImg + ".png", mode: "aspectFill" } }), a("v-uni-image", { staticClass: "body", style: t.roles[e - 1].bodyStyle, attrs: { src: "/unisg/static/images/" + t.roles[e - 1].bodyImg + ".png", mode: "left" } }), a("v-uni-image", { staticClass: "foot", style: t.roles[e - 1].footStyle, attrs: { src: "/unisg/static/images/" + t.roles[e - 1].footImg + ".png", mode: "left" } })], 1) : t._e(), t.roles.length >= e ? a("v-uni-text", { staticClass: "nikeName" }, [t._v(t._s(t.roles[e - 1].nikeName))]) : t._e(), t.roles.length >= e ? a("v-uni-text", { staticClass: "exp", style: t.expStyle }, [t._v(t._s(t.roles[e - 1].exp))]) : t._e()], 1)], 1)], 1) })), 1), a("v-uni-text", { staticClass: "conti" }, [t._v("点击屏幕继续")])], 1)], 1)], 1)], 1)
                },
                i = []
        },
        "2d1d": function(t, e, a) {
            "use strict";
            var o = a("4ea4");
            a("ac1f"), a("5319"), Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
            var r = o(a("5530")),
                i = a("26cb"),
                n = {
                    name: "myBar",
                    data: function() { return { showTitle: !0, hasNotice: !1, flashItv: null, noticeStyle: { backgroundPositionX: "0rpx" } } },
                    methods: {
                        readMsg: function() { uni.navigateTo({ url: "/pages/gongNeng/xi/xi" }) },
                        stopp: function() { clearInterval(this.flashItv), this.flashItv = null },
                        flashXi: function() {
                            var t = this;
                            this.flashItv || (this.flashItv = setInterval((function() { "0rpx" == t.noticeStyle.backgroundPositionX ? t.noticeStyle.backgroundPositionX = "-59.5rpx" : t.noticeStyle.backgroundPositionX = "0rpx" }), 50))
                        }
                    },
                    computed: (0, r.default)({}, (0, i.mapState)({ newMsg: function(t) { return t.newMsg }, titleName: function(t) { return t.positionInf.currentTImg }, titleText: function(t) { return t.positionInf.currentText.replace("返回", "") } })),
                    watch: {
                        newMsg: function(t) { t ? (this.hasNotice = !0, this.flashXi()) : (this.hasNotice = !1, this.stopp()) },
                        titleName: function() {
                            var t = this;
                            this.showTitle = !1, setTimeout((function() { t.showTitle = !0 }), 100)
                        }
                    }
                };
            e.default = n
        },
        "389b": function(t, e, a) {
            "use strict";
            var o = a("cb079"),
                r = a.n(o);
            r.a
        },
        "39a9": function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a("5c40"),
                r = a("584f");
            for (var i in r) "default" !== i && function(t) { a.d(e, t, (function() { return r[t] })) }(i);
            a("1610");
            var n, s = a("f0c5"),
                c = Object(s["a"])(r["default"], o["b"], o["c"], !1, null, "0faa2a86", null, !1, o["a"], n);
            e["default"] = c.exports
        },
        "3d40": function(t, e, a) {
            var o = a("1c96");
            "string" === typeof o && (o = [
                [t.i, o, ""]
            ]), o.locals && (t.exports = o.locals);
            var r = a("4f06").default;
            r("4ec72d81", o, !0, { sourceMap: !1, shadowMode: !1 })
        },
        5719: function(t, e, a) { t.exports = a.p + "static/img/bd_l.cab351d1.png" },
        "584f": function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a("d8a4"),
                r = a.n(o);
            for (var i in o) "default" !== i && function(t) { a.d(e, t, (function() { return o[t] })) }(i);
            e["default"] = r.a
        },
        "5c40": function(t, e, a) {
            "use strict";
            var o;
            a.d(e, "b", (function() { return r })), a.d(e, "c", (function() { return i })), a.d(e, "a", (function() { return o }));
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("v-uni-view", { staticClass: "towBorderOuter" }, [a("v-uni-view", { staticClass: "towBorderLeft towBorderBoth" }), a("v-uni-view", { staticClass: "towBorderRight towBorderBoth" })], 1)
                },
                i = []
        },
        6138: function(t, e, a) { t.exports = a.p + "static/img/bd_r.0f553a1c.png" },
        "6cda": function(t, e) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAANCAYAAAB1qTppAAAFQUlEQVR42q2YK3TjQAxFAxcGFhYWFhYWFgYWFgYGFhYGBhYGBgYaBhouXBi4cGHYrK5mni07/vR3cnTsjH+y7jxp5MVlMfP7e0qXS9VavUuXzXO6bF+SH1t8/FdX76m26xvbv6b65SnV61Xi2Kd8wQ+2i6/9TsddqqpttveNb790p3+HdHmzeLDtjw/ZVHwOG4uFxePU9YX/QxbP6d4qAuPFMIBZsC+P93bhorXV42QgO8B262wAWz2k+uEu1XaPxuzenDf6in/2XV9ub7IPTCj5wPUGZA5uZZOn2q5TZfepnh5SdbNMld2ren5sYDrYzWoeLmDsvbIvqxYU2/tb8/Xx2kZg1se3VNs9PB7mi0A53LubHLe+BZjdYAEHYLLlsg0YQcR4OcEeg4hTwAGYbPkrOykFYsAtsCcDhm96PhCxw6tlhGNqJuD9XfZ1JvgOEogYELG3l1SZz34chd7dZrjbdRoFKEONPFeQZPa+bvKXfc7brcfVhhqJUYHkccSIHWa+uimWTJ5JRRIkqVDKVKAUvLk0KjVa8BsVSpkWKHfkI+lM/qA2+UFggMq4p9xj9o1jExPMIQENtaFKgAESqDbu51jgHCLHhvwDkr1PJzv1jXMEUGCJJf9/t5PWYTHhY3bqGyAFUMBN7f7f1DoMkoAobSlYqFT7n6hLQPKH4QxbFIjT2qc+zilRKRN/lCWib8A9n/JWapyo254ygWTA3dgXSIN7OrxnyEWN1NFBkKiP56FGKRLfXCE9kMfXFiLj52MXJJOcGKFGKRJQpNc+yN1LB2Id/LsGqQDxYClSqvAU8tSOzYEE2OtzfrAUKZUqhZSxSUXKeDY+kPI1qTD5yr6UOuBfs7jBqI8AszSlxY4bYIHMflFqR5kxnQJO8Hi+AAuk0qmMc/qKFDzACR6wBFgglU5lnDOuyFMOhB5Mqoo1M6qCoE7VSVao61X7YNJprJkyAR2DieKYYDwPgE3NWbYpV2rEn1UJJsfOXXW64kidQASgaiT7SrlFjQ7S3tX/2zGuvVrgzKVWQKJI4HGNauY538tBblYfS62ARJEokWtUM0ttv579BEwLCwKo2khgNIaxAJmrkQDSwgaFqjaiSI1V28aZ63bj2GYHfGBfk4nnA19w8Z2J6H4t2jGpEYCA0iqVfaVYFkCoUnDNJ29PGFf6lSojyP2mVWdMs0M1UmMcL6rsgLRrG3XGNDtUI0+hbBVVXoPEYa1WCYoUqOU/x1jFckzBGwNJ2lRKwCEpUK0Ix1jFcozzYy8Zs4PUx/MiSE0y1UyMMVTJtvS6DoU0qVRa0mUHpFaqqpkYY6iSrf33mhlBAk6pla0WQVGRajtoR7xte2hakA5IwCm1stUiKCpSbQftiNq20oK0AAmMapACpcDF1KVUptRLsII6HQgPV44HnkBFkPynfsbUC9yoTk2sWCeBGuuhekv5RACVNUKv6+CUMmVAjfVQvSVABRUlYwDFlwhSqostBhYVCWD8BWDvw0EHpFQXWwwsKhLA1EYA9j4ctOmUAGkho/ZDfZvUGYOrca4rx5p0qtkDMLUfQFI6KLAa1Wq8OD658NFEUzaIX3sEXbVxrhXRCrak0s7XngJdtfFqwTNk1D5sLLWerz8GjH21afpIpdF+aq2Gvuwwe2OTX9dZecxopdIYFC1AuJmUG1erpYc8b07p9/6QlccsUioNC5u62uc6CdCi3EmQ+PSFz4ODIFGZUubiB3/qGye+5Hz4s6b6xt6XnP5von+ruyntG844zPDJ7ltBmqjLX4H54xD7qv2Bew19W+3//gN8YwHYQeioMAAAAABJRU5ErkJggg==" },
        "752c": function(t, e, a) {
            "use strict";
            var o = a("7b84"),
                r = a.n(o);
            r.a
        },
        "7b84": function(t, e, a) {
            var o = a("b3c9");
            "string" === typeof o && (o = [
                [t.i, o, ""]
            ]), o.locals && (t.exports = o.locals);
            var r = a("4f06").default;
            r("997e4272", o, !0, { sourceMap: !1, shadowMode: !1 })
        },
        b3c9: function(t, e, a) {
            var o = a("24fb"),
                r = a("1de5"),
                i = a("df28"),
                n = a("6cda");
            e = o(!1);
            var s = r(i),
                c = r(n);
            e.push([t.i, ".myBarOuter[data-v-13d06c4c]{margin-top:0;height:%?64?%;background-image:url(" + s + ");background-size:100% 100%;background-repeat:no-repeat}.myBarOuter .myBarContent[data-v-13d06c4c]{position:relative;height:%?64?%;line-height:%?64?%}.myBarOuter .myBarContent uni-image[data-v-13d06c4c]{height:%?64?%;width:%?250?%;margin-left:%?0?%;-webkit-animation:myBarImgT-data-v-13d06c4c 1s;animation:myBarImgT-data-v-13d06c4c 1s}@-webkit-keyframes myBarImgT-data-v-13d06c4c{from{margin-left:%?-150?%}}@keyframes myBarImgT-data-v-13d06c4c{from{margin-left:%?-150?%}}.myBarOuter .myBarContent uni-text[data-v-13d06c4c]{position:absolute;top:45%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:myBarTextT-data-v-13d06c4c 1s;animation:myBarTextT-data-v-13d06c4c 1s}@-webkit-keyframes myBarTextT-data-v-13d06c4c{from{top:0}}@keyframes myBarTextT-data-v-13d06c4c{from{top:0}}.myBarOuter .myBarContent .notice[data-v-13d06c4c]{height:%?41?%;width:%?60?%;position:absolute;top:%?8?%;right:%?7?%;background-image:url(" + c + ");background-size:cover;background-position-x:%?0?%;background-repeat:no-repeat}", ""]), t.exports = e
        },
        cb079: function(t, e, a) {
            var o = a("eedf");
            "string" === typeof o && (o = [
                [t.i, o, ""]
            ]), o.locals && (t.exports = o.locals);
            var r = a("4f06").default;
            r("5f83dcb2", o, !0, { sourceMap: !1, shadowMode: !1 })
        },
        d8a4: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
            var o = { name: "towBorder", data: function() { return {} } };
            e.default = o
        },
        dc5d: function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a("1eaa"),
                r = a("122c");
            for (var i in r) "default" !== i && function(t) { a.d(e, t, (function() { return r[t] })) }(i);
            a("389b");
            var n, s = a("f0c5"),
                c = Object(s["a"])(r["default"], o["b"], o["c"], !1, null, "26af5042", null, !1, o["a"], n);
            e["default"] = c.exports
        },
        dd55: function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a("dd68"),
                r = a("e33d");
            for (var i in r) "default" !== i && function(t) { a.d(e, t, (function() { return r[t] })) }(i);
            a("752c");
            var n, s = a("f0c5"),
                c = Object(s["a"])(r["default"], o["b"], o["c"], !1, null, "13d06c4c", null, !1, o["a"], n);
            e["default"] = c.exports
        },
        dd68: function(t, e, a) {
            "use strict";
            var o;
            a.d(e, "b", (function() { return r })), a.d(e, "c", (function() { return i })), a.d(e, "a", (function() { return o }));
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("v-uni-view", { staticClass: "myBarOuter" }, [t.showTitle ? a("v-uni-view", { staticClass: "myBarContent" }, [a("v-uni-image", { attrs: { src: "/unisg/static/images/" + t.titleName + ".png", mode: "aspectFit" } }), a("v-uni-text", { directives: [{ name: "show", rawName: "v-show", value: t.titleName, expression: "titleName" }] }, [t._v(t._s(t.titleText))]), a("v-uni-view", { directives: [{ name: "show", rawName: "v-show", value: t.hasNotice, expression: "hasNotice" }], staticClass: "notice", style: t.noticeStyle, on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.readMsg.apply(void 0, arguments) } } })], 1) : t._e()], 1)
                },
                i = []
        },
        df28: function(t, e, a) { t.exports = a.p + "static/img/game_tit.8776e22e.png" },
        e33d: function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a("2d1d"),
                r = a.n(o);
            for (var i in o) "default" !== i && function(t) { a.d(e, t, (function() { return o[t] })) }(i);
            e["default"] = r.a
        },
        eedf: function(t, e, a) {
            var o = a("24fb");
            e = o(!1), e.push([t.i, ".fightSettle[data-v-26af5042]{position:relative;height:%?936?%;overflow:hidden}.fightSettle .towBorder[data-v-26af5042]{z-index:99}.fightSettle .outer[data-v-26af5042]{position:absolute;margin:auto;left:0;right:0;width:%?610?%}.fightSettle .outer .title[data-v-26af5042]{height:%?86?%}.fightSettle .outer .title uni-image[data-v-26af5042]{width:100%;height:%?86?%}.fightSettle .outer .mainPart[data-v-26af5042]{box-sizing:border-box;width:%?610?%;border:solid %?10?%;height:%?850?%}.fightSettle .outer .mainPart .conti[data-v-26af5042]{color:#944345;position:absolute;margin:auto;width:%?220?%;left:0;right:0;bottom:%?50?%}.fightSettle .outer .mainPart .mainImg[data-v-26af5042]{position:absolute;z-index:9;top:%?160?%;width:%?480?%;height:%?182?%;margin:auto;left:0;right:0}.fightSettle .outer .mainPart .mainUl[data-v-26af5042]{position:absolute;top:%?370?%;width:%?560?%;margin:auto;left:0;right:0}.fightSettle .outer .mainPart .mainUl .mainLi[data-v-26af5042]{box-sizing:border-box;margin-top:%?20?%;height:%?90?%;border:#120000 solid %?2?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2[data-v-26af5042]{box-sizing:border-box;border:solid %?4?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3[data-v-26af5042]{position:relative;box-sizing:border-box;border:solid %?4?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .nikeName[data-v-26af5042]{position:absolute;margin:auto;top:%?10?%;left:%?250?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .exp[data-v-26af5042]{position:absolute;margin:auto;top:%?10?%;left:%?430?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .role[data-v-26af5042]{position:absolute;top:%?-50?%;width:%?70?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .role .body[data-v-26af5042] div,\n.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .role .foot[data-v-26af5042] div{background-size:cover!important}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .role .head[data-v-26af5042]{z-index:5;height:%?70?%;width:%?70?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .role .body[data-v-26af5042]{z-index:4;position:absolute;height:%?52?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .role .foot[data-v-26af5042]{z-index:3;position:absolute}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .horse[data-v-26af5042]{position:absolute;width:%?172?%;height:%?172?%;left:%?70?%;top:%?-70?%;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .color1[data-v-26af5042]{height:%?34?%}.fightSettle .outer .mainPart .mainUl .mainLi .border2 .border3 .color2[data-v-26af5042]{height:%?34?%}", ""]), t.exports = e
        }
    }
]);