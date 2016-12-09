// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__30207__auto___30409 = (function (params__30208__auto__){
if(cljs.core.map_QMARK_(params__30208__auto__)){
var map__30401 = params__30208__auto__;
var map__30401__$1 = ((((!((map__30401 == null)))?((((map__30401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30401):map__30401);
var G__30403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30403) : re_frame.core.dispatch.call(null,G__30403));
} else {
if(cljs.core.vector_QMARK_(params__30208__auto__)){
var vec__30404 = params__30208__auto__;
var G__30407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30407) : re_frame.core.dispatch.call(null,G__30407));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__30207__auto___30409);

warehouse.routes.homepage = ((function (action__30207__auto___30409){
return (function warehouse$routes$homepage(var_args){
var args__7699__auto__ = [];
var len__7692__auto___30410 = arguments.length;
var i__7693__auto___30411 = (0);
while(true){
if((i__7693__auto___30411 < len__7692__auto___30410)){
args__7699__auto__.push((arguments[i__7693__auto___30411]));

var G__30412 = (i__7693__auto___30411 + (1));
i__7693__auto___30411 = G__30412;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__30207__auto___30409))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__30207__auto___30409){
return (function (args__30206__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__30206__auto__);
});})(action__30207__auto___30409))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__30207__auto___30409){
return (function (seq30408){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30408));
});})(action__30207__auto___30409))
;

var action__30207__auto___30421 = (function (params__30208__auto__){
if(cljs.core.map_QMARK_(params__30208__auto__)){
var map__30413 = params__30208__auto__;
var map__30413__$1 = ((((!((map__30413 == null)))?((((map__30413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30413):map__30413);
var G__30415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30415) : re_frame.core.dispatch.call(null,G__30415));
} else {
if(cljs.core.vector_QMARK_(params__30208__auto__)){
var vec__30416 = params__30208__auto__;
var G__30419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30419) : re_frame.core.dispatch.call(null,G__30419));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__30207__auto___30421);

warehouse.routes.processes = ((function (action__30207__auto___30421){
return (function warehouse$routes$processes(var_args){
var args__7699__auto__ = [];
var len__7692__auto___30422 = arguments.length;
var i__7693__auto___30423 = (0);
while(true){
if((i__7693__auto___30423 < len__7692__auto___30422)){
args__7699__auto__.push((arguments[i__7693__auto___30423]));

var G__30424 = (i__7693__auto___30423 + (1));
i__7693__auto___30423 = G__30424;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__30207__auto___30421))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__30207__auto___30421){
return (function (args__30206__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__30206__auto__);
});})(action__30207__auto___30421))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__30207__auto___30421){
return (function (seq30420){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30420));
});})(action__30207__auto___30421))
;

