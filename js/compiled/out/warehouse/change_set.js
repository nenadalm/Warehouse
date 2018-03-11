// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.change_set');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('alandipert.storage_atom');
if(typeof warehouse.change_set.change_sets !== 'undefined'){
} else {
warehouse.change_set.change_sets = alandipert.storage_atom.local_storage(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$app_DASH_change_DASH_sets);
}
