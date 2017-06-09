// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__16416__auto___16618 = (function (params__16417__auto__){
if(cljs.core.map_QMARK_(params__16417__auto__)){
var map__16610 = params__16417__auto__;
var map__16610__$1 = ((((!((map__16610 == null)))?((((map__16610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16610):map__16610);
var G__16612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16612) : re_frame.core.dispatch.call(null,G__16612));
} else {
if(cljs.core.vector_QMARK_(params__16417__auto__)){
var vec__16613 = params__16417__auto__;
var G__16616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"index"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16616) : re_frame.core.dispatch.call(null,G__16616));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16416__auto___16618);

warehouse.routes.homepage = ((function (action__16416__auto___16618){
return (function warehouse$routes$homepage(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16619 = arguments.length;
var i__8140__auto___16620 = (0);
while(true){
if((i__8140__auto___16620 < len__8139__auto___16619)){
args__8146__auto__.push((arguments[i__8140__auto___16620]));

var G__16621 = (i__8140__auto___16620 + (1));
i__8140__auto___16620 = G__16621;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16416__auto___16618))
;

warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16416__auto___16618){
return (function (args__16415__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__16415__auto__);
});})(action__16416__auto___16618))
;

warehouse.routes.homepage.cljs$lang$maxFixedArity = (0);

warehouse.routes.homepage.cljs$lang$applyTo = ((function (action__16416__auto___16618){
return (function (seq16617){
return warehouse.routes.homepage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16617));
});})(action__16416__auto___16618))
;

var action__16416__auto___16630 = (function (params__16417__auto__){
if(cljs.core.map_QMARK_(params__16417__auto__)){
var map__16622 = params__16417__auto__;
var map__16622__$1 = ((((!((map__16622 == null)))?((((map__16622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16622):map__16622);
var G__16624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16624) : re_frame.core.dispatch.call(null,G__16624));
} else {
if(cljs.core.vector_QMARK_(params__16417__auto__)){
var vec__16625 = params__16417__auto__;
var G__16628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_change,"processes"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16628) : re_frame.core.dispatch.call(null,G__16628));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/processes",action__16416__auto___16630);

warehouse.routes.processes = ((function (action__16416__auto___16630){
return (function warehouse$routes$processes(var_args){
var args__8146__auto__ = [];
var len__8139__auto___16631 = arguments.length;
var i__8140__auto___16632 = (0);
while(true){
if((i__8140__auto___16632 < len__8139__auto___16631)){
args__8146__auto__.push((arguments[i__8140__auto___16632]));

var G__16633 = (i__8140__auto___16632 + (1));
i__8140__auto___16632 = G__16633;
continue;
} else {
}
break;
}

var argseq__8147__auto__ = ((((0) < args__8146__auto__.length))?(new cljs.core.IndexedSeq(args__8146__auto__.slice((0)),(0),null)):null);
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(argseq__8147__auto__);
});})(action__16416__auto___16630))
;

warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic = ((function (action__16416__auto___16630){
return (function (args__16415__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/processes",args__16415__auto__);
});})(action__16416__auto___16630))
;

warehouse.routes.processes.cljs$lang$maxFixedArity = (0);

warehouse.routes.processes.cljs$lang$applyTo = ((function (action__16416__auto___16630){
return (function (seq16629){
return warehouse.routes.processes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16629));
});})(action__16416__auto___16630))
;

