// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.search.db');
goog.require('reagent.core');
goog.require('re_frame.db');
goog.require('re_frame.core');
warehouse.index.reset_infinite_scroll = (function warehouse$index$reset_infinite_scroll(){
var visible_components = cljs.core.deref((function (){var G__18492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18492) : re_frame.core.subscribe.call(null,G__18492));
})());
var G__18493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18493) : re_frame.core.dispatch.call(null,G__18493));
});
warehouse.index.initialize = (function warehouse$index$initialize(){
return null;
});
