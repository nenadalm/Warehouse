// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__16479_16481 = cljs.core.cst$kw$processes;
var G__16480_16482 = ((function (G__16479_16481){
return (function (db,_){
return cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16479_16481))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16479_16481,G__16480_16482) : re_frame.core.reg_sub.call(null,G__16479_16481,G__16480_16482));
var G__16483_16485 = cljs.core.cst$kw$import_DASH_form;
var G__16484_16486 = ((function (G__16483_16485){
return (function (db,_){
return cljs.core.cst$kw$import_DASH_form.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16483_16485))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16483_16485,G__16484_16486) : re_frame.core.reg_sub.call(null,G__16483_16485,G__16484_16486));
var G__16487_16489 = cljs.core.cst$kw$show_DASH_nav;
var G__16488_16490 = ((function (G__16487_16489){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16487_16489))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16487_16489,G__16488_16490) : re_frame.core.reg_sub.call(null,G__16487_16489,G__16488_16490));
var G__16492_16494 = cljs.core.cst$kw$visible_DASH_components;
var G__16493_16495 = ((function (G__16492_16494){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16492_16494){
return (function (p1__16491_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16491_SHARP_,"ref");
});})(G__16492_16494))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__16492_16494))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16492_16494,G__16493_16495) : re_frame.core.reg_sub.call(null,G__16492_16494,G__16493_16495));
var G__16496_16498 = cljs.core.cst$kw$active_DASH_tab;
var G__16497_16499 = ((function (G__16496_16498){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16496_16498))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16496_16498,G__16497_16499) : re_frame.core.reg_sub.call(null,G__16496_16498,G__16497_16499));
var G__16500_16502 = cljs.core.cst$kw$state;
var G__16501_16503 = ((function (G__16500_16502){
return (function (db,_){
return db;
});})(G__16500_16502))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16500_16502,G__16501_16503) : re_frame.core.reg_sub.call(null,G__16500_16502,G__16501_16503));
var G__16504_16506 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__16505_16507 = ((function (G__16504_16506){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__16504_16506))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16504_16506,G__16505_16507) : re_frame.core.reg_sub.call(null,G__16504_16506,G__16505_16507));
var G__16508_16510 = cljs.core.cst$kw$change_DASH_sets;
var G__16509_16511 = ((function (G__16508_16510){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__16508_16510))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16508_16510,G__16509_16511) : re_frame.core.reg_sub.call(null,G__16508_16510,G__16509_16511));
