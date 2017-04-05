// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__15378_15380 = cljs.core.cst$kw$show_DASH_nav;
var G__15379_15381 = ((function (G__15378_15380){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15378_15380))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15378_15380,G__15379_15381) : re_frame.core.reg_sub.call(null,G__15378_15380,G__15379_15381));
var G__15383_15385 = cljs.core.cst$kw$visible_DASH_components;
var G__15384_15386 = ((function (G__15383_15385){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15383_15385){
return (function (p1__15382_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__15382_SHARP_,"ref");
});})(G__15383_15385))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__15383_15385))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15383_15385,G__15384_15386) : re_frame.core.reg_sub.call(null,G__15383_15385,G__15384_15386));
var G__15387_15389 = cljs.core.cst$kw$active_DASH_tab;
var G__15388_15390 = ((function (G__15387_15389){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15387_15389))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15387_15389,G__15388_15390) : re_frame.core.reg_sub.call(null,G__15387_15389,G__15388_15390));
var G__15391_15393 = cljs.core.cst$kw$state;
var G__15392_15394 = ((function (G__15391_15393){
return (function (db,_){
return db;
});})(G__15391_15393))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15391_15393,G__15392_15394) : re_frame.core.reg_sub.call(null,G__15391_15393,G__15392_15394));
var G__15395_15397 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__15396_15398 = ((function (G__15395_15397){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__15395_15397))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15395_15397,G__15396_15398) : re_frame.core.reg_sub.call(null,G__15395_15397,G__15396_15398));
var G__15399_15401 = cljs.core.cst$kw$change_DASH_sets;
var G__15400_15402 = ((function (G__15399_15401){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15399_15401))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15399_15401,G__15400_15402) : re_frame.core.reg_sub.call(null,G__15399_15401,G__15400_15402));
