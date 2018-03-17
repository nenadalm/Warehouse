// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('bidi.bidi');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
warehouse.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"/",null], null), null),cljs.core.cst$kw$index,"/processes",cljs.core.cst$kw$processes,true,cljs.core.cst$kw$not_DASH_found])], null);
warehouse.routes.path_for = (function warehouse$routes$path_for(page){
return bidi.bidi.path_for(warehouse.routes.routes,page);
});
warehouse.routes.handler = (function warehouse$routes$handler(p__19883){
var map__19884 = p__19883;
var map__19884__$1 = ((((!((map__19884 == null)))?(((((map__19884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19884):map__19884);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19884__$1,cljs.core.cst$kw$handler);
var G__19886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,handler], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19886) : re_frame.core.dispatch.call(null,G__19886));
});
warehouse.routes.init = (function warehouse$routes$init(){
if(typeof warehouse.routes.history !== 'undefined'){
} else {
warehouse.routes.history = (function (){var G__19888 = (new goog.History());
var G__19889_19892 = G__19888;
var G__19890_19893 = goog.history.EventType.NAVIGATE;
var G__19891_19894 = ((function (G__19889_19892,G__19890_19893,G__19888){
return (function (p1__19887_SHARP_){
return warehouse.routes.handler(bidi.bidi.match_route(warehouse.routes.routes,p1__19887_SHARP_.token));
});})(G__19889_19892,G__19890_19893,G__19888))
;
goog.events.listen(G__19889_19892,G__19890_19893,G__19891_19894);

G__19888.setEnabled(true);

return G__19888;
})();
}

return (
warehouse.routes.nav_BANG_ = (function warehouse$routes$init_$_nav_BANG_(token){
return warehouse.routes.history.setToken(token);
}))
;
});
