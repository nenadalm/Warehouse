// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.search.db');
goog.require('re_frame.db');
goog.require('re_frame.core');
warehouse.index.update_index = (function warehouse$index$update_index(ns){
return warehouse.search.db.update_index(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16230){
var vec__16231 = p__16230;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(component),cljs.core.cst$kw$tags,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(component)], null);
}),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(ns)));
});
warehouse.index.initialize = (function warehouse$index$initialize(){
warehouse.search.db.initialize(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name","tags"], null));

warehouse.index.update_index((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db)));

var G__16237_16240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16237_16240) : re_frame.core.dispatch.call(null,G__16237_16240));

return cljs.core.add_watch(re_frame.db.app_db,cljs.core.cst$kw$indexer,(function (k,r,os,ns){
if((cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(os) === cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(ns))){
} else {
warehouse.index.update_index(ns);

var G__16238_16241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16238_16241) : re_frame.core.dispatch.call(null,G__16238_16241));
}

if((cljs.core.cst$kw$visible_DASH_components.cljs$core$IFn$_invoke$arity$1(os) === cljs.core.cst$kw$visible_DASH_components.cljs$core$IFn$_invoke$arity$1(ns))){
return null;
} else {
var G__16239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16239) : re_frame.core.dispatch.call(null,G__16239));
}
}));
});
