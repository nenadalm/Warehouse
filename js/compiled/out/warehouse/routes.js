// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__16411__auto___16613 = (function (params__16412__auto__){
if(cljs.core.map_QMARK_(params__16412__auto__)){
var map__16605 = params__16412__auto__;
var map__16605__$1 = ((((!((map__16605 == null)))?((((map__16605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16605):map__16605);
var G__16607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16607) : re_frame.core.dispatch.call(null,G__16607));
} else {
if(cljs.core.vector_QMARK_(params__16412__auto__)){
var vec__16608 = params__16412__auto__;
var G__16611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16611) : re_frame.core.dispatch.call(null,G__16611));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16411__auto___16613);

warehouse.routes.homepage = ((function (action__16411__auto___16613){
return (function warehouse$routes$homepage(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16614 = arguments.length;
var i__8140__auto___16615 = (0);
while(true){
if((i__8140__auto___16615 < len__8139__auto___16614)){
args__8146__auto__.push((arguments[i__8140__auto___16615]));

var G__16616 = (i__8140__auto___16615 + (1));
i__8140__auto___16615 = G__16616;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16411__auto___16613))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16411__auto___16613){
return (function (args__16410__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__16410__auto__);
});})(action__16411__auto___16613))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__16411__auto___16613){
return (function (seq16612){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16612));
});})(action__16411__auto___16613))
;

var action__16411__auto___16625 = (function (params__16412__auto__){
if(cljs.core.map_QMARK_(params__16412__auto__)){
var map__16617 = params__16412__auto__;
var map__16617__$1 = ((((!((map__16617 == null)))?((((map__16617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16617):map__16617);
var G__16619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16619) : re_frame.core.dispatch.call(null,G__16619));
} else {
if(cljs.core.vector_QMARK_(params__16412__auto__)){
var vec__16620 = params__16412__auto__;
var G__16623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16623) : re_frame.core.dispatch.call(null,G__16623));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__16411__auto___16625);

warehouse.routes.processes = ((function (action__16411__auto___16625){
return (function warehouse$routes$processes(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16626 = arguments.length;
var i__8140__auto___16627 = (0);
while(true){
if((i__8140__auto___16627 < len__8139__auto___16626)){
args__8146__auto__.push((arguments[i__8140__auto___16627]));

var G__16628 = (i__8140__auto___16627 + (1));
i__8140__auto___16627 = G__16628;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16411__auto___16625))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16411__auto___16625){
return (function (args__16410__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__16410__auto__);
});})(action__16411__auto___16625))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__16411__auto___16625){
return (function (seq16624){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16624));
});})(action__16411__auto___16625))
;

