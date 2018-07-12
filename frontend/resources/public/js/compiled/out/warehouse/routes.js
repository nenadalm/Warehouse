// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('bidi.bidi');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('goog.History');
warehouse.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"/",null], null), null),cljs.core.cst$kw$index,"/processes",cljs.core.cst$kw$processes,true,cljs.core.cst$kw$not_DASH_found])], null);
warehouse.routes.path_for = (function warehouse$routes$path_for(page){
return bidi.bidi.path_for(warehouse.routes.routes,page);
});
warehouse.routes.handler = (function warehouse$routes$handler(p__12541){
var map__12542 = p__12541;
var map__12542__$1 = ((((!((map__12542 == null)))?(((((map__12542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12542):map__12542);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12542__$1,cljs.core.cst$kw$handler);
var G__12544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,handler], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12544) : re_frame.core.dispatch.call(null,G__12544));
});
warehouse.routes.init = (function warehouse$routes$init(){
if((typeof warehouse !== 'undefined') && (typeof warehouse.routes !== 'undefined') && (typeof warehouse.routes.history !== 'undefined')){
} else {
warehouse.routes.history = (function (){var G__12546 = (new goog.History());
var G__12547_12550 = G__12546;
var G__12548_12551 = goog.history.EventType.NAVIGATE;
var G__12549_12552 = ((function (G__12547_12550,G__12548_12551,G__12546){
return (function (p1__12545_SHARP_){
return warehouse.routes.handler(bidi.bidi.match_route(warehouse.routes.routes,p1__12545_SHARP_.token));
});})(G__12547_12550,G__12548_12551,G__12546))
;
goog.events.listen(G__12547_12550,G__12548_12551,G__12549_12552);

G__12546.setEnabled(true);

return G__12546;
})();
}

return (
warehouse.routes.nav_BANG_ = (function warehouse$routes$init_$_nav_BANG_(token){
return warehouse.routes.history.setToken(token);
}))
;
});
