// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__15337_15339 = cljs.core.cst$kw$show_DASH_nav;
var G__15338_15340 = ((function (G__15337_15339){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15337_15339))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15337_15339,G__15338_15340) : re_frame.core.reg_sub.call(null,G__15337_15339,G__15338_15340));
var G__15342_15344 = cljs.core.cst$kw$visible_DASH_components;
var G__15343_15345 = ((function (G__15342_15344){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15342_15344){
return (function (p1__15341_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__15341_SHARP_,"ref");
});})(G__15342_15344))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__15342_15344))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15342_15344,G__15343_15345) : re_frame.core.reg_sub.call(null,G__15342_15344,G__15343_15345));
var G__15346_15348 = cljs.core.cst$kw$active_DASH_tab;
var G__15347_15349 = ((function (G__15346_15348){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15346_15348))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15346_15348,G__15347_15349) : re_frame.core.reg_sub.call(null,G__15346_15348,G__15347_15349));
var G__15350_15352 = cljs.core.cst$kw$state;
var G__15351_15353 = ((function (G__15350_15352){
return (function (db,_){
return db;
});})(G__15350_15352))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15350_15352,G__15351_15353) : re_frame.core.reg_sub.call(null,G__15350_15352,G__15351_15353));
var G__15354_15356 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__15355_15357 = ((function (G__15354_15356){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__15354_15356))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15354_15356,G__15355_15357) : re_frame.core.reg_sub.call(null,G__15354_15356,G__15355_15357));
var G__15358_15360 = cljs.core.cst$kw$change_DASH_sets;
var G__15359_15361 = ((function (G__15358_15360){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15358_15360))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15358_15360,G__15359_15361) : re_frame.core.reg_sub.call(null,G__15358_15360,G__15359_15361));
