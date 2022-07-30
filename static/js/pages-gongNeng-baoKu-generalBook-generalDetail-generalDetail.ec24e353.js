(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-gongNeng-baoKu-generalBook-generalDetail-generalDetail"], { "0774": function(t, e, n) { "use strict"; var a = n("4549"),
                r = n.n(a);
            r.a }, "0dee": function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var a = { "龙飞卫": "龙飞卫的生平", "打手": "打手的生平", "道姑": "道姑的生平", "臧霸": "臧霸的生平", "陈圭": "陈圭的生平", "鲁肃": "鲁肃的生平", "荀彧": "荀彧的生平" };
            e.default = a }, "1ce2": function(t, e, n) { var a = n("24fb");
            e = a(!1), e.push([t.i, ".btn[data-v-2004dd54]{display:inline-block;margin-left:%?20?%}.outerr .outer[data-v-2004dd54]{position:relative;height:%?936?%;overflow:hidden;background-color:#310030;box-sizing:border-box}.outerr .outer uni-image[data-v-2004dd54]{position:absolute;top:%?85?%;right:%?100?%;width:%?180?%;height:%?180?%}.outerr .outer .title[data-v-2004dd54]{margin-top:%?10?%;position:absolute;width:100%;text-align:center;color:#ffbeb8;font-weight:600}.outerr .outer .ulClass[data-v-2004dd54]{height:%?720?%;margin-top:%?50?%;box-sizing:border-box;padding:0 %?100?%}.outerr .outer .ulClass .story[data-v-2004dd54]{color:#3f5dcd}.outerr .outer .ulClass .liClass[data-v-2004dd54]{line-height:%?70?%;margin:%?20?% 0}.outerr .outer .backBtn[data-v-2004dd54]{z-index:6;position:absolute;bottom:%?50?%;left:%?40?%}", ""]), t.exports = e }, 4549: function(t, e, n) { var a = n("1ce2"); "string" === typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals); var r = n("4f06").default;
            r("61f1fade", a, !0, { sourceMap: !1, shadowMode: !1 }) }, 5098: function(t, e, n) { "use strict"; var a = n("4ea4");
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var r = a(n("0dee")),
                i = { onLoad: function(t) { this.generalInf = JSON.parse(t.inf), this.storyText = r.default[this.generalInf.name] }, data: function() { return { storyText: null, generalInf: null } }, methods: { explain: function() { uni.showModal({ content: "初值都不知道有什么用，你活着干嘛", showCancel: !1 }) }, back: function() { uni.navigateBack() } } };
            e.default = i }, 9622: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return r })), n.d(e, "c", (function() { return i })), n.d(e, "a", (function() { return a })); var a = { myBar: n("dd55").default, towBorder: n("39a9").default, colorsBtn: n("994c").default, yBtn: n("7c7e").default },
                r = function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("v-uni-view", { staticClass: "outerr" }, [n("myBar"), n("v-uni-view", { staticClass: "outer" }, [n("towBorder", { staticStyle: { "z-index": "4" } }), n("v-uni-image", { attrs: { src: "/unisg/static/images/" + t.generalInf.headPicture + ".png", mode: "scaleToFill" } }), n("v-uni-view", { staticClass: "title" }, [n("v-uni-text", [t._v("副将")])], 1), n("v-uni-scroll-view", { staticClass: "ulClass", attrs: { "scroll-y": "true" } }, [n("v-uni-view", { staticClass: "liClass" }, [n("v-uni-text", [t._v("副将：" + t._s(t.generalInf.name) + "\\n")]), n("v-uni-text", [t._v("头衔：" + t._s(0 == t.generalInf.type ? "常人" : 1 == t.generalInf.type ? "英才" : "将才") + "\\n")]), n("v-uni-text", [t._v("成长率：" + t._s(t.generalInf.upRate[0]) + "-" + t._s(t.generalInf.upRate[1]) + "\\n")]), n("v-uni-text", [t._v("气血初值：" + t._s(t.generalInf.hpRate[0]) + "-" + t._s(t.generalInf.hpRate[1]) + "\\n")]), n("v-uni-text", [t._v("智力初值：" + t._s(t.generalInf.mpRate[0]) + "-" + t._s(t.generalInf.mpRate[1]) + "\\n")]), n("v-uni-text", [t._v("攻击初值：" + t._s(t.generalInf.powerRate[0]) + "-" + t._s(t.generalInf.powerRate[1]) + "\\n")]), n("v-uni-text", [t._v("速度初值：" + t._s(t.generalInf.speedRate[0]) + "-" + t._s(t.generalInf.speedRate[1]))]), n("v-uni-view", { staticClass: "btn", on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.explain.apply(void 0, arguments) } } }, [n("colorsBtn", { attrs: { color: "p", text: "初值说明", flashOnce: !0 } })], 1)], 1), n("v-uni-text", { staticClass: "story" }, [t._v("生平：" + t._s(t.storyText))])], 1), n("v-uni-view", { staticClass: "backBtn", on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.back.apply(void 0, arguments) } } }, [n("yBtn", { attrs: { buttonType: "text", text: "返回", stopFlash: "no" } })], 1)], 1)], 1) },
                i = [] }, eb07: function(t, e, n) { "use strict";
            n.r(e); var a = n("9622"),
                r = n("f0dd"); for (var i in r) "default" !== i && function(t) { n.d(e, t, (function() { return r[t] })) }(i);
            n("0774"); var o, s = n("f0c5"),
                l = Object(s["a"])(r["default"], a["b"], a["c"], !1, null, "2004dd54", null, !1, a["a"], o);
            e["default"] = l.exports }, f0dd: function(t, e, n) { "use strict";
            n.r(e); var a = n("5098"),
                r = n.n(a); for (var i in a) "default" !== i && function(t) { n.d(e, t, (function() { return a[t] })) }(i);
            e["default"] = r.a } }
]);