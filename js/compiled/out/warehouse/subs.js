// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__16792_16794 = cljs.core.cst$kw$visible_DASH_components;
var G__16793_16795 = ((function (G__16792_16794){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16792_16794){
return (function (p1__16791_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16791_SHARP_,"ref");
});})(G__16792_16794))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__16792_16794))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16792_16794,G__16793_16795) : re_frame.core.reg_sub.call(null,G__16792_16794,G__16793_16795));
var G__16796_16798 = cljs.core.cst$kw$active_DASH_tab;
var G__16797_16799 = ((function (G__16796_16798){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16796_16798))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16796_16798,G__16797_16799) : re_frame.core.reg_sub.call(null,G__16796_16798,G__16797_16799));
var G__16800_16802 = cljs.core.cst$kw$state;
var G__16801_16803 = ((function (G__16800_16802){
return (function (db,_){
return db;
});})(G__16800_16802))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16800_16802,G__16801_16803) : re_frame.core.reg_sub.call(null,G__16800_16802,G__16801_16803));
var G__16804_16806 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16805_16807 = ((function (G__16804_16806){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16804_16806))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16804_16806,G__16805_16807) : re_frame.core.reg_sub.call(null,G__16804_16806,G__16805_16807));
var G__16808_16810 = cljs.core.cst$kw$change_DASH_sets;
var G__16809_16811 = ((function (G__16808_16810){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16808_16810))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16808_16810,G__16809_16811) : re_frame.core.reg_sub.call(null,G__16808_16810,G__16809_16811));
