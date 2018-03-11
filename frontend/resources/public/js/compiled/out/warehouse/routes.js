// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18489__auto___18779 = (function (params__18490__auto__){
if(cljs.core.map_QMARK_(params__18490__auto__)){
var map__18771 = params__18490__auto__;
var map__18771__$1 = ((((!((map__18771 == null)))?(((((map__18771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18771):map__18771);
var G__18773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18773) : re_frame.core.dispatch.call(null,G__18773));
} else {
if(cljs.core.vector_QMARK_(params__18490__auto__)){
var vec__18774 = params__18490__auto__;
var G__18777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18777) : re_frame.core.dispatch.call(null,G__18777));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__18489__auto___18779);

warehouse.routes.homepage = ((function (action__18489__auto___18779){
return (function warehouse$routes$homepage(var_args){
var args__4500__auto__ = [];
var len__4497__auto___18780 = arguments.length;
var i__4498__auto___18781 = (0);
while(true){
if((i__4498__auto___18781 < len__4497__auto___18780)){
args__4500__auto__.push((arguments[i__4498__auto___18781]));

var G__18782 = (i__4498__auto___18781 + (1));
i__4498__auto___18781 = G__18782;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(action__18489__auto___18779))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18489__auto___18779){
return (function (args__18488__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__18488__auto__);
});})(action__18489__auto___18779))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__18489__auto___18779){
return (function (seq18778){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18778));
});})(action__18489__auto___18779))
;

var action__18489__auto___18791 = (function (params__18490__auto__){
if(cljs.core.map_QMARK_(params__18490__auto__)){
var map__18783 = params__18490__auto__;
var map__18783__$1 = ((((!((map__18783 == null)))?(((((map__18783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18783):map__18783);
var G__18785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18785) : re_frame.core.dispatch.call(null,G__18785));
} else {
if(cljs.core.vector_QMARK_(params__18490__auto__)){
var vec__18786 = params__18490__auto__;
var G__18789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18789) : re_frame.core.dispatch.call(null,G__18789));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__18489__auto___18791);

warehouse.routes.processes = ((function (action__18489__auto___18791){
return (function warehouse$routes$processes(var_args){
var args__4500__auto__ = [];
var len__4497__auto___18792 = arguments.length;
var i__4498__auto___18793 = (0);
while(true){
if((i__4498__auto___18793 < len__4497__auto___18792)){
args__4500__auto__.push((arguments[i__4498__auto___18793]));

var G__18794 = (i__4498__auto___18793 + (1));
i__4498__auto___18793 = G__18794;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});})(action__18489__auto___18791))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18489__auto___18791){
return (function (args__18488__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__18488__auto__);
});})(action__18489__auto___18791))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__18489__auto___18791){
return (function (seq18790){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18790));
});})(action__18489__auto___18791))
;

