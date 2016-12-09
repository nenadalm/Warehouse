// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__30682_30684 = cljs.core.cst$kw$processes;
var G__30683_30685 = ((function (G__30682_30684){
return (function (db,_){
return cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30682_30684))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30682_30684,G__30683_30685) : re_frame.core.reg_sub.call(null,G__30682_30684,G__30683_30685));
var G__30686_30688 = cljs.core.cst$kw$import_DASH_form;
var G__30687_30689 = ((function (G__30686_30688){
return (function (db,_){
return cljs.core.cst$kw$import_DASH_form.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30686_30688))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30686_30688,G__30687_30689) : re_frame.core.reg_sub.call(null,G__30686_30688,G__30687_30689));
var G__30690_30692 = cljs.core.cst$kw$show_DASH_nav;
var G__30691_30693 = ((function (G__30690_30692){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30690_30692))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30690_30692,G__30691_30693) : re_frame.core.reg_sub.call(null,G__30690_30692,G__30691_30693));
var G__30695_30697 = cljs.core.cst$kw$visible_DASH_components;
var G__30696_30698 = ((function (G__30695_30697){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__30695_30697){
return (function (p1__30694_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30694_SHARP_,"ref");
});})(G__30695_30697))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__30695_30697))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30695_30697,G__30696_30698) : re_frame.core.reg_sub.call(null,G__30695_30697,G__30696_30698));
var G__30699_30701 = cljs.core.cst$kw$active_DASH_tab;
var G__30700_30702 = ((function (G__30699_30701){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30699_30701))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30699_30701,G__30700_30702) : re_frame.core.reg_sub.call(null,G__30699_30701,G__30700_30702));
var G__30703_30705 = cljs.core.cst$kw$state;
var G__30704_30706 = ((function (G__30703_30705){
return (function (db,_){
return db;
});})(G__30703_30705))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30703_30705,G__30704_30706) : re_frame.core.reg_sub.call(null,G__30703_30705,G__30704_30706));
var G__30707_30709 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__30708_30710 = ((function (G__30707_30709){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__30707_30709))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30707_30709,G__30708_30710) : re_frame.core.reg_sub.call(null,G__30707_30709,G__30708_30710));
var G__30711_30713 = cljs.core.cst$kw$change_DASH_sets;
var G__30712_30714 = ((function (G__30711_30713){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30711_30713))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30711_30713,G__30712_30714) : re_frame.core.reg_sub.call(null,G__30711_30713,G__30712_30714));
