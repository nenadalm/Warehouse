// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__19683__auto___19885 = (function (params__19684__auto__){
if(cljs.core.map_QMARK_(params__19684__auto__)){
var map__19877 = params__19684__auto__;
var map__19877__$1 = ((((!((map__19877 == null)))?((((map__19877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19877):map__19877);
var G__19879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19879) : re_frame.core.dispatch.call(null,G__19879));
} else {
if(cljs.core.vector_QMARK_(params__19684__auto__)){
var vec__19880 = params__19684__auto__;
var G__19883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19883) : re_frame.core.dispatch.call(null,G__19883));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__19683__auto___19885);

warehouse.routes.homepage = ((function (action__19683__auto___19885){
return (function warehouse$routes$homepage(var_args){
var args__7699__auto__ = [];
var len__7692__auto___19886 = arguments.length;
var i__7693__auto___19887 = (0);
while(true){
if((i__7693__auto___19887 < len__7692__auto___19886)){
args__7699__auto__.push((arguments[i__7693__auto___19887]));

var G__19888 = (i__7693__auto___19887 + (1));
i__7693__auto___19887 = G__19888;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__19683__auto___19885))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19683__auto___19885){
return (function (args__19682__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__19682__auto__);
});})(action__19683__auto___19885))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__19683__auto___19885){
return (function (seq19884){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19884));
});})(action__19683__auto___19885))
;

var action__19683__auto___19897 = (function (params__19684__auto__){
if(cljs.core.map_QMARK_(params__19684__auto__)){
var map__19889 = params__19684__auto__;
var map__19889__$1 = ((((!((map__19889 == null)))?((((map__19889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19889):map__19889);
var G__19891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19891) : re_frame.core.dispatch.call(null,G__19891));
} else {
if(cljs.core.vector_QMARK_(params__19684__auto__)){
var vec__19892 = params__19684__auto__;
var G__19895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19895) : re_frame.core.dispatch.call(null,G__19895));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__19683__auto___19897);

warehouse.routes.processes = ((function (action__19683__auto___19897){
return (function warehouse$routes$processes(var_args){
var args__7699__auto__ = [];
var len__7692__auto___19898 = arguments.length;
var i__7693__auto___19899 = (0);
while(true){
if((i__7693__auto___19899 < len__7692__auto___19898)){
args__7699__auto__.push((arguments[i__7693__auto___19899]));

var G__19900 = (i__7693__auto___19899 + (1));
i__7693__auto___19899 = G__19900;
continue;
} else {
}
break;
}

var argseq__7700__auto__ = ((((0) < args__7699__auto__.length))?(new cljs.core.IndexedSeq(args__7699__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__7700__auto__);
});})(action__19683__auto___19897))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__19683__auto___19897){
return (function (args__19682__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__19682__auto__);
});})(action__19683__auto___19897))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__19683__auto___19897){
return (function (seq19896){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19896));
});})(action__19683__auto___19897))
;

