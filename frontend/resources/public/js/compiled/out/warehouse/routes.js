// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__16424__auto___16626 = (function (params__16425__auto__){
if(cljs.core.map_QMARK_(params__16425__auto__)){
var map__16618 = params__16425__auto__;
var map__16618__$1 = ((((!((map__16618 == null)))?((((map__16618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16618):map__16618);
var G__16620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16620) : re_frame.core.dispatch.call(null,G__16620));
} else {
if(cljs.core.vector_QMARK_(params__16425__auto__)){
var vec__16621 = params__16425__auto__;
var G__16624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16624) : re_frame.core.dispatch.call(null,G__16624));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16424__auto___16626);

warehouse.routes.homepage = ((function (action__16424__auto___16626){
return (function warehouse$routes$homepage(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16627 = arguments.length;
var i__8140__auto___16628 = (0);
while(true){
if((i__8140__auto___16628 < len__8139__auto___16627)){
args__8146__auto__.push((arguments[i__8140__auto___16628]));

var G__16629 = (i__8140__auto___16628 + (1));
i__8140__auto___16628 = G__16629;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16424__auto___16626))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16424__auto___16626){
return (function (args__16423__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__16423__auto__);
});})(action__16424__auto___16626))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__16424__auto___16626){
return (function (seq16625){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16625));
});})(action__16424__auto___16626))
;

var action__16424__auto___16638 = (function (params__16425__auto__){
if(cljs.core.map_QMARK_(params__16425__auto__)){
var map__16630 = params__16425__auto__;
var map__16630__$1 = ((((!((map__16630 == null)))?((((map__16630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16630):map__16630);
var G__16632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16632) : re_frame.core.dispatch.call(null,G__16632));
} else {
if(cljs.core.vector_QMARK_(params__16425__auto__)){
var vec__16633 = params__16425__auto__;
var G__16636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16636) : re_frame.core.dispatch.call(null,G__16636));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__16424__auto___16638);

warehouse.routes.processes = ((function (action__16424__auto___16638){
return (function warehouse$routes$processes(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16639 = arguments.length;
var i__8140__auto___16640 = (0);
while(true){
if((i__8140__auto___16640 < len__8139__auto___16639)){
args__8146__auto__.push((arguments[i__8140__auto___16640]));

var G__16641 = (i__8140__auto___16640 + (1));
i__8140__auto___16640 = G__16641;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16424__auto___16638))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16424__auto___16638){
return (function (args__16423__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__16423__auto__);
});})(action__16424__auto___16638))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__16424__auto___16638){
return (function (seq16637){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16637));
});})(action__16424__auto___16638))
;

