// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__30285__auto___30487 = (function (params__30286__auto__){
if(cljs.core.map_QMARK_(params__30286__auto__)){
var map__30479 = params__30286__auto__;
var map__30479__$1 = ((((!((map__30479 == null)))?((((map__30479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30479):map__30479);
var G__30481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30481) : re_frame.core.dispatch.call(null,G__30481));
} else {
if(cljs.core.vector_QMARK_(params__30286__auto__)){
var vec__30482 = params__30286__auto__;
var G__30485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30485) : re_frame.core.dispatch.call(null,G__30485));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__30285__auto___30487);

warehouse.routes.homepage = ((function (action__30285__auto___30487){
return (function warehouse$routes$homepage(var_args){
var args__7699__auto__ = [];
var len__7692__auto___30488 = arguments.length;
var i__7693__auto___30489 = (0);
while(true){
if((i__7693__auto___30489 < len__7692__auto___30488)){
args__7699__auto__.push((arguments[i__7693__auto___30489]));

var G__30490 = (i__7693__auto___30489 + (1));
i__7693__auto___30489 = G__30490;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__30285__auto___30487))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__30285__auto___30487){
return (function (args__30284__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__30284__auto__);
});})(action__30285__auto___30487))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__30285__auto___30487){
return (function (seq30486){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30486));
});})(action__30285__auto___30487))
;

var action__30285__auto___30499 = (function (params__30286__auto__){
if(cljs.core.map_QMARK_(params__30286__auto__)){
var map__30491 = params__30286__auto__;
var map__30491__$1 = ((((!((map__30491 == null)))?((((map__30491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30491):map__30491);
var G__30493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30493) : re_frame.core.dispatch.call(null,G__30493));
} else {
if(cljs.core.vector_QMARK_(params__30286__auto__)){
var vec__30494 = params__30286__auto__;
var G__30497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30497) : re_frame.core.dispatch.call(null,G__30497));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__30285__auto___30499);

warehouse.routes.processes = ((function (action__30285__auto___30499){
return (function warehouse$routes$processes(var_args){
var args__7699__auto__ = [];
var len__7692__auto___30500 = arguments.length;
var i__7693__auto___30501 = (0);
while(true){
if((i__7693__auto___30501 < len__7692__auto___30500)){
args__7699__auto__.push((arguments[i__7693__auto___30501]));

var G__30502 = (i__7693__auto___30501 + (1));
i__7693__auto___30501 = G__30502;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__30285__auto___30499))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__30285__auto___30499){
return (function (args__30284__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__30284__auto__);
});})(action__30285__auto___30499))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__30285__auto___30499){
return (function (seq30498){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30498));
});})(action__30285__auto___30499))
;

