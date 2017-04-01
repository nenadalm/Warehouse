// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__15323_15325 = cljs.core.cst$kw$processes;
var G__15324_15326 = ((function (G__15323_15325){
return (function (db,_){
return cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15323_15325))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15323_15325,G__15324_15326) : re_frame.core.reg_sub.call(null,G__15323_15325,G__15324_15326));
var G__15327_15329 = cljs.core.cst$kw$show_DASH_nav;
var G__15328_15330 = ((function (G__15327_15329){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15327_15329))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15327_15329,G__15328_15330) : re_frame.core.reg_sub.call(null,G__15327_15329,G__15328_15330));
var G__15332_15334 = cljs.core.cst$kw$visible_DASH_components;
var G__15333_15335 = ((function (G__15332_15334){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15332_15334){
return (function (p1__15331_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__15331_SHARP_,"ref");
});})(G__15332_15334))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__15332_15334))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15332_15334,G__15333_15335) : re_frame.core.reg_sub.call(null,G__15332_15334,G__15333_15335));
var G__15336_15338 = cljs.core.cst$kw$active_DASH_tab;
var G__15337_15339 = ((function (G__15336_15338){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15336_15338))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15336_15338,G__15337_15339) : re_frame.core.reg_sub.call(null,G__15336_15338,G__15337_15339));
var G__15340_15342 = cljs.core.cst$kw$state;
var G__15341_15343 = ((function (G__15340_15342){
return (function (db,_){
return db;
});})(G__15340_15342))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15340_15342,G__15341_15343) : re_frame.core.reg_sub.call(null,G__15340_15342,G__15341_15343));
var G__15344_15346 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__15345_15347 = ((function (G__15344_15346){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__15344_15346))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15344_15346,G__15345_15347) : re_frame.core.reg_sub.call(null,G__15344_15346,G__15345_15347));
var G__15348_15350 = cljs.core.cst$kw$change_DASH_sets;
var G__15349_15351 = ((function (G__15348_15350){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15348_15350))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15348_15350,G__15349_15351) : re_frame.core.reg_sub.call(null,G__15348_15350,G__15349_15351));
