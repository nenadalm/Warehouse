// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.storage.local');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('alandipert.storage_atom');
if(typeof warehouse.storage.local.app_state !== 'undefined'){
} else {
warehouse.storage.local.app_state = alandipert.storage_atom.local_storage((function (){var G__20504 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20504) : cljs.core.atom.call(null,G__20504));
})(),cljs.core.cst$kw$app_DASH_state);
}
warehouse.storage.local.storage = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_state,(function (state){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(warehouse.storage.local.app_state,state) : cljs.core.reset_BANG_.call(null,warehouse.storage.local.app_state,state));
}),cljs.core.cst$kw$load_DASH_state,(function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(warehouse.storage.local.app_state) : cljs.core.deref.call(null,warehouse.storage.local.app_state));
})], null);
