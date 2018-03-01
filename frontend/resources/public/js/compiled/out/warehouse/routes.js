// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__21212__auto___21414 = (function (params__21213__auto__){
if(cljs.core.map_QMARK_(params__21213__auto__)){
var map__21406 = params__21213__auto__;
var map__21406__$1 = ((((!((map__21406 == null)))?((((map__21406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21406):map__21406);
var G__21408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21408) : re_frame.core.dispatch.call(null,G__21408));
} else {
if(cljs.core.vector_QMARK_(params__21213__auto__)){
var vec__21409 = params__21213__auto__;
var G__21412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21412) : re_frame.core.dispatch.call(null,G__21412));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__21212__auto___21414);

warehouse.routes.homepage = ((function (action__21212__auto___21414){
return (function warehouse$routes$homepage(var_args){
var args__8146__auto__ = [];
var len__8139__auto___21415 = arguments.length;
var i__8140__auto___21416 = (0);
while(true){
if((i__8140__auto___21416 < len__8139__auto___21415)){
args__8146__auto__.push((arguments[i__8140__auto___21416]));

var G__21417 = (i__8140__auto___21416 + (1));
i__8140__auto___21416 = G__21417;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__21212__auto___21414))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21212__auto___21414){
return (function (args__21211__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__21211__auto__);
});})(action__21212__auto___21414))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__21212__auto___21414){
return (function (seq21413){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21413));
});})(action__21212__auto___21414))
;

var action__21212__auto___21426 = (function (params__21213__auto__){
if(cljs.core.map_QMARK_(params__21213__auto__)){
var map__21418 = params__21213__auto__;
var map__21418__$1 = ((((!((map__21418 == null)))?((((map__21418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21418):map__21418);
var G__21420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21420) : re_frame.core.dispatch.call(null,G__21420));
} else {
if(cljs.core.vector_QMARK_(params__21213__auto__)){
var vec__21421 = params__21213__auto__;
var G__21424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21424) : re_frame.core.dispatch.call(null,G__21424));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__21212__auto___21426);

warehouse.routes.processes = ((function (action__21212__auto___21426){
return (function warehouse$routes$processes(var_args){
var args__8146__auto__ = [];
var len__8139__auto___21427 = arguments.length;
var i__8140__auto___21428 = (0);
while(true){
if((i__8140__auto___21428 < len__8139__auto___21427)){
args__8146__auto__.push((arguments[i__8140__auto___21428]));

var G__21429 = (i__8140__auto___21428 + (1));
i__8140__auto___21428 = G__21429;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__21212__auto___21426))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21212__auto___21426){
return (function (args__21211__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__21211__auto__);
});})(action__21212__auto___21426))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__21212__auto___21426){
return (function (seq21425){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21425));
});})(action__21212__auto___21426))
;

