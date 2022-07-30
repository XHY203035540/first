(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-gongNeng-roleState-roleState"], { "0945": function(t, n, e) { "use strict";
            e.r(n); var i = e("95be"),
                a = e.n(i); for (var o in i) "default" !== o && function(t) { e.d(n, t, (function() { return i[t] })) }(o);
            n["default"] = a.a }, "0af9": function(t, n, e) { var i = e("24fb");
            n = i(!1), n.push([t.i, ".btn[data-v-cd7bf0d6]{display:inline-block}.outerr .outer[data-v-cd7bf0d6]{position:relative;height:%?936?%;overflow:hidden;background-color:#000131;box-sizing:border-box}.outerr .outer .noti[data-v-cd7bf0d6]{position:absolute;opacity:.5;font-style:oblique;bottom:%?50?%;right:%?90?%}.outerr .outer .title[data-v-cd7bf0d6]{margin-top:%?10?%;position:absolute;width:100%;text-align:center;color:#ffbeb8;font-weight:600}.outerr .outer .ulClass[data-v-cd7bf0d6]{position:relative;height:%?760?%;margin-top:%?70?%;box-sizing:border-box;padding:0 %?100?%;line-height:%?60?%}.outerr .outer .ulClass .headImg[data-v-cd7bf0d6]{position:absolute;width:%?180?%;height:%?180?%;top:%?0?%;right:%?0?%}.outerr .outer .backBtn[data-v-cd7bf0d6]{z-index:6;position:absolute;bottom:%?50?%;left:%?40?%}", ""]), t.exports = n }, "573a": function(t, n, e) { "use strict"; var i = e("b218"),
                a = e.n(i);
            a.a }, "8e3f": function(t, n, e) { "use strict";
            e.r(n); var i = e("bff7"),
                a = e("0945"); for (var o in a) "default" !== o && function(t) { e.d(n, t, (function() { return a[t] })) }(o);
            e("573a"); var s, r = e("f0c5"),
                l = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "cd7bf0d6", null, !1, i["a"], s);
            n["default"] = l.exports }, "95be": function(t, n, e) { "use strict";
            (function(t) { var i = e("4ea4");
                e("7db0"), e("e25e"), Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, e("96cf"); var a = i(e("1da1")),
                    o = t.database(),
                    s = { data: function() { return { isOpenTiLi: !1, tiLiZhi: "--", needExp: null, title: null, myInf: null } }, onLoad: function(t) { var n = this; return (0, a.default)(regeneratorRuntime.mark((function e() { var i, a, s, r, l, u, c, f, d; return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                        case 0:
                                            uni.showLoading({ title: "", mask: !0 }), n.myInf = JSON.parse(t.myInf), n.title = n.myInf.title.find((function(t) { return t.state })), i = n.myInf.exp, a = 1, s = function(t) { return 150 * t - 50 }, r = function(t) { return 218.43 * Math.pow(t, 2) - 4439.85 * t + 24553 }, i - 7750 < 0 ? r = s : (i -= 7750, a = 11);
                                        case 8:
                                            if (l = r(a), !(l <= i)) { e.next = 15; break }++a, i -= l, e.next = 16; break;
                                        case 15:
                                            return e.abrupt("break", 18);
                                        case 16:
                                            e.next = 8; break;
                                        case 18:
                                            return n.needExp = parseInt(r(a) - i), e.next = 21, o.collection("sign").field({ closetili: !0, tilizhi: !0 }).get();
                                        case 21:
                                            u = e.sent, u = u.result.data[0], c = uni.getStorageSync("accountId"), f = u.closetili, f.find((function(t) { return t == c })) || (n.isOpenTiLi = !0), d = u.tilizhi, n.tiLiZhi = d[c] ? d[c] : 0, uni.hideLoading();
                                        case 29:
                                        case "end":
                                            return e.stop() } }), e) })))() }, methods: { openCloseTiLi: function() { var n = this; return (0, a.default)(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return uni.showLoading({ title: "", mask: !0 }), e.next = 3, t.callFunction({ name: "MY-USERFUNCTION", data: { action: "openCloseTiLi", params: { accountId: uni.getStorageSync("accountId") } } });
                                            case 3:
                                                n.isOpenTiLi = !n.isOpenTiLi, uni.hideLoading();
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) })))() }, showId: function() { uni.showModal({ editable: !0, content: this.myInf._id, showCancel: !1 }) }, back: function() { uni.navigateTo({ url: "/pages/main/main" }) } } };
                n.default = s }).call(this, e("a9ff")["default"]) }, b218: function(t, n, e) { var i = e("0af9"); "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals); var a = e("4f06").default;
            a("614dc01a", i, !0, { sourceMap: !1, shadowMode: !1 }) }, bff7: function(t, n, e) { "use strict";
            e.d(n, "b", (function() { return a })), e.d(n, "c", (function() { return o })), e.d(n, "a", (function() { return i })); var i = { myBar: e("dd55").default, towBorder: e("39a9").default, colorsBtn: e("994c").default, yBtn: e("7c7e").default },
                a = function() { var t = this,
                        n = t.$createElement,
                        e = t._self._c || n; return e("v-uni-view", { staticClass: "outerr" }, [e("myBar"), t.myInf ? e("v-uni-view", { staticClass: "outer" }, [e("towBorder", { staticStyle: { "z-index": "4" } }), e("v-uni-view", { staticClass: "title" }, [e("v-uni-text", [t._v(t._s(t.myInf.nikename))])], 1), e("v-uni-view", { staticClass: "noti" }, [e("v-uni-text", [t._v("(页面可下滑)")])], 1), e("v-uni-scroll-view", { staticClass: "ulClass", attrs: { "scroll-y": "true" } }, [e("v-uni-image", { staticClass: "headImg", attrs: { src: "/unisg/static/images/" + t.myInf.headpicture + ".png", mode: "scaleToFill" } }), e("v-uni-text", [t._v("id：")]), e("v-uni-view", { staticClass: "btn", on: { click: function(n) { arguments[0] = n = t.$handleEvent(n), t.showId.apply(void 0, arguments) } } }, [e("colorsBtn", { attrs: { color: "b", text: "查看id", flashOnce: !0 } })], 1), e("v-uni-text", [t._v("\\n职业：" + t._s(t.myInf.level) + "级" + t._s("ws" == t.myInf.occupation ? "武士" : "wr" == t.myInf.occupation ? "文人" : "异人") + "\\n")]), e("v-uni-text", [t._v("称号：")]), e("v-uni-navigator", { staticStyle: { color: "#ffbeb8", display: "inline-block" }, attrs: { "animation-type": "none", url: "/pages/gongNeng/roleState/selectTitle/selectTitle?titles=" + JSON.stringify(t.myInf.title) } }, [t._v(t._s(t.title ? t.title.text : "无"))]), e("v-uni-navigator", { attrs: { "animation-type": "none", url: "" } }, [e("colorsBtn", { attrs: { color: "b", text: "更换头像", flashOnce: !0 } })], 1), e("v-uni-text", [t._v("升级：需要" + t._s(t.needExp) + "经验\\n")]), e("v-uni-text", [t._v("体力值：" + t._s(t.tiLiZhi + " "))]), e("v-uni-text", { staticStyle: { "font-style": "oblique" } }, [t._v("(" + t._s(t.isOpenTiLi ? "开启中) " : "关闭中) "))]), e("v-uni-view", { staticClass: "btn", on: { click: function(n) { arguments[0] = n = t.$handleEvent(n), t.openCloseTiLi.apply(void 0, arguments) } } }, [e("colorsBtn", { attrs: { color: "r", text: t.isOpenTiLi ? "关闭" : "打开", flashOnce: !0 } })], 1), e("v-uni-text", { staticStyle: { color: "gold" } }, [t._v("\\n钱：" + t._s(t.myInf.gold) + "金" + t._s(" " + t.myInf.silver) + "银\\n")]), e("v-uni-text", [t._v("教派：\\n")]), e("v-uni-navigator", { attrs: { "animation-type": "none", url: "/pages/gongNeng/roleState/skills/skills?skills=" + JSON.stringify(t.myInf.skills) } }, [e("colorsBtn", { attrs: { color: "b", text: "查看技能", flashOnce: !0 } })], 1), e("v-uni-text", [t._v("属性点分配：" + t._s(t.myInf.leftgift) + "点未分配" + t._s(" "))]), e("v-uni-navigator", { staticClass: "btn", attrs: { "animation-type": "none", url: "/pages/gongNeng/roleState/setGifts/setGifts?myInf=" + JSON.stringify(t.myInf) } }, [e("colorsBtn", { attrs: { color: "r", text: "分配", flashOnce: !0 } })], 1), e("v-uni-text", { staticStyle: { color: "#ffbeb8" } }, [t._v("\\n气血：" + t._s(t.myInf.hp) + "/" + t._s(t.myInf.maxhp) + "\\n")]), e("v-uni-text", { staticStyle: { color: "#605CD8" } }, [t._v("精力：" + t._s(t.myInf.mp) + "/" + t._s(t.myInf.maxmp) + "\\n")]), e("v-uni-text", [t._v("攻击：" + t._s(t.myInf.power) + "\\n")]), e("v-uni-text", [t._v("速度：" + t._s(t.myInf.speed) + "\\n")]), e("v-uni-text", [t._v("防御：" + t._s(parseInt(t.myInf.maxhp / 20)) + "\\n")]), e("v-uni-navigator", { attrs: { "animation-type": "none", url: "/pages/gongNeng/roleState/attribute/attribute?attribute=" + JSON.stringify(t.myInf.attribute) + "&occupation=" + t.myInf.occupation } }, [e("colorsBtn", { attrs: { color: "b", text: "战斗能力", flashOnce: !0 } })], 1), e("v-uni-text", [t._v("\\n\\n")])], 1), e("v-uni-view", { staticClass: "backBtn", on: { click: function(n) { arguments[0] = n = t.$handleEvent(n), t.back.apply(void 0, arguments) } } }, [e("yBtn", { attrs: { buttonType: "text", text: "返回", stopFlash: "no" } })], 1)], 1) : t._e()], 1) },
                o = [] } }
]);