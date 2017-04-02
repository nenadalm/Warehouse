// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('warehouse.index');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__14809_14811 = cljs.core.cst$kw$search_DASH_result;
var G__14810_14812 = ((function (G__14809_14811){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$search_DASH_result,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(warehouse.search.db.index.search(cljs.core.second(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cofx)))));
});})(G__14809_14811))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__14809_14811,G__14810_14812) : re_frame.core.reg_cofx.call(null,G__14809_14811,G__14810_14812));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$filter_DASH_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14813 = cljs.core.cst$kw$search_DASH_result;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__14813) : re_frame.core.inject_cofx.call(null,G__14813));
})()], null),(function (cofx,p__14814){
var vec__14815 = p__14814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,val,cljs.core.cst$kw$search,cljs.core.cst$kw$search_DASH_result.cljs$core$IFn$_invoke$arity$1(cofx)], null))], null);
}));
