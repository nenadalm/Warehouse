// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.change_set');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('alandipert.storage_atom');
if(typeof warehouse.change_set.change_sets !== 'undefined'){
} else {
warehouse.change_set.change_sets = alandipert.storage_atom.local_storage((function (){var G__15468 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15468) : cljs.core.atom.call(null,G__15468));
})(),cljs.core.cst$kw$app_DASH_change_DASH_sets);
}
