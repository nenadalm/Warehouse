// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__30719_30721 = cljs.core.cst$kw$processes;
var G__30720_30722 = ((function (G__30719_30721){
return (function (db,_){
return cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30719_30721))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30719_30721,G__30720_30722) : re_frame.core.reg_sub.call(null,G__30719_30721,G__30720_30722));
var G__30723_30725 = cljs.core.cst$kw$show_DASH_nav;
var G__30724_30726 = ((function (G__30723_30725){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30723_30725))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30723_30725,G__30724_30726) : re_frame.core.reg_sub.call(null,G__30723_30725,G__30724_30726));
var G__30728_30730 = cljs.core.cst$kw$visible_DASH_components;
var G__30729_30731 = ((function (G__30728_30730){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__30728_30730){
return (function (p1__30727_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30727_SHARP_,"ref");
});})(G__30728_30730))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__30728_30730))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30728_30730,G__30729_30731) : re_frame.core.reg_sub.call(null,G__30728_30730,G__30729_30731));
var G__30732_30734 = cljs.core.cst$kw$active_DASH_tab;
var G__30733_30735 = ((function (G__30732_30734){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30732_30734))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30732_30734,G__30733_30735) : re_frame.core.reg_sub.call(null,G__30732_30734,G__30733_30735));
var G__30736_30738 = cljs.core.cst$kw$state;
var G__30737_30739 = ((function (G__30736_30738){
return (function (db,_){
return db;
});})(G__30736_30738))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30736_30738,G__30737_30739) : re_frame.core.reg_sub.call(null,G__30736_30738,G__30737_30739));
var G__30740_30742 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__30741_30743 = ((function (G__30740_30742){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__30740_30742))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30740_30742,G__30741_30743) : re_frame.core.reg_sub.call(null,G__30740_30742,G__30741_30743));
var G__30744_30746 = cljs.core.cst$kw$change_DASH_sets;
var G__30745_30747 = ((function (G__30744_30746){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__30744_30746))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30744_30746,G__30745_30747) : re_frame.core.reg_sub.call(null,G__30744_30746,G__30745_30747));
