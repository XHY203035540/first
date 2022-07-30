(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-gongNeng-wuPin-articlesDetail-articlesDetail"], { "1d3b": function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return i })), n.d(e, "c", (function() { return r })), n.d(e, "a", (function() { return a })); var a = { myBar: n("dd55").default, towBorder: n("39a9").default, colorsBtn: n("994c").default, yBtn: n("7c7e").default },
                i = function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("v-uni-view", { staticClass: "outerr" }, [n("myBar"), n("v-uni-view", { staticClass: "outer" }, [n("towBorder", { staticStyle: { "z-index": "4" } }), n("v-uni-view", { staticClass: "title" }, [n("v-uni-text", [t._v(t._s(t.article.name))])], 1), n("v-uni-scroll-view", { staticClass: "ulClass", attrs: { "scroll-y": "true" } }, [n("v-uni-image", { attrs: { src: "/unisg/static/images/" + t.describe[t.article.name].pic + ".png", mode: "scaleToFill" } }), n("v-uni-view", { staticClass: "liClass" }, [n("v-uni-text", [t._v("名称:" + t._s(t.article.name) + "\\n")]), n("v-uni-text", [t._v("剩余数量：" + t._s(t.article.leftnum) + "\\n介绍：\\n")]), n("v-uni-text", { staticStyle: { "padding-left": "70rpx" } }, [t._v(t._s(t.describe[t.article.name].des) + "\\n")]), t._l(t.btns, (function(e, a) { return n("v-uni-view", { key: e.name, staticClass: "btn", on: { click: function(n) { arguments[0] = n = t.$handleEvent(n), t.tapBtn(e) } } }, [n("colorsBtn", { attrs: { color: "p", text: e.name, flashOnce: !0 } })], 1) }))], 2)], 1), n("v-uni-view", { staticClass: "backBtn", on: { click: function(e) { arguments[0] = e = t.$handleEvent(e), t.back.apply(void 0, arguments) } } }, [n("yBtn", { attrs: { buttonType: "text", text: "返回", stopFlash: "no" } })], 1)], 1)], 1) },
                r = [] }, "210c": function(t, e, n) { "use strict"; var a = n("95c3"),
                i = n.n(a);
            i.a }, "5d06": function(t, e, n) { "use strict";
            n.r(e); var a = n("b1e9"),
                i = n.n(a); for (var r in a) "default" !== r && function(t) { n.d(e, t, (function() { return a[t] })) }(r);
            e["default"] = i.a }, "90a1": function(t, e, n) { "use strict";
            n.r(e); var a = n("1d3b"),
                i = n("5d06"); for (var r in i) "default" !== r && function(t) { n.d(e, t, (function() { return i[t] })) }(r);
            n("210c"); var u, o = n("f0c5"),
                s = Object(o["a"])(i["default"], a["b"], a["c"], !1, null, "1ed57b42", null, !1, a["a"], u);
            e["default"] = s.exports }, "95c3": function(t, e, n) { var a = n("c37e"); "string" === typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals); var i = n("4f06").default;
            i("1b4d6a3a", a, !0, { sourceMap: !1, shadowMode: !1 }) }, b1e9: function(t, e, n) { "use strict";
            (function(t) { var a = n("4ea4");
                Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, n("96cf"); var i = a(n("1da1")),
                    r = a(n("e5d9")),
                    u = { onLoad: function(t) { this.article = JSON.parse(t.article), this.describe = r.default, this.initt() }, data: function() { return { article: null, describe: null, btns: [] } }, methods: { initt: function() { switch (this.article.name) {
                                    case "将军令":
                                        this.btns.push({ index: "0", fun: "0", name: "副将培养" }, { index: "0", fun: "1", name: "副将招募" }); break;
                                    case "大将军令":
                                        this.btns.push({ index: "1", fun: "0", name: "副将重修" }, { index: "1", fun: "1", name: "副将招募" }); break;
                                    case "体力丹":
                                        this.btns.push({ index: "2", fun: "0", name: "使用" }); break;
                                    default:
                                        break } }, tapBtn: function(t) { this["fun" + t.index + t.fun]() }, fun00: function() { uni.navigateTo({ url: "/pages/selectGeneral/selectGeneral?fun=tokenTrain" }) }, fun01: function() { uni.navigateTo({ url: "/pages/gongNeng/baoKu/generalBook/generalBook" }) }, fun10: function() { uni.navigateTo({ url: "/pages/selectGeneral/selectGeneral?fun=tokenRemake" }) }, fun11: function() { this.fun01() }, fun20: function() { var e = this;
                                uni.showModal({ content: "是否使用体力丹?", success: function() { var n = (0, i.default)(regeneratorRuntime.mark((function n(a) { var i; return regeneratorRuntime.wrap((function(n) { while (1) switch (n.prev = n.next) {
                                                    case 0:
                                                        if (!a.confirm) { n.next = 7; break } return uni.showLoading({ title: "", mask: !0 }), n.next = 4, t.callFunction({ name: "MY-USERFUNCTION", data: { action: "useTiLiDan", params: { accountId: uni.getStorageSync("accountId") } } });
                                                    case 4:
                                                        i = n.sent, uni.hideLoading(), i.result.errCode ? uni.showModal({ content: i.result.msg, showCancel: !1 }) : (e.article.leftnum--, uni.showModal({ content: "使用体力丹成功！", showCancel: !1 }));
                                                    case 7:
                                                    case "end":
                                                        return n.stop() } }), n) })));

                                        function a(t) { return n.apply(this, arguments) } return a }() }) }, back: function() { uni.navigateBack() } } };
                e.default = u }).call(this, n("a9ff")["default"]) }, c37e: function(t, e, n) { var a = n("24fb");
            e = a(!1), e.push([t.i, ".lightBG[data-v-1ed57b42]{background-color:#192152}.btn[data-v-1ed57b42]{margin-top:%?30?%}.outerr .outer[data-v-1ed57b42]{position:relative;height:%?936?%;overflow:hidden;background-color:#310030;box-sizing:border-box}.outerr .outer .title[data-v-1ed57b42]{margin-top:%?10?%;position:absolute;width:100%;text-align:center;color:#ffbeb8;font-weight:600}.outerr .outer .ulClass[data-v-1ed57b42]{height:%?720?%;margin-top:%?70?%;box-sizing:border-box;position:relative}.outerr .outer .ulClass uni-image[data-v-1ed57b42]{position:absolute;right:%?120?%;height:%?180?%;width:%?180?%}.outerr .outer .ulClass .liClass[data-v-1ed57b42]{padding:0 %?100?%;height:%?70?%;line-height:%?70?%}.outerr .outer .backBtn[data-v-1ed57b42]{z-index:6;position:absolute;bottom:%?50?%;left:%?40?%}", ""]), t.exports = e }, e5d9: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var a = { "将军令": { des: "用来培养副将的各项属性，也可到招贤馆招募副将，可随机获得英才副将", pic: "i_68" }, "大将军令": { des: "用于重修副将，可将副将的等级清为0级，重新培养，也可到招贤馆用于招募副将，可以随机获得英才副将或将才副将", pic: "i_69" }, "体力丹": { des: "使用体力丹可以增加50点体力，开启体力值战斗可以获得3倍经验值，每天至多使用3个体力丹", pic: "i_82" } };
            e.default = a } }
]);