// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__16790_16792 = cljs.core.cst$kw$visible_DASH_components;
var G__16791_16793 = ((function (G__16790_16792){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16790_16792){
return (function (p1__16789_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16789_SHARP_,"ref");
});})(G__16790_16792))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__16790_16792))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16790_16792,G__16791_16793) : re_frame.core.reg_sub.call(null,G__16790_16792,G__16791_16793));
var G__16794_16796 = cljs.core.cst$kw$active_DASH_tab;
var G__16795_16797 = ((function (G__16794_16796){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16794_16796))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16794_16796,G__16795_16797) : re_frame.core.reg_sub.call(null,G__16794_16796,G__16795_16797));
var G__16798_16800 = cljs.core.cst$kw$state;
var G__16799_16801 = ((function (G__16798_16800){
return (function (db,_){
return db;
});})(G__16798_16800))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16798_16800,G__16799_16801) : re_frame.core.reg_sub.call(null,G__16798_16800,G__16799_16801));
var G__16802_16804 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16803_16805 = ((function (G__16802_16804){
return (function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("data:text/json;charset=utf-8,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16802_16804))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16802_16804,G__16803_16805) : re_frame.core.reg_sub.call(null,G__16802_16804,G__16803_16805));
var G__16806_16808 = cljs.core.cst$kw$change_DASH_sets;
var G__16807_16809 = ((function (G__16806_16808){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16806_16808))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16806_16808,G__16807_16809) : re_frame.core.reg_sub.call(null,G__16806_16808,G__16807_16809));
