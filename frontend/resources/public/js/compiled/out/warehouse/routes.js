// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__16426__auto___16628 = (function (params__16427__auto__){
if(cljs.core.map_QMARK_(params__16427__auto__)){
var map__16620 = params__16427__auto__;
var map__16620__$1 = ((((!((map__16620 == null)))?((((map__16620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16620):map__16620);
var G__16622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16622) : re_frame.core.dispatch.call(null,G__16622));
} else {
if(cljs.core.vector_QMARK_(params__16427__auto__)){
var vec__16623 = params__16427__auto__;
var G__16626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16626) : re_frame.core.dispatch.call(null,G__16626));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16426__auto___16628);

warehouse.routes.homepage = ((function (action__16426__auto___16628){
return (function warehouse$routes$homepage(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16629 = arguments.length;
var i__8140__auto___16630 = (0);
while(true){
if((i__8140__auto___16630 < len__8139__auto___16629)){
args__8146__auto__.push((arguments[i__8140__auto___16630]));

var G__16631 = (i__8140__auto___16630 + (1));
i__8140__auto___16630 = G__16631;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16426__auto___16628))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16426__auto___16628){
return (function (args__16425__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__16425__auto__);
});})(action__16426__auto___16628))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__16426__auto___16628){
return (function (seq16627){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16627));
});})(action__16426__auto___16628))
;

var action__16426__auto___16640 = (function (params__16427__auto__){
if(cljs.core.map_QMARK_(params__16427__auto__)){
var map__16632 = params__16427__auto__;
var map__16632__$1 = ((((!((map__16632 == null)))?((((map__16632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16632):map__16632);
var G__16634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16634) : re_frame.core.dispatch.call(null,G__16634));
} else {
if(cljs.core.vector_QMARK_(params__16427__auto__)){
var vec__16635 = params__16427__auto__;
var G__16638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16638) : re_frame.core.dispatch.call(null,G__16638));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__16426__auto___16640);

warehouse.routes.processes = ((function (action__16426__auto___16640){
return (function warehouse$routes$processes(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16641 = arguments.length;
var i__8140__auto___16642 = (0);
while(true){
if((i__8140__auto___16642 < len__8139__auto___16641)){
args__8146__auto__.push((arguments[i__8140__auto___16642]));

var G__16643 = (i__8140__auto___16642 + (1));
i__8140__auto___16642 = G__16643;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16426__auto___16640))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16426__auto___16640){
return (function (args__16425__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__16425__auto__);
});})(action__16426__auto___16640))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__16426__auto___16640){
return (function (seq16639){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16639));
});})(action__16426__auto___16640))
;

