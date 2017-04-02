// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('warehouse.views');
goog.require('warehouse.index');
goog.require('warehouse.events');
goog.require('warehouse.subs');
goog.require('re_frame.core');
warehouse.core.main = (function warehouse$core$main(){
secretary.core.dispatch_BANG_(location.hash);

window.addEventListener("hashchange",(function (e){
return secretary.core.dispatch_BANG_(location.hash);
}));

var G__15412_15415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15412_15415) : re_frame.core.dispatch_sync.call(null,G__15412_15415));

var G__15413_15416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.page], null);
var G__15414_15417 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__15413_15416,G__15414_15417) : reagent.core.render_component.call(null,G__15413_15416,G__15414_15417));

return warehouse.index.initialize();
});
