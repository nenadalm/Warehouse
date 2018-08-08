// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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

var G__13007_13010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__13007_13010) : re_frame.core.dispatch_sync.call(null,G__13007_13010));

var G__13008_13011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.page], null);
var G__13009_13012 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13008_13011,G__13009_13012) : reagent.core.render_component.call(null,G__13008_13011,G__13009_13012));

return warehouse.index.initialize();
});
