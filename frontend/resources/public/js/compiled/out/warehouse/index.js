// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.index');
goog.require('cljs.core');
goog.require('lunr');
goog.require('warehouse.search.db');
goog.require('re_frame.db');
goog.require('re_frame.core');
warehouse.index.update_index = (function warehouse$index$update_index(ns){
return warehouse.search.db.update_index(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14803){
var vec__14804 = p__14803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14804,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14804,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(component),cljs.core.cst$kw$tags,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(component)], null);
}),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(ns)));
});
warehouse.index.initialize = (function warehouse$index$initialize(){
warehouse.search.db.initialize(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name","tags"], null));

warehouse.index.update_index((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db)));

return cljs.core.add_watch(re_frame.db.app_db,cljs.core.cst$kw$indexer,(function (k,r,os,ns){
if((cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(os) === cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(ns))){
return null;
} else {
return warehouse.index.update_index(ns);
}
}));
});
