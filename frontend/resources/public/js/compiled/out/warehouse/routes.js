// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__19440__auto___19730 = (function (params__19441__auto__){
if(cljs.core.map_QMARK_(params__19441__auto__)){
var map__19722 = params__19441__auto__;
var map__19722__$1 = ((((!((map__19722 == null)))?(((((map__19722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19722):map__19722);
var G__19724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19724) : re_frame.core.dispatch.call(null,G__19724));
} else {
if(cljs.core.vector_QMARK_(params__19441__auto__)){
var vec__19725 = params__19441__auto__;
var G__19728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19728) : re_frame.core.dispatch.call(null,G__19728));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__19440__auto___19730);

warehouse.routes.homepage = ((function (action__19440__auto___19730){
return (function warehouse$routes$homepage(var_args){
var args__4500__auto__ = [];
var len__4497__auto___19731 = arguments.length;
var i__4498__auto___19732 = (0);
while(true){
if((i__4498__auto___19732 < len__4497__auto___19731)){
args__4500__auto__.push((arguments[i__4498__auto___19732]));

var G__19733 = (i__4498__auto___19732 + (1));
i__4498__auto___19732 = G__19733;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(action__19440__auto___19730))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19440__auto___19730){
return (function (args__19439__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__19439__auto__);
});})(action__19440__auto___19730))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__19440__auto___19730){
return (function (seq19729){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19729));
});})(action__19440__auto___19730))
;

var action__19440__auto___19742 = (function (params__19441__auto__){
if(cljs.core.map_QMARK_(params__19441__auto__)){
var map__19734 = params__19441__auto__;
var map__19734__$1 = ((((!((map__19734 == null)))?(((((map__19734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19734):map__19734);
var G__19736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19736) : re_frame.core.dispatch.call(null,G__19736));
} else {
if(cljs.core.vector_QMARK_(params__19441__auto__)){
var vec__19737 = params__19441__auto__;
var G__19740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19740) : re_frame.core.dispatch.call(null,G__19740));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__19440__auto___19742);

warehouse.routes.processes = ((function (action__19440__auto___19742){
return (function warehouse$routes$processes(var_args){
var args__4500__auto__ = [];
var len__4497__auto___19743 = arguments.length;
var i__4498__auto___19744 = (0);
while(true){
if((i__4498__auto___19744 < len__4497__auto___19743)){
args__4500__auto__.push((arguments[i__4498__auto___19744]));

var G__19745 = (i__4498__auto___19744 + (1));
i__4498__auto___19744 = G__19745;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(action__19440__auto___19742))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19440__auto___19742){
return (function (args__19439__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__19439__auto__);
});})(action__19440__auto___19742))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__19440__auto___19742){
return (function (seq19741){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19741));
});})(action__19440__auto___19742))
;

