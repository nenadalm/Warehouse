// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__19935_19937 = cljs.core.cst$kw$components;
var G__19936_19938 = ((function (G__19935_19937){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19935_19937))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19935_19937,G__19936_19938) : re_frame.core.reg_sub.call(null,G__19935_19937,G__19936_19938));
var G__19939_19941 = cljs.core.cst$kw$visible_DASH_components;
var G__19940_19942 = ((function (G__19939_19941){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19939_19941))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19939_19941,G__19940_19942) : re_frame.core.reg_sub.call(null,G__19939_19941,G__19940_19942));
var G__19943_19945 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__19944_19946 = ((function (G__19943_19945){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19943_19945))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19943_19945,G__19944_19946) : re_frame.core.reg_sub.call(null,G__19943_19945,G__19944_19946));
var G__19947_19949 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__19948_19950 = ((function (G__19947_19949){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__19947_19949))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19947_19949,G__19948_19950) : re_frame.core.reg_sub.call(null,G__19947_19949,G__19948_19950));
var G__19951_19960 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__19952_19961 = ((function (G__19951_19960){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19954 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19954) : re_frame.core.subscribe.call(null,G__19954));
})(),(function (){var G__19955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19955) : re_frame.core.subscribe.call(null,G__19955));
})()], null);
});})(G__19951_19960))
;
var G__19953_19962 = ((function (G__19951_19960,G__19952_19961){
return (function (p__19956,_){
var vec__19957 = p__19956;
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__19951_19960,G__19952_19961))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19951_19960,G__19952_19961,G__19953_19962) : re_frame.core.reg_sub.call(null,G__19951_19960,G__19952_19961,G__19953_19962));
var G__19963_19972 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__19964_19973 = ((function (G__19963_19972){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19966) : re_frame.core.subscribe.call(null,G__19966));
})(),(function (){var G__19967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19967) : re_frame.core.subscribe.call(null,G__19967));
})()], null);
});})(G__19963_19972))
;
var G__19965_19974 = ((function (G__19963_19972,G__19964_19973){
return (function (p__19968,_){
var vec__19969 = p__19968;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19969,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19969,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__19963_19972,G__19964_19973))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__19963_19972,G__19964_19973,G__19965_19974) : re_frame.core.reg_sub.call(null,G__19963_19972,G__19964_19973,G__19965_19974));
var G__19975_19977 = cljs.core.cst$kw$active_DASH_tab;
var G__19976_19978 = ((function (G__19975_19977){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19975_19977))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19975_19977,G__19976_19978) : re_frame.core.reg_sub.call(null,G__19975_19977,G__19976_19978));
var G__19979_19981 = cljs.core.cst$kw$state;
var G__19980_19982 = ((function (G__19979_19981){
return (function (db,_){
return db;
});})(G__19979_19981))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19979_19981,G__19980_19982) : re_frame.core.reg_sub.call(null,G__19979_19981,G__19980_19982));
var G__19983_19985 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__19984_19986 = ((function (G__19983_19985){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__19983_19985))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19983_19985,G__19984_19986) : re_frame.core.reg_sub.call(null,G__19983_19985,G__19984_19986));
var G__19987_19989 = cljs.core.cst$kw$change_DASH_sets;
var G__19988_19990 = ((function (G__19987_19989){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__19987_19989))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19987_19989,G__19988_19990) : re_frame.core.reg_sub.call(null,G__19987_19989,G__19988_19990));
