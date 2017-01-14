// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__30283__auto___30485 = (function (params__30284__auto__){
if(cljs.core.map_QMARK_(params__30284__auto__)){
var map__30477 = params__30284__auto__;
var map__30477__$1 = ((((!((map__30477 == null)))?((((map__30477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30477):map__30477);
var G__30479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30479) : re_frame.core.dispatch.call(null,G__30479));
} else {
if(cljs.core.vector_QMARK_(params__30284__auto__)){
var vec__30480 = params__30284__auto__;
var G__30483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30483) : re_frame.core.dispatch.call(null,G__30483));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__30283__auto___30485);

warehouse.routes.homepage = ((function (action__30283__auto___30485){
return (function warehouse$routes$homepage(var_args){
var args__7699__auto__ = [];
var len__7692__auto___30486 = arguments.length;
var i__7693__auto___30487 = (0);
while(true){
if((i__7693__auto___30487 < len__7692__auto___30486)){
args__7699__auto__.push((arguments[i__7693__auto___30487]));

var G__30488 = (i__7693__auto___30487 + (1));
i__7693__auto___30487 = G__30488;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__30283__auto___30485))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__30283__auto___30485){
return (function (args__30282__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__30282__auto__);
});})(action__30283__auto___30485))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__30283__auto___30485){
return (function (seq30484){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30484));
});})(action__30283__auto___30485))
;

var action__30283__auto___30497 = (function (params__30284__auto__){
if(cljs.core.map_QMARK_(params__30284__auto__)){
var map__30489 = params__30284__auto__;
var map__30489__$1 = ((((!((map__30489 == null)))?((((map__30489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30489):map__30489);
var G__30491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30491) : re_frame.core.dispatch.call(null,G__30491));
} else {
if(cljs.core.vector_QMARK_(params__30284__auto__)){
var vec__30492 = params__30284__auto__;
var G__30495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30495) : re_frame.core.dispatch.call(null,G__30495));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__30283__auto___30497);

warehouse.routes.processes = ((function (action__30283__auto___30497){
return (function warehouse$routes$processes(var_args){
var args__7699__auto__ = [];
var len__7692__auto___30498 = arguments.length;
var i__7693__auto___30499 = (0);
while(true){
if((i__7693__auto___30499 < len__7692__auto___30498)){
args__7699__auto__.push((arguments[i__7693__auto___30499]));

var G__30500 = (i__7693__auto___30499 + (1));
i__7693__auto___30499 = G__30500;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__30283__auto___30497))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__30283__auto___30497){
return (function (args__30282__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__30282__auto__);
});})(action__30283__auto___30497))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__30283__auto___30497){
return (function (seq30496){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30496));
});})(action__30283__auto___30497))
;

