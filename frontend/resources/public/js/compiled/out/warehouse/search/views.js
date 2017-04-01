// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.views');
goog.require('cljs.core');
goog.require('warehouse.search.events');
goog.require('re_frame.core');
warehouse.search.views.search = (function warehouse$search$views$search(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Search: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"search",cljs.core.cst$kw$type,"search",cljs.core.cst$kw$on_DASH_change,(function (e){
var G__14947_14948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,e.target.value], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14947_14948) : re_frame.core.dispatch.call(null,G__14947_14948));

return null;
})], null)], null)], null);
});
