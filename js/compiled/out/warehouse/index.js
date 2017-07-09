// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.search.db');
goog.require('reagent.core');
goog.require('re_frame.db');
goog.require('re_frame.core');
warehouse.index.update_index = (function warehouse$index$update_index(components){
return warehouse.search.db.update_index(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16230){
var vec__16231 = p__16230;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(component),cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(component),cljs.core.cst$kw$tags,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(component)], null);
}),components));
});
warehouse.index.reset_infinite_scroll = (function warehouse$index$reset_infinite_scroll(){
var visible_components = (function (){var G__16237 = (function (){var G__16238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16238) : re_frame.core.subscribe.call(null,G__16238));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16237) : cljs.core.deref.call(null,G__16237));
})();
var G__16239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_infinite_DASH_scroll], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16239) : re_frame.core.dispatch.call(null,G__16239));
});
warehouse.index.update_search = (function warehouse$index$update_search(){
var components = (function (){var G__16243 = (function (){var G__16244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16244) : re_frame.core.subscribe.call(null,G__16244));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16243) : cljs.core.deref.call(null,G__16243));
})();
warehouse.index.update_index(components);

var G__16245 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_refresh], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16245) : re_frame.core.dispatch.call(null,G__16245));
});
warehouse.index.initialize = (function warehouse$index$initialize(){
warehouse.search.db.initialize(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name","tags"], null));

reagent.core.track_BANG_(warehouse.index.reset_infinite_scroll);

return reagent.core.track_BANG_(warehouse.index.update_search);
});
