// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('re_frame.core');
var G__12875_12877 = cljs.core.cst$kw$components;
var G__12876_12878 = ((function (G__12875_12877){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12875_12877))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12875_12877,G__12876_12878) : re_frame.core.reg_sub.call(null,G__12875_12877,G__12876_12878));
var G__12879_12881 = cljs.core.cst$kw$visible_DASH_components;
var G__12880_12882 = ((function (G__12879_12881){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12879_12881))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12879_12881,G__12880_12882) : re_frame.core.reg_sub.call(null,G__12879_12881,G__12880_12882));
var G__12883_12885 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__12884_12886 = ((function (G__12883_12885){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12883_12885))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12883_12885,G__12884_12886) : re_frame.core.reg_sub.call(null,G__12883_12885,G__12884_12886));
var G__12887_12889 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__12888_12890 = ((function (G__12887_12889){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__12887_12889))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12887_12889,G__12888_12890) : re_frame.core.reg_sub.call(null,G__12887_12889,G__12888_12890));
var G__12891_12900 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__12892_12901 = ((function (G__12891_12900){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12894) : re_frame.core.subscribe.call(null,G__12894));
})(),(function (){var G__12895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12895) : re_frame.core.subscribe.call(null,G__12895));
})()], null);
});})(G__12891_12900))
;
var G__12893_12902 = ((function (G__12891_12900,G__12892_12901){
return (function (p__12896,_){
var vec__12897 = p__12896;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12897,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12897,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__12891_12900,G__12892_12901))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12891_12900,G__12892_12901,G__12893_12902) : re_frame.core.reg_sub.call(null,G__12891_12900,G__12892_12901,G__12893_12902));
var G__12903_12912 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__12904_12913 = ((function (G__12903_12912){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12906) : re_frame.core.subscribe.call(null,G__12906));
})(),(function (){var G__12907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12907) : re_frame.core.subscribe.call(null,G__12907));
})()], null);
});})(G__12903_12912))
;
var G__12905_12914 = ((function (G__12903_12912,G__12904_12913){
return (function (p__12908,_){
var vec__12909 = p__12908;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12909,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12909,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__12903_12912,G__12904_12913))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12903_12912,G__12904_12913,G__12905_12914) : re_frame.core.reg_sub.call(null,G__12903_12912,G__12904_12913,G__12905_12914));
var G__12915_12917 = cljs.core.cst$kw$active_DASH_tab;
var G__12916_12918 = ((function (G__12915_12917){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12915_12917))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12915_12917,G__12916_12918) : re_frame.core.reg_sub.call(null,G__12915_12917,G__12916_12918));
var G__12919_12921 = cljs.core.cst$kw$state;
var G__12920_12922 = ((function (G__12919_12921){
return (function (db,_){
return db;
});})(G__12919_12921))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12919_12921,G__12920_12922) : re_frame.core.reg_sub.call(null,G__12919_12921,G__12920_12922));
var G__12923_12925 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__12924_12926 = ((function (G__12923_12925){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__12923_12925))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12923_12925,G__12924_12926) : re_frame.core.reg_sub.call(null,G__12923_12925,G__12924_12926));
var G__12927_12929 = cljs.core.cst$kw$change_DASH_sets;
var G__12928_12930 = ((function (G__12927_12929){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12927_12929))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12927_12929,G__12928_12930) : re_frame.core.reg_sub.call(null,G__12927_12929,G__12928_12930));
