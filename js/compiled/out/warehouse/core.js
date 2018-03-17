// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('warehouse.subs');
goog.require('warehouse.events');
goog.require('re_frame.core');
goog.require('warehouse.views');
goog.require('warehouse.index');
goog.require('warehouse.routes');
warehouse.core.main = (function warehouse$core$main(){
warehouse.routes.init();

var G__20267_20270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__20267_20270) : re_frame.core.dispatch_sync.call(null,G__20267_20270));

var G__20268_20271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.page], null);
var G__20269_20272 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__20268_20271,G__20269_20272) : reagent.core.render_component.call(null,G__20268_20271,G__20269_20272));

return warehouse.index.initialize();
});
