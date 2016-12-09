// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__30721_30723 = cljs.core.cst$kw$processes;
var G__30722_30724 = ((function (G__30721_30723){
return (function (db,_){
return cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30721_30723))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30721_30723,G__30722_30724) : re_frame.core.reg_sub.call(null,G__30721_30723,G__30722_30724));
var G__30725_30727 = cljs.core.cst$kw$show_DASH_nav;
var G__30726_30728 = ((function (G__30725_30727){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30725_30727))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30725_30727,G__30726_30728) : re_frame.core.reg_sub.call(null,G__30725_30727,G__30726_30728));
var G__30730_30732 = cljs.core.cst$kw$visible_DASH_components;
var G__30731_30733 = ((function (G__30730_30732){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__30730_30732){
return (function (p1__30729_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30729_SHARP_,"ref");
});})(G__30730_30732))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__30730_30732))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30730_30732,G__30731_30733) : re_frame.core.reg_sub.call(null,G__30730_30732,G__30731_30733));
var G__30734_30736 = cljs.core.cst$kw$active_DASH_tab;
var G__30735_30737 = ((function (G__30734_30736){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30734_30736))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30734_30736,G__30735_30737) : re_frame.core.reg_sub.call(null,G__30734_30736,G__30735_30737));
var G__30738_30740 = cljs.core.cst$kw$state;
var G__30739_30741 = ((function (G__30738_30740){
return (function (db,_){
return db;
});})(G__30738_30740))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30738_30740,G__30739_30741) : re_frame.core.reg_sub.call(null,G__30738_30740,G__30739_30741));
var G__30742_30744 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__30743_30745 = ((function (G__30742_30744){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__30742_30744))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30742_30744,G__30743_30745) : re_frame.core.reg_sub.call(null,G__30742_30744,G__30743_30745));
var G__30746_30748 = cljs.core.cst$kw$change_DASH_sets;
var G__30747_30749 = ((function (G__30746_30748){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30746_30748))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30746_30748,G__30747_30749) : re_frame.core.reg_sub.call(null,G__30746_30748,G__30747_30749));
