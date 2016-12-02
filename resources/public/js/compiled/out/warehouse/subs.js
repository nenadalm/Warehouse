// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__20158_20160 = cljs.core.cst$kw$processes;
var G__20159_20161 = ((function (G__20158_20160){
return (function (db,_){
return cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20158_20160))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20158_20160,G__20159_20161) : re_frame.core.reg_sub.call(null,G__20158_20160,G__20159_20161));
var G__20162_20164 = cljs.core.cst$kw$import_DASH_form;
var G__20163_20165 = ((function (G__20162_20164){
return (function (db,_){
return cljs.core.cst$kw$import_DASH_form.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20162_20164))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20162_20164,G__20163_20165) : re_frame.core.reg_sub.call(null,G__20162_20164,G__20163_20165));
var G__20166_20168 = cljs.core.cst$kw$show_DASH_nav;
var G__20167_20169 = ((function (G__20166_20168){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20166_20168))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20166_20168,G__20167_20169) : re_frame.core.reg_sub.call(null,G__20166_20168,G__20167_20169));
var G__20171_20173 = cljs.core.cst$kw$visible_DASH_components;
var G__20172_20174 = ((function (G__20171_20173){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__20171_20173){
return (function (p1__20170_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__20170_SHARP_,"ref");
});})(G__20171_20173))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__20171_20173))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20171_20173,G__20172_20174) : re_frame.core.reg_sub.call(null,G__20171_20173,G__20172_20174));
var G__20175_20177 = cljs.core.cst$kw$active_DASH_tab;
var G__20176_20178 = ((function (G__20175_20177){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20175_20177))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20175_20177,G__20176_20178) : re_frame.core.reg_sub.call(null,G__20175_20177,G__20176_20178));
var G__20179_20181 = cljs.core.cst$kw$state;
var G__20180_20182 = ((function (G__20179_20181){
return (function (db,_){
return db;
});})(G__20179_20181))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20179_20181,G__20180_20182) : re_frame.core.reg_sub.call(null,G__20179_20181,G__20180_20182));
var G__20183_20185 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__20184_20186 = ((function (G__20183_20185){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__20183_20185))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20183_20185,G__20184_20186) : re_frame.core.reg_sub.call(null,G__20183_20185,G__20184_20186));
var G__20187_20189 = cljs.core.cst$kw$change_DASH_sets;
var G__20188_20190 = ((function (G__20187_20189){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20187_20189))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20187_20189,G__20188_20190) : re_frame.core.reg_sub.call(null,G__20187_20189,G__20188_20190));
