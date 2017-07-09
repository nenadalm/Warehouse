// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.index');
goog.require('warehouse.search.db');
goog.require('re_frame.core');
var G__16248_16250 = cljs.core.cst$kw$search_DASH_result;
var G__16249_16251 = ((function (G__16248_16250){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$search_DASH_result,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(warehouse.search.db.index.search(cljs.core.second(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cofx)))));
});})(G__16248_16250))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__16248_16250,G__16249_16251) : re_frame.core.reg_cofx.call(null,G__16248_16250,G__16249_16251));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$filter_DASH_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16252 = cljs.core.cst$kw$search_DASH_result;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__16252) : re_frame.core.inject_cofx.call(null,G__16252));
})()], null),(function (cofx,p__16253){
var vec__16254 = p__16253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,val,cljs.core.cst$kw$search,cljs.core.cst$kw$search_DASH_result.cljs$core$IFn$_invoke$arity$1(cofx)], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_DASH_refresh,(function (p__16257,_){
var map__16258 = p__16257;
var map__16258__$1 = ((((!((map__16258 == null)))?((((map__16258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16258):map__16258);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16258__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null)], null);
}));
