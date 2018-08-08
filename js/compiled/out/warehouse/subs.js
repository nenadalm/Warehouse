// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('warehouse.infinite_scroll.db');
goog.require('re_frame.core');
var G__12946_12948 = cljs.core.cst$kw$components;
var G__12947_12949 = ((function (G__12946_12948){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12946_12948))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12946_12948,G__12947_12949) : re_frame.core.reg_sub.call(null,G__12946_12948,G__12947_12949));
var G__12950_12952 = cljs.core.cst$kw$visible_DASH_components;
var G__12951_12953 = ((function (G__12950_12952){
return (function (db,_){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12950_12952))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12950_12952,G__12951_12953) : re_frame.core.reg_sub.call(null,G__12950_12952,G__12951_12953));
var G__12954_12956 = cljs.core.cst$kw$infinite_DASH_scroll_DASH_state;
var G__12955_12957 = ((function (G__12954_12956){
return (function (db,_){
return cljs.core.cst$kw$infinite_DASH_scroll.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12954_12956))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12954_12956,G__12955_12957) : re_frame.core.reg_sub.call(null,G__12954_12956,G__12955_12957));
var G__12958_12960 = cljs.core.cst$kw$loading_DASH_next_DASH_components;
var G__12959_12961 = ((function (G__12958_12960){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll,cljs.core.cst$kw$loading_DASH_next], null));
});})(G__12958_12960))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12958_12960,G__12959_12961) : re_frame.core.reg_sub.call(null,G__12958_12960,G__12959_12961));
var G__12962_12971 = cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components;
var G__12963_12972 = ((function (G__12962_12971){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12965) : re_frame.core.subscribe.call(null,G__12965));
})(),(function (){var G__12966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$infinite_DASH_scroll_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12966) : re_frame.core.subscribe.call(null,G__12966));
})()], null);
});})(G__12962_12971))
;
var G__12964_12973 = ((function (G__12962_12971,G__12963_12972){
return (function (p__12967,_){
var vec__12968 = p__12967;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12968,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12968,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$pages_DASH_count,cljs.core.cst$kw$pages_DASH_count.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$records_DASH_per_DASH_page,(100)], null);
});})(G__12962_12971,G__12963_12972))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12962_12971,G__12963_12972,G__12964_12973) : re_frame.core.reg_sub.call(null,G__12962_12971,G__12963_12972,G__12964_12973));
var G__12974_12983 = cljs.core.cst$kw$scroll_DASH_visible_DASH_components;
var G__12975_12984 = ((function (G__12974_12983){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_data_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12977) : re_frame.core.subscribe.call(null,G__12977));
})(),(function (){var G__12978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12978) : re_frame.core.subscribe.call(null,G__12978));
})()], null);
});})(G__12974_12983))
;
var G__12976_12985 = ((function (G__12974_12983,G__12975_12984){
return (function (p__12979,_){
var vec__12980 = p__12979;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12980,(0),null);
var vc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12980,(1),null);
return warehouse.infinite_scroll.db.filter_by_data(vc,sd);
});})(G__12974_12983,G__12975_12984))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__12974_12983,G__12975_12984,G__12976_12985) : re_frame.core.reg_sub.call(null,G__12974_12983,G__12975_12984,G__12976_12985));
var G__12986_12988 = cljs.core.cst$kw$active_DASH_tab;
var G__12987_12989 = ((function (G__12986_12988){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12986_12988))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12986_12988,G__12987_12989) : re_frame.core.reg_sub.call(null,G__12986_12988,G__12987_12989));
var G__12990_12992 = cljs.core.cst$kw$state;
var G__12991_12993 = ((function (G__12990_12992){
return (function (db,_){
return db;
});})(G__12990_12992))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12990_12992,G__12991_12993) : re_frame.core.reg_sub.call(null,G__12990_12992,G__12991_12993));
var G__12994_12996 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__12995_12997 = ((function (G__12994_12996){
return (function (db,_){
return ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__12994_12996))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12994_12996,G__12995_12997) : re_frame.core.reg_sub.call(null,G__12994_12996,G__12995_12997));
var G__12998_13000 = cljs.core.cst$kw$change_DASH_sets;
var G__12999_13001 = ((function (G__12998_13000){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12998_13000))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12998_13000,G__12999_13001) : re_frame.core.reg_sub.call(null,G__12998_13000,G__12999_13001));
