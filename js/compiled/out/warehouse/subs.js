// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__16788_16790 = cljs.core.cst$kw$show_DASH_nav;
var G__16789_16791 = ((function (G__16788_16790){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16788_16790))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16788_16790,G__16789_16791) : re_frame.core.reg_sub.call(null,G__16788_16790,G__16789_16791));
var G__16793_16795 = cljs.core.cst$kw$visible_DASH_components;
var G__16794_16796 = ((function (G__16793_16795){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16793_16795){
return (function (p1__16792_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16792_SHARP_,"ref");
});})(G__16793_16795))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__16793_16795))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16793_16795,G__16794_16796) : re_frame.core.reg_sub.call(null,G__16793_16795,G__16794_16796));
var G__16797_16799 = cljs.core.cst$kw$active_DASH_tab;
var G__16798_16800 = ((function (G__16797_16799){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16797_16799))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16797_16799,G__16798_16800) : re_frame.core.reg_sub.call(null,G__16797_16799,G__16798_16800));
var G__16801_16803 = cljs.core.cst$kw$state;
var G__16802_16804 = ((function (G__16801_16803){
return (function (db,_){
return db;
});})(G__16801_16803))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16801_16803,G__16802_16804) : re_frame.core.reg_sub.call(null,G__16801_16803,G__16802_16804));
var G__16805_16807 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16806_16808 = ((function (G__16805_16807){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16805_16807))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16805_16807,G__16806_16808) : re_frame.core.reg_sub.call(null,G__16805_16807,G__16806_16808));
var G__16809_16811 = cljs.core.cst$kw$change_DASH_sets;
var G__16810_16812 = ((function (G__16809_16811){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16809_16811))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16809_16811,G__16810_16812) : re_frame.core.reg_sub.call(null,G__16809_16811,G__16810_16812));
