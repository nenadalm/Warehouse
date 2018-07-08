// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.storage.local');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('alandipert.storage_atom');
if((typeof warehouse !== 'undefined') && (typeof warehouse.storage !== 'undefined') && (typeof warehouse.storage.local !== 'undefined') && (typeof warehouse.storage.local.app_state !== 'undefined')){
} else {
warehouse.storage.local.app_state = alandipert.storage_atom.local_storage(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$components,cljs.core.PersistentVector.EMPTY], null)),cljs.core.cst$kw$app_DASH_state);
}
warehouse.storage.local.storage = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store_DASH_state,(function (state){
return cljs.core.reset_BANG_(warehouse.storage.local.app_state,state);
}),cljs.core.cst$kw$load_DASH_state,(function (){
return cljs.core.deref(warehouse.storage.local.app_state);
})], null);
