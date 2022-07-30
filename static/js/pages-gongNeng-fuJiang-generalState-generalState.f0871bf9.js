(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-gongNeng-fuJiang-generalState-generalState"], { "0116": function(t, n, e) { "use strict";
            (function(t, a) { var i = e("4ea4");
                e("e25e"), Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, e("96cf"); var o = i(e("1da1")),
                    r = t.database(),
                    s = { onLoad: function(n) { var e = this;
                            this.myInf = JSON.parse(n.myInf), t.callFunction({ name: "generalBook", data: { name: this.myInf.nikename } }).then((function(t) { var n = t.result;
                                e.headP = n[1].headPicture })); var a = this.myInf.exp,
                                i = 1,
                                o = function(t) { return 150 * t - 50 },
                                r = function(t) { return 218.43 * Math.pow(t, 2) - 4439.85 * t + 24553 };
                            a - 7750 < 0 ? r = o : (a -= 7750, i = 11); while (1) { var s = r(i); if (!(s <= a)) break;++i, a -= s }
                            this.needExp = parseInt(r(i) - a) }, data: function() { return { headP: null, needExp: null, title: null, myInf: null } }, methods: { fire: function() { var t = this;
                                uni.showModal({ content: "你确定解雇" + this.myInf.nikename + "吗?", cancelText: "否", confirmText: "是", success: function() { var n = (0, o.default)(regeneratorRuntime.mark((function n(e) { return regeneratorRuntime.wrap((function(n) { while (1) switch (n.prev = n.next) {
                                                    case 0:
                                                        if (a.log(JSON.stringify(uni.getStorageSync("uni_id_token"))), !e.confirm) { n.next = 7; break } return uni.showLoading({ title: "", showCancel: !1 }), n.next = 5, r.collection("general").where({ _id: t.myInf._id }).remove();
                                                    case 5:
                                                        uni.hideLoading(), uni.navigateTo({ url: "/pages/gongNeng/fuJiang/fuJiang" });
                                                    case 7:
                                                    case "end":
                                                        return n.stop() } }), n) })));

                                        function e(t) { return n.apply(this, arguments) } return e }() }) }, showId: function() { uni.showModal({ editable: !0, content: this.myInf._id, showCancel: !1 }) }, back: function() { uni.navigateTo({ url: "/pages/main/main" }) } } };
                n.default = s }).call(this, e("a9ff")["default"], e("5a52")["default"]) }, "13a4": function(t, n, e) { "use strict";
            e.d(n, "b", (function() { return i })), e.d(n, "c", (function() { return o })), e.d(n, "a", (function() { return a })); var a = { myBar: e("dd55").default, towBorder: e("39a9").default, colorsBtn: e("994c").default, yBtn: e("7c7e").default },
                i = function() { var t = this,
                        n = t.$createElement,
                        e = t._self._c || n; return e("v-uni-view", { staticClass: "outerr" }, [e("myBar"), t.myInf ? e("v-uni-view", { staticClass: "outer" }, [e("towBorder", { staticStyle: { "z-index": "4" } }), e("v-uni-view", { staticClass: "title" }, [e("v-uni-text", [t._v(t._s("副将-" + t.myInf.nikename))])], 1), e("v-uni-scroll-view", { staticClass: "ulClass", attrs: { "scroll-y": "true" } }, [e("v-uni-image", { staticClass: "headImg", attrs: { src: "/unisg/static/images/" + t.headP + ".png", mode: "scaleToFill" } }), e("v-uni-text", [t._v("id：")]), e("v-uni-view", { staticClass: "btn", on: { click: function(n) { arguments[0] = n = t.$handleEvent(n), t.showId.apply(void 0, arguments) } } }, [e("colorsBtn", { attrs: { color: "b", text: "查看id", flashOnce: !0 } })], 1), e("v-uni-text", [t._v("\\n职业：" + t._s(t.myInf.level) + "级" + t._s("ws" == t.myInf.occupation ? "武士" : "wr" == t.myInf.occupation ? "文人" : "异人") + "\\n")]), e("v-uni-text", [t._v("升级：需要" + t._s(t.needExp) + "经验\\n")]), e("v-uni-navigator", { attrs: { "animation-type": "none", url: "/pages/gongNeng/roleState/skills/skills?skills=" + JSON.stringify(t.myInf.skills) } }, [e("colorsBtn", { attrs: { color: "b", text: "查看技能", flashOnce: !0 } })], 1), e("v-uni-text", [t._v("属性点分配：" + t._s(t.myInf.leftgift) + "点未分配" + t._s(" "))]), e("v-uni-navigator", { staticClass: "btn", attrs: { "animation-type": "none", url: "/pages/gongNeng/roleState/setGifts/setGifts?myInf=" + JSON.stringify(t.myInf) } }, [e("colorsBtn", { attrs: { color: "r", text: "分配", flashOnce: !0 } })], 1), e("v-uni-text", { staticStyle: { color: "#ffbeb8" } }, [t._v("\\n气血：" + t._s(t.myInf.hp) + "/" + t._s(t.myInf.maxhp) + "\\n")]), e("v-uni-text", { staticStyle: { color: "#605CD8" } }, [t._v("精力：" + t._s(t.myInf.mp) + "/" + t._s(t.myInf.maxmp) + "\\n")]), e("v-uni-text", [t._v("攻击：" + t._s(t.myInf.power) + "\\n")]), e("v-uni-text", [t._v("速度：" + t._s(t.myInf.speed) + "\\n")]), e("v-uni-text", [t._v("防御：" + t._s(parseInt(t.myInf.maxhp / 20)) + "\\n")]), e("v-uni-view", { staticClass: "liclass" }, [e("v-uni-navigator", { staticClass: "liItem", attrs: { "animation-type": "none", url: "/pages/gongNeng/roleState/attribute/attribute?attribute=" + JSON.stringify(t.myInf.attribute) } }, [e("colorsBtn", { attrs: { color: "b", text: "战斗能力", flashOnce: !0 } })], 1), e("v-uni-navigator", { staticClass: "liItem", attrs: { "animation-type": "none", url: "/pages/gongNeng/fuJiang/generalState/tokenTrain/tokenTrain?general=" + JSON.stringify(t.myInf) } }, [e("colorsBtn", { attrs: { color: "b", text: "副将培养", flashOnce: !0 } })], 1), e("v-uni-view", { staticClass: "liItem", on: { click: function(n) { arguments[0] = n = t.$handleEvent(n), t.fire.apply(void 0, arguments) } } }, [e("colorsBtn", { attrs: { color: "b", text: "解雇副将", flashOnce: !0 } })], 1)], 1), e("v-uni-text", [t._v("\\n\\n")])], 1), e("v-uni-view", { staticClass: "backBtn", on: { click: function(n) { arguments[0] = n = t.$handleEvent(n), t.back.apply(void 0, arguments) } } }, [e("yBtn", { attrs: { buttonType: "text", text: "返回", stopFlash: "no" } })], 1)], 1) : t._e()], 1) },
                o = [] }, "544d": function(t, n, e) { var a = e("24fb");
            n = a(!1), n.push([t.i, ".btn[data-v-46fd5b05]{display:inline-block}.outerr .outer[data-v-46fd5b05]{position:relative;height:%?936?%;overflow:hidden;background-color:#000131;box-sizing:border-box}.outerr .outer .title[data-v-46fd5b05]{margin-top:%?10?%;position:absolute;width:100%;text-align:center;color:#ffbeb8;font-weight:600}.outerr .outer .ulClass[data-v-46fd5b05]{position:relative;height:%?760?%;margin-top:%?80?%;box-sizing:border-box;padding:0 %?100?%;line-height:%?60?%}.outerr .outer .ulClass .liclass[data-v-46fd5b05]{line-height:%?80?%}.outerr .outer .ulClass .liclass .liItem[data-v-46fd5b05]{display:inline-block;margin-right:%?80?%}.outerr .outer .ulClass .headImg[data-v-46fd5b05]{position:absolute;width:%?180?%;height:%?180?%;top:%?0?%;right:%?0?%}.outerr .outer .backBtn[data-v-46fd5b05]{z-index:6;position:absolute;bottom:%?50?%;left:%?40?%}", ""]), t.exports = n }, 6207: function(t, n, e) { "use strict";
            e.r(n); var a = e("13a4"),
                i = e("78f3"); for (var o in i) "default" !== o && function(t) { e.d(n, t, (function() { return i[t] })) }(o);
            e("fd91"); var r, s = e("f0c5"),
                l = Object(s["a"])(i["default"], a["b"], a["c"], !1, null, "46fd5b05", null, !1, a["a"], r);
            n["default"] = l.exports }, 7351: function(t, n, e) { var a = e("544d"); "string" === typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals); var i = e("4f06").default;
            i("3bc4f9d0", a, !0, { sourceMap: !1, shadowMode: !1 }) }, "78f3": function(t, n, e) { "use strict";
            e.r(n); var a = e("0116"),
                i = e.n(a); for (var o in a) "default" !== o && function(t) { e.d(n, t, (function() { return a[t] })) }(o);
            n["default"] = i.a }, fd91: function(t, n, e) { "use strict"; var a = e("7351"),
                i = e.n(a);
            i.a } }
]);